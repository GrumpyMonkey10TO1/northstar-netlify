import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

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
    const { email } = JSON.parse(event.body || "{}");

    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing email" })
      };
    }

    // Get test results
    const { data: tests } = await supabase
      .from("user_test_results")
      .select("overall, created_at")
      .eq("email", email)
      .order("created_at", { ascending: false });

    // Get micro drills
    const { data: drills } = await supabase
      .from("user_micro_drills")
      .select("score, created_at")
      .eq("email", email)
      .order("created_at", { ascending: false });

    if (!tests || tests.length === 0) {
      return { 
        statusCode: 200, 
        headers,
        body: JSON.stringify({ empty: true }) 
      };
    }

    const total = tests.length;
    const avg = (tests.reduce((a, b) => a + (b.overall || 0), 0) / total).toFixed(1);

    // Calculate streak (unique days)
    const days = new Set(tests.map(r => r.created_at.split("T")[0]));
    const streak = days.size;

    // Micro drills stats
    const microTotal = drills?.length || 0;
    const microAvg = microTotal > 0 
      ? (drills.reduce((a, b) => a + (b.score || 0), 0) / microTotal).toFixed(1)
      : 0;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        total,
        avg,
        streak,
        microTotal,
        microAvg
      })
    };
  } catch (error) {
    console.error("Stats error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to fetch stats" })
    };
  }
}
