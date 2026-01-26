// chat-execute.js - Full Execute Engine with 7 Artifacts
// North Star GPS - Immigration File Building Assistant

const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders(), body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders(), body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const type = body.type || 'chat';

    async function callLLM({ system, user, temperature = 0.3 }) {
      const resp = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        temperature: temperature,
        max_tokens: 2500,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user }
        ]
      });
      return resp.choices?.[0]?.message?.content?.trim() || '';
    }

    // =========================================================================
    // MASTER PLAN
    // =========================================================================
    if (type === 'master_plan') {
      const { pathway, crs, language, education, work, context } = body;

      const system = `You are North Star GPS, an expert Canadian immigration file building assistant for Migrate North Academy.
You create personalized immigration master plans.
Output must be structured, actionable, and professional. Use clear headings.
Never give legal guarantees. Be specific about timelines and requirements.`;

      const user = `Create a comprehensive Immigration Master Plan:

TARGET PATHWAY: ${pathway || 'Not specified'}
CRS SCORE: ${crs || 'Unknown'}
LANGUAGE TEST: ${language || 'Not provided'}
EDUCATION/ECA: ${education || 'Not provided'}
WORK EXPERIENCE: ${work || 'Not provided'}
ADDITIONAL: ${context || 'None'}

Include these sections:
1. PROFILE SNAPSHOT - Current eligibility assessment
2. CRS ANALYSIS - Score breakdown and improvement opportunities
3. PATHWAY STRATEGY - Primary + backup PNP routes
4. DOCUMENT CHECKLIST - Required docs with priority
5. 90-DAY ACTION PLAN - Week-by-week breakdown
6. RISK FLAGS - Potential issues and mitigation
7. TIMELINE PROJECTION - Realistic milestones

Keep under 800 words. Be practical.`;

      const plan = await callLLM({ system, user, temperature: 0.3 });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ plan }) };
    }

    // =========================================================================
    // LOE (LETTER OF EXPLANATION)
    // =========================================================================
    if (type === 'loe') {
      const { loeType, applicantName, applicationNumber, details } = body;

      const loeTypeMap = {
        'employment-gap': 'Employment Gap',
        'proof-of-funds': 'Source of Funds',
        'travel-history': 'Travel History',
        'education-gap': 'Education Gap',
        'relationship': 'Relationship',
        'name-discrepancy': 'Name Discrepancy',
        'other': 'General Explanation'
      };

      const letterType = loeTypeMap[loeType] || 'General Explanation';

      const system = `You are North Star GPS, an expert immigration document writer for Migrate North Academy.
You create formal Letters of Explanation for Canadian immigration applications.
Letters must be professional, formal, clear, and properly structured.
Never fabricate facts. Use only provided information.`;

      const user = `Create a formal Letter of Explanation:

LETTER TYPE: ${letterType}
APPLICANT NAME: ${applicantName || '[APPLICANT NAME]'}
APPLICATION NUMBER: ${applicationNumber || '[APPLICATION NUMBER]'}

SITUATION:
${details}

Include:
- Current date
- Addressed to: Immigration, Refugees and Citizenship Canada
- Subject line with application number
- Clear introduction
- Chronological explanation
- Supporting evidence references
- Professional closing
- Signature block

Ready to print and submit.`;

      const loe = await callLLM({ system, user, temperature: 0.2 });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ loe }) };
    }

    // =========================================================================
    // OFFICER RISK REVIEW
    // =========================================================================
    if (type === 'risk_review') {
      const { crs, language, eca, funds, work, concerns, stage } = body;

      const system = `You are North Star GPS, a senior immigration file reviewer for Migrate North Academy.
You analyze applications from an officer's perspective.
Be objective, analytical, and direct about weaknesses.
Use HIGH / MEDIUM / LOW risk levels.
Provide actionable remediation steps.`;

      const user = `Conduct an Officer Risk Review:

FILE STATUS: ${stage || 'In preparation'}
CRS: ${crs || 'Not provided'}
LANGUAGE: ${language || 'Not provided'}
ECA: ${eca || 'Not specified'}
FUNDS: ${funds || 'Not specified'}
WORK DOCS: ${work || 'Not specified'}
KNOWN CONCERNS: ${concerns || 'None disclosed'}

Output format:

OFFICER RISK REVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. FILE SNAPSHOT
2. HIGH RISK ITEMS 🔴 (refusal risks)
3. MEDIUM RISK ITEMS 🟡 (delay risks)
4. LOW RISK ITEMS 🟢 (minor gaps)
5. DOCUMENTATION GAPS
6. REMEDIATION CHECKLIST (max 6 items)
7. SUBMISSION READINESS: READY / NEEDS WORK / NOT READY`;

      const review = await callLLM({ system, user, temperature: 0.25 });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ review }) };
    }

    // =========================================================================
    // SUBMISSION PACK
    // =========================================================================
    if (type === 'submission_pack') {
      const { pathway, family, notes, auditLog } = body;

      const pathwayDocs = {
        'FSW': ['ECA', 'Language test', 'Proof of funds', 'Work reference letters', 'Police certificates', 'Medical exam'],
        'CEC': ['Language test', 'Work reference letters', 'Police certificates', 'Medical exam'],
        'FST': ['Language test', 'Trade certification', 'Work reference letters', 'Police certificates', 'Medical exam'],
        'PNP': ['ECA', 'Language test', 'PNP nomination certificate', 'Work reference letters', 'Police certificates', 'Medical exam']
      };

      const familyDocs = {
        'single': [],
        'married-no-kids': ['Spouse passport', 'Marriage certificate', 'Spouse ECA (if applicable)', 'Spouse language test (if applicable)'],
        'married-kids': ['Spouse passport', 'Marriage certificate', 'Spouse ECA', 'Spouse language test', 'Children birth certificates', 'Children passports', 'Custody documents (if applicable)'],
        'single-kids': ['Children birth certificates', 'Children passports', 'Custody documents', 'Consent letter from other parent']
      };

      const baseDocs = pathwayDocs[pathway] || pathwayDocs['FSW'];
      const familyAddons = familyDocs[family] || [];
      const allDocs = [...baseDocs, ...familyAddons];

      const actionsPerformed = (auditLog || []).map(a => `• ${a.type} (${a.time})`).join('\n') || 'No actions logged yet';

      const system = `You are North Star GPS, an immigration submission specialist for Migrate North Academy.
You create final document packs for Canadian immigration applications.
Be thorough and specific about upload order and portal locations.`;

      const user = `Create a Submission Pack for ${pathway} pathway:

FAMILY STATUS: ${family}
ADDITIONAL NOTES: ${notes || 'None'}

FILE HISTORY:
${actionsPerformed}

REQUIRED DOCUMENTS:
${allDocs.map((d, i) => `${i + 1}. ${d}`).join('\n')}

Generate:

SUBMISSION PACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PRE-SUBMISSION CHECKLIST
   Final verification items before upload

2. DOCUMENT UPLOAD ORDER
   Exact sequence for IRCC portal (with section names)

3. PORTAL NAVIGATION MAP
   Where each document goes in the portal

4. FORM COMPLETION ORDER
   IMM forms in correct sequence

5. COMMON MISTAKES TO AVOID
   Top 5 rejection reasons for this pathway

6. FINAL VERIFICATION
   Last checks before clicking submit

7. POST-SUBMISSION STEPS
   What to expect and timeline`;

      const pack = await callLLM({ system, user, temperature: 0.3 });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ pack }) };
    }

    // =========================================================================
    // DEFAULT CHAT
    // =========================================================================
    if (type === 'chat') {
      const msg = body.message || '';
      const history = Array.isArray(body.history) ? body.history : [];

      const system = `You are North Star GPS, the immigration file building assistant for Migrate North Academy, powered by Matin Immigration Services (RCIC #R712582).

YOUR ROLE:
- Guide users through Express Entry, PNP, and immigration file preparation
- Explain forms (IMM 0008, 5669, 5406, etc.)
- Help with CRS calculations and NOC codes
- Provide document preparation guidance
- Help users build their immigration file step by step

YOUR STYLE:
- Professional but approachable
- Speak in first person ("I can help you with...", "I recommend...")
- Structured responses with clear steps
- Flag when professional consultation is recommended
- Never guarantee outcomes

TOOLS AVAILABLE:
Users have access to these file building tools - mention them when relevant:
📄 Plan - Immigration Master Plan
📝 LOE - Letter of Explanation Builder
🛡️ Risk - Officer Risk Review
💰 Funds - Proof of Funds Analyzer
📊 CRS - CRS Stability Simulator
📦 Pack - Submission Pack Generator

When users ask about these, explain that I can generate these documents for them using the tools panel.`;

      const historyText = history.slice(-8).map(h => `${h.role.toUpperCase()}: ${h.text}`).join('\n');

      const user = `User: ${msg}

Context:
${historyText || 'No prior context'}`;

      const message = await callLLM({ system, user, temperature: 0.4 });
      return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ message }) };
    }

    return { statusCode: 400, headers: corsHeaders(), body: JSON.stringify({ error: 'Unknown type: ' + type }) };

  } catch (error) {
    console.error('Execute error:', error);
    return { statusCode: 500, headers: corsHeaders(), body: JSON.stringify({ error: 'Server error', details: error.message }) };
  }
};
