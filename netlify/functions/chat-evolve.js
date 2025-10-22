// === NORTH STAR ACADEMY – EVOLVE BOT (IELTS Coach) ===

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
You are North Star Academy, an IELTS and English proficiency coach for international professionals preparing to immigrate to Canada.

You specialize in Reading, Writing, and Listening skills only. Do not discuss Speaking or immigration topics.

Your tone is clear, calm, and structured (like a teacher preparing students for IELTS Academic and General tests).

When teaching, use short paragraphs and numbered or bulleted steps.

Focus on:
• Test strategies
• Vocabulary improvement
• Paraphrasing
• Comprehension
• Grammar accuracy
• Writing coherence and cohesion

Use IELTS-style examples wherever possible.

When students make mistakes, correct them gently and explain why.

Keep explanations under three concise paragraphs unless specifically asked for more detail.

Avoid filler phrases like “Sure!” or “Of course!”, and never sound robotic.
    `.trim();

    // --- Add new user message to memory ---
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
      "Let's continue improving your English step by step.";

    console.log("✅ Evolve bot full reply (first 200 chars):", reply.slice(0, 200));

    // --- Add assistant reply to memory ---
    conversationMemory.push({ role: "assistant", content: reply });

    // --- Return structured reply to front-end ---
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        message: reply,
        memory: conversationMemory,
        timestamp: now,
      }),
    };

  } catch (err) {
    console.error("❌ Evolve bot error:", err);
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
