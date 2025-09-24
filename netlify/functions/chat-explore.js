// netlify/functions/chat-explore.js
import fs from "fs";
import path from "path";

// ✅ Inline CORS wrapper (handles JSON errors etc.)
function withCORS(handler) {
  return async (event, context) => {
    try {
      const result = await handler(event, context);

      // If handler already set headers (like for streaming), keep them
      return {
        ...result,
        headers: {
          "Access-Control-Allow-Origin": "https://migratenorth.ca",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          ...(result.headers || {}),
        },
      };
    } catch (err) {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "https://migratenorth.ca",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        body: JSON.stringify({ reply: `CORS wrapper error: ${err.message}` }),
      };
    }
  };
}

async function baseHandler(event, context) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://migratenorth.ca",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    };
  }

  const body = JSON.parse(event.body || "{}");
  const userMessage = body.message || "Hello";

  try {
    // ----------------------------
    // Load Explore system prompt
    // ----------------------------
    const promptPath = path.resolve("netlify/functions/prompts/explore-system.txt");
    let systemPrompt = "You are North Star GPS, the Explore bot."; // fallback
    try {
      systemPrompt = fs.readFileSync(promptPath, "utf8");
    } catch (readErr) {
      console.warn("⚠️ Could not read explore-system.txt, using fallback prompt.");
    }

    // ----------------------------
    // Check API key
    // ----------------------------
    if (!process.env.OPENAI_API_KEY) {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "https://migratenorth.ca",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        body: JSON.stringify({
          reply: "⚠️ Missing OPENAI_API_KEY in Netlify environment variables.",
        }),
      };
    }

    // ----------------------------
    // Call OpenAI API with streaming
    // ----------------------------
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        stream: true,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        max_tokens: 400,
      }),
    });

    // ----------------------------
    // Return streaming response + CORS headers
    // ----------------------------
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://migratenorth.ca",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
      body: response.body,
    };

  } catch (err) {
    console.error("❌ Function error:", err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "https://migratenorth.ca",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      body: JSON.stringify({
        reply: `❌ Server error: ${err.message}`,
      }),
    };
  }
}

// ✅ Export handler with CORS enabled
export const handler = withCORS(baseHandler);
