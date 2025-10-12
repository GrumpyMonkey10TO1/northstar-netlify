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
    // 1️⃣ Load the Explore system prompt
    const promptPath = path.resolve("netlify/functions/prompts/explore-system.txt");
    let systemPrompt = `
You are North Star GPS (Explore version) — an AI immigration and IELTS guide for Migrate North Academy.

Your job is to help international professionals understand:
- How Canadian immigration works (Express Entry, PNPs, etc.)
- IELTS basics, CRS scoring, ECA, settlement, and costs
- The services offered by Migrate North Academy and Matin Immigration Services (RCIC R712582)

Be friendly, accurate, and clear. Avoid technical jargon unless explaining it simply.
At the end of most conversations, invite users to:
1. Try a free IELTS test (Reading/Writing),
2. Receive feedback and strengths/weakness summary,
3. Learn about the EVOLVE plan with 99 full IELTS tests.

Never sound pushy. Always act like a teacher and guide.
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
          ? "✅ Correct! You understood the main idea well. Your reading comprehension aligns with Band 7+."
          : "❌ Not quite. The correct answer was A) To select skilled workers. Focus on identifying key purpose statements.";

      const suggestion = `
${feedback}

📘 Want deeper IELTS prep?
Try **Evolve**, where you’ll access 99 full-length IELTS Reading, Writing, and Listening tests, each with band-level scoring and feedback.

Visit [migratenorth.ca/evolve](https://migratenorth.ca/evolve)
`;

      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply: suggestion, remaining: [] }),
      };
    }

    // 4️⃣ Regular chat mode — fallback to OpenAI
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
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`OpenAI API error: ${response.status} ${errText}`);
    }

    const data = await response.json();
    const fullReply = data.choices?.[0]?.message?.content || "No reply";

    // 5️⃣ Chunk the reply for progressive delivery
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
