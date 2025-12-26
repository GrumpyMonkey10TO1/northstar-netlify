import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const PRICE_TO_PRODUCT = {
  "price_1Sh0kq00H6DyReNfF28tuIsc": "execute",
  "price_1Sh0ht00H6DyReNfJtde3Qxx": "elevate",
  "price_1Sh0eC00H6DyReNfFQZXIBz4": "evolve",
};

export async function handler(event) {
  const sig = event.headers["stripe-signature"];

  const isLive = event.headers["stripe-live-mode"] === "true";

  const endpointSecret = isLive
    ? process.env.STRIPE_WEBHOOK_SECRET
    : process.env.STRIPE_WEBHOOK_SECRET_TEST;

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      endpointSecret
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return { statusCode: 400, body: "Invalid signature" };
  }

  if (stripeEvent.type === "checkout.session.completed") {
    const session = stripeEvent.data.object;

    const email = session.customer_details?.email;
    const priceId = session.metadata?.price_id;
    const product = PRICE_TO_PRODUCT[priceId];

    if (!email || !product) {
      console.log("Missing mapping", { email, priceId });
      return { statusCode: 200, body: "No mapping" };
    }

    const { data: user, error } =
      await supabase.auth.admin.getUserByEmail(email);

    if (!user || error) {
      console.log("User not found:", email);
      return { statusCode: 200, body: "User not found" };
    }

    await supabase.from("entitlements").upsert({
      user_id: user.id,
      product,
      active: true,
    });

    console.log("Entitlement granted:", email, product);
  }

  return { statusCode: 200, body: "ok" };
}

