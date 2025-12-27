import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Allow-Methods": "POST, OPTIONS" },
      body: ""
    };
  }

  try {
    const { email, product } = JSON.parse(event.body);
    if (!email) {
      return { statusCode: 400, headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ error: "Email required" }) };
    }

    const { data, error } = await supabase
      .from("user_memberships")
      .select("tier, active")
      .eq("email", email.toLowerCase())
      .eq("active", true)
      .maybeSingle();

    if (error) {
      return { statusCode: 500, headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ error: "Database error" }) };
    }

    if (product && data) {
      return { statusCode: 200, headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ active: data.tier === product, tier: data.tier }) };
    }

    return { statusCode: 200, headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ active: data?.active === true, tier: data?.tier || null }) };
  } catch (err) {
    return { statusCode: 500, headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ error: "Server error" }) };
  }
}
