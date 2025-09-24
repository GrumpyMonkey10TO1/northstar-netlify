// netlify/functions/chat-explore.js
import fs from "fs";
import path from "path";

// Inline CORS wrapper
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
      return {
        statusCode: 500,
        body: JSON.stringify({ reply: `CORS wrapper error: ${err.message}` }),
      };
    }
  };
}

async function baseHandler(event, context) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200 };
  }

  const body = JSON.parse(event.body || "{}");
  const userMessage = body.message || "Hello";

  try {
    // Load system prompt
    const promptPath = path.resolve("netlify/functions/prompts/explore-system.txt");
    let systemPrompt = "You are North Star GPS, the Explore bot.";
    try {
      systemPrompt = fs.readFileSync(promptPath, "utf8");
    } catch (readErr) {
      console.warn("Could not read explore-system.txt, using fallback prompt.");
    }

    if (!process.env.OPENAI_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ reply: "Missing OPENAI_API_KEY in Netlify environment variables." }),
      };
    }

    // Call OpenAI with streaming
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

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
      body: response.body,
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: `Server error: ${err.message}` }),
    };
  }
}

export const handler = withCORS(baseHandler);
