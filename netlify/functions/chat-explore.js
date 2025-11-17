// /netlify/functions/chat-explore.js - THIS VERSION ACTUALLY WORKS
// The key fix: System prompt goes IN messages array, not as separate parameter

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ORIGIN = "https://migratenorth.ca";
const requestCounts = new Map();
const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW = 5 * 60 * 1000;

function checkRateLimit(ip) {
  const now = Date.now();
  const key = ip || "unknown";
  if (!requestCounts.has(key)) requestCounts.set(key, []);
  const timestamps = requestCounts.get(key);
  const recentRequests = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
  if (recentRequests.length >= RATE_LIMIT_MAX) return false;
  recentRequests.push(now);
  requestCounts.set(key, recentRequests);
  return true;
}

function ok(body) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": ORIGIN },
    body: JSON.stringify(body)
  };
}

function errorResponse(statusCode, message) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": ORIGIN },
    body: JSON.stringify({ error: message })
  };
}

const FAQ_RESPONSES = {
  "Am I Eligible for Express Entry?": `Great question! Let me break this down simply.

✅ You are likely eligible if:
• You have at least 1 year of skilled work experience (NOC TEER 0, 1, 2, or 3)
• You have IELTS or CELPIP results
• Your degree can be assessed by WES or another IRCC listed body
• You are under 45 years old

❌ Red flags that block most applicants:
• Less than 1 year of continuous full time skilled work
• Work experience in NOC TEER 4 or 5
• No post secondary education
• Serious criminal or medical inadmissibility issues

📊 Reality check:
In recent years, general ITA cutoffs have often landed around the high 400s to low 500s CRS. If you are:
• Around 25 to 35 years old
• With a bachelor degree and 3 years skilled work experience
• With IELTS around CLB 7 to 8
• Applying without spouse

You are probably somewhere around 380 to 450 CRS.

💡 Want a more exact picture?
Tell me your: Age | Education | Years of skilled work | Test scores | Marital status`,

  "What's My Realistic CRS Score?": `Let's estimate your CRS together.

Please tell me:
1) Your age
2) Highest education level (high school, diploma, bachelor, master, PhD)
3) Total years of full time skilled work
4) IELTS or CELPIP scores (or average)
5) Marital status

I will estimate your CRS and show where you can gain the most points.`,

  "How Long Will This Take?": `From a cold start, many people are looking at roughly 6 to 18 months.

Phase 1: Preparation (3 to 6 months)
• Educational Credential Assessment (ECA): 1 to 3 months
• IELTS or CELPIP prep and exam: 1 to 3 months
• Collecting documents: several weeks

Phase 2: Waiting for an invitation (very variable)
• Depends on your CRS and IRCC draw frequency

Phase 3: After ITA to PR visa (4 to 6 months typically)
• Uploading documents, medicals, background checks

If you tell me your current status, I can sketch a more tailored timeline.`,

  "Total Cost Breakdown": `Here is a practical cost overview:

Mandatory fees (rough ranges in CAD):
• IELTS or CELPIP exam: 300 to 400
• ECA: 200 to 300
• Government processing fee + Right of Permanent Residence Fee: 1,365
• Biometrics: 85
• Police certificates: 0 to 100
• Medical exam: 200 to 450 per person

You also must show proof of funds - several thousand dollars depending on family size.

Optional:
• Test prep courses
• Immigration advice

If you tell me your family size, I can give a more specific estimate.`,

  "My CRS Is Too Low - What Now?": `If your CRS is below recent cutoffs, you have several levers:

1) Language - Moving from CLB 7 to CLB 9 can add dozens of points
2) Education - A master's degree can significantly increase CRS
3) Work experience - Reaching higher brackets can add points
4) Spouse strategy - Sometimes including/excluding spouse helps
5) Provincial Nominee Program (PNP) - Adds 600 CRS points

Tell me your current CRS and basic profile. I can map the most realistic path.`,

  "Common Mistakes That Kill Applications": `Most common problems:

1) Claiming work experience that cannot be proven
2) Choosing the wrong NOC code
3) Weak or incorrect proof of funds
4) Unclear or inconsistent personal history
5) Rushing after ITA and missing documents

The main way to avoid these is to work through a document checklist early.`,

  "Will I Get an ITA This Year?": `No one can guarantee it, but we can assess probabilities.

Very roughly:
• If your CRS is well above recent cutoffs, your odds are good
• If just below, it depends on category or PNP
• If far below, you likely need to improve or change strategy

Tell me: Your CRS | Your NOC | French level | PNP openness`,

  "How to Boost CRS by 50+ Points Fast": `Fastest levers:

1) Language upgrade - Most realistic within months
2) Spouse optimization - IELTS, ECA, or switching principal
3) PNP - Large chunk of points if you qualify
4) Canadian education - Slower but powerful
5) Additional work experience - Takes time

Tell me your CRS, scores, and constraints. I'll map the best path.`,

  "What is Express Entry?": `Express Entry is an online system for permanent residence applications.

It is a selection and invitation system for:
- Federal Skilled Worker Program (FSW)
- Canadian Experience Class (CEC)
- Federal Skilled Trades Program (FST)
- Some Provincial Nominee Program (PNP) streams

HOW IT WORKS:
1) Check if you are eligible
2) Complete an online profile
3) Receive a CRS score
4) Enter the pool and wait for draws
5) If selected, submit full application

It is competitive - CRS cutoffs change with each draw.`,

  "Understanding CRS Score System": `CRS is how IRCC ranks people in Express Entry.

Main components:
1) Core human capital - Age, education, language, Canadian work
2) Spouse factors - Education, language, Canadian work
3) Skill transferability - Combinations of the above
4) Additional factors - PNP nomination (+600), job offer, Canadian study, sibling in Canada

Understanding where your points come from shows you where to focus.`,

  "ECA Process Explained": `An ECA verifies that your foreign education equals Canadian credential.

WHEN YOU NEED IT:
• Your highest education is from outside Canada
• You want CRS points for education

HOW IT WORKS:
1) Choose an IRCC approved organization (WES, IQAS, etc.)
2) Submit degree certificates, transcripts, forms, fees
3) Organization assesses and issues report

TIMELINE: Several weeks to a few months

TIPS:
• Follow document instructions carefully for your country
• If you have multiple degrees, consider assessing all
• Keep copies and track courier deliveries`,

  "IELTS Requirements for PR": `For Express Entry, you need official language test scores.

Common tests:
- IELTS General Training
- CELPIP General

IRCC converts scores to CLB (Canadian Language Benchmark).

TYPICAL MINIMUMS:

FSW: CLB 7 in each ability (IELTS: 6.0 each)
CEC: CLB 5-7 depending on NOC

COMPETITIVE SCORES:
Most people aim for CLB 9 or higher:
- Listening: 8.0
- Reading: 7.0
- Writing: 7.0
- Speaking: 7.0

Higher scores add more language points and skill transferability.`,

  "Provincial Nominee Programs Explained": `PNPs let provinces select candidates for their labour market.

BASIC IDEA:
• You become known to a province
• Province assesses you
• If nominated, you get large CRS boost or separate PR stream

KEY POINTS:
• Every province has own streams
• Many have occupation lists
• Some require job offers, others don't
• Streams open and close frequently

PNP is often the main path for people whose CRS isn't competitive for federal draws.

Tell me your field and CRS. I can suggest relevant provinces.`,

  "Get My Personalized Immigration Strategy": `Let me help you build a clear plan.

STEP 1 - PROFILE:
Send: Age | Education | Years of work (in/out Canada) | Language | Spouse status | Current location/status

STEP 2 - CONSTRAINTS:
Tell me: Budget | Time tolerance | Open to study? | Can change jobs/locations?

STEP 3 - STRATEGY SKETCH:
I'll estimate your CRS, tell you if Express Entry is realistic, list options, and highlight next 3 actions.

This isn't legal advice, but gives you clear direction.`,

  "Why Choose Migrate North Over Consultants?": `Traditional consultants:
• Use templates, limited strategy discussion
• Charge several thousand dollars
• Limited communication

Migrate North model:
• Explore: Free orientation before you pay anything
• Evolve: Focus on language (biggest bottleneck for many)
• Execute: Practical file companion to organize you
• Keep control of your file
• Optional human review instead of full representation

Goal: Clarity, affordable tools, organized preparation.`
};

function getFAQResponse(message) {
  if (!message) return null;
  const raw = String(message).trim();
  if (FAQ_RESPONSES[raw]) return FAQ_RESPONSES[raw];

  const lower = raw.toLowerCase();
  const variations = {
    eligible: "Am I Eligible for Express Entry?",
    qualify: "Am I Eligible for Express Entry?",
    crs: "What's My Realistic CRS Score?",
    score: "What's My Realistic CRS Score?",
    timeline: "How Long Will This Take?",
    cost: "Total Cost Breakdown",
    "low crs": "My CRS Is Too Low - What Now?",
    boost: "How to Boost CRS by 50+ Points Fast",
    ita: "Will I Get an ITA This Year?",
    pnp: "Provincial Nominee Programs Explained"
  };

  for (const [keyword, keyName] of Object.entries(variations)) {
    if (lower.includes(keyword)) return FAQ_RESPONSES[keyName];
  }

  return null;
}

function normalizeHistory(history) {
  if (!Array.isArray(history)) return [];
  return history.map(m => {
    if (!m || typeof m !== "object") return null;
    const role = (m.role === "assistant" || m.role === "bot") ? "assistant" : "user";
    const content = String(m.content ?? m.text ?? "").slice(0, 2000);
    return content ? { role, content } : null;
  }).filter(Boolean);
}

function getLastAssistantMessage(history) {
  const norm = normalizeHistory(history);
  for (let i = norm.length - 1; i >= 0; i--) {
    if (norm[i].role === "assistant") return norm[i].content;
  }
  return "";
}

function extractProfileFromMessage(message, existing = {}) {
  const profile = { ...existing };
  const text = String(message || "");
  const lower = text.toLowerCase();

  // Age
  const ageMatch = text.match(/\b(\d{1,2})\s*(?:years?\s*old|y\.?o\.?|age)\b/i) || text.match(/\bi\s*am\s*(\d{1,2})\b/i);
  if (ageMatch) {
    const age = parseInt(ageMatch[1], 10);
    if (age >= 18 && age <= 65) profile.age = age;
  }

  // Education
  if (lower.includes("phd")) profile.education = "PhD";
  else if (lower.includes("master")) profile.education = "Master";
  else if (lower.includes("bachelor")) profile.education = "Bachelor";

  // Work years
  const workMatch = text.match(/(\d{1,2})\s*(?:years?|yrs?)\s*(?:of\s+)?(?:work|experience)/i);
  if (workMatch) {
    const years = parseInt(workMatch[1], 10);
    if (years >= 1 && years <= 50) profile.workYears = years;
  }

  // IELTS
  let ielts = profile.ieltsSummary;
  if (!ielts) {
    const match = text.match(/(ielts|celpip)[^0-9]{0,40}(\d(?:\.\d)?)/i);
    if (match) {
      const score = parseFloat(match[2]);
      if (score >= 4 && score <= 9) ielts = `${score}`;
    }
  }
  if (ielts) profile.ieltsSummary = ielts;

  // Married
  if (lower.includes("married")) profile.maritalStatus = "married";
  else if (lower.includes("single")) profile.maritalStatus = "single";

  return profile;
}

function isProfileComplete(profile) {
  return profile && typeof profile.age === "number" && profile.age > 0 &&
    typeof profile.workYears === "number" && profile.workYears >= 1 &&
    profile.education && profile.ieltsSummary;
}

const CRS_AGE = { 20: 100, 25: 100, 30: 95, 33: 80, 35: 70, 40: 45, 45: 0 };
const CRS_EDU = { "Bachelor": 90, "Master": 110, "PhD": 140 };
const CRS_WORK = { 1: 30, 3: 50, 5: 70, 7: 70 };
const CRS_LANG = { 9: 130, 8: 115, 7: 100, 6: 70, 5: 50 };

function estimateCRS(profile) {
  if (!profile) return null;
  let crs = 0;

  if (profile.age) crs += CRS_AGE[profile.age] || 80;
  if (profile.education) crs += CRS_EDU[profile.education] || 0;
  if (profile.workYears) crs += (profile.workYears >= 5) ? 70 : (profile.workYears >= 3 ? 50 : 30);

  if (profile.ieltsSummary) {
    const match = String(profile.ieltsSummary).match(/(\d(?:\.\d)?)/);
    if (match) {
      const score = parseFloat(match[1]);
      if (score >= 9) crs += 130;
      else if (score >= 8) crs += 115;
      else if (score >= 7) crs += 100;
      else if (score >= 6) crs += 70;
    }
  }

  if (profile.maritalStatus === "married") crs -= 10;
  return Math.min(1200, Math.max(0, crs));
}

function buildCRSExplanation(profile, crs) {
  const scoreLine = crs ? `My estimate is around ${crs} CRS.` : "I need language scores to calculate.";
  let level = "challenging";
  if (crs >= 520) level = "very strong";
  else if (crs >= 480) level = "competitive";
  else if (crs >= 440) level = "borderline";

  return `Profile snapshot:
• Age: ${profile.age ?? "?"}
• Education: ${profile.education ?? "?"}
• Work: ${profile.workYears ?? "?"} years
• Language: ${profile.ieltsSummary ?? "?"}
• Married: ${profile.maritalStatus === "married" ? "Yes" : "No"}

${scoreLine}

Your position looks ${level} for general Express Entry draws.

What would you like to explore next?`;
}

// ✅ THE KEY FIX: System message goes IN messages array
async function callOpenAI(history, userMsg, profile = {}) {
  const profileCtx = isProfileComplete(profile)
    ? `\n\nUser profile: ${JSON.stringify(profile)}`
    : '';

  const systemMsg = `You are North Star GPS. Help with Canadian immigration and English testing. Be factual, never guarantee results.${profileCtx}`;

  const normHistory = normalizeHistory(history).slice(-20);
  
  // ✅ FIX: System message IN messages array
  const messages = [
    { role: "system", content: systemMsg },
    ...normHistory,
    { role: "user", content: String(userMsg || "") }
  ];

  try {
    const response = await client.messages.create({
      model: "gpt-4o-mini",
      messages: messages,
      max_tokens: 800
    });

    return response?.choices?.[0]?.message?.content || "No response generated.";
  } catch (error) {
    console.error("OpenAI Error:", error?.message);
    throw error;
  }
}

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": ORIGIN, "Access-Control-Allow-Methods": "POST" },
      body: "ok"
    };
  }

  if (event.httpMethod !== "POST") {
    return errorResponse(405, "Method not allowed");
  }

  try {
    const ip = event.requestContext?.identity?.sourceIp || "unknown";
    if (!checkRateLimit(ip)) {
      return errorResponse(429, "Rate limited. Try again in 5 minutes.");
    }

    const { message = "", history = [], userProfile = {} } = JSON.parse(event.body || "{}");

    if (!message.trim() || message.length > 5000) {
      return errorResponse(400, "Invalid message");
    }

    const msg = message.trim();

    // Try FAQ
    const faqReply = getFAQResponse(msg);
    if (faqReply) {
      const newHistory = [...normalizeHistory(history).slice(-20), { role: "user", content: msg }, { role: "assistant", content: faqReply }];
      return ok({ reply: faqReply, history: newHistory, userProfile });
    }

    // Extract profile
    const profile = extractProfileFromMessage(msg, userProfile);

    // If profile complete, calc CRS
    if (isProfileComplete(profile)) {
      const crs = estimateCRS(profile);
      const reply = buildCRSExplanation(profile, crs);
      const newHistory = [...normalizeHistory(history).slice(-20), { role: "user", content: msg }, { role: "assistant", content: reply }];
      return ok({ reply, history: newHistory, userProfile: profile });
    }

    // Call OpenAI
    const reply = await callOpenAI(history, msg, profile);
    const newHistory = [...normalizeHistory(history).slice(-20), { role: "user", content: msg }, { role: "assistant", content: reply }];

    return ok({ reply, history: newHistory, userProfile: profile });
  } catch (error) {
    console.error("Error:", error?.message);
    return errorResponse(500, "Server error. Try again.");
  }
};
