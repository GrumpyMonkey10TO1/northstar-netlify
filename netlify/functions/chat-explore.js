// /netlify/functions/chat-explore.js
// North Star Explore server function v6 - Identity Layer + Full FAQ + CRS Logic + Supabase Logging

import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

// OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// =============================================================================
// IDENTITY LAYER - Phase 1B
// =============================================================================

async function getUserFromRequest(event) {
  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;

  const token = authHeader.replace("Bearer ", "");
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user) return null;

  return data.user;
}

async function ensureProfile(user) {
  const { data: existing } = await supabase
    .from("profiles")
    .select("user_id")
    .eq("user_id", user.id)
    .single();

  if (!existing) {
    await supabase.from("profiles").insert({ user_id: user.id });
  }
}

// =============================================================================
// END IDENTITY LAYER
// =============================================================================

const ORIGIN = "https://migratenorth.ca";

// Rate limiting
const requestCounts = new Map();
const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW = 5 * 60 * 1000;

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
// FAQ RESPONSE LIBRARY (ALL 31 RESPONSES)
// =============================================================================

const FAQ_RESPONSES = {
  "Am I Eligible for Express Entry?": `Great question! Let me break this down simply.

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

  "Express Entry vs Immigration Consultant - Differences": `This confuses a lot of people, so let us keep it simple.

---

WHAT IS EXPRESS ENTRY?

Express Entry is not a consultant. It is Canada's online application system managed by IRCC (Immigration, Refugees and Citizenship Canada).

It is the platform where you:
- Create your profile
- Enter the pool
- Receive an invitation to apply (ITA)
- Submit your permanent residence application

You are applying directly to the Canadian government.

---

CAN YOU USE BOTH EXPRESS ENTRY AND A CONSULTANT?

Yes. Here are the options.

Option 1: Do it yourself with Express Entry only
- You create and manage your own profile and application
- You pay only the government fees
- Risk: Mistakes or missing documents can lead to delays or refusals

Option 2: Use a consultant (RCIC)
- A licensed professional reviews and guides your application
- They help with strategy, documentation, and risk spotting
- You pay professional fees plus government fees
- Benefit: A second set of expert eyes reduces avoidable errors

Option 3: Hybrid
- Use tools like this chatbot and Execute for most of the heavy lifting
- Then use a consultant only for a focused review
- Cost is usually lower than full representation, but you still get risk checks

---

EXPRESS ENTRY VS CONSULTANT SUMMARY:

Express Entry
- Government system
- Mandatory if you want to immigrate through that pathway
- Handles scoring and invitations

Consultant
- Human expert
- Optional
- Helps with strategy, paperwork, and minimizing mistakes

You always remain responsible for your own file. A consultant can advise you, but you decide.

If you tell me your situation, I can suggest which path makes the most sense for you.`,

  "CEC vs FSW - Which category am I?": `Here is the simple way to think about CEC and FSW.

---

FEDERAL SKILLED WORKER (FSW)

Best fit if:
- Your skilled work experience is outside Canada
- You have at least 1 year continuous skilled work (NOC TEER 0, 1, 2, or 3)
- You have post secondary education
- You can score at least CLB 7 on IELTS or CELPIP

You are mainly competing based on:
- Age
- Education
- Foreign work experience
- Language score

---

CANADIAN EXPERIENCE CLASS (CEC)

Best fit if:
- You already have at least 1 year of skilled work experience in Canada
- You have Canadian status (for example a work permit)
- Your language score meets the program requirements (often CLB 5 to 7 or higher, depending on NOC)

CEC is often more forgiving on:
- Points needed
- Certain documentation
because you already have proven Canadian work history.

---

WHICH ONE ARE YOU?

Ask yourself:
1. Do you have at least 1 year of skilled work experience in Canada?
   • Yes: You likely qualify for CEC (and possibly also FSW if you meet other criteria)
   • No: You are probably applying under FSW

2. Do you have only foreign work experience, no Canadian work?
   • Then you are usually in FSW

3. Do you have both foreign and Canadian experience?
   • Then you may be eligible for both, and IRCC will process you under the most appropriate program when you receive an ITA.

---

IMPORTANT POINT

You do not need to manually pick CEC or FSW every time. When you submit an Express Entry profile and meet the criteria, the system can consider you under more than one program.

Tell me:
- Where you have worked (inside or outside Canada)
- For how long
- Your job types

I can suggest which category likely fits you best.`,

  "ITA vs PR - What's the difference?": `Think of it like this:

- ITA (Invitation to Apply) is an invitation from IRCC to submit a complete application.
- PR (Permanent Residence) is the final status you receive if your application is approved.

---

ITA (INVITATION TO APPLY)

What it means:
- You were selected from the Express Entry pool
- You now have a fixed deadline (normally 60 days) to submit a full application
- You need to upload documents, medicals, police certificates, proof of funds, and more

At the ITA stage:
- You are not yet a permanent resident
- You cannot rely on it as status
- It is a time sensitive opportunity

---

PR (PERMANENT RESIDENCE)

What it means:
- IRCC has reviewed and approved your full application
- You receive Confirmation of Permanent Residence (COPR)
- You can land in Canada as a permanent resident
- You can live, work, and study in Canada, subject to residency obligations

---

SIMPLE ANALOGY

- ITA is like being invited to submit a full job application after a good resume
- PR is like signing the employment contract and starting your first day

One is an opportunity. The other is a completed status.

If you are not sure where you are in this process, tell me what letter or email you received from IRCC and I can help interpret it.`,

  "Do I need IELTS if I'm from an English country?": `Short answer: it depends on which country you are a citizen of.

---

COUNTRIES TYPICALLY EXEMPT FROM PROVING ENGLISH THROUGH IELTS OR CELPIP FOR SOME PROGRAMS:

- Canada
- United States
- United Kingdom
- Ireland
- Australia
- New Zealand

If you are a citizen of one of these countries, certain language proof requirements may not apply the same way as they do for other applicants, depending on the program.

However, in Express Entry, language test results are usually still needed to claim points, even for many native speakers.

---

IF YOU ARE FROM ANOTHER COUNTRY WHERE ENGLISH IS COMMON

Examples:
- India
- Nigeria
- Philippines
- South Africa
- Pakistan

Even if English is widely spoken and you studied in English, IRCC will generally still require a recognized test like IELTS or CELPIP to award points for language.

---

WHY THIS MATTERS

Without an official language test:
- You usually cannot claim CRS points for language
- Your CRS score will be much lower
- It becomes extremely difficult to receive an ITA

In practice, most Express Entry candidates, even strong English speakers, take IELTS or CELPIP.

Tell me your country of citizenship and which program you are aiming for, and I can explain whether a language test is effectively mandatory for you.`,

  "How Long Will This Take?": `Timelines are one of the biggest sources of stress. Here is a simple breakdown.

---

STEP 1: PREPARATION (0 to 3 months, sometimes more)

You gather:
- Language test results
- Educational Credential Assessment (ECA)
- Work reference letters
- Police certificates
- Proof of funds

Some of these, like ECA and police certificates, depend heavily on your country and can take weeks or months.

---

STEP 2: EXPRESS ENTRY PROFILE (1 to 3 days)

Once you have your language test and ECA, creating your profile is quick. You enter your information online and join the pool.

---

STEP 3: WAITING FOR ITA (Invitation to Apply)

This is the most unpredictable part. It depends on:
- Your CRS score
- The types of draws IRCC is doing (general vs category based)
- Cutoff trends at that time

If your CRS is above recent cutoffs, you might receive an ITA in the next draw or two.

If your CRS is far below, you might wait many months or need a strategy to improve your score.

---

STEP 4: POST ITA APPLICATION (Up to 60 days for you, then IRCC time)

You have a fixed deadline (often 60 days) to:
- Upload documents
- Complete medical exams
- Submit your full application

After you submit, IRCC's processing time for Express Entry permanent residence is often around 6 months, though this can vary.

---

ROUGH SUMMARY

- 1 to 3 months (or more) to prepare tests and documents
- 0 to many months waiting in the pool, depending on CRS
- Up to 60 days to submit after ITA
- Often around 6 months for IRCC to finalize

Your realistic timeline is directly tied to your CRS score and which category you are in. If you tell me your current CRS and situation, I can give a more tailored estimate.`,

  "Total Cost Breakdown": `Here is a simple way to think about the costs for a typical single Express Entry applicant, in Canadian dollars (estimates only, not legal or financial advice).

---

MANDATORY GOVERNMENT FEES (EXPRESS ENTRY PR APPLICATION)

- Application processing fee: around $950
- Right of permanent residence fee: around $515
Total core PR fee: about $1,465

If you have a spouse or partner, their fees are similar. Children have lower fees.

---

COMMON ADDITIONAL COSTS

- Language test (IELTS or CELPIP): $300 to $400 per attempt
- Educational Credential Assessment (ECA): $250 to $400 including courier
- Medical exam: $250 to $400 per person
- Police certificates: varies by country (sometimes free, sometimes $50 to $100)
- Biometrics: around $85 per person, or $170 per family

---

PROOF OF FUNDS (NOT A FEE BUT ESSENTIAL)

For a single applicant, IRCC requires you to show several thousand dollars in available, unencumbered funds. This is not a payment to IRCC, but you must be able to prove you have access to it.

---

OPTIONAL PROFESSIONAL OR SUPPORT COSTS

These can include:
- Consultant or lawyer fees
- Translation fees
- Document courier or notary costs
- Test preparation courses

These vary widely and are not required by IRCC.

---

BOTTOM LINE

A realistic rough range for one person from first English test to landing, including tests, medicals, ECA, government fees, and some incidentals, can easily reach a few thousand dollars.

If you tell me your family size and which country you are applying from, I can give a more specific rough breakdown by category.`,

  "My CRS Is Too Low - What Now?": `You are not alone. Many people start with a CRS that is too low for recent draws. The key is to treat CRS as something you can engineer, not as a fixed number.

Here are the main levers.

---

1. LANGUAGE IMPROVEMENT

This is often the biggest and fastest lever.

Going from:
- CLB 7 to CLB 9 in all abilities
can add dozens of points for:
- Language
- Skill transferability (combination of language plus education or work)

This is why focusing on IELTS or CELPIP improvement can be a game changer.

---

2. EDUCATION

If you already have:
- A bachelor's degree
and you also have:
- A diploma
- A second degree
- A master's

Then getting an updated ECA that counts multiple credentials can increase your points.

Sometimes a second recognized credential can give a meaningful bump.

---

3. CANADIAN EXPERIENCE OR JOB OFFER

If you can:
- Work in Canada on a valid work permit, or
- Obtain a valid job offer supported by an LMIA

you might unlock:
- Extra CRS points
- Or access to CEC or PNP options that have lower cutoffs

---

4. PROVINCIAL NOMINEE PROGRAM (PNP)

A nomination from a province usually gives you:
- An additional 600 CRS points

That turns a low CRS into a guaranteed ITA in most cases.

Finding the right PNP often depends on:
- Your NOC
- Your ties to that province
- Your language level
- Whether you studied or worked there

---

5. AGE AND TIMING

If you are approaching a birthday that will reduce your CRS, timing becomes crucial. Sometimes it is better to:
- Enter the pool quickly
- Aim for category based draws
while you still have maximum age points.

---

If you tell me:
- Your current CRS
- Age
- Education
- Work history
- Language scores

I can walk you through which of these levers is realistic for you and what your highest impact move would be.`,

  "Will I Get an ITA This Year?": `No one can guarantee an ITA by a specific date, but we can look at the probabilities.

The main factors are:
- Your current CRS
- The type of draws IRCC is doing (general or category based)
- How often draws happen
- Whether your occupation or language falls into a priority group

---

ROUGH GUIDELINE

If your CRS is:
- Above recent general draw cutoffs: your chances are strong if draws continue
- Within about 20 points of recent cutoffs: you might get picked in a slightly lower or targeted draw
- More than 50 to 70 points below: you likely need a score improvement or a PNP strategy rather than just waiting

---

CATEGORY BASED DRAWS

IRCC has been doing draws focused on:
- Specific occupations
- French language
- Other priority groups

If you fit one of these groups, your target CRS might be lower than general draws. That can help even if your CRS is not high enough for a general draw.

---

WHAT YOU CAN CONTROL THIS YEAR

You can work on:
- Improving language test scores
- Getting your ECA if you have not yet
- Looking for PNP streams that match your profile
- Exploring Canadian job offers or study options

---

If you share:
- Your CRS
- Your NOC
- Your language scores
I can give a realistic view on whether this year is likely or whether we should frame it as a longer plan.`,

  "How to Boost CRS by 50+ Points Fast": `When people ask how to add 50 points fast, I usually focus on three levers.

---

1. LANGUAGE SCORE IMPROVEMENT

This is often the fastest gain.

Examples:
- Moving from CLB 7 to CLB 9 in all abilities
- Turning a 6.5 into a 7.5 or 8.0

This can:
- Increase your core language score
- Improve skill transferability combinations (language plus education or work)

Together, that can easily be worth 40 to 60 points in some profiles.

---

2. ADDING OR UPGRADING EDUCATION

If you have:
- One bachelor's degree recognized by ECA

and you also have:
- A second diploma or degree that can be assessed,

then updating your ECA so that IRCC counts both can increase points.

A completed master's recognized by ECA can also add a noticeable amount.

---

3. PROVINCIAL NOMINATION

This is the most powerful single lever:
- A PNP nomination gives you 600 CRS points

That turns almost any score into an ITA level score.

However:
- It is highly competitive
- Targeted to specific NOCs and criteria
- Requires careful research and timing

---

OTHER LEVERS

- Spouse language test and ECA
- Extra Canadian work experience
- Valid job offer supported by LMIA

---

If you show me your current CRS breakdown, I can identify which lever would realistically give you the largest improvement within the next few months.`,

  "What is Express Entry?": `Express Entry is an online system used by the Government of Canada to manage permanent residence applications for certain economic immigration programs.

It is not a visa and not a program by itself. It is a selection and invitation system for:

- Federal Skilled Worker Program (FSW)
- Canadian Experience Class (CEC)
- Federal Skilled Trades Program (FST)
- Some Provincial Nominee Program (PNP) streams that are aligned with Express Entry

---

HOW IT WORKS

1. You check if you are eligible for one or more of these programs.
2. You complete an online profile with your age, education, work experience, language scores, and other details.
3. You receive a CRS (Comprehensive Ranking System) score.
4. You enter the Express Entry pool and wait for draws.
5. If your score is high enough for a particular draw, you receive an Invitation to Apply (ITA).
6. After ITA, you submit a full application for permanent residence.

---

KEY POINTS

- Express Entry does not guarantee immigration. It is a competitive ranking system.
- You are competing mostly on age, education, language, and skilled work experience.
- The system is dynamic. CRS cutoffs can change with each draw.

If you tell me your basic profile, I can:
- Explain whether Express Entry is realistically a fit for you
- Suggest alternatives if CRS looks too low right now.`,

  "Understanding CRS Score System": `The Comprehensive Ranking System (CRS) is how IRCC ranks people in the Express Entry pool.

Your CRS score is based on several components.

---

MAIN CRS COMPONENTS

1. Core human capital factors
   • Age
   • Education
   • First official language (English or French)
   • Second official language
   • Canadian work experience

2. Spouse or common law partner factors (if applicable)
   • Their education
   • Their language test
   • Their Canadian work experience

3. Skill transferability factors
   • Combination of education and language
   • Combination of foreign work and language
   • Combination of Canadian and foreign work

4. Additional factors
   • Provincial nomination (+600 points)
   • Valid job offer with LMIA
   • Canadian study experience
   • Sibling in Canada (citizen or PR)
   • Strong French language skills

---

WHY THIS MATTERS

Understanding where your points come from shows you where to focus:
- Improve language scores
- Upgrade or reassess education
- Gain Canadian experience
- Aim for a PNP

If you give me your age, education, language scores, and work history, I can walk you through which CRS components you are strong or weak in and what can be improved.`,

  "ECA Process Explained": `An Educational Credential Assessment (ECA) is how IRCC verifies that your foreign education is equivalent to a Canadian credential.

---

WHEN YOU NEED AN ECA

You generally need an ECA if:
- Your highest education is from outside Canada
- You are applying under FSW or want CRS points for education

If all of your education is Canadian, you usually do not need an ECA.

---

HOW IT WORKS

1. You choose an IRCC approved organization (WES, IQAS, ICES, CES, etc.).
2. You submit:
   • Degree certificates
   • Transcripts
   • Any required forms and fees
3. The organization reviews your documents and issues a report stating what your foreign credential is equivalent to in Canada.

---

TIMELINE

- It can take several weeks to a few months, depending on:
  • The organization
  • Your country
  • How fast your school sends documents

---

IMPORTANT TIPS

- Make sure you follow the specific document instructions for your country and institution.
- If you have more than one degree, consider assessing multiple credentials, since that can sometimes increase CRS points.
- Keep copies of everything and track courier deliveries.

If you tell me which country your degree is from and which level (bachelor's, master's, etc.), I can suggest which assessing body might be a good fit and what to expect.`,

  "IELTS Requirements for PR": `For most economic immigration pathways, you need to show official language ability in English or French.

For English, the common tests are:
- IELTS General Training
- CELPIP General

For permanent residence via Express Entry, IRCC converts your scores into CLB (Canadian Language Benchmark) levels.

---

TYPICAL MINIMUMS

Federal Skilled Worker (FSW):
- Minimum CLB 7 in each ability
  - IELTS equivalent: 6.0 in each skill

Canadian Experience Class (CEC):
- Minimum CLB 5 or 7 depending on your NOC
  - For NOC TEER 0 or 1: usually CLB 7
  - For NOC TEER 2 or 3: sometimes CLB 5 is acceptable

---

COMPETITIVE SCORES

To be competitive in many recent Express Entry draws, people often aim for:
- CLB 9 or higher in all abilities

For IELTS General, CLB 9 usually means:
- Listening: 8.0
- Reading: 7.0
- Writing: 7.0
- Speaking: 7.0

Higher scores can unlock:
- More language points
- Extra skill transferability points

---

OTHER PATHWAYS

Some PNPs and pilot programs may accept lower language scores, especially for certain occupations, but you still need to meet their minimum CLB.

If you tell me your current or target IELTS scores and your program (FSW, CEC, PNP), I can explain what CLB you are at and what you would gain by improving.`,

  "What Documents Do I Actually Need?": `The exact list depends on your program and personal situation, but for an Express Entry PR application after ITA, common documents include:

IDENTITY AND CIVIL STATUS
- Passport for all applicants
- Birth certificates
- Marriage certificate, divorce documents, or proof of common law if applicable

EDUCATION
- Degree certificates and transcripts
- Educational Credential Assessment (ECA) report for foreign education

WORK EXPERIENCE
- Employer reference letters on official letterhead
- Pay stubs, T4s, tax documents (for Canadian work)
- Employment contracts or appointment letters where available

LANGUAGE
- Official IELTS or CELPIP test report (and TEF or TCF for French, if applicable)

POLICE AND SECURITY
- Police certificates from each country where you have lived for 6 months or more since age 18

MEDICAL
- Up front medical exam from a panel physician (for many PR applications)

FUNDS
- Proof of funds (bank statements, fixed deposits, etc.) if required for your program

OTHER POSSIBLE DOCUMENTS
- Proof of relationship to a Canadian sibling (if claiming those points)
- Documents supporting PNP nomination
- Job offer letter and LMIA if applicable

If you describe your situation (single or married, where you lived and worked, which program you are in), I can generate a personalized checklist for you.`,

  "Provincial Nominee Programs Explained": `Provincial Nominee Programs (PNPs) allow Canadian provinces and territories to nominate people who fit their local labor market needs.

A provincial nomination usually gives you:
- An extra 600 CRS points if it is an Express Entry aligned nomination

That almost always guarantees an ITA in the next relevant draw.

---

TYPES OF PNP STREAMS

1. Express Entry aligned (enhanced)
   • You must have an Express Entry profile
   • The province nominates you through the online system
   • You get 600 CRS points added

2. Base streams
   • You apply directly to the province
   • If nominated, you then apply for PR through a separate process
   • Not automatically linked to Express Entry

---

TYPICAL CRITERIA

Provinces may look for:
- Specific occupations (for example health care, tech, trades)
- Work or study experience in that province
- Job offers from local employers
- French language ability
- Connections such as relatives in the province

---

WHY PNP MATTERS

If your CRS is too low for a federal draw, a PNP can be the difference between never getting an ITA and being almost guaranteed one.

However:
- The streams open and close
- Criteria change
- Competition can be intense

If you tell me your occupation, language level, and where you would like to live in Canada, I can suggest which types of PNP streams might be relevant for you.`,

  "Job Offer vs PNP - Which Is Better?": `It is not always about which is absolutely better, but which is more realistic and strategic for you.

---

JOB OFFER PATH

If you can get a valid job offer supported by an LMIA (or an exempt category that counts), you might receive:
- Extra CRS points (often 50 or 200, depending on the NOC)
- A work permit route into Canada
- Canadian experience that leads later to CEC or PNP options

However:
- Getting an LMIA backed job offer from outside Canada can be difficult
- Employers must go through a process to prove no suitable Canadians are available

---

PNP PATH

If you qualify for a PNP stream:
- A nomination can give 600 CRS points in Express Entry
- That virtually guarantees an ITA
- Some streams do not require a job offer
- Others require a job offer or work experience in the province

---

HOW TO CHOOSE

Ask yourself:
1. Do you have employers in Canada already interested in you?
   • If yes, job offer plus possible LMIA may be realistic.

2. Are you in an occupation that is on a provincial in demand list?
   • If yes, a PNP might be a clearer path.

3. Are you already working or studying in a particular province?
   • Local PNP streams might favor you.

Often the best approach is to:
- Explore both
- Apply for PNP where possible
- Continue searching for legitimate job offers

If you tell me your NOC, language score, and target province, I can explain which of the two looks more achievable for you.`,

  "How Others Boosted CRS by 100+ Points": `There is no single magic trick, but there are recurring patterns in how real people managed to add 50 to 100 points or more.

Common moves:

1. Language score jumps
   • Moving from CLB 7 to CLB 9 in all skills
   • Adding or improving French as a second language
   Together, this can add a very large number of points between core language and transferability.

2. PNP nominations
   • A successful nomination adds 600 CRS points
   • Profiles that started in the low 400s suddenly land above 1000

3. Reassessing or adding education
   • Getting a master's assessed
   • Having multiple credentials recognized
   • Completing additional one year programs that count

4. Canadian work or study
   • One year of skilled work in Canada
   • Completion of post secondary study in Canada

If you show me your current CRS and what you are willing or able to change (test again, study, move, etc.), I can walk through which of these success patterns might apply to you.`,

  "Real Results from Evolve Students": `Evolve is designed as an intensive practice system for English tests like IELTS, built around realistic tasks, feedback patterns, and repetition.

Typical outcomes for serious users:
- Better control of time in reading and listening sections
- Clearer structure for writing tasks (Task 1 and Task 2)
- More confident speaking with predictable frameworks

While no one can guarantee scores, what we often see when people practice consistently is:
- 1 band improvement in weak skills over a few months
- More stable performance instead of random test day swings

The value is not just in the higher score. It is in:
- Understanding why answers are right or wrong
- Getting used to English under pressure
- Reducing panic on test day

If you tell me your current IELTS or CELPIP scores and your target, I can explain how a structured 33 test plan might help bridge that gap.`,

  "Why Choose Migrate North Over Consultants?": `A fair way to look at this is not us versus all consultants, but what kind of support model fits you.

Traditional model:
- Pay a consultant several thousand dollars
- They manage or supervise your file
- You rely heavily on their office and schedule

Migrate North model:
- Use guided AI tools (like this Explore bot and Execute) to do most of the analysis and document preparation
- Keep control, visibility, and flexibility over your own file
- Optionally use a licensed professional for final review instead of full representation

This can:
- Lower your cost
- Increase your understanding of your own application
- Reduce the risk of feeling lost if you change representatives later

If you tell me what you are most worried about (cost, mistakes, time, complexity), I can explain how this model does or does not fit your needs.`,

  "Unlock Evolve - IELTS Mastery": `Evolve is built as a yearly access pass to a focused English test training environment.

You get:
- A structured sequence of practice tasks
- Exposure to question types you will actually see
- Guidance and patterns for writing and speaking

The goal is simple:
- Help you move your language scores into a range that meaningfully raises your CRS
- Do this in a predictable, repeatable way rather than random test attempts

If you tell me your current scores and when your next test is, I can suggest how to use a 6 to 8 week sprint effectively.`,

  "Unlock Execute - AI RCIC": `Execute acts like an AI based assistant trained to think like an immigration professional for your file.

It helps you:
- Understand the steps and requirements
- Draft letters, explanations, and checklists
- Spot potential risk areas you might overlook

It does not replace a licensed representative, but it gets you much closer to a complete, organized file, which you can then:
- File yourself, or
- Take to a human professional for a final review

If you tell me which stage you are in now (no profile yet, in the pool, at ITA, responding to ADR, etc.), I can explain what Execute would focus on for you.`,

  "Professional Services": `Sometimes using tools and self direction is not enough and you want a human to sit with your file.

Professional services usually include:
- Detailed review of your profile and documents
- Strategy discussion (timing, program choice, risk)
- Feedback on drafts like letters of explanation
- Ongoing support through stages of the process

This can be useful if:
- Your case has complexity (status issues, refusals, inadmissibility risks)
- You do not have time or energy to manage all details yourself
- You want extra confidence before you submit

If you share your current situation, I can outline whether a DIY or supported approach is likely viable or whether a more hands on professional service is advisable for you.`
};

// =============================================================================
// FAQ MATCHING
// =============================================================================

function getFAQResponse(message) {
  if (!message) return null;
  const raw = String(message).trim();
  if (!raw) return null;

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
      return { role, content: String(content).slice(0, 2000) };
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

function extractProfileFromMessage(message, existingProfile = {}) {
  const profile = { ...(existingProfile || {}) };
  const text = String(message || "");
  const lower = text.toLowerCase();

  const agePatterns = [
    /\b(\d{1,2})\s*(?:years?\s*old|y\.?o\.?|yrs?\s*old|age)\b/i,
    /\bi\s*am\s*(\d{1,2})\b/i,
    /\bmy\s+age\s*(?:is)?\s*(\d{1,2})\b/i,
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

  let ieltsSummary = profile.ieltsSummary || null;

  const singleBandAllMatch = lower.match(/(\d(?:\.\d)?)\s*(?:band)?s?\s*(?:in\s*all|all\s*around|overall|across\s+the\s+board)/i);
  if (singleBandAllMatch) {
    const band = parseFloat(singleBandAllMatch[1]);
    if (!Number.isNaN(band) && band >= 4 && band <= 9) {
      ieltsSummary = `Approximately ${band} in all bands`;
    }
  }

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

  if (lower.includes("married")) {
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

  if (typeof profile.age === "number") {
    crs += CRS_AGE_TABLE[profile.age] || 0;
  }

  if (profile.education && CRS_EDUCATION_TABLE[profile.education]) {
    crs += CRS_EDUCATION_TABLE[profile.education];
  }

  if (typeof profile.workYears === "number") {
    const workYears = Math.min(profile.workYears, 7);
    crs += CRS_WORK_TABLE[workYears] || 0;
  }

  if (profile.ieltsSummary) {
    const bandMatch = profile.ieltsSummary.match(/(\d(?:\.\d)?)/);
    if (bandMatch) {
      const avg = parseFloat(bandMatch[1]);
      if (!Number.isNaN(avg)) {
        const tables = Object.keys(CRS_LANGUAGE_TABLE).map(parseFloat).sort((a, b) => b - a);
        const closest = tables.find(t => avg >= t) || tables[tables.length - 1];
        crs += CRS_LANGUAGE_TABLE[closest] || 0;
      }
    }
  }

  if (profile.maritalStatus === "married") {
    crs -= 10;
  }

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
// OPENAI CALLBACK - USING CHAT COMPLETIONS
// =============================================================================

async function callOpenAI(historyMessages, userMessage, profile = {}, meta = {}) {
  const profileContext = isProfileComplete(profile)
    ? `\n\n[USER PROFILE FROM CONVERSATION]\n${JSON.stringify(profile, null, 2)}\n\nUse this profile context when providing guidance.`
    : "";

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

  const normHistory = normalizeHistory(historyMessages).slice(-30);

  const messages = [
    { role: "system", content: systemPrompt },
    ...normHistory,
    { role: "user", content: String(userMessage || "") }
  ];

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages
    });

    const reply =
      completion?.choices?.[0]?.message?.content ||
      "Sorry, I was not able to generate a response. Please try again.";

    return reply;
  } catch (error) {
    console.error("[OpenAI] Error:", {
      message: error.message,
      status: error.status,
      type: error.type
    });
    throw error;
  }
}

// =============================================================================
// MAIN HANDLER WITH SUPABASE LOGGING + IDENTITY LAYER
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
      },
      body: "ok"
    };
  }

  if (event.httpMethod !== "POST") {
    return errorResponse(405, "Method not allowed");
  }

  try {
    const ip = event.requestContext?.identity?.sourceIp || "unknown";
    if (!checkRateLimit(ip)) {
      return errorResponse(429, "Too many requests. Please try again later.");
    }

    const parsed = JSON.parse(event.body || "{}");
    
    // =========================================================================
    // IDENTITY LAYER - Phase 1B: Auth verification and profile auto-creation
    // =========================================================================
    const user = await getUserFromRequest(event);
    if (user) {
      await ensureProfile(user);
    }
    // =========================================================================
    
    const message = parsed.message ?? "";
    const history = parsed.history ?? [];
    const meta = parsed.meta ?? {};
    const incomingProfile = parsed.userProfile ?? {};
    const userId = parsed.userId || null; // For Supabase logging

    if (typeof message !== "string" || !message.trim()) {
      return errorResponse(400, "Missing or invalid 'message'");
    }

    if (String(message).length > 5000) {
      return errorResponse(400, "Message too long (max 5000 characters)");
    }

    const trimmedMessage = message.trim();

    // FAQ shortcut
    const faqReply = getFAQResponse(trimmedMessage);
    if (faqReply) {
      const newHistory = [
        ...normalizeHistory(history).slice(-30),
        { role: "user", content: trimmedMessage },
        { role: "assistant", content: faqReply }
      ];

      // Save FAQ reply in Supabase
      if (userId) {
        await supabase.from("explore_history").insert({
          user_id: userId,
          message_in: trimmedMessage,
          message_out: faqReply,
          timestamp: new Date().toISOString()
        });
      }

      // Activity logging for authenticated users
      if (user) {
        await supabase.from("activity_log").insert({
          user_id: user.id,
          event_type: "interaction",
          event_value: "explore_faq"
        });
      }

      return ok({
        reply: faqReply,
        history: newHistory,
        meta,
        userProfile: incomingProfile
      });
    }

    // Update profile extraction
    const updatedProfile = extractProfileFromMessage(trimmedMessage, incomingProfile);

    // Decision logic for CRS or both options
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

    // Respond with both options
    if (asksForBoth && lastOfferedChoice) {
      const bothReply = buildBothOptionsFollowUp(updatedProfile, crsScoreFromProfile);
      const newHistory = [
        ...normalizeHistory(history).slice(-30),
        { role: "user", content: trimmedMessage },
        { role: "assistant", content: bothReply }
      ];

      // Save to Supabase
      if (userId) {
        await supabase.from("explore_history").insert({
          user_id: userId,
          message_in: trimmedMessage,
          message_out: bothReply,
          timestamp: new Date().toISOString()
        });
      }

      // Activity logging for authenticated users
      if (user) {
        await supabase.from("activity_log").insert({
          user_id: user.id,
          event_type: "interaction",
          event_value: "explore_both_options"
        });
      }

      return ok({
        reply: bothReply,
        history: newHistory,
        meta,
        userProfile: updatedProfile
      });
    }

    // Profile complete, send CRS explanation
    // IDENTITY GATE: Only show personalized CRS if user is logged in
    const looksLikeProfile =
      /\b\d{1,2}\s*years?\b/i.test(trimmedMessage) ||
      trimmedMessage.toLowerCase().includes("ielts") ||
      trimmedMessage.toLowerCase().includes("celpip") ||
      trimmedMessage.toLowerCase().includes("bachelor") ||
      trimmedMessage.toLowerCase().includes("master") ||
      trimmedMessage.toLowerCase().includes("phd");

    if (user && looksLikeProfile && isProfileComplete(updatedProfile)) {
      const crsScore = estimateCRS(updatedProfile);
      const crsReply = buildCRSExplanation(updatedProfile, crsScore);

      const newHistory = [
        ...normalizeHistory(history).slice(-30),
        { role: "user", content: trimmedMessage },
        { role: "assistant", content: crsReply }
      ];

      // Save to Supabase
      if (userId) {
        await supabase.from("explore_history").insert({
          user_id: userId,
          message_in: trimmedMessage,
          message_out: crsReply,
          timestamp: new Date().toISOString()
        });
      }

      // Activity logging for authenticated users
      if (user) {
        await supabase.from("activity_log").insert({
          user_id: user.id,
          event_type: "interaction",
          event_value: "explore_crs_analysis"
        });
      }

      return ok({
        reply: crsReply,
        history: newHistory,
        meta,
        userProfile: updatedProfile
      });
    }

    // Normal OpenAI flow
    const modelReply = await callOpenAI(history, trimmedMessage, updatedProfile, meta);
    const newHistory = [
      ...normalizeHistory(history).slice(-30),
      { role: "user", content: trimmedMessage },
      { role: "assistant", content: modelReply }
    ];

    // Save to Supabase
    if (userId) {
      await supabase.from("explore_history").insert({
        user_id: userId,
        message_in: trimmedMessage,
        message_out: modelReply,
        timestamp: new Date().toISOString()
      });
    }

    // Activity logging for authenticated users
    if (user) {
      await supabase.from("activity_log").insert({
        user_id: user.id,
        event_type: "interaction",
        event_value: "explore_message"
      });
    }

    return ok({
      reply: modelReply,
      history: newHistory,
      meta,
      userProfile: updatedProfile
    });
  } catch (err) {
    console.error("[chat-explore] Error:", {
      errorMessage: err?.message || "Unknown error",
      errorType: err?.type || "Unknown type",
      errorStatus: err?.status || "Unknown status",
      timestamp: new Date().toISOString()
    });

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
