// MIGRATE NORTH ACADEMY EVOLVE FUNCTION - FIXED
// North Star GPS Reading and Writing Coach
// Now properly displays test prompts to users
// FIXED: Refine feature now works correctly without old conversation context

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

// Level ranges - FIXED TO MATCH FRONTEND
const LEVEL_RANGES = {
  "level 1": [0, 11],
  "level 2": [11, 22],
  "level 3": [22, 33]
};

function getSpecificTest(level, testIndex) {
  const [start, end] = LEVEL_RANGES[level];
  const range = tests.slice(start, end);
  return range[testIndex] || null;
}

// Build feedback prompt
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
  const foundationDone = getProgressHelper(memory, "level 1");
  const intermediateDone = getProgressHelper(memory, "level 2");
  const advancedDone = getProgressHelper(memory, "level 3");
  const total = foundationDone + intermediateDone + advancedDone;
  const percentage = Math.round((total / 33) * 100);

  const wordsEntry = memory.find(m => m.role === "stat" && m.key === "total_words");
  const streakEntry = memory.find(m => m.role === "stat" && m.key === "streak_days");

  const totalWords = wordsEntry ? Number(wordsEntry.value) || 0 : 0;
  const streakDays = streakEntry ? Number(streakEntry.value) || 0 : 0;

  return {
    foundationDone,
    intermediateDone,
    advancedDone,
    totalDone: total,
    percentage,
    currentLevel: advancedDone > 0
      ? "Advanced"
      : intermediateDone > 0
        ? "Intermediate"
        : foundationDone > 0
          ? "Foundation"
          : "Not started",
    totalWords,
    streakDays
  };
}

// ADD UNDER: chooseNextTest function
function chooseNextTest(memory) {
  const stats = getProgressStats(memory);

  function nextIndexForLevel(level) {
    const done = getProgressHelper(memory, level);
    const [start, end] = LEVEL_RANGES[level];
    const maxIndex = end - start - 1;
    if (done > maxIndex) return null;
    return done;
  }

  let currentLevel = "level 1";
  if (stats.advancedDone > 0) currentLevel = "level 3";
  else if (stats.intermediateDone > 0) currentLevel = "level 2";
  else if (stats.foundationDone > 0) currentLevel = "level 1";

  let levelToUse = currentLevel;
  let nextIndex = nextIndexForLevel(levelToUse);

  if (nextIndex === null) {
    if (currentLevel === "level 1") levelToUse = "level 2";
    else if (currentLevel === "level 2") levelToUse = "level 3";
    nextIndex = nextIndexForLevel(levelToUse);
  }

  if (nextIndex === null) {
    const randomTest = tests[Math.floor(Math.random() * tests.length)];
    return { task: randomTest, level: "random", index: -1, message: "You have completed all tests. Here is a random practice task." };
  }

  const t = getSpecificTest(levelToUse, nextIndex);
  if (!t) {
    const randomTest = tests[Math.floor(Math.random() * tests.length)];
    return { task: randomTest, level: "random", index: -1, message: "Could not load the next sequential task. Here is a random task." };
  }

  return {
    task: t,
    level: levelToUse,
    index: nextIndex,
    message: `Next task selected for ${levelToUse}, Test ${nextIndex + 1}.`
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

    // AUTO TEST
    if (action === "auto_test") {
      const choice = chooseNextTest(memory);
      const t = choice.task;

      memory = memory.filter(
        m => !(m.role === "system" && m.content && m.content.includes('"task_id":'))
      );

      memory.push({
        role: "system",
        content: JSON.stringify({ ...t, level: choice.level, testIndex: choice.index })
      });

      // FIX: Actually show the test prompt to the user!
      reply = `${choice.message}\n\n${t.type ? '**' + t.type + '**\n\n' : ''}${t.prompt}\n\nYou have 20 minutes. Write at least 150 words. When ready, write your answer and click Submit.`;

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

    // START TEST - FIXED TO SHOW THE ACTUAL TEST
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
          if (!t) reply = "Test not found.";
          else {
            memory = memory.filter(
              m => !(m.role === "system" && m.content && m.content.includes('"task_id":'))
            );

            memory.push({
              role: "system",
              content: JSON.stringify({ ...t, level, testIndex: index })
            });

            // FIX: Actually display the test prompt!
            reply = `${t.type ? '**' + t.type + '**\n\n' : ''}${t.prompt}\n\nYou have 20 minutes. Write at least 150 words. When ready, write your answer and click Submit.`;
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
          reply = "Write at least 20 words before submitting.";
        } else {
          const wordCount = essay.split(/\s+/).filter(Boolean).length;
          const previousWords = Number(getStat("total_words") || 0);
          setStat("total_words", previousWords + wordCount);

          const todayStr = new Date(now).toISOString().slice(0, 10);
          const lastDateStr = getStat("last_study_date");
          let streak = Number(getStat("streak_days") || 0);

          if (!lastDateStr) streak = 1;
          else {
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

          // TASK MODE SYSTEM PROMPT
          const taskModeSystemPrompt = `
You are North Star GPS, the Reading and Writing tutor of Migrate North Academy, created by Matin Immigration Services. You are in TASK MODE. You evaluate IELTS Writing using the North Star skill framework. Perform the following steps:

1. Give a short overall comment.
2. Give an estimated IELTS band RANGE, not a single number.
3. Provide the rubric breakdown: Task Achievement or Response, Coherence and Cohesion, Lexical Resource, Grammar Range and Accuracy.
4. Provide the top three priorities for improvement.
5. Provide two improved versions: a sentence level correction example and a full paragraph improved rewrite.
6. Provide one next step exercise.

Be honest, clear and practical. Never copy rubric text word for word. Use natural tutor language. Only talk about IELTS and academic writing. Do not mention CELPIP or any other exam. Stay inside Task Mode until the user leaves it.
`;

          const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.7,
            max_tokens: 950,
            messages: [
              { role: "system", content: taskModeSystemPrompt },
              { role: "user", content: feedbackPrompt }
            ]
          });

          reply = completion.choices?.[0]?.message?.content?.trim()
            || "I could not generate feedback right now.";

          if (task.level && Number.isInteger(task.testIndex)) {
            const done = getProgress(task.level);
            const needed = task.testIndex + 1;
            if (needed > done) setProgress(task.level, needed);
          }

          const updated = getProgressStats(memory);
          reply += `\n\nProgress: ${updated.totalDone} of 33 tests completed.`;
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
    if (action === "generate_random") {
      const chosen = tests[Math.floor(Math.random() * tests.length)];
      memory.push({
        role: "system",
        content: JSON.stringify({ ...chosen, level: "random", testIndex: -1 })
      });

      // FIX: Show the actual test prompt!
      reply = `${chosen.type ? '**' + chosen.type + '**\n\n' : ''}${chosen.prompt}\n\nWrite at least 150 words. When ready, write your answer and click Submit.`;

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

    // ✅ FIXED: Detect if this is a REFINE request
    const isRefineRequest = rawUserMessage.includes("CRITICAL INSTRUCTIONS") && rawUserMessage.includes("USER TEXT:");

    // MAIN CHAT MODE SYSTEM PROMPT (DUAL MODE)
    const systemPrompt = `
You are North Star GPS, the Reading and Writing tutor of Migrate North Academy. The academy is operated by Matin Immigration Services. You are a friendly expert who teaches IELTS Reading and Writing. You do not teach Listening or Speaking in this chat.

DUAL MODE:
Conversation Mode: default mode for answering questions, teaching concepts, explaining reading strategies, writing structures, vocabulary, grammar and general coaching.
Task Mode: activated when the user starts a test, submits an essay or asks for a practice task. In Task Mode you are structured, exam focused and specific.

NORTH STAR LEVEL SYSTEM:
Foundation: Fundamentals. Reading basics like skimming, scanning and paraphrasing. Writing basics like sentence structure and clear paragraphs.
Intermediate: Development. Reading includes inference, summary completion and distractors. Writing includes complex sentences, cause and effect, problem and solution, and better cohesion.
Advanced: Mastery. Reading includes dense academic texts, Section 3 logic, author attitude and timed passages. Writing aims for Band 7 to 9 quality with advanced vocabulary and sophisticated cohesion.

You always keep explanations clear, structured and practical. Correct grammar, vocabulary and structure when needed. Do not provide immigration legal advice. Only Reading and Writing.
`;

    // ✅ FIXED: For refine requests, DO NOT include conversation history
    const conversationHistory = isRefineRequest 
      ? [] 
      : memory.filter(m => m.role === "user" || m.role === "assistant").slice(-10);

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 700,
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationHistory,  // ✅ FIXED: Empty array for refine requests
        { role: "user", content: rawUserMessage || "Help me with IELTS reading and writing." }
      ]
    });

    const response =
      completion.choices?.[0]?.message?.content?.trim()
      || "How can I help next with your reading or writing practice.";

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
