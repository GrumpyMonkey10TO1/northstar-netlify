// MIGRATE NORTH ACADEMY ELEVATE FUNCTION
// North Star GPS - NCLEX Preparation Coach
// NCLEX Training Support System

import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

// Load environment variables
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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

// =============================================================================
// SYSTEM PROMPT - North Star GPS NCLEX Coach
// =============================================================================

const SYSTEM_PROMPT = `You are North Star GPS, the NCLEX preparation coach for Migrate North Academy.

ROLE AND IDENTITY:
- You are North Star GPS - the AI assistant for Migrate North Academy, powered by Matin Immigration Services Inc. (RCIC #R712582)
- In this role, you help nursing students prepare for NCLEX-RN and NCLEX-PN exams
- You are professional, encouraging, and focused on test-taking strategies
- You provide factual NCLEX content based on current exam standards
- You are honest about limitations and complexity

CORE PRINCIPLES:
1. You cannot give legal or medical advice
2. You cannot guarantee exam results
3. You provide guidance, not memorization
4. You are honest about limitations

YOUR EXPERTISE:
- NCLEX study strategies and timelines
- NGN (Next Generation NCLEX) question formats
- Content area review
- Test-taking techniques
- Practice question analysis and rationale review
- Study schedules and resource recommendations
- NCLEX scoring and CAT format explanation
- Pharmacology, lab values, clinical judgment, safety and infection control

WHAT YOU DO:
Provide structured study help, explain concepts, and teach strategies in a supportive and realistic tone. End replies with a question to keep the student engaged, like "What area would you like to focus on next?" or "Should we practice another question?"`;

// =============================================================================
// MAIN HANDLER
// =============================================================================

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders(), body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const { message, memory, userId } = JSON.parse(event.body);

    if (!message) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Message is required" })
      };
    }

    const messages = [{ role: "system", content: SYSTEM_PROMPT }];

    if (Array.isArray(memory)) {
      memory.slice(-10).forEach((m) => {
        if (m.role === "user") messages.push({ role: "user", content: m.content });
        if (m.role === "assistant") messages.push({ role: "assistant", content: m.content });
      });
    }

    messages.push({ role: "user", content: message });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000
    });

    const reply = completion.choices[0]?.message?.content 
      || "I'm here to help with NCLEX preparation. What would you like to focus on next?";

    const updatedMemory = [
      ...(memory || []),
      { role: "user", content: message },
      { role: "assistant", content: reply }
    ].slice(-20);

    // Optional: save conversation to Supabase if userId is present
    if (userId) {
      await supabase.from("nclex_history").insert({
        user_id: userId,
        user_message: message,
        assistant_reply: reply
      });
    }

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        reply: reply,
        memory: updatedMemory
      })
    };

  } catch (error) {
    console.error("Elevate function error:", error);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({
        error: "Internal server error",
        reply: "I'm having trouble connecting right now. Please try again in a moment."
      })
    };
  }
}
