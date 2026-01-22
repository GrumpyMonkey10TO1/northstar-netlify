// =============================================================================
// EVOLVE IELTS WRITING SCORING ENGINE v6
// =============================================================================
// Uses REAL scored essays from Kaggle IELTS dataset as calibration anchors
// GPT compares submitted essay against actual Band 4, 5, 6, 7, 8 examples
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
// REAL CALIBRATION ESSAYS FROM IELTS DATASET
// These are actual essays scored by IELTS examiners
// =============================================================================

const BAND_4_ESSAY = `The modern technology enable the spread of the information around the world, which contribute vast benefits in variaty fields, professional aspect included. However, the scepticles hold a persisimistic attitude toward such phenomenons. In my perspective, the exchange of information is very crucial to provoke the progress in the schooler field. The wrongful usage of valuable data, on the other hand, should be carefully abserved by authorities.
On the bright side, be able to access information around the world allowing specialists enlarge the data pool. As analysits in economic professional area, the disparity of background in the statistic allows them provide a more accurate prediction.
The opponents who agains widely sharing the professional datas seeing this in a different angle. The easy access of information could means that the lack of censorship, which makes those professional information less reliable. It could led to a great bias conclusion regarding the researchs and statistics done base on such information. Many well known newspapers which alledged for delivering default message are due to refer the unreliable resource from internet.
In conclusion, it is inevitebly that the ability of exchange valuable information are essential to derive vast of benefits in professional world and provoke the developing of human society in variaty of aspects, such as science, economic, and other professional area. However, it is also very crucial for the correlative authorities to came out a series of countermeasures to varify the reliability of those resources in the cyber world.`;

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
// SCORING PROMPT - COMPARATIVE APPROACH
// =============================================================================

function buildScoringPrompt(essay, taskPrompt, wordCount) {
  return `You are an IELTS Writing Task 2 examiner. You will score an essay by comparing it to REAL scored essays.

## CALIBRATION ESSAYS (scored by real IELTS examiners)

### BAND 4.0 EXAMPLE:
"${BAND_4_ESSAY}"
CHARACTERISTICS: Frequent spelling/grammar errors ("variaty", "scepticles", "persisimistic", "abserved"), attempts complex vocabulary but misuses it, ideas present but poorly connected, position unclear.

### BAND 5.0 EXAMPLE:
"${BAND_5_ESSAY}"
CHARACTERISTICS: Spelling errors throughout ("youngesters", "cooperetion", "completly", "evolvment", "acuire"), basic vocabulary repeated, ideas present but underdeveloped, some organization visible.

### BAND 6.0 EXAMPLE:
"${BAND_6_ESSAY}"
CHARACTERISTICS: Some spelling errors ("invist", "devolping", "compititions", "bascketball"), adequate vocabulary, clear position, ideas developed but could be stronger, reasonable coherence.

### BAND 7.0 EXAMPLE:
"${BAND_7_ESSAY}"
CHARACTERISTICS: Rare errors, good vocabulary range ("inadequate", "vocational", "prosperous"), clear position throughout, well-developed ideas with examples, logical progression, minor issues only.

### BAND 8.0 EXAMPLE:
"${BAND_8_ESSAY}"
CHARACTERISTICS: Very few errors, sophisticated vocabulary ("competitiveness", "inequities", "embrace diversity"), nuanced position, fully developed arguments, excellent coherence, reads fluently.

---

## ESSAY TO SCORE

**Task:** ${taskPrompt}
**Word count:** ${wordCount}
**Essay:**
"${essay}"

---

## SCORING INSTRUCTIONS

Compare the submitted essay to the calibration essays above. Ask yourself:
- Does it have MORE or FEWER errors than the Band 5 example?
- Is the vocabulary MORE or LESS sophisticated than the Band 6 example?
- Are ideas BETTER or WORSE developed than the Band 7 example?

Then assign scores for each criterion:

**Task Response (TR):** Does it address all parts of the task? Is the position clear? Are ideas relevant and developed?
**Coherence & Cohesion (CC):** Is it logically organized? Are paragraphs well-linked? Does it flow?
**Lexical Resource (LR):** Is vocabulary adequate, good, or sophisticated? Are there word choice errors?
**Grammatical Range & Accuracy (GRA):** Are sentences varied? How frequent are grammar errors?

IMPORTANT RULES:
- Essays with frequent spelling/grammar errors like Band 4-5 examples CANNOT score above 5.5 for GRA
- Essays with basic/repetitive vocabulary like Band 5 example CANNOT score above 5.5 for LR
- Essays under 250 words are capped at 6.0 overall
- Be STRICT: only give 7+ if the essay is clearly BETTER than the Band 6 example
- Be STRICT: only give 8+ if the essay is clearly AS GOOD AS the Band 8 example

---

## RESPONSE FORMAT

Return ONLY valid JSON (no markdown, no explanation):

{
  "closest_to": "band_4" | "band_5" | "band_6" | "band_7" | "band_8",
  "task": <score 4.0-9.0>,
  "coherence": <score 4.0-9.0>,
  "lexical": <score 4.0-9.0>,
  "grammar": <score 4.0-9.0>,
  "overall": <score 4.0-9.0>,
  "feedback": {
    "task": "<1-2 sentences on task response>",
    "coherence": "<1-2 sentences on coherence>",
    "lexical": "<1-2 sentences on vocabulary>",
    "grammar": "<1-2 sentences on grammar>"
  },
  "strengths": ["<strength 1>", "<strength 2>"],
  "improvements": ["<improvement 1>", "<improvement 2>", "<improvement 3>"]
}`;
}

// =============================================================================
// CLEAN ESSAY TEXT (prevent prompt injection)
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
  // Remove markdown code blocks if present
  let cleaned = text.replace(/```json\s*/gi, '').replace(/```\s*/gi, '').trim();
  
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    // Try to extract JSON from the response
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error("Could not parse JSON response");
  }
}

// =============================================================================
// CALCULATE OVERALL (weighted average, rounded to nearest 0.5)
// =============================================================================

function calculateOverall(scores) {
  // IELTS weights all 4 criteria equally
  const avg = (scores.task + scores.coherence + scores.lexical + scores.grammar) / 4;
  return Math.round(avg * 2) / 2; // Round to nearest 0.5
}

// =============================================================================
// CLB PROJECTION
// =============================================================================

function getCLBProjection(overall) {
  const clbMap = {
    9.0: 12, 8.5: 11, 8.0: 10, 7.5: 9, 7.0: 9,
    6.5: 8, 6.0: 7, 5.5: 6, 5.0: 5, 4.5: 4, 4.0: 4
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
  if (overall >= 8.0) return "Expert user - very few errors, sophisticated language, fully developed arguments.";
  if (overall >= 7.0) return "Good user - occasional errors, good vocabulary range, well-developed ideas.";
  if (overall >= 6.0) return "Competent user - some errors, adequate vocabulary, ideas need more development.";
  if (overall >= 5.0) return "Modest user - frequent errors, limited vocabulary, basic idea development.";
  return "Limited user - many errors affecting comprehension, very basic vocabulary.";
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

    // Clean and analyze the essay
    const cleanedAnswer = cleanEssayText(answer);
    const wordCount = cleanedAnswer.trim().split(/\s+/).filter(w => w.length > 0).length;
    
    console.log("v6 Scoring request:", { email, testId, wordCount });

    // Build the comparative scoring prompt
    const scoringPrompt = buildScoringPrompt(cleanedAnswer, prompt, wordCount);

    // Call GPT-4o
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert IELTS examiner. Score essays by comparing them to real calibration examples. Return only valid JSON."
        },
        {
          role: "user",
          content: scoringPrompt
        }
      ],
      temperature: 0.3,  // Low temperature for consistency
      max_tokens: 1000
    });

    const responseText = completion.choices[0].message.content;
    console.log("GPT response:", responseText);

    // Parse the response
    let result;
    try {
      result = parseResponse(responseText);
    } catch (parseError) {
      console.error("Parse error:", parseError);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Failed to parse scoring response" })
      };
    }

    // Validate and constrain scores
    const task = Math.min(9, Math.max(4, parseFloat(result.task) || 5.5));
    const coherence = Math.min(9, Math.max(4, parseFloat(result.coherence) || 5.5));
    const lexical = Math.min(9, Math.max(4, parseFloat(result.lexical) || 5.5));
    const grammar = Math.min(9, Math.max(4, parseFloat(result.grammar) || 5.5));
    
    // Recalculate overall to ensure consistency
    let overall = calculateOverall({ task, coherence, lexical, grammar });
    
    // Apply word count cap
    if (wordCount < 250 && overall > 6.0) {
      overall = 6.0;
    }
    
    // Get CLB projection
    const clbProjection = getCLBProjection(overall);

    // Build response
    const response = {
      // Scores
      task,
      coherence,
      lexical,
      grammar,
      overall,
      
      // Comparison info
      closest_to: result.closest_to || "unknown",
      
      // Feedback
      feedback: result.feedback || {},
      band_summary: getBandSummary(overall),
      strengths: result.strengths || [],
      improvements: result.improvements || [],
      
      // Meta
      wordCount,
      testId,
      
      // CLB Immigration projection
      clb: clbProjection.clb,
      clb_projection: clbProjection,
      
      // Debug info
      _debug: {
        version: "v6",
        model: "gpt-4o",
        closest_to: result.closest_to
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
        task,
        coherence,
        lexical,
        grammar,
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
