// === NORTH STAR ACADEMY – EVOLVE BOT (IELTS Coach + Sequential Boot Camp + Timer Integration + Corrected Feedback Role) ===

import OpenAI from "openai";
import tests from "../evolve_test.json" assert { type: "json" };
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// --- CORS ---
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json",
  };
}

// --- Level ranges ---
const LEVEL_RANGES = {
  "level 1": [0, 11],
  "level 2": [11, 22],
  "level 3": [22, 33],
};

// --- Get next sequential test ---
function getNextTest(level, index) {
  const [start, end] = LEVEL_RANGES[level];
  const range = tests.slice(start, end);
  return range[index] || null;
}

// --- Feedback prompt builder ---
function buildFeedbackPrompt(task, essay) {
  return `
You are an IELTS Writing examiner. Evaluate the student's essay according to IELTS Writing Task standards.

Task: ${task.prompt}
Task Type: ${task.task_type}
Word Limit: ${task.word_limit}

Rubric:
${Object.entries(task.rubric)
  .map(([key, value]) => `- ${key}: ${value}`)
  .join("\n")}

Student Essay:
"${essay}"

Now, evaluate the essay following this structure:
1. Short summary of performance (2 sentences)
2. Criterion scores: Task Achievement, Coherence & Cohesion, Lexical Resource, Grammar
3. Estimated CLB band (6–9)
4. Two motivational sentences encouraging further progress.
Keep the tone professional, warm, and concise.
  `.trim();
}

export const handler = async (event) => {
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
    const userMessage = (body.message || "").trim().toLowerCase();
    const previousMemory = body.memory || [];
    const sessionTime = body.timestamp || Date.now();

    const THIRTY_MINUTES = 1800000;
    const now = Date.now();
    const isExpired = now - sessionTime > THIRTY_MINUTES;
    let memory = isExpired ? [] : previousMemory;
    let reply = "";

    // === Handle Boot Camp Levels (Sequential Mode) ===
    if (/level 1|level 2|level 3/.test(userMessage)) {
      const level = Object.keys(LEVEL_RANGES).find((l) => userMessage.includes(l));
      if (!level) {
        reply = "Please select a valid Boot Camp level.";
      } else {
        // Find current index for this level
        const progressKey = `progress_${level}`;
        let currentIndex = 0;
        const progressMemory = memory.find(
          (m) => m.role === "progress" && m.key === progressKey
        );
        if (progressMemory) currentIndex = progressMemory.value;

        const nextTest = getNextTest(level, currentIndex);

        if (!nextTest) {
          reply = `✅ You've completed all ${level.toUpperCase()} tests!`;
        } else {
          reply = `🎯 **${nextTest.task_id} (${nextTest.task_type})**

🧾 **Prompt:** ${nextTest.prompt}

⏱️ Time limit: ${nextTest.time_limit} minutes  
✍️ Word limit: ${nextTest.word_limit} words

When ready, write your essay below.  
Type **Submit Essay** when finished to receive IELTS-style feedback.`;

          // Store progress & current test in memory
          memory = memory.filter(
            (m) => !(m.role === "progress" && m.key === progressKey)
          );
          memory.push({
            role: "progress",
            key: progressKey,
            value: currentIndex + 1,
          });
          memory.push({ role: "system", content: JSON.stringify(nextTest) });
        }
      }
    }

    // === Handle Essay Submission ===
    else if (/submit essay/i.test(userMessage)) {
      const lastTask = [...memory]
        .reverse()
        .find((m) => m.role === "system" && m.content.includes("task_id"));

      if (!lastTask) {
        reply =
          "You haven’t started a test yet. Please begin a Boot Camp level first.";
      } else {
        const task = JSON.parse(lastTask.content);
        const lastEssay = [...memory]
          .reverse()
          .find((m) => m.role === "user" && !/submit essay/i.test(m.content));
        const essay = lastEssay ? lastEssay.content : "(No essay found)";
        const feedbackPrompt = buildFeedbackPrompt(task, essay);

        // Corrected role handling for GPT evaluation
        const completion = await client.chat.completions.create({
          model: "gpt-4o-mini",
          temperature: 0.7,
          max_tokens: 800,
          messages: [
            { role: "system", content: "You are an IELTS Writing examiner." },
            { role: "user", content: feedbackPrompt },
          ],
        });

        reply =
          completion.choices?.[0]?.message?.content?.trim() ||
          "Error: Feedback could not be generated.";

        reply +=
          "\n\n✅ Progress updated. You can continue with your next test by typing the same level again or clicking it from the Boot Camp menu.";
      }
    }

    // === Generate Random Test ===
    else if (/generate test/.test(userMessage)) {
      const chosen = tests[Math.floor(Math.random() * tests.length)];
      reply = `🎯 **${chosen.task_id} (${chosen.task_type})**

🧾 **Prompt:** ${chosen.prompt}

⏱️ Time limit: ${chosen.time_limit} minutes  
✍️ Word limit: ${chosen.word_limit} words

When ready, type **Submit Essay** after your writing.`;
      memory.push({ role: "system", content: JSON.stringify(chosen) });
    }

    // === Regular IELTS Coaching ===
    else {
      const systemPrompt = `
You are North Star Academy, an IELTS and English proficiency coach.
Focus on Reading, Writing, and Listening. Avoid Speaking and immigration topics.
Be concise, logical, and motivating. Provide examples where relevant.
      `.trim();

      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        max_tokens: 700,
        messages: [
          { role: "system", content: systemPrompt },
          ...memory,
          { role: "user", content: userMessage },
        ],
      });

      reply =
        completion.choices?.[0]?.message?.content?.trim() ||
        "Let's continue improving step by step.";
    }

    // --- Save the assistant reply to memory ---
    memory.push({ role: "assistant", content: reply });

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({ message: reply, memory, timestamp: now }),
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
