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

    if (!userMessage) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing message" }),
      };
    }

    // --- System personality ---
    const systemPrompt = `
You are North Star GPS, an AI immigration and IELTS assistant for Migrate North Academy.
You explain things in clear, friendly English that is easy for international audiences to follow.
Avoid robotic tone. Use short paragraphs, examples, and transitions.
You are accurate, calm, and professional, speaking like a Canadian immigration consultant (RCIC #R712582),
but approachable and encouraging. Always assume the user is abroad and might be learning English.
    `.trim();

    // --- Call OpenAI ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 900,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    let reply = completion.choices?.[0]?.message?.content?.trim() || "No response.";

    // --- Clean text (strip artifacts like TShow more) ---
    reply = reply
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
      .replace(/\b[TE]?Show\s*more[—:\-\s]*/gi, "")
      .replace(/—+/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim();

    // --- Split into chunks safely ---
    const words = reply.split(/\s+/);
    const chunks = [];
    let current = "";

    for (const w of words) {
      if ((current + " " + w).length > 400) {
        chunks.push(current.trim());
        current = w;
      } else {
        current += " " + w;
      }
    }
    if (current.trim()) chunks.push(current.trim());

    const first = chunks.shift() || "No reply.";
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
      body: JSON.stringify({ error: err.message }),
    };
  }
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json",
  };
}
