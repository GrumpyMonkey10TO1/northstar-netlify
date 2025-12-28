import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

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

    const wordCount = answer.trim().split(/\s+/).filter(w => w.length > 0).length;
    console.log("Scoring request:", { email, testId, wordCount });

    const scoringPrompt = `You are an expert IELTS/CELPIP writing examiner. Score this essay on 4 criteria using IELTS band descriptors (0-9 scale, half bands allowed like 6.5, 7.5).

ESSAY PROMPT:
${prompt}

STUDENT'S RESPONSE (${wordCount} words):
${answer}

Provide scores and detailed feedback in this exact JSON format:
{
  "scores": {
    "task": 6.5,
    "coherence": 6.0,
    "lexical": 6.5,
    "grammar": 6.0,
    "overall": 6.5
  },
  "feedback": {
    "task": "Brief feedback on task achievement...",
    "coherence": "Brief feedback on coherence and cohesion...",
    "lexical": "Brief feedback on vocabulary usage...",
    "grammar": "Brief feedback on grammar accuracy..."
  },
  "strengths": ["strength 1", "strength 2", "strength 3"],
  "improvements": ["area to improve 1", "area to improve 2", "area to improve 3"],
  "next_focus": "The single most important thing to practice next",
  "band_summary": "One sentence summary of the overall performance"
}

Respond ONLY with valid JSON, no additional text.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an expert IELTS examiner. Always respond with valid JSON only." },
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
