// netlify/functions/execute.js
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Replace this with your live origin if you add a subdomain later
const ORIGIN = "https://migratenorth.ca";

// Maximum pairs to retain in memory to prevent token bloat
const MAX_TURNS = 12;

// Helper to clamp memory length
function clampMemory(history = []) {
  if (!Array.isArray(history)) return [];
  const start = Math.max(0, history.length - MAX_TURNS);
  return history.slice(start);
}

export const handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": ORIGIN,
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
      },
      body: "ok",
    };
  }

  // Enforce POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": ORIGIN },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    const {
      message = "",
      memory = [],
      mode = "auto",             // "auto", "forms", "checklist", "review", "qna"
      userProfile = {},          // { name, email, country, profession, noc }
      timestamp,
    } = payload;

    const safeMemory = clampMemory(memory);

    // Light typing simulation text for UI
    const thinking = "Thinking through your request...";

    // System instructions for Execute
    const systemPrompt = `
You are North Star Execute, an expert Canadian immigration assistant built by Migrate North Academy and operated by Matin Immigration Services Inc. You help users complete IRCC forms, prepare Express Entry profiles, draft supporting letters, and organize document checklists with precise, stepwise guidance.

Operating rules:
1) Be concrete, use short steps, request missing facts explicitly.
2) When working on a form, output a "fields_needed" list with field names and brief hints.
3) When organizing tasks, return a "checklist" array of small, verifiable items, each with a status key set to "todo", "in_progress", or "done".
4) When reviewing text, return "edits" as an array of {line, suggestion, reason}.
5) Never guess legal facts. If a rule is uncertain, state that it needs verification on IRCC or the governing regulator site.
6) Always include a "next_action" for the user at the end, one clear step only.
7) Keep a neutral, professional tone. No marketing language.
8) If asked for legal advice, provide general information and recommend a licensed RCIC review. You may state: "Final review by RCIC is recommended."
9) Respect user preferences for non salesy tone and factual accuracy.

Output contract:
Respond with clear natural language, but also include a concise JSON block at the end delimited by <<<EXECUTE_JSON>>> and <<<END_EXECUTE_JSON>>> that the frontend can parse. The JSON must include:
{
  "mode": "auto|forms|checklist|review|qna",
  "fields_needed": [ { "field": "IMM 0008: family name", "hint": "as on passport" } ],
  "checklist": [ { "item": "ECA report from WES", "status": "todo" } ],
  "edits": [ { "line": 3, "suggestion": "replace X with Y", "reason": "grammar" } ],
  "references": [ "IRCC page or policy name if mentioned" ],
  "next_action": "one clear next step for the user"
}
Only include keys that are relevant to the current reply. Keep arrays short and practical.
`;

    // Optional mode prime
    const modePrimer = {
      auto: "User intent is not fixed. Infer the best structure and include the JSON block.",
      forms: "User is filling an IRCC form. Ask for missing fields, return fields_needed with IRCC labels.",
      checklist: "User wants a plan. Return a practical checklist with 5 to 9 items, each small and verifiable.",
      review: "User provided text for review. Return targeted line edits with reasons, no rewriting the entire document unless asked.",
      qna: "User has questions. Answer directly, cite references by name, and include one next_action.",
    }[mode] || "Infer the best structure.";

    const messages = [
      { role: "system", content: systemPrompt.trim() },
      {
        role: "user",
        content: `Context: ${JSON.stringify(
          { mode, userProfile, timestamp },
          null,
          0
        )}\nInstruction: ${modePrimer}\n\nUser message: ${message}`,
      },
      ...safeMemory,
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      max_tokens: 900,
      messages,
    });

    const reply =
      completion.choices?.[0]?.message?.content || "I could not generate a response.";

    // Append newest turn to memory
    const newMemory = clampMemory([
      ...safeMemory,
      { role: "user", content: message },
      { role: "assistant", content: reply },
    ]);

    // Simple session hint for the client
    const sessionExpiresAt = Date.now() + 30 * 60 * 1000;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": ORIGIN,
      },
      body: JSON.stringify({
        reply,
        memory: newMemory,
        thinking,
        sessionExpiresAt,
        model: "gpt-4o-mini",
      }),
    };
  } catch (err) {
    console.error("Execute function error:", err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": ORIGIN },
      body: JSON.stringify({
        error: "Internal Server Error: " + err.message,
      }),
    };
  }
};
