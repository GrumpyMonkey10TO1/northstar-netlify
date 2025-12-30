import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

async function getRecentPerformance(email) {
  const { data: tests } = await supabase
    .from("user_test_results")
    .select("test_type, overall, created_at")
    .eq("email", email)
    .order("created_at", { ascending: false })
    .limit(10);

  const { data: drills } = await supabase
    .from("user_micro_drills")
    .select("drill_name, score, created_at")
    .eq("email", email)
    .order("created_at", { ascending: false })
    .limit(10);

  return { tests: tests || [], drills: drills || [] };
}

async function upsertStreak(email) {
  const t = todayISO();

  const { data: row } = await supabase
    .from("user_streaks")
    .select("current_streak, last_active_date")
    .eq("email", email)
    .maybeSingle();

  if (!row) {
    await supabase.from("user_streaks").insert({
      email,
      current_streak: 1,
      last_active_date: t
    });
    return { current_streak: 1, last_active_date: t };
  }

  const last = row.last_active_date;
  if (last === t) return row;

  const lastDate = new Date(last + "T00:00:00Z");
  const todayDate = new Date(t + "T00:00:00Z");
  const diffDays = Math.round((todayDate - lastDate) / 86400000);

  let nextStreak = 1;
  if (diffDays === 1) nextStreak = (row.current_streak || 0) + 1;
  if (diffDays === 0) nextStreak = row.current_streak || 1;

  await supabase.from("user_streaks").upsert({
    email,
    current_streak: nextStreak,
    last_active_date: t,
    updated_at: new Date().toISOString()
  });

  return { current_streak: nextStreak, last_active_date: t };
}

export async function handler(event) {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    const { email, minutes = 20 } = JSON.parse(event.body || "{}");
    
    if (!email) {
      return { 
        statusCode: 400, 
        headers,
        body: JSON.stringify({ error: "Missing email" })
      };
    }

    const t = todayISO();

    // Check if plan already exists for today
    const { data: existing } = await supabase
      .from("user_daily_plan")
      .select("plan")
      .eq("email", email)
      .eq("plan_date", t)
      .maybeSingle();

    const streak = await upsertStreak(email);

    // Return existing plan if available
    if (existing?.plan) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ plan: existing.plan, streak })
      };
    }

    // Generate new plan
    const perf = await getRecentPerformance(email);

    const prompt = `You are the Daily Coach for an IELTS/CELPIP training app.

Create a DAILY PLAN that fits ${minutes} minutes.

Return ONLY valid JSON with this exact structure:
{
  "headline": "string (motivational headline)",
  "focus": "string (what skill area to focus on today)",
  "steps": [
    { "type": "micro", "name": "Grammar Control", "minutes": 5 },
    { "type": "writing", "name": "Task 2 Practice", "minutes": 10 }
  ],
  "win_condition": "string (what success looks like)",
  "message": "string (encouraging message)"
}

Rules:
- Total minutes must be <= ${minutes}
- If user has weak drills (score < 7), include a micro step
- If writing average is low, add writing step
- Keep it practical and achievable
- Output ONLY the JSON, no markdown, no extra text

Recent test results:
${JSON.stringify(perf.tests)}

Recent drill scores:
${JSON.stringify(perf.drills)}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      response_format: { type: "json_object" }
    });

    const plan = JSON.parse(completion.choices[0].message.content);

    // Save plan to database
    await supabase.from("user_daily_plan").insert({
      email,
      plan_date: t,
      plan
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ plan, streak })
    };

  } catch (error) {
    console.error("Daily coach error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to generate daily plan" })
    };
  }
}
