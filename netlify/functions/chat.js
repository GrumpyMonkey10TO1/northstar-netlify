// netlify/functions/chat.js

// Optional: tiny logger that never throws in prod
const log = (...args) => {
  if (process.env.LOG_REQUESTS === "1") {
    try { console.log(...args); } catch {}
  }
};

exports.handler = async function (event) {
  // ---------- CORS ----------
  const origin = event.headers.origin || "";
  const ALLOWED_ORIGINS = new Set([
    "https://migratenorth.ca",
    "https://www.migratenorth.ca",
    "http://localhost:8888"
  ]);
  const CORS_ORIGIN = ALLOWED_ORIGINS.has(origin) ? origin : "https://migratenorth.ca";
  const baseHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": CORS_ORIGIN,
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin"
  };

  // Preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: baseHeaders, body: "" };
  }

  // Method guard
  if (event.httpMethod !== "POST") {
    return json(405, baseHeaders, { error: "Use POST" });
  }

  // ---------- Rate limiting (per-IP, in-memory) ----------
  const RATE_MAX = toNum(process.env.RATE_MAX, 10);
  const RATE_WINDOW_MS = toNum(process.env.RATE_WINDOW_MS, 60_000);
  const ipHeader =
    event.headers["x-client-ip"] ||
    event.headers["client-ip"] ||
    event.headers["x-forwarded-for"] ||
    event.headers["x-real-ip"] ||
    "";
  const clientIp = String(ipHeader).split(",")[0].trim() || "unknown";
  const now = Date.now();

  if (!globalThis.__EXPLORE_RATE__) globalThis.__EXPLORE_RATE__ = new Map();
  const store = globalThis.__EXPLORE_RATE__;
  let bucket = store.get(clientIp) || { count: 0, reset: now + RATE_WINDOW_MS };
  if (now > bucket.reset) bucket = { count: 0, reset: now + RATE_WINDOW_MS };
  bucket.count += 1;
  store.set(clientIp, bucket);

  if (bucket.count > RATE_MAX) {
    const retry = Math.max(1, Math.ceil((bucket.reset - now) / 1000));
    return json(429, { ...baseHeaders, "Retry-After": String(retry) }, {
      error: "Too many requests. Please wait and try again."
    });
  }

  // ---------- Env ----------
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.MODEL || "gpt-4o-mini";
  if (!apiKey) return json(500, baseHeaders, { error: "Missing OPENAI_API_KEY" });

  // ---------- Persona ----------
  const EXPLORE_SYSTEM = `
You are "North Star GPS - Explore", the free academy-style instructor for Migrate North Academy.

Audience:
- International healthcare professionals exploring Canadian immigration (Express Entry, CRS, PNPs, permits) and IELTS Reading.

Voice and style:
- Calm, patient, structured; professional and encouraging.
- Use short paragraphs and simple sentences. Briefly define jargon when useful.
- No emojis. No slang.

Default answer shape:
1) One orientation sentence naming the topic.
2) Two to four compact steps or a tight explanation.
3) End with one forward question.

Scope:
- Focus on Canadian immigration and IELTS Reading.
- If unsure, say what is typically true and offer to check specifics.
- Do not invent policies or numbers.
`.trim();

  // ---------- Parse payload ----------
  let payload = {};
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, baseHeaders, { error: "Bad JSON" });
  }

  // Accept:
  // { messages:[{role,content}...], stream?:boolean }
  // or { message: string, topic?: string, stream?: boolean }
  const hasArrayMessages = Array.isArray(payload.messages);
  const simpleMessage = typeof payload.message === "string" ? payload.message : "";
  const topic = typeof payload.topic === "string" ? payload.topic : "";
  const wantStream = Boolean(payload.stream);

  const synthesizedUser = simpleMessage
    ? `User message:
${simpleMessage}

Context:
Topic dropdown: ${topic || "(none)"}

Follow the academy persona. Use the default answer shape. Keep it action oriented, concise, and end with one forward question.`
    : "";

  const messages = [{ role: "system", content: EXPLORE_SYSTEM }];
  if (hasArrayMessages) {
    for (const m of payload.messages) {
      if (m && typeof m.role === "string" && typeof m.content === "string") {
        messages.push({ role: m.role, content: m.content });
      }
    }
  } else if (synthesizedUser) {
    messages.push({ role: "user", content: synthesizedUser });
  } else {
    return json(400, baseHeaders, { error: "Message is required" });
  }

  // ---------- Input guard ----------
  const lastUserOriginal =
    [...messages].reverse().find(m => m.role === "user")?.content || "";
  const MAX_INPUT_CHARS = toNum(process.env.MAX_INPUT_CHARS, 1500);
  if (lastUserOriginal.length > MAX_INPUT_CHARS) {
    return json(200, baseHeaders, {
      reply: "Your message is a bit long for this chat. Please shorten it to one or two short paragraphs and try again."
    });
  }

  // ---------- Optional moderation (fail soft) ----------
  try {
    const modRes = await fetchWithTimeout(
      "https://api.openai.com/v1/moderations",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ model: "omni-moderation-latest", input: lastUserOriginal })
      },
      8_000
    );
    const modData = await modRes.json().catch(() => null);
    if (modData?.results?.[0]?.flagged === true) {
      return json(200, baseHeaders, {
        reply: "I cannot assist with that request. Ask about Canadian immigration or IELTS Reading and I will help."
      });
    }
  } catch {
    // ignore moderation errors
  }

  // ---------- Chat call ----------
  try {
    if (wantStream) {
      // Server-Sent Events streaming
      const r = await fetchWithTimeout(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model,
            messages,
            temperature: toNum(process.env.TEMP, 0.4),
            max_tokens: toNum(process.env.MAX_TOKENS, 800),
            stream: true
          })
        },
        60_000
      );

      if (!r.ok || !r.body) {
        const text = await r.text().catch(() => "");
        return json(r.status || 502, baseHeaders, { error: firstN(cleanErr(text), 800) });
      }

      return sse(r.body, CORS_ORIGIN);
    }

    // Non streaming
    const r = await fetchWithTimeout(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: toNum(process.env.TEMP, 0.4),
          max_tokens: toNum(process.env.MAX_TOKENS, 800),
          stream: false
        })
      },
      25_000
    );

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      return json(r.status, baseHeaders, { error: firstN(cleanErr(text), 800) });
    }

    const data = await r.json();
    const choice = data.choices?.[0]?.message || {};
    const reply = String(choice.content || "").trim();

    // basic usage bubble up if present
    const usage = data.usage || null;

    return json(200, baseHeaders, { reply, usage });
  } catch (e) {
    const msg = e && e.name === "AbortError"
      ? "The request took too long. Please try again."
      : firstN(String(e || "Unknown error"), 800);
    return json(504, baseHeaders, { error: msg });
  }
};

// ---------- Helpers ----------
function json(statusCode, headers, obj) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(obj)
  };
}

function toNum(v, dflt) {
  const n = Number(v);
  return Number.isFinite(n) ? n : dflt;
}

function firstN(s, n) {
  return (s || "").slice(0, n);
}

function cleanErr(s) {
  // Strip HTML if upstream returned a full page (WP 404, etc.)
  return String(s || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

// Server Sent Events response for streaming
function sse(readable, corsOrigin) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": corsOrigin,
      "Vary": "Origin"
    },
    body: readable,
    isBase64Encoded: false
  };
}

// Fetch with timeout
async function fetchWithTimeout(url, options, timeoutMs = 25_000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(id);
  }
}
