// netlify/functions/chat-explore.js
import fs from "fs";
import path from "path";

// ✅ Inline CORS wrapper
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
        body: JSON.stringify({ reply: `❌ CORS wrapper error: ${err.message}` }),
      };
    }
  };
}

// ✅ Break response into 3–4 sentence chunks
function chunkResponse(text) {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const chunks = [];
  let current = [];

  sentences.forEach(sentence => {
    current.push(sentence);
    if (current.length >= 3) {
      chunks.push(current.join(" "));
      current = [];
    }
  });

  if (current.length > 0) {
    chunks.push(current.join(" "));
  }

  return chunks.map((chunk, i) =>
    i < chunks.length - 1
      ? `${chunk}\n\nWould you like me to continue?`
      : chunk
  );
}

// ✅ Toggle test mode
const TEST_MODE = false;

async function baseHandler(event, context) {
  const body = JSON.parse(event.body || "{}");
  const userMessage = body.message || "Hello";

  try {
    // ----------------------------
    // TEST MODE
    // ----------------------------
    if (TEST_MODE) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          reply: "✅ Function is alive and returning data (TEST MODE).",
          remaining: []
        })
      };
    }

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
        body: JSON.stringify({
          reply: "⚠️ Missing OPENAI_API_KEY in Netlify environment variables.",
          remaining: []
        })
      };
    }

    // ----------------------------
    // Call OpenAI API
    // ----------------------------
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage }
        ],
        max_tokens: 400
      })
    });

    const data = await response.json();

    if (!data.choices) {
      console.error("❌ OpenAI API error:", data);
      return {
        statusCode: 500,
        body: JSON.stringify({ reply: "⚠️ OpenAI API returned an error.", details: data })
      };
    }

    // ----------------------------
    // Build reply safely
    // ----------------------------
    const reply = data.choices[0].message?.content || "⚠️ No content returned from OpenAI.";
    const chunks = chunkResponse(reply);

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: chunks[0],
        remaining: chunks.slice(1)
      })
    };

  } catch (err) {
    console.error("❌ Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        reply: `❌ Server error: ${err.message}`,
        remaining: []
      })
    };
  }
}

// ✅ Export handler with CORS enabled
export const handler = withCORS(baseHandler);

