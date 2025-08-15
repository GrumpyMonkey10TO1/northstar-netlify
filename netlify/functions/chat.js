// netlify/functions/chat.js
const fs = require("fs");
const path = require("path");

exports.handler = async function (event) {
  // CORS
  const origin = event.headers.origin || "";
  const ALLOWED_ORIGINS = ["https://migratenorth.ca", "http://localhost:8888"];
  const CORS_ORIGIN = ALLOWED_ORIGINS.includes(origin) ? origin : "*";
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": CORS_ORIGIN,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers, body: "" };
  if (event.httpMethod !== "POST")
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Use POST" }) };

  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.MODEL || "gpt-4o-mini";
  if (!apiKey)
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Missing OPENAI_API_KEY" }) };

  // Load Explore system prompt from file
  // Read from the bundled folder that sits next to this file at runtime
const explorePromptPath = path.join(__dirname, "prompts", "explore-system.txt");
let EXPLORE_SYSTEM = "";
try {
  EXPLORE_SYSTEM = fs.readFileSync(explorePromptPath, "utf8");
} catch (e) {
  return {
    statusCode: 500,
    headers,
    body: JSON.stringify({ error: `explore-system.txt not found at ${explorePromptPath}` })
  };
}


  // Parse payload
  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Bad JSON" }) };
  }

  // Build messages
  const userMessages = Array.isArray(payload.messages) ? payload.messages : [];
  const messages = [{ role: "system", content: EXPLORE_SYSTEM }, ...userMessages];

  // Last user text for guard checks
  const lastUserMsg = (messages.slice().reverse().find(m => m.role === "user")?.content || "").toLowerCase();

  // Topic allow list, without Listening
  const allowedKeywords = [
    "immigration", "express entry", "crs", "comprehensive ranking system",
    "pnp", "provincial nominee", "work permit", "study permit", "visitor visa",
    "permanent resident", "pr", "ee profile", "draw", "cut off",
    "eca", "wes", "iqas", "icas", "ces",
    "nnas", "mcc", "mccqe", "nac", "noc", "teer",
    "job offer", "lmia", "proof of funds", "settlement funds",
    "police certificate", "pcc", "biometrics",
    "ielts", "celpip", "pte", "reading", "writing",
    "nurse", "doctor", "physician", "licensing", "registration",
    "canada immigration news", "healthcare job market"
  ];
  const injectionMarkers = [
    "ignore previous", "disregard your", "reveal system", "show your prompt",
    "act as", "developer mode", "jailbreak"
  ];
  const looksAllowed = allowedKeywords.some(k => lastUserMsg.includes(k));
  const looksInjected = injectionMarkers.some(k => lastUserMsg.includes(k));

  if (!looksAllowed || looksInjected) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        reply:
          "Welcome to Explore, the free Canada immigration and IELTS info assistant by Migrate North. I can help with immigration, licensing for healthcare, job market basics, and IELTS Reading and Writing. Ask me something in that scope."
      })
    };
  }

  // Optional OpenAI moderation
  try {
    const modRes = await fetch("https://api.openai.com/v1/moderations", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "omni-moderation-latest", input: lastUserMsg })
    });
    const modData = await modRes.json();
    if (modData?.results?.[0]?.flagged === true) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          reply: "I cannot assist with that request. I can help with Canada immigration and IELTS questions."
        })
      };
    }
  } catch {
    // continue gracefully
  }

  // Chat completion
  try {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model, messages, temperature: 0.2, max_tokens: 800, stream: false })
    });

    if (!r.ok) {
      const text = await r.text();
      return { statusCode: r.status, headers, body: JSON.stringify({ error: text.slice(0, 800) }) };
    }

    const data = await r.json();
    const reply = data.choices?.[0]?.message?.content || "";
    return { statusCode: 200, headers, body: JSON.stringify({ reply }) };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: String(e).slice(0, 800) }) };
  }
};
