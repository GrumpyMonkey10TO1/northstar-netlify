import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
  // --- Handle preflight CORS ---
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: "ok",
    };
  }

  // --- Allow only POST requests ---
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
    const previousMemory = body.memory || [];
    const sessionTime = body.timestamp || Date.now();

    // Expire memory after 30 minutes (1800000 ms)
    const THIRTY_MINUTES = 1800000;
    const now = Date.now();
    const isExpired = now - sessionTime > THIRTY_MINUTES;
    let conversationMemory = isExpired ? [] : previousMemory;

    if (!userMessage) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing message" }),
      };
    }

    // --- System prompt / personality definition ---
    const systemPrompt = `
You are North Star GPS, an AI immigration and IELTS assistant for Migrate North Academy.
You are calm, clear, and professional, like a licensed RCIC consultant (RCIC #R712582).
Your goal is to help international users understand Canadian immigration and IELTS systems.
Explain concepts in simple English with natural flow, short paragraphs, and smooth transitions.
Avoid robotic tone, avoid filler like "Sure!" or "Of course!", and never show system tags like "Show more".
When users ask about immigration, reference IRCC procedures accurately. When about IELTS, be educational.
Keep replies factual and friendly, as if explaining to someone abroad preparing to immigrate to Canada.
    `.trim();

    // --- Add new user message to memory ---
    conversationMemory.push({ role: "user", content: userMessage });

    // --- Keep memory concise (last 12 messages) ---
    if (conversationMemory.length > 12) {
      conversationMemory = conversationMemory.slice(-12);
    }

    // --- Query OpenAI model ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 1200, // increased from 900 for longer complete answers
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationMemory,
      ],
    });

    let reply = completion.choices?.[0]?.message?.content?.trim() || "No response.";
    console.log("✅ Explore bot full reply (first 200 chars):", reply.slice(0, 200));

    // --- Save reply in memory ---
    conversationMemory.push({ role: "assistant", content: reply });

    // --- Return full reply (no truncation) ---
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        reply,
        memory: conversationMemory,
        timestamp: now,
      }),
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
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json",
  };
}
