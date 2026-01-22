import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Strip meta-comments about band levels to prevent prompt injection
function cleanEssayText(text) {
  return text
    .replace(/here is a band \d[^.]*\./gi, '')
    .replace(/this is a band \d[^.]*\./gi, '')
    .replace(/this is (roughly|approximately|about) band \d[^.]*\./gi, '')
    .replace(/band \d[\-–]\d level[^.]*\./gi, '')
    .replace(/band \d\+? (level )?(response|essay|answer)[^.]*\./gi, '')
    .replace(/deliberately weak[^.]*\./gi, '')
    .replace(/failing[- ]level[^.]*\./gi, '')
    .replace(/^\s*below is[^.]*\.\s*/gi, '')
    .trim();
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  try {
    const { email, testId, prompt, answer, timeSpent, meta } = JSON.parse(event.body || "{}");

    if (!email || !testId || !prompt || !answer) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Missing required fields" })
      };
    }

    // Clean the essay to remove any band-level claims
    const cleanedAnswer = cleanEssayText(answer);
    const wordCount = cleanedAnswer.trim().split(/\s+/).filter(w => w.length > 0).length;
    console.log("Scoring request:", { email, testId, wordCount });

    const scoringPrompt = `You are an IELTS Writing Task 2 examiner.

ESSAY PROMPT:
${prompt}

STUDENT'S RESPONSE (${wordCount} words):
${cleanedAnswer}

MANDATORY SCORING PROCESS:
1. First decide which IELTS band descriptor (5, 6, 7, 8, or 9) the essay MOST closely matches for EACH criterion
2. Only after selecting the descriptor, assign the numerical score
3. Do NOT default to 6.0 or 6.5 - use the FULL range (5.0 to 8.5)

LEXICAL RESOURCE RULES:
- Judge based on PRECISION and APPROPRIATENESS, not rarity
- Reward controlled academic vocabulary and natural collocations
- Do NOT penalize common academic words if accurate and natural
- Basic repetitive vocabulary (good/bad/very/many) = Band 5.0-5.5
- Sophisticated controlled vocabulary = Band 7.0-8.0
- If essay shows Band 7-8 lexical CONTROL, you MUST NOT assign Band 5-6

BAND DESCRIPTORS:
- Band 8-9: Sophisticated, precise vocabulary, rare errors, natural collocations, fully developed
- Band 7: Good range, occasional errors, effective word choice, well-organized
- Band 6: Adequate range, some errors, generally appropriate
- Band 5: LIMITED range, REPETITIVE, basic vocabulary, underdeveloped

Return ONLY this JSON (replace NUMBER with your actual scores):
{
  "scores": {
    "task": NUMBER,
    "coherence": NUMBER,
    "lexical": NUMBER,
    "grammar": NUMBER,
    "overall": NUMBER
  },
  "feedback": {
    "task": "one sentence",
    "coherence": "one sentence",
    "lexical": "one sentence",
    "grammar": "one sentence"
  },
  "strengths": ["strength 1", "strength 2"],
  "improvements": ["improvement 1", "improvement 2"],
  "next_focus": "single most important thing to practice",
  "band_summary": "one sentence overall summary"
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a strict IELTS examiner. Score accurately using the full band range. Respond with valid JSON only." },
        { role: "user", content: scoringPrompt }
      ],
      temperature: 0.3,
      max_tokens: 1000
    });

    let result;
    try {
      const responseText = completion.choices[0].message.content.trim();
      const jsonText = responseText.replace(/```json\n?|\n?```/g, '').trim();
      result = JSON.parse(jsonText);
    } catch (parseError) {
      console.error("Failed to parse OpenAI response:", completion.choices[0].message.content);
      result = {
        scores: { task: 5.5, coherence: 5.5, lexical: 5.5, grammar: 5.5, overall: 5.5 },
        feedback: { task: "Unable to fully analyze.", coherence: "Pending.", lexical: "Pending.", grammar: "Pending." },
        strengths: ["Attempted the task"],
        improvements: ["Try again for full feedback"],
        next_focus: "Resubmit for complete analysis",
        band_summary: "Provisional score"
      };
    }

    result.wordCount = wordCount;
    result.timeSpent = timeSpent || 0;
    result.testId = testId;

    try {
      await supabase.from("user_test_results").insert({
        email: email.toLowerCase(),
        product: "evolve",
        test_id: testId,
        test_type: meta?.type || "writing",
        level: meta?.level || null,
        overall: result.scores?.overall ?? null,
        task: result.scores?.task ?? null,
        coherence: result.scores?.coherence ?? null,
        lexical: result.scores?.lexical ?? null,
        grammar: result.scores?.grammar ?? null,
        feedback: result,
        answer: answer
      });
      console.log("Result saved to database");
    } catch (dbError) {
      console.log("Database save skipped:", dbError.message);
    }

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(result)
    };

  } catch (err) {
    console.error("Scoring error:", err.message);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Scoring failed: " + err.message })
    };
  }
}
