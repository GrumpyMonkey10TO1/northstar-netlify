// /netlify/functions/chat-evolve.js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const CORS_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

export default async (req) => {
  try {
    // --- Handle CORS preflight (OPTIONS) ---
    if (req.method && req.method.toUpperCase() === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // --- Safely read and parse incoming body ---
    const bodyText = await req.text();
    let message = "";
    try {
      const parsed = JSON.parse(bodyText || "{}");
      message = parsed.message || "";
    } catch {
      message = "";
    }

    // --- Handle empty input gracefully ---
    if (!message) {
      return new Response(
        JSON.stringify({ reply: "No message received by Evolve function." }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    // ----------------------------
    // HANDLE WRITING TASK REQUESTS
    // ----------------------------
    if (message.toLowerCase().includes("writing task") || message.toLowerCase().includes("writing test")) {
      try {
        // List of available writing tasks (expand this as you create more)
        const tasks = [
          "E-W-001.json",
          "E-W-002.json",
          "E-W-003.json",
          "E-W-004.json",
          "E-W-005.json"
        ];

        // Randomly pick one
        const randomTask = tasks[Math.floor(Math.random() * tasks.length)];

        // Fetch the selected JSON file from your Netlify assets
        const res = await fetch(`https://startling-faun-f9dddb.netlify.app/assets/tests/evolve/writing/${randomTask}`);
        const testData = await res.json();

        // Build response message
        const reply = `📝 Writing Task: ${testData.task_id}\n\n${testData.prompt}\n\nWord limit: ${testData.word_limit}\n\nScoring focus: ${Object.keys(testData.rubric).join(", ")}.`;

        return new Response(JSON.stringify({ reply }), { status: 200, headers: CORS_HEADERS });
      } catch (err) {
        console.error("Error loading writing test:", err);
        return new Response(
          JSON.stringify({ reply: "Sorry, I couldn't load the writing task right now." }),
          { status: 500, headers: CORS_HEADERS }
        );
      }
    }

    // ----------------------------
    // EVOLVE SYSTEM PROMPT
    // ----------------------------
    const systemPrompt = `
You are North Star GPS - Evolve, the AI learning coach of Migrate North Academy.
Your role is to guide users through structured English proficiency development (IELTS & PTE).
The Evolve program costs $100 and includes 99 simulation tests designed to help users gradually reach higher CLB levels by practice, feedback, and reflection.

Tone: friendly, precise, and motivating. Avoid any exaggeration or salesy tone.

Rules:
1. Always respond in clear, easy-to-understand English.
2. When a user asks about IELTS, explain strategies and structure (not just answers).
3. If the topic involves test simulations, mention that the Evolve program simulates 99 practice tests of increasing difficulty.
4. If asked about Explore or Elevate, summarize their purposes:
   - Explore = Free tier for orientation and light learning.
   - Evolve = Paid tier ($100) for serious IELTS/PTE prep and skill mastery.
   - Elevate = Advanced immigration profile builder that includes everything from Evolve.
5. Keep responses short and conversational unless the user explicitly requests depth.
6. For every answer, you can suggest one follow-up action or question to keep engagement going.
`;

    // ----------------------------
    // OPENAI CHAT CALL
    // ----------------------------
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      max_tokens: 400,
      temperature: 0.8
    });

    const reply = (completion.choices?.[0]?.message?.content || "").trim();

    // Split long replies into manageable chunks
    const sentences = reply.split(/(?<=[.!?])\s+/);
    const firstChunk = sentences.slice(0, 3).join(" ");
    const remaining = sentences.slice(3);

    return new Response(
      JSON.stringify({ reply: firstChunk, remaining }),
      { status: 200, headers: CORS_HEADERS }
    );

  } catch (error) {
    console.error("Evolve Function Error:", error);
    return new Response(
      JSON.stringify({ reply: "Sorry, something went wrong with Evolve chat." }),
      { status: 500, headers: CORS_HEADERS }
    );
  }
};
