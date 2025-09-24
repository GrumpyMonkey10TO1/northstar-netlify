// netlify/functions/chat-explore.js
import fs from "fs";
import path from "path";

function withCORS(handler) {
  return async (event, context) => {
    try {
      const result = await handler(event, context);
      return {
        ...result,
        headers: {
          "Access-Control-Allow-Origin": "https://migratenorth.ca",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          ...result.headers,
        },
      };
    } catch (err) {
      console.error("❌ Handler crashed:", err);
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "https://migratenorth.ca",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reply: `❌ Server crash: ${err.message}` }),
      };
    }
  };
}

async function baseHandler(event, context) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, body: "ok" };
  }

  const body = JSON.parse(event.body || "{}");
  const userMessage = body.message || "Hello";

  try {
    const promptPath = path.resolve("netlify/functions/prompts/explore-system.txt");
    let systemPrompt = "You are North Star GPS, the Explore bot.";
    try {
      systemPrompt = fs.readFileSync(promptPath, "utf8");
    } catch {
      console.warn("⚠️ Could not read explore-system.txt, using fallback prompt.");
    }

    if (!process.env.OPENAI_API_KEY) {
      throw new Error("Missing OPENAI_API_KEY");
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        stream: false,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`OpenAI API error: ${response.status} ${errText}`);
    }

    const data = await response.json();
    const fullReply = data.choices?.[0]?.message?.content || "No reply";

    // ✅ Smaller chunk size (~400 characters ≈ ~80 words)
    const words = fullReply.split(/\s+/);
    const chunks = [];
    let current = [];

    for (let w of words) {
      current.push(w);
      if (current.join(" ").length > 400) { // ~80 words cutoff
        chunks.push(current.join(" "));
        current = [];
      }
    }
    if (current.length > 0) chunks.push(current.join(" "));

    let reply = "";
    let remaining = [];

    if (chunks.length === 1) {
      reply = chunks[0];
    } else {
      reply = chunks[0] + " … Would you like me to continue?";
      remaining = chunks.slice(1);
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply, remaining }),
    };
  } catch (err) {
    console.error("❌ Function error:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply: `❌ Server error: ${err.message}` }),
    };
  }
}

export const handler = withCORS(baseHandler);
