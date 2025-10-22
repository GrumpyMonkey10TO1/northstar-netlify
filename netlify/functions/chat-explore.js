// === NORTH STAR GPS – EXPLORE FRONTEND CHATBOT (FIXED) ===

// --- DOM Elements ---
const chatContainer = document.querySelector("#chat-body");
const inputField = document.querySelector("#chat-input");
const sendButton = document.querySelector("#chat-send");
const resetButton = document.querySelector("#chat-reset");

// --- Helper: Scroll to bottom smoothly ---
function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// --- Helper: Typewriter Effect for Bot Messages ---
function typeWriterEffect(element, text, speed = 25) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      scrollToBottom();
      setTimeout(typing, speed);
    }
  }
  typing();
}

// --- Add message bubbles ---
function addMessage(role, text = "") {
  const div = document.createElement("div");
  div.className = `chat-message ${role}`;
  const avatar =
    role === "user"
      ? "https://migratenorth.ca/wp-content/uploads/2025/10/medical-banner-with-doctor-working-laptop-scaled.jpeg"
      : "https://migratenorth.ca/wp-content/uploads/2025/09/Gemini_Generated_Image_kqe210kqe210kqe2-10.png";
  div.innerHTML =
    role === "user"
      ? `<div class='chat-bubble'>${text}</div><img class='avatar' src='${avatar}'>`
      : `<img class='avatar' src='${avatar}'><div class='chat-bubble'></div>`;
  chatContainer.appendChild(div);
  scrollToBottom();
  return div.querySelector(".chat-bubble");
}

// --- Typing dots ---
function createTypingDots() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "typing-indicator";
  typingDiv.innerHTML = "<span></span><span></span><span></span>";
  chatContainer.appendChild(typingDiv);
  scrollToBottom();
  return typingDiv;
}

// --- Animate bot response ---
async function handleBotResponse(prompt) {
  const bubble = addMessage("bot", "");
  const typingDots = createTypingDots();

  try {
    const res = await fetch("/.netlify/functions/chat-explore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: prompt }),
    });

    const data = await res.json();

    typingDots.remove();

    const reply = data.message || "No response received.";
    typeWriterEffect(bubble, reply, 25);
  } catch (err) {
    typingDots.remove();
    typeWriterEffect(bubble, "Connection error. Please try again.", 25);
    console.error(err);
  }
}

// --- Handle user input ---
async function handleUserInput() {
  const message = inputField.value.trim();
  if (!message) return;

  addMessage("user", message);
  inputField.value = "";
  await handleBotResponse(message);
}

// --- Event Listeners ---
sendButton.addEventListener("click", handleUserInput);
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleUserInput();
  }
});
resetButton.addEventListener("click", () => location.reload());

// --- Initial Greeting ---
window.addEventListener("DOMContentLoaded", () => {
  const bubble = addMessage("bot", "");
  typeWriterEffect(
    bubble,
    "Welcome to North Star GPS – Explore. I can walk you through every step of Canada's immigration process.",
    25
  );
});

// --- Typing dots animation CSS (auto-added) ---
const style = document.createElement("style");
style.textContent = `
  .typing-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6px 0;
  }
  .typing-indicator span {
    width: 8px; height: 8px;
    background: #fff;
    border-radius: 50%;
    margin: 0 3px;
    animation: blink 1.2s infinite ease-in-out;
  }
  .typing-indicator span:nth-child(1){animation-delay:0s;}
  .typing-indicator span:nth-child(2){animation-delay:0.2s;}
  .typing-indicator span:nth-child(3){animation-delay:0.4s;}
  @keyframes blink {0%,80%,100%{opacity:0;}40%{opacity:1;}}
`;
document.head.appendChild(style);
