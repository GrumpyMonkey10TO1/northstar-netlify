// check-entitlement.js - Netlify Function
// Checks if a user has active access to a product (evolve, execute, elevate)

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Admin emails that always have access
const ADMIN_EMAILS = [
  'info@migratenorth.ca',
  'ovi@migratenorth.ca',
  'ovimatin@gmail.com',
  'ovi_matin@hotmail.com',
];

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
      body: '',
    };
  }

  try {
    // Get email from query string or body
    let email = event.queryStringParameters?.email;
    let product = event.queryStringParameters?.product || 'evolve';

    // Also check POST body
    if (!email && event.body) {
      try {
        const body = JSON.parse(event.body);
        email = body.email;
        product = body.product || product;
      } catch (e) {}
    }

    if (!email) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Valid email required', hasAccess: false }),
      };
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if admin email
    if (ADMIN_EMAILS.includes(normalizedEmail)) {
      console.log(`Admin access granted for ${normalizedEmail}`);
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hasAccess: true,
          isAdmin: true,
          tiers: ['evolve', 'elevate', 'execute'],
          message: 'Admin access granted',
        }),
      };
    }

    // Query Supabase for active memberships
    let query = supabase
      .from('user_memberships')
      .select('*')
      .eq('email', normalizedEmail)
      .eq('active', true)
      .gt('expires_at', new Date().toISOString());

    // If specific product/tier requested, filter by it
    if (product) {
      query = query.eq('tier', product.toLowerCase());
    }

    const { data: memberships, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Database error', hasAccess: false }),
      };
    }

    const hasAccess = memberships && memberships.length > 0;
    const tiers = memberships?.map((m) => m.tier) || [];

    console.log(
      `Access check for ${normalizedEmail} (${product}): ${hasAccess ? 'GRANTED' : 'DENIED'} - Tiers: ${tiers.join(', ') || 'none'}`
    );

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hasAccess,
        tiers,
        memberships: hasAccess ? memberships : [],
        message: hasAccess ? 'Access granted' : 'No active subscription found',
      }),
    };
  } catch (err) {
    console.error('Error processing request:', err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: err.message, hasAccess: false }),
    };
  }
};
