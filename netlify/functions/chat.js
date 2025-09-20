// netlify/functions/chat.js
import fs from "fs";
import path from "path";

// Inline CORS wrapper
function withCORS(handler) {
  return async (event, context) => {
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
  };
}

async function baseHandler(event, context) {
  const body = JSON.parse(event.body || "{}");
  // Accept either { message: "..." } or { messages: [{ role: "user", content: "..." }] }
  const userMessage = body.messages?.[0]?.content || body.message || "Hello";

  try {
    // Load system prompt dynamically from explore-system.txt
    const promptPath = path.resolve("netlify/functions/prompts/explore-system.txt");
    let systemPrompt = "You are North Star GPS, immigration and IELTS assistant."; // fallback
    try {
      systemPrompt = fs.readFileSync(promptPath, "utf8");
    } catch (readErr) {
      console.warn("Could not read explore-system.txt, using fallback prompt.");
    }

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        max_tokens: 200,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ||
      "Sorry, I couldn’t generate a reply.";

    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error", details: err.message }),
    };
  }
}

// Export handler with CORS enabled
export const handler = withCORS(baseHandler);
