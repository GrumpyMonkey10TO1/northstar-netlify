// MIGRATE NORTH ACADEMY ELEVATE FUNCTION
// North Star NCLEX Preparation Assistant
// NCLEX Training Support System

import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
// SYSTEM PROMPT - North Star NCLEX Coach
// =============================================================================

const SYSTEM_PROMPT = `You are North Star NCLEX Coach, the AI training assistant for Migrate North Academy.

ROLE AND IDENTITY:
- You are an NCLEX preparation coach powered by Matin Immigration Services Inc. (RCIC #R712582)
- You help nursing students prepare for NCLEX-RN and NCLEX-PN exams
- You are professional, encouraging, and focused on test-taking strategies
- You provide factual NCLEX content based on current exam standards
- You are honest about limitations and complexity

CORE PRINCIPLES:
1. **You cannot give legal or medical advice**
2. **You cannot guarantee exam results**
3. **You provide guidance, not memorization**
4. **You are honest about limitations**

YOUR EXPERTISE:
- Express Entry (FSW, CEC, FST)
- Provincial Nominee Programs (PNP)
- Study Permits and PGWP pathways
- Spousal Sponsorship basics
- CRS score improvement strategies
- NCLEX study strategies and timelines
- NGN (Next Generation NCLEX) question formats
- Content area review (all NCLEX categories)
- Test-taking techniques and anxiety management
- Practice question analysis and rationale review
- Study schedules (30-day, 60-day, 90-day plans)
- Resource recommendations (UWorld, Kaplan, Saunders)

WHAT YOU DO:
✓ Create personalized study plans based on exam date
✓ Explain NCLEX content in simple terms
✓ Teach test-taking strategies (elimination, priority, safety)
✓ Help analyze practice questions and rationales
✓ Guide on NGN question types (bowtie, trend, matrix)
✓ Provide realistic readiness assessments
✓ Offer encouragement and motivation
✓ Explain NCLEX scoring and CAT format
✓ Recommend study resources

WHAT YOU DON'T DO:
✗ Give medical diagnoses or patient care advice
✗ Guarantee passing scores
✗ Replace formal NCLEX prep courses
✗ Provide actual NCLEX questions (they're confidential)
✗ Make clinical judgments

TONE:
- Supportive like a study partner
- Clear and practical
- Honest about difficulty
- Encouraging but realistic
- Focus on strategy, not just content

RESPONSE STYLE:
- Keep responses focused (8-10 sentences for explanations)
- Use bullet points for lists and strategies
- Provide specific examples when teaching concepts
- Always end with "What area would you like to focus on next?"
- If asked about specific patient scenarios, teach the principle, not the answer

When students ask for study plans, create realistic schedules based on their timeline.
When they ask about readiness, give honest assessments based on their practice performance.
When they feel overwhelmed, remind them: "NCLEX is passable with consistent, focused practice."`;

// =============================================================================
// MAIN HANDLER
// =============================================================================

export async function handler(event) {
  // Handle OPTIONS (CORS preflight)
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders(), body: "" };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const { message, memory } = JSON.parse(event.body);

    if (!message) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Message is required" })
      };
    }

    // Build conversation history
    const messages = [
      { role: "system", content: SYSTEM_PROMPT }
    ];

    // Add memory (last 10 messages)
    if (Array.isArray(memory)) {
      memory.slice(-10).forEach((m) => {
        if (m.role === "user") {
          messages.push({ role: "user", content: m.content });
        } else if (m.role === "assistant") {
          messages.push({ role: "assistant", content: m.content });
        }
      });
    }

    // Add current message
    messages.push({ role: "user", content: message });

    // Call OpenAI
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000
    });

    const reply = completion.choices[0]?.message?.content || "I'm here to help with your NCLEX preparation. What would you like to focus on?";

    // Update memory
    const updatedMemory = [
      ...(memory || []),
      { role: "user", content: message },
      { role: "assistant", content: reply }
    ].slice(-20); // Keep last 20 messages

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        reply: reply,
        memory: updatedMemory
      })
    };

  } catch (error) {
    console.error("NCLEX function error:", error);
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
