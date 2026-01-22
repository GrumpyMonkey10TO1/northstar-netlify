// =============================================================================
// EVOLVE IELTS WRITING SCORING ENGINE v5.2
// =============================================================================
// CHANGES FROM v5.1:
// - Wider scoring range (less compression toward middle)
// - Trust overall_impression more heavily
// - Explicit grammar error penalty
// - Stricter calibration prompt
// =============================================================================

import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// =============================================================================
// CALIBRATION ESSAYS - REAL BAND ANCHORS
// =============================================================================

const BAND_5_EXAMPLE = `Technology is very important in our life today. Many people use technology every day. Some people think technology is good for education and some people think it is bad.

First, technology help students to learn. They can use internet to find information. Also they can watch videos to understand things better. This is good because books are sometimes boring.

Second, technology is bad because students play games. They spend too much time on phone. They don't study. This is a problem for many students.

In my opinion, technology is good and bad. We should use it carefully. Parents should control children use of technology. Teachers should also help students.

In conclusion, technology has advantages and disadvantages. We need to use it in a good way.`;

const BAND_6_5_EXAMPLE = `The increasing use of technology in education has sparked considerable debate. While some argue that digital tools enhance learning, others contend that they create unnecessary distractions. This essay will examine both perspectives before presenting my own view.

On the one hand, technology offers numerous educational benefits. Students can access a wealth of information online, enabling them to research topics in greater depth than traditional textbooks allow. Furthermore, educational applications and videos can explain complex concepts in engaging ways, catering to different learning styles. For instance, visual learners may benefit from animated explanations of scientific processes.

On the other hand, critics argue that technology introduces significant distractions. Social media and games compete for students' attention, potentially reducing their focus on academic work. Additionally, excessive screen time may have negative effects on concentration and sleep patterns, which could ultimately impact academic performance.

In my opinion, the benefits of educational technology outweigh its drawbacks when properly managed. Schools should implement clear guidelines for device usage and teach students to use technology responsibly. With appropriate supervision, digital tools can significantly enhance the learning experience.

In conclusion, while technology presents challenges in educational settings, its potential benefits make it a valuable resource when used appropriately.`;

const BAND_8_EXAMPLE = `The integration of technology into educational environments has fundamentally transformed how knowledge is acquired and disseminated. While proponents emphasize its capacity to democratize learning, critics raise legitimate concerns about its potential to undermine sustained concentration. This essay will analyze both perspectives before arguing that technology's benefits can be maximized through thoughtful implementation.

Those who advocate for educational technology point to its unprecedented ability to personalize learning experiences. Adaptive software can identify individual students' strengths and weaknesses, tailoring content accordingly—a level of customization impossible in traditional classroom settings. Moreover, technology dissolves geographical barriers, enabling students in remote areas to access world-class educational resources. The Khan Academy, for instance, has provided free, high-quality instruction to millions who would otherwise lack such opportunities.

Conversely, skeptics highlight technology's propensity to fragment attention. Research by cognitive scientists suggests that the constant notifications and hyperlinked nature of digital content may impair the deep reading skills essential for academic success. Furthermore, the algorithmic curation of content risks creating intellectual echo chambers, potentially limiting exposure to diverse perspectives crucial for critical thinking development.

Nevertheless, I contend that these drawbacks reflect implementation failures rather than inherent flaws in educational technology. Schools that establish clear protocols for device usage and incorporate digital literacy into their curricula have demonstrated that technology can enhance rather than diminish educational outcomes. Singapore's systematic integration of technology into its education system, consistently ranked among the world's best, exemplifies this approach.

In conclusion, while legitimate concerns about educational technology exist, they can be addressed through deliberate policy choices. The question is not whether to incorporate technology, but how to do so in ways that amplify its benefits while mitigating its risks.`;

// =============================================================================
// AI FEATURE EXTRACTION WITH STRICTER CALIBRATION
// =============================================================================

async function extractFeaturesWithAI(prompt, essay) {
  const wordCount = essay.trim().split(/\s+/).length;
  const paragraphs = essay.split(/\n\n+/).filter(p => p.trim().length > 0);
  const sentences = essay.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  const extractionPrompt = `You are a STRICT IELTS examiner. Compare this essay against three calibrated examples and assess it honestly.

=== BAND 5.0 EXAMPLE (Modest - frequent errors, basic vocabulary) ===
"""
${BAND_5_EXAMPLE}
"""
CHARACTERISTICS: Subject-verb errors ("technology help"), basic vocabulary ("very important", "good", "bad"), fence-sitting position ("good and bad"), generic ideas, simple sentences only.

---

=== BAND 6.5 EXAMPLE (Competent - some errors, adequate vocabulary) ===
"""
${BAND_6_5_EXAMPLE}
"""
CHARACTERISTICS: Clear position, adequate vocabulary ("considerable debate", "contend", "catering to"), mostly accurate grammar, some complex sentences, examples present but could be more specific.

---

=== BAND 8.0 EXAMPLE (Very Good - rare errors, sophisticated vocabulary) ===
"""
${BAND_8_EXAMPLE}
"""
CHARACTERISTICS: Sophisticated thesis, advanced vocabulary ("democratize", "disseminated", "propensity", "algorithmic curation"), complex structures used naturally, specific real-world examples (Khan Academy, Singapore), nuanced argument.

=== STUDENT ESSAY TO ASSESS ===

TASK: "${prompt}"

ESSAY (${wordCount} words):
"""
${essay}
"""

=== YOUR ASSESSMENT ===

Compare this essay to the examples. Be STRICT:
- Band 5 or below: Multiple grammar errors per paragraph, basic vocabulary throughout, unclear or fence-sitting position
- Band 6-6.5: Some errors, adequate vocabulary, clear position but generic development
- Band 7-7.5: Few errors, good vocabulary range, well-developed with some specific examples
- Band 8+: Rare errors, sophisticated vocabulary used naturally, specific examples, nuanced argument

COUNT THE GRAMMAR ERRORS. Look for:
- Subject-verb agreement ("technology help" = error)
- Missing articles ("student can" instead of "a student can" = error)
- Wrong verb forms ("make more easy" instead of "makes easier" = error)
- Plural errors ("both side" instead of "both sides" = error)

Return ONLY this JSON:

{
  "overall_band": 4.0 | 4.5 | 5.0 | 5.5 | 6.0 | 6.5 | 7.0 | 7.5 | 8.0 | 8.5,
  "task_response": {
    "band": 4.0-9.0,
    "position": "clear_and_maintained" | "clear" | "partial" | "unclear" | "none",
    "development": "fully_extended" | "extended" | "adequate" | "limited" | "minimal",
    "examples": "specific_and_relevant" | "relevant" | "generic" | "weak" | "none"
  },
  "coherence": {
    "band": 4.0-9.0,
    "organization": "skillful" | "logical" | "adequate" | "limited" | "poor",
    "cohesion": "seamless" | "effective" | "adequate" | "mechanical" | "lacking"
  },
  "lexical": {
    "band": 4.0-9.0,
    "range": "wide_and_precise" | "sufficient" | "adequate" | "limited" | "very_limited",
    "sophistication": "natural_academic" | "good" | "adequate" | "basic" | "very_basic"
  },
  "grammar": {
    "band": 4.0-9.0,
    "error_count": <number of distinct grammar errors spotted>,
    "accuracy": "high" | "good" | "adequate" | "limited" | "poor",
    "range": "wide" | "good" | "adequate" | "limited" | "very_limited"
  },
  "closest_example": "below_band_5" | "band_5" | "between_5_and_6.5" | "band_6.5" | "between_6.5_and_8" | "band_8" | "above_band_8"
}

BE HONEST. If the essay has multiple grammar errors in every paragraph, it cannot be Band 7+. If vocabulary is basic throughout ("good", "bad", "very"), it cannot score high on Lexical.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0,
      max_tokens: 700,
      messages: [
        { role: "system", content: "You are a strict, calibrated IELTS examiner. You have assessed thousands of essays. You compare against the reference examples and score honestly. Most essays are Band 5-6.5. Output only valid JSON." },
        { role: "user", content: extractionPrompt }
      ]
    });
    
    const content = response.choices[0]?.message?.content || '{}';
    const cleaned = content.replace(/```json\n?|\n?```/g, '').trim();
    const features = JSON.parse(cleaned);
    
    features.meta = {
      word_count: wordCount,
      paragraph_count: paragraphs.length,
      sentence_count: sentences.length
    };
    
    console.log('=== AI ASSESSMENT (v5.2 Strict) ===');
    console.log('Overall band:', features.overall_band);
    console.log('Closest example:', features.closest_example);
    console.log('Task band:', features.task_response?.band);
    console.log('Lexical band:', features.lexical?.band);
    console.log('Grammar band:', features.grammar?.band, '| Errors:', features.grammar?.error_count);
    
    return features;
    
  } catch (error) {
    console.error('AI extraction failed:', error.message);
    return getFallbackFeatures(essay);
  }
}

function getFallbackFeatures(essay) {
  const wordCount = essay.trim().split(/\s+/).length;
  const paragraphs = essay.split(/\n\n+/).filter(p => p.trim().length > 0);
  
  return {
    overall_band: 5.5,
    task_response: { band: 5.5, position: "partial", development: "limited", examples: "generic" },
    coherence: { band: 5.5, organization: "adequate", cohesion: "adequate" },
    lexical: { band: 5.5, range: "limited", sophistication: "basic" },
    grammar: { band: 5.5, error_count: 5, accuracy: "limited", range: "limited" },
    closest_example: "band_5",
    meta: { word_count: wordCount, paragraph_count: paragraphs.length, sentence_count: 0 }
  };
}

// =============================================================================
// SCORING - TRUST GPT'S BAND ASSESSMENTS MORE DIRECTLY
// =============================================================================

function scoreFromFeatures(features) {
  // Start with GPT's direct band assessments
  let taskScore = features.task_response?.band || features.overall_band || 5.5;
  let coherenceScore = features.coherence?.band || features.overall_band || 5.5;
  let lexicalScore = features.lexical?.band || features.overall_band || 5.5;
  let grammarScore = features.grammar?.band || features.overall_band || 5.5;
  
  const capReasons = { task: [], coherence: [], lexical: [], grammar: [] };
  const meta = features.meta || {};
  
  // === TASK ADJUSTMENTS ===
  if (features.task_response?.position === "none" || features.task_response?.position === "unclear") {
    taskScore = Math.min(taskScore, 5.5);
    capReasons.task.push('Position unclear or missing');
  }
  if (meta.word_count < 200) {
    taskScore = Math.min(taskScore, 5.0);
    capReasons.task.push('Significantly under word count');
  } else if (meta.word_count < 250) {
    taskScore = Math.min(taskScore, 6.0);
    capReasons.task.push('Under word count');
  }
  
  // === COHERENCE ADJUSTMENTS ===
  if (meta.paragraph_count < 3) {
    coherenceScore = Math.min(coherenceScore, 5.5);
    capReasons.coherence.push('Insufficient paragraphing');
  }
  if (features.coherence?.cohesion === "lacking") {
    coherenceScore = Math.min(coherenceScore, 5.5);
    capReasons.coherence.push('Lacking cohesion');
  }
  
  // === LEXICAL ADJUSTMENTS ===
  if (features.lexical?.sophistication === "very_basic") {
    lexicalScore = Math.min(lexicalScore, 5.0);
    capReasons.lexical.push('Very basic vocabulary');
  } else if (features.lexical?.sophistication === "basic") {
    lexicalScore = Math.min(lexicalScore, 5.5);
    capReasons.lexical.push('Basic vocabulary');
  }
  
  // === GRAMMAR ADJUSTMENTS - EXPLICIT ERROR PENALTY ===
  const errorCount = features.grammar?.error_count || 0;
  if (errorCount >= 10) {
    grammarScore = Math.min(grammarScore, 4.5);
    capReasons.grammar.push('Numerous grammar errors');
  } else if (errorCount >= 7) {
    grammarScore = Math.min(grammarScore, 5.0);
    capReasons.grammar.push('Frequent grammar errors');
  } else if (errorCount >= 5) {
    grammarScore = Math.min(grammarScore, 5.5);
    capReasons.grammar.push('Multiple grammar errors');
  } else if (errorCount >= 3) {
    grammarScore = Math.min(grammarScore, 6.5);
    capReasons.grammar.push('Some grammar errors');
  }
  
  if (features.grammar?.accuracy === "poor") {
    grammarScore = Math.min(grammarScore, 5.0);
  }
  
  // Round to nearest 0.5
  const scores = {
    task: Math.max(4.0, Math.min(9.0, Math.round(taskScore * 2) / 2)),
    coherence: Math.max(4.0, Math.min(9.0, Math.round(coherenceScore * 2) / 2)),
    lexical: Math.max(4.0, Math.min(9.0, Math.round(lexicalScore * 2) / 2)),
    grammar: Math.max(4.0, Math.min(9.0, Math.round(grammarScore * 2) / 2))
  };
  
  return { scores, capReasons };
}

// =============================================================================
// EXPLANATION GENERATION
// =============================================================================

function generateExplanations(scores, features, capReasons) {
  const exp = { task: '', coherence: '', lexical: '', grammar: '' };
  
  // Task
  if (scores.task >= 8.0) {
    exp.task = 'The response fully addresses all parts of the task with a clear, fully-developed position. Ideas are extended and well-supported with specific, relevant examples.';
  } else if (scores.task >= 7.0) {
    exp.task = 'The response addresses all parts of the task with a clear position. Main ideas are extended and supported, though some could be more fully developed.';
  } else if (scores.task >= 6.0) {
    exp.task = 'The response addresses the task, though some parts may be more fully covered than others. The position is present but could be clearer or more consistently maintained.';
  } else if (scores.task >= 5.0) {
    exp.task = 'The response partially addresses the task. The position is not always clear, and ideas are limited or underdeveloped.';
  } else {
    exp.task = 'The response inadequately addresses the task. Ideas are unclear, irrelevant, or insufficiently developed.';
  }
  if (capReasons.task.length > 0) exp.task += ' ' + capReasons.task[0] + '.';
  
  // Coherence
  if (scores.coherence >= 8.0) {
    exp.coherence = 'Ideas are skilfully organised with seamless progression. Paragraphing is handled well, and cohesive devices are used effectively throughout.';
  } else if (scores.coherence >= 7.0) {
    exp.coherence = 'Information and ideas are logically organised with clear progression. A range of cohesive devices is used appropriately.';
  } else if (scores.coherence >= 6.0) {
    exp.coherence = 'There is a clear overall structure. Cohesive devices are used but may be mechanical or overused at times.';
  } else if (scores.coherence >= 5.0) {
    exp.coherence = 'Organisation is evident but not always logical. Cohesive devices are inadequate or inaccurate.';
  } else {
    exp.coherence = 'There is little organisation. Relationships between ideas are unclear.';
  }
  if (capReasons.coherence.length > 0) exp.coherence += ' ' + capReasons.coherence[0] + '.';
  
  // Lexical
  if (scores.lexical >= 8.0) {
    exp.lexical = 'A wide range of vocabulary is used with flexibility and precision. Sophisticated lexical items are used with full awareness of style and collocation.';
  } else if (scores.lexical >= 7.0) {
    exp.lexical = 'A sufficient range of vocabulary is used to allow flexibility and precision. Less common lexical items are used with some awareness of style.';
  } else if (scores.lexical >= 6.0) {
    exp.lexical = 'An adequate range of vocabulary is used for the task. There may be some imprecision or repetition.';
  } else if (scores.lexical >= 5.0) {
    exp.lexical = 'A limited range of vocabulary is used, with noticeable repetition. Word choice may be inappropriate at times.';
  } else {
    exp.lexical = 'Vocabulary is extremely limited. Errors in word choice and formation seriously impede communication.';
  }
  if (capReasons.lexical.length > 0) exp.lexical += ' ' + capReasons.lexical[0] + '.';
  
  // Grammar
  if (scores.grammar >= 8.0) {
    exp.grammar = 'A wide range of structures is used accurately and appropriately. Errors are rare and minor.';
  } else if (scores.grammar >= 7.0) {
    exp.grammar = 'A variety of complex structures is used with good control. Grammar and punctuation are generally accurate with few errors.';
  } else if (scores.grammar >= 6.0) {
    exp.grammar = 'A mix of simple and complex sentence forms is used. Some errors occur but they do not impede communication.';
  } else if (scores.grammar >= 5.0) {
    exp.grammar = 'Sentence structures are limited. Grammatical errors are frequent and may cause some difficulty for the reader.';
  } else {
    exp.grammar = 'Sentence structures are very limited or inaccurate. Errors predominate and severely impede communication.';
  }
  if (capReasons.grammar.length > 0) exp.grammar += ' ' + capReasons.grammar[0] + '.';
  
  return exp;
}

function generateStrengths(scores, features) {
  const strengths = [];
  
  if (scores.task >= 7.0) strengths.push('Clear, well-developed position with extended ideas');
  else if (features.task_response?.position === "clear" || features.task_response?.position === "clear_and_maintained") strengths.push('Clear position stated');
  
  if (scores.coherence >= 7.0) strengths.push('Logical organisation with effective cohesion');
  else if (features.coherence?.organization === "logical" || features.coherence?.organization === "adequate") strengths.push('Clear overall structure');
  
  if (scores.lexical >= 7.0) strengths.push('Good vocabulary range with some sophistication');
  else if (features.lexical?.sophistication === "good" || features.lexical?.sophistication === "adequate") strengths.push('Adequate vocabulary for the task');
  
  if (scores.grammar >= 7.0) strengths.push('Good grammatical control with sentence variety');
  else if (features.grammar?.error_count <= 3) strengths.push('Generally accurate grammar');
  
  if (features.task_response?.examples === "specific_and_relevant" || features.task_response?.examples === "relevant") {
    strengths.push('Uses relevant examples');
  }
  
  if (strengths.length === 0) {
    strengths.push('Attempts to address the task');
    if (features.meta?.paragraph_count >= 3) strengths.push('Basic paragraph structure');
  }
  
  return strengths.slice(0, 3);
}

function generateImprovements(scores, features, capReasons) {
  const improvements = [];
  
  if (scores.task < 7.0) {
    if (features.task_response?.development === "limited" || features.task_response?.development === "minimal") {
      improvements.push('Develop each main idea more fully with specific examples and detailed explanation');
    }
    if (features.task_response?.examples === "generic" || features.task_response?.examples === "weak" || features.task_response?.examples === "none") {
      improvements.push('Include specific, real-world examples (names, places, statistics, personal experiences with detail)');
    }
  }
  
  if (scores.lexical < 7.0) {
    if (features.lexical?.sophistication === "basic" || features.lexical?.sophistication === "very_basic") {
      improvements.push('Replace basic words (good, bad, very, thing) with more precise academic vocabulary');
    }
  }
  
  if (scores.grammar < 7.0) {
    const errorCount = features.grammar?.error_count || 0;
    if (errorCount >= 5) {
      improvements.push('Focus on basic accuracy: subject-verb agreement, articles (a/the), and verb forms');
    } else if (features.grammar?.range === "limited" || features.grammar?.range === "very_limited") {
      improvements.push('Use more complex sentence structures (although, while, which, if clauses)');
    }
  }
  
  if (scores.coherence < 7.0 && (features.coherence?.cohesion === "mechanical" || features.coherence?.cohesion === "lacking")) {
    improvements.push('Use cohesive devices more naturally to connect ideas');
  }
  
  if (features.meta?.word_count < 250) {
    improvements.unshift('Write at least 250 words to fully develop your argument');
  }
  
  if (improvements.length === 0) {
    improvements.push('Continue developing precision and sophistication in all areas');
  }
  
  return improvements.slice(0, 3);
}

function generateTips(overall) {
  if (overall < 5.0) {
    return [
      'Focus on basic grammar: "technology helps" not "technology help"',
      'Use articles correctly: "a student" not just "student"',
      'State your opinion clearly: "I believe that..." or "In my opinion..."'
    ];
  }
  if (overall < 6.0) {
    return [
      'Study the Band 6.5 example - note how each paragraph has one clear main idea',
      'Practice subject-verb agreement and article usage',
      'Extend ideas with "because", "for example", "as a result"'
    ];
  }
  if (overall < 7.0) {
    return [
      'Compare your vocabulary to the Band 8 example - notice the academic word choices',
      'Include specific examples with names, places, or statistics',
      'Use a variety of sentence structures naturally'
    ];
  }
  return [
    'Focus on precision - ensure every word is the best choice',
    'Make your examples even more specific and detailed',
    'Ensure cohesion flows naturally without mechanical linking'
  ];
}

function getBandSummary(overall) {
  if (overall >= 8.0) return 'Very Good User - Handles complex language with full flexibility and precision';
  if (overall >= 7.0) return 'Good User - Handles complex language well with occasional inaccuracies';
  if (overall >= 6.0) return 'Competent User - Generally effective command despite errors';
  if (overall >= 5.0) return 'Modest User - Partial command with frequent errors';
  return 'Limited User - Basic command with serious errors';
}

// =============================================================================
// CLB PROJECTION
// =============================================================================

function getCLBProjection(writingBand) {
  const clbMap = {
    '4.0': 4, '4.5': 5, '5.0': 5, '5.5': 6, 
    '6.0': 7, '6.5': 8, '7.0': 9, '7.5': 10, '8.0': 10, '8.5': 10, '9.0': 10
  };
  
  const clb = clbMap[writingBand.toFixed(1)] || 5;
  const nextThreshold = clb < 7 ? { clb: 7, ielts: 6.0 } 
                       : clb < 8 ? { clb: 8, ielts: 6.5 }
                       : clb < 9 ? { clb: 9, ielts: 7.0 }
                       : null;
  
  let immigrationNote = '';
  if (clb < 7) {
    immigrationNote = 'This score is below CLB 7, the minimum for Express Entry Federal Skilled Worker. Focus on reaching Band 6.0.';
  } else if (clb === 7) {
    immigrationNote = 'This score meets CLB 7, the minimum language requirement for Express Entry.';
  } else if (clb === 8) {
    immigrationNote = 'This score meets CLB 8. Reaching CLB 9 (Band 7.0) would significantly increase your CRS points.';
  } else {
    immigrationNote = 'This score meets CLB 9+, maximizing your language points for Express Entry.';
  }
  
  return { clb, nextThreshold, immigrationNote };
}

// =============================================================================
// MAIN SCORING FUNCTION
// =============================================================================

async function scoreEssay(prompt, essay) {
  console.log('=== SCORING ENGINE v5.2 (Strict Calibration) ===');
  
  const cleanedEssay = essay
    .replace(/here is a band \d[^.]*\./gi, '')
    .replace(/this is a band \d[^.]*\./gi, '')
    .trim();
  
  const features = await extractFeaturesWithAI(prompt, cleanedEssay);
  const { scores, capReasons } = scoreFromFeatures(features);
  
  const avg = (scores.task + scores.coherence + scores.lexical + scores.grammar) / 4;
  const overall = Math.round(avg * 2) / 2;
  
  const clbProjection = getCLBProjection(overall);
  
  console.log('Final scores:', scores, 'Overall:', overall, 'CLB:', clbProjection.clb);
  
  const explanations = generateExplanations(scores, features, capReasons);
  
  return { scores, overall, explanations, features, capReasons, clbProjection };
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
    
    const wordCount = answer.trim().split(/\s+/).length;
    if (wordCount < 20) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Essay too short" }) };
    }
    
    const taskPrompt = prompt || "Discuss both views and give your own opinion.";
    const result = await scoreEssay(taskPrompt, answer);
    
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
      wordCount: result.features.meta?.word_count || wordCount,
      testId,
      
      // CLB Immigration projection
      clb: result.clbProjection.clb,
      clb_projection: result.clbProjection,
      
      _debug: {
        overall_band: result.features.overall_band,
        closest_example: result.features.closest_example,
        grammar_errors: result.features.grammar?.error_count,
        features: result.features,
        capReasons: result.capReasons
      }
    };
    
    // Save to Supabase
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
