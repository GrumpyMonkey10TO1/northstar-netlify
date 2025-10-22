// === NORTH STAR GPS – EXPLORE BOT (with CORS, Memory, and GPT-4o-mini) ===

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

    // --- Expire memory after 30 minutes ---
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

    // --- System prompt / teaching persona ---
    const systemPrompt = `
You are North Star GPS – Explore, a friendly orientation guide for people exploring immigration pathways to Canada.
You provide **general guidance only**, not legal or professional advice.
Tone: clear, concise, and approachable.
Focus on helping users understand eligibility factors, language requirements, education equivalency (ECA), CRS points, and next steps.
If asked about personal files, politely explain that only a licensed RCIC can review those.
Keep responses under 3 paragraphs unless the user explicitly asks for more detail.
Never say “Sure” or “Of course”. Keep responses professional but friendly.
    `.trim();

    // --- Add user message to memory ---
    conversationMemory.push({ role: "user", content: userMessage });

    // --- Limit memory to last 12 messages ---
    if (conversationMemory.length > 12) {
      conversationMemory = conversationMemory.slice(-12);
    }

    // --- Query OpenAI model ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 1000,
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationMemory,
      ],
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "I'm here to help you explore your options for immigrating to Canada.";

    console.log("✅ Explore bot full reply (first 200 chars):", reply.slice(0, 200));

    // --- Add assistant reply to memory ---
    conversationMemory.push({ role: "assistant", content: reply });

    // --- Return structured response for frontend ---
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        message: reply, // matches front-end code
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

