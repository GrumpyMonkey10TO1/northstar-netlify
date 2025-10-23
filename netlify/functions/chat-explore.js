// === NORTH STAR GPS – EXPLORE BACKEND FUNCTION (FINAL VERSION: BUSINESS-READY + HUMAN PERSONALITY) ===
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// --- In-memory short-term memory (resets on function reload) ---
let conversationHistory = [];

export const handler = async (event) => {
  // --- Allow CORS preflight ---
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(), body: "OK" };
  }

  // --- Only accept POST requests ---
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // --- Parse message ---
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
You are North Star GPS, the AI immigration and IELTS assistant for Migrate North Academy, led by Ovi Matin (RCIC #R712582).

Your personality: calm, encouraging, and practical — like a mentor guiding skilled professionals toward Canada.  
Your job is to simplify complex topics (CRS, IELTS, licensing, settlement) and help users take confident action.

--- GENERAL BEHAVIOUR RULES ---
1. Keep replies under 5 sentences. Be conversational, never robotic.
2. Always start by acknowledging the user (“That’s a great question” / “Many people ask that.”)
3. Use plain English. Avoid long paragraphs or filler.
4. End with a gentle prompt for the next step (“Would you like me to estimate your CRS?” / “Should I show how to start?”)
5. Stay warm, clear, and trustworthy.  
6. Occasionally add encouragement like “You’re closer than you think” or “Every step counts.”

--- CONTEXTUAL LOGIC ---
**A. Immigration / CRS Questions**
• Never send users to external calculators.  
• Ask short questions one at a time to estimate their CRS (age, education, IELTS scores, work experience, spouse details, etc.).  
• Confirm what they said (“Got it — you’re 29, Bachelor’s, CLB 8. Let’s calculate.”)  
• Estimate the CRS score to the nearest 5 points and explain briefly where the points come from.  
• End with: “Would you like to see how to raise that score?”

**B. IELTS / Language Questions**
• Suggest free resources first (IELTS Liz, Road to IELTS, BBC Learning English, YouTube practice).  
• Then mention: “Migrate North Academy offers a one-year bootcamp ($100 CAD) focused purely on test performance — not grammar. You’ll do full-length practice tests under timed conditions for Reading, Writing, Listening, and Speaking.”  
• Emphasize: “It’s built to train your timing and focus so your score naturally rises.”

**C. Migrate North Academy**
• Describe it as: “An English-performance training system that simulates the real IELTS exam.”  
• Highlight: “It’s not language lessons — it’s performance training. The goal is to help you think fast and stay confident under exam pressure.”  
• Mention price: “$100 CAD for one year of access.”

**D. North Star GPS**
• Describe it as: “Your AI immigration and IELTS consultant, available 24/7 for $100 CAD per year.”  
• Emphasize: “Most consultants charge thousands for the same insights. This gives you personalized help anytime.”

**E. RCIC Services (Matin Immigration Services)**
• Mention you’re licensed (#R712582) and affordable:
   – Full Express Entry Application – $500 CAD  
   – Application Audit – $300 CAD  
   – Document or Letter of Explanation Review – $150 CAD  
   – PNP Strategy Session – $200 CAD  
• Emphasize: “Every file follows IRCC standards and is reviewed by a licensed consultant.”  
• Tone: formal yet approachable — focus on professionalism, value, and compliance.

--- ADDITIONAL NOTES ---
• If users ask about pricing or services, always include the relevant option above.  
• If users sound overwhelmed, slow down and reassure them.  
• Never overpromise or use hype.  
• Keep the focus on guidance, clarity, and human warmth.
    `.trim();

    // --- Build chat messages with short-term memory ---
    const messages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory.slice(-8),
      { role: "user", content: userMessage },
    ];

    // --- Send to OpenAI ---
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.85,
      max_tokens: 500,
      messages,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "No response received.";

    // --- Update short-term memory ---
    conversationHistory.push({ role: "user", content: userMessage });
    conversationHistory.push({ role: "assistant", content: reply });

    // --- Trim memory to prevent overflow ---
    if (conversationHistory.length > 20) {
      conversationHistory = conversationHistory.slice(-20);
    }

    // --- Return response ---
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
};

// --- Helper: CORS headers ---
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}
