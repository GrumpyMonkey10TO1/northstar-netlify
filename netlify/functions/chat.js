<!-- North Star GPS — Chat widget (self contained) -->

<style>
/* =========================================================
   LAYOUT CONTROL (desktop and mobile)
   ========================================================= */
:root{
  /* Mobile measurement defaults (JS updates these) */
  --vh: 1vh;
  --headerH: 64px;
  --footerH: 160px;

  /* One knob to raise or lower the bot on phones: negative = up */
  --mobileNudge: -140px;
}

/* Desktop: keep the centered in hero look */
@media (min-width: 1025px){
  #mn-chat{
    position: relative; top: 50vh; transform: translateY(-80%);
    max-width: 720px; margin: 0 auto;
  }
}

/* Tablet width */
@media (max-width: 1024px){
  #mn-chat{ max-width: 640px; }
}

/* Mobile: true visible viewport, bot centered between header and footer, no scroll */
@media (max-width: 767px){
  /* debug badge, remove later if you want */
  body::after{
    content:"MOBILE CSS LOADED";
    position:fixed; right:8px; bottom:8px; z-index:99999;
    background:#111; color:#fff; padding:4px 6px; font:11px/1.2 system-ui;
  }

  /* lock page to visible viewport, JS keeps --vh accurate */
  html, body{
    height: calc(var(--vh) * 100) !important;
    overflow: hidden !important;
    margin: 0; padding: 0;
  }

  /* the container that wraps this widget must have class mn-viewport */
  .mn-viewport{
    height: calc(var(--vh) * 100 - var(--headerH) - var(--footerH)) !important;
    min-height: calc(var(--vh) * 100 - var(--headerH) - var(--footerH)) !important;
    display: flex !important;
    align-items: center !important;           /* vertical center */
    justify-content: center !important;       /* horizontal center */
    margin: 0 !important; padding: 0 !important;
  }

  /* the bot itself: full width, no offsets; nudge with --mobileNudge */
  #mn-chat{
    position: static !important; top: auto !important; transform: none !important;
    max-width: 94vw; margin: var(--mobileNudge) auto 0 auto !important;
  }

  /* keep any support or chat bubble clear of the Send button */
  .chaty-widget, .chaty-widget-container, [data-chaty]{
    right: 12px !important; bottom: 96px !important; z-index: 30 !important;
  }
}

/* =========================================================
   VISUAL STYLES (scoped to #mn-chat)
   ========================================================= */
#mn-chat{
  --bg:#0B1516; --panel:#0E191A; --ink:#E6E8E6; --muted:#9FB7B3;
  --chip:#142224; --line:rgba(230,232,230,.10); --aqua:#00E6E6; --aqua2:#12B9B9;
  font-family: Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color: var(--ink);
  max-width: 680px; margin: 20px auto; border-radius: 16px;
  background: linear-gradient(180deg, var(--panel), var(--bg));
  border: 1px solid rgba(230,232,230,.06);
  box-shadow: 0 8px 24px rgba(0,0,0,.32);
}

#mn-chat .mn-title{ margin:14px 14px 4px; font-weight:700; font-size:18px; }

#mn-chat .mn-controls{
  display:grid; grid-template-columns:1fr 1fr 1fr auto; gap:8px; padding:0 14px 10px;
}
#mn-chat select, #mn-chat input[type="text"]{
  height:36px; border-radius:10px; border:1px solid var(--line);
  background:#0F2426; color:var(--ink); padding:0 10px; font-size:14px;
}
#mn-chat .mn-btn{
  height:36px; padding:0 12px; border-radius:10px;
  border:1px solid rgba(0,230,230,.25);
  background: linear-gradient(180deg, var(--aqua2), var(--aqua));
  color:#0F2426; font-weight:600; cursor:pointer;
}
#mn-chat .mn-btn:active{ transform: translateY(1px); }

#mn-chat .mn-thread{
  padding:6px 14px 8px; min-height:150px; max-height:52vh;
  overflow-y:auto; -webkit-overflow-scrolling:touch;
}
#mn-chat .msg{ display:flex; gap:8px; margin:8px 0; align-items:flex-start; }
#mn-chat .chip{ font-size:11px; padding:2px 6px; border-radius:6px; background:rgba(0,230,230,.10); color:var(--aqua); }
#mn-chat .chip-typing{ background:rgba(0,230,230,.12); }
#mn-chat .bubble{ flex:1; padding:10px 12px; border-radius:10px; line-height:1.45; font-size:14px; }
#mn-chat .me .bubble{ background:#0F2426; border:1px solid rgba(0,230,230,.22); color:#CFFBFB; }
#mn-chat .bot .bubble{ background:#141F21; border:1px solid var(--line); color:var(--ink); }

#mn-chat .mn-typing{ display:none; align-items:center; gap:8px; padding:0 14px 10px; color:var(--muted); }
#mn-chat .mn-typing.on{ display:flex; }
#mn-chat .mn-typing .dots{ letter-spacing:4px; animation: mnPulse 1.2s infinite; }
@keyframes mnPulse{ 0%{opacity:.25} 50%{opacity:1} 100%{opacity:.25} }

#mn-chat .mn-composer{
  display:flex; gap:8px; padding:6px 14px 14px; border-top:1px solid rgba(230,232,230,.06);
}
#mn-chat .mn-composer input{
  flex:1; background:#0F2426; color:var(--ink); caret-color:var(--ink);
  border:1px solid var(--line); border-radius:10px; height:40px; padding:0 11px;
}
#mn-chat .mn-composer ::placeholder{ color:var(--muted); opacity:1; }

/* responsive adjustments inside chat */
@media (max-width:1024px){
  #mn-chat{ max-width:620px; }
  #mn-chat .mn-controls{ grid-template-columns:1fr 1fr; grid-auto-rows:36px; }
}
@media (max-width:767px){
  #mn-chat{ max-width:94vw; margin:12px auto; }
  #mn-chat .mn-controls{ grid-template-columns:1fr; }
}

/* a11y utility */
#mn-chat .sr-only{ position:absolute; left:-9999px; width:1px; height:1px; overflow:hidden; }
</style>

<script>
/* Measure the true visible viewport and real header and footer heights */
(function(){
  function setVars(){
    var vh = (window.visualViewport ? window.visualViewport.height : window.innerHeight) * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');

    var header = document.querySelector('.elementor-location-header');
    var footer = document.querySelector('.elementor-location-footer') || document.querySelector('.site-footer');
    var headerH = header ? Math.round(header.getBoundingClientRect().height) : 64;
    var footerH = footer ? Math.round(footer.getBoundingClientRect().height) : 160;
    document.documentElement.style.setProperty('--headerH', headerH + 'px');
    document.documentElement.style.setProperty('--footerH', footerH + 'px');
  }
  setVars();
  window.addEventListener('resize', setVars, {passive:true});
  window.addEventListener('orientationchange', setVars);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', setVars, {passive:true});
})();
</script>

<!-- =============== CHAT MARKUP =============== -->
<div id="mn-chat" class="ns-chat-wrap" data-endpoint="https://YOUR-SITE-NAME.netlify.app/.netlify/functions/chat">
  <!-- Slim title -->
  <h3 class="mn-title">Welcome to Migrate North Academy</h3>

  <!-- Controls -->
  <div class="mn-controls">
    <select id="mn-track" aria-label="Track">
      <option>Academic</option><option>General</option>
    </select>
    <select id="mn-mode" aria-label="Mode">
      <option>Exam (60 min)</option><option>Practice (15 min)</option><option>Guide</option>
    </select>
    <select id="mn-topic" aria-label="Topic">
      <option value="">Choose a practice or a question</option>
      <option>Express Entry basics</option><option>CRS score basics</option>
      <option>IELTS Reading tips</option><option>PNP overview</option>
    </select>
    <button id="mn-start" class="mn-btn" type="button">Start</button>
  </div>

  <!-- Thread -->
  <div class="mn-thread" aria-live="polite" aria-label="Chat thread">
    <div class="msg bot seed">
      <span class="chip">North Star GPS</span>
      <div class="bubble">What do you want to work on today?</div>
    </div>
  </div>

  <!-- Typing (hidden until answering) -->
  <div id="mn-typing" class="mn-typing" aria-hidden="true">
    <span class="chip chip-typing">North Star GPS</span><span class="dots" aria-hidden="true">• • •</span>
    <span class="sr-only">is typing</span>
  </div>

  <!-- Composer -->
  <div class="mn-composer">
    <input id="mn-input" type="text" placeholder="Ask about Express Entry, CRS, PNP, or IELTS Reading…" />
    <button id="mn-send" class="mn-btn" type="button">Send</button>
  </div>
</div>

<script>
/* Simple client side chat behavior */
(function(){
  const BOT_NAME="North Star GPS";
  const TYPING_DELAY_MS=4000;
  const wrap=document.getElementById("mn-chat");

  // Use the data-endpoint on the wrapper. If missing, use a fallback constant.
  const FALLBACK_ENDPOINT="https://YOUR-SITE-NAME.netlify.app/.netlify/functions/chat";
  const ENDPOINT=wrap?.dataset?.endpoint || FALLBACK_ENDPOINT;

  const els={
    thread: wrap.querySelector(".mn-thread"),
    typing: wrap.querySelector("#mn-typing"),
    input:  wrap.querySelector("#mn-input"),
    send:   wrap.querySelector("#mn-send"),
    start:  wrap.querySelector("#mn-start"),
    topic:  wrap.querySelector("#mn-topic"),
  };

  const mk=(t,c)=>{const n=document.createElement(t); if(c) n.className=c; return n;};

  function addMsg(role,text){
    const row=mk("div","msg "+role);
    const chip=mk("span","chip"); chip.textContent=role==="me"?"You":BOT_NAME;
    const bubble=mk("div","bubble"); bubble.textContent=text;
    row.append(chip,bubble); els.thread.appendChild(row);
    els.thread.scrollTop=els.thread.scrollHeight;
  }

  function setTyping(on){
    els.typing.classList.toggle("on",!!on);
    els.typing.setAttribute("aria-hidden", on?"false":"true");
  }

  // Gentler formatter: keep lists and line breaks, allow longer replies
  function toConversational(text){
    if(!text) return "";
    // Remove markdown headings and heavy formatting, keep simple lists
    text = text
      .replace(/(^|\n)#{1,6}\s+/g, "")
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/__(.*?)__/g, "$1")
      .replace(/~~(.*?)~~/g, "$1");

    // Cap length around 220 words to avoid walls of text
    const words = text.split(/\s+/);
    if (words.length > 220) text = words.slice(0, 220).join(" ") + "…";

    // Normalize extra blank lines
    text = text.replace(/\n{3,}/g, "\n\n").trim();
    return text;
  }

  async function askBackend(userText){
    if(!ENDPOINT){
      return "Got it. Tell me what you are aiming for and I will point you to the next step.";
    }
    const payload={message:userText, topic:els.topic?.value||""};
    const res=await fetch(ENDPOINT,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload)
    });
    // If the site blocks cross origin, surface a friendly message
    if(!res.ok){
      try{
        const t=await res.text();
        return t || "I had trouble reaching the server. Please try again.";
      }catch{
        return "I had trouble reaching the server. Please try again.";
      }
    }
    const data=await res.json().catch(()=>null);
    return data?.reply || data?.choices?.[0]?.message?.content || "";
  }

  async function handleSend(){
    const txt=els.input.value.trim(); if(!txt) return;
    addMsg("me",txt); els.input.value="";
    setTyping(true); await new Promise(r=>setTimeout(r,TYPING_DELAY_MS));
    try{
      const raw=await askBackend(txt);
      const neat=toConversational(raw);
      setTyping(false);
      addMsg("bot", neat || "I could not fetch that. Try asking another way.");
    }catch(e){
      setTyping(false); addMsg("bot","I had trouble reaching the server. Please try again.");
    }
  }

  els.send.addEventListener("click",handleSend);
  els.input.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); handleSend(); }});
  els.start.addEventListener("click",()=> addMsg("bot","What do you want to work on today?"));
})();
</script>

<style>
/* MOBILE: make the chat card fill the hero and let the thread grow */
@media (max-width: 767px){
  /* The hero (mn-viewport) is already sized to the visible screen via --vh.
     Make the card itself fill that space, then let the thread expand. */
  #mn-chat{
    display: flex !important;
    flex-direction: column !important;
    min-height: calc(var(--vh) * 120 - var(--headerH) - var(--footerH) - 8px) !important;
  }
  #mn-chat .mn-thread{
    flex: 1 1 auto !important;    /* take all remaining height */
    max-height: none !important;   /* remove the old 52vh limit */
    min-height: 0 !important;      /* allow proper flex shrink if needed */
  }
}
</style>
