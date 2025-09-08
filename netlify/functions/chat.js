// netlify/functions/chat.js

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://migratenorth.ca", // allow your site
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    },
    body: JSON.stringify({
      ok: true,
      reply: "Chat function alive – your Netlify function is working!"
    })
  };
};

