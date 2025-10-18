<!-- North Star GPS – Explore Page (Final Clean Output + RCIC Persona + Full Sanitation Fix) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600&display=swap" rel="stylesheet">

<style>
  :root {
    --line: rgba(255,255,255,0.1);
    --ink: #E8ECEB;
    --radius: 25px;
    --glow: #00F5FF;
    --panel: #D4AA7D;
    --bg: #F5D6BA;
    --user: #C49B6E;
  }

  html, body {
    margin: 0 auto;
    max-width: 1440px;
    background: var(--bg);
    font-size: 105%;
    font-family: 'Exo 2', sans-serif;
    color: var(--ink);
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%;
  }

  * { box-sizing: border-box; }

  @media (min-width:769px) {
    html, body { height:100vh!important; overflow-y:hidden!important; }
    .mn-header-outer, .elementor-location-header { position:fixed; top:0; left:0; width:100vw; z-index:10; }
    .mn-footer, .elementor-location-footer { position:fixed; bottom:0; left:0; width:100vw; z-index:10; }
  }

  @media (max-width:768px) {
    html, body { height:auto!important; overflow-y:auto!important; -webkit-overflow-scrolling:touch; }
    .mn-header-outer, .mn-footer, .elementor-location-header, .elementor-location-footer { position:static!important; width:100%!important; }
  }

  #main-content-area { width:100%; min-height:calc(100vh - 120px - 80px); display:flex; justify-content:center; align-items:center; padding:60px 20px; background:var(--bg); }
  .contrast-panel { background:var(--panel); border-radius:var(--radius); padding:28px; box-shadow:0 0 40px rgba(0,0,0,0.15); max-width:1180px; width:100%; display:flex; justify-content:center; overflow:hidden; }

  .ns-grid { display:flex; width:100%; gap:22px; align-items:flex-start; flex-wrap:nowrap; }

  .chat-box { flex:2.2; display:flex; flex-direction:column; background:linear-gradient(145deg,#0F1C2E,#243447);
    border:1px solid var(--line); border-radius:var(--radius); box-shadow:0 0 22px rgba(0,245,255,0.25);
    height:635px; position:relative; overflow:hidden; }

  #chat-body { flex:1 1 auto; padding:17px; overflow-y:auto; scroll-behavior:smooth; font-size:15px; }
  #chat-footer { display:grid; grid-template-columns:1fr auto auto; gap:12px; padding:17px; border-top:1px solid var(--line);
    background:linear-gradient(145deg,rgba(25,35,50,0.9),rgba(45,55,77,0.9)); position:sticky; bottom:0; }

  #chat-input { resize:none; height:58px; border:1px solid var(--line); border-radius:14px; background:rgba(42,42,61,0.8);
    color:#fff; padding:10px; font-size:15px; transition:all 0.3s ease; }
  #chat-input:focus { outline:none; box-shadow:0 0 10px var(--glow); }

  #chat-send, #chat-reset {
    border-radius:14px; border:1px solid var(--line);
    background:rgba(42,42,61,0.95); color:#fff;
    padding:0 19px; font-weight:600; cursor:pointer;
    transition:all 0.25s ease; font-size:15px;
  }
  #chat-reset { background:rgba(212,170,125,0.35); border-color:#D4AA7D; }
  #chat-send:hover, #chat-reset:hover {
    background:rgba(58,58,77,0.95);
    box-shadow:0 0 11px var(--glow), 0 0 22px var(--glow) inset;
    transform:translateY(-2px);
  }

  .chat-message { display:flex; align-items:flex-start; margin:10px 0; gap:10px; opacity:0; transform:translateY(10px);
    animation:fadeInUp 0.45s ease-out forwards; }
  @keyframes fadeInUp { from { opacity:0; transform:translateY(15px); } to { opacity:1; transform:translateY(0); } }

  .chat-message.bot .chat-bubble {
    background:#F5D6BA; color:#1A1A1A;
    border-radius:18px 18px 18px 6px;
    padding:12px 16px; max-width:75%;
    box-shadow:0 0 14px rgba(0,0,0,0.1), inset 0 0 8px rgba(255,255,255,0.25);
  }

  .chat-message.user { justify-content:flex-end; }
  .chat-message.user .chat-bubble {
    background:var(--user); color:#2A2A2A;
    border-radius:18px 18px 6px 18px;
    padding:12px 16px; max-width:75%;
    box-shadow:0 0 18px rgba(212,170,125,0.45);
  }

  .chat-message img.avatar { width:42px; height:42px; border-radius:50%; object-fit:cover; }

  .typing-bubble { display:flex; gap:5px; padding:10px 16px; margin:10px; background:rgba(255,255,255,0.08);
    border-radius:14px; width:fit-content; animation:fadeIn 0.4s ease-in forwards; }
  .dot { width:8px; height:8px; border-radius:50%; background:#E8ECEB; opacity:0.5; animation:blink 1.2s infinite; }
  .dot:nth-child(2){animation-delay:0.2s;} .dot:nth-child(3){animation-delay:0.4s;}
  @keyframes blink { 0%,80%,100% { opacity:0.5; } 40% { opacity:1; } }
  @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }

  .side-panel { flex:0.8; display:flex; flex-direction:column; align-items:center; height:635px; }
  .avatar-box { width:100%; margin-bottom:18px; border:1px solid var(--line); border-radius:var(--radius);
    overflow:hidden; background:rgba(255,255,255,0.05); box-shadow:0 0 12px rgba(0,0,0,0.2); }
  .avatar-box img { width:100%; height:auto; display:block; object-fit:cover; }

  .faq-box { flex:1; width:100%; overflow-y:auto; padding:11px;
    background:linear-gradient(145deg,rgba(20,20,40,0.95),rgba(50,50,80,0.95));
    border-radius:var(--radius); border:1px solid var(--line); color:#fff;
    display:flex; flex-direction:column; gap:7px; box-shadow:0 0 22px rgba(0,245,255,0.2); font-size:15px; }
  .faq-box h3 { margin:5px 0 2px; font-size:13px; font-weight:600; color:#FF4D9E; text-transform:uppercase; }

  .ns-btn { background:linear-gradient(145deg,rgba(42,42,61,0.85),rgba(30,30,47,0.85));
    color:#fff; border:1px solid #444; border-radius:13px; padding:7px 9px;
    font-size:13px; text-align:left; cursor:pointer; transition:all 0.25s ease; }
  .ns-btn:hover { background:linear-gradient(145deg,rgba(58,58,77,0.95),rgba(40,40,60,0.95));
    box-shadow:0 0 11px var(--glow), 0 0 22px var(--glow) inset; transform:translateY(-2px); }

  @media (max-width:768px) {
    .contrast-panel { padding:18px; }
    .ns-grid { flex-direction:column; align-items:center; gap:22px; }
    .side-panel { display:contents; }
    .avatar-box { order:1; width:90vw; max-width:400px; margin-bottom:12px; }
    .chat-box { order:2; width:95vw; height:645px; max-height:645px; flex-shrink:0; }
    .faq-box { order:3; width:95vw; height:560px; max-height:560px; overflow-y:auto; }
  }
</style>

<div id="main-content-area">
  <div class="contrast-panel">
    <div class="ns-grid">
      <div class="chat-box" id="chatbox">
        <div id="chat-body"></div>
        <div id="chat-footer">
          <textarea id="chat-input" placeholder="Type your question..." aria-label="Message input"></textarea>
          <button id="chat-send" aria-label="Send message">Send</button>
          <button id="chat-reset" aria-label="Reset chat">Reset</button>
        </div>
      </div>

      <div class="side-panel">
        <div class="avatar-box">
          <img src="https://migratenorth.ca/wp-content/uploads/2025/09/Gemini_Generated_Image_kqe210kqe210kqe2-10.png" alt="North Star GPS Avatar" loading="lazy">
        </div>
        <div id="faq-dashboard" class="faq-box">
          <h3>IMMIGRATION BASICS</h3>
          <button class="ns-btn" data-topic="CRS Basics">Understand the CRS System</button>
          <button class="ns-btn" data-topic="Express Entry">Learn How Express Entry Works</button>
          <button class="ns-btn" data-topic="ECA Guide">Verify Your Education (ECA)</button>
          <button class="ns-btn" data-topic="PR Timelines">Check PR Processing Times</button>
          <button class="ns-btn" data-topic="Costs">Estimate Total Immigration Costs</button>

          <h3>ENGLISH PROFICIENCY</h3>
          <button class="ns-btn" data-topic="Take a Reading Test">Try a Free Reading Test</button>
          <button class="ns-btn" data-topic="Take a Writing Test">Try a Free Writing Test</button>
          <button class="ns-btn" data-topic="Writing Tips">Learn IELTS Writing Tips</button>
          <button class="ns-btn" data-topic="Band Score Guide">Understand Band Score Levels</button>

          <h3>ACADEMY</h3>
          <button class="ns-btn" data-topic="Explore">Explore</button>
          <button class="ns-btn" data-topic="Evolve">Evolve</button>
          <button class="ns-btn" data-topic="Elevate">Elevate</button>

          <h3>MATIN IMMIGRATION SERVICES</h3>
          <button class="ns-btn" data-topic="Our Services">Our Services</button>
          <button class="ns-btn" data-topic="Pricing">Pricing</button>
          <button class="ns-btn" data-topic="Book Consultation">Book Consultation</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
(() => {
  const FUNCTION_URL = 'https://startling-faun-f9dddb.netlify.app/.netlify/functions/chat-explore';
  const body = document.getElementById('chat-body');
  const input = document.getElementById('chat-input');
  const send = document.getElementById('chat-send');
  const reset = document.getElementById('chat-reset');
  const buttons = document.querySelectorAll('.ns-btn');
  let typingBubble = null;
  let pendingChunks = [];

  addMsg('bot', 'Hello! I’m North Star GPS, your Migrate North immigration and IELTS guide. Select a topic or ask me anything.', true, true);

  function scrollDown() { body.scrollTop = body.scrollHeight; }

  // --- FIXED CLEANER ---
  function cleanText(text) {
    if (!text) return '';
    return text
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
      .replace(/\b[TE]?Show\s*more[—:\-\s]*/gi, '')
      .replace(/—+/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .replace(/^[\-\s]+|[\-\s]+$/g, '')
      .trim();
  }

  function addMsg(role, text, save = true, typewriter = true) {
    text = cleanText(text);
    const div = document.createElement('div');
    div.className = 'chat-message ' + role;
    const avatar = role === 'user'
      ? 'https://migratenorth.ca/wp-content/uploads/2025/10/medical-banner-with-doctor-working-laptop-scaled.jpeg'
      : 'https://migratenorth.ca/wp-content/uploads/2025/10/Gemini_Generated_Image_kqe210kqe210kqe2.png';
    if (role === 'user') {
      div.innerHTML = `<div class="chat-bubble">${text}</div><img class="avatar" src="${avatar}" alt="User">`;
    } else {
      div.innerHTML = `<img class="avatar" src="${avatar}" alt="Bot"><div class="chat-bubble"></div>`;
      const bubble = div.querySelector('.chat-bubble');
      if (typewriter) typeWriterEffect(text, bubble);
      else bubble.textContent = text;
    }
    body.appendChild(div);
    scrollDown();
  }

  async function typeWriterEffect(text, element) {
    const speed = 18;
    for (const ch of text) {
      element.textContent += ch;
      scrollDown();
      await new Promise(r => setTimeout(r, speed));
    }
  }

  function showTyping() {
    if (typingBubble) return;
    typingBubble = document.createElement('div');
    typingBubble.className = 'typing-bubble';
    typingBubble.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    body.appendChild(typingBubble);
    scrollDown();
  }

  function hideTyping() {
    if (typingBubble) { typingBubble.remove(); typingBubble = null; }
  }

  async function sendToBackend(promptText) {
    showTyping();
    try {
      const res = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: promptText })
      });
      const data = await res.json();
      hideTyping();

      // ✅ Clean before displaying
      data.reply = cleanText(data.reply);
      addMsg('bot', data.reply || 'Sorry, I could not get a response.', true, true);

      if (data.remaining && data.remaining.length > 0) {
        pendingChunks = data.remaining;
        showContinueLink();
      } else {
        pendingChunks = [];
      }
    } catch (err) {
      hideTyping();
      addMsg('bot', 'Connection error or timeout. Please try again.');
    }
  }

  function showContinueLink() {
    const linkWrapper = document.createElement('div');
    linkWrapper.style.marginTop = '6px';
    const link = document.createElement('span');
    link.textContent = 'Show more →';
    link.style.color = '#00F5FF';
    link.style.cursor = 'pointer';
    link.onclick = () => {
      linkWrapper.remove();
      if (pendingChunks.length > 0) {
        const next = pendingChunks.shift();
        addMsg('bot', cleanText(next), true, true);
        if (pendingChunks.length > 0) showContinueLink();
      }
    };
    linkWrapper.appendChild(link);
    const lastBotMsg = body.querySelector('.chat-message.bot:last-child .chat-bubble');
    if (lastBotMsg) lastBotMsg.appendChild(linkWrapper);
    scrollDown();
  }

  async function handleUserMessage() {
    const text = input.value.trim();
    if (!text) return;

    if (["continue", "next", "more"].includes(text.toLowerCase()) && pendingChunks.length > 0) {
      addMsg('user', text);
      const next = pendingChunks.shift();
      addMsg('bot', cleanText(next), true, true);
      if (pendingChunks.length > 0) showContinueLink();
      input.value = '';
      return;
    }

    addMsg('user', text);
    input.value = '';
    pendingChunks = [];
    await sendToBackend(text);
  }

  send.addEventListener('click', handleUserMessage);
  input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleUserMessage(); }});
  reset.addEventListener('click', () => { location.reload(); });
  buttons.forEach(btn => btn.addEventListener('click', async () => {
    const topic = btn.dataset.topic;
    addMsg('user', btn.textContent);
    pendingChunks = [];
    await sendToBackend(topic);
  }));
})();
</script>
