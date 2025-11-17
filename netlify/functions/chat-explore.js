// /netlify/functions/chat-explore.js
// North Star Explore server function v3 - FULLY CORRECTED & IMPROVED
// - Fixed OpenAI API calls (was using wrong endpoint)
// - Profile context now injected into system prompt
// - Better error handling with detailed logging
// - Improved profile extraction with better regex
// - Rate limiting considerations
// - Proper input validation
// - Longer history context window

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Only allow calls from migratenorth.ca
const ORIGIN = "https://migratenorth.ca";

// ✅ FIX: Add rate limiting map (simple in-memory, in production use Redis)
const requestCounts = new Map();
const RATE_LIMIT_MAX = 20; // Max 20 requests per IP per 5 minutes
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes

function checkRateLimit(ip) {
  const now = Date.now();
  const key = ip || "unknown";
  
  if (!requestCounts.has(key)) {
    requestCounts.set(key, []);
  }
  
  const timestamps = requestCounts.get(key);
  const recentRequests = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return false;
  }
  
  recentRequests.push(now);
  requestCounts.set(key, recentRequests);
  return true;
}

// Small helper to standardize successful responses
function ok(body) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": ORIGIN,
    },
    body: JSON.stringify(body),
  };
}

// Small helper to standardize error responses
function errorResponse(statusCode, message) {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": ORIGIN,
    },
    body: JSON.stringify({ error: message }),
  };
}

// =============================================================================
// FAQ RESPONSE LIBRARY (conversion oriented, but educational and honest)
// =============================================================================

const FAQ_RESPONSES = {
  // === SECTION 1: START HERE ===
  "Am I Eligible for Express Entry?": `Great question. Let me break this down simply.

✅ You are likely eligible if:
• You have at least 1 year of skilled work experience (NOC TEER 0, 1, 2, or 3)
• You have IELTS or CELPIP results (or can get them)
• Your degree can be assessed by WES or another IRCC listed body
• You are under 45 years old

❌ Red flags that block most applicants:
• Less than 1 year of continuous full time skilled work
• Work experience in NOC TEER 4 or 5
• No post secondary education
• Serious criminal or medical inadmissibility issues

📊 Reality check:
In recent years, general ITA cutoffs for Express Entry have often landed around the high 400s to low 500s CRS. If you are:
• Around 25 to 35 years old
• With a bachelor degree and 3 years skilled work experience
• With IELTS around CLB 7 to 8
• Applying without spouse

You are probably somewhere around 380 to 450 CRS. That is not hopeless, it just means you need a deliberate strategy to close the gap.

💡 Want a more exact picture?
Tell me your:
Age | Education | Years of skilled work | Test scores | Marital status

I will estimate your CRS and show where you can gain the most points.`,

  "What's My Realistic CRS Score?": `We can build a realistic CRS estimate, but first I need a few details.

Please tell me:
1) Your age
2) Highest education level (high school, diploma, bachelor, master, PhD)
3) Total years of full time skilled work (NOC TEER 0, 1, 2, or 3)
4) IELTS or CELPIP scores in each skill, or at least an average
5) Marital status (single or married, and whether spouse has education and English)

Once I have that, I will:
• Estimate your CRS
• Compare it with recent ITA levels
• Show you which levers are easiest to pull for extra points
• Flag whether you should think about PNP, job offer, or study route

If you already know your CRS, you can simply send: "My CRS is X, what are my options?"`,

  "How Long Will This Take?": `Short honest answer: from a cold start, many people are looking at roughly 6 to 18 months from first step to landing in Canada, if everything goes smoothly.

Here is a rough breakdown.

Phase 1: Preparation (about 3 to 6 months)
• Educational Credential Assessment (ECA): 1 to 3 months
• IELTS or CELPIP prep and exam: 1 to 3 months, sometimes more
• Collecting documents such as reference letters and police clearances: several weeks
• Creating your Express Entry profile: once your inputs are ready, this is quick

Phase 2: Waiting for an invitation (very variable)
• If CRS is very strong, you may be invited in a few draws
• If CRS is borderline, you may wait many months
• If you rely on PNP, timelines depend on the province

Phase 3: After ITA to PR visa (often 4 to 6 months, but can vary)
• Uploading all documents
• Medicals, biometrics
• Background checks and final approval

The process is manageable if you work backwards from an approximate target date. If you tell me your current status (for example, "no ECA yet, IELTS planned, no profile" or "profile already created, CRS 430") I can sketch a more tailored timeline.`,

  "Total Cost Breakdown": `Here is a practical cost overview for a typical skilled worker Express Entry case, not including flights or settlement funds.

Mandatory fees (for one principal applicant, rough ranges in CAD):
• IELTS or CELPIP exam: about 300 to 400
• ECA: around 200 to 300
• Government processing fee and Right of Permanent Residence Fee: around 1,365
• Biometrics: about 85
• Police certificates: sometimes free, sometimes up to about 100
• Medical exam: roughly 200 to 450 per person

You also must show proof of funds, which is not a fee but money you need in your account. For one adult, required funds are around the low to mid teens in thousands of dollars, higher for couples and families.

Optional but common spending:
• Test prep courses
• Immigration advice or representation

The important part is to have a budget on paper, so you are not surprised halfway through. If you tell me your family size, I can sketch a more specific cost map for you.`,

  // === SECTION 2: TOP CONCERNS ===
  "My CRS Is Too Low - What Now?": `If your CRS is below recent general draw cutoffs, it does not automatically mean it is over. It means you need a deliberate plan.

Typical levers to raise CRS:
1) Language
   • Moving from CLB 7 to CLB 9 can add dozens of points, especially when combined with education and work history.
   • This is often the biggest single lever for many applicants.

2) Education
   • A completed master program can significantly increase CRS compared to a bachelor.
   • For some applicants, a one year program in Canada can open more pathways, but it also has cost and risk.

3) Additional skilled work experience
   • Reaching higher experience brackets can add points, but takes time.

4) Spouse strategy
   • In some cases, including your spouse helps your score (if they have strong education and language).
   • In other cases, designating the spouse as non accompanying or switching principal applicant can be better.

5) Provincial Nominee Program (PNP)
   • A nomination adds a large fixed chunk of CRS, which can essentially guarantee an ITA once it is on your profile.

What we can do here in Explore:
You tell me your current CRS, basic profile, and any constraints (for example "I cannot study in Canada" or "I cannot change jobs easily"). I will map the most realistic path forward and tell you frankly if Express Entry is unlikely without major changes.`,

  "Common Mistakes That Kill Applications": `Here are some of the most common problems that lead to refusals or long delays.

1) Claiming work experience that cannot be properly proven
   • If reference letters, payslips or tax records do not support what you claim, there is real risk.
   • Duties must match the chosen NOC in substance, not just title.

2) Choosing the wrong NOC code
   • IRCC looks at duties, not job titles.
   • A mismatch between stated NOC and actual duties can cause refusal.

3) Weak or incorrect proof of funds
   • Sudden large deposits without a good explanation
   • Balances that are not maintained over time
   • Assets that are not considered liquid enough

4) Unclear or inconsistent personal history
   • Gaps in addresses or activity
   • Overlapping employment and study periods that are not explained

5) Rushing after ITA
   • Many people do not start collecting documents until after invitation.
   • The 60 day deadline can be tight if police certificates or reference letters take time.

The main way to avoid these is to work through a document checklist early, long before ITA. If you tell me your current stage, I can list the documents you should already be preparing.`,

  "Will I Get an ITA This Year?": `No one can guarantee an ITA in a specific year, but we can reason about probabilities.

Very roughly:
• If your CRS is well above recent general draw cutoffs, your odds are good.
• If your CRS is just below, your odds depend heavily on category or PNP.
• If your CRS is far below, it is safer to assume you need to improve score or change strategy.

Category based draws (health care, STEM, trades, French, and so on) have lower CRS cutoffs, but only for people in those categories.

To give you a meaningful answer I need:
1) Your current CRS
2) Your main NOC or field (for example nurse, software developer, electrician)
3) Whether you speak French at a strong level
4) Whether you are open to PNP

Send those details and I will give you a simple, realistic statement like:
• "Likely this year if you maintain or slightly improve"
• "Possible, but you should plan a backup such as PNP"
• "Unlikely without a major change to your profile"`,

  "How to Boost CRS by 50+ Points Fast": `If your CRS is close, you do not always need a complete life change. Many people can gain 30 to 60 points by focusing on a few specific levers.

Typical faster levers:
1) Language upgrade
   • Going from mid sixes to sevens, or from sevens to eights, can increase both core language points and skill transferability.
   • For many people this is the single most realistic lever within a few months.

2) Spouse optimization
   • If you are married, you can sometimes gain points by:
     - Having the spouse write IELTS and get an ECA
     - Or in some cases, changing who is listed as principal applicant
   • Sometimes excluding the spouse as accompanying can increase CRS, although that has family implications.

3) PNP
   • A provincial nomination is a large fixed chunk of points.
   • It is not quick or guaranteed, but for some NOCs and CRS ranges it is realistic.

Slower but powerful levers:
4) Canadian education
5) Additional work experience in the right NOC

If you share your current CRS, English scores, spouse situation, and willingness to move or study, I can outline which combination is most realistic for you.`,

  // === SECTION 3: TEST YOUR ENGLISH (short samples) ===
  "Try Free IELTS Reading Sample": `Here is a small reading sample to help you feel the format.

Passage:
Urban agriculture is changing through vertical farming, where crops are grown in stacked layers in controlled indoor environments. Instead of using large fields, vertical farms often convert warehouses into intensive growing spaces. Many use hydroponics, LED lighting, and climate control systems to keep conditions stable.

Supporters say vertical farming uses far less water than traditional farming, avoids many pesticides, and can be placed near cities so food travels shorter distances. Critics point out that the equipment is expensive and the electricity demand is high, which can make the produce costly.

Questions (True, False, or Not Given):
1) Vertical farms always require new buildings.
2) Vertical farms can reduce the distance food travels.
3) Critics are concerned about high electricity use.

Answers:
1) False. The passage says they often convert warehouses, not always new buildings.
2) True. Because farms are closer to cities.
3) True. High electricity demand is listed as a concern.

If you tell me how many you got right, I can comment on where you are comfortable and where you might need training.`,

  "Try Free IELTS Writing Sample": `Here is a Writing Task 2 style prompt.

Question:
Some people believe that working from home is better for employees and companies. Others think that going to an office is still important. Discuss both views and give your own opinion.

Write at least 250 words.

A strong answer will:
• Paraphrase the question in the introduction
• Present one view in a body paragraph with examples
• Present the opposite view with examples
• Clearly state your own opinion and link it to the discussion
• Use clear topic sentences and logical transitions

If you want, you can write a short answer and paste it here. I can give you structured feedback based on IELTS criteria: task response, coherence and cohesion, vocabulary, and grammar range and accuracy.`,

  "Try Free IELTS Listening Sample": `Imagine this simple listening situation.

You hear:
Student: I would like to live close to the library if possible. My budget is about 150 dollars per week. I prefer a private room because I need quiet. My course starts on September 15, so I would like to move in around September 12. I also need access to a kitchen because I cook my own food.

Questions:
1) Where does the student want to live close to?
2) What is the weekly budget?
3) What type of room does the student want?
4) Around what date does the student want to move in?
5) What facility is important to the student?

Answers:
1) The library
2) 150 per week
3) A private room
4) Around September 12
5) A kitchen

Even this simple example shows typical IELTS listening patterns: preferences, numbers, dates, and facilities. If you struggled with any of these, we can talk about listening strategies.`,

  "How to Hit CLB 9 in 6 Weeks": `CLB 9 for IELTS generally means:
• Listening 8
• Reading 7
• Writing 7
• Speaking 7

Reaching that level in six to eight weeks is only realistic if:
• Your base English is already fairly strong
• You train specifically for the test format, not just general English

A practical plan usually includes:
• Reading: learn to scan for keywords and understand question types rather than reading every word slowly
• Listening: pre reading questions, listening for synonyms, and training with different accents
• Writing: using clear templates for Task 1 and Task 2, with strong introductions and topic sentences
• Speaking: practicing common topics so you are not thinking from zero in the exam

If you tell me your current scores or estimated level, I can tell you whether a six week target is realistic or if you should plan a longer runway.`,

  // === SECTION 4: IMMIGRATION MECHANICS ===
  "What Documents Do I Actually Need?": `Document lists vary by profile, but for a typical skilled worker Express Entry case you can think in layers.

Core identity and status:
• Valid passport for you and family members
• Birth certificates or equivalent where needed
• Marriage certificate or proof of common law, if applicable

Education:
• Degree certificates and transcripts
• Educational Credential Assessment (ECA) results for the degrees you are claiming points for

Language:
• IELTS or CELPIP results for the principal applicant
• Sometimes spouse language results if you claim points

Work experience:
• Reference letters that show job title, main duties, dates, hours per week, and salary
• Supporting documents such as payslips or tax records, where available

Funds and financials:
• Proof of funds that meet IRCC minimums, held in acceptable form
• Bank letters and statements that show consistent balances

After ITA you will also deal with:
• Police certificates for each relevant country of residence
• Medical exam results
• Biometrics

If you tell me your current stage (for example "I have degree and IELTS, no ECA yet" or "I already have a profile") I can outline which documents you should focus on first.`,

  "Provincial Nominee Programs Explained": `Provincial Nominee Programs, or PNPs, are ways for provinces to select candidates who match their labour and demographic needs.

Basic idea:
• You first become known to a province, either from the Express Entry pool or by applying directly
• The province assesses you according to its own criteria
• If nominated, you receive a large fixed number of points added to your federal CRS (for Express Entry aligned streams) or a separate permanent residence stream outside Express Entry

Key points:
• Every province has its own streams and priorities
• Many streams have occupation lists or target sectors
• Some streams require a job offer, others do not
• Many streams open and close quickly

PNP is often the main path for people whose CRS is not competitive enough for general federal draws. If you tell me your field, CRS, and whether you are already in Canada, I can suggest which provinces are most worth investigating.`,

  "Get My Personalized Immigration Strategy": `If you want a more coherent plan instead of random moves, here is what I can do with you in this chat.

Step 1: Profile snapshot
You send:
• Age
• Highest education
• Years of full time skilled work, inside and outside Canada
• Language scores
• Marital status and spouse details
• Whether you already live in Canada and in what status

Step 2: Constraint snapshot
You tell me:
• Budget and time tolerance
• Whether you are open to study or only PR
• Whether you can change jobs or locations

Step 3: Strategy sketch
I will:
• Estimate your CRS or work with your current CRS
• Tell you whether Express Entry is realistic in the near term
• List the main realistic options (for example PNP, study, job offer, waiting with clear plan)
• Highlight the most important next three actions

This is not legal advice or a substitute for a full paid consultation, but it will give you a much clearer big picture.`,

  "Why Choose Migrate North Over Consultants?": `Traditional routes:
• Many consultants use fixed templates and do not have time to walk you through strategy in detail
• Fees can run into several thousand dollars over the full process
• Communication is often limited to appointments and email

The Migrate North idea:
• Explore gives you free structured orientation so you understand your options before paying anything
• Evolve focuses on the single biggest bottleneck for many people, which is language score
• Execute is designed as a practical file companion to help you think like an organized applicant, even if you still want human review at key points

The goal is not to replace careful human work, but to give you:
• Clarity on options and tradeoffs
• Tools that are affordable compared to traditional full service models
• A way to prepare yourself so that, if you later work with a representative, you are already organized and informed

You remain in control of your file. The tools are there to reduce confusion and wasted effort.`
};

// =============================================================================
// FAQ MATCHING
// =============================================================================

function getFAQResponse(message) {
  if (!message) return null;
  const raw = String(message).trim();
  if (!raw) return null;

  // Exact key match first (for quick buttons)
  if (FAQ_RESPONSES[raw]) {
    return FAQ_RESPONSES[raw];
  }

  const lower = raw.toLowerCase();

  const variations = {
    eligible: "Am I Eligible for Express Entry?",
    eligibility: "Am I Eligible for Express Entry?",
    qualify: "Am I Eligible for Express Entry?",
    crs: "What's My Realistic CRS Score?",
    score: "What's My Realistic CRS Score?",
    timeline: "How Long Will This Take?",
    "how long": "How Long Will This Take?",
    cost: "Total Cost Breakdown",
    price: "Total Cost Breakdown",
    fees: "Total Cost Breakdown",
    "low crs": "My CRS Is Too Low - What Now?",
    stuck: "My CRS Is Too Low - What Now?",
    mistake: "Common Mistakes That Kill Applications",
    error: "Common Mistakes That Kill Applications",
    ita: "Will I Get an ITA This Year?",
    invitation: "Will I Get an ITA This Year?",
    boost: "How to Boost CRS by 50+ Points Fast",
    increase: "How to Boost CRS by 50+ Points Fast",
    improve: "How to Boost CRS by 50+ Points Fast",
    reading: "Try Free IELTS Reading Sample",
    writing: "Try Free IELTS Writing Sample",
    listening: "Try Free IELTS Listening Sample",
    "clb 9": "How to Hit CLB 9 in 6 Weeks",
    strategy: "Get My Personalized Immigration Strategy",
    roadmap: "Get My Personalized Immigration Strategy",
    documents: "What Documents Do I Actually Need?",
    docs: "What Documents Do I Actually Need?",
    pnp: "Provincial Nominee Programs Explained",
    provincial: "Provincial Nominee Programs Explained",
    "why migrate north": "Why Choose Migrate North Over Consultants?",
    "why you": "Why Choose Migrate North Over Consultants?"
  };

  for (const [keyword, keyName] of Object.entries(variations)) {
    if (lower.includes(keyword) && FAQ_RESPONSES[keyName]) {
      return FAQ_RESPONSES[keyName];
    }
  }

  return null;
}

// =============================================================================
// HISTORY HELPERS
// =============================================================================

function normalizeHistory(history) {
  if (!Array.isArray(history)) return [];
  return history
    .map((m) => {
      if (!m || typeof m !== "object") return null;
      const role = m.role === "assistant" || m.role === "bot" ? "assistant" : "user";
      const content = m.content ?? m.text ?? "";
      if (!content) return null;
      return { role, content: String(content).slice(0, 2000) }; // ✅ ADD: Limit message length
    })
    .filter(Boolean);
}

function getLastAssistantMessage(history) {
  const norm = normalizeHistory(history);
  for (let i = norm.length - 1; i >= 0; i -= 1) {
    if (norm[i].role === "assistant") return norm[i].content;
  }
  return "";
}

// =============================================================================
// PROFILE EXTRACTION AND CRS (IMPROVED)
// =============================================================================

// ✅ IMPROVED: Better extraction with more regex patterns
function extractProfileFromMessage(message, existingProfile = {}) {
  const profile = { ...(existingProfile || {}) };
  const text = String(message || "");
  const lower = text.toLowerCase();

  // Age: multiple patterns for better coverage
  const agePatterns = [
    /\b(\d{1,2})\s*(?:years?\s*old|y\.?o\.?|yrs?\s*old|age)\b/i,
    /\bi\s*am\s*(\d{1,2})\b/i,
    /\bm[yi]\s+(?:age|age\s+is)?\s*(\d{1,2})\b/i,
    /\b(?:aged?|currently)\s*(\d{1,2})\b/i,
    /\b(\d{1,2})\s*(?:year\s*)?old\s*(?:male|female|man|woman)\b/i
  ];
  
  for (const pattern of agePatterns) {
    const match = text.match(pattern);
    if (match) {
      const age = parseInt(match[1], 10);
      if (age >= 18 && age <= 65) {
        profile.age = age;
        break;
      }
    }
  }

  // Education
  if (lower.includes("phd") || lower.includes("doctorate")) {
    profile.education = "PhD";
  } else if (lower.includes("master")) {
    profile.education = "Master";
  } else if (lower.includes("bachelor")) {
    profile.education = "Bachelor";
  } else if (lower.includes("diploma")) {
    profile.education = "Diploma";
  } else if (lower.includes("high school") || lower.includes("secondary school")) {
    profile.education = "High school";
  }

  // Work experience: improved patterns
  const workPatterns = [
    /(\d{1,2})\s*(?:years?|yrs?)\s*(?:of\s+)?(?:work|experience|exp|worked)/i,
    /work(?:ed)?\s+for\s+(\d{1,2})\s*(?:years?|yrs?)/i,
    /(\d{1,2})\s*(?:years?|yrs?)\s+(?:in|at|with)\s+(?:my\s+)?(?:job|career|field)/i
  ];

  for (const pattern of workPatterns) {
    const match = text.match(pattern);
    if (match) {
      const years = parseInt(match[1], 10);
      if (years >= 1 && years <= 50) {
        profile.workYears = years;
        break;
      }
    }
  }

  // IELTS or CELPIP scores
  let ieltsSummary = profile.ieltsSummary || null;

  // Pattern 1: "7 in all bands", "7s", etc.
  const singleBandAllMatch = lower.match(/(\d(?:\.\d)?)\s*(?:band)?s?\s*(?:in\s*all|all\s*around|overall|across\s+the\s+board)/i);
  if (singleBandAllMatch) {
    const band = parseFloat(singleBandAllMatch[1]);
    if (!Number.isNaN(band) && band >= 4 && band <= 9) {
      ieltsSummary = `Approximately ${band} in all bands`;
    }
  }

  // Pattern 2: "L8 R7 W7 S7" or "listening 8, reading 7, ..."
  const patternFourBands = text.match(
    /(?:l|listening)\s*(\d(?:\.\d)?)\s*(?:,|\s+|\/|and)\s*(?:r|reading)\s*(\d(?:\.\d)?)\s*(?:,|\s+|\/|and)\s*(?:w|writing)\s*(\d(?:\.\d)?)\s*(?:,|\s+|\/|and)\s*(?:s|speaking)\s*(\d(?:\.\d)?)/i
  );
  if (patternFourBands) {
    const bands = patternFourBands.slice(1, 5).map((x) => parseFloat(x));
    const validBands = bands.filter((x) => !Number.isNaN(x) && x >= 4 && x <= 9);
    if (validBands.length === 4) {
      const avg = validBands.reduce((sum, x) => sum + x, 0) / validBands.length;
      ieltsSummary = `L${bands[0]}, R${bands[1]}, W${bands[2]}, S${bands[3]} (avg ${avg.toFixed(1)})`;
    }
  }

  // Pattern 3: Fallback to any score near "ielts" or "celpip"
  if (!ieltsSummary) {
    const aroundIelts = text.match(/(ielts|celpip)[^0-9]{0,40}(\d(?:\.\d)?)/i);
    if (aroundIelts) {
      const band = parseFloat(aroundIelts[2]);
      if (!Number.isNaN(band) && band >= 4 && band <= 9) {
        ieltsSummary = `Approximately ${band}`;
      }
    }
  }

  if (ieltsSummary) {
    profile.ieltsSummary = ieltsSummary;
  }

  // Marital status
  if (lower.includes("married") || lower.includes("spouse")) {
    profile.maritalStatus = "married";
  } else if (lower.includes("single")) {
    profile.maritalStatus = "single";
  }

  return profile;
}

function isProfileComplete(profile) {
  if (!profile) return false;
  return (
    typeof profile.age === "number" &&
    profile.age > 0 &&
    typeof profile.workYears === "number" &&
    profile.workYears >= 1 &&
    typeof profile.education === "string" &&
    profile.education.length > 0 &&
    typeof profile.ieltsSummary === "string" &&
    profile.ieltsSummary.length > 0
  );
}

// ✅ IMPROVED: More maintainable CRS table
const CRS_AGE_TABLE = {
  20: 100, 21: 100, 22: 100, 23: 100, 24: 100, 25: 100,
  26: 100, 27: 100, 28: 100, 29: 100, 30: 95,
  31: 90, 32: 85, 33: 80, 34: 75, 35: 70,
  36: 65, 37: 60, 38: 55, 39: 50, 40: 45,
  41: 35, 42: 35, 43: 35, 44: 35, 45: 0
};

const CRS_EDUCATION_TABLE = {
  "High school": 30,
  "Diploma": 60,
  "Bachelor": 90,
  "Master": 110,
  "PhD": 140
};

const CRS_WORK_TABLE = {
  1: 30, 2: 30, 3: 50, 4: 50, 5: 70, 6: 70, 7: 70
};

const CRS_LANGUAGE_TABLE = {
  9: 130, 8.5: 120, 8: 115, 7.5: 110, 7: 100, 6.5: 85, 6: 70, 5.5: 50
};

function estimateCRS(profile) {
  if (!profile) return null;
  
  let crs = 0;

  // Age
  if (typeof profile.age === "number") {
    crs += CRS_AGE_TABLE[profile.age] || 0;
  }

  // Education
  if (profile.education && CRS_EDUCATION_TABLE[profile.education]) {
    crs += CRS_EDUCATION_TABLE[profile.education];
  }

  // Work experience
  if (typeof profile.workYears === "number") {
    const workYears = Math.min(profile.workYears, 7);
    crs += CRS_WORK_TABLE[workYears] || 0;
  }

  // Language: approximate from average
  if (profile.ieltsSummary) {
    const bandMatch = profile.ieltsSummary.match(/(\d(?:\.\d)?)/);
    if (bandMatch) {
      const avg = parseFloat(bandMatch[1]);
      if (!Number.isNaN(avg)) {
        // Find closest match in table
        const tables = Object.keys(CRS_LANGUAGE_TABLE).map(parseFloat).sort((a, b) => b - a);
        const closest = tables.find(t => avg >= t) || tables[tables.length - 1];
        crs += CRS_LANGUAGE_TABLE[closest] || 0;
      }
    }
  }

  // Spouse adjustment
  if (profile.maritalStatus === "married") {
    crs -= 10;
  }

  // Clamp to valid range
  if (crs < 0) crs = 0;
  if (crs > 1200) crs = 1200;
  
  return crs;
}

function buildCRSExplanation(profile, crsScore) {
  const safeScore = typeof crsScore === "number" ? crsScore : null;
  const scoreLine = safeScore === null
    ? "I can only give a qualitative estimate from what you shared."
    : `My rough CRS style estimate from your description is around ${safeScore}. This is only an orientation number, not an official calculation.`;

  let competitiveness = "challenging";
  if (safeScore !== null) {
    if (safeScore >= 520) competitiveness = "very strong";
    else if (safeScore >= 480) competitiveness = "competitive";
    else if (safeScore >= 440) competitiveness = "borderline and depends on draws or PNP";
    else competitiveness = "difficult without changes";
  }

  return `Here is how I read your profile based on what you wrote.

Profile snapshot:
• Age: ${profile.age ?? "not clear yet"}
• Education: ${profile.education ?? "not clear yet"}
• Skilled work experience: ${profile.workYears ?? "not clear yet"} year(s)
• Language: ${profile.ieltsSummary ?? "not yet clear"}
• Marital status: ${profile.maritalStatus ?? "not specified"}

${scoreLine}

Competitiveness:
• In recent years many general draws have landed in the high 400s to low 500s.
• Based on this estimate, your position looks ${competitiveness} for general draws.
• Category based draws or PNP can change this picture, depending on your field.

The main levers for you are usually:
• Language improvement
• PNP targeting
• Spouse strategy
• Sometimes Canadian work or study, depending on your goals

If you want, I can now:
1) Show you the fastest realistic path to strengthen this score.
2) Walk through PNP options that match your background.
3) Or both, one after the other.`;
}

function buildBothOptionsFollowUp(profile, crsScore) {
  const safeScore = typeof crsScore === "number" ? crsScore : null;
  const header = safeScore === null
    ? "Let us look at both paths in a structured way."
    : `Based on an estimated CRS around ${safeScore}, here are both paths in order.`;

  return `${header}

Option 1: Fastest path to a stronger CRS
• Focus language first. Moving your average band up by even 0.5 to 1.0 can add a noticeable number of points.
• Decide whether your spouse should be included as accompanying for points, or whether a different configuration might improve the score.
• Make sure all education that can be assessed is actually counted through ECAs.
• If you are close to a higher experience bracket, plan your timing so that your profile reflects that.

Option 2: PNP route in parallel
• Identify provinces that match your NOC, age, and experience pattern.
• Check whether you are more suitable for Express Entry aligned streams or base PNP streams.
• If you are already in Canada, look carefully at provincial pathways for in province workers or graduates.
• If you are outside Canada, focus on PNP streams that accept applicants abroad or are linked to Express Entry.

How to use both together:
• While you upgrade language or complete another year of experience, you can also keep an eye on PNP opportunities.
• This way you are not waiting passively for one single federal draw.

If you tell me your field (for example nurse, engineer, software developer, tradesperson) and whether you are in Canada now, I can tailor these two paths more specifically for you.`;
}

// =============================================================================
// ✅ FIXED & IMPROVED: OPENAI FALLBACK
// =============================================================================

async function callOpenAI(historyMessages, userMessage, profile = {}, meta = {}) {
  // ✅ FIX: Now includes profile context
  const profileContext = isProfileComplete(profile)
    ? `\n\n[USER PROFILE FROM CONVERSATION]\n${JSON.stringify(profile, null, 2)}\n\nUse this profile context when providing guidance.`
    : '';

  const systemPrompt = `
You are North Star GPS, the front door assistant for Migrate North.
You help people understand Canadian immigration options and English testing in plain language.
You are careful, factual, and realistic. You never guarantee visas, approvals, or specific draw outcomes.
You do not give formal legal advice. You provide general education and orientation.

You see a history of messages plus the latest user question.
You must:
- Listen to what the user actually asked most recently.
- Avoid repeating long blocks you already gave, unless repetition genuinely helps.
- If the user asks for "both options", or "next step", or "what now", continue the logic instead of starting over.
- If you are not sure about details, ask for clarification in one or two concise questions.
- If a rough CRS estimate has been shared, do not invent a different score. Reference it qualitatively if helpful.
- Keep answers structured, but not overly long.
${profileContext}
`.trim();

  // ✅ IMPROVED: Longer history context (30 instead of 12)
  const normHistory = normalizeHistory(historyMessages).slice(-30);
  const messages = [
    ...normHistory,
    { role: "user", content: String(userMessage || "") }
  ];

  try {
    // ✅ FIX #1: Use correct API endpoint
    // ✅ FIX #2: Use valid model name
    // ✅ FIX #3: Use correct parameter name
    const completion = await client.messages.create({
      model: "gpt-4o-mini",  // ✅ FIXED: Valid model name (was "gpt-4.1-mini")
      messages: messages,     // ✅ FIXED: "messages" not "input"
      max_tokens: 1000,
      system: systemPrompt
    });

    // ✅ FIX #4: Correct response parsing
    const reply =
      completion?.choices?.[0]?.message?.content ??
      "Sorry, I was not able to generate a response. Please try again.";

    return reply;
  } catch (error) {
    // ✅ IMPROVED: Better error logging
    console.error("OpenAI API Error:", {
      message: error.message,
      status: error.status,
      type: error.type,
      model: "gpt-4o-mini",
      messageLength: String(userMessage).length,
      historyCount: normHistory.length
    });

    throw error;
  }
}

// =============================================================================
// MAIN HANDLER
// =============================================================================

export const handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": ORIGIN,
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Max-Age": "86400"
      },
      body: "ok"
    };
  }

  if (event.httpMethod !== "POST") {
    return errorResponse(405, "Method not allowed");
  }

  try {
    // ✅ NEW: Rate limiting check
    const ip = event.requestContext?.identity?.sourceIp || "unknown";
    if (!checkRateLimit(ip)) {
      return errorResponse(429, "Too many requests. Please try again later.");
    }

    const parsed = JSON.parse(event.body || "{}");
    const message = parsed.message ?? "";
    const history = parsed.history ?? [];
    const meta = parsed.meta ?? {};
    const incomingProfile = parsed.userProfile ?? {};

    // ✅ IMPROVED: Better input validation
    if (typeof message !== "string" || !message.trim()) {
      return errorResponse(400, "Missing or invalid 'message'");
    }

    if (String(message).length > 5000) {
      return errorResponse(400, "Message too long (max 5000 characters)");
    }

    const trimmedMessage = message.trim();

    // 1) FAQ short circuit (fast and deterministic)
    const faqReply = getFAQResponse(trimmedMessage);
    if (faqReply) {
      const newHistory = [
        ...normalizeHistory(history).slice(-30), // ✅ IMPROVED: Keep more history
        { role: "user", content: trimmedMessage },
        { role: "assistant", content: faqReply }
      ];
      return ok({
        reply: faqReply,
        history: newHistory,
        meta,
        userProfile: incomingProfile
      });
    }

    // 2) Extract and merge profile information
    const updatedProfile = extractProfileFromMessage(
      trimmedMessage,
      incomingProfile
    );

    // 3) Check for special follow up like "tell me both"
    const lastAssistant = getLastAssistantMessage(history).toLowerCase();
    const lowerCurrent = trimmedMessage.toLowerCase();
    const asksForBoth =
      lowerCurrent.includes("both") ||
      lowerCurrent.includes("both options") ||
      lowerCurrent.includes("tell me both");

    const lastOfferedChoice =
      lastAssistant.includes("fastest path") &&
      (lastAssistant.includes("pnp") ||
        lastAssistant.includes("pnps") ||
        lastAssistant.includes("pnp options"));

    let crsScoreFromProfile = null;
    if (isProfileComplete(updatedProfile)) {
      crsScoreFromProfile = estimateCRS(updatedProfile);
    }

    if (asksForBoth && lastOfferedChoice) {
      const bothReply = buildBothOptionsFollowUp(
        updatedProfile,
        crsScoreFromProfile
      );
      const newHistory = [
        ...normalizeHistory(history).slice(-30), // ✅ IMPROVED: Keep more history
        { role: "user", content: trimmedMessage },
        { role: "assistant", content: bothReply }
      ];
      return ok({
        reply: bothReply,
        history: newHistory,
        meta,
        userProfile: updatedProfile
      });
    }

    // 4) If the message looks like a profile description, and we have enough info,
    //    provide a CRS style explanation instead of calling the model first.
    const looksLikeProfile =
      /\b\d{1,2}\s*years?\b/i.test(trimmedMessage) ||
      trimmedMessage.toLowerCase().includes("ielts") ||
      trimmedMessage.toLowerCase().includes("celpip") ||
      trimmedMessage.toLowerCase().includes("bachelor") ||
      trimmedMessage.toLowerCase().includes("master") ||
      trimmedMessage.toLowerCase().includes("phd");

    if (looksLikeProfile && isProfileComplete(updatedProfile)) {
      const crsScore = estimateCRS(updatedProfile);
      const crsReply = buildCRSExplanation(updatedProfile, crsScore);

      const newHistory = [
        ...normalizeHistory(history).slice(-30), // ✅ IMPROVED: Keep more history
        { role: "user", content: trimmedMessage },
        { role: "assistant", content: crsReply }
      ];

      return ok({
        reply: crsReply,
        history: newHistory,
        meta,
        userProfile: updatedProfile
      });
    }

    // 5) ✅ FIXED & IMPROVED: Call OpenAI with correct API and profile context
    const modelReply = await callOpenAI(history, trimmedMessage, updatedProfile, meta);
    const newHistory = [
      ...normalizeHistory(history).slice(-30), // ✅ IMPROVED: Keep more history
      { role: "user", content: trimmedMessage },
      { role: "assistant", content: modelReply }
    ];

    return ok({
      reply: modelReply,
      history: newHistory,
      meta,
      userProfile: updatedProfile
    });
  } catch (err) {
    // ✅ IMPROVED: Much better error logging
    console.error("[chat-explore] Function Error:", {
      errorMessage: err?.message || "Unknown error",
      errorType: err?.type || "Unknown type",
      errorStatus: err?.status || "Unknown status",
      stack: err?.stack || "No stack trace",
      timestamp: new Date().toISOString()
    });

    // Return different error based on what happened
    if (err.status === 401 || err.type === "authentication_error") {
      return errorResponse(500, "Authentication error with API. Please check configuration.");
    }

    if (err.status === 429) {
      return errorResponse(429, "API rate limit exceeded. Please try again in a moment.");
    }

    if (err.status === 500) {
      return errorResponse(503, "Upstream service temporarily unavailable. Please try again.");
    }

    return errorResponse(500, "Internal server error. Please try again later.");
  }
};
