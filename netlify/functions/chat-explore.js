// netlify/functions/chat-explore.js
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
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
    const userMessage = (body.message || "").trim();
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
You help users understand immigration and IELTS clearly, calmly, and professionally.
Never include debug markers like “TShow more”, “EShow more”, or any similar tokens.
Your answers must read naturally and fully, as if speaking to an international audience.
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

    // --- SAFELY CLEAN OUTPUT EARLY ---
    let raw = completion.choices?.[0]?.message?.content || "";

    // Clean hidden Unicode junk + all TShow more variants, anywhere
    raw = raw
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, "") // invisible control chars
      .replace(/\b[TE]?Show\s*more[—:\-\s]*/gi, "") // all “TShow more”, “EShow more”, “Show more —”
      .replace(/—+/g, " ")
      .replace(/\s{2,}/g, " ")
      .replace(/^[\-\s]+|[\-\s]+$/g, "")
      .trim();

    // --- CHUNK LONG REPLIES ---
    const sentences = raw.split(/(?<=[.!?])\s+/);
    const chunks = [];
    let current = "";
    for (const s of sentences) {
      if ((current + " " + s).length > 700) {
        chunks.push(current.trim());
        current = s;
      } else {
        current += " " + s;
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
