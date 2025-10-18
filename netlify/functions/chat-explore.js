// netlify/functions/chat-explore.js
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(), body: "ok" };
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
    const userMessage = body.message?.trim();
    if (!userMessage) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing message" }),
      };
    }

    // --- SYSTEM PROMPT ---
    const systemPrompt = `
You are North Star GPS, the official AI guide of Migrate North Academy.
You assist users on immigration and IELTS matters with accuracy, clarity, and professionalism.
Your responses are factual, concise, and written in clear English.
Do not use filler phrases like "Show more", "TShow more", or "---".
`.trim();

    // --- CALL OPENAI ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 2000,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    // --- CLEAN RAW REPLY ---
    let fullReply = completion.choices?.[0]?.message?.content?.trim() || "";

    // Remove any garbage prefixes like “TShow more”, “Show more —”, or similar artifacts
    fullReply = fullReply
      .replace(/^T?Show\s*more[—:\-]*/gi, "")
      .replace(/^["'\-\s]+|["'\-\s]+$/g, "")
      .replace(/\s{2,}/g, " ")
      .trim();

    // --- SPLIT LONG REPLIES INTO CHUNKS ---
    const chunks = [];
    const sentences = fullReply.split(/(?<=[.!?])\s+/);
    let current = "";

    for (const sentence of sentences) {
      if ((current + " " + sentence).length > 700) {
        chunks.push(current.trim());
        current = sentence;
      } else {
        current += " " + sentence;
      }
    }
    if (current.trim()) chunks.push(current.trim());

    const first = chunks.shift() || "No reply received.";
    const remaining = chunks;

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({ reply: first, remaining }),
    };
  } catch (err) {
    console.error("❌ Explore bot error:", err);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ reply: `Server error: ${err.message}` }),
    };
  }
};

// --- CORS HEADERS ---
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };
}
