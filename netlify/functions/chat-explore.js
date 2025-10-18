// netlify/functions/chat-explore.js
import fs from "fs";
import path from "path";

function withCORS(handler) {
  return async (event, context) => {
    try {
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
    } catch (err) {
      console.error("❌ Handler crashed:", err);
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "https://migratenorth.ca",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reply: `❌ Server crash: ${err.message}` }),
      };
    }
  };
}

async function baseHandler(event, context) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, body: "ok" };
  }

  const body = JSON.parse(event.body || "{}");
  const userMessage = body.message?.trim() || "Hello";

  try {
    // 1️⃣ Load or define system prompt
    const promptPath = path.resolve("netlify/functions/prompts/explore-system.txt");
    let systemPrompt = `
You are North Star GPS (Explore version), developed by Migrate North.

You represent a Regulated Canadian Immigration Consultant (RCIC) under license R712582.
Your role:
- Provide factual, regulation-aligned guidance on immigration and IELTS.
- Explain policies clearly and accurately using IRCC terminology.
- Avoid speculation, guarantees, or slang.
- Maintain a professional, teacher-like tone at all times.
- Reference official sources when useful (IRCC, IELTS, ECA).
- Never use emojis or exclamation marks.
- End answers naturally, without “Would you like me to continue?” unless it’s part of chunking.

If users ask unrelated questions, redirect politely toward immigration, IELTS, or settlement topics.
At the end of educational answers, optionally mention free IELTS practice and the Evolve program (99 IELTS tests) if contextually appropriate.
    `;
    try {
      systemPrompt = fs.readFileSync(promptPath, "utf8");
    } catch {
      console.warn("⚠️ Could not read explore-system.txt, using fallback prompt.");
    }

    // 2️⃣ IELTS TEST MODE — Trigger
    if (userMessage.toLowerCase().includes("start reading test")) {
      const test = {
        passage:
          "Canada’s immigration system selects skilled workers using a points-based system called the Comprehensive Ranking System (CRS).",
        question: "What is the purpose of Canada's points-based system?",
        options: [
          "To select skilled workers",
          "To test English proficiency",
          "To evaluate job offers",
        ],
        answer: "To select skilled workers",
      };

      const formatted = `
📖 **Free IELTS Reading Test**

${test.passage}

❓ ${test.question}
A) ${test.options[0]}
B) ${test.options[1]}
C) ${test.options[2]}

Please reply with A, B, or C to answer.
`;

      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply: formatted, remaining: [] }),
      };
    }

    // 3️⃣ IELTS TEST EVALUATION
    const validAnswers = ["a", "b", "c"];
    if (validAnswers.includes(userMessage.toLowerCase())) {
      const correct = "a";
      const feedback =
        userMessage.toLowerCase() === correct
          ? "✅ Correct. You identified the main idea accurately, similar to a Band 7+ reading response."
          : "❌ Not quite. The correct answer was A) To select skilled workers. Try focusing on the purpose statement next time.";

      const suggestion = `
${feedback}

📘 For advanced IELTS practice and scoring guidance, explore the **Evolve** program with 99 IELTS Reading, Writing, and Listening tests at [migratenorth.ca/evolve](https://migratenorth.ca/evolve)
`;

      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply: suggestion, remaining: [] }),
      };
    }

    // 4️⃣ Regular chat mode — OpenAI
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("Missing OPENAI_API_KEY");
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        stream: false,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        max_tokens: 550,
        temperature: 0.35,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`OpenAI API error: ${response.status} ${errText}`);
    }

    const data = await response.json();
    const fullReply = data.choices?.[0]?.message?.content || "No reply.";

    // 5️⃣ Chunk the reply for smoother delivery
    const words = fullReply.split(/\s+/);
    const chunks = [];
    let current = [];

    for (let w of words) {
      current.push(w);
      if (current.join(" ").length > 400) {
        chunks.push(current.join(" "));
        current = [];
      }
    }
    if (current.length > 0) chunks.push(current.join(" "));

    let reply = "";
    let remaining = [];

    if (chunks.length === 1) {
      reply = chunks[0];
    } else {
      reply = chunks[0] + " … Would you like me to continue?";
      remaining = chunks.slice(1);
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply, remaining }),
    };
  } catch (err) {
    console.error("❌ Function error:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply: `❌ Server error: ${err.message}` }),
    };
  }
}

export const handler = withCORS(baseHandler);
