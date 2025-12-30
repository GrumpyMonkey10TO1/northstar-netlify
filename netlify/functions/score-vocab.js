import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function handler(event) {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    const { word, meaning, sentence } = JSON.parse(event.body || "{}");

    if (!word || !sentence) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ ok: false, error: "Missing word or sentence" })
      };
    }

    const prompt = `You are a strict IELTS and CELPIP vocabulary coach.

Evaluate if the user correctly used the target word in their sentence.

Check:
1. Correct meaning/context
2. Correct grammar
3. Natural collocation

Word: ${word}
Meaning: ${meaning || "Not provided"}
User's sentence: ${sentence}

Return ONLY valid JSON:
{
  "ok": true,
  "pass": true or false,
  "feedback": "short actionable feedback",
  "correctedSentence": "corrected version if needed, empty string if correct",
  "betterExample": "a stronger example sentence using the word"
}

Be strict but fair. Keep feedback concise and practical.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(completion.choices[0].message.content);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result)
    };

  } catch (error) {
    console.error("Vocab scoring error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        ok: false, 
        error: "Vocabulary evaluation failed" 
      })
    };
  }
}
