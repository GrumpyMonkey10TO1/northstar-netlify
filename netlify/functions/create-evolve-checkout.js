import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
    const { email, product } = JSON.parse(event.body);

    if (!email || !email.includes("@")) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Valid email required" })
      };
    }

    // Map product to price ID
    const PRICE_IDS = {
      evolve: process.env.STRIPE_EVOLVE_PRICE_ID || "price_1Sh0eC00H6DyReNfFQZXIBz4",
      elevate: process.env.STRIPE_ELEVATE_PRICE_ID || "price_1Sh0ht00H6DyReNfJtde3Qxx",
      execute: process.env.STRIPE_EXECUTE_PRICE_ID || "price_1Sh0kq00H6DyReNfF28tuIsc"
    };

    const selectedProduct = product || "evolve";
    const priceId = PRICE_IDS[selectedProduct];

    if (!priceId) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Invalid product" })
      };
    }

    // Determine base URL
    const baseUrl = process.env.SITE_URL || "https://migratenorth.ca";

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
      success_url: `${baseUrl}/${selectedProduct}?paid=true&email=${encodeURIComponent(email)}`,
      cancel_url: `${baseUrl}/${selectedProduct}?cancelled=true`
    });

    console.log("Checkout session created:", { email, product: selectedProduct, sessionId: session.id });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: session.url })
    };

  } catch (err) {
    console.error("Checkout session error:", err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message })
    };
  }
}
