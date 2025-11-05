// === NORTH STAR ACADEMY – EVOLVE BOT
// Full IELTS Coach + Hierarchical Boot Camp + Timed Test Sessions + Essay-in-message Fix + Coach Mode (v8a)
// Netlify Function: /netlify/functions/chat-evolve.js

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

// --- Level ranges (0-indexed test slices) ---
const LEVEL_RANGES = {
  "level 1": [0, 11],   // tests[0..10]
  "level 2": [11, 22],  // tests[11..21]
  "level 3": [22, 33],  // tests[22..32]
};

// Helper: get a specific test by level + index (0..10)
function getSpecificTest(level, testIndex) {
  const [start, end] = LEVEL_RANGES[level];
  const range = tests.slice(start, end);
  return range[testIndex] || null;
}

// --- Feedback prompt builder ---
function buildFeedbackPrompt(task, essay) {
  return `
You are an IELTS Writing examiner. Evaluate the student's essay according to IELTS Writing Task standards.

Task: ${task.prompt}
Task Type: ${task.task_type}
Word Limit: ${task.word_limit}

Rubric:
${Object.entries(task.rubric).map(([k, v]) => `- ${k}: ${v}`).join("\n")}

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
  // --- CORS preflight ---
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(), body: "ok" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: corsHeaders(), body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const action = body.action || null;
    const params = body.params || {};
    const rawUserMessage = (body.message || "").trim();
    const userMessage = rawUserMessage;
    const lowerMsg = rawUserMessage.toLowerCase();
    const previousMemory = body.memory || [];
    const sessionTime = body.timestamp || Date.now();
    const THIRTY_MINUTES = 1800000;
    const now = Date.now();
    const isExpired = now - sessionTime > THIRTY_MINUTES;

    let memory = isExpired ? [] : previousMemory;
    let reply = "";

    let contextMode = memory.find((m) => m.role === "context" && m.value === "coach") ? "coach" : "normal";

    // === Helpers for progress ===
    function getProgress(level) {
      const key = `progress_${level}`;
      const rec = memory.find((m) => m.role === "progress" && m.key === key);
      return rec ? rec.value : 0;
    }
    function setProgress(level, newVal) {
      const key = `progress_${level}`;
      memory = memory.filter((m) => !(m.role === "progress" && m.key === key));
      memory.push({ role: "progress", key, value: newVal });
    }

    // --- ACTION: start_test (Boot Camp trigger) ---
    if (action === "start_test") {
      // Default values if none provided
      const level = (params.level || "level 1").toLowerCase();
      const testIndex = Number(params.testIndex ?? 0);

      if (!LEVEL_RANGES[level]) {
        reply = "Please choose a valid level.";
      } else if (Number.isNaN(testIndex) || testIndex < 0 || testIndex > 10) {
        reply = "Please choose a valid test index.";
      } else {
        const unlocked = getProgress(level);
        if (testIndex > unlocked) {
          reply = "That test is locked. Please complete previous tests first.";
        } else {
          const t = getSpecificTest(level, testIndex);
          if (!t) {
            reply = "Test not found.";
          } else {
            // Reset old context + start new task
            memory = memory.filter((m) => !(m.role === "system" && m.content?.includes('"task_id":')));
            memory.push({ role: "system", content: JSON.stringify({ ...t, level, testIndex }) });
            memory = memory.filter((m) => m.role !== "context");

            reply = `🎯 ${t.task_id} (${t.task_type})
Prompt: ${t.prompt}
Time limit: ${t.time_limit} minutes
Word limit: ${t.word_limit} words

When ready, write your essay. Click Submit to receive IELTS-style feedback.`;
          }
        }
      }

      memory.push({ role: "assistant", content: reply });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ message: reply, memory, timestamp: now }) };
    }

    // --- ACTION: submit_essay (structured feedback) ---
    if (action === "submit_essay") {
      const lastTask = [...memory].reverse().find((m) => m.role === "system" && m.content.includes('"task_id"'));
      if (!lastTask) {
        reply = "You haven’t started a test yet. Please choose a test first.";
      } else {
        const task = JSON.parse(lastTask.content);
        let essay = (params.essay || "").trim();
        if (!essay && rawUserMessage) {
          if (lowerMsg.includes("submit essay")) essay = rawUserMessage.split(/submit essay/i)[0].trim();
          else essay = rawUserMessage;
        }
        if (!essay) {
          const lastEssay = [...memory].reverse().find((m) => m.role === "user" && !/submit essay/i.test(m.content));
          essay = lastEssay ? lastEssay.content : "";
        }

        if (!essay || essay.split(/\s+/).filter(Boolean).length < 20) {
          reply = "Please write your essay (20+ words) before submitting.";
        } else {
          const feedbackPrompt = buildFeedbackPrompt(task, essay);
          const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.7,
            max_tokens: 900,
            stream: false,
            messages: [
              { role: "system", content: "You are an IELTS Writing examiner." },
              { role: "user", content: feedbackPrompt },
            ],
          });
          reply = completion?.choices?.[0]?.message?.content?.trim() || "Error: Feedback could not be generated.";

          // Mark progress
          if (task.level && Number.isInteger(task.testIndex)) {
            const done = getProgress(task.level);
            const needed = task.testIndex + 1;
            if (needed > done) setProgress(task.level, needed);
          }

          reply += "\n\n✅ Progress updated. You can start your next test from the Boot Camp menu.";
          memory = memory.filter((m) => m.role !== "context");
          memory.push({ role: "context", value: "coach" });
        }
      }

      memory.push({ role: "assistant", content: reply });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ message: reply, memory, timestamp: now }) };
    }

    // --- RANDOM TEST (triggered by generate test / Start Random practice) ---
    if (action === "generate_random" || /generate test/.test(lowerMsg)) {
      const chosen = tests[Math.floor(Math.random() * tests.length)];
      memory.push({ role: "system", content: JSON.stringify({ ...chosen, level: "random", testIndex: -1 }) });
      reply = `🎯 ${chosen.task_id} (${chosen.task_type})
Prompt: ${chosen.prompt}
Time limit: ${chosen.time_limit} minutes
Word limit: ${chosen.word_limit} words

When ready, type your essay and Submit for feedback.`;
      memory.push({ role: "assistant", content: reply });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ message: reply, memory, timestamp: now }) };
    }

    // --- LEGACY submit essay in chat ---
    if (/submit essay/i.test(lowerMsg)) {
      const lastTask = [...memory].reverse().find((m) => m.role === "system" && m.content.includes('"task_id"'));
      if (!lastTask) {
        reply = "You haven’t started a test yet. Please choose a test first.";
      } else {
        const task = JSON.parse(lastTask.content);
        let essay = rawUserMessage.split(/submit essay/i)[0].trim();
        if (!essay) {
          const lastEssay = [...memory].reverse().find((m) => m.role === "user" && !/submit essay/i.test(m.content));
          essay = lastEssay ? lastEssay.content : "";
        }
        if (!essay) reply = "Please write your essay before submitting.";
        else {
          const feedbackPrompt = buildFeedbackPrompt(task, essay);
          const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.7,
            max_tokens: 900,
            stream: false,
            messages: [
              { role: "system", content: "You are an IELTS Writing examiner." },
              { role: "user", content: feedbackPrompt },
            ],
          });
          reply = completion?.choices?.[0]?.message?.content?.trim() || "Error: Feedback could not be generated.";
          if (task.level && Number.isInteger(task.testIndex)) {
            const done = getProgress(task.level);
            const needed = task.testIndex + 1;
            if (needed > done) setProgress(task.level, needed);
          }
          reply += "\n\n✅ Progress updated. You can start your next test from the Boot Camp menu.";
          memory = memory.filter((m) => m.role !== "context");
          memory.push({ role: "context", value: "coach" });
        }
      }
      memory.push({ role: "assistant", content: reply });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ message: reply, memory, timestamp: now }) };
    }

    // --- REGULAR COACH / FOLLOW-UP ---
    const systemPrompt = (contextMode === "coach")
      ? `You are North Star GPS from Migrate North Academy, acting as a writing coach after giving IELTS feedback.
Help the student understand mistakes, suggest improvements, and provide short model lines if asked.
Be specific, warm, and practical. Keep replies under 8 sentences. No markdown or special characters.`
      : `You are North Star Academy, an IELTS and English proficiency coach.
Focus on Reading, Writing, and Listening. Avoid Speaking and immigration topics.
Be concise, logical, and motivating. Provide clear examples. No markdown or special characters.`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 700,
      stream: false,
      messages: [
        { role: "system", content: systemPrompt },
        ...memory,
        { role: "user", content: userMessage },
      ],
    });

    const response = completion?.choices?.[0]?.message?.content?.trim() || "Let's continue improving step by step.";
    memory.push({ role: "assistant", content: response });
    return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ message: response, memory, timestamp: now }) };

  } catch (err) {
    console.error("❌ Evolve bot error:", err);
    return { statusCode: 500, headers: corsHeaders(), body: JSON.stringify({ error: err.message }) };
  }
};
