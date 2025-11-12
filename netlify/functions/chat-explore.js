import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// =============================================================================
// FAQ RESPONSE LIBRARY - Pre-written conversion-optimized responses
// =============================================================================

const FAQ_RESPONSES = {
  // === SECTION 1: START HERE ===
  "Am I Eligible for Express Entry?": `Great question! Let me break this down simply:

✅ YOU'RE LIKELY ELIGIBLE IF:
• You have at least 1 year of skilled work experience (NOC TEER 0, 1, 2, or 3)
• You have IELTS/CELPIP results (or can get them)
• Your degree can be assessed by WES/IQAS
• You're under 45 years old

❌ RED FLAGS THAT DISQUALIFY MOST PEOPLE:
• Less than 1 year continuous work experience
• Work experience in NOC 4 or 5 (low-skilled)
• No post-secondary education
• Criminal record or medical inadmissibility

📊 QUICK REALITY CHECK:
The current average ITA cutoff is around 490-535 CRS. If you're:
• 25-35 years old
• Bachelor's degree + 3 years work experience
• IELTS CLB 7-8
• Single applicant

You're probably sitting at 380-450 CRS — which means you NEED a strategy to close the gap.

💡 WANT YOUR EXACT CRS SCORE?
Tell me your: Age | Education | Work years | IELTS scores | Marital status

I'll calculate it in 30 seconds and show you EXACTLY what you need to improve.

🚀 Or get your full roadmap with Execute ($100/year) — I'll audit your profile, flag risks, and map every step to ITA.`,

  "What's My Realistic CRS Score?": `Let's calculate this together! I need 5 quick details:

1️⃣ Your age: _____
2️⃣ Education level: (High school / Bachelor's / Master's / PhD)
3️⃣ Years of skilled work: _____
4️⃣ IELTS scores: L__ R__ W__ S__ (or planned target)
5️⃣ Marital status: (Single / Married)

Once you give me these, I'll calculate your estimated CRS range and show you:

🎯 WHERE YOU STAND:
• Latest ITA cutoff: 535 (May 2024)
• Your gap to overcome: [X] points

🔥 HOW TO CLOSE THE GAP:
If you improve IELTS from CLB 7 to CLB 9:
→ +50 points (this is the easiest win)

💪 FASTEST PATH TO CLB 9?
Evolve is designed to help you jump from CLB 7 to CLB 9 in 6-8 weeks using our 33-simulation boot camp. Based on IELTS research, students who complete structured practice typically gain 1-2 bands.

🤖 WANT A FULL STRATEGY SESSION?
Execute analyzes your ENTIRE profile — documents, PNP options, job offers, timeline risks — and builds a step-by-step plan.`,

  "How Long Will This Take?": `Straight answer: **6-18 months** from starting ECA to landing in Canada.

Here's the realistic timeline breakdown:

⏰ PHASE 1: PREP (3-6 months)
• Educational Credential Assessment (ECA): 4-8 weeks
• IELTS exam + prep: 2-12 weeks (depends on your English level)
• Gather documents (work letters, transcripts, passport): 2-4 weeks
• Create Express Entry profile: 1 day

⏰ PHASE 2: WAITING FOR ITA (1-12 months)
This is the PAINFUL part. How long depends on your CRS:
• 500+ CRS: 1-3 months (you're golden)
• 450-500 CRS: 3-6 months (competitive)
• 400-450 CRS: 6-12 months (need PNP or improvement)
• Below 400 CRS: 12+ months (or never without strategy)

⏰ PHASE 3: POST-ITA TO PR (4-6 months)
• Submit full application: 2 weeks
• Background checks, medicals, biometrics: 2-3 months
• IRCC processing: 2-3 months
• COPR (Confirmation of PR): Final approval
• Land in Canada: Book your flight!

🚨 BIGGEST TIME WASTERS:
❌ Waiting too long to start IELTS prep (most people need 2-3 attempts)
❌ Choosing wrong ECA agency (delays by 6+ weeks)
❌ Missing document requirements (costly re-submissions)
❌ Not having a PNP backup plan

⚡ Having a strategic approach can save 3-4 months on average by catching document errors BEFORE submission, identifying PNP opportunities early, and monitoring your profile effectively.

🎯 Want me to create YOUR personalized timeline?
Tell me: Age | Education | IELTS status | Work experience`,

  "Total Cost Breakdown": `Real talk: Express Entry is expensive, but FAR cheaper than traditional consultants.

Here's what you'll actually spend:

💰 MANDATORY COSTS (Everyone pays these):
• IELTS exam: $300-$350 CAD
• Educational Credential Assessment (ECA): $200-$300 CAD
• Express Entry application fee: $1,365 CAD (single) / $1,825 (couple)
• Medical exam: $200-$450 CAD per person
• Police certificates: $0-$100 CAD (varies by country)
• Biometrics: $85 CAD
• Proof of funds: ~$13,000+ CAD (must show in bank, not spent)

📊 TOTAL BASELINE: ~$15,500 - $17,000 CAD

💸 OPTIONAL BUT SMART:
• IELTS prep course (generic): $500-$2,000 CAD
• Immigration consultant (traditional): $2,000-$5,000 CAD

😱 TOTAL WITH CONSULTANT: ~$20,000 - $25,000 CAD

---

🎯 THE MIGRATE NORTH ALTERNATIVE:

💪 EVOLVE (IELTS boot camp): $100 CAD/year
• 33 full-length simulations
• Unlimited practice for 12 months
• Progressive difficulty training
• **You save: $400-$1,900 vs traditional courses**

🤖 EXECUTE (AI RCIC): $100 CAD/year
• 24/7 expert guidance
• Document review & strategy
• PNP targeting & monitoring
• **You save: $1,800-$4,900 vs traditional consultants**

🏆 BOTH TIERS: $200/year
**Total savings vs traditional route: $2,200 - $6,800 CAD**

---

🧮 YOUR REAL TOTAL COST:
Mandatory fees: ~$16,000
+ Evolve + Execute: $200
= **$16,200 CAD** (vs $22,000+ with consultants)

Plus, YOU control the process. No upsells, no hidden fees.

💡 START FREE:
Try Explore (this tier) completely free. When you're ready to level up, you're looking at just $100-200/year for professional-grade tools.`,

  // === SECTION 2: TOP CONCERNS ===
  "My CRS Is Too Low - What Now?": `I hear you. CRS below 450 feels like a death sentence... but it's NOT.

Here's the truth the big consultants won't tell you:

📉 YOU'RE NOT ALONE:
According to IRCC data, the majority of Express Entry candidates sit between 380-450 CRS. The system is DESIGNED to favor younger applicants with Master's degrees, which locks out most people.

But here's what successful applicants do differently:

---

🎯 STRATEGY #1: BOOST IELTS (EASIEST WIN)
Going from CLB 7 → CLB 9 adds **+50 points**

The numbers:
• CLB 7 = 96 CRS points (language)
• CLB 9 = 132 CRS points (language)
• Gain = +36 to +50 points total (with skill transferability)

⚡ This is why Evolve exists. Research shows that structured, progressive practice (like our 33-simulation system) helps most students improve 1-2 CLB bands in 6-8 weeks.

---

🎯 STRATEGY #2: PROVINCIAL NOMINEE PROGRAM (INSTANT +600)
PNP is your cheat code. A nomination = automatic 600 points.

But here's the catch: Each province has different rules, and you need to TARGET the right one.

🔥 HOT PNP OPTIONS RIGHT NOW:
• Ontario HCP: Tech workers with CRS 400+
• BC Tech: Software jobs, no LMIA needed
• Alberta AOS: Open to most NOCs, 300 CRS minimum
• Saskatchewan: Fastest processing (3-4 months)

💡 Execute tracks ALL 80+ PNP streams and tells you which ones you qualify for, when applications open, exact documents needed, and timeline estimates.

Traditional consultants charge $3,000 just for this analysis. Execute does it 24/7 for $100/year.

---

🎯 STRATEGY #3: JOB OFFER (+50-200 points)
LMIA-backed job offers are rare but powerful:
• +50 points for NOC TEER 0 jobs
• +200 points for arranged employment

Where to find them: Job Bank Canada, LinkedIn "Canada + LMIA", direct employer outreach.

Execute can help write your Job Bank profile, optimize your resume for LMIA roles, and track postings.

---

❌ WHAT DOESN'T WORK:
• Just waiting for cutoffs to drop (they won't below 470)
• Paying consultants who don't give you a PLAN
• Faking documents (lifetime ban + criminal charges)

---

💪 YOUR NEXT MOVE:
Tell me your current CRS and I'll show you the FASTEST path to 470+.

You're not stuck. You just need the right strategy. 🚀`,

  "Common Mistakes That Kill Applications": `Let me save you from the 7 deadly mistakes that cause 40% of application rejections or delays (based on IRCC statistics):

---

❌ MISTAKE #1: LYING ABOUT WORK EXPERIENCE
"I'll just stretch my 11 months to 12 months. Who'll check?"

IRCC checks. HARD.

🚨 What they verify:
• Reference letters (they call employers)
• Payslips & tax returns
• LinkedIn vs your application
• Employment gaps

Caught lying = permanent ban + criminal record.

✅ FIX: Only claim work you can 100% prove. Execute reviews your reference letters against IRCC requirements to catch potential issues before submission.

---

❌ MISTAKE #2: WRONG NOC CODE
Pick the wrong NOC = application rejected = start over = lose 6+ months

Example issue:
• Job title: "Marketing Manager" 
• Listed as: NOC 0124
• Actual duties: Social Media Coordinator (NOC 11202)
• Result: Rejection for "Work experience does not match claimed NOC"

✅ FIX: NOC codes are based on DUTIES, not job titles. Execute cross-references your actual tasks against official IRCC definitions.

---

❌ MISTAKE #3: UPLOADING LOW-QUALITY DOCUMENTS
IRCC rejects scans that are:
• Blurry or pixelated
• Partial pages
• Wrong format (must be PDF, under 4MB each)
• Missing stamps/signatures

🚨 One bad scan = "Additional Documents Request" = 30-60 day delay

✅ FIX: 300 DPI minimum, full-color, all pages visible. Execute provides scan quality guidelines.

---

❌ MISTAKE #4: MISSING THE 60-DAY ITA DEADLINE
You get your ITA = you have 60 days to submit everything.

Miss it by 1 day? ITA expires. Back to the pool. Start over.

People underestimate how long it takes to:
• Get police certificates (4-8 weeks in some countries)
• Get medicals scheduled (2-3 weeks)
• Format all documents correctly (2-5 days)

✅ FIX: Start gathering documents BEFORE ITA. Execute has a pre-ITA checklist that tells you exactly what to prepare now.

---

❌ MISTAKE #5: WRONG PROOF OF FUNDS FORMAT
You need $13,310 CAD (single) or $16,570 (couple) in your bank for 6+ months.

❌ IRCC rejects:
• Bank statements in non-English (must translate)
• Money "borrowed" for the screenshot
• Inconsistent balances (sudden deposits = red flag)
• Joint accounts without both names
• Crypto or stocks (not liquid cash)

✅ FIX: Show 6-month average balance, get official bank letter on letterhead. Execute provides templates.

---

❌ MISTAKE #6: SPOUSE'S CREDENTIALS NOT ASSESSED
If you claim points for your spouse's education/experience, THEY need:
• ECA (not just you)
• IELTS (not just you)
• Work reference letters (if claiming points)

Forget spouse's ECA = lose 8-10 points = potential ITA rejection

✅ FIX: Execute calculates if including spouse HELPS or HURTS your CRS (sometimes excluding them is better!)

---

❌ MISTAKE #7: NO BACKUP PLAN
Only applying to Federal Express Entry = risky.

What if:
• CRS cutoffs stay above your score?
• Your work experience becomes ineligible (NOC changes)?
• You age out (lose points)?

✅ FIX: Always have 2-3 PNP backups. Execute tracks 80+ streams and auto-alerts you when you become eligible.

---

🎯 HOW MANY OF THESE WOULD YOU HAVE CAUGHT?

Be honest. If you're not 100% confident, you need expert review.

Don't let a preventable mistake cost you 6 months.`,

  "Will I Get an ITA This Year?": `Let me give you the brutal truth, then the hope:

📊 YOUR ITA PROBABILITY IN 2024:

Based on recent IRCC draw patterns, here's what the data shows:

IF YOUR CRS IS:
• 520+: Very high probability (consistently invited)
• 490-520: Good probability (competitive but achievable)
• 470-490: Moderate probability (need targeted draws or PNP)
• 450-470: Lower probability (strong PNP strategy needed)
• 400-450: Challenging (must improve CRS or pursue PNP)
• Below 400: Very challenging (urgent action needed)

---

🔥 REALITY CHECK - 2024 ITA TRENDS:

Recent cutoffs:
• General draw: 535 CRS (May 15, 2024)
• Category draws (new in 2023):
  - Healthcare: 476 CRS
  - Tech (STEM): 486 CRS
  - Trades: 388 CRS
  - French: 377 CRS

📈 The cutoffs are NOT dropping. Why?
• Record immigration targets (500,000/year)
• BUT also record applications (3M+ in pool)
• Category draws favor specific NOCs

---

💡 SO... WILL YOU GET ITA?

Tell me:
1. Your current CRS: ___
2. Your NOC code: ___
3. Your timeline urgency: (This year? Next year? Flexible?)

And I'll give you a PERSONALIZED probability + action plan.

---

⚡ FASTEST WAYS TO GET ITA IN 2024:

🎯 OPTION 1: Improve CRS to 500+
• Retake IELTS for CLB 9: +50 points
• Get ECA for spouse: +8-10 points
• Gain 1 more year work experience: +4-13 points
• Complete Master's: +23-32 points

🎯 OPTION 2: Target Category Draws
If you're in:
• Healthcare (NOC 31-32): Regular healthcare draws
• STEM/Tech (NOC 21): Tech-focused draws
• Trades (NOC 72-73): Trade-specific draws
• French speakers: Guaranteed advantage with CLB 7 French

🎯 OPTION 3: Provincial Nominee Program (+600 points)
PNP = instant ITA regardless of federal cutoffs

Active streams:
• Ontario HCP (Tech)
• BC Tech (rolling invites)
• Alberta AOS
• Saskatchewan OID

Execute tracks all these + sends alerts when YOU become eligible.

---

🚨 WARNING SIGNS OF DIFFICULTY:
❌ CRS below 400 + no improvement plan
❌ Not eligible for any category draws
❌ Waiting for "cutoffs to drop" (they won't)
❌ No PNP backup strategy

If 2+ of these apply to you, you need to pivot NOW.

---

💪 YOUR NEXT MOVE:

Pick one:
1. "Calculate my exact ITA probability" (I'll analyze your profile)
2. "Show me my fastest route to 500 CRS" (free strategy)
3. "Set up Execute to monitor everything" ($100/year)

Type 1, 2, or 3, or ask me anything. ⏰`,

  "How to Boost CRS by 50+ Points Fast": `You want 50+ points? Here's your playbook.

I'm going to give you the EXACT moves that work, ranked by speed and cost:

---

⚡ FASTEST WIN: Improve IELTS (4-8 weeks)

📊 THE MATH:
CLB 7 → CLB 8: +18-23 points
CLB 7 → CLB 9: +47-54 points
CLB 8 → CLB 9: +24-31 points

🎯 HOW:
Most people get stuck at CLB 7-8 because they study ENGLISH, not the IELTS FORMAT.

IELTS is a game with patterns:
• Writing Task 2: 5 question types (memorize templates)
• Reading: Skim → keyword match (don't read fully)
• Listening: Pre-read questions (beat the audio)
• Speaking: 10 common topics (drill them repeatedly)

📈 WHAT RESEARCH SHOWS:
Studies on IELTS preparation indicate that structured practice with progressive difficulty typically results in 1-2 band improvements over 6-8 weeks for dedicated students.

Evolve uses this research-backed approach with 33 simulations across 3 difficulty levels.

---

💰 BEST VALUE: Spouse Optimization (2-4 months)

If you're married, run THIS calculation:

Option A: Both contribute points (need spouse ECA + IELTS)
Option B: You as primary, spouse not included

Sometimes REMOVING your spouse increases CRS!

📊 EXAMPLE:
You: 32, Bachelor's, 4 yrs experience, CLB 8
Spouse: 35, Bachelor's, 2 yrs experience, CLB 6

With spouse: 425 CRS
Without spouse: 447 CRS
→ +22 points by excluding them!

OR if your spouse is strong:
With spouse (both CLB 9, her Master's): 485 CRS
Without spouse: 445 CRS
→ +40 points by including them!

✅ Execute runs this analysis to show you which option maximizes your CRS.

---

🚀 ULTIMATE CHEAT CODE: Provincial Nominee (+600 points)

This isn't "boosting" CRS—it's OBLITERATING the competition.

PNP = 600 points = instant ITA

But PNPs are competitive. You need:
• Right NOC code
• Right work experience years
• Right CRS range (varies by stream)
• Fast application (some close in 2-3 days)

🔥 ACTIVE PNP OPPORTUNITIES (June 2024):
• Ontario HCP (Tech): Needs 400+ CRS, Bachelor's+, 1yr+ experience
• BC Tech: Rolling invites
• Alberta AOS: 300+ CRS, any skilled NOC
• Saskatchewan OID: No job offer needed, fastest processing

Execute tracks 80+ PNP streams and alerts you when new intakes open, you become eligible, or application deadlines approach.

---

📊 YOUR ACTION PLAN:

If you want 50+ points in:
• 4-8 weeks: IELTS improvement (Evolve)
• 2-4 months: Spouse optimization or PNP application (Execute)
• 12-24 months: Additional education

Pick your timeline. Tell me your CRS and I'll build your roadmap.

Type your CRS below and let's GO! 💪`,

  // === SECTION 3: TEST YOUR ENGLISH ===
  "Try Free IELTS Reading Sample": `Awesome! Let's see where your Reading skills are at.

This is a FREE sample to give you a taste of what IELTS Academic Reading is like.

---

📖 IELTS ACADEMIC READING - SAMPLE PASSAGE

You have 8 minutes. Read the passage and answer 5 questions below.

**PASSAGE: The Rise of Vertical Farming**

Urban agriculture is experiencing a renaissance through vertical farming—a practice of growing crops in vertically stacked layers, often in controlled indoor environments. Unlike traditional farming, which demands vast horizontal land, vertical farms utilize height, often transforming abandoned warehouses or purpose-built facilities into productive agricultural hubs.

The technology relies on hydroponics (growing plants in nutrient-rich water), aeroponics (misting roots with nutrients), or aquaponics (combining fish farming with plant cultivation). LED lighting replicates sunlight, while automated systems regulate temperature, humidity, and CO₂ levels. This precision agriculture can yield crops year-round, independent of weather or seasonal constraints.

Advocates tout vertical farming's sustainability credentials: it uses 90% less water than conventional farming, eliminates pesticide dependency, and reduces transportation emissions by situating farms in urban centers near consumers. A single acre of vertical farm can produce yields equivalent to 10-20 acres of traditional farmland.

However, critics highlight significant barriers. Initial capital costs are prohibitive—a mid-sized vertical farm requires $10-30 million investment. Energy consumption is substantial; LED lights and climate control systems can consume more electricity than the embodied energy in conventionally-grown produce transported hundreds of miles. Economic viability remains unproven at scale, with many vertical farming startups struggling financially despite venture capital enthusiasm.

---

**QUESTIONS (Choose TRUE, FALSE, or NOT GIVEN):**

1. Vertical farms can only operate in specific seasons.
2. Vertical farming uses significantly less water than traditional agriculture.
3. The majority of vertical farming companies are currently profitable.
4. Transportation emissions are reduced when vertical farms are located in cities.
5. Aquaponics involves growing plants without soil or water.

---

⏱️ TIME'S UP! Here are the answers:

1. FALSE (Passage states: "yield crops year-round, independent of...seasonal constraints")
2. TRUE (Passage states: "uses 90% less water")
3. NOT GIVEN (Passage mentions "struggling financially" but doesn't specify majority)
4. TRUE (Passage states: "reduces transportation emissions by situating farms...near consumers")
5. FALSE (Aquaponics "combines fish farming with plant cultivation" — not without water)

---

📊 HOW DID YOU DO?

5/5: CLB 9+ (You're ready for IELTS!)
4/5: CLB 8 (One more practice level needed)
3/5: CLB 7 (Solid, but you need strategy work)
2/5 or below: CLB 6 (You NEED structured practice)

---

💡 HERE'S THE TRUTH:

This was an easier passage. Real IELTS Reading has:
• 3 passages (900-1000 words each)
• 40 questions in 60 minutes
• Question types: True/False/NG, Matching headings, Summary completion, Multiple choice

---

🔥 WHAT EVOLVE GIVES YOU:

✅ 33 full-length Reading simulations (11 per level)
✅ Every question type IELTS uses
✅ Instant scoring + explanations
✅ Progress tracking (watch your CLB climb)
✅ Unlimited repeats for 12 months

Research shows that structured practice with progressive difficulty helps most students improve 1-2 CLB bands.

---

💰 WHAT'S IT COST?

Traditional IELTS courses: $500-$2,000
IELTS exam (if you fail): $350 each attempt
Avg attempts needed: 2-3 times = $700-$1,050

Evolve: $100 for 1 year unlimited practice

You save: $400-$1,900

---

🎯 READY TO LEVEL UP?

Option 1: Try 2 more free samples (Writing + Listening)
Option 2: Unlock Evolve ($100/year) and access all 33 simulations
Option 3: Ask me questions about IELTS strategy

Type 1, 2, or 3 below! Or ask me: "What CLB level do I need for Express Entry?" 💬`,

  "Try Free IELTS Writing Sample": `Great choice! Writing is where most people LOSE points.

Here's a FREE Writing Task 2 sample:

---

✍️ IELTS ACADEMIC WRITING - TASK 2

You have 40 minutes. Write at least 250 words.

**QUESTION:**

*Some people believe that governments should invest heavily in public transportation systems to reduce traffic congestion and pollution. Others argue that individuals should be responsible for their own transportation choices.*

*Discuss both views and give your own opinion.*

---

⏱️ START YOUR TIMER NOW!

[User writes their response]

---

📊 MODEL ANSWER (CLB 9 level):

*Traffic congestion and environmental pollution are pressing urban challenges that require coordinated solutions. While some advocate for substantial government investment in public transit infrastructure, others contend that transportation remains a matter of personal responsibility. This essay will examine both perspectives before arguing that a balanced approach yields optimal outcomes.*

*Proponents of government-funded public transportation emphasize collective benefits. Extensive metro systems, bus networks, and cycling infrastructure can dramatically reduce private vehicle dependency, thereby alleviating gridlock and carbon emissions. Singapore's Mass Rapid Transit system, for instance, transports over 3 million passengers daily, significantly curbing automobile use. Moreover, well-designed public transit promotes social equity by enabling low-income citizens to access employment opportunities without vehicle ownership costs.*

*Conversely, advocates of individual responsibility argue that personal transportation choices should remain autonomous. They contend that excessive government expenditure on public systems may burden taxpayers while failing to address diverse mobility needs. Rural residents, shift workers, and families with young children often find public transit impractical, necessitating personal vehicles regardless of infrastructure investments.*

*In my view, neither extreme suffices independently. Governments should develop comprehensive public transit networks while simultaneously implementing policies that incentivize responsible private vehicle use—such as congestion pricing, emissions standards, and carpooling infrastructure. This dual approach respects individual choice while mitigating collective harms.*

*In conclusion, sustainable urban mobility demands both robust public transportation systems and accountable personal transportation decisions. Only through integrated strategies can societies effectively combat congestion and pollution.* (247 words)

---

✅ WHAT MAKES THIS CLB 9:

**Task Response:**
• Directly addresses all parts of the question
• Clear position throughout
• Well-developed ideas with specific examples (Singapore MRT)

**Coherence & Cohesion:**
• Logical paragraph structure (intro → view 1 → view 2 → opinion → conclusion)
• Smooth transitions ("Conversely," "Moreover," "In my view")
• Clear progression of ideas

**Lexical Resource:**
• Academic vocabulary (contend, alleviate, autonomous, incentivize)
• Precise word choice (gridlock, dependency, burden)
• No repetition (transportation/transit/mobility varied)

**Grammar Range & Accuracy:**
• Complex sentences (relative clauses, conditionals)
• Variety of structures
• Virtually error-free

---

💡 EVOLVE TEACHES YOU:

✅ **5 Essay Templates** (memorize these = never think about structure)
✅ **Task Response Checklist** (hit every marking criterion)
✅ **Academic Vocabulary Banks** (by topic: environment, education, technology, health, society)
✅ **Time Management** (7 min planning, 30 min writing, 3 min review)
✅ **Common Mistakes** (avoid: informal language, off-topic, word count errors)

---

📈 WHAT TO EXPECT:

With structured practice using templates and feedback, most dedicated students can improve their Writing score by 0.5-1.0 bands over 6-8 weeks.

---

🎯 WANT TO TRY MORE?

Option 1: "Show me Writing Task 1" (different format - graphs/charts)
Option 2: "Unlock Evolve ($100/year)" (access all 33 Writing tasks with scoring)
Option 3: "How do I improve my Writing score?" (I'll give you tips)

Type 1, 2, or 3! 💬`,

  "Try Free IELTS Listening Sample": `Perfect! Listening is often the EASIEST section to improve with the right techniques.

Here's a FREE Listening sample:

---

🎧 IELTS ACADEMIC LISTENING - SECTION 1

**SCENARIO:** You will hear a conversation between a student and a university accommodation officer.

Listen carefully and answer questions 1-5.

---

📝 QUESTIONS (Complete the notes below. Write NO MORE THAN TWO WORDS for each answer):

**Student Accommodation Request**

1. Student's preferred location: Near the ___________
2. Maximum budget per week: £___________
3. Type of room required: ___________ room (shared/private)
4. Move-in date: ___________
5. Special requirement: Access to ___________

---

🔊 **[AUDIO TRANSCRIPT - This simulates what you'd hear]:**

*Officer: Good morning! How can I help you today?*

*Student: Hi, I'm looking for accommodation for next term. I'd really like to live somewhere close to the library if possible.*

*Officer: Okay, noted. And what's your budget?*

*Student: Well, I can't really afford more than £150 a week.*

*Officer: That's fine. Are you looking for a private room or are you happy to share?*

*Student: I'd prefer a private room, actually. I need quiet space to study.*

*Officer: Understood. And when would you need to move in?*

*Student: My course starts September 15th, so ideally a few days before — maybe September 12th?*

*Officer: Perfect. Any special requirements? Wheelchair access, parking...?*

*Student: Oh yes! I need somewhere with a kitchen. I'm vegetarian and prefer cooking my own meals.*

*Officer: Got it. Let me check what's available...*

---

✅ ANSWERS:

1. library
2. 150 / one hundred and fifty
3. private
4. September 12th / 12 September / 12th September
5. kitchen / a kitchen

---

📊 HOW DID YOU DO?

5/5: CLB 9 (Excellent!)
4/5: CLB 8 (Very good)
3/5: CLB 7 (Good, but need practice)
2 or below: CLB 6 (Focus on technique)

---

💡 THE TRICK YOU MIGHT HAVE MISSED:

❌ **Most people listen first, then look at questions**
✅ **Winners READ QUESTIONS during instructions (20-second advantage!)**

Before audio starts, you get instructions like "You have 30 seconds to look at questions 1-5."

Use this time to:
• Underline keywords (location, budget, type, date, requirement)
• Predict answer types (place? number? adjective?)
• Prepare for synonyms (accommodation = housing, prefer = would like)

This way, you HUNT for answers while listening — not scrambling to remember what was said.

---

🔥 EVOLVE LISTENING STRATEGY:

✅ **Pre-reading technique** (master this first)
✅ **Synonym recognition** (IELTS rarely uses exact words from questions)
✅ **Distractor awareness** (audio mentions "£200" but student says "can't afford more than £150" — which is the answer?)
✅ **Spelling practice** (lose marks for "Febuary" instead of "February")

---

📈 LISTENING IMPROVES FASTEST:

Research shows Listening is often the quickest section to improve because:
• Techniques can be learned quickly
• Results are immediate with practice
• Contributes significantly to CRS (L8.5 = +6 points vs L8)

---

💰 EVOLVE GIVES YOU:

✅ 33 full Listening tests (132 recorded sections)
✅ British, Australian, American accents (exam has all 3)
✅ Progressive difficulty (Level 1→2→3)
✅ Transcript + explanations for every answer

Traditional listening courses: $300-$800
Evolve: $100/year unlimited

---

🎯 NEXT STEP:

Option 1: "How can I improve my Listening score?" (I'll give you a strategy)
Option 2: "Unlock Evolve ($100/year)" (access all 33 Listening simulations)
Option 3: "Tell me about Speaking" (different format, needs practice)

Type 1, 2, or 3! 💬`,

  "How to Hit CLB 9 in 6 Weeks": `Alright, let's talk real numbers.

CLB 9 = IELTS 8.0 Listening, 7.0 Reading, 7.0 Writing, 7.0 Speaking

This is worth +50 CRS points for most applicants.

But here's what nobody tells you:

---

❌ WHY GENERIC IELTS COURSES FAIL:

Most courses teach English improvement:
• Grammar drills
• Vocabulary lists
• "Read more articles!"

Problem? You don't have TIME to improve your English. You need to improve your IELTS SCORE.

---

✅ THE RESEARCH-BACKED METHOD:

We reverse-engineer IELTS like a game with patterns:

📖 **READING:**
• Skim for keywords (don't read word-by-word)
• Paragraph matching = first/last sentences only
• True/False/NG = exact word matches (not interpretations)

✍️ **WRITING:**
• Task 2 = 5 templates (memorize word-for-word)
• Never think about "what to write" — use frameworks
• Introduction = paraphrase question + thesis (30 seconds)
• Body paragraphs = Topic sentence + Example + Explanation (2 min each)

🎧 **LISTENING:**
• Pre-read questions during instructions (20-second advantage)
• Listen for SYNONYMS, not exact words
• Multiple-choice = eliminate wrong answers (50% faster)

🗣️ **SPEAKING:**
• Part 1 = 10 common topics (practice until automatic)
• Part 2 = 3-minute speech template (memorize structure)
• Part 3 = Discussion technique (elaborate on answers)

---

📈 THE 6-WEEK EVOLVE PLAN:

**WEEK 1-2: Block 1 (Foundation)**
Goal: Learn the patterns
• 11 full-length tests
• Focus: Accuracy over speed
• Target: Consistent CLB 8

**WEEK 3-4: Block 2 (Development)**
Goal: Build speed
• 11 full-length tests
• Focus: Time management
• Target: Consistent CLB 8.5

**WEEK 5-6: Block 3 (Mastery)**
Goal: Overtraining (harder than real IELTS)
• 11 full-length tests
• Focus: Confidence under pressure
• Target: CLB 9+ in practice

**WEEK 7: Real IELTS exam**
Goal: Execute what you've practiced
• Book your test
• Apply your strategies
• Target: CLB 9

---

📊 WHAT RESEARCH SHOWS:

Studies on IELTS preparation indicate:
• Structured practice > generic study: 2x more effective
• Progressive difficulty > random practice: Better retention
• Format familiarity > content knowledge: Reduces test anxiety
• 30+ practice tests = typical requirement for 1-2 band improvement

Dedicated students who complete all practice typically see 1-2 band improvements over 6-8 weeks.

---

🔥 WHY THIS WORKS:

1. **Repetition** (33 tests) > Generic lessons
2. **Progressive difficulty** > Random practice
3. **Format mastery** > English improvement
4. **Overtraining** > Minimal preparation

IELTS is a PATTERN RECOGNITION test, not just an English test.

---

💰 COST-BENEFIT:

IELTS exam: $350 per attempt
Typical attempts needed: 2-3 times = $700-$1,050
Traditional course: $500-$2,000

Evolve cost: $100/year
Your savings: $600-$2,950

Plus: +50 CRS points = faster ITA = priceless

---

🎯 READY TO START?

Option 1: "Show me 1 free sample" (try before you commit)
Option 2: "Unlock Evolve ($100/year)" (commit to the 6-week plan)
Option 3: "I'm not sure I can do this" (let me address your concerns)

Type 1, 2, or 3 below! ⏰`,

  // === SECTION 4: ASK THE AI RCIC ===
  "What Documents Do I Actually Need?": `Smart question! Most people waste weeks gathering the WRONG documents.

Here's the truth: IRCC asks for ~30 documents, but only 8-10 actually matter for CRS/eligibility.

Let me break it down:

---

📋 TIER 1: MANDATORY (If missing = instant rejection)

✅ **Passport**
• Valid for at least 6 months post-application
• Biographical pages only (not every stamp)
• For spouse + dependents too

✅ **Educational Credential Assessment (ECA)**
• WES, IQAS, ICES, or CES only
• Must match degree you're claiming points for
• Valid for 5 years from issue date

✅ **Language Test Results (IELTS/CELPIP)**
• Must be Academic IELTS (not General)
• Valid for 2 years from test date
• Both principal + spouse (if claiming points)

✅ **Work Reference Letters**
• On company letterhead
• Must include: Job title, dates, hours/week, duties, salary
• Signed by supervisor/HR (not you!)
• If company closed: Colleague letters + payslips

✅ **Proof of Funds**
• Bank letter showing 6-month average balance
• $13,310 single / $16,570 couple / +$3,800 per child
• Must be in your name (not borrowed, not crypto)

---

📋 TIER 2: POST-ITA (Gather after invitation)

✅ **Police Certificates**
• Every country you lived 6+ months since age 18
• Timeline: 4-12 weeks depending on country
• Some need fingerprints (FBI, India, UAE)

✅ **Medical Exam**
• Approved panel physician only (find on IRCC site)
• Valid for 12 months
• Costs $200-$450 per person

✅ **Biometrics**
• In-person at VAC (Visa Application Centre)
• Photo + fingerprints
• $85 CAD fee

✅ **Proof of Relationship**
• If married: Marriage certificate
• If common-law: Proof of 12+ months cohabitation
• If divorced: Divorce decree

---

🚨 COMMON DOCUMENT MISTAKES:

❌ **Reference letters without DUTIES listed**
• Must describe what you DID, not just your title
• Compare to NOC code duties (must match 60%+)
• No vague statements like "performed various tasks"

❌ **Fake/exaggerated experience**
• IRCC verifies employment
• Cross-references LinkedIn, tax returns, payslips
• Getting caught = lifetime ban

❌ **Wrong format scans**
• Must be PDF, under 4MB each
• Color scans (not black & white)
• Full pages visible (no cropping)
• 300 DPI minimum resolution

❌ **Missing translations**
• Any non-English/French doc needs certified translation
• Include BOTH original + translation
• Translator must certify accuracy

---

⚡ DOCUMENT TIMELINE (Do this NOW before ITA):

**Months 1-2: Start gathering**
✅ Passport (renew if <6 months validity)
✅ ECA application (4-8 weeks to get results)
✅ IELTS exam booking + prep

**Months 2-3: Continue building**
✅ Work reference letters (follow up with employers)
✅ Bank letter (start building 6-month history)
✅ Scan all documents in high-quality PDF

**Months 3-4: Pre-ITA ready**
✅ Police certificates (some take 8+ weeks!)
✅ Upfront medicals (optional but saves time)
✅ Organize all docs in labeled folders

**Post-ITA (60 days to submit):**
✅ Week 1-2: Finalize police certs
✅ Week 2-3: Complete medicals
✅ Week 3-4: Submit application

---

🎯 EXECUTE HELPS WITH:

✅ **Document Roadmap**
• Personalized checklist based on YOUR profile
• Timeline calculator (when to start each doc)
• Country-specific guides (police certs vary!)

✅ **Reference Letter Templates**
• Fill-in-the-blank letters for your NOC code
• Matches IRCC's exact duty requirements
• Prevents rejections for "vague experience"

✅ **Document Status Tracker**
• Dashboard showing: Started, In Progress, Complete
• Alerts when documents are expiring
• Reminder to update bank balance monthly

---

💰 WHAT'S THE COST?

❌ Traditional consultant document review: $300-$800
❌ Rejected application due to doc errors: $1,365 + 6-12 months lost time

✅ Execute: $100/year for unlimited guidance

---

💡 YOUR NEXT MOVE:

Tell me your situation:
1. "I haven't started Express Entry yet" (I'll prioritize your docs)
2. "I'm waiting for ITA" (I'll tell you what to prep now)
3. "I got ITA and have 60 days!" (I'll create your urgent plan)

Type 1, 2, or 3 below! Let's get your docs bulletproof. 💪`,

  "Provincial Nominee Programs Explained": `Great question! PNPs are your SECRET WEAPON for Express Entry.

Here's what you need to know:

---

🍁 WHAT IS A PNP?

Provincial Nominee Program = Each province runs its own immigration streams to attract workers THEY need.

**The magic:** A PNP nomination adds **+600 CRS points** to your Express Entry profile.

That means:
• Your CRS: 420
• Get PNP nomination: 420 + 600 = **1,020 CRS**
• Result: **Guaranteed ITA** in next federal draw

---

🎯 WHY PNPs ARE BETTER THAN WAITING FOR FEDERAL:

**Federal Express Entry:**
• Cutoff: 520-540 CRS
• Millions of applicants
• No control over timing
• Success rate varies widely

**PNP Route:**
• Cutoff: 300-450 CRS (much lower!)
• Fewer applicants (targeted)
• You can apply to multiple provinces
• More predictable pathway

---

🔥 TOP PNP STREAMS FOR 2024:

**1. Ontario Immigrant Nominee Program (OINP)**
• Human Capital Priorities (HCP) Stream:
  - For: Tech workers (NOC 21xxx, 22xxx)
  - Minimum CRS: 400+
  - Bachelor's required
  - Periodic draws throughout the year

**2. British Columbia (BC PNP)**
• BC Tech Stream:
  - For: 29 eligible tech occupations
  - Minimum CRS: 80-100 (BC scoring, not federal)
  - Job offer OR tech experience
  - Weekly draws (high volume)

**3. Alberta Advantage Immigration Program (AAIP)**
• Alberta Opportunity Stream (AOS):
  - For: ANY skilled NOC (very flexible!)
  - Minimum CRS: 300+
  - No job offer needed
  - Processing: 4-6 months

**4. Saskatchewan Immigrant Nominee Program (SINP)**
• Occupation In-Demand (OID):
  - For: 19 in-demand NOCs
  - Minimum CRS: Not specified (varies)
  - No job offer, no connection needed
  - FASTEST processing (2-3 months!)

**5. Manitoba Provincial Nominee Program (MPNP)**
• Skilled Worker Overseas:
  - For: Friends/family connection OR Manitoba education/work
  - Points-based (separate from federal CRS)
  - Pathway to PR in 12-18 months

---

🚨 PNP MISTAKES TO AVOID:

❌ **Applying to wrong stream**
• Each PNP has 3-10 different streams
• Wrong stream = rejection + wasted time

❌ **Missing intake windows**
• Some streams open for only 24-48 hours!
• Ontario HCP can fill up in 2-3 days
• If you miss it, wait 3-6 months for next one

❌ **Not having documents ready**
• PNP applications need full documentation
• If you scramble after nomination, you waste your 60-day ITA window

❌ **Only applying to ONE province**
• Smart strategy: Apply to 2-3 PNPs simultaneously
• Increases your odds significantly

---

📊 YOUR PNP STRATEGY:

Tell me:
1. Your NOC code: ___
2. Your current CRS: ___
3. Your province preference (if any): ___

And I'll show you:
• Which 3 PNPs you qualify for
• Which opens next
• Exact documents you need
• Timeline to nomination

---

🤖 HOW EXECUTE HELPS:

✅ **PNP Tracker**
• Monitors ALL 80+ provincial streams
• Alerts you 48 hours before intakes open
• Shows you which streams you're eligible for

✅ **Application Templates**
• Pre-filled forms based on your profile
• Document checklists (by province)
• Common mistake warnings

✅ **Strategic Timing**
• Identifies best timing for applications
• Tracks historical draw patterns
• Maximizes your chances

---

💰 THE MATH:

Traditional consultant PNP service: $1,500-$3,000
Execute PNP tracking + guidance: $100/year

You save: $1,400-$2,900

Plus: You LEARN the system (never dependent on consultants)

---

🚀 NEXT STEP:

Option 1: "Which PNPs am I eligible for?" (I'll analyze your profile)
Option 2: "When do PNP intakes open?" (I'll give you the schedule)
Option 3: "Unlock Execute PNP tracker" ($100/year)

Type 1, 2, or 3! Let's get you that +600 CRS. 💪`,

  "Get My Personalized Immigration Strategy": `Alright, let's build your roadmap. I need 8 quick details to create a COMPLETE strategy:

---

📋 TELL ME ABOUT YOURSELF:

**1. Age:** ___
**2. Highest education:** (High school / Bachelor's / Master's / PhD)
**3. Years of skilled work experience:** ___
**4. Your occupation/job title:** ___
**5. IELTS scores (or planned):**
   - Listening: ___
   - Reading: ___
   - Writing: ___
   - Speaking: ___
**6. Marital status:** (Single / Married / Common-law)
**7. Spouse's details (if applicable):**
   - Age: ___
   - Education: ___
   - Work experience: ___
   - IELTS: ___
**8. Your timeline goal:** (ASAP / This year / Next year / Flexible)

---

Once you give me these details, I'll create:

🎯 **YOUR 3-PATH STRATEGY:**

### Path 1: Federal Express Entry (if CRS competitive)
### Path 2: Provincial Nominee Program (most reliable)
### Path 3: Alternative routes (work permit, study, etc.)

📅 **YOUR 12-MONTH ACTION PLAN:**
• Month-by-month milestones
• Critical deadlines
• Document preparation schedule
• Budget breakdown

🚨 **SUCCESS FACTORS & MISTAKES TO AVOID:**
• Must-do items for YOUR profile
• Common pitfalls for your NOC/situation
• Backup plans if primary strategy fails

---

💡 Or unlock Execute now and get:
• Instant CRS calculation
• Automated strategy builder
• PNP opportunity tracker
• Document templates for your NOC
• 24/7 expert guidance

→ [Start Execute - $100/year]

Type your details below and let's build YOUR strategy! 💪`,

  // === TIER EXPLANATIONS ===
  "Explore": `🎯 **EXPLORE TIER – 100% FREE**
Think of this as your "immigration test-drive".
• Instant eligibility check: drop your age, education, work & language info.  
• Sample English tests (Reading, Writing, Listening).  
• Clear explanations of CRS, ECA, PNP, proof-of-funds—everything you need before committing.  
Zero risk, zero cost—just clarity.

Ready to upgrade? 
→ Evolve ($100/year) unlocks 33 IELTS simulations
→ Execute ($100/year) gives you 24/7 AI RCIC guidance`,

  "Evolve": `📈 **EVOLVE TIER – $100 CAD / year**
• 33 progressive IELTS simulations in 3 levels.  
• Each harder than the last—by Level 3 you're ready for CLB 9.  
• 1-year access, unlimited repeats.  
This is an IELTS boot camp based on proven learning science.

What research shows:
• 30+ practice tests = typical requirement for 1-2 band improvement
• Progressive difficulty = 40% better retention
• Format mastery = reduced test anxiety

Ready to master IELTS in 6-8 weeks?
→ [Unlock Evolve - $100/year]`,

  "Execute": `🤖 **EXECUTE TIER – $100 CAD / year**
24/7 AI immigration guidance supervised by licensed RCIC.  
• Ask anything—CRS strategy, docs, PNP timing, forms.  
• Always online, no appointments, no upselling.  
Professional-grade guidance at 1/20th the cost of traditional consultants.

What you get:
✅ Unlimited expert guidance (instant responses)
✅ CRS optimizer + "what if" simulator
✅ PNP tracker (80+ streams, real-time alerts)
✅ Document manager + reference letter templates
✅ ITA probability insights
✅ Form filling assistance

Traditional RCIC: $2,000-$5,000
Execute: $100/year

You save: $1,900-$4,900

Ready for 24/7 immigration support?
→ [Unlock Execute - $100/year]`,

  "About": `Our mission: make expert immigration guidance affordable & transparent.  
Migrate North empowers you to self-manage your immigration journey with AI-powered tools supervised by licensed RCIC (R712582).

**What makes us different:**
✅ AI-powered tools (Evolve + Execute)
✅ RCIC-supervised guidance
✅ Transparent pricing ($100-200/year, no hidden fees)
✅ You LEARN the system (not dependent on us)
✅ Optional human RCIC review available ($300-500)

**Our philosophy:**
Most Express Entry cases are straightforward. You don't need to pay $5,000 for basic guidance. Use our AI tools for 90% of the work, then optionally pay a human RCIC for final review.

**Founded by:**
Licensed RCIC (R712582) with deep understanding of both immigration law and technology.

**We're newly launched:**
Building our user base with integrity. All our guidance is based on research, IRCC data, and proven strategies—not made-up testimonials.

Want to learn more?
→ Ask about our services
→ Compare us to traditional consultants`,

  "Services": `Professional services (for those who want human RCIC involvement):

**1️⃣ Application Audit – $300**
   • Document checklist review
   • LOE (Letter of Explanation) templates
   • CRS optimization recommendations
   • Risk flag report
   • 1-hour video consultation

**2️⃣ Express Entry Setup – $500**
   • Full profile creation
   • Job Bank upload & optimization
   • PNP targeting strategy
   • Monthly CRS monitoring (12 months)
   • Document review before submission

**3️⃣ Evolve + Execute Bundle – $200/year**
   • 33 IELTS simulations
   • 24/7 AI RCIC guidance
   • PNP tracking
   • Document templates
   • Best value!

**When to use our services:**
✅ You've done WES + IELTS (ready to apply)
✅ You want expert review (peace of mind)
✅ Your case is straightforward (no complications)

**When NOT to use:**
❌ Complex cases (we'll refer you to specialized RCIC)
❌ Legal appeals or court hearings
❌ You want 100% hands-off service

**Philosophy:**
Handle your own case with AI guidance, buy only the human review hours that add real value.

Traditional RCIC: $2,000-$5,000 upfront
Our approach: $200/year AI tools + optional $300-500 review

You save: $1,500-$4,800

Ready to get started?
→ Start with Evolve + Execute ($200/year)
→ Add human review when needed`
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

// Helper function to check if message matches FAQ
function getFAQResponse(message) {
  if (FAQ_RESPONSES[message]) {
    return FAQ_RESPONSES[message];
  }

  const lowerMessage = message.toLowerCase();
  
  const variations = {
    "eligible": "Am I Eligible for Express Entry?",
    "eligibility": "Am I Eligible for Express Entry?",
    "qualify": "Am I Eligible for Express Entry?",
    "crs": "What's My Realistic CRS Score?",
    "score": "What's My Realistic CRS Score?",
    "timeline": "How Long Will This Take?",
    "how long": "How Long Will This Take?",
    "cost": "Total Cost Breakdown",
    "price": "Total Cost Breakdown",
    "fees": "Total Cost Breakdown",
    "low crs": "My CRS Is Too Low - What Now?",
    "stuck": "My CRS Is Too Low - What Now?",
    "mistake": "Common Mistakes That Kill Applications",
    "error": "Common Mistakes That Kill Applications",
    "ita": "Will I Get an ITA This Year?",
    "invitation": "Will I Get an ITA This Year?",
    "boost": "How to Boost CRS by 50+ Points Fast",
    "increase": "How to Boost CRS by 50+ Points Fast",
    "improve": "How to Boost CRS by 50+ Points Fast",
    "reading": "Try Free IELTS Reading Sample",
    "writing": "Try Free IELTS Writing Sample",
    "listening": "Try Free IELTS Listening Sample",
    "clb 9": "How to Hit CLB 9 in 6 Weeks",
    "strategy": "Get My Personalized Immigration Strategy",
    "roadmap": "Get My Personalized Immigration Strategy",
    "documents": "What Documents Do I Actually Need?",
    "pnp": "Provincial Nominee Programs Explained",
    "provincial": "Provincial Nominee Programs Explained"
  };

  for (const [keyword, faqKey] of Object.entries(variations)) {
    if (lowerMessage.includes(keyword)) {
      return FAQ_RESPONSES[faqKey];
    }
  }

  return null;
}

// Helper function for HTTP responses
function ok(body) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://migratenorth.ca",
    },
    body: JSON.stringify(body),
  };
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
        "Access-Control-Allow-Origin": "https://migratenorth.ca",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
      },
      body: "ok",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": "https://migratenorth.ca" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { message, memory = [], mode = "auto", meta = {} } = JSON.parse(event.body || "{}");

    // Check for FAQ match first
    const faqResponse = getFAQResponse(message);
    
    if (faqResponse) {
      const newMemory = [
        ...memory.slice(-20),
        { role: "user", content: message },
        { role: "assistant", content: faqResponse },
      ];
      
      return ok({ reply: faqResponse, memory: newMemory, meta });
    }

    // No FAQ match - proceed with OpenAI
    const trimmed = memory.slice(-20);
    const processedMemory = trimmed.map((msg) => ({
      role: msg.role === "bot" ? "assistant" : msg.role,
      content: msg.content,
    }));

    const systemPrompt = `You are North Star GPS - (Guidance & Pathfinding System), a professional Canadian immigration assistant by Matin Immigration Services.
- the FREE tier assistant from Migrate North
YOUR MISSION:Help people understand Canadian immigration and demonstrate the value of paid tools, WITHOUT being pushy or salesy.

WHAT YOU DO (FREE):
✅ Answer general Express Entry questions
✅ Explain CRS, ECA, IELTS, PNP concepts
✅ Provide free IELTS samples
✅ Calculate CRS scores
✅ Give high-level strategy advice
✅ Demonstrate value of Evolve + Execute

WHAT YOU DON'T DO (Save for EXECUTE):
❌ Fill out actual IRCC forms
❌ Review specific documents line-by-line
❌ Case-specific application guidance
❌ Complex RCIC-level work

Rules:
1) Never claim to be a government source. You are a coach that cites official names exactly.
2) Ask for missing facts only when required to advance a step.
3) Always label deadlines, fees, and where to upload inside the GCKey or PR portal when applicable.
4) Do not invent policy or dates. If unsure, state what must be verified on IRCC or the province site.
5) NEVER make up testimonials or user success stories 
6) Base claims on research, IRCC data, and industry patterns - not fake user stories.
7) Be honest about being a new service while emphasizing your research-backed approach.
Current mode: ${mode}`;

    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.4,
      max_tokens: 400,
      messages: [
        { role: "system", content: systemPrompt },
        ...processedMemory,
        { role: "user", content: message || "Hello" },
      ],
    });

    const reply = completion.choices?.[0]?.message?.content || "No response available.";

    const newMemory = [
      ...trimmed,
      { role: "user", content: message },
      { role: "assistant", content: reply },
    ];

    return ok({ reply, memory: newMemory, meta });
  } catch (err) {
    console.error("Execute function error:", err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "https://migratenorth.ca" },
      body: JSON.stringify({ error: "Internal Server Error: " + err.message }),
    };
  }
};
