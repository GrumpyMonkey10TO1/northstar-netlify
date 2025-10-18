// --- TEST SANITIZATION (for chat-explore.js) ---
function testSanitize(text) {
  text = text.replace(/^(E?\s?Show\s*more[\s–—\-:]*)/i, "").replace(/^E\s+/i, "").trim();
  return text
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
    .replace(/(^E?\s?Show\s*more[\s–—\-:]*)/gi, "")
    .replace(/[A-Z]?\s?Show\s*more[^\w]*/gi, "")
    .replace(/\b[Ss]?ure!?/g, "")
    .replace(/^[\-\s\_]+|[\-\s\_]+$/g, "")
    .replace(/—+/g, " ")
    .replace(/\s{2,}/g, " ")
    .replace(/^\W+/, "")
    .trim();
}

// --- Sample inputs ---
const tests = [
  "EShow more —xpress Entry is a system used by the Canadian government...",
  "E Show more - Express Entry is a system...",
  "Show more — Express Entry is used to manage...",
  "E — Express Entry is the system used...",
  "Express Entry is a system used by Canada..."
];

for (const t of tests) {
  console.log("\nOriginal:", t);
  console.log("Cleaned:", testSanitize(t));
}
