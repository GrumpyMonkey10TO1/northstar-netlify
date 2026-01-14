// chat-execute.js - Enhanced with Master Plan, LOE Builder, and Risk Review
// Replace your existing chat-execute function with this

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
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders(), body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders(), body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const type = body.type || 'chat';

    // Helper function for LLM calls
    async function callLLM({ system, user, temperature = 0.3 }) {
      const resp = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        temperature: temperature,
        max_tokens: 2000,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user }
        ]
      });
      return resp.choices?.[0]?.message?.content?.trim() || '';
    }

    // =========================================================================
    // MASTER PLAN GENERATOR
    // =========================================================================
    if (type === 'master_plan') {
      const { pathway, crs, language, education, work, context } = body;

      const system = `You are an expert Canadian immigration consultant creating personalized immigration master plans.

Your output must be structured, actionable, and professional. Use clear headings and bullet points.
Never give legal guarantees. Always recommend professional consultation for complex cases.
Be specific about timelines, requirements, and next steps.`;

      const user = `Create a comprehensive Immigration Master Plan based on this client profile:

TARGET PATHWAY: ${pathway || 'Not specified'}
CRS SCORE: ${crs || 'Unknown'}
LANGUAGE TEST: ${language || 'Not provided'}
EDUCATION/ECA: ${education || 'Not provided'}
WORK EXPERIENCE: ${work || 'Not provided'}
ADDITIONAL CONTEXT: ${context || 'None'}

Generate a structured plan with these sections:

1. PROFILE SNAPSHOT
   - Summary of current eligibility position
   - Identified pathway fit

2. CRS ANALYSIS
   - Current or estimated score breakdown
   - Points improvement opportunities
   - Target score recommendation

3. PATHWAY STRATEGY
   - Primary pathway recommendation
   - Backup provincial options (top 2-3 PNPs)
   - Category-based draw eligibility

4. DOCUMENT CHECKLIST
   - Required documents with priority order
   - Missing items flagged
   - Estimated preparation time

5. 90-DAY ACTION PLAN
   - Week 1-2: Immediate actions
   - Week 3-6: Core preparation
   - Week 7-12: Final steps

6. RISK FLAGS
   - Potential issues identified
   - Mitigation recommendations

7. TIMELINE PROJECTION
   - Profile submission target
   - ITA probability assessment
   - PR landing estimate

Keep the plan practical and focused. Maximum 800 words.`;

      const plan = await callLLM({ system, user, temperature: 0.3 });

      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({ plan })
      };
    }

    // =========================================================================
    // LOE (LETTER OF EXPLANATION) BUILDER
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

      const system = `You are an expert immigration document writer. Create formal Letters of Explanation for Canadian immigration applications.

Your letters must be:
- Professional and formal in tone
- Clear and concise
- Honest and factual
- Properly structured with date, addressee, subject line, body, and signature block
- Free of emotional language or pleading

Never fabricate facts. Use only the information provided. If information is missing, note it should be added.`;

      const user = `Create a formal Letter of Explanation for a Canadian immigration application.

LETTER TYPE: ${letterType}
APPLICANT NAME: ${applicantName || '[APPLICANT NAME]'}
APPLICATION NUMBER: ${applicationNumber || '[APPLICATION NUMBER]'}

SITUATION TO EXPLAIN:
${details}

Generate a professional letter with:
1. Current date
2. Addressed to: Immigration, Refugees and Citizenship Canada
3. Subject line with application number and letter purpose
4. Clear introduction stating the purpose
5. Body paragraphs explaining the situation chronologically
6. Supporting evidence references (if mentioned)
7. Professional closing
8. Signature block for the applicant

The letter should be ready to print and submit. Use formal language throughout.`;

      const loe = await callLLM({ system, user, temperature: 0.2 });

      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({ loe })
      };
    }

    // =========================================================================
    // OFFICER RISK REVIEW
    // =========================================================================
    if (type === 'risk_review') {
      const { crs, language, eca, funds, work, concerns, stage } = body;

      const system = `You are a senior immigration file reviewer analyzing applications from an officer's perspective.

Your review must be:
- Objective and analytical
- Based on actual IRCC assessment criteria
- Structured with clear risk levels (HIGH / MEDIUM / LOW)
- Actionable with specific remediation steps

Never sugarcoat issues. Be direct about weaknesses. The goal is to help the applicant strengthen their file before submission.`;

      const user = `Conduct an Officer Risk Review for this immigration file:

FILE STATUS: ${stage || 'In preparation'}

PROFILE DATA:
- CRS Score: ${crs || 'Not provided'}
- Language Test: ${language || 'Not provided'}
- ECA Status: ${eca || 'Not specified'}
- Proof of Funds: ${funds || 'Not specified'}
- Work Documentation: ${work || 'Not specified'}

KNOWN CONCERNS:
${concerns || 'None disclosed'}

Generate a risk assessment report with:

OFFICER RISK REVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. FILE SNAPSHOT
   Brief assessment of overall file strength

2. HIGH RISK ITEMS 🔴
   Issues that could result in refusal
   (If none, state "No high risk items identified")

3. MEDIUM RISK ITEMS 🟡
   Issues that could trigger additional requests or delays

4. LOW RISK ITEMS 🟢
   Minor gaps that should be addressed

5. DOCUMENTATION GAPS
   Missing or weak evidence identified

6. REMEDIATION CHECKLIST
   Specific actions to strengthen the file (max 6 items)
   Prioritized by impact

7. SUBMISSION READINESS
   Overall assessment: READY / NEEDS WORK / NOT READY
   With brief justification

Be thorough but concise. Focus on actionable findings.`;

      const review = await callLLM({ system, user, temperature: 0.25 });

      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({ review })
      };
    }

    // =========================================================================
    // DEFAULT CHAT HANDLER
    // =========================================================================
    if (type === 'chat') {
      const msg = body.message || '';
      const history = Array.isArray(body.history) ? body.history : [];

      const system = `You are Execute, an expert Canadian immigration pathway assistant for Migrate North.

Your role:
- Guide users through Express Entry, PNP, and immigration processes
- Explain forms (IMM 0008, 5669, 5406, etc.)
- Help with CRS calculations and NOC codes
- Provide document preparation guidance
- Answer immigration questions accurately

Your style:
- Professional but approachable
- Structured responses with clear steps
- Use bullet points for lists
- Flag when professional consultation is recommended
- Never guarantee outcomes

You have access to three artifact tools users can generate:
- Immigration Master Plan (📄 My Plan button)
- Letter of Explanation Builder (📝 LOE button)
- Officer Risk Review (🛡️ Risk button)

Mention these tools when relevant to help users get the most from Execute.`;

      const historyText = history.slice(-8).map(h => `${h.role.toUpperCase()}: ${h.text}`).join('\n');

      const user = `User message: ${msg}

Recent conversation:
${historyText || 'No prior context'}`;

      const message = await callLLM({ system, user, temperature: 0.4 });

      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({ message })
      };
    }

    // Unknown type
    return {
      statusCode: 400,
      headers: corsHeaders(),
      body: JSON.stringify({ error: 'Unknown request type: ' + type })
    };

  } catch (error) {
    console.error('Execute function error:', error);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: 'Internal server error', details: error.message })
    };
  }
};
