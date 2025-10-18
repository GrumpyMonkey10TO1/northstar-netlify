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

    // --- Add new user message ---
    conversationMemory.push({ role: "user", content: userMessage });

    // --- Trim memory to last 12 messages ---
    if (conversationMemory.length > 12) {
      conversationMemory = conversationMemory.slice(-12);
    }

    // --- Query model ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 900,
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationMemory,
      ],
    });

    let reply = completion.choices?.[0]?.message?.content?.trim() || "No response.";

    // --- Add assistant reply ---
    conversationMemory.push({ role: "assistant", content: reply });

    // --- Split into chunks ---
    const chunks = chunkText(reply, 400);
    const first = chunks.shift() || "No reply.";
    const remaining = chunks;

    console.log("✅ Explore bot:", first.slice(0, 200), "...");
    if (remaining.length > 0) console.log("➡ Remaining chunks:", remaining.length);

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        reply: first,
        remaining,
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

// --- Helper: Split long replies into chunks ---
function chunkText(text, maxLen) {
  const words = text.split(/\s+/);
  const chunks = [];
  let current = "";
  for (const w of words) {
    if ((current + " " + w).length > maxLen) {
      chunks.push(current.trim());
      current = w;
    } else {
      current += " " + w;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

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
