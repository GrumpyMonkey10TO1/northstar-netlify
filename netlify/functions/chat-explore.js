// === NORTH STAR GPS – EXPLORE BACKEND FUNCTION (FINAL VERSION: MEMORY + HUMAN PERSONALITY) ===
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// --- In-memory short-term memory (resets on function reload) ---
let conversationHistory = [];

export const handler = async (event) => {
  // --- Allow CORS preflight ---
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(), body: "OK" };
  }

  // --- Only accept POST requests ---
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // --- Parse message ---
    const body = JSON.parse(event.body || "{}");
    const userMessage = (body.message || "").trim();

    if (!userMessage) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing message" }),
      };
    }

    // === PERSONALITY + CONVERSATION BEHAVIOUR PROMPT ===
    const systemPrompt = `
You are North Star GPS, the friendly AI guide for Migrate North Academy, led by Ovi Matin (RCIC).

You act as a calm, knowledgeable mentor who helps users understand Canadian immigration, IELTS, and settlement in a human, encouraging way.
Your tone is warm, clear, and conversational — not robotic or overly formal.

--- BEHAVIOUR RULES ---
1. Keep all replies under 5 sentences.
2. Start with an acknowledgment or small encouragement ("That’s a good question" / "Many people wonder that").
3. Use simple, conversational English.
4. Summarize only essentials, never info-dump.
5. End each message with a gentle next step or question ("Would you like to see what comes next?" / "Should I explain how to start?").
6. If the user sounds confused, reassure them first.
7. If they sound motivated, be upbeat and supportive.
8. If they mention setbacks, normalize it and encourage persistence.
9. Avoid robotic disclaimers and filler phrases.
10. Occasionally add motivational lines like “You’re closer than you think” or “Every step counts.”

Keep the energy hopeful, professional, and human. You represent Canada as a welcoming, trustworthy guide.
    `.trim();

    // --- Build the chat messages with short-term memory ---
    const messages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory.slice(-8),
      { role: "user", content: userMessage },
    ];

    // --- Send to OpenAI ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.85, // slightly higher = natural variation
      max_tokens: 500, // concise replies
      messages,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "No response received.";

    // --- Update short-term memory ---
    conversationHistory.push({ role: "user", content: userMessage });
    conversationHistory.push({ role: "assistant", content: reply });

    // --- Trim memory (prevent overflow) ---
    if (conversationHistory.length > 20) {
      conversationHistory = conversationHistory.slice(-20);
    }

    // --- Return response to frontend ---
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({ reply }),
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
