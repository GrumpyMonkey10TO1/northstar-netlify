import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Price IDs - these should match your Stripe dashboard
const PRICE_IDS = {
  evolve: "price_1ShOeC00H6DyReNFFQZXIBz4",
  elevate: "price_1Sh0ht00H6DyReNfJtde3Qxx",
  execute: "price_1Sh0kq00H6DyReNfF28tuIsc"
};

export async function handler(event) {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  try {
    const { email, product } = JSON.parse(event.body || "{}");

    console.log("Received request:", { email, product });

    if (!email || !email.includes("@")) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Valid email required" })
      };
    }

    const selectedProduct = product || "evolve";
    const priceId = PRICE_IDS[selectedProduct];

    if (!priceId) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Invalid product" })
      };
    }

    // Base URL for redirects
    const baseUrl = process.env.SITE_URL || "https://startling-faun-f9dddb.netlify.app";

    console.log("Creating checkout session:", { email, product: selectedProduct, priceId });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      customer_email: email,
      line_items: [
        { price: priceId, quantity: 1 }
      ],
      metadata: {
        product: selectedProduct,
        price_id: priceId
      },
      success_url: `${baseUrl}/evolve-production.html?paid=true&email=${encodeURIComponent(email)}`,
      cancel_url: `${baseUrl}/evolve-production.html?cancelled=true`
    });

    console.log("Session created:", session.id, session.url);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: session.url })
    };

  } catch (err) {
    console.error("Stripe error:", err.type, err.message);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message })
    };
  }
}
