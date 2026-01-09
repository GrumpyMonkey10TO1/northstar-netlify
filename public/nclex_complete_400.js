/**
 * NCLEX Complete Question Bank v2.0
 * 400 High-Yield Questions for NCLEX-RN Preparation
 * 
 * Categories (8 Total):
 * 1. Pharmacology & Parenteral Therapies (50 questions)
 * 2. Prioritization & Delegation (50 questions)
 * 3. Safety & Infection Control (50 questions)
 * 4. Lab Values & Vital Signs (50 questions)
 * 5. Fundamentals of Nursing (50 questions)
 * 6. Medical-Surgical Nursing (50 questions)
 * 7. Maternity & Newborn (50 questions)
 * 8. Pediatric Nursing (50 questions)
 * 
 * For Migrate North Academy - Elevate Platform
 */

var NCLEX_BANK = 
{
  "pharmacology": {
    "name": "Pharmacology & Parenteral Therapies",
    "icon": "\ud83d\udc8a",
    "weight": "12-18%",
    "questionCount": 50,
    "questions": [
      {
        "id": "PHARM-001",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Medication Administration",
        "question": "Before administering digoxin, the nurse should assess:",
        "options": [
          "A. Blood pressure",
          "B. Apical pulse for one full minute",
          "C. Respiratory rate",
          "D. Temperature"
        ],
        "answer": "B",
        "rationale": "Assess apical pulse for one full minute before digoxin. Hold if <60 bpm in adults."
      },
      {
        "id": "PHARM-002",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Medication Administration",
        "question": "Warfarin therapeutic effect monitored by:",
        "options": [
          "A. aPTT",
          "B. PT/INR",
          "C. Platelet count",
          "D. Hemoglobin"
        ],
        "answer": "B",
        "rationale": "PT/INR monitors warfarin. Therapeutic INR 2-3. aPTT monitors heparin."
      },
      {
        "id": "PHARM-003",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Medication Administration",
        "question": "IV vancomycin causes flushing, pruritus of face/neck/chest. Priority action:",
        "options": [
          "A. Administer epinephrine",
          "B. Stop infusion, notify provider",
          "C. Slow the infusion rate",
          "D. Apply cool compresses"
        ],
        "answer": "C",
        "rationale": "Red Man Syndrome is rate-related, not allergy. Slow infusion first."
      },
      {
        "id": "PHARM-004",
        "type": "sata",
        "difficulty": "medium",
        "topic": "Medication Administration",
        "question": "Levothyroxine teaching includes: SELECT ALL THAT APPLY.",
        "options": [
          "A. Take on empty stomach",
          "B. Take with calcium",
          "C. Take same time daily",
          "D. Report rapid heart rate",
          "E. Effects in 24-48 hours",
          "F. Avoid antacids"
        ],
        "answer": [
          "A",
          "C",
          "D",
          "F"
        ],
        "rationale": "Empty stomach, same time, report tachycardia, avoid antacids/calcium. Full effects take 4-6 weeks."
      },
      {
        "id": "PHARM-005",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Medication Administration",
        "question": "Morphine IV finding requiring immediate intervention:",
        "options": [
          "A. Respiratory rate 8/min",
          "B. BP 118/76",
          "C. Constricted pupils",
          "D. Drowsiness"
        ],
        "answer": "A",
        "rationale": "RR <12 concerning, <8 critical. Have naloxone ready."
      },
      {
        "id": "PHARM-006",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "Medication Administration",
        "question": "Fastest onset medication route:",
        "options": [
          "A. Subcutaneous",
          "B. Intramuscular",
          "C. Intravenous",
          "D. Sublingual"
        ],
        "answer": "C",
        "rationale": "IV fastest - enters bloodstream directly."
      },
      {
        "id": "PHARM-007",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Medication Administration",
        "question": "Insulin lispro before breakfast given:",
        "options": [
          "A. 30-45 minutes before",
          "B. 5-15 minutes before",
          "C. With first bite",
          "D. 1-2 hours after"
        ],
        "answer": "B",
        "rationale": "Rapid-acting insulin 5-15 minutes before meals."
      },
      {
        "id": "PHARM-008",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Adverse Effects",
        "question": "Lisinopril dry cough explained as:",
        "options": [
          "A. Worsening heart failure",
          "B. Common ACE inhibitor side effect",
          "C. Pneumonia",
          "D. Needs dose increase"
        ],
        "answer": "B",
        "rationale": "ACE inhibitor side effect from bradykinin accumulation."
      },
      {
        "id": "PHARM-009",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Adverse Effects",
        "question": "Metformin with CT contrast. Action:",
        "options": [
          "A. Give as scheduled",
          "B. Hold 48 hours after procedure",
          "C. Increase fluids only",
          "D. Discontinue permanently"
        ],
        "answer": "B",
        "rationale": "Hold metformin 48 hours for lactic acidosis risk with contrast."
      },
      {
        "id": "PHARM-010",
        "type": "sata",
        "difficulty": "medium",
        "topic": "Adverse Effects",
        "question": "Digoxin toxicity signs: SELECT ALL THAT APPLY.",
        "options": [
          "A. Yellow-green halos",
          "B. Hypertension",
          "C. Nausea/vomiting",
          "D. Bradycardia",
          "E. Hyperkalemia",
          "F. Confusion in elderly"
        ],
        "answer": [
          "A",
          "C",
          "D",
          "F"
        ],
        "rationale": "Visual disturbances, GI symptoms, bradycardia, confusion. Hypokalemia increases toxicity."
      },
      {
        "id": "PHARM-011",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Adverse Effects",
        "question": "Statin muscle pain. Anticipated lab:",
        "options": [
          "A. Liver function",
          "B. Creatine kinase (CK)",
          "C. CBC",
          "D. Thyroid function"
        ],
        "answer": "B",
        "rationale": "CK elevated in rhabdomyolysis from statins."
      },
      {
        "id": "PHARM-012",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Adverse Effects",
        "question": "Clozapine with WBC 2,800. Priority:",
        "options": [
          "A. Document and monitor",
          "B. Hold medication, notify provider immediately",
          "C. Give as scheduled",
          "D. Increase fluids"
        ],
        "answer": "B",
        "rationale": "Agranulocytosis risk. WBC <3,000 requires stopping medication."
      },
      {
        "id": "PHARM-013",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "Adverse Effects",
        "question": "Medication class avoided in asthma:",
        "options": [
          "A. Calcium channel blockers",
          "B. Beta-blockers",
          "C. ACE inhibitors",
          "D. PPIs"
        ],
        "answer": "B",
        "rationale": "Beta-blockers cause bronchoconstriction."
      },
      {
        "id": "PHARM-014",
        "type": "calculation",
        "difficulty": "medium",
        "topic": "Dosage Calculations",
        "question": "Heparin 800 units/hr. Available 25,000 units/500 mL. Rate:",
        "options": [
          "A. 8 mL/hr",
          "B. 16 mL/hr",
          "C. 20 mL/hr",
          "D. 32 mL/hr"
        ],
        "answer": "B",
        "rationale": "25,000\u00f7500=50 units/mL. 800\u00f750=16 mL/hr."
      },
      {
        "id": "PHARM-015",
        "type": "calculation",
        "difficulty": "medium",
        "topic": "Dosage Calculations",
        "question": "Child 22 kg, amoxicillin 40 mg/kg/day divided q8h. Per dose:",
        "options": [
          "A. 220 mg",
          "B. 293 mg",
          "C. 440 mg",
          "D. 880 mg"
        ],
        "answer": "B",
        "rationale": "22\u00d740=880/day. 880\u00f73=293 mg per dose."
      },
      {
        "id": "PHARM-016",
        "type": "calculation",
        "difficulty": "hard",
        "topic": "Dosage Calculations",
        "question": "176 lb client, dopamine 5 mcg/kg/min. Available 400 mg/250 mL. Rate:",
        "options": [
          "A. 12 mL/hr",
          "B. 15 mL/hr",
          "C. 18 mL/hr",
          "D. 24 mL/hr"
        ],
        "answer": "B",
        "rationale": "176\u00f72.2=80 kg. 80\u00d75=400 mcg/min. Concentration 1.6 mg/mL. = 15 mL/hr."
      },
      {
        "id": "PHARM-017",
        "type": "calculation",
        "difficulty": "easy",
        "topic": "Dosage Calculations",
        "question": "Furosemide 60 mg IV. Available 10 mg/mL. Give:",
        "options": [
          "A. 0.6 mL",
          "B. 3 mL",
          "C. 6 mL",
          "D. 10 mL"
        ],
        "answer": "C",
        "rationale": "60\u00f710=6 mL."
      },
      {
        "id": "PHARM-018",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "IV Therapies",
        "question": "0.9% NaCl classified as:",
        "options": [
          "A. Hypotonic",
          "B. Isotonic",
          "C. Hypertonic",
          "D. Colloid"
        ],
        "answer": "B",
        "rationale": "NS is isotonic - same osmolarity as plasma."
      },
      {
        "id": "PHARM-019",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "IV Therapies",
        "question": "3% saline causes seizures. Action:",
        "options": [
          "A. Continue monitoring",
          "B. Stop infusion immediately",
          "C. Slow rate",
          "D. Give antiemetic"
        ],
        "answer": "B",
        "rationale": "Seizures indicate osmotic demyelination from rapid sodium correction. Stop immediately."
      },
      {
        "id": "PHARM-020",
        "type": "sata",
        "difficulty": "medium",
        "topic": "IV Therapies",
        "question": "IV infiltration signs: SELECT ALL THAT APPLY.",
        "options": [
          "A. Swelling",
          "B. Coolness",
          "C. Warmth/redness",
          "D. Slowed infusion",
          "E. Blanching",
          "F. Drainage"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E"
        ],
        "rationale": "Infiltration: swelling, coolness, slowed infusion, blanching. Warmth/drainage = infection."
      },
      {
        "id": "PHARM-021",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "IV Therapies",
        "question": "TPN unavailable. Hang until arrives:",
        "options": [
          "A. Normal saline",
          "B. Lactated Ringer's",
          "C. D10W",
          "D. 0.45% NaCl"
        ],
        "answer": "C",
        "rationale": "TPN has high dextrose. D10W prevents rebound hypoglycemia."
      },
      {
        "id": "PHARM-022",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "IV Therapies",
        "question": "IV potassium essential action:",
        "options": [
          "A. Rapid IV push",
          "B. Dilute, pump max 10 mEq/hr",
          "C. Give undiluted",
          "D. Small vein"
        ],
        "answer": "B",
        "rationale": "NEVER IV push. Dilute, use pump, max 10 mEq/hr peripherally."
      },
      {
        "id": "PHARM-023",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Blood Products",
        "question": "Before PRBCs, first action:",
        "options": [
          "A. Get blood from bank",
          "B. Verify consent and type/crossmatch",
          "C. Prime tubing",
          "D. Assess IV site"
        ],
        "answer": "B",
        "rationale": "Verify consent and compatibility first."
      },
      {
        "id": "PHARM-024",
        "type": "sata",
        "difficulty": "hard",
        "topic": "Blood Products",
        "question": "Transfusion: fever, chills, back pain. Actions: SELECT ALL THAT APPLY.",
        "options": [
          "A. Stop transfusion",
          "B. Keep IV open with NS",
          "C. Return bag to bank",
          "D. Get vitals",
          "E. Give acetaminophen",
          "F. Notify provider"
        ],
        "answer": [
          "A",
          "B",
          "C",
          "D",
          "F"
        ],
        "rationale": "Hemolytic reaction: stop, NS new tubing, save bag, vitals, notify. Don't give Tylenol until ordered."
      },
      {
        "id": "PHARM-025",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Blood Products",
        "question": "PRBCs must infuse within:",
        "options": [
          "A. 1 hour",
          "B. 2 hours",
          "C. 4 hours",
          "D. 6 hours"
        ],
        "answer": "C",
        "rationale": "4 hours from leaving blood bank refrigeration."
      },
      {
        "id": "PHARM-026",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "Blood Products",
        "question": "Stay with transfusion client during:",
        "options": [
          "A. Entire transfusion",
          "B. First 5 minutes",
          "C. First 15-30 minutes",
          "D. Last 15 minutes"
        ],
        "answer": "C",
        "rationale": "Most reactions in first 15-30 minutes."
      },
      {
        "id": "PHARM-027",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Blood Products",
        "question": "Only solution compatible with blood:",
        "options": [
          "A. Lactated Ringer's",
          "B. D5W",
          "C. 0.9% NaCl",
          "D. D5 0.45% NaCl"
        ],
        "answer": "C",
        "rationale": "Only NS compatible. LR has calcium (clotting), dextrose causes hemolysis."
      },
      {
        "id": "PHARM-028",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Pain Management",
        "question": "Appropriate PCA use:",
        "options": [
          "A. Family presses while client sleeps",
          "B. Press when pain 8/10",
          "C. Press before pain severe",
          "D. Nurse presses button"
        ],
        "answer": "C",
        "rationale": "Maintain consistent levels. ONLY client presses."
      },
      {
        "id": "PHARM-029",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Pain Management",
        "question": "Epidural morphine, RR 6. Priority:",
        "options": [
          "A. Monitor pruritus",
          "B. Check BP",
          "C. Stop epidural, prepare naloxone",
          "D. Assess urinary retention"
        ],
        "answer": "C",
        "rationale": "RR 6 = critical respiratory depression. Stop, call help, prepare naloxone."
      },
      {
        "id": "PHARM-030",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Pain Management",
        "question": "Tramadol + SSRIs can cause:",
        "options": [
          "A. Hypoglycemia",
          "B. Serotonin syndrome",
          "C. NMS",
          "D. Stevens-Johnson"
        ],
        "answer": "B",
        "rationale": "Both increase serotonin. Risk of serotonin syndrome."
      },
      {
        "id": "PHARM-031",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "Drug Classifications",
        "question": "'-pril' medications are:",
        "options": [
          "A. Beta-blockers",
          "B. Calcium channel blockers",
          "C. ACE inhibitors",
          "D. ARBs"
        ],
        "answer": "C",
        "rationale": "-pril = ACE inhibitors. -sartan = ARBs. -olol = beta-blockers."
      },
      {
        "id": "PHARM-032",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Drug Classifications",
        "question": "Hold metoprolol if:",
        "options": [
          "A. BP 140/88",
          "B. Pulse 52",
          "C. RR 18",
          "D. Temp 99\u00b0F"
        ],
        "answer": "B",
        "rationale": "Beta-blockers: hold if HR <60 or BP <90/60."
      },
      {
        "id": "PHARM-033",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Drug Classifications",
        "question": "ACE inhibitor full therapeutic effect:",
        "options": [
          "A. Immediate",
          "B. 2-4 weeks",
          "C. 24 hours",
          "D. Several months"
        ],
        "answer": "B",
        "rationale": "Start working in hours, full effect 2-4 weeks."
      },
      {
        "id": "PHARM-034",
        "type": "sata",
        "difficulty": "hard",
        "topic": "Drug Classifications",
        "question": "Spironolactone therapeutic effects: SELECT ALL THAT APPLY.",
        "options": [
          "A. Decreased edema",
          "B. Increased urine",
          "C. Decreased potassium",
          "D. Weight loss",
          "E. Decreased BP",
          "F. Gynecomastia"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E"
        ],
        "rationale": "Potassium-SPARING (increases K+). Therapeutic: diuresis, decreased edema/BP. Gynecomastia is adverse."
      },
      {
        "id": "PHARM-035",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Drug Classifications",
        "question": "Ondansetron mechanism:",
        "options": [
          "A. Decreases gastric acid",
          "B. Blocks serotonin receptors",
          "C. Increases GI motility",
          "D. Reduces inflammation"
        ],
        "answer": "B",
        "rationale": "5-HT3 (serotonin) receptor antagonist for nausea."
      },
      {
        "id": "PHARM-036",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Drug Classifications",
        "question": "Warfarin + aspirin. Monitor for:",
        "options": [
          "A. Decreased anticoagulation",
          "B. Hypotension",
          "C. Increased bleeding",
          "D. Hypercoagulability"
        ],
        "answer": "C",
        "rationale": "Both increase bleeding through different mechanisms."
      },
      {
        "id": "PHARM-037",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Medication Administration",
        "question": "Sulfa allergy. Contraindicated:",
        "options": [
          "A. Furosemide",
          "B. Amoxicillin",
          "C. Metoprolol",
          "D. Omeprazole"
        ],
        "answer": "A",
        "rationale": "Furosemide is sulfonamide diuretic. Cross-sensitivity possible."
      },
      {
        "id": "PHARM-038",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Adverse Effects",
        "question": "Amiodarone bluish skin:",
        "options": [
          "A. Toxicity requiring discontinuation",
          "B. Known long-term side effect",
          "C. Allergic reaction",
          "D. Unrelated"
        ],
        "answer": "B",
        "rationale": "Known long-term effect in 4-9%. May be irreversible."
      },
      {
        "id": "PHARM-039",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Medication Administration",
        "question": "Phenytoin + ciprofloxacin. Anticipate:",
        "options": [
          "A. Increased phenytoin toxicity",
          "B. Decreased phenytoin, breakthrough seizures",
          "C. No interaction",
          "D. Increased ciprofloxacin effect"
        ],
        "answer": "B",
        "rationale": "Ciprofloxacin decreases phenytoin levels. Risk of seizures."
      },
      {
        "id": "PHARM-040",
        "type": "calculation",
        "difficulty": "medium",
        "topic": "Dosage Calculations",
        "question": "1000 mL over 8 hours. Drop factor 15. Drip rate:",
        "options": [
          "A. 21 gtt/min",
          "B. 31 gtt/min",
          "C. 42 gtt/min",
          "D. 125 gtt/min"
        ],
        "answer": "B",
        "rationale": "(1000\u00d715)\u00f7(8\u00d760)=31 gtt/min."
      },
      {
        "id": "PHARM-041",
        "type": "calculation",
        "difficulty": "medium",
        "topic": "Dosage Calculations",
        "question": "Atropine 0.5 mg needed. Available 0.4 mg/mL. Give:",
        "options": [
          "A. 0.8 mL",
          "B. 1.0 mL",
          "C. 1.25 mL",
          "D. 2.0 mL"
        ],
        "answer": "C",
        "rationale": "0.5\u00f70.4=1.25 mL."
      },
      {
        "id": "PHARM-042",
        "type": "calculation",
        "difficulty": "hard",
        "topic": "Dosage Calculations",
        "question": "Insulin 0.1 units/kg/hr for 70 kg. Solution 100 units/100 mL. Rate:",
        "options": [
          "A. 5 mL/hr",
          "B. 7 mL/hr",
          "C. 10 mL/hr",
          "D. 70 mL/hr"
        ],
        "answer": "B",
        "rationale": "70\u00d70.1=7 units/hr. 1 unit/mL. = 7 mL/hr."
      },
      {
        "id": "PHARM-043",
        "type": "calculation",
        "difficulty": "medium",
        "topic": "Dosage Calculations",
        "question": "KCl 40 mEq needed. Available 2 mEq/mL. Add:",
        "options": [
          "A. 10 mL",
          "B. 20 mL",
          "C. 40 mL",
          "D. 80 mL"
        ],
        "answer": "B",
        "rationale": "40\u00f72=20 mL."
      },
      {
        "id": "PHARM-044",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "IV Therapies",
        "question": "Best IV for hemorrhagic shock:",
        "options": [
          "A. D5W",
          "B. 0.45% NaCl",
          "C. Lactated Ringer's",
          "D. 3% NaCl"
        ],
        "answer": "C",
        "rationale": "LR is isotonic with electrolytes similar to plasma."
      },
      {
        "id": "PHARM-045",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "IV Therapies",
        "question": "Vesicant extravasation. First action:",
        "options": [
          "A. Warm compresses",
          "B. Stop infusion immediately",
          "C. Increase rate to flush",
          "D. Continue and document"
        ],
        "answer": "B",
        "rationale": "STOP immediately to prevent tissue damage."
      },
      {
        "id": "PHARM-046",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Blood Products",
        "question": "Type A+ needs emergency blood. Safe if A+ unavailable:",
        "options": [
          "A. Type B+",
          "B. Type AB+",
          "C. Type O+",
          "D. Type A-"
        ],
        "answer": "C",
        "rationale": "O is universal donor. A+ can receive A+, A-, O+, O-."
      },
      {
        "id": "PHARM-047",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Blood Products",
        "question": "Platelets 8,000. Requires:",
        "options": [
          "A. PRBCs",
          "B. FFP",
          "C. Platelets",
          "D. Albumin"
        ],
        "answer": "C",
        "rationale": "Critically low platelets require platelet transfusion."
      },
      {
        "id": "PHARM-048",
        "type": "sata",
        "difficulty": "medium",
        "topic": "Pain Management",
        "question": "NSAID teaching: SELECT ALL THAT APPLY.",
        "options": [
          "A. Take with food",
          "B. Report black stools",
          "C. Safe with blood thinners",
          "D. Avoid alcohol",
          "E. Monitor urine output",
          "F. Not habit-forming"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E",
          "F"
        ],
        "rationale": "Take with food, report GI bleeding, avoid alcohol, monitor kidneys. NOT safe with anticoagulants."
      },
      {
        "id": "PHARM-049",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Pain Management",
        "question": "Meperidine highest neurotoxicity risk:",
        "options": [
          "A. 25 y/o with fracture",
          "B. 70 y/o with renal impairment",
          "C. 40 y/o with liver disease",
          "D. 35 y/o with asthma"
        ],
        "answer": "B",
        "rationale": "Normeperidine neurotoxic, renally excreted. Accumulates in elderly/renal impairment."
      },
      {
        "id": "PHARM-050",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Medication Safety",
        "question": "High-alert med (insulin) requires:",
        "options": [
          "A. Independent double-check",
          "B. Double the dose",
          "C. Skip glucose check",
          "D. Give if sleeping"
        ],
        "answer": "A",
        "rationale": "High-alert meds require independent verification by two nurses."
      }
    ]
  },
  "prioritization": {
    "name": "Prioritization & Delegation",
    "icon": "\ud83c\udfaf",
    "weight": "17-23%",
    "questionCount": 50,
    "questions": [
      {
        "id": "PRI-001",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Priority Setting",
        "question": "Four clients. Assess first?",
        "options": [
          "A. Heart failure, gained 3 lbs overnight",
          "B. Post-thyroidectomy with tingling around mouth",
          "C. Diabetes, glucose 180 mg/dL",
          "D. Pneumonia, O2 sat 93%"
        ],
        "answer": "B",
        "rationale": "Perioral tingling post-thyroidectomy = hypocalcemia from parathyroid damage. Can progress to tetany, laryngospasm, airway obstruction."
      },
      {
        "id": "PRI-002",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Priority Setting",
        "question": "Which client to see first?",
        "options": [
          "A. COPD, O2 sat 89% on 2L",
          "B. Acute chest pain 8/10",
          "C. 2 days post-op, no bowel movement",
          "D. UTI, temp 101\u00b0F"
        ],
        "answer": "B",
        "rationale": "Acute chest pain = possible MI. Life-threatening emergency. COPD client's 89% may be acceptable baseline."
      },
      {
        "id": "PRI-003",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Priority Setting",
        "question": "ED triage. See immediately?",
        "options": [
          "A. Adolescent with suspected arm fracture",
          "B. Adult with severe abdominal pain, rigid abdomen",
          "C. Child with temp 102\u00b0F, ear pain",
          "D. Elderly with chronic back pain 6/10"
        ],
        "answer": "B",
        "rationale": "Rigid abdomen = peritonitis/acute abdomen. Surgical emergency."
      },
      {
        "id": "PRI-004",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Priority Setting",
        "question": "Using ABCs, which requires immediate attention?",
        "options": [
          "A. BP 88/56 mmHg",
          "B. Anxious about surgery",
          "C. Obstructed airway",
          "D. Active wound bleeding"
        ],
        "answer": "C",
        "rationale": "ABC: Airway first. Without patent airway, breathing and circulation are meaningless."
      },
      {
        "id": "PRI-005",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Priority Setting",
        "question": "ICU. Assess first?",
        "options": [
          "A. Ventilator client, O2 sat 99%",
          "B. New confusion, glucose 42 mg/dL",
          "C. Chest tubes draining 50 mL/hr serous",
          "D. Post-cath with strong pedal pulse"
        ],
        "answer": "B",
        "rationale": "Hypoglycemia 42 mg/dL with confusion = emergency. Can cause seizures, coma, brain damage."
      },
      {
        "id": "PRI-006",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Priority Setting",
        "question": "Client unresponsive, no pulse. After calling for help, first action:",
        "options": [
          "A. Give epinephrine",
          "B. Begin chest compressions",
          "C. Attach AED",
          "D. Give rescue breaths"
        ],
        "answer": "B",
        "rationale": "Current BLS: CAB. Start compressions immediately."
      },
      {
        "id": "PRI-007",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Priority Setting",
        "question": "Four clients. See first:",
        "options": [
          "A. Parkinson's needs morning care",
          "B. Asthma, wheezing, using accessory muscles",
          "C. Heart failure needs daily weight",
          "D. Hip fracture, pain 5/10"
        ],
        "answer": "B",
        "rationale": "Wheezing + accessory muscles = respiratory distress. Breathing priority."
      },
      {
        "id": "PRI-008",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Priority Setting",
        "question": "PACU. Immediate intervention needed:",
        "options": [
          "A. Reports nausea",
          "B. BP 100/70 mmHg",
          "C. Unresponsive with snoring respirations",
          "D. Small serous drainage on dressing"
        ],
        "answer": "C",
        "rationale": "Snoring in unresponsive client = partial airway obstruction. Airway emergency."
      },
      {
        "id": "PRI-009",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Priority Setting",
        "question": "Using Maslow's hierarchy, address first:",
        "options": [
          "A. Anxious about test results",
          "B. Severe pain",
          "C. Feels isolated from family",
          "D. Wants to discuss advance directives"
        ],
        "answer": "B",
        "rationale": "Maslow: physiological needs (pain) are most basic, must be met first."
      },
      {
        "id": "PRI-010",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Priority Setting",
        "question": "Post-op client with severe incisional pain. First action:",
        "options": [
          "A. Give pain medication",
          "B. Assess surgical site",
          "C. Check vital signs",
          "D. Review MAR"
        ],
        "answer": "B",
        "rationale": "Assessment first in nursing process. Rule out complications before medicating."
      },
      {
        "id": "PRI-011",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "Appropriate to delegate to UAP:",
        "options": [
          "A. Vital signs on stable post-op client",
          "B. Assess wound for infection",
          "C. Administer oral medications",
          "D. Teach about new diabetes diagnosis"
        ],
        "answer": "A",
        "rationale": "UAPs can take vitals on STABLE clients. Assessment, meds, teaching = RN only."
      },
      {
        "id": "PRI-012",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "Can delegate to LPN/LVN:",
        "options": [
          "A. Develop care plan for new admission",
          "B. Give IV push medications",
          "C. Dressing change on stable wound",
          "D. Initial assessment on new admission"
        ],
        "answer": "C",
        "rationale": "LPNs can do dressing changes on stable clients. Cannot: care plans, IV push (most states), initial assessments."
      },
      {
        "id": "PRI-013",
        "type": "sata",
        "difficulty": "hard",
        "topic": "Delegation",
        "question": "Appropriate for UAP: SELECT ALL THAT APPLY.",
        "options": [
          "A. Measure intake and output",
          "B. Ambulate stable client",
          "C. Feed client with dysphagia",
          "D. Report changes to nurse",
          "E. Fingerstick glucose",
          "F. Decide when to reposition"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E"
        ],
        "rationale": "UAPs can: I&O, ambulate stable, report observations, fingersticks. Cannot: feed dysphagia (aspiration risk), make clinical decisions."
      },
      {
        "id": "PRI-014",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "Nurse delegated bathing. Client not bathed. Nurse's responsibility:",
        "options": [
          "A. Not responsible - task was delegated",
          "B. Accountable for ensuring completion",
          "C. UAP alone responsible",
          "D. Charge nurse responsible"
        ],
        "answer": "B",
        "rationale": "Delegation transfers task, not accountability. RN always accountable for outcomes."
      },
      {
        "id": "PRI-015",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Delegation",
        "question": "Assign to LPN:",
        "options": [
          "A. New diabetic needing extensive teaching",
          "B. Client with trach needing frequent suctioning",
          "C. Client receiving IV chemotherapy",
          "D. Unstable post-cath client"
        ],
        "answer": "B",
        "rationale": "Stable trach suctioning appropriate for LPN. New teaching, chemo, unstable = RN."
      },
      {
        "id": "PRI-016",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "UAP statement showing understanding:",
        "options": [
          "A. 'I can give extra pain med if asked'",
          "B. 'I'll tell you immediately if condition changes'",
          "C. 'I can assess new clients if busy'",
          "D. 'I don't need to report normal vitals'"
        ],
        "answer": "B",
        "rationale": "UAPs must report ANY changes immediately. Cannot give meds, assess, or decide what to report."
      },
      {
        "id": "PRI-017",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "Nurse should perform rather than delegate:",
        "options": [
          "A. Transport to radiology",
          "B. Collect routine urine specimen",
          "C. Evaluate pain medication effectiveness",
          "D. Measure daily weight"
        ],
        "answer": "C",
        "rationale": "Evaluation = nursing process, requires clinical judgment. Cannot delegate."
      },
      {
        "id": "PRI-018",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Delegation",
        "question": "LTC facility. Best LPN assignment:",
        "options": [
          "A. Resident needing end-of-life care and family support",
          "B. Stable resident with chronic conditions, needs medications",
          "C. New transfer with complex care needs",
          "D. Resident whose family has care plan concerns"
        ],
        "answer": "B",
        "rationale": "LPNs ideal for stable, predictable clients with medication needs. Complex/new/family issues = RN."
      },
      {
        "id": "PRI-019",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "UAP performing task incorrectly. Priority action:",
        "options": [
          "A. Report to supervisor",
          "B. Complete task yourself",
          "C. Intervene immediately, provide correction",
          "D. Discuss at end of shift"
        ],
        "answer": "C",
        "rationale": "Client safety priority. Intervene immediately, correct technique, observe."
      },
      {
        "id": "PRI-020",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "'Right Person' in 5 Rights of Delegation means:",
        "options": [
          "A. Right task selected",
          "B. Right circumstance present",
          "C. Delegate has skills and competency",
          "D. Right direction given"
        ],
        "answer": "C",
        "rationale": "Right Person = delegate has necessary skills, training, competency for the task."
      },
      {
        "id": "PRI-021",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Delegation",
        "question": "Client with new colostomy. Delegate to UAP:",
        "options": [
          "A. Assess stoma color and viability",
          "B. Teach client pouch care",
          "C. Empty and measure pouch contents",
          "D. Evaluate client's ability for self-care"
        ],
        "answer": "C",
        "rationale": "UAPs can empty/measure output. Assessment, teaching, evaluation = RN."
      },
      {
        "id": "PRI-022",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "Assign to new graduate orientee:",
        "options": [
          "A. Client receiving multiple blood transfusions",
          "B. Stable client awaiting discharge",
          "C. Client in respiratory distress",
          "D. Client with complex VAC wound care"
        ],
        "answer": "B",
        "rationale": "New grads need stable, predictable clients. Complex situations = experienced nurses."
      },
      {
        "id": "PRI-023",
        "type": "sata",
        "difficulty": "hard",
        "topic": "Delegation",
        "question": "Assign to RN, not LPN: SELECT ALL THAT APPLY.",
        "options": [
          "A. Admission assessment and care plan",
          "B. Reinforcement of previous teaching",
          "C. Unstable client needing frequent assessment",
          "D. Blood transfusion administration",
          "E. Oral medications to stable client",
          "F. Discharge teaching about new medications"
        ],
        "answer": [
          "A",
          "C",
          "D",
          "F"
        ],
        "rationale": "RN only: initial assessments/care plans, unstable clients, transfusions, initial/discharge teaching."
      },
      {
        "id": "PRI-024",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "LPN reports significant BP drop. RN's first action:",
        "options": [
          "A. Ask LPN to recheck in one hour",
          "B. Assess the client personally",
          "C. Notify the healthcare provider",
          "D. Document the LPN's report"
        ],
        "answer": "B",
        "rationale": "RN must personally assess significant changes. Cannot rely solely on LPN report."
      },
      {
        "id": "PRI-025",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "'Right Direction/Communication' means:",
        "options": [
          "A. Selecting the right task",
          "B. Appropriate circumstances",
          "C. Clear instructions and expectations given",
          "D. Appropriate supervision provided"
        ],
        "answer": "C",
        "rationale": "Right Direction = clear, concise instructions: what, how, when, what to report."
      },
      {
        "id": "PRI-026",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Delegation",
        "question": "State allows LPN IV meds under RN supervision. Appropriate for LPN:",
        "options": [
          "A. IV push morphine",
          "B. IV piggyback antibiotic for stable client",
          "C. IV chemotherapy",
          "D. IV insulin drip for DKA"
        ],
        "answer": "B",
        "rationale": "IVPB antibiotics to stable clients may be appropriate. IV push, chemo, drips = RN."
      },
      {
        "id": "PRI-027",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "Client falls while UAP ambulating them. First action:",
        "options": [
          "A. File incident report",
          "B. Assess client for injuries",
          "C. Notify healthcare provider",
          "D. Document in medical record"
        ],
        "answer": "B",
        "rationale": "Client assessment always first priority after fall."
      },
      {
        "id": "PRI-028",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "UAP reports BP 200/110 mmHg. Nurse should:",
        "options": [
          "A. Thank UAP and document",
          "B. Ask UAP to recheck in hour",
          "C. Immediately assess the client",
          "D. Call provider with UAP's report"
        ],
        "answer": "C",
        "rationale": "Critical BP requires immediate RN assessment. Never delay for abnormal vitals."
      },
      {
        "id": "PRI-029",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Delegation",
        "question": "SNF assignment. Intervene if:",
        "options": [
          "A. LPN giving tube feeding to stable resident",
          "B. UAP helping dementia resident eat lunch",
          "C. LPN doing initial assessment on new admission",
          "D. UAP measuring BP on stable residents"
        ],
        "answer": "C",
        "rationale": "Initial assessments = RN only, even in SNF."
      },
      {
        "id": "PRI-030",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Delegation",
        "question": "Continuous tube feeding. Appropriate for UAP:",
        "options": [
          "A. Check residual volume",
          "B. Give medications through tube",
          "C. Reposition client every 2 hours",
          "D. Assess for aspiration signs"
        ],
        "answer": "C",
        "rationale": "Repositioning is routine task. Residual, meds, assessment = nursing."
      },
      {
        "id": "PRI-031",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Assignment",
        "question": "Making assignments. Primary considerations:",
        "options": [
          "A. Staff preferences and seniority",
          "B. Client acuity, staff competency, continuity of care",
          "C. Equal client distribution among staff",
          "D. Room geographic location only"
        ],
        "answer": "B",
        "rationale": "Assignments based on: acuity, staff competency, continuity of care, workload balance."
      },
      {
        "id": "PRI-032",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Assignment",
        "question": "Unsafe assignment with too many high-acuity clients. Best action:",
        "options": [
          "A. Refuse and leave unit",
          "B. Accept without comment",
          "C. Document concerns, speak with charge nurse/supervisor",
          "D. Call in sick to avoid"
        ],
        "answer": "C",
        "rationale": "Document concerns, discuss with leadership for safer assignment or resources. Don't abandon."
      },
      {
        "id": "PRI-033",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Supervision",
        "question": "Float nurse from another unit. Assign:",
        "options": [
          "A. Specialized cardiac monitoring interpretation",
          "B. Comfort care client with predictable needs",
          "C. New tracheostomy needing frequent suctioning",
          "D. Client on continuous renal replacement therapy"
        ],
        "answer": "B",
        "rationale": "Float nurses get stable, predictable clients within general competency."
      },
      {
        "id": "PRI-034",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Assignment",
        "question": "Disaster staffing principle:",
        "options": [
          "A. Maintain normal nurse-patient ratios",
          "B. Greatest good for greatest number",
          "C. Focus only on most critical clients",
          "D. Maintain normal scope of practice"
        ],
        "answer": "B",
        "rationale": "Disasters use utilitarian ethics. Maximize benefit for most people possible."
      },
      {
        "id": "PRI-035",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Supervision",
        "question": "LPN consistently taking shortcuts. Best action:",
        "options": [
          "A. Report to state board of nursing",
          "B. Ignore to avoid conflict",
          "C. Address directly with LPN, provide coaching",
          "D. Tell other staff to watch the LPN"
        ],
        "answer": "C",
        "rationale": "Address performance issues directly first. Coach, document, escalate if continues."
      },
      {
        "id": "PRI-036",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Assignment",
        "question": "Client in isolation. Assignment consideration:",
        "options": [
          "A. Assign newest staff member",
          "B. Cluster care to minimize room entries",
          "C. Multiple staff rotate entering",
          "D. Avoid assigning anyone"
        ],
        "answer": "B",
        "rationale": "Cluster care minimizes room entries, conserves PPE, reduces exposure."
      },
      {
        "id": "PRI-037",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Assignment",
        "question": "Night shift: only RN with 2 LPNs. One LPN calls in sick. First action:",
        "options": [
          "A. Divide clients between self and remaining LPN",
          "B. Notify nursing supervisor",
          "C. Ask remaining LPN to work overtime",
          "D. Call off-duty nurses yourself"
        ],
        "answer": "B",
        "rationale": "Notify supervisor first. They have authority for staffing decisions."
      },
      {
        "id": "PRI-038",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Supervision",
        "question": "Difference between assignment and delegation:",
        "options": [
          "A. No difference, terms interchangeable",
          "B. Assignment for RNs, delegation for LPNs",
          "C. Assignment transfers responsibility and accountability",
          "D. Assignment = work within scope; delegation = transfers task from own scope"
        ],
        "answer": "D",
        "rationale": "Assignment = work already in someone's scope. Delegation = transferring task from your scope to another."
      },
      {
        "id": "PRI-039",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Assignment",
        "question": "Complex client with multiple comorbidities. Best care model:",
        "options": [
          "A. Functional nursing",
          "B. Team nursing",
          "C. Primary nursing",
          "D. Total patient care"
        ],
        "answer": "C",
        "rationale": "Primary nursing provides best continuity - one nurse responsible throughout stay."
      },
      {
        "id": "PRI-040",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Supervision",
        "question": "LPN questions order for medication client is allergic to. RN should:",
        "options": [
          "A. Tell LPN to give as ordered",
          "B. Verify allergy, contact prescriber",
          "C. Document that LPN refused",
          "D. Give the medication personally"
        ],
        "answer": "B",
        "rationale": "Verify concern, contact prescriber. Support appropriate questioning of unsafe orders."
      },
      {
        "id": "PRI-041",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Emergency",
        "question": "Mass casualty triage. 'Expectant' (black tag) assigned to:",
        "options": [
          "A. Compound fracture, stable vitals",
          "B. Alert with forehead laceration",
          "C. 90% body burns, no pulse",
          "D. Chest pain, difficulty breathing"
        ],
        "answer": "C",
        "rationale": "Expectant = unlikely to survive regardless of treatment. 90% burns, no pulse = incompatible with survival in disaster."
      },
      {
        "id": "PRI-042",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Emergency",
        "question": "START triage. 'Immediate' (red tag) criteria:",
        "options": [
          "A. Walking with minor injuries",
          "B. RR 35/min, no radial pulse",
          "C. No respirations after airway repositioning",
          "D. RR 18/min, normal capillary refill"
        ],
        "answer": "B",
        "rationale": "Immediate = RR >30 OR no radial pulse OR can't follow commands. This client = shock."
      },
      {
        "id": "PRI-043",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Emergency",
        "question": "Code blue. Who coordinates resuscitation?",
        "options": [
          "A. Nurse doing compressions",
          "B. Respiratory therapist managing airway",
          "C. Code team leader",
          "D. Nurse documenting the code"
        ],
        "answer": "C",
        "rationale": "Team leader coordinates, makes decisions, assigns tasks. Others focus on specific roles."
      },
      {
        "id": "PRI-044",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Emergency",
        "question": "Fire in client's room. RACE protocol first action:",
        "options": [
          "A. Activate alarm",
          "B. Rescue clients in immediate danger",
          "C. Contain the fire",
          "D. Extinguish if small"
        ],
        "answer": "B",
        "rationale": "RACE: Rescue, Alarm, Contain, Extinguish. Rescue clients first."
      },
      {
        "id": "PRI-045",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Emergency",
        "question": "No pulse detected. Another nurse brings AED. When to apply?",
        "options": [
          "A. After 2 minutes of CPR",
          "B. As soon as available without significant CPR interruption",
          "C. Only if first shock unsuccessful",
          "D. After intubation complete"
        ],
        "answer": "B",
        "rationale": "Apply AED as soon as available. Early defibrillation critical. Minimize CPR interruptions."
      },
      {
        "id": "PRI-046",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Emergency",
        "question": "Anaphylaxis after antibiotic. First medication to give:",
        "options": [
          "A. Diphenhydramine (Benadryl)",
          "B. Methylprednisolone (Solu-Medrol)",
          "C. Epinephrine",
          "D. Albuterol nebulizer"
        ],
        "answer": "C",
        "rationale": "Epinephrine is first-line for anaphylaxis. Reverses bronchospasm, increases BP, reduces edema."
      },
      {
        "id": "PRI-047",
        "type": "sata",
        "difficulty": "hard",
        "topic": "Emergency",
        "question": "Hospital emergency plan should include: SELECT ALL THAT APPLY.",
        "options": [
          "A. Chain of command and communication",
          "B. Mass casualty triage procedures",
          "C. Staff roles and responsibilities",
          "D. Evacuation routes and procedures",
          "E. Lockdown procedures for threats",
          "F. Personal financial planning for staff"
        ],
        "answer": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "rationale": "Emergency plans: command structure, triage, roles, evacuation, lockdown. Not personal finances."
      },
      {
        "id": "PRI-048",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Emergency",
        "question": "Client develops stridor and facial swelling after eating shrimp. Priority:",
        "options": [
          "A. Get detailed allergy history",
          "B. Call for emergency help, prepare for intubation",
          "C. Give oral diphenhydramine",
          "D. Apply cool compress to face"
        ],
        "answer": "B",
        "rationale": "Stridor = upper airway obstruction. Emergency. Call for help, prepare airway management."
      },
      {
        "id": "PRI-049",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Emergency",
        "question": "Tornado warning. Move first:",
        "options": [
          "A. Client in wheelchair near window",
          "B. Client on bed rest in interior room",
          "C. Ambulatory client in hallway",
          "D. Client receiving IV in interior bathroom"
        ],
        "answer": "A",
        "rationale": "Clients near windows at highest risk (flying glass/debris). Move away from windows first."
      },
      {
        "id": "PRI-050",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Emergency",
        "question": "Warrants calling rapid response team:",
        "options": [
          "A. Pain medication is due",
          "B. New onset confusion with decreasing O2 saturation",
          "C. Anxious about upcoming procedure",
          "D. Wants to speak with healthcare provider"
        ],
        "answer": "B",
        "rationale": "Rapid response for early deterioration signs. New confusion + decreasing O2 = significant change."
      }
    ]
  },
  "safety": {
    "name": "Safety & Infection Control",
    "icon": "\ud83d\udee1\ufe0f",
    "weight": "9-15%",
    "questionCount": 50,
    "questions": [
      {
        "id": "SAFE-001",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "Infection Control",
        "question": "Proper hand hygiene per CDC guidelines:",
        "options": [
          "A. Wash for 10 seconds",
          "B. Use alcohol rub when hands visibly soiled",
          "C. Wash at least 20 seconds with soap and water",
          "D. Apply sanitizer over gloves"
        ],
        "answer": "C",
        "rationale": "CDC: wash at least 20 seconds. Soap/water when visibly soiled, not alcohol rub."
      },
      {
        "id": "SAFE-002",
        "type": "sata",
        "difficulty": "medium",
        "topic": "Infection Control",
        "question": "Standard precautions apply to: SELECT ALL THAT APPLY.",
        "options": [
          "A. Client with HIV",
          "B. Client with no known infections",
          "C. Client with draining wound",
          "D. Client on chemotherapy",
          "E. Client in TB isolation",
          "F. Healthy client for routine physical"
        ],
        "answer": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "rationale": "Standard precautions apply to ALL clients regardless of diagnosis."
      },
      {
        "id": "SAFE-003",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Infection Control",
        "question": "Needlestick from client with unknown HIV status. First action:",
        "options": [
          "A. Complete incident report",
          "B. Report to occupational health immediately",
          "C. Wash wound thoroughly with soap and water",
          "D. Check client's HIV status in chart"
        ],
        "answer": "C",
        "rationale": "First: wash wound thoroughly. Then report to occupational health for PEP evaluation."
      },
      {
        "id": "SAFE-004",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "Infection Control",
        "question": "Wear gloves when:",
        "options": [
          "A. Only with known infections",
          "B. Anticipating contact with blood or body fluids",
          "C. All times during client care",
          "D. Only during invasive procedures"
        ],
        "answer": "B",
        "rationale": "Gloves when anticipating blood/body fluid contact. Not needed for all client contact."
      },
      {
        "id": "SAFE-005",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Infection Control",
        "question": "Sterile technique for catheter insertion. Most important principle:",
        "options": [
          "A. Keep sterile items below waist level",
          "B. Reach over sterile field to access supplies",
          "C. Maintain 1-inch border around field as contaminated",
          "D. Use same gloves for prep and insertion"
        ],
        "answer": "C",
        "rationale": "Outer 1-inch border of sterile field is contaminated. Sterile above waist, never reach over."
      },
      {
        "id": "SAFE-006",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Infection Control",
        "question": "Best intervention to prevent CLABSI:",
        "options": [
          "A. Change central line dressing every 24 hours",
          "B. Use sterile technique for all central line care",
          "C. Flush line with heparin before each use",
          "D. Rotate insertion sites every 48 hours"
        ],
        "answer": "B",
        "rationale": "Sterile technique essential for CLABSI prevention. Dressings changed every 5-7 days, not daily."
      },
      {
        "id": "SAFE-007",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "Infection Control",
        "question": "Most effective method to prevent C. diff spread:",
        "options": [
          "A. Alcohol-based hand sanitizer",
          "B. Handwashing with soap and water",
          "C. Wearing double gloves",
          "D. Using antiseptic wipes on hands"
        ],
        "answer": "B",
        "rationale": "C. diff spores NOT killed by alcohol. Soap/water with friction required."
      },
      {
        "id": "SAFE-008",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Infection Control",
        "question": "Tracheostomy suctioning. Which maintains aseptic technique?",
        "options": [
          "A. Same catheter for oral and tracheal suctioning",
          "B. Apply suction while inserting catheter",
          "C. New sterile catheter for each suctioning pass",
          "D. Suction continuously for 30 seconds"
        ],
        "answer": "C",
        "rationale": "New sterile catheter each pass. Suction on withdrawal only, max 10-15 seconds."
      },
      {
        "id": "SAFE-009",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Infection Control",
        "question": "Client with MRSA in wound. Type of precautions:",
        "options": [
          "A. Airborne precautions",
          "B. Droplet precautions",
          "C. Contact precautions",
          "D. Standard precautions only"
        ],
        "answer": "C",
        "rationale": "MRSA requires contact precautions: gown, gloves, dedicated equipment."
      },
      {
        "id": "SAFE-010",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Infection Control",
        "question": "SSI on post-op day 5. Most likely contributing factor:",
        "options": [
          "A. Surgery lasted longer than 4 hours",
          "B. Client has history of hypertension",
          "C. Client ambulated on post-op day 1",
          "D. Client received pre-operative antibiotics"
        ],
        "answer": "A",
        "rationale": "Prolonged surgery (>4 hours) is significant SSI risk factor."
      },
      {
        "id": "SAFE-011",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Precautions",
        "question": "Suspected pulmonary TB. Type of precautions:",
        "options": [
          "A. Contact with gown and gloves",
          "B. Droplet with surgical mask",
          "C. Airborne with N95 respirator",
          "D. Standard precautions only"
        ],
        "answer": "C",
        "rationale": "TB requires airborne precautions: negative pressure room, N95 respirator."
      },
      {
        "id": "SAFE-012",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Precautions",
        "question": "Droplets can travel approximately:",
        "options": [
          "A. Up to 1 foot",
          "B. Up to 3 feet",
          "C. Up to 6 feet",
          "D. Across the entire room"
        ],
        "answer": "C",
        "rationale": "Droplets travel 3-6 feet. Mask required within 6 feet for droplet precautions."
      },
      {
        "id": "SAFE-013",
        "type": "sata",
        "difficulty": "hard",
        "topic": "Precautions",
        "question": "Diseases requiring airborne precautions: SELECT ALL THAT APPLY.",
        "options": [
          "A. Measles (rubeola)",
          "B. Varicella (chickenpox)",
          "C. Influenza",
          "D. Pulmonary tuberculosis",
          "E. Pertussis (whooping cough)",
          "F. Disseminated herpes zoster"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "F"
        ],
        "rationale": "Airborne: Measles, Varicella, TB, disseminated zoster (MTV). Influenza/pertussis = droplet."
      },
      {
        "id": "SAFE-014",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Precautions",
        "question": "Order for donning PPE in contact precautions:",
        "options": [
          "A. Gloves, then gown",
          "B. Gown, then gloves",
          "C. Either order is acceptable",
          "D. Mask, gown, then gloves"
        ],
        "answer": "B",
        "rationale": "Don: gown first, then gloves (over cuffs). Doff: gloves first, then gown."
      },
      {
        "id": "SAFE-015",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Precautions",
        "question": "Meningococcal meningitis client transport. Essential precaution:",
        "options": [
          "A. Client wears N95 respirator",
          "B. Transport staff wears contact gowns",
          "C. Client wears surgical mask",
          "D. No special precautions for brief transport"
        ],
        "answer": "C",
        "rationale": "Droplet precautions. Client wears surgical mask during transport."
      },
      {
        "id": "SAFE-016",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "Precautions",
        "question": "N95 respirators. Correct statement:",
        "options": [
          "A. Anyone can use without fit testing",
          "B. Required for droplet precautions",
          "C. Must be fit-tested for each healthcare worker",
          "D. Filter out 85% of airborne particles"
        ],
        "answer": "C",
        "rationale": "N95 requires individual fit-testing. Filters 95% particles. For airborne, not droplet."
      },
      {
        "id": "SAFE-017",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Precautions",
        "question": "Client with C. diff AND influenza. Precautions needed:",
        "options": [
          "A. Contact precautions only",
          "B. Droplet precautions only",
          "C. Contact AND droplet precautions",
          "D. Airborne precautions"
        ],
        "answer": "C",
        "rationale": "Multiple infections = ALL applicable precautions. C. diff (contact) + flu (droplet)."
      },
      {
        "id": "SAFE-018",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Precautions",
        "question": "After removing PPE, nurse notices small tear in gown worn for MRSA client. Action:",
        "options": [
          "A. No action needed for MRSA",
          "B. Report potential exposure to occupational health",
          "C. Apply antibiotic ointment to any exposed skin",
          "D. Wash hands and continue duties"
        ],
        "answer": "B",
        "rationale": "PPE failure = potential exposure. Report to occupational health."
      },
      {
        "id": "SAFE-019",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Precautions",
        "question": "Before transporting airborne precautions client. Must do:",
        "options": [
          "A. Client receives antibiotics first",
          "B. All transport personnel don N95 respirators",
          "C. Client puts on surgical mask",
          "D. Hallways are cleared of all personnel"
        ],
        "answer": "C",
        "rationale": "Source control: client wears surgical mask before leaving room."
      },
      {
        "id": "SAFE-020",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "Precautions",
        "question": "Contact precautions sign typically color:",
        "options": [
          "A. Yellow",
          "B. Pink or Red",
          "C. Green",
          "D. Blue"
        ],
        "answer": "C",
        "rationale": "Common convention: green = contact. May vary by institution."
      },
      {
        "id": "SAFE-021",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Fall Prevention",
        "question": "Highest fall risk client:",
        "options": [
          "A. 45-year-old ambulatory and oriented",
          "B. 72-year-old on multiple antihypertensives",
          "C. 30-year-old with cast on dominant hand",
          "D. 55-year-old wearing bifocal glasses"
        ],
        "answer": "B",
        "rationale": "Elderly + polypharmacy + antihypertensives (orthostatic hypotension) = high risk."
      },
      {
        "id": "SAFE-022",
        "type": "sata",
        "difficulty": "medium",
        "topic": "Fall Prevention",
        "question": "Fall prevention interventions: SELECT ALL THAT APPLY.",
        "options": [
          "A. Bed in lowest position",
          "B. Call light within reach",
          "C. All four side rails up at all times",
          "D. Non-skid footwear",
          "E. Bathroom light on at night",
          "F. Vest restraint for unsteady clients"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E"
        ],
        "rationale": "Low bed, call light, non-skid shoes, lighting. All 4 rails = restraint, can increase risk."
      },
      {
        "id": "SAFE-023",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Fall Prevention",
        "question": "Morse Fall Scale score of 55 indicates:",
        "options": [
          "A. Low fall risk",
          "B. Moderate fall risk",
          "C. High fall risk",
          "D. Invalid score, needs recalculation"
        ],
        "answer": "C",
        "rationale": "Morse: 0-24 low, 25-44 moderate, 45+ high. 55 = high risk, intensive interventions needed."
      },
      {
        "id": "SAFE-024",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Fall Prevention",
        "question": "Client fell getting out of bed. Priority action:",
        "options": [
          "A. Complete incident report immediately",
          "B. Call healthcare provider",
          "C. Assess client for injuries",
          "D. Ask why client didn't call for help"
        ],
        "answer": "C",
        "rationale": "Assessment first priority after any fall."
      },
      {
        "id": "SAFE-025",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Restraints",
        "question": "Wrist restraints applied. True statement about restraints:",
        "options": [
          "A. Can apply based on nursing judgment alone",
          "B. Assess client every 4 hours while restrained",
          "C. Provider order required within 1 hour of application",
          "D. Tie restraints to movable part of bed frame"
        ],
        "answer": "C",
        "rationale": "Restraints require order within 1 hour. Assess q2h minimum. Tie to non-movable frame."
      },
      {
        "id": "SAFE-026",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Restraints",
        "question": "Before restraints for confused client pulling Foley. Try first:",
        "options": [
          "A. Apply mittens to cover hands",
          "B. Cover catheter tubing with blanket",
          "C. Request sitter for constant observation",
          "D. All of the above should be tried first"
        ],
        "answer": "D",
        "rationale": "All are less restrictive alternatives to try before restraints."
      },
      {
        "id": "SAFE-027",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Medication Safety",
        "question": "Medication dose seems unusually high. Nurse should:",
        "options": [
          "A. Administer and monitor closely",
          "B. Give half the dose and notify provider",
          "C. Hold medication and clarify with prescriber",
          "D. Ask another nurse if dose seems appropriate"
        ],
        "answer": "C",
        "rationale": "Hold medication and clarify order. Never give medication you question."
      },
      {
        "id": "SAFE-028",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Medication Safety",
        "question": "'Right Client' demonstrated by:",
        "options": [
          "A. Checking room number before giving medication",
          "B. Using two patient identifiers before administration",
          "C. Asking roommate to confirm client identity",
          "D. Checking client's wristband only"
        ],
        "answer": "B",
        "rationale": "Two identifiers (name AND DOB or MRN). Room number not acceptable."
      },
      {
        "id": "SAFE-029",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Error Prevention",
        "question": "Wrong medication given, no apparent adverse effects. First action:",
        "options": [
          "A. Document error in medical record",
          "B. Complete incident report",
          "C. Assess client and monitor for adverse effects",
          "D. Notify nursing supervisor"
        ],
        "answer": "C",
        "rationale": "Client safety first. Assess and monitor even without apparent effects."
      },
      {
        "id": "SAFE-030",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Error Prevention",
        "question": "Example of a 'near miss':",
        "options": [
          "A. Insulin given to wrong client who became hypoglycemic",
          "B. Medication error discovered before drug was given",
          "C. Client fell and sustained hip fracture",
          "D. Medication administered 1 hour late"
        ],
        "answer": "B",
        "rationale": "Near miss = could have caused harm but caught before reaching client."
      },
      {
        "id": "SAFE-031",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Safe Handling",
        "question": "Transfer 200 lb partially weight-bearing client. Safest approach:",
        "options": [
          "A. Two-person pivot transfer with assist",
          "B. Transfer client independently to save time",
          "C. Use mechanical lift for anyone over 150 lbs",
          "D. Client transfers with verbal cues only"
        ],
        "answer": "A",
        "rationale": "Two-person assist with pivot appropriate for partial weight-bearing."
      },
      {
        "id": "SAFE-032",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Safe Handling",
        "question": "Maximum weight single nurse should manually lift per NIOSH:",
        "options": [
          "A. 50 lbs",
          "B. 35 lbs",
          "C. 75 lbs",
          "D. No limit if nurse is trained properly"
        ],
        "answer": "B",
        "rationale": "NIOSH recommends 35 lbs maximum for single healthcare worker."
      },
      {
        "id": "SAFE-033",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "Environmental Safety",
        "question": "Electrical cord found frayed and damaged. Action:",
        "options": [
          "A. Cover frayed area with electrical tape",
          "B. Remove equipment from use, report to maintenance",
          "C. Continue using if equipment still works",
          "D. Move cord away from high-traffic areas"
        ],
        "answer": "B",
        "rationale": "Remove defective equipment, label 'Do Not Use,' report to maintenance."
      },
      {
        "id": "SAFE-034",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Environmental Safety",
        "question": "PASS for fire extinguisher stands for:",
        "options": [
          "A. Pull, Aim, Squeeze, Sweep",
          "B. Push, Aim, Spray, Sweep",
          "C. Pull, Activate, Squeeze, Stop",
          "D. Point, Aim, Squeeze, Spray"
        ],
        "answer": "A",
        "rationale": "PASS: Pull pin, Aim at base of fire, Squeeze handle, Sweep side to side."
      },
      {
        "id": "SAFE-035",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Environmental Safety",
        "question": "Must remove before client enters MRI room:",
        "options": [
          "A. Cotton hospital gown",
          "B. Plastic ID bracelet",
          "C. Nitroglycerin transdermal patch",
          "D. Silk head scarf"
        ],
        "answer": "C",
        "rationale": "Transdermal patches often contain metal (aluminum backing). Can cause burns in MRI."
      },
      {
        "id": "SAFE-036",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Environmental Safety",
        "question": "Safe portable equipment operation ensured by:",
        "options": [
          "A. Using extension cord to reach outlet",
          "B. Checking biomedical engineering inspection sticker",
          "C. Wiping machine with bleach before use",
          "D. Keeping machine plugged in during transport"
        ],
        "answer": "B",
        "rationale": "Equipment should have current biomedical engineering inspection sticker."
      },
      {
        "id": "SAFE-037",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Environmental Safety",
        "question": "Client on oxygen via nasal cannula. Essential safety measure:",
        "options": [
          "A. Post 'No Smoking' signs in and outside room",
          "B. Store oxygen tanks near radiator for easy access",
          "C. Use petroleum-based lip balm for comfort",
          "D. Keep electrical equipment at least 10 feet away"
        ],
        "answer": "A",
        "rationale": "O2 supports combustion. No Smoking signs required. Avoid petroleum products near O2."
      },
      {
        "id": "SAFE-038",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "Environmental Safety",
        "question": "Client with latex allergy scheduled for surgery. Action:",
        "options": [
          "A. Schedule case as last procedure of day",
          "B. Stock OR with non-latex gloves only",
          "C. Provide latex-free items and notify all care providers",
          "D. Give prophylactic diphenhydramine"
        ],
        "answer": "C",
        "rationale": "Latex-free items, notify ALL providers. Schedule first case preferred (less airborne latex)."
      },
      {
        "id": "SAFE-039",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Medication Safety",
        "question": "Administering high-alert medication (insulin). Required action:",
        "options": [
          "A. Independent double-check by two nurses",
          "B. Double the dose for faster effect",
          "C. Skip blood glucose check to save time",
          "D. Administer even if client is sleeping"
        ],
        "answer": "A",
        "rationale": "High-alert meds require independent verification by two nurses."
      },
      {
        "id": "SAFE-040",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Environmental Safety",
        "question": "Find client unresponsive on bathroom floor. First action:",
        "options": [
          "A. Pull emergency call cord",
          "B. Check for responsiveness and breathing",
          "C. Lift client back to bed",
          "D. Call family to notify them"
        ],
        "answer": "B",
        "rationale": "Assess responsiveness and breathing first (BLS protocol)."
      },
      {
        "id": "SAFE-041",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Infection Control",
        "question": "Shingles (herpes zoster) localized to one dermatome. Precautions:",
        "options": [
          "A. Airborne precautions",
          "B. Droplet precautions",
          "C. Contact precautions",
          "D. Standard precautions only"
        ],
        "answer": "C",
        "rationale": "Localized zoster = contact precautions. Disseminated = airborne."
      },
      {
        "id": "SAFE-042",
        "type": "calculation",
        "difficulty": "hard",
        "topic": "Medication Safety",
        "question": "Heparin 5,000 units subcut ordered. Available: 10,000 units/mL. Give:",
        "options": [
          "A. 0.25 mL",
          "B. 0.5 mL",
          "C. 1 mL",
          "D. 2 mL"
        ],
        "answer": "B",
        "rationale": "5,000 \u00f7 10,000 = 0.5 mL. Heparin is high-alert - requires verification."
      },
      {
        "id": "SAFE-043",
        "type": "sata",
        "difficulty": "medium",
        "topic": "Error Prevention",
        "question": "Factors contributing to medication errors: SELECT ALL THAT APPLY.",
        "options": [
          "A. Look-alike/sound-alike drug names",
          "B. Standardized order sets",
          "C. Interruptions during medication preparation",
          "D. Inadequate lighting in medication room",
          "E. Bar-code medication administration",
          "F. Fatigue and working overtime"
        ],
        "answer": [
          "A",
          "C",
          "D",
          "F"
        ],
        "rationale": "Error contributors: LASA drugs, interruptions, poor lighting, fatigue. Standardized orders and bar-coding REDUCE errors."
      },
      {
        "id": "SAFE-044",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Infection Control",
        "question": "Client admitted with scabies. First action:",
        "options": [
          "A. Apply permethrin cream from neck to toes",
          "B. Implement contact precautions",
          "C. Notify all staff who had contact",
          "D. Teach family about transmission"
        ],
        "answer": "B",
        "rationale": "Implement contact precautions immediately to prevent transmission."
      },
      {
        "id": "SAFE-045",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Fall Prevention",
        "question": "Medication class posing highest fall risk in elderly:",
        "options": [
          "A. Antibiotics",
          "B. Benzodiazepines",
          "C. Antiemetics",
          "D. Proton pump inhibitors"
        ],
        "answer": "B",
        "rationale": "Benzodiazepines (sedatives) significantly increase fall risk due to sedation, impaired balance."
      },
      {
        "id": "SAFE-046",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Environmental Safety",
        "question": "Code Pink (infant abduction) announced. All staff should:",
        "options": [
          "A. Continue normal activities - only affects nursery",
          "B. Position at exits to observe anyone leaving with infant",
          "C. Search unit for unauthorized persons",
          "D. Lock medication carts and leave unit"
        ],
        "answer": "B",
        "rationale": "All staff position at exits to observe anyone leaving with infant."
      },
      {
        "id": "SAFE-047",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Infection Control",
        "question": "HBV exposure. Vaccinated 10 years ago with documented immunity. Action:",
        "options": [
          "A. Administer HBIG immediately",
          "B. Restart Hepatitis B vaccine series",
          "C. Test anti-HBs titer, proceed based on results",
          "D. No treatment needed if previously immune"
        ],
        "answer": "C",
        "rationale": "Check current titer. Previous immunity may wane. If adequate (\u226510 mIU/mL), no treatment needed."
      },
      {
        "id": "SAFE-048",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Restraints",
        "question": "Client in four-point restraints for 4 hours. Per protocol, must occur:",
        "options": [
          "A. Restraints must be discontinued",
          "B. Provider must evaluate client in person",
          "C. Restraints can continue indefinitely",
          "D. Restraints automatically renewed for 24 hours"
        ],
        "answer": "B",
        "rationale": "Face-to-face provider evaluation required per specific timeframes (4 hours for adult behavioral)."
      },
      {
        "id": "SAFE-049",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Medication Safety",
        "question": "IV potassium chloride. Correct statement:",
        "options": [
          "A. Can give rapid IV push in emergencies",
          "B. Maximum concentration for peripheral IV is 40 mEq/L",
          "C. Infuse at maximum rate of 40 mEq/hour",
          "D. Does not require cardiac monitoring"
        ],
        "answer": "B",
        "rationale": "Never IV push. Peripheral max 40 mEq/L. Typical rate 10 mEq/hour. Higher rates need monitoring."
      },
      {
        "id": "SAFE-050",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Error Prevention",
        "question": "Primary purpose of surgical 'time-out':",
        "options": [
          "A. Allow surgical team to take a break",
          "B. Verify correct patient, site, and procedure",
          "C. Review anesthesia plan with family",
          "D. Count surgical instruments"
        ],
        "answer": "B",
        "rationale": "Time-out: verify correct patient (two identifiers), correct site, correct procedure."
      }
    ]
  },
  "labValues": {
    "name": "Lab Values & Vital Signs",
    "icon": "\ud83d\udd2c",
    "weight": "9-15%",
    "questionCount": 50,
    "questions": [
      {
        "id": "LAB-001",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "CBC",
        "question": "Hemoglobin 7.2 g/dL. Expected clinical finding:",
        "options": [
          "A. Flushed skin and headache",
          "B. Fatigue, pallor, and tachycardia",
          "C. Edema and weight gain",
          "D. Jaundice and dark urine"
        ],
        "answer": "B",
        "rationale": "Severe anemia (normal 12-18 g/dL). Body compensates with tachycardia. Pallor, fatigue, dyspnea expected."
      },
      {
        "id": "LAB-002",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "CBC",
        "question": "WBC 2,500/mm\u00b3. Client teaching should include:",
        "options": [
          "A. Increase iron-rich foods in diet",
          "B. Avoid crowds and people with infections",
          "C. Report any unusual bleeding immediately",
          "D. Increase fluid intake to 3 liters daily"
        ],
        "answer": "B",
        "rationale": "Low WBC (normal 5,000-10,000) = infection risk. Avoid crowds, report fever."
      },
      {
        "id": "LAB-003",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "CBC",
        "question": "Platelet count 45,000/mm\u00b3. Most important intervention:",
        "options": [
          "A. Monitor for signs of infection",
          "B. Implement bleeding precautions",
          "C. Restrict fluid intake",
          "D. Encourage early ambulation"
        ],
        "answer": "B",
        "rationale": "Low platelets (normal 150,000-400,000) = bleeding risk. Soft toothbrush, electric razor, avoid trauma."
      },
      {
        "id": "LAB-004",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "CBC",
        "question": "RBC 3.0 million, Hgb 9.0 g/dL, Hct 27%, MCV 68 fL. Type of anemia:",
        "options": [
          "A. Iron deficiency anemia",
          "B. Vitamin B12 deficiency anemia",
          "C. Folic acid deficiency anemia",
          "D. Anemia of chronic disease"
        ],
        "answer": "A",
        "rationale": "Low MCV (<80 fL) = microcytic anemia. Iron deficiency most common cause. B12/folate cause macrocytic (high MCV)."
      },
      {
        "id": "LAB-005",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "CBC",
        "question": "Hematocrit 60%. Condition to suspect:",
        "options": [
          "A. Anemia",
          "B. Polycythemia vera",
          "C. Leukemia",
          "D. Thrombocytopenia"
        ],
        "answer": "B",
        "rationale": "High Hct (normal 37-52%) = polycythemia. Increases blood viscosity and thrombosis risk."
      },
      {
        "id": "LAB-006",
        "type": "mcq",
        "difficulty": "easy",
        "topic": "CBC",
        "question": "Which CBC value indicates oxygen-carrying capacity of blood:",
        "options": [
          "A. White blood cell count",
          "B. Platelet count",
          "C. Hemoglobin level",
          "D. Hematocrit"
        ],
        "answer": "C",
        "rationale": "Hemoglobin carries oxygen. Directly measures oxygen-carrying capacity."
      },
      {
        "id": "LAB-007",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "CBC",
        "question": "Client receiving chemotherapy. Notify provider immediately for:",
        "options": [
          "A. RBC 4.2 million/mm\u00b3",
          "B. WBC 1,800/mm\u00b3",
          "C. Hgb 11.5 g/dL",
          "D. Hct 36%"
        ],
        "answer": "B",
        "rationale": "WBC 1,800 = severe neutropenia. Critical infection risk. Notify immediately."
      },
      {
        "id": "LAB-008",
        "type": "sata",
        "difficulty": "medium",
        "topic": "CBC",
        "question": "Pancytopenia (low RBC, WBC, platelets). Priority assessments: SELECT ALL THAT APPLY.",
        "options": [
          "A. Monitor for signs of infection",
          "B. Assess for bleeding",
          "C. Check for fatigue and dyspnea",
          "D. Monitor for peripheral edema",
          "E. Assess for jaundice",
          "F. Monitor for hypertension"
        ],
        "answer": [
          "A",
          "B",
          "C"
        ],
        "rationale": "Pancytopenia: low WBC (infection), low platelets (bleeding), low RBC (anemia symptoms)."
      },
      {
        "id": "LAB-009",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "CBC",
        "question": "Neutrophil count 500/mm\u00b3. Level of precautions:",
        "options": [
          "A. Standard precautions only",
          "B. Contact precautions",
          "C. Neutropenic/protective precautions",
          "D. Airborne precautions"
        ],
        "answer": "C",
        "rationale": "ANC <500 = severe neutropenia. Protective precautions: private room, strict hygiene, low-bacteria diet."
      },
      {
        "id": "LAB-010",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "CBC",
        "question": "WBC 15,000/mm\u00b3, Neutrophils 80%, Bands 15%. Elevated bands indicate:",
        "options": [
          "A. Viral infection",
          "B. Acute bacterial infection (left shift)",
          "C. Allergic reaction",
          "D. Bone marrow suppression"
        ],
        "answer": "B",
        "rationale": "Elevated bands (>5%) = 'left shift.' Bone marrow releasing immature WBCs for acute bacterial infection."
      },
      {
        "id": "LAB-011",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Electrolytes",
        "question": "Potassium 6.2 mEq/L. ECG change to monitor for:",
        "options": [
          "A. Flattened T waves",
          "B. Peaked T waves",
          "C. Prolonged QT interval",
          "D. ST segment elevation"
        ],
        "answer": "B",
        "rationale": "Hyperkalemia (>5.0 mEq/L) = peaked T waves first. Can progress to fatal arrhythmias."
      },
      {
        "id": "LAB-012",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Electrolytes",
        "question": "Sodium 128 mEq/L. Expected assessment finding:",
        "options": [
          "A. Excessive thirst",
          "B. Confusion and lethargy",
          "C. Muscle cramps and twitching",
          "D. Flushed, dry skin"
        ],
        "answer": "B",
        "rationale": "Hyponatremia (<136 mEq/L) = neurological symptoms from cerebral edema. Confusion, lethargy, seizures."
      },
      {
        "id": "LAB-013",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Electrolytes",
        "question": "Client on loop diuretic, K+ 2.9 mEq/L. Associated symptom:",
        "options": [
          "A. Muscle weakness and leg cramps",
          "B. Hyperactive reflexes",
          "C. Diarrhea",
          "D. Hypertension"
        ],
        "answer": "A",
        "rationale": "Hypokalemia (<3.5 mEq/L) = muscle weakness, cramps, fatigue, constipation, arrhythmias."
      },
      {
        "id": "LAB-014",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Electrolytes",
        "question": "Calcium 7.2 mg/dL. Sign to assess for:",
        "options": [
          "A. Positive Chvostek sign (facial twitching)",
          "B. Absent deep tendon reflexes",
          "C. Constipation",
          "D. Shortened QT interval"
        ],
        "answer": "A",
        "rationale": "Hypocalcemia (<9 mg/dL) = neuromuscular irritability. Chvostek (facial twitch), Trousseau, tetany."
      },
      {
        "id": "LAB-015",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Electrolytes",
        "question": "Magnesium 1.0 mEq/L. Possible complication:",
        "options": [
          "A. Bradycardia",
          "B. Torsades de pointes",
          "C. Hypertension",
          "D. Respiratory depression"
        ],
        "answer": "B",
        "rationale": "Severe hypomagnesemia can cause torsades de pointes. IV magnesium is treatment."
      },
      {
        "id": "LAB-016",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Renal",
        "question": "BUN 35 mg/dL, Creatinine 2.5 mg/dL. These values indicate:",
        "options": [
          "A. Normal kidney function",
          "B. Impaired kidney function",
          "C. Liver disease",
          "D. Dehydration only"
        ],
        "answer": "B",
        "rationale": "Both elevated (BUN normal 10-20, Cr 0.7-1.3 mg/dL) = impaired kidney function."
      },
      {
        "id": "LAB-017",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Glucose",
        "question": "Blood glucose 45 mg/dL. Priority nursing action:",
        "options": [
          "A. Recheck glucose in 15 minutes",
          "B. Administer 15 grams fast-acting carbohydrate",
          "C. Hold next insulin dose",
          "D. Notify provider before taking action"
        ],
        "answer": "B",
        "rationale": "Hypoglycemia = treat immediately. Rule of 15: 15g carb, wait 15 min, recheck."
      },
      {
        "id": "LAB-018",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Glucose",
        "question": "DKA: glucose 450, pH 7.28, K+ 5.8 mEq/L. After insulin and fluids started, monitor closely for:",
        "options": [
          "A. Rising potassium levels",
          "B. Falling potassium levels",
          "C. Rising glucose levels",
          "D. Rising bicarbonate levels"
        ],
        "answer": "B",
        "rationale": "In DKA, K+ appears elevated but total body depleted. Insulin drives K+ into cells = risk of hypokalemia."
      },
      {
        "id": "LAB-019",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Electrolytes",
        "question": "Phosphorus 5.8 mg/dL, Calcium 7.5 mg/dL. Their relationship:",
        "options": [
          "A. Inverse (when one rises, other falls)",
          "B. Rise and fall together",
          "C. Unrelated electrolytes",
          "D. High phosphorus causes high calcium"
        ],
        "answer": "A",
        "rationale": "Calcium and phosphorus have inverse relationship. Common in chronic kidney disease."
      },
      {
        "id": "LAB-020",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Electrolytes",
        "question": "CO2 (bicarbonate) 18 mEq/L. May indicate:",
        "options": [
          "A. Respiratory acidosis",
          "B. Metabolic acidosis",
          "C. Respiratory alkalosis",
          "D. Metabolic alkalosis"
        ],
        "answer": "B",
        "rationale": "Low bicarbonate (normal 22-26 mEq/L) = metabolic acidosis. Body using up bicarb to buffer acid."
      },
      {
        "id": "LAB-021",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Coagulation",
        "question": "On heparin therapy, PTT 90 seconds (therapeutic 60-80). Action:",
        "options": [
          "A. Give next heparin dose as scheduled",
          "B. Hold heparin and notify provider",
          "C. Increase heparin dose",
          "D. Prepare to administer protamine sulfate"
        ],
        "answer": "B",
        "rationale": "Above therapeutic range = hold and notify. Protamine only for severe bleeding."
      },
      {
        "id": "LAB-022",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Coagulation",
        "question": "On warfarin, INR 4.5 (therapeutic 2-3). Priority nursing action:",
        "options": [
          "A. Continue warfarin, recheck in 1 week",
          "B. Hold warfarin, assess for bleeding, notify provider",
          "C. Administer vitamin K immediately",
          "D. Increase warfarin dose"
        ],
        "answer": "B",
        "rationale": "Supratherapeutic = hold, assess bleeding, notify. Vitamin K reserved for serious bleeding."
      },
      {
        "id": "LAB-023",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Coagulation",
        "question": "Client on enoxaparin (Lovenox) asks why no blood monitoring needed. Best response:",
        "options": [
          "A. Lovenox doesn't affect clotting",
          "B. More predictable response, routine monitoring not typically required",
          "C. You should actually be having regular blood tests",
          "D. Lovenox is safer than heparin so tests aren't needed"
        ],
        "answer": "B",
        "rationale": "LMWH has predictable pharmacokinetics. Routine aPTT not required. Anti-Xa may be checked in special populations."
      },
      {
        "id": "LAB-024",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Coagulation",
        "question": "Antidote for warfarin overdose with serious bleeding:",
        "options": [
          "A. Protamine sulfate",
          "B. Vitamin K (phytonadione)",
          "C. Aminocaproic acid",
          "D. Desmopressin (DDAVP)"
        ],
        "answer": "B",
        "rationale": "Vitamin K reverses warfarin. For serious bleeding, also give FFP or PCC for immediate factor replacement."
      },
      {
        "id": "LAB-025",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Coagulation",
        "question": "Platelet count 25,000/mm\u00b3, client scheduled for surgery. Anticipate:",
        "options": [
          "A. Surgery proceeds as scheduled",
          "B. Platelet transfusion before surgery",
          "C. Vitamin K administration",
          "D. Heparin administration"
        ],
        "answer": "B",
        "rationale": "Platelets typically transfused to raise above 50,000-100,000 before procedures."
      },
      {
        "id": "LAB-026",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Coagulation",
        "question": "Elevated D-dimer commonly helps diagnose:",
        "options": [
          "A. Anemia",
          "B. Deep vein thrombosis or pulmonary embolism",
          "C. Liver failure",
          "D. Hemophilia"
        ],
        "answer": "B",
        "rationale": "D-dimer elevated when clots breaking down. Helps rule out DVT/PE (negative makes clot unlikely)."
      },
      {
        "id": "LAB-027",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Coagulation",
        "question": "Rivaroxaban (Xarelto) before surgery. When to hold:",
        "options": [
          "A. 24 hours before",
          "B. 48-72 hours depending on renal function",
          "C. No need to hold",
          "D. 1 week before surgery"
        ],
        "answer": "B",
        "rationale": "DOACs typically held 48-72 hours before surgery, depending on renal function and bleeding risk."
      },
      {
        "id": "LAB-028",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Coagulation",
        "question": "Expected findings in DIC (disseminated intravascular coagulation):",
        "options": [
          "A. Elevated fibrinogen, elevated platelets",
          "B. Low platelets, prolonged PT/PTT, elevated D-dimer",
          "C. Normal platelets with elevated INR only",
          "D. Low D-dimer with high platelet count"
        ],
        "answer": "B",
        "rationale": "DIC: clotting factors consumed. Low platelets, low fibrinogen, prolonged PT/PTT, elevated D-dimer."
      },
      {
        "id": "LAB-029",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Cardiac",
        "question": "Client with chest pain. Troponin I 2.5 ng/mL (normal <0.04). Indicates:",
        "options": [
          "A. Normal finding, no cardiac damage",
          "B. Myocardial infarction",
          "C. Stable angina",
          "D. Heart failure without MI"
        ],
        "answer": "B",
        "rationale": "Significantly elevated troponin with chest pain = MI. Troponin specific for myocardial damage."
      },
      {
        "id": "LAB-030",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Cardiac",
        "question": "BNP 850 pg/mL (normal <100). Condition suggested:",
        "options": [
          "A. Acute myocardial infarction",
          "B. Heart failure with ventricular stretch",
          "C. Pulmonary embolism",
          "D. Atrial fibrillation only"
        ],
        "answer": "B",
        "rationale": "BNP released by stretched ventricles. Elevated = heart failure. Higher level = more severe."
      },
      {
        "id": "LAB-031",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Cardiac",
        "question": "Chest pain occurred 8 hours ago. Most useful cardiac marker now:",
        "options": [
          "A. Myoglobin",
          "B. CK-MB",
          "C. Troponin I",
          "D. BNP"
        ],
        "answer": "C",
        "rationale": "Troponin preferred at 8 hours (rises 3-6 hrs, stays elevated days). Myoglobin earliest but not cardiac-specific."
      },
      {
        "id": "LAB-032",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Liver",
        "question": "AST 250 U/L, ALT 300 U/L (normal <35). Indicates:",
        "options": [
          "A. Kidney damage",
          "B. Liver cell injury",
          "C. Heart muscle damage",
          "D. Bone disease"
        ],
        "answer": "B",
        "rationale": "AST/ALT elevated = hepatocellular injury. ALT more liver-specific."
      },
      {
        "id": "LAB-033",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Liver",
        "question": "Total bilirubin 4.5 mg/dL (normal 0.1-1.0). Expected physical finding:",
        "options": [
          "A. Petechiae",
          "B. Jaundice",
          "C. Pallor",
          "D. Cyanosis"
        ],
        "answer": "B",
        "rationale": "Elevated bilirubin (>2-3 mg/dL) causes jaundice - yellowing skin and sclera."
      },
      {
        "id": "LAB-034",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Liver",
        "question": "Cirrhosis with prolonged PT/INR. Cause of this coagulation abnormality:",
        "options": [
          "A. Client is taking warfarin",
          "B. Liver cannot synthesize clotting factors",
          "C. Client has vitamin K excess",
          "D. Platelet production is increased"
        ],
        "answer": "B",
        "rationale": "Liver synthesizes clotting factors. Cirrhosis = impaired synthesis = prolonged PT/INR."
      },
      {
        "id": "LAB-035",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Liver",
        "question": "Albumin 2.0 g/dL (normal 3.5-5.0). Monitor for:",
        "options": [
          "A. Hypertension",
          "B. Peripheral edema and ascites",
          "C. Hyperglycemia",
          "D. Dehydration"
        ],
        "answer": "B",
        "rationale": "Low albumin = low oncotic pressure. Fluid leaks from vessels = edema, ascites."
      },
      {
        "id": "LAB-036",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Liver",
        "question": "Elevated ALP with normal AST/ALT. Most likely indicates:",
        "options": [
          "A. Hepatitis",
          "B. Bile duct obstruction or bone disease",
          "C. Acute liver failure",
          "D. Muscle injury"
        ],
        "answer": "B",
        "rationale": "Isolated ALP elevation = biliary obstruction or bone disease, not hepatocellular injury."
      },
      {
        "id": "LAB-037",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Liver",
        "question": "Best indicator of liver's ability to synthesize proteins:",
        "options": [
          "A. AST level",
          "B. Total bilirubin",
          "C. Albumin and PT/INR",
          "D. Alkaline phosphatase"
        ],
        "answer": "C",
        "rationale": "Albumin and clotting factors synthesized by liver. Low albumin + prolonged PT = synthetic failure."
      },
      {
        "id": "LAB-038",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "Liver",
        "question": "Alcoholic hepatitis with ammonia 150 mcg/dL (normal 15-45). Monitor for:",
        "options": [
          "A. Respiratory failure",
          "B. Hepatic encephalopathy",
          "C. Acute kidney injury",
          "D. Cardiac arrhythmias"
        ],
        "answer": "B",
        "rationale": "Liver converts ammonia to urea. In failure, ammonia crosses blood-brain barrier causing encephalopathy."
      },
      {
        "id": "LAB-039",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "ABG",
        "question": "pH 7.30, PaCO2 55 mmHg, HCO3 24 mEq/L. Acid-base status:",
        "options": [
          "A. Respiratory acidosis",
          "B. Respiratory alkalosis",
          "C. Metabolic acidosis",
          "D. Metabolic alkalosis"
        ],
        "answer": "A",
        "rationale": "Low pH (acidotic) + high CO2 (respiratory cause) + normal HCO3 = respiratory acidosis."
      },
      {
        "id": "LAB-040",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "ABG",
        "question": "pH 7.48, PaCO2 32 mmHg, HCO3 24 mEq/L. Acid-base status:",
        "options": [
          "A. Respiratory acidosis",
          "B. Respiratory alkalosis",
          "C. Metabolic acidosis",
          "D. Metabolic alkalosis"
        ],
        "answer": "B",
        "rationale": "High pH (alkalotic) + low CO2 + normal HCO3 = respiratory alkalosis (hyperventilation)."
      },
      {
        "id": "LAB-041",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "ABG",
        "question": "DKA: pH 7.25, PaCO2 28 mmHg, HCO3 14 mEq/L. Low PaCO2 indicates:",
        "options": [
          "A. Primary respiratory problem",
          "B. Body compensating by blowing off CO2",
          "C. Client needs mechanical ventilation",
          "D. Mixed acid-base disorder"
        ],
        "answer": "B",
        "rationale": "Metabolic acidosis with respiratory compensation. Body hyperventilates (Kussmaul) to blow off CO2."
      },
      {
        "id": "LAB-042",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "ABG",
        "question": "pH 7.38, PaCO2 60 mmHg, HCO3 34 mEq/L. Indicates:",
        "options": [
          "A. Normal acid-base balance",
          "B. Compensated respiratory acidosis",
          "C. Uncompensated metabolic alkalosis",
          "D. Acute respiratory failure"
        ],
        "answer": "B",
        "rationale": "Normal pH but both CO2 and HCO3 abnormal = compensated. High CO2 (acid) balanced by high HCO3 (base)."
      },
      {
        "id": "LAB-043",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "ABG",
        "question": "PaO2 55 mmHg on room air (normal 80-100). Indicates:",
        "options": [
          "A. Normal oxygenation",
          "B. Hypoxemia requiring supplemental oxygen",
          "C. Respiratory alkalosis",
          "D. Carbon dioxide retention"
        ],
        "answer": "B",
        "rationale": "Normal PaO2 80-100 mmHg. Below 60 = significant hypoxemia requiring oxygen."
      },
      {
        "id": "LAB-044",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "ABG",
        "question": "Client vomiting profusely. Expected ABG pattern:",
        "options": [
          "A. Respiratory acidosis",
          "B. Respiratory alkalosis",
          "C. Metabolic acidosis",
          "D. Metabolic alkalosis"
        ],
        "answer": "D",
        "rationale": "Vomiting = loss of gastric acid (HCl) = metabolic alkalosis. High pH, high HCO3."
      },
      {
        "id": "LAB-045",
        "type": "mcq",
        "difficulty": "hard",
        "topic": "ABG",
        "question": "ROME in ABG interpretation stands for:",
        "options": [
          "A. Respiratory Opposite, Metabolic Equal",
          "B. Respiratory Oxygen, Metabolic Exchange",
          "C. Retain Oxygen, Maintain Equilibrium",
          "D. Reduce Oxidation, Monitor Electrolytes"
        ],
        "answer": "A",
        "rationale": "ROME: Respiratory Opposite (pH and CO2 opposite directions), Metabolic Equal (pH and HCO3 same direction)."
      },
      {
        "id": "LAB-046",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Vital Signs",
        "question": "BP 88/50 mmHg, HR 120 bpm, urine output 15 mL/hour. Suggests:",
        "options": [
          "A. Hypertensive crisis",
          "B. Hypovolemic shock",
          "C. Normal post-operative findings",
          "D. Warm septic shock"
        ],
        "answer": "B",
        "rationale": "Hypotension + tachycardia (compensatory) + oliguria = classic hypovolemic shock."
      },
      {
        "id": "LAB-047",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Vital Signs",
        "question": "Head injury: BP 180/60 mmHg, HR 48 bpm. This pattern indicates:",
        "options": [
          "A. Cushing's triad - increased intracranial pressure",
          "B. Beck's triad - cardiac tamponade",
          "C. Cardiogenic shock",
          "D. Neurogenic shock"
        ],
        "answer": "A",
        "rationale": "Cushing's triad: hypertension (widening pulse pressure), bradycardia, irregular respirations = severely elevated ICP."
      },
      {
        "id": "LAB-048",
        "type": "sata",
        "difficulty": "hard",
        "topic": "Critical Values",
        "question": "Require immediate provider notification: SELECT ALL THAT APPLY.",
        "options": [
          "A. Potassium 6.8 mEq/L",
          "B. Hemoglobin 10.5 g/dL",
          "C. Blood glucose 35 mg/dL",
          "D. Sodium 128 mEq/L",
          "E. Platelet count 18,000/mm\u00b3",
          "F. Troponin I 5.0 ng/mL"
        ],
        "answer": [
          "A",
          "C",
          "E",
          "F"
        ],
        "rationale": "Critical values: K+ 6.8 (arrhythmia), glucose 35 (hypoglycemia), platelets 18,000 (bleeding), troponin 5.0 (MI)."
      },
      {
        "id": "LAB-049",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Vital Signs",
        "question": "Temp 38.9\u00b0C (102\u00b0F), HR 110 bpm, RR 24/min, WBC 18,000/mm\u00b3. Suggests:",
        "options": [
          "A. Normal stress response",
          "B. SIRS (Systemic Inflammatory Response Syndrome)",
          "C. Hypothermia",
          "D. Dehydration only"
        ],
        "answer": "B",
        "rationale": "SIRS criteria: 2+ of: temp >38\u00b0C or <36\u00b0C, HR >90, RR >20, WBC >12,000 or <4,000. This client meets criteria."
      },
      {
        "id": "LAB-050",
        "type": "mcq",
        "difficulty": "medium",
        "topic": "Vital Signs",
        "question": "Orthostatic hypotension defined as:",
        "options": [
          "A. Systolic BP drop of 10 mmHg when standing",
          "B. Systolic drop \u226520 mmHg OR diastolic drop \u226510 mmHg when standing",
          "C. Heart rate increase of 10 bpm when standing",
          "D. Diastolic BP increase of 15 mmHg when standing"
        ],
        "answer": "B",
        "rationale": "Orthostatic hypotension: systolic drop \u226520 OR diastolic drop \u226510 within 3 min of standing."
      }
    ]
  },
  "fundamentals": {
    "name": "Fundamentals of Nursing",
    "description": "Core nursing concepts, basic care, hygiene, mobility, nutrition, and foundational skills",
    "questions": [
      {
        "id": "fund-001",
        "question": "A nurse is assessing a patient's vital signs. Which finding should be reported immediately?",
        "options": [
          "A. Blood pressure 118/76 mmHg",
          "B. Respiratory rate 8 breaths/min",
          "C. Temperature 99.0\u00b0F (37.2\u00b0C)",
          "D. Pulse 72 beats/min"
        ],
        "answer": "B",
        "rationale": "A respiratory rate of 8 breaths/min indicates bradypnea and requires immediate intervention. Normal respiratory rate is 12-20 breaths/min. The other values are within normal limits.",
        "category": "fundamentals",
        "subcategory": "Vital Signs",
        "difficulty": "easy",
        "topic": "Respiratory Assessment",
        "type": "mcq"
      },
      {
        "id": "fund-002",
        "question": "When performing hand hygiene with soap and water, the nurse should scrub for at least:",
        "options": [
          "A. 5 seconds",
          "B. 10 seconds",
          "C. 20 seconds",
          "D. 60 seconds"
        ],
        "answer": "C",
        "rationale": "The CDC recommends scrubbing hands with soap and water for at least 20 seconds to effectively remove microorganisms. This is approximately the time it takes to sing 'Happy Birthday' twice.",
        "category": "fundamentals",
        "subcategory": "Infection Control",
        "difficulty": "easy",
        "topic": "Hand Hygiene",
        "type": "mcq"
      },
      {
        "id": "fund-003",
        "question": "A patient is ordered NPO after midnight for surgery. The patient asks for water at 6 AM. What is the nurse's best response?",
        "options": [
          "A. 'I'll bring you some ice chips instead.'",
          "B. 'You cannot have anything by mouth, but I can provide mouth care.'",
          "C. 'A small sip of water won't hurt.'",
          "D. 'Let me check with the surgeon first.'"
        ],
        "answer": "B",
        "rationale": "NPO means nothing by mouth, including water and ice chips. The nurse should explain this and offer mouth care for comfort. Giving any oral intake could increase aspiration risk during anesthesia.",
        "category": "fundamentals",
        "subcategory": "Preoperative Care",
        "difficulty": "medium",
        "topic": "NPO Status",
        "type": "mcq"
      },
      {
        "id": "fund-004",
        "question": "Which position is most appropriate for a patient experiencing dyspnea?",
        "options": [
          "A. Supine",
          "B. Prone",
          "C. High Fowler's",
          "D. Trendelenburg"
        ],
        "answer": "C",
        "rationale": "High Fowler's position (60-90 degrees) maximizes lung expansion and decreases venous return to the heart, making breathing easier for patients with dyspnea. Supine and Trendelenburg would worsen breathing difficulty.",
        "category": "fundamentals",
        "subcategory": "Positioning",
        "difficulty": "easy",
        "topic": "Respiratory Positioning",
        "type": "mcq"
      },
      {
        "id": "fund-005",
        "question": "A nurse is preparing to insert an indwelling urinary catheter. Which actions are appropriate? Select all that apply.",
        "options": [
          "A. Use sterile technique throughout the procedure",
          "B. Inflate the balloon before insertion to test it",
          "C. Cleanse the urethral meatus from clean to dirty",
          "D. Secure the catheter to the patient's inner thigh",
          "E. Position the drainage bag above bladder level"
        ],
        "answer": [
          "A",
          "B",
          "D"
        ],
        "rationale": "Sterile technique is required (A). Testing the balloon before insertion ensures it functions properly (B). Securing to the inner thigh prevents tension and trauma (D). Cleansing should be from dirty to clean or using circular motions from center outward (C is incorrect). The drainage bag must be below bladder level to prevent backflow (E is incorrect).",
        "category": "fundamentals",
        "subcategory": "Urinary Catheterization",
        "difficulty": "medium",
        "topic": "Catheter Insertion",
        "type": "sata"
      },
      {
        "id": "fund-006",
        "question": "The nurse is caring for a patient on bed rest. To prevent pressure ulcers, the nurse should reposition the patient at least every:",
        "options": [
          "A. 30 minutes",
          "B. 1 hour",
          "C. 2 hours",
          "D. 4 hours"
        ],
        "answer": "C",
        "rationale": "Patients on bed rest should be repositioned at least every 2 hours to prevent pressure ulcers. More frequent repositioning may be needed for high-risk patients. Waiting 4 hours is too long and increases pressure injury risk.",
        "category": "fundamentals",
        "subcategory": "Skin Integrity",
        "difficulty": "easy",
        "topic": "Pressure Ulcer Prevention",
        "type": "mcq"
      },
      {
        "id": "fund-007",
        "question": "A patient has a prescription for a regular diet. Which meal selection indicates the patient understands healthy nutrition?",
        "options": [
          "A. Fried chicken, french fries, and soda",
          "B. Grilled salmon, steamed broccoli, and brown rice",
          "C. Hot dog, chips, and lemonade",
          "D. Cheeseburger, onion rings, and milkshake"
        ],
        "answer": "B",
        "rationale": "Grilled salmon provides lean protein and omega-3 fatty acids, steamed broccoli provides fiber and vitamins, and brown rice is a whole grain. This meal is balanced and nutritious compared to the high-fat, high-sodium, processed options.",
        "category": "fundamentals",
        "subcategory": "Nutrition",
        "difficulty": "easy",
        "topic": "Healthy Diet",
        "type": "mcq"
      },
      {
        "id": "fund-008",
        "question": "When documenting in the medical record, the nurse should:",
        "options": [
          "A. Use correction fluid for errors",
          "B. Leave blank spaces to add information later",
          "C. Draw a single line through errors and initial",
          "D. Document before providing care to save time"
        ],
        "answer": "C",
        "rationale": "The correct way to correct an error in documentation is to draw a single line through the error, write 'error' or 'mistaken entry,' initial, and date it. Never use correction fluid, leave blank spaces, or document care before it is provided.",
        "category": "fundamentals",
        "subcategory": "Documentation",
        "difficulty": "easy",
        "topic": "Medical Record Documentation",
        "type": "mcq"
      },
      {
        "id": "fund-009",
        "question": "A nurse is preparing to administer medication. Which are components of the 'Six Rights' of medication administration? Select all that apply.",
        "options": [
          "A. Right patient",
          "B. Right dose",
          "C. Right physician",
          "D. Right route",
          "E. Right time",
          "F. Right documentation"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E",
          "F"
        ],
        "rationale": "The Six Rights include: Right patient, Right drug, Right dose, Right route, Right time, and Right documentation. 'Right physician' is not one of the rights. Some sources include additional rights like right reason and right response.",
        "category": "fundamentals",
        "subcategory": "Medication Administration",
        "difficulty": "easy",
        "topic": "Six Rights",
        "type": "sata"
      },
      {
        "id": "fund-010",
        "question": "A patient's oxygen saturation is 89% on room air. The nurse should first:",
        "options": [
          "A. Document the finding and continue monitoring",
          "B. Apply supplemental oxygen",
          "C. Place the patient in a supine position",
          "D. Encourage the patient to cough and deep breathe"
        ],
        "answer": "B",
        "rationale": "An oxygen saturation of 89% is below the normal range (95-100%) and indicates hypoxemia. The priority intervention is to apply supplemental oxygen. The nurse should then assess the patient further and notify the provider.",
        "category": "fundamentals",
        "subcategory": "Oxygenation",
        "difficulty": "medium",
        "topic": "Oxygen Therapy",
        "type": "mcq"
      },
      {
        "id": "fund-011",
        "question": "The nurse is teaching a patient about crutch walking. Which statement indicates correct understanding?",
        "options": [
          "A. 'I should rest my weight on the axillary pads.'",
          "B. 'The crutches should be 2 inches below my axilla.'",
          "C. 'I should look at my feet while walking.'",
          "D. 'My elbows should be fully extended when walking.'"
        ],
        "answer": "B",
        "rationale": "Crutches should be positioned 2-3 finger widths (about 2 inches) below the axilla. Weight should be borne on the hands, not axillary pads, to prevent nerve damage. The patient should look ahead, not at feet, and elbows should be slightly flexed (15-30 degrees).",
        "category": "fundamentals",
        "subcategory": "Mobility",
        "difficulty": "medium",
        "topic": "Assistive Devices",
        "type": "mcq"
      },
      {
        "id": "fund-012",
        "question": "A nurse is assessing a patient's pain. Which statement best reflects the principle of pain assessment?",
        "options": [
          "A. 'Pain is whatever the patient says it is.'",
          "B. 'Vital signs are the most reliable indicator of pain.'",
          "C. 'Patients who smile cannot be in severe pain.'",
          "D. 'Opioid-seeking patients exaggerate their pain.'"
        ],
        "answer": "A",
        "rationale": "Pain is subjective and individualized. The gold standard is the patient's self-report. Vital signs may not change with chronic pain, patients may smile as a coping mechanism, and assumptions about drug-seeking behavior lead to undertreatment of pain.",
        "category": "fundamentals",
        "subcategory": "Pain Management",
        "difficulty": "medium",
        "topic": "Pain Assessment",
        "type": "mcq"
      },
      {
        "id": "fund-013",
        "question": "When transferring a patient from bed to wheelchair, the nurse should:",
        "options": [
          "A. Position the wheelchair at the head of the bed",
          "B. Lock the wheelchair wheels before transfer",
          "C. Have the patient wear socks without shoes",
          "D. Keep the bed at its highest position"
        ],
        "answer": "B",
        "rationale": "Wheelchair wheels must be locked before transfer to prevent the chair from rolling away, which could cause a fall. The wheelchair should be placed at a 45-degree angle to the bed, the patient should wear non-skid footwear, and the bed should be at the lowest position.",
        "category": "fundamentals",
        "subcategory": "Patient Transfer",
        "difficulty": "easy",
        "topic": "Safe Transfer Techniques",
        "type": "mcq"
      },
      {
        "id": "fund-014",
        "question": "A nurse is caring for a patient with a nasogastric (NG) tube. Before administering a tube feeding, the nurse should verify placement by:",
        "options": [
          "A. Auscultating air over the epigastric area only",
          "B. Checking pH of aspirated contents",
          "C. Observing the patient for coughing",
          "D. Measuring the external tube length only"
        ],
        "answer": "B",
        "rationale": "The most reliable bedside method to verify NG tube placement is checking the pH of aspirated gastric contents (should be 1-5). Auscultation alone is unreliable. X-ray is the gold standard for initial placement verification.",
        "category": "fundamentals",
        "subcategory": "Enteral Nutrition",
        "difficulty": "medium",
        "topic": "NG Tube Verification",
        "type": "mcq"
      },
      {
        "id": "fund-015",
        "question": "Which nursing action demonstrates proper body mechanics?",
        "options": [
          "A. Bending at the waist to lift objects",
          "B. Keeping feet close together when lifting",
          "C. Holding objects away from the body",
          "D. Bending at the knees and hips when lifting"
        ],
        "answer": "D",
        "rationale": "Proper body mechanics include bending at the knees and hips (not waist) to use leg muscles, maintaining a wide base of support with feet apart, and holding objects close to the body to reduce strain on the back.",
        "category": "fundamentals",
        "subcategory": "Body Mechanics",
        "difficulty": "easy",
        "topic": "Safe Lifting",
        "type": "mcq"
      },
      {
        "id": "fund-016",
        "question": "A patient is receiving IV fluids at 125 mL/hr. The IV tubing has a drop factor of 15 gtt/mL. What is the correct drip rate in gtt/min?",
        "options": [
          "A. 21 gtt/min",
          "B. 31 gtt/min",
          "C. 42 gtt/min",
          "D. 63 gtt/min"
        ],
        "answer": "B",
        "rationale": "Formula: (Volume \u00d7 Drop factor) \u00f7 Time in minutes = (125 mL \u00d7 15 gtt/mL) \u00f7 60 min = 1875 \u00f7 60 = 31.25, rounded to 31 gtt/min.",
        "category": "fundamentals",
        "subcategory": "IV Therapy",
        "difficulty": "medium",
        "topic": "IV Flow Rate Calculation",
        "type": "mcq"
      },
      {
        "id": "fund-017",
        "question": "The nurse observes a patient who is unresponsive. What is the first action?",
        "options": [
          "A. Start chest compressions",
          "B. Check for responsiveness and call for help",
          "C. Give two rescue breaths",
          "D. Apply the AED"
        ],
        "answer": "B",
        "rationale": "According to BLS guidelines, the first step is to check for responsiveness (tap and shout) and call for help/activate emergency response. Then check for pulse and breathing, and begin CPR if needed.",
        "category": "fundamentals",
        "subcategory": "Emergency Response",
        "difficulty": "easy",
        "topic": "BLS Protocol",
        "type": "mcq"
      },
      {
        "id": "fund-018",
        "question": "A patient asks why the nurse is wearing gloves to change the bed linens. The best response is:",
        "options": [
          "A. 'It's hospital policy for all patient care.'",
          "B. 'Gloves protect both of us from potential infections.'",
          "C. 'I don't want to get my hands dirty.'",
          "D. 'Your doctor ordered contact precautions.'"
        ],
        "answer": "B",
        "rationale": "Gloves are part of standard precautions and protect both the healthcare worker and patient from transmission of microorganisms. This honest, educational response helps the patient understand infection control practices.",
        "category": "fundamentals",
        "subcategory": "Infection Control",
        "difficulty": "easy",
        "topic": "Standard Precautions",
        "type": "mcq"
      },
      {
        "id": "fund-019",
        "question": "Which patient is at highest risk for falls?",
        "options": [
          "A. 45-year-old admitted for appendectomy",
          "B. 78-year-old with confusion taking sedatives",
          "C. 30-year-old with fractured arm",
          "D. 55-year-old with controlled hypertension"
        ],
        "answer": "B",
        "rationale": "The 78-year-old with confusion taking sedatives has multiple fall risk factors: advanced age, altered mental status, and sedating medications. These combined factors significantly increase fall risk compared to the other patients.",
        "category": "fundamentals",
        "subcategory": "Safety",
        "difficulty": "easy",
        "topic": "Fall Risk Assessment",
        "type": "mcq"
      },
      {
        "id": "fund-020",
        "question": "A patient with a stage 2 pressure ulcer has a prescription for wet-to-dry dressings. The nurse should:",
        "options": [
          "A. Apply the dressing soaking wet",
          "B. Moisten the gauze with sterile saline and wring out excess",
          "C. Use dry gauze and moisten after application",
          "D. Pack the wound tightly with dry gauze"
        ],
        "answer": "B",
        "rationale": "For wet-to-dry dressings, gauze should be moistened with sterile saline and wrung out so it's damp, not soaking wet. This provides debridement as the dressing dries and is removed. Soaking wet dressings can macerate surrounding tissue.",
        "category": "fundamentals",
        "subcategory": "Wound Care",
        "difficulty": "medium",
        "topic": "Dressing Changes",
        "type": "mcq"
      },
      {
        "id": "fund-021",
        "question": "The nurse is preparing to administer an intramuscular injection to an adult. Which site allows for the largest volume of medication?",
        "options": [
          "A. Deltoid",
          "B. Vastus lateralis",
          "C. Ventrogluteal",
          "D. Dorsogluteal"
        ],
        "answer": "C",
        "rationale": "The ventrogluteal site is preferred for IM injections in adults as it can accommodate up to 3 mL, has no major nerves or blood vessels nearby, and has consistent muscle mass. The deltoid is limited to 1 mL.",
        "category": "fundamentals",
        "subcategory": "Injections",
        "difficulty": "medium",
        "topic": "IM Injection Sites",
        "type": "mcq"
      },
      {
        "id": "fund-022",
        "question": "A patient is experiencing urinary retention. Which interventions should the nurse try before catheterization? Select all that apply.",
        "options": [
          "A. Run water in the sink",
          "B. Pour warm water over the perineum",
          "C. Restrict fluid intake",
          "D. Provide privacy",
          "E. Apply pressure over the bladder"
        ],
        "answer": [
          "A",
          "B",
          "D"
        ],
        "rationale": "Non-invasive interventions for urinary retention include auditory stimulation (running water), warm water over perineum, and providing privacy. Fluid restriction would worsen the problem. Applying pressure over the bladder (Cred\u00e9's maneuver) is not recommended as it can cause reflux.",
        "category": "fundamentals",
        "subcategory": "Elimination",
        "difficulty": "medium",
        "topic": "Urinary Retention",
        "type": "sata"
      },
      {
        "id": "fund-023",
        "question": "The nurse is caring for a patient who is hearing impaired. Which communication technique is most appropriate?",
        "options": [
          "A. Speak loudly and exaggerate lip movements",
          "B. Face the patient and speak clearly at normal volume",
          "C. Write all communication to avoid misunderstanding",
          "D. Stand behind the patient and speak into their better ear"
        ],
        "answer": "B",
        "rationale": "Face the patient directly, ensure good lighting on your face, speak clearly at a normal pace and volume, and avoid covering your mouth. Exaggerated lip movements distort words. Not all hearing-impaired patients can read well.",
        "category": "fundamentals",
        "subcategory": "Communication",
        "difficulty": "easy",
        "topic": "Hearing Impairment",
        "type": "mcq"
      },
      {
        "id": "fund-024",
        "question": "A patient's blood pressure is 88/56 mmHg. The nurse should position the patient in:",
        "options": [
          "A. High Fowler's position",
          "B. Supine with legs elevated",
          "C. Left lateral position",
          "D. Prone position"
        ],
        "answer": "B",
        "rationale": "For hypotension, placing the patient supine with legs elevated (modified Trendelenburg) promotes venous return to the heart and helps increase blood pressure. High Fowler's would further decrease BP by pooling blood in the lower extremities.",
        "category": "fundamentals",
        "subcategory": "Positioning",
        "difficulty": "medium",
        "topic": "Hypotension Management",
        "type": "mcq"
      },
      {
        "id": "fund-025",
        "question": "When obtaining a wound culture, the nurse should:",
        "options": [
          "A. Culture the wound drainage on the old dressing",
          "B. Swab the wound edges after cleaning",
          "C. Clean the wound and swab the wound bed",
          "D. Culture any pus visible on the skin surface"
        ],
        "answer": "C",
        "rationale": "To obtain an accurate wound culture, first clean the wound to remove surface contaminants, then swab the wound bed using a rotating motion to collect cells from the viable tissue. Surface drainage or old dressing cultures may contain colonizing organisms, not infecting pathogens.",
        "category": "fundamentals",
        "subcategory": "Wound Care",
        "difficulty": "medium",
        "topic": "Wound Culture Technique",
        "type": "mcq"
      },
      {
        "id": "fund-026",
        "question": "A patient has a prescription for intake and output measurement. Which should be included in intake? Select all that apply.",
        "options": [
          "A. IV fluids",
          "B. Tube feeding",
          "C. Ice chips",
          "D. Urine output",
          "E. Gelatin dessert"
        ],
        "answer": [
          "A",
          "B",
          "C",
          "E"
        ],
        "rationale": "Intake includes all fluids that enter the body: IV fluids, tube feeding, oral liquids, ice chips (measured as half the volume), and foods that are liquid at room temperature like gelatin and ice cream. Urine output is recorded as output, not intake.",
        "category": "fundamentals",
        "subcategory": "Fluid Balance",
        "difficulty": "easy",
        "topic": "Intake and Output",
        "type": "sata"
      },
      {
        "id": "fund-027",
        "question": "The nurse is teaching a patient about incentive spirometry. Which instruction is correct?",
        "options": [
          "A. 'Exhale forcefully into the device.'",
          "B. 'Inhale slowly and deeply through the mouthpiece.'",
          "C. 'Use it once a day in the morning.'",
          "D. 'Breathe rapidly to move the indicator higher.'"
        ],
        "answer": "B",
        "rationale": "Incentive spirometry requires slow, deep inhalation to maximize lung expansion and prevent atelectasis. The patient should inhale slowly, hold for 3-5 seconds, then exhale. It should be used 10 times every hour while awake, not once daily.",
        "category": "fundamentals",
        "subcategory": "Respiratory Care",
        "difficulty": "easy",
        "topic": "Incentive Spirometry",
        "type": "mcq"
      },
      {
        "id": "fund-028",
        "question": "A patient's religion prohibits blood transfusions. The patient is bleeding severely and refuses blood. The nurse should:",
        "options": [
          "A. Administer blood to save the patient's life",
          "B. Contact the ethics committee to override the decision",
          "C. Respect the patient's decision and document it",
          "D. Wait until the patient is unconscious to give blood"
        ],
        "answer": "C",
        "rationale": "Competent adults have the right to refuse treatment, including life-sustaining treatment, based on religious beliefs. The nurse must respect this autonomous decision, document it, notify the provider, and explore alternative treatments.",
        "category": "fundamentals",
        "subcategory": "Ethics",
        "difficulty": "hard",
        "topic": "Patient Autonomy",
        "type": "mcq"
      },
      {
        "id": "fund-029",
        "question": "The nurse is assessing bowel sounds. Which finding indicates hyperactive bowel sounds?",
        "options": [
          "A. 5-15 sounds per minute",
          "B. Sounds heard once every 2-3 minutes",
          "C. High-pitched, frequent sounds",
          "D. No sounds heard after 5 minutes"
        ],
        "answer": "C",
        "rationale": "Hyperactive bowel sounds are high-pitched, loud, rushing sounds occurring frequently, often associated with diarrhea, early bowel obstruction, or gastroenteritis. Normal is 5-30 sounds/minute. Hypoactive is diminished, and absent is no sounds after 3-5 minutes in all quadrants.",
        "category": "fundamentals",
        "subcategory": "Assessment",
        "difficulty": "medium",
        "topic": "Bowel Sounds",
        "type": "mcq"
      },
      {
        "id": "fund-030",
        "question": "A patient has a new prescription for a low-sodium diet. Which food should the nurse recommend avoiding?",
        "options": [
          "A. Fresh chicken breast",
          "B. Canned vegetable soup",
          "C. Fresh steamed broccoli",
          "D. Baked potato"
        ],
        "answer": "B",
        "rationale": "Canned soups are typically very high in sodium, often containing 800-1000 mg per serving. Fresh meats, fresh vegetables, and plain baked potatoes are naturally low in sodium and appropriate for a low-sodium diet.",
        "category": "fundamentals",
        "subcategory": "Nutrition",
        "difficulty": "easy",
        "topic": "Low-Sodium Diet",
        "type": "mcq"
      },
      {
        "id": "fund-031",
        "question": "The nurse is preparing to perform oral suctioning. Which action is correct?",
        "options": [
          "A. Apply suction while inserting the catheter",
          "B. Suction for 30 seconds continuously",
          "C. Apply suction while withdrawing the catheter",
          "D. Use maximum suction pressure available"
        ],
        "answer": "C",
        "rationale": "Suction should only be applied while withdrawing the catheter in a rotating motion to prevent trauma to the mucous membranes. Insertion should be done without suction. Suctioning should be limited to 10-15 seconds to prevent hypoxia.",
        "category": "fundamentals",
        "subcategory": "Airway Management",
        "difficulty": "medium",
        "topic": "Oral Suctioning",
        "type": "mcq"
      },
      {
        "id": "fund-032",
        "question": "A patient asks about advance directives. The nurse explains that a healthcare proxy:",
        "options": [
          "A. Is the same as a living will",
          "B. Designates someone to make healthcare decisions if the patient cannot",
          "C. Must be a family member",
          "D. Requires attorney approval to be valid"
        ],
        "answer": "B",
        "rationale": "A healthcare proxy (or durable power of attorney for healthcare) designates a person to make healthcare decisions on the patient's behalf if they become incapacitated. It differs from a living will, can be anyone the patient trusts, and does not require an attorney.",
        "category": "fundamentals",
        "subcategory": "Legal Issues",
        "difficulty": "medium",
        "topic": "Advance Directives",
        "type": "mcq"
      },
      {
        "id": "fund-033",
        "question": "When measuring a patient's temperature orally, the nurse should wait after the patient has consumed cold fluids for:",
        "options": [
          "A. 5 minutes",
          "B. 15-30 minutes",
          "C. 1 hour",
          "D. No waiting period is necessary"
        ],
        "answer": "B",
        "rationale": "Wait 15-30 minutes after the patient has consumed hot or cold food/fluids or smoked before taking an oral temperature to ensure an accurate reading. Cold fluids would lower the reading, and hot fluids would elevate it.",
        "category": "fundamentals",
        "subcategory": "Vital Signs",
        "difficulty": "easy",
        "topic": "Temperature Measurement",
        "type": "mcq"
      },
      {
        "id": "fund-034",
        "question": "The nurse is caring for a patient with a chest tube. Which findings require immediate intervention? Select all that apply.",
        "options": [
          "A. Continuous bubbling in the water seal chamber",
          "B. Gentle bubbling during expiration only",
          "C. Drainage system positioned below chest level",
          "D. Fluctuation in the water seal chamber with breathing",
          "E. 300 mL of bright red drainage in the first hour"
        ],
        "answer": [
          "A",
          "E"
        ],
        "rationale": "Continuous bubbling indicates an air leak in the system that needs assessment (A). Large amounts of bright red drainage (>100 mL/hr) suggest hemorrhage requiring immediate intervention (E). Drainage below chest level (C) and tidaling/fluctuation (D) are expected findings.",
        "category": "fundamentals",
        "subcategory": "Chest Tubes",
        "difficulty": "hard",
        "topic": "Chest Tube Management",
        "type": "sata"
      },
      {
        "id": "fund-035",
        "question": "A patient is receiving a blood transfusion and develops chills, fever, and back pain. The nurse's first action is to:",
        "options": [
          "A. Slow the transfusion rate",
          "B. Stop the transfusion immediately",
          "C. Administer acetaminophen for fever",
          "D. Notify the blood bank"
        ],
        "answer": "B",
        "rationale": "These symptoms suggest a transfusion reaction. The first priority is to stop the transfusion immediately to prevent further reaction. Then keep the IV line open with normal saline, stay with the patient, and notify the provider and blood bank.",
        "category": "fundamentals",
        "subcategory": "Blood Transfusion",
        "difficulty": "medium",
        "topic": "Transfusion Reactions",
        "type": "mcq"
      },
      {
        "id": "fund-036",
        "question": "The nurse is measuring blood pressure. Which action ensures an accurate reading?",
        "options": [
          "A. Using a cuff that covers 50% of the upper arm",
          "B. Positioning the arm above heart level",
          "C. Deflating the cuff at 2-3 mmHg per second",
          "D. Taking the reading immediately after the patient walks to the bed"
        ],
        "answer": "C",
        "rationale": "The cuff should be deflated slowly at 2-3 mmHg per second to ensure accurate systolic and diastolic readings. The cuff should cover 80% of the arm, the arm should be at heart level, and the patient should rest 5 minutes before measurement.",
        "category": "fundamentals",
        "subcategory": "Vital Signs",
        "difficulty": "medium",
        "topic": "Blood Pressure Measurement",
        "type": "mcq"
      },
      {
        "id": "fund-037",
        "question": "A patient with dysphagia is prescribed a pureed diet. Which food is appropriate?",
        "options": [
          "A. Toast with butter",
          "B. Scrambled eggs",
          "C. Mashed potatoes",
          "D. Chicken noodle soup"
        ],
        "answer": "C",
        "rationale": "Mashed potatoes have a smooth, consistent texture appropriate for pureed diets. Toast is dry and hard, scrambled eggs have an inconsistent texture, and chicken noodle soup has thin liquid and solid pieces - all pose aspiration risks for patients with dysphagia.",
        "category": "fundamentals",
        "subcategory": "Nutrition",
        "difficulty": "medium",
        "topic": "Dysphagia Diet",
        "type": "mcq"
      },
      {
        "id": "fund-038",
        "question": "The nurse is caring for a patient with a fever of 103\u00b0F (39.4\u00b0C). Which intervention is contraindicated?",
        "options": [
          "A. Administering prescribed antipyretics",
          "B. Applying ice packs directly to the skin",
          "C. Encouraging increased fluid intake",
          "D. Removing excess blankets"
        ],
        "answer": "B",
        "rationale": "Ice packs should never be applied directly to skin as they can cause tissue damage and vasoconstriction. If cooling measures are used, tepid water or cool cloths are preferred. Antipyretics, increased fluids, and removing excess covers are appropriate interventions.",
        "category": "fundamentals",
        "subcategory": "Thermoregulation",
        "difficulty": "medium",
        "topic": "Fever Management",
        "type": "mcq"
      },
      {
        "id": "fund-039",
        "question": "A nurse must obtain informed consent for a surgical procedure. Which statement is true?",
        "options": [
          "A. The nurse is responsible for explaining the procedure",
          "B. The patient must sign the form before receiving any sedatives",
          "C. A family member can sign if the patient is nervous",
          "D. Verbal consent is sufficient for major surgery"
        ],
        "answer": "B",
        "rationale": "Informed consent must be obtained when the patient is alert and capable of understanding. Sedatives impair decision-making ability. The physician explains the procedure; the nurse witnesses the signature. Only the patient (or legal guardian) can provide consent for a competent adult.",
        "category": "fundamentals",
        "subcategory": "Legal Issues",
        "difficulty": "medium",
        "topic": "Informed Consent",
        "type": "mcq"
      },
      {
        "id": "fund-040",
        "question": "The nurse is teaching about contact precautions. Which personal protective equipment is required? Select all that apply.",
        "options": [
          "A. Gown",
          "B. Gloves",
          "C. N95 respirator",
          "D. Face shield",
          "E. Shoe covers"
        ],
        "answer": [
          "A",
          "B"
        ],
        "rationale": "Contact precautions require gown and gloves for any patient contact or contact with the patient's environment. N95 respirators are for airborne precautions. Face shields are for droplet precautions or when splashing is expected. Shoe covers are not standard requirement.",
        "category": "fundamentals",
        "subcategory": "Infection Control",
        "difficulty": "easy",
        "topic": "Contact Precautions",
        "type": "sata"
      },
      {
        "id": "fund-041",
        "question": "A patient is experiencing constipation. Which nursing intervention is most appropriate initially?",
        "options": [
          "A. Administer an enema",
          "B. Insert a rectal suppository",
          "C. Increase fluid and fiber intake",
          "D. Request a prescription for laxatives"
        ],
        "answer": "C",
        "rationale": "Non-pharmacological interventions should be tried first for constipation. Increasing fluid intake (2-3 L/day) and dietary fiber promotes natural bowel function. Enemas, suppositories, and laxatives are used when conservative measures fail.",
        "category": "fundamentals",
        "subcategory": "Elimination",
        "difficulty": "easy",
        "topic": "Constipation Management",
        "type": "mcq"
      },
      {
        "id": "fund-042",
        "question": "When performing a bed bath, the nurse should wash the patient's body in which order?",
        "options": [
          "A. Perineum, trunk, extremities, face",
          "B. Face, trunk, extremities, perineum",
          "C. Face, extremities, trunk, perineum",
          "D. Trunk, face, extremities, perineum"
        ],
        "answer": "C",
        "rationale": "The correct order is from cleanest to dirtiest areas: face (cleanest), then extremities, trunk, and perineum (dirtiest) last. This prevents cross-contamination and follows principles of medical asepsis.",
        "category": "fundamentals",
        "subcategory": "Hygiene",
        "difficulty": "easy",
        "topic": "Bed Bath",
        "type": "mcq"
      },
      {
        "id": "fund-043",
        "question": "The nurse is preparing to administer a subcutaneous injection of heparin. The correct technique includes:",
        "options": [
          "A. Aspirating before injecting",
          "B. Massaging the site after injection",
          "C. Inserting the needle at a 45-90 degree angle",
          "D. Using the dorsogluteal site"
        ],
        "answer": "C",
        "rationale": "Subcutaneous injections are given at 45-90 degrees depending on the amount of subcutaneous tissue. For heparin, do NOT aspirate (increases bruising) and do NOT massage (increases hematoma risk). Heparin is given in abdominal subcutaneous tissue, not dorsogluteal.",
        "category": "fundamentals",
        "subcategory": "Injections",
        "difficulty": "medium",
        "topic": "Subcutaneous Heparin",
        "type": "mcq"
      },
      {
        "id": "fund-044",
        "question": "A patient on bedrest has crackles in the lung bases and dependent edema. The nurse should:",
        "options": [
          "A. Increase IV fluid rate",
          "B. Elevate the head of bed and assess further",
          "C. Position the patient flat",
          "D. Encourage high-sodium foods"
        ],
        "answer": "B",
        "rationale": "Crackles in lung bases and dependent edema suggest fluid overload or heart failure. Elevating the head of bed reduces venous return and eases breathing. Further assessment is needed. Increasing fluids or sodium would worsen the condition.",
        "category": "fundamentals",
        "subcategory": "Assessment",
        "difficulty": "medium",
        "topic": "Fluid Overload",
        "type": "mcq"
      },
      {
        "id": "fund-045",
        "question": "A nurse is administering ear drops to an adult. The correct technique is to pull the pinna:",
        "options": [
          "A. Up and back",
          "B. Down and back",
          "C. Up and forward",
          "D. Down and forward"
        ],
        "answer": "A",
        "rationale": "For adults, pull the pinna up and back to straighten the ear canal for proper medication administration. For children under 3 years, pull down and back because the ear canal anatomy is different.",
        "category": "fundamentals",
        "subcategory": "Medication Administration",
        "difficulty": "easy",
        "topic": "Ear Drop Administration",
        "type": "mcq"
      },
      {
        "id": "fund-046",
        "question": "The nurse is caring for a patient in restraints. Which interventions are required? Select all that apply.",
        "options": [
          "A. Assess circulation every 2 hours",
          "B. Offer food, fluids, and toileting regularly",
          "C. Remove restraints every 24 hours",
          "D. Document behavior requiring restraint use",
          "E. Obtain a new order every 24 hours for non-behavioral restraints"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E"
        ],
        "rationale": "Restraint care includes: circulation checks every 2 hours, meeting basic needs (food, fluids, toileting, ROM), documenting the behavior necessitating restraints, and obtaining renewed orders (every 24 hours for non-behavioral). Restraints should be released and reapplied every 2 hours, not 24.",
        "category": "fundamentals",
        "subcategory": "Safety",
        "difficulty": "hard",
        "topic": "Restraint Use",
        "type": "sata"
      },
      {
        "id": "fund-047",
        "question": "A patient's pulse oximetry reading is inaccurate. Which factor could cause this?",
        "options": [
          "A. Dark skin pigmentation",
          "B. Patient wearing glasses",
          "C. Room temperature of 72\u00b0F",
          "D. Patient lying supine"
        ],
        "answer": "A",
        "rationale": "Dark skin pigmentation, nail polish (especially dark colors), poor peripheral perfusion, hypothermia, and movement can affect pulse oximetry accuracy. Glasses, normal room temperature, and supine positioning do not affect readings.",
        "category": "fundamentals",
        "subcategory": "Oxygenation",
        "difficulty": "medium",
        "topic": "Pulse Oximetry Accuracy",
        "type": "mcq"
      },
      {
        "id": "fund-048",
        "question": "The nurse is caring for a patient with a Stage 3 pressure injury. Which finding is characteristic of this stage?",
        "options": [
          "A. Non-blanchable redness of intact skin",
          "B. Partial-thickness skin loss with exposed dermis",
          "C. Full-thickness skin loss with visible adipose tissue",
          "D. Full-thickness loss with exposed bone or tendon"
        ],
        "answer": "C",
        "rationale": "Stage 3 involves full-thickness skin loss with visible adipose (fat) tissue. Stage 1 is non-blanchable erythema. Stage 2 is partial-thickness with dermis exposure. Stage 4 has exposed bone, tendon, or muscle.",
        "category": "fundamentals",
        "subcategory": "Skin Integrity",
        "difficulty": "medium",
        "topic": "Pressure Injury Staging",
        "type": "mcq"
      },
      {
        "id": "fund-049",
        "question": "A patient is receiving continuous tube feeding and develops diarrhea. The nurse should first:",
        "options": [
          "A. Stop the tube feeding immediately",
          "B. Check the feeding rate and formula temperature",
          "C. Administer an antidiarrheal medication",
          "D. Switch to a high-fiber formula"
        ],
        "answer": "B",
        "rationale": "First assess potential causes: rate too fast, formula too cold, contamination, or medication side effects. Feeding rate should be appropriate and formula at room temperature. Don't stop feeding without assessment. Antidiarrheals treat symptoms, not causes.",
        "category": "fundamentals",
        "subcategory": "Enteral Nutrition",
        "difficulty": "medium",
        "topic": "Tube Feeding Complications",
        "type": "mcq"
      },
      {
        "id": "fund-050",
        "question": "The nurse is teaching a patient about home oxygen safety. Which statement indicates correct understanding?",
        "options": [
          "A. 'I can smoke as long as I'm 10 feet from the oxygen.'",
          "B. 'I should keep the oxygen tank near my gas stove for convenience.'",
          "C. 'I will post a no-smoking sign and keep oxygen away from heat sources.'",
          "D. 'I can use petroleum jelly on my lips if they get dry.'"
        ],
        "answer": "C",
        "rationale": "Oxygen supports combustion, so no smoking anywhere in the home, no open flames, and keep tanks away from heat sources. Post no-smoking signs. Use water-based lubricants, not petroleum products, which are flammable.",
        "category": "fundamentals",
        "subcategory": "Safety",
        "difficulty": "easy",
        "topic": "Home Oxygen Safety",
        "type": "mcq"
      }
    ],
    "icon": "\ud83d\udccb",
    "weight": "15-21%",
    "questionCount": 50
  },
  "medSurg": {
    "name": "Medical-Surgical Nursing",
    "description": "Adult health nursing covering cardiac, respiratory, GI, renal, neuro, and other body systems",
    "questions": [
      {
        "id": "ms-001",
        "question": "A patient with heart failure is prescribed furosemide (Lasix). Which laboratory value should the nurse monitor most closely?",
        "options": [
          "A. Sodium",
          "B. Potassium",
          "C. Calcium",
          "D. Magnesium"
        ],
        "answer": "B",
        "rationale": "Furosemide is a loop diuretic that causes significant potassium loss. Hypokalemia can lead to dangerous cardiac arrhythmias, especially in patients with heart failure who may also be on digoxin. Potassium levels should be monitored closely.",
        "category": "medSurg",
        "subcategory": "Cardiac",
        "difficulty": "easy",
        "topic": "Loop Diuretics",
        "type": "mcq"
      },
      {
        "id": "ms-002",
        "question": "A patient is admitted with a diagnosis of COPD exacerbation. The nurse should set the oxygen flow rate to maintain SpO2 at:",
        "options": [
          "A. 98-100%",
          "B. 94-98%",
          "C. 88-92%",
          "D. 80-85%"
        ],
        "answer": "C",
        "rationale": "Patients with COPD have chronic CO2 retention and their respiratory drive depends on hypoxia. High oxygen levels can suppress their drive to breathe. Target SpO2 is 88-92% to maintain adequate oxygenation without suppressing respiratory drive.",
        "category": "medSurg",
        "subcategory": "Respiratory",
        "difficulty": "medium",
        "topic": "COPD Management",
        "type": "mcq"
      },
      {
        "id": "ms-003",
        "question": "A patient with diabetes mellitus has a blood glucose of 48 mg/dL and is conscious. The nurse should:",
        "options": [
          "A. Administer IV dextrose 50%",
          "B. Give 15 grams of fast-acting carbohydrate",
          "C. Administer insulin",
          "D. Encourage the patient to eat a full meal"
        ],
        "answer": "B",
        "rationale": "For conscious hypoglycemic patients, the rule of 15 applies: give 15 grams of fast-acting carbohydrates (juice, glucose tablets), wait 15 minutes, and recheck blood glucose. IV dextrose is reserved for unconscious patients or those who cannot swallow.",
        "category": "medSurg",
        "subcategory": "Endocrine",
        "difficulty": "easy",
        "topic": "Hypoglycemia",
        "type": "mcq"
      },
      {
        "id": "ms-004",
        "question": "Which assessment finding indicates a complication of a total hip replacement?",
        "options": [
          "A. Pain at the surgical site",
          "B. Leg length discrepancy with affected leg shorter",
          "C. Mild swelling around the incision",
          "D. Difficulty sleeping on the affected side"
        ],
        "answer": "B",
        "rationale": "Leg shortening on the affected side, along with internal rotation, is a classic sign of hip prosthesis dislocation. Pain, mild swelling, and difficulty with positioning are expected postoperative findings, not complications.",
        "category": "medSurg",
        "subcategory": "Musculoskeletal",
        "difficulty": "medium",
        "topic": "Hip Replacement Complications",
        "type": "mcq"
      },
      {
        "id": "ms-005",
        "question": "A patient with cirrhosis develops confusion and asterixis. The nurse suspects:",
        "options": [
          "A. Hepatorenal syndrome",
          "B. Hepatic encephalopathy",
          "C. Portal hypertension",
          "D. Esophageal varices"
        ],
        "answer": "B",
        "rationale": "Hepatic encephalopathy is characterized by confusion, altered level of consciousness, and asterixis (flapping tremor of the hands). It results from accumulation of ammonia and other toxins when the liver cannot detoxify blood properly.",
        "category": "medSurg",
        "subcategory": "Gastrointestinal",
        "difficulty": "medium",
        "topic": "Hepatic Encephalopathy",
        "type": "mcq"
      },
      {
        "id": "ms-006",
        "question": "A patient is diagnosed with acute kidney injury. Which findings would the nurse expect? Select all that apply.",
        "options": [
          "A. Decreased urine output",
          "B. Elevated BUN and creatinine",
          "C. Hyperkalemia",
          "D. Metabolic alkalosis",
          "E. Fluid overload"
        ],
        "answer": [
          "A",
          "B",
          "C",
          "E"
        ],
        "rationale": "AKI causes decreased urine output (oliguria), elevated BUN/creatinine, hyperkalemia (kidneys can't excrete potassium), and fluid overload. Metabolic acidosis, not alkalosis, occurs because the kidneys cannot excrete hydrogen ions.",
        "category": "medSurg",
        "subcategory": "Renal",
        "difficulty": "medium",
        "topic": "Acute Kidney Injury",
        "type": "sata"
      },
      {
        "id": "ms-007",
        "question": "A patient with myocardial infarction asks why they are receiving morphine. The nurse's best response is:",
        "options": [
          "A. 'It will help you sleep better.'",
          "B. 'It relieves pain and reduces oxygen demand on your heart.'",
          "C. 'It prevents blood clots from forming.'",
          "D. 'It strengthens your heart muscle.'"
        ],
        "answer": "B",
        "rationale": "Morphine is given during MI to relieve chest pain and anxiety, which reduces oxygen demand on the heart. It also causes vasodilation, reducing preload. This helps decrease the workload on the damaged heart muscle.",
        "category": "medSurg",
        "subcategory": "Cardiac",
        "difficulty": "medium",
        "topic": "MI Treatment",
        "type": "mcq"
      },
      {
        "id": "ms-008",
        "question": "A patient with pneumonia has a productive cough. Which intervention promotes airway clearance?",
        "options": [
          "A. Administering cough suppressants",
          "B. Restricting fluid intake",
          "C. Encouraging deep breathing and coughing",
          "D. Positioning the patient supine"
        ],
        "answer": "C",
        "rationale": "Deep breathing and coughing help mobilize and expectorate secretions. Cough suppressants should be avoided with productive coughs. Fluid intake should be increased (not restricted) to thin secretions. Semi-Fowler's or high Fowler's position promotes lung expansion.",
        "category": "medSurg",
        "subcategory": "Respiratory",
        "difficulty": "easy",
        "topic": "Pneumonia Care",
        "type": "mcq"
      },
      {
        "id": "ms-009",
        "question": "A patient is receiving heparin infusion. Which laboratory test monitors its effectiveness?",
        "options": [
          "A. PT/INR",
          "B. aPTT",
          "C. Platelet count",
          "D. Hemoglobin"
        ],
        "answer": "B",
        "rationale": "Activated partial thromboplastin time (aPTT) monitors heparin therapy effectiveness. The goal is typically 1.5-2.5 times the normal control value. PT/INR monitors warfarin therapy. Platelet count monitors for heparin-induced thrombocytopenia.",
        "category": "medSurg",
        "subcategory": "Hematology",
        "difficulty": "easy",
        "topic": "Anticoagulation Monitoring",
        "type": "mcq"
      },
      {
        "id": "ms-010",
        "question": "A patient with Addison's disease is at risk for which complication during stress?",
        "options": [
          "A. Hyperglycemic crisis",
          "B. Thyroid storm",
          "C. Addisonian crisis",
          "D. Myxedema coma"
        ],
        "answer": "C",
        "rationale": "Addisonian crisis (acute adrenal insufficiency) can occur when patients with Addison's disease experience stress (illness, surgery, trauma) without adequate cortisol replacement. Symptoms include severe hypotension, hypoglycemia, and shock.",
        "category": "medSurg",
        "subcategory": "Endocrine",
        "difficulty": "medium",
        "topic": "Adrenal Crisis",
        "type": "mcq"
      },
      {
        "id": "ms-011",
        "question": "A patient returns from cardiac catheterization via the femoral artery. The nurse's priority assessment is:",
        "options": [
          "A. Level of consciousness",
          "B. Puncture site for bleeding and hematoma",
          "C. Intake and output",
          "D. Pain level"
        ],
        "answer": "B",
        "rationale": "After femoral artery catheterization, the priority is assessing the puncture site for bleeding, hematoma, and pulses distal to the site. Hemorrhage is the most immediate life-threatening complication. The patient should keep the affected leg straight.",
        "category": "medSurg",
        "subcategory": "Cardiac",
        "difficulty": "medium",
        "topic": "Post-Catheterization Care",
        "type": "mcq"
      },
      {
        "id": "ms-012",
        "question": "A patient with tuberculosis is started on rifampin. The nurse should teach the patient that:",
        "options": [
          "A. The medication should be taken with food",
          "B. Body fluids may turn orange-red",
          "C. Alcohol consumption is safe in moderation",
          "D. The medication works immediately"
        ],
        "answer": "B",
        "rationale": "Rifampin causes harmless orange-red discoloration of body fluids (urine, tears, sweat). Patients should be warned to prevent alarm and that contact lenses may be permanently stained. The medication should be taken on an empty stomach, alcohol avoided, and treatment takes months.",
        "category": "medSurg",
        "subcategory": "Respiratory",
        "difficulty": "easy",
        "topic": "TB Medications",
        "type": "mcq"
      },
      {
        "id": "ms-013",
        "question": "A patient with peptic ulcer disease should avoid which medications? Select all that apply.",
        "options": [
          "A. Ibuprofen",
          "B. Acetaminophen",
          "C. Aspirin",
          "D. Naproxen",
          "E. Omeprazole"
        ],
        "answer": [
          "A",
          "C",
          "D"
        ],
        "rationale": "NSAIDs (ibuprofen, aspirin, naproxen) inhibit prostaglandin production, which protects the gastric mucosa. They should be avoided in peptic ulcer disease. Acetaminophen is safe as it doesn't affect the stomach lining. Omeprazole is a PPI that treats ulcers.",
        "category": "medSurg",
        "subcategory": "Gastrointestinal",
        "difficulty": "medium",
        "topic": "Peptic Ulcer Disease",
        "type": "sata"
      },
      {
        "id": "ms-014",
        "question": "A patient with chronic kidney disease has a potassium level of 6.2 mEq/L. The nurse should first:",
        "options": [
          "A. Encourage foods high in potassium",
          "B. Check for ECG changes and notify the provider",
          "C. Document the finding and recheck in 4 hours",
          "D. Administer oral potassium supplements"
        ],
        "answer": "B",
        "rationale": "A potassium of 6.2 mEq/L is dangerously elevated and can cause fatal cardiac arrhythmias. The nurse should immediately assess for ECG changes (peaked T waves, widened QRS) and notify the provider. Treatment may include calcium gluconate, insulin with glucose, or dialysis.",
        "category": "medSurg",
        "subcategory": "Renal",
        "difficulty": "hard",
        "topic": "Hyperkalemia",
        "type": "mcq"
      },
      {
        "id": "ms-015",
        "question": "A patient has a new diagnosis of atrial fibrillation. The nurse should assess for:",
        "options": [
          "A. Regular heart rhythm",
          "B. Signs of stroke",
          "C. Bradycardia",
          "D. Low blood pressure only"
        ],
        "answer": "B",
        "rationale": "Atrial fibrillation increases stroke risk because blood stasis in the atria can form clots that travel to the brain. The nurse should assess for neurological changes indicating stroke. A-fib presents with irregular rhythm, often with tachycardia.",
        "category": "medSurg",
        "subcategory": "Cardiac",
        "difficulty": "medium",
        "topic": "Atrial Fibrillation",
        "type": "mcq"
      },
      {
        "id": "ms-016",
        "question": "A patient with hyperthyroidism exhibits which manifestations?",
        "options": [
          "A. Weight gain, constipation, cold intolerance",
          "B. Weight loss, diarrhea, heat intolerance",
          "C. Bradycardia, fatigue, dry skin",
          "D. Decreased appetite, hypotension, lethargy"
        ],
        "answer": "B",
        "rationale": "Hyperthyroidism causes hypermetabolic symptoms: weight loss despite increased appetite, diarrhea, heat intolerance, tachycardia, nervousness, and warm moist skin. The other options describe hypothyroidism symptoms.",
        "category": "medSurg",
        "subcategory": "Endocrine",
        "difficulty": "easy",
        "topic": "Hyperthyroidism",
        "type": "mcq"
      },
      {
        "id": "ms-017",
        "question": "A patient with a stroke has right-sided hemiplegia and aphasia. The lesion is most likely in the:",
        "options": [
          "A. Right cerebral hemisphere",
          "B. Left cerebral hemisphere",
          "C. Brainstem",
          "D. Cerebellum"
        ],
        "answer": "B",
        "rationale": "Motor deficits occur on the opposite side of the brain lesion. Right-sided weakness indicates left hemisphere damage. Aphasia (speech/language problems) also indicates left hemisphere involvement, as language centers (Broca's, Wernicke's) are typically in the left hemisphere.",
        "category": "medSurg",
        "subcategory": "Neurological",
        "difficulty": "medium",
        "topic": "Stroke Assessment",
        "type": "mcq"
      },
      {
        "id": "ms-018",
        "question": "A patient is diagnosed with deep vein thrombosis. Which intervention is contraindicated?",
        "options": [
          "A. Bed rest with affected extremity elevated",
          "B. Applying warm compresses to the affected area",
          "C. Massaging the affected leg",
          "D. Administering anticoagulants as prescribed"
        ],
        "answer": "C",
        "rationale": "NEVER massage a leg with DVT as this can dislodge the clot causing a pulmonary embolism. Appropriate interventions include bed rest, elevation, warm compresses for comfort, and anticoagulation to prevent clot extension.",
        "category": "medSurg",
        "subcategory": "Vascular",
        "difficulty": "easy",
        "topic": "DVT Management",
        "type": "mcq"
      },
      {
        "id": "ms-019",
        "question": "A patient post-thyroidectomy reports tingling around the mouth and fingertips. The nurse should:",
        "options": [
          "A. Reassure the patient this is normal",
          "B. Check calcium level and notify the provider",
          "C. Administer pain medication",
          "D. Encourage deep breathing exercises"
        ],
        "answer": "B",
        "rationale": "Perioral and fingertip tingling (paresthesias) are signs of hypocalcemia, which can occur after thyroidectomy due to accidental parathyroid gland damage or removal. This is an emergency requiring calcium replacement to prevent tetany and seizures.",
        "category": "medSurg",
        "subcategory": "Endocrine",
        "difficulty": "medium",
        "topic": "Post-Thyroidectomy Complications",
        "type": "mcq"
      },
      {
        "id": "ms-020",
        "question": "A patient with Parkinson's disease is taking levodopa-carbidopa. Which teaching is appropriate?",
        "options": [
          "A. 'Take the medication with a high-protein meal.'",
          "B. 'Avoid foods containing vitamin B6.'",
          "C. 'The medication may take several weeks to show effect.'",
          "D. 'Stop the medication if you feel better.'"
        ],
        "answer": "C",
        "rationale": "Levodopa-carbidopa takes several weeks to achieve full therapeutic effect. High protein competes with absorption, so avoid taking with high-protein meals. Vitamin B6 no longer needs to be avoided with carbidopa combinations. Never stop abruptly due to withdrawal risks.",
        "category": "medSurg",
        "subcategory": "Neurological",
        "difficulty": "medium",
        "topic": "Parkinson's Medications",
        "type": "mcq"
      },
      {
        "id": "ms-021",
        "question": "A patient with heart failure should be taught to report which weight change?",
        "options": [
          "A. Loss of 1 pound over a week",
          "B. Gain of 3 pounds in 2 days",
          "C. No weight change over a month",
          "D. Gain of 1 pound over a month"
        ],
        "answer": "B",
        "rationale": "A weight gain of 2-3 pounds in 24-48 hours or 5 pounds in a week indicates fluid retention and worsening heart failure. Patients should weigh themselves daily at the same time and report rapid weight gain to their provider immediately.",
        "category": "medSurg",
        "subcategory": "Cardiac",
        "difficulty": "easy",
        "topic": "Heart Failure Self-Monitoring",
        "type": "mcq"
      },
      {
        "id": "ms-022",
        "question": "A patient with acute pancreatitis has which classic assessment findings? Select all that apply.",
        "options": [
          "A. Severe epigastric pain radiating to the back",
          "B. Nausea and vomiting",
          "C. Elevated serum amylase and lipase",
          "D. Increased appetite",
          "E. Cullen's sign"
        ],
        "answer": [
          "A",
          "B",
          "C",
          "E"
        ],
        "rationale": "Acute pancreatitis presents with severe epigastric pain radiating to the back, nausea/vomiting, elevated pancreatic enzymes, and possibly Cullen's sign (periumbilical ecchymosis) or Grey Turner's sign (flank ecchymosis). Appetite is decreased, not increased.",
        "category": "medSurg",
        "subcategory": "Gastrointestinal",
        "difficulty": "medium",
        "topic": "Pancreatitis",
        "type": "sata"
      },
      {
        "id": "ms-023",
        "question": "A patient with pneumothorax has a chest tube. Which finding indicates resolution?",
        "options": [
          "A. Continuous bubbling in water seal chamber",
          "B. Absence of bubbling and return of breath sounds",
          "C. 200 mL bloody drainage per hour",
          "D. Subcutaneous emphysema around insertion site"
        ],
        "answer": "B",
        "rationale": "Resolution of pneumothorax is indicated by absence of bubbling in the water seal chamber (no more air leak) and return of breath sounds in the affected lung. Continuous bubbling indicates ongoing air leak. Excessive drainage and subcutaneous emphysema are complications.",
        "category": "medSurg",
        "subcategory": "Respiratory",
        "difficulty": "medium",
        "topic": "Chest Tube Management",
        "type": "mcq"
      },
      {
        "id": "ms-024",
        "question": "A patient is receiving a blood transfusion and develops urticaria. The nurse should first:",
        "options": [
          "A. Stop the transfusion and notify the provider",
          "B. Slow the transfusion rate",
          "C. Administer epinephrine",
          "D. Continue the transfusion and monitor"
        ],
        "answer": "A",
        "rationale": "Urticaria (hives) during a blood transfusion indicates an allergic reaction. The transfusion should be stopped immediately, the IV kept open with saline, and the provider notified. Antihistamines may be ordered. The reaction could progress to anaphylaxis.",
        "category": "medSurg",
        "subcategory": "Hematology",
        "difficulty": "medium",
        "topic": "Transfusion Reactions",
        "type": "mcq"
      },
      {
        "id": "ms-025",
        "question": "A patient with type 1 diabetes has a blood glucose of 380 mg/dL, fruity breath, and Kussmaul respirations. The nurse suspects:",
        "options": [
          "A. Hypoglycemia",
          "B. Diabetic ketoacidosis",
          "C. Hyperosmolar hyperglycemic state",
          "D. Somogyi effect"
        ],
        "answer": "B",
        "rationale": "DKA presents with hyperglycemia, fruity (acetone) breath from ketones, and Kussmaul respirations (deep rapid breathing) as the body tries to compensate for metabolic acidosis. DKA is more common in type 1 diabetes. HHS typically doesn't have ketones or fruity breath.",
        "category": "medSurg",
        "subcategory": "Endocrine",
        "difficulty": "medium",
        "topic": "Diabetic Ketoacidosis",
        "type": "mcq"
      },
      {
        "id": "ms-026",
        "question": "A patient had a lumbar puncture. Which post-procedure instruction is most important?",
        "options": [
          "A. Restrict fluids for 24 hours",
          "B. Lie flat for several hours",
          "C. Ambulate immediately to prevent stiffness",
          "D. Avoid showering for 48 hours"
        ],
        "answer": "B",
        "rationale": "After lumbar puncture, patients should lie flat for several hours to prevent post-dural puncture headache caused by CSF leakage. Fluid intake should be encouraged (not restricted) to help replace CSF. Activity should be limited initially.",
        "category": "medSurg",
        "subcategory": "Neurological",
        "difficulty": "easy",
        "topic": "Lumbar Puncture Care",
        "type": "mcq"
      },
      {
        "id": "ms-027",
        "question": "A patient with rheumatoid arthritis asks about joint protection. The nurse should teach:",
        "options": [
          "A. Exercise only during flare-ups",
          "B. Use larger joints instead of smaller joints for tasks",
          "C. Maintain one position for extended periods",
          "D. Apply ice during inflammation"
        ],
        "answer": "B",
        "rationale": "Joint protection principles include using larger, stronger joints for activities (e.g., carrying bags on the shoulder vs. hand), changing positions frequently, avoiding sustained grip, and using assistive devices. Heat is typically used for RA; ice is for acute injuries.",
        "category": "medSurg",
        "subcategory": "Musculoskeletal",
        "difficulty": "medium",
        "topic": "Rheumatoid Arthritis",
        "type": "mcq"
      },
      {
        "id": "ms-028",
        "question": "A patient with GERD should be instructed to:",
        "options": [
          "A. Lie down immediately after eating",
          "B. Eat large meals three times daily",
          "C. Elevate the head of bed 6-8 inches",
          "D. Increase consumption of citrus fruits"
        ],
        "answer": "C",
        "rationale": "Elevating the head of bed uses gravity to prevent acid reflux during sleep. Other measures include eating small frequent meals, not lying down for 2-3 hours after eating, avoiding acidic/spicy foods, caffeine, and alcohol, and maintaining healthy weight.",
        "category": "medSurg",
        "subcategory": "Gastrointestinal",
        "difficulty": "easy",
        "topic": "GERD Management",
        "type": "mcq"
      },
      {
        "id": "ms-029",
        "question": "A patient is scheduled for coronary artery bypass graft surgery. Which medication should be held before surgery?",
        "options": [
          "A. Atenolol",
          "B. Aspirin",
          "C. Lisinopril",
          "D. Atorvastatin"
        ],
        "answer": "B",
        "rationale": "Aspirin inhibits platelet aggregation and increases bleeding risk during surgery. It should typically be held 5-7 days before cardiac surgery (per surgeon's orders). Beta-blockers, ACE inhibitors, and statins are often continued up to or until the day of surgery.",
        "category": "medSurg",
        "subcategory": "Cardiac",
        "difficulty": "medium",
        "topic": "Preoperative Medications",
        "type": "mcq"
      },
      {
        "id": "ms-030",
        "question": "A patient has a serum sodium level of 118 mEq/L. Which signs should the nurse expect?",
        "options": [
          "A. Excessive thirst and dry mucous membranes",
          "B. Confusion, headache, and seizures",
          "C. Muscle cramps and peaked T waves",
          "D. Constipation and polyuria"
        ],
        "answer": "B",
        "rationale": "Severe hyponatremia (below 120 mEq/L) causes neurological symptoms due to cerebral edema: confusion, headache, nausea, lethargy, and potentially seizures and coma. The other options describe hypernatremia or hyperkalemia symptoms.",
        "category": "medSurg",
        "subcategory": "Fluid & Electrolytes",
        "difficulty": "medium",
        "topic": "Hyponatremia",
        "type": "mcq"
      },
      {
        "id": "ms-031",
        "question": "A patient with multiple sclerosis experiences an exacerbation. The nurse should expect which treatment?",
        "options": [
          "A. Long-term oral antibiotics",
          "B. High-dose IV corticosteroids",
          "C. Immediate surgical intervention",
          "D. Blood transfusion"
        ],
        "answer": "B",
        "rationale": "MS exacerbations are treated with high-dose IV corticosteroids (like methylprednisolone) to reduce inflammation and shorten the duration of the attack. Long-term disease-modifying drugs are used for prevention, not acute treatment of exacerbations.",
        "category": "medSurg",
        "subcategory": "Neurological",
        "difficulty": "medium",
        "topic": "Multiple Sclerosis",
        "type": "mcq"
      },
      {
        "id": "ms-032",
        "question": "A patient with chronic kidney disease should limit intake of which foods? Select all that apply.",
        "options": [
          "A. Bananas",
          "B. Oranges",
          "C. Apples",
          "D. Tomatoes",
          "E. Dried beans"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E"
        ],
        "rationale": "CKD patients should limit high-potassium foods: bananas, oranges, tomatoes, potatoes, dried beans, and dairy. Apples are relatively low in potassium and generally acceptable. Phosphorus and sodium also need restriction in advanced CKD.",
        "category": "medSurg",
        "subcategory": "Renal",
        "difficulty": "medium",
        "topic": "CKD Diet",
        "type": "sata"
      },
      {
        "id": "ms-033",
        "question": "A patient presents with crushing chest pain, diaphoresis, and nausea. Which action is priority?",
        "options": [
          "A. Obtain a 12-lead ECG",
          "B. Draw cardiac enzymes",
          "C. Administer morphine for pain",
          "D. Start oxygen therapy"
        ],
        "answer": "A",
        "rationale": "A 12-lead ECG is the priority to identify STEMI (ST-elevation MI) which requires immediate reperfusion therapy. Time is critical - 'door-to-balloon' time should be under 90 minutes. Oxygen, enzymes, and pain management are also important but ECG takes priority for diagnosis.",
        "category": "medSurg",
        "subcategory": "Cardiac",
        "difficulty": "hard",
        "topic": "Acute MI Management",
        "type": "mcq"
      },
      {
        "id": "ms-034",
        "question": "A patient with cirrhosis has ascites. Which intervention is appropriate?",
        "options": [
          "A. High-sodium diet",
          "B. Fluid restriction and low-sodium diet",
          "C. Encouraging high-protein foods",
          "D. Positioning flat in bed"
        ],
        "answer": "B",
        "rationale": "Ascites management includes sodium restriction (2 g/day), fluid restriction if hyponatremic, diuretics, and possibly paracentesis. Protein may be limited if hepatic encephalopathy is present. Elevating the head of bed helps breathing.",
        "category": "medSurg",
        "subcategory": "Gastrointestinal",
        "difficulty": "medium",
        "topic": "Ascites Management",
        "type": "mcq"
      },
      {
        "id": "ms-035",
        "question": "A patient is taking warfarin. Which statement indicates need for further teaching?",
        "options": [
          "A. 'I will use an electric razor for shaving.'",
          "B. 'I should eat consistent amounts of green leafy vegetables.'",
          "C. 'I can take ibuprofen for my headaches.'",
          "D. 'I will wear a medical alert bracelet.'"
        ],
        "answer": "C",
        "rationale": "NSAIDs like ibuprofen increase bleeding risk when combined with warfarin and should be avoided. Acetaminophen is the preferred pain reliever. Using electric razors, consistent vitamin K intake, and wearing medical alert identification are appropriate safety measures.",
        "category": "medSurg",
        "subcategory": "Hematology",
        "difficulty": "easy",
        "topic": "Warfarin Teaching",
        "type": "mcq"
      },
      {
        "id": "ms-036",
        "question": "A patient is admitted with acute asthma exacerbation. Which finding indicates worsening status?",
        "options": [
          "A. Loud wheezing",
          "B. Absence of wheezing with decreased air movement",
          "C. Productive cough",
          "D. SpO2 of 95%"
        ],
        "answer": "B",
        "rationale": "Absent wheezing with decreased air movement is an ominous sign indicating severe bronchospasm with minimal air flow - a 'silent chest.' This patient is at risk for respiratory failure. Loud wheezing actually indicates air is moving through narrowed airways.",
        "category": "medSurg",
        "subcategory": "Respiratory",
        "difficulty": "hard",
        "topic": "Asthma Assessment",
        "type": "mcq"
      },
      {
        "id": "ms-037",
        "question": "A patient with type 2 diabetes is starting metformin. The nurse should teach that:",
        "options": [
          "A. Hypoglycemia is a common side effect",
          "B. GI upset may occur initially but often improves",
          "C. Weight gain is expected",
          "D. The medication works by increasing insulin production"
        ],
        "answer": "B",
        "rationale": "Metformin commonly causes GI side effects (nausea, diarrhea) initially that usually improve over time. Taking with food helps. Metformin rarely causes hypoglycemia when used alone, often causes weight loss (not gain), and works by decreasing hepatic glucose production.",
        "category": "medSurg",
        "subcategory": "Endocrine",
        "difficulty": "medium",
        "topic": "Metformin",
        "type": "mcq"
      },
      {
        "id": "ms-038",
        "question": "A patient had a total knee replacement yesterday. Which finding requires immediate notification of the surgeon?",
        "options": [
          "A. Pain level of 5/10 with movement",
          "B. Temperature of 101.5\u00b0F (38.6\u00b0C)",
          "C. Serosanguineous drainage on dressing",
          "D. Mild swelling of the operative knee"
        ],
        "answer": "B",
        "rationale": "A temperature of 101.5\u00b0F in the first 24-48 hours post-op could indicate infection and requires immediate evaluation. Some fever is common in the first 24 hours due to inflammatory response, but this level warrants investigation. Pain, serosanguineous drainage, and mild swelling are expected.",
        "category": "medSurg",
        "subcategory": "Musculoskeletal",
        "difficulty": "medium",
        "topic": "Post-Operative Complications",
        "type": "mcq"
      },
      {
        "id": "ms-039",
        "question": "A patient with ulcerative colitis is at risk for which complication?",
        "options": [
          "A. Bowel obstruction",
          "B. Fistula formation",
          "C. Toxic megacolon",
          "D. Malabsorption syndrome"
        ],
        "answer": "C",
        "rationale": "Toxic megacolon is a life-threatening complication of ulcerative colitis where the colon becomes severely dilated and at risk for perforation. Fistulas and strictures causing obstruction are more common in Crohn's disease. Both IBD types can have malabsorption, but toxic megacolon is the key UC complication.",
        "category": "medSurg",
        "subcategory": "Gastrointestinal",
        "difficulty": "medium",
        "topic": "Ulcerative Colitis",
        "type": "mcq"
      },
      {
        "id": "ms-040",
        "question": "A patient with pheochromocytoma should avoid:",
        "options": [
          "A. Walking",
          "B. Abdominal palpation",
          "C. Drinking water",
          "D. Deep breathing"
        ],
        "answer": "B",
        "rationale": "Pheochromocytoma is an adrenal tumor that secretes catecholamines. Abdominal palpation can stimulate catecholamine release causing severe hypertensive crisis. The abdomen should not be palpated, and the patient should avoid stress, straining, and caffeine.",
        "category": "medSurg",
        "subcategory": "Endocrine",
        "difficulty": "hard",
        "topic": "Pheochromocytoma",
        "type": "mcq"
      },
      {
        "id": "ms-041",
        "question": "A patient is admitted with suspected stroke. Which medication is contraindicated if CT shows hemorrhagic stroke?",
        "options": [
          "A. Labetalol",
          "B. Tissue plasminogen activator (tPA)",
          "C. Mannitol",
          "D. Phenytoin"
        ],
        "answer": "B",
        "rationale": "tPA is a thrombolytic that dissolves clots and is only for ischemic stroke. In hemorrhagic stroke, tPA would worsen bleeding and is absolutely contraindicated. Labetalol controls blood pressure, mannitol reduces cerebral edema, and phenytoin prevents seizures.",
        "category": "medSurg",
        "subcategory": "Neurological",
        "difficulty": "medium",
        "topic": "Stroke Treatment",
        "type": "mcq"
      },
      {
        "id": "ms-042",
        "question": "A patient is receiving digoxin. Which findings indicate toxicity? Select all that apply.",
        "options": [
          "A. Nausea and vomiting",
          "B. Visual disturbances (yellow-green halos)",
          "C. Heart rate of 90 bpm",
          "D. Confusion",
          "E. Bradycardia"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E"
        ],
        "rationale": "Digoxin toxicity symptoms include GI (nausea, vomiting, anorexia), visual disturbances (yellow-green halos, blurred vision), neurological (confusion, fatigue), and cardiac (bradycardia, arrhythmias). A heart rate of 90 bpm is normal and not a sign of toxicity.",
        "category": "medSurg",
        "subcategory": "Cardiac",
        "difficulty": "medium",
        "topic": "Digoxin Toxicity",
        "type": "sata"
      },
      {
        "id": "ms-043",
        "question": "A patient with emphysema has a barrel chest. This finding is due to:",
        "options": [
          "A. Fluid accumulation in the chest",
          "B. Chronic air trapping and hyperinflation",
          "C. Heart enlargement",
          "D. Pleural effusion"
        ],
        "answer": "B",
        "rationale": "Barrel chest in emphysema results from chronic air trapping and hyperinflation of the lungs. The chest becomes rounded as the AP diameter increases to equal the lateral diameter. This is a classic finding in advanced COPD/emphysema.",
        "category": "medSurg",
        "subcategory": "Respiratory",
        "difficulty": "easy",
        "topic": "COPD Assessment",
        "type": "mcq"
      },
      {
        "id": "ms-044",
        "question": "A patient with hepatitis B should be taught that transmission can occur through:",
        "options": [
          "A. Sharing food utensils",
          "B. Hugging an infected person",
          "C. Sexual contact and blood exposure",
          "D. Mosquito bites"
        ],
        "answer": "C",
        "rationale": "Hepatitis B is transmitted through blood and body fluids: sexual contact, sharing needles, needlestick injuries, and mother-to-child during birth. It is NOT transmitted through casual contact, sharing utensils, hugging, or insect bites (unlike hepatitis A which is fecal-oral).",
        "category": "medSurg",
        "subcategory": "Gastrointestinal",
        "difficulty": "easy",
        "topic": "Hepatitis B",
        "type": "mcq"
      },
      {
        "id": "ms-045",
        "question": "A patient with a new colostomy asks when the stoma should be assessed. The nurse responds:",
        "options": [
          "A. 'Only when you change the pouch.'",
          "B. 'Each time you empty the pouch.'",
          "C. 'Once a week is sufficient.'",
          "D. 'Only if you have problems.'"
        ],
        "answer": "B",
        "rationale": "The stoma should be assessed each time the pouch is emptied, looking for color (should be pink/red like oral mucosa), size changes, skin condition around the stoma, and output characteristics. Early detection of problems prevents complications.",
        "category": "medSurg",
        "subcategory": "Gastrointestinal",
        "difficulty": "easy",
        "topic": "Colostomy Care",
        "type": "mcq"
      },
      {
        "id": "ms-046",
        "question": "A patient with myasthenia gravis develops difficulty breathing and swallowing. This represents:",
        "options": [
          "A. Cholinergic crisis",
          "B. Myasthenic crisis",
          "C. Normal disease progression",
          "D. Medication side effect"
        ],
        "answer": "B",
        "rationale": "Myasthenic crisis is a life-threatening exacerbation with severe weakness affecting respiratory and bulbar muscles (swallowing, speaking). It can be triggered by infection, stress, or surgery. Requires ICU admission and possibly mechanical ventilation. Cholinergic crisis is from medication overdose.",
        "category": "medSurg",
        "subcategory": "Neurological",
        "difficulty": "hard",
        "topic": "Myasthenia Gravis Crisis",
        "type": "mcq"
      },
      {
        "id": "ms-047",
        "question": "A patient is diagnosed with anemia. Which findings support iron-deficiency anemia specifically?",
        "options": [
          "A. Macrocytic RBCs and elevated MCV",
          "B. Microcytic, hypochromic RBCs and low ferritin",
          "C. Normal MCV and elevated reticulocytes",
          "D. Sickle-shaped RBCs"
        ],
        "answer": "B",
        "rationale": "Iron-deficiency anemia presents with microcytic (small), hypochromic (pale) RBCs, low ferritin (iron stores), and low serum iron. Macrocytic anemia with elevated MCV suggests B12 or folate deficiency. Sickle cells indicate sickle cell disease.",
        "category": "medSurg",
        "subcategory": "Hematology",
        "difficulty": "medium",
        "topic": "Iron-Deficiency Anemia",
        "type": "mcq"
      },
      {
        "id": "ms-048",
        "question": "A patient is ordered NPO before a cholecystectomy. Which preoperative finding should delay surgery?",
        "options": [
          "A. Anxiety about the procedure",
          "B. Potassium level of 2.8 mEq/L",
          "C. Blood pressure of 138/88 mmHg",
          "D. White blood cell count of 9,000/mm\u00b3"
        ],
        "answer": "B",
        "rationale": "Hypokalemia (K+ of 2.8 mEq/L) significantly increases risk of cardiac arrhythmias during anesthesia and should be corrected before elective surgery. Mild anxiety, slightly elevated BP, and normal WBC are not contraindications to surgery.",
        "category": "medSurg",
        "subcategory": "Perioperative",
        "difficulty": "medium",
        "topic": "Preoperative Assessment",
        "type": "mcq"
      },
      {
        "id": "ms-049",
        "question": "A patient with heart failure is started on an ACE inhibitor. Which side effect should the nurse monitor for?",
        "options": [
          "A. Hyperkalemia",
          "B. Hypokalemia",
          "C. Tachycardia",
          "D. Weight gain"
        ],
        "answer": "A",
        "rationale": "ACE inhibitors (like lisinopril) can cause hyperkalemia because they reduce aldosterone secretion, leading to potassium retention. Other side effects include dry cough, hypotension, and angioedema. Potassium levels should be monitored regularly.",
        "category": "medSurg",
        "subcategory": "Cardiac",
        "difficulty": "medium",
        "topic": "ACE Inhibitors",
        "type": "mcq"
      },
      {
        "id": "ms-050",
        "question": "A patient is receiving IV potassium chloride. The nurse should ensure that:",
        "options": [
          "A. It is given by IV push for rapid correction",
          "B. The concentration does not exceed 40 mEq/L peripherally",
          "C. The patient is NPO during administration",
          "D. The infusion runs over 15 minutes"
        ],
        "answer": "B",
        "rationale": "IV potassium must NEVER be given by IV push - it can cause fatal cardiac arrhythmias. Peripheral IV concentration should not exceed 40 mEq/L (higher concentrations require central line). Maximum rate is typically 10-20 mEq/hour with cardiac monitoring.",
        "category": "medSurg",
        "subcategory": "Fluid & Electrolytes",
        "difficulty": "hard",
        "topic": "IV Potassium Administration",
        "type": "mcq"
      }
    ],
    "icon": "\ud83c\udfe5",
    "weight": "15-21%",
    "questionCount": 50
  },
  "maternity": {
    "name": "Maternity & Newborn",
    "description": "Pregnancy, labor & delivery, postpartum, and newborn nursing care",
    "questions": [
      {
        "id": "mat-001",
        "question": "A pregnant patient at 32 weeks gestation reports a sudden gush of fluid from her vagina. The nurse should first:",
        "options": [
          "A. Assess fetal heart tones",
          "B. Prepare for immediate delivery",
          "C. Check the fluid with nitrazine paper",
          "D. Perform a vaginal examination"
        ],
        "answer": "C",
        "rationale": "Testing the fluid with nitrazine paper helps confirm if membranes have ruptured. Amniotic fluid turns nitrazine paper blue (pH 7.0-7.5). This assessment guides subsequent care. Vaginal exams should be limited with suspected rupture due to infection risk.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "medium",
        "topic": "Premature Rupture of Membranes",
        "type": "mcq"
      },
      {
        "id": "mat-002",
        "question": "During labor, a patient's fetal heart rate shows late decelerations. The nurse should first:",
        "options": [
          "A. Increase the oxytocin infusion",
          "B. Position the patient on her left side",
          "C. Prepare for cesarean section",
          "D. Administer oxygen at 10 L/min"
        ],
        "answer": "B",
        "rationale": "Late decelerations indicate uteroplacental insufficiency. The first intervention is repositioning to the left side to relieve aortocaval compression and improve placental perfusion. Other interventions include stopping oxytocin, giving O2, increasing IV fluids, and notifying the provider.",
        "category": "maternity",
        "subcategory": "Intrapartum",
        "difficulty": "medium",
        "topic": "Fetal Heart Rate Patterns",
        "type": "mcq"
      },
      {
        "id": "mat-003",
        "question": "A newborn has an APGAR score of 4 at 1 minute. The nurse should:",
        "options": [
          "A. Document and reassess at 5 minutes only",
          "B. Provide warmth and stimulation",
          "C. Begin immediate resuscitation efforts",
          "D. Allow skin-to-skin with mother"
        ],
        "answer": "C",
        "rationale": "An APGAR of 4 indicates moderate depression requiring resuscitation. Scores 0-3 require immediate resuscitation, 4-6 need some assistance (stimulation, oxygen, possible positive pressure ventilation), and 7-10 are normal requiring only routine care.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "medium",
        "topic": "APGAR Scoring",
        "type": "mcq"
      },
      {
        "id": "mat-004",
        "question": "Which finding is a warning sign of preeclampsia?",
        "options": [
          "A. Blood pressure of 118/78 mmHg",
          "B. Mild ankle edema",
          "C. Severe headache and visual changes",
          "D. Weight gain of 1 lb/week"
        ],
        "answer": "C",
        "rationale": "Severe headache and visual changes (blurred vision, scotomata) are warning signs of worsening preeclampsia and potential progression to eclampsia (seizures). Other warning signs include epigastric pain, oliguria, and hyperreflexia. Mild edema and normal weight gain are expected in pregnancy.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "medium",
        "topic": "Preeclampsia",
        "type": "mcq"
      },
      {
        "id": "mat-005",
        "question": "A patient at 38 weeks gestation is having contractions every 3 minutes lasting 60 seconds. Cervical exam shows 6 cm dilation, 100% effacement. This patient is in which stage of labor?",
        "options": [
          "A. Latent phase of first stage",
          "B. Active phase of first stage",
          "C. Second stage",
          "D. Third stage"
        ],
        "answer": "B",
        "rationale": "Active labor is characterized by cervical dilation of 6-10 cm with regular contractions. The latent phase is 0-6 cm. Second stage begins at complete dilation (10 cm) and ends with delivery of the baby. Third stage is delivery of the placenta.",
        "category": "maternity",
        "subcategory": "Intrapartum",
        "difficulty": "easy",
        "topic": "Stages of Labor",
        "type": "mcq"
      },
      {
        "id": "mat-006",
        "question": "A newborn is 18 hours old and appears jaundiced. The nurse should:",
        "options": [
          "A. Reassure the parents that this is normal",
          "B. Notify the provider immediately",
          "C. Begin phototherapy",
          "D. Increase formula feedings"
        ],
        "answer": "B",
        "rationale": "Jaundice appearing within 24 hours of birth is pathological and requires immediate evaluation for causes such as hemolytic disease (Rh or ABO incompatibility), infection, or other conditions. Physiological jaundice typically appears after 24 hours.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "medium",
        "topic": "Neonatal Jaundice",
        "type": "mcq"
      },
      {
        "id": "mat-007",
        "question": "A postpartum patient has a boggy uterus and heavy lochia. The nurse's first action is to:",
        "options": [
          "A. Notify the provider",
          "B. Massage the uterine fundus",
          "C. Administer oxytocin",
          "D. Prepare for surgery"
        ],
        "answer": "B",
        "rationale": "Fundal massage is the first intervention for uterine atony (boggy uterus) to stimulate uterine contraction and control postpartum hemorrhage. If massage is ineffective, then notify the provider and administer uterotonics.",
        "category": "maternity",
        "subcategory": "Postpartum",
        "difficulty": "medium",
        "topic": "Postpartum Hemorrhage",
        "type": "mcq"
      },
      {
        "id": "mat-008",
        "question": "A pregnant patient asks about folic acid supplementation. The nurse explains that folic acid helps prevent:",
        "options": [
          "A. Gestational diabetes",
          "B. Neural tube defects",
          "C. Preterm labor",
          "D. Postpartum depression"
        ],
        "answer": "B",
        "rationale": "Folic acid supplementation before and during early pregnancy significantly reduces the risk of neural tube defects (spina bifida, anencephaly). The recommended dose is 400-800 mcg daily, starting before conception if possible.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "easy",
        "topic": "Prenatal Nutrition",
        "type": "mcq"
      },
      {
        "id": "mat-009",
        "question": "The nurse is caring for a newborn receiving phototherapy. Which intervention is essential?",
        "options": [
          "A. Covering the baby's eyes with eye shields",
          "B. Dressing the baby in warm clothing",
          "C. Limiting breastfeeding during treatment",
          "D. Placing the baby prone only"
        ],
        "answer": "A",
        "rationale": "Eye shields are essential during phototherapy to prevent retinal damage from the lights. The baby should be undressed (except diaper) for maximum skin exposure, feeding should continue or increase, and position should be changed frequently.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "easy",
        "topic": "Phototherapy",
        "type": "mcq"
      },
      {
        "id": "mat-010",
        "question": "Which fetal heart rate finding is reassuring?",
        "options": [
          "A. Baseline of 180 bpm",
          "B. Moderate variability with accelerations",
          "C. Late decelerations with contractions",
          "D. Absent variability"
        ],
        "answer": "B",
        "rationale": "Moderate variability (6-25 bpm fluctuation) with accelerations indicates a well-oxygenated, neurologically responsive fetus. Tachycardia (>160), late decelerations, and absent variability are non-reassuring findings requiring intervention.",
        "category": "maternity",
        "subcategory": "Intrapartum",
        "difficulty": "medium",
        "topic": "Fetal Monitoring",
        "type": "mcq"
      },
      {
        "id": "mat-011",
        "question": "A pregnant patient at 28 weeks is Rh-negative with an Rh-positive partner. The nurse should expect administration of:",
        "options": [
          "A. Magnesium sulfate",
          "B. RhoGAM (Rh immunoglobulin)",
          "C. Terbutaline",
          "D. Betamethasone"
        ],
        "answer": "B",
        "rationale": "RhoGAM is given at 28 weeks gestation and within 72 hours after delivery to Rh-negative mothers with Rh-positive or unknown babies. It prevents maternal antibody formation against Rh-positive fetal blood cells (Rh sensitization).",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "medium",
        "topic": "Rh Incompatibility",
        "type": "mcq"
      },
      {
        "id": "mat-012",
        "question": "A newborn's gestational age assessment shows the following: abundant lanugo, flat areola, and plantar creases on anterior third of sole. This newborn is most likely:",
        "options": [
          "A. Post-term",
          "B. Full-term",
          "C. Preterm",
          "D. Small for gestational age"
        ],
        "answer": "C",
        "rationale": "These findings indicate prematurity: abundant lanugo (fine hair that disappears by term), flat areola (should be raised with 3-4 mm bud at term), and limited plantar creases (full-term has creases over entire sole).",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "medium",
        "topic": "Gestational Age Assessment",
        "type": "mcq"
      },
      {
        "id": "mat-013",
        "question": "A laboring patient's membranes rupture and the nurse observes the umbilical cord protruding from the vagina. The priority action is to:",
        "options": [
          "A. Push the cord back into the vagina",
          "B. Place the patient in Trendelenburg or knee-chest position",
          "C. Clamp and cut the cord immediately",
          "D. Begin pushing immediately"
        ],
        "answer": "B",
        "rationale": "Umbilical cord prolapse is an emergency. Position the patient in Trendelenburg or knee-chest to use gravity to move the fetus off the cord. Keep the cord moist, apply gentle upward pressure to presenting part (not the cord), and prepare for emergency cesarean section.",
        "category": "maternity",
        "subcategory": "Intrapartum",
        "difficulty": "hard",
        "topic": "Cord Prolapse",
        "type": "mcq"
      },
      {
        "id": "mat-014",
        "question": "A postpartum patient is breastfeeding and asks about contraception. The nurse should teach that:",
        "options": [
          "A. Breastfeeding is 100% effective contraception",
          "B. Combined oral contraceptives are preferred",
          "C. Progestin-only methods are compatible with breastfeeding",
          "D. She cannot get pregnant until menses return"
        ],
        "answer": "C",
        "rationale": "Progestin-only contraceptives (mini-pill, Depo-Provera, IUD) are compatible with breastfeeding as they don't affect milk supply. Combined estrogen-progestin methods may decrease milk production. Breastfeeding is not reliable contraception, and ovulation can occur before menses return.",
        "category": "maternity",
        "subcategory": "Postpartum",
        "difficulty": "medium",
        "topic": "Postpartum Contraception",
        "type": "mcq"
      },
      {
        "id": "mat-015",
        "question": "Signs of effective breastfeeding include: Select all that apply.",
        "options": [
          "A. Audible swallowing",
          "B. 6-8 wet diapers per day after milk comes in",
          "C. Breast pain throughout the feeding",
          "D. Baby falling asleep at the breast satisfied",
          "E. Cracked and bleeding nipples"
        ],
        "answer": [
          "A",
          "B",
          "D"
        ],
        "rationale": "Effective breastfeeding is indicated by audible swallowing, adequate wet diapers (6-8/day), satiated baby, and steady weight gain. Some initial discomfort is normal, but persistent pain, cracked nipples, and bleeding indicate latch problems needing intervention.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "medium",
        "topic": "Breastfeeding Assessment",
        "type": "sata"
      },
      {
        "id": "mat-016",
        "question": "A pregnant patient reports decreased fetal movement. The nurse should instruct her to:",
        "options": [
          "A. Wait 24 hours and call if it continues",
          "B. Perform fetal kick counts and come in if <10 movements in 2 hours",
          "C. Increase caffeine intake to stimulate the baby",
          "D. This is normal in late pregnancy"
        ],
        "answer": "B",
        "rationale": "Decreased fetal movement may indicate fetal distress. The patient should do kick counts - lie on her side and count movements. If fewer than 10 movements in 2 hours, she should seek immediate evaluation. Waiting 24 hours could be dangerous.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "medium",
        "topic": "Fetal Movement Assessment",
        "type": "mcq"
      },
      {
        "id": "mat-017",
        "question": "A patient receiving magnesium sulfate for preeclampsia shows which sign of toxicity?",
        "options": [
          "A. Deep tendon reflexes of 2+",
          "B. Respiratory rate of 10 breaths/min",
          "C. Urine output of 40 mL/hr",
          "D. Blood pressure of 150/95 mmHg"
        ],
        "answer": "B",
        "rationale": "Respiratory depression (rate <12) is a sign of magnesium toxicity. Other signs include absent DTRs, lethargy, and cardiac arrest. Normal DTRs (2+), adequate urine output (>30 mL/hr), and elevated BP (the condition being treated) are expected findings.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "medium",
        "topic": "Magnesium Sulfate",
        "type": "mcq"
      },
      {
        "id": "mat-018",
        "question": "The antidote for magnesium sulfate toxicity is:",
        "options": [
          "A. Naloxone",
          "B. Calcium gluconate",
          "C. Vitamin K",
          "D. Protamine sulfate"
        ],
        "answer": "B",
        "rationale": "Calcium gluconate is the antidote for magnesium sulfate toxicity and should be kept at the bedside during administration. Naloxone reverses opioids, Vitamin K reverses warfarin, and protamine sulfate reverses heparin.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "easy",
        "topic": "Medication Antidotes",
        "type": "mcq"
      },
      {
        "id": "mat-019",
        "question": "A newborn is placed skin-to-skin on the mother's chest immediately after delivery. This practice:",
        "options": [
          "A. Increases risk of hypothermia",
          "B. Should be delayed until after the bath",
          "C. Promotes bonding and thermoregulation",
          "D. Interferes with breastfeeding initiation"
        ],
        "answer": "C",
        "rationale": "Immediate skin-to-skin contact promotes maternal-infant bonding, helps regulate the newborn's temperature, blood sugar, and respiratory rate, and facilitates breastfeeding initiation. Bathing should be delayed to preserve the vernix and maintain temperature.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "easy",
        "topic": "Newborn Care",
        "type": "mcq"
      },
      {
        "id": "mat-020",
        "question": "A pregnant patient at 36 weeks has a blood pressure of 158/102 mmHg and 3+ proteinuria. The nurse recognizes this as:",
        "options": [
          "A. Gestational hypertension",
          "B. Chronic hypertension",
          "C. Preeclampsia with severe features",
          "D. Normal pregnancy changes"
        ],
        "answer": "C",
        "rationale": "Preeclampsia with severe features is diagnosed with BP \u2265160/110, proteinuria, and/or other symptoms (headache, visual changes, epigastric pain, low platelets, elevated liver enzymes). This BP (158/102) with significant proteinuria (3+) indicates severe preeclampsia.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "medium",
        "topic": "Hypertensive Disorders",
        "type": "mcq"
      },
      {
        "id": "mat-021",
        "question": "During a vaginal delivery, the nurse notes meconium-stained amniotic fluid. The priority is to:",
        "options": [
          "A. Suction the baby's mouth and nose on the perineum",
          "B. Assess the baby at birth and suction only if not vigorous",
          "C. Clamp the cord immediately",
          "D. Delay delivery until the fluid clears"
        ],
        "answer": "B",
        "rationale": "Current NRP guidelines recommend assessing the baby at birth. If vigorous (crying, good tone), routine care is provided. If not vigorous, direct laryngoscopy and tracheal suctioning may be needed. Routine suctioning on the perineum is no longer recommended.",
        "category": "maternity",
        "subcategory": "Intrapartum",
        "difficulty": "hard",
        "topic": "Meconium-Stained Fluid",
        "type": "mcq"
      },
      {
        "id": "mat-022",
        "question": "A postpartum patient reports painful, hard, engorged breasts. The nurse should recommend:",
        "options": [
          "A. Tight binding of the breasts",
          "B. Applying ice and avoiding stimulation",
          "C. Frequent breastfeeding and warm compresses before feeding",
          "D. Discontinuing breastfeeding immediately"
        ],
        "answer": "C",
        "rationale": "For breastfeeding mothers with engorgement, frequent nursing (8-12 times/day) and warm compresses before feeding help let-down and relieve engorgement. Cold compresses after feeding reduce swelling. Tight binding is outdated and increases mastitis risk.",
        "category": "maternity",
        "subcategory": "Postpartum",
        "difficulty": "medium",
        "topic": "Breast Engorgement",
        "type": "mcq"
      },
      {
        "id": "mat-023",
        "question": "A newborn has a positive Ortolani sign. This indicates:",
        "options": [
          "A. Congenital heart defect",
          "B. Developmental dysplasia of the hip",
          "C. Hypoglycemia",
          "D. Neural tube defect"
        ],
        "answer": "B",
        "rationale": "A positive Ortolani sign (a 'clunk' felt when abducting the flexed hip) indicates developmental dysplasia of the hip (DDH). Early detection and treatment (Pavlik harness) is important for normal hip joint development.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "medium",
        "topic": "Newborn Assessment",
        "type": "mcq"
      },
      {
        "id": "mat-024",
        "question": "Which pregnant patient should receive Tdap vaccine?",
        "options": [
          "A. Only if she has never been vaccinated",
          "B. During each pregnancy, preferably 27-36 weeks",
          "C. Only postpartum",
          "D. Tdap is contraindicated in pregnancy"
        ],
        "answer": "B",
        "rationale": "Tdap is recommended during each pregnancy between 27-36 weeks gestation (preferably early in this window) to provide passive immunity to the newborn against pertussis. This is regardless of prior vaccination status.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "medium",
        "topic": "Prenatal Immunizations",
        "type": "mcq"
      },
      {
        "id": "mat-025",
        "question": "The nurse is teaching about warning signs to report during pregnancy. Which should the patient report immediately? Select all that apply.",
        "options": [
          "A. Vaginal bleeding",
          "B. Severe headache that doesn't resolve",
          "C. Occasional mild nausea",
          "D. Decreased fetal movement",
          "E. Leaking fluid from vagina"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E"
        ],
        "rationale": "Danger signs requiring immediate reporting include vaginal bleeding, severe persistent headache (preeclampsia), decreased fetal movement, and leaking fluid (ruptured membranes). Mild nausea is a normal pregnancy symptom.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "easy",
        "topic": "Danger Signs in Pregnancy",
        "type": "sata"
      },
      {
        "id": "mat-026",
        "question": "Variable decelerations in fetal heart rate indicate:",
        "options": [
          "A. Head compression",
          "B. Umbilical cord compression",
          "C. Uteroplacental insufficiency",
          "D. Normal fetal sleep"
        ],
        "answer": "B",
        "rationale": "Variable decelerations (vary in timing, duration, and depth) indicate umbilical cord compression. Interventions include position changes to relieve cord compression, amnioinfusion if oligohydramnios is present, and monitoring for resolution.",
        "category": "maternity",
        "subcategory": "Intrapartum",
        "difficulty": "medium",
        "topic": "Fetal Heart Rate Patterns",
        "type": "mcq"
      },
      {
        "id": "mat-027",
        "question": "A newborn's blood glucose is 35 mg/dL at 2 hours of age. The nurse should:",
        "options": [
          "A. Document as normal finding",
          "B. Repeat the test in 4 hours",
          "C. Feed the baby and recheck glucose",
          "D. Wait for symptoms to develop"
        ],
        "answer": "C",
        "rationale": "Neonatal hypoglycemia (<40-45 mg/dL) requires intervention. If the baby is asymptomatic and able to feed, feeding is attempted first, then glucose is rechecked. Symptomatic babies or those not responding to feeding may need IV dextrose.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "medium",
        "topic": "Neonatal Hypoglycemia",
        "type": "mcq"
      },
      {
        "id": "mat-028",
        "question": "A woman's last menstrual period was March 10. Using Naegele's rule, the estimated due date is:",
        "options": [
          "A. December 3",
          "B. December 17",
          "C. January 3",
          "D. January 17"
        ],
        "answer": "B",
        "rationale": "Naegele's rule: LMP - 3 months + 7 days + 1 year. March 10 - 3 months = December 10 + 7 days = December 17. This estimates a 40-week gestation.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "easy",
        "topic": "Due Date Calculation",
        "type": "mcq"
      },
      {
        "id": "mat-029",
        "question": "A postpartum patient with preeclampsia should be monitored for seizures for:",
        "options": [
          "A. 12 hours after delivery",
          "B. 24 hours after delivery",
          "C. 48-72 hours after delivery",
          "D. Only during labor"
        ],
        "answer": "C",
        "rationale": "Eclamptic seizures can occur up to 48-72 hours (some sources say up to 6 weeks) postpartum. Magnesium sulfate is usually continued for 24-48 hours postpartum, and close monitoring for seizure activity continues.",
        "category": "maternity",
        "subcategory": "Postpartum",
        "difficulty": "medium",
        "topic": "Postpartum Preeclampsia",
        "type": "mcq"
      },
      {
        "id": "mat-030",
        "question": "Which newborn finding requires immediate intervention?",
        "options": [
          "A. Acrocyanosis",
          "B. Central cyanosis",
          "C. Milia",
          "D. Erythema toxicum"
        ],
        "answer": "B",
        "rationale": "Central cyanosis (blue color of trunk, mucous membranes) indicates hypoxia and requires immediate evaluation and intervention. Acrocyanosis (blue hands/feet) is normal in newborns. Milia and erythema toxicum are benign newborn skin findings.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "easy",
        "topic": "Newborn Assessment",
        "type": "mcq"
      },
      {
        "id": "mat-031",
        "question": "A laboring patient requests epidural analgesia. Prior to administration, the nurse ensures:",
        "options": [
          "A. The patient has not eaten in 24 hours",
          "B. IV fluid bolus is administered",
          "C. Cervix is fully dilated",
          "D. Membranes are intact"
        ],
        "answer": "B",
        "rationale": "An IV fluid bolus (typically 500-1000 mL) is given before epidural to prevent hypotension from sympathetic blockade. The patient should be NPO (or limited clear liquids), and epidural can be given at various stages of labor, not only at full dilation.",
        "category": "maternity",
        "subcategory": "Intrapartum",
        "difficulty": "medium",
        "topic": "Epidural Analgesia",
        "type": "mcq"
      },
      {
        "id": "mat-032",
        "question": "A pregnant patient has gestational diabetes. Target fasting blood glucose should be:",
        "options": [
          "A. Less than 95 mg/dL",
          "B. Less than 120 mg/dL",
          "C. Less than 140 mg/dL",
          "D. Less than 180 mg/dL"
        ],
        "answer": "A",
        "rationale": "Gestational diabetes targets: fasting <95 mg/dL, 1-hour postprandial <140 mg/dL, and 2-hour postprandial <120 mg/dL. Tight glucose control reduces risks of macrosomia, birth trauma, and neonatal hypoglycemia.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "medium",
        "topic": "Gestational Diabetes",
        "type": "mcq"
      },
      {
        "id": "mat-033",
        "question": "Normal lochia progression is:",
        "options": [
          "A. Alba, serosa, rubra",
          "B. Rubra, alba, serosa",
          "C. Rubra, serosa, alba",
          "D. Serosa, rubra, alba"
        ],
        "answer": "C",
        "rationale": "Lochia progresses from rubra (red, days 1-3) to serosa (pink/brown, days 4-10) to alba (white/yellow, up to 6 weeks). A return to rubra after progression to serosa may indicate retained placental fragments or infection.",
        "category": "maternity",
        "subcategory": "Postpartum",
        "difficulty": "easy",
        "topic": "Lochia Assessment",
        "type": "mcq"
      },
      {
        "id": "mat-034",
        "question": "A baby born at 35 weeks gestation is classified as:",
        "options": [
          "A. Very preterm",
          "B. Late preterm",
          "C. Full term",
          "D. Post term"
        ],
        "answer": "B",
        "rationale": "Late preterm is 34-36 6/7 weeks. Very preterm is <32 weeks. Full term is 39-40 6/7 weeks. Post-term is \u226542 weeks. Late preterm infants still have increased risks for respiratory distress, hypoglycemia, and feeding difficulties.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "easy",
        "topic": "Gestational Age Classification",
        "type": "mcq"
      },
      {
        "id": "mat-035",
        "question": "During labor, the patient's cervix is 3 cm dilated, 50% effaced, and the station is -2. Station refers to:",
        "options": [
          "A. Percentage of cervical thinning",
          "B. Position of the presenting part relative to ischial spines",
          "C. Number of centimeters dilated",
          "D. Position of the fetus in the uterus"
        ],
        "answer": "B",
        "rationale": "Station describes the presenting part's position relative to the ischial spines (zero station). Negative numbers indicate above the spines, positive below. -2 means the presenting part is 2 cm above the ischial spines.",
        "category": "maternity",
        "subcategory": "Intrapartum",
        "difficulty": "easy",
        "topic": "Labor Assessment",
        "type": "mcq"
      },
      {
        "id": "mat-036",
        "question": "A pregnant patient is diagnosed with placenta previa. Which instruction is most important?",
        "options": [
          "A. Avoid sexual intercourse",
          "B. Increase physical activity",
          "C. Take iron supplements only",
          "D. Attend regular prenatal visits only"
        ],
        "answer": "A",
        "rationale": "Placenta previa (placenta covering cervix) requires pelvic rest - nothing in the vagina (no intercourse, vaginal exams, or douching) to prevent hemorrhage. Activity may be restricted, and close monitoring is essential.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "medium",
        "topic": "Placenta Previa",
        "type": "mcq"
      },
      {
        "id": "mat-037",
        "question": "Which findings indicate effective bonding between mother and newborn? Select all that apply.",
        "options": [
          "A. Mother makes eye contact with baby",
          "B. Mother calls baby by name",
          "C. Mother keeps baby in nursery",
          "D. Mother touches and holds baby",
          "E. Mother responds to baby's cues"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E"
        ],
        "rationale": "Effective bonding behaviors include eye contact (en face position), calling baby by name, holding and touching, and responding to cues. Keeping the baby in the nursery may indicate bonding difficulties requiring assessment and intervention.",
        "category": "maternity",
        "subcategory": "Postpartum",
        "difficulty": "easy",
        "topic": "Maternal-Infant Bonding",
        "type": "sata"
      },
      {
        "id": "mat-038",
        "question": "A newborn has asymmetric Moro reflex. This finding suggests:",
        "options": [
          "A. Normal neurological function",
          "B. Brachial plexus injury",
          "C. Hearing impairment",
          "D. Visual impairment"
        ],
        "answer": "B",
        "rationale": "Asymmetric Moro reflex (one arm doesn't respond) suggests brachial plexus injury (Erb's palsy), often from shoulder dystocia during delivery. The affected arm hangs limply. Normal Moro is symmetric bilateral arm extension then flexion.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "medium",
        "topic": "Newborn Reflexes",
        "type": "mcq"
      },
      {
        "id": "mat-039",
        "question": "A patient at 26 weeks gestation is admitted with preterm labor. The nurse anticipates administration of:",
        "options": [
          "A. Oxytocin",
          "B. Misoprostol",
          "C. Betamethasone",
          "D. Methergine"
        ],
        "answer": "C",
        "rationale": "Betamethasone (a corticosteroid) is given between 24-34 weeks gestation to accelerate fetal lung maturity and reduce risk of respiratory distress syndrome if preterm delivery occurs. Tocolytics may also be given to delay delivery.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "medium",
        "topic": "Preterm Labor",
        "type": "mcq"
      },
      {
        "id": "mat-040",
        "question": "A postpartum patient develops a fever of 100.6\u00b0F on day 3 with uterine tenderness and foul-smelling lochia. The nurse suspects:",
        "options": [
          "A. Normal postpartum changes",
          "B. Endometritis",
          "C. Mastitis",
          "D. Urinary tract infection"
        ],
        "answer": "B",
        "rationale": "Endometritis (uterine infection) presents with fever, uterine tenderness, and foul-smelling lochia. Risk factors include cesarean birth, prolonged rupture of membranes, and multiple vaginal exams. Treatment is IV antibiotics.",
        "category": "maternity",
        "subcategory": "Postpartum",
        "difficulty": "medium",
        "topic": "Postpartum Infections",
        "type": "mcq"
      },
      {
        "id": "mat-041",
        "question": "The normal newborn heart rate is:",
        "options": [
          "A. 80-100 bpm",
          "B. 100-120 bpm",
          "C. 120-160 bpm",
          "D. 160-180 bpm"
        ],
        "answer": "C",
        "rationale": "Normal newborn heart rate is 120-160 bpm (some sources say 110-160). Rates may increase to 180 with crying and decrease to 100 during sleep. Persistent rates outside this range require evaluation.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "easy",
        "topic": "Newborn Vital Signs",
        "type": "mcq"
      },
      {
        "id": "mat-042",
        "question": "A patient's fundal height at 24 weeks gestation should be approximately:",
        "options": [
          "A. At the symphysis pubis",
          "B. At the umbilicus",
          "C. 4 cm above the umbilicus",
          "D. At the xiphoid process"
        ],
        "answer": "B",
        "rationale": "Fundal height in centimeters typically equals weeks of gestation (\u00b12 cm) from 20-36 weeks. At 24 weeks, the fundus is approximately at the umbilicus. This is a simple screening tool for fetal growth.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "easy",
        "topic": "Fundal Height",
        "type": "mcq"
      },
      {
        "id": "mat-043",
        "question": "A laboring patient has a temperature of 101.3\u00b0F with ruptured membranes for 24 hours. This suggests:",
        "options": [
          "A. Normal labor progression",
          "B. Chorioamnionitis",
          "C. Dehydration",
          "D. Epidural side effect"
        ],
        "answer": "B",
        "rationale": "Maternal fever with prolonged rupture of membranes (>18 hours) suggests chorioamnionitis (infection of the amniotic membranes). Other signs include maternal and fetal tachycardia, uterine tenderness, and foul-smelling amniotic fluid. Requires antibiotics and delivery.",
        "category": "maternity",
        "subcategory": "Intrapartum",
        "difficulty": "medium",
        "topic": "Chorioamnionitis",
        "type": "mcq"
      },
      {
        "id": "mat-044",
        "question": "A breastfeeding mother asks when to introduce a bottle. The nurse advises:",
        "options": [
          "A. Immediately to provide feeding flexibility",
          "B. After breastfeeding is well established, around 3-4 weeks",
          "C. Never, as it will cause nipple confusion",
          "D. Only when the baby is 6 months old"
        ],
        "answer": "B",
        "rationale": "Bottles can be introduced once breastfeeding is well established (typically 3-4 weeks) to minimize nipple confusion while still allowing flexibility. Earlier introduction may interfere with establishing milk supply and breastfeeding pattern.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "medium",
        "topic": "Breastfeeding Education",
        "type": "mcq"
      },
      {
        "id": "mat-045",
        "question": "A pregnant patient reports heartburn. The nurse should recommend:",
        "options": [
          "A. Lying down immediately after eating",
          "B. Eating large meals twice daily",
          "C. Small frequent meals and avoiding lying down after eating",
          "D. Increasing spicy food intake"
        ],
        "answer": "C",
        "rationale": "Heartburn management includes eating small frequent meals, remaining upright after eating (no lying down for 1-2 hours), avoiding spicy/fatty foods, and sleeping with head elevated. Antacids are safe if lifestyle measures don't help.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "easy",
        "topic": "Common Discomforts",
        "type": "mcq"
      },
      {
        "id": "mat-046",
        "question": "HELLP syndrome includes which findings? Select all that apply.",
        "options": [
          "A. Hemolysis",
          "B. Elevated liver enzymes",
          "C. Low potassium",
          "D. Low platelets",
          "E. High blood pressure"
        ],
        "answer": [
          "A",
          "B",
          "D"
        ],
        "rationale": "HELLP = Hemolysis, Elevated Liver enzymes, Low Platelets. It is a severe complication of preeclampsia. While hypertension often coexists, it's not part of the HELLP acronym. Potassium levels are not part of the diagnostic criteria.",
        "category": "maternity",
        "subcategory": "Antepartum",
        "difficulty": "medium",
        "topic": "HELLP Syndrome",
        "type": "sata"
      },
      {
        "id": "mat-047",
        "question": "A newborn has a bulging fontanel. This may indicate:",
        "options": [
          "A. Dehydration",
          "B. Increased intracranial pressure",
          "C. Normal finding",
          "D. Hypoglycemia"
        ],
        "answer": "B",
        "rationale": "A bulging or tense fontanel suggests increased intracranial pressure and requires immediate evaluation. Causes include meningitis, hydrocephalus, or intracranial hemorrhage. A sunken fontanel indicates dehydration. Normally the fontanel is flat or slightly depressed.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "medium",
        "topic": "Fontanel Assessment",
        "type": "mcq"
      },
      {
        "id": "mat-048",
        "question": "After delivery, the nurse notes the placenta is missing a cotyledon. The priority action is to:",
        "options": [
          "A. Document and continue routine care",
          "B. Notify the provider immediately",
          "C. Begin fundal massage",
          "D. Encourage breastfeeding"
        ],
        "answer": "B",
        "rationale": "A missing cotyledon indicates retained placental fragments, which can cause postpartum hemorrhage and infection. The provider must be notified immediately as the patient may need manual removal or D&C to remove retained tissue.",
        "category": "maternity",
        "subcategory": "Intrapartum",
        "difficulty": "medium",
        "topic": "Placenta Delivery",
        "type": "mcq"
      },
      {
        "id": "mat-049",
        "question": "A postpartum patient reports feeling sad and tearful on day 4. The nurse recognizes this as:",
        "options": [
          "A. Postpartum depression requiring treatment",
          "B. Postpartum psychosis",
          "C. Postpartum blues",
          "D. Abnormal adjustment"
        ],
        "answer": "C",
        "rationale": "Postpartum blues ('baby blues') is common, occurring in 50-80% of mothers. It involves mood swings, tearfulness, and anxiety, typically peaks around day 4-5 and resolves within 2 weeks. If symptoms persist or worsen, screen for postpartum depression.",
        "category": "maternity",
        "subcategory": "Postpartum",
        "difficulty": "easy",
        "topic": "Postpartum Blues",
        "type": "mcq"
      },
      {
        "id": "mat-050",
        "question": "The nurse is educating new parents about newborn safety. Which statement indicates understanding?",
        "options": [
          "A. 'I will place the baby on their stomach to sleep.'",
          "B. 'Soft bedding and bumpers will keep baby comfortable.'",
          "C. 'Baby should sleep on their back on a firm surface.'",
          "D. 'Co-sleeping in our bed is safest.'"
        ],
        "answer": "C",
        "rationale": "The AAP recommends placing babies on their back to sleep ('Back to Sleep') on a firm, flat surface without soft bedding, pillows, or bumpers to reduce SIDS risk. Room-sharing (not bed-sharing) is recommended for the first 6-12 months.",
        "category": "maternity",
        "subcategory": "Newborn",
        "difficulty": "easy",
        "topic": "Safe Sleep",
        "type": "mcq"
      }
    ],
    "icon": "\ud83d\udc76",
    "weight": "6-12%",
    "questionCount": 50
  },
  "pediatrics": {
    "name": "Pediatric Nursing",
    "description": "Child health nursing from infancy through adolescence",
    "questions": [
      {
        "id": "peds-001",
        "question": "A 2-month-old infant should receive which immunizations at this well-child visit?",
        "options": [
          "A. MMR and varicella",
          "B. DTaP, IPV, Hib, PCV, and rotavirus",
          "C. Tdap and meningococcal",
          "D. Hepatitis A only"
        ],
        "answer": "B",
        "rationale": "At 2 months, infants receive DTaP, IPV (polio), Hib, PCV13 (pneumococcal), rotavirus, and HepB (if not already completed). MMR and varicella are given at 12-15 months. Tdap and meningococcal are for adolescents.",
        "category": "pediatrics",
        "subcategory": "Health Promotion",
        "difficulty": "medium",
        "topic": "Immunization Schedule",
        "type": "mcq"
      },
      {
        "id": "peds-002",
        "question": "A child with epiglottitis should be placed in which position?",
        "options": [
          "A. Supine",
          "B. Tripod or upright leaning forward",
          "C. Trendelenburg",
          "D. Prone"
        ],
        "answer": "B",
        "rationale": "Children with epiglottitis (a medical emergency) should sit upright leaning forward (tripod position) to maximize airway opening. Do NOT lay them supine or examine the throat with a tongue depressor as this can cause complete airway obstruction.",
        "category": "pediatrics",
        "subcategory": "Respiratory",
        "difficulty": "medium",
        "topic": "Epiglottitis",
        "type": "mcq"
      },
      {
        "id": "peds-003",
        "question": "Which finding is expected in a child with pyloric stenosis?",
        "options": [
          "A. Bile-stained vomiting",
          "B. Projectile non-bilious vomiting",
          "C. Diarrhea",
          "D. Abdominal distension"
        ],
        "answer": "B",
        "rationale": "Pyloric stenosis causes projectile, non-bilious vomiting (obstruction is above the bile duct), visible peristaltic waves, palpable olive-shaped mass, and hungry baby. Bilious vomiting suggests obstruction below the ampulla of Vater.",
        "category": "pediatrics",
        "subcategory": "Gastrointestinal",
        "difficulty": "medium",
        "topic": "Pyloric Stenosis",
        "type": "mcq"
      },
      {
        "id": "peds-004",
        "question": "A 4-year-old is admitted with suspected intussusception. The nurse expects to find:",
        "options": [
          "A. Ribbon-like stools",
          "B. Currant jelly stools",
          "C. Clay-colored stools",
          "D. Frothy stools"
        ],
        "answer": "B",
        "rationale": "Currant jelly stools (blood and mucus mixed) are the classic finding in intussusception, though a late sign. Other signs include sudden severe abdominal pain (drawing up legs), vomiting, and a sausage-shaped mass in the RUQ.",
        "category": "pediatrics",
        "subcategory": "Gastrointestinal",
        "difficulty": "medium",
        "topic": "Intussusception",
        "type": "mcq"
      },
      {
        "id": "peds-005",
        "question": "A child with cystic fibrosis should receive which dietary modifications?",
        "options": [
          "A. Low-fat, low-protein diet",
          "B. High-calorie, high-protein diet with pancreatic enzymes",
          "C. Fluid restriction",
          "D. Low-sodium diet"
        ],
        "answer": "B",
        "rationale": "Children with CF need high-calorie, high-protein diets (120-150% of normal) due to malabsorption and increased energy needs. Pancreatic enzymes (taken with meals/snacks), fat-soluble vitamin supplements, and added salt are essential.",
        "category": "pediatrics",
        "subcategory": "Respiratory",
        "difficulty": "medium",
        "topic": "Cystic Fibrosis",
        "type": "mcq"
      },
      {
        "id": "peds-006",
        "question": "When calculating pediatric medication doses, the nurse should verify the dose based on:",
        "options": [
          "A. Age only",
          "B. Height only",
          "C. Weight in kilograms",
          "D. Parental request"
        ],
        "answer": "C",
        "rationale": "Pediatric medication doses are calculated based on weight in kilograms (mg/kg) to ensure safe, therapeutic dosing. Age-based dosing is less accurate due to weight variations. Body surface area (BSA) is used for some medications like chemotherapy.",
        "category": "pediatrics",
        "subcategory": "Medication",
        "difficulty": "easy",
        "topic": "Pediatric Dosing",
        "type": "mcq"
      },
      {
        "id": "peds-007",
        "question": "A child with acute glomerulonephritis typically presents with: Select all that apply.",
        "options": [
          "A. Tea/cola-colored urine",
          "B. Periorbital edema",
          "C. Hypertension",
          "D. Increased urine output",
          "E. Recent streptococcal infection history"
        ],
        "answer": [
          "A",
          "B",
          "C",
          "E"
        ],
        "rationale": "Acute glomerulonephritis presents with dark tea/cola urine (hematuria), edema (especially periorbital in morning), hypertension, and decreased (not increased) urine output. It often follows strep infection by 1-3 weeks.",
        "category": "pediatrics",
        "subcategory": "Renal",
        "difficulty": "medium",
        "topic": "Glomerulonephritis",
        "type": "sata"
      },
      {
        "id": "peds-008",
        "question": "A toddler is admitted with severe dehydration. Which assessment finding indicates severe dehydration?",
        "options": [
          "A. Moist mucous membranes",
          "B. Sunken fontanel and absent tears",
          "C. Capillary refill of 2 seconds",
          "D. Active and playful behavior"
        ],
        "answer": "B",
        "rationale": "Severe dehydration signs include sunken fontanel (in infants), absent tears when crying, very dry mucous membranes, prolonged capillary refill (>3 seconds), lethargy, and decreased urine output. Moist membranes and 2-second refill are normal.",
        "category": "pediatrics",
        "subcategory": "Fluid & Electrolytes",
        "difficulty": "medium",
        "topic": "Dehydration Assessment",
        "type": "mcq"
      },
      {
        "id": "peds-009",
        "question": "A child with type 1 diabetes has a blood glucose of 52 mg/dL and is lethargic. The nurse should:",
        "options": [
          "A. Give oral glucose tablets",
          "B. Administer glucagon or IV dextrose",
          "C. Give regular insulin",
          "D. Encourage the child to eat lunch"
        ],
        "answer": "B",
        "rationale": "A lethargic child with hypoglycemia cannot safely take oral glucose due to aspiration risk. Glucagon IM or IV dextrose is required. Oral glucose is only for alert, conscious patients who can swallow safely.",
        "category": "pediatrics",
        "subcategory": "Endocrine",
        "difficulty": "medium",
        "topic": "Pediatric Hypoglycemia",
        "type": "mcq"
      },
      {
        "id": "peds-010",
        "question": "The nurse is assessing a 6-month-old for developmental milestones. Which finding requires further evaluation?",
        "options": [
          "A. Rolls from back to front",
          "B. Sits with support",
          "C. Does not follow objects with eyes",
          "D. Babbles"
        ],
        "answer": "C",
        "rationale": "By 6 months, infants should follow objects with their eyes (this milestone occurs by 2-3 months). Not tracking objects suggests visual or neurological concerns. Rolling, sitting with support, and babbling are appropriate for 6 months.",
        "category": "pediatrics",
        "subcategory": "Growth & Development",
        "difficulty": "medium",
        "topic": "Developmental Milestones",
        "type": "mcq"
      },
      {
        "id": "peds-011",
        "question": "A child with asthma is using a metered-dose inhaler. The nurse should teach the child to:",
        "options": [
          "A. Exhale completely, then inhale quickly while pressing the inhaler",
          "B. Inhale slowly and deeply while pressing the inhaler, then hold breath for 10 seconds",
          "C. Press the inhaler while exhaling",
          "D. Take multiple rapid breaths immediately after using the inhaler"
        ],
        "answer": "B",
        "rationale": "Correct MDI technique: shake inhaler, exhale completely, place mouthpiece in mouth, inhale slowly and deeply while pressing canister, hold breath 10 seconds to allow medication deposition in lungs, then exhale slowly. A spacer improves delivery.",
        "category": "pediatrics",
        "subcategory": "Respiratory",
        "difficulty": "easy",
        "topic": "Asthma Management",
        "type": "mcq"
      },
      {
        "id": "peds-012",
        "question": "A 3-year-old with suspected bacterial meningitis should be placed in which isolation?",
        "options": [
          "A. Contact precautions",
          "B. Droplet precautions",
          "C. Airborne precautions",
          "D. Standard precautions only"
        ],
        "answer": "B",
        "rationale": "Bacterial meningitis (especially N. meningitidis and H. influenzae) requires droplet precautions until 24 hours after effective antibiotic therapy. A private room is preferred, and masks are worn within 3 feet of the patient.",
        "category": "pediatrics",
        "subcategory": "Neurological",
        "difficulty": "medium",
        "topic": "Meningitis",
        "type": "mcq"
      },
      {
        "id": "peds-013",
        "question": "Signs of respiratory distress in an infant include: Select all that apply.",
        "options": [
          "A. Nasal flaring",
          "B. Grunting",
          "C. Retractions",
          "D. Respiratory rate of 30/min",
          "E. Head bobbing"
        ],
        "answer": [
          "A",
          "B",
          "C",
          "E"
        ],
        "rationale": "Signs of respiratory distress include nasal flaring, grunting (creates PEEP), intercostal/subcostal retractions, head bobbing, and tachypnea. Normal infant respiratory rate is 30-60/min, so 30 is actually normal, not a sign of distress.",
        "category": "pediatrics",
        "subcategory": "Respiratory",
        "difficulty": "easy",
        "topic": "Respiratory Distress",
        "type": "sata"
      },
      {
        "id": "peds-014",
        "question": "A child with Kawasaki disease should be monitored for which serious complication?",
        "options": [
          "A. Renal failure",
          "B. Coronary artery aneurysm",
          "C. Liver failure",
          "D. Hearing loss"
        ],
        "answer": "B",
        "rationale": "Kawasaki disease can cause coronary artery aneurysms, the most serious complication. Treatment with IV immunoglobulin (IVIG) and aspirin within 10 days of onset significantly reduces this risk. Echocardiograms monitor for cardiac involvement.",
        "category": "pediatrics",
        "subcategory": "Cardiac",
        "difficulty": "medium",
        "topic": "Kawasaki Disease",
        "type": "mcq"
      },
      {
        "id": "peds-015",
        "question": "A child with sickle cell disease presents with acute chest syndrome. The nurse's priority is:",
        "options": [
          "A. Pain management",
          "B. Oxygen therapy and respiratory support",
          "C. Blood transfusion",
          "D. Hydration"
        ],
        "answer": "B",
        "rationale": "Acute chest syndrome is a life-threatening emergency in sickle cell disease. Priority is oxygenation and respiratory support to prevent further sickling. Other treatments include hydration, pain management, antibiotics, and possibly transfusion.",
        "category": "pediatrics",
        "subcategory": "Hematology",
        "difficulty": "hard",
        "topic": "Sickle Cell Crisis",
        "type": "mcq"
      },
      {
        "id": "peds-016",
        "question": "A 12-month-old should be able to:",
        "options": [
          "A. Walk up stairs",
          "B. Speak in 2-3 word sentences",
          "C. Say 1-2 words and take first steps",
          "D. Ride a tricycle"
        ],
        "answer": "C",
        "rationale": "At 12 months, typical milestones include saying 1-2 words (mama, dada), taking first steps, pincer grasp, and waving bye-bye. Walking up stairs is 18-24 months, sentences are 2-3 years, and tricycle riding is around 3 years.",
        "category": "pediatrics",
        "subcategory": "Growth & Development",
        "difficulty": "easy",
        "topic": "Developmental Milestones",
        "type": "mcq"
      },
      {
        "id": "peds-017",
        "question": "A child is scheduled for a tonsillectomy. Which assessment finding should be reported immediately postoperatively?",
        "options": [
          "A. Sore throat",
          "B. Frequent swallowing",
          "C. Low-grade fever",
          "D. Refusal to eat"
        ],
        "answer": "B",
        "rationale": "Frequent swallowing is an early sign of bleeding post-tonsillectomy. Other bleeding signs include vomiting bright red blood, increased pulse, and restlessness. Sore throat, low-grade fever, and reluctance to eat are expected findings.",
        "category": "pediatrics",
        "subcategory": "Perioperative",
        "difficulty": "medium",
        "topic": "Tonsillectomy",
        "type": "mcq"
      },
      {
        "id": "peds-018",
        "question": "A child with nephrotic syndrome will have which laboratory findings?",
        "options": [
          "A. Proteinuria and hypoalbuminemia",
          "B. Hematuria and elevated BUN",
          "C. Hyperalbuminemia",
          "D. Low cholesterol levels"
        ],
        "answer": "A",
        "rationale": "Nephrotic syndrome is characterized by massive proteinuria (protein loss in urine), hypoalbuminemia (low blood albumin), edema, and hyperlipidemia (elevated cholesterol). Hematuria and elevated BUN are more characteristic of nephritic syndrome.",
        "category": "pediatrics",
        "subcategory": "Renal",
        "difficulty": "medium",
        "topic": "Nephrotic Syndrome",
        "type": "mcq"
      },
      {
        "id": "peds-019",
        "question": "A child with ADHD is prescribed methylphenidate (Ritalin). The nurse should monitor for:",
        "options": [
          "A. Excessive weight gain",
          "B. Decreased appetite and growth suppression",
          "C. Sedation",
          "D. Hypotension"
        ],
        "answer": "B",
        "rationale": "Stimulant medications like methylphenidate can cause decreased appetite, weight loss, and growth suppression. Height and weight should be monitored regularly. Other side effects include insomnia, headache, and increased heart rate/BP.",
        "category": "pediatrics",
        "subcategory": "Mental Health",
        "difficulty": "medium",
        "topic": "ADHD Medications",
        "type": "mcq"
      },
      {
        "id": "peds-020",
        "question": "When suctioning an infant's airway, the nurse should suction the nose first, then the mouth.",
        "options": [
          "A. True",
          "B. False"
        ],
        "answer": "B",
        "rationale": "Suction the mouth first, then the nose in infants. Infants are obligate nose breathers, so suctioning the nose first may cause gasping and aspiration of oral secretions. Remember: 'M before N' (mouth before nose).",
        "category": "pediatrics",
        "subcategory": "Respiratory",
        "difficulty": "easy",
        "topic": "Airway Management",
        "type": "mcq"
      },
      {
        "id": "peds-021",
        "question": "A child with congenital heart disease showing cyanosis with crying likely has:",
        "options": [
          "A. Ventricular septal defect",
          "B. Tetralogy of Fallot",
          "C. Patent ductus arteriosus",
          "D. Atrial septal defect"
        ],
        "answer": "B",
        "rationale": "Tetralogy of Fallot is a cyanotic heart defect. Cyanosis worsens with crying, feeding, or activity (tet spells). The child may squat to increase systemic vascular resistance. VSD, PDA, and ASD are typically acyanotic defects.",
        "category": "pediatrics",
        "subcategory": "Cardiac",
        "difficulty": "medium",
        "topic": "Congenital Heart Defects",
        "type": "mcq"
      },
      {
        "id": "peds-022",
        "question": "A child with hemophilia should avoid which activities?",
        "options": [
          "A. Swimming",
          "B. Contact sports like football",
          "C. Walking",
          "D. Reading"
        ],
        "answer": "B",
        "rationale": "Children with hemophilia should avoid contact sports and activities with high injury risk (football, hockey, wrestling) due to bleeding risk. Non-contact activities like swimming, cycling with helmet, and walking are encouraged for physical fitness.",
        "category": "pediatrics",
        "subcategory": "Hematology",
        "difficulty": "easy",
        "topic": "Hemophilia",
        "type": "mcq"
      },
      {
        "id": "peds-023",
        "question": "An infant with cleft lip and palate is being bottle-fed. The nurse should:",
        "options": [
          "A. Use a regular nipple",
          "B. Use a specialized nipple and keep infant upright",
          "C. Feed as quickly as possible",
          "D. Position infant flat during feeding"
        ],
        "answer": "B",
        "rationale": "Infants with cleft lip/palate need special feeding techniques: upright positioning (30-45 degrees) to prevent aspiration, specialized nipples (cross-cut, compressible), frequent burping, and allowing adequate time. They swallow more air and tire easily.",
        "category": "pediatrics",
        "subcategory": "Gastrointestinal",
        "difficulty": "medium",
        "topic": "Cleft Lip/Palate",
        "type": "mcq"
      },
      {
        "id": "peds-024",
        "question": "A child with leukemia has a platelet count of 15,000/mm\u00b3. The nurse should implement:",
        "options": [
          "A. Contact isolation",
          "B. Bleeding precautions",
          "C. Increased physical activity",
          "D. Intramuscular injections for medications"
        ],
        "answer": "B",
        "rationale": "Thrombocytopenia (<20,000) requires bleeding precautions: soft toothbrush, no flossing, avoid IM injections/rectal temps/aspirin/NSAIDs, gentle handling, and monitoring for signs of bleeding. Activity should be restricted to prevent injury.",
        "category": "pediatrics",
        "subcategory": "Hematology",
        "difficulty": "medium",
        "topic": "Oncology Nursing",
        "type": "mcq"
      },
      {
        "id": "peds-025",
        "question": "The nurse is preparing a 5-year-old for a procedure. The best approach is to:",
        "options": [
          "A. Explain the procedure weeks in advance",
          "B. Use simple terms and explain shortly before",
          "C. Avoid any explanation to prevent anxiety",
          "D. Use detailed medical terminology"
        ],
        "answer": "B",
        "rationale": "Preschoolers (3-5 years) have limited time concept. Explain procedures in simple terms shortly before (same day), use play therapy, allow choices when possible, and be honest about discomfort. Too much advance notice increases anxiety.",
        "category": "pediatrics",
        "subcategory": "Growth & Development",
        "difficulty": "easy",
        "topic": "Pediatric Preparation",
        "type": "mcq"
      },
      {
        "id": "peds-026",
        "question": "A child with cerebral palsy has spastic quadriplegia. The nursing priority is:",
        "options": [
          "A. Cure the condition",
          "B. Prevent complications and maximize function",
          "C. Isolate the child from peers",
          "D. Limit physical therapy"
        ],
        "answer": "B",
        "rationale": "CP is a non-progressive, lifelong condition with no cure. Goals focus on preventing complications (contractures, skin breakdown), maximizing mobility and function, promoting independence, and supporting family. Physical therapy is essential, not limited.",
        "category": "pediatrics",
        "subcategory": "Neurological",
        "difficulty": "medium",
        "topic": "Cerebral Palsy",
        "type": "mcq"
      },
      {
        "id": "peds-027",
        "question": "A child is diagnosed with acute otitis media. The nurse should teach parents that:",
        "options": [
          "A. Antibiotics always cure the infection within 24 hours",
          "B. Ear pain may persist for several days even with treatment",
          "C. Swimming is encouraged during treatment",
          "D. Hearing loss is permanent"
        ],
        "answer": "B",
        "rationale": "Ear pain may continue for 2-3 days after starting antibiotics. Complete the entire antibiotic course. Avoid water in ears during infection. Temporary hearing changes may occur but usually resolve. Follow-up is important to ensure resolution.",
        "category": "pediatrics",
        "subcategory": "ENT",
        "difficulty": "easy",
        "topic": "Otitis Media",
        "type": "mcq"
      },
      {
        "id": "peds-028",
        "question": "Which finding in a newborn suggests congenital hypothyroidism?",
        "options": [
          "A. Irritability and jitteriness",
          "B. Prolonged jaundice and lethargy",
          "C. Tachycardia",
          "D. Increased activity"
        ],
        "answer": "B",
        "rationale": "Congenital hypothyroidism signs include prolonged jaundice, lethargy, poor feeding, constipation, hypotonia, large fontanels, and macroglossia. Newborn screening detects this condition. Irritability and tachycardia are signs of hyperthyroidism.",
        "category": "pediatrics",
        "subcategory": "Endocrine",
        "difficulty": "medium",
        "topic": "Congenital Hypothyroidism",
        "type": "mcq"
      },
      {
        "id": "peds-029",
        "question": "A child with diabetes insipidus will have which symptoms? Select all that apply.",
        "options": [
          "A. Polyuria",
          "B. Polydipsia",
          "C. Concentrated dark urine",
          "D. Low specific gravity urine",
          "E. Dehydration"
        ],
        "answer": [
          "A",
          "B",
          "D",
          "E"
        ],
        "rationale": "Diabetes insipidus causes inability to concentrate urine, resulting in polyuria (excessive urination), polydipsia (excessive thirst), dilute urine with low specific gravity (<1.005), and dehydration. Dark concentrated urine indicates ADH is working.",
        "category": "pediatrics",
        "subcategory": "Endocrine",
        "difficulty": "medium",
        "topic": "Diabetes Insipidus",
        "type": "sata"
      },
      {
        "id": "peds-030",
        "question": "During a palsy assessment of a newborn, the nurse notes asymmetric arm movement. This suggests:",
        "options": [
          "A. Normal newborn movement",
          "B. Erb's palsy (brachial plexus injury)",
          "C. Down syndrome",
          "D. Cerebral palsy"
        ],
        "answer": "B",
        "rationale": "Erb's palsy (brachial plexus injury) causes asymmetric arm movement, with the affected arm hanging limply in internal rotation ('waiter's tip' position). It typically results from shoulder dystocia during delivery.",
        "category": "pediatrics",
        "subcategory": "Neurological",
        "difficulty": "medium",
        "topic": "Birth Injuries",
        "type": "mcq"
      },
      {
        "id": "peds-031",
        "question": "A 15-month-old should be able to:",
        "options": [
          "A. Run well",
          "B. Speak in sentences",
          "C. Walk independently",
          "D. Draw a circle"
        ],
        "answer": "C",
        "rationale": "By 15 months, most children walk independently. Running develops around 18-24 months, sentences around 2-3 years, and drawing circles around 3 years. Other 15-month milestones include saying several words and drinking from a cup.",
        "category": "pediatrics",
        "subcategory": "Growth & Development",
        "difficulty": "easy",
        "topic": "Developmental Milestones",
        "type": "mcq"
      },
      {
        "id": "peds-032",
        "question": "A child is diagnosed with pinworms. The nurse should teach the family:",
        "options": [
          "A. Only the affected child needs treatment",
          "B. All household members should be treated",
          "C. Bedding does not need to be washed",
          "D. The child should skip school until symptoms resolve"
        ],
        "answer": "B",
        "rationale": "Pinworm infection is highly contagious. All household members should be treated simultaneously to prevent reinfection. Wash all bedding and clothing in hot water, emphasize handwashing, and keep fingernails short. The child can return to school after treatment begins.",
        "category": "pediatrics",
        "subcategory": "Gastrointestinal",
        "difficulty": "easy",
        "topic": "Parasitic Infections",
        "type": "mcq"
      },
      {
        "id": "peds-033",
        "question": "A child with rheumatic fever should be monitored for which complication?",
        "options": [
          "A. Kidney failure",
          "B. Cardiac valve damage",
          "C. Liver damage",
          "D. Diabetes"
        ],
        "answer": "B",
        "rationale": "Rheumatic fever (following group A strep infection) can cause permanent cardiac valve damage (rheumatic heart disease), particularly affecting the mitral valve. Long-term prophylactic antibiotics prevent recurrence and further cardiac damage.",
        "category": "pediatrics",
        "subcategory": "Cardiac",
        "difficulty": "medium",
        "topic": "Rheumatic Fever",
        "type": "mcq"
      },
      {
        "id": "peds-034",
        "question": "A parent asks about introducing solid foods to an infant. The nurse should recommend starting at:",
        "options": [
          "A. 2 months",
          "B. 4-6 months",
          "C. 9 months",
          "D. 12 months"
        ],
        "answer": "B",
        "rationale": "Solid foods (iron-fortified cereal, pureed foods) should be introduced around 4-6 months when the infant shows developmental readiness: good head control, sits with support, shows interest in food, and extrusion reflex has diminished.",
        "category": "pediatrics",
        "subcategory": "Nutrition",
        "difficulty": "easy",
        "topic": "Infant Feeding",
        "type": "mcq"
      },
      {
        "id": "peds-035",
        "question": "A child with acute lymphoblastic leukemia (ALL) is receiving chemotherapy. The nurse monitors for tumor lysis syndrome, which includes:",
        "options": [
          "A. Hyperkalemia, hyperuricemia, hyperphosphatemia",
          "B. Hypokalemia and hypoglycemia",
          "C. Hypercalcemia",
          "D. Low uric acid levels"
        ],
        "answer": "A",
        "rationale": "Tumor lysis syndrome occurs when cancer cells are rapidly destroyed, releasing intracellular contents. It causes hyperkalemia, hyperuricemia, hyperphosphatemia, and hypocalcemia (from phosphate binding). Prevention includes hydration and allopurinol.",
        "category": "pediatrics",
        "subcategory": "Hematology",
        "difficulty": "hard",
        "topic": "Oncology Emergencies",
        "type": "mcq"
      },
      {
        "id": "peds-036",
        "question": "A child with Hirschsprung's disease typically presents with:",
        "options": [
          "A. Diarrhea and weight gain",
          "B. Failure to pass meconium within 48 hours",
          "C. Projectile vomiting",
          "D. Constant hunger"
        ],
        "answer": "B",
        "rationale": "Hirschsprung's disease (aganglionic megacolon) presents with failure to pass meconium in the first 24-48 hours of life, abdominal distension, constipation, and ribbon-like stools. It's caused by absence of ganglion cells in the colon.",
        "category": "pediatrics",
        "subcategory": "Gastrointestinal",
        "difficulty": "medium",
        "topic": "Hirschsprung's Disease",
        "type": "mcq"
      },
      {
        "id": "peds-037",
        "question": "The nurse is caring for a child in a spica cast. Which action is appropriate?",
        "options": [
          "A. Petal the edges of the cast with tape",
          "B. Insert objects to scratch itchy skin",
          "C. Apply powder inside the cast",
          "D. Use a hair dryer on hot setting to dry the cast"
        ],
        "answer": "A",
        "rationale": "Petaling (covering rough edges with tape) prevents skin irritation. Never insert objects inside (causes skin breakdown/infection), avoid powder/lotion (causes skin maceration), and if drying is needed, use cool setting only. Assess circulation frequently (5 P's).",
        "category": "pediatrics",
        "subcategory": "Musculoskeletal",
        "difficulty": "medium",
        "topic": "Cast Care",
        "type": "mcq"
      },
      {
        "id": "peds-038",
        "question": "Which immunization is contraindicated for a child with severe egg allergy?",
        "options": [
          "A. MMR",
          "B. Varicella",
          "C. DTaP",
          "D. None - egg allergies are no longer a contraindication"
        ],
        "answer": "D",
        "rationale": "Current guidelines indicate that egg allergy is no longer a contraindication to MMR or influenza vaccines. MMR is grown on chick embryo fibroblast culture (not egg) and can be safely given. Flu vaccine can be given with observation.",
        "category": "pediatrics",
        "subcategory": "Health Promotion",
        "difficulty": "medium",
        "topic": "Immunization Contraindications",
        "type": "mcq"
      },
      {
        "id": "peds-039",
        "question": "A child with Down syndrome should be monitored for which associated conditions? Select all that apply.",
        "options": [
          "A. Congenital heart defects",
          "B. Hypothyroidism",
          "C. Atlantoaxial instability",
          "D. Increased intelligence",
          "E. Hearing deficits"
        ],
        "answer": [
          "A",
          "B",
          "C",
          "E"
        ],
        "rationale": "Children with Down syndrome have increased risk for congenital heart defects (40-50%), hypothyroidism, atlantoaxial instability (requires screening before sports), hearing/vision problems, and intellectual disability (not increased intelligence).",
        "category": "pediatrics",
        "subcategory": "Genetic Disorders",
        "difficulty": "medium",
        "topic": "Down Syndrome",
        "type": "sata"
      },
      {
        "id": "peds-040",
        "question": "A child is receiving IV fluids. The nurse calculates maintenance fluids using:",
        "options": [
          "A. 100 mL/kg for all children",
          "B. The Holliday-Segar formula based on weight",
          "C. Adult fluid requirements",
          "D. 50 mL/kg regardless of weight"
        ],
        "answer": "B",
        "rationale": "Maintenance IV fluids are calculated using Holliday-Segar formula: 100 mL/kg for first 10 kg, 50 mL/kg for next 10 kg, and 20 mL/kg for each kg above 20. This accounts for varying metabolic needs based on body weight.",
        "category": "pediatrics",
        "subcategory": "Fluid & Electrolytes",
        "difficulty": "medium",
        "topic": "IV Fluid Calculation",
        "type": "mcq"
      },
      {
        "id": "peds-041",
        "question": "A toddler is admitted with suspected lead poisoning. The nurse should assess for:",
        "options": [
          "A. Hyperactivity and weight loss",
          "B. Developmental delays and abdominal pain",
          "C. Increased appetite",
          "D. Improved school performance"
        ],
        "answer": "B",
        "rationale": "Lead poisoning symptoms include developmental delays, learning disabilities, irritability, abdominal pain (lead colic), constipation, anemia, and a lead line on gums. Pica (eating non-food items like paint chips) is a risk factor and symptom.",
        "category": "pediatrics",
        "subcategory": "Environmental Health",
        "difficulty": "medium",
        "topic": "Lead Poisoning",
        "type": "mcq"
      },
      {
        "id": "peds-042",
        "question": "A child with acute appendicitis has sudden relief of pain. The nurse should:",
        "options": [
          "A. Document improvement and discharge",
          "B. Recognize this as possible rupture and notify provider",
          "C. Administer more pain medication",
          "D. Encourage oral intake"
        ],
        "answer": "B",
        "rationale": "Sudden relief of pain in appendicitis can indicate rupture. The initial pressure is relieved, but peritonitis will soon develop with increased pain, fever, and rigidity. This requires immediate surgical intervention.",
        "category": "pediatrics",
        "subcategory": "Gastrointestinal",
        "difficulty": "hard",
        "topic": "Appendicitis",
        "type": "mcq"
      },
      {
        "id": "peds-043",
        "question": "A child with spina bifida occulta typically has:",
        "options": [
          "A. Paralysis of lower extremities",
          "B. No visible defect or symptoms",
          "C. Open spinal lesion",
          "D. Hydrocephalus"
        ],
        "answer": "B",
        "rationale": "Spina bifida occulta is the mildest form - a defect in the vertebral arch without protrusion. Most cases are asymptomatic and discovered incidentally. There may be a dimple, tuft of hair, or birthmark over the defect. Myelomeningocele is the severe open form.",
        "category": "pediatrics",
        "subcategory": "Neurological",
        "difficulty": "easy",
        "topic": "Spina Bifida",
        "type": "mcq"
      },
      {
        "id": "peds-044",
        "question": "The nurse is preparing an 8-year-old for hospitalization. Age-appropriate preparation includes:",
        "options": [
          "A. Avoiding any explanation",
          "B. Using anatomically correct dolls only",
          "C. Providing detailed explanations and allowing questions",
          "D. Telling the child nothing will hurt"
        ],
        "answer": "C",
        "rationale": "School-age children (6-12) benefit from detailed, honest explanations, visual aids, and opportunities to ask questions and participate in decisions. They understand cause and effect and appreciate honesty about potential discomfort.",
        "category": "pediatrics",
        "subcategory": "Growth & Development",
        "difficulty": "easy",
        "topic": "Hospitalization",
        "type": "mcq"
      },
      {
        "id": "peds-045",
        "question": "A child with juvenile idiopathic arthritis (JIA) should be encouraged to:",
        "options": [
          "A. Avoid all physical activity",
          "B. Participate in regular exercise and physical therapy",
          "C. Take NSAIDs only during flares",
          "D. Rest joints continuously"
        ],
        "answer": "B",
        "rationale": "Children with JIA benefit from regular exercise and physical therapy to maintain joint mobility, muscle strength, and function. Swimming and cycling are excellent. Complete rest can worsen stiffness. NSAIDs are taken regularly, not just during flares.",
        "category": "pediatrics",
        "subcategory": "Musculoskeletal",
        "difficulty": "medium",
        "topic": "Juvenile Arthritis",
        "type": "mcq"
      },
      {
        "id": "peds-046",
        "question": "A child is diagnosed with pertussis (whooping cough). The characteristic symptom is:",
        "options": [
          "A. Barking cough",
          "B. Paroxysmal cough followed by inspiratory whoop",
          "C. Productive cough with green sputum",
          "D. Cough only at night"
        ],
        "answer": "B",
        "rationale": "Pertussis is characterized by paroxysmal (sudden, violent) coughing fits followed by a high-pitched inspiratory 'whoop.' Infants may not whoop but can have apnea. It's highly contagious and prevented by DTaP/Tdap vaccination.",
        "category": "pediatrics",
        "subcategory": "Respiratory",
        "difficulty": "medium",
        "topic": "Pertussis",
        "type": "mcq"
      },
      {
        "id": "peds-047",
        "question": "An adolescent with type 1 diabetes asks about drinking alcohol. The nurse should advise:",
        "options": [
          "A. Alcohol is safe in any amount with diabetes",
          "B. Alcohol can cause hypoglycemia and should be avoided or used cautiously",
          "C. Alcohol will raise blood sugar significantly",
          "D. Alcohol eliminates the need for insulin"
        ],
        "answer": "B",
        "rationale": "Alcohol inhibits gluconeogenesis and can cause severe hypoglycemia, especially if combined with insulin. If an adult with diabetes chooses to drink, they should eat food, never drink on an empty stomach, and monitor blood glucose closely.",
        "category": "pediatrics",
        "subcategory": "Endocrine",
        "difficulty": "medium",
        "topic": "Adolescent Health Education",
        "type": "mcq"
      },
      {
        "id": "peds-048",
        "question": "A child with gastroesophageal reflux (GER) should be positioned after feeding:",
        "options": [
          "A. Supine flat",
          "B. Prone position",
          "C. Elevated on right side or upright",
          "D. Trendelenburg"
        ],
        "answer": "C",
        "rationale": "Infants with GER should be kept upright or elevated at 30-45 degrees after feeding to use gravity to prevent reflux. Right side positioning helps gastric emptying. Avoid laying flat or Trendelenburg as these worsen reflux.",
        "category": "pediatrics",
        "subcategory": "Gastrointestinal",
        "difficulty": "easy",
        "topic": "GER Management",
        "type": "mcq"
      },
      {
        "id": "peds-049",
        "question": "A 6-year-old loses a primary (baby) tooth. The parent should be told that:",
        "options": [
          "A. Permanent teeth will never grow",
          "B. This is a normal developmental milestone",
          "C. The child needs immediate dental intervention",
          "D. Primary teeth should not fall out until age 12"
        ],
        "answer": "B",
        "rationale": "Primary teeth typically begin to shed around age 6-7, with permanent teeth emerging. This is a normal developmental milestone. Good dental hygiene should continue to protect emerging permanent teeth.",
        "category": "pediatrics",
        "subcategory": "Growth & Development",
        "difficulty": "easy",
        "topic": "Dental Development",
        "type": "mcq"
      },
      {
        "id": "peds-050",
        "question": "The nurse is assessing a child for possible abuse. Which finding raises concern? Select all that apply.",
        "options": [
          "A. Bruises on shins in a 4-year-old",
          "B. Multiple bruises in various stages of healing",
          "C. Explanation inconsistent with injury pattern",
          "D. Fearful behavior around parent",
          "E. Bruises over bony prominences only"
        ],
        "answer": [
          "B",
          "C",
          "D"
        ],
        "rationale": "Red flags for abuse include multiple injuries in various healing stages, injuries inconsistent with explanation, fearful behavior, and injuries in unusual locations (torso, face, buttocks). Bruises on shins and bony prominences are common in active children.",
        "category": "pediatrics",
        "subcategory": "Safety",
        "difficulty": "medium",
        "topic": "Child Abuse Recognition",
        "type": "sata"
      }
    ],
    "icon": "\ud83e\uddd2",
    "weight": "6-12%",
    "questionCount": 50
  }
};
