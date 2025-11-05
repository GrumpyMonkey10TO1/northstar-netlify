// === North Star GPS – Natural Freeflow Edition ===
const OpenAI = require("openai");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function quickCRS({ age, edu, ielts, work, spouse = false }) {
  let core = 0;
  if (age >= 18 && age <= 29) core += 110;
  else if (age <= 35) core += 95;
  else if (age <= 40) core += 85;
  else if (age <= 45) core += 75;

  if (edu === "master") core += 135;
  else if (edu === "bachelor") core += 120;
  else if (edu === "phd") core += 150;

  const clb = ielts === "9" ? 31 : ielts === "8" ? 23 : ielts === "7" ? 17 : 9;
  core += clb * 4;

  const yrs = parseInt(work, 10) || 0;
  if (yrs >= 3) core += 50;
  else if (yrs >= 1) core += 40;

  if (spouse) core += 10;
  return core + 50; // buffer
}

exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS")
    return { statusCode: 200, headers: corsHeaders(), body: "OK" };
  if (event.httpMethod !== "POST")
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" })
    };

  try {
    const body = JSON.parse(event.body || "{}");

    let messages = body.messages || [];
    let userMessage = "";

    if (Array.isArray(messages) && messages.length > 0) {
      const last = messages[messages.length - 1];
      userMessage = (last?.content || last?.message || "").trim();
    } else if (body.message) {
      userMessage = body.message.trim();
      messages = [{ role: "user", content: userMessage }];
    }

    if (!userMessage)
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing user message" })
      };

    /* ---- Quick CRS when numbers detected ---- */
    const crsMatch = userMessage.match(
      /(\d+).*(master|bachelor|phd|diploma).*(\d)\s*years?.*(clb\s?(\d)|ielts\s?(\d))/i
    );
    if (crsMatch) {
      const [_, age, edu, work, __, ielts] = crsMatch;
      const est = quickCRS({ age, edu, ielts, work });
      const lastDraw = 481;

      const reply = `Your estimated CRS score is around ${est} (${est - 50} without a spouse).
The most recent draw was ${lastDraw}, so you might be close if you improve IELTS or get a PNP nomination.`;

      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({ reply })
      };
    }

    /* ---- Normal GPT Call ---- */
    const systemPrompt = `You are North Star GPS, the friendly AI immigration assistant for Migrate North, led by Ovi Matin (RCIC #R712582).
You help users understand Canadian immigration, Express Entry, CRS points, IELTS/CLB conversions, and PNP strategy.
Speak naturally, like texting with a helpful consultant — relaxed, clear, and human.
Write in 2–3 short sentences per reply.
Avoid repetitive phrases or templated responses. Do not use forced greetings or closings.
If the user shares details like age, education, IELTS, or work years, estimate their CRS first.
If they go off-topic, gently redirect them back to immigration with something friendly like, “That’s a bit outside immigration, but I can help once we’re back on track.”`;

    const conversation = [
      { role: "system", content: systemPrompt },
      ...messages.slice(-12)
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.8,
      max_tokens: 320,
      messages: conversation
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Hmm, could you rephrase that?";

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({ reply })
    };
  } catch (err) {
    console.error("❌ North Star GPS error:", err);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: err.message })
    };
  }
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };
}
