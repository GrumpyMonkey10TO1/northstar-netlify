import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Strip meta-comments about band levels
function cleanEssayText(text) {
  return text
    .replace(/here is a band \d[^.]*\./gi, '')
    .replace(/this is a band \d[^.]*\./gi, '')
    .replace(/this is (roughly|approximately|about) band \d[^.]*\./gi, '')
    .replace(/band \d[\-–]\d level[^.]*\./gi, '')
    .replace(/band \d\+? (level )?(response|essay|answer)[^.]*\./gi, '')
    .replace(/deliberately weak[^.]*\./gi, '')
    .replace(/failing[- ]level[^.]*\./gi, '')
    .replace(/^\s*below is[^.]*\.\s*/gi, '')
    .trim();
}

// ============ VOCABULARY LISTS ============

const BASIC_WORDS = new Set([
  'good', 'bad', 'very', 'many', 'some', 'thing', 'things', 'lot', 'lots',
  'nice', 'big', 'small', 'important', 'people', 'think', 'say', 'said',
  'make', 'made', 'get', 'got', 'use', 'used', 'help', 'helps', 'want',
  'need', 'like', 'also', 'really', 'nowadays', 'always', 'never',
  'everyone', 'everything', 'something', 'nothing', 'anything'
]);

const BAND6_WORDS = new Set([
  'however', 'therefore', 'although', 'despite', 'whereas', 'while',
  'significant', 'essential', 'crucial', 'effective', 'efficient',
  'advantage', 'disadvantage', 'benefit', 'drawback', 'impact',
  'influence', 'affect', 'improve', 'increase', 'decrease', 'develop',
  'society', 'environment', 'government', 'technology', 'education',
  'opportunity', 'challenge', 'solution', 'problem', 'issue'
]);

const BAND7_WORDS = new Set([
  'furthermore', 'moreover', 'nevertheless', 'consequently', 'subsequently',
  'predominantly', 'substantially', 'inherently', 'fundamentally', 'arguably',
  'compelling', 'detrimental', 'beneficial', 'facilitate', 'exacerbate',
  'mitigate', 'unprecedented', 'contemporary', 'profound', 'substantial',
  'inadequate', 'indispensable', 'inevitable', 'controversial', 'comprehensive',
  'phenomenon', 'perspective', 'implications', 'enhancement', 'deterioration',
  'proliferation', 'transformation', 'implementation', 'predominantly',
  'paradoxically', 'simultaneously', 'disproportionately', 'unequivocally'
]);

// ============ ANALYSIS FUNCTIONS ============

function analyzeVocabulary(text) {
  const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
  const uniqueWords = new Set(words);
  const totalWords = words.length;
  
  let basicCount = 0;
  let band6Count = 0;
  let band7Count = 0;
  
  words.forEach(word => {
    if (BASIC_WORDS.has(word)) basicCount++;
    if (BAND6_WORDS.has(word)) band6Count++;
    if (BAND7_WORDS.has(word)) band7Count++;
  });
  
  return {
    totalWords,
    uniqueWords: uniqueWords.size,
    lexicalDiversity: uniqueWords.size / totalWords,
    basicRatio: basicCount / totalWords,
    band6Count,
    band7Count
  };
}

function analyzeSentences(text) {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const totalSentences = sentences.length;
  
  // Complex structure patterns
  const complexPatterns = [
    /\b(although|though|while|whereas|despite|in spite of)\b/i,
    /\b(however|nevertheless|nonetheless|consequently|therefore|thus)\b/i,
    /\b(which|who|whom|whose)\b/i,
    /\b(if|unless|provided that|as long as|assuming)\b/i,
    /\b(not only|either|neither|whether|rather than)\b/i,
    /\b(having|being|having been)\b/i,
    /\b(in order to|so as to|so that)\b/i
  ];
  
  let complexCount = 0;
  let totalLength = 0;
  
  sentences.forEach(sentence => {
    totalLength += sentence.trim().split(/\s+/).length;
    if (complexPatterns.some(pattern => pattern.test(sentence))) {
      complexCount++;
    }
  });
  
  return {
    totalSentences,
    complexCount,
    complexRatio: complexCount / totalSentences,
    avgLength: totalLength / totalSentences
  };
}

function analyzeStructure(text) {
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0);
  const hasIntro = /\b(nowadays|today|in recent years|it is|there is|some people|many people)\b/i.test(text.substring(0, 200));
  const hasConclusion = /\b(in conclusion|to conclude|to sum up|overall|in summary|therefore)\b/i.test(text.substring(text.length - 300));
  
  return {
    paragraphCount: paragraphs.length,
    hasIntro,
    hasConclusion,
    hasStructure: paragraphs.length >= 3 && hasIntro && hasConclusion
  };
}

// ============ PURE ALGORITHMIC SCORING ============

function calculateScores(wordCount, vocab, sentences, structure) {
  let scores = {
    task: 5.0,
    coherence: 5.0,
    lexical: 5.0,
    grammar: 5.0
  };
  
  // === TASK RESPONSE ===
  // Base: 5.0, can go up based on word count and structure
  if (wordCount >= 250) scores.task += 0.5;
  if (wordCount >= 280) scores.task += 0.5;
  if (structure.hasIntro) scores.task += 0.25;
  if (structure.hasConclusion) scores.task += 0.25;
  if (structure.paragraphCount >= 4) scores.task += 0.5;
  // Penalties
  if (wordCount < 200) scores.task -= 0.5;
  if (wordCount < 250) scores.task -= 0.25;
  
  // === COHERENCE & COHESION ===
  // Base: 5.0
  if (structure.hasStructure) scores.coherence += 1.0;
  if (structure.paragraphCount >= 4) scores.coherence += 0.5;
  if (vocab.band6Count >= 3) scores.coherence += 0.5; // linking words
  // Penalties
  if (structure.paragraphCount < 3) scores.coherence -= 0.5;
  
  // === LEXICAL RESOURCE ===
  // This is the KEY differentiator
  // Base: 5.0
  if (vocab.basicRatio > 0.20) {
    // HIGH basic vocab = Band 5
    scores.lexical = 5.0;
  } else if (vocab.basicRatio > 0.15) {
    scores.lexical = 5.5;
  } else {
    scores.lexical = 6.0;
  }
  
  // Boost for advanced vocab
  if (vocab.band7Count >= 3) scores.lexical += 1.0;
  else if (vocab.band7Count >= 1) scores.lexical += 0.5;
  if (vocab.band6Count >= 5) scores.lexical += 0.5;
  
  // Lexical diversity bonus
  if (vocab.lexicalDiversity > 0.60) scores.lexical += 0.5;
  else if (vocab.lexicalDiversity < 0.45) scores.lexical -= 0.5;
  
  // === GRAMMATICAL RANGE ===
  // Base: 5.0
  if (sentences.complexRatio > 0.40) scores.grammar += 1.5;
  else if (sentences.complexRatio > 0.30) scores.grammar += 1.0;
  else if (sentences.complexRatio > 0.20) scores.grammar += 0.5;
  else if (sentences.complexRatio < 0.10) scores.grammar -= 0.5;
  
  // Sentence variety
  if (sentences.avgLength > 15 && sentences.avgLength < 25) scores.grammar += 0.5;
  
  // === CLAMP ALL SCORES ===
  Object.keys(scores).forEach(key => {
    scores[key] = Math.max(4.0, Math.min(8.5, scores[key]));
    scores[key] = Math.round(scores[key] * 2) / 2; // Round to 0.5
  });
  
  // === OVERALL ===
  scores.overall = Math.round(
    (scores.task + scores.coherence + scores.lexical + scores.grammar) / 4 * 2
  ) / 2;
  
  return scores;
}

// ============ MAIN HANDLER ============

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
    
    // ============ ALGORITHMIC ANALYSIS ============
    const vocab = analyzeVocabulary(cleanedAnswer);
    const sentences = analyzeSentences(cleanedAnswer);
    const structure = analyzeStructure(cleanedAnswer);
    
    // ============ CALCULATE SCORES (NO AI) ============
    const scores = calculateScores(wordCount, vocab, sentences, structure);
    
    console.log("ALGORITHMIC SCORING:", {
      wordCount,
      basicRatio: vocab.basicRatio.toFixed(3),
      band6Count: vocab.band6Count,
      band7Count: vocab.band7Count,
      complexRatio: sentences.complexRatio.toFixed(3),
      scores
    });

    // ============ AI FOR FEEDBACK ONLY ============
    let feedback = {
      task: "Your essay addresses the main topic.",
      coherence: "Basic paragraph structure is present.",
      lexical: vocab.basicRatio > 0.15 
        ? "Vocabulary is basic and repetitive. Use more varied academic words."
        : "Adequate vocabulary range for this level.",
      grammar: sentences.complexRatio < 0.20
        ? "Mostly simple sentences. Practice using subordinate clauses."
        : "Mix of simple and complex sentences."
    };
    
    let strengths = ["Attempted to address both sides of the argument"];
    let improvements = ["Expand vocabulary beyond basic words", "Use more complex sentence structures"];
    let nextFocus = "Build academic vocabulary";
    let bandSummary = `This essay demonstrates Band ${scores.overall} level writing.`;

    // Try to get AI feedback (but scores are LOCKED)
    try {
      const feedbackPrompt = `Analyze this IELTS essay and provide brief feedback. The scores are already determined: Task ${scores.task}, Coherence ${scores.coherence}, Lexical ${scores.lexical}, Grammar ${scores.grammar}.

ESSAY (${wordCount} words):
${cleanedAnswer}

Provide ONLY this JSON (do NOT change the scores):
{
  "feedback": {
    "task": "one sentence on task response",
    "coherence": "one sentence on organization",
    "lexical": "one sentence on vocabulary",
    "grammar": "one sentence on grammar"
  },
  "strengths": ["strength 1", "strength 2"],
  "improvements": ["specific improvement 1", "specific improvement 2"],
  "next_focus": "most important area to practice"
}`;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Provide essay feedback. Do not suggest scores." },
          { role: "user", content: feedbackPrompt }
        ],
        temperature: 0.3,
        max_tokens: 500
      });

      const responseText = completion.choices[0].message.content.trim();
      const jsonText = responseText.replace(/```json\n?|\n?```/g, '').trim();
      const aiFeedback = JSON.parse(jsonText);
      
      if (aiFeedback.feedback) feedback = aiFeedback.feedback;
      if (aiFeedback.strengths) strengths = aiFeedback.strengths;
      if (aiFeedback.improvements) improvements = aiFeedback.improvements;
      if (aiFeedback.next_focus) nextFocus = aiFeedback.next_focus;
    } catch (aiError) {
      console.log("AI feedback failed, using defaults:", aiError.message);
    }

    // ============ BUILD RESULT ============
    const result = {
      scores,
      task: scores.task,
      coherence: scores.coherence,
      lexical: scores.lexical,
      grammar: scores.grammar,
      overall: scores.overall,
      feedback,
      strengths,
      improvements,
      next_focus: nextFocus,
      band_summary: bandSummary,
      wordCount,
      timeSpent: timeSpent || 0,
      testId,
      _debug: {
        basicRatio: vocab.basicRatio,
        band6Count: vocab.band6Count,
        band7Count: vocab.band7Count,
        lexicalDiversity: vocab.lexicalDiversity,
        complexRatio: sentences.complexRatio,
        paragraphs: structure.paragraphCount
      }
    };

    // Save to database
    try {
      await supabase.from("user_test_results").insert({
        email: email.toLowerCase(),
        product: "evolve",
        test_id: testId,
        test_type: meta?.type || "writing",
        level: meta?.level || null,
        overall: scores.overall,
        task: scores.task,
        coherence: scores.coherence,
        lexical: scores.lexical,
        grammar: scores.grammar,
        feedback: result,
        answer: answer
      });
    } catch (dbError) {
      console.log("Database save skipped:", dbError.message);
    }

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(result)
    };

  } catch (err) {
    console.error("Scoring error:", err.message);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Scoring failed: " + err.message })
    };
  }
}
