// =============================================================================
// EVOLVE IELTS WRITING SCORING ENGINE v4.2
// =============================================================================
// FIXED: Lexical scoring completely rewritten
// - Removed function words from basic vocab detection
// - Uses word stems and suffixes for sophisticated vocabulary detection
// - Much smarter vocabulary assessment
// =============================================================================

import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// =============================================================================
// WORD LISTS - COMPLETELY REWRITTEN
// =============================================================================

// WEAK_VOCAB: Only truly weak CONTENT words that indicate limited vocabulary
// NO function words (and, but, if, because, etc.)
const WEAK_VOCAB = new Set([
  // Vague adjectives
  'good', 'bad', 'nice', 'great', 'big', 'small', 'happy', 'sad',
  'interesting', 'boring', 'easy', 'hard', 'important', 'special',
  
  // Overused intensifiers
  'very', 'really', 'extremely', 'totally', 'completely', 'absolutely',
  'definitely', 'certainly', 'surely',
  
  // Vague nouns
  'thing', 'things', 'stuff', 'lot', 'lots', 'kind', 'kinds',
  
  // Overused/simple verbs when better exists
  'get', 'got', 'getting', 'make', 'made', 'making',
  'think', 'thinking', 'feel', 'feeling', 'want', 'wanting',
  'like', 'liking', 'need', 'needing',
  
  // Filler expressions
  'nowadays', 'maybe', 'probably', 'actually', 'basically', 'literally'
]);

// LINKING_WORDS: Cohesive devices (neutral - neither weak nor strong)
const LINKING_WORDS = new Set([
  'however', 'therefore', 'although', 'despite', 'whereas', 'while',
  'furthermore', 'moreover', 'nevertheless', 'consequently', 'hence',
  'thus', 'meanwhile', 'otherwise', 'instead', 'besides', 'nonetheless',
  'additionally', 'similarly', 'conversely', 'subsequently', 'accordingly',
  'notwithstanding', 'alternatively', 'correspondingly'
]);

// Academic word STEMS - if a word contains these, it's likely sophisticated
const ACADEMIC_STEMS = [
  'analy', 'assess', 'signific', 'substant', 'comprehen', 'fundament',
  'phenomen', 'implement', 'perspect', 'transform', 'establish', 'demonstr',
  'contribut', 'facilitat', 'exacerbat', 'mitigat', 'alleviat', 'perpetuat',
  'innovat', 'collabor', 'incorporat', 'integrat', 'differenti', 'distinguish',
  'evalu', 'investig', 'determin', 'identif', 'recogn', 'perceiv',
  'interpret', 'conclud', 'implic', 'indicat', 'suggest', 'demonstrat',
  'illustrat', 'emphasiz', 'emphasise', 'highlight', 'undermin', 'examin',
  'scrutin', 'critic', 'advocat', 'propos', 'argu', 'contend', 'assert',
  'maintain', 'sustain', 'acknowledg', 'valid', 'legitim', 'justif',
  'rational', 'logic', 'systemat', 'method', 'approach', 'strateg',
  'techni', 'mechan', 'process', 'procedure', 'protocol',
  'pedagog', 'cognit', 'psycholog', 'sociolog', 'econom', 'polit',
  'environ', 'technolog', 'scientif', 'academ', 'theoret', 'empiric',
  'quantit', 'qualit', 'statist', 'hypothe', 'evidenc',
  'consequen', 'implicat', 'ramificat', 'repercuss', 'outcom',
  'benefit', 'detriment', 'advantag', 'disadvantag',
  'prevalent', 'pervasiv', 'widespr', 'ubiquit', 'predomin',
  'unprecedented', 'extraordin', 'remarkab', 'notabl', 'strikin',
  'contempor', 'tradition', 'convention', 'innovat', 'revolution',
  'effici', 'effect', 'product', 'optim', 'maxim', 'minim',
  'adequat', 'insuffici', 'defici', 'excess', 'surplus',
  'divers', 'vari', 'hetero', 'homo', 'uniform',
  'complex', 'sophistic', 'intric', 'nuanc', 'subtl',
  'profound', 'superfic', 'thorough', 'comprehens', 'extens',
  'restrict', 'constrain', 'limit', 'bound', 'confin',
  'expand', 'extend', 'broaden', 'widen', 'enhanc', 'augment',
  'diminish', 'decreas', 'reduc', 'declin', 'deteriorat',
  'increas', 'escal', 'intensif', 'amplif', 'magnif',
  'stabil', 'fluctuat', 'volatil', 'consist', 'persist',
  'tempor', 'perman', 'transit', 'interim', 'prolonge'
];

// Academic SUFFIXES that indicate sophisticated vocabulary
const ACADEMIC_SUFFIXES = [
  'tion', 'sion', 'ment', 'ness', 'ity', 'ism', 'ist',
  'ical', 'ious', 'eous', 'ive', 'ative', 'itive',
  'able', 'ible', 'ful', 'less', 'ous', 'al', 'ial',
  'ence', 'ance', 'ency', 'ancy', 'ure', 'ology', 'ological'
];

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
// VOCABULARY ANALYSIS - COMPLETELY REWRITTEN
// =============================================================================

function analyzeVocabulary(text) {
  const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
  const wordCount = words.length;
  
  // Filter to content words only (4+ letters, not common function words)
  const functionWords = new Set([
    'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
    'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'shall', 'can', 'need', 'dare',
    'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by', 'from', 'as',
    'into', 'through', 'during', 'before', 'after', 'above', 'below',
    'between', 'under', 'again', 'further', 'then', 'once', 'here', 'there',
    'when', 'where', 'why', 'how', 'all', 'each', 'every', 'both', 'few',
    'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only',
    'own', 'same', 'so', 'than', 'too', 'very', 'just', 'also',
    'and', 'but', 'or', 'if', 'because', 'although', 'while', 'that',
    'this', 'these', 'those', 'it', 'its', 'they', 'their', 'them',
    'he', 'she', 'his', 'her', 'him', 'we', 'us', 'our', 'you', 'your',
    'who', 'whom', 'which', 'what', 'whose', 'whoever', 'whatever'
  ]);
  
  const contentWords = words.filter(w => w.length >= 4 && !functionWords.has(w));
  const uniqueContentWords = new Set(contentWords);
  
  // Count weak vocabulary
  let weakCount = 0;
  contentWords.forEach(word => {
    if (WEAK_VOCAB.has(word)) weakCount++;
  });
  
  // Count sophisticated vocabulary using stems and suffixes
  let sophisticatedCount = 0;
  const sophisticatedWordsFound = [];
  
  contentWords.forEach(word => {
    if (word.length < 6) return; // Short words rarely academic
    
    // Check if word contains academic stem
    const hasStem = ACADEMIC_STEMS.some(stem => word.includes(stem));
    
    // Check if word has academic suffix
    const hasSuffix = ACADEMIC_SUFFIXES.some(suffix => word.endsWith(suffix));
    
    // Word is sophisticated if it has a stem OR (has suffix AND is long enough)
    if (hasStem || (hasSuffix && word.length >= 7)) {
      sophisticatedCount++;
      if (!sophisticatedWordsFound.includes(word) && sophisticatedWordsFound.length < 20) {
        sophisticatedWordsFound.push(word);
      }
    }
  });
  
  // Calculate ratios based on CONTENT words, not all words
  const weakRatio = contentWords.length > 0 ? weakCount / contentWords.length : 0;
  const sophisticatedRatio = contentWords.length > 0 ? sophisticatedCount / contentWords.length : 0;
  
  // Calculate repetition on content words
  const repetitionRate = contentWords.length > 0 
    ? 1 - (uniqueContentWords.size / contentWords.length) 
    : 0;
  
  // Average word length (longer = more academic)
  const avgWordLength = contentWords.length > 0 
    ? contentWords.reduce((sum, w) => sum + w.length, 0) / contentWords.length 
    : 0;
  
  console.log('=== VOCABULARY ANALYSIS ===');
  console.log('Content words:', contentWords.length);
  console.log('Weak count:', weakCount, 'ratio:', weakRatio.toFixed(3));
  console.log('Sophisticated count:', sophisticatedCount, 'ratio:', sophisticatedRatio.toFixed(3));
  console.log('Sophisticated words found:', sophisticatedWordsFound.slice(0, 10));
  console.log('Avg word length:', avgWordLength.toFixed(2));
  console.log('Repetition rate:', repetitionRate.toFixed(3));
  
  return {
    wordCount,
    contentWordCount: contentWords.length,
    weakCount,
    weakRatio,
    sophisticatedCount,
    sophisticatedRatio,
    sophisticatedWordsFound,
    repetitionRate,
    avgWordLength,
    uniqueContentWords: uniqueContentWords.size
  };
}

// =============================================================================
// FEATURE EXTRACTION
// =============================================================================

function extractFeatures(text) {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0);
  
  const vocab = analyzeVocabulary(text);
  
  const sentenceCount = sentences.length;
  const paragraphCount = paragraphs.length;
  
  // Complex sentence detection
  const complexPatterns = [
    /\b(although|though|while|whereas|despite|in spite of|notwithstanding)\b/i,
    /\b(which|who|whom|whose)\s+\w+/i,
    /\b(if|unless|provided that|assuming that|given that)\b/i,
    /\b(not only|rather than|whether|whereby)\b/i,
    /\b(having|being)\s+\w+ed\b/i,
    /\b(consequently|therefore|thus|hence|accordingly|furthermore|moreover)\b/i,
    /\b(in order to|so as to|such that)\b/i
  ];
  
  let complexSentenceCount = 0;
  sentences.forEach(sentence => {
    if (complexPatterns.some(pattern => pattern.test(sentence))) {
      complexSentenceCount++;
    }
  });
  const complexSentenceRatio = sentenceCount > 0 ? complexSentenceCount / sentenceCount : 0;
  
  // Position detection - expanded
  const positionIndicators = /\b(i believe|in my opinion|i think|i agree|i disagree|from my perspective|in my view|i strongly believe|i am convinced|it is my belief|i would argue|it can be argued|this essay will|i contend|it seems|one could argue|it is evident|it appears)\b/i;
  const hasPosition = positionIndicators.test(text);
  
  // Implicit thesis detection
  const thesisIndicators = /\b(suggests that|indicates that|demonstrates that|reveals that|is best understood as|should be viewed as|can be seen as|represents a|serves as)\b/i;
  const hasImplicitPosition = thesisIndicators.test(text);
  
  // Linking words count
  const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
  let linkingCount = 0;
  words.forEach(word => {
    if (LINKING_WORDS.has(word)) linkingCount++;
  });
  
  // Error estimation
  const errorPatterns = [
    /\s(a)\s+[aeiou]/gi,
    /\bhe\s+have\b/gi, /\bshe\s+have\b/gi, /\bit\s+have\b/gi,
    /\bthey\s+has\b/gi, /\bi\s+has\b/gi,
    /\bmore\s+\w+er\b/gi, /\bmost\s+\w+est\b/gi,
  ];
  
  let errorCount = 0;
  sentences.forEach(sentence => {
    errorPatterns.forEach(pattern => {
      const matches = sentence.match(pattern);
      if (matches) errorCount += matches.length;
    });
  });
  
  const errorFreeSentenceRatio = sentenceCount > 0 
    ? Math.max(0.3, Math.min(0.95, 1 - (errorCount * 1.5 / sentenceCount))) 
    : 0.5;
  
  // Ideas extended
  const extensionIndicators = /\b(because|therefore|as a result|for example|for instance|this means|consequently|thus|hence|such as|specifically|in particular|namely|to illustrate|this suggests|this indicates|this demonstrates)\b/gi;
  const extensionMatches = text.match(extensionIndicators) || [];
  const ideasExtended = extensionMatches.length >= 3;
  
  const mainIdeasCount = Math.max(0, paragraphCount - 2);
  
  return {
    wordCount: vocab.wordCount,
    sentenceCount,
    paragraphCount,
    
    positionPresent: hasPosition || hasImplicitPosition,
    positionClear: (hasPosition || hasImplicitPosition) && paragraphCount >= 3,
    ideasExtended,
    mainIdeasCount,
    
    linkingCount,
    
    // Vocabulary metrics
    weakVocabRatio: vocab.weakRatio,
    sophisticatedCount: vocab.sophisticatedCount,
    sophisticatedRatio: vocab.sophisticatedRatio,
    sophisticatedWords: vocab.sophisticatedWordsFound,
    repetitionRate: vocab.repetitionRate,
    avgWordLength: vocab.avgWordLength,
    
    // Grammar metrics
    complexSentenceRatio,
    errorFreeSentenceRatio,
    estimatedErrors: errorCount
  };
}

// =============================================================================
// LAYER 0: BAND 6 ELIGIBILITY GATE
// =============================================================================

function checkBand6Eligibility(features) {
  const failures = [];
  
  if (!features.positionPresent && features.paragraphCount < 3) {
    failures.push('No clear position and poor structure');
  }
  if (features.paragraphCount < 2) {
    failures.push('Fewer than 2 paragraphs');
  }
  if (features.repetitionRate > 0.35) {
    failures.push('Vocabulary extremely repetitive');
  }
  if (features.weakVocabRatio > 0.40) {
    failures.push('Vocabulary extremely limited');
  }
  if (features.errorFreeSentenceRatio < 0.20) {
    failures.push('Persistent sentence-level errors');
  }
  if (features.wordCount < 150) {
    failures.push('Severely under word count');
  }
  
  return { eligible: failures.length === 0, failures };
}

// =============================================================================
// LAYER 1: HARD CAPS
// =============================================================================

function applyHardCaps(features) {
  const caps = { task: 9.0, coherence: 9.0, lexical: 9.0, grammar: 9.0 };
  const capReasons = { task: [], coherence: [], lexical: [], grammar: [] };
  
  // TASK CAPS
  if (!features.positionClear) {
    caps.task = Math.min(caps.task, 6.5);
    capReasons.task.push('Position could be clearer');
  }
  if (!features.ideasExtended && features.wordCount < 280) {
    caps.task = Math.min(caps.task, 6.5);
    capReasons.task.push('Ideas could be more extended');
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
  }
  if (features.linkingCount === 0) {
    caps.coherence = Math.min(caps.coherence, 5.5);
    capReasons.coherence.push('No cohesive devices');
  } else if (features.linkingCount < 2) {
    caps.coherence = Math.min(caps.coherence, 6.5);
    capReasons.coherence.push('Limited cohesive devices');
  }
  
  // LEXICAL CAPS - Now based on weak vocab, not basic vocab
  if (features.weakVocabRatio > 0.30) {
    caps.lexical = Math.min(caps.lexical, 5.5);
    capReasons.lexical.push('Over-reliance on weak vocabulary');
  } else if (features.weakVocabRatio > 0.20 && features.sophisticatedCount < 5) {
    caps.lexical = Math.min(caps.lexical, 6.5);
    capReasons.lexical.push('Limited sophisticated vocabulary');
  }
  
  if (features.repetitionRate > 0.25) {
    caps.lexical = Math.min(caps.lexical, 5.5);
    capReasons.lexical.push('Significant word repetition');
  } else if (features.repetitionRate > 0.18) {
    caps.lexical = Math.min(caps.lexical, 6.5);
    capReasons.lexical.push('Noticeable repetition');
  }
  
  // GRAMMAR CAPS
  if (features.errorFreeSentenceRatio < 0.35) {
    caps.grammar = Math.min(caps.grammar, 5.5);
    capReasons.grammar.push('Frequent errors');
  } else if (features.errorFreeSentenceRatio < 0.45) {
    caps.grammar = Math.min(caps.grammar, 6.0);
    capReasons.grammar.push('Multiple errors');
  } else if (features.errorFreeSentenceRatio < 0.55) {
    caps.grammar = Math.min(caps.grammar, 6.5);
    capReasons.grammar.push('Some errors');
  }
  
  if (features.complexSentenceRatio < 0.10) {
    caps.grammar = Math.min(caps.grammar, 6.0);
    capReasons.grammar.push('Limited sentence variety');
  }
  
  return { caps, capReasons };
}

// =============================================================================
// LAYER 2: BAND CALIBRATION - REWRITTEN LEXICAL SCORING
// =============================================================================

function computeRawBands(features) {
  const scores = { task: 6.0, coherence: 6.0, lexical: 6.0, grammar: 6.0 };
  
  // TASK RESPONSE
  if (features.positionClear && features.ideasExtended && features.mainIdeasCount >= 2 && features.wordCount >= 300) {
    scores.task = 8.0;
  } else if (features.positionClear && features.ideasExtended && features.mainIdeasCount >= 2) {
    scores.task = 7.5;
  } else if (features.positionPresent && features.ideasExtended) {
    scores.task = 7.0;
  } else if (features.positionPresent && features.mainIdeasCount >= 1) {
    scores.task = 6.0;
  } else {
    scores.task = 5.5;
  }
  
  // COHERENCE
  if (features.paragraphCount >= 4 && features.linkingCount >= 6) {
    scores.coherence = 8.0;
  } else if (features.paragraphCount >= 4 && features.linkingCount >= 4) {
    scores.coherence = 7.5;
  } else if (features.paragraphCount >= 3 && features.linkingCount >= 3) {
    scores.coherence = 7.0;
  } else if (features.paragraphCount >= 3 && features.linkingCount >= 2) {
    scores.coherence = 6.0;
  } else {
    scores.coherence = 5.5;
  }
  
  // LEXICAL - COMPLETELY REWRITTEN
  // Based on: sophisticated vocabulary ratio, average word length, low weak vocab, low repetition
  
  const lexicalScore = calculateLexicalScore(features);
  scores.lexical = lexicalScore;
  
  // GRAMMAR
  if (features.errorFreeSentenceRatio >= 0.80 && features.complexSentenceRatio >= 0.40) {
    scores.grammar = 8.0;
  } else if (features.errorFreeSentenceRatio >= 0.70 && features.complexSentenceRatio >= 0.30) {
    scores.grammar = 7.5;
  } else if (features.errorFreeSentenceRatio >= 0.60 && features.complexSentenceRatio >= 0.20) {
    scores.grammar = 7.0;
  } else if (features.errorFreeSentenceRatio >= 0.50 && features.complexSentenceRatio >= 0.10) {
    scores.grammar = 6.0;
  } else {
    scores.grammar = 5.5;
  }
  
  return scores;
}

function calculateLexicalScore(features) {
  // Start with base score of 6.0
  let score = 6.0;
  
  // BOOST for sophisticated vocabulary (up to +2.0)
  if (features.sophisticatedRatio >= 0.25) {
    score += 2.0;
  } else if (features.sophisticatedRatio >= 0.18) {
    score += 1.5;
  } else if (features.sophisticatedRatio >= 0.12) {
    score += 1.0;
  } else if (features.sophisticatedRatio >= 0.08) {
    score += 0.5;
  }
  
  // BOOST for average word length (longer words = more academic)
  if (features.avgWordLength >= 7.0) {
    score += 0.5;
  } else if (features.avgWordLength >= 6.5) {
    score += 0.25;
  }
  
  // PENALTY for weak vocabulary
  if (features.weakVocabRatio > 0.25) {
    score -= 1.5;
  } else if (features.weakVocabRatio > 0.18) {
    score -= 1.0;
  } else if (features.weakVocabRatio > 0.12) {
    score -= 0.5;
  }
  
  // PENALTY for repetition
  if (features.repetitionRate > 0.20) {
    score -= 1.0;
  } else if (features.repetitionRate > 0.15) {
    score -= 0.5;
  }
  
  // Clamp to valid range
  score = Math.max(4.0, Math.min(9.0, score));
  
  // Round to nearest 0.5
  score = Math.round(score * 2) / 2;
  
  console.log('=== LEXICAL SCORE CALCULATION ===');
  console.log('Sophisticated ratio:', features.sophisticatedRatio.toFixed(3), '→ boost:', features.sophisticatedRatio >= 0.25 ? 2.0 : features.sophisticatedRatio >= 0.18 ? 1.5 : features.sophisticatedRatio >= 0.12 ? 1.0 : features.sophisticatedRatio >= 0.08 ? 0.5 : 0);
  console.log('Weak vocab ratio:', features.weakVocabRatio.toFixed(3), '→ penalty:', features.weakVocabRatio > 0.25 ? -1.5 : features.weakVocabRatio > 0.18 ? -1.0 : features.weakVocabRatio > 0.12 ? -0.5 : 0);
  console.log('Final lexical score:', score);
  
  return score;
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
  if (scores.task >= 8.0) exp.task = 'The response presents a fully developed position with well-supported ideas throughout.';
  else if (scores.task >= 7.5) exp.task = 'The response presents a clear, well-developed position with extended ideas.';
  else if (scores.task >= 7.0) exp.task = 'The response addresses all parts of the task with ideas that are extended and supported.';
  else if (capReasons.task.length > 0) exp.task = 'The response presents relevant ideas. ' + capReasons.task[0] + '.';
  else exp.task = 'The response addresses the task, though some aspects could be more fully developed.';
  
  // Coherence
  if (scores.coherence >= 8.0) exp.coherence = 'Ideas are skilfully organised with seamless progression and cohesion.';
  else if (scores.coherence >= 7.5) exp.coherence = 'Information is logically organised with clear progression and effective cohesion.';
  else if (scores.coherence >= 7.0) exp.coherence = 'There is clear progression throughout with appropriate use of cohesive devices.';
  else if (capReasons.coherence.length > 0) exp.coherence = 'Organisation is present. ' + capReasons.coherence[0] + '.';
  else exp.coherence = 'There is a clear structure, though cohesion could be more skilful.';
  
  // Lexical
  if (scores.lexical >= 8.0) exp.lexical = 'A wide range of vocabulary is used with precision, sophistication, and natural control.';
  else if (scores.lexical >= 7.5) exp.lexical = 'A wide range of vocabulary is used with flexibility and precision.';
  else if (scores.lexical >= 7.0) exp.lexical = 'Sufficient vocabulary range with generally accurate and appropriate word choice.';
  else if (capReasons.lexical.length > 0) exp.lexical = 'Vocabulary is adequate. ' + capReasons.lexical[0] + '.';
  else exp.lexical = 'Vocabulary is adequate for the task with some imprecision.';
  
  // Grammar
  if (scores.grammar >= 8.0) exp.grammar = 'A wide range of structures is used accurately with only rare minor errors.';
  else if (scores.grammar >= 7.5) exp.grammar = 'A wide range of structures is used accurately with only occasional errors.';
  else if (scores.grammar >= 7.0) exp.grammar = 'A range of sentence structures is used with good control.';
  else if (capReasons.grammar.length > 0) exp.grammar = 'Grammar shows some control. ' + capReasons.grammar[0] + '.';
  else exp.grammar = 'A mix of structures is used with some errors that do not impede communication.';
  
  return exp;
}

function generateStrengths(scores, features) {
  const strengths = [];
  if (scores.task >= 7.0) strengths.push('Clear position with well-developed arguments');
  else if (features.positionPresent) strengths.push('Position is stated');
  if (scores.coherence >= 7.0) strengths.push('Logical organisation with effective cohesion');
  else if (features.paragraphCount >= 3) strengths.push('Clear paragraph structure');
  if (scores.lexical >= 7.0) strengths.push('Good range of vocabulary with sophisticated word choice');
  else if (features.sophisticatedCount >= 5) strengths.push('Uses some sophisticated vocabulary');
  if (scores.grammar >= 7.0) strengths.push('Good grammatical control with complex structures');
  else if (features.complexSentenceRatio >= 0.20) strengths.push('Uses complex sentence structures');
  if (strengths.length === 0) strengths.push('Attempted the task');
  return strengths.slice(0, 3);
}

function generateImprovements(scores, features, capReasons) {
  const improvements = [];
  if (scores.task < 7.0) {
    if (features.wordCount < 250) improvements.push('Write at least 250 words to fully develop your ideas');
    else if (!features.ideasExtended) improvements.push('Extend each idea with examples, reasons, or consequences');
  }
  if (scores.coherence < 7.0 && features.linkingCount < 3) {
    improvements.push('Use more cohesive devices (however, therefore, although)');
  }
  if (scores.lexical < 7.0) {
    if (features.weakVocabRatio > 0.15) improvements.push('Replace weak words (good, bad, very, thing) with precise alternatives');
    if (features.repetitionRate > 0.12) improvements.push('Avoid repeating the same words - use synonyms');
  }
  if (scores.grammar < 7.0 && features.complexSentenceRatio < 0.20) {
    improvements.push('Include more complex sentences with subordinate clauses');
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
  console.log('=== SCORING ENGINE v4.2 ===');
  
  const cleanedEssay = cleanEssayText(essay);
  const features = extractFeatures(cleanedEssay);
  
  console.log('Word count:', features.wordCount);
  console.log('Sophisticated words:', features.sophisticatedWords?.slice(0, 8));
  console.log('Position present:', features.positionPresent);
  
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
        isLowerBand: result.isLowerBand,
        sophisticatedCount: result.features.sophisticatedCount,
        sophisticatedRatio: result.features.sophisticatedRatio?.toFixed(3),
        weakVocabRatio: result.features.weakVocabRatio?.toFixed(3),
        sophisticatedWords: result.features.sophisticatedWords?.slice(0, 10)
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
