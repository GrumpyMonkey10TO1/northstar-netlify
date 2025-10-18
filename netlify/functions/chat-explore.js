import OpenAI from "openai";

// Initialize OpenAI client
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
  // --- Handle CORS preflight ---
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: "ok",
    };
  }

  // --- Reject non-POST requests ---
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

    // --- Query OpenAI model ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 900,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    // --- Extract and clean model output ---
    let reply = completion.choices?.[0]?.message?.content?.trim() || "No response.";

    reply = sanitizeText(reply);

    // --- Split response into manageable chunks ---
    const chunks = chunkText(reply, 400);
    const first = chunks.shift() || "No reply.";
    const remaining = chunks;

    // --- Debug log (not shown to users) ---
    console.log("✅ Explore bot response (cleaned):", first.slice(0, 200), "...");
    if (remaining.length > 0) console.log("➡ Remaining chunks:", remaining.length);

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
      body: JSON.stringify({ error: err.message }),
    };
  }
};

// --- Text cleanup utility ---
function sanitizeText(text) {
  if (!text) return "";

  return text
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")            // invisible characters
    .replace(/[A-Z]?\s?Show\s*more[^\w]*/gi, "")             // remove "Show more", "TShow more", etc.
    .replace(/\b[Ss]?ure!?/g, "")                            // remove stray "Sure!"
    .replace(/^[\-\s\_]+|[\-\s\_]+$/g, "")                   // trim leftover hyphens/spaces
    .replace(/—+/g, " ")                                     // replace em dashes
    .replace(/\s{2,}/g, " ")                                 // collapse double spaces
    .replace(/^\W+/, "")                                     // strip weird symbols at start
    .trim();
}

// --- Chunk long text into smaller replies ---
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

// --- CORS headers ---
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json",
  };
}
