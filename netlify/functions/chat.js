export async function handler(event, context) {
  // Handle CORS preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://migratenorth.ca", // change to * for testing if needed
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      },
      body: "Preflight OK"
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const userMessage = body.message || "Hello";

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

    const data = await response.json();

    const reply =
      data.choices?.[0]?.message?.content ||
      "Sorry, I couldn’t generate a reply.";

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://migratenorth.ca",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      },
      body: JSON.stringify({ reply })
    };

  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "https://migratenorth.ca",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      },
      body: JSON.stringify({ error: "Server error", details: err.message })
    };
  }
}
