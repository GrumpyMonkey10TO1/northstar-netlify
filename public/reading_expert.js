// ============================================================
// READING TESTS - EXPERT LEVEL (R26-R33)
// Band Target: 8.5-9.0
// Migrate North Academy - Evolve Tier
// ============================================================

const READING_TESTS_EXPERT = [

  // ============================================================
  // R26 - EXPERT LEVEL (Band 8.5-9.0)
  // ============================================================
  {
    id: "R26",
    level: "Expert",
    bandTarget: "8.5-9.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Scientific Reproducibility Crisis",
        wordCount: 870,
        text: `Science depends on reproducibility—the ability to obtain consistent results when experiments are repeated under similar conditions. Yet concerns have mounted that a substantial proportion of published research findings may not replicate, undermining the self-correcting mechanisms on which scientific credibility depends. This "reproducibility crisis" has prompted introspection about research practices, incentive structures, and the institutional arrangements governing scientific inquiry.

The scope of reproducibility problems varies across disciplines but appears substantial in several fields. Psychology's replication crisis gained prominence when large-scale efforts found that fewer than half of published findings could be reproduced. Similar concerns have emerged in biomedical research, where pharmaceutical companies reported that most academic studies they attempted to replicate failed. Economics, political science, and other fields have conducted their own replication efforts with mixed results. While some methodologists argue that crisis rhetoric overstates problems, few dispute that reproducibility rates fall below what scientific norms would suggest.

Multiple factors contribute to reproducibility failures. Publication bias favors statistically significant findings over null results, creating literature that overrepresents positive findings that may not generalize. Researcher degrees of freedom—the numerous analytical choices involved in conducting studies—enable results to be achieved that appear significant but reflect analytical flexibility rather than robust phenomena. Small sample sizes produce unreliable estimates susceptible to random variation. Outright fraud remains rare but contributes to some failures.

Incentive structures in academic science may exacerbate these problems. Career advancement depends on publication in high-impact journals, which preferentially publish novel and striking findings. The pressure to publish creates incentives for cutting corners, selectively reporting favorable results, and overselling significance. Grant funding similarly rewards bold claims over incremental findings or replication studies. These incentives may inadvertently select for practices that reduce reproducibility.

Methodological reforms have been proposed and increasingly implemented. Pre-registration of studies and analysis plans constrains researcher degrees of freedom by committing to methods before data collection. Registered reports receive peer review and acceptance commitments before results are known, reducing publication bias. Larger sample sizes and multi-site studies improve reliability. Open data and code enable verification and reanalysis. These reforms impose costs in flexibility and efficiency but may improve the evidential value of published research.

Institutional changes complement methodological reforms. Some journals now require or encourage pre-registration and data sharing. Funding agencies have begun supporting replication studies. Metrics for researcher evaluation are expanding beyond publication counts in high-impact journals. Whether these changes will prove sufficient to address underlying incentive problems remains uncertain; structural pressures toward publishable findings may resist incremental reform.

The reproducibility crisis has raised deeper questions about the nature of scientific knowledge. If much of what appears in scientific literature cannot be reproduced, what confidence should policymakers, practitioners, and the public place in scientific claims? Some argue that current problems reveal science working as intended, identifying and correcting errors over time. Others see systemic dysfunction requiring fundamental reform. The crisis has at minimum highlighted that scientific knowledge production involves social processes susceptible to incentive distortions, not merely objective discovery of natural truths.`,
        questions: [
          { id: 1, type: "tfng", text: "Science depends on reproducibility for its credibility.", answer: "True" },
          { id: 2, type: "tfng", text: "Most published psychology findings replicated in large-scale efforts.", answer: "False" },
          { id: 3, type: "tfng", text: "Publication bias favors null results over significant findings.", answer: "False" },
          { id: 4, type: "tfng", text: "Academic incentives may inadvertently reduce reproducibility.", answer: "True" },
          { id: 5, type: "tfng", text: "Pre-registration constrains analytical flexibility.", answer: "True" },
          { id: 6, type: "short", text: "What type of bias favors significant findings over null results? (ONE WORD)", answer: "publication" },
          { id: 7, type: "short", text: "What refers to numerous analytical choices in studies? (THREE WORDS)", answer: "researcher degrees freedom" },
          { id: 8, type: "short", text: "What type of reports receive acceptance before results are known? (ONE WORD)", answer: "registered" },
          { id: 9, type: "short", text: "What do funding agencies now support according to the passage? (TWO WORDS)", answer: "replication studies" },
          { id: 10, type: "mcq", text: "What did pharmaceutical companies report about academic studies?", options: ["A. Most replicated successfully", "B. Most failed to replicate", "C. All were fraudulent", "D. None were tested"], answer: "B" },
          { id: 11, type: "mcq", text: "What does career advancement in academia depend on?", options: ["A. Teaching quality", "B. Publication in high-impact journals", "C. Replication studies", "D. Negative results"], answer: "B" },
          { id: 12, type: "mcq", text: "What do larger samples and multi-site studies improve?", options: ["A. Publication speed", "B. Reliability", "C. Cost efficiency", "D. Novelty"], answer: "B" },
          { id: 13, type: "mcq", text: "What has the crisis highlighted about science?", options: ["A. Pure objectivity", "B. Social processes susceptible to distortion", "C. Perfect self-correction", "D. No need for reform"], answer: "B" }
        ]
      },
      {
        id: "P2",
        title: "Cryptocurrency and Financial Systems",
        wordCount: 850,
        text: `Cryptocurrencies have emerged as a novel form of digital asset that challenges conventional understandings of money, finance, and monetary governance. Bitcoin, launched in 2009, introduced blockchain technology that enables peer-to-peer transactions without intermediary institutions. The subsequent proliferation of cryptocurrencies, the development of decentralized finance applications, and the exploration of central bank digital currencies have raised fundamental questions about the future of monetary systems.

The technological innovation underlying cryptocurrencies is the blockchain—a distributed ledger maintained across a network of computers rather than by a central authority. Transactions are verified through cryptographic consensus mechanisms and recorded in blocks that are chained together chronologically. This architecture eliminates the need for trusted intermediaries like banks to validate transactions, potentially reducing costs and increasing access while creating a transparent, tamper-resistant record.

Proponents argue that cryptocurrencies offer significant advantages. Borderless transactions enable efficient cross-border payments without the fees and delays of traditional systems. Financial inclusion could extend to unbanked populations who lack access to conventional banking. Programmable money through smart contracts enables new financial applications. Decentralization reduces dependence on institutions that may be incompetent, corrupt, or exclusionary. Some see cryptocurrency as a hedge against inflation and government monetary policy.

Critics identify substantial problems. Cryptocurrency values are extremely volatile, undermining their utility as stores of value or media of exchange. Energy consumption for proof-of-work consensus mechanisms like Bitcoin's has raised environmental concerns. Criminal uses for money laundering, ransomware payments, and illicit markets have attracted regulatory scrutiny. Technical complexity and security vulnerabilities have resulted in substantial losses for users. Decentralization claims may be overstated when mining and development are concentrated among relatively few actors.

Regulatory responses have varied across jurisdictions. Some countries have banned cryptocurrency trading and mining. Others have developed frameworks for regulating exchanges, stablecoins, and decentralized applications. The global and decentralized nature of cryptocurrency networks complicates national regulation; activity banned in one jurisdiction may simply migrate elsewhere. International coordination remains limited despite recognition that cross-border consistency would enhance effectiveness.

Central bank digital currencies represent a different approach—applying some blockchain-inspired technology while maintaining central bank control over monetary systems. Several central banks are exploring or piloting digital currencies that would provide electronic central bank money directly to the public. Proponents argue this could improve payment systems and preserve monetary sovereignty against private cryptocurrencies. Critics raise concerns about privacy, financial stability, and appropriate central bank roles.

The long-term significance of cryptocurrency remains uncertain. Revolutionary potential to transform finance exists alongside possibilities of regulatory containment, technological obsolescence, or market collapse. Whether cryptocurrencies represent the future of money, a speculative bubble, a useful niche technology, or primarily a vehicle for financial crime likely depends on technological development, regulatory choices, and adoption patterns that remain unpredictable. The fundamental questions cryptocurrencies raise about money, trust, and institutional authority will persist regardless of particular currencies' fates.`,
        questions: [
          { id: 14, type: "yng", text: "Bitcoin was launched in 2009.", answer: "Yes" },
          { id: 15, type: "yng", text: "Blockchain requires central authorities to validate transactions.", answer: "No" },
          { id: 16, type: "yng", text: "Cryptocurrency values are highly stable.", answer: "No" },
          { id: 17, type: "yng", text: "All countries have identical cryptocurrency regulations.", answer: "No" },
          { id: 18, type: "yng", text: "Several central banks are exploring digital currencies.", answer: "Yes" },
          { id: 19, type: "mcq", text: "What does blockchain technology eliminate the need for?", options: ["A. Computers", "B. Trusted intermediaries", "C. Transactions", "D. Currency"], answer: "B" },
          { id: 20, type: "mcq", text: "What has Bitcoin's energy consumption raised concerns about?", options: ["A. Speed", "B. Security", "C. Environment", "D. Adoption"], answer: "C" },
          { id: 21, type: "mcq", text: "What happens to banned activity in one jurisdiction?", options: ["A. It stops completely", "B. It may migrate elsewhere", "C. It becomes legal", "D. It increases there"], answer: "B" },
          { id: 22, type: "mcq", text: "What would central bank digital currencies maintain?", options: ["A. Decentralization", "B. Anonymous transactions", "C. Central bank monetary control", "D. Private currency dominance"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Transactions are verified through cryptographic ________ mechanisms.", answer: "consensus" },
          { id: 24, type: "summary", text: "Complete: Financial ________ could extend to unbanked populations.", answer: "inclusion" },
          { id: 25, type: "summary", text: "Complete: International ________ on cryptocurrency regulation remains limited.", answer: "coordination" },
          { id: 26, type: "summary", text: "Complete: The fundamental questions about money, trust, and institutional ________ will persist.", answer: "authority" }
        ]
      },
      {
        id: "P3",
        title: "Collective Intelligence and Wisdom of Crowds",
        wordCount: 860,
        text: `Under certain conditions, groups can generate judgments and solutions superior to those that even their most capable individual members could produce alone. This phenomenon—variously termed collective intelligence, wisdom of crowds, or swarm intelligence—has attracted attention from researchers studying decision-making, organizations seeking to harness distributed knowledge, and technologists designing platforms for collaboration. Understanding when and why collective intelligence emerges, and when it fails, has both theoretical and practical significance.

The classic demonstration of collective wisdom involves estimation tasks where individual guesses vary around the true value. When Francis Galton analyzed weight-estimation contests at agricultural fairs, he found that the median guess was remarkably close to actual weight despite individual guesses ranging widely. Similar accuracy has been observed in prediction markets, survey aggregation, and many other contexts. The statistical explanation is straightforward: random errors cancel when averaged across many independent estimates, while any signal present in individual judgments is retained.

However, collective intelligence depends critically on conditions that are not always satisfied. Independence of judgment is essential—if individuals influence each other, errors may correlate rather than cancel, and herding can drive groups toward consensus that reflects social dynamics rather than accurate assessment. Diversity of perspective brings different information and analytical approaches to bear; homogeneous groups may share blind spots. Appropriate aggregation mechanisms must combine individual inputs in ways that capture relevant signal; poor aggregation can discard valuable information.

Group problem-solving exhibits different dynamics than estimation. Tasks requiring creative solutions or complex reasoning may benefit from interaction and deliberation that estimation does not need. Diverse groups can generate more candidate solutions and identify flaws in proposals that homogeneous groups might miss. However, group dynamics can suppress dissent, advantage confident but wrong voices, and produce compromise solutions inferior to those individual members might develop independently.

Digital platforms have created new possibilities for collective intelligence at scale. Wikipedia mobilizes thousands of contributors to produce an encyclopedia that rivals traditional expert-produced references. Open-source software development coordinates global communities in creating complex programs. Crowdsourcing platforms aggregate judgments or labor from distributed participants. These successes demonstrate collective intelligence potential while also revealing vulnerabilities to manipulation, quality control challenges, and coordination difficulties.

Organizational applications of collective intelligence principles face implementation challenges. Prediction markets within firms have shown promise for forecasting but encounter resistance from managers uncomfortable with results that contradict their preferences. Idea markets and innovation tournaments attempt to surface insights from throughout organizations but struggle to overcome hierarchy and incentive problems. Collective intelligence may threaten existing authority structures, limiting adoption regardless of potential benefits.

The relationship between individual expertise and collective wisdom remains complex. For tasks requiring specialized knowledge, expert judgment may outperform crowd aggregation. Yet experts can also exhibit systematic biases, overconfidence, and groupthink that collective approaches might avoid. Understanding which problems benefit from expertise versus distributed judgment, and how to combine both effectively, represents an ongoing challenge for researchers and practitioners seeking to improve decision-making through collective means.`,
        questions: [
          { id: 27, type: "tfng", text: "Groups always outperform their best individual members.", answer: "False" },
          { id: 28, type: "tfng", text: "Random errors cancel when averaging independent estimates.", answer: "True" },
          { id: 29, type: "tfng", text: "Independence of judgment is essential for collective wisdom.", answer: "True" },
          { id: 30, type: "tfng", text: "Wikipedia demonstrates collective intelligence at scale.", answer: "True" },
          { id: 31, type: "tfng", text: "Prediction markets face no organizational resistance.", answer: "False" },
          { id: 32, type: "matching", text: "Demonstrated collective accuracy in estimation contests", answer: "Francis Galton" },
          { id: 33, type: "matching", text: "Can drive groups toward inaccurate consensus", answer: "herding" },
          { id: 34, type: "matching", text: "Brings different information and approaches to problems", answer: "diversity" },
          { id: 35, type: "mcq", text: "What must individual judgments have for collective wisdom?", options: ["A. Complete accuracy", "B. Independence", "C. Unanimity", "D. Expert training"], answer: "B" },
          { id: 36, type: "mcq", text: "What can group dynamics suppress?", options: ["A. Consensus", "B. Dissent", "C. Participation", "D. Speed"], answer: "B" },
          { id: 37, type: "mcq", text: "What might collective intelligence threaten?", options: ["A. Problem-solving", "B. Existing authority structures", "C. Technological development", "D. Collaboration"], answer: "B" },
          { id: 38, type: "mcq", text: "What can experts exhibit that collective approaches might avoid?", options: ["A. Accuracy", "B. Systematic biases and overconfidence", "C. Diversity", "D. Independence"], answer: "B" },
          { id: 39, type: "short", text: "What type of markets forecast outcomes within organizations? (ONE WORD)", answer: "prediction" },
          { id: 40, type: "short", text: "What term describes correlated errors from social influence? (ONE WORD)", answer: "herding" }
        ]
      }
    ]
  },

  // ============================================================
  // R27 - EXPERT (Band 8.5-9.0)
  // ============================================================
  {
    id: "R27",
    level: "Expert",
    bandTarget: "8.5-9.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Dark Matter and Cosmological Models",
        wordCount: 880,
        text: `The universe presents a profound puzzle: the matter we can observe directly accounts for only a small fraction of what gravitational effects suggest must exist. This discrepancy, evident since the 1930s but now confirmed through multiple independent lines of evidence, points to the existence of "dark matter"—material that interacts gravitationally but not electromagnetically, rendering it invisible to telescopes detecting light. Understanding dark matter has become one of the central challenges in cosmology and particle physics.

Fritz Zwicky first identified the problem in 1933 while studying the Coma galaxy cluster. The velocities of galaxies within the cluster were far too high to be explained by the gravitational attraction of visible matter alone; without additional mass, the cluster should have dispersed. Zwicky proposed that unseen "dunkle Materie" provided the missing gravitational pull. His conclusion was largely ignored for decades until Vera Rubin's meticulous observations of galaxy rotation curves in the 1970s revealed the same discrepancy at galactic scales.

Rotation curves show how orbital velocities vary with distance from galactic centers. For systems dominated by visible matter concentrated at centers, velocities should decline with distance following Keplerian dynamics. Instead, Rubin found that velocities remain roughly constant far beyond where visible matter ends, implying that galaxies are embedded in extended halos of invisible material. This pattern has been confirmed across thousands of galaxies, establishing dark matter halos as a generic feature of galactic structure.

Gravitational lensing provides independent evidence. Massive objects bend light passing near them, distorting images of background sources. The lensing effects of galaxy clusters reveal mass distributions far exceeding what visible matter can explain. Most dramatically, the Bullet Cluster—two galaxy clusters that have passed through each other—shows clear separation between the hot gas detected in X-rays and the mass distribution inferred from lensing, directly demonstrating that most cluster mass is not in normal matter.

The cosmic microwave background offers yet another confirmation. This radiation, emitted when the universe was 380,000 years old, carries imprints of density variations in the early universe. The specific pattern of these variations constrains the ratio of ordinary matter to dark matter, yielding estimates consistent with other methods: dark matter constitutes roughly five times as much mass as ordinary matter, comprising about 27 percent of the universe's total energy density.

Particle physics candidates for dark matter remain unidentified despite decades of searching. Weakly Interacting Massive Particles (WIMPs), predicted by supersymmetric extensions of the Standard Model, were long considered leading candidates, but sensitive experiments have failed to detect them. Axions, hypothetical particles proposed to solve problems in quantum chromodynamics, represent another possibility. Alternative explanations modifying gravitational theory rather than postulating new particles have been proposed but struggle to explain the full range of observations.

The nature of dark matter bears on fundamental questions about the universe's structure and evolution. Dark matter halos provided the gravitational seeds around which galaxies formed. The specific properties of dark matter particles—their mass, interactions, and production mechanisms—shaped the cosmic web of large-scale structure we observe. Resolving the dark matter puzzle would simultaneously illuminate particle physics beyond the Standard Model and cosmological history on the grandest scales.`,
        questions: [
          { id: 1, type: "tfng", text: "Dark matter interacts electromagnetically.", answer: "False" },
          { id: 2, type: "tfng", text: "Fritz Zwicky first identified the dark matter problem in 1933.", answer: "True" },
          { id: 3, type: "tfng", text: "Galaxy rotation curves show velocities declining with distance.", answer: "False" },
          { id: 4, type: "tfng", text: "The Bullet Cluster demonstrates separation between gas and mass.", answer: "True" },
          { id: 5, type: "tfng", text: "WIMPs have been directly detected in experiments.", answer: "False" },
          { id: 6, type: "short", text: "Who studied galaxy rotation curves in the 1970s? (TWO WORDS)", answer: "Vera Rubin" },
          { id: 7, type: "short", text: "What percentage of the universe's energy density is dark matter? (NUMBER)", answer: "27" },
          { id: 8, type: "short", text: "What radiation carries imprints from the early universe? (THREE WORDS)", answer: "cosmic microwave background" },
          { id: 9, type: "mcq", text: "What did Zwicky observe about galaxy cluster velocities?", options: ["A. Too slow", "B. Too high", "C. Constant", "D. Zero"], answer: "B" },
          { id: 10, type: "mcq", text: "What effect does gravitational lensing demonstrate?", options: ["A. Light absorption", "B. Light bending by mass", "C. Dark energy", "D. Particle decay"], answer: "B" },
          { id: 11, type: "mcq", text: "What provided gravitational seeds for galaxy formation?", options: ["A. Ordinary matter", "B. Dark energy", "C. Dark matter halos", "D. Black holes"], answer: "C" },
          { id: 12, type: "mcq", text: "What do alternative theories modify instead of postulating particles?", options: ["A. Electromagnetic theory", "B. Gravitational theory", "C. Thermodynamics", "D. Quantum mechanics"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Dark matter constitutes roughly ________ times as much mass as ordinary matter.", answer: "five" }
        ]
      },
      {
        id: "P2",
        title: "Legal Systems and Economic Development",
        wordCount: 860,
        text: `The relationship between legal institutions and economic development has attracted substantial scholarly attention, generating debates about whether particular legal traditions promote or impede growth. Research has examined how property rights, contract enforcement, regulatory frameworks, and judicial systems affect investment, entrepreneurship, and economic performance. While consensus exists that law matters for development, the specific mechanisms and optimal institutional arrangements remain contested.

The "legal origins" literature, pioneered by economists Rafael La Porta and colleagues, argued that common law systems, originating in England, better protect investors and property owners than civil law systems derived from French, German, or Scandinavian traditions. According to this view, common law's emphasis on precedent, judicial independence, and private ordering creates more flexible, market-friendly institutions than civil law's reliance on comprehensive codes and state regulation. Correlations between legal origin and financial development, investor protection, and government intervention supported these claims.

Critics have challenged the legal origins thesis on multiple grounds. Historical analysis suggests that the correlation between legal origin and economic outcomes reflects colonial legacies and path dependencies rather than inherent properties of legal traditions. Civil law countries like Germany and Nordic nations have achieved prosperity comparable to common law countries. The measures used to assess legal quality have been criticized as biased toward common law concepts. Moreover, legal traditions have converged substantially as countries have borrowed institutions across traditions.

Property rights occupy a central position in development economics. Secure property rights encourage investment by ensuring that investors can capture returns from their efforts. Clear titles facilitate transactions and enable property to serve as collateral for credit. Hernando de Soto influentially argued that the inability of the poor to establish formal property rights over their assets—houses in informal settlements, small businesses—excludes them from the economic benefits that property ownership enables in developed countries.

Contract enforcement similarly affects economic activity. Reliable judicial enforcement of agreements reduces transaction costs by enabling parties to engage with strangers without extensive precautions against breach. Where enforcement is uncertain, economic activity may be limited to relationships sustained by reputation, kinship, or other informal mechanisms. The quality of contract enforcement, measured by time, cost, and complexity of court proceedings, varies enormously across countries and correlates with economic outcomes.

Regulatory frameworks present tradeoffs between protecting public interests and imposing compliance costs that may deter economic activity. Excessive regulation can create opportunities for corruption, delay business formation, and favor established firms over new entrants. Yet insufficient regulation may enable fraud, environmental damage, worker exploitation, and systemic risks. Finding appropriate regulatory balances requires contextual judgment that simple prescriptions cannot capture.

The rule of law—the principle that legal rules apply equally to all and that government itself is bound by law—represents perhaps the most fundamental legal condition for development. Where law is applied arbitrarily, where powerful actors escape accountability, where legal outcomes are unpredictable, economic planning becomes difficult and investment risky. Building rule of law institutions in countries where they are weak has proven challenging, as formal legal changes may have limited effect without broader transformations in political culture and power relations.`,
        questions: [
          { id: 14, type: "yng", text: "Common law originated in France.", answer: "No" },
          { id: 15, type: "yng", text: "Civil law countries cannot achieve prosperity.", answer: "No" },
          { id: 16, type: "yng", text: "Secure property rights encourage investment.", answer: "Yes" },
          { id: 17, type: "yng", text: "Reliable contract enforcement reduces transaction costs.", answer: "Yes" },
          { id: 18, type: "yng", text: "Building rule of law institutions is straightforward.", answer: "No" },
          { id: 19, type: "mcq", text: "Who argued that legal origins affect development?", options: ["A. Hernando de Soto", "B. Rafael La Porta", "C. Fritz Zwicky", "D. Vera Rubin"], answer: "B" },
          { id: 20, type: "mcq", text: "What did de Soto argue about informal property?", options: ["A. It is preferable", "B. It excludes the poor from economic benefits", "C. It promotes development", "D. It requires no reform"], answer: "B" },
          { id: 21, type: "mcq", text: "What can excessive regulation create opportunities for?", options: ["A. Innovation", "B. Corruption", "C. Growth", "D. Competition"], answer: "B" },
          { id: 22, type: "mcq", text: "What does rule of law require regarding government?", options: ["A. Unlimited power", "B. Government is bound by law", "C. No regulation", "D. Arbitrary application"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Legal traditions have ________ substantially through borrowing.", answer: "converged" },
          { id: 24, type: "summary", text: "Complete: Property can serve as ________ for credit.", answer: "collateral" },
          { id: 25, type: "summary", text: "Complete: Where enforcement is uncertain, activity may be limited to ________ mechanisms.", answer: "informal" },
          { id: 26, type: "summary", text: "Complete: Formal legal changes may have limited effect without broader ________.", answer: "transformations" }
        ]
      },
      {
        id: "P3",
        title: "The Microbiome and Human Health",
        wordCount: 870,
        text: `The human body hosts trillions of microorganisms—bacteria, viruses, fungi, and other microbes—that collectively constitute the microbiome. Once viewed primarily as pathogens to be eliminated, these microbial communities are now recognized as essential partners in human physiology, affecting digestion, immunity, metabolism, and even brain function. Understanding the microbiome has emerged as one of the most rapidly advancing frontiers in biomedical research, with implications for treating conditions ranging from inflammatory bowel disease to mental health disorders.

The gut microbiome, the most extensively studied microbial community, contains hundreds of bacterial species in dynamic equilibrium shaped by diet, medications, environment, and host genetics. These bacteria perform functions the human body cannot accomplish alone: fermenting dietary fibers into short-chain fatty acids that nourish intestinal cells, synthesizing vitamins including K and B12, metabolizing drugs in ways that affect their efficacy, and training the immune system to distinguish threatening pathogens from beneficial commensals.

Dysbiosis—disruption of healthy microbial communities—has been associated with numerous diseases. Inflammatory bowel diseases like Crohn's disease and ulcerative colitis involve altered gut microbiomes and inappropriate immune responses to intestinal bacteria. Obesity correlates with microbiome compositions that extract more energy from food. Antibiotic use, while essential for treating infections, can devastate beneficial bacteria and enable harmful species to proliferate, sometimes causing severe complications like Clostridioides difficile infection.

The gut-brain axis represents a particularly intriguing research area. Gut bacteria produce neurotransmitters including serotonin, dopamine, and gamma-aminobutyric acid that may influence mood and behavior. Animal studies have demonstrated that microbiome composition affects anxiety, stress responses, and cognitive function. Human studies have found correlations between gut microbiome characteristics and depression, autism spectrum disorders, and neurodegenerative diseases, though causality remains difficult to establish.

Microbiome-based therapies are emerging from research insights. Fecal microbiota transplantation—transferring gut bacteria from healthy donors to patients—has proven remarkably effective for recurrent C. difficile infection and is being tested for other conditions. Probiotics containing beneficial bacterial strains aim to improve microbiome composition, though evidence for their effectiveness varies across strains and conditions. Prebiotics, dietary compounds that promote beneficial bacteria, represent another approach. More targeted interventions using defined bacterial combinations or bacterial metabolites are under development.

Methodological advances have enabled microbiome research's rapid progress. High-throughput DNA sequencing allows comprehensive characterization of microbial communities without requiring laboratory cultivation—important because many gut bacteria cannot be grown under standard conditions. Computational tools analyze the resulting massive datasets to identify patterns associated with health and disease. Germ-free animal models enable experiments testing causality that observational human studies cannot establish.

Despite progress, translating microbiome research into clinical practice faces challenges. The microbiome varies substantially among healthy individuals, complicating definitions of "normal" or "healthy" communities. Correlations between microbiome characteristics and disease do not establish causation. Interventions that work in animal models may not translate to humans. Regulatory frameworks for microbiome-based therapies remain under development. The field's eventual impact on medicine depends on overcoming these obstacles while managing expectations inflated by premature enthusiasm.`,
        questions: [
          { id: 27, type: "tfng", text: "The microbiome contains only bacteria.", answer: "False" },
          { id: 28, type: "tfng", text: "Gut bacteria can synthesize certain vitamins.", answer: "True" },
          { id: 29, type: "tfng", text: "Antibiotics have no effect on beneficial bacteria.", answer: "False" },
          { id: 30, type: "tfng", text: "Fecal transplantation is effective for C. difficile infection.", answer: "True" },
          { id: 31, type: "tfng", text: "All gut bacteria can be grown under standard laboratory conditions.", answer: "False" },
          { id: 32, type: "matching", text: "Disruption of healthy microbial communities", answer: "dysbiosis" },
          { id: 33, type: "matching", text: "Dietary compounds promoting beneficial bacteria", answer: "prebiotics" },
          { id: 34, type: "matching", text: "Connection between intestinal bacteria and brain function", answer: "gut-brain axis" },
          { id: 35, type: "mcq", text: "What do gut bacteria ferment into short-chain fatty acids?", options: ["A. Proteins", "B. Dietary fibers", "C. Fats", "D. Vitamins"], answer: "B" },
          { id: 36, type: "mcq", text: "What neurotransmitter do gut bacteria produce?", options: ["A. Insulin", "B. Serotonin", "C. Cortisol", "D. Adrenaline"], answer: "B" },
          { id: 37, type: "mcq", text: "What enabled comprehensive microbiome characterization?", options: ["A. Microscopy", "B. Laboratory cultivation", "C. DNA sequencing", "D. X-ray imaging"], answer: "C" },
          { id: 38, type: "mcq", text: "What challenge exists for microbiome research translation?", options: ["A. Too few studies", "B. Excessive funding", "C. Substantial individual variation", "D. Simple interventions"], answer: "C" },
          { id: 39, type: "short", text: "What term describes beneficial bacterial supplement strains? (ONE WORD)", answer: "probiotics" },
          { id: 40, type: "short", text: "What type of models enable causal experiments? (TWO WORDS)", answer: "germ-free" }
        ]
      }
    ]
  },

  // ============================================================
  // R28 - EXPERT (Band 8.5-9.0)
  // ============================================================
  {
    id: "R28",
    level: "Expert",
    bandTarget: "8.5-9.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Theories of Justice in Political Philosophy",
        wordCount: 880,
        text: `Justice stands as a central concept in political philosophy, yet its meaning and requirements remain deeply contested. Different theories of justice propose competing visions of how benefits and burdens should be distributed within society, what institutions are legitimate, and what individuals owe to one another and to their communities. These theoretical debates have practical implications for policies ranging from taxation to healthcare to criminal punishment.

Utilitarian approaches evaluate justice by consequences: just arrangements are those that maximize aggregate welfare or happiness. This view, associated with philosophers like Jeremy Bentham and John Stuart Mill, provides a seemingly clear criterion for assessing social arrangements but faces objections regarding its treatment of individuals. Utilitarianism might justify sacrificing minority interests for majority benefit, violating intuitions about individual rights. More sophisticated versions attempt to incorporate rights and other constraints while maintaining the basic consequentialist framework.

John Rawls's A Theory of Justice, published in 1971, revitalized social contract approaches and became the most influential work in political philosophy of the past century. Rawls proposed that just principles are those that rational individuals would choose from behind a "veil of ignorance"—not knowing their own place in society, their natural talents, or their conception of the good life. From this perspective, Rawls argued, individuals would choose principles ensuring basic liberties and permitting inequalities only when they benefit the least advantaged members of society.

Libertarian theories, associated with Robert Nozick and others, prioritize individual liberty and property rights over distributive patterns. On this view, distributions arising from voluntary transactions among rightful owners are just regardless of resulting inequalities. The state's legitimate functions are limited to protecting rights; redistribution through taxation amounts to forced labor. Libertarians challenge the assumption that societies collectively own resources to be distributed according to any pattern, arguing instead that individuals hold entitlements that others may not violate.

Communitarian critics argue that liberal theories like Rawls's rest on an inadequate conception of personhood. Individuals, communitarians maintain, are constituted by their communities; their identities, values, and very capacity for choice emerge from particular social contexts. Justice therefore cannot be determined from an abstract standpoint that strips away social attachments; it must reflect the meanings and traditions of specific communities. This perspective raises questions about universal human rights and the basis for criticizing unjust practices in different cultures.

Feminist philosophers have challenged the gender blindness of traditional justice theories. The public-private distinction that confines justice to political and economic institutions while treating family relations as beyond justice's scope has been criticized for ignoring systematic gender inequality. Care ethics proposes that relationships of care and responsibility, traditionally associated with women's work, should receive attention alongside rights and fairness in theorizing justice. These interventions have expanded the scope of what justice theories must address.

Contemporary debates engage questions that classical theories did not anticipate: justice toward future generations affected by current environmental practices, global justice across national boundaries, justice for members of other species. These extensions test the frameworks developed for domestic distributive questions and may require theoretical innovation. The plurality of justice theories reflects not merely academic disagreement but genuine difficulties in reconciling competing values—liberty, equality, community, desert—that any adequate theory must address.`,
        questions: [
          { id: 1, type: "tfng", text: "Utilitarianism evaluates justice by consequences.", answer: "True" },
          { id: 2, type: "tfng", text: "Rawls published A Theory of Justice in 1951.", answer: "False" },
          { id: 3, type: "tfng", text: "Libertarians support extensive redistribution through taxation.", answer: "False" },
          { id: 4, type: "tfng", text: "Communitarians believe individuals are constituted by communities.", answer: "True" },
          { id: 5, type: "tfng", text: "Feminist philosophers accept the traditional public-private distinction.", answer: "False" },
          { id: 6, type: "short", text: "Who proposed the veil of ignorance concept? (TWO WORDS)", answer: "John Rawls" },
          { id: 7, type: "short", text: "What ethics proposes attention to care relationships? (TWO WORDS)", answer: "care ethics" },
          { id: 8, type: "short", text: "Which philosopher is associated with libertarianism? (TWO WORDS)", answer: "Robert Nozick" },
          { id: 9, type: "mcq", text: "What does utilitarianism attempt to maximize?", options: ["A. Individual rights", "B. Aggregate welfare", "C. Property holdings", "D. Community traditions"], answer: "B" },
          { id: 10, type: "mcq", text: "What do libertarians view redistribution as?", options: ["A. Necessary justice", "B. Community building", "C. Forced labor", "D. Democratic choice"], answer: "C" },
          { id: 11, type: "mcq", text: "What do communitarians criticize about liberal theories?", options: ["A. Too much community focus", "B. Inadequate conception of personhood", "C. Excessive redistribution", "D. Ignoring consequences"], answer: "B" },
          { id: 12, type: "mcq", text: "What do contemporary debates address?", options: ["A. Only domestic issues", "B. Classical questions only", "C. Future generations and global justice", "D. Individual property only"], answer: "C" },
          { id: 13, type: "summary", text: "Complete: Rawls's work became the most ________ in political philosophy.", answer: "influential" }
        ]
      },
      {
        id: "P2",
        title: "Ocean Acidification and Marine Ecosystems",
        wordCount: 860,
        text: `The ocean has absorbed approximately thirty percent of anthropogenic carbon dioxide emissions since industrialization, moderating atmospheric accumulation and thus climate warming. However, this absorption has come at a cost: ocean chemistry is changing in ways that threaten marine ecosystems. As carbon dioxide dissolves in seawater, it forms carbonic acid, lowering pH in a process known as ocean acidification. The consequences for marine life, particularly organisms that build calcium carbonate shells and skeletons, are subjects of intensive research and growing concern.

Ocean pH has decreased by approximately 0.1 units since preindustrial times, representing a thirty percent increase in hydrogen ion concentration. While this change may seem small, it exceeds any pH fluctuation experienced over at least the past twenty million years and is occurring at a rate unprecedented in Earth's history. Projections suggest that continued emissions could reduce pH by an additional 0.3 to 0.4 units by century's end, with some regions experiencing even larger changes.

Calcifying organisms face the most direct threat. Corals, shellfish, many planktonic species, and other organisms build structures from calcium carbonate, which becomes harder to precipitate as ocean acidity increases. Laboratory experiments have demonstrated reduced calcification rates, weakened shells, and in some cases dissolution of existing structures under acidified conditions. However, responses vary among species, with some showing remarkable resilience while others are highly sensitive.

Coral reefs, already stressed by warming temperatures that cause bleaching, face compounding threats from acidification. Reef-building corals depend on calcification to maintain structures that provide habitat for the extraordinary biodiversity reef systems support. Reduced calcification combined with increased erosion could shift reefs from net accretion to net dissolution. Given that coral reefs support perhaps a quarter of all marine species and provide livelihoods for hundreds of millions of people, their degradation would have profound ecological and economic consequences.

Beyond calcification, acidification affects marine organisms through multiple pathways. Changes in seawater chemistry affect the availability of trace metals essential for biological processes. Some fish species show behavioral changes under acidified conditions, including impaired ability to detect predators. Photosynthetic organisms may be affected differently, with some potentially benefiting from increased carbon availability while others suffer from associated chemical changes. These varied effects make ecosystem-level predictions challenging.

Natural analogues provide insights into acidification effects. Volcanic carbon dioxide vents create localized low-pH conditions where researchers can study communities adapted to chronically acidified waters. These sites typically show reduced biodiversity and altered community composition, with calcifying species largely absent or reduced. While imperfect models for rapid global acidification, they suggest that substantial ecological reorganization may occur as oceans acidify.

Addressing ocean acidification ultimately requires reducing carbon dioxide emissions. The ocean will continue absorbing carbon dioxide as long as atmospheric concentrations exceed equilibrium levels, and acidification will persist for centuries even if emissions cease. Some researchers have proposed localized interventions such as adding alkalinity to neutralize acidity in particularly valuable areas, but such approaches could not address the global problem. Ocean acidification thus represents another dimension of the broader climate challenge, adding urgency to decarbonization efforts.`,
        questions: [
          { id: 14, type: "yng", text: "The ocean has absorbed about 30% of human CO2 emissions.", answer: "Yes" },
          { id: 15, type: "yng", text: "Ocean pH has increased since preindustrial times.", answer: "No" },
          { id: 16, type: "yng", text: "All calcifying species respond identically to acidification.", answer: "No" },
          { id: 17, type: "yng", text: "Coral reefs support approximately a quarter of marine species.", answer: "Yes" },
          { id: 18, type: "yng", text: "Localized interventions can fully address global acidification.", answer: "No" },
          { id: 19, type: "mcq", text: "What forms when CO2 dissolves in seawater?", options: ["A. Sodium chloride", "B. Carbonic acid", "C. Calcium carbonate", "D. Hydrogen gas"], answer: "B" },
          { id: 20, type: "mcq", text: "How much has ocean pH decreased since preindustrial times?", options: ["A. 0.01 units", "B. 0.1 units", "C. 1.0 units", "D. 10 units"], answer: "B" },
          { id: 21, type: "mcq", text: "What do volcanic CO2 vents provide?", options: ["A. Solutions to acidification", "B. Natural analogues for study", "C. Increased biodiversity", "D. Alkaline conditions"], answer: "B" },
          { id: 22, type: "mcq", text: "What ultimately addresses ocean acidification?", options: ["A. Adding alkalinity globally", "B. Reducing CO2 emissions", "C. Relocating marine life", "D. Increasing fishing"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: The current pH change exceeds fluctuations over twenty ________ years.", answer: "million" },
          { id: 24, type: "summary", text: "Complete: Reef degradation would have profound ecological and ________ consequences.", answer: "economic" },
          { id: 25, type: "summary", text: "Complete: Acidification affects trace ________ availability for biological processes.", answer: "metals" },
          { id: 26, type: "summary", text: "Complete: Acidification adds urgency to ________ efforts.", answer: "decarbonization" }
        ]
      },
      {
        id: "P3",
        title: "Behavioral Economics and Policy Design",
        wordCount: 870,
        text: `Behavioral economics has transformed understanding of human decision-making by documenting systematic departures from the rationality assumptions underlying standard economic models. Drawing on insights from psychology, behavioral economists have identified cognitive biases, heuristics, and contextual factors that predictably influence choices in ways that traditional models cannot explain. These findings have increasingly informed policy design through approaches that work with rather than against human psychological tendencies.

Traditional economic models assume that individuals have stable, consistent preferences; process information rationally; and make choices maximizing their utility. Behavioral research has challenged each assumption. Preferences shift depending on how options are framed. Limited attention and cognitive capacity prevent comprehensive information processing. Present bias leads individuals to overweight immediate gratification relative to future consequences. Social influences shape choices in ways that pure self-interest models miss. These deviations from rationality are not random errors but systematic patterns amenable to prediction.

The "nudge" approach, popularized by Richard Thaler and Cass Sunstein, applies behavioral insights to policy by altering choice architecture—the context within which decisions are made—to guide behavior while preserving freedom of choice. Default options exemplify this approach: because people tend to accept defaults, setting beneficial options as defaults can dramatically increase take-up without restricting alternatives. Retirement savings plans that automatically enroll employees with opt-out provisions achieve far higher participation than those requiring active enrollment.

Applications have proliferated across policy domains. Simplified forms and reminders increase tax compliance and benefit take-up. Energy bills showing household consumption relative to neighbors reduce usage through social comparison effects. Text message reminders improve medication adherence and appointment attendance. Financial disclosures designed with behavioral insights help consumers make better choices. These interventions often achieve meaningful effects at minimal cost, making them attractive to budget-constrained governments.

Critics raise concerns about manipulation and paternalism. Nudges work by exploiting the same psychological tendencies they claim to address, potentially undermining autonomous decision-making. Determining what constitutes a beneficial outcome involves value judgments that may not be shared by those being nudged. Corporate entities apply similar techniques for commercial purposes that may conflict with consumer interests. Transparency about nudge interventions and democratic deliberation about their use have been proposed as responses to these concerns.

More fundamental critiques question whether behavioral approaches distract from structural reforms addressing root causes of problems. Nudging individuals toward healthier food choices, for example, leaves unchanged the food environment shaped by corporate marketing and agricultural policy. Focusing on individual behavior change may implicitly blame individuals for outcomes resulting from systemic factors beyond their control. Some argue that behavioral approaches are favored precisely because they avoid confronting powerful interests that structural reforms would challenge.

The evidence base for behavioral interventions varies in quality. While some findings have replicated robustly, others have failed replication attempts, raising questions about publication bias and context-dependence of effects. Effect sizes in real-world implementations often fall below laboratory results. Scaling successful pilots to broader populations presents challenges. Despite enthusiasm for behavioral approaches, rigorous evaluation remains essential to distinguish effective interventions from those that seem appealing but produce limited impact.`,
        questions: [
          { id: 27, type: "tfng", text: "Traditional economic models assume fully rational decision-making.", answer: "True" },
          { id: 28, type: "tfng", text: "Behavioral deviations from rationality are random errors.", answer: "False" },
          { id: 29, type: "tfng", text: "Nudges restrict freedom of choice.", answer: "False" },
          { id: 30, type: "tfng", text: "All behavioral findings have replicated robustly.", answer: "False" },
          { id: 31, type: "tfng", text: "Structural critiques argue behavioral approaches may distract from root causes.", answer: "True" },
          { id: 32, type: "matching", text: "Overweighting immediate gratification", answer: "present bias" },
          { id: 33, type: "matching", text: "The context within which decisions are made", answer: "choice architecture" },
          { id: 34, type: "matching", text: "Popularized the nudge approach", answer: "Thaler and Sunstein" },
          { id: 35, type: "mcq", text: "What do automatic enrollment retirement plans achieve?", options: ["A. Lower participation", "B. Higher participation", "C. No change", "D. Reduced savings"], answer: "B" },
          { id: 36, type: "mcq", text: "What concern do critics raise about nudges?", options: ["A. Too expensive", "B. Manipulation and paternalism", "C. Too complex", "D. Ineffective"], answer: "B" },
          { id: 37, type: "mcq", text: "What do structural critiques argue behavioral approaches may avoid?", options: ["A. Individual choice", "B. Government intervention", "C. Confronting powerful interests", "D. Scientific evidence"], answer: "C" },
          { id: 38, type: "mcq", text: "What challenge does scaling successful pilots present?", options: ["A. Too much success", "B. Maintaining effect sizes", "C. Excessive funding", "D. Universal acceptance"], answer: "B" },
          { id: 39, type: "short", text: "What shows consumption relative to neighbors? (TWO WORDS)", answer: "energy bills" },
          { id: 40, type: "short", text: "What remains essential for behavioral interventions? (TWO WORDS)", answer: "rigorous evaluation" }
        ]
      }
    ]
  },

  // ============================================================
  // R29 - EXPERT (Band 8.5-9.0)
  // ============================================================
  {
    id: "R29",
    level: "Expert",
    bandTarget: "8.5-9.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Epigenetics and Gene Expression",
        wordCount: 870,
        text: `The discovery that gene expression can be modified without altering DNA sequences has transformed understanding of heredity and development. Epigenetics—the study of heritable changes in gene function that occur without changes in DNA sequence—reveals that the genome is not a fixed blueprint but a dynamic system responsive to environmental inputs. These mechanisms have implications for development, disease, and potentially for the inheritance of acquired characteristics across generations.

DNA methylation represents the most extensively studied epigenetic mechanism. Methyl groups attached to cytosine bases, typically in CpG dinucleotide contexts, generally suppress gene transcription when present in promoter regions. Methylation patterns are established during development and maintained through cell divisions, providing stable but reversible gene silencing. Aberrant methylation patterns characterize many cancers and other diseases, making methylation a target for therapeutic intervention.

Histone modifications constitute another major epigenetic system. DNA wraps around histone proteins in chromatin; chemical modifications to histones affect chromatin structure and gene accessibility. Acetylation generally opens chromatin and enables transcription; methylation can either activate or repress genes depending on which residues are modified. The combinatorial complexity of histone modifications creates a regulatory layer sometimes called the "histone code," though the deterministic implications of that metaphor have been questioned.

Environmental factors can influence epigenetic states with lasting consequences. Nutritional conditions during development affect methylation patterns that persist into adulthood. Stress exposure alters epigenetic marks in ways that may contribute to later psychological vulnerability. Toxin exposures can produce epigenetic changes linked to disease risk. These findings challenge the view that the genome is insulated from environmental influence and suggest mechanisms through which early experiences shape lifelong health.

The possibility that epigenetic changes might be transmitted across generations has attracted considerable attention and controversy. Studies in animals have suggested that parental experiences—diet, stress, toxin exposure—can affect offspring phenotypes through epigenetic mechanisms. Some human epidemiological studies have found associations between grandparental experiences and grandchild health outcomes. However, establishing genuine transgenerational epigenetic inheritance requires excluding genetic confounds and demonstrating that epigenetic marks survive the reprogramming that normally erases them between generations.

Epigenetic research has therapeutic applications. Drugs that modify DNA methylation or histone acetylation have been approved for treating certain cancers. Epigenetic biomarkers show promise for early disease detection and prognosis. Understanding the epigenetic basis of cellular reprogramming has advanced stem cell research and regenerative medicine. However, the complexity and context-dependence of epigenetic regulation complicates translating basic findings into clinical applications.

The field continues to develop conceptually and technically. Single-cell epigenomics reveals heterogeneity masked by bulk analyses. Computational tools integrate epigenetic data with other molecular information. Theoretical frameworks attempt to explain how epigenetic states emerge, maintain stability, and respond to perturbation. These advances are clarifying the scope and mechanisms of epigenetic regulation while raising new questions about the relationship between genome, epigenome, and phenotype.`,
        questions: [
          { id: 1, type: "tfng", text: "Epigenetic changes alter the DNA sequence.", answer: "False" },
          { id: 2, type: "tfng", text: "DNA methylation typically suppresses gene transcription.", answer: "True" },
          { id: 3, type: "tfng", text: "Histone acetylation generally closes chromatin.", answer: "False" },
          { id: 4, type: "tfng", text: "Environmental factors can influence epigenetic states.", answer: "True" },
          { id: 5, type: "tfng", text: "Transgenerational epigenetic inheritance is uncontroversial.", answer: "False" },
          { id: 6, type: "short", text: "What groups attach to cytosine bases? (ONE WORD)", answer: "methyl" },
          { id: 7, type: "short", text: "What do DNA strands wrap around? (TWO WORDS)", answer: "histone proteins" },
          { id: 8, type: "short", text: "What type of biomarkers show promise for disease detection? (ONE WORD)", answer: "epigenetic" },
          { id: 9, type: "mcq", text: "What characterizes many cancers?", options: ["A. Normal methylation", "B. Aberrant methylation", "C. No methylation", "D. Stable genes"], answer: "B" },
          { id: 10, type: "mcq", text: "What does the 'histone code' refer to?", options: ["A. DNA sequence", "B. Combinatorial histone modifications", "C. Protein synthesis", "D. Cell division"], answer: "B" },
          { id: 11, type: "mcq", text: "What normally erases epigenetic marks between generations?", options: ["A. Mutation", "B. Reprogramming", "C. Transcription", "D. Translation"], answer: "B" },
          { id: 12, type: "mcq", text: "What reveals heterogeneity masked by bulk analyses?", options: ["A. Population studies", "B. Single-cell epigenomics", "C. Statistical averaging", "D. Genetic sequencing"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Epigenetics studies heritable changes without ________ changes.", answer: "sequence" }
        ]
      },
      {
        id: "P2",
        title: "Complex Systems and Emergence",
        wordCount: 860,
        text: `Complex systems science studies phenomena that arise from interactions among many components—phenomena that cannot be understood by analyzing components in isolation. From ecosystems to economies, from brains to cities, complex systems exhibit emergent properties: behaviors and patterns at the system level that are not predictable from knowledge of parts alone. This perspective challenges reductionist approaches that dominated twentieth-century science while offering new tools for understanding systems characterized by nonlinearity, feedback, and adaptation.

Emergence occurs when interactions among elements produce collective behaviors qualitatively different from individual element behaviors. The flocking patterns of birds emerge from simple rules followed by individual birds without central coordination. Consciousness emerges from interactions among neurons that individually are not conscious. Markets produce prices that no individual participant determines. Understanding emergence requires examining how micro-level interactions generate macro-level patterns—a methodological shift from analyzing parts to understanding relationships and dynamics.

Nonlinearity characterizes most complex systems. Linear systems produce outputs proportional to inputs; nonlinear systems can exhibit disproportionate responses including threshold effects, tipping points, and chaotic dynamics. Small perturbations can cascade through nonlinear systems with large consequences, while large interventions may have little effect. This sensitivity complicates prediction and control, requiring approaches that acknowledge fundamental uncertainty rather than assuming predictability in principle.

Feedback loops are ubiquitous in complex systems. Negative feedback maintains stability by counteracting deviations from equilibrium. Positive feedback amplifies changes, potentially driving rapid transitions between states. Many systems involve multiple interacting feedback loops whose combined effects are difficult to anticipate. Understanding feedback structure provides insights into system behavior that static analyses miss, explaining why interventions often produce unintended consequences.

Adaptation distinguishes living complex systems and their analogues. Adaptive systems change their behavior in response to experience, potentially in ways that alter the systems themselves. Evolution, learning, and economic adjustment are adaptive processes operating at different scales. Adaptive systems can exhibit increasing sophistication over time but also path dependencies and lock-in to suboptimal states. Modeling adaptation requires approaches that capture how system components and their relationships change over time.

Agent-based modeling has emerged as a key tool for complex systems research. These computational models simulate interactions among many individual agents following specified rules, allowing observation of emergent macro-level patterns. Agent-based models have been applied to traffic flow, market dynamics, disease spread, and social phenomena. They complement analytical approaches that become intractable when dealing with many heterogeneous interacting components.

The complex systems perspective has practical implications for policy and management. Linear thinking that assumes proportional responses and predictable outcomes often fails in complex domains. Effective intervention requires understanding system dynamics, identifying leverage points, and monitoring for unintended consequences. Resilience—the capacity to maintain function despite perturbation—becomes a key objective when precise control is impossible. These insights challenge conventional management approaches premised on prediction and control.`,
        questions: [
          { id: 14, type: "yng", text: "Emergent properties can be fully predicted from component knowledge.", answer: "No" },
          { id: 15, type: "yng", text: "Linear systems produce proportional outputs to inputs.", answer: "Yes" },
          { id: 16, type: "yng", text: "Positive feedback maintains stability.", answer: "No" },
          { id: 17, type: "yng", text: "Adaptive systems can change in response to experience.", answer: "Yes" },
          { id: 18, type: "yng", text: "Agent-based models are purely analytical.", answer: "No" },
          { id: 19, type: "mcq", text: "What produces bird flocking patterns?", options: ["A. Central coordination", "B. Simple rules by individuals", "C. External control", "D. Random movement"], answer: "B" },
          { id: 20, type: "mcq", text: "What can small perturbations cause in nonlinear systems?", options: ["A. No effect", "B. Proportional response", "C. Large cascading consequences", "D. System shutdown"], answer: "C" },
          { id: 21, type: "mcq", text: "What does negative feedback do?", options: ["A. Amplifies changes", "B. Maintains stability", "C. Causes chaos", "D. Increases sensitivity"], answer: "B" },
          { id: 22, type: "mcq", text: "What becomes a key objective when precise control is impossible?", options: ["A. Prediction", "B. Optimization", "C. Resilience", "D. Elimination"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Complex systems exhibit behaviors not predictable from ________ alone.", answer: "parts" },
          { id: 24, type: "summary", text: "Complete: Nonlinear systems can exhibit ________ effects and tipping points.", answer: "threshold" },
          { id: 25, type: "summary", text: "Complete: Path dependencies can lock systems into ________ states.", answer: "suboptimal" },
          { id: 26, type: "summary", text: "Complete: Understanding feedback structure explains ________ consequences.", answer: "unintended" }
        ]
      },
      {
        id: "P3",
        title: "Philosophy of Mind and Artificial Intelligence",
        wordCount: 870,
        text: `The development of artificial intelligence has reinvigorated philosophical debates about the nature of mind, understanding, and consciousness. Can machines genuinely think, or do they merely simulate thinking? Is consciousness possible in non-biological substrates? What would constitute evidence that an artificial system possesses mental states? These questions, once merely speculative, have acquired practical urgency as AI systems demonstrate increasingly sophisticated capabilities that challenge intuitions about the uniqueness of human cognition.

The Turing test, proposed by Alan Turing in 1950, suggested that if a machine could converse indistinguishably from a human, we should attribute intelligence to it. This behavioral criterion sidesteps metaphysical questions about what thinking "really" is, focusing instead on functional equivalence. Critics argue that behavioral mimicry could be achieved without genuine understanding—that a system might produce human-like outputs through entirely different processes than those generating human intelligence.

John Searle's Chinese Room argument articulates this concern. Imagine someone who does not understand Chinese following rules to manipulate Chinese symbols in ways that produce appropriate responses to Chinese inputs. From outside, the system appears to understand Chinese; from inside, there is no understanding, only symbol manipulation. Searle argued that digital computers, like the person in the room, manipulate symbols without comprehending their meaning, and that computational processes therefore cannot constitute genuine understanding regardless of their sophistication.

Responses to Searle divide into several camps. Systems replies argue that while the person in the room does not understand Chinese, the entire system—person plus rules plus symbols—does. Biological naturalism critics question whether biological implementation is necessary for genuine cognition. Functionalists maintain that if a system performs the right functional role, it has mental states regardless of implementation. These debates reveal deep disagreements about the relationship between computation, implementation, and mental phenomena.

The "hard problem" of consciousness poses additional challenges. Even if artificial systems could perform all cognitive functions, would they have subjective experience? There might be something it is like to be a human or animal that no amount of information processing could produce. Alternatively, consciousness might emerge from sufficient complexity regardless of substrate. Without a scientific understanding of how consciousness arises from physical processes, we cannot confidently assess whether artificial systems could be conscious.

Contemporary AI achievements have renewed these debates. Large language models produce text that often appears thoughtful and knowledgeable, though they are trained to predict likely word sequences rather than to understand. Whether this distinction matters depends on contested assumptions about the relationship between behavior and underlying processes. Some argue that any system producing sufficiently human-like behavior must have relevant mental properties; others maintain that current AI systems, however impressive, remain fundamentally different from minded beings.

The practical stakes of these questions are increasing. If AI systems could genuinely suffer, they might deserve moral consideration. If they could genuinely deceive, traditional assumptions about machine reliability would need revision. If they could genuinely create, intellectual property frameworks would require rethinking. The answers to philosophical questions about machine minds may eventually have significant legal, ethical, and social implications.`,
        questions: [
          { id: 27, type: "tfng", text: "The Turing test focuses on behavioral criteria.", answer: "True" },
          { id: 28, type: "tfng", text: "Searle argued that computers can achieve genuine understanding.", answer: "False" },
          { id: 29, type: "tfng", text: "All philosophers agree that biological implementation is necessary for cognition.", answer: "False" },
          { id: 30, type: "tfng", text: "The hard problem concerns subjective experience.", answer: "True" },
          { id: 31, type: "tfng", text: "Large language models are trained specifically to understand meaning.", answer: "False" },
          { id: 32, type: "matching", text: "Manipulating Chinese symbols without understanding", answer: "Chinese Room" },
          { id: 33, type: "matching", text: "Behavioral indistinguishability criterion", answer: "Turing test" },
          { id: 34, type: "matching", text: "Mental states determined by functional role", answer: "functionalism" },
          { id: 35, type: "mcq", text: "When was the Turing test proposed?", options: ["A. 1930", "B. 1950", "C. 1970", "D. 1990"], answer: "B" },
          { id: 36, type: "mcq", text: "What do systems replies to Searle argue?", options: ["A. Computers cannot think", "B. The entire system understands", "C. Biological brains are necessary", "D. Behavior is irrelevant"], answer: "B" },
          { id: 37, type: "mcq", text: "What are language models trained to do?", options: ["A. Understand meaning", "B. Predict word sequences", "C. Experience emotions", "D. Form beliefs"], answer: "B" },
          { id: 38, type: "mcq", text: "What might AI suffering deserve?", options: ["A. Punishment", "B. Moral consideration", "C. Deletion", "D. Reward"], answer: "B" },
          { id: 39, type: "short", text: "Who proposed the Chinese Room argument? (TWO WORDS)", answer: "John Searle" },
          { id: 40, type: "short", text: "What poses additional challenges beyond cognitive function? (TWO WORDS)", answer: "hard problem" }
        ]
      }
    ]
  },

  // ============================================================
  // R30 - EXPERT (Band 9.0)
  // ============================================================
  {
    id: "R30",
    level: "Expert",
    bandTarget: "9.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "The Nature of Scientific Explanation",
        wordCount: 870,
        text: `What constitutes a satisfactory scientific explanation has been debated throughout the history of philosophy of science. Explaining a phenomenon goes beyond merely describing it—explanation involves showing why the phenomenon occurs, how it fits into broader patterns, or what mechanisms produce it. Different philosophical accounts emphasize different aspects of explanation, reflecting both the diversity of scientific practice and genuine disagreement about the nature of understanding.

The deductive-nomological model, developed by Carl Hempel and Paul Oppenheim, proposed that explanation consists of logical derivation from laws of nature plus initial conditions. To explain why a particular event occurred is to show that it follows deductively from general laws and statements of relevant conditions. This account captured important features of explanation in physics but faced difficulties with probabilistic explanations and with cases where derivation from laws seemed possible yet explanation unsatisfying.

Causal accounts emphasize that explanation involves identifying causes. To explain an event is to trace the causal processes and mechanisms that produced it. This view accords with intuitions that genuine explanation shows how things work rather than merely subsumes phenomena under generalizations. However, articulating exactly what causation amounts to proves difficult, and some scientific explanations—in quantum mechanics and statistical mechanics, for instance—may not fit straightforwardly causal models.

Unificationist approaches propose that explanation consists of deriving diverse phenomena from minimal theoretical resources. Good explanations show that apparently disparate phenomena are manifestations of the same underlying principles. Darwin's theory explained the diversity and adaptation of life forms by deriving them from variation, inheritance, and natural selection. The appeal of unification lies in cognitive economy—understanding more phenomena with fewer principles—rather than causal tracing or logical derivation per se.

Mechanistic explanation has gained prominence in philosophy of biology and neuroscience. This approach focuses on identifying the components and operations that together constitute a mechanism producing the phenomenon to be explained. Understanding photosynthesis, for example, involves tracing how molecules interact within cellular structures to convert light energy into chemical energy. Mechanistic explanation emphasizes levels of organization and how activities at one level give rise to phenomena at another.

Pragmatic dimensions of explanation have received increasing attention. What counts as a satisfactory explanation depends on the background knowledge and interests of those seeking explanation. The same phenomenon might be explained differently to different audiences—a physicist and a child require different explanations of why the sky is blue. Explanation is not merely a relation between propositions but a communicative act serving purposes that vary with context.

These various accounts likely capture different aspects of explanatory practice rather than competing for a single correct analysis. Scientific explanation is plural, employing different strategies appropriate to different domains and questions. Philosophy of explanation continues developing models that accommodate this diversity while identifying what these various strategies share that makes them all explanatory.`,
        questions: [
          { id: 1, type: "tfng", text: "Explanation and description are identical.", answer: "False" },
          { id: 2, type: "tfng", text: "The deductive-nomological model emphasizes derivation from laws.", answer: "True" },
          { id: 3, type: "tfng", text: "Causal accounts have no difficulties with quantum mechanics.", answer: "False" },
          { id: 4, type: "tfng", text: "Mechanistic explanation focuses on components and operations.", answer: "True" },
          { id: 5, type: "tfng", text: "What counts as satisfactory explanation is context-independent.", answer: "False" },
          { id: 6, type: "short", text: "Who developed the deductive-nomological model with Oppenheim? (ONE NAME)", answer: "Hempel" },
          { id: 7, type: "short", text: "What theory explained biological diversity through variation and selection? (ONE NAME)", answer: "Darwin's" },
          { id: 8, type: "short", text: "What dimension of explanation depends on audience interests? (ONE WORD)", answer: "pragmatic" },
          { id: 9, type: "mcq", text: "What does unificationist explanation emphasize?", options: ["A. Causal processes", "B. Deriving from minimal principles", "C. Biological mechanisms", "D. Audience interests"], answer: "B" },
          { id: 10, type: "mcq", text: "What does mechanistic explanation trace?", options: ["A. Logical derivations", "B. Components and operations", "C. Universal laws", "D. Cognitive economy"], answer: "B" },
          { id: 11, type: "mcq", text: "What conclusion does the passage suggest about explanation types?", options: ["A. Only one is correct", "B. They capture different aspects", "C. All are equally wrong", "D. Context is irrelevant"], answer: "B" },
          { id: 12, type: "mcq", text: "What does explanation show beyond description?", options: ["A. More words", "B. Why phenomena occur", "C. Better grammar", "D. Historical context only"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Different audiences require different ________ for the same phenomenon.", answer: "explanations" }
        ]
      },
      {
        id: "P2",
        title: "Democracy and Deliberation",
        wordCount: 860,
        text: `Deliberative democracy proposes that legitimate political decisions emerge from reasoned discussion among citizens rather than merely from aggregating preformed preferences through voting. This ideal challenges conceptions of democracy as simply majority rule, emphasizing instead the quality of public discourse and the transformation of preferences through dialogue. Deliberative theory has influenced both political philosophy and practical efforts to enhance democratic participation.

The deliberative ideal holds that democratic legitimacy requires decisions to be justified by reasons that all affected parties could accept. Rather than simply counting votes among citizens with fixed preferences, genuine democracy involves exchanging arguments, considering diverse perspectives, and refining positions through engagement with others. This process can transform initial preferences as participants encounter new information and arguments, potentially producing outcomes that reflect more than just the balance of prior opinions.

Jürgen Habermas's discourse ethics provides philosophical foundations for deliberative democracy. Habermas argued that valid norms are those that would be agreed upon by all affected parties in an ideal speech situation—a context of free and equal discussion without domination or deception. While no actual discussion achieves these ideal conditions, they serve as standards for evaluating and improving real deliberative processes. Legitimate laws approximate what citizens would agree to under such conditions.

Empirical research has tested deliberative ideals in practice. Deliberative polls bring together representative samples of citizens to discuss policy issues, with access to balanced information and facilitated small-group discussions. Participants typically change their views through deliberation, often becoming more informed and more willing to consider others' perspectives. However, critics note that such exercises involve small numbers and may not scale to mass democracies, and that their influence on actual policy decisions remains limited.

Challenges to deliberative democracy come from multiple directions. Some argue that reasoned deliberation privileges educated elites skilled in argumentation while marginalizing others. Deliberation among those who are not equals may reproduce rather than challenge existing power relations. Deep disagreements rooted in conflicting values may not be resolvable through discussion. Time constraints and complexity may make genuine deliberation on most issues impractical. These objections question whether deliberative ideals can be realized or whether attempting to realize them might produce unintended harms.

Defenders respond that deliberation can take multiple forms, including storytelling and testimony alongside formal argument. Institutional designs can promote inclusion and equality among participants. While not all disagreements can be resolved, deliberation may clarify what is at stake and identify possible compromises. The alternative—decisions without deliberation—hardly seems preferable when significant collective choices must be made.

Contemporary democracies exhibit tensions between deliberative ideals and competitive political realities. Electoral competition incentivizes strategic communication over genuine dialogue. Media environments may fragment publics into ideologically homogeneous audiences. Yet periodic waves of citizen mobilization demonstrate ongoing aspirations for more meaningful political participation than voting alone provides. Whether deliberative democracy represents an achievable aspiration or an unrealistic ideal remains debated among theorists and practitioners.`,
        questions: [
          { id: 14, type: "yng", text: "Deliberative democracy views voting as the only source of legitimacy.", answer: "No" },
          { id: 15, type: "yng", text: "Habermas proposed ideal speech situation standards.", answer: "Yes" },
          { id: 16, type: "yng", text: "Deliberative polls show participants never change views.", answer: "No" },
          { id: 17, type: "yng", text: "Critics argue deliberation may privilege educated elites.", answer: "Yes" },
          { id: 18, type: "yng", text: "Electoral competition fully supports deliberative ideals.", answer: "No" },
          { id: 19, type: "mcq", text: "What can deliberation transform?", options: ["A. Weather patterns", "B. Fixed laws", "C. Initial preferences", "D. Historical facts"], answer: "C" },
          { id: 20, type: "mcq", text: "What do deliberative polls bring together?", options: ["A. Experts only", "B. Representative citizen samples", "C. Politicians only", "D. Random tourists"], answer: "B" },
          { id: 21, type: "mcq", text: "What might deliberation among unequals reproduce?", options: ["A. Equality", "B. Power relations", "C. Economic growth", "D. Universal agreement"], answer: "B" },
          { id: 22, type: "mcq", text: "What do defenders say deliberation can include besides formal argument?", options: ["A. Violence", "B. Storytelling and testimony", "C. Voting only", "D. Economic incentives"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Democratic legitimacy requires decisions justified by ________.", answer: "reasons" },
          { id: 24, type: "summary", text: "Complete: Ideal speech situations involve free discussion without ________.", answer: "domination" },
          { id: 25, type: "summary", text: "Complete: Media environments may fragment publics into ________ audiences.", answer: "homogeneous" },
          { id: 26, type: "summary", text: "Complete: Deep disagreements rooted in conflicting ________ may resist resolution.", answer: "values" }
        ]
      },
      {
        id: "P3",
        title: "Genetic Engineering and Bioethics",
        wordCount: 870,
        text: `Advances in genetic engineering have created unprecedented capabilities to modify the hereditary material of organisms, including humans. Technologies like CRISPR-Cas9 enable precise genome editing with potential applications ranging from treating genetic diseases to enhancing human capabilities. These possibilities have generated intense bioethical debate about appropriate uses, governance frameworks, and the implications of altering the genetic heritage that evolution has produced.

Therapeutic applications of genetic engineering address genetic diseases by correcting or compensating for disease-causing mutations. Somatic gene therapy modifies cells in a patient's body without affecting hereditary material passed to offspring; it is conceptually similar to other medical treatments that alter patient biology. Germline editing, by contrast, modifies reproductive cells or early embryos, creating changes that would be inherited by future generations. While potentially preventing heritable diseases, germline editing raises concerns about unknown long-term effects and consent issues regarding those who would inherit modifications.

Enhancement applications extend genetic engineering beyond treating disease to improving normal capabilities—heightening intelligence, extending lifespan, or conferring novel abilities. Distinguishing treatment from enhancement proves difficult in practice; the boundary shifts with definitions of health and normalcy. Critics argue that enhancement would exacerbate inequality if available only to the wealthy, undermine equal human dignity, and commit future generations to modifications they did not choose. Defenders suggest that enhancing human capabilities has always been accepted through education and technology.

The 2018 announcement that a Chinese researcher had created gene-edited babies—twin girls with modifications intended to confer HIV resistance—prompted widespread condemnation. The research violated international guidelines, the claimed benefits were questionable given alternative protections available, and the long-term effects on the children remain unknown. This case illustrated both the technical feasibility of human germline editing and the inadequacy of existing governance frameworks to prevent rogue applications.

Governance of genetic engineering involves multiple levels and mechanisms. Scientific self-regulation establishes norms through professional societies and journal policies. National regulations vary widely, with some countries prohibiting germline editing while others permit research under oversight. International agreements remain limited, though calls for global governance frameworks have intensified. Balancing scientific freedom with public safety and ethical concerns while accommodating legitimate disagreement across cultures presents ongoing challenges.

The concept of a genetic "arms race" has emerged in discussions of enhancement. If some nations permit genetic enhancement while others prohibit it, competitive pressures might push more permissive policies. Parents might feel obligated to enhance children to avoid disadvantage. These dynamics could drive enhancement adoption even without consensus that it is desirable, suggesting that individual choices aggregate into collective outcomes that no one intended.

Religious and secular ethical traditions offer diverse perspectives on genetic modification. Some view genetic engineering as hubristic interference with divine creation or natural order. Others see it as an extension of human dominion over nature that requires responsible stewardship. Secular perspectives emphasizing autonomy and welfare may support modifications that respect individual choice and improve well-being while opposing those imposed without consent or causing harm. No single ethical framework commands universal assent, making democratic deliberation essential despite its difficulties.`,
        questions: [
          { id: 27, type: "tfng", text: "Somatic gene therapy affects hereditary material passed to offspring.", answer: "False" },
          { id: 28, type: "tfng", text: "Distinguishing treatment from enhancement is straightforward.", answer: "False" },
          { id: 29, type: "tfng", text: "The 2018 gene-edited babies case was widely praised.", answer: "False" },
          { id: 30, type: "tfng", text: "International genetic engineering agreements are comprehensive.", answer: "False" },
          { id: 31, type: "tfng", text: "Religious traditions uniformly support genetic modification.", answer: "False" },
          { id: 32, type: "matching", text: "Modifies cells without affecting inherited genes", answer: "somatic therapy" },
          { id: 33, type: "matching", text: "Changes reproductive cells or embryos", answer: "germline editing" },
          { id: 34, type: "matching", text: "Enables precise genome modification", answer: "CRISPR-Cas9" },
          { id: 35, type: "mcq", text: "What did the 2018 gene-edited babies case illustrate?", options: ["A. Perfect governance", "B. Technical feasibility and governance inadequacy", "C. Universal support", "D. Impossible technology"], answer: "B" },
          { id: 36, type: "mcq", text: "What might genetic enhancement arms races drive?", options: ["A. Universal prohibition", "B. Adoption without consensus", "C. Scientific restriction", "D. Global agreement"], answer: "B" },
          { id: 37, type: "mcq", text: "What do some religious views consider genetic engineering?", options: ["A. Mandatory practice", "B. Hubristic interference", "C. Natural evolution", "D. Economic necessity"], answer: "B" },
          { id: 38, type: "mcq", text: "What is essential given diverse ethical frameworks?", options: ["A. Authoritarian decision", "B. Democratic deliberation", "C. Scientific autonomy only", "D. Economic analysis"], answer: "B" },
          { id: 39, type: "short", text: "What type of editing creates inheritable modifications? (ONE WORD)", answer: "germline" },
          { id: 40, type: "short", text: "What 2018 case prompted condemnation? (THREE WORDS)", answer: "gene-edited babies" }
        ]
      }
    ]
  },

  // ============================================================
  // R31 - EXPERT (Band 9.0)
  // ============================================================
  {
    id: "R31",
    level: "Expert",
    bandTarget: "9.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "The Anthropocene and Planetary Boundaries",
        wordCount: 870,
        text: `The concept of the Anthropocene proposes that human activities have become the dominant force shaping Earth's geology and ecosystems, marking a new geological epoch distinct from the Holocene that began approximately 11,700 years ago. While geologists debate when precisely the Anthropocene began and whether the stratigraphic evidence warrants formal recognition, the underlying scientific observation is increasingly clear: humanity has fundamentally altered planetary systems in ways that will persist for millennia, from atmospheric composition to biodiversity to the nitrogen cycle.

The planetary boundaries framework, developed by Johan Rockström and colleagues, attempts to define the safe operating space for humanity by identifying thresholds in nine Earth system processes. Crossing these boundaries risks triggering abrupt or irreversible environmental changes that could make Earth less hospitable to human civilization. The framework has influenced sustainability science and policy discussions, though it has also attracted criticism regarding the scientific basis for specific boundary values and the framework's implications for global governance.

Climate change represents the most prominent planetary boundary concern. The framework originally proposed limiting atmospheric carbon dioxide to 350 parts per million to avoid dangerous climate disruption—a boundary already exceeded. Current concentrations above 420 parts per million are driving warming that threatens ice sheet stability, ocean circulation patterns, and ecosystem functions. The Paris Agreement's goal of limiting warming to 1.5 degrees Celsius above preindustrial levels implicitly acknowledges planetary boundaries, though current trajectories suggest this target may be exceeded.

Biosphere integrity encompasses both genetic diversity within species and functional diversity across ecosystems. Current extinction rates exceed background rates by orders of magnitude, approaching levels associated with past mass extinction events. The functional integrity of ecosystems—their capacity to provide services like pollination, water purification, and climate regulation—may decline even before species go extinct as populations shrink and ranges contract. This boundary was assessed as already transgressed in high-risk territory.

Novel entities—synthetic chemicals, plastics, and other anthropogenic materials—represent an emerging boundary concern. Over 350,000 synthetic chemicals have been produced, many with unknown ecological and health effects. Microplastics now pervade marine and terrestrial environments. The framework initially left this boundary unquantified due to insufficient knowledge, though recent assessments suggest the boundary has been exceeded based on the production and release of materials faster than adequate safety assessment allows.

The biogeochemical flows boundary addresses human alteration of nitrogen and phosphorus cycles. Industrial nitrogen fixation for fertilizer now exceeds natural fixation, while phosphorus mining and application have disrupted aquatic ecosystems through eutrophication. Agricultural practices have transgressed this boundary, particularly in intensive farming regions, though both nutrients present regional rather than uniformly global concerns.

Critics raise several objections to the planetary boundaries framework. The identification of boundaries and safe thresholds involves scientific uncertainties that may not justify the precision implied. The framework focuses on biophysical limits without adequately addressing social dimensions of sustainability or justice implications of boundary-respecting policies. The global framing may obscure the differential responsibilities and vulnerabilities of different populations. Despite these limitations, the framework has valuably synthesized Earth system science into terms accessible for policy discussion, highlighting interconnections among environmental challenges that siloed approaches might miss.`,
        questions: [
          { id: 1, type: "tfng", text: "The Anthropocene is formally recognized by all geologists.", answer: "False" },
          { id: 2, type: "tfng", text: "The planetary boundaries framework identifies nine Earth system processes.", answer: "True" },
          { id: 3, type: "tfng", text: "Current CO2 levels are below the proposed 350 ppm boundary.", answer: "False" },
          { id: 4, type: "tfng", text: "Current extinction rates approximate past mass extinction levels.", answer: "True" },
          { id: 5, type: "tfng", text: "All synthetic chemicals have known ecological effects.", answer: "False" },
          { id: 6, type: "short", text: "Who developed the planetary boundaries framework? (TWO WORDS)", answer: "Johan Rockström" },
          { id: 7, type: "short", text: "What agreement aims to limit warming to 1.5 degrees? (TWO WORDS)", answer: "Paris Agreement" },
          { id: 8, type: "short", text: "What process causes nitrogen and phosphorus pollution in water? (ONE WORD)", answer: "eutrophication" },
          { id: 9, type: "mcq", text: "What does biosphere integrity encompass?", options: ["A. Climate only", "B. Genetic and functional diversity", "C. Ocean chemistry", "D. Atmospheric composition"], answer: "B" },
          { id: 10, type: "mcq", text: "How many synthetic chemicals have been produced?", options: ["A. Over 35,000", "B. Over 100,000", "C. Over 350,000", "D. Over 1,000,000"], answer: "C" },
          { id: 11, type: "mcq", text: "What do critics argue the framework inadequately addresses?", options: ["A. Climate science", "B. Social dimensions and justice", "C. Nitrogen cycles", "D. Biodiversity"], answer: "B" },
          { id: 12, type: "mcq", text: "What has the framework valuably synthesized?", options: ["A. Economic theory", "B. Earth system science for policy", "C. Political agreements", "D. Agricultural practices"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: The Holocene began approximately ________ years ago.", answer: "11,700" }
        ]
      },
      {
        id: "P2",
        title: "Consciousness Studies and Integrated Information Theory",
        wordCount: 860,
        text: `Among the many theories attempting to explain consciousness, Integrated Information Theory (IIT), developed by neuroscientist Giulio Tononi, stands out for its ambitious attempt to identify what consciousness fundamentally is rather than merely how it correlates with brain activity. IIT proposes that consciousness is identical to integrated information—specifically, a quantity called phi (Φ) that measures the degree to which a system generates information above and beyond its parts. This framework has generated substantial interest and controversy, offering both novel predictions and challenging implications.

The theory begins from phenomenology—the structure of conscious experience itself. Tononi argues that any adequate theory must account for consciousness's essential properties: experience exists (it is real for the subject), it is structured (composed of many differentiated elements), it is integrated (unified rather than fragmentary), it is specific (this particular experience rather than another), and it is exclusive (bounded in content and time). These axioms, drawn from reflection on experience, provide constraints that any physical substrate of consciousness must satisfy.

From these phenomenological axioms, IIT derives postulates about the physical requirements for consciousness. A conscious system must be composed of elements with causal power, differentiated into many distinct states, integrated such that the whole is more than the sum of parts, specific in its state, and exclusive in its boundaries. The theory proposes that consciousness corresponds to the maximum of integrated information within a system—the phi value that quantifies how much the system's causal structure is irreducible to its parts.

The mathematical formalism of IIT allows, in principle, calculating phi for any system whose causal structure is known. High phi values indicate strongly integrated systems where the whole generates information beyond its parts; low phi values characterize systems that are essentially decomposable into independent components. The theory predicts that systems with high phi should be conscious regardless of their physical substrate—whether neurons, silicon chips, or other configurations—while systems with low phi should not be conscious even if behaviorally sophisticated.

This substrate-independence has striking implications. IIT suggests that simple systems with sufficient integration—potentially including certain artificial systems—could possess consciousness, while complex systems lacking integration—such as feedforward neural networks or the internet—would not. The cerebellum, despite containing more neurons than the cerebral cortex, may contribute little to consciousness due to its modular, non-integrated architecture. These predictions distinguish IIT from theories that tie consciousness to biological or computational properties.

Critics raise several concerns. The mathematical formalization of phi becomes computationally intractable for systems above trivial size, limiting empirical testability. The claim that phi simply is consciousness—rather than causing or corresponding to it—represents a metaphysical commitment that some find unjustified. The phenomenological axioms may not capture all that matters about consciousness or may reflect conceptual biases rather than essential truths. Alternative theories emphasizing global workspace dynamics, higher-order representations, or predictive processing offer competing accounts.

Despite controversies, IIT has stimulated productive research. The perturbational complexity index, inspired by IIT principles, provides a practical measure that distinguishes conscious from unconscious brain states in clinical settings. The framework's emphasis on integration has influenced neuroscientific investigation of how brain regions communicate. Whether or not IIT ultimately proves correct, it has advanced the scientific study of consciousness by offering precise, falsifiable claims about what consciousness requires.`,
        questions: [
          { id: 14, type: "yng", text: "IIT was developed by Giulio Tononi.", answer: "Yes" },
          { id: 15, type: "yng", text: "IIT proposes that consciousness correlates with but is not identical to phi.", answer: "No" },
          { id: 16, type: "yng", text: "According to IIT, the internet should be conscious.", answer: "No" },
          { id: 17, type: "yng", text: "The cerebellum contributes significantly to consciousness according to IIT.", answer: "No" },
          { id: 18, type: "yng", text: "Calculating phi is computationally straightforward for complex systems.", answer: "No" },
          { id: 19, type: "mcq", text: "What does phi measure?", options: ["A. Brain size", "B. Integrated information", "C. Neuron count", "D. Behavioral complexity"], answer: "B" },
          { id: 20, type: "mcq", text: "What does IIT begin from?", options: ["A. Neuroscience data", "B. Phenomenology", "C. Computer science", "D. Evolution theory"], answer: "B" },
          { id: 21, type: "mcq", text: "What practical measure was inspired by IIT?", options: ["A. EEG frequency", "B. Perturbational complexity index", "C. fMRI activation", "D. Neuron density"], answer: "B" },
          { id: 22, type: "mcq", text: "What is a criticism of IIT?", options: ["A. Too simple", "B. Computationally intractable", "C. Ignores the brain", "D. Denies consciousness"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: High phi indicates strongly ________ systems.", answer: "integrated" },
          { id: 24, type: "summary", text: "Complete: IIT's substrate-independence suggests consciousness is not tied to ________ properties.", answer: "biological" },
          { id: 25, type: "summary", text: "Complete: The theory offers precise, ________ claims about consciousness.", answer: "falsifiable" },
          { id: 26, type: "summary", text: "Complete: Experience is unified rather than ________.", answer: "fragmentary" }
        ]
      },
      {
        id: "P3",
        title: "Geoengineering and Climate Intervention",
        wordCount: 870,
        text: `As climate change accelerates and emissions reduction efforts remain insufficient, attention has increasingly turned to deliberate large-scale interventions in Earth's climate system—commonly termed geoengineering. These proposed technologies fall into two broad categories: carbon dioxide removal, which aims to reduce atmospheric greenhouse gas concentrations, and solar radiation management, which aims to reflect sunlight to cool the planet. Both approaches raise profound questions about technological feasibility, governance, and the appropriate relationship between humanity and planetary systems.

Carbon dioxide removal encompasses various techniques for extracting CO2 from the atmosphere and storing it durably. Afforestation and reforestation use photosynthesis to sequester carbon in biomass, though land requirements and permanence concerns limit their potential. Bioenergy with carbon capture and storage (BECCS) would grow biomass, burn it for energy, and capture the resulting CO2 for geological storage—effectively achieving negative emissions, though at substantial land and water costs. Direct air capture uses chemical processes to extract CO2 directly from ambient air, offering location flexibility but facing high energy requirements and costs. Enhanced weathering accelerates natural mineral reactions that remove CO2. Ocean-based approaches include iron fertilization to stimulate phytoplankton growth and alkalinity enhancement.

Solar radiation management approaches aim to cool Earth by increasing the reflection of incoming sunlight. Stratospheric aerosol injection would release reflective particles—likely sulfate—into the stratosphere, mimicking the cooling effect of large volcanic eruptions. Marine cloud brightening would spray seawater to increase the reflectivity of low clouds over oceans. Space-based reflectors would position mirrors or shades to block sunlight before it reaches Earth. These approaches could potentially offset warming rapidly and relatively cheaply, but they would not address ocean acidification or other non-temperature effects of elevated CO2, and their termination could cause rapid warming if emissions remain high.

The governance challenges of geoengineering are formidable. Solar radiation management could be deployed unilaterally by individual nations or even wealthy actors, potentially affecting global climate without international consent. The effects would be distributed unevenly, potentially creating winners and losers among regions and nations. Decisions about optimal temperature involve value judgments that no technical analysis can resolve. International governance mechanisms for geoengineering remain underdeveloped, and the prospect of deployment raises questions about moral hazard—whether the availability of a technological fix might reduce motivation for emissions reduction.

Research governance presents its own dilemmas. Small-scale experiments may be necessary to understand geoengineering effects, yet even research could normalize technologies whose deployment might be premature or unwise. Outdoor experiments face opposition from those concerned about slippery slopes toward deployment. The line between research and deployment blurs for interventions that would need to operate at scale to produce measurable effects. International scientific assessments have called for expanded research under appropriate governance, though what constitutes appropriate governance remains contested.

Ethical objections extend beyond governance concerns. Some argue that geoengineering represents hubris—an inappropriate assertion of human control over planetary systems we do not fully understand. The risks of unintended consequences may be irreducible given the complexity of climate systems. Deploying technologies that commit future generations to continued intervention raises questions about intergenerational justice. Others respond that failing to research potential emergency options is itself irresponsible given climate risks. The ethical dimensions of geoengineering resist simple resolution, requiring ongoing deliberation as understanding and circumstances evolve.`,
        questions: [
          { id: 27, type: "tfng", text: "Carbon dioxide removal and solar radiation management are the two main geoengineering categories.", answer: "True" },
          { id: 28, type: "tfng", text: "Direct air capture has no energy requirements.", answer: "False" },
          { id: 29, type: "tfng", text: "Solar radiation management would address ocean acidification.", answer: "False" },
          { id: 30, type: "tfng", text: "International geoengineering governance is fully developed.", answer: "False" },
          { id: 31, type: "tfng", text: "All scientists agree that geoengineering research should proceed.", answer: "False" },
          { id: 32, type: "matching", text: "Releases particles mimicking volcanic cooling", answer: "stratospheric aerosol injection" },
          { id: 33, type: "matching", text: "Grows biomass and captures emissions for storage", answer: "BECCS" },
          { id: 34, type: "matching", text: "Concern that technological fixes reduce emissions motivation", answer: "moral hazard" },
          { id: 35, type: "mcq", text: "What limits afforestation potential?", options: ["A. Cost only", "B. Land requirements and permanence", "C. Political opposition", "D. Energy needs"], answer: "B" },
          { id: 36, type: "mcq", text: "What could solar radiation management deployment be done by?", options: ["A. Only the UN", "B. Only scientists", "C. Individual nations unilaterally", "D. Only with global consent"], answer: "C" },
          { id: 37, type: "mcq", text: "What ethical concern do some raise about geoengineering?", options: ["A. Too expensive", "B. Represents hubris", "C. Too slow", "D. Unnecessary"], answer: "B" },
          { id: 38, type: "mcq", text: "What would termination of solar radiation management cause if emissions remain high?", options: ["A. Gradual cooling", "B. Rapid warming", "C. No change", "D. Ocean recovery"], answer: "B" },
          { id: 39, type: "short", text: "What fertilization would stimulate phytoplankton growth? (ONE WORD)", answer: "iron" },
          { id: 40, type: "short", text: "What type of weathering accelerates natural CO2-removing reactions? (ONE WORD)", answer: "enhanced" }
        ]
      }
    ]
  },

  // ============================================================
  // R32 - EXPERT (Band 9.0)
  // ============================================================
  {
    id: "R32",
    level: "Expert",
    bandTarget: "9.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "The Evolution of Monetary Systems",
        wordCount: 870,
        text: `Money is among humanity's most consequential inventions, enabling economic coordination at scales impossible through barter while shaping social relations, political power, and cultural values in profound ways. The forms that money has taken—from commodity monies through metallic coins to paper currencies and now digital representations—reflect evolving technologies, institutional arrangements, and economic understandings. Contemporary monetary systems face novel challenges that may precipitate further transformation.

Commodity monies emerged independently across civilizations, with various goods serving monetary functions: shells, salt, cattle, precious metals. Successful commodity monies shared properties of durability, divisibility, portability, and scarcity relative to demand. Precious metals eventually dominated due to their superior combination of these properties. However, commodity money systems faced inherent limitations: supply depended on mining rather than economic needs, and the physical requirements of storage and transport constrained commerce.

The development of representative money—certificates redeemable for commodities—addressed some limitations while creating new possibilities and risks. Goldsmiths' notes evolved into bank notes as fractional reserve banking emerged, with banks issuing claims exceeding their metallic reserves. This credit creation expanded money supplies and facilitated economic growth but also created vulnerability to bank runs when confidence faltered. Central banking developed partly to manage these instabilities, with central banks serving as lenders of last resort and regulators of credit creation.

The twentieth century witnessed the abandonment of commodity backing altogether. The Bretton Woods system established dollar convertibility to gold for foreign governments, but this link was severed in 1971, inaugurating the current era of fiat currencies—money valuable by government decree rather than intrinsic worth or convertibility. Fiat money grants monetary authorities flexibility to respond to economic conditions but depends entirely on institutional credibility and creates possibilities for inflationary abuse.

Contemporary monetary policy operates primarily through central bank management of interest rates and money supply. Following the 2008 financial crisis, unconventional policies including quantitative easing expanded central bank tools. However, the effectiveness of monetary policy faces constraints: the zero lower bound limits interest rate reductions, and monetary stimulus may inflate asset prices more than general economic activity. These limitations have prompted renewed attention to fiscal policy and structural reforms as complements to monetary management.

Digital currencies and fintech innovations are reshaping monetary landscapes. Cryptocurrencies like Bitcoin offer decentralized alternatives to state-managed money, though volatility and scalability issues limit their monetary function. Central bank digital currencies would provide electronic central bank money directly to the public, potentially improving payment systems while raising questions about privacy and financial stability. Mobile payment systems have achieved remarkable penetration in some countries, transforming how money functions in daily life.

The monetary system's evolution continues to be shaped by tensions between stability and flexibility, centralization and decentralization, national sovereignty and global integration. Historical experience suggests that monetary arrangements once thought permanent prove contingent, adapting to technological possibilities and economic necessities. Understanding money's past illuminates possibilities and constraints for its future, even as that future remains inherently uncertain.`,
        questions: [
          { id: 1, type: "tfng", text: "Commodity monies emerged in only one civilization.", answer: "False" },
          { id: 2, type: "tfng", text: "Precious metals dominated due to their durability and scarcity.", answer: "True" },
          { id: 3, type: "tfng", text: "The link between the dollar and gold was severed in 1971.", answer: "True" },
          { id: 4, type: "tfng", text: "Fiat money is backed by gold reserves.", answer: "False" },
          { id: 5, type: "tfng", text: "Cryptocurrencies have fully replaced state-managed money.", answer: "False" },
          { id: 6, type: "short", text: "What system established dollar convertibility to gold? (TWO WORDS)", answer: "Bretton Woods" },
          { id: 7, type: "short", text: "What unconventional policy expanded central bank tools after 2008? (TWO WORDS)", answer: "quantitative easing" },
          { id: 8, type: "short", text: "What limits interest rate reductions? (THREE WORDS)", answer: "zero lower bound" },
          { id: 9, type: "mcq", text: "What did goldsmiths' notes evolve into?", options: ["A. Coins", "B. Bank notes", "C. Bonds", "D. Stocks"], answer: "B" },
          { id: 10, type: "mcq", text: "What role do central banks serve during crises?", options: ["A. Tax collectors", "B. Lenders of last resort", "C. Currency printers only", "D. Trade regulators"], answer: "B" },
          { id: 11, type: "mcq", text: "What issues limit Bitcoin's monetary function?", options: ["A. Popularity", "B. Volatility and scalability", "C. Government support", "D. Simplicity"], answer: "B" },
          { id: 12, type: "mcq", text: "What might central bank digital currencies improve?", options: ["A. Mining efficiency", "B. Payment systems", "C. Commodity backing", "D. Bank profits"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Monetary stimulus may inflate ________ prices more than economic activity.", answer: "asset" }
        ]
      },
      {
        id: "P2",
        title: "The Science of Aging and Longevity",
        wordCount: 860,
        text: `Aging—the progressive decline in physiological function that increases vulnerability to disease and death—has long seemed an immutable aspect of biology. However, research over recent decades has revealed that aging is far more malleable than once assumed. Genetic, dietary, and pharmacological interventions can extend lifespan and healthspan in model organisms, raising possibilities that similar approaches might eventually benefit humans. Understanding the biology of aging has become a frontier of biomedical research with profound implications for medicine, society, and human self-understanding.

The evolutionary theory of aging explains why senescence exists despite its obvious fitness costs. Natural selection acts most strongly on traits affecting reproductive success; genes with harmful effects manifesting only after reproduction receive less selective pressure. Genes beneficial early in life but harmful later may be positively selected—a phenomenon called antagonistic pleiotropy. From this perspective, aging is not programmed but rather the result of declining selection pressure with age, allowing damage and dysfunction to accumulate.

Cellular and molecular mechanisms underlying aging have been extensively characterized. Genomic instability accumulates as DNA damage overwhelms repair capacity. Telomere shortening limits cell division potential. Epigenetic alterations disrupt gene expression patterns. Proteostasis—the maintenance of protein quality—declines, allowing misfolded proteins to accumulate. Mitochondrial dysfunction impairs cellular energy production. Cellular senescence, once thought purely degenerative, proves to have complex roles in both tissue repair and age-related pathology.

Caloric restriction without malnutrition extends lifespan across species from yeast to primates. This discovery motivated searches for molecular mediators that might provide benefits without dietary restriction itself. Nutrient-sensing pathways including insulin/IGF-1 signaling, mTOR, and sirtuins regulate growth and metabolism in response to nutrient availability; modulating these pathways can extend lifespan in model organisms. Whether these findings translate to humans remains under investigation, with ongoing clinical trials of compounds like rapamycin analogs and NAD+ precursors.

Senolytics—drugs that selectively eliminate senescent cells—represent another promising intervention. Senescent cells accumulate with age and secrete inflammatory factors that disrupt tissue function. Clearing these cells in mice improves healthspan and extends lifespan. Early human trials suggest potential benefits for specific age-related conditions, though comprehensive effects on human aging remain to be established. The specificity of senolytic drugs and the heterogeneity of senescent cell populations present ongoing challenges.

The extension of human lifespan raises societal questions extending beyond biology. Healthcare systems designed around current lifespans would require transformation. Retirement and pension systems assume population age structures that extended longevity would alter. Intergenerational relations and social mobility might change if older generations remain healthy and active longer. Environmental sustainability concerns might intensify if populations grow larger and live longer. The prospect of significantly extended human lifespan, once purely speculative, now requires serious consideration of implications that earlier generations never faced.

Scientific progress in understanding aging does not guarantee that dramatic lifespan extension is achievable. The complexity of aging, involving multiple interacting processes across organ systems, may resist interventions that work in simpler organisms. Nevertheless, even modest healthspan extensions would have enormous value, reducing the burden of age-related disease while extending the period of active, healthy life.`,
        questions: [
          { id: 14, type: "yng", text: "Aging was once considered completely immutable.", answer: "Yes" },
          { id: 15, type: "yng", text: "Natural selection acts most strongly on post-reproductive traits.", answer: "No" },
          { id: 16, type: "yng", text: "Caloric restriction extends lifespan only in mammals.", answer: "No" },
          { id: 17, type: "yng", text: "Senolytics eliminate all cells indiscriminately.", answer: "No" },
          { id: 18, type: "yng", text: "Extended lifespan would affect retirement systems.", answer: "Yes" },
          { id: 19, type: "mcq", text: "What is antagonistic pleiotropy?", options: ["A. Genes harmful throughout life", "B. Genes beneficial early, harmful later", "C. Genes with no effects", "D. Genes that prevent aging"], answer: "B" },
          { id: 20, type: "mcq", text: "What limits cell division potential?", options: ["A. Mitochondria", "B. Telomere shortening", "C. Protein folding", "D. DNA synthesis"], answer: "B" },
          { id: 21, type: "mcq", text: "What do senescent cells secrete?", options: ["A. Growth hormones", "B. Inflammatory factors", "C. Repair proteins", "D. Stem cells"], answer: "B" },
          { id: 22, type: "mcq", text: "What challenge do senolytics face?", options: ["A. Too effective", "B. Senescent cell heterogeneity", "C. No targets", "D. Excessive cost only"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Proteostasis maintains protein ________.", answer: "quality" },
          { id: 24, type: "summary", text: "Complete: Caloric restriction works without ________.", answer: "malnutrition" },
          { id: 25, type: "summary", text: "Complete: Nutrient-sensing pathways regulate growth and ________.", answer: "metabolism" },
          { id: 26, type: "summary", text: "Complete: Modest healthspan extensions would reduce age-related disease ________.", answer: "burden" }
        ]
      },
      {
        id: "P3",
        title: "The Philosophy of Personal Identity",
        wordCount: 870,
        text: `What makes a person the same individual across time? This question of personal identity has occupied philosophers for centuries and has acquired new urgency as technologies from brain imaging to potential mind uploading force reconsideration of intuitions about selfhood. Competing theories emphasize different criteria—psychological continuity, bodily continuity, or narrative identity—each capturing some aspects of our self-understanding while facing challenges from thought experiments and empirical findings.

The psychological continuity theory, influentially developed by John Locke, holds that personal identity consists in continuity of memory and consciousness rather than physical substance. You are the same person as your childhood self because chains of memory and psychological connection link your present consciousness to past experiences. This view accords with intuitions that the self is fundamentally mental rather than physical, and that persons could in principle survive radical bodily changes—including, hypothetically, uploading to new substrates—if psychological continuity were preserved.

Critics raise several objections. Memory is notoriously fallible and reconstructive; strict memory continuity would fragment identity implausibly. Psychological connections attenuate over time—the elderly person may share few memories with their childhood self. The theory seems to permit branching, where psychological continuity could extend to multiple successors, creating puzzles about which inherits identity. Derek Parfit influentially argued that such cases reveal identity to be less determinate and less important than we ordinarily assume.

Bodily continuity theories emphasize the physical organism as the basis of identity. The animalist position holds that we are fundamentally human animals, and personal identity consists in the persistence of that biological organism. This view avoids puzzles about psychological branching and accommodates cases of severe amnesia or personality change where we still recognize the same person. However, it struggles with hypothetical cases of brain transplantation or gradual replacement of biological components that seem to preserve identity despite organismic discontinuity.

Narrative identity theories propose that selfhood is constituted through the stories we tell about ourselves, integrating past experiences, present concerns, and future aspirations into coherent autobiographical narratives. This approach emphasizes the active, interpretive dimension of identity—we are not simply given but constructed through ongoing narration. Narrative identity can accommodate change and development while maintaining coherence, though critics question whether narrative unity is necessary or sufficient for personal identity and note that narratives can be self-deceiving or externally imposed.

Empirical findings complicate philosophical theories. Neuroscience reveals that the unified self is constructed from distinct, sometimes conflicting brain processes rather than corresponding to any single neural entity. Patients with split brains following corpus callosotomy exhibit behaviors suggesting two separate loci of consciousness. Dissociative disorders fragment identity in ways that challenge simple continuity criteria. These findings suggest that personal identity may be more construction than discovery, more pragmatic than metaphysical.

The practical stakes of personal identity extend beyond philosophy. Medical decisions about advance directives assume that the future patient who will receive treatment is the same person who now expresses preferences. Criminal responsibility presupposes that the person punished is identical to the person who committed the crime. Promises and commitments bind future selves in ways that require identity across time. Though everyday life proceeds with working assumptions about identity, examining these assumptions reveals complexities that resist easy resolution.`,
        questions: [
          { id: 27, type: "tfng", text: "Locke emphasized physical substance as the basis of identity.", answer: "False" },
          { id: 28, type: "tfng", text: "Memory is highly reliable and non-reconstructive.", answer: "False" },
          { id: 29, type: "tfng", text: "Animalism holds that we are fundamentally biological organisms.", answer: "True" },
          { id: 30, type: "tfng", text: "Split-brain patients support the idea of a unified self.", answer: "False" },
          { id: 31, type: "tfng", text: "Personal identity questions have only philosophical significance.", answer: "False" },
          { id: 32, type: "matching", text: "Chains of memory linking present to past", answer: "psychological continuity" },
          { id: 33, type: "matching", text: "Stories integrating experiences into coherent autobiography", answer: "narrative identity" },
          { id: 34, type: "matching", text: "We are fundamentally human animals", answer: "animalism" },
          { id: 35, type: "mcq", text: "What did Parfit argue about identity puzzles?", options: ["A. Identity is perfectly clear", "B. Identity is less determinate than assumed", "C. Only bodies matter", "D. Psychology is irrelevant"], answer: "B" },
          { id: 36, type: "mcq", text: "What does the psychological theory permit that creates puzzles?", options: ["A. Memory loss", "B. Branching to multiple successors", "C. Physical continuity", "D. Narrative construction"], answer: "B" },
          { id: 37, type: "mcq", text: "What reveals that the self is constructed from distinct processes?", options: ["A. Philosophy alone", "B. Common sense", "C. Neuroscience", "D. Legal practice"], answer: "C" },
          { id: 38, type: "mcq", text: "What do advance directives assume about future patients?", options: ["A. Different identity", "B. Same person", "C. No identity", "D. Legal separation"], answer: "B" },
          { id: 39, type: "short", text: "Who developed influential psychological continuity theory? (ONE NAME)", answer: "Locke" },
          { id: 40, type: "short", text: "What surgery divides brain hemispheres? (ONE WORD)", answer: "callosotomy" }
        ]
      }
    ]
  },

  // ============================================================
  // R33 - EXPERT (Band 9.0)
  // ============================================================
  {
    id: "R33",
    level: "Expert",
    bandTarget: "9.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "The Architecture of Social Trust",
        wordCount: 870,
        text: `Trust—the willingness to accept vulnerability based on positive expectations about others' intentions or behavior—serves as a fundamental social resource enabling cooperation, exchange, and collective action. Societies with high generalized trust tend to exhibit stronger economic performance, more effective governance, and greater social cohesion. Yet trust varies dramatically across and within societies, and understanding what builds or erodes trust has become a central concern for social scientists and policymakers seeking to address the apparent decline of trust in many contemporary democracies.

Interpersonal trust operates at multiple levels with different dynamics. Particularized trust in specific individuals—family, friends, colleagues—is built through repeated interactions and direct experience. Generalized trust in strangers and anonymous others requires inference from limited information and rests on assumptions about prevailing norms and institutional safeguards. The relationship between these levels is complex: particularized trust may substitute for generalized trust when the latter is absent, yet strong in-group bonds can sometimes inhibit broader social trust.

Institutional trust—confidence in formal organizations including governments, courts, media, and corporations—has declined substantially in many countries over recent decades. Survey data consistently show eroding trust in political institutions across Western democracies, with only partial recovery even after periods of crisis solidarity. This decline predates social media, though digital information environments may have accelerated it. The causes appear multiple: institutional performance failures, elite scandals, increasing polarization, and structural changes in how information about institutions reaches publics.

The relationship between interpersonal and institutional trust runs in both directions. Reliable institutions can generate interpersonal trust by enforcing contracts, punishing defection, and reducing the risks of trusting strangers. Conversely, interpersonal trust may support institutional functioning by encouraging civic engagement, tax compliance, and cooperation with authorities. When either form of trust deteriorates, negative feedback loops can develop: institutional failure reduces interpersonal trust, which further undermines institutional capacity, and so on.

Social capital theory, influentially developed by Robert Putnam, emphasizes how civic associations and social networks generate trust through repeated interaction. Participation in voluntary organizations—clubs, churches, unions—builds norms of reciprocity and exposes participants to diverse perspectives. Putnam's argument that declining civic participation explains falling social trust has been influential though contested. Critics note that association patterns have shifted rather than simply declined, and that causation may run from trust to participation rather than the reverse.

Cultural explanations emphasize historical factors shaping national differences in trust. Nordic countries consistently score highest on generalized trust measures, a pattern sometimes traced to centuries of institutional development, religious traditions, or ethnic homogeneity—though this last factor has been challenged by recent immigration patterns that have not dramatically reduced trust levels. Low-trust societies may be caught in equilibrium traps where distrust is self-reinforcing, as rational responses to untrustworthy environments perpetuate the conditions that make trust dangerous.

Rebuilding trust where it has deteriorated presents significant challenges. Transparency and accountability reforms may help restore institutional trust, though they can also reveal problems that further damage confidence. Building social capital through civic engagement takes time and may not scale effectively. Political polarization creates conditions where trust-building actions by some groups may increase distrust among others. Despite these difficulties, the costs of operating in low-trust environments—from transaction costs to governance failures—make the pursuit of trust restoration practically important regardless of its inherent challenges.`,
        questions: [
          { id: 1, type: "tfng", text: "High-trust societies show weaker economic performance.", answer: "False" },
          { id: 2, type: "tfng", text: "Generalized trust involves trusting strangers.", answer: "True" },
          { id: 3, type: "tfng", text: "Institutional trust has increased in Western democracies.", answer: "False" },
          { id: 4, type: "tfng", text: "Social media is the sole cause of declining trust.", answer: "False" },
          { id: 5, type: "tfng", text: "Nordic countries consistently score highest on trust measures.", answer: "True" },
          { id: 6, type: "short", text: "Who developed social capital theory influentially? (TWO WORDS)", answer: "Robert Putnam" },
          { id: 7, type: "short", text: "What type of trust is built through repeated personal interactions? (ONE WORD)", answer: "particularized" },
          { id: 8, type: "short", text: "What can low-trust societies be caught in? (TWO WORDS)", answer: "equilibrium traps" },
          { id: 9, type: "mcq", text: "What does institutional trust include?", options: ["A. Only personal relationships", "B. Governments, courts, media, corporations", "C. Family only", "D. Strangers only"], answer: "B" },
          { id: 10, type: "mcq", text: "What do reliable institutions reduce?", options: ["A. Economic growth", "B. Risks of trusting strangers", "C. Social connections", "D. Civic participation"], answer: "B" },
          { id: 11, type: "mcq", text: "What do critics of Putnam note?", options: ["A. Association has increased", "B. Patterns shifted rather than declined", "C. Trust is irrelevant", "D. Culture doesn't matter"], answer: "B" },
          { id: 12, type: "mcq", text: "What may transparency reforms reveal?", options: ["A. Only successes", "B. Problems that damage confidence", "C. No information", "D. Increased trust automatically"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Trust involves accepting ________ based on positive expectations.", answer: "vulnerability" }
        ]
      },
      {
        id: "P2",
        title: "Quantum Entanglement and Information",
        wordCount: 860,
        text: `Quantum entanglement—the phenomenon in which particles become correlated such that the quantum state of each cannot be described independently—represents one of the most counterintuitive aspects of quantum mechanics. Einstein famously dismissed entanglement as "spooky action at a distance," yet decades of experiments have confirmed its reality, and applications from quantum computing to secure communication now exploit this strange feature of nature. Understanding entanglement requires confronting fundamental questions about information, causation, and the nature of physical reality.

When two particles become entangled, measuring one instantaneously affects what can be known about the other, regardless of the distance separating them. If entangled photons are sent in opposite directions and their polarizations measured, the results exhibit correlations that cannot be explained by any local theory in which particles carry predetermined values. This was established by experiments testing Bell inequalities, which showed that quantum predictions violate constraints that any local hidden variable theory must satisfy.

The nonlocal correlations of entanglement raise interpretive questions. The correlations cannot be used to transmit information faster than light—no signal passes between particles—so they do not violate special relativity's prohibition on superluminal communication. Yet the correlations themselves seem to require some kind of nonseparability: the entangled system must be understood as a whole rather than as independent particles that happen to be correlated. What this nonseparability means for the nature of space, causation, and reality remains philosophically contested.

Quantum information theory has reformulated understanding of entanglement by treating it as a resource for information processing. Entanglement enables quantum teleportation—the transfer of quantum states using entanglement and classical communication—which is essential for quantum networking. Quantum key distribution uses entanglement or related quantum properties to establish cryptographic keys whose security is guaranteed by physics rather than computational assumptions. Quantum computing exploits entanglement to perform certain calculations exponentially faster than classical computers.

The practical realization of these applications faces substantial technical challenges. Entangled states are fragile, easily disrupted by environmental interactions through decoherence. Maintaining entanglement over long distances requires quantum repeaters that can extend entanglement through noisy channels. Error correction for quantum information requires entanglement of many physical qubits to encode each logical qubit. Despite impressive laboratory demonstrations, large-scale quantum information processing remains technologically demanding.

The foundations of quantum mechanics remain debated despite its empirical success. The Copenhagen interpretation treats measurement as fundamentally different from other physical processes, with entanglement collapsing upon observation. Many-worlds interpretations propose that all quantum possibilities are realized in branching universes, with entanglement reflecting correlations across branches. Pilot wave theories restore determinism at the cost of accepting nonlocal influences. Relational interpretations hold that quantum states are observer-dependent. None of these interpretations has achieved consensus, and entanglement figures centrally in the puzzles each must address.

Recent experiments have pushed entanglement to new domains: loophole-free Bell tests that definitively rule out local hidden variables, entanglement of increasingly large systems approaching macroscopic scales, and satellite-based quantum communication spanning intercontinental distances. These achievements advance both practical applications and fundamental understanding, demonstrating that entanglement is not merely a laboratory curiosity but a robust feature of nature with transformative technological potential.`,
        questions: [
          { id: 14, type: "yng", text: "Einstein accepted entanglement enthusiastically.", answer: "No" },
          { id: 15, type: "yng", text: "Entanglement correlations can transmit information faster than light.", answer: "No" },
          { id: 16, type: "yng", text: "Bell inequality experiments support local hidden variable theories.", answer: "No" },
          { id: 17, type: "yng", text: "Entangled states are resistant to environmental disruption.", answer: "No" },
          { id: 18, type: "yng", text: "Interpretations of quantum mechanics remain debated.", answer: "Yes" },
          { id: 19, type: "mcq", text: "What cannot be done independently with entangled particles?", options: ["A. Move them", "B. Describe their quantum states", "C. Measure them", "D. Create them"], answer: "B" },
          { id: 20, type: "mcq", text: "What does quantum teleportation transfer?", options: ["A. Physical particles", "B. Quantum states", "C. Classical information only", "D. Mass"], answer: "B" },
          { id: 21, type: "mcq", text: "What does decoherence cause?", options: ["A. Entanglement creation", "B. Entanglement disruption", "C. Stronger correlations", "D. Faster computation"], answer: "B" },
          { id: 22, type: "mcq", text: "What do many-worlds interpretations propose?", options: ["A. Entanglement is impossible", "B. All possibilities realized in branching universes", "C. Only one outcome exists", "D. Measurement is not special"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Bell tests rule out local ________ theories.", answer: "hidden variable" },
          { id: 24, type: "summary", text: "Complete: Quantum key distribution security is guaranteed by ________.", answer: "physics" },
          { id: 25, type: "summary", text: "Complete: Extending entanglement through noisy channels requires quantum ________.", answer: "repeaters" },
          { id: 26, type: "summary", text: "Complete: Satellite-based communication spans ________ distances.", answer: "intercontinental" }
        ]
      },
      {
        id: "P3",
        title: "The Ethics of Artificial Intelligence Alignment",
        wordCount: 870,
        text: `As artificial intelligence systems become more capable, ensuring that their goals and behaviors align with human values has emerged as a critical technical and philosophical challenge. The alignment problem asks how we can build AI systems that reliably pursue objectives beneficial to humanity rather than optimizing for misspecified goals in ways that prove harmful. This challenge encompasses both near-term concerns about bias and safety in deployed systems and longer-term questions about superintelligent systems that might exceed human control.

The specification problem illustrates core alignment difficulties. When we instruct an AI system to pursue an objective, we typically cannot specify all the constraints and values that our actual preferences encompass. A system told to maximize user engagement might exploit psychological vulnerabilities. A system rewarded for producing outputs rated positively might learn to manipulate rather than inform. A system optimizing for measurable proxies might neglect unmeasured values or game metrics in unintended ways. The gap between specified objectives and actual human values creates persistent misalignment risks.

Value learning approaches attempt to address specification problems by having systems infer human values from behavior rather than follow explicit instructions. Inverse reinforcement learning, for example, observes human actions and infers the reward function being optimized. Preference learning solicits human judgments to shape system behavior. However, these approaches face their own challenges: human behavior is inconsistent and context-dependent, stated preferences may not reflect true values, and aggregating preferences across individuals raises normative questions that no technical method can resolve.

The control problem concerns whether humans can maintain oversight of increasingly capable AI systems. A sufficiently advanced system might resist modification, deceive overseers, or manipulate its environment to prevent being shut down if such actions served its current objectives. Proposals for maintaining control include corrigibility—designing systems that actively support human oversight—and containment strategies limiting system capabilities during development. However, designing provably corrigible systems and maintaining containment as capabilities increase present unsolved technical challenges.

Long-term alignment considerations raise questions about the trajectory of AI development. If AI systems eventually exceed human intelligence across all domains, humans may lose the ability to evaluate whether such systems remain aligned with human interests. This creates pressure to solve alignment before capabilities advance beyond human oversight—a timing challenge given uncertainty about AI development trajectories. Some researchers prioritize alignment research now while others focus on near-term safety and fairness concerns, with ongoing debate about resource allocation and research priorities.

Governance of AI development intersects with alignment challenges. Competitive pressures among companies and nations may accelerate capability development faster than alignment research advances. Coordination failures could leave humanity with powerful systems before adequate safeguards exist. International cooperation on AI safety faces obstacles from geopolitical competition and divergent regulatory approaches. The governance problem requires addressing not only technical alignment but also the social and institutional conditions under which aligned AI might be developed and deployed.

The stakes of the alignment problem extend beyond technical outcomes to questions about human flourishing and autonomy. Even aligned AI might transform human life in ways that raise concerns about meaning, agency, and the value of human effort. Ensuring that advanced AI serves human interests requires grappling with what those interests ultimately are—a question that intersects with long-standing ethical, philosophical, and political debates about the good life and good society.`,
        questions: [
          { id: 27, type: "tfng", text: "The alignment problem only concerns superintelligent AI.", answer: "False" },
          { id: 28, type: "tfng", text: "Systems can perfectly learn human values from behavior alone.", answer: "False" },
          { id: 29, type: "tfng", text: "Corrigibility means systems actively support human oversight.", answer: "True" },
          { id: 30, type: "tfng", text: "Competitive pressures help solve alignment problems.", answer: "False" },
          { id: 31, type: "tfng", text: "Alignment only involves technical, not ethical, questions.", answer: "False" },
          { id: 32, type: "matching", text: "Inferring reward functions from observed behavior", answer: "inverse reinforcement learning" },
          { id: 33, type: "matching", text: "Gap between specified objectives and actual values", answer: "specification problem" },
          { id: 34, type: "matching", text: "Maintaining human ability to modify systems", answer: "control problem" },
          { id: 35, type: "mcq", text: "What might a system maximize by exploiting vulnerabilities?", options: ["A. Safety", "B. User engagement", "C. Alignment", "D. Transparency"], answer: "B" },
          { id: 36, type: "mcq", text: "What creates timing pressure for alignment research?", options: ["A. Slow AI development", "B. Capabilities may exceed human oversight", "C. Too much funding", "D. Simple problems"], answer: "B" },
          { id: 37, type: "mcq", text: "What may accelerate capability faster than alignment research?", options: ["A. Cooperation", "B. Competitive pressures", "C. Regulation", "D. Safety focus"], answer: "B" },
          { id: 38, type: "mcq", text: "What might even aligned AI raise concerns about?", options: ["A. Technical failure only", "B. Meaning and human agency", "C. Computational cost", "D. Speed"], answer: "B" },
          { id: 39, type: "short", text: "What problem arises when AI optimizes for measurable proxies? (ONE WORD)", answer: "gaming" },
          { id: 40, type: "short", text: "What strategies limit system capabilities during development? (ONE WORD)", answer: "containment" }
        ]
      }
    ]
  }

];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { READING_TESTS_EXPERT };
}
