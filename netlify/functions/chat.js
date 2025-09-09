import fetch from "node-fetch";

export async function handler(event, context) {
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
        model: "gpt-4o-mini",   // you can swap model if needed
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
      body: JSON.stringify({ reply })
    };
  } catch (err) {
    console.error("Error in chat function:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Server error, please try again later." })
    };
  }
}
