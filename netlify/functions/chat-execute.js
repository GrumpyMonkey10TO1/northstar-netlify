// /netlify/functions/execute.js
import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * North Star Execute, server function v2.1 (Option 1 merged)
 * - Strict CORS (migratenorth.ca)
 * - Memory trimming and role labeling
 * - Lightweight command router for Execute use cases
 * - Deterministic defaults with safe creativity on drafts
 * - Session expiry hint for the frontend
 */

const ORIGIN = "https://migratenorth.ca";

// Standard CORS headers
function corsHeaders(extra = {}) {
  return {
    "Access-Control-Allow-Origin": ORIGIN,
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json",
    ...extra,
  };
}

// Keep only the most recent N user+assistant turns
function trimMemory(mem = [], maxTurns = 12) {
  const flat = Array.isArray(mem) ? mem : [];
  return flat.slice(-2 * maxTurns);
}

// Focused system prompt for Execute
function systemPrompt() {
  return [
    "You are North Star GPS, an expert Canadian immigration assistant built by Matin Immigration Services.",
    "Primary jobs: complete IRCC forms, build checklists, draft LoEs, review docs against IRCC criteria, prep Express Entry and PR packages.",
    "Tone: precise, calm, thorough, action focused. Avoid marketing. Prefer bullet points and numbered steps.",
    "When the user asks for a draft, output a clean draft first, then a short checklist to finalize it.",
    "When reviewing, cite the rule in plain language and say exactly what to fix.",
    "Never give legal guarantees. Include a short, plain disclaimer at the end for any high stakes guidance.",
    "Return concise outputs suitable to paste into forms or documents."
  ].join(" ");
}

// Lightweight intent planner
function planTask(input = "") {
  const text = (input || "").toLowerCase();
  if (/\b(checklist|document checklist|what do i need)\b/.test(text)) return "CHECKLIST";
  if (/\b(letter|loe|explanation|cover letter|invitation|sop)\b/.test(text)) return "DRAFT_LETTER";
  if (/\b(review|assess|audit|critique|fix)\b/.test(text)) return "REVIEW";
  if (/\b(form|imm\s?5669|imm\s?5406|imm\s?5768|imm\s?0008)\b/.test(text)) return "FORM_HELP";
  if (/\b(pnp|oinp|bc pnp|aipp|sinp|draw|profile)\b/.test(text)) return "PNP_GUIDE";
  if (/\b(gcms|atip)\b/.test(text)) return "GCMS_HELP";
  return "GENERAL";
}

export const handler = async (event) => {
  // Preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(), body: "ok" };
  }

  // Enforce POST only
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const {
      message = "",
      memory = [],
      timestamp = Date.now(),
      userMeta = {}
    } = JSON.parse(event.body || "{}");

    const mode = planTask(message);
    const trimmedMemory = trimMemory(memory, 12);

    // Tool hint to steer outputs without function calling
    const toolHint = [
      `Mode: ${mode}`,
      "If Mode = CHECKLIST, produce step by step with documents, specs, and how to prove each item.",
      "If Mode = DRAFT_LETTER, produce a clean final draft, followed by a micro checklist.",
      "If Mode = REVIEW, list issues found, corrections, and a corrected version when possible.",
      "If Mode = FORM_HELP, map fields to likely answers, note pitfalls, and provide sample wording where allowed.",
      "If Mode = PNP_GUIDE, outline eligibility, points, required docs, queue steps, and common refusals.",
      "If Mode = GCMS_HELP, show how to order, timelines, and how to read key fields once received."
    ].join(" | ");

    const messages = [
      { role: "system", content: systemPrompt() },
      ...trimmedMemory,
      {
        role: "user",
        content:
          `Timestamp: ${new Date(timestamp).toISOString()}\n` +
          `User meta: ${JSON.stringify(userMeta)}\n` +
          `Tool hint: ${toolHint}\n\n` +
          message,
      },
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: mode === "DRAFT_LETTER" ? 0.7 : 0.3,
      max_tokens: 900,
      messages,
    });

    const reply = completion.choices?.[0]?.message?.content || "No response available.";

    const newMemory = [
      ...trimmedMemory,
      { role: "user", content: message },
      { role: "assistant", content: reply },
    ];

    // Simple session hint for the client
    const sessionExpiresAt = Date.now() + 30 * 60 * 1000;

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        reply,
        memory: newMemory,
        thinking: "Thinking through your request...",
        mode,
        sessionExpiresAt,
        model: "gpt-4o-mini"
      }),
    };
  } catch (err) {
    console.error("Execute function error:", err);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({
        error: "Internal Server Error: " + (err?.message || "Unknown error"),
      }),
    };
  }
};
