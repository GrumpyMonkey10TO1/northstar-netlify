// === MIGRATE NORTH ACADEMY – EVOLVE BOT
// Full IELTS Coach + Hierarchical Boot Camp + Timed Test Sessions + Enhanced Coaching Personality (v9)
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

// --- Enhanced Feedback prompt builder with motivational elements ---
function buildFeedbackPrompt(task, essay) {
  return `
You are an IELTS Writing examiner with a coaching mindset. Evaluate the student's essay according to IELTS Writing Task standards, but maintain an encouraging and growth-focused tone.

Task: ${task.prompt}
Task Type: ${task.task_type}
Word Limit: ${task.word_limit}

Rubric:
${Object.entries(task.rubric).map(([k, v]) => `- ${k}: ${v}`).join("\n")}

Student Essay:
"${essay}"

Now, evaluate the essay following this structure:

1. PERFORMANCE SUMMARY (2-3 sentences)
   - What did they do well?
   - Where's the biggest opportunity for improvement?

2. CRITERION SCORES (be specific):
   - Task Achievement: [score/9] - [one sentence why]
   - Coherence & Cohesion: [score/9] - [one sentence why]
   - Lexical Resource: [score/9] - [one sentence why]
   - Grammatical Range & Accuracy: [score/9] - [one sentence why]

3. ESTIMATED CLB BAND: [6.0 - 9.0]
   (If CLB 8+: Emphasize they're on track for Express Entry success!)

4. TOP 3 ACTIONABLE IMPROVEMENTS
   - Be specific (not just "improve vocabulary")
   - Focus on IELTS format strategies, not generic English advice
   - Example: "In Task 2, use clear topic sentences: 'One major advantage is...' rather than vague openings"

5. MOTIVATION (2 sentences)
   - Celebrate what they did right (even small wins)
   - Connect improvement to their Canada immigration goal
   - Be warm but realistic (avoid fake hype)

TONE GUIDELINES:
- If essay shows effort: Acknowledge it warmly
- If basic mistakes: Be gentle but direct ("Let's fix this together...")
- If strong performance: Celebrate genuinely ("You're crushing it!")
- If plateau/struggle: Normalize it ("This is where most people get stuck—keep pushing")

Keep the response concise, actionable, and motivating. This is their coach, not just an examiner.
`.trim();
}

// --- Calculate progress percentage ---
function getProgressStats(memory) {
  const level1Done = getProgressHelper(memory, "level 1");
  const level2Done = getProgressHelper(memory, "level 2");
  const level3Done = getProgressHelper(memory, "level 3");
  const total = level1Done + level2Done + level3Done;
  const percentage = Math.round((total / 33) * 100);
  
  return {
    level1Done,
    level2Done,
    level3Done,
    totalDone: total,
    percentage,
    currentLevel: level3Done > 0 ? "Level 3 (Mastery)" : level2Done > 0 ? "Level 2 (Development)" : "Level 1 (Foundation)"
  };
}

function getProgressHelper(memory, level) {
  const key = `progress_${level}`;
  const rec = memory.find((m) => m.role === "progress" && m.key === key);
  return rec ? rec.value : 0;
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

    // Get current progress stats for contextual responses
    const stats = getProgressStats(memory);

    // --- ACTION: start_test (Boot Camp trigger) ---
    if (action === "start_test") {
      const level = (params.level || "level 1").toLowerCase();
      const testIndex = Number(params.testIndex ?? 0);

      if (!LEVEL_RANGES[level]) {
        reply = "Please choose a valid level: Level 1 (Foundation), Level 2 (Development), or Level 3 (Mastery).";
      } else if (Number.isNaN(testIndex) || testIndex < 0 || testIndex > 10) {
        reply = "Please choose a valid test number (1-11).";
      } else {
        const unlocked = getProgress(level);
        if (testIndex > unlocked) {
          reply = `🔒 Test ${testIndex + 1} is locked. Complete Test ${unlocked + 1} first to unlock it!\n\nProgress: ${stats.totalDone}/33 tests (${stats.percentage}%)`;
        } else {
          const t = getSpecificTest(level, testIndex);
          if (!t) {
            reply = "Test not found. Please try another selection.";
          } else {
            // Reset old context + start new task
            memory = memory.filter((m) => !(m.role === "system" && m.content?.includes('"task_id":')));
            memory.push({ role: "system", content: JSON.stringify({ ...t, level, testIndex }) });
            memory = memory.filter((m) => m.role !== "context");

            // Progress-aware encouragement
            let encouragement = "";
            if (stats.totalDone === 0) {
              encouragement = "\n\n🎯 This is your first test! Focus on understanding the format, not perfection. You've got this!";
            } else if (stats.totalDone < 11) {
              encouragement = `\n\n📈 Test ${stats.totalDone + 1}/33 - You're ${stats.percentage}% through! Level 1 is about learning patterns.`;
            } else if (stats.totalDone < 22) {
              encouragement = `\n\n💪 Test ${stats.totalDone + 1}/33 - ${stats.percentage}% complete! Level 2 is where speed meets accuracy.`;
            } else {
              encouragement = `\n\n🔥 Test ${stats.totalDone + 1}/33 - ${stats.percentage}% complete! Level 3 is BRUTAL but you're almost there!`;
            }

            reply = `🎯 ${t.task_id} (${t.task_type})

**Prompt:** ${t.prompt}

⏱️ Time limit: ${t.time_limit} minutes
📝 Word limit: ${t.word_limit} words${encouragement}

When you're ready, write your essay below and click **Submit Essay** for detailed IELTS feedback.`;
          }
        }
      }

      memory.push({ role: "assistant", content: reply });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ message: reply, memory, timestamp: now }) };
    }

    // --- ACTION: submit_essay (structured feedback with motivation) ---
    if (action === "submit_essay") {
      const lastTask = [...memory].reverse().find((m) => m.role === "system" && m.content.includes('"task_id"'));
      if (!lastTask) {
        reply = "You haven't started a test yet. Head to the Boot Camp menu to choose your first test!";
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
          reply = "Your essay needs at least 20 words for evaluation. Take your time and write your response!";
        } else {
          const feedbackPrompt = buildFeedbackPrompt(task, essay);
          const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.7,
            max_tokens: 900,
            stream: false,
            messages: [
              { role: "system", content: "You are an IELTS Writing examiner with a coaching mindset. Be specific, actionable, and encouraging." },
              { role: "user", content: feedbackPrompt },
            ],
          });
          reply = completion?.choices?.[0]?.message?.content?.trim() || "Error: Feedback could not be generated. Please try again.";

          // Mark progress
          if (task.level && Number.isInteger(task.testIndex)) {
            const done = getProgress(task.level);
            const needed = task.testIndex + 1;
            if (needed > done) setProgress(task.level, needed);
          }

          // Update stats for next message
          const newStats = getProgressStats(memory);
          
          // Progress-based celebration
          let celebration = "";
          if (newStats.totalDone === 1) {
            celebration = "\n\n🎉 First test complete! You've started your IELTS journey.";
          } else if (newStats.totalDone === 11) {
            celebration = "\n\n🏆 Level 1 COMPLETE! You've learned the patterns. Ready for Level 2?";
          } else if (newStats.totalDone === 22) {
            celebration = "\n\n🚀 Level 2 COMPLETE! Time for Level 3 - the final push to CLB 9!";
          } else if (newStats.totalDone === 33) {
            celebration = "\n\n🎓 BOOT CAMP COMPLETE! All 33 tests done. You're ready to book your real IELTS exam!";
          } else {
            celebration = `\n\n✅ Progress: ${newStats.totalDone}/33 tests (${newStats.percentage}%). Keep going!`;
          }

          reply += celebration;
          reply += "\n\nHave questions about your feedback? Ask me anything!";
          
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
      
      reply = `🎲 Random Practice Test

🎯 ${chosen.task_id} (${chosen.task_type})

**Prompt:** ${chosen.prompt}

⏱️ Time limit: ${chosen.time_limit} minutes
📝 Word limit: ${chosen.word_limit} words

💡 Random practice is great for variety, but structured Boot Camp (Levels 1-3) tracks your progress better!

Write your essay below and click **Submit Essay** for feedback.`;
      
      memory.push({ role: "assistant", content: reply });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ message: reply, memory, timestamp: now }) };
    }

    // --- LEGACY submit essay in chat ---
    if (/submit essay/i.test(lowerMsg)) {
      const lastTask = [...memory].reverse().find((m) => m.role === "system" && m.content.includes('"task_id"'));
      if (!lastTask) {
        reply = "No active test found. Start a test from the Boot Camp menu first!";
      } else {
        const task = JSON.parse(lastTask.content);
        let essay = rawUserMessage.split(/submit essay/i)[0].trim();
        if (!essay) {
          const lastEssay = [...memory].reverse().find((m) => m.role === "user" && !/submit essay/i.test(m.content));
          essay = lastEssay ? lastEssay.content : "";
        }
        if (!essay) {
          reply = "Please write your essay before submitting!";
        } else {
          const feedbackPrompt = buildFeedbackPrompt(task, essay);
          const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.7,
            max_tokens: 900,
            stream: false,
            messages: [
              { role: "system", content: "You are an IELTS Writing examiner with a coaching mindset." },
              { role: "user", content: feedbackPrompt },
            ],
          });
          reply = completion?.choices?.[0]?.message?.content?.trim() || "Error: Feedback generation failed.";
          
          if (task.level && Number.isInteger(task.testIndex)) {
            const done = getProgress(task.level);
            const needed = task.testIndex + 1;
            if (needed > done) setProgress(task.level, needed);
          }
          
          const newStats = getProgressStats(memory);
          reply += `\n\n✅ Progress: ${newStats.totalDone}/33 (${newStats.percentage}%). Keep pushing!`;
          
          memory = memory.filter((m) => m.role !== "context");
          memory.push({ role: "context", value: "coach" });
        }
      }
      memory.push({ role: "assistant", content: reply });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ message: reply, memory, timestamp: now }) };
    }

    // --- REGULAR COACH / FOLLOW-UP with enhanced personality ---
    const systemPrompt = (contextMode === "coach")
      ? `You are North Star IELTS Coach from Migrate North Academy. You just gave feedback on a student's IELTS Writing essay.

YOUR ROLE NOW:
- Answer follow-up questions about the feedback
- Explain specific mistakes or scoring decisions
- Provide mini-lessons on IELTS strategies
- Offer model sentences/phrases when asked
- Keep students motivated through plateaus

STUDENT PROGRESS: ${stats.totalDone}/33 tests complete (${stats.percentage}%) - Currently in ${stats.currentLevel}

YOUR PERSONALITY:
- Warm and encouraging (like a supportive coach)
- Strategic and specific (not generic "practice more" advice)
- Reference their progress naturally ("You're ${stats.percentage}% through!")
- Celebrate improvements, normalize struggles
- Connect to their Canada PR goal when relevant

RESPONSE STYLE:
- Short paragraphs (2-3 sentences max)
- Actionable advice (not just theory)
- Use specific IELTS examples
- Keep replies under 8 sentences total
- No markdown formatting or special characters

SAMPLE RESPONSES:
"That coherence issue? Try starting each body paragraph with a clear topic sentence: 'One major advantage is...' or 'The primary disadvantage involves...' This signals to the examiner exactly what you're discussing."

"You're at 15/33 tests (${stats.percentage}%). The CLB 8 to 9 jump is HARD - most people plateau here around test 15-20. Research shows the breakthrough typically comes around test 25-28. Keep pushing!"

BE HONEST:
- 
- Base advice on IELTS research and proven strategies
- Say "Research shows..." not "Our students achieved..."
- Typical improvement: 1-2 bands over 6-8 weeks with dedicated practice`
      
      : `You are North Star GPS from Migrate North Academy.

YOUR MISSION:
Help students master IELTS Writing (Task 1 & 2) and ANY ENGLISH PROFICIENCY TEST through the 33-test Boot Camp system.

STUDENT PROGRESS: ${stats.totalDone}/33 tests (${stats.percentage}%) - ${stats.currentLevel}

THE 3-LEVEL SYSTEM:
**Level 1 (Tests 1-11): Foundation**
- Goal: Learn IELTS patterns and question types
- Difficulty: Easier than real IELTS
- Target: Consistent CLB 8
- Message: "You're learning the format - focus on accuracy"

**Level 2 (Tests 12-22): Development**
- Goal: Build speed and confidence  
- Difficulty: Real IELTS level
- Target: Consistent CLB 8.5
- Message: "Speed + accuracy = this is where it clicks"

**Level 3 (Tests 23-33): Mastery**
- Goal: Overtraining (harder than real IELTS)
- Difficulty: BRUTAL (deliberately challenging)
- Target: CLB 9+ in practice
- Message: "If Level 3 feels hard, that's the point. Real IELTS will feel easy."

YOUR PERSONALITY:
- Motivational but realistic (like a personal trainer)
- Strategy-focused (IELTS patterns, not generic English)
- Progress-aware (reference their stats naturally)
- Encouraging through struggles
- Honest about timelines (6-8 weeks for 1-2 band improvement)

WHAT YOU TEACH (IELTS Writing Strategies):

**Task 2 Essay Structure (memorize this):**
1. Introduction (2 sentences):
   - Paraphrase the question
   - State your thesis/position
   
2. Body Paragraph 1 (5-6 sentences):
   - Topic sentence
   - Explanation
   - Example
   - Link back to question
   
3. Body Paragraph 2 (5-6 sentences):
   - Same structure as above
   
4. Conclusion (2 sentences):
   - Summarize main points
   - Restate position

**Time Management:**
- Task 1: 20 minutes (150 words)
- Task 2: 40 minutes (250 words)
- Task 2 = 2/3 of your score (PRIORITIZE IT)

**Quick Wins:**
- Use topic sentences ("One major advantage is...")
- Vary vocabulary (transportation/transit/mobility)
- Complex sentences (relative clauses, conditionals)
- Academic tone (avoid "I think", use "It appears that")
- Link words (Moreover, However, Consequently)

RESPONSE STYLE:
- Short paragraphs (easy to read)
- Specific examples (not vague advice)
- Reference progress ("You're at test ${stats.totalDone}/33")
- Actionable next steps
- Keep under 10 sentences
- No markdown or special formatting

MOTIVATIONAL APPROACH:
- Struggling? "This is NORMAL at your stage. Keep pushing."
- Plateau? "CLB 8 to 9 is hardest. Breakthrough comes around test 25-28."
- Improved? "That 0.5 band jump = +6-12 CRS points. Huge win!"
- Completed 33? "You're ready. Book that IELTS exam with confidence."

BE HONEST:
- We're newly launched (no fake success stories)
- Base claims on IELTS research (Cambridge, British Council)
- Typical timeline: 6-8 weeks for 1-2 band improvement
- Don't guarantee specific scores

WHAT YOU DON'T DO:
- Express Entry application help (that's Execute bot)
- General immigration questions (that's Explore bot)
- Speaking practice (AI feedback coming Q3 2025)
- Reading/Listening in detail (focus is Writing)`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 700,
      stream: false,
      messages: [
        { role: "system", content: systemPrompt },
        ...memory.filter(m => m.role === "user" || m.role === "assistant").slice(-10), // Last 10 conversation messages
        { role: "user", content: userMessage },
      ],
    });

    const response = completion?.choices?.[0]?.message?.content?.trim() || "Let's keep working on improving your IELTS Writing step by step. What specific area would you like to focus on?";
    memory.push({ role: "user", content: userMessage });
    memory.push({ role: "assistant", content: response });
    return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ message: response, memory, timestamp: now }) };

  } catch (err) {
    console.error("❌ Evolve bot error:", err);
    return { statusCode: 500, headers: corsHeaders(), body: JSON.stringify({ error: err.message }) };
  }
};
