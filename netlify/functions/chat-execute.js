import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://migratenorth.ca",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Max-Age": "86400"
      },
      body: "ok"
    };
  }

  // Allow POST only
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": "https://migratenorth.ca" },
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    const userText = (payload.message || "").toLowerCase();
    const memory = payload.memory || [];
    const timestamp = payload.timestamp || Date.now();

    // Response variable
    let reply = "";

    // ------------------------------------------------------
    // 1. Pathway and CRS logic
    // ------------------------------------------------------

    if (userText.includes("strongest pathway")) {
      reply = "Your strongest pathway is Express Entry under FSW. I will refine this as your IELTS, ECA, and work history update.";
    }

    else if (userText.includes("clb 9")) {
      reply = "CLB 9 increases your CRS significantly. Your new estimated range is 450 to 465 depending on your work history and spousal details.";
    }

    else if (userText.includes("non accompanying")) {
      reply = "With your spouse listed as non accompanying your CRS may increase by 10 to 20 points depending on your education and experience.";
    }

    else if (userText.includes("postgraduate diploma")) {
      reply = "A postgraduate diploma can add 15 to 30 CRS points. The value depends on whether it becomes a second credential in your profile.";
    }

    else if (userText.includes("highest pnp chances")) {
      reply = "Your strongest PNP chances are in British Columbia and Nova Scotia based on healthcare aligned programs and your NOC category.";
    }

    else if (userText.includes("blocking my express entry")) {
      reply = "Your main blockers are language scores and missing documents. Improving speaking and writing and completing your experience letters will remove the main issues.";
    }

    // ------------------------------------------------------
    // 2. Licensing and profession specific logic
    // ------------------------------------------------------

    else if (userText.includes("nursing licensing roadmap")) {
      reply = "Your nursing licensing steps are NNAS submission, identity verification, advisory report, NCLEX registration, and provincial registration. I can guide each step.";
    }

    else if (userText.includes("explain nclex")) {
      reply = "NCLEX registration requires creating an NCSBN account, registering with Pearson VUE, completing identity steps, receiving Authorization to Test, and booking the exam.";
    }

    else if (userText.includes("ontario") && userText.includes("british columbia") && userText.includes("nursing")) {
      reply = "Ontario uses NNAS and the Supervised Practice Experience Program. British Columbia uses its own assessment model and often moves faster. BC is usually more direct for internationally educated nurses.";
    }

    else if (userText.includes("supervised practice experience program")) {
      reply = "Eligibility for the Ontario SPEP depends on your NNAS outcome, English scores, and documentation completeness. I can check this once your profile is updated.";
    }

    else if (userText.includes("nnas") && userText.includes("documents")) {
      reply = "NNAS requires identity documents, transcripts, registration verification forms, and employment verification. Each document must be sent directly from the issuing source.";
    }

    else if (userText.includes("physician licensing roadmap")) {
      reply = "Physician licensing includes MCCQE exams, credential verification, practice ready assessment programs, and provincial registration. Your path depends on your specialty.";
    }

    else if (userText.includes("medical exams")) {
      reply = "Canadian medical exams include MCCQE one and professional evaluations for regulated health occupations. I can verify which exams apply to your situation.";
    }

    else if (userText.includes("pharmacist licensing roadmap")) {
      reply = "Pharmacist licensing involves PEBC evaluation, the evaluation exam, the qualifying exam, practical training, and provincial registration.";
    }

    else if (userText.includes("pebc evaluation")) {
      reply = "The PEBC evaluation and qualifying exams measure academic and professional readiness. I can explain fees, documents, and timelines.";
    }

    else if (userText.includes("lab technologist licensing roadmap")) {
      reply = "Lab technologist licensing requires CSMLS credentialing, exam registration, and provincial certification when applicable.";
    }

    else if (userText.includes("csmls")) {
      reply = "CSMLS credentialing requires academic assessment, competency confirmation, and passing the certification exam. I can outline the sequence.";
    }

    else if (userText.includes("dentist licensing roadmap")) {
      reply = "Dentist licensing requires NDEB credential verification, the equivalency process, assessment exams, and provincial registration.";
    }

    else if (userText.includes("ndeb")) {
      reply = "The NDEB equivalency process involves document verification and passing the required assessment exams. I can list the steps for you.";
    }

    else if (userText.includes("physiotherapist licensing roadmap")) {
      reply = "Physiotherapist licensing involves credentialing through the CAPR, the competency exam, and provincial registration.";
    }

    else if (userText.includes("physiotherapy credentialing")) {
      reply = "Physiotherapy credentialing requires academic documentation and competency evaluation. I can check eligibility when you share your background.";
    }

    // ------------------------------------------------------
    // 3. Document generation and readiness
    // ------------------------------------------------------

    else if (userText.includes("generate") && userText.includes("experience letter")) {
      reply = "Your experience letter template is ready. Add employer details, NOC aligned duties, and exact employment dates.";
    }

    else if (userText.includes("generate") && userText.includes("resume")) {
      reply = "Your Canadian style resume template is ready with a professional summary, Canadian formatting, and NOC aligned duties.";
    }

    else if (userText.includes("missing") && userText.includes("express entry")) {
      reply = "Missing documents include experience letters, proof of funds, and your passport bio page. I will adjust your readiness score as you upload them.";
    }

    else if (userText.includes("proof of funds")) {
      reply = "I can check your proof of funds against IRCC requirements once you share your balance and family size.";
    }

    else if (userText.includes("collect") && userText.includes("this month")) {
      reply = "You need to collect experience letters, updated bank statements, a passport bio page, and employer verification letters. I can track each item.";
    }

    // ------------------------------------------------------
    // 4. Progress and planning
    // ------------------------------------------------------

    else if (userText.includes("next three steps")) {
      reply = "Your next three steps are, 1) order your ECA, 2) generate two employer experience letters, 3) collect your passport bio page.";
    }

    else if (userText.includes("highest impact task")) {
      reply = "Your highest impact task is improving IELTS speaking and writing. This has the strongest effect on your CRS score.";
    }

    else if (userText.includes("30 day immigration plan")) {
      reply = "Your 30 day plan includes, complete your ECA payment, generate experience letters, start NNAS verification, and prepare proof of funds.";
    }

    else if (userText.includes("compare express entry and pnp")) {
      reply = "Express Entry is faster when your CRS is competitive. PNP adds stability if your CRS is low. I can compare both based on your data.";
    }

    else if (userText.includes("fastest pathway")) {
      reply = "Your fastest pathway is Express Entry under FSW. PNP is an option but adds more time.";
    }

    else if (userText.includes("one year") && userText.includes("work experience")) {
      reply = "One more year of skilled work experience can increase your CRS by about 35 points. It also improves PNP eligibility.";
    }

    // ------------------------------------------------------
    // 5. Profile updates
    // ------------------------------------------------------

    else if (userText.includes("update my profile") && userText.includes("work experience")) {
      reply = "Your work experience has been updated. You now need new experience letters that match this change. CRS will be recalculated.";
    }

    else if (userText.includes("update my profile") && userText.includes("ielts")) {
      reply = "Your IELTS scores are updated. Your CRS and pathway recommendations will adjust accordingly.";
    }

    else if (userText.includes("update my profile") && userText.includes("spouse")) {
      reply = "Your spousal information is updated. CRS and pathway calculations will be adjusted.";
    }

    // ------------------------------------------------------
    // 6. Eligibility checks
    // ------------------------------------------------------

    else if (userText.includes("eligible") && userText.includes("express entry")) {
      reply = "You meet most Express Entry requirements. Remaining gaps are language improvement and document readiness.";
    }

    else if (userText.includes("eligible") && userText.includes("pnp")) {
      reply = "Your PNP eligibility is strongest in BC and Nova Scotia. I can review occupational demand once your NOC is confirmed.";
    }

    else if (userText.includes("this year")) {
      reply = "Immigration this year is possible if you complete your documents and increase your CRS. I can plan the improvements for you.";
    }

    // ------------------------------------------------------
    // 7. Default fallback
    // ------------------------------------------------------

    else {
      reply = "I logged your request and will route it to the correct pathway or module.";
    }

    // ------------------------------------------------------
    // Send response back with memory
    // ------------------------------------------------------

    const newMemory = [
      ...memory,
      { role: "user", content: payload.message },
      { role: "assistant", content: reply }
    ];

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://migratenorth.ca"
      },
      body: JSON.stringify({
        reply: reply,
        memory: newMemory,
        thinking: "Processing your request"
      })
    };

  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "https://migratenorth.ca"
      },
      body: JSON.stringify({ error: "Internal Server Error: " + err.message })
    };
  }
};

