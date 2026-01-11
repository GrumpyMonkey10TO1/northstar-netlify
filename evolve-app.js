// =============================================================================
// EVOLVE APP - Complete Chat Engine with Reading Test Integration
// =============================================================================

(() => {
  'use strict';

  // =============================================================================
  // CONFIGURATION
  // =============================================================================
  const CONFIG = {
    FUNCTION_URL: 'https://startling-faun-f9dddb.netlify.app/.netlify/functions/chat-evolve',
    ENTITLEMENT_URL: 'https://startling-faun-f9dddb.netlify.app/.netlify/functions/check-entitlement',
    BOT_AVATAR: 'https://migratenorth.ca/wp-content/uploads/2025/11/Gemini_Generated_Image_xe229lxe229lxe22-2.png',
    USER_AVATAR: 'https://migratenorth.ca/wp-content/uploads/2025/11/user-avatar.png',
    TYPING_SPEED: 15,
    STORAGE_KEY: 'evolveMemory',
    NOTEBOOK_KEY: 'evolve_notebook',
    INTRO_VIDEO: null
  };

  // =============================================================================
  // DOM ELEMENTS
  // =============================================================================
  const DOM = {
    chatBody: document.getElementById('chat-body'),
    chatInput: document.getElementById('chat-input'),
    chatSend: document.getElementById('chat-send'),
    chatRefine: document.getElementById('chat-refine'),
    chatSkip: document.getElementById('chat-skip'),
    testInfo: document.getElementById('test-info'),
    timer: document.getElementById('timer'),
    wordCount: document.getElementById('word-count'),
    wordTarget: document.getElementById('word-target'),
    testLevelBadge: document.getElementById('test-level-badge'),
    statsDropdown: document.getElementById('stats-dropdown'),
    statTests: document.getElementById('stat-tests'),
    statWriting: document.getElementById('stat-writing'),
    statReading: document.getElementById('stat-reading'),
    statMicro: document.getElementById('stat-micro'),
    statAvg: document.getElementById('stat-avg'),
    statBest: document.getElementById('stat-best'),
    statStreak: document.getElementById('stat-streak'),
    statTime: document.getElementById('stat-time'),
    statVocabTotal: document.getElementById('stat-vocab-total'),
    statVocabDue: document.getElementById('stat-vocab-due'),
    statVocabMastered: document.getElementById('stat-vocab-mastered'),
    btnStats: document.getElementById('btn-stats'),
    btnDownload: document.getElementById('btn-download'),
    btnNotebook: document.getElementById('btn-notebook'),
    btnResources: document.getElementById('btn-resources'),
    btnReset: document.getElementById('btn-reset'),
    btnLogin: document.getElementById('btn-login'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileMenuDropdown: document.getElementById('mobile-menu-dropdown'),
    btnStatsMobile: document.getElementById('btn-stats-mobile'),
    btnDownloadMobile: document.getElementById('btn-download-mobile'),
    btnNotebookMobile: document.getElementById('btn-notebook-mobile'),
    btnResourcesMobile: document.getElementById('btn-resources-mobile'),
    btnResetMobile: document.getElementById('btn-reset-mobile'),
    btnLoginMobile: document.getElementById('btn-login-mobile'),
    notebookPanel: document.getElementById('notebookPanel'),
    notebookArea: document.getElementById('notebookArea'),
    notebookClose: document.getElementById('notebookClose'),
    resourcesDropdown: document.getElementById('resourcesDropdown'),
    loginOverlay: document.getElementById('login-overlay'),
    loginEmail: document.getElementById('login-email'),
    loginSubmit: document.getElementById('login-submit'),
    loginStatus: document.getElementById('login-status'),
    loginClose: document.getElementById('login-close'),
    loggedInBar: document.getElementById('logged-in-bar'),
    loggedInEmail: document.getElementById('logged-in-email'),
    faqList: document.getElementById('faqList'),
    unlockEvolve: document.getElementById('unlock-evolve')
  };

  // =============================================================================
  // STATE
  // =============================================================================
  let state = {
    history: [],
    isTyping: false,
    typingBubble: null,
    currentTypeInterval: null,
    isLoggedIn: false,
    userEmail: null,
    hasAccess: false,
    testInProgress: false,
    timerInterval: null,
    timeRemaining: 0
  };

  // =============================================================================
  // READING TEST STATE
  // =============================================================================
  let readingTest = {
    active: false,
    testData: null,
    currentPassage: 0,
    currentQuestion: 0,
    answers: {},
    startTime: null,
    testId: null
  };

  // =============================================================================
  // UTILITY FUNCTIONS
  // =============================================================================
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function scrollToBottom() {
    if (DOM.chatBody) {
      DOM.chatBody.scrollTop = DOM.chatBody.scrollHeight;
    }
  }

  function showToast(message, duration = 2500) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed; top: 20px; right: 20px; background: #A367B1; color: white;
      padding: 12px 20px; border-radius: 8px; z-index: 30000; font-family: Aptos, sans-serif;
      font-weight: 600; box-shadow: 0 4px 12px rgba(0,0,0,0.2); animation: fadeIn 0.3s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), duration);
  }

  // =============================================================================
  // CHAT MESSAGE FUNCTIONS
  // =============================================================================
  function addMessage(role, content, options = {}) {
    const { typewriter = true, saveToHistory = true, isMedia = false, mediaType = null, mediaUrl = null } = options;
    
    if (role === 'user') {
      const bubble = document.createElement('div');
      bubble.className = 'bubble user';
      bubble.textContent = content.length > 500 ? content.substring(0, 500) + '...' : content;
      DOM.chatBody.appendChild(bubble);
    } else {
      const row = document.createElement('div');
      row.className = 'bot-row';
      
      const img = document.createElement('img');
      img.src = CONFIG.BOT_AVATAR;
      img.alt = 'Evolve';
      
      const bubble = document.createElement('div');
      bubble.className = 'bubble bot';
      
      row.appendChild(img);
      row.appendChild(bubble);
      DOM.chatBody.appendChild(row);
      
      if (isMedia && mediaType === 'video') {
        bubble.innerHTML = `
          <div class="media-message">
            <div class="video-container" style="position:relative;width:100%;padding-bottom:56.25%;margin-bottom:10px;border-radius:8px;overflow:hidden;">
              <iframe src="${mediaUrl}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </div>
            <p style="margin:0;font-size:13px;">${escapeHtml(content)}</p>
          </div>
        `;
      } else if (isMedia && mediaType === 'image') {
        bubble.innerHTML = `
          <div class="media-message">
            <img src="${mediaUrl}" alt="Image" style="max-width:100%;border-radius:8px;margin-bottom:10px;">
            <p style="margin:0;font-size:13px;">${escapeHtml(content)}</p>
          </div>
        `;
      } else if (typewriter && !state.isTyping) {
        typeWriterEffect(content, bubble);
      } else {
        bubble.innerHTML = formatText(content);
      }
    }
    
    if (saveToHistory) {
      state.history.push({ role, content });
      saveToStorage();
    }
    
    scrollToBottom();
  }
  
  function formatText(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  function typeWriterEffect(text, element) {
    let index = 0;
    const cleanText = text.replace(/\r/g, '');
    
    if (state.currentTypeInterval) {
      clearInterval(state.currentTypeInterval);
    }
    
    state.isTyping = true;
    showSkipButton();
    
    const skipHandler = () => {
      clearInterval(state.currentTypeInterval);
      element.innerHTML = formatText(cleanText);
      state.isTyping = false;
      hideSkipButton();
      scrollToBottom();
    };
    
    if (DOM.chatSkip) {
      DOM.chatSkip.removeEventListener('click', DOM.chatSkip._handler);
      DOM.chatSkip._handler = skipHandler;
      DOM.chatSkip.addEventListener('click', skipHandler);
    }
    
    state.currentTypeInterval = setInterval(() => {
      if (index >= cleanText.length) {
        clearInterval(state.currentTypeInterval);
        element.innerHTML = formatText(cleanText);
        state.isTyping = false;
        hideSkipButton();
        return;
      }
      
      const char = cleanText.charAt(index);
      element.innerHTML += char === '\n' ? '<br>' : escapeHtml(char);
      index++;
      scrollToBottom();
    }, CONFIG.TYPING_SPEED);
  }

  function showSkipButton() {
    if (DOM.chatSkip) DOM.chatSkip.classList.add('active');
  }

  function hideSkipButton() {
    if (DOM.chatSkip) DOM.chatSkip.classList.remove('active');
  }

  function showTypingIndicator() {
    if (state.typingBubble) return;
    
    state.typingBubble = document.createElement('div');
    state.typingBubble.className = 'bot-row';
    state.typingBubble.id = 'typing-indicator';
    state.typingBubble.innerHTML = `
      <img src="${CONFIG.BOT_AVATAR}" alt="Evolve">
      <div class="bubble bot typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
    DOM.chatBody.appendChild(state.typingBubble);
    scrollToBottom();
  }

  function hideTypingIndicator() {
    if (state.typingBubble) {
      state.typingBubble.remove();
      state.typingBubble = null;
    }
  }

  // =============================================================================
  // WELCOME MESSAGE
  // =============================================================================
  function getWelcomeMessage() {
    const hour = new Date().getHours();
    let greeting = "Welcome";
    if (hour >= 5 && hour < 12) greeting = "Good morning";
    else if (hour >= 12 && hour < 18) greeting = "Good afternoon";
    else if (hour >= 18 || hour < 5) greeting = "Good evening";
    
    return `${greeting}! I'm your Evolve training coach.

I'm here to help you improve your English proficiency for IELTS and CELPIP.

🎯 To get started:
• Login to access your training
• Browse the FAQ panel for tips
• Select a test from Writing or Reading Practice

What would you like to work on today?`;
  }

  function showWelcome() {
    if (!DOM.chatBody) return;
    DOM.chatBody.innerHTML = '';
    
    if (CONFIG.INTRO_VIDEO) {
      addMessage('bot', "Welcome to Evolve! Here's a quick introduction:", {
        typewriter: false,
        saveToHistory: false,
        isMedia: true,
        mediaType: 'video',
        mediaUrl: CONFIG.INTRO_VIDEO
      });
      
      setTimeout(() => {
        addMessage('bot', getWelcomeMessage(), { typewriter: true, saveToHistory: true });
      }, 500);
    } else {
      setTimeout(() => {
        addMessage('bot', getWelcomeMessage(), { typewriter: true, saveToHistory: true });
      }, 300);
    }
  }

  // =============================================================================
  // SEND MESSAGE - UPDATED TO HANDLE READING TESTS
  // =============================================================================
  async function handleSendMessage(text) {
    const message = text || (DOM.chatInput?.value.trim() || '');
    if (!message) return;
    
    // If reading test is active, handle as answer
    if (readingTest.active) {
      addMessage('user', message);
      if (DOM.chatInput) DOM.chatInput.value = '';
      handleReadingAnswer(message);
      return;
    }
    
    // Add user message
    addMessage('user', message);
    if (DOM.chatInput) DOM.chatInput.value = '';
    
    // Check for FAQ preset responses
    const presetResponse = FAQ_RESPONSES[message];
    if (presetResponse) {
      setTimeout(() => addMessage('bot', presetResponse), 300);
      return;
    }
    
    // Send to API
    showTypingIndicator();
    
    try {
      const response = await fetch(CONFIG.FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message,
          history: state.history.slice(-20),
          userEmail: state.userEmail
        })
      });
      
      const data = await response.json();
      hideTypingIndicator();
      
      if (response.ok && data.reply) {
        setTimeout(() => addMessage('bot', data.reply), 200);
      } else {
        addMessage('bot', 'Sorry, I encountered an error. Please try again.');
      }
    } catch (error) {
      console.error('Chat error:', error);
      hideTypingIndicator();
      addMessage('bot', 'Connection error. Please check your internet and try again.');
    }
  }

  // =============================================================================
  // READING TEST FUNCTIONS
  // =============================================================================
  function startReadingTest(testId) {
    // Check if READING_TESTS_FULL exists
    if (typeof READING_TESTS_FULL === 'undefined') {
      addMessage('bot', '❌ Reading tests data not loaded. Please refresh the page.');
      return;
    }
    
    // Find the test
    const test = READING_TESTS_FULL.find(t => t.id === testId);
    if (!test) {
      addMessage('bot', `❌ Test ${testId} not found.`);
      return;
    }
    
    // Initialize reading test state
    readingTest = {
      active: true,
      testData: test,
      currentPassage: 0,
      currentQuestion: 0,
      answers: {},
      startTime: Date.now(),
      testId: testId
    };
    
    // Show test intro
    const intro = `📖 **READING TEST ${test.id}**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Level: ${test.level}
🎯 Band Target: ${test.bandTarget}
⏱️ Time: ${test.timeMinutes} minutes
📝 Questions: ${test.totalQuestions}

This test has 3 passages. Read each passage carefully, then answer the questions.

**Instructions:**
• Type your answer and press Send
• For MCQ: Type A, B, C, or D
• For True/False/Not Given: Type True, False, or NG
• For Yes/No/Not Given: Type Yes, No, or NG
• For Short Answer: Type 1-3 words

Ready? Let's begin!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
    
    addMessage('bot', intro, { typewriter: false });
    
    // Show test info bar
    if (DOM.testInfo) DOM.testInfo.classList.add('active');
    if (DOM.testLevelBadge) DOM.testLevelBadge.textContent = test.level;
    
    // Start timer
    startTimer(test.timeMinutes * 60);
    
    // Show first passage after delay
    setTimeout(() => showPassage(), 1500);
  }

  function showPassage() {
    const test = readingTest.testData;
    const passage = test.passages[readingTest.currentPassage];
    
    const passageText = `📄 **PASSAGE ${readingTest.currentPassage + 1}: ${passage.title}**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${passage.text}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 Words: ~${passage.wordCount}

Now answer the questions. Type your answer and press Send.`;
    
    addMessage('bot', passageText, { typewriter: false });
    
    // Reset question index for this passage
    readingTest.currentQuestion = 0;
    
    // Show first question
    setTimeout(() => showQuestion(), 1000);
  }

  function showQuestion() {
    const passage = readingTest.testData.passages[readingTest.currentPassage];
    const question = passage.questions[readingTest.currentQuestion];
    
    if (!question) {
      // No more questions in this passage
      nextPassage();
      return;
    }
    
    let qText = `**Question ${question.id}** (${question.type.toUpperCase()})\n\n${question.text}`;
    
    // Add options for MCQ
    if (question.type === 'mcq' && question.options) {
      qText += '\n\n' + question.options.join('\n');
    }
    
    // Add answer hints
    if (question.type === 'tfng') {
      qText += '\n\n_Type: True, False, or Not Given_';
    } else if (question.type === 'yng') {
      qText += '\n\n_Type: Yes, No, or Not Given_';
    } else if (question.type === 'mcq') {
      qText += '\n\n_Type: A, B, C, or D_';
    } else if (question.type === 'short' || question.type === 'summary' || question.type === 'matching') {
      qText += '\n\n_Type your answer (1-3 words)_';
    }
    
    addMessage('bot', qText, { typewriter: false });
  }

  function handleReadingAnswer(userAnswer) {
    const passage = readingTest.testData.passages[readingTest.currentPassage];
    const question = passage.questions[readingTest.currentQuestion];
    
    if (!question) return;
    
    // Store answer
    readingTest.answers[question.id] = userAnswer.trim();
    
    // Check if correct
    const isCorrect = checkAnswer(userAnswer, question);
    
    // Show feedback
    if (isCorrect) {
      addMessage('bot', '✅ Correct!', { typewriter: false });
    } else {
      addMessage('bot', `❌ The correct answer is: **${question.answer}**`, { typewriter: false });
    }
    
    // Move to next question
    readingTest.currentQuestion++;
    
    // Show next question after delay
    setTimeout(() => showQuestion(), 800);
  }

  function checkAnswer(userAnswer, question) {
    const ua = userAnswer.trim().toLowerCase();
    const ca = question.answer.toLowerCase();
    
    // Exact match
    if (ua === ca) return true;
    
    // MCQ - just check first letter
    if (question.type === 'mcq') {
      return ua.charAt(0) === ca.charAt(0);
    }
    
    // TFNG/YNG - check variations
    if (question.type === 'tfng' || question.type === 'yng') {
      if (ca === 'true' && (ua === 't' || ua === 'true')) return true;
      if (ca === 'false' && (ua === 'f' || ua === 'false')) return true;
      if (ca === 'yes' && (ua === 'y' || ua === 'yes')) return true;
      if (ca === 'no' && (ua === 'n' || ua === 'no')) return true;
      if (ca === 'not given' && (ua === 'ng' || ua === 'not given' || ua === 'notgiven')) return true;
    }
    
    // Short answer - partial match
    if (question.type === 'short' || question.type === 'summary' || question.type === 'matching') {
      // Remove articles and check if contains key words
      const uaClean = ua.replace(/^(the|a|an)\s+/i, '');
      const caClean = ca.replace(/^(the|a|an)\s+/i, '');
      if (uaClean === caClean) return true;
      if (caClean.includes(uaClean) || uaClean.includes(caClean)) return true;
    }
    
    return false;
  }

  function nextPassage() {
    readingTest.currentPassage++;
    
    if (readingTest.currentPassage >= readingTest.testData.passages.length) {
      // Test complete
      finishReadingTest();
    } else {
      addMessage('bot', `\n✨ Great work! Moving to Passage ${readingTest.currentPassage + 1}...\n`, { typewriter: false });
      setTimeout(() => showPassage(), 1500);
    }
  }

  function finishReadingTest() {
    // Stop timer
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    
    const test = readingTest.testData;
    const elapsed = Math.round((Date.now() - readingTest.startTime) / 1000 / 60);
    
    // Calculate score
    let correct = 0;
    let total = 0;
    
    test.passages.forEach(p => {
      p.questions.forEach(q => {
        total++;
        const userAns = readingTest.answers[q.id];
        if (userAns && checkAnswer(userAns, q)) {
          correct++;
        }
      });
    });
    
    const percentage = Math.round((correct / total) * 100);
    const band = getBandScore(percentage);
    
    const results = `🎉 **TEST COMPLETE!**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 **Results for ${test.id}**

✅ Correct: ${correct}/${total}
📈 Percentage: ${percentage}%
🎯 Estimated Band: ${band}
⏱️ Time: ${elapsed} minutes

${getFeedback(percentage)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Click another test to continue practicing!`;
    
    addMessage('bot', results, { typewriter: false });
    
    // Hide test info
    if (DOM.testInfo) DOM.testInfo.classList.remove('active');
    
    // Reset state
    readingTest.active = false;
    
    // Save completion
    saveTestCompletion(test.id, percentage, band);
  }

  function getBandScore(percentage) {
    if (percentage >= 90) return '9.0';
    if (percentage >= 85) return '8.5';
    if (percentage >= 80) return '8.0';
    if (percentage >= 75) return '7.5';
    if (percentage >= 70) return '7.0';
    if (percentage >= 65) return '6.5';
    if (percentage >= 60) return '6.0';
    if (percentage >= 55) return '5.5';
    if (percentage >= 50) return '5.0';
    return '4.5';
  }

  function getFeedback(percentage) {
    if (percentage >= 90) return '🌟 Outstanding! Expert-level comprehension.';
    if (percentage >= 80) return '💪 Excellent! Very strong reading skills.';
    if (percentage >= 70) return '👍 Good job! Keep practicing.';
    if (percentage >= 60) return '📚 Decent effort! Work on scanning techniques.';
    return '💡 Keep practicing! Read more academic texts.';
  }

  function saveTestCompletion(testId, percentage, band) {
    try {
      const key = 'evolve_test_results';
      const results = JSON.parse(localStorage.getItem(key) || '{}');
      results[testId] = { percentage, band, date: Date.now() };
      localStorage.setItem(key, JSON.stringify(results));
    } catch (e) {
      console.error('Save error:', e);
    }
  }

  function startTimer(seconds) {
    state.timeRemaining = seconds;
    updateTimerDisplay();
    
    if (state.timerInterval) clearInterval(state.timerInterval);
    
    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      updateTimerDisplay();
      
      if (state.timeRemaining <= 0) {
        clearInterval(state.timerInterval);
        if (readingTest.active) {
          addMessage('bot', '⏰ Time is up! Submitting your answers...', { typewriter: false });
          setTimeout(() => finishReadingTest(), 1000);
        }
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    if (!DOM.timer) return;
    const mins = Math.floor(state.timeRemaining / 60);
    const secs = state.timeRemaining % 60;
    DOM.timer.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    
    // Warning colors
    if (state.timeRemaining <= 60) {
      DOM.timer.style.color = '#e74c3c';
    } else if (state.timeRemaining <= 300) {
      DOM.timer.style.color = '#f39c12';
    } else {
      DOM.timer.style.color = '';
    }
  }

  // =============================================================================
  // FAQ RESPONSES
  // =============================================================================
  const FAQ_RESPONSES = {
    "how-bootcamp-works": `The Evolve Academy is a structured English proficiency training system designed for IELTS and CELPIP preparation.

Here's how it works:

📚 STRUCTURED TESTS
• 33 Reading tests + 33 Writing tests
• Four levels: Foundation, Intermediate, Advanced, Expert
• Each test has real exam format and timing

⏱️ TIMED PRACTICE
• Real exam conditions with countdown timers
• Immediate feedback on each question
• Band score estimation

📊 PROGRESS TRACKING
• Track your scores over time
• See your strengths and areas to improve

Start with Foundation level and work your way up!`,

    "how-dashboard": `This dashboard is your training command center.

LEFT SIDE - Chat Interface:
• Chat with me for guidance and feedback
• Answer test questions here
• See your scores and improvement tips

RIGHT SIDE - Training Menu:
• Browse FAQ topics for tips
• Open Writing or Reading practice folders
• Select tests by difficulty level

Get started by clicking a test from the Reading section!`,

    "about": `About Evolve - Language Proficiency Training

Evolve is part of the North Star GPS platform by Matin Immigration Services.

WHAT IS EVOLVE?
A structured English training system designed specifically for:
• IELTS Academic and General Training
• CELPIP General preparation
• Canadian immigration language requirements

WHAT'S INCLUDED?
• 33 Reading tests (1,320 questions total)
• 33 Writing tests
• Four difficulty levels
• AI-powered feedback and scoring

Created by Matin Immigration Services Inc.
RCIC License #R712582`
  };

  // =============================================================================
  // FAQ BUTTON HANDLERS
  // =============================================================================
  function setupFAQButtons() {
    const faqButtons = document.querySelectorAll('.ns-btn[data-faq]');
    faqButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const faqKey = btn.getAttribute('data-faq');
        const response = FAQ_RESPONSES[faqKey];
        if (response) {
          addMessage('bot', response);
        } else {
          addMessage('bot', 'This feature is coming soon!');
        }
      });
    });
  }

  // =============================================================================
  // FOLDER EXPANSION & TEST BUTTONS
  // =============================================================================
  function setupFolders() {
    // Main folders
    const folderHeaders = document.querySelectorAll('.folder-header');
    folderHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const folder = header.getAttribute('data-folder');
        const testList = document.getElementById(`${folder}-tests`);
        header.classList.toggle('open');
        testList?.classList.toggle('open');
      });
    });
    
    // Sub-folders
    const subFolderHeaders = document.querySelectorAll('.sub-folder-header');
    subFolderHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const subfolder = header.getAttribute('data-subfolder');
        const subTestList = document.getElementById(`${subfolder}-tests`);
        header.classList.toggle('open');
        subTestList?.classList.toggle('open');
      });
    });
    
    // Generate test buttons
    generateTestButtons();
  }

  function generateTestButtons() {
    // Reading tests - map to actual test IDs in reading_bank.js
    generateReadingTests('reading-foundation', 1, 7, 'Foundation');      // R1-R7
    generateReadingTests('reading-intermediate', 8, 13, 'Intermediate'); // R8-R13
    generateReadingTests('reading-advanced', 14, 25, 'Advanced');        // R14-R25
    generateReadingTests('reading-expert', 26, 33, 'Expert');            // R26-R33
    
    // Writing tests (placeholder - these go to backend)
    generateWritingTests('writing-foundation', 1, 11, 'Foundation');
    generateWritingTests('writing-intermediate', 12, 22, 'Intermediate');
    generateWritingTests('writing-advanced', 23, 33, 'Advanced');
  }

  function generateReadingTests(containerId, start, end, level) {
    const container = document.getElementById(`${containerId}-tests`);
    if (!container) return;
    
    for (let i = start; i <= end; i++) {
      const btn = document.createElement('button');
      btn.className = 'test-btn';
      btn.textContent = `R${i}`;
      btn.addEventListener('click', () => {
        if (!state.hasAccess) {
          addMessage('bot', `To access Reading Test R${i}, please login or unlock Evolve access.`);
          return;
        }
        addMessage('user', `Start Reading Test R${i}`);
        startReadingTest(`R${i}`);
      });
      container.appendChild(btn);
    }
  }

  function generateWritingTests(containerId, start, end, level) {
    const container = document.getElementById(`${containerId}-tests`);
    if (!container) return;
    
    for (let i = start; i <= end; i++) {
      const btn = document.createElement('button');
      btn.className = 'test-btn';
      btn.textContent = `W${i}`;
      btn.addEventListener('click', () => {
        if (!state.hasAccess) {
          addMessage('bot', `To access Writing Test W${i}, please login or unlock Evolve access.`);
          return;
        }
        addMessage('bot', `Writing Test W${i} (${level}) - This sends your writing to the AI for detailed feedback. Feature coming soon!`);
      });
      container.appendChild(btn);
    }
  }

  // =============================================================================
  // UI CONTROLS
  // =============================================================================
  function setupUIControls() {
    // Stats dropdown
    DOM.btnStats?.addEventListener('click', (e) => {
      e.stopPropagation();
      DOM.statsDropdown?.classList.toggle('active');
      DOM.resourcesDropdown?.classList.remove('active');
    });
    
    // Resources dropdown
    DOM.btnResources?.addEventListener('click', (e) => {
      e.stopPropagation();
      DOM.resourcesDropdown?.classList.toggle('active');
      DOM.statsDropdown?.classList.remove('active');
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.resources-wrapper') && !e.target.closest('#btn-stats')) {
        DOM.resourcesDropdown?.classList.remove('active');
        DOM.statsDropdown?.classList.remove('active');
      }
    });
    
    // Notebook
    DOM.btnNotebook?.addEventListener('click', toggleNotebook);
    DOM.notebookClose?.addEventListener('click', toggleNotebook);
    
    if (DOM.notebookArea) {
      DOM.notebookArea.value = localStorage.getItem(CONFIG.NOTEBOOK_KEY) || '';
      DOM.notebookArea.addEventListener('input', () => {
        localStorage.setItem(CONFIG.NOTEBOOK_KEY, DOM.notebookArea.value);
      });
    }
    
    // Download
    DOM.btnDownload?.addEventListener('click', downloadConversation);
    
    // Reset
    DOM.btnReset?.addEventListener('click', () => {
      if (confirm('Clear chat and start fresh?')) {
        resetChat();
      }
    });
    
    // Login
    DOM.btnLogin?.addEventListener('click', openLoginModal);
    DOM.loginClose?.addEventListener('click', closeLoginModal);
    DOM.loginSubmit?.addEventListener('click', handleLogin);
    DOM.loginOverlay?.addEventListener('click', (e) => {
      if (e.target === DOM.loginOverlay) closeLoginModal();
    });
    DOM.loginEmail?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleLogin();
    });
    
    // Unlock button
    DOM.unlockEvolve?.addEventListener('click', () => {
      window.open('https://migratenorth.ca/checkout/evolve', '_blank');
    });
    
    // Mobile menu
    DOM.mobileMenuBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      DOM.mobileMenuDropdown?.classList.toggle('active');
    });
    
    DOM.btnStatsMobile?.addEventListener('click', () => {
      closeMobileMenu();
      DOM.statsDropdown?.classList.toggle('active');
    });
    DOM.btnDownloadMobile?.addEventListener('click', () => {
      closeMobileMenu();
      downloadConversation();
    });
    DOM.btnNotebookMobile?.addEventListener('click', () => {
      closeMobileMenu();
      toggleNotebook();
    });
    DOM.btnResourcesMobile?.addEventListener('click', () => {
      closeMobileMenu();
      DOM.resourcesDropdown?.classList.toggle('active');
    });
    DOM.btnResetMobile?.addEventListener('click', () => {
      closeMobileMenu();
      if (confirm('Clear chat and start fresh?')) resetChat();
    });
    DOM.btnLoginMobile?.addEventListener('click', () => {
      closeMobileMenu();
      openLoginModal();
    });
    
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#session-controls-container')) {
        DOM.mobileMenuDropdown?.classList.remove('active');
      }
    });
    
    // Send button
    DOM.chatSend?.addEventListener('click', () => handleSendMessage());
    
    // Enter key to send
    DOM.chatInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    });
    
    // Word count
    DOM.chatInput?.addEventListener('input', updateWordCount);
  }

  function closeMobileMenu() {
    DOM.mobileMenuDropdown?.classList.remove('active');
  }

  function toggleNotebook() {
    DOM.notebookPanel?.classList.toggle('open');
  }

  function downloadConversation() {
    if (state.history.length === 0) {
      showToast('No conversation to download');
      return;
    }
    
    let transcript = '='.repeat(60) + '\n';
    transcript += 'EVOLVE - Training Session Transcript\n';
    transcript += `Downloaded: ${new Date().toLocaleString()}\n`;
    transcript += '='.repeat(60) + '\n\n';
    
    state.history.forEach(msg => {
      const role = msg.role === 'user' ? 'You' : 'Evolve Coach';
      transcript += `${role}:\n${msg.content}\n\n`;
    });
    
    const blob = new Blob([transcript], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `evolve-session-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    showToast('Session downloaded!');
  }

  function resetChat() {
    state.history = [];
    localStorage.removeItem(CONFIG.STORAGE_KEY);
    hideSkipButton();
    if (state.currentTypeInterval) clearInterval(state.currentTypeInterval);
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.isTyping = false;
    readingTest.active = false;
    if (DOM.testInfo) DOM.testInfo.classList.remove('active');
    showWelcome();
    showToast('Chat reset!');
  }

  function updateWordCount() {
    const text = DOM.chatInput?.value || '';
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (DOM.wordCount) DOM.wordCount.textContent = words;
  }

  // =============================================================================
  // LOGIN & ENTITLEMENT
  // =============================================================================
  function openLoginModal() {
    DOM.loginOverlay?.classList.remove('hidden');
    if (DOM.loginStatus) DOM.loginStatus.textContent = '';
    DOM.loginEmail?.focus();
  }

  function closeLoginModal() {
    DOM.loginOverlay?.classList.add('hidden');
  }

  async function handleLogin() {
    const email = DOM.loginEmail?.value.trim();
    if (!email || !email.includes('@')) {
      if (DOM.loginStatus) DOM.loginStatus.textContent = 'Please enter a valid email.';
      return;
    }
    
    if (DOM.loginStatus) DOM.loginStatus.textContent = 'Checking access...';
    if (DOM.loginSubmit) DOM.loginSubmit.disabled = true;
    
    try {
      const response = await fetch(CONFIG.ENTITLEMENT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, product: 'evolve' })
      });
      
      const data = await response.json();
      
      if (data.hasAccess) {
        state.isLoggedIn = true;
        state.userEmail = email;
        state.hasAccess = true;
        
        if (DOM.loginStatus) DOM.loginStatus.textContent = '✓ Access confirmed!';
        DOM.loggedInBar?.classList.add('visible');
        if (DOM.loggedInEmail) DOM.loggedInEmail.textContent = email;
        
        if (DOM.chatInput) {
          DOM.chatInput.disabled = false;
          DOM.chatInput.placeholder = 'Type your answer...';
        }
        if (DOM.chatSend) DOM.chatSend.disabled = false;
        if (DOM.btnLogin) DOM.btnLogin.textContent = '✓ Logged In';
        
        setTimeout(closeLoginModal, 1000);
        
        addMessage('bot', `Welcome back, ${email}!\n\nYou have full access. Select a Reading test from the menu to begin!`);
      } else {
        if (DOM.loginStatus) DOM.loginStatus.textContent = 'No subscription found. Click "Unlock Evolve Access" to subscribe.';
      }
    } catch (error) {
      console.error('Login error:', error);
      if (DOM.loginStatus) DOM.loginStatus.textContent = 'Connection error. Please try again.';
    } finally {
      if (DOM.loginSubmit) DOM.loginSubmit.disabled = false;
    }
  }

  // =============================================================================
  // STORAGE
  // =============================================================================
  function saveToStorage() {
    try {
      const data = {
        history: state.history.slice(-50),
        userEmail: state.userEmail,
        timestamp: Date.now()
      };
      localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Storage error:', e);
    }
  }

  function loadFromStorage() {
    try {
      const data = localStorage.getItem(CONFIG.STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (Date.now() - parsed.timestamp < 7 * 24 * 60 * 60 * 1000) {
          state.history = parsed.history || [];
          state.userEmail = parsed.userEmail;
        }
      }
    } catch (e) {
      console.error('Load storage error:', e);
    }
  }

  // =============================================================================
  // INITIALIZATION
  // =============================================================================
  function init() {
    console.log('Evolve App initializing...');
    console.log('Reading tests loaded:', typeof READING_TESTS_FULL !== 'undefined' ? READING_TESTS_FULL.length + ' tests' : 'NOT LOADED');
    
    loadFromStorage();
    setupUIControls();
    setupFAQButtons();
    setupFolders();
    showWelcome();
    
    console.log('Evolve App ready!');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
