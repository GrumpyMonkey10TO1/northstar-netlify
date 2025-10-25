// === NORTH STAR ACADEMY – EVOLVE BOT (IELTS Coach + Boot Camp Integration) ===

import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// --- Load test data (replace with import or external JSON in production) ---
import tests from "./evolve_test.json" assert { type: "json" };

export const handler = async (event) => {
  // --- Handle preflight CORS ---
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(), body: "ok" };
  }

  // --- Allow only POST requests ---
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const userMessage = (body.message || "").trim();
    const previousMemory = body.memory || [];
    const sessionTime = body.timestamp || Date.now();

    // --- Expire memory after 30 minutes ---
    const THIRTY_MINUTES = 1800000;
    const now = Date.now();
    const isExpired = now - sessionTime > THIRTY_MINUTES;
    let conversationMemory = isExpired ? [] : previousMemory;

    if (!userMessage) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing message" }),
      };
    }

    // --- Handle Boot Camp / Generate Test keywords ---
    const lowerMsg = userMessage.toLowerCase();
    if (
      lowerMsg.includes("boot camp") ||
      lowerMsg.includes("generate test") ||
      lowerMsg.includes("level 1") ||
      lowerMsg.includes("level 2") ||
      lowerMsg.includes("level 3")
    ) {
      // Pick a random test from the dataset
      const randomTest = tests[Math.floor(Math.random() * tests.length)];

      const bootReply = `
🎯 **${randomTest.task_type} – ${randomTest.context}**

🧾 **Prompt:** ${randomTest.prompt}

⏱️ Time limit: ${randomTest.time_limit} minutes  
✍️ Word limit: ${randomTest.word_limit} words

**Rubric Highlights:**  
• ${randomTest.rubric["Task Response"] || randomTest.rubric["Task Achievement"]}  
• ${randomTest.rubric["Coherence and Cohesion"]}  
• ${randomTest.rubric["Lexical Resource"]}  
• ${randomTest.rubric["Grammatical Range and Accuracy"]}

When finished, submit your answer for evaluation. I’ll estimate your CLB band and provide structured feedback based on IELTS criteria.
      `.trim();

      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({
          message: bootReply,
          metadata: randomTest,
          memory: conversationMemory,
          timestamp: now,
        }),
      };
    }

    // --- System prompt / teaching persona ---
    const systemPrompt = `
You are North Star Academy, an IELTS and English proficiency coach for international professionals preparing to immigrate to Canada.
Focus on Reading, Writing, and Listening. Do not discuss Speaking or immigration topics.

Tone: calm, clear, structured. Explain reasoning in short paragraphs or numbered steps.
Correct mistakes gently. Emphasize IELTS-specific guidance (vocabulary, grammar, logic, cohesion).
Keep answers under three concise paragraphs unless asked for more detail.
Avoid filler phrases like "Sure!" or "Of course!".
    `.trim();

    // --- Add user message to memory ---
    conversationMemory.push({ role: "user", content: userMessage });
    if (conversationMemory.length > 12) {
      conversationMemory = conversationMemory.slice(-12);
    }

    // --- Query OpenAI model ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 1000,
      messages: [{ role: "system", content: systemPrompt }, ...conversationMemory],
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Let's continue improving your English step by step.";

    console.log("✅ Evolve bot full reply (first 200 chars):", reply.slice(0, 200));

    conversationMemory.push({ role: "assistant", content: reply });

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        message: reply,
        memory: conversationMemory,
        timestamp: now,
      }),
    };
  } catch (err) {
    console.error("❌ Evolve bot error:", err);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: err.message }),
    };
  }
};

// --- Helper: CORS headers ---
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json",
  };
}
