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

    // Official IELTS Band Descriptors embedded in prompt
    const scoringPrompt = `You are an IELTS Writing Task 2 examiner using the OFFICIAL British Council band descriptors.

ESSAY PROMPT: ${prompt}

STUDENT'S ESSAY (${wordCount} words):
${cleanedAnswer}

=== OFFICIAL IELTS TASK 2 BAND DESCRIPTORS ===

**TASK RESPONSE:**
Band 8: Appropriately and sufficiently addressed. Clear well-developed position. Ideas relevant, well extended and supported. Occasional omissions.
Band 7: Main parts appropriately addressed. Clear developed position. May over-generalise or lack focus/precision in supporting ideas.
Band 6: Main parts addressed (some more fully than others). Position relevant but conclusions may be unclear, unjustified or repetitive. Some ideas insufficiently developed or lack clarity.
Band 5: Main parts incompletely addressed. Position not always clear. Ideas limited, not sufficiently developed, may have irrelevant detail or repetition.

**COHERENCE & COHESION:**
Band 8: Message followed with ease. Logically sequenced, cohesion well managed. Paragraphing sufficient and appropriate.
Band 7: Logically organised with clear progression. Range of cohesive devices used flexibly but with some inaccuracies. Paragraphing generally effective.
Band 6: Generally coherent with clear overall progression. Cohesion may be faulty or mechanical. Paragraphing may not always be logical.
Band 5: Organisation evident but not wholly logical. Sentences not fluently linked. Writing may be repetitive. Paragraphing may be inadequate.

**LEXICAL RESOURCE:**
Band 8: Wide resource fluently and flexibly used for precise meanings. Skilful use of uncommon/idiomatic items. Occasional errors minimal impact.
Band 7: Sufficient flexibility and precision. Some less common/idiomatic items. Awareness of style and collocation. Few errors don't detract from clarity.
Band 6: Generally adequate and appropriate. Restricted range OR lack of precision. Some errors don't impede communication.
Band 5: Limited but minimally adequate. Simple vocabulary, range doesn't permit variation. Frequent lapses in word choice. Errors may cause difficulty.

**GRAMMATICAL RANGE & ACCURACY:**
Band 8: Wide range flexibly and accurately used. Majority of sentences error-free. Punctuation well managed.
Band 7: Variety of complex structures with some flexibility and accuracy. Generally well controlled. Few errors don't impede.
Band 6: Mix of simple and complex but flexibility limited. Complex structures less accurate than simple. Errors rarely impede.
Band 5: Limited and repetitive structures. Complex sentences tend to be faulty. Greatest accuracy on simple sentences. Errors may cause difficulty.

=== SCORING INSTRUCTIONS ===

STEP 1: For EACH criterion, identify which band descriptor (5, 6, 7, or 8) the essay BEST matches.
STEP 2: Only AFTER matching to a descriptor, assign the score (can use .5 increments).
STEP 3: Calculate overall as the average, rounded to nearest 0.5.

CRITICAL RULES:
- Band 5 essays: Basic/repetitive vocabulary (good, bad, very, many, some people), simple sentences, ideas underdeveloped
- Band 6 essays: Adequate vocabulary but restricted, position present but may be unclear, mix of sentence types
- Band 7 essays: Good vocabulary with some less common items, clear position, varied complex structures
- Band 8 essays: Sophisticated vocabulary, precise meanings, wide range of accurate complex structures

Return ONLY this JSON:
{
  "analysis": {
    "task": "Which band descriptor matches and why (1 sentence)",
    "coherence": "Which band descriptor matches and why (1 sentence)",
    "lexical": "Which band descriptor matches and why (1 sentence)",
    "grammar": "Which band descriptor matches and why (1 sentence)"
  },
  "scores": {
    "task": 0.0,
    "coherence": 0.0,
    "lexical": 0.0,
    "grammar": 0.0,
    "overall": 0.0
  },
  "feedback": {
    "task": "one sentence feedback",
    "coherence": "one sentence feedback",
    "lexical": "one sentence feedback",
    "grammar": "one sentence feedback"
  },
  "strengths": ["strength 1", "strength 2"],
  "improvements": ["specific improvement 1", "specific improvement 2"],
  "next_focus": "single most important thing to practice",
  "band_summary": "one sentence overall assessment"
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
          role: "system", 
          content: "You are a certified IELTS examiner. You MUST match essays to band descriptors FIRST, then assign scores. Use the FULL range 5.0-8.0. Do NOT default to 6.0-6.5. Respond with valid JSON only." 
        },
        { role: "user", content: scoringPrompt }
      ],
      temperature: 0.2,
      max_tokens: 1200
    });

    let result;
    try {
      const responseText = completion.choices[0].message.content.trim();
      const jsonText = responseText.replace(/```json\n?|\n?```/g, '').trim();
      result = JSON.parse(jsonText);
      
      // Flatten scores if nested
      if (result.scores) {
        result.task = result.scores.task;
        result.coherence = result.scores.coherence;
        result.lexical = result.scores.lexical;
        result.grammar = result.scores.grammar;
        result.overall = result.scores.overall;
      }
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
        overall: result.scores?.overall ?? result.overall ?? null,
        task: result.scores?.task ?? result.task ?? null,
        coherence: result.scores?.coherence ?? result.coherence ?? null,
        lexical: result.scores?.lexical ?? result.lexical ?? null,
        grammar: result.scores?.grammar ?? result.grammar ?? null,
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
