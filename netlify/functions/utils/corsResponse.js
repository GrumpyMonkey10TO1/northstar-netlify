// utils/corsResponse.js
export function withCORS(handler) {
  return async (event, context) => {
    // Handle preflight (OPTIONS) requests
    if (event.httpMethod === "OPTIONS") {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://migratenorth.ca",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Max-Age": "86400"
        },
        body: ""
      };
    }

    // Call the wrapped function
    const response = await handler(event, context);

    // Add CORS headers to its response
    return {
      ...response,
      headers: {
        ...(response.headers || {}),
        "Access-Control-Allow-Origin": "https://migratenorth.ca",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400"
      }
    };
  };
}
