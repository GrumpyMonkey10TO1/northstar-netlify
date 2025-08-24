// netlify/functions/chat.js
// CommonJS for Netlify Functions
const ALLOWED_ORIGINS = [
  "https://migratenorth.ca",
  "https://www.migratenorth.ca",
  "http://localhost:8888",
  "http://localhost:5173"
];

function corsHeaders(origin) {
  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : "*";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

exports.handler = async function (event) {
  const origin = event.headers.origin || "";
  const headers = corsHeaders(origin);

  // Preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: "Method Not Allowed" };
  }

  // Parse request
  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers, body: "Invalid JSON" };
  }

  const userText = String(payload.message || "").trim();
  const topic = String(payload.topic || "").trim();

  // Visible guard if key is missing
  if (!process.env.OPENAI_API_KEY) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        reply:
          "Server online. Add OPENAI_API_KEY in Netlify environment variables to enable real answers."
      })
    };
  }

  // Call OpenAI
  try {
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content:
              "You are North Star GPS, Explore tier. Give concise, accurate answers about Canadian immigration and IELTS Reading. No sales fluff. If the user asks for Writing or Listening training, answer briefly and suggest upgrading."
          },
          topic ? { role: "system", content: `User selected topic: ${topic}` } : null,
          { role: "user", content: userText || "Say hello." }
        ].filter(Boolean)
      })
    });

    if (!resp.ok) {
      const text = await resp.text();
      return {
        statusCode: 502,
        headers,
        body: `Upstream error: ${resp.status} ${text}`
      };
    }

    const data = await resp.json();
    const content =
      data.choices?.[0]?.message?.content ??
      "I could not produce a response at this time.";

    // Frontend expects { reply: string }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply: content })
    };
  } catch (e) {
    return { statusCode: 500, headers, body: `Server error: ${e.message}` };
  }
};
