// /netlify/functions/chat-explore.js
// North Star Explore server function v8 - Phase 2: Funnel & Soft Gating
// Phase 2 Complete: Funnel state tracking, tier recommendations, soft gates

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
// IDENTITY LAYER - Phase 1B
// ==============================================================================

async function getUserFromRequest(event) {
  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("No auth header found");
    return null;
  }

  const token = authHeader.replace("Bearer ", "");
  console.log("Token received, length:", token.length);
  
  const { data, error } = await supabaseAuth.auth.getUser(token);
  if (error) {
    console.error("Auth error:", error.message);
    return null;
  }
  if (!data?.user) {
    console.log("No user found in token");
    return null;
  }

  console.log("User authenticated:", data.user.id);
  return data.user;
}

async function ensureProfile(user) {
  try {
    const { data: existing, error: selectError } = await supabase
      .from("profiles")
      .select("user_id")
      .eq("user_id", user.id)
      .single();

    if (selectError && selectError.code !== 'PGRST116') {
      console.error("ensureProfile select error:", selectError);
    }

    if (!existing) {
      const { error: insertError } = await supabase.from("profiles").insert({ user_id: user.id });
      if (insertError) {
        console.error("ensureProfile insert error:", insertError);
      } else {
        console.log("Created new profile for user:", user.id);
      }
    }
  } catch (err) {
    console.error("ensureProfile exception:", err);
  }
}

async function loadProfile(user) {
  if (!user) return null;
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
    // Add updated_at timestamp
    profile.updated_at = new Date().toISOString();
    
    const { error } = await supabase
      .from("profiles")
      .update(profile)
      .eq("user_id", user.id);
    
    if (error) {
      console.error("saveProfile error:", error);
    } else {
      console.log("Saved profile for user:", user.id);
    }
  } catch (err) {
    console.error("saveProfile exception:", err);
  }
}

async function logActivity(user, eventType, eventValue) {
  if (!user) return;
  try {
    const { error } = await supabase.from("activity_log").insert({
      user_id: user.id,
      event_type: eventType,
      event_value: eventValue,
    });
    if (error) {
      console.error("logActivity error:", error);
    }
  } catch (err) {
    console.error("logActivity exception:", err);
  }
}

// ==============================================================================
// END IDENTITY LAYER
// ==============================================================================

// ==============================================================================
// PILLAR LOGIC - Phase 1C
// ==============================================================================

function updatePillars(profile) {
  // Language pillar - based on IELTS scores
  const hasLanguage = profile.ielts_listening || profile.ielts_reading || 
                      profile.ielts_writing || profile.ielts_speaking ||
                      profile.ielts_summary || profile.ielts_average;
  profile.pillar_language_status = hasLanguage ? "stable" : "blocking";

  // Education pillar - based on education level
  const hasEducation = profile.education_level || profile.education;
  profile.pillar_education_status = hasEducation ? "stable" : "blocking";

  // Work pillar - based on years experience
  const workYears = profile.years_experience || profile.work_years || 0;
  profile.pillar_work_status = workYears >= 1 ? "stable" : "blocking";

  // Path pillar - based on overall profile completeness
  const isComplete = isProfileComplete(profile);
  profile.pillar_path_status = isComplete ? "weak" : "blocking";

  return profile;
}

function computeLimiter(profile) {
  if (profile.pillar_language_status === "blocking") return "language";
  if (profile.pillar_education_status === "blocking") return "education";
  if (profile.pillar_work_status === "blocking") return "work";
  if (profile.pillar_path_status === "blocking") return "path";
  return null;
}

function isProfileComplete(profile) {
  return !!(
    profile.age &&
    (profile.education_level || profile.education) &&
    (profile.years_experience || profile.workYears) &&
    (profile.ielts_listening || profile.ieltsSummary)
  );
}

// ==============================================================================
// END PILLAR LOGIC
// ==============================================================================

// ==============================================================================
// PHASE 2: FUNNEL STATE & TIER MAPPING
// ==============================================================================

/**
 * Funnel States:
 * - anonymous: Not logged in, just browsing
 * - exploring: Logged in, asking general questions
 * - diagnosed: Profile assessed, CRS calculated, limiter identified
 * - considering: Shown tier recommendation, hasn't subscribed
 * - subscribed: Has active paid tier
 */

function computeFunnelState(user, profile) {
  if (!user) return "anonymous";
  
  // Check if they have an active paid subscription
  if (profile.active_tier && profile.tier_status === "active") {
    return "subscribed";
  }
  
  // Check if they've been shown a recommendation
  if (profile.recommended_tier) {
    return "considering";
  }
  
  // Check if diagnosis is complete (have limiter or all pillars stable)
  if (profile.primary_limiter || isProfileComplete(profile)) {
    return "diagnosed";
  }
  
  return "exploring";
}

/**
 * Step 2.2: Map limiter to recommended tier
 * 
 * Limiter -> Tier mapping:
 * - language -> evolve (IELTS/CELPIP training)
 * - education -> execute (pathway planning, credential advice)
 * - work -> execute (pathway planning, work permit guidance)
 * - path -> execute (full immigration strategy)
 * - null (no limiter) -> execute (ready for application guidance)
 */
function mapLimiterToTier(limiter, profile) {
  // If language is the primary blocker, recommend Evolve
  if (limiter === "language") {
    return {
      tier: "evolve",
      reason: "Your language scores are your biggest opportunity for improvement",
      pitch: "Evolve includes AI-powered IELTS practice with real-time feedback to help you reach CLB 9+."
    };
  }
  
  // Check if they're a healthcare professional (might need Elevate)
  const occupation = (profile.occupation || "").toLowerCase();
  const isHealthcare = occupation.includes("nurse") || 
                       occupation.includes("doctor") || 
                       occupation.includes("medical") ||
                       occupation.includes("healthcare");
  
  if (isHealthcare) {
    return {
      tier: "elevate",
      reason: "Healthcare professionals have specific licensing requirements in Canada",
      pitch: "Elevate includes NCLEX preparation and Canadian licensing guidance for healthcare workers."
    };
  }
  
  // For all other limiters, recommend Execute
  return {
    tier: "execute",
    reason: limiter 
      ? `Your ${limiter} status needs strategic planning to optimize your pathway`
      : "You're ready to move forward with your immigration application",
    pitch: "Execute provides step-by-step guidance through Express Entry, PNP selection, and application preparation."
  };
}

/**
 * Step 2.3: Soft gating thresholds
 * 
 * Instead of hard blocks, we use "depth limits" - users can keep chatting,
 * but we periodically remind them about relevant paid features.
 * 
 * Thresholds:
 * - After CRS calculation: First soft prompt
 * - After 5 messages post-diagnosis: Second reminder
 * - After 10 messages post-diagnosis: Stronger suggestion
 * - Never fully blocked - just guided
 */
function checkGateStatus(profile, messageCount) {
  const funnelState = profile.funnel_state;
  
  // No gating for subscribers or anonymous users
  if (funnelState === "subscribed" || funnelState === "anonymous") {
    return { gated: false, promptLevel: 0 };
  }
  
  // Track messages since diagnosis
  const messagesSinceDiagnosis = profile.messages_since_diagnosis || 0;
  
  if (funnelState === "diagnosed" || funnelState === "considering") {
    if (messagesSinceDiagnosis >= 10) {
      return { gated: false, promptLevel: 3 }; // Strong suggestion
    } else if (messagesSinceDiagnosis >= 5) {
      return { gated: false, promptLevel: 2 }; // Reminder
    } else if (messagesSinceDiagnosis >= 1) {
      return { gated: false, promptLevel: 1 }; // Soft prompt
    }
  }
  
  return { gated: false, promptLevel: 0 };
}

/**
 * Step 2.4: Generate escalation prompts (soft, helpful tone)
 * 
 * These are appended to AI responses, not replacements.
 * The goal is to feel helpful, not pushy.
 */
function generateEscalationPrompt(profile, promptLevel) {
  if (promptLevel === 0) return null;
  
  const recommendation = mapLimiterToTier(profile.primary_limiter, profile);
  const tierName = recommendation.tier.charAt(0).toUpperCase() + recommendation.tier.slice(1);
  
  const prompts = {
    1: `\n\n---\n💡 **Quick tip:** ${recommendation.reason}. When you're ready to take the next step, our **${tierName}** tier can help accelerate your progress.`,
    
    2: `\n\n---\n🎯 **Personalized recommendation:** Based on your profile, ${recommendation.pitch}\n\nClick **💳 Subscribe** to unlock ${tierName} features, or keep exploring - I'm here to help either way.`,
    
    3: `\n\n---\n🚀 **Ready to accelerate?**\n\nYou've done great work understanding your immigration pathway. ${recommendation.pitch}\n\n**${tierName}** is designed specifically for people in your situation. [Learn more about ${tierName} →]\n\nNo pressure - I'll keep helping you here in Explore regardless.`
  };
  
  return prompts[promptLevel] || null;
}

/**
 * Build the full tier recommendation message (shown after CRS calculation)
 */
function buildTierRecommendation(profile, crsResult) {
  const recommendation = mapLimiterToTier(profile.primary_limiter, profile);
  const tierName = recommendation.tier.charAt(0).toUpperCase() + recommendation.tier.slice(1);
  
  let message = `\n\n---\n\n### Your Personalized Next Step\n\n`;
  message += `**${recommendation.reason}.**\n\n`;
  message += `${recommendation.pitch}\n\n`;
  
  // Add tier-specific benefits
  if (recommendation.tier === "evolve") {
    message += `**What's included in Evolve ($150 CAD/year):**\n`;
    message += `• AI-powered IELTS & CELPIP practice tests\n`;
    message += `• Real-time writing and speaking feedback\n`;
    message += `• Vocabulary tracking and personalized drills\n`;
    message += `• Progress tracking toward your target scores\n`;
  } else if (recommendation.tier === "elevate") {
    message += `**What's included in Elevate ($250 CAD/year):**\n`;
    message += `• Comprehensive NCLEX question bank (400+ questions)\n`;
    message += `• Canadian nursing licensing guidance\n`;
    message += `• NNAS credential assessment support\n`;
    message += `• Provincial registration pathways\n`;
  } else {
    message += `**What's included in Execute ($350 CAD/year):**\n`;
    message += `• Step-by-step Express Entry guidance\n`;
    message += `• PNP selection and application support\n`;
    message += `• Document preparation checklists\n`;
    message += `• CRS optimization strategies\n`;
  }
  
  message += `\nClick **💳 Subscribe** to get started, or continue exploring - I'm happy to answer more questions.`;
  
  return message;
}

// ==============================================================================
// END PHASE 2 FUNNEL LOGIC
// ==============================================================================

// ==============================================================================
// RATE LIMITING
// ==============================================================================
const rateLimitMap = new Map();
const RATE_LIMIT = 20;
const RATE_WINDOW = 5 * 60 * 1000;

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { count: 0, start: now };
  if (now - record.start > RATE_WINDOW) {
    record.count = 1;
    record.start = now;
  } else {
    record.count++;
  }
  rateLimitMap.set(ip, record);
  return record.count <= RATE_LIMIT;
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
// FAQ RESPONSES
// ==============================================================================

function getFAQResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  const faqs = {
    "express entry": {
      keywords: ["what is express entry", "explain express entry", "how express entry works", "express entry system"],
      response: `Express Entry is Canada's flagship immigration system for skilled workers. It's an online application management system that ranks candidates based on their Comprehensive Ranking System (CRS) score.

HOW IT WORKS

1. You create an online profile with your qualifications
2. The system calculates your CRS score (out of 1200 points)
3. You enter a pool with other candidates
4. IRCC conducts regular draws and invites top-scoring candidates
5. If invited, you have 60 days to submit a complete application

THREE PROGRAMS UNDER EXPRESS ENTRY

• Federal Skilled Worker (FSW) - for skilled workers with foreign work experience
• Canadian Experience Class (CEC) - for those with Canadian work experience
• Federal Skilled Trades (FST) - for qualified tradespeople

The minimum CRS score for invitations varies by draw, typically ranging from 450-550 points for general draws.`
    },
    "crs scoring": {
      keywords: ["crs score", "crs scoring", "how crs works", "comprehensive ranking", "crs points"],
      response: `The Comprehensive Ranking System (CRS) scores candidates out of 1200 points.

CORE FACTORS (up to 600 points for singles, 500 with spouse)

Age: Maximum points at 20-29 years
Education: Up to 150 points for PhD
Language: Up to 160 points for CLB 10+ in all skills
Work Experience: Up to 80 points for 5+ years

ADDITIONAL FACTORS (up to 600 points)

• Canadian education: 15-30 points
• Canadian work experience: up to 80 points
• Sibling in Canada: 15 points
• French language: 25-50 points
• Provincial nomination: 600 points
• Valid job offer: 50-200 points

WHAT SCORES ARE COMPETITIVE?

• Below 450: Challenging without additional points
• 450-480: Possible in targeted draws
• 480-500: Competitive for most draws
• 500+: Strong position for general draws`
    },
    "ielts celpip": {
      keywords: ["ielts vs celpip", "ielts or celpip", "language test", "ielts celpip difference", "which test"],
      response: `Both IELTS General Training and CELPIP General are accepted for Express Entry.

IELTS GENERAL TRAINING

• International test, accepted worldwide
• Paper-based or computer-based
• Scored 1-9 in each skill
• Speaking test with human examiner
• Available in most countries

CELPIP GENERAL

• Canadian-developed test
• Computer-based only
• Scored 1-12 in each skill
• Speaking test recorded on computer
• Available mainly in Canada and some international locations

CLB CONVERSION

CLB 9 = IELTS 7.0 in all skills = CELPIP 9 in all skills
CLB 7 = IELTS 6.0 in all skills = CELPIP 7 in all skills

For maximum CRS points, you need CLB 10+ (IELTS 7.5-8.0, CELPIP 10).`
    },
    "eca": {
      keywords: ["what is eca", "educational credential", "credential assessment", "eca explained", "wes assessment"],
      response: `An Educational Credential Assessment (ECA) verifies that your foreign education is equivalent to a Canadian credential.

WHY YOU NEED IT

• Required for Express Entry points
• Validates your education level for immigration
• Different from professional licensing

DESIGNATED ORGANIZATIONS

• WES (World Education Services) - most popular
• IQAS (Alberta)
• ICES, CES, PEBC (for pharmacists), MCC (for doctors)

THE PROCESS

1. Apply online with the organization
2. Request transcripts from your institution
3. Pay fees ($200-300 CAD typically)
4. Wait for assessment (4-8 weeks usually)
5. Receive ECA report

VALIDITY

ECAs are valid for 5 years from the date of issue for immigration purposes.`
    },
    "cec fsw fst": {
      keywords: ["cec fsw fst", "three programs", "express entry programs", "which program"],
      response: `Express Entry has three immigration programs:

FEDERAL SKILLED WORKER (FSW)

Requirements:
• 1+ year continuous skilled work experience (NOC 0, A, or B)
• Language: CLB 7 minimum
• Education: High school minimum (ECA required)
• Must score 67+ on FSW points grid

Best for: Skilled workers outside Canada

CANADIAN EXPERIENCE CLASS (CEC)

Requirements:
• 1+ year skilled Canadian work experience in last 3 years
• Language: CLB 7 for NOC 0/A, CLB 5 for NOC B
• No education requirement

Best for: Those with Canadian work experience

FEDERAL SKILLED TRADES (FST)

Requirements:
• 2+ years skilled trade experience
• Job offer OR certificate of qualification
• Language: CLB 5 speaking/listening, CLB 4 reading/writing

Best for: Qualified tradespeople (electricians, plumbers, etc.)`
    },
    "ita pr process": {
      keywords: ["ita", "invitation to apply", "pr process", "process stages", "after ita"],
      response: `The Express Entry process has clear stages:

STAGE 1: PROFILE CREATION

• Create Express Entry profile online
• Receive CRS score
• Enter the candidate pool

STAGE 2: POOL RANKING

• Your profile is ranked against others
• IRCC conducts draws every 2 weeks typically
• If your score meets the cutoff, you receive an ITA

STAGE 3: INVITATION TO APPLY (ITA)

• You have 60 days to submit complete application
• Include all supporting documents
• Pay processing fees ($1,365 for principal applicant)

STAGE 4: APPLICATION REVIEW

• IRCC reviews your application (6-8 months typically)
• May request additional documents
• Background and medical checks

STAGE 5: CONFIRMATION OF PR (COPR)

• If approved, receive COPR and entry visa
• Land in Canada to activate PR status
• Receive PR card by mail`
    },
    "eligibility": {
      keywords: ["am i eligible", "eligible for express entry", "do i qualify", "check eligibility"],
      response: `To be eligible for Express Entry, you need to meet minimum requirements for at least one program.

BASIC REQUIREMENTS FOR FSW

✓ 1+ year skilled work experience (NOC TEER 0, 1, 2, or 3)
✓ Language test results (CLB 7 minimum)
✓ Educational Credential Assessment
✓ Score 67+ on FSW selection factors
✓ Proof of funds (unless working in Canada)

BASIC REQUIREMENTS FOR CEC

✓ 1+ year skilled Canadian work experience in last 3 years
✓ Language test results (CLB 7 for TEER 0/1, CLB 5 for TEER 2/3)
✓ Plan to live outside Quebec

DISQUALIFYING FACTORS

✗ Criminal inadmissibility
✗ Medical inadmissibility
✗ Misrepresentation in previous applications
✗ Previous removal order

Would you like me to help you check your specific eligibility? Tell me about your education, work experience, and language test scores.`
    },
    "calculate crs": {
      keywords: ["how to calculate crs", "crs calculation explained", "crs formula"],
      response: `To get your personalized CRS score, just tell me your details:

• Your age
• Highest education level  
• Years of work experience
• IELTS or CELPIP scores

For example: "I'm 32 with a Master's degree, 5 years work experience, IELTS 7.5 in all bands"

Once you share these, I'll calculate your exact CRS score and show you the breakdown.`
    },
    "inadmissibility": {
      keywords: ["inadmissibility", "police check", "medical exam", "criminal record", "background check"],
      response: `Canada screens all immigration applicants for admissibility.

CRIMINAL INADMISSIBILITY

• DUI/DWI can make you inadmissible
• Serious criminality = 10+ year sentence
• Criminality = any conviction
• Solutions: Rehabilitation application or Temporary Resident Permit

MEDICAL INADMISSIBILITY

• Conditions that pose public health risk
• Conditions requiring excessive healthcare costs
• Immigration Medical Exam (IME) required
• Must use IRCC-approved panel physician

SECURITY INADMISSIBILITY

• Espionage or terrorism
• Human rights violations
• Organized crime involvement

REQUIRED CHECKS

• Police Clearance Certificate from each country you lived 6+ months since age 18
• Processing time varies by country (FBI takes 12-16 weeks)
• Valid for 1 year typically

If you have concerns about inadmissibility, I can explain options. What's your specific situation?`
    },
    "consultant lawyer": {
      keywords: ["consultant", "lawyer", "rcic", "do i need", "immigration help", "hire consultant"],
      response: `You don't legally need a consultant or lawyer, but professional help can be valuable in complex cases.

WHEN TO CONSIDER PROFESSIONAL HELP

• Previous refusals or inadmissibility issues
• Complex family situations
• Employer-sponsored applications
• Appeals or humanitarian cases
• You're unsure about your eligibility

RCIC vs IMMIGRATION LAWYER

RCIC (Regulated Canadian Immigration Consultant):
• Licensed by College of Immigration Consultants
• Can handle most immigration applications
• Generally lower fees ($1,500-5,000)

Immigration Lawyer:
• Member of provincial law society
• Can represent in court/appeals
• Generally higher fees ($3,000-10,000+)

HOW TO VERIFY

• Check CICC registry for RCICs
• Check provincial law society for lawyers
• Never use "ghost consultants" (unlicensed)

Matin Immigration Services (RCIC #R712582) offers professional consultation if you need expert guidance on your case.`
    },
    "low crs": {
      keywords: ["crs too low", "low crs", "low score", "increase crs", "boost crs", "improve score"],
      response: `A low CRS score isn't the end of your journey. Here are proven strategies:

FASTEST WINS (can add 50-150 points)

1. Improve language scores → Up to 40 extra points
   Moving from CLB 8 to CLB 10 adds significant points

2. Get a provincial nomination → 600 points
   Some PNPs have lower requirements than Express Entry

3. One year Canadian work/study → 15-30 points
   Also opens CEC pathway

MEDIUM-TERM OPTIONS

4. Additional education → 15-30 points
   Canadian diploma or degree

5. French language → 25-50 points
   Even basic French helps

6. Job offer (LMIA) → 50-200 points
   Difficult but valuable

ALTERNATIVE PATHWAYS

• Atlantic Immigration Program
• Rural and Northern Immigration Pilot
• Provincial Nominee Programs (non-EE streams)
• Start-up Visa (entrepreneurs)

What's your current score and situation? I can suggest the best strategy for your case.`
    },
    "boost fast": {
      keywords: ["boost fast", "quick points", "fast improvement", "50 points"],
      response: `Here are the fastest ways to boost your CRS score:

IMMEDIATE IMPACT

1. RETAKE LANGUAGE TEST
   • CLB 9 to 10 = +20-40 points
   • Focus on weakest skill
   • Many improve 0.5-1.0 band with preparation
   • Cost: ~$300-400

2. SECOND LANGUAGE (FRENCH)
   • NCLC 7+ = 25 points (with strong English)
   • NCLC 5 gives some points too
   • TEF or TCF Canada accepted

WITHIN 3-6 MONTHS

3. PROVINCIAL NOMINATION
   • 600 points added to CRS
   • Some PNPs have NOI streams
   • Research BC, Ontario, Alberta, Saskatchewan PNPs

4. GET ECA FOR ALL CREDENTIALS
   • Each credential assessed separately
   • Multiple degrees = higher education points

WITHIN 1 YEAR

5. CANADIAN EXPERIENCE
   • Work permit → 1 year work → CEC eligible
   • Study permit → Canadian credential + PGWP

Which of these options would you like me to explain further?`
    },
    "common mistakes": {
      keywords: ["mistakes", "common mistakes", "avoid mistakes", "application errors", "kill applications"],
      response: `These mistakes can seriously harm or destroy your application:

CRITICAL ERRORS

1. MISREPRESENTATION
   • Even unintentional errors can be seen as misrepresentation
   • 5-year ban from all Canadian immigration
   • Always disclose everything, even unfavorable info

2. INCOMPLETE WORK HISTORY
   • Must list ALL jobs, including gaps
   • Unexplained gaps raise red flags
   • Keep reference letters from all employers

3. EXPIRED DOCUMENTS
   • Language tests valid 2 years
   • ECA valid 5 years
   • Police checks typically 1 year
   • Medical exam valid 1 year

COMMON PROBLEMS

4. Wrong NOC code selection
5. Missing reference letter requirements
6. Poor quality document scans
7. Not updating profile changes
8. Missing deadlines (60 days for ITA)

PROCESS MISTAKES

9. Applying without complete documents ready
10. Not saving copies of everything submitted
11. Using unregulated consultants
12. Relying on forums instead of official sources

Would you like me to explain any of these in more detail?`
    },
    "improve profile": {
      keywords: ["improve profile", "strengthen profile", "boost profile", "100 points"],
      response: `Here's how others have significantly improved their profiles:

LANGUAGE IMPROVEMENT STORIES

• Engineer improved IELTS from 7.0 to 8.0 = +30 points
• Took 3 months of focused preparation
• Used official practice tests and tutoring

PROVINCIAL NOMINATION SUCCESS

• IT professional got Ontario nomination = +600 points
• Applied through Human Capital Priorities stream
• Total processing: 4 months

CANADIAN EDUCATION PATHWAY

• Completed 1-year diploma in Canada = +15-30 points
• Also gained Canadian work experience through PGWP
• Qualified for CEC instead of FSW

STRATEGIC COMBINATIONS

• French + English bilingual bonus = +50 points
• Spouse improved scores = family points boost
• Canadian work + education = maximum additional points

YOUR PATH FORWARD

1. Identify your biggest point gaps
2. Focus on highest ROI improvements
3. Consider timeline and investment
4. Have backup pathways ready

Tell me about your current profile and I'll suggest specific improvements.`
    },
    "pnp": {
      keywords: ["pnp", "provincial nominee", "provincial nomination", "province"],
      response: `Provincial Nominee Programs (PNPs) are powerful immigration pathways.

HOW PNP WORKS

• Each province has its own immigration programs
• They nominate candidates who meet their needs
• A nomination adds 600 CRS points (virtually guarantees ITA)

EXPRESS ENTRY-LINKED PNPs

Ontario (OINP):
• Human Capital Priorities - for high-scoring EE candidates
• Skilled Trades - for trade workers
• French-Speaking Skilled Worker

British Columbia (BC PNP):
• Skills Immigration - Express Entry stream
• Tech stream - fast processing for tech workers

Alberta (AINP):
• Alberta Express Entry stream
• Alberta Opportunity Stream

Saskatchewan (SINP):
• Express Entry category
• Occupation In-Demand

NON-EXPRESS ENTRY PNPs

• Often have lower requirements
• Longer processing times
• Good backup options

STRATEGY

1. Create Express Entry profile first
2. Indicate which provinces interest you
3. Research specific PNP requirements
4. Apply to relevant streams

Which province interests you most?`
    },
    "job offer vs pnp": {
      keywords: ["job offer vs pnp", "job offer or pnp", "lmia or nomination", "which better"],
      response: `Both job offers and PNPs can significantly boost your CRS, but they work differently.

JOB OFFER (LMIA-SUPPORTED)

Points: 50-200 CRS points
• NOC 00 (senior management) = 200 points
• Other NOC 0/A/B = 50 points

Pros:
• Employment waiting for you
• Income from day one
• Employer support

Cons:
• Requires employer to get LMIA (expensive, time-consuming)
• Employer must prove no Canadians available
• You're dependent on that employer

PROVINCIAL NOMINATION

Points: 600 CRS points

Pros:
• Virtually guarantees invitation
• No employer dependency
• More flexibility in job search

Cons:
• Must meet provincial requirements
• Some streams are competitive
• May require commitment to live in that province

RECOMMENDATION

• PNP is usually more valuable (600 vs 50 points)
• Job offer is good if employer is willing
• Best case: Both (job offer can help PNP applications)

What's your current situation? Do you have job offer prospects or provincial interest?`
    },
    "timeline": {
      keywords: ["how long", "timeline", "processing time", "how fast", "when will i"],
      response: `Here are typical timelines for Express Entry:

PREPARATION PHASE (1-6 months)

• Language test: 2-4 weeks for results
• ECA: 4-8 weeks (WES)
• Police checks: varies by country (2-16 weeks)
• Document gathering: 2-4 weeks

EXPRESS ENTRY POOL (varies)

• Profile creation: 1-2 hours
• Time in pool: 1 week to 6+ months
• Depends on your CRS score and draw patterns

POST-ITA (6-8 months typically)

• Application preparation: 1-2 weeks
• IRCC processing: 6-8 months (80% processed)
• Medical exam: valid 1 year
• Background check: included in processing

TOTAL TIMELINE

Fast scenario (high CRS): 8-12 months total
Average scenario: 12-18 months total
Complex cases: 18-24+ months

CURRENT PROCESSING

IRCC aims to process 80% of Express Entry applications within 6 months. Check IRCC website for current processing times.

What stage are you at in your journey?`
    },
    "costs": {
      keywords: ["cost", "costs", "how much", "total cost", "fees", "money", "expensive"],
      response: `Here's a comprehensive cost breakdown for Express Entry:

REQUIRED FEES (CAD)

Application Processing:
• Principal applicant: $1,365
• Spouse/partner: $1,365
• Dependent child: $230

Right of Permanent Residence:
• Principal + spouse: $515 each
• Children: $0

Biometrics:
• Per person: $85

PREPARATION COSTS

Language Test:
• IELTS: $300-350
• CELPIP: $280-300

Educational Credential Assessment:
• WES: $220-300
• Other organizations: similar

Police Certificates:
• Varies by country ($20-100 each)

Medical Exam:
• $200-450 depending on location

TOTAL ESTIMATE

Single applicant: $2,500-3,500 CAD
Couple: $4,500-6,000 CAD
Family of 4: $5,500-7,500 CAD

PROOF OF FUNDS REQUIREMENT

• Single: $14,690
• Couple: $18,288
• Family of 4: $27,514
(Not a cost - just must prove you have it)

OPTIONAL COSTS

• Immigration consultant: $1,500-5,000
• Document translation: $50-100/document
• Additional language tests: $300`
    },
    "documents": {
      keywords: ["documents", "document checklist", "what documents", "need documents", "required documents"],
      response: `Here's your Express Entry document checklist:

IDENTITY DOCUMENTS

□ Valid passport (all pages)
□ National ID card (if applicable)
□ Birth certificate
□ Marriage certificate (if applicable)
□ Divorce/death certificates (if applicable)

LANGUAGE PROOF

□ IELTS or CELPIP test results
□ TEF/TCF for French (if claiming)
□ Must be less than 2 years old

EDUCATION DOCUMENTS

□ Educational Credential Assessment (ECA)
□ Degrees/diplomas (originals and translations)
□ Transcripts
□ Professional licenses (if applicable)

WORK EXPERIENCE DOCUMENTS

□ Reference letters from each employer
  - Must include: job title, duties, hours, salary, dates
  - On company letterhead with contact info
□ Employment contracts
□ Pay stubs or tax documents

POLICE CERTIFICATES

□ From each country lived 6+ months since age 18
□ Must be less than 1 year old typically

PROOF OF FUNDS

□ Bank statements (6 months)
□ Investment statements
□ Property valuations (if applicable)

PHOTOS

□ Passport-style photos meeting IRCC specs

Need help with any specific document?`
    },
    "pricing services": {
      keywords: ["pricing", "services", "your pricing", "matin services", "matin pricing"],
      response: `Matin Immigration Services offers AI-powered planning and preparation.

CORE SUBSCRIPTIONS

📚 Language Training (Evolve) - $150 CAD/year
• IELTS and CELPIP preparation
• AI-powered writing and reading tests
• Real-time feedback and scoring
• Vocabulary tracking and review

🩺 Licensing Support (Elevate) - $250 CAD/year
• NCLEX preparation for nurses
• NNAS credential guidance
• Provincial licensing pathways
• Study plans and practice questions

🛫 Immigration Pathway (Execute) - $350 CAD/year
• Express Entry guidance
• CRS optimization strategies
• Document preparation support
• Application readiness audits

BUNDLE OFFERS

• Nurse Success Pack (Evolve + Elevate): $350/year - Save $50
• Skilled Worker Pack (Evolve + Execute): $425/year - Save $75
• Complete Migration Pack (Elevate + Execute): $525/year - Save $75
• All Access Pack (All three): $600/year - Save $150

PROFESSIONAL SERVICES

• Application Audit and Review: $300 CAD
• Full Application Preparation: Starting at $2,000 CAD
• Private Advisory Sessions: By appointment

Click 💳 Subscribe to get started, or contact info@migratenorth.ca`
    },
    "about matin": {
      keywords: ["about matin", "who are you", "matin immigration", "your company", "about company"],
      response: `Matin Immigration Services is an AI-powered immigration education and planning platform.

WHO WE ARE

Matin Immigration Services Inc. operates under RCIC License #R712582, issued by the College of Immigration and Citizenship Consultants of Canada.

We help individuals understand Canadian immigration clearly, affordably, and independently.

OUR PLATFORM - MIGRATE NORTH

🧭 Explore (FREE)
Your starting point. Understand pathways, check eligibility, learn the system.

📚 Evolve - Language Training
IELTS and CELPIP preparation with AI-powered practice and feedback.

🩺 Elevate - Licensing Support
For internationally educated nurses pursuing Canadian registration.

🛫 Execute - Immigration Pathway
Step-by-step guidance through Express Entry and PNP applications.

OUR APPROACH

• AI-assisted tools available 24/7
• Structured learning paths
• Affordable subscription pricing
• Professional support when needed

CONTACT

Email: info@migratenorth.ca
Website: migratenorth.ca
RCIC License: R712582

How can we help with your immigration journey?`
    },
    "strategy": {
      keywords: ["personalized strategy", "my strategy", "custom strategy", "immigration strategy"],
      response: `I'd be happy to help create your personalized immigration strategy.

To give you the best guidance, I need to understand your profile:

BASIC INFORMATION NEEDED

1. What is your age?
2. What is your highest education level?
3. What field/occupation do you work in?
4. How many years of skilled work experience do you have?
5. Have you taken IELTS or CELPIP? What were your scores?

ADDITIONAL FACTORS

6. Do you have any Canadian education or work experience?
7. Do you speak French?
8. Do you have a spouse/partner? What are their qualifications?
9. Do you have a job offer from a Canadian employer?
10. Are there specific provinces you're interested in?

Please share these details and I'll provide:
• Your estimated CRS score
• Your eligible programs
• Recommended pathways
• Specific steps to improve your profile
• Timeline estimate

The more details you provide, the more personalized my recommendations will be.`
    }
  };

  // Check each FAQ category
  for (const [key, faq] of Object.entries(faqs)) {
    for (const keyword of faq.keywords) {
      if (lowerMessage.includes(keyword)) {
        return faq.response;
      }
    }
  }

  return null;
}

// ==============================================================================
// CRS ESTIMATION
// ==============================================================================

const CRS_TABLES = {
  age: {
    17: 0, 18: 99, 19: 105, 20: 110, 21: 110, 22: 110, 23: 110, 24: 110, 25: 110,
    26: 110, 27: 110, 28: 110, 29: 110, 30: 105, 31: 99, 32: 94, 33: 88, 34: 83,
    35: 77, 36: 72, 37: 66, 38: 61, 39: 55, 40: 50, 41: 39, 42: 28, 43: 17, 44: 6, 45: 0
  },
  education: {
    "phd": 150, "doctorate": 150, "doctoral": 150,
    "master": 135, "masters": 135, "master's": 135,
    "two or more": 128, "multiple degrees": 128, "two degrees": 128,
    "bachelor": 120, "bachelors": 120, "bachelor's": 120, "degree": 120,
    "three year diploma": 98, "3 year diploma": 98, "3-year diploma": 98,
    "two year diploma": 91, "2 year diploma": 91, "2-year diploma": 91, "diploma": 91,
    "one year diploma": 84, "1 year diploma": 84, "1-year diploma": 84, "certificate": 84,
    "high school": 30, "secondary": 30
  },
  workYears: { 0: 0, 1: 40, 2: 53, 3: 64, 4: 72, 5: 80 },
  languageCLB: {
    10: 34, 9: 31, 8: 23, 7: 17, 6: 9, 5: 6, 4: 0
  }
};

function estimateCRS(profile) {
  let score = 0;
  let breakdown = [];

  // Age points
  if (profile.age) {
    const agePoints = CRS_TABLES.age[Math.min(Math.max(profile.age, 17), 45)] || 0;
    score += agePoints;
    breakdown.push(`Age (${profile.age}): ${agePoints} points`);
  }

  // Education points
  if (profile.education) {
    const eduLower = profile.education.toLowerCase();
    let eduPoints = 0;
    for (const [key, points] of Object.entries(CRS_TABLES.education)) {
      if (eduLower.includes(key)) {
        eduPoints = Math.max(eduPoints, points);
      }
    }
    score += eduPoints;
    breakdown.push(`Education: ${eduPoints} points`);
  }

  // Work experience points
  const workYrs = profile.work_years || profile.workYears || profile.years_experience;
  if (workYrs !== undefined) {
    const workPoints = CRS_TABLES.workYears[Math.min(workYrs, 5)] || 0;
    score += workPoints;
    breakdown.push(`Work Experience (${workYrs} years): ${workPoints} points`);
  }

  // Language points (simplified - using average of IELTS bands)
  // Convert IELTS to CLB: 9.0=CLB10, 8.5=CLB10, 8.0=CLB9, 7.5=CLB9, 7.0=CLB8, 6.5=CLB8, 6.0=CLB7, 5.5=CLB6
  const ieltsAvg = profile.ielts_average || profile.ieltsAverage;
  if (ieltsAvg) {
    let clb = 4; // default minimum
    const ielts = ieltsAvg;
    if (ielts >= 8.5) clb = 10;
    else if (ielts >= 7.5) clb = 9;
    else if (ielts >= 6.5) clb = 8;
    else if (ielts >= 6.0) clb = 7;
    else if (ielts >= 5.5) clb = 6;
    else if (ielts >= 5.0) clb = 5;
    
    const langPoints = (CRS_TABLES.languageCLB[clb] || 0) * 4;
    score += langPoints;
    breakdown.push(`Language (IELTS ${ieltsAvg} = CLB ${clb}): ${langPoints} points`);
  }

  return { score, breakdown };
}

// ==============================================================================
// PROFILE EXTRACTION
// ==============================================================================

function extractProfileFromMessage(message, existingProfile = {}) {
  const profile = { ...existingProfile };
  const lowerMessage = message.toLowerCase();

  // Extract age
  const ageMatch = message.match(/(?:i am|i'm|age is|aged?)\s*(\d{2})/i) ||
                   message.match(/(\d{2})\s*years?\s*old/i);
  if (ageMatch) {
    profile.age = parseInt(ageMatch[1]);
  }

  // Extract education
  const eduPatterns = [
    { pattern: /\b(phd|doctorate|doctoral)\b/i, value: "PhD" },
    { pattern: /\b(master'?s?|mba|msc|ma)\b/i, value: "Master's" },
    { pattern: /\b(bachelor'?s?|degree|bsc|ba|beng)\b/i, value: "Bachelor's" },
    { pattern: /\b(diploma|certificate|college)\b/i, value: "Diploma" },
    { pattern: /\b(high school|secondary)\b/i, value: "High School" }
  ];
  for (const { pattern, value } of eduPatterns) {
    if (pattern.test(lowerMessage)) {
      profile.education = value;
      profile.education_level = value;
      break;
    }
  }

  // Extract work years
  const workMatch = message.match(/(\d+)\s*years?\s*(?:of\s*)?(?:work|experience|working)/i) ||
                    message.match(/experience\s*(?:of\s*)?(\d+)\s*years?/i);
  if (workMatch) {
    profile.work_years = parseInt(workMatch[1]);
    profile.years_experience = parseInt(workMatch[1]);
  }

  // Extract occupation/profession
  const occupationPatterns = [
    { pattern: /\b(nurse|nursing|registered nurse|rn)\b/i, value: "nurse" },
    { pattern: /\b(doctor|physician|medical doctor|md)\b/i, value: "doctor" },
    { pattern: /\b(engineer|engineering)\b/i, value: "engineer" },
    { pattern: /\b(software|developer|programmer|it)\b/i, value: "software developer" },
    { pattern: /\b(accountant|accounting)\b/i, value: "accountant" },
    { pattern: /\b(teacher|teaching|educator)\b/i, value: "teacher" }
  ];
  for (const { pattern, value } of occupationPatterns) {
    if (pattern.test(lowerMessage)) {
      profile.occupation = value;
      break;
    }
  }

  // Extract IELTS scores
  const ieltsMatch = message.match(/ielts[:\s]*(\d\.?\d?)[,\s]*(\d\.?\d?)?[,\s]*(\d\.?\d?)?[,\s]*(\d\.?\d?)?/i);
  if (ieltsMatch) {
    const scores = [ieltsMatch[1], ieltsMatch[2], ieltsMatch[3], ieltsMatch[4]]
      .filter(s => s)
      .map(s => parseFloat(s));
    if (scores.length > 0) {
      profile.ielts_average = scores.reduce((a, b) => a + b, 0) / scores.length;
      profile.ielts_summary = scores.join(", ");
      if (scores.length >= 4) {
        profile.ielts_listening = scores[0];
        profile.ielts_reading = scores[1];
        profile.ielts_writing = scores[2];
        profile.ielts_speaking = scores[3];
      }
    }
  }

  // Extract single IELTS band mentioned
  const singleBandMatch = message.match(/ielts\s*(?:band\s*)?(\d\.?\d?)\s*(?:in\s*all|overall|bands?)?/i);
  if (singleBandMatch && !profile.ielts_average) {
    const band = parseFloat(singleBandMatch[1]);
    profile.ielts_average = band;
    profile.ielts_summary = `${band} overall`;
    profile.ielts_listening = band;
    profile.ielts_reading = band;
    profile.ielts_writing = band;
    profile.ielts_speaking = band;
  }

  return profile;
}

function buildCRSExplanation(profile, crsResult) {
  let explanation = `Based on the information you provided:\n\n`;
  
  if (crsResult.breakdown.length > 0) {
    explanation += `**CRS Breakdown:**\n`;
    for (const item of crsResult.breakdown) {
      explanation += `• ${item}\n`;
    }
    explanation += `\n**Estimated Total: ${crsResult.score} points**\n\n`;
  }

  // Add context about competitiveness
  if (crsResult.score < 450) {
    explanation += `This score is below typical invitation cutoffs (450-500+). Consider:\n`;
    explanation += `• Improving language scores (biggest impact)\n`;
    explanation += `• Provincial Nominee Programs (+600 points)\n`;
    explanation += `• Canadian education or work experience\n`;
  } else if (crsResult.score < 480) {
    explanation += `This score may be competitive for targeted draws. To improve:\n`;
    explanation += `• Boost language to CLB 10+ (+40 points possible)\n`;
    explanation += `• Consider PNP streams\n`;
  } else {
    explanation += `This is a competitive score for Express Entry general draws.\n`;
  }

  // Add limiter info if available
  if (profile.primary_limiter) {
    explanation += `\n**Your primary limiting factor:** ${profile.primary_limiter}\n`;
  }

  return explanation;
}

function buildBothOptionsFollowUp(profile) {
  let response = `I understand you want to explore both options. Let me help you assess your situation.\n\n`;
  
  if (!profile.age || !profile.education || !profile.workYears) {
    response += `To give you specific guidance, I need a few details:\n\n`;
    if (!profile.age) response += `• What is your age?\n`;
    if (!profile.education) response += `• What is your highest education level?\n`;
    if (!profile.workYears) response += `• How many years of work experience do you have?\n`;
    response += `\nOnce I have these details, I can estimate your CRS score and recommend the best pathway.`;
  }
  
  return response;
}

// ==============================================================================
// OPENAI CALL
// ==============================================================================

async function callOpenAI(message, history, userProfile) {
  const systemPrompt = `You are North Star GPS, an expert Canadian immigration assistant for Migrate North.

Your role:
- Help users understand Canadian immigration pathways
- Explain Express Entry, PNPs, and requirements clearly
- Estimate CRS scores when given profile information
- Identify gaps and suggest improvements
- Never provide legal advice or guarantees

User's known profile:
${JSON.stringify(userProfile, null, 2)}

Guidelines:
- Be warm and encouraging but realistic
- Use clear structure in responses
- When users share profile details, extract and remember them
- If they ask about CRS, provide estimates based on what you know
- Recommend relevant Migrate North services when appropriate:
  - Evolve (Language Training) for low language scores
  - Elevate (Licensing) for healthcare professionals
  - Execute (Immigration) for application guidance

Keep responses concise but comprehensive. Use bullet points for lists.`;

  const messages = [
    { role: "system", content: systemPrompt },
    ...history.slice(-10).map(h => ({ role: h.role, content: h.text || h.content })),
    { role: "user", content: message }
  ];

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: messages,
    max_tokens: 1000,
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

function getLastAssistantMessage(history) {
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].role === "assistant" || history[i].role === "bot") {
      return history[i].text || history[i].content || "";
    }
  }
  return "";
}

// ==============================================================================
// MAIN HANDLER
// ==============================================================================

export async function handler(event) {
  // Handle CORS preflight
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

    // ==============================================================================
    // PHASE 1B: Get authenticated user
    // ==============================================================================
    const user = await getUserFromRequest(event);
    
    // Create profile row if new user
    if (user) {
      await ensureProfile(user);
    }

    // ==============================================================================
    // PHASE 1C: Load profile from database
    // ==============================================================================
    let dbProfile = await loadProfile(user);

    // Merge database profile with incoming profile data
    const incomingProfile = { ...(dbProfile || {}), ...(parsed.userProfile || {}) };

    // Normalize history
    const history = normalizeHistory(rawHistory);

    // ==============================================================================
    // EXTRACT PROFILE DATA FROM MESSAGE (do this early)
    // ==============================================================================
    const lowerMessage = message.toLowerCase();
    let updatedProfile = extractProfileFromMessage(message, incomingProfile);

    // ==============================================================================
    // PHASE 1C: Update pillars and compute limiter
    // ==============================================================================
    if (user) {
      updatedProfile = updatePillars(updatedProfile);
      updatedProfile.primary_limiter = computeLimiter(updatedProfile);
    }

    // ==============================================================================
    // PHASE 2: Update funnel state
    // ==============================================================================
    if (user) {
      updatedProfile.funnel_state = computeFunnelState(user, updatedProfile);
      
      // Track messages since diagnosis for soft gating
      if (updatedProfile.funnel_state === "diagnosed" || updatedProfile.funnel_state === "considering") {
        updatedProfile.messages_since_diagnosis = (updatedProfile.messages_since_diagnosis || 0) + 1;
      }
    }

    // ==============================================================================
    // CHECK FOR CRS CALCULATION REQUEST FIRST (before FAQ)
    // ==============================================================================
    const wantsCRS = lowerMessage.includes("crs") || 
                     lowerMessage.includes("my score") ||
                     lowerMessage.includes("calculate") ||
                     lowerMessage.includes("estimate");
    
    const hasProfileData = updatedProfile.age || updatedProfile.education || 
                          updatedProfile.work_years || updatedProfile.years_experience ||
                          updatedProfile.ielts_average;

    if (wantsCRS && hasProfileData) {
      // Personalized CRS analysis requires login
      if (!user) {
        return ok({
          reply: `I can see you've shared some profile information. To give you a personalized CRS analysis that saves to your profile, please login first (it's free!).\n\nClick the 🔐 Login button above to continue.`,
          userProfile: updatedProfile
        });
      }

      // Log CRS analysis activity
      await logActivity(user, "explore_crs_analysis", JSON.stringify(updatedProfile));

      const crsResult = estimateCRS(updatedProfile);
      let explanation = buildCRSExplanation(updatedProfile, crsResult);

      // ==============================================================================
      // PHASE 2: Add tier recommendation after CRS calculation
      // ==============================================================================
      // This is the first "diagnosed" moment - show tier recommendation
      const recommendation = mapLimiterToTier(updatedProfile.primary_limiter, updatedProfile);
      updatedProfile.recommended_tier = recommendation.tier;
      updatedProfile.funnel_state = "diagnosed";
      updatedProfile.messages_since_diagnosis = 0; // Reset counter
      
      // Add tier recommendation to response
      explanation += buildTierRecommendation(updatedProfile, crsResult);

      // Save profile updates
      await saveProfile(user, updatedProfile);

      return ok({ reply: explanation, userProfile: updatedProfile });
    }

    // ==============================================================================
    // CHECK FOR FAQ RESPONSE (after CRS check)
    // ==============================================================================
    const faqResponse = getFAQResponse(message);
    if (faqResponse) {
      // Log FAQ activity
      if (user) {
        await logActivity(user, "explore_faq", message.substring(0, 100));
      }
      
      // ==============================================================================
      // PHASE 2: Check soft gating and add escalation prompt if needed
      // ==============================================================================
      let finalResponse = faqResponse;
      if (user && updatedProfile.funnel_state) {
        const gateStatus = checkGateStatus(updatedProfile, updatedProfile.messages_since_diagnosis || 0);
        const escalationPrompt = generateEscalationPrompt(updatedProfile, gateStatus.promptLevel);
        if (escalationPrompt) {
          finalResponse += escalationPrompt;
        }
        
        // Save updated message count
        await saveProfile(user, updatedProfile);
      }
      
      return ok({ reply: finalResponse, userProfile: updatedProfile });
    }

    // ==============================================================================
    // CHECK FOR "BOTH OPTIONS" INTENT
    // ==============================================================================
    const lastAssistant = getLastAssistantMessage(history).toLowerCase();
    
    if ((lowerMessage.includes("both") || lowerMessage.includes("all")) &&
        (lastAssistant.includes("option 1") || lastAssistant.includes("option 2") ||
         lastAssistant.includes("fsw") || lastAssistant.includes("pnp"))) {
      
      if (user) {
        await logActivity(user, "explore_both_options", "");
      }
      
      const response = buildBothOptionsFollowUp(updatedProfile);
      return ok({ reply: response, userProfile: updatedProfile });
    }

    // ==============================================================================
    // GENERAL AI RESPONSE
    // ==============================================================================
    if (user) {
      await logActivity(user, "explore_message", message.substring(0, 100));
    }

    let aiReply = await callOpenAI(message, history, updatedProfile);

    // Extract any new profile data from AI response context
    updatedProfile = extractProfileFromMessage(message, updatedProfile);
    
    // Update pillars after extraction
    if (user) {
      updatedProfile = updatePillars(updatedProfile);
      updatedProfile.primary_limiter = computeLimiter(updatedProfile);
      updatedProfile.funnel_state = computeFunnelState(user, updatedProfile);
      
      // ==============================================================================
      // PHASE 2: Check soft gating and add escalation prompt if needed
      // ==============================================================================
      const gateStatus = checkGateStatus(updatedProfile, updatedProfile.messages_since_diagnosis || 0);
      const escalationPrompt = generateEscalationPrompt(updatedProfile, gateStatus.promptLevel);
      if (escalationPrompt) {
        aiReply += escalationPrompt;
      }
      
      // Save profile updates
      await saveProfile(user, updatedProfile);
    }

    return ok({ reply: aiReply, userProfile: updatedProfile });

  } catch (err) {
    console.error("Handler error:", err);
    return errorResponse(500, "Internal server error: " + err.message);
  }
}
