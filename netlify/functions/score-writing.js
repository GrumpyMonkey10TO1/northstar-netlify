// =============================================================================
// EVOLVE IELTS WRITING SCORING ENGINE v4.0
// =============================================================================
// Three-layer architecture: Eligibility Gate → Hard Caps → Band Calibration
// Integrated with existing Supabase and OpenAI infrastructure
// =============================================================================

import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// =============================================================================
// WORD LISTS
// =============================================================================

const BASIC_WORDS = new Set([
  'good', 'bad', 'very', 'many', 'some', 'thing', 'things', 'lot', 'lots',
  'nice', 'big', 'small', 'people', 'think', 'say', 'said', 'tell', 'told',
  'make', 'made', 'get', 'got', 'use', 'used', 'help', 'helps', 'want',
  'need', 'like', 'also', 'really', 'nowadays', 'always', 'never', 'every',
  'everyone', 'everything', 'something', 'nothing', 'anything', 'someone',
  'important', 'because', 'so', 'but', 'and', 'or', 'if', 'can', 'will',
  'more', 'most', 'better', 'worse', 'best', 'worst', 'easy', 'hard',
  'way', 'ways', 'time', 'times', 'day', 'days', 'year', 'years',
  'first', 'second', 'example', 'opinion', 'believe', 'feel', 'know',
  'stuff', 'kind', 'kinds', 'great', 'problem', 'problems'
]);

const LINKING_WORDS = new Set([
  'however', 'therefore', 'although', 'despite', 'whereas', 'while',
  'furthermore', 'moreover', 'nevertheless', 'consequently', 'hence',
  'thus', 'meanwhile', 'otherwise', 'instead', 'besides', 'nonetheless',
  'additionally', 'similarly', 'conversely', 'subsequently', 'accordingly'
]);

const ADVANCED_WORDS = new Set([
  'predominantly', 'substantially', 'inherently', 'fundamentally', 'arguably',
  'compelling', 'detrimental', 'facilitate', 'exacerbate', 'mitigate',
  'unprecedented', 'profound', 'inadequate', 'indispensable', 'inevitable',
  'comprehensive', 'phenomenon', 'implications', 'deterioration', 'proliferation',
  'transformation', 'implementation', 'paradoxically', 'simultaneously',
  'disproportionately', 'unequivocally', 'encompasses', 'undermines',
  'perpetuates', 'alleviates', 'culminates', 'epitomizes', 'scrutinize',
  'acknowledge', 'advocate', 'allocate', 'beneficial', 'counterproductive'
]);

// =============================================================================
// TEXT CLEANING
// =============================================================================

function cleanEssayText(text) {
  return text
    .replace(/here is a band \d[^.]*\./gi, '')
    .replace(/this is a band \d[^.]*\./gi, '')
    .replace(/band \d[\-–]\d level[^.]*\./gi, '')
    .replace(/band \d\+? (level )?(response|essay|answer)[^.]*\./gi, '')
    .replace(/^\s*here is my essay[:\s]*/gi, '')
    .replace(/^\s*my essay[:\s]*/gi, '')
    .replace(/^\s*essay[:\s]*/gi, '')
    .trim();
}

// =============================================================================
// FEATURE EXTRACTION
// =============================================================================

function extractFeatures(text) {
  const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0);
  
  const wordCount = words.length;
  const sentenceCount = sentences.length;
  const paragraphCount = paragraphs.length;
  
  // Content words for repetition
  const contentWords = words.filter(w => 
    w.length > 3 && 
    !['this', 'that', 'with', 'from', 'have', 'been', 'will', 'would', 'could', 'should', 'their', 'there', 'these', 'those', 'about', 'which', 'being'].includes(w)
  );
  const uniqueContentWords = new Set(contentWords);
  const repetitionRate = contentWords.length > 0 ? 1 - (uniqueContentWords.size / contentWords.length) : 0;
  
  // Vocabulary counts
  let basicCount = 0, linkingCount = 0, advancedCount = 0;
  words.forEach(word => {
    if (BASIC_WORDS.has(word)) basicCount++;
    if (LINKING_WORDS.has(word)) linkingCount++;
    if (ADVANCED_WORDS.has(word)) advancedCount++;
  });
  
  const basicVocabRatio = wordCount > 0 ? basicCount / wordCount : 0;
  const uniqueWords = new Set(words);
  const lexicalDiversity = wordCount > 0 ? uniqueWords.size / wordCount : 0;
  
  // Complex sentence detection
  const complexPatterns = [
    /\b(although|though|while|whereas|despite|in spite of)\b/i,
    /\b(which|who|whom|whose)\s+\w+/i,
    /\b(if|unless|provided that|assuming that)\b/i,
    /\b(not only|rather than|whether)\b/i,
    /\b(having|being)\s+\w+ed\b/i,
    /\b(consequently|therefore|thus|hence|accordingly)\b/i
  ];
  
  let complexSentenceCount = 0;
  sentences.forEach(sentence => {
    if (complexPatterns.some(pattern => pattern.test(sentence))) {
      complexSentenceCount++;
    }
  });
  const complexSentenceRatio = sentenceCount > 0 ? complexSentenceCount / sentenceCount : 0;
  
  // Position detection
  const positionIndicators = /\b(i believe|in my opinion|i think|i agree|i disagree|from my perspective|in my view|i strongly believe|i am convinced|it is my belief)\b/i;
  const hasPosition = positionIndicators.test(text);
  
  // Paragraph purpose
  const paragraphPurposeClear = paragraphs.length >= 3 && paragraphs.slice(1, -1).every(p => {
    const firstSentence = p.split(/[.!?]/)[0];
    return firstSentence && firstSentence.trim().length > 20;
  });
  
  // Error estimation
  const errorPatterns = [
    /\s(a)\s+[aeiou]/gi,
    /\bhe\s+have\b/gi, /\bshe\s+have\b/gi, /\bit\s+have\b/gi,
    /\bthey\s+has\b/gi, /\bi\s+has\b/gi,
    /\bmore\s+\w+er\b/gi, /\bmost\s+\w+est\b/gi,
    /\bdoesn't\s+\w+s\b/gi, /\bdon't\s+\w+s\b/gi
  ];
  
  let errorCount = 0;
  sentences.forEach(sentence => {
    errorPatterns.forEach(pattern => {
      const matches = sentence.match(pattern);
      if (matches) errorCount += matches.length;
    });
  });
  
  const errorFreeSentenceRatio = sentenceCount > 0 
    ? Math.max(0.2, Math.min(0.9, 1 - (errorCount / sentenceCount))) 
    : 0.5;
  
  // Ideas extended
  const extensionIndicators = /\b(because|therefore|as a result|for example|for instance|this means|consequently|thus|hence|such as|specifically)\b/gi;
  const extensionMatches = text.match(extensionIndicators) || [];
  const ideasExtended = extensionMatches.length >= 2;
  
  const mainIdeasCount = Math.max(0, paragraphCount - 2);
  
  return {
    wordCount, sentenceCount, paragraphCount,
    positionPresent: hasPosition,
    positionClear: hasPosition && paragraphCount >= 3,
    ideasExtended, mainIdeasCount,
    paragraphPurposeClear, linkingCount,
    mechanicalLinking: linkingCount > 0 && linkingCount === new Set(words.filter(w => LINKING_WORDS.has(w))).size,
    repetitionRate, basicVocabRatio, advancedCount, lexicalDiversity,
    complexSentenceRatio, errorFreeSentenceRatio, estimatedErrors: errorCount
  };
}

// =============================================================================
// LAYER 0: BAND 6 ELIGIBILITY GATE
// =============================================================================

function checkBand6Eligibility(features) {
  const failures = [];
  
  if (!features.positionPresent) failures.push('No clear position stated');
  if (features.paragraphCount < 3) failures.push('Fewer than 3 paragraphs');
  if (features.repetitionRate > 0.25) failures.push('Vocabulary extremely repetitive');
  if (features.basicVocabRatio > 0.30) failures.push('Vocabulary extremely basic');
  if (features.errorFreeSentenceRatio < 0.25) failures.push('Persistent sentence-level errors');
  if (features.wordCount < 150) failures.push('Severely under word count');
  
  return { eligible: failures.length === 0, failures };
}

// =============================================================================
// LAYER 1: HARD CAPS
// =============================================================================

function applyHardCaps(features) {
  const caps = { task: 9.0, coherence: 9.0, lexical: 9.0, grammar: 9.0 };
  const capReasons = { task: [], coherence: [], lexical: [], grammar: [] };
  
  // TASK RESPONSE CAPS
  if (!features.positionClear) {
    caps.task = Math.min(caps.task, 6.0);
    capReasons.task.push('Position unclear');
  }
  if (!features.ideasExtended) {
    caps.task = Math.min(caps.task, 6.5);
    capReasons.task.push('Ideas not extended');
  }
  if (features.wordCount < 200) {
    caps.task = Math.min(caps.task, 5.5);
    capReasons.task.push('Significantly under word count');
  } else if (features.wordCount < 250) {
    caps.task = Math.min(caps.task, 6.5);
    capReasons.task.push('Under word count');
  }
  
  // COHERENCE CAPS
  if (features.paragraphCount < 3) {
    caps.coherence = Math.min(caps.coherence, 5.5);
    capReasons.coherence.push('Insufficient paragraphs');
  } else if (!features.paragraphPurposeClear) {
    caps.coherence = Math.min(caps.coherence, 6.0);
    capReasons.coherence.push('Paragraph purpose unclear');
  }
  if (features.linkingCount === 0) {
    caps.coherence = Math.min(caps.coherence, 5.5);
    capReasons.coherence.push('No cohesive devices');
  } else if (features.linkingCount < 2) {
    caps.coherence = Math.min(caps.coherence, 6.0);
    capReasons.coherence.push('Limited cohesive devices');
  }
  
  // LEXICAL CAPS
  if (features.basicVocabRatio > 0.25) {
    caps.lexical = Math.min(caps.lexical, 5.5);
    capReasons.lexical.push('Over-reliance on basic vocabulary');
  } else if (features.basicVocabRatio > 0.20) {
    caps.lexical = Math.min(caps.lexical, 6.0);
    capReasons.lexical.push('High basic vocabulary ratio');
  } else if (features.basicVocabRatio > 0.15) {
    caps.lexical = Math.min(caps.lexical, 6.5);
    capReasons.lexical.push('Basic vocabulary present');
  }
  
  if (features.repetitionRate > 0.15) {
    caps.lexical = Math.min(caps.lexical, 5.5);
    capReasons.lexical.push('Significant repetition');
  } else if (features.repetitionRate > 0.10) {
    caps.lexical = Math.min(caps.lexical, 6.5);
    capReasons.lexical.push('Noticeable repetition');
  }
  
  // GRAMMAR CAPS
  if (features.errorFreeSentenceRatio < 0.40) {
    caps.grammar = Math.min(caps.grammar, 5.5);
    capReasons.grammar.push('Frequent errors');
  } else if (features.errorFreeSentenceRatio < 0.50) {
    caps.grammar = Math.min(caps.grammar, 6.0);
    capReasons.grammar.push('Multiple errors');
  } else if (features.errorFreeSentenceRatio < 0.60) {
    caps.grammar = Math.min(caps.grammar, 6.5);
    capReasons.grammar.push('Some errors');
  }
  
  if (features.complexSentenceRatio < 0.15) {
    caps.grammar = Math.min(caps.grammar, 6.0);
    capReasons.grammar.push('Limited sentence variety');
  }
  
  return { caps, capReasons };
}

// =============================================================================
// LAYER 2: BAND CALIBRATION
// =============================================================================

function computeRawBands(features) {
  const scores = { task: 6.0, coherence: 6.0, lexical: 6.0, grammar: 6.0 };
  
  // TASK RESPONSE
  if (features.positionClear && features.ideasExtended && features.mainIdeasCount >= 2 && features.wordCount >= 280) {
    scores.task = 7.5;
  } else if (features.positionClear && features.ideasExtended && features.mainIdeasCount >= 2) {
    scores.task = 7.0;
  } else if (features.positionPresent && features.mainIdeasCount >= 1) {
    scores.task = 6.0;
  } else {
    scores.task = 5.5;
  }
  
  // COHERENCE
  if (features.paragraphCount >= 4 && features.paragraphPurposeClear && features.linkingCount >= 5) {
    scores.coherence = 7.5;
  } else if (features.paragraphCount >= 4 && features.linkingCount >= 4) {
    scores.coherence = 7.0;
  } else if (features.paragraphCount >= 3 && features.linkingCount >= 2) {
    scores.coherence = 6.0;
  } else {
    scores.coherence = 5.5;
  }
  
  // LEXICAL
  if (features.repetitionRate < 0.06 && features.advancedCount >= 5 && features.basicVocabRatio < 0.10) {
    scores.lexical = 8.0;
  } else if (features.repetitionRate < 0.08 && features.advancedCount >= 3 && features.basicVocabRatio < 0.12) {
    scores.lexical = 7.5;
  } else if (features.repetitionRate < 0.10 && features.advancedCount >= 1 && features.basicVocabRatio < 0.15) {
    scores.lexical = 7.0;
  } else if (features.repetitionRate < 0.14 && features.basicVocabRatio < 0.20) {
    scores.lexical = 6.0;
  } else {
    scores.lexical = 5.5;
  }
  
  // GRAMMAR
  if (features.errorFreeSentenceRatio >= 0.75 && features.complexSentenceRatio >= 0.45) {
    scores.grammar = 8.0;
  } else if (features.errorFreeSentenceRatio >= 0.65 && features.complexSentenceRatio >= 0.35) {
    scores.grammar = 7.5;
  } else if (features.errorFreeSentenceRatio >= 0.55 && features.complexSentenceRatio >= 0.25) {
    scores.grammar = 7.0;
  } else if (features.errorFreeSentenceRatio >= 0.45 && features.complexSentenceRatio >= 0.15) {
    scores.grammar = 6.0;
  } else {
    scores.grammar = 5.5;
  }
  
  return scores;
}

function applyBandCaps(rawScores, caps) {
  return {
    task: Math.min(rawScores.task, caps.task),
    coherence: Math.min(rawScores.coherence, caps.coherence),
    lexical: Math.min(rawScores.lexical, caps.lexical),
    grammar: Math.min(rawScores.grammar, caps.grammar)
  };
}

// =============================================================================
// LOWER-BAND SCORING (4.0 - 5.5)
// =============================================================================

function computeLowerBandScores(features, failures) {
  let base = 5.0;
  
  if (failures.length >= 4 || features.wordCount < 100) base = 4.0;
  else if (failures.length >= 3 || features.wordCount < 150) base = 4.5;
  else if (failures.length >= 2) base = 5.0;
  else base = 5.5;
  
  return { task: base, coherence: base, lexical: base, grammar: base };
}

// =============================================================================
// EXPLANATION GENERATION
// =============================================================================

function generateExplanations(scores, features, capReasons, isLowerBand) {
  const exp = { task: '', coherence: '', lexical: '', grammar: '' };
  
  if (isLowerBand) {
    exp.task = scores.task <= 4.5 
      ? 'The response does not effectively address the task.' 
      : 'The response partially addresses the task but ideas lack development.';
    exp.coherence = 'Organisation is limited and ideas lack clear progression.';
    exp.lexical = 'Vocabulary is limited and errors reduce clarity.';
    exp.grammar = 'Grammatical errors are frequent and impede communication.';
    return exp;
  }
  
  // Task
  if (scores.task >= 7.5) exp.task = 'The response presents a clear, well-developed position with extended ideas.';
  else if (scores.task >= 7.0) exp.task = 'The response addresses all parts of the task with ideas that are extended and supported.';
  else if (capReasons.task.length > 0) exp.task = 'The response presents relevant ideas, but they are not sufficiently developed. ' + capReasons.task[0] + '.';
  else exp.task = 'The response addresses the task, though some aspects could be more fully developed.';
  
  // Coherence
  if (scores.coherence >= 7.5) exp.coherence = 'Information is logically organised with clear progression and effective cohesion.';
  else if (scores.coherence >= 7.0) exp.coherence = 'There is clear progression throughout with appropriate use of cohesive devices.';
  else if (capReasons.coherence.length > 0) exp.coherence = 'Organisation is present but could be clearer. ' + capReasons.coherence[0] + '.';
  else exp.coherence = 'There is a clear structure, though cohesion could be more skilful.';
  
  // Lexical
  if (scores.lexical >= 7.5) exp.lexical = 'A wide range of vocabulary is used with precision and sophistication.';
  else if (scores.lexical >= 7.0) exp.lexical = 'Sufficient vocabulary range with generally accurate word choice.';
  else if (capReasons.lexical.length > 0) exp.lexical = 'Vocabulary is adequate but ' + capReasons.lexical[0].toLowerCase() + '.';
  else exp.lexical = 'Vocabulary is adequate for the task with some imprecision.';
  
  // Grammar
  if (scores.grammar >= 7.5) exp.grammar = 'A wide range of structures is used accurately with only rare errors.';
  else if (scores.grammar >= 7.0) exp.grammar = 'A range of sentence structures is used with good control.';
  else if (capReasons.grammar.length > 0) exp.grammar = 'Grammar shows some control but ' + capReasons.grammar[0].toLowerCase() + '.';
  else exp.grammar = 'A mix of structures is used with some errors that do not impede communication.';
  
  return exp;
}

function generateStrengths(scores, features) {
  const strengths = [];
  if (scores.task >= 7.0) strengths.push('Clear position with developed arguments');
  else if (features.positionPresent) strengths.push('Position is stated');
  if (scores.coherence >= 7.0) strengths.push('Logical organisation with good cohesion');
  else if (features.paragraphCount >= 3) strengths.push('Basic paragraph structure present');
  if (scores.lexical >= 7.0) strengths.push('Good vocabulary range');
  else if (features.advancedCount >= 1) strengths.push('Some sophisticated vocabulary used');
  if (scores.grammar >= 7.0) strengths.push('Good grammatical control');
  else if (features.complexSentenceRatio >= 0.20) strengths.push('Attempts complex sentences');
  if (strengths.length === 0) strengths.push('Attempted the task');
  return strengths.slice(0, 3);
}

function generateImprovements(scores, features, capReasons) {
  const improvements = [];
  if (scores.task < 7.0) {
    if (features.wordCount < 250) improvements.push('Write at least 250 words to fully develop your ideas');
    else if (!features.ideasExtended) improvements.push('Extend each idea with examples, reasons, or consequences');
  }
  if (scores.coherence < 7.0) {
    if (features.linkingCount < 3) improvements.push('Use more cohesive devices (however, therefore, although)');
    if (!features.paragraphPurposeClear) improvements.push('Start each body paragraph with a clear topic sentence');
  }
  if (scores.lexical < 7.0) {
    if (features.basicVocabRatio > 0.15) improvements.push('Replace basic words (good, bad, very) with precise alternatives');
    if (features.repetitionRate > 0.10) improvements.push('Avoid repeating the same words - use synonyms');
  }
  if (scores.grammar < 7.0) {
    if (features.complexSentenceRatio < 0.25) improvements.push('Include more complex sentences with subordinate clauses');
    if (features.errorFreeSentenceRatio < 0.60) improvements.push('Focus on accuracy - proofread for subject-verb agreement');
  }
  if (improvements.length === 0) improvements.push('Continue refining precision and sophistication');
  return improvements.slice(0, 3);
}

function generateTips(overall) {
  if (overall < 5.5) return [
    'Focus on understanding the task and stating a clear position',
    'Practice writing complete, accurate sentences',
    'Learn basic paragraph structure: introduction, body, conclusion'
  ];
  if (overall < 6.5) return [
    'Develop each idea with specific examples and explanations',
    'Vary your vocabulary - avoid repeating the same words',
    'Use a mix of simple and complex sentence structures'
  ];
  return [
    'Refine your examples to be more specific and detailed',
    'Work on seamless cohesion without obvious linking phrases',
    'Proofread carefully for minor errors'
  ];
}

function getBandSummary(overall) {
  if (overall >= 8.0) return 'Very Good User - Handles complex language with rare errors';
  if (overall >= 7.0) return 'Good User - Generally effective command with occasional inaccuracies';
  if (overall >= 6.0) return 'Competent User - Generally effective despite some errors';
  if (overall >= 5.0) return 'Modest User - Partial command with frequent errors';
  return 'Limited User - Basic command only';
}

// =============================================================================
// MAIN SCORING FUNCTION
// =============================================================================

function scoreEssay(prompt, essay) {
  console.log('=== SCORING ENGINE v4.0 ===');
  
  const cleanedEssay = cleanEssayText(essay);
  const features = extractFeatures(cleanedEssay);
  
  console.log('Word count:', features.wordCount);
  console.log('Basic ratio:', features.basicVocabRatio.toFixed(3));
  console.log('Repetition:', features.repetitionRate.toFixed(3));
  console.log('Complex ratio:', features.complexSentenceRatio.toFixed(3));
  
  const eligibility = checkBand6Eligibility(features);
  console.log('Band 6 eligible:', eligibility.eligible, 'Failures:', eligibility.failures);
  
  let finalScores, explanations;
  let capReasons = { task: [], coherence: [], lexical: [], grammar: [] };
  let isLowerBand = false;
  
  if (!eligibility.eligible) {
    isLowerBand = true;
    finalScores = computeLowerBandScores(features, eligibility.failures);
    explanations = generateExplanations(finalScores, features, capReasons, true);
    console.log('Lower-band scores:', finalScores);
  } else {
    const capsResult = applyHardCaps(features);
    capReasons = capsResult.capReasons;
    console.log('Caps:', capsResult.caps);
    
    const rawScores = computeRawBands(features);
    console.log('Raw scores:', rawScores);
    
    finalScores = applyBandCaps(rawScores, capsResult.caps);
    console.log('Final scores:', finalScores);
    
    explanations = generateExplanations(finalScores, features, capReasons, false);
  }
  
  const avg = (finalScores.task + finalScores.coherence + finalScores.lexical + finalScores.grammar) / 4;
  const overall = Math.round(avg * 2) / 2;
  
  return { scores: finalScores, overall, explanations, features, eligibility, capReasons, isLowerBand };
}

// =============================================================================
// NETLIFY HANDLER
// =============================================================================

export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };
  
  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  
  try {
    const { email, testId, prompt, answer, timeSpent, meta } = JSON.parse(event.body || "{}");
    
    if (!email || !testId || !answer) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing required fields" }) };
    }
    
    if (answer.trim().split(/\s+/).length < 20) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Essay too short (minimum 20 words)" }) };
    }
    
    const taskPrompt = prompt || "Discuss the advantages and disadvantages of the given topic.";
    const result = scoreEssay(taskPrompt, answer);
    
    const response = {
      task: result.scores.task,
      coherence: result.scores.coherence,
      lexical: result.scores.lexical,
      grammar: result.scores.grammar,
      overall: result.overall,
      scores: result.scores,
      feedback: result.explanations,
      band_summary: getBandSummary(result.overall),
      strengths: generateStrengths(result.scores, result.features),
      improvements: generateImprovements(result.scores, result.features, result.capReasons),
      tips: generateTips(result.overall),
      wordCount: result.features.wordCount,
      testId,
      _debug: {
        eligible: result.eligibility.eligible,
        eligibilityFailures: result.eligibility.failures,
        capReasons: result.capReasons,
        isLowerBand: result.isLowerBand
      }
    };
    
    console.log('Final overall:', response.overall);
    
    try {
      await supabase.from("user_test_results").insert({
        email: email.toLowerCase(),
        product: "evolve",
        test_id: testId,
        test_type: meta?.type || "writing",
        overall: result.overall,
        task: result.scores.task,
        coherence: result.scores.coherence,
        lexical: result.scores.lexical,
        grammar: result.scores.grammar,
        feedback: response,
        answer: answer
      });
    } catch (dbError) {
      console.log("DB save skipped:", dbError.message);
    }
    
    return { statusCode: 200, headers, body: JSON.stringify(response) };
  } catch (error) {
    console.error("Scoring error:", error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
  }
}
