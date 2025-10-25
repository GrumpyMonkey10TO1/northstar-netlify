// === NORTH STAR ACADEMY – EVOLVE BOT (IELTS Coach + Boot Camp Integration + Feedback) ===

import OpenAI from "openai";
import tests from "../evolve_test.json" assert { type: "json" };
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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

// --- Helper: Pick tests by level or random ---
function selectTests(keyword) {
  const msg = keyword.toLowerCase();
  if (msg.includes("level 1")) return tests.slice(0, 11);
  if (msg.includes("level 2")) return tests.slice(11, 22);
  if (msg.includes("level 3")) return tests.slice(22, 33);
  if (msg.includes("generate test")) return [tests[Math.floor(Math.random() * tests.length)]];
  return [];
}

// --- Helper: Build feedback prompt ---
function buildFeedbackPrompt(task, essay) {
  return `
You are an IELTS Writing examiner. Evaluate the student's essay.

Task: ${task.prompt}
Task Type: ${task.task_type}
Context: ${task.context}
Word Limit: ${task.word_limit}

Rubric:
${Object.entries(task.rubric)
  .map(([key, value]) => `- ${key}: ${value}`)
  .join("\n")}

Student Essay:
"${essay}"

Now provide IELTS-style feedback:
1. Short summary of performance (2 sentences)
2. Criterion scores: Task Achievement, Coherence & Cohesion, Lexical Resource, Grammar
3. Estimated CLB band (6–9)
4. 2 motivational sentences encouraging continued progress.
Keep tone professional, warm, and specific.
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
    const userMessage = (body.message || "").trim();
    const previousMemory = body.memory || [];
    const sessionTime = body.timestamp || Date.now();

    const THIRTY_MINUTES = 1800000;
    const now = Date.now();
    const isExpired = now - sessionTime > THIRTY_MINUTES;
    let memory = isExpired ? [] : previousMemory;

    if (!userMessage) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing message" }),
      };
    }

    let reply = "";

    // --- 1. Handle Boot Camp Levels or Generate Test ---
    if (
      /boot camp|generate test|level 1|level 2|level 3/i.test(userMessage)
    ) {
      const selected = selectTests(userMessage);
      if (selected.length === 0) {
        reply = "Please choose a Boot Camp level or press Generate Test.";
      } else {
        const chosen = selected[Math.floor(Math.random() * selected.length)];
        reply = `🎯 **${chosen.task_id} (${chosen.task_type})**

🧾 **Prompt:** ${chosen.prompt}

⏱️ Time limit: ${chosen.time_limit} minutes  
✍️ Word limit: ${chosen.word_limit} words

**Rubric Highlights:**  
• ${chosen.rubric["Task Response"] || chosen.rubric["Task Achievement"]}  
• ${chosen.rubric["Coherence and Cohesion"]}  
• ${chosen.rubric["Lexical Resource"]}  
• ${chosen.rubric["Grammatical Range and Accuracy"]}

When ready, type **Submit Essay** after your writing to receive an IELTS-style feedback.`;

        // Save chosen task to memory
        memory.push({ role: "system", content: JSON.stringify(chosen) });
      }
    }

    // --- 2. Handle essay submission ---
    else if (/submit essay/i.test(userMessage)) {
      const lastTask = [...memory].reverse().find(
        (m) => m.role === "system" && m.content.includes("task_id")
      );
      if (!lastTask) {
        reply = "You haven’t started a test yet. Please begin a Boot Camp level or generate a test.";
      } else {
        const task = JSON.parse(lastTask.content);
        const lastEssay = [...memory]
          .reverse()
          .find((m) => m.role === "user" && !/submit essay/i.test(m.content));
        const essay = lastEssay ? lastEssay.content : "(No essay found)";
        const feedbackPrompt = buildFeedbackPrompt(task, essay);

        const completion = await client.chat.completions.create({
          model: "gpt-4o-mini",
          temperature: 0.7,
          max_tokens: 800,
          messages: [{ role: "system", content: feedbackPrompt }],
        });

        reply =
          completion.choices?.[0]?.message?.content?.trim() ||
          "Error: Feedback could not be generated.";

        // Optional: emit progress signal
        reply += "\n\n✅ Progress updated. Keep going!";
      }
    }

    // --- 3. Regular IELTS coaching mode ---
    else {
      const systemPrompt = `
You are North Star Academy, an IELTS and English proficiency coach.
Focus on Reading, Writing, and Listening. Avoid Speaking and immigration topics.
Tone: calm, structured, and clear. Limit to 3 concise paragraphs.
Provide practical examples when helpful.
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
