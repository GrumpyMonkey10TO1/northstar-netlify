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
    const { answer } = JSON.parse(event.body || "{}");

    if (!answer) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing answer" })
      };
    }

    const prompt = `You are an IELTS/CELPIP writing improvement expert.

Improve this response by approximately +0.5 band score.

Focus on:
1. Grammar corrections
2. Vocabulary upgrades (use stronger, more academic words)
3. Better sentence structure and cohesion
4. Clearer argument flow

Original Response:
${answer}

Return:
1. The improved version (same position/argument, just better written)
2. A bullet list of the 3-5 main changes you made

Format as:
**Improved Version:**
[improved text]

**Key Changes:**
- [change 1]
- [change 2]
- [change 3]`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    });

    const result = completion.choices[0].message.content;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ result })
    };

  } catch (error) {
    console.error("Refine error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Refinement failed" })
    };
  }
}
