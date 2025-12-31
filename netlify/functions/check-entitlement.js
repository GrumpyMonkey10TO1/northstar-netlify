// check-entitlement.js - Netlify Function
// Checks if a user has active access to a product (evolve, execute, elevate)

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      },
      body: ''
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
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          hasAccess: false, 
          error: 'Email is required' 
        })
      };
    }

    // Normalize email
    email = email.toLowerCase().trim();

    // Query user_memberships table
    // Check for:
    // 1. Exact tier match (e.g., 'evolve')
    // 2. 'full' tier (has access to everything)
    // 3. active = true
    // 4. expires_at is null OR expires_at > now
    const { data, error } = await supabase
      .from('user_memberships')
      .select('id, tier, active, expires_at, email')
      .eq('email', email)
      .eq('active', true)
      .or(`tier.eq.${product},tier.eq.full`);

    if (error) {
      console.error('Supabase error:', error);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          hasAccess: false, 
          error: 'Database error' 
        })
      };
    }

    // Check if any valid membership found
    let hasAccess = false;
    let membership = null;

    if (data && data.length > 0) {
      // Check expiration for each membership
      const now = new Date();
      
      for (const row of data) {
        // If no expiration set, or expiration is in the future
        if (!row.expires_at || new Date(row.expires_at) > now) {
          hasAccess = true;
          membership = {
            tier: row.tier,
            expires_at: row.expires_at
          };
          break;
        }
      }
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hasAccess,
        email,
        product,
        membership
      })
    };

  } catch (err) {
    console.error('Handler error:', err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        hasAccess: false, 
        error: 'Server error' 
      })
    };
  }
};
