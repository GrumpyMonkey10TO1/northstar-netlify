// netlify/functions/chat.js
import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    const body = JSON.parse(event.body || "{}");
    const userMessage = body.message || "Hello";

    console.log("Incoming message:", userMessage);

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
          { role: "system", content: "You are North Star GPS – immigration and IELTS assistant." },
          { role: "user", content: userMessage }
        ],
        max_tokens: 200
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", errorText);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "OpenAI API error", details: errorText })
      };
    }

    const data = await response.json();
    console.log("OpenAI API response:", JSON.stringify(data, null, 2));

    const reply =
      data.choices?.[0]?.message?.content ||
      "Sorry, I couldn’t generate a reply.";

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
