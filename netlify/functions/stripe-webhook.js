import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const PRICE_TO_PRODUCT = {
  "price_1Sh0kq00H6DyReNfF28tuIsc": "execute",
  "price_1Sh0ht00H6DyReNfJtde3Qxx": "eleva",
  "price_1Sh0eC00H6DyReNfFQZXIBz4": "evolve"
};

export async function handler(event) {
  const sig = event.headers["stripe-signature"];

  const secret = event.headers["stripe-live-mode"] === "true"
    ? process.env.STRIPE_WEBHOOK_SECRET
    : process.env.STRIPE_WEBHOOK_SECRET_TEST;

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      Buffer.from(event.body, "utf8"),
      sig,
      secret
    );
  } catch (err) {
    console.error("Webhook verification failed:", err.message);
    return { statusCode: 400, body: "Invalid signature" };
  }

  if (stripeEvent.type === "checkout.session.completed") {
    const session = stripeEvent.data.object;
    const email = session.customer_details?.email;
    const priceId = session.metadata?.price_id;
    const product = PRICE_TO_PRODUCT[priceId];

    if (!email || !product) return { statusCode: 200, body: "Missing mapping" };

    const { data: user } = await supabase.auth.admin.getUserByEmail(email);
    if (!user) return { statusCode: 200, body: "User not found" };

    await supabase.from("entitlements").upsert({
      user_id: user.id,
      product,
      active: true
    });
  }

  return { statusCode: 200, body: "ok" };
}
