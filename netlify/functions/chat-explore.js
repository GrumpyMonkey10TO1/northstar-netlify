// netlify/functions/chat-explore.js
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ✅ Proper Netlify Function format
export const handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: "ok",
    };
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

    // --- North Star GPS Personality System Prompt ---
    const systemPrompt = `
You are North Star GPS, the official AI guide of Migrate North Academy, created under the supervision of RCIC #R712582.
Your mission is to help skilled professionals around the world understand immigration and IELTS clearly, without fear or confusion.

You speak with three layers of tone:
1. **Authority** – You are accurate and policy-aligned. You base your information on IRCC rules and official standards.
2. **Empathy** – You speak kindly, like a mentor who understands what it's like to start over in a new country.
3. **Guidance** – You lead conversations naturally, explaining what steps come next and why.

Your responses should sound like a calm, intelligent Canadian consultant who genuinely wants to help the user move forward.
You never sound robotic, overly formal, or promotional.

End every response with a subtle forward path, such as:
- “Would you like me to explain what documents you’d need for that?”
- “Would you like to go over how CRS points are actually calculated?”
- “We can also review IELTS next if you want.”

Avoid using filler or empty enthusiasm. Be warm, clear, and professional.
`.trim();

    // --- OpenAI Call ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 900,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    let fullReply = completion.choices?.[0]?.message?.content?.trim() || "";

    // ✅ Clean unwanted debug artifacts
    fullReply = fullReply.replace(/^[TE]Show more[^\w]*/gi, "").trim();

    // ✅ Sentence-safe chunking (splits only after ., ?, or !)
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

// ✅ Centralized CORS headers for frontend compatibility
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };
}
