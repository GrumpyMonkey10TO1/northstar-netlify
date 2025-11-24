// MIGRATE NORTH ACADEMY EVOLVE FUNCTION (Updated for Universal Writing Coach)
// Boot Camp + Timed Tests + Progress Tracking + Coaching Mode

import OpenAI from "openai";
import tests from "../evolve_test.json" assert { type: "json" };

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// CORS
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json"
  };
}

// Level ranges
const LEVEL_RANGES = {
  "level 1": [0, 11],
  "level 2": [11, 22],
  "level 3": [22, 33]
};

// Fetch test
function getSpecificTest(level, testIndex) {
  const [start, end] = LEVEL_RANGES[level];
  const range = tests.slice(start, end);
  return range[testIndex] || null;
}

// CLEAN FEEDBACK PROMPT
// No rubric, no IELTS instructions, no format. Pure task and student essay.
function buildFeedbackPrompt(task, essay) {
  return `
Task:
${task.prompt}

Student Essay:
${essay}
`.trim();
}

// Progress helpers
function getProgressHelper(memory, level) {
  const key = "progress_" + level;
  const rec = memory.find(m => m.role === "progress" && m.key === key);
  return rec ? rec.value : 0;
}

function getProgressStats(memory) {
  const level1Done = getProgressHelper(memory, "level 1");
  const level2Done = getProgressHelper(memory, "level 2");
  const level3Done = getProgressHelper(memory, "level 3");
  const total = level1Done + level2Done + level3Done;
  const percentage = Math.round((total / 33) * 100);

  const wordsEntry = memory.find(m => m.role === "stat" && m.key === "total_words");
  const streakEntry = memory.find(m => m.role === "stat" && m.key === "streak_days");

  const totalWords = wordsEntry ? Number(wordsEntry.value) || 0 : 0;
  const streakDays = streakEntry ? Number(streakEntry.value) || 0 : 0;

  return {
    level1Done,
    level2Done,
    level3Done,
    totalDone: total,
    percentage,
    currentLevel: level3Done > 0
      ? "Level 3"
      : level2Done > 0
        ? "Level 2"
        : level1Done > 0
          ? "Level 1"
          : "Not started",
    totalWords,
    streakDays
  };
}

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(), body: "ok" };
  }
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const action = body.action || null;
    const params = body.params || {};
    const rawUserMessage = (body.message || "").trim();
    const lowerMsg = rawUserMessage.toLowerCase();
    const previousMemory = body.memory || [];
    const sessionTime = body.timestamp || Date.now();

    const THIRTY = 1800000;
    const now = Date.now();
    const expired = now - sessionTime > THIRTY;

    let memory = expired ? [] : previousMemory;
    let reply = "";

    function getProgress(level) {
      const key = "progress_" + level;
      const rec = memory.find(m => m.role === "progress" && m.key === key);
      return rec ? rec.value : 0;
    }

    function setProgress(level, val) {
      const key = "progress_" + level;
      memory = memory.filter(m => !(m.role === "progress" && m.key === key));
      memory.push({ role: "progress", key, value: val });
    }

    function getStat(key) {
      const rec = memory.find(m => m.role === "stat" && m.key === key);
      return rec ? rec.value : undefined;
    }

    function setStat(key, value) {
      memory = memory.filter(m => !(m.role === "stat" && m.key === key));
      memory.push({ role: "stat", key, value });
    }

    const stats = getProgressStats(memory);

    // START TEST
    if (action === "start_test") {
      const level = (params.level || "level 1").toLowerCase();
      const index = Number(params.testIndex ?? 0);

      if (!LEVEL_RANGES[level]) {
        reply = "Choose a valid level.";
      } else if (isNaN(index) || index < 0 || index > 10) {
        reply = "Choose a valid test number.";
      } else {
        const unlocked = getProgress(level);
        if (index > unlocked) {
          reply = "This test is locked. Complete the previous test first.";
        } else {
          const t = getSpecificTest(level, index);
          if (!t) {
            reply = "Test not found.";
          } else {
            memory = memory.filter(
              m => !(m.role === "system" && m.content && m.content.includes('"task_id":'))
            );

            memory.push({
              role: "system",
              content: JSON.stringify({ ...t, level, testIndex: index })
            });

            reply = "Test loaded. When you are ready, write your full answer and then submit.";
          }
        }
      }

      memory.push({ role: "assistant", content: reply });
      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({
          message: reply,
          memory,
          timestamp: now,
          stats: getProgressStats(memory)
        })
      };
    }
    // SUBMIT ESSAY
    if (action === "submit_essay") {
      const lastTask = [...memory]
        .reverse()
        .find(m => m.role === "system" && m.content && m.content.includes('"task_id"'));

      if (!lastTask) {
        reply = "Start a test first, then submit your writing.";
      } else {
        const task = JSON.parse(lastTask.content);
        let essay = (params.essay || "").trim();

        if (!essay) {
          const lastEssay = [...memory].reverse().find(m => m.role === "user");
          essay = lastEssay ? (lastEssay.content || "").trim() : "";
        }

        if (!essay || essay.split(/\s+/).filter(Boolean).length < 20) {
          reply = "Please write at least 20 words before submitting.";
        } else {
          const wordCount = essay.split(/\s+/).filter(Boolean).length;
          const previousWords = Number(getStat("total_words") || 0);
          setStat("total_words", previousWords + wordCount);

          const todayStr = new Date(now).toISOString().slice(0, 10);
          const lastDateStr = getStat("last_study_date");
          let streak = Number(getStat("streak_days") || 0);

          if (!lastDateStr) {
            streak = 1;
          } else {
            const lastDate = new Date(lastDateStr);
            const todayDate = new Date(todayStr);
            const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / 86400000);

            if (diffDays === 0) {
              if (streak < 1) streak = 1;
            } else if (diffDays === 1) {
              streak = (streak || 0) + 1;
            } else {
              streak = 1;
            }
          }

          setStat("last_study_date", todayStr);
          setStat("streak_days", streak);

          const feedbackPrompt = buildFeedbackPrompt(task, essay);

          const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.7,
            max_tokens: 950,
            messages: [
              {
                role: "system",
                content: `
You are the Universal Writing Coach for Migrate North Academy. You teach writing for all English proficiency exams, including IELTS Academic, IELTS General Training, CELPIP General, CELPIP LS, and any other standardized English test. Be direct, instructional, and detailed. Never skip obvious errors.

When evaluating a student essay, always use this structure:

1. SCORES AND CALCULATION
- Give Structure, Vocabulary, and Grammar scores from 0 to 9.
- Calculate the Overall score as the average of the three skills, rounded to the nearest 0.5.
- State clearly that the Overall Score equals the average of the three skill scores, rounded.

2. EXPLANATION OF SCORES
Give 2 to 3 short bullet points per skill.

3. ERROR LIST WITH CORRECTIONS
List at least 5 concrete mistakes. For each:
Original
Corrected
One sentence reason

4. IMPROVED VERSION
Rewrite the full answer in one clean paragraph.

If the user mentions IELTS Academic, IELTS General, CELPIP, or another test, include a short adaptation note.

Always correct issues like lowercase i, missing capitalization, sentence fragments, run ons, and agreement problems.
`
              },
              { role: "user", content: feedbackPrompt }
            ]
          });

          reply = completion.choices?.[0]?.message?.content?.trim() || "I could not generate feedback just now.";

          if (task.level && Number.isInteger(task.testIndex)) {
            const done = getProgress(task.level);
            const needed = task.testIndex + 1;
            if (needed > done) setProgress(task.level, needed);
          }

          const updated = getProgressStats(memory);
          reply += `

Progress: ${updated.totalDone} of 33 tests done.`;
        }
      }

      memory.push({ role: "assistant", content: reply });
      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({
          message: reply,
          memory,
          timestamp: now,
          stats: getProgressStats(memory)
        })
      };
    }

    // RANDOM TEST
    if (action === "generate_random" || /generate test/.test(lowerMsg)) {
      const chosen = tests[Math.floor(Math.random() * tests.length)];
      memory.push({
        role: "system",
        content: JSON.stringify({ ...chosen, level: "random", testIndex: -1 })
      });

      reply = "Random practice test loaded. Write your answer when you are ready.";

      memory.push({ role: "assistant", content: reply });
      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({
          message: reply,
          memory,
          timestamp: now,
          stats: getProgressStats(memory)
        })
      };
    }

    // MAIN COACH RESPONSE
    const systemPrompt = `
You are the Universal Writing Coach for Migrate North Academy. You teach writing for all English proficiency exams, including IELTS Academic, IELTS General Training, CELPIP General, CELPIP LS, and any other standardized English test. Be direct, practical, and helpful.

If the user provides writing, offer corrections and suggestions. If they ask questions, explain clearly without forcing the scoring format. When evaluating writing, you normally use the structure of scores, explanations, error list, and improved version.

Always correct issues like lowercase i, missing capitalization of proper nouns, fragments, run ons, and agreement errors.
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 700,
      messages: [
        { role: "system", content: systemPrompt },
        ...memory.filter(m => m.role === "user" || m.role === "assistant").slice(-10),
        { role: "user", content: rawUserMessage || "Help me with English exam preparation." }
      ]
    });

    const response =
      completion.choices?.[0]?.message?.content?.trim() ||
      "How can I help next with your English exam preparation.";

    if (rawUserMessage) memory.push({ role: "user", content: rawUserMessage });
    memory.push({ role: "assistant", content: response });

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        message: response,
        memory,
        timestamp: now,
        stats: getProgressStats(memory)
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: err.message })
    };
  }
};
