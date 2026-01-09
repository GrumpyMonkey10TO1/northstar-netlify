// stripe-webhook.js - Netlify Function
// Handles Stripe webhook events for subscription management
// Phase 2.5-2.6: Now syncs to BOTH user_memberships AND profiles tables

const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Product mapping - maps Stripe product names to tier values
const PRODUCT_MAPPING = {
  // Individual products
  "Language Training Unlocked": ["evolve"],
  "Licensing Support Unlocked": ["elevate"],
  "Immigration Pathway Unlocked": ["execute"],
  "Evolve": ["evolve"],
  "Elevate": ["elevate"],
  "Execute": ["execute"],
  
  // Bundles
  "Nurse Success Pack": ["evolve", "elevate"],
  "Skilled Worker Pack": ["evolve", "execute"],
  "Complete Migration Pack": ["elevate", "execute"],
  "All Access Pack": ["evolve", "elevate", "execute"],
};

// Helper function to safely create expiry date
function getExpiryDate(subscription) {
  // Try to use current_period_end from subscription
  if (subscription?.current_period_end) {
    const date = new Date(subscription.current_period_end * 1000);
    if (!isNaN(date.getTime())) {
      return date;
    }
  }
  
  // Fallback: 1 year from now
  console.log('Using fallback expiry date (1 year from now)');
  const fallback = new Date();
  fallback.setFullYear(fallback.getFullYear() + 1);
  return fallback;
}

exports.handler = async (event) => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set');
    return { statusCode: 500, body: 'Webhook secret not configured' };
  }

  const signature = event.headers['stripe-signature'];
  
  if (!signature) {
    console.error('No stripe-signature header found');
    return { statusCode: 400, body: 'No signature' };
  }

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      signature,
      webhookSecret
    );
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  console.log(`Received event: ${stripeEvent.type}`);

  // Handle the event
  try {
    switch (stripeEvent.type) {
      case 'checkout.session.completed': {
        const session = stripeEvent.data.object;
        await handleCheckoutComplete(session);
        break;
      }
      
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = stripeEvent.data.object;
        await handleSubscriptionUpdate(subscription);
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = stripeEvent.data.object;
        await handleSubscriptionCanceled(subscription);
        break;
      }
      
      case 'invoice.paid': {
        const invoice = stripeEvent.data.object;
        await handleInvoicePaid(invoice);
        break;
      }
      
      default:
        console.log(`Unhandled event type: ${stripeEvent.type}`);
    }
  } catch (err) {
    console.error(`Error processing event: ${err.message}`);
    console.error(err.stack);
    return { statusCode: 500, body: `Processing error: ${err.message}` };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};

async function handleCheckoutComplete(session) {
  console.log('Processing checkout.session.completed');
  
  const customerEmail = session.customer_email || session.customer_details?.email;
  const stripeCustomerId = session.customer;
  
  if (!customerEmail) {
    console.error('No customer email found in session');
    return;
  }

  // Get line items to determine what was purchased
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    expand: ['data.price.product'],
  });

  const tiers = [];
  
  for (const item of lineItems.data) {
    const product = item.price?.product;
    const productName = product?.name || item.description || '';
    
    console.log(`Product purchased: ${productName}`);
    
    // Find matching tiers
    for (const [key, tierList] of Object.entries(PRODUCT_MAPPING)) {
      if (productName.toLowerCase().includes(key.toLowerCase()) || 
          key.toLowerCase().includes(productName.toLowerCase())) {
        tiers.push(...tierList);
      }
    }
  }

  // Remove duplicates
  const uniqueTiers = [...new Set(tiers)];
  
  if (uniqueTiers.length === 0) {
    console.log('No matching products found in mapping, checking metadata...');
    if (session.metadata?.products) {
      uniqueTiers.push(...session.metadata.products.split(','));
    }
  }

  console.log(`Granting access to tiers: ${uniqueTiers.join(', ')} for ${customerEmail}`);

  // Calculate expiry (1 year from now)
  const expiresAt = new Date();
  expiresAt.setFullYear(expiresAt.getFullYear() + 1);

  // Create or update memberships in Supabase (user_memberships table)
  for (const tier of uniqueTiers) {
    await upsertMembership(customerEmail, tier, session.id, expiresAt, stripeCustomerId);
  }

  // ==============================================================================
  // PHASE 2.5-2.6: Also update the profiles table
  // ==============================================================================
  await syncProfileTier(customerEmail, uniqueTiers, 'active');
}

async function handleSubscriptionUpdate(subscription) {
  console.log('Processing subscription update');
  console.log(`Subscription ID: ${subscription.id}, Status: ${subscription.status}`);
  
  // Get customer email
  const customer = await stripe.customers.retrieve(subscription.customer);
  
  if (customer.deleted || !customer.email) {
    console.error('Could not get customer email');
    return;
  }

  const customerEmail = customer.email;
  const stripeCustomerId = subscription.customer;
  
  console.log(`Customer: ${customerEmail}`);
  
  // Get products from subscription items
  const tiers = [];
  
  for (const item of subscription.items.data) {
    const product = await stripe.products.retrieve(item.price.product);
    const productName = product.name;
    
    console.log(`Processing product: ${productName}`);
    
    for (const [key, tierList] of Object.entries(PRODUCT_MAPPING)) {
      if (productName.toLowerCase().includes(key.toLowerCase()) ||
          key.toLowerCase().includes(productName.toLowerCase())) {
        tiers.push(...tierList);
      }
    }
  }

  const uniqueTiers = [...new Set(tiers)];
  console.log(`Matched tiers: ${uniqueTiers.join(', ') || 'none'}`);
  
  // Update memberships based on subscription status
  if (subscription.status === 'active' || subscription.status === 'trialing') {
    // Safely get expiry date with fallback
    const expiresAt = getExpiryDate(subscription);
    console.log(`Expiry date: ${expiresAt.toISOString()}`);
    
    for (const tier of uniqueTiers) {
      await upsertMembership(customerEmail, tier, subscription.id, expiresAt, stripeCustomerId);
    }

    // ==============================================================================
    // PHASE 2.5-2.6: Also update the profiles table
    // ==============================================================================
    await syncProfileTier(customerEmail, uniqueTiers, 'active');
  } else {
    console.log(`Subscription status is ${subscription.status}, not granting access`);
    
    // If subscription is not active, mark profile as inactive
    if (subscription.status === 'canceled' || subscription.status === 'unpaid' || subscription.status === 'past_due') {
      await syncProfileTier(customerEmail, [], 'inactive');
    }
  }
}

async function handleSubscriptionCanceled(subscription) {
  console.log('Processing subscription cancellation');
  
  const customer = await stripe.customers.retrieve(subscription.customer);
  
  if (customer.deleted || !customer.email) {
    console.error('Could not get customer email');
    return;
  }

  const customerEmail = customer.email;
  
  // Mark memberships as inactive in user_memberships
  const { error } = await supabase
    .from('user_memberships')
    .update({ 
      active: false,
      expires_at: new Date().toISOString()
    })
    .eq('email', customerEmail.toLowerCase())
    .eq('stripe_subscription_id', subscription.id);

  if (error) {
    console.error('Error updating memberships:', error);
  } else {
    console.log(`Canceled memberships for ${customerEmail}`);
  }

  // ==============================================================================
  // PHASE 2.5-2.6: Also update the profiles table
  // ==============================================================================
  await syncProfileTier(customerEmail, [], 'canceled');
}

async function handleInvoicePaid(invoice) {
  console.log('Processing invoice.paid');
  
  // This handles subscription renewals
  if (invoice.subscription) {
    const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
    await handleSubscriptionUpdate(subscription);
  }
}

async function upsertMembership(email, tier, subscriptionId, expiresAt, stripeCustomerId) {
  const normalizedEmail = email.toLowerCase();
  
  // Validate expiresAt before using
  if (!expiresAt || isNaN(expiresAt.getTime())) {
    console.error('Invalid expiresAt date, using fallback');
    expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);
  }
  
  // Check if membership exists
  const { data: existing } = await supabase
    .from('user_memberships')
    .select('id')
    .eq('email', normalizedEmail)
    .eq('tier', tier)
    .single();

  if (existing) {
    // Update existing membership
    const { error } = await supabase
      .from('user_memberships')
      .update({
        active: true,
        expires_at: expiresAt.toISOString(),
        stripe_subscription_id: subscriptionId,
        stripe_customer_id: stripeCustomerId,
      })
      .eq('id', existing.id);

    if (error) {
      console.error(`Error updating membership for ${email}/${tier}:`, error);
    } else {
      console.log(`Updated membership: ${email} -> ${tier}`);
    }
  } else {
    // Create new membership
    const { error } = await supabase
      .from('user_memberships')
      .insert({
        email: normalizedEmail,
        tier: tier,
        active: true,
        expires_at: expiresAt.toISOString(),
        stripe_subscription_id: subscriptionId,
        stripe_customer_id: stripeCustomerId,
        created_at: new Date().toISOString(),
      });

    if (error) {
      console.error(`Error creating membership for ${email}/${tier}:`, error);
    } else {
      console.log(`Created membership: ${email} -> ${tier}`);
    }
  }
}

// ==============================================================================
// PHASE 2.5-2.6: Sync tier info to profiles table
// ==============================================================================

/**
 * Updates the profiles table with tier information
 * This connects Stripe subscriptions to the funnel system
 * 
 * @param {string} email - Customer email
 * @param {string[]} tiers - Array of tier names (e.g., ['evolve', 'execute'])
 * @param {string} status - 'active', 'inactive', or 'canceled'
 */
async function syncProfileTier(email, tiers, status) {
  const normalizedEmail = email.toLowerCase();
  
  console.log(`Syncing profile tier for ${normalizedEmail}: tiers=${tiers.join(',') || 'none'}, status=${status}`);

  // Find the profile by email (profiles are linked to auth.users which have email)
  // First, try to find user_id from auth metadata or existing profile
  const { data: existingProfile, error: findError } = await supabase
    .from('profiles')
    .select('user_id, email')
    .or(`email.eq.${normalizedEmail}`)
    .maybeSingle();

  // If no profile found by email column, try to find via auth.users
  let userId = existingProfile?.user_id;
  
  if (!userId) {
    // Look up user by email in auth.users (via service key)
    const { data: authData } = await supabase.auth.admin.listUsers();
    const authUser = authData?.users?.find(u => u.email?.toLowerCase() === normalizedEmail);
    userId = authUser?.id;
  }

  if (!userId) {
    console.log(`No profile found for email ${normalizedEmail} - user may not have logged in yet`);
    // Store this info somewhere so it can be applied when they do log in
    // For now, we'll just log it
    return;
  }

  // Determine the primary tier (highest value tier)
  // Priority: execute > elevate > evolve
  let activeTier = null;
  if (tiers.includes('execute')) {
    activeTier = 'execute';
  } else if (tiers.includes('elevate')) {
    activeTier = 'elevate';
  } else if (tiers.includes('evolve')) {
    activeTier = 'evolve';
  }

  // Determine funnel state and tier status
  let funnelState = 'diagnosed'; // Default if canceling
  let tierStatus = status;
  
  if (status === 'active' && activeTier) {
    funnelState = 'subscribed';
    tierStatus = 'active';
  } else if (status === 'canceled' || status === 'inactive') {
    funnelState = 'considering'; // They had a subscription but it's no longer active
    tierStatus = 'inactive';
    activeTier = null; // Clear the active tier
  }

  // Update the profile
  const updateData = {
    active_tier: activeTier,
    tier_status: tierStatus,
    funnel_state: funnelState,
    updated_at: new Date().toISOString(),
  };

  // If they have multiple tiers (bundle), store them all
  if (tiers.length > 0) {
    updateData.all_tiers = tiers.join(',');
  }

  const { error: updateError } = await supabase
    .from('profiles')
    .update(updateData)
    .eq('user_id', userId);

  if (updateError) {
    console.error(`Error syncing profile tier for ${normalizedEmail}:`, updateError);
  } else {
    console.log(`Profile synced: ${normalizedEmail} -> active_tier=${activeTier}, funnel_state=${funnelState}`);
  }
}
