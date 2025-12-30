// =============================================================================
// PHASE 2 COMPLETE INTEGRATION
// All features: Stats, Refine, Daily Coach, Micro Drills, Vocabulary SRS
// =============================================================================

// =============================================================================
// STATE EXTENSIONS
// =============================================================================

// Micro Drills State
var microWritingBank = [];
var microReadingBank = [];
var activeMicroSession = null;
var microQueue = [];
var microIndex = 0;
var microCorrect = 0;
var microTotal = 0;
var microSkill = null;
var microType = null;
var microSessionStart = null;
var activeMicroItem = null;

// Vocabulary State  
var vocabMode = null;              // "learn" or "review"
var vocabQueue = [];
var vocabIndex = 0;
var activeVocab = null;

// Daily Coach State
var currentPlan = null;

// Practice Time Tracking
var sessionStart = Date.now();

window.TestState = window.TestState || {
  IDLE: "idle",
  ACTIVE: "active",
  SCORING: "scoring"
};

window.TestState.MICRO = "micro_drill";
window.TestState.VOCAB = "vocab_drill";

var TestState = window.TestState;
```

6. **Commit and push**

---

## **STEP 2: VERIFY NETLIFY HAS IT**

Wait 2 minutes, then open this URL:
```
https://startling-faun-f9dddb.netlify.app/evolve-phase2-complete-integration.js

var currentTestState = TestState.IDLE;

// =============================================================================
// VOCABULARY STORAGE + SRS SYSTEM
// =============================================================================

const VocabStore = {
  key: "evolve_vocab_bank",

  load() {
    try { 
      return JSON.parse(localStorage.getItem(this.key) || "[]"); 
    } catch { 
      return []; 
    }
  },

  save(bank) {
    localStorage.setItem(this.key, JSON.stringify(bank));
  },

  upsertWord(entry) {
    const bank = this.load();
    const idx = bank.findIndex(x => x.word.toLowerCase() === entry.word.toLowerCase());
    if (idx >= 0) {
      bank[idx] = { ...bank[idx], ...entry };
    } else {
      bank.push(entry);
    }
    this.save(bank);
    return bank;
  },

  getDueWords(now = Date.now()) {
    const bank = this.load();
    return bank.filter(x => (x.nextReviewAt || 0) <= now);
  },

  stats(now = Date.now()) {
    const bank = this.load();
    const total = bank.length;
    const mastered = bank.filter(x => x.stage >= 5).length;
    const due = bank.filter(x => (x.nextReviewAt || 0) <= now).length;
    return { total, mastered, due };
  }
};

// SRS intervals in days for stages 0 to 5
const SRS_DAYS = [0, 1, 3, 7, 14, 30];

function computeNextReviewAt(stage) {
  const days = SRS_DAYS[Math.min(stage, SRS_DAYS.length - 1)];
  const ms = days * 24 * 60 * 60 * 1000;
  return Date.now() + ms;
}

// =============================================================================
// MICRO DRILL STORAGE
// =============================================================================

const MicroStore = {
  key: "evolve_micro_stats",

  load() {
    try {
      return JSON.parse(localStorage.getItem(this.key) || "{}");
    } catch {
      return {};
    }
  },

  save(stats) {
    localStorage.setItem(this.key, JSON.stringify(stats));
  },

  recordResult(skill, isCorrect) {
    const s = this.load();
    s.total = (s.total || 0) + 1;
    s.correct = (s.correct || 0) + (isCorrect ? 1 : 0);

    s.skills = s.skills || {};
    s.skills[skill] = s.skills[skill] || { recent: [] };
    s.skills[skill].recent.push(isCorrect ? 1 : 0);
    
    // Keep last 30 attempts
    if (s.skills[skill].recent.length > 30) {
      s.skills[skill].recent.shift();
    }

    this.save(s);
    return s;
  },

  getTargetLevel(skill) {
    const s = this.load();
    const skillStats = s.skills?.[skill];
    
    if (!skillStats || !skillStats.recent || skillStats.recent.length === 0) {
      return 1;
    }

    const recent = skillStats.recent.slice(-10);
    const acc = recent.reduce((a, b) => a + b, 0) / recent.length;

    if (acc >= 0.8) return 3;
    if (acc >= 0.6) return 2;
    return 1;
  }
};

// =============================================================================
// LOAD BANKS ON INIT
// =============================================================================

async function loadAllBanks() {
  try {
    // Load micro drill banks
    const writingRes = await fetch(API_BASE + "/micro_writing.json");
    microWritingBank = await writingRes.json();
    
    const readingRes = await fetch(API_BASE + "/micro_reading.json");
    microReadingBank = await readingRes.json();
    
    console.log("Loaded micro drill banks:", {
      writing: microWritingBank.length,
      reading: microReadingBank.length
    });
  } catch (error) {
    console.error("Failed to load drill banks:", error);
  }
}

// =============================================================================
// STATS SYSTEM (PHASE 2.1)
// =============================================================================

async function refreshStats() {
  if (!currentUserEmail) return;
  
  try {
    const response = await fetch(API_BASE + "/.netlify/functions/get-evolve-stats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: currentUserEmail })
    });
    
    const data = await response.json();
    
    if (data.empty) return;
    
    // Update stats display
    document.getElementById("stat-tests").textContent = data.total + "/66";
    document.getElementById("stat-speed").textContent = data.avg + " avg band";
    document.getElementById("stat-streak").textContent = data.streak + " days";
    
    if (data.microTotal !== undefined) {
      document.getElementById("stat-micro").textContent = String(data.microTotal);
    }
    
  } catch (error) {
    console.error("Failed to refresh stats:", error);
  }
}

// =============================================================================
// REFINE FEATURE (PHASE 2.1)
// =============================================================================

async function refineWriting() {
  if (!userIsSubscribed) {
    ChatEngine.addBotMessage("🔒 Refine feature requires an active subscription.");
    return;
  }
  
  const answer = document.getElementById("chat-input").value.trim();
  
  if (!answer) {
    ChatEngine.addBotMessage("Please write something first, then click Refine.");
    return;
  }
  
  ChatEngine.addBotMessage("Refining your writing... Please wait.");
  
  try {
    const response = await fetch(API_BASE + "/.netlify/functions/refine-writing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer })
    });
    
    const data = await response.json();
    
    if (data.result) {
      ChatEngine.addBotMessage(data.result);
    } else {
      ChatEngine.addBotMessage("Could not refine your writing. Please try again.");
    }
  } catch (error) {
    console.error("Refine error:", error);
    ChatEngine.addBotMessage("Refinement failed. Please try again.");
  }
}

// =============================================================================
// PRACTICE TIME TRACKING (PHASE 2.1)
// =============================================================================

window.addEventListener("beforeunload", async () => {
  if (!currentUserEmail) return;
  
  const minutes = Math.round((Date.now() - sessionStart) / 60000);
  
  if (minutes > 0) {
    try {
      await fetch(API_BASE + "/.netlify/functions/log-practice-time", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: currentUserEmail, minutes }),
        keepalive: true
      });
    } catch (error) {
      console.error("Failed to log practice time:", error);
    }
  }
});

// =============================================================================
// DAILY COACH (PHASE 2.3)
// =============================================================================

async function loadDailyCoach(minutes = 20) {
  if (!currentUserEmail) return;
  
  try {
    const response = await fetch(API_BASE + "/.netlify/functions/daily-coach", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: currentUserEmail, minutes })
    });
    
    const data = await response.json();
    
    if (data.plan) {
      currentPlan = data.plan;
      showDailyPlan(data.plan, data.streak);
      renderDailyPlanRunner(data.plan);
    }
    
    if (data.streak) {
      updateStreakDisplay(data.streak);
    }
    
  } catch (error) {
    console.error("Failed to load daily coach:", error);
  }
}

function showDailyPlan(plan, streak) {
  if (!plan) return;

  const streakLine = streak?.current_streak 
    ? `🔥 Current Streak: ${streak.current_streak} day(s)\n\n`
    : "";

  let stepsText = "";
  (plan.steps || []).forEach((s, idx) => {
    stepsText += `${idx + 1}. ${s.type.toUpperCase()} (${s.minutes} min): ${s.name}\n`;
  });

  const msg = `📋 Daily Coach Plan\n\n${streakLine}${plan.headline}\n\nFocus: ${plan.focus}\n\nToday's Plan:\n${stepsText}\nWin Condition: ${plan.win_condition}\n\n💬 ${plan.message}`;

  ChatEngine.addBotMessage(msg);
}

function updateStreakDisplay(streak) {
  if (streak?.current_streak != null) {
    const streakEl = document.getElementById("stat-streak");
    if (streakEl) {
      streakEl.textContent = streak.current_streak + " days";
    }
  }
}

// =============================================================================
// DAILY PLAN RUNNER (PHASE 2.4)
// =============================================================================

function renderDailyPlanRunner(plan) {
  if (!plan || !plan.steps) return;
  
  const box = document.getElementById("daily-plan-box");
  const stepsEl = document.getElementById("daily-plan-steps");
  
  if (!box || !stepsEl) return;
  
  box.style.display = "block";
  stepsEl.innerHTML = "";

  plan.steps.forEach((step, i) => {
    const btn = document.createElement("button");
    btn.className = "action-btn-inner";
    btn.textContent = `${i + 1}. ${step.type.toUpperCase()} ${step.minutes}m`;
    btn.style.marginRight = "5px";
    btn.style.marginBottom = "5px";
    
    btn.onclick = () => {
      if (step.type === "micro") {
        // Start a random micro drill
        const isMicroWriting = Math.random() > 0.5;
        const skill = isMicroWriting ? "paraphrase" : "inference";
        startMicroSession(isMicroWriting ? "writing" : "reading", skill);
      } else if (step.type === "writing") {
        ChatEngine.addBotMessage("Writing test engine - click 'Start New Test' button to begin a timed writing test.");
      } else if (step.type === "reading") {
        ChatEngine.addBotMessage("Reading test engine - Click Foundation/Intermediate/Advanced reading test buttons.");
      }
    };
    
    stepsEl.appendChild(btn);
  });
}

// =============================================================================
// MICRO DRILL ENGINE (PHASE 2.7)
// =============================================================================

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickMicroItems(bank, skill, targetLevel, n) {
  const filtered = bank.filter(x => x.skill === skill);

  // Primary pool at target level
  let pool = filtered.filter(x => x.level === targetLevel);
  
  // Fallback if not enough
  if (pool.length < n) {
    const alt = filtered.filter(x => 
      x.level === Math.max(1, targetLevel - 1) || 
      x.level === Math.min(3, targetLevel + 1)
    );
    pool = pool.concat(alt);
  }

  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

async function startMicroSession(type, skill) {
  if (!userIsSubscribed) {
    ChatEngine.addBotMessage("🔒 Micro drills require an active subscription.");
    return;
  }

  microType = type;
  microSkill = skill;
  microSessionStart = Date.now();
  currentTestState = TestState.MICRO;

  const bank = type === "writing" ? microWritingBank : microReadingBank;
  
  if (bank.length === 0) {
    ChatEngine.addBotMessage("Micro drill bank not loaded. Please refresh the page.");
    return;
  }

  const level = MicroStore.getTargetLevel(skill);
  microQueue = pickMicroItems(bank, skill, level, 7);

  if (microQueue.length === 0) {
    ChatEngine.addBotMessage(`No drills found for skill: ${skill}`);
    return;
  }

  microIndex = 0;
  microCorrect = 0;
  microTotal = 0;

  const testInfo = document.getElementById("test-info");
  if (testInfo) testInfo.style.display = "flex";
  
  const timerEl = document.getElementById("timer");
  if (timerEl) timerEl.textContent = "Micro";
  
  const wcEl = document.getElementById("word-count");
  if (wcEl) wcEl.textContent = "0";

  ChatEngine.addBotMessage(
    `✏️ Micro Drill Session\n\n` +
    `Type: ${type === "writing" ? "Writing" : "Reading"}\n` +
    `Skill: ${skill}\n` +
    `Items: ${microQueue.length}\n` +
    `Level: ${level}\n\n` +
    `Answer each item, then click Submit.`
  );

  showCurrentMicroItem();
  setSendModeToMicro();
}

function showCurrentMicroItem() {
  activeMicroItem = microQueue[microIndex];
  
  if (!activeMicroItem) {
    endMicroSession();
    return;
  }

  if (activeMicroItem.mode === "mcq") {
    let msg = `**Item ${microIndex + 1} of ${microQueue.length}**\n\n${activeMicroItem.prompt}\n\n`;
    activeMicroItem.choices.forEach((c, idx) => {
      msg += `${idx + 1}) ${c}\n`;
    });
    msg += `\nReply with the number (example: 2).`;
    ChatEngine.addBotMessage(msg);
  } else {
    ChatEngine.addBotMessage(
      `**Item ${microIndex + 1} of ${microQueue.length}**\n\n${activeMicroItem.prompt}`
    );
  }
}

function setSendModeToMicro() {
  const sendBtn = document.getElementById("chat-send");
  const originalHandler = sendBtn.onclick;
  
  sendBtn.onclick = async () => {
    if (!activeMicroItem) return;

    const input = document.getElementById("chat-input");
    const answer = input.value.trim();
    
    if (!answer) return;

    input.value = "";
    const wcEl = document.getElementById("word-count");
    if (wcEl) wcEl.textContent = "0";

    microTotal++;

    let outcome = { correct: false, feedback: "Not evaluated." };

    if (activeMicroItem.mode === "key") {
      outcome = evaluateKeyMicro(activeMicroItem, answer);
    } else if (activeMicroItem.mode === "mcq") {
      outcome = evaluateMcqMicro(activeMicroItem, answer);
    } else if (activeMicroItem.mode === "ai") {
      ChatEngine.addBotMessage("Evaluating... Please wait.");
      outcome = await evaluateAiMicro(activeMicroItem, answer);
    }

    if (outcome.correct) microCorrect++;

    ChatEngine.addBotMessage(
      (outcome.correct ? "✅ Correct" : "❌ Needs improvement") +
      `\n\n${outcome.feedback}`
    );

    MicroStore.recordResult(microSkill, outcome.correct);
    
    // Update main stats
    let mainStats = JSON.parse(localStorage.getItem("evolve_stats") || "{}");
    mainStats.micro = (mainStats.micro || 0) + 1;
    localStorage.setItem("evolve_stats", JSON.stringify(mainStats));

    microIndex++;
    showCurrentMicroItem();
  };
}

function evaluateKeyMicro(item, answer) {
  const normalized = s => s.toLowerCase().replace(/\s+/g, " ").trim();
  const ok = normalized(answer) === normalized(item.answer);
  
  return {
    correct: ok,
    feedback: ok 
      ? "Good! Your answer matches the expected response." 
      : `Expected:\n${item.answer}`
  };
}

function evaluateMcqMicro(item, answer) {
  const n = parseInt(answer, 10);
  
  if (!Number.isFinite(n)) {
    return { 
      correct: false, 
      feedback: "Please answer with a number (example: 2)." 
    };
  }
  
  const idx = n - 1;
  const ok = idx === item.correctIndex;
  const expl = item.explain ? `\n\nExplanation:\n${item.explain}` : "";
  
  return {
    correct: ok,
    feedback: ok 
      ? `Good choice.${expl}` 
      : `Correct answer is: ${item.correctIndex + 1}${expl}`
  };
}

async function evaluateAiMicro(item, answer) {
  try {
    const response = await fetch(API_BASE + "/.netlify/functions/score-micro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        prompt: item.prompt, 
        rubric: item.rubric || "", 
        answer 
      })
    });
    
    const data = await response.json();

    if (!data.ok) {
      return { 
        correct: false, 
        feedback: data.error || "Could not evaluate." 
      };
    }

    let fb = data.feedback || "";
    if (data.modelAnswer) {
      fb += `\n\nSample answer:\n${data.modelAnswer}`;
    }

    return { 
      correct: !!data.correct, 
      feedback: fb 
    };
    
  } catch (error) {
    console.error("AI micro evaluation error:", error);
    return { 
      correct: false, 
      feedback: "Could not evaluate right now." 
    };
  }
}

function endMicroSession() {
  const acc = microTotal ? Math.round((microCorrect / microTotal) * 100) : 0;
  const mins = Math.max(1, Math.round((Date.now() - microSessionStart) / 60000));

  // Update practice time
  let mainStats = JSON.parse(localStorage.getItem("evolve_stats") || "{}");
  mainStats.time = (mainStats.time || 0) + mins;
  localStorage.setItem("evolve_stats", JSON.stringify(mainStats));

  ChatEngine.addBotMessage(
    `🎯 Micro Drill Complete\n\n` +
    `Skill: ${microSkill}\n` +
    `Score: ${microCorrect} / ${microTotal} (${acc}%)\n` +
    `Time: ${mins} min\n\n` +
    `💡 Tip: Repeat this drill until you consistently score 80% or higher, then advance to another skill.`
  );

  currentTestState = TestState.IDLE;
  activeMicroItem = null;
  microQueue = [];
  microIndex = 0;
  
  refreshStats();
  
  // Reset send button
  restoreNormalSendMode();
}

// =============================================================================
// VOCABULARY ENGINE (PHASE 2.8)
// =============================================================================

async function loadVocabSeed() {
  try {
    const response = await fetch(API_BASE + "/vocab_awl_seed.json");
    return await response.json();
  } catch (error) {
    console.error("Failed to load vocab seed:", error);
    return [];
  }
}

async function startVocabLearnSession() {
  if (!userIsSubscribed) {
    ChatEngine.addBotMessage("🔒 Vocabulary Builder requires an active subscription.");
    return;
  }

  vocabMode = "learn";
  vocabIndex = 0;
  currentTestState = TestState.VOCAB;

  const seed = await loadVocabSeed();
  const bank = VocabStore.load();

  // Pick words not yet learned if possible
  const learnedSet = new Set(bank.map(x => x.word.toLowerCase()));
  let candidates = seed.filter(x => !learnedSet.has(x.word.toLowerCase()));
  
  if (candidates.length < 8) {
    candidates = seed; // Fallback to all words
  }

  vocabQueue = shuffleArray(candidates).slice(0, 10);

  ChatEngine.addBotMessage(
    `📚 Vocabulary Drill\n\n` +
    `You will see a word and its meaning.\n` +
    `Write one sentence using the word naturally.\n\n` +
    `Click Submit after each sentence.`
  );

  showCurrentVocab();
  setSendModeToVocab();
}

async function startVocabReviewSession() {
  if (!userIsSubscribed) {
    ChatEngine.addBotMessage("🔒 Vocabulary Review requires an active subscription.");
    return;
  }

  vocabMode = "review";
  vocabIndex = 0;
  currentTestState = TestState.VOCAB;

  const due = VocabStore.getDueWords();
  
  if (!due.length) {
    const s = VocabStore.stats();
    ChatEngine.addBotMessage(
      `📚 Review My Words\n\n` +
      `No words are due right now.\n\n` +
      `Words learned: ${s.total}\n` +
      `Mastered: ${s.mastered}\n` +
      `Due: ${s.due}\n\n` +
      `💡 Tip: Start a Vocabulary Drill to learn new words.`
    );
    return;
  }

  vocabQueue = shuffleArray(due).slice(0, 12);

  ChatEngine.addBotMessage(
    `📚 Vocabulary Review\n\n` +
    `These words are due for review.\n` +
    `Write one strong sentence for each word.\n\n` +
    `Click Submit after each sentence.`
  );

  showCurrentVocab();
  setSendModeToVocab();
}

function showCurrentVocab() {
  activeVocab = vocabQueue[vocabIndex];
  
  if (!activeVocab) {
    endVocabSession();
    return;
  }

  const bankEntry = VocabStore.load().find(
    x => x.word.toLowerCase() === activeVocab.word.toLowerCase()
  );
  const stage = bankEntry?.stage ?? 0;

  ChatEngine.addBotMessage(
    `**Word ${vocabIndex + 1} of ${vocabQueue.length}**\n\n` +
    `Word: **${activeVocab.word}** (${activeVocab.pos || "word"})\n` +
    `Meaning: ${activeVocab.meaning || "Not provided"}\n` +
    `Stage: ${stage} of 5\n\n` +
    `Example: ${activeVocab.example || ""}\n\n` +
    `Write one sentence using this word.`
  );
}

function setSendModeToVocab() {
  const sendBtn = document.getElementById("chat-send");
  
  sendBtn.onclick = async () => {
    if (!activeVocab) return;

    const input = document.getElementById("chat-input");
    const sentence = input.value.trim();
    
    if (!sentence) return;

    input.value = "";
    const wcEl = document.getElementById("word-count");
    if (wcEl) wcEl.textContent = "0";

    ChatEngine.addBotMessage("Evaluating... Please wait.");

    const outcome = await evaluateVocab(activeVocab, sentence);

    ChatEngine.addBotMessage(
      (outcome.pass ? "✅ Accepted" : "❌ Try again") +
      `\n\n${outcome.feedback}` +
      (outcome.correctedSentence ? `\n\nCorrected:\n${outcome.correctedSentence}` : "") +
      (outcome.betterExample ? `\n\nBetter example:\n${outcome.betterExample}` : "")
    );

    updateVocabBankAfterAttempt(activeVocab, outcome.pass);

    // If failed in learn mode, allow retry
    if (!outcome.pass && vocabMode === "learn") {
      ChatEngine.addBotMessage("Rewrite one improved sentence for the same word, then click Submit again.");
      return;
    }

    vocabIndex++;
    showCurrentVocab();
  };
}

async function evaluateVocab(item, sentence) {
  try {
    const response = await fetch(API_BASE + "/.netlify/functions/score-vocab", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        word: item.word, 
        meaning: item.meaning || "", 
        sentence 
      })
    });
    
    const data = await response.json();
    
    if (!data.ok) {
      return { 
        pass: false, 
        feedback: data.error || "Could not evaluate." 
      };
    }
    
    return {
      pass: !!data.pass,
      feedback: data.feedback || "",
      correctedSentence: data.correctedSentence || "",
      betterExample: data.betterExample || ""
    };
    
  } catch (error) {
    console.error("Vocab evaluation error:", error);
    return { 
      pass: false, 
      feedback: "Could not evaluate right now." 
    };
  }
}

function updateVocabBankAfterAttempt(item, pass) {
  const bank = VocabStore.load();
  const existing = bank.find(
    x => x.word.toLowerCase() === item.word.toLowerCase()
  );

  let stage = existing?.stage ?? 0;
  
  if (pass) {
    stage = Math.min(5, stage + 1);
  } else {
    stage = Math.max(0, stage - 1);
  }

  const updated = {
    word: item.word,
    pos: item.pos || "",
    meaning: item.meaning || "",
    stage,
    lastSeenAt: Date.now(),
    nextReviewAt: computeNextReviewAt(stage),
    totalAttempts: (existing?.totalAttempts || 0) + 1,
    totalPasses: (existing?.totalPasses || 0) + (pass ? 1 : 0)
  };

  VocabStore.upsertWord(updated);
  updateVocabStatsUI();
}

function updateVocabStatsUI() {
  const s = VocabStore.stats();
  
  const totalEl = document.getElementById("stat-vocab-total");
  const dueEl = document.getElementById("stat-vocab-due");
  const masteredEl = document.getElementById("stat-vocab-mastered");
  
  if (totalEl) totalEl.textContent = String(s.total);
  if (dueEl) dueEl.textContent = String(s.due);
  if (masteredEl) masteredEl.textContent = String(s.mastered);
  
  // Also update main stats
  let mainStats = JSON.parse(localStorage.getItem("evolve_stats") || "{}");
  mainStats.vocabTotal = s.total;
  mainStats.vocabDue = s.due;
  mainStats.vocabMastered = s.mastered;
  localStorage.setItem("evolve_stats", JSON.stringify(mainStats));
}

function endVocabSession() {
  updateVocabStatsUI();
  const s = VocabStore.stats();

  ChatEngine.addBotMessage(
    `📚 Vocabulary Session Complete\n\n` +
    `Words learned: ${s.total}\n` +
    `Mastered: ${s.mastered}\n` +
    `Due for review: ${s.due}\n\n` +
    `💡 Tip: Use "Review My Words" daily to keep your vocabulary active.`
  );

  currentTestState = TestState.IDLE;
  vocabMode = null;
  vocabQueue = [];
  vocabIndex = 0;
  activeVocab = null;

  refreshStats();
  restoreNormalSendMode();
}

// =============================================================================
// RESTORE NORMAL SEND MODE
// =============================================================================

function restoreNormalSendMode() {
  const sendBtn = document.getElementById("chat-send");
  
  // Restore original chat send functionality
  sendBtn.onclick = () => {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    ChatEngine.addUserMessage(message);
    input.value = "";
    
    // Handle based on current state
    if (currentTestState === TestState.IDLE) {
      // Normal chat mode - handle via ChatEngine or send to backend
      ChatEngine.addBotMessage("I'm listening. How can I help you with your language learning today?");
    }
  };
}

// =============================================================================
// INITIALIZATION ON PAGE LOAD
// =============================================================================

document.addEventListener("DOMContentLoaded", async () => {
  console.log("Phase 2 Complete Integration Loading...");
  
  // Load all banks
  await loadAllBanks();
  
  // Update vocab stats on load
  updateVocabStatsUI();
  
  // Wire refine button
  const refineBtn = document.getElementById("chat-refine");
  if (refineBtn) {
    refineBtn.onclick = refineWriting;
  }
  
  // Load daily coach after login
  if (currentUserEmail && userIsSubscribed) {
    await loadDailyCoach();
  }
  
  console.log("Phase 2 Complete Integration Ready");
});

// =============================================================================
// EXPORT FUNCTIONS FOR WIRING
// =============================================================================

window.EvolvePhase2 = {
  // Stats
  refreshStats,
  
  // Refine
  refineWriting,
  
  // Daily Coach
  loadDailyCoach,
  showDailyPlan,
  
  // Micro Drills
  startMicroSession,
  
  // Vocabulary
  startVocabLearnSession,
  startVocabReviewSession,
  
  // State
  TestState,
  getCurrentState: () => currentTestState
};
