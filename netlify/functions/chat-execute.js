// MIGRATE NORTH ACADEMY EXECUTE FUNCTION 
// North Star GPS Immigration Assistant
// Canadian Immigration Consulting Support System

import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Initialize Supabase (using secure Netlify environment variables)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// CORS Headers
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://migratenorth.ca",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json"
  };
}

// SYSTEM PROMPT
const SYSTEM_PROMPT = `You are North Star GPS, the immigration assistant for Migrate North Academy.

ROLE AND IDENTITY:
- You are an AI immigration assistant powered by Matin Immigration Services Inc. (RCIC #R712582)
- You help people understand Canadian immigration pathways and prepare their applications
- You are professional, direct, and encouraging
- You provide factual immigration information based on IRCC policies

CORE PRINCIPLES:
1. You cannot give legal advice or guarantee results
2. You cannot replace a licensed immigration consultant or lawyer
3. You provide information, guidance, and help with preparation
4. You are honest about limitations and complexity

YOUR EXPERTISE:
- Express Entry (FSW, CEC, FST)
- Provincial Nominee Programs (PNP)
- CRS score improvement strategies
- Document preparation guidance
- Common application mistakes
- Language test requirements
- Educational Credential Assessments (ECA)
- Work experience documentation
- Proof of funds requirements
- Letters of Explanation
- Immigration timelines and processing
- Form filling guidance

COMMUNICATION STYLE:
Direct, structured, realistic, and actionable.

DO NOT:
Guarantee approval, provide legal representation, or coach IELTS inside Execute.

Always respond professionally and immigration-focused.`;

// MAIN HANDLER
export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(), body: "ok" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const rawUserMessage = (body.message || "").trim();
    const previousMemory = body.memory || [];
    const userId = body.userId || null; // added for Supabase logging
    const sessionTime = body.timestamp || Date.now();

    if (!rawUserMessage) {
      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({
          reply: "Please enter a message.",
          memory: previousMemory,
          timestamp: Date.now()
        })
      };
    }

    const THIRTY = 1800000;
    const now = Date.now();
    const expired = now - sessionTime > THIRTY;

    let memory = expired ? [] : previousMemory;

    // Build conversation history (last 20)
    const conversationHistory = memory
      .filter(m => m.role === "user" || m.role === "assistant")
      .slice(-20);

    const messages = [{ role: "system", content: SYSTEM_PROMPT }];

    conversationHistory.forEach(m => {
      messages.push({
        role: m.role,
        content: m.content
      });
    });

    messages.push({
      role: "user",
      content: rawUserMessage
    });

    // OpenAI call
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 800,
      messages
    });

    const reply = completion.choices?.[0]?.message?.content?.trim()
      || "I am here to help with your Canadian immigration questions. What would you like to know next.";

    // Update memory
    memory.push({ role: "user", content: rawUserMessage });
    memory.push({ role: "assistant", content: reply });

    if (memory.length > 100) {
      memory = memory.slice(-100);
    }

    // Save to Supabase if userId exists
    if (userId) {
      await supabase.from("execute_history").insert({
        user_id: userId,
        message_in: rawUserMessage,
        message_out: reply,
        timestamp: new Date().toISOString()
      });
    }

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        reply,
        memory,
        timestamp: now
      })
    };

  } catch (err) {
    console.error("Execute Function Error:", err);

    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({
        error: err.message,
        reply: "I encountered an error. Please try again."
      })
    };
  }
};
