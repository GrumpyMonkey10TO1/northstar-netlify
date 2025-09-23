// netlify/utils/chunker.js
function chunkResponse(text) {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const chunks = [];
  let current = [];

  sentences.forEach(sentence => {
    current.push(sentence);
    if (current.length >= 3) { // group 3 sentences at a time
      chunks.push(current.join(" "));
      current = [];
    }
  });

  if (current.length > 0) {
    chunks.push(current.join(" "));
  }

  return chunks.map((chunk, i) =>
    i < chunks.length - 1
      ? `${chunk}\n\nWould you like me to continue?`
      : chunk
  );
}

module.exports = { chunkResponse };
