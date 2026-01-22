import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

function cleanEssayText(text) {
  return text
    .replace(/here is a band \d[^.]*\./gi, '')
    .replace(/this is a band \d[^.]*\./gi, '')
    .replace(/band \d[\-–]\d level[^.]*\./gi, '')
    .replace(/band \d\+? (level )?(response|essay|answer)[^.]*\./gi, '')
    .trim();
}

// BASIC words - if you use lots of these, you're Band 5
const BASIC_WORDS = new Set([
  'good', 'bad', 'very', 'many', 'some', 'thing', 'things', 'lot', 'lots',
  'nice', 'big', 'small', 'people', 'think', 'say', 'said', 'tell', 'told',
  'make', 'made', 'get', 'got', 'use', 'used', 'help', 'helps', 'want',
  'need', 'like', 'also', 'really', 'nowadays', 'always', 'never', 'every',
  'everyone', 'everything', 'something', 'nothing', 'anything', 'someone',
  'important', 'because', 'so', 'but', 'and', 'or', 'if', 'can', 'will',
  'more', 'most', 'better', 'worse', 'best', 'worst', 'easy', 'hard',
  'way', 'ways', 'time', 'times', 'day', 'days', 'year', 'years',
  'first', 'second', 'example', 'opinion', 'believe', 'feel', 'know'
]);

// ONLY linking/transition words count for Band 6 - NOT topic words
const LINKING_WORDS = new Set([
  'however', 'therefore', 'although', 'despite', 'whereas', 'while',
  'furthermore', 'moreover', 'nevertheless', 'consequently', 'hence',
  'thus', 'meanwhile', 'otherwise', 'instead', 'besides', 'nonetheless'
]);

// TRUE Band 7+ vocabulary - sophisticated word choices
const ADVANCED_WORDS = new Set([
  'predominantly', 'substantially', 'inherently', 'fundamentally', 'arguably',
  'compelling', 'detrimental', 'facilitate', 'exacerbate', 'mitigate',
  'unprecedented', 'profound', 'inadequate', 'indispensable', 'inevitable',
  'comprehensive', 'phenomenon', 'implications', 'deterioration', 'proliferation',
  'transformation', 'implementation', 'paradoxically', 'simultaneously',
  'disproportionately', 'unequivocally', 'encompasses', 'undermines',
  'perpetuates', 'exacerbates', 'alleviates', 'culminates', 'epitomizes'
]);

function analyzeVocabulary(text) {
  const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
  const uniqueWords = new Set(words);
  const totalWords = words.length;
  
  let basicCount = 0;
  let linkingCount = 0;
  let advancedCount = 0;
  
  words.forEach(word => {
    if (BASIC_WORDS.has(word)) basicCount++;
    if (LINKING_WORDS.has(word)) linkingCount++;
    if (ADVANCED_WORDS.has(word)) advancedCount++;
  });
  
  return {
    totalWords,
    uniqueWords: uniqueWords.size,
    lexicalDiversity: uniqueWords.size / totalWords,
    basicRatio: basicCount / totalWords,
    linkingCount,
    advancedCount
  };
}

function analyzeSentences(text) {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const totalSentences = sentences.length;
  
  const complexPatterns = [
    /\b(although|though|while|whereas|despite)\b/i,
    /\b(which|who|whom|whose)\s+\w+/i,
    /\b(if|unless|provided that)\b/i,
    /\b(not only|rather than)\b/i,
    /\b(having|being)\s+\w+ed\b/i
  ];
  
  let complexCount = 0;
  sentences.forEach(sentence => {
    if (complexPatterns.some(pattern => pattern.test(sentence))) {
      complexCount++;
    }
  });
  
  return {
    totalSentences,
    complexCount,
    complexRatio: totalSentences > 0 ? complexCount / totalSentences : 0
  };
}

function calculateScores(wordCount, vocab, sentences) {
  // ALL START AT 5.0
  let task = 5.0;
  let coherence = 5.0;
  let lexical = 5.0;
  let grammar = 5.0;
  
  // === TASK - based on word count and basic structure ===
  if (wordCount >= 250) task += 0.5;
  if (wordCount >= 280) task += 0.5;
  if (wordCount < 250) task -= 0.5;
  if (wordCount < 200) task -= 0.5;
  
  // === COHERENCE - based on linking words ===
  if (vocab.linkingCount >= 4) coherence += 1.0;
  else if (vocab.linkingCount >= 2) coherence += 0.5;
  if (vocab.linkingCount === 0) coherence -= 0.5;
  
  // === LEXICAL - THIS IS THE KEY ===
  // High basic ratio = BAD
  if (vocab.basicRatio > 0.25) {
    lexical = 4.5;  // Very basic
  } else if (vocab.basicRatio > 0.20) {
    lexical = 5.0;  // Basic
  } else if (vocab.basicRatio > 0.15) {
    lexical = 5.5;  // Below average
  } else {
    lexical = 6.0;  // Adequate
  }
  
  // Advanced words boost
  if (vocab.advancedCount >= 3) lexical += 1.5;
  else if (vocab.advancedCount >= 1) lexical += 0.5;
  
  // Low diversity penalty
  if (vocab.lexicalDiversity < 0.45) lexical -= 0.5;
  
  // === GRAMMAR - based on sentence complexity ===
  if (sentences.complexRatio >= 0.35) grammar += 1.0;
  else if (sentences.complexRatio >= 0.20) grammar += 0.5;
  else if (sentences.complexRatio < 0.10) grammar -= 0.5;
  
  // === CLAMP ===
  task = Math.max(4.0, Math.min(8.5, Math.round(task * 2) / 2));
  coherence = Math.max(4.0, Math.min(8.5, Math.round(coherence * 2) / 2));
  lexical = Math.max(4.0, Math.min(8.5, Math.round(lexical * 2) / 2));
  grammar = Math.max(4.0, Math.min(8.5, Math.round(grammar * 2) / 2));
  
  const overall = Math.round((task + coherence + lexical + grammar) / 4 * 2) / 2;
  
  return { task, coherence, lexical, grammar, overall };
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  try {
    const { email, testId, prompt, answer, timeSpent, meta } = JSON.parse(event.body || "{}");

    if (!email || !testId || !prompt || !answer) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Missing required fields" })
      };
    }

    const cleanedAnswer = cleanEssayText(answer);
    const wordCount = cleanedAnswer.trim().split(/\s+/).filter(w => w.length > 0).length;
    
    const vocab = analyzeVocabulary(cleanedAnswer);
    const sentences = analyzeSentences(cleanedAnswer);
    const scores = calculateScores(wordCount, vocab, sentences);
    
    console.log("SCORING:", { wordCount, basicRatio: vocab.basicRatio, linkingCount: vocab.linkingCount, advancedCount: vocab.advancedCount, scores });

    // Simple feedback
    let feedback = {
      task: wordCount < 250 ? "Essay is under the minimum word count." : "Essay addresses the topic.",
      coherence: vocab.linkingCount < 2 ? "Use more linking words like 'however', 'therefore'." : "Reasonable use of cohesive devices.",
      lexical: vocab.basicRatio > 0.20 ? "Vocabulary is basic and repetitive. Avoid overusing simple words." : "Adequate vocabulary.",
      grammar: sentences.complexRatio < 0.15 ? "Use more complex sentence structures." : "Mix of sentence types."
    };

    const result = {
      scores,
      task: scores.task,
      coherence: scores.coherence,
      lexical: scores.lexical,
      grammar: scores.grammar,
      overall: scores.overall,
      feedback,
      strengths: ["Attempted the task"],
      improvements: vocab.basicRatio > 0.20 ? ["Reduce basic vocabulary", "Use academic synonyms"] : ["Continue developing ideas"],
      band_summary: `Band ${scores.overall} - ${scores.overall <= 5.5 ? 'Basic writing with limited vocabulary' : 'Adequate writing'}`,
      wordCount,
      testId
    };

    // Save to DB
    try {
      await supabase.from("user_test_results").insert({
        email: email.toLowerCase(),
        product: "evolve",
        test_id: testId,
        test_type: "writing",
        overall: scores.overall,
        task: scores.task,
        coherence: scores.coherence,
        lexical: scores.lexical,
        grammar: scores.grammar,
        feedback: result,
        answer: answer
      });
    } catch (e) { console.log("DB skip:", e.message); }

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(result)
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message })
    };
  }
}
