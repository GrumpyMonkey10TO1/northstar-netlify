// =============================================================================
// IELTS ACADEMIC READING TESTS - INTERMEDIATE LEVEL (R8-R13)
// Band Target: 7.0-7.5
// Each test: 3 passages (~800-900 words each), 40 questions total
// =============================================================================

var READING_INTERMEDIATE = [
  // ============================================================
  // R8 - INTERMEDIATE (Band 7.0)
  // ============================================================
  {
    id: "R8",
    level: "Intermediate",
    bandTarget: "7.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Artificial Intelligence in Healthcare",
        wordCount: 880,
        text: `Artificial intelligence is reshaping healthcare in ways that would have seemed like science fiction just decades ago. From diagnostic algorithms that analyze medical images to systems that predict patient deterioration, AI applications are proliferating across clinical settings worldwide. Proponents argue these technologies will improve outcomes while reducing costs; critics warn of risks ranging from algorithmic bias to the erosion of the doctor-patient relationship. Understanding both the potential and limitations of AI in healthcare has become essential for clinicians, patients, and policymakers alike.

The application of AI to medical imaging has progressed furthest. Deep learning algorithms can now detect certain abnormalities in radiological images—tumors, fractures, eye diseases—with accuracy comparable to or exceeding that of human specialists. These systems are trained on thousands or millions of labeled images, learning to recognize patterns that distinguish pathological from normal findings. Several AI diagnostic tools have received regulatory approval for clinical use, and their deployment is accelerating.

Beyond image analysis, AI shows promise in predicting clinical events. Machine learning models can integrate data from electronic health records—vital signs, laboratory values, medications, clinical notes—to identify patients at elevated risk of deterioration, readmission, or other adverse outcomes. Early warning systems based on these models can alert clinicians to intervene before situations become emergencies. Predictive analytics may also support resource allocation and operational efficiency in healthcare systems.

However, the performance of AI systems depends heavily on training data and implementation context. An algorithm trained predominantly on data from one population may perform poorly when applied to different demographic groups, raising concerns about equity and fairness. The "black box" nature of many machine learning models complicates clinical trust—when an algorithm cannot explain its reasoning, clinicians may hesitate to follow its recommendations, particularly when they conflict with clinical intuition.

Liability and accountability present additional challenges. When AI contributes to a diagnostic error or treatment decision that harms a patient, determining responsibility becomes complicated. Traditional frameworks for medical malpractice assume human decision-makers whose reasoning can be evaluated; AI systems disrupt these assumptions. Regulatory approaches remain in development, and legal precedents are only beginning to emerge.

The integration of AI also raises questions about the nature of medical practice itself. Medicine has traditionally emphasized the relationship between individual clinicians and patients, with diagnosis and treatment emerging from skilled human judgment informed by experience and contextual understanding. AI tools may enhance this process by providing additional information and reducing cognitive burden, but they may also change it fundamentally if clinical decision-making becomes increasingly algorithmic.

Despite these concerns, the trajectory toward greater AI involvement in healthcare appears likely to continue. The volume of medical data continues to grow exponentially, while human cognitive capacity remains constant. AI offers tools to manage this complexity while potentially improving consistency and reducing errors. The most constructive path forward likely involves thoughtful integration that preserves essential human elements of care while leveraging AI's analytical capabilities—though achieving this balance will require ongoing attention to ethical, technical, and regulatory dimensions.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. AI in medical imaging", "ii. Introduction to AI in healthcare", "iii. Liability concerns", "iv. Predictive analytics"], answer: "ii" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. AI diagnostic imaging advances", "ii. Electronic health records", "iii. Black box problems", "iv. Regulatory challenges"], answer: "i" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Training data limitations", "ii. Predictive clinical applications", "iii. Doctor-patient relationships", "iv. Cost considerations"], answer: "ii" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Demographic performance gaps", "ii. Successful implementations", "iii. Patient preferences", "iv. Market growth"], answer: "i" },
          { id: 5, type: "tfng", text: "AI diagnostic tools for medical imaging have received regulatory approval.", answer: "True" },
          { id: 6, type: "tfng", text: "AI systems perform equally well across all demographic groups.", answer: "False" },
          { id: 7, type: "tfng", text: "Legal frameworks for AI medical liability are fully established.", answer: "False" },
          { id: 8, type: "tfng", text: "Human cognitive capacity is growing alongside medical data volume.", answer: "False" },
          { id: 9, type: "tfng", text: "Proponents and critics agree on all aspects of AI in healthcare.", answer: "False" },
          { id: 10, type: "short", text: "What type of learning analyzes medical images? (TWO WORDS)", answer: "deep learning" },
          { id: 11, type: "short", text: "What term describes models that cannot explain their reasoning? (TWO WORDS)", answer: "black box" },
          { id: 12, type: "short", text: "What type of analytics supports resource allocation? (ONE WORD)", answer: "predictive" },
          { id: 13, type: "short", text: "What do early warning systems alert clinicians to do? (ONE WORD)", answer: "intervene" }
        ]
      },
      {
        id: "P2",
        title: "Climate Change and Coastal Cities",
        wordCount: 840,
        text: `Coastal cities face mounting threats from climate change that challenge their physical infrastructure, economic stability, and social fabric. Sea level rise, intensifying storms, and changing precipitation patterns create risks that affect billions of people living in the world's coastal urban areas. Adaptation has become not merely advisable but essential for these communities, yet the scale of necessary action strains financial resources and governance capacity.

Sea level rise represents the most inexorable of these threats. Global mean sea level has risen approximately 20 centimeters since the late nineteenth century, with the rate of increase accelerating. Under higher-emission scenarios, seas could rise by a meter or more by 2100, and potentially much more in subsequent centuries as ice sheets continue responding to warming. For low-lying coastal cities, these projections translate into increasing flood frequency, saltwater intrusion into freshwater supplies, and eventual inundation of currently inhabited areas.

Storm surge adds to these risks. Tropical cyclones and other severe storms push water onshore, and rising seas mean that any given storm produces higher surge levels than it would have in the past. The combination of sea level rise and potentially more intense storms creates compounding risks that exceed what either factor alone would produce. Coastal defenses designed for historical conditions may prove inadequate for future threats.

Economic consequences ripple outward from direct physical damage. Coastal cities often serve as economic hubs, hosting ports, financial centers, and tourism industries. Repeated flooding degrades infrastructure and disrupts business operations, while rising insurance costs may make some activities economically unviable. Property values in vulnerable areas may decline as risks become more apparent, affecting household wealth and municipal tax bases.

Social dimensions of coastal climate risk merit particular attention. Vulnerability is not evenly distributed; lower-income communities often occupy more exposed locations and have fewer resources to prepare for or recover from flooding. Displacement from flooded neighborhoods can disrupt social networks and community ties. The psychological toll of repeated flooding and uncertain futures affects mental health in ways that compound material losses.

Responses to coastal climate risks encompass a range of strategies. Protective infrastructure—sea walls, storm barriers, enhanced drainage systems—can reduce exposure to flooding, though at substantial cost and with limitations regarding the magnitude of change they can address. Nature-based solutions such as wetland restoration can provide protective buffers while delivering co-benefits for biodiversity and recreation. Accommodation strategies accept some flooding while reducing its impact through measures like elevating buildings and infrastructure.

In some cases, managed retreat—relocating people and activities away from the most vulnerable areas—may become necessary. This approach raises profound questions about property rights, community identity, and the allocation of costs. When entire neighborhoods or communities must move, who decides, who pays, and what is lost cannot be resolved through purely technical analysis.

The future of coastal cities will depend on choices made now about emissions trajectories, adaptation investments, and development patterns. Time lags in the climate system mean that some change is already committed, but decisions today will shape how much additional change occurs and how well societies can cope with what comes.`,
        questions: [
          { id: 14, type: "yng", text: "Sea level rise has accelerated in recent decades.", answer: "Yes" },
          { id: 15, type: "yng", text: "Storm surge risks are decreasing as sea levels rise.", answer: "No" },
          { id: 16, type: "yng", text: "Climate vulnerability affects all income groups equally.", answer: "No" },
          { id: 17, type: "yng", text: "Nature-based solutions can provide multiple benefits.", answer: "Yes" },
          { id: 18, type: "yng", text: "Managed retreat decisions can be resolved through technical analysis alone.", answer: "No" },
          { id: 19, type: "mcq", text: "How much has global sea level risen since the late nineteenth century?", options: ["A. 5 centimeters", "B. 20 centimeters", "C. 50 centimeters", "D. 1 meter"], answer: "B" },
          { id: 20, type: "mcq", text: "What creates compounding risks according to the passage?", options: ["A. Rising temperatures only", "B. Population growth", "C. Sea level rise plus storms", "D. Economic development"], answer: "C" },
          { id: 21, type: "mcq", text: "Which communities often occupy more exposed locations?", options: ["A. Wealthy communities", "B. Tourist areas", "C. Lower-income communities", "D. Industrial zones"], answer: "C" },
          { id: 22, type: "mcq", text: "What is an example of an accommodation strategy?", options: ["A. Building sea walls", "B. Elevating buildings", "C. Wetland restoration", "D. Relocating communities"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Saltwater ________ affects freshwater supplies.", answer: "intrusion" },
          { id: 24, type: "summary", text: "Complete: Rising insurance costs may make activities economically ________.", answer: "unviable" },
          { id: 25, type: "summary", text: "Complete: Managed retreat involves ________ people from vulnerable areas.", answer: "relocating" },
          { id: 26, type: "summary", text: "Complete: Time ________ mean some climate change is already committed.", answer: "lags" }
        ]
      },
      {
        id: "P3",
        title: "Automation and the Future of Work",
        wordCount: 870,
        text: `Technological change has always disrupted labor markets, displacing workers in some occupations while creating opportunities in others. The current wave of automation, driven by advances in artificial intelligence and robotics, is no exception—yet debates persist about whether this time is fundamentally different. Will machines increasingly perform tasks once considered uniquely human, displacing workers on an unprecedented scale? Or will new jobs emerge, as they have historically, to absorb displaced workers and maintain employment levels?

Historical perspective offers partial reassurance. The agricultural mechanization of the nineteenth and twentieth centuries eliminated millions of farming jobs, yet agricultural workers largely found employment in growing industrial and service sectors. More recent technological changes—computers, the internet, automation of manufacturing—similarly disrupted specific occupations while the overall economy continued generating employment. By this logic, current anxieties represent a recurring pattern rather than a novel crisis.

However, several factors distinguish the current technological moment. Artificial intelligence can now perform cognitive tasks—pattern recognition, natural language processing, complex decision-making—that were previously automation-resistant. Robots have become more capable, flexible, and affordable, expanding the range of physical tasks they can execute. The pace of change appears to be accelerating, potentially compressing the timeframe available for adjustment.

Labor economists have analyzed which occupations face the greatest automation risk. Tasks that are routine and predictable—following explicit rules in consistent environments—prove most susceptible, regardless of whether they are manual or cognitive. Conversely, tasks requiring creativity, social intelligence, or adaptation to unpredictable situations remain difficult to automate. This suggests that automation will reshape job content even where it does not eliminate positions entirely.

The impacts of automation are likely to be unevenly distributed. Workers with lower educational attainment performing routine tasks face higher displacement risk, while those with advanced skills in areas complementary to AI may see their productivity and earnings rise. Geographic concentration means that some communities dependent on vulnerable industries may experience severe disruption while others thrive. Managing these distributional consequences presents a significant policy challenge.

Several responses have been proposed. Education and training systems could be reformed to develop skills that complement rather than compete with AI. Social safety nets might be strengthened to support displaced workers during transitions. Some have advocated for universal basic income to decouple livelihood from employment as automation progresses. Others suggest that shorter working hours could distribute available employment more broadly.

The trajectory of automation remains uncertain. Technological possibility does not guarantee adoption—economic, regulatory, and social factors influence whether and how technologies are implemented. Businesses may choose to augment human workers rather than replace them. Policy choices will shape how automation's benefits and costs are distributed. Rather than a predetermined future, automation presents choices about the kind of society we wish to create.

What seems clear is that passive adaptation will be insufficient. The scale and pace of potential change require proactive responses from individuals, organizations, and governments. Preparing for multiple scenarios while remaining adaptive to emerging developments represents the most prudent approach to navigating this uncertain transition.`,
        questions: [
          { id: 27, type: "tfng", text: "Historical technological changes have always created more jobs than they destroyed.", answer: "Not Given" },
          { id: 28, type: "tfng", text: "AI can now perform some cognitive tasks previously resistant to automation.", answer: "True" },
          { id: 29, type: "tfng", text: "Routine predictable tasks face higher automation risk.", answer: "True" },
          { id: 30, type: "tfng", text: "Automation impacts will be evenly distributed across all workers.", answer: "False" },
          { id: 31, type: "tfng", text: "Technological possibility guarantees adoption.", answer: "False" },
          { id: 32, type: "matching", text: "Tasks requiring unpredictable adaptation", answer: "difficult to automate" },
          { id: 33, type: "matching", text: "Universal support regardless of employment", answer: "basic income" },
          { id: 34, type: "matching", text: "Could distribute employment more broadly", answer: "shorter working hours" },
          { id: 35, type: "mcq", text: "What characterizes automation-susceptible tasks?", options: ["A. Creative requirements", "B. Routine predictability", "C. Social intelligence", "D. Unpredictable environments"], answer: "B" },
          { id: 36, type: "mcq", text: "Which workers face higher displacement risk?", options: ["A. Those with advanced AI skills", "B. Creative workers", "C. Lower educational attainment", "D. Social intelligence workers"], answer: "C" },
          { id: 37, type: "mcq", text: "What does the passage suggest about automation's future?", options: ["A. It is predetermined", "B. It involves choices", "C. It cannot be influenced", "D. It will stop soon"], answer: "B" },
          { id: 38, type: "mcq", text: "What approach does the passage recommend?", options: ["A. Passive adaptation", "B. Proactive responses", "C. Ignoring change", "D. Resisting technology"], answer: "B" },
          { id: 39, type: "short", text: "What kind of processing can AI now perform with natural language? (TWO WORDS)", answer: "natural language" },
          { id: 40, type: "short", text: "What geographic factor may cause some communities to suffer severely? (ONE WORD)", answer: "concentration" }
        ]
      }
    ]
  },
  // ============================================================
  // R9 - INTERMEDIATE (Band 7.0)
  // ============================================================
  {
    id: "R9",
    level: "Intermediate",
    bandTarget: "7.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Space Debris and Orbital Sustainability",
        wordCount: 860,
        text: `The space environment that enabled humanity's greatest achievements in communication, navigation, and Earth observation is becoming increasingly congested and dangerous. Since the launch of Sputnik in 1957, human activities have deposited a growing accumulation of debris in Earth's orbit—defunct satellites, spent rocket stages, fragments from collisions and explosions—that now threatens the infrastructure on which modern societies depend. Understanding and addressing this challenge has become urgent as commercial space activities accelerate.

The numbers are sobering. Space agencies track approximately 30,000 objects larger than 10 centimeters in orbit, but millions of smaller fragments also circulate at velocities exceeding 28,000 kilometers per hour. At such speeds, even a paint fleck can damage a spacecraft, while larger debris can destroy satellites entirely. Each collision generates additional fragments, potentially triggering a cascade of impacts that could render certain orbital regions unusable for generations—a scenario known as Kessler syndrome after the NASA scientist who first described it.

Several high-profile events have illustrated these risks. In 2009, an operational American communications satellite collided with a defunct Russian military satellite, producing thousands of trackable fragments and far more smaller ones. Deliberate anti-satellite weapons tests by China in 2007, the United States in 2008, and Russia in 2021 created additional debris clouds. The International Space Station regularly maneuvers to avoid tracked objects, and satellites must increasingly factor collision avoidance into their operations.

Current debris mitigation guidelines encourage satellite operators to limit time in orbit after missions end and to design satellites that will deorbit completely rather than leaving persistent debris. Regulations require operators to present end-of-life disposal plans, though compliance varies and enforcement mechanisms remain limited. These measures address future debris creation but do nothing about existing debris already in orbit.

Active debris removal has emerged as a potential solution but faces substantial technical and economic challenges. Concepts include capturing debris with nets or harpoons, attaching devices to enable controlled deorbiting, and using lasers to nudge objects toward atmospheric reentry. A handful of demonstration missions have tested various approaches, but no operational debris removal system yet exists. The economics remain problematic: who would pay to remove debris when no clear property rights or liability frameworks assign responsibility?

The governance of space debris reflects broader challenges in managing global commons. Space is not subject to national sovereignty, and activities conducted by one nation affect orbital regions used by all. International coordination occurs through bodies like the United Nations Committee on the Peaceful Uses of Outer Space, but binding rules remain limited. As commercial actors proliferate—some planning constellations of thousands of satellites—the need for effective governance becomes increasingly pressing.

The stakes extend beyond the space sector. Satellite systems support telecommunications, weather forecasting, climate monitoring, navigation, and numerous other services woven into the fabric of daily life. Disruption to these systems would cascade through interconnected societies in ways difficult to fully anticipate. Protecting the space environment is thus not merely a technical challenge but a matter of global security and sustainability.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to space debris crisis", "ii. Anti-satellite weapons", "iii. Debris removal technology", "iv. Governance challenges"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Scale and danger of orbital debris", "ii. Mitigation guidelines", "iii. Economic challenges", "iv. International cooperation"], answer: "i" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Removal concepts", "ii. Notable collision events", "iii. Regulatory frameworks", "iv. Commercial expansion"], answer: "ii" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Active debris removal", "ii. Current prevention measures", "iii. Historical context", "iv. Technical solutions"], answer: "ii" },
          { id: 5, type: "tfng", text: "Space agencies track all debris in orbit.", answer: "False" },
          { id: 6, type: "tfng", text: "Debris travels at speeds exceeding 28,000 kilometers per hour.", answer: "True" },
          { id: 7, type: "tfng", text: "Operational debris removal systems currently exist.", answer: "False" },
          { id: 8, type: "tfng", text: "Space is subject to national sovereignty.", answer: "False" },
          { id: 9, type: "tfng", text: "The International Space Station maneuvers to avoid debris.", answer: "True" },
          { id: 10, type: "short", text: "What syndrome describes a cascade of debris collisions? (TWO WORDS)", answer: "Kessler syndrome" },
          { id: 11, type: "short", text: "How many objects larger than 10 cm are tracked? (NUMBER)", answer: "30000" },
          { id: 12, type: "short", text: "What year did the US-Russia satellite collision occur?", answer: "2009" },
          { id: 13, type: "short", text: "What type of systems support telecommunications and navigation? (ONE WORD)", answer: "satellite" }
        ]
      },
      {
        id: "P2",
        title: "Cross-Cultural Education Systems",
        wordCount: 830,
        text: `Educational systems around the world reflect the values, priorities, and historical experiences of the societies that created them. What counts as knowledge worth transmitting, how teaching and learning should occur, and how achievement should be measured all vary significantly across cultures. Understanding these differences has practical implications for students crossing national boundaries and theoretical significance for understanding how education shapes human development.

Some educational traditions emphasize the transmission of established knowledge through direct instruction and structured practice. Students are expected to absorb authoritative content delivered by teachers, demonstrate mastery through examinations, and show respect for expertise. This approach, common in East Asian systems influenced by Confucian traditions, produces impressive performance on standardized tests of academic content, particularly in mathematics and science. Critics argue, however, that it may discourage creativity, independent thinking, and intrinsic motivation.

Other traditions prioritize student-centered learning that emphasizes exploration, questioning, and individual expression. Teachers facilitate rather than dictate, and assessment may incorporate projects, portfolios, and collaborative work alongside or instead of standardized tests. This approach, associated with progressive educational philosophy and prevalent in some Western contexts, aims to develop critical thinking and adaptability. Critics contend that it may neglect foundational skills and produce inconsistent outcomes.

International comparisons inevitably raise questions about which approaches produce superior results. League tables ranking countries by test scores receive enormous attention, fueling policy debates about emulating high-performing systems. Yet interpreting these comparisons requires caution. Test scores measure particular kinds of achievement that may not capture other valued outcomes. Cultural contexts that enable success in one setting may not transfer to different social conditions. Education serves multiple purposes—economic, civic, personal—that standardized measures imperfectly reflect.

Students who move between educational systems frequently experience adjustment challenges. Academic expectations may differ in ways that advantage or disadvantage newcomers depending on their backgrounds. Social norms around participation, collaboration, and teacher-student relationships vary significantly. Language of instruction adds another layer of complexity for students educated in non-native languages. Support systems for international and immigrant students have become increasingly important as mobility increases.

Educational researchers have explored how cultural background influences cognitive development and learning styles. Some studies suggest that cultural emphases on interdependence versus independence, concrete versus abstract thinking, and holistic versus analytic approaches shape how students perceive and process information. However, essentializing cultural differences risks stereotyping individuals within diverse societies and overlooking within-culture variation that may exceed between-culture differences.

The globalization of education has created pressures toward convergence as well as appreciation of diversity. International assessments, multinational educational corporations, and standardized credentials push toward common frameworks. Simultaneously, recognition that different approaches offer distinct strengths has encouraged selective borrowing and hybrid models. The future of education likely involves ongoing negotiation between universal standards and local adaptations that honor cultural contexts while preparing students for interconnected global societies.`,
        questions: [
          { id: 14, type: "yng", text: "East Asian educational systems are influenced by Confucian traditions.", answer: "Yes" },
          { id: 15, type: "yng", text: "Student-centered learning guarantees superior outcomes.", answer: "No" },
          { id: 16, type: "yng", text: "International test rankings capture all valuable educational outcomes.", answer: "No" },
          { id: 17, type: "yng", text: "Students moving between systems may face adjustment challenges.", answer: "Yes" },
          { id: 18, type: "yng", text: "Cultural differences in learning styles are always greater than individual differences.", answer: "No" },
          { id: 19, type: "mcq", text: "What does teacher-centered instruction emphasize?", options: ["A. Student exploration", "B. Transmission of established knowledge", "C. Portfolio assessment", "D. Collaborative projects"], answer: "B" },
          { id: 20, type: "mcq", text: "What criticism is made of student-centered approaches?", options: ["A. Too much testing", "B. May neglect foundational skills", "C. Excessive homework", "D. Teacher dominance"], answer: "B" },
          { id: 21, type: "mcq", text: "Why should international comparisons be interpreted cautiously?", options: ["A. Tests are too easy", "B. All systems are identical", "C. Scores may not capture all valued outcomes", "D. Rankings are always accurate"], answer: "C" },
          { id: 22, type: "mcq", text: "What does globalization create in education?", options: ["A. Complete standardization", "B. Total diversity", "C. Pressures toward both convergence and diversity", "D. Isolation"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Direct instruction produces strong performance on standardized ________.", answer: "tests" },
          { id: 24, type: "summary", text: "Complete: Progressive education emphasizes critical ________ and adaptability.", answer: "thinking" },
          { id: 25, type: "summary", text: "Complete: Essentializing differences risks ________ individuals.", answer: "stereotyping" },
          { id: 26, type: "summary", text: "Complete: The future involves negotiation between universal standards and local ________.", answer: "adaptations" }
        ]
      },
      {
        id: "P3",
        title: "Food Security in a Changing World",
        wordCount: 850,
        text: `Food security—the condition in which all people have physical, social, and economic access to sufficient, safe, and nutritious food—remains elusive for hundreds of millions of people worldwide despite remarkable advances in agricultural productivity. Understanding why hunger persists amid abundance requires examining the complex systems through which food is produced, distributed, and accessed, as well as the vulnerabilities these systems face from environmental change, economic disruption, and social inequality.

Global food production has more than kept pace with population growth over the past half-century. Advances in plant breeding, agricultural chemicals, irrigation, and mechanization—the technologies of the Green Revolution and its successors—dramatically increased yields of major crops. The world produces enough calories to feed everyone, and aggregate malnutrition rates have declined. Yet progress has been uneven, and recent years have seen setbacks as climate change, conflict, and economic disruptions reverse gains in vulnerable regions.

Food insecurity fundamentally reflects problems of distribution and access rather than production alone. Much food is wasted along supply chains or discarded by consumers in wealthy countries while people go hungry elsewhere. Economic inequality means that even where food is available, many cannot afford adequate nutrition. Political instability and conflict disrupt food systems and displace populations from their livelihoods. Addressing hunger thus requires attention to economic and social factors alongside agricultural technology.

Climate change threatens to undermine food security gains through multiple pathways. Rising temperatures reduce yields of many staple crops, particularly in tropical regions already experiencing food stress. Changing precipitation patterns increase drought and flood risk, affecting agricultural reliability. Pest and disease pressures may shift with warming temperatures. While some regions may initially benefit from warming—longer growing seasons in northern latitudes, for example—the overall trajectory poses significant risks to global food systems.

The environmental sustainability of current agricultural systems raises additional concerns. Intensive farming practices have degraded soils, depleted groundwater, and contributed substantially to greenhouse gas emissions. Biodiversity loss in agricultural landscapes reduces resilience to pests, diseases, and environmental change. Feeding growing populations while reducing environmental impacts requires transforming how food is produced—a challenge that intersects with climate mitigation efforts.

Several approaches offer potential pathways forward. Sustainable intensification aims to increase productivity while reducing environmental footprints through precision agriculture, improved crop varieties, and integrated pest management. Diversified farming systems incorporating agroecological principles can build resilience while providing multiple ecosystem services. Reducing food waste across supply chains could substantially increase effective supply without additional production. Dietary shifts away from resource-intensive animal products could reduce pressure on agricultural systems.

These technical solutions must be accompanied by attention to governance and equity. Smallholder farmers who produce a substantial share of the world's food often lack access to resources, markets, and support systems that would enable them to improve their practices. Land tenure insecurity discourages investment in sustainable management. Power imbalances in global food systems shape who benefits from agricultural trade. Achieving food security for all requires addressing these structural dimensions alongside technological innovation.`,
        questions: [
          { id: 27, type: "tfng", text: "Global food production has not kept pace with population growth.", answer: "False" },
          { id: 28, type: "tfng", text: "Food insecurity is primarily a production problem.", answer: "False" },
          { id: 29, type: "tfng", text: "Climate change threatens food security through multiple pathways.", answer: "True" },
          { id: 30, type: "tfng", text: "All regions will suffer equally from climate impacts on agriculture.", answer: "False" },
          { id: 31, type: "tfng", text: "Technical solutions alone can achieve food security.", answer: "False" },
          { id: 32, type: "matching", text: "Increase productivity while reducing environmental impact", answer: "sustainable intensification" },
          { id: 33, type: "matching", text: "Technologies that dramatically increased crop yields", answer: "Green Revolution" },
          { id: 34, type: "matching", text: "Produce a substantial share of the world's food", answer: "smallholder farmers" },
          { id: 35, type: "mcq", text: "What fundamentally reflects food insecurity?", options: ["A. Insufficient production", "B. Distribution and access problems", "C. Technology limitations", "D. Labor shortages"], answer: "B" },
          { id: 36, type: "mcq", text: "What does intensive farming contribute to?", options: ["A. Soil improvement", "B. Water abundance", "C. Greenhouse gas emissions", "D. Biodiversity increase"], answer: "C" },
          { id: 37, type: "mcq", text: "What could dietary shifts reduce?", options: ["A. Food production", "B. Population growth", "C. Pressure on agricultural systems", "D. International trade"], answer: "C" },
          { id: 38, type: "mcq", text: "What discourages investment in sustainable land management?", options: ["A. Excess capital", "B. Market access", "C. Land tenure insecurity", "D. Technology availability"], answer: "C" },
          { id: 39, type: "short", text: "What remains elusive for hundreds of millions? (TWO WORDS)", answer: "food security" },
          { id: 40, type: "short", text: "What type of systems incorporate agroecological principles? (TWO WORDS)", answer: "diversified farming" }
        ]
      }
    ]
  },
  // ============================================================
  // R10 - INTERMEDIATE (Band 7.0-7.5)
  // ============================================================
  {
    id: "R10",
    level: "Intermediate",
    bandTarget: "7.0-7.5",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "The Science of Memory Formation",
        wordCount: 870,
        text: `Understanding how memories are formed, stored, and retrieved has been a central quest of neuroscience and psychology for over a century. While significant progress has been made, memory remains one of the brain's most complex functions, involving intricate interactions among neural circuits, molecular mechanisms, and cognitive processes. Recent advances in brain imaging and molecular biology have begun to illuminate these mysteries, with implications extending from education to the treatment of memory disorders.

The formation of long-term memories begins with encoding, the process by which experiences are converted into neural representations. During encoding, sensory information is processed through various brain regions before converging on the hippocampus, a seahorse-shaped structure critical for forming new explicit memories—those we can consciously recall, such as facts and events. The hippocampus appears to bind together disparate elements of an experience into a coherent memory trace.

Consolidation refers to the stabilization of memories over time. Initially, new memories are fragile and susceptible to disruption; consolidation renders them more permanent. This process involves both synaptic changes occurring within hours of learning and systems-level reorganization occurring over days to years. Sleep plays a crucial role in consolidation, with specific sleep stages associated with different types of memory processing. Sleep deprivation consistently impairs memory formation in experimental studies.

At the molecular level, memory consolidation involves lasting changes in synaptic strength—the efficiency of communication between neurons. Long-term potentiation, a persistent increase in synaptic strength following repeated stimulation, is widely regarded as a cellular mechanism underlying memory. This process requires gene expression and protein synthesis, which is why drugs that block protein synthesis can prevent the formation of long-term memories while leaving short-term memory intact.

The retrieval of stored memories is not a simple playback of recorded information but an active reconstructive process. Each time a memory is retrieved, it becomes temporarily labile and must be reconsolidated, potentially allowing modification. This reconsolidation window has attracted therapeutic interest, as it might permit the modification of traumatic memories. However, it also explains why memories can change over time and how false memories can form through repeated retrieval with new information.

Memory systems are not unitary. Beyond the explicit memory system involving the hippocampus, procedural memories for skills and habits depend on different structures, particularly the basal ganglia. Emotional memories engage the amygdala, which modulates memory strength based on emotional significance—explaining why emotionally charged events are often remembered vividly. Understanding these distinct systems has clinical implications for conditions ranging from amnesia to post-traumatic stress disorder.

Age-related changes in memory reflect both normal decline and pathological processes. Some memory decrement appears inevitable with aging, particularly for episodic memories and processing speed. However, severe memory loss indicates disease processes such as Alzheimer's, characterized by progressive destruction of hippocampal circuits and accumulation of abnormal proteins. Research into the mechanisms of memory has fueled efforts to develop treatments for these devastating conditions.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to memory research", "ii. Sleep and memory", "iii. Age-related decline", "iv. Molecular mechanisms"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Memory retrieval", "ii. The encoding process", "iii. Procedural memory", "iv. Emotional memories"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Memory consolidation process", "ii. False memories", "iii. Amygdala function", "iv. Treatment options"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Sleep deprivation", "ii. Molecular basis of memory", "iii. Hippocampal damage", "iv. Aging effects"], answer: "ii" },
          { id: 5, type: "tfng", text: "New memories are immediately stable after formation.", answer: "False" },
          { id: 6, type: "tfng", text: "Sleep deprivation impairs memory formation.", answer: "True" },
          { id: 7, type: "tfng", text: "Long-term potentiation decreases synaptic strength.", answer: "False" },
          { id: 8, type: "tfng", text: "Memory retrieval is a simple playback process.", answer: "False" },
          { id: 9, type: "tfng", text: "All memory decline with age indicates disease.", answer: "False" },
          { id: 10, type: "short", text: "What structure is critical for explicit memory formation? (ONE WORD)", answer: "hippocampus" },
          { id: 11, type: "short", text: "What process stabilizes memories over time? (ONE WORD)", answer: "consolidation" },
          { id: 12, type: "short", text: "What blocks long-term memory formation if inhibited? (TWO WORDS)", answer: "protein synthesis" },
          { id: 13, type: "short", text: "What brain structure modulates emotional memories? (ONE WORD)", answer: "amygdala" }
        ]
      },
      {
        id: "P2",
        title: "Sustainable Architecture and Design",
        wordCount: 840,
        text: `The built environment accounts for a substantial share of global energy consumption and carbon emissions, making sustainable architecture a critical component of climate mitigation strategies. Buildings consume energy for heating, cooling, lighting, and operations; the materials used in construction embody energy expended in extraction, processing, and transport; and the land use patterns created by urban development influence transportation needs and ecosystem function. Addressing sustainability in architecture thus requires attention to multiple dimensions across building lifecycles.

Passive design strategies reduce energy requirements by working with rather than against natural conditions. Building orientation, glazing placement, and thermal mass can harness solar gain for winter heating while minimizing summer overheating. Natural ventilation reduces air conditioning loads where climatic conditions permit. Insulation and air sealing reduce energy loss through building envelopes. These approaches often involve little or no additional cost when incorporated from the design stage, yet they can dramatically reduce operational energy requirements.

Active systems can further improve energy performance. High-efficiency heating, ventilation, and air conditioning systems reduce energy use for thermal comfort. LED lighting consumes far less electricity than older technologies while offering improved control. Building automation systems optimize equipment operation based on occupancy and conditions. Renewable energy systems, particularly rooftop solar, can generate electricity on-site. Net-zero energy buildings—those that produce as much energy as they consume—have moved from experimental to achievable with current technologies.

Material selection presents another dimension of sustainable design. Embodied energy—the energy expended in producing and transporting materials—represents an increasingly significant share of building lifecycle impacts as operational energy improves. Renewable materials like timber can sequester carbon while providing structural capacity. Recycled and locally sourced materials reduce transport and extraction impacts. Design for disassembly facilitates material recovery at building end-of-life rather than demolition and landfilling.

Beyond individual buildings, sustainable design increasingly addresses urban scale. Dense, mixed-use development reduces automobile dependence and enables efficient infrastructure provision. Green infrastructure—parks, street trees, green roofs—provides ecosystem services including stormwater management, urban cooling, and habitat. Transit-oriented development concentrates intensity around public transportation, enabling low-carbon mobility. These approaches recognize that sustainability outcomes depend not just on how buildings perform but on how they are arranged and connected.

Despite technical advances, the transformation of building practices has been slower than climate imperatives demand. Construction is a conservative industry where established practices have powerful inertia. Split incentives—where building owners pay for construction while tenants pay for energy—can discourage efficiency investments. Building codes and standards have strengthened but remain less ambitious than technically feasible. Accelerating the transition to sustainable building requires policy, market, and cultural changes alongside continued technological innovation.`,
        questions: [
          { id: 14, type: "yng", text: "Buildings account for a minor share of global energy consumption.", answer: "No" },
          { id: 15, type: "yng", text: "Passive design strategies always require significant additional cost.", answer: "No" },
          { id: 16, type: "yng", text: "Net-zero energy buildings are achievable with current technology.", answer: "Yes" },
          { id: 17, type: "yng", text: "Embodied energy is becoming more significant as operational energy improves.", answer: "Yes" },
          { id: 18, type: "yng", text: "The construction industry has rapidly adopted sustainable practices.", answer: "No" },
          { id: 19, type: "mcq", text: "What can natural ventilation reduce?", options: ["A. Construction costs", "B. Air conditioning loads", "C. Building height", "D. Material use"], answer: "B" },
          { id: 20, type: "mcq", text: "What do net-zero buildings achieve?", options: ["A. Zero construction cost", "B. Zero occupancy", "C. Energy production equals consumption", "D. No carbon in materials"], answer: "C" },
          { id: 21, type: "mcq", text: "What can timber do according to the passage?", options: ["A. Increase emissions", "B. Sequester carbon", "C. Reduce strength", "D. Require more transport"], answer: "B" },
          { id: 22, type: "mcq", text: "What do split incentives discourage?", options: ["A. Construction", "B. Occupancy", "C. Efficiency investments", "D. Urban development"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Building ________ can harness solar gain for winter heating.", answer: "orientation" },
          { id: 24, type: "summary", text: "Complete: High-efficiency HVAC systems reduce energy for thermal ________.", answer: "comfort" },
          { id: 25, type: "summary", text: "Complete: Design for ________ facilitates material recovery at building end-of-life.", answer: "disassembly" },
          { id: 26, type: "summary", text: "Complete: Transit-oriented development concentrates development around public ________.", answer: "transportation" }
        ]
      },
      {
        id: "P3",
        title: "Water Management and Policy",
        wordCount: 850,
        text: `Water is essential for human survival, economic activity, and ecosystem function, yet its availability is increasingly threatened by population growth, climate change, and competing demands. Managing water resources requires balancing multiple uses—agricultural irrigation, industrial processes, municipal supply, environmental flows—while addressing challenges of scarcity, pollution, and infrastructure maintenance. Effective water governance has become critical as pressures on this fundamental resource intensify.

Water availability varies enormously across space and time. Some regions receive abundant precipitation while others face chronic aridity; seasonal variation creates periods of surplus and deficit even in relatively wet climates. Climate change is altering precipitation patterns, intensifying both droughts and floods in many regions while reducing snowpack that provides gradual seasonal water release. These changes compound existing challenges for water management systems designed around historical conditions.

Demand for water has grown with population and economic development. Agriculture accounts for roughly seventy percent of global freshwater withdrawals, with irrigation enabling food production in areas where rainfall alone is insufficient. Industrial uses consume substantial volumes, though often with higher economic returns per unit water. Municipal demand grows as populations urbanize and living standards rise. Environmental needs—maintaining river flows, wetlands, and aquatic ecosystems—represent a category of demand often inadequately recognized in allocation systems.

Water governance encompasses the institutions, policies, and practices through which societies manage water resources. Property rights define who may use water under what conditions; in some systems, water rights are tied to land, while others establish separate tradeable entitlements. Regulatory frameworks govern water quality, extraction limits, and infrastructure standards. Planning processes attempt to balance competing demands and prepare for future conditions. The effectiveness of these governance arrangements varies considerably across jurisdictions.

Pricing water poses particular challenges. Water is essential for life, raising equity concerns about cost barriers to access. Yet underpricing encourages wasteful use and fails to generate revenue for infrastructure maintenance. Many water systems worldwide suffer from deferred maintenance and aging infrastructure that will require massive investment to rehabilitate or replace. Reconciling affordability for essential uses with price signals that encourage efficiency and fund infrastructure remains an ongoing governance challenge.

Technological approaches can improve water management. Improved irrigation techniques reduce agricultural water consumption while maintaining or increasing productivity. Water recycling and reuse extend available supplies, particularly for non-potable uses. Desalination converts seawater to freshwater, though at significant energy cost. Leak detection and repair reduces losses from aging distribution systems. These technologies can help close gaps between supply and demand but cannot substitute for effective governance.

The future of water management will require integrated approaches that recognize connections across sectors and scales. Watersheds that cross political boundaries require coordination among jurisdictions. Energy-water nexus considerations link water management to climate mitigation choices. Food security depends on agricultural water availability. Addressing these interconnections requires governance frameworks that transcend traditional sectoral divisions while remaining adaptable to changing conditions and knowledge.`,
        questions: [
          { id: 27, type: "tfng", text: "Water availability is uniform across all regions.", answer: "False" },
          { id: 28, type: "tfng", text: "Agriculture accounts for about seventy percent of global freshwater withdrawals.", answer: "True" },
          { id: 29, type: "tfng", text: "Environmental water needs are always adequately addressed in allocation systems.", answer: "False" },
          { id: 30, type: "tfng", text: "Underpricing water encourages conservation.", answer: "False" },
          { id: 31, type: "tfng", text: "Desalination has no energy costs.", answer: "False" },
          { id: 32, type: "matching", text: "Accounts for majority of global freshwater use", answer: "agriculture" },
          { id: 33, type: "matching", text: "Converts seawater to freshwater", answer: "desalination" },
          { id: 34, type: "matching", text: "Requires coordination across political boundaries", answer: "watersheds" },
          { id: 35, type: "mcq", text: "What does climate change affect according to the passage?", options: ["A. Only temperature", "B. Precipitation patterns", "C. Water pricing only", "D. Political boundaries"], answer: "B" },
          { id: 36, type: "mcq", text: "What raises equity concerns about water pricing?", options: ["A. Industrial use", "B. Agricultural demand", "C. Water is essential for life", "D. Infrastructure costs"], answer: "C" },
          { id: 37, type: "mcq", text: "What reduces losses from aging systems?", options: ["A. Increased pricing", "B. Leak detection and repair", "C. Desalination", "D. New governance"], answer: "B" },
          { id: 38, type: "mcq", text: "What does the passage recommend for the future?", options: ["A. Sectoral approaches", "B. Isolated planning", "C. Integrated approaches", "D. Reduced coordination"], answer: "C" },
          { id: 39, type: "short", text: "What type of rights define who may use water? (ONE WORD)", answer: "property" },
          { id: 40, type: "short", text: "What nexus links water management to climate choices? (TWO WORDS)", answer: "energy-water" }
        ]
      }
    ]
  },
  // ============================================================
  // R11 - INTERMEDIATE (Band 7.5)
  // ============================================================
  {
    id: "R11",
    level: "Intermediate",
    bandTarget: "7.5",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Digital Privacy and Information Ethics",
        wordCount: 870,
        text: `The digital transformation of society has generated unprecedented volumes of personal data and raised fundamental questions about privacy, autonomy, and the proper limits of information collection and use. Every online transaction, social media interaction, and smartphone location ping creates data traces that can be aggregated, analyzed, and monetized by corporations, accessed by governments, and exploited by criminals. Understanding and navigating this new information landscape has become essential for individuals and societies alike.

The concept of privacy has evolved considerably with technological change. Traditional privacy concerns focused on physical intrusion and disclosure of intimate information. Digital privacy encompasses a broader range of interests: control over personal information, freedom from surveillance, and the right to conduct affairs without observation or recording. The boundaries between public and private have blurred as activities once conducted in relative privacy increasingly leave digital records accessible to unknown parties.

Commercial data collection has become pervasive. Online platforms, smartphone applications, and connected devices continuously gather information about user behavior, preferences, and circumstances. This data fuels targeted advertising—the business model underlying much of the internet—and enables personalized services. Companies argue that data collection benefits users through improved products and free services; critics counter that many users do not understand the extent of collection or its implications, rendering consent meaningless.

Government surveillance capabilities have expanded dramatically. Intelligence agencies can intercept communications at scale, while law enforcement increasingly relies on digital evidence. Facial recognition, license plate readers, and other technologies enable tracking of movements in physical space. These capabilities serve legitimate security purposes but also create risks of abuse and chilling effects on speech and association. Democratic societies must balance security needs against the dangers of a surveillance state.

Data breaches and cybercrime represent direct harms to individuals. Personal information stolen from companies has fueled identity theft, financial fraud, and targeted scams. Sensitive information—medical records, intimate images, political affiliations—can be exposed or used for blackmail. The proliferation of data across numerous systems multiplies attack surfaces and makes comprehensive protection impossible. Individuals often have little ability to control or even know about vulnerabilities affecting their information.

Regulatory responses have attempted to address these challenges with varying approaches and effectiveness. The European Union's General Data Protection Regulation established comprehensive privacy protections including consent requirements, access rights, and significant penalties for violations. Other jurisdictions have adopted narrower or less stringent regulations. The global nature of data flows complicates enforcement when information crosses borders among jurisdictions with different standards.

Ethical frameworks for information practices remain contested. Some argue for robust individual control over personal data as a matter of autonomy and dignity. Others emphasize the collective benefits of data sharing for research, innovation, and public purposes. Finding appropriate balances requires ongoing deliberation as technologies and social norms continue to evolve.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to digital privacy challenges", "ii. Government surveillance", "iii. Regulatory responses", "iv. Data breaches"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Commercial data practices", "ii. Evolution of privacy concepts", "iii. Ethical frameworks", "iv. Cybercrime"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Government capabilities", "ii. Commercial data collection", "iii. Security threats", "iv. Regulation"], answer: "ii" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Government surveillance expansion", "ii. Data breach impacts", "iii. Commercial practices", "iv. Ethical debates"], answer: "i" },
          { id: 5, type: "tfng", text: "Traditional privacy concerns included digital surveillance.", answer: "False" },
          { id: 6, type: "tfng", text: "Data collection fuels targeted advertising.", answer: "True" },
          { id: 7, type: "tfng", text: "All users fully understand the extent of data collection.", answer: "False" },
          { id: 8, type: "tfng", text: "Global data flows complicate regulatory enforcement.", answer: "True" },
          { id: 9, type: "tfng", text: "There is universal agreement on information ethics frameworks.", answer: "False" },
          { id: 10, type: "short", text: "What regulation did the EU establish? (ABBREVIATION)", answer: "GDPR" },
          { id: 11, type: "short", text: "What type of advertising does data collection enable? (ONE WORD)", answer: "targeted" },
          { id: 12, type: "short", text: "What has fueled identity theft and fraud? (TWO WORDS)", answer: "data breaches" },
          { id: 13, type: "short", text: "What technology enables tracking of movements? (TWO WORDS)", answer: "facial recognition" }
        ]
      },
      {
        id: "P2",
        title: "Transportation Systems and Urban Futures",
        wordCount: 840,
        text: `Urban transportation systems face mounting pressures from population growth, environmental imperatives, and technological disruption. The twentieth-century model organized around private automobile ownership has produced congestion, pollution, and sprawling development patterns that many cities now seek to reverse. Emerging technologies—electric vehicles, autonomous driving, shared mobility platforms—promise transformation, but the future of urban transportation will depend as much on policy choices and infrastructure investments as on technological innovation.

The dominance of private automobiles in urban transportation has exacted significant costs. Congestion wastes time and fuel while degrading air quality. Road infrastructure consumes vast amounts of land in cities where space is precious. Automobile-dependent development has spread cities outward, increasing distances and entrenching car dependence. Car ownership costs burden households while excluding those who cannot drive from full participation in economic and social life. These accumulated impacts have generated renewed interest in alternative transportation modes.

Public transit offers higher capacity and lower per-passenger emissions than private vehicles but faces challenges of its own. Systems designed for radial travel between suburbs and city centers may poorly serve contemporary trip patterns. Service frequency and coverage affect usability; infrequent or incomplete networks struggle to compete with automobile convenience. Funding constraints have led to deferred maintenance and service cuts in many systems. Yet where transit works well, it demonstrates that alternatives to car dependence are viable.

Electrification offers potential solutions to some transportation impacts. Electric vehicles produce no tailpipe emissions, though their overall environmental benefits depend on electricity generation sources. Battery costs have declined dramatically, making electric vehicles increasingly competitive with conventional vehicles. However, the transition faces challenges including charging infrastructure availability, vehicle range, and grid capacity to support large-scale adoption. Electrification addresses local air quality and can reduce carbon emissions but does not solve congestion or land use problems.

Autonomous vehicles represent a more speculative but potentially transformative technology. Self-driving capability might improve safety by reducing human error, the cause of most crashes. Autonomous operation could enable more efficient use of road capacity and vehicle fleets. However, autonomous vehicles might also increase total vehicle miles traveled by making driving easier, potentially worsening congestion. The consequences will depend heavily on whether autonomous vehicles operate privately or as shared fleets, and on policy frameworks that shape deployment.

Shared mobility services have already begun changing urban transportation. Ride-hailing platforms have transformed for-hire transportation, though with contested labor practices and mixed effects on transit ridership and congestion. Bike and scooter sharing provide options for short trips in many cities. Car sharing reduces the need for vehicle ownership in dense urban areas. These services work best as complements to robust transit systems rather than substitutes.

The future of urban transportation will emerge from choices about infrastructure investment, land use regulation, pricing, and technology governance. Cities that prioritize transit, walking, and cycling infrastructure can reduce car dependence and its associated costs. Pricing mechanisms that reflect the true costs of driving can shift mode choices. Thoughtful integration of emerging technologies with existing systems can enhance rather than undermine sustainable transportation. The decisions made in the coming decades will shape urban environments for generations.`,
        questions: [
          { id: 14, type: "yng", text: "The twentieth-century transportation model centered on public transit.", answer: "No" },
          { id: 15, type: "yng", text: "Electric vehicles produce no tailpipe emissions.", answer: "Yes" },
          { id: 16, type: "yng", text: "Autonomous vehicles will definitely reduce congestion.", answer: "No" },
          { id: 17, type: "yng", text: "Battery costs for electric vehicles have declined.", answer: "Yes" },
          { id: 18, type: "yng", text: "Shared mobility services work best replacing transit systems.", answer: "No" },
          { id: 19, type: "mcq", text: "What has automobile dominance produced according to the passage?", options: ["A. Reduced development", "B. Cleaner air", "C. Congestion and pollution", "D. Lower costs"], answer: "C" },
          { id: 20, type: "mcq", text: "What challenge does public transit face?", options: ["A. Too much funding", "B. Excessive popularity", "C. Deferred maintenance", "D. Overstaffing"], answer: "C" },
          { id: 21, type: "mcq", text: "What do electric vehicles NOT solve?", options: ["A. Local air quality", "B. Tailpipe emissions", "C. Carbon emissions", "D. Congestion"], answer: "D" },
          { id: 22, type: "mcq", text: "What might autonomous vehicles increase?", options: ["A. Transit use", "B. Vehicle miles traveled", "C. Public funding", "D. Parking availability"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Automobile-dependent development spread cities ________.", answer: "outward" },
          { id: 24, type: "summary", text: "Complete: Ride-hailing has mixed effects on transit ridership and ________.", answer: "congestion" },
          { id: 25, type: "summary", text: "Complete: Pricing mechanisms should reflect the true ________ of driving.", answer: "costs" },
          { id: 26, type: "summary", text: "Complete: Cities prioritizing transit can reduce car ________.", answer: "dependence" }
        ]
      },
      {
        id: "P3",
        title: "Energy Storage and Grid Transformation",
        wordCount: 860,
        text: `The transformation of electricity systems to incorporate large shares of renewable energy depends critically on energy storage technologies. Unlike fossil fuel generators that can adjust output to match demand, wind and solar resources produce electricity intermittently based on weather conditions. Storage enables surplus renewable electricity to be captured and discharged when needed, smoothing variability and ensuring reliable supply. As renewable costs have fallen dramatically, storage has emerged as the key enabling technology for deep decarbonization of electricity systems.

Battery storage has advanced rapidly, driven initially by consumer electronics and accelerated by electric vehicle development. Lithium-ion batteries have achieved dramatic cost reductions—over ninety percent since 2010—while improving in energy density and lifespan. These improvements have made battery storage economically viable for grid applications ranging from frequency regulation to peak demand reduction. Utility-scale battery installations have grown exponentially, with deployment rates expected to continue accelerating.

Despite progress, current batteries face limitations for some grid applications. Batteries excel at storing energy for hours but become economically challenging for longer-duration storage needs. Seasonal storage—capturing summer solar surplus for winter demand, for example—remains beyond practical battery economics. Concerns about supply chains for battery materials, particularly lithium and cobalt, have prompted attention to resource constraints and extraction impacts. Battery disposal and recycling infrastructure remains underdeveloped.

Alternative storage technologies address different needs. Pumped hydroelectric storage—using surplus electricity to pump water uphill, then releasing it through turbines when needed—provides large-scale, long-duration storage where geography permits. Compressed air energy storage and various thermal storage approaches offer other options. Hydrogen produced through electrolysis can store energy for extended periods and serve as fuel for transportation and industrial processes. Each technology has distinct characteristics suited to different applications.

Grid integration of storage involves technical and regulatory complexity. Storage assets can provide multiple services—energy arbitrage, capacity, frequency regulation, voltage support—but markets and regulations were designed around conventional generation and may not appropriately value storage capabilities. Interconnection processes, tariff structures, and market rules all require adaptation to facilitate storage deployment. Regulatory reform has progressed unevenly across jurisdictions.

The economic case for storage continues to strengthen as renewable penetration increases. At low renewable shares, grid flexibility allows integration without substantial storage. As shares rise, storage becomes increasingly valuable for capturing otherwise-curtailed renewable generation and ensuring system reliability. Analysis suggests that deep decarbonization scenarios require storage deployment at scales far exceeding current levels, representing both a challenge and an enormous market opportunity.

The trajectory of storage technology development will significantly influence the pace and cost of energy system decarbonization. Continued cost reductions, improvements in energy density and lifespan, and development of long-duration storage options would accelerate the transition. Policy support, market reforms, and infrastructure investments can facilitate deployment while technology continues advancing. Storage is not merely a technical adjunct to renewable generation but a transformative capability that reshapes what electricity systems can achieve.`,
        questions: [
          { id: 27, type: "tfng", text: "Wind and solar produce consistent electricity regardless of weather.", answer: "False" },
          { id: 28, type: "tfng", text: "Lithium-ion battery costs have fallen over ninety percent since 2010.", answer: "True" },
          { id: 29, type: "tfng", text: "Batteries are economically ideal for seasonal storage.", answer: "False" },
          { id: 30, type: "tfng", text: "Pumped hydro storage works regardless of geographic conditions.", answer: "False" },
          { id: 31, type: "tfng", text: "Regulatory frameworks were originally designed with storage in mind.", answer: "False" },
          { id: 32, type: "matching", text: "Uses surplus electricity to pump water uphill", answer: "pumped hydroelectric" },
          { id: 33, type: "matching", text: "Produced through electrolysis for extended storage", answer: "hydrogen" },
          { id: 34, type: "matching", text: "Initially drove battery development", answer: "consumer electronics" },
          { id: 35, type: "mcq", text: "What has emerged as the key enabling technology for renewable integration?", options: ["A. Fossil fuels", "B. Nuclear power", "C. Energy storage", "D. Grid expansion"], answer: "C" },
          { id: 36, type: "mcq", text: "What concern exists about battery materials?", options: ["A. Too abundant", "B. Too cheap", "C. Supply chain constraints", "D. Excessive recycling"], answer: "C" },
          { id: 37, type: "mcq", text: "When does storage become increasingly valuable?", options: ["A. At low renewable shares", "B. As renewable shares rise", "C. When prices increase", "D. During stable periods"], answer: "B" },
          { id: 38, type: "mcq", text: "What does the passage say about storage?", options: ["A. Merely technical", "B. Transformative capability", "C. Unnecessary adjunct", "D. Temporary solution"], answer: "B" },
          { id: 39, type: "short", text: "What type of battery has achieved dramatic cost reductions? (TWO WORDS)", answer: "lithium-ion" },
          { id: 40, type: "short", text: "What infrastructure for batteries remains underdeveloped? (ONE WORD)", answer: "recycling" }
        ]
      }
    ]
  },
  // ============================================================
  // R12 - INTERMEDIATE (Band 7.5)
  // ============================================================
  {
    id: "R12",
    level: "Intermediate",
    bandTarget: "7.5",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "The Neuroscience of Decision Making",
        wordCount: 860,
        text: `Every day, humans make thousands of decisions, from trivial choices about what to eat to consequential judgments about careers, relationships, and finances. Understanding how the brain generates these decisions has become a major focus of neuroscience research, with findings that challenge traditional assumptions about human rationality and illuminate the neural mechanisms underlying choice behavior.

Classical economic theory modeled decision-making as a rational process in which individuals evaluate options, weigh costs and benefits, and select choices that maximize their expected utility. This framework proved useful for many purposes but failed to account for systematic patterns in human behavior that deviate from rational predictions. People exhibit loss aversion, weighting potential losses more heavily than equivalent gains. They discount future rewards steeply relative to immediate ones. Their choices are influenced by how options are framed even when the underlying alternatives are identical.

Neuroscience research has revealed that decision-making involves multiple brain systems that sometimes cooperate and sometimes compete. The prefrontal cortex, particularly regions involved in working memory and cognitive control, supports deliberative reasoning about options and consequences. Subcortical structures including the striatum and amygdala process reward signals and emotional responses that influence choices. The interplay between these systems helps explain why decisions can be swayed by factors that rational analysis would deem irrelevant.

Dopamine, a neurotransmitter associated with reward processing, plays a central role in decision-making. Dopamine neurons respond not simply to rewards themselves but to the difference between expected and received rewards—a signal that enables learning from experience. This reward prediction error signal influences both immediate choices and longer-term learning about what actions lead to desirable outcomes. Dysfunction in dopamine systems contributes to decision-making impairments in conditions ranging from addiction to Parkinson's disease.

The role of emotion in decision-making has been reconsidered in light of neuroscience findings. Rather than simply distorting rational judgment, emotions appear to provide essential information for adaptive decision-making. Patients with damage to brain regions involved in emotional processing often make poor decisions in real-world contexts despite intact logical reasoning abilities. The somatic marker hypothesis proposes that bodily states associated with past outcomes guide current choices through feelings that signal whether options are likely to lead to good or bad results.

Individual differences in decision-making have both genetic and environmental origins. Variations in genes affecting neurotransmitter systems contribute to differences in risk tolerance, impulsivity, and sensitivity to reward and punishment. Early life experiences shape the development of prefrontal circuits involved in self-control and future orientation. These individual differences have implications for understanding why some people are more prone to problematic decision patterns, from addiction to financial mismanagement.

The neuroscience of decision-making has practical applications across domains. Behavioral economics incorporates psychological insights into economic models and policy design. Neuromarketing attempts to understand consumer choices through brain imaging. Clinical applications address decision-making impairments in psychiatric and neurological conditions. As understanding deepens, questions arise about responsibility and autonomy when choices emerge from neural processes of which individuals are largely unaware.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to decision neuroscience", "ii. Dopamine systems", "iii. Individual differences", "iv. Clinical applications"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Emotional processing", "ii. Limitations of classical economics", "iii. Brain imaging methods", "iv. Genetic factors"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Multiple brain systems in decisions", "ii. Loss aversion", "iii. Future discounting", "iv. Marketing applications"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Prefrontal function", "ii. Dopamine's role in choice", "iii. Emotional damage", "iv. Behavioral economics"], answer: "ii" },
          { id: 5, type: "tfng", text: "Classical economic theory perfectly predicts human decision behavior.", answer: "False" },
          { id: 6, type: "tfng", text: "Dopamine neurons respond to reward prediction errors.", answer: "True" },
          { id: 7, type: "tfng", text: "Emotions always distort rational decision-making.", answer: "False" },
          { id: 8, type: "tfng", text: "Individual differences in decision-making have only genetic origins.", answer: "False" },
          { id: 9, type: "tfng", text: "Neuromarketing uses brain imaging to understand consumer choices.", answer: "True" },
          { id: 10, type: "short", text: "What do people weight more heavily than equivalent gains? (ONE WORD)", answer: "losses" },
          { id: 11, type: "short", text: "What brain region supports deliberative reasoning? (TWO WORDS)", answer: "prefrontal cortex" },
          { id: 12, type: "short", text: "What hypothesis proposes bodily states guide choices? (TWO WORDS)", answer: "somatic marker" },
          { id: 13, type: "short", text: "What field incorporates psychological insights into economic models? (TWO WORDS)", answer: "behavioral economics" }
        ]
      },
      {
        id: "P2",
        title: "Ocean Acidification and Marine Ecosystems",
        wordCount: 850,
        text: `The absorption of carbon dioxide by the world's oceans has profound consequences that extend beyond climate regulation. As oceans take up atmospheric CO2, chemical reactions lower seawater pH—a process known as ocean acidification. Often called climate change's "evil twin," acidification threatens marine organisms and ecosystems in ways that are only beginning to be understood, with potential implications for fisheries, coastal communities, and global food security.

The chemistry of ocean acidification is well established. When carbon dioxide dissolves in seawater, it forms carbonic acid, which releases hydrogen ions that lower pH and reduce the availability of carbonate ions. Since the industrial revolution, ocean pH has decreased by approximately 0.1 units—a seemingly small change that actually represents a thirty percent increase in hydrogen ion concentration. Under projected emission trajectories, further acidification of 0.3 to 0.4 pH units could occur by 2100.

Marine organisms that build shells or skeletons from calcium carbonate face direct challenges from acidification. Corals, mollusks, echinoderms, and some plankton species depend on carbonate ions to construct their structures. As carbonate availability decreases, shell formation becomes more energetically costly or impossible. Some organisms may be able to adapt through increased calcification effort, but this diverts energy from growth and reproduction. In severely acidified conditions, existing shells can actually dissolve.

Coral reefs face compounded threats from acidification and warming. Reduced calcification slows reef growth and recovery from disturbances. Combined with bleaching events driven by elevated temperatures, these stresses have contributed to widespread coral decline worldwide. Given that coral reefs support roughly one-quarter of marine species despite covering less than one percent of ocean area, their degradation has cascading effects throughout marine food webs.

Effects of acidification extend beyond calcifying organisms. Fish behavior and sensory capabilities can be altered by acidified conditions, potentially affecting predator avoidance and habitat selection. Changes in primary productivity and plankton community composition can propagate through food webs in complex ways. Some species may benefit from conditions that disadvantage their competitors or predators, but predicting ecosystem-level responses remains challenging given the complexity of marine systems.

The pace of current acidification distinguishes it from past events. Although ocean chemistry has varied throughout Earth's history, the current rate of change exceeds anything in the geological record for at least 300 million years. This rapid change limits the potential for evolutionary adaptation, which typically operates over many generations. Species with short generation times and large populations may adapt more readily, but long-lived species and those with specialized habitat requirements face greater vulnerability.

Addressing ocean acidification ultimately requires reducing carbon dioxide emissions, as the process is driven by atmospheric CO2 regardless of its source. Some local interventions—reducing nutrient pollution that exacerbates acidification, protecting resilient ecosystems, supporting species that tolerate lower pH—may provide temporary relief in specific areas. However, only substantial emission reductions can stabilize ocean chemistry at levels compatible with healthy marine ecosystems.`,
        questions: [
          { id: 14, type: "yng", text: "Ocean acidification is sometimes called climate change's 'evil twin.'", answer: "Yes" },
          { id: 15, type: "yng", text: "Ocean pH has decreased by 1.0 units since industrialization.", answer: "No" },
          { id: 16, type: "yng", text: "All marine species will be equally affected by acidification.", answer: "No" },
          { id: 17, type: "yng", text: "Current acidification is faster than past geological events.", answer: "Yes" },
          { id: 18, type: "yng", text: "Local interventions can permanently solve ocean acidification.", answer: "No" },
          { id: 19, type: "mcq", text: "What does a 0.1 pH decrease represent?", options: ["A. 10% hydrogen ion increase", "B. 30% hydrogen ion increase", "C. 50% hydrogen ion increase", "D. 100% hydrogen ion increase"], answer: "B" },
          { id: 20, type: "mcq", text: "What do calcifying organisms need to build shells?", options: ["A. Nitrogen ions", "B. Carbonate ions", "C. Sodium ions", "D. Chloride ions"], answer: "B" },
          { id: 21, type: "mcq", text: "What percentage of marine species do coral reefs support?", options: ["A. 10%", "B. 25%", "C. 50%", "D. 75%"], answer: "B" },
          { id: 22, type: "mcq", text: "What ultimately addresses ocean acidification?", options: ["A. Local interventions only", "B. Reducing CO2 emissions", "C. Increasing fishing", "D. Building artificial reefs"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Shell formation becomes more energetically ________ as acidification increases.", answer: "costly" },
          { id: 24, type: "summary", text: "Complete: Fish ________ and sensory capabilities can be altered by acidification.", answer: "behavior" },
          { id: 25, type: "summary", text: "Complete: Species with short generation times may ________ more readily.", answer: "adapt" },
          { id: 26, type: "summary", text: "Complete: Only emission reductions can ________ ocean chemistry.", answer: "stabilize" }
        ]
      },
      {
        id: "P3",
        title: "Urbanization and Biodiversity",
        wordCount: 840,
        text: `Cities are often perceived as ecological wastelands, but this view oversimplifies a more complex reality. Urban areas do transform natural landscapes and eliminate many species, yet they also create novel ecosystems that support diverse communities of organisms adapted to urban conditions. Understanding how biodiversity responds to urbanization has become increasingly important as the world's population concentrates in metropolitan regions and as cities seek to enhance their ecological functioning.

Urbanization affects biodiversity through multiple mechanisms. Habitat conversion replaces natural vegetation with buildings, pavement, and managed landscapes. Fragmentation isolates remaining habitat patches, limiting movement and gene flow among populations. Altered microclimates—the urban heat island effect, modified humidity, changed wind patterns—create conditions different from surrounding regions. Pollution of air, water, and soil adds chemical stresses. Artificial lighting disrupts natural cycles for many organisms.

Despite these pressures, cities support substantial biodiversity. Urban green spaces—parks, gardens, cemeteries, vacant lots—provide habitat for numerous species. Some organisms thrive in urban environments, exploiting resources unavailable elsewhere: buildings substitute for cliff faces, food waste supports populations of scavengers, ornamental plantings provide nectar and seeds. The urban fauna includes familiar species like pigeons and rats but also surprising diversity in insects, birds, and even mammals that most residents never notice.

The composition of urban biological communities differs systematically from those in natural habitats. Generalist species—those tolerant of varied conditions and resources—tend to succeed while specialists decline. Non-native species often comprise larger proportions of urban flora and fauna, having been deliberately introduced or arrived accidentally and found cities hospitable. This biotic homogenization means that cities worldwide increasingly share similar sets of species even when surrounding regions differ greatly.

Urban ecology has emerged as a scientific discipline studying these patterns and processes. Research examines how landscape features—green space size, connectivity, vegetation structure—influence which species persist in cities. Studies track how urban populations evolve in response to urban selection pressures, from changed behaviors to physiological adaptations to altered genetics. Understanding these dynamics informs efforts to design cities that better support biodiversity.

The concept of urban ecosystem services highlights practical reasons for conserving urban biodiversity. Vegetation provides cooling that reduces energy demand for air conditioning. Green infrastructure manages stormwater, reducing flood risk and treatment costs. Urban trees improve air quality and sequester carbon. Pollinator populations support urban gardens and agriculture. These services have economic value, providing justification for investments in urban nature beyond aesthetic and ethical considerations.

Cities are also increasingly recognized as important for conservation itself. Urban populations can connect with nature through local experiences, building environmental awareness and support for conservation. Some threatened species find refuge in urban habitats protected from pressures affecting rural populations. Urban areas can serve as stepping stones in ecological networks, facilitating movement across fragmented landscapes. Integrating biodiversity considerations into urban planning represents both a challenge and an opportunity as urbanization continues worldwide.`,
        questions: [
          { id: 27, type: "tfng", text: "Cities are simply ecological wastelands with no biodiversity.", answer: "False" },
          { id: 28, type: "tfng", text: "Urban heat islands create conditions different from surrounding areas.", answer: "True" },
          { id: 29, type: "tfng", text: "Specialist species tend to thrive in urban environments.", answer: "False" },
          { id: 30, type: "tfng", text: "Biotic homogenization makes cities worldwide more similar.", answer: "True" },
          { id: 31, type: "tfng", text: "Urban vegetation can reduce energy demand for cooling.", answer: "True" },
          { id: 32, type: "matching", text: "Species tolerant of varied conditions", answer: "generalists" },
          { id: 33, type: "matching", text: "Highlights practical reasons for urban biodiversity", answer: "ecosystem services" },
          { id: 34, type: "matching", text: "Studies patterns of life in cities", answer: "urban ecology" },
          { id: 35, type: "mcq", text: "What do buildings substitute for some species?", options: ["A. Trees", "B. Cliff faces", "C. Rivers", "D. Forests"], answer: "B" },
          { id: 36, type: "mcq", text: "What happens to non-native species in cities?", options: ["A. They always fail", "B. They often comprise larger proportions", "C. They become native", "D. They immediately leave"], answer: "B" },
          { id: 37, type: "mcq", text: "How can urban areas serve in ecological networks?", options: ["A. As barriers", "B. As final destinations", "C. As stepping stones", "D. As dead ends"], answer: "C" },
          { id: 38, type: "mcq", text: "What do urban trees help improve?", options: ["A. Traffic flow", "B. Air quality", "C. Population density", "D. Building height"], answer: "B" },
          { id: 39, type: "short", text: "What effect describes altered urban temperatures? (THREE WORDS)", answer: "urban heat island" },
          { id: 40, type: "short", text: "What type of infrastructure manages stormwater? (ONE WORD)", answer: "green" }
        ]
      }
    ]
  },
  // ============================================================
  // R13 - INTERMEDIATE (Band 7.5)
  // ============================================================
  {
    id: "R13",
    level: "Intermediate",
    bandTarget: "7.5",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Language and Thought",
        wordCount: 870,
        text: `The relationship between language and thought has fascinated philosophers and scientists for centuries. Does the language we speak shape how we perceive and understand the world? Or does language merely express thoughts that exist independently of linguistic form? These questions, central to the field of linguistic relativity, have generated extensive research and ongoing debate, with implications extending from cognitive science to education and cross-cultural communication.

The strongest version of linguistic relativity, associated with Benjamin Lee Whorf, proposed that language determines thought—that speakers of different languages literally perceive reality differently because their linguistic categories differ. Whorf drew on his study of the Hopi language to argue that its grammatical structures led Hopi speakers to conceptualize time fundamentally differently from speakers of European languages. This strong determinism has largely been rejected by contemporary researchers, but weaker versions of the hypothesis continue to attract empirical investigation.

Contemporary research focuses on whether language influences thought in more subtle ways, even if it does not determine it. Cross-linguistic studies have examined domains including color perception, spatial reasoning, time concepts, and numerical cognition. If speakers of languages with different ways of encoding these concepts show systematic differences in non-linguistic cognitive tasks, this suggests that language shapes thought beyond mere communication.

Color perception has provided particularly rich evidence. Languages differ in how they divide the color spectrum into named categories. Russian distinguishes light blue (goluboy) and dark blue (siniy) as separate basic colors, while English treats both as variants of blue. Studies have found that Russian speakers are faster at distinguishing colors that cross this linguistic boundary, suggesting that language affects even low-level perceptual discrimination. Similar findings have emerged for other color distinctions in other languages.

Spatial language varies considerably across cultures. Some languages rely primarily on relative directions (left, right, front, back) while others use absolute directions (north, south, east, west) even for small-scale spatial descriptions. Speakers of absolute-direction languages maintain remarkable orientation awareness that speakers of relative-direction languages typically lack. This difference appears to reflect genuine cognitive consequences of linguistic habits rather than simply alternative ways of expressing the same underlying concepts.

The effects of language on thought appear to be domain-specific rather than global. Language may influence particular cognitive processes without restructuring cognition entirely. Effects are often relatively small and sometimes appear only under specific experimental conditions. The relationship is also bidirectional: thought influences language as much as language influences thought, making causal claims difficult to establish definitively.

The practical significance of linguistic relativity extends beyond academic debates. If language shapes thought, then language learning may expand cognitive capacities by providing new conceptual tools. Translation becomes not just a matter of finding equivalent expressions but of bridging potentially different ways of understanding. Multilingualism may confer cognitive benefits through exposure to multiple linguistic frameworks for organizing experience.

Research continues to refine understanding of how language and thought interact. Neither extreme position—that language completely determines thought or that it is merely a passive vehicle for independent thoughts—appears tenable. The emerging view recognizes language as one influence among many that shape human cognition, powerful enough to matter but not so powerful as to imprison speakers within linguistic categories.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to linguistic relativity", "ii. Color perception studies", "iii. Spatial language differences", "iv. Practical applications"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Contemporary research methods", "ii. Whorf's strong determinism", "iii. Russian color terms", "iv. Bidirectional effects"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Current subtle influence research", "ii. Hopi time concepts", "iii. Translation challenges", "iv. Cognitive benefits"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Spatial reasoning", "ii. Color perception evidence", "iii. Numerical cognition", "iv. Domain specificity"], answer: "ii" },
          { id: 5, type: "tfng", text: "Strong linguistic determinism is widely accepted today.", answer: "False" },
          { id: 6, type: "tfng", text: "Russian has separate basic color terms for light and dark blue.", answer: "True" },
          { id: 7, type: "tfng", text: "Effects of language on thought are global rather than domain-specific.", answer: "False" },
          { id: 8, type: "tfng", text: "The relationship between language and thought is bidirectional.", answer: "True" },
          { id: 9, type: "tfng", text: "Language completely determines all thought processes.", answer: "False" },
          { id: 10, type: "short", text: "Who is associated with strong linguistic determinism? (SURNAME)", answer: "Whorf" },
          { id: 11, type: "short", text: "What Russian word means light blue?", answer: "goluboy" },
          { id: 12, type: "short", text: "What type of directions do some languages use for small-scale space? (ONE WORD)", answer: "absolute" },
          { id: 13, type: "short", text: "What may language learning expand according to the passage? (TWO WORDS)", answer: "cognitive capacities" }
        ]
      },
      {
        id: "P2",
        title: "Agricultural Innovation and Food Systems",
        wordCount: 850,
        text: `Agricultural innovation has transformed humanity's relationship with food production over millennia, from the Neolithic revolution that initiated farming to the biotechnology advances of recent decades. Each wave of innovation has increased yields, reduced labor requirements, and enabled population growth, while also generating new challenges and controversies. Understanding the trajectory of agricultural innovation illuminates both the achievements that sustain current populations and the decisions shaping future food systems.

The Green Revolution of the mid-twentieth century represents perhaps the most dramatic recent transformation. High-yielding crop varieties, developed through selective breeding and requiring inputs of fertilizers, pesticides, and irrigation, doubled or tripled yields of wheat, rice, and other staples across Asia and Latin America. This productivity surge averted predicted famines and enabled population growth that would otherwise have been unsustainable. The architect of these advances, Norman Borlaug, received the Nobel Peace Prize for his contribution to food security.

However, the Green Revolution also had significant costs and limitations. Input-intensive agriculture depleted groundwater, degraded soils, and contributed to pollution. Benefits were unevenly distributed, often favoring larger farms that could afford required inputs while marginalizing smallholders. Critics argued that the focus on yield maximization neglected nutrition, sustainability, and social equity dimensions of food security. These critiques inform contemporary debates about agricultural development paths.

Biotechnology has introduced new capabilities and controversies. Genetic modification enables introduction of traits—pest resistance, herbicide tolerance, enhanced nutrition—that conventional breeding cannot achieve or would require many generations to develop. Proponents argue that biotechnology offers essential tools for feeding growing populations under climate change constraints. Critics raise concerns about environmental risks, corporate control of seeds, and the adequacy of regulatory oversight. Public acceptance varies considerably across regions and cultures.

Precision agriculture applies information technology to farming. GPS-guided equipment, sensor-based monitoring, drone imagery, and data analytics enable management tailored to variation within fields rather than uniform treatment of entire areas. This precision can reduce input use while maintaining yields, addressing both economic and environmental objectives. However, adoption requires capital investment and technical capacity that may exclude smaller operations.

Agroecological approaches offer an alternative paradigm emphasizing ecological principles. Rather than maximizing yields through external inputs, agroecology works with natural processes—nutrient cycling, biological pest control, crop diversity—to maintain productive and resilient systems. Proponents argue that agroecology can achieve comparable yields while providing environmental benefits and supporting small-scale farmers. Critics question whether these methods can scale to meet global food demands.

The future of agricultural innovation will likely involve multiple approaches suited to different contexts. Industrial systems producing commodities for global markets face different constraints and opportunities than smallholder farms providing local food security. Climate adaptation requires innovation across all systems. Balancing productivity, sustainability, equity, and resilience presents challenges that no single technological approach can resolve. The choices made about research priorities, intellectual property, and agricultural policy will shape what food systems emerge and whom they serve.`,
        questions: [
          { id: 14, type: "yng", text: "The Green Revolution more than doubled yields of some crops.", answer: "Yes" },
          { id: 15, type: "yng", text: "Norman Borlaug received the Nobel Prize in Chemistry.", answer: "No" },
          { id: 16, type: "yng", text: "Public acceptance of biotechnology is uniform worldwide.", answer: "No" },
          { id: 17, type: "yng", text: "Precision agriculture requires capital investment.", answer: "Yes" },
          { id: 18, type: "yng", text: "A single technological approach can resolve all agricultural challenges.", answer: "No" },
          { id: 19, type: "mcq", text: "What did the Green Revolution's input-intensive agriculture deplete?", options: ["A. Crop varieties", "B. Groundwater", "C. Labor supply", "D. Market demand"], answer: "B" },
          { id: 20, type: "mcq", text: "What can genetic modification introduce?", options: ["A. Only natural traits", "B. Conventional breeding results", "C. Traits breeding cannot achieve", "D. Reduced yields"], answer: "C" },
          { id: 21, type: "mcq", text: "What does precision agriculture use for management?", options: ["A. Uniform treatment", "B. GPS and sensors", "C. Manual inspection only", "D. Traditional methods"], answer: "B" },
          { id: 22, type: "mcq", text: "What does agroecology emphasize?", options: ["A. External inputs", "B. Ecological principles", "C. Maximum yields only", "D. Single crop focus"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Green Revolution benefits were unevenly ________ among farmers.", answer: "distributed" },
          { id: 24, type: "summary", text: "Complete: Biotechnology critics raise concerns about corporate ________ of seeds.", answer: "control" },
          { id: 25, type: "summary", text: "Complete: Agroecology works with natural ________ rather than external inputs.", answer: "processes" },
          { id: 26, type: "summary", text: "Complete: Climate ________ requires innovation across all agricultural systems.", answer: "adaptation" }
        ]
      },
      {
        id: "P3",
        title: "Social Media and Democratic Discourse",
        wordCount: 860,
        text: `Social media platforms have fundamentally altered how information spreads and public opinion forms in democratic societies. Initially celebrated for their potential to democratize discourse and empower citizen voices, these platforms have increasingly drawn criticism for effects that may undermine rather than enhance democratic deliberation. Understanding both the opportunities and challenges social media presents for democracy has become essential as these technologies permeate political life worldwide.

The democratic promise of social media rests on lowered barriers to participation. Anyone with internet access can publish views, organize with like-minded others, and potentially reach large audiences without the gatekeeping of traditional media. Social movements from the Arab Spring to Black Lives Matter have leveraged these capabilities to mobilize supporters and draw attention to causes. Political candidates can communicate directly with constituents, bypassing media intermediaries who previously controlled political messaging.

However, structural features of social media platforms create dynamics that may not serve democratic deliberation well. Algorithmic curation prioritizes content that generates engagement, often emotional or controversial material, rather than informative or balanced coverage. Echo chambers and filter bubbles can insulate users from opposing viewpoints, reinforcing existing beliefs rather than exposing users to the diversity of perspectives that democratic theory considers valuable. The speed and volume of social media discourse may favor reaction over reflection.

Misinformation and disinformation spread readily through social media networks. False claims can achieve viral reach before fact-checkers respond, and corrections rarely reach as many people as original falsehoods. Foreign actors have exploited these vulnerabilities to interfere in elections and inflame social divisions. Even without deliberate manipulation, the sheer volume of information makes distinguishing reliable from unreliable sources increasingly difficult for ordinary users.

The business models of major platforms create misaligned incentives. Advertising revenue depends on user attention, creating pressure to maximize engagement regardless of content quality. Platform companies have been reluctant to police content aggressively, citing free speech concerns and the practical difficulties of moderating billions of posts. Yet their algorithmic amplification decisions inevitably shape what information reaches users, making neutrality claims problematic.

Regulatory responses have emerged but remain contested. Some jurisdictions have imposed requirements for content moderation, transparency about advertising, and accountability for platform decisions. Others emphasize market solutions or user responsibility. The global reach of platforms complicates national regulation, as content accessible worldwide cannot be easily governed by any single jurisdiction. Debates continue about appropriate balances between speech freedom, platform responsibility, and government oversight.

The relationship between social media and democracy continues to evolve as platforms, users, and regulators adapt. Technical changes—modified algorithms, new features, improved detection of manipulation—may address some concerns. Media literacy education could help users navigate information environments more critically. Democratic institutions may develop resilience to social media's disruptive effects. The ultimate impact of social media on democracy will depend on choices made by platforms, governments, and citizens about how these powerful technologies are designed, governed, and used.`,
        questions: [
          { id: 27, type: "tfng", text: "Social media was initially celebrated for democratizing discourse.", answer: "True" },
          { id: 28, type: "tfng", text: "Algorithmic curation prioritizes balanced coverage.", answer: "False" },
          { id: 29, type: "tfng", text: "Corrections to false claims typically reach more people than the original.", answer: "False" },
          { id: 30, type: "tfng", text: "Platform advertising revenue depends on user attention.", answer: "True" },
          { id: 31, type: "tfng", text: "National regulation can easily govern global platform content.", answer: "False" },
          { id: 32, type: "matching", text: "Insulate users from opposing viewpoints", answer: "echo chambers" },
          { id: 33, type: "matching", text: "Prioritizes engaging content", answer: "algorithmic curation" },
          { id: 34, type: "matching", text: "Could help users navigate information critically", answer: "media literacy" },
          { id: 35, type: "mcq", text: "What did the Arab Spring leverage?", options: ["A. Traditional media only", "B. Social media capabilities", "C. Government channels", "D. Print advertising"], answer: "B" },
          { id: 36, type: "mcq", text: "What have foreign actors exploited?", options: ["A. Strong moderation", "B. Platform vulnerabilities", "C. Accurate information", "D. User verification"], answer: "B" },
          { id: 37, type: "mcq", text: "Why are platform neutrality claims problematic?", options: ["A. Platforms don't exist", "B. Users control everything", "C. Algorithms shape what users see", "D. Content is random"], answer: "C" },
          { id: 38, type: "mcq", text: "What will determine social media's democratic impact?", options: ["A. Technology alone", "B. Choices by platforms, governments, and citizens", "C. Automatic processes", "D. Historical patterns only"], answer: "B" },
          { id: 39, type: "short", text: "What type of bubbles can insulate users from diverse views? (ONE WORD)", answer: "filter" },
          { id: 40, type: "short", text: "What spreads readily through social media networks? (ONE WORD)", answer: "misinformation" }
        ]
      }
    ]
  }
];
