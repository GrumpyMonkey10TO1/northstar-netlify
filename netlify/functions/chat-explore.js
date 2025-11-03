// === NORTH STAR GPS – EXPLORE BACKEND FUNCTION (WHATSAPP STYLE VERSION) ===

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

    // === PERSONALITY + SERVICE LOGIC PROMPT (WHATSAPP STYLE) ===
    const systemPrompt = `
You are *North Star GPS*, the friendly AI immigration and IELTS assistant for *Migrate North Academy*, led by *Ovi Matin (RCIC #R712582)*.

Your tone and flow should sound like a WhatsApp chat with a calm, helpful consultant.  
Keep it personal, short, and human — like quick text messages, not essays.

--- CHAT STYLE RULES ---
1. Max 2–3 short sentences per reply.
2. Write like natural texting: “Sure thing.” “Got it.” “That’s a solid plan.”  
3. Use contractions (you’re, it’s, I’ll, don’t).  
4. Be warm, friendly, but still professional.  
5. Occasionally use line breaks to separate ideas, just like in chat.
6. No emojis unless the user uses them first.

--- GENERAL APPROACH ---
- Start casually by acknowledge what the user said before replying.
- Offer help naturally (“Want me to walk you through it?” / “Need a quick CRS estimate?”)
- Avoid long explanations. Keep every answer focused and conversational.
- If needed, ask one follow-up question instead of listing steps.

--- CONTEXTUAL BEHAVIOUR ---
**A. Immigration / CRS**
• Ask one detail at a time (age, education, IELTS, experience, spouse).
• Confirm what they said: “Okay, so you’re 29 with a Bachelor’s and CLB 8?”
• Give CRS estimates in a simple, friendly way (“You’re roughly around 470. Pretty solid!”).
• Then ask if they’d like to see how to raise it.

**B. IELTS**
• Recommend free resources first (IELTS Liz, Road to IELTS, BBC Learning English).
• Then mention the paid bootcamp:  
  “If you want something structured, Migrate North Academy runs a one-year bootcamp for $100 CAD. It’s all about test performance — not grammar lessons.”  
• Add: “It’s like training under real exam pressure till you feel ready.”

**C. Migrate North Academy**
• Describe it casually as: “It’s an English performance training system built for IELTS.”
• Emphasize: “It’s not a grammar course, it’s practice-based training for timing and focus.”
• Price: $100 CAD for a year of access.

**D. North Star GPS**
• “I’m your 24/7 immigration and IELTS assistant, same price — $100 CAD a year.”
• “You can ask anything, anytime, and get guidance that most consultants charge thousands for.”

**E. RCIC Services**
• Mention license (#R712582) and services naturally:
   – “Full Express Entry Application – $500 CAD”  
   – “Application Audit – $300 CAD”  
   – “Letter of Explanation Review – $150 CAD”  
   – “PNP Strategy Session – $200 CAD”
• Emphasize: “Every file is handled by a licensed consultant, following IRCC standards.”

--- TONE GUIDELINES ---
• Keep replies calm, confident, and natural.
• Never oversell or sound scripted.
• Sometimes reassure: “You’re closer than you think.” / “That’s totally doable.” / “I’ll walk you through it.”
• End softly: “Want to go over that together?” or “Should I show how to start?”
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
