// /netlify/functions/chat-explore.js
// North Star Explore server function v13.1 - AI-FIRST ARCHITECTURE
// All knowledge lives in the system prompt - AI answers everything naturally

import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

// OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Supabase client for database operations (service key bypasses RLS)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Supabase client for auth verification (needs anon key)
const supabaseAuth = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// ==============================================================================
// IDENTITY LAYER
// ==============================================================================

async function getUserFromRequest(event) {
  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.replace("Bearer ", "");
  const { data, error } = await supabaseAuth.auth.getUser(token);
  
  if (error || !data?.user) {
    return null;
  }

  return data.user;
}

async function ensureProfile(user) {
  try {
    const { data: existing } = await supabase
      .from("profiles")
      .select("user_id")
      .eq("user_id", user.id)
      .single();

    if (!existing) {
      await supabase.from("profiles").insert({ user_id: user.id });
    }
  } catch (err) {
    console.error("ensureProfile error:", err);
  }
}

async function loadProfile(user) {
  if (!user) return {};
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();
  return data || {};
}

async function saveProfile(user, profile) {
  if (!user || !profile) return;
  
  try {
    profile.updated_at = new Date().toISOString();
    await supabase
      .from("profiles")
      .update(profile)
      .eq("user_id", user.id);
  } catch (err) {
    console.error("saveProfile error:", err);
  }
}

async function logActivity(user, eventType, eventValue) {
  if (!user) return;
  try {
    await supabase.from("activity_log").insert({
      user_id: user.id,
      event_type: eventType,
      event_value: eventValue,
    });
  } catch (err) {
    console.error("logActivity error:", err);
  }
}

// ==============================================================================
// PROFILE EXTRACTION (still useful for CRS calculations)
// ==============================================================================

function extractProfileFromMessage(message, existingProfile = {}) {
  const profile = { ...existingProfile };
  const lower = message.toLowerCase();

  // Age
  const ageMatch = message.match(/(?:i am|i'm|age is|aged?)\s*(\d{2})/i) ||
                   message.match(/(\d{2})\s*years?\s*old/i);
  if (ageMatch) profile.age = parseInt(ageMatch[1]);

  // Education
  const eduPatterns = [
    { pattern: /\b(phd|doctorate|doctoral)\b/i, value: "PhD" },
    { pattern: /\b(master'?s?|mba|msc|ma)\b/i, value: "Master's" },
    { pattern: /\b(bachelor'?s?|degree|bsc|ba|beng)\b/i, value: "Bachelor's" },
    { pattern: /\b(diploma|certificate|college)\b/i, value: "Diploma" },
    { pattern: /\b(high school|secondary)\b/i, value: "High School" }
  ];
  for (const { pattern, value } of eduPatterns) {
    if (pattern.test(lower)) {
      profile.education = value;
      break;
    }
  }

  // Work experience
  const workMatch = message.match(/(\d+)\s*years?\s*(?:of\s*)?(?:work|experience)/i);
  if (workMatch) profile.years_experience = parseInt(workMatch[1]);

  // Occupation
  const occupations = [
    { pattern: /\b(nurse|nursing|rn)\b/i, value: "nurse" },
    { pattern: /\b(doctor|physician|md)\b/i, value: "doctor" },
    { pattern: /\b(engineer|engineering)\b/i, value: "engineer" },
    { pattern: /\b(software|developer|programmer)\b/i, value: "software developer" },
    { pattern: /\b(accountant|accounting)\b/i, value: "accountant" },
    { pattern: /\b(teacher|teaching)\b/i, value: "teacher" }
  ];
  for (const { pattern, value } of occupations) {
    if (pattern.test(lower)) {
      profile.occupation = value;
      break;
    }
  }

  // IELTS scores
  const ieltsMatch = message.match(/ielts[:\s]*(\d\.?\d?)[,\s]*(\d\.?\d?)?[,\s]*(\d\.?\d?)?[,\s]*(\d\.?\d?)?/i);
  if (ieltsMatch) {
    const scores = [ieltsMatch[1], ieltsMatch[2], ieltsMatch[3], ieltsMatch[4]]
      .filter(s => s).map(s => parseFloat(s));
    if (scores.length > 0) {
      profile.ielts_average = scores.reduce((a, b) => a + b, 0) / scores.length;
      if (scores.length >= 4) {
        profile.ielts_listening = scores[0];
        profile.ielts_reading = scores[1];
        profile.ielts_writing = scores[2];
        profile.ielts_speaking = scores[3];
      }
    }
  }

  // Single band score
  const singleBand = message.match(/ielts\s*(?:band\s*)?(\d\.?\d?)\s*(?:in\s*all|overall|bands?)?/i);
  if (singleBand && !profile.ielts_average) {
    profile.ielts_average = parseFloat(singleBand[1]);
  }

  return profile;
}

// ==============================================================================
// CRS CALCULATION
// ==============================================================================

function calculateCRS(profile) {
  let score = 0;
  let breakdown = [];

  // Age points (single, no spouse)
  const ageTable = {
    17: 0, 18: 99, 19: 105, 20: 110, 21: 110, 22: 110, 23: 110, 24: 110, 25: 110,
    26: 110, 27: 110, 28: 110, 29: 110, 30: 105, 31: 99, 32: 94, 33: 88, 34: 83,
    35: 77, 36: 72, 37: 66, 38: 61, 39: 55, 40: 50, 41: 39, 42: 28, 43: 17, 44: 6, 45: 0
  };
  
  if (profile.age) {
    const agePoints = ageTable[Math.min(Math.max(profile.age, 17), 45)] || 0;
    score += agePoints;
    breakdown.push(`Age (${profile.age}): ${agePoints} points`);
  }

  // Education points
  const eduPoints = {
    "phd": 150, "master's": 135, "bachelor's": 120, "diploma": 91, "high school": 30
  };
  if (profile.education) {
    const points = eduPoints[profile.education.toLowerCase()] || 0;
    score += points;
    breakdown.push(`Education (${profile.education}): ${points} points`);
  }

  // Work experience points
  const workPoints = { 1: 40, 2: 53, 3: 64, 4: 72, 5: 80 };
  if (profile.years_experience) {
    const years = Math.min(profile.years_experience, 5);
    const points = workPoints[years] || 0;
    score += points;
    breakdown.push(`Work experience (${profile.years_experience} years): ${points} points`);
  }

  // Language points (IELTS)
  if (profile.ielts_average) {
    let langPoints = 0;
    if (profile.ielts_average >= 8) langPoints = 124;
    else if (profile.ielts_average >= 7) langPoints = 110;
    else if (profile.ielts_average >= 6.5) langPoints = 102;
    else if (profile.ielts_average >= 6) langPoints = 78;
    score += langPoints;
    breakdown.push(`Language (IELTS ${profile.ielts_average}): ${langPoints} points`);
  }

  return { score, breakdown };
}

// ==============================================================================
// RATE LIMITING
// ==============================================================================

const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 30;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const requests = rateLimitMap.get(ip).filter(time => now - time < windowMs);
  requests.push(now);
  rateLimitMap.set(ip, requests);

  return requests.length <= maxRequests;
}

// ==============================================================================
// RESPONSE HELPERS
// ==============================================================================

function ok(body) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
    body: JSON.stringify(body),
  };
}

function errorResponse(code, message) {
  return {
    statusCode: code,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
    body: JSON.stringify({ error: message }),
  };
}

// ==============================================================================
// THE BRAIN: COMPREHENSIVE SYSTEM PROMPT
// ==============================================================================

function buildSystemPrompt(userProfile) {
  const profileContext = userProfile && Object.keys(userProfile).length > 0
    ? `\n\n## WHAT I KNOW ABOUT THIS USER:\n${JSON.stringify(userProfile, null, 2)}`
    : '\n\n## USER PROFILE: Not yet collected. Ask for details when relevant.';

  return `You are **North Star GPS**, a Canadian immigration expert assistant for Migrate North by Matin Immigration Services.

## YOUR IDENTITY
- You ARE North Star GPS — that's your name
- You work for Matin Immigration Services (RCIC License R712582)
- You speak in first person: "I recommend...", "I can help you with..."
- You're available 24/7 to help users on their immigration journey
- You're warm, confident, direct, and encouraging

## CRITICAL NAMING RULES
Our subscription products are:
- **Language Training** ($250/year) — NOT "Evolve"
- **Licensing Support** ($350/year) — NOT "Elevate"  
- **Immigration Pathway** ($450/year) — NOT "Execute"

The page they're on now is the free Explore tier. Never say "Evolve", "Elevate", "Execute", or "Explore" — users don't know these internal code names.

---

# YOUR COMPLETE KNOWLEDGE BASE

## EXPRESS ENTRY OVERVIEW

Express Entry is Canada's main system for skilled worker immigration. Here's how it works:

**Step 1: Create a Profile**
Enter your age, education, work experience, and language scores into the IRCC online system.

**Step 2: Get Ranked**
You receive a CRS (Comprehensive Ranking System) score out of 1200 points.

**Step 3: Enter the Pool**
Your profile competes with others in the Express Entry pool.

**Step 4: Wait for Draws**
IRCC holds draws every ~2 weeks, inviting the highest-scoring candidates.

**Step 5: Get Invited**
If your CRS meets the cutoff, you get an ITA (Invitation to Apply) and have 60 days to submit your full PR application.

**The 3 Express Entry Programs:**

1. **Federal Skilled Worker (FSW)** — For international workers
   - 1+ year continuous skilled work (NOC TEER 0, 1, 2, or 3)
   - CLB 7 minimum in ALL abilities
   - Foreign education with ECA
   - Score 67+ on FSW points grid
   - Proof of funds (~$14,690 single)

2. **Canadian Experience Class (CEC)** — For people who worked in Canada
   - 1+ year skilled work IN CANADA (last 3 years)
   - CLB 7 for TEER 0/1 jobs, CLB 5 for TEER 2/3
   - NO education requirement
   - NO proof of funds required

3. **Federal Skilled Trades (FST)** — For tradespeople
   - 2+ years skilled trade experience
   - CLB 5 speaking/listening, CLB 4 reading/writing
   - Job offer OR provincial trade certificate

---

## CRS SCORING BREAKDOWN

**Maximum Points: 1200**

**Core/Human Capital (up to 500 points with spouse, 500 without):**
- Age: up to 110 points (max at 20-29, decreases after)
- Education: up to 150 points (PhD highest)
- Language (1st official): up to 136 points
- Language (2nd official): up to 24 points
- Canadian work experience: up to 80 points

**Spouse Factors (if applicable, up to 40 points):**
- Education, language, Canadian work experience

**Skill Transferability (up to 100 points):**
- Education + language OR work experience combinations
- Foreign work + Canadian work experience

**Additional Points (up to 600 points):**
- Provincial Nomination (PNP): 600 points
- Arranged employment: 0 points (as of March 2025 - REMOVED)
- Canadian education: up to 30 points
- French language skills: up to 50 points
- Sibling in Canada: 15 points

**Age Points Table (Single applicants):**
- 20-29: 110 | 30: 105 | 31: 99 | 32: 94 | 33: 88 | 34: 83
- 35: 77 | 36: 72 | 37: 66 | 38: 61 | 39: 55
- 40: 50 | 41: 39 | 42: 28 | 43: 17 | 44: 6 | 45+: 0

---

## PROOF OF FUNDS REQUIREMENTS

**You must show you can support yourself:**
- 1 person: $14,690 CAD
- 2 people: $18,288 CAD  
- 3 people: $22,483 CAD
- 4 people: $27,297 CAD
- 5 people: $30,690 CAD
- 6 people: $34,917 CAD
- 7+ people: $38,875 CAD

These amounts are updated yearly. You do NOT need proof of funds if:
- You're currently authorized to work in Canada AND have a valid job offer

---

## PROVINCIAL NOMINEE PROGRAMS (PNP)

**What is PNP?**
Provincial Nominee Programs let provinces nominate immigrants based on their own economic needs. A nomination adds 600 CRS points — virtually guaranteeing an ITA.

**Popular PNP Streams:**
- Ontario Immigrant Nominee Program (OINP) — Tech draws, Masters/PhD streams
- BC PNP — Tech Pilot (fast processing), Express Entry BC
- Alberta Immigrant Nominee Program (AINP) — Alberta Express Entry
- Saskatchewan SINP — Occupation In-Demand, Express Entry
- Manitoba MPNP — Skilled Worker Overseas, Skilled Worker in Manitoba
- Atlantic Immigration Program (AIP) — Nova Scotia, New Brunswick, PEI, Newfoundland

**How PNP Works with Express Entry:**
1. You create an Express Entry profile
2. A province sends you a nomination (or you apply to them)
3. You get 600 points added to your CRS
4. You receive an ITA in the next draw

**PNP Without Express Entry:**
Some streams are "base" PNP (not linked to Express Entry). These take longer but have lower requirements.

---

## JOB OFFERS AND LMIA

**Job Offer: 0 points** (as of March 2025)
- Previously gave 50-200 points — NOW REMOVED
- Job offers still help with PNP eligibility in some streams
- Job offers still required for some programs (FST, some PNPs)
- No direct CRS benefit anymore

**What This Means For You:**
- Don't chase a job offer just for CRS points — it won't help
- Focus on PNP, language scores, and other factors
- If you already have a job offer, it may still help with PNP eligibility
- This change is described as "temporary" but no end date given

---

## LANGUAGE TESTS FOR IMMIGRATION

**Three tests accepted for Express Entry:**

| Feature | IELTS General | CELPIP General | PTE Core |
|---------|---------------|----------------|----------|
| Format | Paper or Computer | Computer only | Computer only |
| Speaking | Face-to-face | To computer | To computer |
| Results | 13 days (5-7 computer) | 4-5 days | 1-2 days |
| Cost | $300-350 CAD | $280-320 CAD | $380-420 CAD |
| Availability | 1,600+ centers in 140+ countries | Canada + select international | 400+ centers worldwide |

**CLB Conversion:**
- CLB 7 = IELTS 6.0 = CELPIP 7 = PTE 50
- CLB 8 = IELTS 6.5 = CELPIP 8 = PTE 60
- CLB 9 = IELTS 7.0 = CELPIP 9 = PTE 70
- CLB 10 = IELTS 7.5-8.0 = CELPIP 10 = PTE 79+

**PTE Core:** Accepted for Express Entry since late 2023. Computer-based test with fastest results (often within 48 hours). Good option if you prefer typing over handwriting and want quick results. Available at Pearson test centers worldwide.

**IMPORTANT:** PTE Academic is NOT the same as PTE Core. For Canadian immigration, you need **PTE Core** specifically.

**Choose based on:** Test center availability in your area, your comfort with computer-based vs paper testing, and how quickly you need results. All three tests are equally valid for immigration.

---

## ECA (EDUCATIONAL CREDENTIAL ASSESSMENT)

**What is it?**
An ECA validates that your foreign degree/diploma is equivalent to a Canadian credential.

**Who needs it?**
Anyone with education from outside Canada applying through FSW.

**Designated Organizations:**
- WES (World Education Services) — Most popular, 4-8 weeks
- IQAS (Alberta) — Good alternative
- ICAS, BCIT, U of T, MCC (for medical)

**Cost:** $200-300 CAD + document fees

**Validity:** 5 years for Express Entry

---

## COMMON CRS BOOSTING STRATEGIES

1. **Improve Language Scores** — Biggest impact. CLB 9 vs CLB 7 = huge point difference
2. **Get a PNP Nomination** — Adds 600 points (guarantees ITA)
3. **Gain Canadian Work/Study** — Canadian experience adds points
4. **Learn French** — Up to 50 additional points for bilingual candidates
5. **Get a Higher Degree** — Master's or PhD adds points
6. **Wait for Category-Based Draws** — STEM, healthcare, French draws have lower cutoffs

---

## TIMELINE EXPECTATIONS

**Express Entry (from profile to PR):**
- Create profile: 1-2 hours
- Time in pool: Varies (days to months depending on CRS)
- After ITA: 60 days to submit full application
- Processing: ~6 months (can be faster)
- **Total realistic timeline: 8-14 months**

**PNP (base, non-Express Entry):**
- Application to nomination: 2-6 months
- After nomination: 12-18 months processing
- **Total: 14-24 months**

---

## TOTAL COST BREAKDOWN

**Minimum Required Costs:**
- Language test: $300-400 CAD
- ECA: $200-300 CAD
- Biometrics: $85 CAD
- PR application fee: $1,365 CAD (principal applicant)
- Right of PR fee: $515 CAD
- Medical exam: $200-400 CAD
- Police certificates: $50-200 CAD

**Total minimum: ~$2,700-3,200 CAD per person**

**Optional costs:**
- Immigration consultant: $2,000-5,000+ CAD
- Document translation: $50-200 per document
- Additional tests/certifications

---

## COMMON MISTAKES TO AVOID

1. **Overstating work experience** — IRCC verifies. Be honest.
2. **Wrong NOC code** — Leads to refusals. Verify your classification.
3. **Expired documents** — Check validity dates (language tests, ECA, medicals)
4. **Missing documents** — One missing letter can delay months
5. **Not declaring previous refusals** — They have your history
6. **Waiting too long** — Age affects points. Start now.
7. **Chasing job offers for points** — No longer gives CRS points as of March 2025

---

## ABOUT MIGRATE NORTH PRODUCTS

**Matin Immigration Services Inc.**
RCIC License R712582

📚 **Language Training — $250 CAD/year**
Prepare for IELTS General or CELPIP-General with AI-powered practice.
- Reading modules with full practice tests
- Writing modules with AI essay scoring and feedback
- Grammar and vocabulary training drills
- Progress tracking across sessions
- Speaking & Listening packages available separately (contact info@migratenorth.ca)

Who it's for: Anyone preparing for Canadian immigration language requirements. Most Express Entry candidates need CLB 7+ (IELTS 6.0 in each skill) to be competitive.

🩺 **Licensing Support — $350 CAD/year**
For internationally educated nurses preparing for Canadian licensure.
- 400+ NCLEX practice questions in Next Generation (NGN) format
- Questions organized by category and difficulty
- AI coaching and explanations
- NNAS credential guidance
- Provincial licensing pathway information

Who it's for: Nurses who need to pass NCLEX-RN and navigate Canadian nursing credentials.

🛫 **Immigration Pathway — $450 CAD/year**
- Personalized eligibility assessment
- CRS optimization strategies
- Complete document checklists
- Express Entry profile builder
- 80+ PNP stream tracking
- Application timeline management

**Bundle Offers:**
- Nurse Success Pack (Language + Licensing): $550/year — Save $50
- Skilled Worker Pack (Language + Immigration): $625/year — Save $75
- Complete Migration Pack (Licensing + Immigration): $725/year — Save $75
- All Access Pack (All three): $900/year — Save $150

**Contact:** info@migratenorth.ca

---

## ABOUT MATIN IMMIGRATION SERVICES

We believe that with the right tools, **you can do anything.**

Our mission is to empower you on your immigration journey — to make the process feel less overwhelming and more achievable.

I'm North Star GPS, your 24/7 immigration assistant. I'm here to work for YOU, whenever you need me, at a fraction of traditional consulting costs.

90%+ of cases don't need an expensive consultant. We give you the tools to succeed on your own.

---
${profileContext}

---

## HOW TO RESPOND

1. **Answer the actual question asked.** Don't explain what something IS when they asked what to DO.

2. **Be specific.** Use real numbers, timelines, action items. No vague generalities.

3. **Be direct.** Start with the answer, then provide supporting details.

4. **Be actionable.** Every response should include what they should DO next.

5. **Be conversational.** You're an expert advisor, not a textbook. Respond naturally.

6. **Remember context.** Use what you know about this user to personalize advice.

7. **Promote our products when relevant.** If someone needs language help, mention Language Training. If they're a nurse, mention Licensing Support. Don't be pushy, but do mention it.

8. **Handle current events carefully.** For questions about recent draws, policy changes, or news:
   - If it's general Express Entry knowledge → Answer confidently
   - If it's about SPECIFIC recent draws or breaking news → Say "I recommend checking the official IRCC website or our latest updates for the most current draw results and cutoff scores."

9. **Use markdown formatting.** Bold important terms, use bullet points for lists, keep paragraphs short.

10. **Don't say "Evolve", "Elevate", "Execute", or "Explore"** — use the user-facing names.

---

## SMART DEFERRAL

For time-sensitive information that changes frequently, recommend users verify:
- "Check the IRCC website for the latest draw results"
- "Verify current processing times on the IRCC portal"
- "Confirm the latest proof of funds amounts as they update annually"

This protects users from acting on outdated information while still being helpful.`;
}

// ==============================================================================
// OPENAI CALL
// ==============================================================================

async function callOpenAI(message, history, userProfile) {
  const systemPrompt = buildSystemPrompt(userProfile);

  const messages = [
    { role: "system", content: systemPrompt },
    ...history.slice(-10).map(h => ({ 
      role: h.role === "bot" ? "assistant" : h.role, 
      content: h.text || h.content 
    })),
    { role: "user", content: message }
  ];

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: messages,
    max_tokens: 1500,
    temperature: 0.7
  });

  return response.choices[0].message.content;
}

// ==============================================================================
// NORMALIZE HISTORY
// ==============================================================================

function normalizeHistory(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map(item => {
    if (item.role && (item.text || item.content)) {
      return {
        role: item.role === "bot" ? "assistant" : item.role,
        text: item.text || item.content
      };
    }
    return null;
  }).filter(Boolean);
}

// ==============================================================================
// MAIN HANDLER
// ==============================================================================

export async function handler(event) {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return errorResponse(405, "Method not allowed");
  }

  // Rate limiting
  const clientIP = event.headers["x-forwarded-for"] || event.headers["client-ip"] || "unknown";
  if (!checkRateLimit(clientIP)) {
    return errorResponse(429, "Rate limit exceeded. Please wait a few minutes.");
  }

  try {
    const parsed = JSON.parse(event.body || "{}");
    const message = (parsed.message || "").trim();
    const rawHistory = parsed.history || [];

    if (!message) {
      return errorResponse(400, "Message is required");
    }

    // Get user and profile
    const user = await getUserFromRequest(event);
    if (user) await ensureProfile(user);
    
    let profile = await loadProfile(user);
    profile = { ...profile, ...(parsed.userProfile || {}) };
    
    const history = normalizeHistory(rawHistory);

    // Extract any profile data from message
    profile = extractProfileFromMessage(message, profile);

    // Log activity
    if (user) {
      await logActivity(user, "explore_message", message.substring(0, 100));
    }

    // Check if user is asking for CRS calculation with data
    const wantsCRS = /\b(calculate|estimate|what'?s|my)\b.{0,15}\b(crs|score)/i.test(message.toLowerCase());
    const hasData = profile.age || profile.education || profile.years_experience || profile.ielts_average;

    let aiReply;

    if (wantsCRS && hasData) {
      // Calculate CRS and include in context for AI
      const crs = calculateCRS(profile);
      const crsContext = `\n\n[SYSTEM: User's calculated CRS is ${crs.score} points. Breakdown: ${crs.breakdown.join(", ")}]`;
      aiReply = await callOpenAI(message + crsContext, history, profile);
    } else {
      // Normal AI response
      aiReply = await callOpenAI(message, history, profile);
    }

    // Save updated profile
    if (user) {
      await saveProfile(user, profile);
    }

    return ok({ reply: aiReply, userProfile: profile });

  } catch (err) {
    console.error("Handler error:", err);
    return errorResponse(500, "Internal server error: " + err.message);
  }
}
