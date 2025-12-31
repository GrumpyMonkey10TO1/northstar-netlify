// =============================================================================
// EVOLVE v2.1 - MIGRATE NORTH ACADEMY
// IELTS & CELPIP Training Platform
// =============================================================================

const EvolveApp = (function() {
  "use strict";

  // ---------------------------------------------------------------------------
  // CONFIGURATION
  // ---------------------------------------------------------------------------
  const API_BASE = "https://startling-faun-f9dddb.netlify.app";
  const AVATAR = "https://migratenorth.ca/wp-content/uploads/2025/11/Gemini_Generated_Image_xe229lxe229lxe22-2.png";

  // ---------------------------------------------------------------------------
  // TEST BANK - ALL 33 WRITING TESTS
  // ---------------------------------------------------------------------------
  const TEST_BANK = {
    writing: {
      foundation: [
        { id: "W1", prompt: "Some people believe that students should be required to wear uniforms in school, while others think students should be free to choose their own clothing.\n\nDiscuss both views and give your own opinion.", type: "opinion", time: 40, minWords: 250 },
        { id: "W2", prompt: "Many people believe that social media has a negative impact on young people today.\n\nTo what extent do you agree or disagree with this statement?", type: "opinion", time: 40, minWords: 250 },
        { id: "W3", prompt: "Some people think that the best way to reduce crime is to give longer prison sentences. Others believe there are better ways to reduce crime.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W4", prompt: "In many cities, traffic congestion is becoming a serious problem.\n\nWhat are the causes of this problem? What solutions can you suggest?", type: "problem-solution", time: 40, minWords: 250 },
        { id: "W5", prompt: "Some people believe that children should start learning a foreign language in primary school. Others think children should begin foreign language study in secondary school.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W6", prompt: "Many people now work from home instead of traveling to an office every day.\n\nWhat are the advantages and disadvantages of working from home?", type: "advantages-disadvantages", time: 40, minWords: 250 },
        { id: "W7", prompt: "Some people believe that governments should spend money on public transportation rather than building new roads for cars.\n\nTo what extent do you agree or disagree?", type: "opinion", time: 40, minWords: 250 },
        { id: "W8", prompt: "Some people think that parents should teach children to be good members of society. Others believe that school is the best place to learn this.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W9", prompt: "In many countries, the amount of household waste is increasing every year.\n\nWhat are the main causes of this? What can governments and individuals do to solve this problem?", type: "problem-solution", time: 40, minWords: 250 },
        { id: "W10", prompt: "Some people believe that unpaid community service should be a compulsory part of high school education.\n\nTo what extent do you agree or disagree?", type: "opinion", time: 40, minWords: 250 },
        { id: "W11", prompt: "Online shopping is becoming more popular than shopping in stores.\n\nWhat are the advantages and disadvantages of this trend?", type: "advantages-disadvantages", time: 40, minWords: 250 }
      ],
      intermediate: [
        { id: "W12", prompt: "Some people argue that technological developments have led to the loss of traditional skills and ways of life, and these should be preserved.\n\nTo what extent do you agree or disagree?", type: "opinion", time: 40, minWords: 250 },
        { id: "W13", prompt: "Some people think that the government should invest more money in teaching science subjects at school, while others believe that art and music education is equally important.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W14", prompt: "Many young people today are leaving rural areas to live and work in cities.\n\nWhy is this happening? Do you think the advantages of this trend outweigh the disadvantages?", type: "two-part", time: 40, minWords: 250 },
        { id: "W15", prompt: "Some people believe that university education should be free for all students. Others think students should pay for their own university education.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W16", prompt: "In many countries, there is a growing gap between the rich and the poor.\n\nWhat problems does this cause? What measures can governments take to reduce this gap?", type: "problem-solution", time: 40, minWords: 250 },
        { id: "W17", prompt: "Some people think that competitive sports have a positive effect on children's education, while others believe they are harmful.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W18", prompt: "Some people believe that news media has too much influence on people's lives today, while others think the media plays an important role in society.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W19", prompt: "Many countries are now experiencing a significant increase in tourism.\n\nWhat are the advantages and disadvantages of tourism for the countries and local communities involved?", type: "advantages-disadvantages", time: 40, minWords: 250 },
        { id: "W20", prompt: "Some people believe that the best way to improve public health is by increasing the number of sports facilities. Others think this would have little effect and other measures are needed.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W21", prompt: "In many countries, traditional foods are being replaced by international fast food.\n\nWhy is this happening? Is this a positive or negative development?", type: "two-part", time: 40, minWords: 250 },
        { id: "W22", prompt: "Many people feel that the pace of modern life is too stressful, leading to physical and mental health problems.\n\nWhat are the causes of this stress? What solutions would you recommend?", type: "problem-solution", time: 40, minWords: 250 }
      ],
      advanced: [
        { id: "W23", prompt: "Some people argue that the purpose of prison should be to rehabilitate criminals, while others believe its main purpose should be to punish them.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W24", prompt: "Scientific research should be carried out and controlled by governments rather than private companies.\n\nTo what extent do you agree or disagree?", type: "opinion", time: 40, minWords: 250 },
        { id: "W25", prompt: "Some people believe that economic progress is the most important goal for developing countries, while others argue that environmental protection should be the priority.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W26", prompt: "Genetic engineering is becoming increasingly common in agriculture and medicine.\n\nWhat are the potential benefits and risks of this technology? Should there be limits on genetic research?", type: "two-part", time: 40, minWords: 250 },
        { id: "W27", prompt: "Some people argue that artificial intelligence will eventually replace many human jobs, causing widespread unemployment. Others believe AI will create new opportunities.\n\nDiscuss both perspectives and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W28", prompt: "Climate change is considered to be one of the biggest threats facing humanity today.\n\nWhat are the main causes of climate change? What steps can governments and individuals take to address this issue?", type: "problem-solution", time: 40, minWords: 250 },
        { id: "W29", prompt: "Some people believe that globalization has had a predominantly positive effect on the world, while others argue it has increased inequality between nations.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W30", prompt: "Some people argue that individuals have a responsibility to maintain their health and should pay for their own medical care if they lead unhealthy lifestyles.\n\nTo what extent do you agree or disagree?", type: "opinion", time: 40, minWords: 250 },
        { id: "W31", prompt: "Many democratic countries now have declining voter turnout, especially among young people.\n\nWhat factors contribute to this trend? What measures could increase political participation?", type: "two-part", time: 40, minWords: 250 },
        { id: "W32", prompt: "Some people believe that space exploration is a waste of resources and that money should be spent on solving problems on Earth. Others argue that space exploration has important benefits for humanity.\n\nDiscuss both views and give your opinion.", type: "discussion", time: 40, minWords: 250 },
        { id: "W33", prompt: "The world's population is aging rapidly, with a growing proportion of elderly people and fewer young people.\n\nWhat challenges does this demographic shift create? What solutions can you propose?", type: "problem-solution", time: 40, minWords: 250 }
      ]
    }
  };

  // ---------------------------------------------------------------------------
  // STATE
  // ---------------------------------------------------------------------------
  let currentUserEmail = null;
  let userIsSubscribed = false;
  let completedTests = [];
  let testScores = [];

  // Test Engine State
  const TestState = {
    IDLE: "idle",
    ACTIVE: "active",
    SUBMITTED: "submitted",
    SCORING: "scoring",
    COMPLETE: "complete"
  };

  let currentTest = {
    state: TestState.IDLE,
    id: null,
    type: null,
    prompt: null,
    level: null,
    startTime: null,
    timeLimit: 40,
    minWords: 250,
    timerInterval: null,
    remainingSeconds: 0,
    answer: ""
  };

  // ---------------------------------------------------------------------------
  // CHAT ENGINE
  // ---------------------------------------------------------------------------
  const ChatEngine = {
    body: null,
    input: null,
    sendBtn: null,
    refineBtn: null,
    skipBtn: null,
    isTyping: false,

    init() {
      this.body = document.getElementById("chat-body");
      this.input = document.getElementById("chat-input");
      this.sendBtn = document.getElementById("chat-send");
      this.refineBtn = document.getElementById("chat-refine");
      this.skipBtn = document.getElementById("chat-skip");

      if (this.sendBtn) {
        this.sendBtn.addEventListener("click", () => this.handleSubmit());
      }
      if (this.refineBtn) {
        this.refineBtn.addEventListener("click", () => this.handleRefine());
      }
      if (this.skipBtn) {
        this.skipBtn.addEventListener("click", () => this.handleSkip());
      }

      if (this.input) {
        this.input.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            this.handleSubmit();
          }
        });

        // Word count tracking
        this.input.addEventListener("input", () => {
          if (currentTest.state === TestState.ACTIVE) {
            updateWordCount();
          }
        });
      }
    },

    addBotMessage(text, isHTML = false) {
      if (!this.body) return null;
      const row = document.createElement("div");
      row.className = "bot-row";
      const img = document.createElement("img");
      img.src = AVATAR;
      const bubble = document.createElement("div");
      bubble.className = "bubble bot";
      if (isHTML) {
        bubble.innerHTML = text;
      } else {
        bubble.innerHTML = this.formatText(text);
      }
      row.appendChild(img);
      row.appendChild(bubble);
      this.body.appendChild(row);
      this.scrollDown();
      return bubble;
    },

    addUserMessage(text) {
      if (!this.body) return;
      const bubble = document.createElement("div");
      bubble.className = "bubble user";
      bubble.textContent = text.length > 500 ? text.substring(0, 500) + "..." : text;
      this.body.appendChild(bubble);
      this.scrollDown();
    },

    showTyping() {
      this.isTyping = true;
      if (this.skipBtn) this.skipBtn.classList.add("visible");
      if (!this.body) return;
      const row = document.createElement("div");
      row.className = "bot-row";
      row.id = "typing-indicator";
      const img = document.createElement("img");
      img.src = AVATAR;
      const bubble = document.createElement("div");
      bubble.className = "bubble bot typing-indicator";
      bubble.innerHTML = "<span></span><span></span><span></span>";
      row.appendChild(img);
      row.appendChild(bubble);
      this.body.appendChild(row);
      this.scrollDown();
    },

    hideTyping() {
      this.isTyping = false;
      if (this.skipBtn) this.skipBtn.classList.remove("visible");
      const indicator = document.getElementById("typing-indicator");
      if (indicator) indicator.remove();
    },

    formatText(text) {
      return text
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br>")
        .replace(/• /g, "• ");
    },

    scrollDown() {
      if (this.body) this.body.scrollTop = this.body.scrollHeight;
    },

    clear() {
      if (this.body) this.body.innerHTML = "";
    },

    handleSubmit() {
      if (!this.input) return;
      const text = this.input.value.trim();
      if (!text) return;

      if (currentTest.state === TestState.ACTIVE) {
        submitTestAnswer(text);
      } else {
        this.addUserMessage(text);
        this.input.value = "";
        this.addBotMessage("Use the buttons on the right panel to navigate. Select a test to begin practicing!");
      }
    },

    handleRefine() {
      if (currentTest.state === TestState.COMPLETE && currentTest.answer) {
        this.showTyping();
        requestRefine(currentTest.answer, currentTest.prompt);
      }
    },

    handleSkip() {
      if (this.isTyping) {
        this.hideTyping();
        this.addBotMessage("Skipped. What would you like to do next?");
      }
    }
  };

  // ---------------------------------------------------------------------------
  // TIMER FUNCTIONS
  // ---------------------------------------------------------------------------
  function startTimer(minutes) {
    currentTest.remainingSeconds = minutes * 60;
    updateTimerDisplay();

    currentTest.timerInterval = setInterval(() => {
      currentTest.remainingSeconds--;
      updateTimerDisplay();

      if (currentTest.remainingSeconds <= 0) {
        clearInterval(currentTest.timerInterval);
        timeUp();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerEl = document.getElementById("timer");
    if (!timerEl) return;
    const mins = Math.floor(currentTest.remainingSeconds / 60);
    const secs = currentTest.remainingSeconds % 60;
    timerEl.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;

    timerEl.classList.remove("warning", "danger");
    if (currentTest.remainingSeconds <= 300 && currentTest.remainingSeconds > 60) {
      timerEl.classList.add("warning");
    } else if (currentTest.remainingSeconds <= 60) {
      timerEl.classList.add("danger");
    }
  }

  function stopTimer() {
    if (currentTest.timerInterval) {
      clearInterval(currentTest.timerInterval);
      currentTest.timerInterval = null;
    }
  }

  function timeUp() {
    ChatEngine.addBotMessage("⏰ **Time's up!** Your answer has been auto-submitted for scoring.");
    const answer = ChatEngine.input ? ChatEngine.input.value.trim() : "";
    if (answer) {
      submitTestAnswer(answer);
    } else {
      ChatEngine.addBotMessage("No answer was provided. Try another test when you're ready.");
      endTest();
    }
  }

  // ---------------------------------------------------------------------------
  // WORD COUNT
  // ---------------------------------------------------------------------------
  function updateWordCount() {
    if (!ChatEngine.input) return;
    const text = ChatEngine.input.value.trim();
    const words = text ? text.split(/\s+/).filter(w => w.length > 0).length : 0;
    const wordCountEl = document.getElementById("word-count");
    if (!wordCountEl) return;
    wordCountEl.textContent = words;

    wordCountEl.classList.remove("low", "good");
    if (words < currentTest.minWords) {
      wordCountEl.classList.add("low");
    } else {
      wordCountEl.classList.add("good");
    }
  }

  // ---------------------------------------------------------------------------
  // TEST ENGINE
  // ---------------------------------------------------------------------------
  function startTest(testId, level) {
    const levelTests = TEST_BANK.writing[level];
    const test = levelTests ? levelTests.find(t => t.id === testId) : null;
    
    if (!test) {
      ChatEngine.addBotMessage("Test not found. Please try another.");
      return;
    }

    currentTest = {
      state: TestState.ACTIVE,
      id: testId,
      type: "writing",
      prompt: test.prompt,
      level: level,
      startTime: Date.now(),
      timeLimit: test.time,
      minWords: test.minWords,
      timerInterval: null,
      remainingSeconds: 0,
      answer: ""
    };

    const testInfo = document.getElementById("test-info");
    const wordTarget = document.getElementById("word-target");
    const testLevelBadge = document.getElementById("test-level-badge");
    const wordCount = document.getElementById("word-count");

    if (testInfo) testInfo.classList.add("active");
    if (wordTarget) wordTarget.textContent = `/${test.minWords}`;
    if (testLevelBadge) testLevelBadge.textContent = `📚 ${level.charAt(0).toUpperCase() + level.slice(1)}`;
    if (wordCount) wordCount.textContent = "0";
    
    if (ChatEngine.input) {
      ChatEngine.input.value = "";
      ChatEngine.input.placeholder = "Write your response here...";
      ChatEngine.input.focus();
    }

    ChatEngine.addBotMessage(`**${testId} - ${test.type.charAt(0).toUpperCase() + test.type.slice(1)} Essay**\n\n📝 **Task:**\n${test.prompt}\n\n⏱️ Time: ${test.time} minutes\n📊 Minimum: ${test.minWords} words\n\n**Tips:**\n• Plan for 2-3 minutes before writing\n• Address all parts of the question\n• Leave time to review\n\nYour time starts now. Good luck!`);

    startTimer(test.time);
  }

  async function submitTestAnswer(answer) {
    stopTimer();
    currentTest.answer = answer;
    currentTest.state = TestState.SCORING;

    const wordCount = answer.split(/\s+/).filter(w => w.length > 0).length;
    const timeSpent = Math.round((Date.now() - currentTest.startTime) / 1000);

    ChatEngine.addUserMessage(answer.length > 300 ? answer.substring(0, 300) + "... [truncated]" : answer);
    if (ChatEngine.input) ChatEngine.input.value = "";
    
    ChatEngine.addBotMessage(`✅ **Answer received!**\n\n📝 Words: ${wordCount}\n⏱️ Time: ${Math.floor(timeSpent / 60)}m ${timeSpent % 60}s\n\nScoring your response with AI...`);
    ChatEngine.showTyping();

    try {
      const response = await fetch(`${API_BASE}/.netlify/functions/score-writing`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: currentUserEmail,
          testId: currentTest.id,
          prompt: currentTest.prompt,
          answer: answer,
          timeSpent: timeSpent
        })
      });

      ChatEngine.hideTyping();

      if (!response.ok) {
        throw new Error("Scoring failed");
      }

      const result = await response.json();
      displayScore(result);
      
      if (!completedTests.includes(currentTest.id)) {
        completedTests.push(currentTest.id);
        testScores.push({ id: currentTest.id, score: result.scores?.overall || 0, date: new Date().toISOString() });
        saveProgress();
        updateStats();
        markTestCompleted(currentTest.id);
      }

      currentTest.state = TestState.COMPLETE;

    } catch (error) {
      ChatEngine.hideTyping();
      console.error("Scoring error:", error);
      ChatEngine.addBotMessage("⚠️ **Scoring Error**\n\nUnable to score your response right now. Your answer has been saved.\n\nPlease try again or contact support if this continues.");
      currentTest.state = TestState.COMPLETE;
    }
  }

  function displayScore(result) {
    const scores = result.scores || {};
    
    const scoreHTML = `
      <div class="score-card">
        <div class="score-header">
          <div>
            <div class="overall-score">${scores.overall || "--"}</div>
            <div class="score-label">Overall Band Score</div>
          </div>
          <div style="text-align: right;">
            <div style="color: #4CAF50; font-weight: 700;">${result.wordCount || 0} words</div>
            <div class="score-label">${currentTest.id} Complete</div>
          </div>
        </div>
        
        <div class="score-grid">
          <div class="score-item">
            <div class="score-item-label">Task Achievement</div>
            <div class="score-item-value">${scores.task || "--"}</div>
          </div>
          <div class="score-item">
            <div class="score-item-label">Coherence</div>
            <div class="score-item-value">${scores.coherence || "--"}</div>
          </div>
          <div class="score-item">
            <div class="score-item-label">Vocabulary</div>
            <div class="score-item-value">${scores.lexical || "--"}</div>
          </div>
          <div class="score-item">
            <div class="score-item-label">Grammar</div>
            <div class="score-item-value">${scores.grammar || "--"}</div>
          </div>
        </div>

        <div class="feedback-section">
          <div class="feedback-title">💪 Strengths</div>
          <ul class="strength-list">
            ${(result.strengths || ["Good attempt"]).map(s => `<li>${s}</li>`).join("")}
          </ul>
        </div>

        <div class="feedback-section">
          <div class="feedback-title">🎯 Areas to Improve</div>
          <ul class="improve-list">
            ${(result.improvements || ["Keep practicing"]).map(i => `<li>${i}</li>`).join("")}
          </ul>
        </div>

        <div class="feedback-section">
          <div class="feedback-title">📌 Next Focus</div>
          <div class="feedback-text">${result.next_focus || "Continue practicing to improve your score."}</div>
        </div>
      </div>
    `;

    ChatEngine.addBotMessage(`**📊 Your Score Report**`, false);
    ChatEngine.addBotMessage(scoreHTML, true);
    ChatEngine.addBotMessage(`**Summary:** ${result.band_summary || "Keep up the practice!"}\n\nClick **Refine** to get suggestions for improving this specific response, or select another test to continue practicing.`);
    
    endTest();
  }

  function endTest() {
    currentTest.state = TestState.IDLE;
    const testInfo = document.getElementById("test-info");
    if (testInfo) testInfo.classList.remove("active");
    if (ChatEngine.input) ChatEngine.input.placeholder = "Select a test from the right panel...";
  }

  function markTestCompleted(testId) {
    const buttons = document.querySelectorAll(".test-btn");
    buttons.forEach(btn => {
      if (btn.textContent.includes(testId.replace("W", "Writing Test "))) {
        btn.classList.add("completed");
      }
    });
  }

  // ---------------------------------------------------------------------------
  // REFINE FUNCTION
  // ---------------------------------------------------------------------------
  async function requestRefine(answer, prompt) {
    try {
      const response = await fetch(`${API_BASE}/.netlify/functions/chat-evolve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Please analyze this IELTS essay and provide specific suggestions to improve it:\n\nPROMPT: ${prompt}\n\nSTUDENT'S ANSWER:\n${answer}\n\nProvide:\n1. Two specific sentences that could be improved (with rewrites)\n2. One vocabulary upgrade suggestion\n3. One structural improvement tip`,
          email: currentUserEmail
        })
      });

      ChatEngine.hideTyping();

      if (!response.ok) throw new Error("Refine failed");

      const data = await response.json();
      ChatEngine.addBotMessage(data.response || data.message || "Here are some suggestions for improvement...");

    } catch (error) {
      ChatEngine.hideTyping();
      ChatEngine.addBotMessage("Unable to generate refinements. Please try again.");
    }
  }

  // ---------------------------------------------------------------------------
  // AUTH & ACCESS
  // ---------------------------------------------------------------------------
  async function checkEntitlement(email) {
    try {
      const response = await fetch(`${API_BASE}/.netlify/functions/check-entitlement?email=${encodeURIComponent(email)}`);
      const data = await response.json();
      return data.hasAccess === true;
    } catch (error) {
      console.error("Entitlement check failed:", error);
      return false;
    }
  }

  function applyAccess(hasAccess, email) {
    userIsSubscribed = hasAccess;
    currentUserEmail = email;

    const input = ChatEngine.input;
    const sendBtn = ChatEngine.sendBtn;
    const refineBtn = ChatEngine.refineBtn;
    const loginBtn = document.getElementById("btn-login");
    const loginBtnMobile = document.getElementById("btn-login-mobile");
    const loggedInBar = document.getElementById("logged-in-bar");
    const loggedInEmail = document.getElementById("logged-in-email");
    const unlockBtn = document.getElementById("unlock-evolve");

    if (hasAccess && email) {
      if (input) { input.disabled = false; input.placeholder = "Select a test from the right panel to begin..."; }
      if (sendBtn) sendBtn.disabled = false;
      if (refineBtn) refineBtn.disabled = false;
      if (loginBtn) loginBtn.textContent = "Logout";
      if (loginBtnMobile) loginBtnMobile.textContent = "Logout";
      if (loggedInBar) loggedInBar.classList.add("visible");
      if (loggedInEmail) loggedInEmail.textContent = email;
      if (unlockBtn) unlockBtn.style.display = "none";
    } else {
      if (input) { input.disabled = true; input.placeholder = "Login required to use Evolve"; }
      if (sendBtn) sendBtn.disabled = true;
      if (refineBtn) refineBtn.disabled = true;
      if (loginBtn) loginBtn.textContent = "Login";
      if (loginBtnMobile) loginBtnMobile.textContent = "Login";
      if (loggedInBar) loggedInBar.classList.remove("visible");
      if (unlockBtn) unlockBtn.style.display = "block";
    }
  }

  async function handleLogin() {
    const email = prompt("Enter your email to login:");
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    ChatEngine.addBotMessage("Checking your access...");
    const hasAccess = await checkEntitlement(email.toLowerCase());
    
    if (hasAccess) {
      localStorage.setItem("evolve_user_email", email.toLowerCase());
      applyAccess(true, email.toLowerCase());
      loadProgress();
      
      // Load Phase 2 features if available
      if (window.EvolvePhase2) {
        await window.EvolvePhase2.loadDailyCoach(20);
        await window.EvolvePhase2.refreshStats();
      }
      
      ChatEngine.addBotMessage(`✅ Welcome back! You have full access to Evolve.\n\nSelect a test from the right panel to begin practicing.`);
    } else {
      ChatEngine.addBotMessage(`❌ No active subscription found for ${email}.\n\nClick the yellow "Unlock Full Evolve Access" button to subscribe and get started!`);
    }
  }

  function handleLogout() {
    localStorage.removeItem("evolve_user_email");
    localStorage.removeItem("evolve_completed_tests");
    localStorage.removeItem("evolve_test_scores");
    applyAccess(false, null);
    completedTests = [];
    testScores = [];
    updateStats();
    ChatEngine.clear();
    showWelcome();
    ChatEngine.addBotMessage("You have been logged out. Login again or subscribe to continue.");
  }

  // ---------------------------------------------------------------------------
  // PROGRESS & STATS
  // ---------------------------------------------------------------------------
  function saveProgress() {
    localStorage.setItem("evolve_completed_tests", JSON.stringify(completedTests));
    localStorage.setItem("evolve_test_scores", JSON.stringify(testScores));
  }

  function loadProgress() {
    try {
      const saved = localStorage.getItem("evolve_completed_tests");
      const scores = localStorage.getItem("evolve_test_scores");
      if (saved) completedTests = JSON.parse(saved);
      if (scores) testScores = JSON.parse(scores);
      
      completedTests.forEach(id => markTestCompleted(id));
      updateStats();
    } catch (e) {
      console.error("Error loading progress:", e);
    }
  }

  function updateStats() {
    const statTests = document.getElementById("stat-tests");
    const statWriting = document.getElementById("stat-writing");
    const statReading = document.getElementById("stat-reading");
    const statAvg = document.getElementById("stat-avg");
    const statBest = document.getElementById("stat-best");

    if (statTests) statTests.textContent = `${completedTests.length}/66`;
    if (statWriting) statWriting.textContent = completedTests.filter(id => id.startsWith("W")).length;
    if (statReading) statReading.textContent = completedTests.filter(id => id.startsWith("R")).length;
    
    if (testScores.length > 0) {
      const avg = testScores.reduce((sum, s) => sum + s.score, 0) / testScores.length;
      const best = Math.max(...testScores.map(s => s.score));
      if (statAvg) statAvg.textContent = avg.toFixed(1);
      if (statBest) statBest.textContent = best.toFixed(1);
    }
  }

  // ---------------------------------------------------------------------------
  // FAQ CONTENT
  // ---------------------------------------------------------------------------
  const FAQ_CONTENT = {
    "how-bootcamp-works": `Welcome to Evolve - Your IELTS & CELPIP Training Center!\n\n**What You Get:**\n• 33 Writing Tests (Foundation → Advanced)\n• 33 Reading Tests (coming soon)\n• AI-powered scoring on 4 criteria\n• Detailed feedback and improvement tips\n• Progress tracking\n\n**How It Works:**\n1. Select a test from the right panel\n2. Read the prompt and write your response\n3. Submit for instant AI scoring\n4. Review feedback and track progress\n\nStart with Foundation tests and work your way up!`,

    "how-dashboard": `**Dashboard Guide:**\n\n**Top Bar:**\n• 📊 Stats - Your progress and scores\n• 📥 Download - Export results\n• 📓 Notebook - Take notes\n• 🔗 Resources - Official sites\n• ♻️ Reset - Clear chat\n\n**Right Panel:**\n• Writing & Reading test folders\n• Click to expand/collapse\n• Green checkmarks = completed\n\n**Chat Area:**\n• Test prompts appear here\n• Type answers in the input box\n• Timer and word count track your progress`,

    "speed-tips": `**Tips for Writing Faster:**\n\n1. **Plan First** - 2-3 minutes outlining saves time\n2. **Use Templates** - Memorize paragraph structures\n3. **Don't Overthink** - Write first, edit later\n4. **Learn Transitions** - Keep linking words ready\n5. **Practice Typing** - Speed matters on test day\n6. **Skip Hard Words** - Use simpler synonyms`,

    "accuracy-tips": `**Tips for Better Accuracy:**\n\n1. **Read Questions Twice** - Understand what's asked\n2. **Answer All Parts** - Don't miss sub-questions\n3. **Check Agreement** - Subject-verb matching\n4. **Vary Sentences** - Mix simple and complex\n5. **Use Examples** - Support your points\n6. **Proofread** - Save 3-5 minutes at end`,

    "vocab-tips": `**Building Your Vocabulary:**\n\n1. **Learn in Context** - Words in sentences, not lists\n2. **Word Families** - decide → decision → decisive\n3. **Collocations** - Learn natural word pairs\n4. **Read Daily** - News, academic articles\n5. **Use New Words** - Apply them in practice\n6. **Focus on AWL** - Academic Word List first`,

    "grammar-rules": `**Essential Grammar for IELTS:**\n\n**Tenses:**\n• Present simple for facts\n• Present perfect for experiences\n• Past simple with time markers\n\n**Articles:**\n• 'The' for specific items\n• 'A/An' for first mention\n• No article for general plurals\n\n**Key Structures:**\n• Conditionals (If + present, will + verb)\n• Passive voice for formal tone\n• Relative clauses (who, which, that)`,

    "common-mistakes": `**Common Mistakes to Avoid:**\n\n1. **Run-on sentences** - Use periods!\n2. **Word repetition** - Use synonyms\n3. **Off-topic content** - Stay focused\n4. **Informal language** - No contractions\n5. **Missing conclusions** - Always summarize\n6. **Under word count** - Aim for 270-300\n7. **No paragraphs** - Structure matters`,

    "essay-structure": `**Essay Structure Template:**\n\n**Introduction (40-50 words)**\n• Paraphrase the question\n• State your position/thesis\n\n**Body 1 (80-100 words)**\n• Topic sentence\n• Explanation\n• Example\n\n**Body 2 (80-100 words)**\n• Topic sentence\n• Explanation\n• Example\n\n**Conclusion (30-40 words)**\n• Summarize main points\n• Restate position`,

    "ielts-clb": `**IELTS to CLB Conversion:**\n\n| IELTS | CLB Level |\n|-------|----------|\n| 8.0-9.0 | CLB 10 |\n| 7.5 | CLB 9 |\n| 7.0 | CLB 8 |\n| 6.5 | CLB 7 |\n| 6.0 | CLB 7 |\n| 5.5 | CLB 6 |\n| 5.0 | CLB 5 |\n| 4.0-4.5 | CLB 4 |\n\nExpress Entry requires CLB 7+ (IELTS 6.0) for most NOC categories.`,

    "celpip-clb": `**CELPIP to CLB Conversion:**\n\nCELPIP scores directly equal CLB levels:\n• CELPIP 10 = CLB 10\n• CELPIP 9 = CLB 9\n• CELPIP 8 = CLB 8\n• And so on...\n\nExpress Entry requires CLB 7+ for most categories.`,

    "about-program": `**About Evolve:**\n\nEvolve is designed for immigrants preparing for:\n• IELTS General/Academic\n• CELPIP General\n• CLB assessments\n\n**Features:**\n• 66 progressive tests\n• Real IELTS-style prompts\n• AI scoring on 4 criteria\n• Detailed feedback\n• Progress tracking\n\nCreated by Migrate North Academy to help you achieve your target scores.`,

    "pricing": `**Evolve Pricing:**\n\n**Annual Subscription: $150 CAD/year**\n\nIncludes:\n• All 66 tests (Writing + Reading)\n• Unlimited AI scoring\n• Progress tracking\n• Email support\n• New tests added regularly\n\nClick "Unlock Full Evolve Access" to subscribe!`,

    "writing-review": `**Request Expert Review:**\n\nWant human feedback on your writing?\n\n**How to Request:**\n1. Complete a test in Evolve\n2. Copy your response\n3. Email to: info@migratenorth.ca\n4. Subject: "Writing Review Request"\n5. Include: Your answer + the prompt\n\nOur team will provide detailed feedback within 48 hours.`
  };

  function handleFAQ(faqKey) {
    const content = FAQ_CONTENT[faqKey];
    if (content) {
      ChatEngine.addBotMessage(content);
    }
  }

  // ---------------------------------------------------------------------------
  // TEST BUTTONS INITIALIZATION
  // ---------------------------------------------------------------------------
  function initTestButtons() {
    const levels = ["foundation", "intermediate", "advanced"];
    
    levels.forEach((level, levelIndex) => {
      const container = document.getElementById(`writing-${level}-tests`);
      if (!container) return;

      const tests = TEST_BANK.writing[level];
      tests.forEach((test, index) => {
        const btn = document.createElement("button");
        btn.className = "test-btn";
        const testNum = levelIndex * 11 + index + 1;
        btn.textContent = `Writing Test ${testNum}`;
        btn.dataset.testId = test.id;
        btn.dataset.level = level;

        btn.addEventListener("click", () => {
          if (!userIsSubscribed) {
            ChatEngine.addBotMessage(`🔒 **Writing Test ${testNum} is locked.**\n\nSubscribe to Evolve to unlock all 66 tests with AI-powered feedback and scoring.\n\nClick the yellow "Unlock Full Evolve Access" button to get started!`);
            return;
          }

          if (currentTest.state === TestState.ACTIVE) {
            ChatEngine.addBotMessage("⚠️ You have a test in progress. Please submit or wait for the timer to complete.");
            return;
          }

          startTest(test.id, level);
        });

        container.appendChild(btn);
      });
    });

    // Reading tests placeholder
    levels.forEach((level, levelIndex) => {
      const container = document.getElementById(`reading-${level}-tests`);
      if (!container) return;

      for (let i = 0; i < 11; i++) {
        const btn = document.createElement("button");
        btn.className = "test-btn";
        const testNum = levelIndex * 11 + i + 1;
        btn.textContent = `Reading Test ${testNum}`;
        btn.addEventListener("click", () => {
          ChatEngine.addBotMessage(`📖 **Reading Test ${testNum}**\n\nReading tests are coming soon! Focus on writing practice for now.`);
        });
        container.appendChild(btn);
      }
    });

    // Micro drills - Writing
    const writingMicro = document.getElementById("writing-micro-tests");
    if (writingMicro) {
      const drills = [
        { label: "Paraphrase", skill: "paraphrase" },
        { label: "Grammar Fix", skill: "grammar_fix" },
        { label: "Cohesion", skill: "cohesion" },
        { label: "Tone", skill: "tone" },
        { label: "Summarize", skill: "summarize" },
        { label: "Develop", skill: "develop" }
      ];
      
      drills.forEach(d => {
        const btn = document.createElement("button");
        btn.className = "test-btn";
        btn.textContent = `✏️ ${d.label}`;
        btn.addEventListener("click", () => {
          if (!userIsSubscribed) {
            ChatEngine.addBotMessage(`🔒 Micro drills require an active subscription.`);
            return;
          }
          if (window.EvolvePhase2) {
            window.EvolvePhase2.startMicroSession("writing", d.skill);
          } else {
            ChatEngine.addBotMessage("Micro drills loading... please try again.");
          }
        });
        writingMicro.appendChild(btn);
      });
    }

    // Micro drills - Reading
    const readingMicro = document.getElementById("reading-micro-tests");
    if (readingMicro) {
      const drills = [
        { label: "Scanning", skill: "scanning" },
        { label: "Inference", skill: "inference" },
        { label: "Vocab Context", skill: "vocab_context" },
        { label: "Comprehension", skill: "comprehension" }
      ];
      
      drills.forEach(d => {
        const btn = document.createElement("button");
        btn.className = "test-btn";
        btn.textContent = `📖 ${d.label}`;
        btn.addEventListener("click", () => {
          if (!userIsSubscribed) {
            ChatEngine.addBotMessage(`🔒 Micro drills require an active subscription.`);
            return;
          }
          if (window.EvolvePhase2) {
            window.EvolvePhase2.startMicroSession("reading", d.skill);
          } else {
            ChatEngine.addBotMessage("Micro drills loading... please try again.");
          }
        });
        readingMicro.appendChild(btn);
      });
    }
  }

  // ---------------------------------------------------------------------------
  // UI INITIALIZATION
  // ---------------------------------------------------------------------------
  function initUI() {
    // Folder toggles
    document.querySelectorAll(".folder-header").forEach(header => {
      header.addEventListener("click", () => {
        header.classList.toggle("open");
        const folder = header.dataset.folder;
        const list = document.getElementById(`${folder}-tests`);
        if (list) list.classList.toggle("open");
      });
    });

    document.querySelectorAll(".sub-folder-header").forEach(header => {
      header.addEventListener("click", () => {
        header.classList.toggle("open");
        const subfolder = header.dataset.subfolder;
        const list = document.getElementById(`${subfolder}-tests`);
        if (list) list.classList.toggle("open");
      });
    });

    // FAQ buttons
    document.querySelectorAll("[data-faq]").forEach(btn => {
      btn.addEventListener("click", () => handleFAQ(btn.dataset.faq));
    });

    // Vocabulary buttons
    document.querySelectorAll("[data-action]").forEach(btn => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        
        if (!userIsSubscribed) {
          ChatEngine.addBotMessage("🔒 Vocabulary Builder requires an active subscription.");
          return;
        }
        
        if (window.EvolvePhase2) {
          if (action === "vocab-drill") {
            window.EvolvePhase2.startVocabLearnSession();
          } else if (action === "vocab-review") {
            window.EvolvePhase2.startVocabReviewSession();
          }
        }
      });
    });

    // Stats dropdown
    const btnStats = document.getElementById("btn-stats");
    const btnStatsMobile = document.getElementById("btn-stats-mobile");
    const statsDropdown = document.getElementById("stats-dropdown");
    const quicklinksDropdown = document.getElementById("quicklinks-dropdown");

    if (btnStats) {
      btnStats.addEventListener("click", () => {
        if (statsDropdown) statsDropdown.classList.toggle("active");
        if (quicklinksDropdown) quicklinksDropdown.classList.remove("active");
      });
    }
    if (btnStatsMobile) {
      btnStatsMobile.addEventListener("click", () => {
        if (statsDropdown) statsDropdown.classList.toggle("active");
      });
    }

    // Quicklinks dropdown
    const btnQuicklinks = document.getElementById("btn-quicklinks");
    const btnQuicklinksMobile = document.getElementById("btn-quicklinks-mobile");

    if (btnQuicklinks) {
      btnQuicklinks.addEventListener("click", () => {
        if (quicklinksDropdown) quicklinksDropdown.classList.toggle("active");
        if (statsDropdown) statsDropdown.classList.remove("active");
      });
    }
    if (btnQuicklinksMobile) {
      btnQuicklinksMobile.addEventListener("click", () => {
        if (quicklinksDropdown) quicklinksDropdown.classList.toggle("active");
      });
    }

    // Reset
    const btnReset = document.getElementById("btn-reset");
    const btnResetMobile = document.getElementById("btn-reset-mobile");

    if (btnReset) {
      btnReset.addEventListener("click", () => {
        if (currentTest.state === TestState.ACTIVE) {
          if (!confirm("You have a test in progress. Reset anyway?")) return;
          stopTimer();
          endTest();
        }
        ChatEngine.clear();
        showWelcome();
      });
    }
    if (btnResetMobile) {
      btnResetMobile.addEventListener("click", () => {
        ChatEngine.clear();
        showWelcome();
      });
    }

    // Login/Logout
    const btnLogin = document.getElementById("btn-login");
    const btnLoginMobile = document.getElementById("btn-login-mobile");

    if (btnLogin) {
      btnLogin.addEventListener("click", () => {
        if (userIsSubscribed) handleLogout();
        else handleLogin();
      });
    }
    if (btnLoginMobile) {
      btnLoginMobile.addEventListener("click", () => {
        if (userIsSubscribed) handleLogout();
        else handleLogin();
      });
    }

    // Notebook
    const btnNotebook = document.getElementById("btn-notebook");
    const btnNotebookMobile = document.getElementById("btn-notebook-mobile");
    const notebookPanel = document.getElementById("notebookPanel");
    const notebookClose = document.getElementById("notebook-close");
    const notebookArea = document.getElementById("notebookArea");

    if (btnNotebook) {
      btnNotebook.addEventListener("click", () => {
        if (notebookPanel) notebookPanel.classList.add("open");
      });
    }
    if (btnNotebookMobile) {
      btnNotebookMobile.addEventListener("click", () => {
        if (notebookPanel) notebookPanel.classList.add("open");
      });
    }
    if (notebookClose) {
      notebookClose.addEventListener("click", () => {
        if (notebookPanel) notebookPanel.classList.remove("open");
      });
    }
    if (notebookArea) {
      notebookArea.addEventListener("input", (e) => {
        localStorage.setItem("evolve_notebook", e.target.value);
      });
      const savedNotebook = localStorage.getItem("evolve_notebook");
      if (savedNotebook) notebookArea.value = savedNotebook;
    }

    // Mobile menu
    const btnMobileMenu = document.getElementById("btn-mobile-menu");
    const mobileMenuDropdown = document.getElementById("mobile-menu-dropdown");

    if (btnMobileMenu) {
      btnMobileMenu.addEventListener("click", () => {
        if (mobileMenuDropdown) mobileMenuDropdown.classList.toggle("active");
      });
    }

    // Unlock button
    const unlockBtn = document.getElementById("unlock-evolve");
    if (unlockBtn) {
      unlockBtn.addEventListener("click", async () => {
        const email = prompt("Enter your email to continue to checkout:");
        if (!email || !email.includes("@")) {
          alert("Please enter a valid email address.");
          return;
        }

        ChatEngine.addBotMessage("Redirecting to secure checkout...");

        try {
          const res = await fetch(`${API_BASE}/.netlify/functions/create-evolve-checkout`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email.toLowerCase(), product: "evolve" })
          });

          const data = await res.json();

          if (data.url) {
            window.location.href = data.url;
          } else {
            ChatEngine.addBotMessage("Error creating checkout. Please try again or contact info@migratenorth.ca");
          }
        } catch (error) {
          ChatEngine.addBotMessage("Connection error. Please try again.");
        }
      });
    }

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#btn-stats") && !e.target.closest("#stats-dropdown") && !e.target.closest("#btn-stats-mobile")) {
        if (statsDropdown) statsDropdown.classList.remove("active");
      }
      if (!e.target.closest("#btn-quicklinks") && !e.target.closest("#quicklinks-dropdown") && !e.target.closest("#btn-quicklinks-mobile")) {
        if (quicklinksDropdown) quicklinksDropdown.classList.remove("active");
      }
    });
  }

  // ---------------------------------------------------------------------------
  // WELCOME MESSAGE
  // ---------------------------------------------------------------------------
  function showWelcome() {
    ChatEngine.addBotMessage(`Welcome to the Evolve preview.\n\nThis is your IELTS and CELPIP training center with:\n• 66 progressive tests\n• Micro drills for targeted practice\n• Vocabulary builder\n• AI-powered scoring\n\nTo unlock full access, please log in or subscribe.\n\nClick any button in the dashboard to explore what's included!`);
  }

  // ---------------------------------------------------------------------------
  // INITIALIZATION
  // ---------------------------------------------------------------------------
  async function init() {
    console.log("Evolve initializing...");
    ChatEngine.init();
    initUI();
    initTestButtons();

    // Check for payment redirect
    const params = new URLSearchParams(window.location.search);
    if (params.get("paid") === "true" && params.get("email")) {
      const email = decodeURIComponent(params.get("email")).toLowerCase();
      console.log("Payment detected, auto-logging in:", email);
      
      localStorage.setItem("evolve_user_email", email);
      currentUserEmail = email;
      applyAccess(true, email);
      loadProgress();
      
      window.history.replaceState({}, document.title, window.location.pathname);
      
      showWelcome();
      setTimeout(() => {
        ChatEngine.addBotMessage("🎉 **Payment successful!** Your Evolve subscription is now active.\n\nYou have full access to:\n• All 33 writing tests\n• AI-powered scoring\n• Detailed feedback\n• Progress tracking\n\nSelect a test from the right panel to begin!");
      }, 500);
      return;
    }

    if (params.get("cancelled") === "true") {
      window.history.replaceState({}, document.title, window.location.pathname);
      showWelcome();
      setTimeout(() => {
        ChatEngine.addBotMessage("Payment was cancelled. No worries - click 'Unlock Full Evolve Access' when you're ready to subscribe.");
      }, 500);
      return;
    }

    // Check for existing login
    const savedEmail = localStorage.getItem("evolve_user_email");
    if (savedEmail) {
      console.log("Found saved email, checking entitlement...");
      const hasAccess = await checkEntitlement(savedEmail);
      if (hasAccess) {
        applyAccess(true, savedEmail);
        loadProgress();
        
        // Load Phase 2 features if available
        if (window.EvolvePhase2) {
          await window.EvolvePhase2.loadDailyCoach(20);
          await window.EvolvePhase2.refreshStats();
        }
        
        showWelcome();
        ChatEngine.addBotMessage(`Welcome back! Select a test to continue practicing.`);
        return;
      }
    }

    applyAccess(false, null);
    showWelcome();
    console.log("Evolve ready!");
  }

  // Start the app when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Export for external access
  return { 
    ChatEngine, 
    startTest,
    handleLogin,
    handleLogout,
    isSubscribed: () => userIsSubscribed,
    getEmail: () => currentUserEmail
  };
})();

// Make globally available
window.EvolveApp = EvolveApp;
