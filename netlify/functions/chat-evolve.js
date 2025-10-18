// netlify/functions/chat-explore.js
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(), body: "ok" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const userMessage = body.message?.trim();
    if (!userMessage) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing message" }),
      };
    }

    const systemPrompt = `
You are North Star GPS, the official AI guide of Migrate North Academy, created under the supervision of RCIC #R712582.
Your mission is to help skilled professionals around the world understand immigration and IELTS clearly, without fear or confusion.

You speak with three layers of tone:
1. Authority – accurate, IRCC-aligned.
2. Empathy – like a calm mentor.
3. Guidance – natural, forward-moving.

End each message gently with a next step, such as:
"Would you like me to explain what documents you’d need for that?"
or
"Would you like to go over how CRS points are actually calculated?"
`.trim();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.75,
      max_tokens: 2000,
      presence_penalty: 0.3,
      frequency_penalty: 0.2,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    let fullReply = completion.choices?.[0]?.message?.content?.trim() || "";

    fullReply = fullReply
      .replace(/^[A-Z]?[a-z]?[ ]?[ST]how more[^\w]*/gi, "")
      .replace(/^["']+|["']+$/g, "")
      .replace(/(\s)+/g, " ")
      .trim();

    const chunks = [];
    const sentences = fullReply.split(/(?<=[.!?])\s+/);
    let current = "";

    for (const sentence of sentences) {
      if ((current + " " + sentence).length > 600) {
        chunks.push(current.trim());
        current = sentence;
      } else {
        current += " " + sentence;
      }
    }
    if (current.trim().length > 0) chunks.push(current.trim());

    const first = chunks.shift() || "No reply received.";
    const remaining = chunks;

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({ reply: first, remaining }),
    };
  } catch (err) {
    console.error("❌ Explore bot error:", err);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ reply: `Server error: ${err.message}` }),
    };
  }
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };
}

