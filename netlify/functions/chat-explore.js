// /netlify/functions/chat-explore.js
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Missing message text." });
    }

    // --- SYSTEM PROMPT (RCIC persona for Explore bot) ---
    const systemPrompt = `
You are North Star GPS, a helpful and professional AI guide from Migrate North.
You assist users with immigration to Canada (Express Entry, CRS, PR, ECA, IELTS)
and English test guidance. You are accurate, concise, and conversational.
Do not hallucinate. When uncertain, say “I don’t have that exact data, but here’s what’s typical.”
Keep tone professional yet approachable, like a licensed immigration consultant.
Never use emojis or salesy tone.
    `.trim();

    // --- SEND TO OPENAI ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 900,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ]
    });

    const fullReply = completion.choices?.[0]?.message?.content?.trim();
    if (!fullReply) {
      return res.status(200).json({ reply: "Sorry, I didn’t get a response." });
    }

    // ✅ WORD-SAFE CHUNKING FIX
    const words = fullReply.split(/\s+/);
    const chunks = [];
    let currentChunk = "";

    for (let word of words) {
      if ((currentChunk + " " + word).length > 400) {
        chunks.push(currentChunk.trim());
        currentChunk = word;
      } else {
        currentChunk += " " + word;
      }
    }
    if (currentChunk.trim().length > 0) chunks.push(currentChunk.trim());

    // Prepare the first chunk + remaining ones
    const firstChunk = chunks.shift();
    const remainingChunks = chunks.length > 0 ? chunks : [];

    // Send clean JSON payload back to frontend
    return res.status(200).json({
      reply: firstChunk,
      remaining: remainingChunks
    });

  } catch (err) {
    console.error("Explore bot error:", err);
    return res.status(500).json({
      error: "Server error",
      details: err.message
    });
  }
}
