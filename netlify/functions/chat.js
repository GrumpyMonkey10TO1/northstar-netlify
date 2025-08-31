// netlify/functions/chat.js

// Optional console logger, disabled by default
const log = (...args) => {
  if (process.env.LOG_REQUESTS === "1") {
    try { console.log(...args); } catch {}
  }
};

exports.handler = async function (event) {
  // ---------- CORS ----------
  const origin = event.headers.origin || "";

  // Allow your WP site(s) + your Netlify sites + any *.netlify.app (for previews)
  const ORIGIN_WHITELIST = new Set([
    "https://migratenorth.ca",
    "https://www.migratenorth.ca",
    "http://localhost:8888",
    "https://startling-faun-f9dddb.netlify.app",
    "https://northstar-netlify.netlify.app"
  ]);

  const isAllowedOrigin = (o) => {
    try {
      if (ORIGIN_WHITELIST.has(o)) return true;
      const { hostname, protocol } = new URL(o);
      // allow any https://<anything>.netlify.app (helpful for deploy previews)
      return protocol === "https:" && /\.netlify\.app$/.test(hostname);
    } catch { return false; }
  };

  const CORS_ORIGIN = isAllowedOrigin(origin) ? origin : "https://migratenorth.ca";

  const baseHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": CORS_ORIGIN,
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Expose-Headers": "Retry-After",
    "Vary": "Origin"
  };

  // Preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: baseHeaders, body: "" };
  }

  // Simple health check (useful when debugging 404 vs. function errors)
  const qs = event.queryStringParameters || {};
  if (event.httpMethod === "GET" && (qs.health === "1" || qs.health === "true")) {
    return { statusCode: 200, headers: baseHeaders, body: JSON.stringify({ ok: true, health: "chat function alive" }) };
  }

  // Method guard
  if (event.httpMethod !== "POST") {
    return json(405, baseHeaders, { error: "Use POST" });
  }

  // ---------- Basic rate limiting (per IP, in memory) ----------
  const RATE_MAX = toNum(process.env.RATE_MAX, 10);           // requests per minute
  const RATE_WINDOW_MS = toNum(process.env.RATE_WINDOW_MS, 60_000);

  const ipHeader =
    event.headers["cf-connecting-ip"] ||       // Cloudflare, if used
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
  const temperature = toNum(process.env.TEMP, 0.4);
  const maxTokens = toNum(process.env.MAX_TOKENS, 800);
  if (!apiKey) return json(500, baseHeaders, { error: "Missing OPENAI_API_KEY" });

  // ---------- Persona ----------
  const EXPLORE_SYSTEM = `
You are "North Star GPS - Explore", the free academy-style instructor for Migrate North Academy.

Audience:
- International healthcare professionals exploring Canadian immigration (Express Entry, CRS, PNPs, permits) and IELTS Reading.

Voice and style:
- Calm, patient, structured, professional and encouraging.
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

  // Accept either { messages:[{role,content}...] } or { message, topic }
  const hasArrayMessages = Array.isArray(payload.messages);
  const simpleMessage = typeof payload.message === "string" ? payload.message : "";
  const topic = typeof payload.topic === "string" ? payload.topic : "";

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

  // ---------- Chat call (JSON only, no streaming) ----------
  try {
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
          temperature,
          max_tokens: maxTokens,
          stream: false
        })
      },
      25_000
    );

    const rawText = await r.text().catch(() => "");
    if (!r.ok) {
      // Clean HTML if an upstream gateway returned a page
      return json(r.status, baseHeaders, { error: cleanErr(rawText).slice(0, 800) });
    }

    // Validate JSON
    let data;
    try { data = JSON.parse(rawText); }
    catch { return json(502, baseHeaders, { error: "Upstream returned non JSON", preview: rawText.slice(0, 200) }); }

    const reply = String(data?.choices?.[0]?.message?.content || "").trim();
    const usage = data?.usage || null;

    if (!reply) {
      return json(502, baseHeaders, { error: "Empty model reply" });
    }

    // Stable success envelope
    return json(200, baseHeaders, { ok: true, reply, usage });
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
  return String(s || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

async function fetchWithTimeout(url, options, timeoutMs = 25_000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(id);
  }
}
