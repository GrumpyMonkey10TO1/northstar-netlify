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
          "Access-Control-Allow-Origin": "https://migratenorth.ca", // restrict to your domain
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
        },
        body: JSON.stringify({ reply: `❌ Server error: ${err.message}` }),
      };
    }
  };
}

async function baseHandler(event, context) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ok: true }),
    };
  }

  const body = JSON.parse(event.body || "{}");
  const userMessage = body.message || "Hello";

  try {
    // Load system prompt
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

    // Call OpenAI
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

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`OpenAI API error: ${response.status} ${errText}`);
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
      body: response.body, // stream directly
    };
  } catch (err) {
    console.error("❌ Function error:", err);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reply: `❌ Server error: ${err.message}` }),
    };
  }
}

export const handler = withCORS(baseHandler);


  
