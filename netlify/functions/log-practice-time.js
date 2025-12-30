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
    const { email, minutes } = JSON.parse(event.body || "{}");

    if (!email || !minutes) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing email or minutes" })
      };
    }

    await supabase.from("user_practice_time").insert({
      email,
      minutes
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error("Practice time log error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to log practice time" })
    };
  }
}
