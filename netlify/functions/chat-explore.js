// === North Star GPS – Professional Consultant Edition ===
const OpenAI = require("openai");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Changed for a more formal, consultant-like tone
const openers = ["Understood.", "Certainly.", "Processing your request.", "Initial Assessment:"];
// Changed for a more professional closure and call to action
const closers = [
  "That summarizes the key points. Would you like to discuss next steps?",
  "I trust this clarification is helpful. Please advise on how to proceed."
];
const rand = arr => arr[Math.floor(Math.random() * arr.length)];

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

    // ✅ FIX: handle both single message + full session
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

    /* ---- quick CRS when numbers detected ---- */
    const crsMatch = userMessage.match(
      /(\d+).*(master|bachelor|phd|diploma).*(\d)\s*years?.*(clb\s?(\d)|ielts\s?(\d))/i
    );
    if (crsMatch) {
      const [_, age, edu, work, __, ielts] = crsMatch;
      const est = quickCRS({ age, edu, ielts, work });
      const lastDraw = 481; // update weekly
      
      // Revised quick CRS response for a professional tone
      const reply = `${rand(openers)}\nYour estimated CRS Score is: ~${est} (The score is estimated at ~${
        est - 50
      } without a spousal component).\nThe last confirmed Express Entry draw score was ${lastDraw}. To be competitive, focusing on achieving CLB 9 or exploring a Provincial Nominee Program (PNP) is highly recommended. Do you wish to review your strategic options?\n${rand(
        closers
      )}`;

      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({ reply })
      };
    }

    /* ---- normal GPT call ---- */
    // System prompt revised for professional, concise, and authoritative tone
    const systemPrompt = `You are North Star GPS, Ovi Matin’s (RCIC R712582) professional immigration consulting assistant.
You are an expert on Canadian immigration, Express Entry, CRS scoring, IELTS/CLB conversions, and PNP strategy.
Always interpret “points” as CRS points unless the user clearly means IELTS scores.
Answer clearly and concisely, using a professional and authoritative tone appropriate for an official immigration consultant. Avoid contractions where possible. Responses must be 2-3 sentences.
If the user provides their age, education, work experience, and language scores (+spouse?) provide the instant CRS estimate first.
Offer next step naturally, focusing on strategic action and program eligibility, never hard-sell.
If a query is outside the scope of Canadian immigration, reply: “I am designed to assist with Canadian immigration matters. Kindly refocus your inquiry to remain within that scope.”
Start with: ${rand(openers)} End with: ${rand(closers)}`;

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
      "I apologize, I am experiencing an issue with processing this request. Please rephrase your query.";

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({ reply })
    };
  } catch (err) {
    console.error("❌ Explore bot error:", err);
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
