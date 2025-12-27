import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const config = {
  bodyParser: false
};

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

export async function handler(event) {
  const sig = event.headers["stripe-signature"];

  const endpointSecret =
    event.headers["stripe-live-mode"] === "true"
      ? process.env.STRIPE_WEBHOOK_SECRET
      : process.env.STRIPE_WEBHOOK_SECRET_TEST;

  let stripeEvent;
  try {
    const rawBody = Buffer.from(event.body, "utf8");
    stripeEvent = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  const obj = stripeEvent.data.object;

  if (stripeEvent.type === "checkout.session.completed") {
    const email = obj.customer_details?.email || obj.customer_email;
    const priceId = obj.metadata?.price_id || obj.line_items?.data?.[0]?.price?.id;
    const tier = PRICE_TO_PRODUCT[priceId] || obj.metadata?.product || "unknown";

    console.log("Checkout completed:", { email, tier, priceId });

    if (email && tier !== "unknown") {
      const { error } = await supabase.from("user_memberships").upsert({
        email: email.toLowerCase(),
        tier: tier,
        active: true,
        stripe_customer_id: obj.customer,
        stripe_subscription_id: obj.subscription,
        created_at: new Date().toISOString()
      }, { onConflict: 'email' });

      if (error) console.error("Supabase upsert error:", error);
      else console.log("Membership created/updated for:", email);
    }
  }

  if (stripeEvent.type === "customer.subscription.deleted") {
    await supabase.from("user_memberships").update({ active: false }).eq("stripe_subscription_id", obj.id);
  }

  if (stripeEvent.type === "customer.subscription.updated") {
    const isActive = obj.status === "active" || obj.status === "trialing";
    await supabase.from("user_memberships").update({ active: isActive }).eq("stripe_subscription_id", obj.id);
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
}
