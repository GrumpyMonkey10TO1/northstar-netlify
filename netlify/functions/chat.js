// netlify/functions/chat.js
exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      },
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({error: "Method not allowed"}) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const message = body.message || "";

    if (!message) {
      return { statusCode: 400, body: JSON.stringify({error: "Missing message"}) };
    }

    // Echo reply first to prove wiring
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply: `Lite bot: you said "${message}"` })
    };

    /* OpenAI version (switch after echo works)
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: "OPENAI_API_KEY is not set" }) };
    }

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are North Star GPS Lite, focused on IELTS Reading." },
          { role: "user", content: message }
        ],
        temperature: 0.2
      })
    });

    const out = await r.json();
    if (!r.ok) {
      return { statusCode: r.status, body: JSON.stringify({ error: out.error?.message || "Upstream error" }) };
    }

    const reply = out.choices?.[0]?.message?.content?.trim() || "No reply from model.";
    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ reply }) };
    */
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({error: e.message || "Server error"}) };
  }
};
