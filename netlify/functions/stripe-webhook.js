// stripe-webhook.js - Netlify Function
// Handles Stripe webhook events for subscription management

const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Product mapping - maps Stripe product names to entitlements
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
  
  if (!customerEmail) {
    console.error('No customer email found in session');
    return;
  }

  // Get line items to determine what was purchased
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    expand: ['data.price.product'],
  });

  const products = [];
  
  for (const item of lineItems.data) {
    const product = item.price?.product;
    const productName = product?.name || item.description || '';
    
    console.log(`Product purchased: ${productName}`);
    
    // Find matching entitlements
    for (const [key, entitlements] of Object.entries(PRODUCT_MAPPING)) {
      if (productName.toLowerCase().includes(key.toLowerCase()) || 
          key.toLowerCase().includes(productName.toLowerCase())) {
        products.push(...entitlements);
      }
    }
  }

  // Remove duplicates
  const uniqueProducts = [...new Set(products)];
  
  if (uniqueProducts.length === 0) {
    console.log('No matching products found in mapping, checking metadata...');
    if (session.metadata?.products) {
      uniqueProducts.push(...session.metadata.products.split(','));
    }
  }

  console.log(`Granting access to: ${uniqueProducts.join(', ')} for ${customerEmail}`);

  // Calculate expiry (1 year from now)
  const expiresAt = new Date();
  expiresAt.setFullYear(expiresAt.getFullYear() + 1);

  // Create or update entitlements in Supabase
  for (const product of uniqueProducts) {
    await upsertEntitlement(customerEmail, product, session.id, expiresAt);
  }
}

async function handleSubscriptionUpdate(subscription) {
  console.log('Processing subscription update');
  
  // Get customer email
  const customer = await stripe.customers.retrieve(subscription.customer);
  
  if (customer.deleted || !customer.email) {
    console.error('Could not get customer email');
    return;
  }

  const customerEmail = customer.email;
  
  // Get products from subscription items
  const products = [];
  
  for (const item of subscription.items.data) {
    const product = await stripe.products.retrieve(item.price.product);
    const productName = product.name;
    
    for (const [key, entitlements] of Object.entries(PRODUCT_MAPPING)) {
      if (productName.toLowerCase().includes(key.toLowerCase()) ||
          key.toLowerCase().includes(productName.toLowerCase())) {
        products.push(...entitlements);
      }
    }
  }

  const uniqueProducts = [...new Set(products)];
  
  // Update entitlements based on subscription status
  if (subscription.status === 'active' || subscription.status === 'trialing') {
    const expiresAt = new Date(subscription.current_period_end * 1000);
    
    for (const product of uniqueProducts) {
      await upsertEntitlement(customerEmail, product, subscription.id, expiresAt);
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
  
  // Mark entitlements as expired
  const { error } = await supabase
    .from('entitlements')
    .update({ 
      status: 'canceled',
      expires_at: new Date().toISOString()
    })
    .eq('email', customerEmail.toLowerCase())
    .eq('stripe_subscription_id', subscription.id);

  if (error) {
    console.error('Error updating entitlements:', error);
  } else {
    console.log(`Canceled entitlements for ${customerEmail}`);
  }
}

async function handleInvoicePaid(invoice) {
  console.log('Processing invoice.paid');
  
  // This handles subscription renewals
  if (invoice.subscription) {
    const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
    await handleSubscriptionUpdate(subscription);
  }
}

async function upsertEntitlement(email, product, subscriptionId, expiresAt) {
  const normalizedEmail = email.toLowerCase();
  
  // Check if entitlement exists
  const { data: existing } = await supabase
    .from('entitlements')
    .select('id')
    .eq('email', normalizedEmail)
    .eq('product', product)
    .single();

  if (existing) {
    // Update existing entitlement
    const { error } = await supabase
      .from('entitlements')
      .update({
        status: 'active',
        expires_at: expiresAt.toISOString(),
        stripe_subscription_id: subscriptionId,
        updated_at: new Date().toISOString(),
      })
      .eq('id', existing.id);

    if (error) {
      console.error(`Error updating entitlement for ${email}/${product}:`, error);
    } else {
      console.log(`Updated entitlement: ${email} -> ${product}`);
    }
  } else {
    // Create new entitlement
    const { error } = await supabase
      .from('entitlements')
      .insert({
        email: normalizedEmail,
        product: product,
        status: 'active',
        expires_at: expiresAt.toISOString(),
        stripe_subscription_id: subscriptionId,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

    if (error) {
      console.error(`Error creating entitlement for ${email}/${product}:`, error);
    } else {
      console.log(`Created entitlement: ${email} -> ${product}`);
    }
  }
}
