// /netlify/functions/chat-explore.js
// North Star Explore server function v9 - IMPROVED DIRECT ANSWERS
// Phase 2 Complete: Funnel state tracking, tier recommendations, soft gates
// v9 Updates: Better system prompt, more FAQ responses, direct answers

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
  
  // Add tier-specific benefits - UPDATED PRICING
  if (recommendation.tier === "evolve") {
    message += `**What's included in Evolve ($250 CAD/year):**\n`;
    message += `• AI-powered IELTS & CELPIP Reading & Writing practice\n`;
    message += `• Real-time scoring and detailed feedback\n`;
    message += `• Vocabulary tracking and personalized drills\n`;
    message += `• Progress tracking toward your target scores\n`;
    message += `• Speaking & Listening packages available separately\n`;
  } else if (recommendation.tier === "elevate") {
    message += `**What's included in Elevate ($350 CAD/year):**\n`;
    message += `• Comprehensive NCLEX question bank (400+ questions)\n`;
    message += `• Canadian nursing licensing guidance\n`;
    message += `• NNAS credential assessment support\n`;
    message += `• Provincial registration pathways\n`;
  } else {
    message += `**What's included in Execute ($450 CAD/year):**\n`;
    message += `• Step-by-step Express Entry guidance\n`;
    message += `• PNP selection and application support\n`;
    message += `• Document preparation checklists\n`;
    message += `• CRS optimization strategies\n`;
  }
  
  message += `\nThese tools are available 24/7 - use them to work for you!\n`;
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
// FAQ RESPONSES - EXPANDED WITH DIRECT ANSWERS
// ==============================================================================

function getFAQResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  const faqs = {
    "express entry": {
      keywords: ["what is express entry", "explain express entry", "how express entry works", "express entry system"],
      response: `**Express Entry is Canada's main system for skilled worker immigration.**

**How it works in 5 steps:**

1. **Create a profile** - Enter your age, education, work experience, and language scores into the IRCC online system

2. **Get ranked** - You receive a CRS (Comprehensive Ranking System) score out of 1200 points

3. **Enter the pool** - Your profile competes with others in the Express Entry pool

4. **Wait for draws** - IRCC holds draws every 2 weeks, inviting the highest-scoring candidates

5. **Get invited** - If your CRS meets the cutoff, you get an ITA (Invitation to Apply) and have 60 days to submit your full PR application

**The 3 Express Entry programs:**
• Federal Skilled Worker (FSW) - For international workers
• Canadian Experience Class (CEC) - For people with Canadian work experience  
• Federal Skilled Trades (FST) - For skilled tradespeople

**Recent draw cutoffs:** 470-520 points (varies by category)

Would you like me to estimate your CRS score?`
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
      response: `**IELTS vs CELPIP Comparison:**

**IELTS General Training**
• International test, available worldwide
• Paper or computer-based
• Speaking: In-person with examiner
• Scored in bands (0-9)
• Results in 13 days (or 5-7 for computer)
• Cost: ~$300-350 CAD
• Accepted globally

**CELPIP General**
• Canadian test, mainly in Canada
• Computer-based only
• Speaking: To computer screen
• Scored in levels (1-12)
• Results in 4-5 days (fastest!)
• Cost: ~$280-320 CAD
• Only for Canadian immigration

**CLB Conversion:**
| CLB | IELTS Band | CELPIP Level |
|-----|------------|--------------|
| 7 | 6.0 | 7 |
| 8 | 6.5 | 8 |
| 9 | 7.0 | 9 |
| 10 | 7.5-8.0 | 10 |

**Which should you choose?**

Choose **IELTS** if:
• You're outside Canada
• You want test accepted for other purposes
• You prefer face-to-face speaking

Choose **CELPIP** if:
• You're in Canada
• You're more comfortable with computers
• You want faster results

**Our Language Training module ($250/year) covers both formats with 66 Reading & Writing practice tests!**`
    },
    "eca": {
      keywords: ["what is eca", "educational credential", "credential assessment", "eca explained", "wes assessment"],
      response: `**Educational Credential Assessment (ECA):**

**What is it?**
An official evaluation that confirms your foreign education is equivalent to a Canadian credential. Required for Express Entry.

**Why it matters:**
• Without ECA = 0 education points
• With ECA = up to 150 CRS points
• It's MANDATORY for FSW program

**Designated Organizations:**
1. **WES (World Education Services)** - Most popular, fastest
2. IQAS - Alberta based
3. ICES - For international pharmacists
4. MCC - For physicians
5. CPA Canada - For accountants

**WES Process:**
1. Create WES account (~15 min)
2. Request documents from your university
3. Documents sent directly to WES (or through WES Gateway)
4. WES evaluates and issues report
5. Report valid for 5 years

**Timeline:** 4-8 weeks (can be faster with WES Gateway)
**Cost:** $200-300 CAD

**Pro tips:**
• Start NOW - this is often the longest wait
• Get transcripts AND degree evaluated
• Use official document delivery, not self-mailed
• Some countries have WES Gateway for faster processing

Have you started your ECA yet?`
    },
    "cec fsw fst": {
      keywords: ["cec fsw fst", "three programs", "express entry programs", "which program"],
      response: `**The 3 Express Entry Programs:**

**1. Federal Skilled Worker (FSW)**
*For skilled workers outside Canada*

Requirements:
• 1+ year continuous skilled work (NOC TEER 0, 1, 2, or 3)
• CLB 7 minimum in all abilities
• Foreign education with ECA
• Score 67+ on FSW points grid
• Proof of funds

Best for: International applicants with strong education and work experience

**2. Canadian Experience Class (CEC)**
*For people with Canadian work experience*

Requirements:
• 1+ year skilled work IN CANADA (last 3 years)
• CLB 7 for NOC 0/A jobs, CLB 5 for NOC B jobs
• No education requirement
• No proof of funds required

Best for: International students, work permit holders, anyone who worked in Canada

**3. Federal Skilled Trades (FST)**
*For skilled tradespeople*

Requirements:
• 2+ years skilled trade experience
• CLB 5 speaking/listening, CLB 4 reading/writing
• Job offer OR trade certification from province
• Trade must be in eligible list

Best for: Electricians, plumbers, welders, mechanics, carpenters, etc.

**Which program fits you?** It depends on where your work experience is and what industry you're in.`
    },
    "ita pr process": {
      keywords: ["ita", "invitation to apply", "pr process", "process stages", "after ita"],
      response: `**Express Entry Process: Step by Step**

**Stage 1: ITA (Invitation to Apply)**
• Your profile is in the pool
• IRCC runs draws every ~2 weeks
• If your CRS meets cutoff → You get ITA
• ITA valid for 60 days

**Stage 2: Application Submission**
• Complete all forms (IMM 0008, Schedule A, etc.)
• Upload all documents
• Pay processing fees ($1,365 + $515 RPRF)
• Submit within 60 days of ITA

**Stage 3: AOR (Acknowledgment of Receipt)**
• IRCC confirms they received your application
• Background checks begin
• You get application number

**Stage 4: Medical Request (if not done)**
• Complete medical exam with designated physician
• Results sent directly to IRCC
• Valid for 12 months

**Stage 5: COPR (Confirmation of Permanent Residence)**
• Application approved!
• You receive COPR letter
• Valid for specific date (check expiry)

**Stage 6: Landing**
• Enter Canada before COPR expires
• Port of entry officer confirms landing
• You become a Permanent Resident!
• PR card mailed to Canadian address

**Timeline:** 6-12 months from ITA to landing

Which stage are you at?`
    },
    "eligibility": {
      keywords: ["am i eligible", "eligible for express entry", "do i qualify", "check eligibility"],
      response: `**Express Entry Eligibility Checklist:**

You need ALL of these:

✅ **Language Test** - IELTS General or CELPIP (minimum CLB 7 for FSW)
✅ **Education** - At least high school (foreign credentials need ECA)
✅ **Work Experience** - At least 1 year skilled work (NOC TEER 0, 1, 2, or 3)
✅ **Proof of Funds** - ~$14,690 CAD for single applicant (unless you have a Canadian job offer)

**Quick eligibility test:**
- Do you have 1+ years of skilled work? ✓/✗
- Can you score CLB 7 (IELTS 6.0) in English? ✓/✗
- Do you have post-secondary education? ✓/✗

If yes to all three, you're likely eligible!

**What's YOUR situation?** Tell me your age, education, work experience, and language level, and I'll give you a specific assessment.`
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
    
    // ============ NEW: DIRECT ANSWER FAQ RESPONSES ============
    
    "consultant lawyer": {
      keywords: ["consultant", "lawyer", "rcic", "do i need", "immigration help", "hire consultant", "consultant or lawyer"],
      response: `**Do You Need Professional Help?**

**You DON'T need a consultant if:**
✅ Straightforward case (no refusals, simple work history)
✅ You're organized and detail-oriented
✅ You have time to research IRCC requirements
✅ Single applicant, clear documentation

**You SHOULD consider professional help if:**
⚠️ Previous visa refusals or inadmissibility issues
⚠️ Complex work history across multiple countries
⚠️ Criminal record or medical concerns
⚠️ Employer-sponsored LMIA applications
⚠️ Appeals or humanitarian cases
⚠️ You're genuinely unsure about eligibility

**RCIC vs Immigration Lawyer:**

| Type | Cost | Can Do |
|------|------|--------|
| RCIC | $1,500-5,000 | Most PR applications |
| Lawyer | $3,000-10,000+ | Court/appeals |

**How to verify:**
• RCIC: Check cicc-ccic.ca registry
• Lawyer: Check provincial law society
• NEVER use unlicensed "ghost consultants"

**Our approach at Matin Immigration Services:**
We empower you with tools to do it yourself (90%+ of cases). For complex situations, we offer professional consultation under RCIC License R712582.`
    },
    "low crs options": {
      keywords: ["crs too low", "low crs", "low score", "increase crs", "boost crs", "improve score", "my options", "what are my options"],
      response: `**Your CRS is low? Here are your REAL options:**

**FASTEST ways to boost CRS:**

1. **Improve IELTS/CELPIP** (+20-50 points)
   - CLB 7 → CLB 9 can add 40+ points
   - This is usually the easiest win

2. **Get a Provincial Nomination** (+600 points)
   - Instant ITA guarantee
   - Many provinces have streams for your NOC

3. **Improve spouse's language scores** (+10-30 points)
   - Often overlooked but significant

4. **Get Canadian work experience** (+50-80 points)
   - Work permit + 1 year = major boost

**IF your CRS is below 450:**
→ Provincial Nominee Programs (PNP) are your best bet
→ Some PNPs don't require job offers
→ Ontario, BC, Alberta, Saskatchewan have active streams

**What's your current CRS?** I can recommend specific strategies for your score range.`
    },
    "boost fast": {
      keywords: ["boost fast", "quick points", "fast improvement", "50 points", "quickly improve"],
      response: `**Fastest CRS Boosters (ranked by speed):**

**🚀 Quick wins (1-3 months):**
1. **Retake IELTS/CELPIP** - Each CLB level = ~20-30 points
   - Focus on your weakest skill
   - CLB 7 → 9 can add 50+ points

2. **Get second language tested** - French adds 25-50 bonus points
   - Even CLB 5 French helps!

**📈 Medium-term (3-6 months):**
3. **Provincial Nomination** - +600 points (game over, you get ITA)
   - Apply to multiple provinces simultaneously
   - Some have rapid processing (Ontario, BC Tech)

4. **Spouse strategy** - Exclude low-scoring spouse OR improve their scores
   - Sometimes applying as single = higher score

**📊 Longer-term (6-12 months):**
5. **Canadian education** - 1-year program adds 15-30 points
6. **Canadian work experience** - Each year adds points

**What's your biggest gap?** Tell me your profile and I'll pinpoint where you'll get the most points fastest.`
    },
    "common mistakes": {
      keywords: ["mistakes", "common mistakes", "avoid mistakes", "application errors", "kill applications"],
      response: `**Top Mistakes That Kill Applications:**

**❌ Documentation Errors:**
1. Work reference letters missing required details (duties, hours, dates)
2. Using wrong NOC code for your job
3. Not getting ALL foreign credentials assessed (ECA)
4. Expired documents (IELTS only valid 2 years!)

**❌ Calculation Mistakes:**
5. Including work experience that doesn't match NOC requirements
6. Counting part-time work incorrectly
7. Not understanding CLB conversion from IELTS bands

**❌ Strategy Mistakes:**
8. Waiting for "perfect" score instead of applying to PNP now
9. Not applying to multiple PNPs simultaneously
10. Ignoring French language bonus (easy 25-50 points!)

**❌ Timing Mistakes:**
11. Starting ECA too late (takes 4-8 weeks)
12. Missing PNP intake windows
13. Not having proof of funds ready in advance

**The #1 mistake?** Waiting too long to act. Start your ECA and language test NOW, even if you're not ready to apply.`
    },
    "improve profile": {
      keywords: ["improve profile", "strengthen profile", "boost profile", "100 points"],
      response: `**Profile Strengthening Strategies:**

**Highest Impact Actions:**

1. **Language (up to +50 points)**
   → Retake IELTS targeting 8+ in each band
   → Consider French (TEF/TCF) for 25-50 bonus points
   → Our Language Training module has 66 practice tests

2. **Education (up to +30 points)**
   → Canadian degree/diploma adds extra points
   → Get ECA for ALL foreign credentials

3. **Provincial Nomination (+600 points)**
   → Research which provinces want your NOC
   → Apply to multiple streams simultaneously
   → Our Immigration Pathway module tracks 80+ PNP streams

4. **Canadian Experience (up to +80 points)**
   → Work permit → Canadian job → CRS boost
   → Even 1 year Canadian experience helps significantly

**Your action plan depends on your current score:**
• Below 450? → Focus on PNP
• 450-480? → Boost language + try PNP
• 480+? → Optimize and wait for draws

What's your current profile? I'll prioritize your actions.`
    },
    "pnp": {
      keywords: ["pnp", "provincial nominee", "provincial nomination", "province"],
      response: `**Provincial Nominee Programs (PNP) Explained:**

**What is PNP?**
Each Canadian province/territory can nominate immigrants who meet their specific needs. A nomination adds **600 CRS points** - essentially guaranteeing an ITA.

**Two Types of PNP:**

**1. Express Entry-linked (faster)**
• You need an Express Entry profile first
• Province "nominates" you in the EE pool
• +600 points → instant ITA
• Processing: 6-8 months total

**2. Non-Express Entry (standalone)**
• Apply directly to province
• Longer processing (12-18 months)
• Good backup if CRS is very low

**Popular PNP Streams (no job offer required):**

**Ontario (OINP):**
• Human Capital Priorities - High CRS candidates
• French-Speaking Skilled Worker
• Tech draws for specific NOCs

**British Columbia (BC PNP):**
• Skills Immigration - EE stream
• Tech stream - 29 tech occupations

**Alberta (AINP):**
• Alberta Express Entry stream
• Alberta Opportunity Stream

**Saskatchewan (SINP):**
• Express Entry category
• Occupation In-Demand

**Strategy:** Apply to multiple provinces simultaneously! There's no rule against it.

Which province are you interested in?`
    },
    "job offer vs pnp": {
      keywords: ["job offer vs pnp", "job offer or pnp", "lmia or nomination", "which better"],
      response: `**Job Offer vs PNP: Which Is Better?**

**Short answer: PNP is usually better for most people.**

**PNP Nomination: +600 CRS points**
✅ Virtually guarantees ITA
✅ Many streams don't require job offer
✅ Can apply to multiple provinces simultaneously
✅ Some process in weeks (BC Tech, Ontario)

**Job Offer: +50-200 CRS points**
✅ Adds points (50 standard, 200 with LMIA)
⚠️ Many employers won't sponsor
⚠️ LMIA process is expensive for employer
⚠️ Job must match NOC requirements exactly

**My recommendation:**

**If your CRS is below 470:**
→ Focus 100% on PNP - it's your fastest path

**If your CRS is 470+:**
→ You might get ITA without either
→ PNP still gives you certainty

**Best provinces for PNP (no job offer required):**
• Ontario - Human Capital Priorities
• BC - Skills Immigration
• Alberta - Alberta Express Entry
• Saskatchewan - Express Entry category

Which province interests you? I can explain their specific requirements.`
    },
    "documents needed": {
      keywords: ["documents", "document checklist", "what documents", "need documents", "required documents"],
      response: `**Express Entry Document Checklist:**

**REQUIRED for Everyone:**
□ Valid passport (all pages)
□ Language test results (IELTS General or CELPIP)
□ Educational Credential Assessment (ECA) from WES, IQAS, etc.
□ Proof of funds (bank statements, 6 months history)
□ Work reference letters (detailed: duties, hours, salary, dates)
□ Police certificates (from every country you lived 6+ months)
□ Medical exam results (from designated panel physician)
□ Digital photos (IRCC specifications)

**IF APPLICABLE:**
□ Marriage certificate (if married)
□ Spouse's documents (passport, language test, ECA)
□ Dependent children's documents
□ Divorce decree (if previously married)
□ Job offer letter (if claiming points)
□ Provincial nomination certificate (if nominated)

**Reference Letter Must Include:**
• Company letterhead
• Your job title and NOC code
• Start and end dates
• Hours per week
• Salary
• Detailed list of duties (matching NOC description)
• Supervisor signature and contact info

**Pro tip:** Start gathering documents NOW. ECA takes 4-8 weeks, police certificates vary by country.`
    },
    "timeline": {
      keywords: ["how long", "timeline", "processing time", "how fast", "when will i"],
      response: `**Express Entry Timeline:**

**Phase 1: Profile Preparation (1-3 months)**
• ECA: 4-8 weeks
• IELTS/CELPIP: Book 2-4 weeks ahead, results in 2 weeks
• Gathering documents: 2-4 weeks

**Phase 2: In the Pool (varies)**
• Draws happen every 2 weeks
• If your CRS meets cutoff → immediate ITA
• If not → wait for category draws or improve score

**Phase 3: After ITA (6-8 months)**
• You have 60 days to submit complete application
• IRCC processing: ~6 months (80% of applications)
• Medical exam: valid for 12 months
• Police certificates: valid for 12 months (some countries)

**Total Realistic Timeline:**
• Best case: 8-10 months (high CRS, documents ready)
• Average: 12-14 months
• With PNP: Add 2-4 months for nomination process

**Current processing times (as of late 2025):**
• FSW: ~6 months after AOR
• CEC: ~4-5 months after AOR
• PNP: ~6-8 months after AOR

Want me to create a personalized timeline based on your situation?`
    },
    "costs": {
      keywords: ["cost", "costs", "how much", "total cost", "fees", "money", "expensive"],
      response: `**Express Entry Cost Breakdown:**

**Mandatory Fees (per person):**
| Item | Cost (CAD) |
|------|------------|
| IELTS/CELPIP exam | $300-400 |
| ECA (WES) | $200-300 |
| Police certificates | $50-150 |
| Medical exam | $200-450 |
| Photos | $20-50 |
| IRCC Processing fee | $1,365 |
| Right of PR fee | $515 |
| Biometrics | $85 |

**Total mandatory: ~$2,700-3,300 per adult**

**Proof of Funds Required (NOT a fee, but must have):**
• Single: $14,690 CAD
• 2 people: $18,288 CAD
• 3 people: $22,483 CAD
• 4 people: $27,297 CAD

**Optional Costs:**
• Immigration consultant: $1,500-5,000
• Test prep courses: $100-500
• Document translation: $50-200

**Family Budget Example:**
Couple with 1 child = ~$8,000-10,000 in fees + ~$22,500 proof of funds

**Our tools save you money:**
• Language Training: $250/year (vs $500+ prep courses)
• Immigration Pathway: $450/year (vs $2,000+ consultants)
• These tools are available 24/7 to work for you!`
    },
    
    // ============ UPDATED PRICING & SERVICES ============
    
    "pricing services": {
      keywords: ["pricing", "services", "your pricing", "matin services", "matin pricing"],
      response: `**Matin Immigration Services Pricing**

**CORE SUBSCRIPTIONS**
📚 Language Training (Evolve) - **$250 CAD/year**
• 66 IELTS/CELPIP Reading & Writing practice tests
• Real-time feedback and scoring
• Vocabulary tracking and review
• Speaking & Listening packages available separately - contact info@migratenorth.ca

🩺 Licensing Support (Elevate) - **$350 CAD/year**
• 400+ NCLEX practice questions
• NNAS credential guidance
• Provincial licensing pathways
• Study plans and progress tracking

🛫 Immigration Pathway (Execute) - **$450 CAD/year**
• Express Entry step-by-step guidance
• CRS optimization strategies
• Document preparation support
• 80+ PNP stream tracking

**BUNDLE OFFERS**
• Nurse Success Pack (Evolve + Elevate): $550/year - Save $50
• Skilled Worker Pack (Evolve + Execute): $625/year - Save $75
• Complete Migration Pack (Elevate + Execute): $725/year - Save $75
• All Access Pack (All three): $900/year - Save $150

**PROFESSIONAL SERVICES**
• Application Audit and Review: $300 CAD
• Full Application Preparation: Starting at $2,000 CAD

All platforms are available 24/7 - use them to work for you!

Click 💳 Subscribe to get started, or contact info@migratenorth.ca`
    },
    "about matin": {
      keywords: ["about matin", "who are you", "matin immigration", "your company", "about company"],
      response: `**Matin Immigration Services**

We believe that with the right tools, you can do anything.

Our mission is to **empower you** on your immigration journey. We want to make this whole process feel easier - less overwhelming, more achievable.

**Think of our platforms as your 24/7 support system.** These tools are here to work for YOU, whenever you need them.

**WHO WE ARE**
Matin Immigration Services Inc. operates under **RCIC License R712582**.

**OUR PLATFORMS**
📚 **Language Training (Evolve)** - $250 CAD/year
   Reading & Writing practice on migratenorth.ca
   Speaking & Listening packages available separately

🩺 **Licensing Support (Elevate)** - $350 CAD/year
   NCLEX preparation for nurses

🛫 **Immigration Pathway (Execute)** - $450 CAD/year
   Express Entry & PNP guidance

**OUR PHILOSOPHY**
You are capable. You just need the right guidance and tools. We are here to help you succeed - available **24/7**, working around your schedule, at a fraction of traditional consulting costs.

**Contact:** info@migratenorth.ca`
    },
    "language training": {
      keywords: ["language training", "evolve", "ielts practice", "celpip practice", "what is evolve"],
      response: `📚 **Language Training (Evolve)**

**What You Get on migratenorth.ca:**
✓ 66 full-length Reading & Writing practice tests
✓ Personalized study plans (30, 60, 90 days)
✓ Real-time scoring and detailed feedback
✓ Grammar and vocabulary drills
✓ Progress tracking across sessions

**Speaking & Listening Training:**
Matin Immigration Services offers separate instructor-led packages for Speaking and Listening preparation. Contact info@migratenorth.ca for pricing and availability.

**Who It's For:**
Anyone preparing for Canadian immigration language requirements. Most Express Entry candidates need CLB 7+ (IELTS 6.0) to be competitive.

**Pricing:** $250 CAD/year

These tools are available 24/7 - use them to work for you!

Click 💳 Subscribe to get started.`
    },
    "licensing support": {
      keywords: ["licensing support", "elevate", "nclex", "nursing", "what is elevate"],
      response: `🩺 **Licensing Support (Elevate)**

**What You Get:**
✓ 400+ NCLEX practice questions (NGN format)
✓ 30, 60, 90-day structured study plans
✓ Clinical judgment and critical thinking modules
✓ Provincial licensing pathway guidance
✓ NNAS application support
✓ Progress tracking and weak area identification

**Who It's For:**
Internationally Educated Nurses (IENs) seeking to practice in Canada. Covers the complete journey from credential assessment to provincial registration.

**Pricing:** $350 CAD/year

These tools are available 24/7 - use them to work for you!

Click 💳 Subscribe to get started.`
    },
    "immigration pathway": {
      keywords: ["immigration pathway", "execute", "immigration support", "what is execute"],
      response: `🛫 **Immigration Pathway (Execute)**

**What You Get:**
✓ Personalized eligibility assessment
✓ CRS score optimization strategies
✓ Complete document checklists (FSW, CEC, PNP)
✓ Express Entry profile builder
✓ Provincial program matching (80+ streams tracked)
✓ Application timeline management
✓ Document review guidance

**Who It's For:**
Anyone ready to begin their Canadian immigration application. Whether you're exploring Express Entry, Provincial Nominee Programs, or need help organizing your submission.

**Pricing:** $450 CAD/year

These tools are available 24/7 - use them to work for you!

Click 💳 Subscribe to get started.`
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

  // Language points
  const ieltsAvg = profile.ielts_average || profile.ieltsAverage;
  if (ieltsAvg) {
    let clb = 4;
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
    explanation += `This score is below typical invitation cutoffs (450-500+). Your best options:\n`;
    explanation += `• **Improve language scores** - biggest impact, fastest win\n`;
    explanation += `• **Provincial Nominee Programs** - +600 points, guarantees ITA\n`;
    explanation += `• **Canadian education or work experience** - opens more doors\n`;
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
// OPENAI CALL - IMPROVED SYSTEM PROMPT FOR DIRECT ANSWERS
// ==============================================================================

async function callOpenAI(message, history, userProfile) {
  const systemPrompt = `You are North Star GPS, an expert Canadian immigration assistant for Migrate North by Matin Immigration Services (RCIC License R712582).

## YOUR CORE MISSION
**DIRECTLY ANSWER THE QUESTION ASKED.** Do not give background information unless specifically requested. Get to the point immediately.

## RESPONSE RULES

1. **ANSWER FIRST** - Start with the direct answer to their question. Don't explain what something IS before answering what they ASKED.

2. **BE SPECIFIC** - Use real numbers, timelines, and action items. No vague generalities.

3. **ASSUME CONTEXT** - When they ask "what are my options?" they want OPTIONS, not definitions. When they ask "should I...?" they want a recommendation.

4. **ACTION-ORIENTED** - Every response should include what they should DO next.

## EXAMPLE OF WRONG vs RIGHT:

WRONG (User asks "My CRS is low, what are my options?"):
"The CRS is a point system that ranks candidates... [3 paragraphs of what CRS is]"

RIGHT:
"Your main options if CRS is low:
1. IMPROVE LANGUAGE SCORES - Fastest boost, CLB 7→9 adds ~50 points
2. GET PROVINCIAL NOMINATION - +600 points, guarantees ITA
3. GET CANADIAN EXPERIENCE - Work permit → Canadian job → big CRS boost

Which option fits your situation? Tell me your current CRS and I'll recommend the best strategy."

## USER'S KNOWN PROFILE:
${JSON.stringify(userProfile, null, 2)}

## PRICING (use these exact figures):
- Language Training (Evolve): $250 CAD/year - Reading & Writing practice
- Licensing Support (Elevate): $350 CAD/year - NCLEX prep
- Immigration Pathway (Execute): $450 CAD/year - Express Entry guidance
- Speaking & Listening training: Contact info@migratenorth.ca for packages

## TONE
- Confident and direct
- Like an experienced advisor who respects your time
- Encouraging but honest
- No fluff or filler phrases

## NEVER DO
- Don't start with "Great question!"
- Don't explain what something IS when they asked what to DO
- Don't give 5 paragraphs when 5 bullet points work better
- Don't be vague - use specific numbers and timeframes

When users share profile details, extract and remember them for personalized advice.`;

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
      const recommendation = mapLimiterToTier(updatedProfile.primary_limiter, updatedProfile);
      updatedProfile.recommended_tier = recommendation.tier;
      updatedProfile.funnel_state = "diagnosed";
      updatedProfile.messages_since_diagnosis = 0;
      
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
