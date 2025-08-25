// netlify/functions/chat.js

// Allowed web origins
const ALLOWED_ORIGINS = new Set([
  "https://migratenorth.ca",
  "https://www.migratenorth.ca",
  "http://localhost:8888",
  "http://localhost:5173"
]);

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.has(origin) ? origin : "https://migratenorth.ca";
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

exports.handler = async function (event) {
  const origin = event.headers.origin || "";
  const headers = corsHeaders(origin);

  // Preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Use POST" }) };
  }

  // ---------- Inline dataset: 7 IELTS style mini reading tests ----------
  const TESTS = [
    {
      id: "R1",
      title: "Healthcare Workers in Rural Canada",
      passage:
        "Several Canadian provinces face persistent shortages of healthcare staff in rural and remote communities. Incentives such as moving allowances and temporary housing help attract nurses, but retention depends on workload, team support, and access to training. Provinces that pair incentives with mentorship programs report better staff stability.",
      questions: [
        { q: "What is the main problem described?", choices: ["Overstaffing in rural clinics", "Staff shortages in rural areas", "Lack of medical schools", "Excess of temporary housing"], answer: 1 },
        { q: "Which factor most improves retention?", choices: ["Higher licensing fees", "Mentorship with incentives", "Shorter clinic hours only", "Fewer training options"], answer: 1 },
        { q: "The passage suggests stability improves when provinces:", choices: ["Ban moving allowances", "Reduce team support", "Combine incentives with mentorship", "Rely only on volunteers"], answer: 2 }
      ]
    },
    {
      id: "R2",
      title: "Credential Evaluation Basics",
      passage:
        "Before applying through Express Entry, many applicants submit their education for evaluation to an approved organization. The result is an equivalency statement used for CRS. Timelines vary, but applicants who prepare documents early avoid delays and score accurately.",
      questions: [
        { q: "Why is the evaluation done?", choices: ["To replace work experience", "To get an equivalency for CRS", "To obtain a job offer", "To reduce fees"], answer: 1 },
        { q: "Delays are avoided mainly by:", choices: ["Submitting late", "Skipping required forms", "Preparing documents early", "Ignoring instructions"], answer: 2 },
        { q: "The evaluation is completed by:", choices: ["Any private tutor", "An approved organization", "A family physician", "A language school"], answer: 1 }
      ]
    },
    {
      id: "R3",
      title: "IELTS Reading Habits",
      passage:
        "Test takers who practice with authentic length passages often improve scanning and inference skills. Short daily sessions are effective when paired with timed questions, answer review, and brief note taking about common traps such as distractors and paraphrasing.",
      questions: [
        { q: "Which practice feature is emphasized?", choices: ["Only long weekly sessions", "Short daily sessions with review", "Skipping timed questions", "Avoiding note taking"], answer: 1 },
        { q: "Common traps include:", choices: ["Literal repetition only", "Distractors and paraphrasing", "Handwriting quality", "Accent differences"], answer: 1 },
        { q: "Improvement is linked to:", choices: ["Random guessing", "Scanning and inference practice", "Memorizing passages", "No time limits"], answer: 1 }
      ]
    },
    {
      id: "R4",
      title: "Settlement Funds Concept",
      passage:
        "Some immigration programs require proof of funds to show the applicant can support themselves after arrival. The amount depends on family size and is updated periodically. Applicants with valid job offers under certain streams may be exempt.",
      questions: [
        { q: "Proof of funds is used to:", choices: ["Show work hours", "Demonstrate financial capacity", "Verify language scores", "Confirm education"], answer: 1 },
        { q: "Amounts change based on:", choices: ["Age only", "Random policy", "Family size and updates", "Province of birth"], answer: 2 },
        { q: "Some applicants may be exempt if they have:", choices: ["A valid job offer under certain streams", "A tourist visa", "No bank account", "A foreign driver’s license"], answer: 0 }
      ]
    },
    {
      id: "R5",
      title: "Provincial Nominee Signals",
      passage:
        "Provinces align selections with labor needs. Recent trends favor applicants with healthcare, tech, or trades experience. Monitoring provincial updates helps candidates spot category based invitations and adjust their strategy early.",
      questions: [
        { q: "Selections are aligned with:", choices: ["Random lotteries", "Labor needs", "Equal quotas for all jobs", "Only past education"], answer: 1 },
        { q: "Recent trends favor:", choices: ["Unrelated fields only", "Healthcare, tech, trades", "No work experience", "Tourism jobs only"], answer: 1 },
        { q: "Candidates can improve chances by:", choices: ["Ignoring updates", "Monitoring provincial news", "Avoiding categories", "Canceling profiles"], answer: 1 }
      ]
    },
    {
      id: "R6",
      title: "Language Scores and CRS",
      passage:
        "Higher language scores usually raise CRS through core human capital, skill transferability, and additional points. Consistent practice with mock tests and targeted feedback tends to lift weak sub scores and overall profiles.",
      questions: [
        { q: "Higher scores affect CRS by:", choices: ["Lowering core points", "Raising multiple components", "Removing transferability", "Eliminating additional points"], answer: 1 },
        { q: "One way to lift weak sub scores is:", choices: ["Avoid mock tests", "Use targeted feedback", "Study only grammar", "Skip reading practice"], answer: 1 },
        { q: "Overall profiles improve when practice is:", choices: ["Inconsistent", "Consistent and targeted", "Untimed only", "Unscored"], answer: 1 }
      ]
    },
    {
      id: "R7",
      title: "Document Readiness",
      passage:
        "Applicants who gather police certificates, work letters, and language results before creating an Express Entry profile can submit quickly after an invitation. A checklist and calendar reminders reduce last minute issues.",
      questions: [
        { q: "Preparing documents early helps applicants to:", choices: ["Delay submission", "Submit quickly after ITA", "Skip invitations", "Avoid language tests"], answer: 1 },
        { q: "What reduces last minute issues?", choices: ["Ignoring deadlines", "A checklist and reminders", "Deleting emails", "Changing NOC randomly"], answer: 1 },
        { q: "Which documents are mentioned?", choices: ["Travel guides", "Police certificates and work letters", "Restaurant menus", "Hotel bookings"], answer: 1 }
      ]
    }
  ];

  // Simple in memory rate limit
  const RATE_MAX = Number(process.env.RATE_MAX || 20);
  const RATE_WINDOW_MS = Number(process.env.RATE_WINDOW_MS || 60_000);
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
    return {
      statusCode: 429,
      headers: { ...headers, "Retry-After": String(retry) },
      body: JSON.stringify({ error: "Too many requests. Please wait a moment and try again." })
    };
  }

  // Parse payload
  let payload = {};
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Bad JSON" }) };
  }
  const action = payload.action || "chat";

  // List tests
  if (action === "list_tests") {
    const list = TESTS.map(t => ({ id: t.id, title: t.title }));
    return { statusCode: 200, headers, body: JSON.stringify({ tests: list }) };
  }

  // Get test
  if (action === "get_test") {
    const id = String(payload.id || "");
    const t = TESTS.find(x => x.id === id);
    if (!t) return { statusCode: 404, headers, body: JSON.stringify({ error: "Test not found" }) };
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        id: t.id,
        title: t.title,
        passage: t.passage,
        questions: t.questions.map(({ q, choices }, i) => ({ idx: i, q, choices }))
      })
    };
  }

  // Submit answers
  if (action === "submit_answers") {
    const id = String(payload.id || "");
    const answers = Array.isArray(payload.answers) ? payload.answers : [];
    const t = TESTS.find(x => x.id === id);
    if (!t) return { statusCode: 404, headers, body: JSON.stringify({ error: "Test not found" }) };
    let correct = 0;
    const details = t.questions.map((qq, i) => {
      const user = typeof answers[i] === "number" ? answers[i] : -1;
      const isCorrect = user === qq.answer;
      if (isCorrect) correct += 1;
      return {
        question: qq.q,
        user_choice: user,
        correct_choice: qq.answer,
        correct_text: qq.choices[qq.answer],
        result: isCorrect ? "correct" : "incorrect"
      };
    });
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ id: t.id, title: t.title, score: correct, total: t.questions.length, details })
    };
  }

  // Default action, immigration Q and A via OpenAI
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.MODEL || "gpt-4o-mini";
  if (!apiKey) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Missing OPENAI_API_KEY" }) };
  }

  const EXPLORE_SYSTEM = `
You are North Star GPS, Explore tier. Explain Canadian immigration basics, Express Entry, CRS, and PNPs at a high level. Provide concise, factual help. For Reading practice, do not use copyrighted text. Answer in 1 to 3 sentences first. Be accurate and conservative. No guarantees. No legal advice. Professional, clear English only.
`.trim();

  // Accept either a single message string or an array of messages
  const topic = String(payload.topic || "").trim();
  const messagesArray = Array.isArray(payload.messages) ? payload.messages : [];
  const singleMessage = payload.message ? [{ role: "user", content: String(payload.message) }] : [];
  const messages = [
    { role: "system", content: EXPLORE_SYSTEM },
    topic ? { role: "system", content: `User selected topic: ${topic}` } : null,
    ...messagesArray,
    ...singleMessage
  ].filter(Boolean);

  // Helper with timeout
  async function fetchWithTimeout(url, options, timeoutMs = 25000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, { ...options, signal: controller.signal });
    } finally {
      clearTimeout(id);
    }
  }

  try {
    const r = await fetchWithTimeout(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model, messages, temperature: 0.2, max_tokens: 700, stream: false })
      },
      25000
    );

    if (!r.ok) {
      const text = await r.text();
      return { statusCode: r.status, headers, body: JSON.stringify({ error: text.slice(0, 800) }) };
    }

    const data = await r.json();
    const reply = data.choices?.[0]?.message?.content || "";
    return { statusCode: 200, headers, body: JSON.stringify({ reply }) };
  } catch (e) {
    const msg = e && e.name === "AbortError" ? "The request took too long. Please try again." : String(e).slice(0, 800);
    return { statusCode: 504, headers, body: JSON.stringify({ error: msg }) };
  }
};
