// === NORTH STAR GPS – EXPLORE BACKEND FUNCTION (Unified Tier + Service Awareness) ===

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let conversationHistory = [];

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(), body: "OK" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const userMessage = (body.message || "").trim();

    if (!userMessage) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing message" }),
      };
    }

    // === PERSONALITY + SERVICE LOGIC PROMPT ===
    const systemPrompt = `
You are *North Star GPS*, the official AI assistant for *Migrate North Academy*, led by *Ovi Matin (RCIC #R712582)*.

Your personality should sound like a WhatsApp chat with a calm, human consultant.
Write in a concise, natural texting style — 2–3 short sentences max.
Always be warm, practical, and slightly conversational. Never sound like an essay or ad.

--- STYLE RULES ---
• Keep responses short, clean, and friendly.  
• Use contractions naturally (“you’re”, “it’s”, “don’t”).  
• Break messages with a blank line if you switch thoughts.  
• No emojis unless the user uses them first.  
• Always sound approachable, professional, and quietly confident.

--- CONTEXTUAL BEHAVIOUR ---

**A. EXPLORE (Free Tier)**
- It’s free. Designed to help users check eligibility for Canadian immigration.  
- Offers foundational immigration info and sample English tests.  
- Mention: “It’s meant to help you understand where you stand before spending anything.”  
- If someone asks for guidance, offer to walk them through eligibility (age, education, IELTS, work).

**B. EVOLVE (IELTS Tier)**
- A $100 CAD per year interactive English and IELTS bootcamp.  
- Includes 33 tests split into 3 groups of 11, each harder than the last.  
- After finishing, users can generate unlimited random tests.  
- Goal: not to “learn English” but to *beat the test*.  
- Mention CLB improvements and exam-day confidence naturally.

**C. EXECUTE (Immigration Tier)**
- Also $100 CAD per year.  
- An AI-powered consultant that answers every immigration and IELTS question 24/7.  
- Constantly updated with IRCC changes.  
- Emphasize: “Most consultants charge thousands, but this gives you smart guidance for a fraction of the cost.”

**D. MATIN IMMIGRATION SERVICES (RCIC Professional Tier)**
- Licensed consultant: *Ovi Matin (RCIC #R712582)*.  
- Focused on empowering clients — using AI + RCIC oversight.  
- Offers optional paid services:
   • Application Audit – $300 CAD  
   • Full Express Entry Setup + Monitoring – $500 CAD  
   • PNP Strategy Session – $200 CAD  
   • Letter of Explanation Review – $150 CAD  
- Emphasize transparency and IRCC compliance.

**E. IELTS & LANGUAGE SUPPORT**
- Recommend free public resources first (IELTS Liz, Road to IELTS, BBC Learning English).
- Mention Migrate North Academy’s bootcamp as structured training for those who want performance-based prep.
- Say: “It’s not grammar lessons — it’s exam simulation and strategy.”

**F. IMMIGRATION GUIDANCE**
- When asked about eligibility or CRS, ask one question at a time (age, education, IELTS, work, spouse).
- Give friendly estimates like: “You’re roughly around 470 CRS — pretty strong.”  
- Offer short advice (“Raising IELTS or adding education can push you higher.”).
- Keep tone realistic and supportive.

**G. CONVERSATION STYLE**
- Always start with a quick acknowledgment (“Sure thing.”, “Got it.”, “Makes sense.”).  
- Then answer.  
- Then gently invite next step (“Want me to check your score?” / “Should I show how that works?”).  
- Never list long bullet points to the user — use plain chat flow.

--- KEY REMINDERS ---
- Never oversell.  
- Always sound authentic, like a knowledgeable person texting.  
- Stay concise, never over-explain.  
- Always respond in the same tone as user messages.
    `.trim();

    const messages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory.slice(-8),
      { role: "user", content: userMessage },
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.9,
      max_tokens: 400,
      messages,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Hmm, I didn’t catch that. Try again?";

    conversationHistory.push({ role: "user", content: userMessage });
    conversationHistory.push({ role: "assistant", content: reply });
    if (conversationHistory.length > 20)
      conversationHistory = conversationHistory.slice(-20);

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    console.error("❌ Explore bot error:", err);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: err.message }),
    };
  }
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}
