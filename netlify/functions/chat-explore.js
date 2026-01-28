// /netlify/functions/chat-explore.js
// North Star Explore server function v12 - SMART INTENT DETECTION
// v10: Intent router for button clicks
// v11: Naming fix (Language Training, not Evolve)
// v12: SMART FREE-TEXT INTENT DETECTION - fixes mismatched answers

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
// TIER NAME MAPPING - Internal codes to user-facing names
// ==============================================================================
// Internal: evolve, elevate, execute (used in code/database)
// User-facing: Language Training, Licensing Support, Immigration Pathway

function getTierDisplayName(internalName) {
  const mapping = {
    "evolve": "Language Training",
    "elevate": "Licensing Support",
    "execute": "Immigration Pathway"
  };
  return mapping[internalName] || internalName;
}

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

function computeFunnelState(user, profile) {
  if (!user) return "anonymous";
  
  if (profile.active_tier && profile.tier_status === "active") {
    return "subscribed";
  }
  
  if (profile.recommended_tier) {
    return "considering";
  }
  
  if (profile.primary_limiter || isProfileComplete(profile)) {
    return "diagnosed";
  }
  
  return "exploring";
}

function mapLimiterToTier(limiter, profile) {
  if (limiter === "language") {
    return {
      tier: "evolve",
      tierDisplayName: "Language Training",
      reason: "Your language scores are your biggest opportunity for improvement",
      pitch: "I can help you with AI-powered IELTS practice and real-time feedback to help you reach CLB 9+."
    };
  }
  
  const occupation = (profile.occupation || "").toLowerCase();
  const isHealthcare = occupation.includes("nurse") || 
                       occupation.includes("doctor") || 
                       occupation.includes("medical") ||
                       occupation.includes("healthcare");
  
  if (isHealthcare) {
    return {
      tier: "elevate",
      tierDisplayName: "Licensing Support",
      reason: "Healthcare professionals have specific licensing requirements in Canada",
      pitch: "I can help you with NCLEX preparation and Canadian licensing guidance for healthcare workers."
    };
  }
  
  return {
    tier: "execute",
    tierDisplayName: "Immigration Pathway",
    reason: limiter 
      ? `Your ${limiter} status needs strategic planning to optimize your pathway`
      : "You're ready to move forward with your immigration application",
    pitch: "I can provide step-by-step guidance through Express Entry, PNP selection, and application preparation."
  };
}

function checkGateStatus(profile, messageCount) {
  const funnelState = profile.funnel_state;
  
  if (funnelState === "subscribed" || funnelState === "anonymous") {
    return { gated: false, promptLevel: 0 };
  }
  
  const messagesSinceDiagnosis = profile.messages_since_diagnosis || 0;
  
  if (funnelState === "diagnosed" || funnelState === "considering") {
    if (messagesSinceDiagnosis >= 10) {
      return { gated: false, promptLevel: 3 };
    } else if (messagesSinceDiagnosis >= 5) {
      return { gated: false, promptLevel: 2 };
    } else if (messagesSinceDiagnosis >= 1) {
      return { gated: false, promptLevel: 1 };
    }
  }
  
  return { gated: false, promptLevel: 0 };
}

function generateEscalationPrompt(profile, promptLevel) {
  if (promptLevel === 0) return null;
  
  const recommendation = mapLimiterToTier(profile.primary_limiter, profile);
  const tierName = recommendation.tierDisplayName;
  
  const prompts = {
    1: `\n\n---\n💡 **Quick tip:** ${recommendation.reason}. When you're ready to take the next step, subscribe to **${tierName}** and I can help accelerate your progress.`,
    
    2: `\n\n---\n🎯 **Personalized recommendation:** Based on your profile, ${recommendation.pitch}\n\nClick **💳 Subscribe** to unlock ${tierName}, or keep exploring - I'm here to help either way.`,
    
    3: `\n\n---\n🚀 **Ready to accelerate?**\n\nYou've done great work understanding your immigration pathway. ${recommendation.pitch}\n\n**${tierName}** unlocks the full toolkit for people in your situation.\n\nNo pressure - I'll keep helping you here regardless.`
  };
  
  return prompts[promptLevel] || null;
}

function buildTierRecommendation(profile, crsResult) {
  const recommendation = mapLimiterToTier(profile.primary_limiter, profile);
  const tierName = recommendation.tierDisplayName;
  
  let message = `\n\n---\n\n### Your Personalized Next Step\n\n`;
  message += `**${recommendation.reason}.**\n\n`;
  message += `${recommendation.pitch}\n\n`;
  
  if (recommendation.tier === "evolve") {
    message += `**What you get with ${tierName} ($250 CAD/year):**\n`;
    message += `• AI-powered IELTS & CELPIP Reading practice tests\n`;
    message += `• Real-time feedback on reading comprehension\n`;
    message += `• Vocabulary tracking and personalized drills\n`;
    message += `• Progress tracking toward your target scores\n`;
    message += `• Speaking & Listening packages available separately\n`;
  } else if (recommendation.tier === "elevate") {
    message += `**What you get with ${tierName} ($350 CAD/year):**\n`;
    message += `• Comprehensive NCLEX question bank (400+ questions)\n`;
    message += `• Canadian nursing licensing guidance\n`;
    message += `• NNAS credential assessment support\n`;
    message += `• Provincial registration pathways\n`;
  } else {
    message += `**What you get with ${tierName} ($450 CAD/year):**\n`;
    message += `• Step-by-step Express Entry guidance\n`;
    message += `• PNP selection and application support\n`;
    message += `• Document preparation checklists\n`;
    message += `• CRS optimization strategies\n`;
  }
  
  message += `\nI'm available 24/7 - subscribe and let's get to work!\n`;
  message += `\nClick **💳 Subscribe** to get started, or continue exploring - I'm happy to answer more questions.`;
  
  return message;
}

// ==============================================================================
// END PHASE 2 FUNNEL LOGIC
// ==============================================================================

// ==============================================================================
// INTENT ROUTER - PRODUCT BRAIN (v10 NEW)
// ==============================================================================
// This maps frontend button intents to deterministic FAQ responses
// No more guessing - each button gets exactly the right answer

const INTENT_RESPONSES = {
  // STEP 1: Understand the System
  "express_entry_overview": "express_entry",
  "crs_scoring": "crs_scoring", 
  "ielts_vs_celpip": "ielts_celpip",
  "eca_explained": "eca",
  "ee_programs": "cec_fsw_fst",
  "process_stages": "ita_pr_process",
  
  // STEP 2: Check Eligibility
  "eligibility_check": "eligibility",
  "calculate_crs": "calculate_crs",
  "consultant_decision": "consultant_lawyer",
  
  // STEP 3: Improve Profile
  "crs_low": "low_crs_options",
  "boost_crs_fast": "boost_fast",
  "common_mistakes": "common_mistakes",
  "improve_profile": "improve_profile",
  
  // STEP 4: Strategy
  "pnp_overview": "pnp",
  "job_offer_vs_pnp": "job_offer_vs_pnp",
  "timeline_overview": "timeline",
  "cost_overview": "costs",
  "document_checklist": "documents_needed",
  "custom_strategy": "strategy",
  
  // STEP 5: Products & Services
  "about_matin": "about_matin",
  "pricing_services": "pricing_services",
  "what_is_evolve": "language_training",
  "what_is_elevate": "licensing_support",
  "what_is_execute": "immigration_pathway"
};

// Direct intent responses - these bypass FAQ matching entirely
const DIRECT_INTENT_RESPONSES = {
  "next_step": null // Special handling - uses SmartGuidanceEngine on frontend
};

function getIntentResponse(intent) {
  // Check if this intent has a direct response
  if (DIRECT_INTENT_RESPONSES.hasOwnProperty(intent)) {
    return DIRECT_INTENT_RESPONSES[intent];
  }
  
  // Check if this intent maps to a FAQ key
  if (INTENT_RESPONSES[intent]) {
    return INTENT_RESPONSES[intent];
  }
  
  return null;
}

// ==============================================================================
// END INTENT ROUTER
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

function getFAQResponse(faqKey) {
  const faqs = {
    "express_entry": {
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
    "crs_scoring": {
      response: `**CRS Scoring System - How Points Are Calculated**

**CORE FACTORS (up to 600 points for singles, 500 with spouse)**

| Factor | Max Points |
|--------|------------|
| Age | 110 (peak at 20-29) |
| Education | 150 (PhD) |
| Language | 160 (CLB 10+ all skills) |
| Work Experience | 80 (5+ years) |

**ADDITIONAL FACTORS (up to 600 points)**

• Canadian education: 15-30 points
• Canadian work experience: up to 80 points
• Sibling in Canada: 15 points
• French language: 25-50 points
• **Provincial nomination: 600 points** ← Game changer!
• Valid job offer: 50-200 points

**WHAT SCORES ARE COMPETITIVE?**

• Below 450: Need PNP or major improvements
• 450-480: Competitive for category draws
• 480-500: Strong for most draws
• 500+: Excellent position

Tell me your age, education, work experience, and IELTS scores - I'll calculate your CRS.`
    },
    "ielts_celpip": {
      response: `**IELTS vs CELPIP - Which Should You Choose?**

| Feature | IELTS General | CELPIP General |
|---------|---------------|----------------|
| **Format** | Paper or Computer | Computer only |
| **Speaking** | Face-to-face | To computer |
| **Results** | 13 days (5-7 computer) | 4-5 days |
| **Cost** | $300-350 CAD | $280-320 CAD |
| **Availability** | Worldwide | Mainly Canada |

**CLB Conversion Chart:**

| CLB | IELTS | CELPIP |
|-----|-------|--------|
| 7 | 6.0 | 7 |
| 8 | 6.5 | 8 |
| 9 | 7.0 | 9 |
| 10 | 7.5-8.0 | 10 |

**My Recommendation:**

→ **Choose IELTS if:** You're outside Canada, want global recognition, prefer human interaction for speaking

→ **Choose CELPIP if:** You're in Canada, comfortable with computers, want fastest results

**Our Language Training ($250/year) has Reading practice tests to help you prepare!**`
    },
    "eca": {
      response: `**Educational Credential Assessment (ECA) - What You Need to Know**

**What is it?**
An official evaluation confirming your foreign education equals a Canadian credential. **Required for Express Entry.**

**Why it matters:**
• Without ECA = **0 education points**
• With ECA = up to **150 CRS points**
• It's **MANDATORY** for FSW program

**Designated Organizations:**

| Organization | Best For | Timeline |
|--------------|----------|----------|
| **WES** | Most countries | 4-8 weeks |
| IQAS | Alberta applicants | 8-12 weeks |
| ICES | Pharmacists | 8-12 weeks |
| MCC | Physicians | Varies |

**WES Process (Most Popular):**
1. Create WES account online
2. Request documents from your university
3. Documents sent to WES (use WES Gateway if available)
4. WES evaluates and issues report
5. Report valid for **5 years**

**Cost:** $200-300 CAD

**Pro tip:** Start your ECA NOW - it's often the longest wait in the process.

Have you started your ECA yet?`
    },
    "cec_fsw_fst": {
      response: `**The 3 Express Entry Programs Explained**

**1. Federal Skilled Worker (FSW)**
*Best for: International workers outside Canada*

Requirements:
✓ 1+ year continuous skilled work (NOC TEER 0, 1, 2, or 3)
✓ CLB 7 minimum in ALL abilities
✓ Foreign education with ECA
✓ Score 67+ on FSW points grid
✓ Proof of funds (~$14,690 single)

**2. Canadian Experience Class (CEC)**
*Best for: People who worked in Canada*

Requirements:
✓ 1+ year skilled work IN CANADA (last 3 years)
✓ CLB 7 for TEER 0/1 jobs, CLB 5 for TEER 2/3
✓ NO education requirement
✓ NO proof of funds required

**3. Federal Skilled Trades (FST)**
*Best for: Electricians, plumbers, welders, etc.*

Requirements:
✓ 2+ years skilled trade experience
✓ CLB 5 speaking/listening, CLB 4 reading/writing
✓ Job offer OR provincial trade certificate

**Which fits you?** Tell me about your work experience and I'll recommend the right program.`
    },
    "ita_pr_process": {
      response: `**Express Entry Process: From Profile to PR**

**Stage 1: Create Profile**
• Submit your info to IRCC online system
• Receive your CRS score
• Enter the candidate pool

**Stage 2: Wait for Draw**
• IRCC runs draws every ~2 weeks
• If your CRS meets cutoff → You get **ITA**
• ITA = Invitation to Apply

**Stage 3: Submit Application (60 days)**
• Complete all forms (IMM 0008, Schedule A, etc.)
• Upload documents
• Pay fees ($1,365 + $515 RPRF)
• Submit biometrics

**Stage 4: Processing**
• IRCC reviews your application
• Background checks
• Medical exam (if not done)
• Timeline: ~6 months (80% of cases)

**Stage 5: COPR**
• Application approved!
• Receive Confirmation of PR letter
• Land in Canada before expiry date

**Stage 6: Landing**
• Enter Canada
• Officer confirms PR status
• PR card mailed to Canadian address

**Total timeline:** 8-14 months typically

Which stage are you at?`
    },
    "eligibility": {
      response: `**Express Entry Eligibility - Quick Check**

**You need ALL of these:**

✅ **Language Test**
• IELTS General or CELPIP
• Minimum CLB 7 for FSW (IELTS 6.0 all bands)

✅ **Education**
• At least high school
• Foreign credentials need ECA

✅ **Work Experience**
• At least 1 year skilled work
• NOC TEER 0, 1, 2, or 3 occupation

✅ **Proof of Funds** (unless Canadian job offer)
• Single: ~$14,690 CAD
• Couple: ~$18,288 CAD

**Quick Test - Answer Yes/No:**
1. Do you have 1+ years of skilled work? 
2. Can you score CLB 7 (IELTS 6.0) in English?
3. Do you have post-secondary education?

**If yes to all three → You're likely eligible!**

Tell me your details and I'll give you a specific assessment.`
    },
    "calculate_crs": {
      response: `**Let's Calculate Your CRS Score**

I need these details:

**1. Age:** How old are you?

**2. Education:** 
• High School
• 1-Year Diploma
• 2-Year Diploma  
• Bachelor's Degree
• Master's Degree
• PhD

**3. Work Experience:**
• How many years of skilled work?
• In Canada or abroad?

**4. Language Scores:**
• IELTS bands (L/R/W/S) or
• CELPIP levels or
• CLB level

**Example format:**
"I'm 32 with a Master's degree, 5 years work experience abroad, IELTS 7.5 in all bands"

Share your details and I'll calculate your exact CRS with breakdown!`
    },
    "consultant_lawyer": {
      response: `**Do You Need a Consultant or Lawyer?**

**You DON'T need professional help if:**
✅ Straightforward case (no refusals)
✅ Simple work history in one country
✅ You're organized and detail-oriented
✅ You have time to research

**You SHOULD get help if:**
⚠️ Previous visa refusals
⚠️ Criminal record or medical issues
⚠️ Complex work history (multiple countries)
⚠️ Employer-sponsored LMIA
⚠️ Appeals or humanitarian cases

**RCIC vs Immigration Lawyer:**

| Type | Cost | Best For |
|------|------|----------|
| RCIC | $1,500-5,000 | Most PR applications |
| Lawyer | $3,000-10,000+ | Court, appeals, complex cases |

**How to verify legitimacy:**
• RCIC: Check cicc-ccic.ca registry
• Lawyer: Check provincial law society
• NEVER use unlicensed "ghost consultants"

**Our approach at Matin Immigration Services:**
We empower you to do it yourself (90%+ of cases don't need a consultant). For complex situations, we offer professional consultation under **RCIC License R712582**.`
    },
    "low_crs_options": {
      response: `**CRS Too Low? Here Are Your REAL Options:**

**🚀 FASTEST Impact (1-3 months):**

1. **Retake IELTS/CELPIP** → +20-50 points
   • CLB 7 → CLB 9 can add 50+ points
   • Focus on your weakest skill
   • This is usually your best ROI

2. **Add French** → +25-50 points
   • Even CLB 5 French helps
   • TEF or TCF Canada accepted

**📈 MEDIUM-TERM (3-6 months):**

3. **Provincial Nomination** → **+600 points**
   • This GUARANTEES an ITA
   • Many provinces don't require job offers
   • Apply to multiple simultaneously!

4. **Spouse Strategy** → +10-30 points
   • Improve spouse's language scores
   • Sometimes applying as single = higher score

**📊 LONGER-TERM (6-12 months):**

5. **Canadian Education** → +15-30 points
6. **Canadian Work Experience** → +50-80 points

**If your CRS is below 450:**
→ Focus 100% on PNP - it's your fastest path to PR

**What's your current CRS?** I'll recommend the best strategy for your score.`
    },
    "boost_fast": {
      response: `**Fastest Ways to Boost CRS (Ranked by Speed)**

**⚡ IMMEDIATE (1-3 months):**

1. **Retake Language Test**
   • Each CLB level = ~20-30 points
   • CLB 7 → 9 can add **50+ points**
   • Book your test NOW
   • Our Language Training has Reading practice tests

2. **Get French Tested**
   • French + strong English = **25-50 bonus points**
   • Even basic French (CLB 5) helps
   • TEF/TCF Canada accepted

**🎯 GUARANTEED WIN (3-6 months):**

3. **Provincial Nomination = +600 points**
   • Apply to multiple provinces at once
   • Ontario, BC Tech process fastest
   • This is the "cheat code" - use it!

4. **Optimize Spouse Inclusion**
   • Sometimes excluding low-scoring spouse = higher score
   • Or: Improve their language scores

**📈 MEDIUM-TERM (6-12 months):**

5. **Canadian Credential** → +15-30 points
6. **Canadian Work Experience** → +50-80 points

**What's your biggest gap?** Tell me your profile and I'll pinpoint where you'll gain the most points fastest.`
    },
    "common_mistakes": {
      response: `**Top Mistakes That KILL Applications**

**❌ DOCUMENTATION ERRORS:**

1. **Reference letters missing details**
   • Must include: duties, hours, dates, salary
   • Must be on company letterhead
   • Must have supervisor contact info

2. **Wrong NOC code**
   • Job duties must match NOC description
   • Don't just match job title

3. **Missing ECA credentials**
   • Get ALL degrees assessed, not just highest

4. **Expired documents**
   • IELTS: 2 years only!
   • Police certificates: ~1 year
   • Medical: 1 year

**❌ STRATEGY MISTAKES:**

5. **Waiting for "perfect" score**
   • Apply to PNPs NOW while improving CRS

6. **Not applying to multiple PNPs**
   • There's no rule against it!

7. **Ignoring French**
   • Easy 25-50 points most people skip

**❌ TIMING MISTAKES:**

8. **Starting ECA too late** (takes 4-8 weeks)
9. **Missing PNP intake windows**
10. **Not having proof of funds ready**

**The #1 mistake?** Waiting too long. Start ECA and language test NOW.`
    },
    "improve_profile": {
      response: `**How to Strengthen Your Immigration Profile**

**HIGHEST IMPACT ACTIONS:**

**1. Language (up to +50 points)**
→ Target IELTS 8+ in each band
→ Consider French for 25-50 bonus
→ Our Language Training: Reading practice tests

**2. Education (up to +30 points)**
→ Canadian degree/diploma adds extra
→ Get ECA for ALL foreign credentials

**3. Provincial Nomination (+600 points)**
→ Research which provinces want your NOC
→ Apply to multiple streams simultaneously
→ Our Immigration Pathway tracks 80+ PNP streams

**4. Canadian Experience (up to +80 points)**
→ Work permit → Canadian job → CRS boost
→ Even 1 year makes huge difference

**YOUR ACTION PLAN BY SCORE:**

| Current CRS | Focus On |
|-------------|----------|
| Below 450 | PNP is your path |
| 450-480 | Language + PNP combo |
| 480+ | Optimize and monitor draws |

**What's your current score?** I'll prioritize your specific actions.`
    },
    "pnp": {
      response: `**Provincial Nominee Programs (PNP) - Your +600 Point Path**

**What is PNP?**
Each province can nominate immigrants who meet their needs. A nomination adds **600 CRS points** - essentially guaranteeing an ITA.

**Two Types:**

**1. Express Entry-Linked (Faster)**
• Need EE profile first
• Province nominates you in EE pool
• +600 points → instant ITA
• Processing: 6-8 months total

**2. Non-EE Stream (Standalone)**
• Apply directly to province
• Longer processing (12-18 months)
• Good backup if CRS very low

**TOP PNP STREAMS (No Job Offer Required):**

**Ontario (OINP):**
• Human Capital Priorities - High CRS candidates
• French-Speaking Skilled Worker
• Tech draws for specific NOCs

**British Columbia (BC PNP):**
• Skills Immigration EE stream
• Tech stream - 29 tech occupations (fast!)

**Alberta (AINP):**
• Alberta Express Entry stream

**Saskatchewan (SINP):**
• Express Entry category
• Occupation In-Demand

**STRATEGY:** Apply to multiple provinces simultaneously - there's no rule against it!

Which province interests you?`
    },
    "job_offer_vs_pnp": {
      response: `**Job Offer vs PNP - Which Is Better?**

**Short answer: PNP is usually better for most people.**

**PNP Nomination: +600 CRS points**
✅ Virtually guarantees ITA
✅ Many streams don't require job offer
✅ Can apply to multiple provinces
✅ Some process in weeks (BC Tech, Ontario)

**Job Offer: +50-200 CRS points**
✅ 50 points (standard offer)
✅ 200 points (senior management with LMIA)
⚠️ Most employers won't sponsor
⚠️ LMIA is expensive/time-consuming
⚠️ Job must match NOC exactly

**MY RECOMMENDATION:**

| Your CRS | Strategy |
|----------|----------|
| Below 470 | Focus 100% on PNP |
| 470-500 | PNP gives certainty |
| 500+ | May get ITA without either |

**Best PNP Provinces (No Job Offer):**
• Ontario - Human Capital Priorities
• BC - Skills Immigration
• Alberta - Alberta Express Entry
• Saskatchewan - Express Entry category

**Best case:** Get PNP first, then job offer follows. Many employers prefer candidates who already have nomination!`
    },
    "timeline": {
      response: `**Express Entry Timeline - Realistic Expectations**

**PHASE 1: Preparation (1-3 months)**
| Task | Timeline |
|------|----------|
| ECA (WES) | 4-8 weeks |
| IELTS/CELPIP | Book 2-4 weeks ahead |
| Police certificates | Varies by country |
| Document gathering | 2-4 weeks |

**PHASE 2: In the Pool (Varies)**
• Draws happen every ~2 weeks
• High CRS = fast ITA
• Low CRS = wait or improve

**PHASE 3: After ITA (6-8 months)**
• 60 days to submit application
• IRCC processing: ~6 months (80% of cases)
• Medical valid 12 months
• Background checks included

**TOTAL REALISTIC TIMELINE:**

| Scenario | Timeline |
|----------|----------|
| High CRS, docs ready | 8-10 months |
| Average case | 12-14 months |
| With PNP | Add 2-4 months |

**CURRENT PROCESSING (Late 2025):**
• FSW: ~6 months after AOR
• CEC: ~4-5 months after AOR
• PNP: ~6-8 months after AOR

Want me to create a personalized timeline for your situation?`
    },
    "costs": {
      response: `**Express Entry Cost Breakdown**

**MANDATORY FEES:**

| Item | Cost (CAD) |
|------|------------|
| IELTS/CELPIP | $300-400 |
| ECA (WES) | $200-300 |
| Police certificates | $50-150 |
| Medical exam | $200-450 |
| Photos | $20-50 |
| **IRCC Processing** | **$1,365** |
| **Right of PR** | **$515** |
| Biometrics | $85 |

**TOTAL: ~$2,700-3,300 per adult**

**PROOF OF FUNDS (Must have, not spend):**

| Family Size | Amount Required |
|-------------|-----------------|
| Single | $14,690 |
| 2 people | $18,288 |
| 3 people | $22,483 |
| 4 people | $27,297 |

**FAMILY BUDGET EXAMPLE:**
Couple + 1 child = ~$8,000-10,000 fees + $22,500 proof of funds

**OPTIONAL COSTS:**
• Consultant: $1,500-5,000
• Test prep: $100-500
• Translations: $50-200

**OUR SUBSCRIPTIONS SAVE YOU MONEY:**
• Language Training: $250/year (vs $500+ prep courses)
• Immigration Pathway: $450/year (vs $2,000+ consultants)

I'm available 24/7 to help you through this!`
    },
    "documents_needed": {
      response: `**Express Entry Document Checklist**

**✅ REQUIRED FOR EVERYONE:**

**Identity:**
□ Valid passport (all pages scanned)
□ Birth certificate
□ Marriage certificate (if applicable)

**Language:**
□ IELTS General or CELPIP results
□ Must be less than 2 years old!

**Education:**
□ ECA report from WES/IQAS/etc.
□ Degrees and diplomas
□ Transcripts

**Work:**
□ Reference letters from EACH employer
   • Company letterhead
   • Job title + NOC code
   • Start/end dates
   • Hours per week
   • Salary
   • Detailed duties list
   • Supervisor signature + contact

**Financial:**
□ Bank statements (6 months)
□ Investment statements
□ Must show required amount

**Security:**
□ Police certificates (every country 6+ months since age 18)
□ Medical exam (designated physician)

**✅ IF APPLICABLE:**
□ Spouse's documents (all above)
□ Children's documents
□ Divorce decree
□ Job offer letter
□ Provincial nomination certificate

**PRO TIP:** Start gathering NOW - ECA takes 4-8 weeks, police certificates vary by country.`
    },
    "strategy": {
      response: `**Let's Create Your Personalized Strategy**

To give you the best guidance, I need:

**BASIC INFO:**
1. Your age?
2. Highest education level?
3. Your occupation/field?
4. Years of skilled work experience?
5. IELTS/CELPIP scores (if taken)?

**ADDITIONAL FACTORS:**
6. Any Canadian education or work?
7. Do you speak French?
8. Spouse/partner? Their qualifications?
9. Job offer from Canadian employer?
10. Preferred provinces?

**EXAMPLE:**
"I'm 29, Master's in Computer Science, 4 years as software developer, IELTS 7.5 all bands, no Canadian experience, interested in Ontario or BC"

**WHAT YOU'LL GET:**
• Your estimated CRS score with breakdown
• Eligible programs (FSW, CEC, PNP)
• Recommended pathways ranked by success probability
• Specific improvement actions prioritized by ROI
• Realistic timeline estimate

Share your details and let's build your roadmap!`
    },
    "about_matin": {
      response: `**Matin Immigration Services**

We believe that with the right tools, **you can do anything.**

Our mission is to **empower you** on your immigration journey. We want to make this whole process feel easier - less overwhelming, more achievable.

**I'm North Star GPS** - your 24/7 immigration assistant. I'm here to work for YOU, whenever you need me.

**WHO WE ARE**
Matin Immigration Services Inc. operates under **RCIC License R712582**, issued by the College of Immigration and Citizenship Consultants of Canada.

**SUBSCRIPTION TIERS:**

📚 **Language Training** - $250 CAD/year
Reading practice tests on migratenorth.ca
Speaking & Listening packages available separately

🩺 **Licensing Support** - $350 CAD/year
NCLEX preparation for internationally educated nurses

🛫 **Immigration Pathway** - $450 CAD/year
Express Entry & PNP step-by-step guidance

**OUR PHILOSOPHY:**
You are capable. You just need the right guidance and tools. I'm here to help you succeed - available 24/7, working around your schedule, at a fraction of traditional consulting costs.

**Contact:** info@migratenorth.ca`
    },
    "pricing_services": {
      response: `**Matin Immigration Services Pricing**

**SUBSCRIPTION TIERS:**

📚 **Language Training** - **$250 CAD/year**
• IELTS/CELPIP Reading practice tests
• Real-time feedback on comprehension
• Vocabulary tracking and review
• Speaking & Listening packages - contact info@migratenorth.ca

🩺 **Licensing Support** - **$350 CAD/year**
• 400+ NCLEX practice questions (NGN format)
• NNAS credential guidance
• Provincial licensing pathways
• Progress tracking

🛫 **Immigration Pathway** - **$450 CAD/year**
• Express Entry step-by-step guidance
• CRS optimization strategies
• Document preparation support
• 80+ PNP stream tracking

**BUNDLE OFFERS:**
• Nurse Success Pack (Language + Licensing): **$550/year** - Save $50
• Skilled Worker Pack (Language + Immigration): **$625/year** - Save $75
• Complete Migration Pack (Licensing + Immigration): **$725/year** - Save $75
• All Access Pack (All three): **$900/year** - Save $150

**PROFESSIONAL SERVICES:**
• Application Audit: $300 CAD
• Full Representation: Starting at $2,000 CAD

I'm available 24/7 - subscribe and let's get to work!

Click 💳 Subscribe to get started.`
    },
    "language_training": {
      response: `📚 **Language Training**

Prepare for IELTS General or CELPIP-General with structured, AI-powered practice.

**What You Get on migratenorth.ca:**
✓ Reading comprehension practice tests
✓ Personalized study plans (30, 60, 90 days)
✓ Real-time feedback on your answers
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
    "licensing_support": {
      response: `🩺 **Licensing Support**

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

I'm available 24/7 - subscribe and let's get started!

Click 💳 Subscribe to get started.`
    },
    "immigration_pathway": {
      response: `🛫 **Immigration Pathway**

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

I'm available 24/7 - subscribe and let's get started!

Click 💳 Subscribe to get started.`
    }
  };

  // Direct key lookup first
  if (faqs[faqKey]) {
    return faqs[faqKey].response;
  }
  
  return null;
}

// ==============================================================================
// v12 NEW: SMART INTENT DETECTION FOR FREE-TEXT QUESTIONS
// ==============================================================================
// This replaces the simple keyword matching with smarter pattern detection
// that considers WHAT the user is asking (action vs definition vs checklist)

function detectUserIntent(message) {
  const lower = message.toLowerCase().trim();
  
  // ===========================================================================
  // PRIORITY 1: Action-oriented questions (HOW TO / IMPROVE / BOOST / INCREASE)
  // These ALWAYS take priority over definitional questions
  // ===========================================================================
  
  // "How can I improve/boost/increase my CRS?"
  if (/\b(how|ways?|tips?|strategies?)\b.{0,20}\b(improve|boost|increase|raise|higher)\b.{0,20}\b(crs|score|points)/i.test(lower) ||
      /\b(improve|boost|increase|raise)\b.{0,20}\b(crs|score|points)/i.test(lower)) {
    return "boost_fast";
  }
  
  // "My CRS is low" / "CRS too low" / "low score"
  if (/\b(crs|score)\b.{0,10}\b(too\s*)?(low|not enough|isn't enough)/i.test(lower) ||
      /\b(low|weak)\b.{0,10}\b(crs|score)/i.test(lower) ||
      /what.{0,10}(options|can i do).{0,20}(crs|score)/i.test(lower)) {
    return "low_crs_options";
  }
  
  // "Quickly improve" / "fast improvement"  
  if (/\b(quick|fast|fastest|rapid)\b.{0,15}\b(improve|boost|increase|way|points)/i.test(lower)) {
    return "boost_fast";
  }
  
  // ===========================================================================
  // PRIORITY 2: Document/checklist questions
  // ===========================================================================
  
  // "What documents do I need?" / "document checklist" / "required documents"
  if (/\b(what|which)\b.{0,10}\b(documents?|papers?|files?)\b.{0,15}\b(need|required|necessary)/i.test(lower) ||
      /\b(documents?|papers?)\b.{0,10}\b(need|required|checklist|list)/i.test(lower) ||
      /\b(checklist|list)\b.{0,10}\b(documents?|papers?)/i.test(lower) ||
      /\bneed.{0,15}documents?\b/i.test(lower)) {
    return "documents_needed";
  }
  
  // ===========================================================================
  // PRIORITY 3: Comparison questions
  // ===========================================================================
  
  // "IELTS vs CELPIP" / "which test"
  if (/\bielts\b.{0,10}\b(vs|versus|or|compared)\b.{0,10}\bcelpip/i.test(lower) ||
      /\bcelpip\b.{0,10}\b(vs|versus|or|compared)\b.{0,10}\bielts/i.test(lower) ||
      /\b(which|what)\b.{0,10}\b(language\s*)?(test|exam)\b.{0,10}\b(should|better|choose)/i.test(lower)) {
    return "ielts_celpip";
  }
  
  // "Job offer vs PNP" / "should I get job offer or PNP"
  if (/\bjob\s*offer\b.{0,15}\b(vs|versus|or|compared|better)\b.{0,15}\bpnp/i.test(lower) ||
      /\bpnp\b.{0,15}\b(vs|versus|or|compared|better)\b.{0,15}\bjob\s*offer/i.test(lower) ||
      /\b(should i|better to)\b.{0,15}\b(job offer|pnp)/i.test(lower)) {
    return "job_offer_vs_pnp";
  }
  
  // ===========================================================================
  // PRIORITY 4: Cost/money questions
  // ===========================================================================
  
  // "How much does it cost?" / "total cost" / "fees"
  if (/\bhow\s*much\b.{0,15}\b(cost|spend|pay|fees?)/i.test(lower) ||
      /\b(total|all)\b.{0,10}\b(costs?|fees?|expenses?)/i.test(lower) ||
      /\b(costs?|fees?|expenses?)\b.{0,10}\b(express entry|immigration|pr)/i.test(lower)) {
    return "costs";
  }
  
  // ===========================================================================
  // PRIORITY 5: Timeline questions
  // ===========================================================================
  
  // "How long does it take?" / "processing time" / "timeline"
  if (/\bhow\s*long\b.{0,15}\b(take|process|wait)/i.test(lower) ||
      /\b(processing|wait)\s*(time|period)/i.test(lower) ||
      /\btimeline\b/i.test(lower) ||
      /\bwhen\s*(will|can)\s*i\b.{0,15}\b(get|receive|land)/i.test(lower)) {
    return "timeline";
  }
  
  // ===========================================================================
  // PRIORITY 6: Eligibility questions
  // ===========================================================================
  
  // "Am I eligible?" / "do I qualify?"
  if (/\b(am i|do i|can i)\b.{0,10}\b(eligible|qualify|qualified)/i.test(lower) ||
      /\bcheck.{0,10}eligib/i.test(lower) ||
      /\beligib.{0,10}(check|test|see)/i.test(lower)) {
    return "eligibility";
  }
  
  // ===========================================================================
  // PRIORITY 7: Consultant/lawyer questions (be specific - not just "do i need")
  // ===========================================================================
  
  // "Do I need a consultant/lawyer?" (NOT "do I need documents")
  if (/\b(need|hire|get|use)\b.{0,10}\b(consultant|lawyer|rcic|immigration\s*help)/i.test(lower) ||
      /\b(consultant|lawyer|rcic)\b.{0,10}\b(need|necessary|required|should)/i.test(lower)) {
    return "consultant_lawyer";
  }
  
  // ===========================================================================
  // PRIORITY 8: Calculate CRS (user wants calculation, not explanation)
  // ===========================================================================
  
  // "Calculate my CRS" / "what's my CRS" / "estimate my score"
  if (/\b(calculate|estimate|what'?s|tell me)\b.{0,10}\bmy\b.{0,10}\b(crs|score)/i.test(lower) ||
      /\bmy\s*crs\b.{0,10}\b(score|is|would be)/i.test(lower)) {
    return "calculate_crs";
  }
  
  // ===========================================================================
  // PRIORITY 9: "What is X?" questions (definitional)
  // ===========================================================================
  
  // "What is Express Entry?" / "Explain Express Entry"
  if (/\b(what is|what's|explain|tell me about)\b.{0,10}\bexpress\s*entry\b/i.test(lower) ||
      /\bexpress\s*entry\b.{0,10}\b(explain|work|mean)/i.test(lower)) {
    return "express_entry";
  }
  
  // "What is CRS?" / "How does CRS work?" / "CRS explained"
  if (/\b(what is|what's|explain|how does)\b.{0,10}\bcrs\b/i.test(lower) ||
      /\bcrs\b.{0,10}\b(work|calculated|explained|system|mean)/i.test(lower)) {
    // But NOT if they're asking how to improve it
    if (!/\b(improve|boost|increase|raise)\b/i.test(lower)) {
      return "crs_scoring";
    }
  }
  
  // "What is ECA?" / "ECA explained"
  if (/\b(what is|what's|explain)\b.{0,10}\beca\b/i.test(lower) ||
      /\beca\b.{0,10}\b(mean|stand for|explained)/i.test(lower) ||
      /\beducational\s*credential\s*assessment\b/i.test(lower)) {
    return "eca";
  }
  
  // "What is PNP?" / "Provincial nominee"
  if (/\b(what is|what's|explain)\b.{0,10}\bpnp\b/i.test(lower) ||
      /\bpnp\b.{0,10}\b(mean|explained|work)/i.test(lower) ||
      /\bprovincial\s*nomin/i.test(lower)) {
    return "pnp";
  }
  
  // "What is Language Training?" / "What is Evolve?"
  if (/\b(what is|what's|tell me about)\b.{0,15}\b(language\s*training|evolve)\b/i.test(lower)) {
    return "language_training";
  }
  
  // "What is Licensing Support?" / "What is Elevate?"
  if (/\b(what is|what's|tell me about)\b.{0,15}\b(licensing\s*support|elevate|nclex)\b/i.test(lower)) {
    return "licensing_support";
  }
  
  // "What is Immigration Pathway?" / "What is Execute?"
  if (/\b(what is|what's|tell me about)\b.{0,15}\b(immigration\s*pathway|execute)\b/i.test(lower)) {
    return "immigration_pathway";
  }
  
  // ===========================================================================
  // PRIORITY 10: Programs questions
  // ===========================================================================
  
  // "FSW vs CEC" / "Express Entry programs" / "Which program"
  if (/\b(fsw|cec|fst)\b.{0,10}\b(vs|versus|or|difference)/i.test(lower) ||
      /\b(express entry|ee)\b.{0,10}\bprograms?\b/i.test(lower) ||
      /\bwhich\b.{0,10}\bprogram\b/i.test(lower) ||
      /\bthree\s*programs?\b/i.test(lower)) {
    return "cec_fsw_fst";
  }
  
  // ===========================================================================
  // PRIORITY 11: Process/stages questions
  // ===========================================================================
  
  // "What happens after ITA?" / "PR process" / "stages"
  if (/\bafter\s*ita\b/i.test(lower) ||
      /\b(pr|permanent resident)\s*process\b/i.test(lower) ||
      /\b(stages?|steps?)\b.{0,10}\b(process|application)/i.test(lower)) {
    return "ita_pr_process";
  }
  
  // ===========================================================================
  // PRIORITY 12: Common mistakes
  // ===========================================================================
  
  // "Common mistakes" / "mistakes to avoid"
  if (/\b(common|typical|frequent)\s*mistakes?\b/i.test(lower) ||
      /\bmistakes?\s*(to\s*)?(avoid|prevent)/i.test(lower) ||
      /\bwhat\s*(not\s*to|to\s*avoid)\b/i.test(lower)) {
    return "common_mistakes";
  }
  
  // ===========================================================================
  // PRIORITY 13: Strategy questions
  // ===========================================================================
  
  // "My strategy" / "personalized strategy" / "what should I do"
  if (/\b(my|personalized|custom)\b.{0,10}\bstrategy\b/i.test(lower) ||
      /\bwhat\s*should\s*i\s*do\b/i.test(lower) ||
      /\bbest\s*(path|approach|strategy)\b.{0,10}\bfor\s*me\b/i.test(lower)) {
    return "strategy";
  }
  
  // ===========================================================================
  // PRIORITY 14: About/pricing questions
  // ===========================================================================
  
  // "About Matin" / "Who are you"
  if (/\babout\s*(matin|you|this)\b/i.test(lower) ||
      /\bwho\s*(are|is)\s*(you|matin)/i.test(lower) ||
      /\bwhat\s*is\s*matin\b/i.test(lower)) {
    return "about_matin";
  }
  
  // "Pricing" / "How much do you charge"
  if (/\b(your|matin)\s*(pricing|prices|cost)/i.test(lower) ||
      /\bhow\s*much\s*(do\s*you|does\s*matin)\s*charge/i.test(lower) ||
      /\bsubscription\s*(cost|price)/i.test(lower)) {
    return "pricing_services";
  }
  
  // ===========================================================================
  // PRIORITY 15: Improve profile (general)
  // ===========================================================================
  
  // "Improve my profile" / "strengthen profile"
  if (/\b(improve|strengthen|boost)\b.{0,10}\b(my\s*)?(profile|application)/i.test(lower)) {
    return "improve_profile";
  }
  
  // ===========================================================================
  // No match - return null to fall through to AI
  // ===========================================================================
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

  if (profile.age) {
    const agePoints = CRS_TABLES.age[Math.min(Math.max(profile.age, 17), 45)] || 0;
    score += agePoints;
    breakdown.push(`Age (${profile.age}): ${agePoints} points`);
  }

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

  const workYrs = profile.work_years || profile.workYears || profile.years_experience;
  if (workYrs !== undefined) {
    const workPoints = CRS_TABLES.workYears[Math.min(workYrs, 5)] || 0;
    score += workPoints;
    breakdown.push(`Work Experience (${workYrs} years): ${workPoints} points`);
  }

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

  const ageMatch = message.match(/(?:i am|i'm|age is|aged?)\s*(\d{2})/i) ||
                   message.match(/(\d{2})\s*years?\s*old/i);
  if (ageMatch) {
    profile.age = parseInt(ageMatch[1]);
  }

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

  const workMatch = message.match(/(\d+)\s*years?\s*(?:of\s*)?(?:work|experience|working)/i) ||
                    message.match(/experience\s*(?:of\s*)?(\d+)\s*years?/i);
  if (workMatch) {
    profile.work_years = parseInt(workMatch[1]);
    profile.years_experience = parseInt(workMatch[1]);
  }

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

## YOUR IDENTITY
You ARE **North Star GPS** - that is your name. You are the face and voice of Migrate North. Speak in first person ("I can help you with...", "I recommend...").

## CRITICAL NAMING RULES
The subscription tiers are:
- **Language Training** ($250/year) - for IELTS/CELPIP prep (Reading practice)
- **Licensing Support** ($350/year) - for NCLEX/nursing licensing
- **Immigration Pathway** ($450/year) - for Express Entry guidance

NEVER say "Evolve", "Elevate", "Execute", or "Explore" - those are internal codes that users don't know.

When describing what these tiers offer, speak in first person:
- ❌ "Immigration Pathway provides step-by-step guidance"
- ✅ "I provide step-by-step guidance" or "With Immigration Pathway, I can guide you step-by-step"

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
- Language Training: $250 CAD/year - Reading practice tests
- Licensing Support: $350 CAD/year - NCLEX prep for nurses
- Immigration Pathway: $450 CAD/year - Express Entry guidance
- Speaking & Listening training: Contact info@migratenorth.ca for packages

## TONE
- Confident and direct
- Like an experienced advisor who respects your time
- Encouraging but honest
- No fluff or filler phrases
- First person ("I can help", "I recommend")

## NEVER DO
- Don't start with "Great question!"
- Don't explain what something IS when they asked what to DO
- Don't give 5 paragraphs when 5 bullet points work better
- Don't be vague - use specific numbers and timeframes
- Don't say "Evolve", "Elevate", "Execute", or "Explore"
- Don't say "the platform provides" - say "I provide" or "I can help with"

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
    
    // v10 NEW: Extract intent from request
    const intent = parsed.intent || null;

    if (!message && !intent) {
      return errorResponse(400, "Message or intent is required");
    }

    // ==============================================================================
    // PHASE 1B: Get authenticated user
    // ==============================================================================
    const user = await getUserFromRequest(event);
    
    if (user) {
      await ensureProfile(user);
    }

    // ==============================================================================
    // PHASE 1C: Load profile from database
    // ==============================================================================
    let dbProfile = await loadProfile(user);
    const incomingProfile = { ...(dbProfile || {}), ...(parsed.userProfile || {}) };
    const history = normalizeHistory(rawHistory);

    // ==============================================================================
    // EXTRACT PROFILE DATA FROM MESSAGE
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
      
      if (updatedProfile.funnel_state === "diagnosed" || updatedProfile.funnel_state === "considering") {
        updatedProfile.messages_since_diagnosis = (updatedProfile.messages_since_diagnosis || 0) + 1;
      }
    }

    // ==============================================================================
    // v10: INTENT ROUTING (DETERMINISTIC PRODUCT BRAIN) - BUTTON CLICKS
    // ==============================================================================
    // If frontend sent an intent, route directly to the correct response
    // This bypasses AI guessing and gives consistent, product-like behavior
    
    if (intent) {
      console.log("Intent received:", intent);
      
      // Log the intent-based interaction
      if (user) {
        await logActivity(user, "explore_intent", intent);
      }
      
      // Get the FAQ key for this intent
      const faqKey = getIntentResponse(intent);
      
      if (faqKey) {
        const intentResponse = getFAQResponse(faqKey);
        
        if (intentResponse) {
          // Add escalation prompt if applicable
          let finalResponse = intentResponse;
          if (user && updatedProfile.funnel_state) {
            const gateStatus = checkGateStatus(updatedProfile, updatedProfile.messages_since_diagnosis || 0);
            const escalationPrompt = generateEscalationPrompt(updatedProfile, gateStatus.promptLevel);
            if (escalationPrompt) {
              finalResponse += escalationPrompt;
            }
            await saveProfile(user, updatedProfile);
          }
          
          return ok({ 
            reply: finalResponse, 
            userProfile: updatedProfile,
            intentHandled: true 
          });
        }
      }
      
      // Intent not found in map - fall through to normal processing
      console.log("Intent not mapped, falling through to normal processing");
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
      if (!user) {
        return ok({
          reply: `I can see you've shared some profile information. To give you a personalized CRS analysis that saves to your profile, please login first (it's free!).\n\nClick the 🔐 Login button above to continue.`,
          userProfile: updatedProfile
        });
      }

      await logActivity(user, "explore_crs_analysis", JSON.stringify(updatedProfile));

      const crsResult = estimateCRS(updatedProfile);
      let explanation = buildCRSExplanation(updatedProfile, crsResult);

      const recommendation = mapLimiterToTier(updatedProfile.primary_limiter, updatedProfile);
      updatedProfile.recommended_tier = recommendation.tier;
      updatedProfile.funnel_state = "diagnosed";
      updatedProfile.messages_since_diagnosis = 0;
      
      explanation += buildTierRecommendation(updatedProfile, crsResult);

      await saveProfile(user, updatedProfile);

      return ok({ reply: explanation, userProfile: updatedProfile });
    }

    // ==============================================================================
    // v12 NEW: SMART INTENT DETECTION FOR FREE-TEXT QUESTIONS
    // ==============================================================================
    // This replaces the old keyword matching with smarter pattern detection
    
    const detectedIntent = detectUserIntent(message);
    
    if (detectedIntent) {
      console.log("Smart intent detected:", detectedIntent);
      
      const faqResponse = getFAQResponse(detectedIntent);
      
      if (faqResponse) {
        if (user) {
          await logActivity(user, "explore_smart_intent", `${detectedIntent}: ${message.substring(0, 100)}`);
        }
        
        let finalResponse = faqResponse;
        if (user && updatedProfile.funnel_state) {
          const gateStatus = checkGateStatus(updatedProfile, updatedProfile.messages_since_diagnosis || 0);
          const escalationPrompt = generateEscalationPrompt(updatedProfile, gateStatus.promptLevel);
          if (escalationPrompt) {
            finalResponse += escalationPrompt;
          }
          
          await saveProfile(user, updatedProfile);
        }
        
        return ok({ reply: finalResponse, userProfile: updatedProfile });
      }
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
    // GENERAL AI RESPONSE (fallback)
    // ==============================================================================
    if (user) {
      await logActivity(user, "explore_message", message.substring(0, 100));
    }

    let aiReply = await callOpenAI(message, history, updatedProfile);

    updatedProfile = extractProfileFromMessage(message, updatedProfile);
    
    if (user) {
      updatedProfile = updatePillars(updatedProfile);
      updatedProfile.primary_limiter = computeLimiter(updatedProfile);
      updatedProfile.funnel_state = computeFunnelState(user, updatedProfile);
      
      const gateStatus = checkGateStatus(updatedProfile, updatedProfile.messages_since_diagnosis || 0);
      const escalationPrompt = generateEscalationPrompt(updatedProfile, gateStatus.promptLevel);
      if (escalationPrompt) {
        aiReply += escalationPrompt;
      }
      
      await saveProfile(user, updatedProfile);
    }

    return ok({ reply: aiReply, userProfile: updatedProfile });

  } catch (err) {
    console.error("Handler error:", err);
    return errorResponse(500, "Internal server error: " + err.message);
  }
}
