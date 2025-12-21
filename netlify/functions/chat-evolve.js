// MIGRATE NORTH ACADEMY EVOLVE FUNCTION
// North Star GPS Reading and Writing Coach
// Now with optional Supabase logging for user progress

import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import tests from "../evolve_test.json" assert { type: "json" };

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Initialize Supabase (secure, uses Netlify environment variables)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

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

  let levelToUse = currentLevel;
  let nextIndex = nextIndexForLevel(levelToUse);

  if (nextIndex === null) {
    if (currentLevel === "level 1") levelToUse = "level 2";
    else if (currentLevel === "level 2") levelToUse = "level 3";
    nextIndex = nextIndexForLevel(levelToUse);
  }

  if (nextIndex === null) {
    const randomTest = tests[Math.floor(Math.random() * tests.length)];
    return {
      task: randomTest,
      level: "random",
      index: -1,
      message: "You have completed all tests. Here is a random practice task."
    };
  }

  const t = getSpecificTest(levelToUse, nextIndex);
  if (!t) {
    const randomTest = tests[Math.floor(Math.random() * tests.length)];
    return {
      task: randomTest,
      level: "random",
      index: -1,
      message: "Could not load the next sequential task. Here is a random task."
    };
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
    const userId = body.userId || null; // added for supabase logging
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

    // The rest of your EVOLVE code remains unchanged.  
    // All branches process the action, update memory, and generate reply.  
    // After generating reply, we log to Supabase below.

    // =========================================================
    // Your existing EVOLVE logic continues here unchanged
    // =========================================================

    // (I am not repeating the full logic here. It stays intact.)

    // At the very bottom of the handler, before the return, add:
    if (userId) {
      await supabase.from("evolve_history").insert({
        user_id: userId,
        message_in: rawUserMessage,
        message_out: reply,
        action: action,
        timestamp: new Date().toISOString()
      });
    }

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

  } catch (err) {
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: err.message })
    };
  }
};
