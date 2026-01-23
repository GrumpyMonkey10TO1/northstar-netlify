// =============================================================================
// EVOLVE IELTS WRITING SCORING ENGINE v7.2
// =============================================================================
// STRICT ENFORCEMENT: Server-side caps + Grammar-focused calibration
// Two-phase approach: Error counting THEN scoring
// =============================================================================

import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

// =============================================================================
// CALIBRATION ESSAYS - NOW INCLUDES GRAMMAR-FOCUSED BAND 4
// =============================================================================

// Band 4 with GRAMMAR errors (not just spelling) - matches the pattern we're seeing
const BAND_4_GRAMMAR_ESSAY = `Technology is very big today and students use it every day in school and home. Some people think technology make learning more easy, but other people think it make more distraction. I will talk about both side and give my opinion also.

First, technology help students because they can find information very fast. If student do not know something, they can google it and get answer. This is good because before students must go library and find book which take long time. Also teachers use computer and projector in class which make lesson more interesting sometime. Video and picture can help student understand topic better than just reading book.

However, technology also make many distraction and problem for students. Students use phone too much and check message and social media when they should study. They open laptop for homework but then watch video or play game instead. This make them not focus and waste time. Many student cannot control themself and this affect grade badly.

In conclusion, I think technology have both good side and bad side for education. Student should learn to use technology in good way and not let it distract them from study.`;
// KEY: Almost every sentence has subject-verb errors, missing articles, basic vocabulary
// Error count: 25+ basic grammar errors

// Band 4 with SPELLING errors (original style)
const BAND_4_SPELLING_ESSAY = `The modern technology enable the spread of the information around the world, which contribute vast benefits in variaty fields, professional aspect included. However, the scepticles hold a persisimistic attitude toward such phenomenons. In my perspective, the exchange of information is very crucial to provoke the progress in the schooler field.

On the bright side, be able to access information around the world allowing specialists enlarge the data pool. As analysits in economic professional area, the disparity of background in the statistic allows them provide a more accurate prediction.

The opponents who agains widely sharing the professional datas seeing this in a different angle. The easy access of information could means that the lack of censorship, which makes those professional information less reliable.

In conclusion, it is inevitebly that the ability of exchange valuable information are essential to derive vast of benefits in professional world.`;

const BAND_5_ESSAY = `There's an opinion around the ideal way to encourage and teach youngesters how to develop cooperetion skills and that is through team sports at educational facilities. I completly agree with that opinion and this essay shall demonstrate some vital reasons to support my view.

A very important reason is that engrossing with teammates will naturally result in the evolvment in the infant's cooperation and cognitive skills. through sociallizing with other same-aged people, the child meets new children and encounter certain events that will make them acuire skillfulness regarding cooperation. For instance, some parts of the world pour their focus on including activities, in a context of teamwork, in the school curriculum due to the knowledgable fact that working as a group for the child not only it devolops teamwork skills but also the cognitive ones.

Experiencing failure and win will teach the offspring how to encourage their peers when they feel demotivated in order to reach a mutual goal, also how to share and demonstrate their appreciation in terms of winning a comptetion. I have obsorved my little brother when he plays in groups, noticeablly, he gets more motivated and happier when he wins alongside his team because he can express his gratitude and show sence of appreciation to his peers wich means he now developed coopreation skills.

In conclusion, despite the fact that involving in teamwork kind of activity will yield the advancement regarding cooperation and cognitive skills for youngesters, also encountering the results of a competition, whether it was failure or winning, will inevitably make them acuire skills to deal with such events that evenually make them better cooperatives.`;

const BAND_6_ESSAY = `It is often argued that some countries invist in devolping highly specialised training centers to train its top athletes to achieve international sports, instead of facilitate and provide public training centers for everyone to use and to practice. In my opinion i think both ideas together can contribue a very successful achievement in international sports for the country.

Building highly specialised facilities by the country to train its top athletes can help the athletes to get an apropriate training, give them the chance to progress faster and to be qualified to win or host international compititions like olympics, for example if the country invists and build a large swimming center to train professional swimmers, it is highly likely for them to win and get medals in international compititions.

On the other side providing various sport centers for the public use will encourage people to train and practice all kinds of sports more which leads to gaining more athletes to represent the country, for example allowing and giving access to a young talented girls to practice their favorite sport like football, ice skating, bascketball and more will give them the apportinety to become a professional athletes who would benifit and represent the country.

In conclusion, i think both invisting in building specialised facilities to train the top athletes to win and host an international compititions, and invisting in providing sport centers for everyone to use to encourage and build more athletes could be benificial and counribue a highly international achievement in sports for the country it self.`;

const BAND_7_ESSAY = `It is a serious problem that there is an inadequate number of students who tend to select science as their major subject in universities in many countries. In my view, students may think that studying science has not a good career path. Also, this issue may deeply affect the international state of a country.

The main reason why people do not think to study science is that they may see science as something unpractical, and potentially, they are hard to find a job when they graduate. Students are generally afraid that there is no employment opportunity after they graduate from university. Unlike engineering and business management, in which fields employers provide plenty of vocational positions for graduated students because there are lots of companies activating in these fields and universities may provide some practical training courses and internships. Students studying science have a relatively narrow way to walk, and may just be scientists. Moreover, although a successful scientist can get a massive bonus from some prizes, it is too hard to accomplish and is more likely to fail. Therefore, Students will avoid taking those risks and choose other subjects that are relatively stable and easy to find a job.

This trend will eventually decrease the state of a country. Developing science can provide a strong and firm foundation for a country to establish a healthy and prosperous community. If there are not enough scientists, the whole scientific ability will decrease. Not only will the government pay extra money to other foreign countries to buy the required technology such as military equipment, but the public needs to spend more time and pay more effort to maintain the international standard production rate of a country. It is extremely dangerous that a nation easily suffers from a financial crisis and, finally, it influences the living standard of its citizens and causes damage to its financial systems.

In summary, while science is regarded as a "useless" subject because of its narrow career path and low success rate, it is vital that the economic systems would be affected if a country develop without scientists.`;

const BAND_8_ESSAY = `These days it is firmly believed that the most efficient method to teach children in schools how to work together is through team sports. This essay disagrees with the statement since some young students might not enjoy playing sports and because team sports can raise competitiveness amongst children, hence having a negative impact on their friendly relationships.

First of all, although it is vital for a children to play sports and keep fit, not everyone is keen on football, rugby and volleyball. Instead, some young students prefer spending their leisure time on other activities such as joining a chorus group or teathre lessons. These activities can encourage cooperation and make children get along with each other, as well. On the other hand, forcing children to play something they doesn't feel comfortable in can make them withdraw from the team game, which would make them feel excluded.

In addition, teams sports do not always promote cooperation among players. In some cases, inequities or particularly ambitious behaviours can lead to violent competitiveness, instead. It is generally thought that sport is an extremely selective environment, in fact you need to exercise daily in order to keep fit. If obese children took part in those team sports as well, they could feel isolated because they do not own the perfect body to perform well.

In conclusion, although team sports are a great method to teach children how to get along with each other, there are various activities which can encourage cooperation among children, as well. Therefore, it is considerably significant for a school to embrace diversity and make children play with what they really like, instead of forcing them to do something they feel they don't belong.`;

// =============================================================================
// PHASE 1: ERROR COUNTING PROMPT (Separate from scoring)
// =============================================================================

function buildErrorCountingPrompt(essay) {
  return `You are a grammar error detector. Your ONLY job is to count errors in this essay. Do NOT score it. Do NOT be lenient. Count EVERY error.

## ESSAY TO ANALYZE:
"${essay}"

## COUNT THESE ERROR TYPES:

**1. SUBJECT-VERB AGREEMENT ERRORS**
When subject and verb don't match in number.
Examples of errors:
- "technology help students" (should be "helps")
- "it make more distraction" (should be "makes")  
- "This affect grade" (should be "affects")
- "Many student cannot" (should be "students")
- "Video and picture can help student" (should be "students")

**2. MISSING/WRONG ARTICLES (a, an, the)**
Examples of errors:
- "go library" (should be "go to the library")
- "find book" (should be "find a book" or "find books")
- "in class" when specific (should be "in the class")
- "If student do not know" (should be "If a student does not know")

**3. WRONG WORD FORMS**
Examples of errors:
- "more easy" (should be "easier")
- "make learning more easy" (should be "make learning easier")
- "think it make" (should be "makes")
- "which take long time" (should be "takes")

**4. WRONG VERB TENSE/FORM**
Examples of errors:
- "students must go library" (missing "to")
- "can help student understand" (should be "students")
- "I will talk about both side" (should be "sides")

**5. SPELLING ERRORS**
Any misspelled words.

**6. OTHER GRAMMAR ERRORS**
Run-on sentences, fragments, wrong prepositions, etc.

---

## IMPORTANT INSTRUCTIONS:
- Count EVERY instance, not just unique error types
- If "technology help" appears twice, count it TWICE
- If one sentence has 3 errors, count all 3
- Do NOT give the benefit of the doubt
- Do NOT assume the writer "meant" something correct

---

## RESPONSE FORMAT (JSON only, no markdown):

{
  "subject_verb_errors": {
    "count": <number>,
    "examples": ["<quote error 1>", "<quote error 2>", "<quote error 3>"]
  },
  "article_errors": {
    "count": <number>,
    "examples": ["<quote error 1>", "<quote error 2>", "<quote error 3>"]
  },
  "word_form_errors": {
    "count": <number>,
    "examples": ["<quote error 1>", "<quote error 2>"]
  },
  "verb_tense_errors": {
    "count": <number>,
    "examples": ["<quote error 1>", "<quote error 2>"]
  },
  "spelling_errors": {
    "count": <number>,
    "examples": ["<misspelled word 1>", "<misspelled word 2>"]
  },
  "other_errors": {
    "count": <number>,
    "examples": ["<error 1>"]
  },
  "total_errors": <sum of all counts>,
  "errors_per_sentence_avg": <total_errors / number_of_sentences>,
  "sentences_with_multiple_errors": <count of sentences with 2+ errors>,
  "error_density": "low" | "moderate" | "high" | "very_high"
}

Error density guide:
- "low" = less than 0.5 errors per sentence (Band 7-8)
- "moderate" = 0.5-1.0 errors per sentence (Band 6)
- "high" = 1.0-1.5 errors per sentence (Band 5)
- "very_high" = 1.5+ errors per sentence (Band 4)`;
}

// =============================================================================
// PHASE 2: SCORING PROMPT (Uses error count from Phase 1)
// =============================================================================

function buildScoringPrompt(essay, taskPrompt, wordCount, errorAnalysis) {
  const totalErrors = errorAnalysis.total_errors || 0;
  const errorDensity = errorAnalysis.error_density || "unknown";
  
  // Determine the cap based on errors
  let mandatoryCap = "none";
  let capBand = 9.0;
  
  if (totalErrors >= 20 || errorDensity === "very_high") {
    mandatoryCap = "BAND_4_CAP";
    capBand = 4.5;
  } else if (totalErrors >= 15 || errorDensity === "high") {
    mandatoryCap = "BAND_5_CAP";
    capBand = 5.5;
  } else if (totalErrors >= 10 || errorDensity === "moderate") {
    mandatoryCap = "BAND_6_CAP";
    capBand = 6.5;
  }

  return `You are an IELTS Writing Task 2 examiner. Score this essay.

## ⚠️ MANDATORY SCORING CAP ⚠️

An independent error analysis has already been conducted on this essay:

**Total Errors Found: ${totalErrors}**
**Error Density: ${errorDensity}**
**Error Examples:**
- Subject-verb: ${JSON.stringify(errorAnalysis.subject_verb_errors?.examples || [])}
- Articles: ${JSON.stringify(errorAnalysis.article_errors?.examples || [])}
- Word forms: ${JSON.stringify(errorAnalysis.word_form_errors?.examples || [])}

**MANDATORY CAP APPLIED: ${mandatoryCap}**
**MAXIMUM SCORE ALLOWED: ${capBand}**

You CANNOT score above ${capBand} for ANY criterion. This is non-negotiable.

---

## CALIBRATION REFERENCE

### BAND 4.0 (Grammar-focused) - 25+ errors, errors in almost every sentence:
"Technology is very big today and students use it every day... Some people think technology make learning more easy... technology help students because they can find information... If student do not know something... students must go library and find book which take long time... Many student cannot control themself..."

### BAND 5.0 - 15-20 errors, frequent errors but some control:
"There's an opinion around the ideal way to encourage and teach youngesters how to develop cooperetion skills... engrossing with teammates will naturally result in the evolvment in the infant's cooperation..."

### BAND 6.0 - 10-14 errors, noticeable but doesn't impede communication:
"It is often argued that some countries invist in devolping highly specialised training centers... In my opinion i think both ideas together can contribue..."

### BAND 7.0 - 5-9 errors, occasional errors only:
"It is a serious problem that there is an inadequate number of students who tend to select science... students may see science as something unpractical..."

---

## ESSAY TO SCORE

**Task:** ${taskPrompt}
**Word count:** ${wordCount}

**Essay:**
"${essay}"

---

## SCORING CRITERIA (Apply cap of ${capBand} maximum)

**Task Achievement** (max ${capBand}):
- Does it address the prompt?
- Is position clear?
- Are ideas developed?

**Coherence & Cohesion** (max ${capBand}):
- Logical organization?
- Paragraph structure?
- Linking devices?

**Lexical Resource** (max ${capBand}):
- Vocabulary range?
- Word choice accuracy?
- Repetition level?

**Grammatical Range & Accuracy** (max ${Math.min(capBand, 4.5 + (10 - Math.min(totalErrors, 20)) * 0.25)}):
- With ${totalErrors} errors, grammar score MUST be ${totalErrors >= 20 ? "4.0-4.5" : totalErrors >= 15 ? "4.5-5.0" : totalErrors >= 10 ? "5.0-5.5" : "5.5-6.5"}

---

## RESPONSE FORMAT (JSON only):

{
  "task": <score, max ${capBand}>,
  "coherence": <score, max ${capBand}>,
  "lexical": <score, max ${capBand}>,
  "grammar": <score, max ${Math.min(capBand, 5.0)}>,
  "feedback": {
    "task": "<1-2 sentences>",
    "coherence": "<1-2 sentences>",
    "lexical": "<1-2 sentences>",
    "grammar": "<mention the ${totalErrors} errors found>"
  },
  "strengths": ["<strength 1>", "<strength 2>"],
  "improvements": ["<improvement 1>", "<improvement 2>", "<improvement 3>"]
}`;
}

// =============================================================================
// CLEAN ESSAY TEXT
// =============================================================================

function cleanEssayText(text) {
  return text
    .replace(/here is a band \d[^.]*\./gi, '')
    .replace(/this is a band \d[^.]*\./gi, '')
    .replace(/this is (roughly|approximately|about) band \d[^.]*\./gi, '')
    .replace(/band \d[\-–]\d level[^.]*\./gi, '')
    .replace(/band \d\+? (level )?(response|essay|answer)[^.]*\./gi, '')
    .replace(/score this as[^.]*\./gi, '')
    .replace(/give this a[^.]*\./gi, '')
    .replace(/deliberately weak[^.]*\./gi, '')
    .replace(/failing[- ]level[^.]*\./gi, '')
    .trim();
}

// =============================================================================
// PARSE RESPONSE
// =============================================================================

function parseResponse(text) {
  let cleaned = text.replace(/```json\s*/gi, '').replace(/```\s*/gi, '').trim();
  
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error("Could not parse JSON response");
  }
}

// =============================================================================
// SERVER-SIDE CAP ENFORCEMENT
// =============================================================================

function enforceScoreCaps(scores, errorAnalysis, wordCount) {
  const totalErrors = errorAnalysis.total_errors || 0;
  const errorDensity = errorAnalysis.error_density || "low";
  
  let maxAllowed = 9.0;
  let appliedCap = "none";
  
  // Strict caps based on error count
  if (totalErrors >= 20 || errorDensity === "very_high") {
    maxAllowed = 4.5;
    appliedCap = "band_4_cap";
  } else if (totalErrors >= 15 || errorDensity === "high") {
    maxAllowed = 5.5;
    appliedCap = "band_5_cap";
  } else if (totalErrors >= 10 || errorDensity === "moderate") {
    maxAllowed = 6.5;
    appliedCap = "band_6_cap";
  }
  
  // Grammar gets extra penalty - it should directly reflect error count
  let grammarMax = maxAllowed;
  if (totalErrors >= 20) grammarMax = 4.0;
  else if (totalErrors >= 15) grammarMax = 4.5;
  else if (totalErrors >= 10) grammarMax = 5.5;
  
  // Lexical also capped if vocabulary is repetitive
  let lexicalMax = maxAllowed;
  
  // Word count penalty
  if (wordCount < 250) {
    maxAllowed = Math.min(maxAllowed, 6.0);
  }
  if (wordCount < 200) {
    maxAllowed = Math.min(maxAllowed, 5.0);
  }
  
  // Apply caps
  const cappedScores = {
    task: Math.min(maxAllowed, Math.max(3.5, scores.task)),
    coherence: Math.min(maxAllowed, Math.max(3.5, scores.coherence)),
    lexical: Math.min(lexicalMax, Math.max(3.5, scores.lexical)),
    grammar: Math.min(grammarMax, Math.max(3.5, scores.grammar))
  };
  
  return {
    scores: cappedScores,
    appliedCap,
    maxAllowed,
    grammarMax
  };
}

// =============================================================================
// CALCULATE OVERALL
// =============================================================================

function calculateOverall(scores) {
  const avg = (scores.task + scores.coherence + scores.lexical + scores.grammar) / 4;
  return Math.round(avg * 2) / 2;
}

// =============================================================================
// CLB PROJECTION
// =============================================================================

function getCLBProjection(overall) {
  const clbMap = {
    9.0: 12, 8.5: 11, 8.0: 10, 7.5: 9, 7.0: 9,
    6.5: 8, 6.0: 7, 5.5: 6, 5.0: 5, 4.5: 4, 4.0: 4, 3.5: 3, 3.0: 3
  };
  
  const clb = clbMap[overall] || 5;
  const meetsExpress = clb >= 7;
  const meetsCLB9 = clb >= 9;
  
  return {
    clb,
    meetsExpressEntry: meetsExpress,
    meetsCLB9ForBonus: meetsCLB9,
    recommendation: meetsCLB9 
      ? "Excellent! You meet CLB 9 for maximum CRS points."
      : meetsExpress 
        ? `You meet Express Entry minimum. Improving to Band ${overall < 7.0 ? '7.0' : '7.5'}+ would increase your CRS score.`
        : "Focus on reaching Band 6.0+ to meet Express Entry requirements."
  };
}

// =============================================================================
// BAND SUMMARY
// =============================================================================

function getBandSummary(overall) {
  if (overall >= 8.5) return "Expert user - exceptional quality with sophisticated language and fully developed arguments.";
  if (overall >= 8.0) return "Very good user - very few errors, sophisticated language, well-developed arguments.";
  if (overall >= 7.0) return "Good user - occasional errors, good vocabulary range, well-developed ideas.";
  if (overall >= 6.0) return "Competent user - some errors, adequate vocabulary, ideas need more development.";
  if (overall >= 5.0) return "Modest user - frequent errors, limited vocabulary, basic idea development.";
  if (overall >= 4.0) return "Limited user - many errors in almost every sentence, very basic vocabulary, ideas underdeveloped.";
  return "Extremely limited user - severe errors throughout, communication significantly impaired.";
}

// =============================================================================
// MAIN HANDLER
// =============================================================================

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    const { email, testId, prompt, answer, timeSpent, meta } = JSON.parse(event.body || "{}");

    if (!email || !testId || !prompt || !answer) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing required fields: email, testId, prompt, answer" })
      };
    }

    const cleanedAnswer = cleanEssayText(answer);
    const wordCount = cleanedAnswer.trim().split(/\s+/).filter(w => w.length > 0).length;
    
    console.log("v7.2 Scoring request:", { email, testId, wordCount });

    // =========================================================================
    // PHASE 1: ERROR COUNTING (Separate API call)
    // =========================================================================
    
    console.log("Phase 1: Counting errors...");
    
    const errorCountPrompt = buildErrorCountingPrompt(cleanedAnswer);
    
    const errorCountCompletion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a strict grammar error detector. Count EVERY error. Do NOT be lenient. Do NOT give benefit of the doubt. If something looks wrong, count it. Return only valid JSON."
        },
        {
          role: "user",
          content: errorCountPrompt
        }
      ],
      temperature: 0.0,  // Zero temperature for consistent counting
      max_tokens: 1500
    });

    let errorAnalysis;
    try {
      errorAnalysis = parseResponse(errorCountCompletion.choices[0].message.content);
      console.log("Error analysis:", JSON.stringify(errorAnalysis, null, 2));
    } catch (parseError) {
      console.error("Error count parse failed:", parseError);
      // Default to moderate errors if parsing fails
      errorAnalysis = {
        total_errors: 15,
        error_density: "high",
        subject_verb_errors: { count: 5, examples: [] },
        article_errors: { count: 5, examples: [] },
        word_form_errors: { count: 3, examples: [] },
        verb_tense_errors: { count: 2, examples: [] },
        spelling_errors: { count: 0, examples: [] },
        other_errors: { count: 0, examples: [] }
      };
    }

    // =========================================================================
    // PHASE 2: SCORING (With error count constraint)
    // =========================================================================
    
    console.log("Phase 2: Scoring with error constraints...");
    
    const scoringPrompt = buildScoringPrompt(cleanedAnswer, prompt, wordCount, errorAnalysis);

    const scoringCompletion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are an IELTS examiner. The essay has been analyzed and contains ${errorAnalysis.total_errors} errors with ${errorAnalysis.error_density} error density. You MUST respect the scoring caps. An essay with ${errorAnalysis.total_errors} errors CANNOT score above ${errorAnalysis.total_errors >= 20 ? '4.5' : errorAnalysis.total_errors >= 15 ? '5.5' : errorAnalysis.total_errors >= 10 ? '6.5' : '7.5'}. Return only valid JSON.`
        },
        {
          role: "user",
          content: scoringPrompt
        }
      ],
      temperature: 0.1,
      max_tokens: 1200
    });

    let scoringResult;
    try {
      scoringResult = parseResponse(scoringCompletion.choices[0].message.content);
      console.log("Scoring result:", JSON.stringify(scoringResult, null, 2));
    } catch (parseError) {
      console.error("Scoring parse failed:", parseError);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Failed to parse scoring response" })
      };
    }

    // =========================================================================
    // PHASE 3: SERVER-SIDE CAP ENFORCEMENT (Final safety net)
    // =========================================================================
    
    console.log("Phase 3: Enforcing server-side caps...");
    
    const rawScores = {
      task: parseFloat(scoringResult.task) || 5.0,
      coherence: parseFloat(scoringResult.coherence) || 5.0,
      lexical: parseFloat(scoringResult.lexical) || 5.0,
      grammar: parseFloat(scoringResult.grammar) || 5.0
    };
    
    const { scores: cappedScores, appliedCap, maxAllowed, grammarMax } = enforceScoreCaps(
      rawScores, 
      errorAnalysis, 
      wordCount
    );
    
    console.log("Raw scores:", rawScores);
    console.log("Capped scores:", cappedScores);
    console.log("Applied cap:", appliedCap);
    
    const overall = calculateOverall(cappedScores);
    const clbProjection = getCLBProjection(overall);

    // =========================================================================
    // BUILD RESPONSE
    // =========================================================================

    const response = {
      task: cappedScores.task,
      coherence: cappedScores.coherence,
      lexical: cappedScores.lexical,
      grammar: cappedScores.grammar,
      overall,
      error_analysis: {
        total_errors: errorAnalysis.total_errors,
        error_density: errorAnalysis.error_density,
        subject_verb_errors: errorAnalysis.subject_verb_errors?.count || 0,
        article_errors: errorAnalysis.article_errors?.count || 0,
        word_form_errors: errorAnalysis.word_form_errors?.count || 0,
        spelling_errors: errorAnalysis.spelling_errors?.count || 0,
        example_errors: [
          ...(errorAnalysis.subject_verb_errors?.examples || []).slice(0, 2),
          ...(errorAnalysis.article_errors?.examples || []).slice(0, 2)
        ]
      },
      applied_cap: appliedCap,
      feedback: scoringResult.feedback || {},
      band_summary: getBandSummary(overall),
      strengths: scoringResult.strengths || [],
      improvements: scoringResult.improvements || [],
      wordCount,
      testId,
      clb: clbProjection.clb,
      clb_projection: clbProjection,
      _debug: {
        version: "v7.2",
        model: "gpt-4o",
        raw_scores: rawScores,
        capped_scores: cappedScores,
        applied_cap: appliedCap,
        max_allowed: maxAllowed,
        grammar_max: grammarMax,
        total_errors: errorAnalysis.total_errors,
        error_density: errorAnalysis.error_density
      }
    };

    // =========================================================================
    // SAVE TO SUPABASE
    // =========================================================================
    
    try {
      await supabase.from("user_test_results").insert({
        email: email.toLowerCase(),
        product: "evolve",
        test_id: testId,
        test_type: meta?.type || "writing",
        overall,
        task: cappedScores.task,
        coherence: cappedScores.coherence,
        lexical: cappedScores.lexical,
        grammar: cappedScores.grammar,
        feedback: response,
        answer: answer
      });
    } catch (dbError) {
      console.log("DB save skipped:", dbError.message);
    }

    return { statusCode: 200, headers, body: JSON.stringify(response) };

  } catch (error) {
    console.error("Scoring error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
}
