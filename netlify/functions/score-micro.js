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
    const { prompt, rubric, answer } = JSON.parse(event.body || "{}");

    if (!prompt || !answer) {
      return { 
        statusCode: 400, 
        headers,
        body: JSON.stringify({ ok: false, error: "Missing prompt or answer." }) 
      };
    }

    const system = `You are an IELTS and CELPIP micro-drill evaluator.
Return strict JSON only.
Decide if the user's answer meets the goal.
Be strict but fair.
Return:
{
  "ok": true,
  "correct": true,
  "feedback": "short actionable feedback",
  "modelAnswer": "a strong sample answer"
}
Keep feedback brief and practical.`;

    const user = `PROMPT:\n${prompt}\n\nRUBRIC:\n${rubric || "Use IELTS/CELPIP standards for clarity and accuracy."}\n\nUSER ANSWER:\n${answer}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.2,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ]
    });

    const raw = completion.choices?.[0]?.message?.content || "";
    let parsed;
    try { 
      parsed = JSON.parse(raw); 
    } catch {
      return { 
        statusCode: 200, 
        headers,
        body: JSON.stringify({ ok: false, error: "Model did not return valid JSON." }) 
      };
    }

    return { 
      statusCode: 200, 
      headers,
      body: JSON.stringify(parsed) 
    };
  } catch (error) {
    console.error("Micro scoring error:", error);
    return { 
      statusCode: 500, 
      headers,
      body: JSON.stringify({ ok: false, error: "Server error scoring micro drill." }) 
    };
  }
}
