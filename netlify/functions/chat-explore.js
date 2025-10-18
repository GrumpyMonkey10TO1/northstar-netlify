// netlify/functions/chat-explore.js
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ✅ Proper Netlify Function format
export const handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: "ok",
    };
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

    // --- RCIC System Prompt ---
    const systemPrompt = `
You are North Star GPS, an AI immigration and IELTS assistant for Migrate North Academy.
You provide accurate, calm, and professional guidance about Express Entry, CRS scoring,
ECA, IELTS, and settlement. You speak like a licensed consultant (RCIC #R712582),
clear, factual, and neutral — not promotional. Avoid phrases like “TShow more” or “EShow more”.
    `.trim();

    // --- OpenAI Call ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 900,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    let fullReply = completion.choices?.[0]?.message?.content?.trim() || "";

    // ✅ Clean unwanted debug artifacts
    fullReply = fullReply.replace(/^[TE]Show more[^\w]*/gi, "").trim();

    // ✅ Sentence-safe chunking (splits only after ., ?, or !)
    const chunks = [];
    const sentences = fullReply.split(/(?<=[.!?])\s+/);
    let current = "";

    for (const sentence of sentences) {
      if ((current + " " + sentence).length > 600) {
        chunks.push(current.trim());
        current = sentence;
      } else {
        current += " " + sentence;
      }
    }
    if (current.trim().length > 0) chunks.push(current.trim());

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

// ✅ Centralized CORS headers for frontend compatibility
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };
}
