// =============================================================================
// EVOLVE APP - Complete Chat Engine with Video/Image Support
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
    // Optional intro video - set to null to disable, or use YouTube embed URL
    INTRO_VIDEO: null // Example: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
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
    // Stats
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
    // Buttons
    btnStats: document.getElementById('btn-stats'),
    btnDownload: document.getElementById('btn-download'),
    btnNotebook: document.getElementById('btn-notebook'),
    btnResources: document.getElementById('btn-resources'),
    btnReset: document.getElementById('btn-reset'),
    btnLogin: document.getElementById('btn-login'),
    // Mobile
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileMenuDropdown: document.getElementById('mobile-menu-dropdown'),
    btnStatsMobile: document.getElementById('btn-stats-mobile'),
    btnDownloadMobile: document.getElementById('btn-download-mobile'),
    btnNotebookMobile: document.getElementById('btn-notebook-mobile'),
    btnResourcesMobile: document.getElementById('btn-resources-mobile'),
    btnResetMobile: document.getElementById('btn-reset-mobile'),
    btnLoginMobile: document.getElementById('btn-login-mobile'),
    // Panels
    notebookPanel: document.getElementById('notebookPanel'),
    notebookArea: document.getElementById('notebookArea'),
    notebookClose: document.getElementById('notebookClose'),
    resourcesDropdown: document.getElementById('resourcesDropdown'),
    // Login
    loginOverlay: document.getElementById('login-overlay'),
    loginEmail: document.getElementById('login-email'),
    loginSubmit: document.getElementById('login-submit'),
    loginStatus: document.getElementById('login-status'),
    loginClose: document.getElementById('login-close'),
    loggedInBar: document.getElementById('logged-in-bar'),
    loggedInEmail: document.getElementById('logged-in-email'),
    // FAQ
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
      // User messages - just a bubble, no avatar
      const bubble = document.createElement('div');
      bubble.className = 'bubble user';
      bubble.textContent = content.length > 500 ? content.substring(0, 500) + '...' : content;
      DOM.chatBody.appendChild(bubble);
    } else {
      // Bot messages - avatar + bubble in a row
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
        // Video message
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
        // Image message
        bubble.innerHTML = `
          <div class="media-message">
            <img src="${mediaUrl}" alt="Image" style="max-width:100%;border-radius:8px;margin-bottom:10px;">
            <p style="margin:0;font-size:13px;">${escapeHtml(content)}</p>
          </div>
        `;
      } else if (typewriter && !state.isTyping) {
        // Typewriter effect for text
        typeWriterEffect(content, bubble);
      } else {
        // Instant text (format bold and newlines)
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
    
    // Remove old handler and add new one
    if (DOM.chatSkip) {
      DOM.chatSkip.removeEventListener('click', DOM.chatSkip._handler);
      DOM.chatSkip._handler = skipHandler;
      DOM.chatSkip.addEventListener('click', skipHandler);
    }
    
    state.currentTypeInterval = setInterval(() => {
      if (index >= cleanText.length) {
        clearInterval(state.currentTypeInterval);
        // Apply full formatting when done
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
    
    // If intro video is configured, show it first
    if (CONFIG.INTRO_VIDEO) {
      addMessage('bot', "Welcome to Evolve! Here's a quick introduction:", {
        typewriter: false,
        saveToHistory: false,
        isMedia: true,
        mediaType: 'video',
        mediaUrl: CONFIG.INTRO_VIDEO
      });
      
      // Then show text welcome after a delay
      setTimeout(() => {
        addMessage('bot', getWelcomeMessage(), { typewriter: true, saveToHistory: true });
      }, 500);
    } else {
      // Just show text welcome
      setTimeout(() => {
        addMessage('bot', getWelcomeMessage(), { typewriter: true, saveToHistory: true });
      }, 300);
    }
  }

  // =============================================================================
  // SEND MESSAGE
  // =============================================================================
  async function handleSendMessage(text) {
    const message = text || (DOM.chatInput?.value.trim() || '');
    if (!message) return;
    
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
  // FAQ RESPONSES
  // =============================================================================
  const FAQ_RESPONSES = {
    "how-bootcamp-works": `The Evolve Academy is a structured English proficiency training system designed for IELTS and CELPIP preparation.

Here's how it works:

📚 STRUCTURED TESTS
• 66 tests across Writing and Reading
• Three difficulty levels: Foundation, Intermediate, Advanced
• Micro drills for targeted skill practice

⏱️ TIMED PRACTICE
• Real exam conditions with countdown timers
• Word count tracking for writing tasks
• Immediate feedback on submissions

📊 PROGRESS TRACKING
• Track your scores over time
• See your strengths and areas to improve
• Build consistency with daily practice streaks

🔄 REFINEMENT LOOP
• Submit your response
• Get detailed feedback
• Refine and resubmit to improve

Start with Foundation level and work your way up!`,

    "how-dashboard": `This dashboard is your training command center.

LEFT SIDE - Chat Interface:
• Chat with me for guidance and feedback
• Submit your test responses here
• See your scores and improvement tips

RIGHT SIDE - Training Menu:
• Browse FAQ topics for tips
• Open Writing or Reading practice folders
• Track vocabulary and progress

TOP BAR - Quick Actions:
• 📊 Stats - View your progress statistics
• 📥 Download - Save your conversation
• 📓 Notebook - Take personal notes
• 🔗 Resources - Official IELTS/CELPIP links
• ♻️ Reset - Start fresh
• 🔐 Login - Access your subscription

Get started by clicking a test from the Writing or Reading section!`,

    "speed-tips": `Tips for Writing Faster:

1. PLAN BEFORE YOU WRITE (2-3 minutes)
   • Identify the question type
   • Brainstorm 2-3 main ideas
   • Outline your structure

2. USE TEMPLATES
   • Memorize introduction patterns
   • Have transition phrases ready
   • Know your conclusion format

3. DON'T OVER-EDIT
   • Write continuously
   • Fix errors at the end
   • Trust your first instinct

4. PRACTICE TYPING
   • Aim for 40+ WPM
   • Use all fingers
   • Practice daily

5. TIME YOURSELF
   • Set strict deadlines
   • Track your pace
   • Build speed gradually`,

    "accuracy-tips": `Tips for Better Accuracy:

1. READ THE QUESTION TWICE
   • Underline key words
   • Identify what's being asked
   • Note any specific requirements

2. CHECK SUBJECT-VERB AGREEMENT
   • Singular subjects = singular verbs
   • Watch for tricky plurals
   • Be careful with collective nouns

3. USE PUNCTUATION CORRECTLY
   • Commas separate clauses
   • Periods end complete thoughts
   • Avoid comma splices

4. PROOFREAD SYSTEMATICALLY
   • Read aloud in your head
   • Check one error type at a time
   • Leave 2-3 minutes for review

5. LEARN FROM MISTAKES
   • Keep an error log
   • Review common patterns
   • Practice weak areas`,

    "vocab-tips": `How to Learn New Words Effectively:

1. CONTEXT IS KEY
   • Learn words in sentences, not isolation
   • Note how words are used in reading passages
   • Practice using new words immediately

2. USE SPACED REPETITION
   • Review new words after 1 day
   • Then after 3 days, 1 week, 2 weeks
   • Focus on words you struggle with

3. MAKE CONNECTIONS
   • Link new words to words you know
   • Create word families (noun, verb, adjective forms)
   • Use mnemonics for difficult words

4. ACTIVE PRACTICE
   • Write sentences with new words
   • Use them in speaking practice
   • Quiz yourself regularly

5. FOCUS ON HIGH-VALUE WORDS
   • Academic Word List (AWL)
   • Topic-specific vocabulary
   • Transition words and phrases`,

    "grammar-rules": `Essential Grammar Rules:

1. SUBJECT-VERB AGREEMENT
   • The dog runs (singular)
   • The dogs run (plural)
   • Everyone has (indefinite = singular)

2. TENSE CONSISTENCY
   • Stay in one tense unless time changes
   • Past for completed actions
   • Present for general truths

3. ARTICLE USAGE
   • "A" before consonant sounds
   • "An" before vowel sounds
   • "The" for specific/known items

4. COMMA RULES
   • After introductory phrases
   • Before coordinating conjunctions (FANBOYS)
   • In lists of 3+ items

5. PRONOUN REFERENCE
   • Pronouns must clearly refer to a noun
   • Avoid vague "it" or "this"
   • Match singular/plural`,

    "common-mistakes": `Common Mistakes to Avoid:

1. RUN-ON SENTENCES
   ❌ I went to the store I bought milk
   ✓ I went to the store, and I bought milk.

2. COMMA SPLICES
   ❌ She was tired, she went to bed.
   ✓ She was tired, so she went to bed.

3. WRONG WORD FORMS
   ❌ The increase of pollution...
   ✓ The increasing pollution...

4. MISUSED WORDS
   ❌ effect vs affect
   ❌ their vs there vs they're
   ❌ its vs it's

5. REDUNDANCY
   ❌ In my personal opinion...
   ✓ In my opinion...

6. VAGUE LANGUAGE
   ❌ This is very important
   ✓ This significantly impacts...`,

    "essay-structure": `How to Structure an Essay:

INTRODUCTION (2-3 sentences)
• Hook or background statement
• Paraphrase the question
• State your thesis/position

BODY PARAGRAPH 1
• Topic sentence (main idea)
• Explanation
• Example or evidence
• Link back to thesis

BODY PARAGRAPH 2
• Topic sentence (different main idea)
• Explanation
• Example or evidence
• Link back to thesis

CONCLUSION (2-3 sentences)
• Restate thesis differently
• Summarize main points
• Final thought or recommendation

TIPS:
• Each paragraph = one main idea
• Use transition words between paragraphs
• Aim for 250-280 words for IELTS Task 2`,

    "reading-analysis": `How to Analyze a Reading Passage:

BEFORE READING
• Skim headings and first sentences
• Note the topic and structure
• Check how many questions

DURING READING
• Read questions first
• Scan for keywords
• Don't read every word - skim efficiently

QUESTION TYPES:

Multiple Choice:
• Eliminate wrong answers
• Look for paraphrased language
• Beware of "almost right" options

True/False/Not Given:
• TRUE = matches the passage
• FALSE = contradicts the passage
• NOT GIVEN = no information

Matching:
• Scan for names, dates, terms
• Mark as you find them
• Check all options

Fill in the Blank:
• Word limit matters
• Grammar must fit
• Copy spelling exactly`,

    "about": `About Evolve - Language Proficiency Training

Evolve is part of the North Star GPS platform by Matin Immigration Services.

WHAT IS EVOLVE?
A structured English training system designed specifically for:
• IELTS Academic and General Training
• CELPIP General preparation
• Canadian immigration language requirements

WHAT'S INCLUDED?
• 66 structured tests (Writing & Reading)
• Three difficulty levels
• Micro drills for targeted practice
• Vocabulary builder with spaced repetition
• Progress tracking and analytics
• AI-powered feedback and scoring

WHO IS IT FOR?
• Express Entry applicants needing CLB 7+
• Provincial nominee candidates
• Anyone preparing for IELTS or CELPIP

PRICING
$150 CAD per year - unlimited access

Created by Matin Immigration Services Inc.
RCIC License #R712582`,

    "pricing": `Evolve Pricing & Access

YEARLY SUBSCRIPTION: $150 CAD/year

What's included:
✓ 66 structured tests (Writing & Reading)
✓ Foundation, Intermediate, and Advanced levels
✓ Micro drills for grammar, vocabulary, and more
✓ AI-powered feedback on every submission
✓ Vocabulary builder with spaced repetition
✓ Progress tracking and statistics
✓ Unlimited practice sessions

ADDITIONAL SERVICES:
• Writing Review by Human Expert: $50 CAD
• One-on-One Coaching Session: $75 CAD/hour

To subscribe, click "Unlock Full Evolve Access" below or visit:
https://migratenorth.ca/checkout/evolve

All prices in Canadian dollars.
Subscription renews annually.`,

    "ielts-writing-scoring": `IELTS Writing Scoring Explained:

Your writing is scored on 4 criteria (each worth 25%):

1. TASK ACHIEVEMENT (Task 2) / TASK RESPONSE (Task 1)
   Band 7+: Fully addresses all parts of the task
   • Clear position throughout
   • Relevant, extended ideas
   • Well-developed arguments

2. COHERENCE AND COHESION
   Band 7+: Logically organized
   • Clear progression throughout
   • Effective use of cohesive devices
   • Each paragraph has a clear central topic

3. LEXICAL RESOURCE (Vocabulary)
   Band 7+: Wide range of vocabulary
   • Less common lexical items
   • Awareness of style and collocation
   • Occasional errors in word choice

4. GRAMMATICAL RANGE AND ACCURACY
   Band 7+: Variety of complex structures
   • Frequent error-free sentences
   • Good control of grammar
   • Errors don't impede communication

BAND SCORE GUIDE:
• Band 9: Expert user
• Band 8: Very good user
• Band 7: Good user (CLB 9)
• Band 6: Competent user (CLB 7)
• Band 5: Modest user`,

    "score-conversion": `IELTS/CELPIP to CLB Conversion:

LISTENING:
CLB 10+ = IELTS 8.5+ / CELPIP 12
CLB 9 = IELTS 8.0 / CELPIP 10-11
CLB 8 = IELTS 7.5 / CELPIP 9
CLB 7 = IELTS 6.0-7.0 / CELPIP 7-8
CLB 6 = IELTS 5.5 / CELPIP 6
CLB 5 = IELTS 5.0 / CELPIP 5

READING:
CLB 10+ = IELTS 8.0+ / CELPIP 12
CLB 9 = IELTS 7.0-7.5 / CELPIP 10-11
CLB 8 = IELTS 6.5 / CELPIP 9
CLB 7 = IELTS 6.0 / CELPIP 7-8
CLB 6 = IELTS 5.0-5.5 / CELPIP 6

WRITING:
CLB 10+ = IELTS 7.5+ / CELPIP 12
CLB 9 = IELTS 7.0 / CELPIP 10-11
CLB 8 = IELTS 6.5 / CELPIP 9
CLB 7 = IELTS 6.0 / CELPIP 7-8
CLB 6 = IELTS 5.5 / CELPIP 6

SPEAKING:
CLB 10+ = IELTS 7.5+ / CELPIP 12
CLB 9 = IELTS 7.0 / CELPIP 10-11
CLB 8 = IELTS 6.5 / CELPIP 9
CLB 7 = IELTS 6.0 / CELPIP 7-8

For Express Entry:
• Minimum CLB 7 for Federal Skilled Worker
• CLB 9 across all 4 skills = maximum CRS points`
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
          addMessage('bot', 'This feature is coming soon. Stay tuned!');
        }
      });
    });
    
    // Action buttons
    const actionButtons = document.querySelectorAll('.ns-btn[data-action]');
    actionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        handleAction(action);
      });
    });
  }

  function handleAction(action) {
    switch(action) {
      case 'vocab-drill':
        addMessage('bot', 'Vocabulary drills are coming soon! This feature will help you learn academic vocabulary with spaced repetition.');
        break;
      case 'vocab-review':
        addMessage('bot', 'Vocabulary review is coming soon! You\'ll be able to review words you\'ve learned and track mastery.');
        break;
      default:
        addMessage('bot', 'This feature is coming soon!');
    }
  }

  // =============================================================================
  // FOLDER EXPANSION
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
    // Writing tests
    generateTestsForLevel('writing-foundation', 'Writing', 1, 11, 'Foundation');
    generateTestsForLevel('writing-intermediate', 'Writing', 12, 22, 'Intermediate');
    generateTestsForLevel('writing-advanced', 'Writing', 23, 33, 'Advanced');
    
    // Reading tests
    generateTestsForLevel('reading-foundation', 'Reading', 1, 11, 'Foundation');
    generateTestsForLevel('reading-intermediate', 'Reading', 12, 22, 'Intermediate');
    generateTestsForLevel('reading-advanced', 'Reading', 23, 33, 'Advanced');
    
    // Micro drills
    generateMicroDrills('writing-micro');
    generateMicroDrills('reading-micro');
  }

  function generateTestsForLevel(containerId, type, start, end, level) {
    const container = document.getElementById(`${containerId}-tests`);
    if (!container) return;
    
    for (let i = start; i <= end; i++) {
      const btn = document.createElement('button');
      btn.className = 'test-btn';
      btn.textContent = `${type} Test ${i}`;
      btn.addEventListener('click', () => startTest(type, i, level));
      container.appendChild(btn);
    }
  }

  function generateMicroDrills(containerId) {
    const container = document.getElementById(`${containerId}-tests`);
    if (!container) return;
    
    const drills = ['Grammar', 'Vocabulary', 'Cohesion', 'Summarization', 'Tone'];
    drills.forEach(drill => {
      const btn = document.createElement('button');
      btn.className = 'test-btn';
      btn.textContent = `${drill} Drill`;
      btn.addEventListener('click', () => startMicroDrill(drill));
      container.appendChild(btn);
    });
  }

  function startTest(type, number, level) {
    if (!state.hasAccess) {
      addMessage('bot', `To access ${type} Test ${number}, please login with your subscription email or unlock Evolve access.`);
      return;
    }
    
    addMessage('bot', `Starting ${type} Test ${number} (${level} Level)...\n\nThis test will be timed. You'll have 20 minutes for Foundation, 30 minutes for Intermediate, and 40 minutes for Advanced.\n\nThe test prompt is loading...`);
    
    // Show test info bar
    if (DOM.testInfo) DOM.testInfo.classList.add('active');
    if (DOM.testLevelBadge) DOM.testLevelBadge.textContent = level;
  }

  function startMicroDrill(drillType) {
    if (!state.hasAccess) {
      addMessage('bot', `To access ${drillType} Drills, please login with your subscription email or unlock Evolve access.`);
      return;
    }
    
    addMessage('bot', `Starting ${drillType} Micro Drill...\n\nMicro drills are short, focused exercises to improve specific skills. You'll get immediate feedback after each response.`);
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
    
    // Load saved notebook content
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
    
    // Mobile button handlers
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
    
    // Close mobile menu when clicking outside
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
    
    // Word count for input
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
    state.isTyping = false;
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
      if (DOM.loginStatus) DOM.loginStatus.textContent = 'Please enter a valid email address.';
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
        
        // Enable input
        if (DOM.chatInput) {
          DOM.chatInput.disabled = false;
          DOM.chatInput.placeholder = 'Type your message or response...';
        }
        if (DOM.chatSend) DOM.chatSend.disabled = false;
        if (DOM.chatRefine) DOM.chatRefine.disabled = false;
        
        // Update login button
        if (DOM.btnLogin) DOM.btnLogin.textContent = '✓ Logged In';
        
        setTimeout(closeLoginModal, 1000);
        
        addMessage('bot', `Welcome back! You're logged in as ${email}.\n\nYou now have full access to all Evolve training features. Select a test from the menu to begin!`);
      } else {
        if (DOM.loginStatus) DOM.loginStatus.textContent = 'No active subscription found. Click "Unlock Full Evolve Access" to subscribe.';
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
        // Only load if less than 7 days old
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
    
    loadFromStorage();
    setupUIControls();
    setupFAQButtons();
    setupFolders();
    showWelcome();
    
    console.log('Evolve App ready!');
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
