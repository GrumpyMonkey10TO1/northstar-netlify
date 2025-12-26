import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import getRawBody from "raw-body";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const PRICE_TO_PRODUCT = {
  "price_1Sh0kq00H6DyReNfF28tuIsc": "execute",
  "price_1Sh0ht00H6DyReNfJtde3Qxx": "elevate",
  "price_1Sh0eC00H6DyReNfFQZXIBz4": "evolve"
};

export async function handler(event, context) {
  const endpointSecret =
    event.headers["stripe-live-mode"] === "true"
      ? process.env.STRIPE_WEBHOOK_SECRET
      : process.env.STRIPE_WEBHOOK_SECRET_TEST;

  const sig = event.headers["stripe-signature"];

  let rawBody;

  try {
    rawBody = await getRawBody(context.req);
  } catch (err) {
    return { statusCode: 400, body: "Cannot read body" };
  }

  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      endpointSecret
    );
  } catch (err) {
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  if (stripeEvent.type === "checkout.session.completed") {
    const session = stripeEvent.data.object;
    const email = session.customer_details?.email;
    const priceId = session.metadata?.price_id;
    const product = PRICE_TO_PRODUCT[priceId];

    if (!email || !product) return { statusCode: 200, body: "No mapping" };

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
