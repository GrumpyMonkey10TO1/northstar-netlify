import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
  // --- Handle CORS preflight ---
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://migratenorth.ca",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
      },
      body: "ok",
    };
  }

  // --- Only allow POST ---
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": "https://migratenorth.ca" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { message, memory = [], timestamp } = JSON.parse(event.body || "{}");

    // Optional: add a small "thinking" delay simulation
    const thinking = "Thinking through your request…";

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are North Star Execute, an expert Canadian immigration assistant built by Migrate North Academy. You help users complete IRCC forms, review documents, and prepare Express Entry and PR applications with precision and clarity.",
        },
        ...memory,
        { role: "user", content: message },
      ],
      temperature: 0.6,
      max_tokens: 400,
    });

    const reply = completion.choices?.[0]?.message?.content || "No response available.";
    const newMemory = [
      ...memory,
      { role: "user", content: message },
      { role: "assistant", content: reply },
    ];

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://migratenorth.ca",
      },
      body: JSON.stringify({ reply, memory: newMemory, thinking }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "https://migratenorth.ca" },
      body: JSON.stringify({
        error: "Internal Server Error: " + err.message,
      }),
    };
  }
};
