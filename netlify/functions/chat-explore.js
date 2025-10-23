// === NORTH STAR GPS – EXPLORE BACKEND FUNCTION (FINAL FIXED VERSION) ===
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
  // --- Allow CORS preflight ---
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(), body: "OK" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const userMessage = (body.message || "").trim();

    if (!userMessage) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing message" }),
      };
    }

    const systemPrompt = `
You are North Star GPS, an AI immigration and IELTS assistant for Migrate North Academy.
You provide accurate, calm, and professional explanations about Canadian immigration, IELTS, and settlement.
Always be factual, avoid filler phrases, and explain concepts in clear everyday English.
    `.trim();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 900,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    const reply = completion.choices?.[0]?.message?.content?.trim() || "No response.";

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({ reply }), // ← FIXED KEY
    };
  } catch (err) {
    console.error("❌ Explore bot error:", err);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: err.message }),
    };
  }
};

// --- Helper: CORS headers ---
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}
