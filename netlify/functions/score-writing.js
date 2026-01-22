// =============================================================================
// EVOLVE IELTS WRITING SCORING ENGINE v5.1
// =============================================================================
// AI-powered feature extraction with CALIBRATION EXAMPLES
// GPT compares the essay against real Band 5, 6.5, and 8 examples
// Then deterministic rules convert features to scores
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
// AI FEATURE EXTRACTION WITH CALIBRATION
// =============================================================================

async function extractFeaturesWithAI(prompt, essay) {
  const wordCount = essay.trim().split(/\s+/).length;
  const paragraphs = essay.split(/\n\n+/).filter(p => p.trim().length > 0);
  const sentences = essay.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  const extractionPrompt = `You are a strict IELTS examiner. You will assess an essay by comparing it to three calibrated examples.

=== CALIBRATION EXAMPLES ===

BAND 5.0 ESSAY (Basic):
"""
${BAND_5_EXAMPLE}
"""
This essay has: unclear position ("good and bad"), basic vocabulary ("very important", "good", "bad"), simple sentences, generic examples, underdeveloped ideas.

---

BAND 6.5 ESSAY (Competent):
"""
${BAND_6_5_EXAMPLE}
"""
This essay has: clear position stated at end, adequate vocabulary with some range, mix of simple and complex sentences, some development but examples could be more specific.

---

BAND 8.0 ESSAY (Very Good):
"""
${BAND_8_EXAMPLE}
"""
This essay has: sophisticated thesis, wide vocabulary ("democratize", "disseminated", "propensity"), complex structures used naturally, specific examples (Khan Academy, Singapore), fully developed arguments with nuance.

=== TASK ===

Now assess this student essay:

TASK PROMPT: "${prompt}"

STUDENT ESSAY (${wordCount} words):
"""
${essay}
"""

Compare this essay to the calibration examples above. Which band level is it closest to?

Return ONLY a JSON object with these assessments:

{
  "overall_impression": "band_5" | "band_5.5" | "band_6" | "band_6.5" | "band_7" | "band_7.5" | "band_8",
  "task_response": {
    "position_clarity": "clear" | "partial" | "unclear",
    "ideas_developed": "fully" | "adequately" | "partially" | "minimally",
    "examples_quality": "specific" | "some_specific" | "generic" | "none",
    "addresses_prompt": true | false
  },
  "coherence": {
    "paragraph_structure": "effective" | "adequate" | "basic" | "poor",
    "cohesive_devices": "skillful" | "adequate" | "mechanical" | "lacking",
    "logical_flow": true | false
  },
  "lexical": {
    "vocabulary_level": "sophisticated" | "good" | "adequate" | "basic" | "very_basic",
    "precision": "precise" | "adequate" | "imprecise",
    "repetition": "minimal" | "some" | "noticeable" | "excessive"
  },
  "grammar": {
    "sentence_variety": "wide" | "good" | "limited" | "very_limited",
    "accuracy": "high" | "good" | "adequate" | "poor",
    "complex_structures": true | false
  },
  "closest_to": "band_5_example" | "band_6.5_example" | "band_8_example" | "between_5_and_6.5" | "between_6.5_and_8"
}

BE STRICT. Most student essays are Band 5-6.5. Band 7+ requires genuinely sophisticated language and fully developed ideas with specific examples.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0,
      max_tokens: 600,
      messages: [
        { role: "system", content: "You are a strict IELTS examiner. Compare essays against the calibration examples provided. Be honest - most essays are Band 5-6.5. Output only valid JSON." },
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
    
    console.log('=== AI FEATURES (Calibrated) ===');
    console.log('Overall impression:', features.overall_impression);
    console.log('Closest to:', features.closest_to);
    console.log('Position:', features.task_response?.position_clarity);
    console.log('Vocabulary:', features.lexical?.vocabulary_level);
    
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
    overall_impression: "band_5.5",
    task_response: {
      position_clarity: "partial",
      ideas_developed: "partially",
      examples_quality: "generic",
      addresses_prompt: true
    },
    coherence: {
      paragraph_structure: "basic",
      cohesive_devices: "adequate",
      logical_flow: true
    },
    lexical: {
      vocabulary_level: "basic",
      precision: "adequate",
      repetition: "some"
    },
    grammar: {
      sentence_variety: "limited",
      accuracy: "adequate",
      complex_structures: false
    },
    closest_to: "band_5_example",
    meta: {
      word_count: wordCount,
      paragraph_count: paragraphs.length,
      sentence_count: 0
    }
  };
}

// =============================================================================
// DETERMINISTIC SCORING FROM FEATURES
// =============================================================================

function scoreFromFeatures(features) {
  const scores = { task: 6.0, coherence: 6.0, lexical: 6.0, grammar: 6.0 };
  const capReasons = { task: [], coherence: [], lexical: [], grammar: [] };
  
  const tr = features.task_response || {};
  const cc = features.coherence || {};
  const lr = features.lexical || {};
  const gra = features.grammar || {};
  const meta = features.meta || {};
  
  // Use overall_impression as an anchor
  const impression = features.overall_impression || "band_5.5";
  const baseFromImpression = parseFloat(impression.replace("band_", "")) || 5.5;
  
  // ===================
  // TASK RESPONSE SCORE
  // ===================
  
  let taskScore = baseFromImpression;
  
  // Adjust based on specific features
  if (tr.position_clarity === "clear") {
    taskScore = Math.max(taskScore, 6.0);
  } else if (tr.position_clarity === "unclear") {
    taskScore = Math.min(taskScore, 5.5);
    capReasons.task.push('Position unclear');
  }
  
  if (tr.ideas_developed === "fully") {
    taskScore += 0.5;
  } else if (tr.ideas_developed === "minimally") {
    taskScore -= 0.5;
    capReasons.task.push('Ideas underdeveloped');
  }
  
  if (tr.examples_quality === "specific") {
    taskScore += 0.5;
  } else if (tr.examples_quality === "none") {
    taskScore -= 0.5;
  }
  
  if (!tr.addresses_prompt) {
    taskScore -= 1.0;
    capReasons.task.push('Does not fully address the prompt');
  }
  
  // Word count caps
  if (meta.word_count < 200) {
    taskScore = Math.min(taskScore, 5.0);
    capReasons.task.push('Significantly under word count');
  } else if (meta.word_count < 250) {
    taskScore = Math.min(taskScore, 6.0);
    capReasons.task.push('Under word count');
  }
  
  scores.task = Math.max(4.0, Math.min(9.0, Math.round(taskScore * 2) / 2));
  
  // ===================
  // COHERENCE SCORE
  // ===================
  
  let coherenceScore = baseFromImpression;
  
  if (cc.paragraph_structure === "effective") {
    coherenceScore += 0.5;
  } else if (cc.paragraph_structure === "poor") {
    coherenceScore -= 1.0;
    capReasons.coherence.push('Poor paragraph structure');
  } else if (cc.paragraph_structure === "basic") {
    coherenceScore -= 0.5;
  }
  
  if (cc.cohesive_devices === "skillful") {
    coherenceScore += 0.5;
  } else if (cc.cohesive_devices === "lacking") {
    coherenceScore -= 1.0;
    capReasons.coherence.push('Lacking cohesive devices');
  } else if (cc.cohesive_devices === "mechanical") {
    coherenceScore -= 0.5;
    capReasons.coherence.push('Mechanical use of linking words');
  }
  
  if (!cc.logical_flow) {
    coherenceScore -= 0.5;
  }
  
  if (meta.paragraph_count < 3) {
    coherenceScore = Math.min(coherenceScore, 5.5);
  }
  
  scores.coherence = Math.max(4.0, Math.min(9.0, Math.round(coherenceScore * 2) / 2));
  
  // ===================
  // LEXICAL SCORE
  // ===================
  
  let lexicalScore = baseFromImpression;
  
  if (lr.vocabulary_level === "sophisticated") {
    lexicalScore += 1.0;
  } else if (lr.vocabulary_level === "good") {
    lexicalScore += 0.5;
  } else if (lr.vocabulary_level === "basic") {
    lexicalScore -= 0.5;
    capReasons.lexical.push('Basic vocabulary');
  } else if (lr.vocabulary_level === "very_basic") {
    lexicalScore -= 1.0;
    capReasons.lexical.push('Very limited vocabulary');
  }
  
  if (lr.precision === "precise") {
    lexicalScore += 0.5;
  } else if (lr.precision === "imprecise") {
    lexicalScore -= 0.5;
  }
  
  if (lr.repetition === "noticeable") {
    lexicalScore -= 0.5;
    capReasons.lexical.push('Noticeable repetition');
  } else if (lr.repetition === "excessive") {
    lexicalScore -= 1.0;
    capReasons.lexical.push('Excessive repetition');
  }
  
  scores.lexical = Math.max(4.0, Math.min(9.0, Math.round(lexicalScore * 2) / 2));
  
  // ===================
  // GRAMMAR SCORE
  // ===================
  
  let grammarScore = baseFromImpression;
  
  if (gra.sentence_variety === "wide") {
    grammarScore += 0.5;
  } else if (gra.sentence_variety === "very_limited") {
    grammarScore -= 1.0;
    capReasons.grammar.push('Very limited sentence variety');
  } else if (gra.sentence_variety === "limited") {
    grammarScore -= 0.5;
  }
  
  if (gra.accuracy === "high") {
    grammarScore += 0.5;
  } else if (gra.accuracy === "poor") {
    grammarScore -= 1.0;
    capReasons.grammar.push('Poor grammatical accuracy');
  }
  
  if (gra.complex_structures) {
    grammarScore += 0.5;
  } else {
    grammarScore -= 0.5;
  }
  
  scores.grammar = Math.max(4.0, Math.min(9.0, Math.round(grammarScore * 2) / 2));
  
  return { scores, capReasons };
}

// =============================================================================
// EXPLANATION GENERATION
// =============================================================================

function generateExplanations(scores, features, capReasons) {
  const exp = { task: '', coherence: '', lexical: '', grammar: '' };
  const tr = features.task_response || {};
  const lr = features.lexical || {};
  const gra = features.grammar || {};
  
  // Task
  if (scores.task >= 8.0) {
    exp.task = 'The response fully addresses all parts of the task with a clear, well-developed position throughout.';
  } else if (scores.task >= 7.0) {
    exp.task = 'The response addresses all parts of the task with a clear position and extended, supported ideas.';
  } else if (scores.task >= 6.0) {
    exp.task = 'The response addresses the task, though some parts may be more fully covered than others.';
    if (capReasons.task.length > 0) exp.task += ' ' + capReasons.task[0] + '.';
  } else {
    exp.task = 'The response only partially addresses the task. ' + (capReasons.task[0] || 'Ideas need more development.');
  }
  
  // Coherence
  if (scores.coherence >= 8.0) {
    exp.coherence = 'Ideas are skilfully organised with seamless progression throughout.';
  } else if (scores.coherence >= 7.0) {
    exp.coherence = 'Information is logically organised with clear progression and effective use of cohesive devices.';
  } else if (scores.coherence >= 6.0) {
    exp.coherence = 'There is a clear overall structure, though cohesion may be mechanical at times.';
    if (capReasons.coherence.length > 0) exp.coherence += ' ' + capReasons.coherence[0] + '.';
  } else {
    exp.coherence = 'Organisation is limited. ' + (capReasons.coherence[0] || 'Paragraphing needs improvement.');
  }
  
  // Lexical
  if (scores.lexical >= 8.0) {
    exp.lexical = 'A wide range of vocabulary is used with precision and sophistication.';
  } else if (scores.lexical >= 7.0) {
    exp.lexical = 'A sufficient range of vocabulary is used with flexibility and awareness of style and collocation.';
  } else if (scores.lexical >= 6.0) {
    exp.lexical = 'Vocabulary is adequate for the task, though there may be some imprecision or repetition.';
    if (capReasons.lexical.length > 0) exp.lexical += ' ' + capReasons.lexical[0] + '.';
  } else {
    exp.lexical = 'Vocabulary is limited and repetitive. ' + (capReasons.lexical[0] || 'More range needed.');
  }
  
  // Grammar
  if (scores.grammar >= 8.0) {
    exp.grammar = 'A wide range of structures is used accurately with only rare minor errors.';
  } else if (scores.grammar >= 7.0) {
    exp.grammar = 'A variety of complex structures is used with good control and few errors.';
  } else if (scores.grammar >= 6.0) {
    exp.grammar = 'A mix of sentence structures is used, though errors occur in complex sentences.';
    if (capReasons.grammar.length > 0) exp.grammar += ' ' + capReasons.grammar[0] + '.';
  } else {
    exp.grammar = 'Grammatical errors are frequent and may impede communication. ' + (capReasons.grammar[0] || '');
  }
  
  return exp;
}

function generateStrengths(scores, features) {
  const strengths = [];
  const tr = features.task_response || {};
  const lr = features.lexical || {};
  const gra = features.grammar || {};
  
  if (scores.task >= 7.0) {
    strengths.push('Clear position with well-developed arguments');
  } else if (tr.position_clarity === "clear") {
    strengths.push('Clear position stated');
  }
  
  if (scores.coherence >= 7.0) {
    strengths.push('Well-organised with effective cohesion');
  } else if (features.coherence?.logical_flow) {
    strengths.push('Logical flow of ideas');
  }
  
  if (scores.lexical >= 7.0) {
    strengths.push('Good vocabulary range and precision');
  } else if (lr.vocabulary_level === "good" || lr.vocabulary_level === "sophisticated") {
    strengths.push('Some sophisticated vocabulary used');
  }
  
  if (scores.grammar >= 7.0) {
    strengths.push('Good grammatical control');
  } else if (gra.complex_structures) {
    strengths.push('Attempts complex sentence structures');
  }
  
  if (tr.examples_quality === "specific" || tr.examples_quality === "some_specific") {
    strengths.push('Uses relevant examples');
  }
  
  if (strengths.length === 0) {
    strengths.push('Addresses the task');
    if (features.meta?.paragraph_count >= 3) strengths.push('Basic structure present');
  }
  
  return strengths.slice(0, 3);
}

function generateImprovements(scores, features, capReasons) {
  const improvements = [];
  const tr = features.task_response || {};
  const lr = features.lexical || {};
  const gra = features.grammar || {};
  
  if (scores.task < 7.0) {
    if (tr.position_clarity !== "clear") {
      improvements.push('State your position more clearly and explicitly in the introduction');
    }
    if (tr.ideas_developed !== "fully" && tr.ideas_developed !== "adequately") {
      improvements.push('Develop each main idea with specific examples and detailed explanation');
    }
    if (tr.examples_quality === "generic" || tr.examples_quality === "none") {
      improvements.push('Include specific, real-world examples (names, places, statistics)');
    }
  }
  
  if (scores.lexical < 7.0) {
    if (lr.vocabulary_level === "basic" || lr.vocabulary_level === "very_basic") {
      improvements.push('Use more varied and sophisticated vocabulary appropriate to academic writing');
    }
    if (lr.repetition === "noticeable" || lr.repetition === "excessive") {
      improvements.push('Avoid word repetition by using synonyms and paraphrasing');
    }
  }
  
  if (scores.grammar < 7.0) {
    if (!gra.complex_structures) {
      improvements.push('Include more complex sentence structures (relative clauses, conditionals, passive voice)');
    }
    if (gra.accuracy === "adequate" || gra.accuracy === "poor") {
      improvements.push('Focus on grammatical accuracy, especially subject-verb agreement and verb tenses');
    }
  }
  
  if (features.meta?.word_count < 250) {
    improvements.unshift('Write at least 250 words to fully develop your ideas');
  }
  
  if (improvements.length === 0) {
    improvements.push('Continue refining precision and sophistication');
  }
  
  return improvements.slice(0, 3);
}

function generateTips(overall) {
  if (overall < 5.5) {
    return [
      'Study the Band 6.5 example essay structure: clear intro, 2 body paragraphs, conclusion',
      'Practice stating your opinion clearly: "I believe that..." or "This essay argues that..."',
      'Learn 10 new topic-specific words for each common IELTS theme'
    ];
  }
  if (overall < 6.5) {
    return [
      'Compare your essay to the Band 8 example - note the specific examples used',
      'Practice extending ideas: give a reason, then an example, then explain the consequence',
      'Learn complex sentence patterns: "Although X, Y" and "Not only X, but also Y"'
    ];
  }
  return [
    'Focus on precision - replace good vocabulary with the best vocabulary',
    'Ensure every paragraph has a clear topic sentence and supporting details',
    'Proofread specifically for articles (a/the) and prepositions'
  ];
}

function getBandSummary(overall) {
  if (overall >= 8.0) return 'Very Good User - Handles complex language with full flexibility';
  if (overall >= 7.0) return 'Good User - Handles complex language well with occasional inaccuracies';
  if (overall >= 6.0) return 'Competent User - Generally effective command despite some errors';
  if (overall >= 5.0) return 'Modest User - Partial command, coping with overall meaning';
  return 'Limited User - Basic command, frequent problems in understanding and expression';
}

// =============================================================================
// CLB PROJECTION (Immigration-facing)
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
    immigrationNote = 'This score is below CLB 7, which is the minimum for Express Entry Federal Skilled Worker.';
  } else if (clb === 7) {
    immigrationNote = 'This score meets the minimum language requirement for Express Entry.';
  } else if (clb === 8) {
    immigrationNote = 'This score meets CLB 8. Reaching CLB 9 (Band 7.0) unlocks significant CRS points.';
  } else {
    immigrationNote = 'This score meets CLB 9+, maximizing your language points for Express Entry.';
  }
  
  return { clb, nextThreshold, immigrationNote };
}

// =============================================================================
// MAIN SCORING FUNCTION
// =============================================================================

async function scoreEssay(prompt, essay) {
  console.log('=== SCORING ENGINE v5.1 (Calibrated) ===');
  
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
  
  return {
    scores,
    overall,
    explanations,
    features,
    capReasons,
    clbProjection
  };
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
        overall_impression: result.features.overall_impression,
        closest_to: result.features.closest_to,
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
