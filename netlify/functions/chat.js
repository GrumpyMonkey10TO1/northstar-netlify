// netlify/functions/chat.js
import { withCORS } from "../utils/corsResponse.js";
import fs from "fs";
import path from "path";

async function baseHandler(event, context) {
  const body = JSON.parse(event.body || "{}");
  const userMessage = body.message || "Hello";

  try {
    // ✅ Load system prompt from explore-system.txt
    const systemPromptPath = path.resolve("netlify/functions/prompts/explore-system.txt");
    const systemPrompt = fs.readFileSync(systemPromptPath, "utf8");

    // Call OpenAI API
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
        max_tokens: 500,
        temperature: 0.7
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn’t generate a reply.";

    return {
      statusCode: 200,
      body: JSON.stringify({ reply })
    };

  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error", details: err.message })
    };
  }
}

// ✅ Wrap the handler with CORS logic
export const handler = withCORS(baseHandler);
