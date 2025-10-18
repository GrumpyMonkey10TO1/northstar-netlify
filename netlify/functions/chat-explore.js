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
You provide factual, professional, and encouraging answers about immigration and IELTS.
Respond clearly, conversationally, and never include phrases like “TShow more”, “EShow more”, “Show more”, or any token artifacts.
Keep your tone calm, helpful, and complete your explanations naturally.
`.trim();

    // --- OPENAI CALL ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 2000,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    let fullReply = completion.choices?.[0]?.message?.content?.trim() || "";

    // ✅ STRONG SANITATION FIX — removes “TShow more”, “EShow more”, “Show more”, etc., anywhere in text
    fullReply = fullReply
      .replace(/\b[TE]?Show\s*more[—:\-\s]*/gi, "") // remove TShow more, EShow more, etc.
      .replace(/—+/g, " ") // remove stray em dashes or artifacts
      .replace(/\s{2,}/g, " ") // compress double spaces
      .replace(/^[\-\s]+|[\-\s]+$/g, "") // trim leftover punctuation
      .trim();

    // --- SPLIT INTO CHUNKS FOR CONTINUATION ---
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

// --- CORS ---
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };
}
