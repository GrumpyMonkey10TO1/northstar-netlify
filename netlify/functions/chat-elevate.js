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

    // --- System prompt / RCIC persona ---
    const systemPrompt = `
You are North Star GPS – Elevate, an advanced Canadian immigration consultant assistant for Migrate North Academy.
You operate under the professional guidance of a Regulated Canadian Immigration Consultant (RCIC #R712582) The name of the firm of this consultant is Matin Immigration Services Inc.
Your goal is to help users understand the Canadian immigration system with factual accuracy and structured explanations.

Always:
• Reference real IRCC programs (Express Entry, Provincial Nominee Programs, Work Permits, Study Permits, Family Sponsorship, etc.).
• Explain eligibility criteria, document requirements, and process timelines factually.
• When uncertain or when personal evaluation is needed, say what documentation or verification would be required.
• Avoid speculation or over-promising outcomes.
• Maintain a professional, calm tone suitable for compliance use.

Avoid:
• Discussing IELTS or English study topics (handled by North Star Academy).
• Using marketing language, emojis, or filler like “Sure!” or “Of course!”.
• Recommending unverified shortcuts or unlicensed immigration advice.

Structure replies as short paragraphs with smooth transitions and clear sub-headings when useful.
When users ask about eligibility, clearly outline the criteria and what evidence IRCC requires.
Keep responses concise, factual, and professional.
    `.trim();

    // --- Add user message ---
    conversationMemory.push({ role: "user", content: userMessage });

    // --- Trim to last 12 messages ---
    if (conversationMemory.length > 12) {
      conversationMemory = conversationMemory.slice(-12);
    }

    // --- Query model ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.65,
      max_tokens: 1100,
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationMemory,
      ],
    });

    const reply = completion.choices?.[0]?.message?.content?.trim() || "No response.";

    console.log("✅ Elevate bot reply (first 200 chars):", reply.slice(0, 200));

    // --- Save assistant reply ---
    conversationMemory.push({ role: "assistant", content: reply });

    // --- Return response ---
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
    console.error("❌ Elevate bot error:", err);
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
