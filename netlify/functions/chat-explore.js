// === NORTH STAR GPS – EXPLORE FRONTEND CHATBOT ===

// --- DOM Elements ---
const chatContainer = document.querySelector("#chat-container");
const inputField = document.querySelector("#user-input");
const sendButton = document.querySelector("#send-button");
const typingIndicator = document.querySelector("#typing-indicator");

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

// --- Display user message instantly ---
function addUserMessage(message) {
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.textContent = message;
  chatContainer.appendChild(userMessage);
  scrollToBottom();
}

// --- Display bot message (typewriter style) ---
function addBotMessage(message) {
  const botMessage = document.createElement("div");
  botMessage.classList.add("bot-message");
  chatContainer.appendChild(botMessage);
  typeWriterEffect(botMessage, message, 25);
  scrollToBottom();
}

// --- Handle user input ---
async function handleUserInput() {
  const message = inputField.value.trim();
  if (!message) return;

  addUserMessage(message);
  inputField.value = "";

  // Show animated dots while waiting
  typingIndicator.classList.remove("hidden");

  try {
    const response = await fetch("/.netlify/functions/chat-explore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    typingIndicator.classList.add("hidden");

    if (data.message) {
      addBotMessage(data.message);
    } else if (data.error) {
      addBotMessage("Server error: " + data.error);
    } else {
      addBotMessage("No response received.");
    }

  } catch (error) {
    typingIndicator.classList.add("hidden");
    addBotMessage("Connection error. Please try again.");
    console.error("Chatbot fetch error:", error);
  }
}

// --- Event Listeners ---
sendButton.addEventListener("click", handleUserInput);
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleUserInput();
});
