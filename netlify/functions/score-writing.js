// =============================================================================
// EVOLVE IELTS WRITING SCORING ENGINE v5.3
// =============================================================================
// BINARY COMPARATIVE SCORING
// Instead of asking "what band is this?", we ask:
// "Is this BETTER or WORSE than the Band 6 example?"
// "Is this BETTER or WORSE than the Band 7 example?"
// This forces discrete decisions, no hedging.
// Uses GPT-4o (not mini) for better judgment.
// =============================================================================

import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// =============================================================================
// CALIBRATION ESSAYS
// =============================================================================

const BAND_4_EXAMPLE = `Technology is very big today and students use it every day in school and home. Some people think technology make learning more easy, but other people think it make more distraction. I will talk about both side and give my opinion also.

First, technology help students because they can find information very fast. If student do not know something, they can google it and get answer. This is good because before students must go library and find book which take long time. Also teachers use computer and projector in class which make lesson more interesting sometime. Video and picture can help student understand topic better than just reading book. For example when I was student, watching video was more fun than reading and I learn something from it sometimes.

However, technology also make many distraction and problem for students. Students use phone too much and check message and social media when they should study. They open laptop for homework but then watch video or play game instead. This make them not focus and waste time. Many student cannot control themself and this affect grade badly. Also technology make students lazy because they depend on internet and not think by themself.

In conclusion, technology have good and bad point. I think technology is useful but students need to be careful and not use too much. Parents and teachers should help students use technology in good way.`;

const BAND_6_EXAMPLE = `The increasing use of technology in education has sparked considerable debate. While some argue that digital tools enhance learning, others contend that they create unnecessary distractions. This essay will examine both perspectives before presenting my own view.

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
// BINARY COMPARATIVE SCORING
// =============================================================================

async function scoreEssayComparative(prompt, essay) {
  const wordCount = essay.trim().split(/\s+/).length;
  
  const comparativePrompt = `You are a strict IELTS examiner. You will compare a student essay against three reference essays and make BINARY decisions.

=== REFERENCE ESSAYS ===

BAND 4.0-4.5 REFERENCE:
"""
${BAND_4_EXAMPLE}
"""
KEY FEATURES: Multiple grammar errors per sentence ("technology help", "student do not know", "make more easy", "both side"), very basic vocabulary ("very big", "good", "bad"), unclear/fence-sitting position, no specific examples, simple sentences only.

---

BAND 6.0 REFERENCE:
"""
${BAND_6_EXAMPLE}
"""
KEY FEATURES: Clear position, mostly accurate grammar with occasional errors, adequate vocabulary ("considerable debate", "contend", "catering to"), some complex sentences, examples present but generic ("visual learners may benefit").

---

BAND 8.0 REFERENCE:
"""
${BAND_8_EXAMPLE}
"""
KEY FEATURES: Sophisticated thesis, rare/no grammar errors, advanced vocabulary used naturally ("democratize", "disseminated", "propensity", "algorithmic curation"), complex structures throughout, specific real examples (Khan Academy, Singapore), nuanced argumentation.

=== STUDENT ESSAY TO SCORE ===

TASK: "${prompt}"

STUDENT ESSAY (${wordCount} words):
"""
${essay}
"""

=== YOUR TASK ===

Answer these BINARY questions with YES or NO only:

1. GRAMMAR: Does this essay have FEWER grammar errors than the Band 4 reference? (YES/NO)
2. GRAMMAR: Does this essay have grammar accuracy EQUAL TO OR BETTER than the Band 6 reference? (YES/NO)
3. GRAMMAR: Does this essay have grammar accuracy EQUAL TO OR BETTER than the Band 8 reference? (YES/NO)

4. VOCABULARY: Does this essay have MORE sophisticated vocabulary than the Band 4 reference? (YES/NO)
5. VOCABULARY: Does this essay have vocabulary EQUAL TO OR BETTER than the Band 6 reference? (YES/NO)
6. VOCABULARY: Does this essay have vocabulary EQUAL TO OR BETTER than the Band 8 reference? (YES/NO)

7. TASK RESPONSE: Is the position CLEARER than the Band 4 reference (which fence-sits)? (YES/NO)
8. TASK RESPONSE: Are ideas developed AS WELL AS OR BETTER than the Band 6 reference? (YES/NO)
9. TASK RESPONSE: Are ideas developed AS WELL AS the Band 8 reference (with specific examples)? (YES/NO)

10. COHERENCE: Is the essay BETTER organized than the Band 4 reference? (YES/NO)
11. COHERENCE: Is cohesion AS GOOD AS OR BETTER than the Band 6 reference? (YES/NO)
12. COHERENCE: Is cohesion AS SOPHISTICATED as the Band 8 reference? (YES/NO)

Return ONLY this JSON:
{
  "grammar": { "better_than_4": true/false, "equal_to_6": true/false, "equal_to_8": true/false },
  "vocabulary": { "better_than_4": true/false, "equal_to_6": true/false, "equal_to_8": true/false },
  "task": { "better_than_4": true/false, "equal_to_6": true/false, "equal_to_8": true/false },
  "coherence": { "better_than_4": true/false, "equal_to_6": true/false, "equal_to_8": true/false },
  "overall_closest": "band_4" | "band_5" | "band_6" | "band_7" | "band_8"
}

BE STRICT. If the essay has errors like "technology help" or "student do not know", it is NOT equal to Band 6 grammar.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",  // Using GPT-4o, not mini
      temperature: 0,
      max_tokens: 500,
      messages: [
        { role: "system", content: "You are a strict IELTS examiner. Answer binary comparisons honestly. If an essay has multiple grammar errors per paragraph, it cannot match Band 6+ grammar. Output only valid JSON." },
        { role: "user", content: comparativePrompt }
      ]
    });
    
    const content = response.choices[0]?.message?.content || '{}';
    const cleaned = content.replace(/```json\n?|\n?```/g, '').trim();
    const comparisons = JSON.parse(cleaned);
    
    console.log('=== COMPARATIVE RESULTS ===');
    console.log('Grammar:', comparisons.grammar);
    console.log('Vocabulary:', comparisons.vocabulary);
    console.log('Task:', comparisons.task);
    console.log('Coherence:', comparisons.coherence);
    console.log('Closest:', comparisons.overall_closest);
    
    return { comparisons, wordCount };
    
  } catch (error) {
    console.error('Comparative scoring failed:', error.message);
    return { 
      comparisons: {
        grammar: { better_than_4: true, equal_to_6: false, equal_to_8: false },
        vocabulary: { better_than_4: true, equal_to_6: false, equal_to_8: false },
        task: { better_than_4: true, equal_to_6: false, equal_to_8: false },
        coherence: { better_than_4: true, equal_to_6: false, equal_to_8: false },
        overall_closest: "band_5"
      },
      wordCount 
    };
  }
}

// =============================================================================
// CONVERT COMPARISONS TO BAND SCORES
// =============================================================================

function comparisonsToScores(comparisons, wordCount) {
  const scores = { task: 5.0, coherence: 5.0, lexical: 5.0, grammar: 5.0 };
  const capReasons = { task: [], coherence: [], lexical: [], grammar: [] };
  
  // GRAMMAR SCORE
  if (comparisons.grammar?.equal_to_8) {
    scores.grammar = 8.0;
  } else if (comparisons.grammar?.equal_to_6) {
    scores.grammar = 6.5;
  } else if (comparisons.grammar?.better_than_4) {
    scores.grammar = 5.5;
  } else {
    scores.grammar = 4.5;
    capReasons.grammar.push('Grammar errors similar to Band 4 level');
  }
  
  // VOCABULARY SCORE
  if (comparisons.vocabulary?.equal_to_8) {
    scores.lexical = 8.0;
  } else if (comparisons.vocabulary?.equal_to_6) {
    scores.lexical = 6.5;
  } else if (comparisons.vocabulary?.better_than_4) {
    scores.lexical = 5.5;
  } else {
    scores.lexical = 4.5;
    capReasons.lexical.push('Vocabulary similar to Band 4 level');
  }
  
  // TASK RESPONSE SCORE
  if (comparisons.task?.equal_to_8) {
    scores.task = 8.0;
  } else if (comparisons.task?.equal_to_6) {
    scores.task = 6.5;
  } else if (comparisons.task?.better_than_4) {
    scores.task = 5.5;
  } else {
    scores.task = 4.5;
    capReasons.task.push('Task response similar to Band 4 level');
  }
  
  // COHERENCE SCORE
  if (comparisons.coherence?.equal_to_8) {
    scores.coherence = 8.0;
  } else if (comparisons.coherence?.equal_to_6) {
    scores.coherence = 6.5;
  } else if (comparisons.coherence?.better_than_4) {
    scores.coherence = 5.5;
  } else {
    scores.coherence = 4.5;
    capReasons.coherence.push('Coherence similar to Band 4 level');
  }
  
  // Interpolate based on overall_closest
  const closest = comparisons.overall_closest || "band_5";
  
  if (closest === "band_4") {
    // Pull all scores toward 4-4.5
    scores.task = Math.min(scores.task, 4.5);
    scores.coherence = Math.min(scores.coherence, 4.5);
    scores.lexical = Math.min(scores.lexical, 4.5);
    scores.grammar = Math.min(scores.grammar, 4.5);
  } else if (closest === "band_5") {
    // Pull toward 5-5.5
    scores.task = Math.max(4.5, Math.min(scores.task, 5.5));
    scores.coherence = Math.max(4.5, Math.min(scores.coherence, 5.5));
    scores.lexical = Math.max(4.5, Math.min(scores.lexical, 5.5));
    scores.grammar = Math.max(4.5, Math.min(scores.grammar, 5.5));
  } else if (closest === "band_7") {
    // Pull toward 7+
    scores.task = Math.max(scores.task, 7.0);
    scores.coherence = Math.max(scores.coherence, 7.0);
    scores.lexical = Math.max(scores.lexical, 7.0);
    scores.grammar = Math.max(scores.grammar, 7.0);
  } else if (closest === "band_8") {
    // Pull toward 8+
    scores.task = Math.max(scores.task, 7.5);
    scores.coherence = Math.max(scores.coherence, 7.5);
    scores.lexical = Math.max(scores.lexical, 7.5);
    scores.grammar = Math.max(scores.grammar, 7.5);
  }
  
  // Word count penalty
  if (wordCount < 200) {
    scores.task = Math.min(scores.task, 5.0);
    capReasons.task.push('Significantly under word count');
  } else if (wordCount < 250) {
    scores.task = Math.min(scores.task, 6.0);
    capReasons.task.push('Under word count');
  }
  
  return { scores, capReasons, closest };
}

// =============================================================================
// EXPLANATIONS
// =============================================================================

function generateExplanations(scores, capReasons) {
  const exp = { task: '', coherence: '', lexical: '', grammar: '' };
  
  // Task
  if (scores.task >= 8.0) {
    exp.task = 'The response fully addresses all parts of the task with a clear, fully-developed position. Ideas are extended and well-supported with specific, relevant examples throughout.';
  } else if (scores.task >= 7.0) {
    exp.task = 'The response addresses all parts of the task with a clear position. Main ideas are extended and supported, though some points could be more fully developed.';
  } else if (scores.task >= 6.0) {
    exp.task = 'The response addresses the task, though some parts are more fully covered than others. The position is present but development is sometimes limited.';
  } else if (scores.task >= 5.0) {
    exp.task = 'The response partially addresses the task. The position is not always clear, and ideas are limited in development.';
  } else {
    exp.task = 'The response inadequately addresses the task. Ideas are unclear or insufficiently developed.';
  }
  
  // Coherence
  if (scores.coherence >= 8.0) {
    exp.coherence = 'Ideas are skilfully organised with seamless progression throughout. Cohesive devices are used effectively and appropriately.';
  } else if (scores.coherence >= 7.0) {
    exp.coherence = 'Information is logically organised with clear progression. A range of cohesive devices is used appropriately.';
  } else if (scores.coherence >= 6.0) {
    exp.coherence = 'There is a clear overall structure. Cohesive devices are used but may be mechanical at times.';
  } else if (scores.coherence >= 5.0) {
    exp.coherence = 'Organisation is evident but not always logical. Cohesive devices are limited or inaccurate.';
  } else {
    exp.coherence = 'Organisation is poor. Ideas lack clear progression and cohesion is inadequate.';
  }
  
  // Lexical
  if (scores.lexical >= 8.0) {
    exp.lexical = 'A wide range of vocabulary is used with flexibility and precision. Sophisticated lexical items are used with full awareness of style and collocation.';
  } else if (scores.lexical >= 7.0) {
    exp.lexical = 'A sufficient range of vocabulary is used with flexibility. Less common lexical items are used with some awareness of style.';
  } else if (scores.lexical >= 6.0) {
    exp.lexical = 'An adequate range of vocabulary is used for the task. There may be some imprecision or repetition.';
  } else if (scores.lexical >= 5.0) {
    exp.lexical = 'A limited range of vocabulary is used, with noticeable errors in word choice and formation.';
  } else {
    exp.lexical = 'Vocabulary is extremely limited. Errors in word choice seriously impede communication.';
  }
  
  // Grammar
  if (scores.grammar >= 8.0) {
    exp.grammar = 'A wide range of structures is used accurately and appropriately. Errors are rare and minor.';
  } else if (scores.grammar >= 7.0) {
    exp.grammar = 'A variety of complex structures is used with good control. Grammar is generally accurate with few errors.';
  } else if (scores.grammar >= 6.0) {
    exp.grammar = 'A mix of simple and complex sentences is used. Some errors occur but they rarely impede communication.';
  } else if (scores.grammar >= 5.0) {
    exp.grammar = 'Sentence structures are limited. Grammatical errors are frequent and may cause difficulty for the reader.';
  } else {
    exp.grammar = 'Sentence structures are very limited. Errors predominate and severely impede communication.';
  }
  
  return exp;
}

function generateStrengths(scores, comparisons) {
  const strengths = [];
  
  if (scores.task >= 7.0) strengths.push('Clear, well-developed position with extended ideas');
  else if (comparisons.task?.better_than_4) strengths.push('Position is clearer than basic level');
  
  if (scores.coherence >= 7.0) strengths.push('Well-organised with effective cohesion');
  else if (comparisons.coherence?.better_than_4) strengths.push('Basic organisational structure present');
  
  if (scores.lexical >= 7.0) strengths.push('Good vocabulary range with sophistication');
  else if (comparisons.vocabulary?.better_than_4) strengths.push('Vocabulary above basic level');
  
  if (scores.grammar >= 7.0) strengths.push('Good grammatical control');
  else if (comparisons.grammar?.better_than_4) strengths.push('Fewer errors than basic level');
  
  if (strengths.length === 0) {
    strengths.push('Attempts to address the task');
  }
  
  return strengths.slice(0, 3);
}

function generateImprovements(scores, comparisons) {
  const improvements = [];
  
  if (scores.grammar < 6.0) {
    improvements.push('Focus on basic grammar accuracy: subject-verb agreement, articles (a/the), and correct verb forms');
  }
  
  if (scores.lexical < 6.0) {
    improvements.push('Expand vocabulary beyond basic words (good, bad, very) - use more precise, academic alternatives');
  }
  
  if (scores.task < 6.0) {
    improvements.push('State your position clearly and develop each idea with specific examples');
  }
  
  if (scores.coherence < 6.0) {
    improvements.push('Use clearer paragraph structure and cohesive devices to connect ideas');
  }
  
  if (scores.grammar >= 6.0 && scores.grammar < 8.0) {
    improvements.push('Increase sentence variety with more complex structures (although, which, if clauses)');
  }
  
  if (scores.lexical >= 6.0 && scores.lexical < 8.0) {
    improvements.push('Use more sophisticated vocabulary naturally - study the Band 8 example for word choices');
  }
  
  if (scores.task >= 6.0 && scores.task < 8.0) {
    improvements.push('Include more specific, real-world examples (names, places, statistics)');
  }
  
  if (improvements.length === 0) {
    improvements.push('Continue refining precision and sophistication');
  }
  
  return improvements.slice(0, 3);
}

function generateTips(overall) {
  if (overall < 5.0) {
    return [
      'Study the grammar in the Band 6 example - note correct verb forms',
      'Practice basic sentence patterns before attempting complex ones',
      'Focus on stating ONE clear opinion, not fence-sitting'
    ];
  }
  if (overall < 6.0) {
    return [
      'Compare your vocabulary to the Band 6 example - note the word choices',
      'Ensure every sentence has correct subject-verb agreement',
      'Develop ideas with "because", "for example", "as a result"'
    ];
  }
  if (overall < 7.0) {
    return [
      'Study the Band 8 example - note the specific examples used',
      'Use more sophisticated vocabulary naturally, not forced',
      'Ensure your position is maintained consistently throughout'
    ];
  }
  return [
    'Focus on nuance - acknowledge counterarguments before refuting them',
    'Use specific examples with real names, places, or data',
    'Ensure vocabulary choices are precise and collocationally accurate'
  ];
}

function getBandSummary(overall) {
  if (overall >= 8.0) return 'Very Good User - Handles complex language with full flexibility';
  if (overall >= 7.0) return 'Good User - Handles complex language well';
  if (overall >= 6.0) return 'Competent User - Generally effective despite errors';
  if (overall >= 5.0) return 'Modest User - Partial command with frequent errors';
  return 'Limited User - Basic command with serious errors';
}

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
    immigrationNote = 'This score is below CLB 7, the minimum for Express Entry. Focus on reaching Band 6.0.';
  } else if (clb === 7) {
    immigrationNote = 'This score meets CLB 7, the minimum for Express Entry.';
  } else if (clb === 8) {
    immigrationNote = 'This score meets CLB 8. Band 7.0 (CLB 9) would significantly increase CRS points.';
  } else {
    immigrationNote = 'This score meets CLB 9+, maximizing language points.';
  }
  
  return { clb, nextThreshold, immigrationNote };
}

// =============================================================================
// MAIN HANDLER
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
    
    console.log('=== SCORING ENGINE v5.3 (Comparative) ===');
    
    const taskPrompt = prompt || "Discuss both views and give your own opinion.";
    const { comparisons, wordCount: wc } = await scoreEssayComparative(taskPrompt, answer);
    const { scores, capReasons, closest } = comparisonsToScores(comparisons, wc);
    
    const avg = (scores.task + scores.coherence + scores.lexical + scores.grammar) / 4;
    const overall = Math.round(avg * 2) / 2;
    
    const clbProjection = getCLBProjection(overall);
    const explanations = generateExplanations(scores, capReasons);
    
    console.log('Final scores:', scores, 'Overall:', overall);
    
    const response = {
      task: scores.task,
      coherence: scores.coherence,
      lexical: scores.lexical,
      grammar: scores.grammar,
      overall,
      scores,
      feedback: explanations,
      band_summary: getBandSummary(overall),
      strengths: generateStrengths(scores, comparisons),
      improvements: generateImprovements(scores, comparisons),
      tips: generateTips(overall),
      wordCount: wc,
      testId,
      clb: clbProjection.clb,
      clb_projection: clbProjection,
      _debug: {
        comparisons,
        closest,
        capReasons
      }
    };
    
    // Save to Supabase
    try {
      await supabase.from("user_test_results").insert({
        email: email.toLowerCase(),
        product: "evolve",
        test_id: testId,
        test_type: meta?.type || "writing",
        overall,
        task: scores.task,
        coherence: scores.coherence,
        lexical: scores.lexical,
        grammar: scores.grammar,
        feedback: response,
        answer
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
