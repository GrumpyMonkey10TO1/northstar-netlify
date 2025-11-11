import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Small helper
function ok(body) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://migratenorth.ca",
    },
    body: JSON.stringify(body),
  };
}

export const handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://migratenorth.ca",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
      },
      body: "ok",
    };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": "https://migratenorth.ca" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { message, memory = [], mode = "auto", meta = {} } = JSON.parse(event.body || "{}");

    // Trim memory to last 40 turns for speed and token control
    const trimmed = memory.slice(-40);

    // Convert bot/assistant roles for OpenAI compatibility
    const processedMemory = trimmed.map((msg) => ({
      role: msg.role === "bot" ? "assistant" : msg.role,
      content: msg.content,
    }));

    // System prompt
    const systemPrompt = `You are North Star GPS, the paid, hands-on Canadian immigration assistant by Matin Immigration Services.
Goal: help users complete PR workflows end to end, right, first time.
Scope: Express Entry, PNP, work permits linked to PR, study to PR bridges, spousal and dependents where relevant.
Output style: short sections, numbered steps, checklists, and exact IRCC form names and numbers.
Rules:
1) Never claim to be a government source. You are a coach that cites official names exactly.
2) Ask for missing facts only when required to advance a step.
3) Produce fill-helper blocks for forms, for example: IMM 0008, Section A, Q1, Applicant name, write: "<placeholder>".
4) When users upload or paste text, perform a line-by-line issue scan and suggest fixes.
5) Always label deadlines, fees, and where to upload inside the GCKey or PR portal when applicable.
6) Give province-agnostic steps first, then add PNP branches if the user hints at a province.
7) Do not invent policy or dates. If unsure, state what must be verified on IRCC or the province site.
Current mode: ${mode}`;

    // Call OpenAI
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.4,
      max_tokens: 600,
      messages: [
        { role: "system", content: systemPrompt },
        ...processedMemory,
        { role: "user", content: message || "Hello" },
      ],
    });

    const reply = completion.choices?.[0]?.message?.content || "No response available.";

    // Build response memory (use assistant, not bot)
    const newMemory = [
      ...trimmed,
      { role: "user", content: message },
      { role: "assistant", content: reply },
    ];

    return ok({ reply, memory: newMemory, meta });
  } catch (err) {
    console.error("Execute function error:", err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "https://migratenorth.ca" },
      body: JSON.stringify({ error: "Internal Server Error: " + err.message }),
    };
  }
};
