// ============================================================
// READING TESTS - ADVANCED LEVEL (R14-R25)
// Band Target: 8.0-8.5
// Migrate North Academy - Evolve Tier
// ============================================================

const READING_TESTS_ADVANCED = [

  // ============================================================
  // R14 - ADVANCED (Band 8.0)
  // ============================================================
  {
    id: "R14",
    level: "Advanced",
    bandTarget: "8.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Consciousness and the Mind-Body Problem",
        wordCount: 870,
        text: `The nature of consciousness represents one of the most profound puzzles facing contemporary science and philosophy. How does subjective experience arise from the physical processes of the brain? Why does the sensation of seeing red feel a particular way, distinct from seeing blue or hearing a sound? These questions, which constitute what philosophers call the "mind-body problem," have generated centuries of debate and continue to resist definitive resolution despite remarkable advances in neuroscience.

Dualist approaches, historically dominant in Western philosophy, posit that mind and body are fundamentally distinct substances. René Descartes famously argued that the mind, being non-physical and indivisible, differs categorically from the extended, divisible matter of the body. This position appeals to intuitions about the apparent irreducibility of mental experience to physical description, yet it faces the persistent challenge of explaining how non-physical mind could interact with physical brain—the so-called interaction problem that troubled Descartes himself.

Materialist theories, now predominant in scientific circles, hold that mental states are ultimately physical states. Identity theory proposes that mental states simply are brain states—pain, for instance, is identical to a specific pattern of neural firing. Functionalism offers a more flexible materialist account, defining mental states by their functional roles rather than their physical composition. On this view, what makes something a pain is not its physical substrate but its causal relationships to sensory inputs, behavioral outputs, and other mental states.

The philosopher David Chalmers has influentially distinguished between "easy" and "hard" problems of consciousness. Easy problems, though scientifically challenging, involve explaining cognitive functions like memory, attention, and behavioral control in terms of neural mechanisms. The hard problem concerns why these processes are accompanied by subjective experience at all—why there is something it is like to be conscious rather than mere information processing occurring in the dark.

Some researchers argue that the hard problem reflects conceptual confusion rather than genuine mystery. Daniel Dennett contends that once we fully explain the functional and behavioral aspects of consciousness, nothing remains to be explained—the sense that something is missing reflects lingering dualist intuitions rather than actual explanatory gaps. Others maintain that subjective experience constitutes a genuinely novel feature of reality that cannot be captured by functional description alone.

Neuroscientific research has identified neural correlates of consciousness—brain activities that correspond to conscious experiences. Damage to specific brain regions produces specific deficits in conscious experience, and brain imaging reveals patterns of activity associated with different conscious states. Yet correlation is not explanation, and how neural activity gives rise to subjective experience remains unclear. The explanatory gap between physical processes and phenomenal consciousness has not been closed.

Integrated Information Theory, developed by Giulio Tononi, proposes that consciousness corresponds to integrated information processing. Systems that integrate information in specific ways possess consciousness to varying degrees, regardless of their physical composition. This theory offers precise mathematical formulations and makes testable predictions, though its core claims remain controversial. Alternative theories emphasize global workspace dynamics, higher-order representations, or quantum processes as keys to understanding consciousness.

The implications of consciousness research extend beyond academic philosophy. Questions about animal consciousness bear on ethical treatment of other species. The possibility of machine consciousness raises profound questions about artificial intelligence and its moral status. Medical applications include distinguishing conscious awareness in patients with severe brain injuries and understanding disorders of consciousness. Whether consciousness can ultimately be explained scientifically or transcends naturalistic explanation remains one of the deepest questions confronting human inquiry.`,
        questions: [
          { id: 1, type: "tfng", text: "Dualism holds that mind and body are the same substance.", answer: "False" },
          { id: 2, type: "tfng", text: "Descartes struggled to explain mind-body interaction.", answer: "True" },
          { id: 3, type: "tfng", text: "Identity theory claims mental states are brain states.", answer: "True" },
          { id: 4, type: "tfng", text: "The hard problem concerns memory and attention.", answer: "False" },
          { id: 5, type: "tfng", text: "Dennett believes the hard problem reflects conceptual confusion.", answer: "True" },
          { id: 6, type: "short", text: "Who distinguished between easy and hard problems? (ONE WORD)", answer: "Chalmers" },
          { id: 7, type: "short", text: "What theory defines mental states by causal relationships? (ONE WORD)", answer: "functionalism" },
          { id: 8, type: "short", text: "Who developed Integrated Information Theory? (ONE WORD)", answer: "Tononi" },
          { id: 9, type: "mcq", text: "What is the interaction problem?", options: ["A. How neurons communicate", "B. How non-physical mind affects physical brain", "C. How memories form", "D. How attention works"], answer: "B" },
          { id: 10, type: "mcq", text: "What have neuroscientists identified?", options: ["A. The soul's location", "B. Neural correlates of consciousness", "C. Proof of dualism", "D. The origin of thoughts"], answer: "B" },
          { id: 11, type: "mcq", text: "What does Integrated Information Theory propose?", options: ["A. Only humans are conscious", "B. Consciousness requires neurons", "C. Consciousness corresponds to integrated information", "D. Machines cannot be conscious"], answer: "C" },
          { id: 12, type: "mcq", text: "What ethical question does consciousness research raise?", options: ["A. Treatment of other species", "B. Tax policy", "C. Immigration law", "D. Environmental regulation"], answer: "A" },
          { id: 13, type: "summary", text: "Complete: Correlation between brain activity and experience is not ________.", answer: "explanation" }
        ]
      },
      {
        id: "P2",
        title: "Nanotechnology: Promise and Peril",
        wordCount: 860,
        text: `Nanotechnology—the manipulation of matter at scales between 1 and 100 nanometers—has emerged as one of the most transformative technological frontiers of the twenty-first century. At this scale, materials exhibit properties dramatically different from their bulk counterparts, opening possibilities for revolutionary applications in medicine, electronics, energy, and manufacturing. Yet these same capabilities raise concerns about safety, environmental impact, and the potential for misuse that demand careful consideration.

The foundations of nanotechnology trace to Richard Feynman's 1959 lecture "There's Plenty of Room at the Bottom," which envisioned manipulating individual atoms. Practical developments accelerated with the invention of scanning tunneling microscopy in 1981, which enabled visualization and manipulation of atomic structures. The discovery of carbon nanotubes and fullerenes revealed materials with extraordinary strength and electrical properties, while advances in self-assembly techniques enabled construction of complex nanostructures.

Medical applications represent perhaps the most compelling promise of nanotechnology. Nanoparticles can deliver drugs directly to diseased cells, reducing side effects and improving efficacy. Cancer treatments using targeted nanoparticles can attack tumors while sparing healthy tissue. Diagnostic applications include nanodevices that detect disease markers at extremely low concentrations, enabling earlier intervention. More speculatively, researchers envision nanorobots that could repair cellular damage, clear arterial blockages, or even reverse aging processes.

Electronics and computing stand to be transformed by nanotechnology. As conventional silicon-based transistors approach physical limits to miniaturization, carbon nanotubes and other nanomaterials offer pathways to continued performance improvements. Quantum dots enable displays with superior color and efficiency. Memristors and other nanoelectronic devices may enable new computing architectures. The eventual development of molecular electronics could produce computers of unprecedented power and efficiency.

Energy applications address pressing sustainability challenges. Nanostructured materials can dramatically improve solar cell efficiency by capturing more of the light spectrum and reducing losses. Nanotechnology enables lighter, more powerful batteries for electric vehicles and grid storage. Catalysts based on nanoparticles improve fuel cell performance and enable more efficient chemical processes. These applications could accelerate the transition away from fossil fuels.

Environmental concerns about nanotechnology center on the behavior of engineered nanomaterials in biological systems and ecosystems. The novel properties that make nanomaterials useful may also make them hazardous in ways that bulk materials are not. Nanoparticles can penetrate cell membranes, potentially causing damage that larger particles cannot. The long-term fate of nanomaterials in the environment remains poorly understood, and the adequacy of existing regulatory frameworks has been questioned.

The dual-use potential of nanotechnology raises security concerns. Technologies developed for beneficial purposes could potentially be adapted for weapons or surveillance applications. Molecular manufacturing, if achieved, could enable rapid production of weapons or other dangerous materials. Some analysts have raised concerns about nanotechnology arms races or the development of autonomous weapons systems incorporating nanotechnology.

Governance of nanotechnology must balance promoting beneficial applications against managing risks. Precautionary approaches may impede valuable innovations, while permissive regulation could allow harms that prove difficult to reverse. International coordination faces challenges given different national approaches and the competitive dynamics of technological development. Engaging public deliberation about nanotechnology futures may help navigate these complex tradeoffs.`,
        questions: [
          { id: 14, type: "yng", text: "Feynman's 1959 lecture envisioned atomic manipulation.", answer: "Yes" },
          { id: 15, type: "yng", text: "Scanning tunneling microscopy was invented in 1991.", answer: "No" },
          { id: 16, type: "yng", text: "Nanoparticles can deliver drugs to specific cells.", answer: "Yes" },
          { id: 17, type: "yng", text: "Carbon nanotubes are weaker than conventional materials.", answer: "No" },
          { id: 18, type: "yng", text: "Nanotechnology regulation is consistent across all nations.", answer: "No" },
          { id: 19, type: "mcq", text: "What scale does nanotechnology operate at?", options: ["A. 1-100 meters", "B. 1-100 millimeters", "C. 1-100 nanometers", "D. 1-100 micrometers"], answer: "C" },
          { id: 20, type: "mcq", text: "What environmental concern exists about nanomaterials?", options: ["A. They are too expensive", "B. They can penetrate cell membranes", "C. They are too large", "D. They reflect light"], answer: "B" },
          { id: 21, type: "mcq", text: "What energy application does nanotechnology enable?", options: ["A. Coal mining", "B. Oil drilling", "C. Improved solar cells", "D. Nuclear fission"], answer: "C" },
          { id: 22, type: "mcq", text: "What security concern does the passage mention?", options: ["A. Internet hacking", "B. Dual-use potential for weapons", "C. Bank robbery", "D. Identity theft"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Materials at nanoscale exhibit ________ different from bulk counterparts.", answer: "properties" },
          { id: 24, type: "summary", text: "Complete: Molecular manufacturing could enable rapid ________ of weapons.", answer: "production" },
          { id: 25, type: "summary", text: "Complete: Precautionary approaches may impede valuable ________.", answer: "innovations" },
          { id: 26, type: "summary", text: "Complete: Public ________ may help navigate complex tradeoffs.", answer: "deliberation" }
        ]
      },
      {
        id: "P3",
        title: "International Trade and Development",
        wordCount: 880,
        text: `The relationship between international trade and economic development has been debated by economists and policymakers for centuries. Classical theories championed free trade as mutually beneficial, while critics have argued that trade relationships often perpetuate inequalities between nations. Contemporary evidence suggests that trade can promote development under certain conditions, but that the distribution of benefits depends heavily on domestic policies and institutional frameworks.

David Ricardo's theory of comparative advantage, articulated in 1817, provided the foundational argument for free trade. Ricardo demonstrated that even if one country is more efficient at producing everything, both countries benefit from specializing in goods where their relative efficiency is greatest and trading for other goods. This elegant theory suggested that free trade represents a positive-sum game benefiting all participants, a conclusion that supported dismantling trade barriers.

The historical record, however, reveals a more complex picture. Britain, the leading advocate of free trade in the nineteenth century, had developed its industries behind protective tariffs before promoting liberalization. The United States, Germany, and Japan similarly protected infant industries during their development phases. Ha-Joon Chang and other economists argue that developed countries "kicked away the ladder" by promoting free trade policies that prevent developing countries from using the same protectionist strategies that enabled their own development.

The post-World War II trading system, institutionalized through GATT and later the WTO, progressively reduced tariffs on manufactured goods while maintaining protections in agriculture and other sectors important to developed countries. Developing countries were often pressured to liberalize rapidly through structural adjustment programs, sometimes with damaging results. The asymmetries of the trading system have generated persistent tensions in multilateral negotiations.

Export-oriented industrialization has proven successful for some developing countries, most notably the East Asian "tigers." South Korea, Taiwan, Singapore, and Hong Kong achieved remarkable growth through manufactured exports, followed more recently by China on a vastly larger scale. These successes, however, involved substantial state intervention in guiding industrial development, investing in education and infrastructure, and managing currency values—not simply opening markets to free trade.

Critics of trade liberalization point to several concerns. Opening to trade can destroy domestic industries that cannot compete with imports, creating unemployment and social dislocation. The race to attract foreign investment may lead countries to weaken labor and environmental standards. Terms of trade for primary commodity exporters have historically deteriorated relative to manufactured goods, trapping some countries in low-value production. Financial liberalization accompanying trade opening has contributed to destabilizing capital flows.

Proponents counter that trade provides access to larger markets, enabling economies of scale and specialization. Imports of capital goods and technology can boost productivity. Competition from imports disciplines domestic firms and benefits consumers. Foreign direct investment brings not only capital but also technology transfer and management expertise. While adjustment costs are real, they can be managed through appropriate policies, and the long-term gains from trade integration outweigh short-term disruptions.

Contemporary trade agreements extend far beyond tariff reduction, addressing intellectual property, investment protections, services, and regulatory harmonization. These "deep integration" provisions have attracted criticism for constraining policy space that governments need for development strategies. Investor-state dispute settlement mechanisms have been particularly controversial, allowing corporations to sue governments over regulations affecting their investments. The balance between facilitating trade and preserving regulatory autonomy remains contentious.

The question of whether trade promotes development thus admits no simple answer. Trade can be a powerful engine of growth under appropriate conditions, but those conditions include complementary domestic policies, adequate infrastructure, educated workforces, and functioning institutions. Countries that have benefited most from trade have typically combined openness with strategic industrial policies rather than relying on markets alone.`,
        questions: [
          { id: 27, type: "tfng", text: "Ricardo's theory suggests free trade benefits all participants.", answer: "True" },
          { id: 28, type: "tfng", text: "Britain developed its industries under free trade policies.", answer: "False" },
          { id: 29, type: "tfng", text: "The East Asian tigers succeeded through pure free market policies.", answer: "False" },
          { id: 30, type: "tfng", text: "Terms of trade for commodity exporters have historically improved.", answer: "False" },
          { id: 31, type: "tfng", text: "Contemporary trade agreements only address tariff reduction.", answer: "False" },
          { id: 32, type: "matching", text: "Foundational argument for specialization and trade", answer: "comparative advantage" },
          { id: 33, type: "matching", text: "Programs that pressured rapid liberalization", answer: "structural adjustment" },
          { id: 34, type: "matching", text: "Allows corporations to sue governments", answer: "investor-state dispute settlement" },
          { id: 35, type: "mcq", text: "What did Chang argue about developed countries?", options: ["A. They always supported free trade", "B. They kicked away the ladder", "C. They never used tariffs", "D. They oppose development"], answer: "B" },
          { id: 36, type: "mcq", text: "What can opening to trade destroy?", options: ["A. Export markets", "B. Domestic industries", "C. Government revenue", "D. Natural resources"], answer: "B" },
          { id: 37, type: "mcq", text: "What do proponents say competition from imports provides?", options: ["A. Unemployment", "B. Inflation", "C. Discipline for domestic firms", "D. Trade deficits"], answer: "C" },
          { id: 38, type: "mcq", text: "What have successful trading countries typically combined?", options: ["A. Isolation and protection", "B. Openness with strategic industrial policies", "C. Pure free markets", "D. Complete autarky"], answer: "B" },
          { id: 39, type: "short", text: "When did Ricardo articulate comparative advantage theory? (YEAR)", answer: "1817" },
          { id: 40, type: "short", text: "What organizations institutionalized the post-WWII trading system? (TWO ABBREVIATIONS)", answer: "GATT WTO" }
        ]
      }
    ]
  },

  // ============================================================
  // R15 - ADVANCED (Band 8.0)
  // ============================================================
  {
    id: "R15",
    level: "Advanced",
    bandTarget: "8.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Quantum Computing and Information",
        wordCount: 870,
        text: `Quantum computing represents a fundamentally different approach to information processing that exploits the strange properties of quantum mechanics to perform calculations impossible for classical computers. While conventional computers encode information in bits that exist as either 0 or 1, quantum computers use quantum bits or qubits that can exist in superposition—simultaneously representing both states until measured. This property, combined with quantum entanglement and interference, enables computational capabilities that could transform cryptography, drug discovery, materials science, and artificial intelligence.

The theoretical foundations of quantum computing emerged in the 1980s when physicist Richard Feynman proposed that quantum systems might be efficiently simulated only by other quantum systems. David Deutsch subsequently formalized the concept of a universal quantum computer. Peter Shor's 1994 algorithm demonstrating that quantum computers could factor large numbers exponentially faster than classical computers generated intense interest, as this capability would break the cryptographic systems protecting most digital communications.

Quantum superposition allows qubits to encode vastly more information than classical bits. A quantum computer with n qubits can simultaneously represent 2^n states, compared to the single state of n classical bits. This exponential scaling suggests that relatively modest numbers of qubits could exceed the computational capacity of any conceivable classical computer. However, extracting useful results from quantum computation requires careful algorithm design, as measurement collapses the superposition to a single outcome.

Quantum entanglement—what Einstein famously called "spooky action at a distance"—creates correlations between qubits that persist regardless of physical separation. Entangled qubits are not independent; measuring one instantly affects the state of its entangled partner. This property enables quantum computers to explore solution spaces in parallel and perform operations that would require exponentially more steps classically. Entanglement is essential to the quantum algorithms that promise computational advantages.

Building practical quantum computers faces formidable engineering challenges. Qubits are extraordinarily fragile, losing their quantum properties through decoherence when they interact with their environment. Current quantum computers require extreme cooling to near absolute zero or other isolation techniques to maintain quantum states. Error rates remain high, necessitating error correction schemes that multiply the number of physical qubits required. The largest quantum computers today have hundreds of qubits, far short of the millions that may be needed for practical applications.

Several technological approaches compete to realize scalable quantum computing. Superconducting circuits, used by IBM and Google, encode qubits in the quantum states of superconducting materials. Trapped ion computers, pursued by IonQ and Honeywell, use electromagnetic fields to isolate individual atoms whose quantum states serve as qubits. Photonic approaches encode information in properties of light particles. Topological quantum computing, still largely theoretical, promises inherently error-resistant qubits based on exotic quantum states of matter.

Near-term applications may exploit "quantum advantage" for specific problems even without fully fault-tolerant quantum computers. Quantum simulation of molecular systems could accelerate drug discovery and materials development. Quantum machine learning algorithms might identify patterns in complex datasets more efficiently than classical methods. Quantum optimization could improve logistics, financial modeling, and resource allocation. However, skeptics caution that practical quantum advantage for commercially relevant problems remains unproven.

The cryptographic implications of quantum computing have driven substantial investment. Shor's algorithm threatens the public-key cryptography securing financial transactions, government communications, and digital infrastructure. Post-quantum cryptography—classical algorithms resistant to quantum attack—is being developed and standardized to replace vulnerable systems before large-scale quantum computers exist. Quantum key distribution offers an alternative approach, using quantum mechanics to detect any eavesdropping on communications.`,
        questions: [
          { id: 1, type: "tfng", text: "Classical computers use qubits for processing.", answer: "False" },
          { id: 2, type: "tfng", text: "Qubits can exist in superposition of states.", answer: "True" },
          { id: 3, type: "tfng", text: "Feynman proposed quantum computing concepts in the 1980s.", answer: "True" },
          { id: 4, type: "tfng", text: "Shor's algorithm makes current cryptography more secure.", answer: "False" },
          { id: 5, type: "tfng", text: "Current quantum computers have millions of qubits.", answer: "False" },
          { id: 6, type: "short", text: "What causes qubits to lose quantum properties? (ONE WORD)", answer: "decoherence" },
          { id: 7, type: "short", text: "What did Einstein call entanglement? (FOUR WORDS)", answer: "spooky action at distance" },
          { id: 8, type: "short", text: "What type of cryptography resists quantum attacks? (TWO WORDS)", answer: "post-quantum" },
          { id: 9, type: "mcq", text: "How many states can n qubits simultaneously represent?", options: ["A. n states", "B. 2n states", "C. n^2 states", "D. 2^n states"], answer: "D" },
          { id: 10, type: "mcq", text: "What do superconducting quantum computers require?", options: ["A. Room temperature", "B. Extreme cooling", "C. High pressure", "D. Intense light"], answer: "B" },
          { id: 11, type: "mcq", text: "What could quantum simulation accelerate?", options: ["A. Coal mining", "B. Drug discovery", "C. Farming", "D. Construction"], answer: "B" },
          { id: 12, type: "mcq", text: "What does Shor's algorithm threaten?", options: ["A. Quantum computers", "B. Public-key cryptography", "C. Classical physics", "D. Drug development"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Measurement collapses the superposition to a single ________.", answer: "outcome" }
        ]
      },
      {
        id: "P2",
        title: "Migration and Identity in a Globalized World",
        wordCount: 860,
        text: `Human migration has profoundly shaped societies throughout history, but contemporary migration occurs at unprecedented scale and velocity within a globalized context that transforms its dynamics and implications. Over 280 million people now live outside their countries of birth, driven by economic opportunity, conflict, persecution, environmental change, and family reunification. How receiving societies incorporate migrants and how migrants negotiate their identities between origin and destination cultures have become defining challenges of our era.

Classical assimilation theory, developed from the American immigration experience, predicted that migrants would progressively adopt the culture of their new societies, with ethnic distinctiveness fading across generations. This linear model assumed that full incorporation into the mainstream represented both the inevitable outcome and the desirable goal. Migrants who maintained strong ethnic identities were seen as incompletely assimilated, and residential or occupational concentration in ethnic enclaves was considered transitional.

Subsequent research revealed more complex patterns. Segmented assimilation theory recognized that migrants incorporate into different segments of society, with outcomes depending on characteristics of both migrants and receiving contexts. Some groups experience upward mobility into the middle class; others face incorporation into disadvantaged populations with limited prospects. The mode of incorporation—including government policies, societal reception, and ethnic community resources—shapes which trajectory migrants follow.

Transnational perspectives further complicated the picture by recognizing that migrants often maintain significant ties to origin countries while participating in destination societies. Remittances, circular migration, dual citizenship, and communication technologies enable sustained engagement across borders. Rather than severing ties with origin countries as assimilation theory implied, many migrants develop hybrid identities and practices drawing from multiple cultural repertoires.

The concept of integration has largely replaced assimilation in European policy discourse, emphasizing mutual adaptation by both migrants and receiving societies. Integration frameworks acknowledge that successful incorporation requires not only migrant adaptation but also institutional openness and societal acceptance. Discrimination, residential segregation, and labor market exclusion impede integration regardless of migrant efforts. This framing shifts attention from migrant deficits to structural barriers.

Identity formation among second-generation migrants—those born in destination countries to immigrant parents—reveals the complexities of belonging. These individuals often navigate between parental cultures, mainstream expectations, and peer influences. Some embrace hyphenated identities that synthesize multiple cultural elements. Others experience marginality, feeling neither fully accepted by mainstream society nor connected to parental homelands they may have never visited. Racial and religious visible differences often complicate belonging regardless of cultural assimilation.

Migration has become intensely politicized across destination countries. Concerns about cultural cohesion, economic competition, welfare costs, and security have fueled restrictionist movements and anti-immigrant politics. These reactions often conflate distinct migration categories—refugees, family migrants, skilled workers, unauthorized migrants—treating migration as an undifferentiated threat. Yet aging populations and labor shortages in many developed countries generate persistent demand for immigration despite political opposition.

The governance of migration involves tensions between national sovereignty, human rights, and economic interests. States assert authority over admissions and territorial control, yet international law establishes rights for refugees and protections for migrants regardless of legal status. The disconnect between restrictive policies and actual migration flows generates large unauthorized populations and humanitarian crises at borders. Finding governance frameworks that are both humane and sustainable remains an unresolved global challenge.`,
        questions: [
          { id: 14, type: "yng", text: "Over 280 million people live outside their birth countries.", answer: "Yes" },
          { id: 15, type: "yng", text: "Classical assimilation theory predicted permanent ethnic distinctiveness.", answer: "No" },
          { id: 16, type: "yng", text: "All migrants follow identical incorporation trajectories.", answer: "No" },
          { id: 17, type: "yng", text: "Transnationalism recognizes ongoing ties to origin countries.", answer: "Yes" },
          { id: 18, type: "yng", text: "Migration politics are uniform across all countries.", answer: "No" },
          { id: 19, type: "mcq", text: "What does segmented assimilation recognize?", options: ["A. All migrants assimilate identically", "B. Migrants incorporate into different segments", "C. Assimilation is impossible", "D. Only economic factors matter"], answer: "B" },
          { id: 20, type: "mcq", text: "What has integration framework shifted attention to?", options: ["A. Migrant deficits only", "B. Structural barriers", "C. Complete assimilation", "D. Return migration"], answer: "B" },
          { id: 21, type: "mcq", text: "What generates persistent immigration demand?", options: ["A. Cultural curiosity", "B. Aging populations and labor shortages", "C. Military needs", "D. Educational exchanges"], answer: "B" },
          { id: 22, type: "mcq", text: "What do second-generation migrants often navigate?", options: ["A. Only parental culture", "B. Only mainstream culture", "C. Multiple cultural influences", "D. No cultural influences"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Some second-generation migrants embrace ________ identities.", answer: "hyphenated" },
          { id: 24, type: "summary", text: "Complete: Discrimination and segregation impede integration regardless of migrant ________.", answer: "efforts" },
          { id: 25, type: "summary", text: "Complete: States assert authority over ________ and territorial control.", answer: "admissions" },
          { id: 26, type: "summary", text: "Complete: Remittances enable sustained engagement across ________.", answer: "borders" }
        ]
      },
      {
        id: "P3",
        title: "Antibiotic Resistance: A Global Health Crisis",
        wordCount: 870,
        text: `The effectiveness of antibiotics, one of medicine's greatest achievements, is diminishing as bacteria evolve resistance to drugs that once reliably eliminated them. The World Health Organization has identified antimicrobial resistance as one of the greatest threats to global health, food security, and development. Without effective antibiotics, routine surgeries become dangerous, minor infections potentially fatal, and modern medical advances from organ transplants to cancer chemotherapy increasingly risky. The emergence of bacteria resistant to all available antibiotics—so-called superbugs—represents a particularly alarming development.

Antibiotic resistance is an evolutionary inevitability accelerated by human practices. When bacteria are exposed to antibiotics, susceptible strains die while resistant variants survive and reproduce. The more antibiotics are used, the stronger the selective pressure favoring resistance. Resistance genes can spread not only through bacterial reproduction but also through horizontal gene transfer between unrelated bacteria, enabling rapid dissemination of resistance across species. Multi-drug resistant organisms emerge when bacteria accumulate multiple resistance mechanisms.

Agricultural use of antibiotics has been particularly problematic. Antibiotics are routinely administered to livestock not only to treat infections but to promote growth and prevent disease in crowded conditions. This prophylactic use creates ideal conditions for resistance development. Agricultural antibiotic use in many countries exceeds human medical use, yet regulation has been slower to develop. Resistant bacteria from agricultural settings can transfer to humans through food, environmental contamination, and direct contact.

Human antibiotic misuse compounds the problem. Antibiotics are frequently prescribed for viral infections against which they are ineffective. Patients often fail to complete prescribed courses, exposing bacteria to sub-lethal concentrations that promote resistance without eliminating the infection. Over-the-counter availability in many countries enables self-medication without medical guidance. Hospitals, with their high antibiotic use and concentration of vulnerable patients, serve as incubators for resistant strains.

The pharmaceutical pipeline for new antibiotics has dwindled alarmingly. Antibiotic development is commercially unattractive because new drugs must be used sparingly to preserve their effectiveness, limiting sales potential. The return on investment for antibiotic development falls far below that for drugs treating chronic conditions requiring long-term use. Major pharmaceutical companies have largely abandoned antibiotic research, and the few new antibiotics reaching the market often face resistance within years of introduction.

Addressing antibiotic resistance requires coordinated action across multiple sectors. Antibiotic stewardship programs in healthcare settings aim to optimize prescribing practices, using the right antibiotic at the right dose for the right duration. Infection control measures prevent resistant bacteria from spreading between patients. Surveillance systems track resistance patterns to guide treatment decisions and identify emerging threats. Diagnostic improvements enabling rapid identification of pathogens and their resistance profiles would support more targeted treatment.

Agricultural reforms must reduce unnecessary antibiotic use. Regulations restricting growth-promotion uses and requiring veterinary oversight for therapeutic uses have been implemented in some jurisdictions. Alternative approaches to maintaining animal health—including improved husbandry, vaccines, and probiotics—can reduce reliance on antibiotics. Consumer pressure has led some food producers to reduce antibiotic use, though voluntary measures alone are unlikely to suffice.

New economic models are needed to incentivize antibiotic development. Push incentives such as research grants and tax credits reduce development costs. Pull incentives such as advance purchase commitments, market entry rewards, and delinking profits from sales volume could make antibiotic development more attractive. International coordination is essential, as resistance spreads across borders and new antibiotics must benefit global health rather than only profitable markets.`,
        questions: [
          { id: 27, type: "tfng", text: "The WHO considers antimicrobial resistance a major global threat.", answer: "True" },
          { id: 28, type: "tfng", text: "Resistance genes spread only through bacterial reproduction.", answer: "False" },
          { id: 29, type: "tfng", text: "Agricultural antibiotic use is often less than human medical use.", answer: "False" },
          { id: 30, type: "tfng", text: "Antibiotics are effective against viral infections.", answer: "False" },
          { id: 31, type: "tfng", text: "Major pharmaceutical companies have increased antibiotic research.", answer: "False" },
          { id: 32, type: "matching", text: "Bacteria resistant to all antibiotics", answer: "superbugs" },
          { id: 33, type: "matching", text: "Transfer of resistance genes between unrelated bacteria", answer: "horizontal gene transfer" },
          { id: 34, type: "matching", text: "Programs optimizing prescribing practices", answer: "antibiotic stewardship" },
          { id: 35, type: "mcq", text: "Why is antibiotic development commercially unattractive?", options: ["A. Too expensive to manufacture", "B. New drugs must be used sparingly", "C. No patent protection", "D. Requires too many trials"], answer: "B" },
          { id: 36, type: "mcq", text: "What conditions do hospitals create for resistant strains?", options: ["A. Low antibiotic exposure", "B. Incubation conditions", "C. Elimination conditions", "D. Isolated environments"], answer: "B" },
          { id: 37, type: "mcq", text: "What do pull incentives aim to do?", options: ["A. Reduce drug costs", "B. Make antibiotic development attractive", "C. Increase antibiotic use", "D. Eliminate regulations"], answer: "B" },
          { id: 38, type: "mcq", text: "What can reduce livestock antibiotic reliance?", options: ["A. More crowded conditions", "B. Improved husbandry and vaccines", "C. Increased prophylactic use", "D. Over-the-counter sales"], answer: "B" },
          { id: 39, type: "short", text: "What do surveillance systems track? (TWO WORDS)", answer: "resistance patterns" },
          { id: 40, type: "short", text: "What type of use has been particularly problematic? (ONE WORD)", answer: "agricultural" }
        ]
      }
    ]
  }
,
  // ============================================================
  // R16 - ADVANCED (Band 8.0)
  // ============================================================
  {
    id: "R16",
    level: "Advanced",
    bandTarget: "8.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Behavioral Economics and Decision Making",
        wordCount: 870,
        text: `Traditional economic theory assumed that humans are rational agents who consistently maximize their utility based on stable preferences and complete information. Behavioral economics, drawing on psychological research, has documented systematic departures from this idealized rationality that have profound implications for understanding economic behavior and designing effective policies. By illuminating how people actually make decisions rather than how they theoretically should, behavioral economics has transformed multiple fields from finance to public health.

Daniel Kahneman and Amos Tversky's prospect theory, developed in the 1970s, provided foundational insights into decision making under uncertainty. They demonstrated that people evaluate outcomes relative to reference points rather than absolute levels, weight losses more heavily than equivalent gains, and exhibit diminishing sensitivity to both gains and losses as magnitudes increase. These asymmetries explain puzzling behaviors like the disposition effect, where investors sell winning stocks too early while holding losers too long.

Cognitive biases identified by behavioral economists include anchoring, where initial information disproportionately influences subsequent judgments; availability, where ease of recall affects probability estimates; and confirmation bias, where people seek information confirming existing beliefs while discounting contradictory evidence. The representativeness heuristic leads people to judge probabilities by superficial similarity rather than base rates. These mental shortcuts often serve well but produce systematic errors in predictable circumstances.

Bounded rationality, a concept introduced by Herbert Simon, recognizes that human cognitive capacity is limited. Rather than optimizing across all possibilities, people typically satisfice—choosing options that meet acceptable thresholds rather than searching for the best possible outcome. Limited attention means that decisions depend heavily on what information happens to be salient. Cognitive load from stress, fatigue, or distraction further degrades decision quality.

Present bias—the tendency to overweight immediate rewards relative to future consequences—helps explain persistent problems like inadequate retirement savings, unhealthy behaviors, and procrastination. Standard economic models assume exponential discounting, where the same discount rate applies regardless of when decisions are made. Behavioral research reveals hyperbolic discounting patterns, where people are extremely impatient about immediate tradeoffs but relatively patient about distant ones.

Social influences on decision making extend beyond information sharing to include conformity, reciprocity, and concerns about fairness. People often conform to perceived social norms even when anonymous, and their behavior shifts when norms are made salient. Reciprocity leads people to reward cooperation and punish free riding even at personal cost. Fairness considerations cause people to reject economically advantageous offers they perceive as unjust.

Libertarian paternalism, advocated by Richard Thaler and Cass Sunstein, applies behavioral insights to policy through "nudges" that guide behavior while preserving choice. Default enrollment in retirement savings plans dramatically increases participation without mandating savings. Framing options to highlight certain features influences choices without restricting alternatives. Choice architecture—how options are presented—can promote better decisions without coercion.

Critics raise concerns about manipulation and the definition of "better" decisions. Who decides which behaviors to nudge, and by what authority? Nudges can be exploited by private actors to serve their interests rather than those of the nudged. The focus on individual behavior change may distract from structural reforms addressing root causes of problems. Despite these concerns, behavioral economics has established that understanding actual human psychology is essential for economic analysis and policy design.`,
        questions: [
          { id: 1, type: "tfng", text: "Traditional economics assumed humans are fully rational.", answer: "True" },
          { id: 2, type: "tfng", text: "Prospect theory was developed in the 1990s.", answer: "False" },
          { id: 3, type: "tfng", text: "People weight losses more heavily than equivalent gains.", answer: "True" },
          { id: 4, type: "tfng", text: "Bounded rationality assumes unlimited cognitive capacity.", answer: "False" },
          { id: 5, type: "tfng", text: "Nudges eliminate all individual choice.", answer: "False" },
          { id: 6, type: "short", text: "Who developed prospect theory with Tversky? (ONE WORD)", answer: "Kahneman" },
          { id: 7, type: "short", text: "What is choosing acceptable rather than optimal options called? (ONE WORD)", answer: "satisfice" },
          { id: 8, type: "short", text: "Who advocated libertarian paternalism with Sunstein? (ONE WORD)", answer: "Thaler" },
          { id: 9, type: "mcq", text: "What does the availability bias affect?", options: ["A. Physical strength", "B. Probability estimates", "C. Motor skills", "D. Visual perception"], answer: "B" },
          { id: 10, type: "mcq", text: "What does present bias help explain?", options: ["A. Excellent savings habits", "B. Inadequate retirement savings", "C. Perfect health choices", "D. Strong willpower"], answer: "B" },
          { id: 11, type: "mcq", text: "What do people reject due to fairness concerns?", options: ["A. Fair offers", "B. Economically advantageous but unfair offers", "C. All offers", "D. Only expensive offers"], answer: "B" },
          { id: 12, type: "mcq", text: "What increases retirement plan participation?", options: ["A. Mandatory enrollment", "B. Default enrollment", "C. Reduced benefits", "D. Complex forms"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: People evaluate outcomes relative to ________ points.", answer: "reference" }
        ]
      },
      {
        id: "P2",
        title: "Plastic Pollution and Ocean Ecosystems",
        wordCount: 860,
        text: `Plastic debris has accumulated in the world's oceans at alarming rates, creating what some researchers describe as a planetary-scale crisis. An estimated 8 million metric tons of plastic enter the oceans annually, joining the more than 150 million metric tons already present. This pollution affects marine life from microscopic plankton to great whales, enters the human food chain through seafood, and persists in the environment for centuries. Addressing ocean plastic pollution requires understanding its sources, pathways, and impacts while developing interventions across the entire plastic lifecycle.

The durability that makes plastic useful also makes it persistent as pollution. Most plastics do not biodegrade but instead fragment into smaller pieces through photodegradation and mechanical action. Microplastics—fragments smaller than 5 millimeters—have been detected throughout marine environments, from surface waters to the deepest ocean trenches, from Arctic ice to Antarctic waters. Even smaller nanoplastics, below 1 micrometer, are more difficult to detect and potentially more biologically active due to their ability to cross cell membranes.

Ocean plastic originates primarily from land-based sources. Rivers carry plastic waste from urban areas to coastal waters, with a small number of rivers in Asia and Africa contributing disproportionately to ocean plastic loads. Inadequate waste management infrastructure in rapidly developing countries allows plastic to leak into the environment. Fishing gear—nets, lines, and traps lost or abandoned at sea—constitutes another major source, particularly damaging due to "ghost fishing" that continues capturing marine life.

Marine organisms interact with plastic pollution in multiple ways. Entanglement in plastic debris causes injury, drowning, and starvation for marine mammals, sea turtles, seabirds, and fish. Ingestion is even more widespread, documented in over 700 marine species. Animals may mistake plastic for food, or plastic may be present in prey they consume. Ingested plastic can cause physical harm, create false feelings of satiation leading to starvation, and introduce toxic chemicals into organisms.

Plastics absorb and concentrate persistent organic pollutants from seawater, potentially serving as vectors for toxin transfer into food webs. Additives incorporated into plastics during manufacture, including flame retardants and plasticizers, may leach into organisms that ingest plastic debris. The health effects of microplastic ingestion in marine organisms and humans remain under active investigation, with concerns about endocrine disruption, inflammation, and cellular damage.

Addressing plastic pollution requires interventions at multiple points. Upstream approaches focus on reducing plastic production and use, improving product design for recyclability, and developing alternative materials. Midstream interventions target waste management improvements, recycling infrastructure, and prevention of plastic leakage into waterways. Downstream efforts attempt to remove plastic already in the environment through beach cleanups, river interception technologies, and ocean cleanup systems.

The global plastics treaty under negotiation represents the most significant international effort to address plastic pollution comprehensively. Negotiations have revealed tensions between countries favoring production limits and those preferring to focus on waste management. The treaty could establish binding targets, promote circular economy approaches, and provide financial support for developing countries to improve waste infrastructure. Industry participation and compliance mechanisms will be crucial for effectiveness.

Individual behavior change, corporate responsibility, and government regulation all have roles to play. Consumer choices can shift demand toward less packaging and reusable alternatives. Extended producer responsibility schemes make manufacturers accountable for the end-of-life management of their products. Plastic bag bans, container deposit schemes, and single-use plastic restrictions have been implemented in numerous jurisdictions with varying success.`,
        questions: [
          { id: 14, type: "yng", text: "About 8 million metric tons of plastic enter oceans annually.", answer: "Yes" },
          { id: 15, type: "yng", text: "Most plastics fully biodegrade in ocean conditions.", answer: "No" },
          { id: 16, type: "yng", text: "Ocean plastic comes primarily from land-based sources.", answer: "Yes" },
          { id: 17, type: "yng", text: "Microplastics have been found only in surface waters.", answer: "No" },
          { id: 18, type: "yng", text: "A global plastics treaty is currently being negotiated.", answer: "Yes" },
          { id: 19, type: "mcq", text: "What is the size threshold for microplastics?", options: ["A. Smaller than 50mm", "B. Smaller than 5mm", "C. Smaller than 5cm", "D. Smaller than 50cm"], answer: "B" },
          { id: 20, type: "mcq", text: "What does ghost fishing refer to?", options: ["A. Illegal fishing", "B. Night fishing", "C. Abandoned gear continuing to capture marine life", "D. Fishing for ghost sharks"], answer: "C" },
          { id: 21, type: "mcq", text: "What can plastics serve as vectors for?", options: ["A. Nutrients", "B. Toxin transfer", "C. Oxygen", "D. Food"], answer: "B" },
          { id: 22, type: "mcq", text: "What do upstream approaches focus on?", options: ["A. Ocean cleanup", "B. Beach cleanups", "C. Reducing production and use", "D. River interception"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Plastics fragment through photodegradation and ________ action.", answer: "mechanical" },
          { id: 24, type: "summary", text: "Complete: Ingested plastic can create false feelings of ________.", answer: "satiation" },
          { id: 25, type: "summary", text: "Complete: Extended producer responsibility makes ________ accountable.", answer: "manufacturers" },
          { id: 26, type: "summary", text: "Complete: Industry participation and ________ mechanisms are crucial.", answer: "compliance" }
        ]
      },
      {
        id: "P3",
        title: "The Psychology of Expertise",
        wordCount: 870,
        text: `What distinguishes experts from novices in complex domains has fascinated psychologists for decades. Research on expertise reveals that exceptional performance results not from innate talent alone but from extensive, deliberate practice that produces qualitative changes in how information is perceived, organized, and processed. Understanding expertise has implications for education, training, and the design of systems that support human performance.

Early expertise research focused on chess, where skill can be precisely measured through rating systems. Adriaan de Groot found that chess masters did not search more moves than weaker players but recognized meaningful patterns instantly. Herbert Simon and William Chase demonstrated that masters' superior memory for chess positions depended on meaningful configurations; when pieces were placed randomly, masters showed no memory advantage. This suggested that expertise involves domain-specific pattern recognition rather than general cognitive superiority.

The concept of chunking explains how experts overcome working memory limitations. By organizing information into meaningful units, experts can process more information without exceeding cognitive capacity. A chess master sees not individual pieces but familiar configurations with associated strategic implications. A skilled radiologist perceives not pixels but anatomical structures and pathological patterns. This perceptual reorganization develops through extensive experience with domain-specific material.

Anders Ericsson's research on deliberate practice identified key characteristics of effective skill development. Deliberate practice involves activities specifically designed to improve performance, requires focused effort and attention, provides immediate feedback, and involves repetition with refinement. Mere experience does not produce expertise; a chess player with 10,000 hours of casual play may not improve beyond an intermediate level without structured practice targeting weaknesses.

The 10,000-hour rule popularized by Malcolm Gladwell oversimplifies Ericsson's findings. While extensive practice is necessary for expertise, the relationship between practice and performance varies across domains and individuals. Genetic factors influence the rate of skill acquisition and ultimate performance levels. The quality of practice matters as much as quantity, and having excellent instruction accelerates development. Some domains may require more or less practice to reach expert levels.

Expertise can produce both advantages and blind spots. Experts' pattern recognition enables rapid, accurate performance in typical situations but may impede recognition of novel configurations that violate expectations. Einstellung—the tendency to apply familiar solutions even when better alternatives exist—can affect expert problem solving. Overconfidence in expert judgment, particularly in domains with limited feedback, has been documented across fields from medicine to finance.

Transfer of expertise across domains is limited. Skills and knowledge are often encapsulated within the contexts where they were learned. A chess master's pattern recognition does not improve performance in other strategy games. This domain-specificity challenges educational approaches emphasizing general thinking skills over specific content knowledge. However, some metacognitive strategies for learning and problem solving may transfer more broadly than domain-specific skills.

Technology increasingly partners with and sometimes replaces human expertise. Expert systems attempt to codify expert knowledge in rule-based formats. Machine learning systems trained on large datasets can match or exceed human expert performance in some diagnostic tasks. Yet human expertise remains essential for novel situations, contextual judgment, and domains where data is limited. Understanding how human and artificial intelligence can complement each other represents a frontier of expertise research.`,
        questions: [
          { id: 27, type: "tfng", text: "Chess masters search more moves than weaker players.", answer: "False" },
          { id: 28, type: "tfng", text: "Experts show memory advantages only for meaningful patterns.", answer: "True" },
          { id: 29, type: "tfng", text: "Mere experience automatically produces expertise.", answer: "False" },
          { id: 30, type: "tfng", text: "The 10,000-hour rule accurately captures expertise development.", answer: "False" },
          { id: 31, type: "tfng", text: "Expertise transfers easily across all domains.", answer: "False" },
          { id: 32, type: "matching", text: "Organizing information into meaningful units", answer: "chunking" },
          { id: 33, type: "matching", text: "Applying familiar solutions when better ones exist", answer: "Einstellung" },
          { id: 34, type: "matching", text: "Activities designed specifically to improve performance", answer: "deliberate practice" },
          { id: 35, type: "mcq", text: "Who conducted foundational chess expertise research with Chase?", options: ["A. Ericsson", "B. Gladwell", "C. Simon", "D. Kahneman"], answer: "C" },
          { id: 36, type: "mcq", text: "What does deliberate practice require?", options: ["A. Casual repetition", "B. Focused effort and feedback", "C. Natural talent only", "D. Minimal attention"], answer: "B" },
          { id: 37, type: "mcq", text: "What can expertise produce along with advantages?", options: ["A. Only benefits", "B. Blind spots", "C. Universal skills", "D. General intelligence"], answer: "B" },
          { id: 38, type: "mcq", text: "What can machine learning systems match in some tasks?", options: ["A. General intelligence", "B. Human expert diagnostic performance", "C. Creative thinking", "D. Emotional intelligence"], answer: "B" },
          { id: 39, type: "short", text: "Who conducted research on deliberate practice? (ONE WORD)", answer: "Ericsson" },
          { id: 40, type: "short", text: "What explains how experts overcome working memory limitations? (ONE WORD)", answer: "chunking" }
        ]
      }
    ]
  },

  // ============================================================
  // R17 - ADVANCED (Band 8.0-8.5)
  // ============================================================
  {
    id: "R17",
    level: "Advanced",
    bandTarget: "8.0-8.5",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "The Philosophy of Time",
        wordCount: 880,
        text: `Time is among the most familiar yet most puzzling features of human experience. We perceive time passing, remember the past, anticipate the future, and organize our lives around temporal rhythms. Yet when we attempt to analyze what time actually is, profound difficulties emerge. Philosophers have debated whether time is objective or subjective, whether the past and future exist, and whether time's passage is real or illusory. These questions bear not only on metaphysics but on physics, psychology, and the human condition.

The tensed theory of time, also called presentism or the A-theory, holds that the distinction between past, present, and future is metaphysically fundamental. On this view, only the present moment truly exists; the past has ceased to exist and the future does not yet exist. Time genuinely passes as the present moves from one moment to the next, and this passage is an objective feature of reality rather than merely how we perceive it. This view accords with common sense experience of time as flowing.

The tenseless theory, also called eternalism or the B-theory, denies that past, present, and future differ metaphysically. All times exist equally; the universe is a four-dimensional block in which temporal relations are analogous to spatial relations. What we call "the present" is merely where we happen to be located in time, just as "here" is merely where we happen to be in space. The apparent flow of time is a psychological phenomenon rather than an objective feature of reality.

Physics has complicated these philosophical debates. Einstein's special relativity revealed that simultaneity is relative to reference frames; events that are simultaneous for one observer are not simultaneous for another moving relative to the first. This seems to favor the tenseless view, since if there is no absolute present, presentism's claim that only the present exists becomes problematic. The block universe interpretation of relativity treats all times as equally real.

Yet quantum mechanics introduces other considerations. Some interpretations of quantum mechanics seem to require an objective present moment at which quantum states collapse into definite values. The relationship between quantum mechanics and relativity remains unresolved, leaving the physics of time unsettled. Physicists and philosophers continue to debate whether fundamental physics supports or undermines our ordinary temporal concepts.

The experience of time presents its own puzzles. We perceive events as having duration and as occurring in sequence, yet the neural processes underlying these perceptions take time themselves. How can we perceive the present moment if perception involves temporal processing? The specious present—the brief interval we experience as "now"—may be a construction of the brain rather than a direct perception of instantaneous reality.

Memory and anticipation shape our temporal experience profoundly. We do not merely record the past; we reconstruct it, with memory being selective, interpretive, and fallible. Our sense of personal identity across time depends on memory connecting our present selves to our past experiences. Anticipation of the future guides present behavior, and the capacity to think about and plan for the future may be distinctively human.

The mortality that time brings gives human life its urgency and meaning. We know that our time is limited, and this awareness shapes how we value our experiences and relationships. Some philosophers argue that immortality would be undesirable, that finitude is essential to what makes life meaningful. Others see death as simply bad, a deprivation of the goods that continued life would bring. These questions about time and mortality are not merely abstract philosophy but speak to fundamental concerns about how to live.`,
        questions: [
          { id: 1, type: "tfng", text: "Presentism holds that only the present moment truly exists.", answer: "True" },
          { id: 2, type: "tfng", text: "The tenseless theory treats time flow as objective reality.", answer: "False" },
          { id: 3, type: "tfng", text: "Special relativity shows simultaneity is absolute.", answer: "False" },
          { id: 4, type: "tfng", text: "Quantum mechanics definitively settles debates about time.", answer: "False" },
          { id: 5, type: "tfng", text: "Memory is a perfect recording of past events.", answer: "False" },
          { id: 6, type: "short", text: "What is another name for the tensed theory? (TWO WORDS)", answer: "A-theory" },
          { id: 7, type: "short", text: "What is the brief interval experienced as 'now' called? (TWO WORDS)", answer: "specious present" },
          { id: 8, type: "short", text: "Whose theory revealed that simultaneity is relative? (ONE WORD)", answer: "Einstein" },
          { id: 9, type: "mcq", text: "What does the block universe interpretation treat?", options: ["A. Only the present as real", "B. All times as equally real", "C. Time as subjective only", "D. The future as primary"], answer: "B" },
          { id: 10, type: "mcq", text: "What do some quantum interpretations require?", options: ["A. No objective present", "B. An objective present for collapse", "C. Purely spatial reality", "D. No temporal relations"], answer: "B" },
          { id: 11, type: "mcq", text: "What shapes how we value experiences?", options: ["A. Immortality", "B. Awareness of limited time", "C. Lack of memory", "D. Inability to anticipate"], answer: "B" },
          { id: 12, type: "mcq", text: "What is memory according to the passage?", options: ["A. Perfect recording", "B. Selective and reconstructive", "C. Purely objective", "D. Unnecessary for identity"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: The apparent flow of time may be ________ rather than objective.", answer: "psychological" }
        ]
      },
      {
        id: "P2",
        title: "Rewilding and Conservation Strategy",
        wordCount: 860,
        text: `Rewilding has emerged as a provocative approach to conservation that aims to restore natural processes and reduce human management of landscapes. Rather than preserving ecosystems in static states or managing them for particular species, rewilding seeks to reinstate ecological dynamics by reintroducing missing species, removing human infrastructure, and allowing natural processes to reshape landscapes. This approach has generated both enthusiasm for its ambitious vision and criticism for its potential impacts on human communities and agricultural interests.

The concept of rewilding developed in North America in the 1990s, initially emphasizing the reintroduction of large carnivores and the establishment of connected wildlife corridors. Conservation biologists recognized that protected areas alone were insufficient to maintain viable populations of wide-ranging species and that the absence of top predators had cascading effects throughout ecosystems. The reintroduction of wolves to Yellowstone National Park became an iconic example, demonstrating how apex predators can trigger trophic cascades that reshape vegetation patterns and even river courses.

European rewilding has developed somewhat differently, focusing on abandoned agricultural land where rural depopulation has created opportunities for ecological recovery. Organizations like Rewilding Europe work to restore natural grazing dynamics using semi-wild cattle and horses as proxies for extinct megafauna. The vision extends beyond individual protected areas to landscape-scale restoration connecting remnant wild areas through ecological corridors.

Keystone species play central roles in rewilding strategies. These species have disproportionate effects on ecosystem structure and function relative to their abundance. Large herbivores shape vegetation through grazing and browsing; their trampling and nutrient cycling create habitat heterogeneity. Beavers engineer landscapes by building dams that create wetlands, store water, and reduce flood peaks. Apex predators control herbivore populations and alter their behavior in ways that affect vegetation.

Trophic rewilding specifically targets restoration of food web interactions. Where native species are extinct, ecological proxies may substitute. The introduction of Asian elephants to Europe has been proposed to replace extinct woolly mammoths in maintaining open grassland habitats. Aldabra giant tortoises have been introduced to islands in the Indian Ocean to replace extinct endemic tortoises in their ecological roles. Such interventions are controversial, raising questions about ecological appropriateness and unforeseen consequences.

Critics raise several objections to rewilding. Agricultural communities may lose land and livelihoods to expanding wildlife areas. Large carnivores pose risks to livestock and occasionally to humans. Romanticized visions of wilderness may not align with the cultural landscapes that local communities value. The baselines for rewilding are themselves arbitrary; ecosystems have constantly changed, and choosing which historical state to restore involves value judgments rather than purely scientific criteria.

Proponents respond that rewilding can generate economic benefits through nature-based tourism and ecosystem services. Reduced management costs may offset agricultural losses. Coexistence strategies can minimize human-wildlife conflicts. Rewilding need not mean excluding humans but rather reducing intensive management and allowing natural processes greater scope.

The tension between rewilding and traditional conservation reflects deeper debates about conservation goals. Should conservation prioritize maintaining current biodiversity, restoring historical states, or enabling natural processes regardless of outcomes? Different answers to these questions yield different conservation strategies, and rewilding represents one distinctive position in this ongoing debate.`,
        questions: [
          { id: 14, type: "yng", text: "Rewilding aims to maintain ecosystems in static states.", answer: "No" },
          { id: 15, type: "yng", text: "Wolves were reintroduced to Yellowstone National Park.", answer: "Yes" },
          { id: 16, type: "yng", text: "European rewilding focuses mainly on pristine wilderness.", answer: "No" },
          { id: 17, type: "yng", text: "Beavers can affect flood patterns through dam building.", answer: "Yes" },
          { id: 18, type: "yng", text: "All conservation scientists support rewilding approaches.", answer: "No" },
          { id: 19, type: "mcq", text: "What do trophic cascades demonstrate?", options: ["A. Isolation of species", "B. Apex predators reshaping ecosystems", "C. Stable unchanging systems", "D. Human-only management"], answer: "B" },
          { id: 20, type: "mcq", text: "What are keystone species?", options: ["A. The most numerous species", "B. Species with disproportionate effects on ecosystems", "C. Extinct species only", "D. Microscopic organisms"], answer: "B" },
          { id: 21, type: "mcq", text: "What has been proposed to replace woolly mammoths?", options: ["A. African elephants", "B. Asian elephants", "C. Giant tortoises", "D. Bison"], answer: "B" },
          { id: 22, type: "mcq", text: "What economic benefit can rewilding generate?", options: ["A. Industrial farming", "B. Nature-based tourism", "C. Mining opportunities", "D. Urban development"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Large herbivores create habitat ________ through grazing.", answer: "heterogeneity" },
          { id: 24, type: "summary", text: "Complete: Choosing historical states to restore involves ________ judgments.", answer: "value" },
          { id: 25, type: "summary", text: "Complete: Ecological ________ may substitute for extinct native species.", answer: "proxies" },
          { id: 26, type: "summary", text: "Complete: Coexistence strategies minimize human-wildlife ________.", answer: "conflicts" }
        ]
      },
      {
        id: "P3",
        title: "Artificial General Intelligence: Prospects and Risks",
        wordCount: 870,
        text: `The prospect of artificial general intelligence—AI systems matching or exceeding human cognitive capabilities across all domains—has moved from speculative science fiction to serious research agenda. While current AI systems excel at narrow tasks, they lack the flexible, transferable intelligence that enables humans to learn new skills, reason across contexts, and adapt to novel situations. Achieving AGI would represent perhaps the most significant technological development in human history, with transformative potential and profound risks that demand careful consideration.

Definitions of AGI vary, but most emphasize generality and adaptability. Unlike narrow AI optimized for specific tasks like playing chess or recognizing images, AGI would possess the capacity to learn any intellectual task that humans can perform. This includes not only pattern recognition and optimization but also abstract reasoning, creativity, social intelligence, and the ability to acquire new competencies without explicit programming. Some definitions additionally require that AGI match human-level performance, while others focus on architectural generality regardless of capability level.

Forecasts of when AGI might be achieved range from decades to never. Optimists point to rapid progress in machine learning, the falling costs of computation, and historical patterns of technological acceleration. Skeptics argue that current approaches face fundamental limitations and that key aspects of human intelligence remain poorly understood, let alone replicable. Survey evidence suggests wide disagreement among AI researchers themselves, with median estimates typically placing significant probability of AGI within the twenty-first century but substantial uncertainty in both directions.

The potential benefits of AGI are immense. Superintelligent systems could accelerate scientific discovery, solve currently intractable problems in medicine and sustainability, and dramatically increase productivity and prosperity. AI assistants matching human cognitive flexibility could transform education, healthcare, and work. The development of safe and beneficial AGI might inaugurate an era of unprecedented flourishing.

The potential risks are equally profound. An AGI system pursuing goals misaligned with human values could cause catastrophic harm, not through malevolence but through relentless optimization for objectives that conflict with human wellbeing. Unlike narrow AI, an AGI would be difficult to contain; its general capabilities would enable circumventing restrictions and acquiring resources to pursue its goals. The possibility of such scenarios has led researchers to prioritize alignment research—developing techniques to ensure AGI systems pursue outcomes beneficial to humanity.

The concentration of AGI capabilities raises governance challenges. Nations or corporations controlling AGI first might gain decisive advantages in economic and military competition. The destabilizing potential of such power concentration could trigger conflicts or races that compromise safety. International cooperation to ensure AGI development benefits humanity broadly faces obstacles from competitive dynamics and geopolitical tensions.

Labor market impacts of AGI would exceed those of previous automation technologies. While past technological changes eliminated some jobs while creating others, AGI could potentially perform all human cognitive work, raising questions about the economic role of human labor. Scenarios range from abundance enabling universal flourishing to mass unemployment and inequality depending on how the benefits of AGI are distributed.

The path to AGI remains uncertain, and current progress provides limited guidance about future trajectories. Breakthroughs could accelerate development unexpectedly, or seemingly insurmountable obstacles could emerge. Given this uncertainty, researchers have called for safety-focused development practices, robust governance frameworks, and broader societal engagement with the profound questions that AGI raises about the human future.`,
        questions: [
          { id: 27, type: "tfng", text: "Current AI systems possess general flexible intelligence.", answer: "False" },
          { id: 28, type: "tfng", text: "AGI definitions emphasize generality and adaptability.", answer: "True" },
          { id: 29, type: "tfng", text: "AI researchers agree on when AGI will be achieved.", answer: "False" },
          { id: 30, type: "tfng", text: "Misaligned AGI could cause harm through relentless optimization.", answer: "True" },
          { id: 31, type: "tfng", text: "AGI would be easy to contain due to specialized functions.", answer: "False" },
          { id: 32, type: "matching", text: "AI optimized for specific narrow tasks", answer: "narrow AI" },
          { id: 33, type: "matching", text: "Ensuring AGI pursues beneficial outcomes", answer: "alignment research" },
          { id: 34, type: "matching", text: "One entity gaining decisive AGI advantages", answer: "power concentration" },
          { id: 35, type: "mcq", text: "What could AGI potentially accelerate?", options: ["A. Only entertainment", "B. Scientific discovery", "C. Only gaming", "D. Only art"], answer: "B" },
          { id: 36, type: "mcq", text: "Why is AGI difficult to contain?", options: ["A. It's physically large", "B. General capabilities enable circumventing restrictions", "C. It's expensive", "D. It's slow"], answer: "B" },
          { id: 37, type: "mcq", text: "What do median expert estimates suggest?", options: ["A. AGI is impossible", "B. AGI has already arrived", "C. Significant probability of AGI this century", "D. AGI will take millennia"], answer: "C" },
          { id: 38, type: "mcq", text: "What would AGI labor impacts exceed?", options: ["A. Nothing significant", "B. Previous automation technologies", "C. Only minor changes", "D. Agricultural revolution only"], answer: "B" },
          { id: 39, type: "short", text: "What type of research focuses on beneficial AGI outcomes? (ONE WORD)", answer: "alignment" },
          { id: 40, type: "short", text: "What do researchers call for regarding AGI development? (TWO WORDS)", answer: "safety-focused" }
        ]
      }
    ]
  }
,
  // ============================================================
  // R18 - ADVANCED (Band 8.0)
  // ============================================================
  {
    id: "R18",
    level: "Advanced",
    bandTarget: "8.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Urban Planning and Livable Cities",
        wordCount: 870,
        text: `The quality of urban life depends substantially on how cities are planned, designed, and governed. As the majority of humanity now lives in urban areas—a proportion expected to reach two-thirds by 2050—creating livable cities has become one of the defining challenges of our era. Urban planning must balance competing demands for housing, transportation, economic activity, green space, and public services while addressing inequalities and environmental sustainability.

The modernist planning paradigm that dominated the twentieth century sought to rationalize cities through separation of functions and accommodation of automobiles. Residential, commercial, and industrial zones were segregated; wide roads and highways facilitated car travel; and high-rise towers replaced traditional urban fabric. While addressing genuine problems of overcrowding and pollution, this approach often destroyed neighborhood vitality, increased dependence on automobiles, and created sterile environments hostile to pedestrians and community life.

Jane Jacobs's 1961 book "The Death and Life of Great American Cities" articulated a powerful critique of modernist planning. Jacobs observed that vibrant urban neighborhoods featured mixed uses, short blocks, buildings of varying ages, and high density. These characteristics enabled the diverse activities and informal social contacts that make city life attractive and safe. Planning interventions that eliminated this complexity in favor of rational order destroyed the very qualities that made neighborhoods work.

Contemporary urban planning has increasingly embraced principles aligned with Jacobs's observations. New Urbanism promotes walkable, mixed-use neighborhoods with traditional urban forms. Transit-oriented development concentrates housing and commercial activity around public transportation stations. Complete streets design accommodates pedestrians, cyclists, and transit users alongside automobiles. Form-based codes regulate building shapes and their relationship to streets rather than segregating uses.

Transportation planning has shifted from a car-centric focus toward multimodal systems. Induced demand research demonstrated that building more roads generates more traffic, undermining congestion relief rationales for highway expansion. Congestion pricing, parking reform, and investment in walking, cycling, and transit infrastructure aim to reduce automobile dependence. The rise of ride-sharing, e-bikes, and potentially autonomous vehicles creates both opportunities and uncertainties for urban mobility.

Housing affordability has emerged as a critical urban challenge in many cities. Restrictive zoning limits housing supply while demand from growing urban populations pushes prices upward. Displacement of lower-income residents from gentrifying neighborhoods raises equity concerns. Policy responses include inclusionary zoning requiring affordable units in new developments, community land trusts that separate land ownership from housing, and various forms of rent regulation, each with tradeoffs and contested effectiveness.

Climate change adds urgency to urban sustainability. Cities produce roughly 70 percent of global carbon emissions and concentrate populations vulnerable to heat waves, flooding, and other climate impacts. Green building standards, urban tree canopy expansion, and district energy systems can reduce emissions. Green infrastructure—permeable surfaces, rain gardens, and urban wetlands—helps manage stormwater while providing cooling and habitat benefits. Climate adaptation planning addresses unavoidable impacts through measures like flood barriers and cooling centers.

Public participation in planning has expanded from token consultation to more substantive engagement, though challenges remain. Community input can reflect parochial interests opposed to broader public goods; engagement processes may be captured by well-resourced participants with time to participate. Digital tools offer possibilities for broader participation but may exclude those without access or digital literacy. Balancing expertise with democratic input remains an ongoing challenge for planning practice.`,
        questions: [
          { id: 1, type: "tfng", text: "Most of humanity now lives in urban areas.", answer: "True" },
          { id: 2, type: "tfng", text: "Modernist planning emphasized mixing different urban functions.", answer: "False" },
          { id: 3, type: "tfng", text: "Jane Jacobs supported high-rise tower developments.", answer: "False" },
          { id: 4, type: "tfng", text: "Building more roads reliably reduces traffic congestion.", answer: "False" },
          { id: 5, type: "tfng", text: "Cities produce approximately 70% of global carbon emissions.", answer: "True" },
          { id: 6, type: "short", text: "Who wrote 'The Death and Life of Great American Cities'? (TWO WORDS)", answer: "Jane Jacobs" },
          { id: 7, type: "short", text: "What type of development concentrates around transit stations? (THREE WORDS)", answer: "transit-oriented development" },
          { id: 8, type: "short", text: "What research showed building roads generates more traffic? (TWO WORDS)", answer: "induced demand" },
          { id: 9, type: "mcq", text: "What did vibrant neighborhoods feature according to Jacobs?", options: ["A. Separated functions", "B. Mixed uses and high density", "C. Wide highways", "D. Identical buildings"], answer: "B" },
          { id: 10, type: "mcq", text: "What does New Urbanism promote?", options: ["A. Car-only design", "B. Walkable mixed-use neighborhoods", "C. Industrial zones", "D. Highway expansion"], answer: "B" },
          { id: 11, type: "mcq", text: "What limits housing supply in many cities?", options: ["A. Too much land", "B. Restrictive zoning", "C. Low demand", "D. Excessive building"], answer: "B" },
          { id: 12, type: "mcq", text: "What can green infrastructure help manage?", options: ["A. Air traffic", "B. Stormwater", "C. Internet traffic", "D. Electricity generation"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Modernist planning often destroyed neighborhood ________.", answer: "vitality" }
        ]
      },
      {
        id: "P2",
        title: "Cognitive Biases in Decision Making",
        wordCount: 860,
        text: `Human reasoning systematically departs from normative standards of rationality in predictable ways. Cognitive biases—systematic patterns of deviation from norm or rationality in judgment—affect decisions across domains from medicine to finance to everyday life. Understanding these biases matters not only for psychological theory but for designing institutions, technologies, and educational interventions that support better decisions.

Confirmation bias leads people to seek, interpret, and remember information that confirms their preexisting beliefs while discounting contradictory evidence. This tendency helps explain the persistence of false beliefs in the face of corrective information and the polarization that occurs when people with different prior beliefs encounter the same evidence. Social media algorithms that personalize content based on past engagement may amplify confirmation bias by limiting exposure to challenging perspectives.

Availability bias causes people to overestimate the probability of events that come easily to mind, typically due to recency, vividness, or emotional impact. Dramatic events like plane crashes or terrorist attacks receive disproportionate fear relative to their actual probability, while more common but less memorable risks are underestimated. Media coverage patterns that emphasize dramatic stories over statistical realities contribute to distorted risk perception.

Anchoring occurs when initial information disproportionately influences subsequent judgments, even when the anchor is arbitrary or irrelevant. Negotiators who make the first offer gain advantage because subsequent discussion gravitates toward that starting point. Numerical estimates are pulled toward whatever numbers are recently encountered, even randomly generated ones. Awareness of anchoring provides only partial protection against its effects.

The planning fallacy describes the tendency to underestimate the time, costs, and risks of future actions while overestimating their benefits. Major projects consistently exceed initial budgets and timelines, yet planners remain optimistic about new undertakings. Reference class forecasting—predicting based on outcomes of similar past projects rather than specific plans for the current project—can counteract this bias but is rarely employed.

Sunk cost fallacy leads people to continue investments they should abandon because of resources already committed. Rational decision-making requires evaluating options based on future consequences only, yet people persist with failing projects, relationships, and policies because of past investment. The psychological difficulty of accepting loss makes cutting losses emotionally challenging even when rationally required.

Hindsight bias creates the illusion that past events were more predictable than they actually were. After learning outcomes, people misremember their prior predictions as having been more accurate and view events as having been inevitable. This bias impedes learning from experience by making it difficult to appreciate the genuine uncertainty that existed before outcomes were known.

Overconfidence affects calibration between confidence and accuracy. People are typically more confident in their judgments than their accuracy warrants, particularly in difficult tasks and areas of alleged expertise. Overconfidence contributes to excessive trading in financial markets, inadequate contingency planning, and resistance to revising beliefs in light of new evidence.

Debiasing strategies have shown mixed effectiveness. Simple awareness of biases provides limited protection, as biases operate automatically and unconsciously. Structured decision procedures, checklists, and decision aids can reduce bias in specific contexts. Adversarial collaboration and red-teaming force consideration of alternative perspectives. Statistical and probabilistic reasoning training improves calibration in some domains. Environmental and institutional changes that structure choices may be more effective than individual cognitive interventions.`,
        questions: [
          { id: 14, type: "yng", text: "Cognitive biases affect decisions only in trivial matters.", answer: "No" },
          { id: 15, type: "yng", text: "Confirmation bias involves seeking evidence for existing beliefs.", answer: "Yes" },
          { id: 16, type: "yng", text: "Availability bias leads to accurate probability estimates.", answer: "No" },
          { id: 17, type: "yng", text: "Awareness of anchoring completely eliminates its effects.", answer: "No" },
          { id: 18, type: "yng", text: "Sunk cost fallacy leads to rational decisions.", answer: "No" },
          { id: 19, type: "mcq", text: "What does the planning fallacy cause?", options: ["A. Overestimation of costs", "B. Underestimation of time and costs", "C. Accurate predictions", "D. Pessimistic forecasts"], answer: "B" },
          { id: 20, type: "mcq", text: "What does hindsight bias create?", options: ["A. Better predictions", "B. Illusion of predictability", "C. Improved learning", "D. Accurate memories"], answer: "B" },
          { id: 21, type: "mcq", text: "What contributes to excessive financial trading?", options: ["A. Underconfidence", "B. Overconfidence", "C. Perfect calibration", "D. Rational analysis"], answer: "B" },
          { id: 22, type: "mcq", text: "What does reference class forecasting involve?", options: ["A. Optimistic planning", "B. Predicting based on similar past projects", "C. Ignoring history", "D. Trusting intuition"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Social media algorithms may amplify ________ bias.", answer: "confirmation" },
          { id: 24, type: "summary", text: "Complete: Biases operate automatically and ________.", answer: "unconsciously" },
          { id: 25, type: "summary", text: "Complete: Structured procedures can reduce bias in specific ________.", answer: "contexts" },
          { id: 26, type: "summary", text: "Complete: Red-teaming forces consideration of alternative ________.", answer: "perspectives" }
        ]
      },
      {
        id: "P3",
        title: "The Transition to Renewable Energy",
        wordCount: 870,
        text: `The transition from fossil fuels to renewable energy sources represents one of the most significant technological and economic transformations in human history. Driven by concerns about climate change, air pollution, and energy security, this transition is reshaping energy systems, industries, and geopolitics. While the direction of change seems clear, the pace, pathway, and ultimate configuration of future energy systems remain subjects of intense debate and uncertainty.

Solar and wind power have experienced dramatic cost reductions over the past decade, falling by roughly 90 percent and 70 percent respectively. These technologies have moved from subsidized alternatives to competitive options, increasingly winning contracts against fossil fuel power plants on purely economic grounds. Continued technological improvement and manufacturing scale economies suggest further cost reductions ahead, though the pace of improvement may slow as technologies mature.

The intermittency of solar and wind power presents challenges for grid integration. Unlike dispatchable fossil fuel and nuclear plants that generate electricity on demand, renewable generation fluctuates with weather conditions. Solutions include energy storage systems that save surplus renewable generation for later use, demand response programs that shift electricity consumption to match supply, geographic diversification that smooths variability across regions, and flexible backup generation. The optimal combination depends on local resource availability, grid characteristics, and evolving technology costs.

Battery storage costs have fallen dramatically, following a learning curve similar to solar panels. Lithium-ion batteries dominate current markets, with applications ranging from electric vehicles to grid-scale storage facilities. Alternative technologies including flow batteries, compressed air, and green hydrogen produced through electrolysis may address longer-duration storage needs. The availability of critical minerals like lithium, cobalt, and rare earth elements presents supply chain concerns that may constrain scaling.

The electrification of transportation, buildings, and industrial processes enables renewable electricity to decarbonize sectors previously dependent on direct fossil fuel combustion. Electric vehicles are approaching cost parity with internal combustion engines and may dominate new vehicle sales within the coming decade. Heat pumps can efficiently provide building heating and cooling using electricity. Some industrial processes can shift to electric heating, though others may require alternative solutions like green hydrogen.

The transition creates winners and losers. Fossil fuel workers and communities face job losses and economic disruption, generating political resistance and requiring just transition policies that provide support and alternative opportunities. Oil-exporting nations face declining demand and stranded assets, with implications for geopolitical stability. Manufacturing countries that dominate renewable technology supply chains gain economic and strategic advantages.

Policy plays a crucial role in accelerating or impeding the transition. Carbon pricing internalizes the environmental costs of fossil fuels, making renewable alternatives more competitive. Renewable portfolio standards mandate increasing shares of clean energy. Building codes and appliance standards drive efficiency improvements. Public investment in research, development, and infrastructure supports innovation and deployment. However, policy uncertainty and fossil fuel subsidies in many jurisdictions continue to slow progress.

The pace of transition required to meet climate goals exceeds historical precedents for energy system transformation. Previous transitions from wood to coal and coal to oil unfolded over many decades, while limiting warming to 1.5 degrees Celsius requires near-complete decarbonization within a generation. Whether this accelerated transition is technically and politically feasible remains contested, with scenarios ranging from rapid transformation to prolonged reliance on fossil fuels with escalating climate impacts.`,
        questions: [
          { id: 27, type: "tfng", text: "Solar costs have fallen approximately 90 percent in the past decade.", answer: "True" },
          { id: 28, type: "tfng", text: "Solar and wind generate electricity on demand.", answer: "False" },
          { id: 29, type: "tfng", text: "Battery storage costs have increased dramatically.", answer: "False" },
          { id: 30, type: "tfng", text: "Electric vehicles may dominate new sales within a decade.", answer: "True" },
          { id: 31, type: "tfng", text: "The transition creates only winners with no losers.", answer: "False" },
          { id: 32, type: "matching", text: "Save surplus generation for later use", answer: "energy storage" },
          { id: 33, type: "matching", text: "Support for displaced fossil fuel workers", answer: "just transition" },
          { id: 34, type: "matching", text: "Internalizes environmental costs of fossil fuels", answer: "carbon pricing" },
          { id: 35, type: "mcq", text: "What presents supply chain concerns for batteries?", options: ["A. Excessive supply", "B. Critical mineral availability", "C. Low demand", "D. Simple technology"], answer: "B" },
          { id: 36, type: "mcq", text: "What can heat pumps efficiently provide?", options: ["A. Transportation", "B. Building heating and cooling", "C. Industrial production", "D. Food production"], answer: "B" },
          { id: 37, type: "mcq", text: "What continues to slow transition progress?", options: ["A. Renewable cost reduction", "B. Fossil fuel subsidies", "C. Electric vehicle adoption", "D. Battery improvements"], answer: "B" },
          { id: 38, type: "mcq", text: "What do climate goals require within a generation?", options: ["A. Gradual change", "B. Near-complete decarbonization", "C. Continued fossil fuel use", "D. Minor adjustments"], answer: "B" },
          { id: 39, type: "short", text: "What can green hydrogen address? (THREE WORDS)", answer: "longer-duration storage needs" },
          { id: 40, type: "short", text: "What programs shift consumption to match supply? (TWO WORDS)", answer: "demand response" }
        ]
      }
    ]
  },

  // ============================================================
  // R19 - ADVANCED (Band 8.0)
  // ============================================================
  {
    id: "R19",
    level: "Advanced",
    bandTarget: "8.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Biodiversity Loss and Ecosystem Collapse",
        wordCount: 870,
        text: `Earth is experiencing its sixth mass extinction event, with species disappearing at rates estimated to be 100 to 1,000 times higher than the natural background rate. Unlike previous mass extinctions caused by asteroid impacts or volcanic activity, the current crisis is driven almost entirely by human activities: habitat destruction, overexploitation, pollution, invasive species, and climate change. The implications extend beyond the intrinsic value of lost species to the functioning of ecosystems upon which human civilization depends.

The Living Planet Index, which tracks population trends of vertebrate species worldwide, shows an average 69 percent decline since 1970. Freshwater species have suffered the steepest declines, followed by terrestrial and marine populations. Insects, though less systematically monitored, appear to be experiencing similar or worse population collapses in many regions. These declines represent not mere species loss but massive reduction in the abundance of animal life.

Habitat destruction is the primary driver of biodiversity loss. Agricultural expansion, urbanization, and infrastructure development have converted or degraded vast areas of natural habitat. Tropical forests, which harbor the majority of terrestrial species, continue to be cleared for cattle ranching, soy and palm oil plantations, and other agricultural uses. Wetlands, which provide critical ecosystem services, have been drained and filled at alarming rates.

Overexploitation directly depletes populations beyond their capacity to recover. Industrial fishing has collapsed numerous fish stocks and transformed marine ecosystems. Wildlife trade—both legal and illegal—threatens numerous species, from elephants killed for ivory to pangolins trafficked for traditional medicine. Bushmeat hunting provides essential protein for some communities but has driven many forest species toward extinction.

Pollution introduces toxic substances and excess nutrients into ecosystems. Pesticides accumulate in food chains, affecting species far from application sites. Nutrient runoff from agriculture creates coastal dead zones where algal blooms deplete oxygen. Plastic pollution affects marine life through entanglement and ingestion. Emerging contaminants including pharmaceuticals and microplastics pose risks that are still being assessed.

Invasive species introduced by human activity outcompete, prey upon, or transmit diseases to native species. Island ecosystems, which evolved in isolation, are particularly vulnerable; a majority of recent extinctions have occurred on islands. Introduced predators like rats and cats have devastated seabird colonies and endemic fauna. Global trade continues to move species across biogeographic barriers that previously limited their spread.

Climate change is emerging as an increasingly significant threat. Species must shift their ranges to track suitable conditions, but habitat fragmentation impedes movement, and climate velocity may exceed migration capacity. Coral reefs, which support approximately a quarter of marine species, face existential threat from ocean warming and acidification. Phenological mismatches occur when species that depend on each other respond differently to changing conditions.

Ecosystem services—the benefits humans derive from nature—decline as biodiversity is lost. Pollination by wild insects and birds supports roughly 75 percent of crop species. Natural pest control reduces agricultural costs. Watersheds covered by forests filter water and reduce flooding. Coastal ecosystems buffer storms and prevent erosion. The economic value of these services far exceeds global GDP, yet they are largely unpriced and therefore ignored in economic decisions.`,
        questions: [
          { id: 1, type: "tfng", text: "Current extinction rates are 100-1000 times higher than natural background rates.", answer: "True" },
          { id: 2, type: "tfng", text: "The current extinction is caused primarily by natural processes.", answer: "False" },
          { id: 3, type: "tfng", text: "Freshwater species have suffered the steepest declines.", answer: "True" },
          { id: 4, type: "tfng", text: "Island ecosystems are particularly resistant to invasive species.", answer: "False" },
          { id: 5, type: "tfng", text: "Climate change enables all species to easily migrate.", answer: "False" },
          { id: 6, type: "short", text: "What index shows 69% decline since 1970? (THREE WORDS)", answer: "Living Planet Index" },
          { id: 7, type: "short", text: "What type of zones does nutrient runoff create? (TWO WORDS)", answer: "dead zones" },
          { id: 8, type: "short", text: "What percentage of crop species depend on wild pollination? (NUMBER)", answer: "75" },
          { id: 9, type: "mcq", text: "What is the primary driver of biodiversity loss?", options: ["A. Climate change", "B. Habitat destruction", "C. Pollution", "D. Invasive species"], answer: "B" },
          { id: 10, type: "mcq", text: "What has industrial fishing done to fish stocks?", options: ["A. Increased them", "B. Maintained them", "C. Collapsed them", "D. Stabilized them"], answer: "C" },
          { id: 11, type: "mcq", text: "What do coral reefs support?", options: ["A. 5% of marine species", "B. 25% of marine species", "C. 50% of marine species", "D. 75% of marine species"], answer: "B" },
          { id: 12, type: "mcq", text: "Why are ecosystem services ignored in economic decisions?", options: ["A. Too valuable", "B. Largely unpriced", "C. Well understood", "D. Properly measured"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Phenological ________ occur when interdependent species respond differently.", answer: "mismatches" }
        ]
      },
      {
        id: "P2",
        title: "Digital Privacy in the Information Age",
        wordCount: 860,
        text: `The digital revolution has fundamentally altered the nature and scope of privacy. Every online interaction generates data that can be collected, analyzed, and monetized. Smartphones track location continuously. Social media platforms accumulate detailed profiles of users' interests, relationships, and behaviors. The aggregation of seemingly innocuous data points can reveal intimate details that individuals might never knowingly disclose. Understanding the implications of this transformation is essential for citizens, policymakers, and technologists.

The traditional conception of privacy as freedom from intrusion has proven inadequate for the digital age. Privacy violations no longer require physical presence or active surveillance; automated systems continuously harvest data as a byproduct of normal activities. The distinction between public and private spaces blurs when location data reveals patterns of movement and association. The permanence of digital records means that information shared in one context may resurface years later in unexpected ways.

The business model of major technology platforms rests on collecting and monetizing user data. "Free" services are financed by advertising targeted using detailed user profiles. This creates incentives to maximize data collection and to design services that capture attention and reveal information. Users often do not understand the extent of data collection or the uses to which their data is put, and meaningful consent becomes questionable when opting out means forgoing essential services.

Surveillance capitalism, a term popularized by Shoshana Zuboff, describes how the extraction and analysis of personal data has become a dominant logic of economic activity. User data predicts and influences behavior, making it enormously valuable for advertisers and others seeking to shape human action. This economic imperative drives ever more sophisticated tracking across devices, platforms, and physical spaces. The asymmetry between what companies know about users and what users know about data practices represents a significant power imbalance.

Government surveillance has expanded alongside commercial data collection. Intelligence agencies access data held by technology companies through legal processes and, as revelations by Edward Snowden demonstrated, sometimes through covert means. Law enforcement uses location data, facial recognition, and social media monitoring in investigations. The convergence of commercial and government data collection creates surveillance capabilities that exceed what either sector could achieve alone.

Privacy regulation has struggled to keep pace with technological change. The European Union's General Data Protection Regulation (GDPR) established principles including data minimization, purpose limitation, and the right to be forgotten, with significant penalties for violations. The California Consumer Privacy Act provides similar though less comprehensive protections. However, enforcement remains challenging, and global inconsistency creates complexity for businesses and uncertainty for users.

Technical approaches to privacy protection include encryption, anonymous communication tools, and privacy-enhancing technologies that enable data analysis without revealing individual records. However, technical solutions face limitations: they may be difficult for average users to implement, may conflict with law enforcement needs, and may be undermined by the network effects that favor platforms with the most data.

The boundaries of acceptable data collection and use remain contested. Some argue that privacy concerns are overblown, that personalization benefits users, and that regulation impedes innovation. Others contend that privacy is a fundamental right essential to autonomy and democracy, and that current practices represent an unacceptable erosion of personal freedom. These debates will shape the development of technology and governance for decades to come.`,
        questions: [
          { id: 14, type: "yng", text: "Traditional privacy conceptions are adequate for the digital age.", answer: "No" },
          { id: 15, type: "yng", text: "Major platforms monetize user data for advertising.", answer: "Yes" },
          { id: 16, type: "yng", text: "Users typically fully understand data collection practices.", answer: "No" },
          { id: 17, type: "yng", text: "GDPR was established by the European Union.", answer: "Yes" },
          { id: 18, type: "yng", text: "There is consensus on acceptable data collection boundaries.", answer: "No" },
          { id: 19, type: "mcq", text: "Who popularized the term 'surveillance capitalism'?", options: ["A. Edward Snowden", "B. Shoshana Zuboff", "C. Mark Zuckerberg", "D. Tim Cook"], answer: "B" },
          { id: 20, type: "mcq", text: "What do user data practices create according to the passage?", options: ["A. Equal relationships", "B. Power imbalance", "C. Perfect transparency", "D. User control"], answer: "B" },
          { id: 21, type: "mcq", text: "What did Snowden reveal about intelligence agencies?", options: ["A. They protect privacy", "B. They use covert data access", "C. They oppose surveillance", "D. They restrict collection"], answer: "B" },
          { id: 22, type: "mcq", text: "What do technical privacy solutions face?", options: ["A. No challenges", "B. Limitations and difficulties", "C. Universal adoption", "D. Government support"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Digital records' permanence means information may ________ unexpectedly.", answer: "resurface" },
          { id: 24, type: "summary", text: "Complete: GDPR established principles including data ________.", answer: "minimization" },
          { id: 25, type: "summary", text: "Complete: Network effects favor platforms with the most ________.", answer: "data" },
          { id: 26, type: "summary", text: "Complete: Some argue privacy is essential to autonomy and ________.", answer: "democracy" }
        ]
      },
      {
        id: "P3",
        title: "Language Evolution and Change",
        wordCount: 870,
        text: `Language is not a static system but a constantly evolving medium shaped by social, cognitive, and communicative pressures. The English spoken today differs substantially from that of Shakespeare's time, which in turn differed from Chaucer's Middle English and the Old English of Beowulf. Understanding how and why languages change illuminates fundamental aspects of human cognition and social organization while informing debates about language policy and education.

Sound change represents one of the most systematic aspects of language evolution. Over time, the pronunciation of words shifts through processes that affect entire classes of sounds in regular ways. The Great Vowel Shift that transformed English pronunciation between roughly 1400 and 1700 systematically raised and altered long vowels, explaining why English spelling often mismatches pronunciation. Sound changes propagate through speech communities gradually, with younger speakers typically leading shifts that older speakers resist.

Grammatical change operates more slowly but no less consequentially. English has lost most of the inflectional complexity of its Germanic ancestors, relying instead on word order and prepositions to convey grammatical relationships. This simplification process, common in languages with extensive contact, reflects broader principles of linguistic economy. Meanwhile, grammaticalization continuously converts content words into grammatical elements; "going to" has become a future tense marker, and "a lot of" is becoming a quantifier.

Lexical change—the addition, loss, and shifting of word meanings—responds most directly to social and technological change. New inventions, concepts, and cultural phenomena require new vocabulary, generated through coinage, borrowing, compounding, and semantic extension. Languages in contact exchange words; English has absorbed vocabulary from Latin, French, Norse, and numerous other languages. Semantic drift causes words to narrow, broaden, or shift in meaning over generations.

Language contact accelerates and directs change. When speakers of different languages interact regularly, they may develop pidgins—simplified communication systems—that can evolve into creoles with full linguistic complexity when adopted as native languages. Bilingual speakers introduce features from one language into another. Language death occurs when communities shift to dominant languages, often under pressure from economic forces, educational policies, or social prestige.

Standardization attempts to fix language in particular forms, typically tied to written norms and institutional authority. Standard varieties gain prestige while vernaculars are stigmatized as incorrect, though linguistically all varieties are equally systematic. Prescriptive rules often reflect historical accidents or class prejudices rather than inherent logic. Yet standard languages serve important functions in enabling communication across dialect boundaries and providing stable reference points for formal domains.

Technology has created new contexts for language use with distinct characteristics. Computer-mediated communication exhibits features of both speech and writing while developing novel conventions. Social media platforms shape communication through character limits, hashtags, and algorithmic amplification. Texting and messaging have generated distinctive orthographic and syntactic patterns that older speakers often decry but that follow their own systematic rules.

Theories of language change connect to broader questions about the nature of language itself. Whether change is driven primarily by internal linguistic dynamics, external social factors, or cognitive constraints remains debated. The relationship between language change and the acquisition of language by children is complex; children do not simply copy adult speech but construct grammars from the input they receive. Understanding language change thus requires integrating insights from linguistics, psychology, sociology, and history.`,
        questions: [
          { id: 27, type: "tfng", text: "Language is a static unchanging system.", answer: "False" },
          { id: 28, type: "tfng", text: "The Great Vowel Shift occurred between 1400 and 1700.", answer: "True" },
          { id: 29, type: "tfng", text: "English has gained inflectional complexity over time.", answer: "False" },
          { id: 30, type: "tfng", text: "All language varieties are linguistically equally systematic.", answer: "True" },
          { id: 31, type: "tfng", text: "Children simply copy adult speech without modification.", answer: "False" },
          { id: 32, type: "matching", text: "Simplified systems from language contact", answer: "pidgins" },
          { id: 33, type: "matching", text: "Content words becoming grammatical elements", answer: "grammaticalization" },
          { id: 34, type: "matching", text: "Words narrowing, broadening, or shifting in meaning", answer: "semantic drift" },
          { id: 35, type: "mcq", text: "Who typically leads sound changes?", options: ["A. Older speakers", "B. Younger speakers", "C. Language authorities", "D. Foreign speakers"], answer: "B" },
          { id: 36, type: "mcq", text: "What has English absorbed vocabulary from?", options: ["A. Only Germanic languages", "B. Latin, French, Norse, and others", "C. Only Romance languages", "D. Only Asian languages"], answer: "B" },
          { id: 37, type: "mcq", text: "What do prescriptive rules often reflect?", options: ["A. Inherent logic", "B. Historical accidents or prejudices", "C. Scientific consensus", "D. Universal grammar"], answer: "B" },
          { id: 38, type: "mcq", text: "What has computer-mediated communication developed?", options: ["A. No distinct features", "B. Novel conventions", "C. Only speech patterns", "D. Only written patterns"], answer: "B" },
          { id: 39, type: "short", text: "What explains English spelling-pronunciation mismatches? (THREE WORDS)", answer: "Great Vowel Shift" },
          { id: 40, type: "short", text: "What do pidgins evolve into when adopted natively? (ONE WORD)", answer: "creoles" }
        ]
      }
    ]
  }
,
  // ============================================================
  // R20 - ADVANCED (Band 8.0)
  // ============================================================
  {
    id: "R20",
    level: "Advanced",
    bandTarget: "8.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Climate Engineering: Geoengineering Approaches",
        wordCount: 870,
        text: `As greenhouse gas emissions continue to rise and climate impacts intensify, attention has increasingly turned to deliberate interventions in the climate system—collectively termed climate engineering or geoengineering. These proposals range from removing carbon dioxide from the atmosphere to reflecting sunlight back into space. While no substitute for reducing emissions, geoengineering might provide additional tools for managing climate risk. However, these technologies raise profound questions about governance, unintended consequences, and humanity's relationship with the planetary environment.

Solar radiation management (SRM) approaches aim to reduce global temperatures by reflecting incoming sunlight. Stratospheric aerosol injection would introduce reflective particles—likely sulfate—into the upper atmosphere, mimicking the cooling effect of large volcanic eruptions. Marine cloud brightening would spray sea salt particles to increase the reflectivity of low-lying clouds over oceans. Space-based reflectors, though technologically distant, would intercept sunlight before it reaches Earth. These approaches could potentially cool the planet rapidly and relatively inexpensively.

However, SRM does not address the root cause of climate change—elevated greenhouse gas concentrations—and would require indefinite continuation once started. Termination would trigger rapid warming as the masking effect disappeared while greenhouse gases remained. Regional effects would be uneven, potentially benefiting some areas while harming others. Impacts on precipitation patterns, monsoon systems, and ozone chemistry are uncertain. These risks have led most researchers to view SRM as a potential emergency measure rather than a preferred solution.

Carbon dioxide removal (CDR) approaches address climate change more directly by reducing atmospheric greenhouse gas concentrations. Afforestation and reforestation sequester carbon in growing biomass. Bioenergy with carbon capture and storage (BECCS) would grow biomass, burn it for energy, and capture the resulting emissions for geological storage. Direct air capture uses chemical processes to extract CO2 directly from ambient air. Enhanced weathering accelerates natural chemical reactions that absorb CO2. Ocean-based approaches include iron fertilization to stimulate plankton growth.

CDR approaches face challenges of scale, cost, and side effects. Achieving climatically significant carbon removal would require operations vastly larger than current efforts. Afforestation at necessary scales would compete with agricultural land. BECCS similarly demands enormous land areas and water resources. Direct air capture remains expensive, though costs are declining. Most CDR approaches remove carbon slowly, meaning they cannot provide rapid climate relief. However, CDR technologies that prove economically viable could complement emissions reductions in achieving climate goals.

Governance of geoengineering presents unprecedented challenges. SRM could be deployed unilaterally by individual nations at relatively low cost, potentially affecting global climate without international consent. Who would decide the target temperature, and how would those harmed by interventions seek redress? Existing international frameworks were not designed to address intentional climate modification. Calls for international governance mechanisms have yielded limited progress given the speculative nature of most proposals.

Research governance raises distinct issues. Outdoor experiments, even small-scale tests, face opposition from those concerned about normalization and slippery slopes toward deployment. Yet understanding geoengineering options requires research that cannot be conducted purely through models. Proposals for research governance emphasize transparency, international cooperation, and meaningful public engagement, but no consensus framework exists.

The moral hazard concern—that geoengineering availability might reduce motivation for emissions reductions—influences debates. Some argue that even discussing geoengineering sends the wrong signal, distracting from necessary decarbonization. Others contend that climate risks are severe enough that all options must be evaluated, and that geoengineering research need not reduce mitigation efforts. This tension shapes how geoengineering is discussed in scientific and policy contexts.`,
        questions: [
          { id: 1, type: "tfng", text: "SRM addresses the root cause of climate change.", answer: "False" },
          { id: 2, type: "tfng", text: "Stratospheric aerosol injection mimics volcanic cooling.", answer: "True" },
          { id: 3, type: "tfng", text: "Terminating SRM would cause gradual cooling.", answer: "False" },
          { id: 4, type: "tfng", text: "CDR approaches can provide rapid climate relief.", answer: "False" },
          { id: 5, type: "tfng", text: "International geoengineering governance is fully developed.", answer: "False" },
          { id: 6, type: "short", text: "What would marine cloud brightening spray? (THREE WORDS)", answer: "sea salt particles" },
          { id: 7, type: "short", text: "What does BECCS stand for? (FIRST LETTERS)", answer: "bioenergy carbon capture storage" },
          { id: 8, type: "short", text: "What concern might reduce emissions reduction motivation? (TWO WORDS)", answer: "moral hazard" },
          { id: 9, type: "mcq", text: "What do SRM approaches aim to do?", options: ["A. Remove CO2", "B. Reflect sunlight", "C. Increase emissions", "D. Store carbon"], answer: "B" },
          { id: 10, type: "mcq", text: "What would BECCS require enormous amounts of?", options: ["A. Coal", "B. Oil", "C. Land and water", "D. Nuclear fuel"], answer: "C" },
          { id: 11, type: "mcq", text: "Who could deploy SRM unilaterally?", options: ["A. Only the UN", "B. Individual nations", "C. Only scientists", "D. Only corporations"], answer: "B" },
          { id: 12, type: "mcq", text: "What do outdoor experiment opponents fear?", options: ["A. Success", "B. Normalization and slippery slopes", "C. Cost savings", "D. International cooperation"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Direct air capture costs are ________.", answer: "declining" }
        ]
      },
      {
        id: "P2",
        title: "Economic Inequality and Social Consequences",
        wordCount: 860,
        text: `Economic inequality has increased substantially in most developed countries over the past four decades, reversing the compression of incomes that characterized the post-World War II era. The causes of this transformation are debated, but technological change, globalization, institutional shifts, and policy choices all appear to play roles. Rising inequality has consequences extending beyond economics to health, social cohesion, political stability, and equality of opportunity that raise fundamental questions about the kind of societies we want to create.

Multiple measures capture different dimensions of inequality. The Gini coefficient summarizes the overall distribution of income, while top income shares track concentration at the upper end. Wealth inequality exceeds income inequality, with the top percentile holding a disproportionate share of assets. Intergenerational mobility—the relationship between parents' economic position and children's outcomes—reveals whether inequality persists across generations or whether economic position reflects individual merit.

Skill-biased technological change has increased returns to education, widening gaps between workers with different credential levels. Automation and artificial intelligence threaten to displace workers across an expanding range of occupations, potentially exacerbating inequality further. However, technology also creates new occupations and can complement human capabilities; its distributional effects depend on how the gains from technological progress are shared.

Globalization has exposed workers in developed countries to competition from lower-wage regions, contributing to manufacturing decline and wage stagnation in middle-skill occupations. Capital mobility has shifted bargaining power from workers to investors and enabled tax competition among jurisdictions. Trade has also lowered consumer prices and expanded markets for exports, with effects that vary across sectors and populations.

Institutional changes have reshaped labor markets in ways that increase inequality. Declining unionization has weakened worker bargaining power. Minimum wage erosion relative to productivity and living costs has compressed the bottom of the wage distribution. Corporate governance changes have prioritized shareholder returns, contributing to rising executive compensation. Financial sector growth has channeled income toward a sector with particularly high compensation at the top.

Policy choices influence inequality through taxation, transfers, and public services. Progressive taxation and social programs can redistribute market incomes to reduce disposable income inequality. Countries with similar market income distributions vary substantially in post-tax-and-transfer inequality depending on policy choices. Cuts to top marginal tax rates and shifts from direct to indirect taxation have reduced progressivity in many countries. Meanwhile, education, healthcare, and other public services affect equality of opportunity and living standards independent of income.

Health correlates with socioeconomic status across the income distribution, not merely at the poverty threshold. The "social gradient" in health means that each step down the economic ladder corresponds to worse health outcomes on average. Mechanisms include differential access to healthcare, healthy food, and safe environments; chronic stress from economic insecurity; and health behaviors associated with socioeconomic position. More unequal societies tend to have worse population health outcomes, suggesting society-level effects beyond individual circumstances.

The political consequences of inequality include declining trust in institutions, increased polarization, and the rise of populist movements. When economic gains accrue primarily to those at the top while many experience stagnation, legitimacy of economic and political systems comes into question. Whether liberal democracies can generate broadly shared prosperity or whether inequality will continue to widen remains one of the central questions of contemporary political economy.`,
        questions: [
          { id: 14, type: "yng", text: "Inequality has decreased in most developed countries recently.", answer: "No" },
          { id: 15, type: "yng", text: "Wealth inequality exceeds income inequality.", answer: "Yes" },
          { id: 16, type: "yng", text: "All countries have identical post-tax inequality.", answer: "No" },
          { id: 17, type: "yng", text: "Health correlates with socioeconomic status across the distribution.", answer: "Yes" },
          { id: 18, type: "yng", text: "Inequality has no political consequences.", answer: "No" },
          { id: 19, type: "mcq", text: "What has skill-biased technological change increased?", options: ["A. Returns to manual labor", "B. Returns to education", "C. Union membership", "D. Tax rates"], answer: "B" },
          { id: 20, type: "mcq", text: "What has declining unionization weakened?", options: ["A. Corporate profits", "B. Worker bargaining power", "C. Management authority", "D. Product quality"], answer: "B" },
          { id: 21, type: "mcq", text: "What does the social gradient in health show?", options: ["A. Health is random", "B. Only poverty affects health", "C. Each economic step affects health", "D. Wealth guarantees health"], answer: "C" },
          { id: 22, type: "mcq", text: "What political consequence does inequality correlate with?", options: ["A. Increased trust", "B. Political stability", "C. Declining trust and polarization", "D. Universal satisfaction"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Intergenerational mobility reveals whether inequality persists across ________.", answer: "generations" },
          { id: 24, type: "summary", text: "Complete: Capital mobility has shifted bargaining power from workers to ________.", answer: "investors" },
          { id: 25, type: "summary", text: "Complete: Progressive taxation can ________ market incomes.", answer: "redistribute" },
          { id: 26, type: "summary", text: "Complete: Chronic stress from economic insecurity affects ________.", answer: "health" }
        ]
      },
      {
        id: "P3",
        title: "The Neuroscience of Memory",
        wordCount: 870,
        text: `Memory is not a single faculty but a collection of systems serving different functions and relying on distinct brain structures. Understanding how memories are formed, stored, and retrieved has been one of neuroscience's great achievements, with implications ranging from education to legal testimony to treating memory disorders. Yet the nature of memory continues to challenge researchers, revealing that our intuitions about how we remember are often mistaken.

The distinction between declarative and non-declarative memory systems emerged from studies of patients with specific brain lesions. Declarative memory—conscious recollection of facts and events—depends on the hippocampus and surrounding medial temporal lobe structures. Non-declarative memory, including skills, habits, and conditioning, relies on other brain systems and remains intact even when hippocampal function is lost. The famous patient H.M., who could not form new declarative memories after hippocampal removal, could nonetheless learn new motor skills without remembering the learning sessions.

Within declarative memory, episodic and semantic memory can be distinguished. Episodic memory concerns specific events in one's personal past, including contextual details of when and where. Semantic memory stores general knowledge about the world without reference to when it was acquired. The hippocampus appears particularly important for episodic memory, which may explain why aging and neurodegenerative diseases often affect recall of recent events while preserving general knowledge.

Memory formation involves multiple stages. Encoding transforms experience into neural representations through patterns of synaptic activity. Consolidation stabilizes these representations over time, with sleep playing an important role in memory consolidation. Storage maintains memories in distributed neural networks, with the hippocampus serving initially as an index that binds together cortical representations of different memory components. Retrieval reconstructs memories from stored elements.

The reconstructive nature of memory means that remembering is not like playing back a recording. Each retrieval is an active process that can modify the memory itself. Memories blend actual experience with inferences, schemas, and post-event information. False memories—vivid recollections of events that never occurred—can be created through suggestion and imagination. These findings have important implications for eyewitness testimony, which is far less reliable than jurors typically assume.

Emotion strongly influences memory. Emotionally significant events are generally better remembered than neutral ones, with the amygdala modulating hippocampal encoding of emotionally arousing experiences. However, the relationship between emotion and accuracy is complex; high arousal may enhance memory for central features while impairing memory for peripheral details. Traumatic memories may be particularly strong or may be fragmented and incomplete.

Working memory—the limited capacity system that maintains and manipulates information for immediate use—depends on prefrontal cortex function. Working memory capacity correlates with fluid intelligence and predicts performance on complex cognitive tasks. Training programs that claim to improve working memory and thereby intelligence have shown mixed results, with transfer to untrained tasks remaining controversial.

Interventions targeting memory have therapeutic and enhancement applications. Memory consolidation can be disrupted to prevent traumatic memories from becoming persistent. Cognitive strategies like elaboration and spaced repetition improve learning efficiency. Pharmacological enhancers remain limited, though various compounds have shown modest effects. The prospect of more powerful memory enhancement raises ethical questions about authenticity, fairness, and what we value in human memory.`,
        questions: [
          { id: 27, type: "tfng", text: "Memory is a single unified system.", answer: "False" },
          { id: 28, type: "tfng", text: "Declarative memory depends on the hippocampus.", answer: "True" },
          { id: 29, type: "tfng", text: "Patient H.M. could form new declarative memories.", answer: "False" },
          { id: 30, type: "tfng", text: "Retrieval plays back memories like a recording.", answer: "False" },
          { id: 31, type: "tfng", text: "Emotionally significant events are generally better remembered.", answer: "True" },
          { id: 32, type: "matching", text: "Conscious recollection of facts and events", answer: "declarative memory" },
          { id: 33, type: "matching", text: "Specific events including contextual details", answer: "episodic memory" },
          { id: 34, type: "matching", text: "Limited capacity system for immediate use", answer: "working memory" },
          { id: 35, type: "mcq", text: "What role does sleep play in memory?", options: ["A. Disrupts consolidation", "B. Important for consolidation", "C. Erases memories", "D. No effect"], answer: "B" },
          { id: 36, type: "mcq", text: "What can be created through suggestion?", options: ["A. Accurate memories only", "B. False memories", "C. Better recall", "D. Enhanced learning"], answer: "B" },
          { id: 37, type: "mcq", text: "What does working memory capacity correlate with?", options: ["A. Physical strength", "B. Fluid intelligence", "C. Age only", "D. Emotional memory"], answer: "B" },
          { id: 38, type: "mcq", text: "What may high arousal impair memory for?", options: ["A. Central features", "B. Emotional content", "C. Peripheral details", "D. All details equally"], answer: "C" },
          { id: 39, type: "short", text: "What type of memory stores general world knowledge? (ONE WORD)", answer: "semantic" },
          { id: 40, type: "short", text: "What strategy uses distributed learning sessions? (TWO WORDS)", answer: "spaced repetition" }
        ]
      }
    ]
  },

  // ============================================================
  // R21 - ADVANCED (Band 8.0)
  // ============================================================
  {
    id: "R21",
    level: "Advanced",
    bandTarget: "8.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Post-Industrial Economies and Labor Markets",
        wordCount: 870,
        text: `The transition from industrial to post-industrial economies has fundamentally transformed the structure of work and society in developed nations. Manufacturing, once the backbone of economic activity and middle-class employment, has declined dramatically as production shifted to lower-wage countries and automation replaced human labor. Service industries, particularly knowledge-intensive sectors such as finance, technology, and healthcare, now dominate employment and economic output. Understanding this transformation is essential for addressing the challenges it creates.

The shift began accelerating in the 1970s and 1980s as globalization integrated world markets and containerized shipping reduced transportation costs. Manufacturing firms could locate production wherever costs were lowest while serving global markets. Developing countries, particularly in Asia, attracted manufacturing investment through lower wages and improving infrastructure. Meanwhile, automation technologies steadily reduced the labor required for production even when manufacturing remained in developed countries.

The occupational structure has polarized between high-skill, high-wage jobs in professional and technical fields and low-skill, low-wage jobs in services. Middle-skill occupations—manufacturing, clerical work, sales—that provided pathways to middle-class life have hollowed out. This "barbell" pattern reflects the relative ease of automating routine tasks, whether cognitive or manual, while non-routine tasks at both ends of the skill spectrum remain more resistant to technological displacement.

Education has become increasingly important for economic opportunity in post-industrial economies. The college wage premium—the earnings advantage of degree holders over those with only high school education—has risen substantially. Yet educational attainment has not kept pace with skill demands, and the quality of education varies widely. Student debt burdens have increased as public funding has declined. The relationship between education and economic outcomes has become both more important and more unequal.

The geography of economic activity has shifted toward metropolitan areas, particularly those with concentrations of knowledge industries. Cities with strong technology, finance, and professional service sectors have thrived while regions dependent on manufacturing have experienced decline. This geographic polarization has contributed to political divides between thriving metropolitan cores and struggling peripheral areas, with implications for housing markets, public services, and community vitality.

The nature of employment relationships has changed. Traditional full-time employment with benefits has given way to more contingent arrangements including temporary work, independent contracting, and platform-mediated "gig" work. These arrangements offer flexibility for some workers while leaving others without the protections and benefits associated with standard employment. The rise of the gig economy has raised questions about worker classification, benefits provision, and labor rights in the digital age.

Automation and artificial intelligence threaten further disruption. While predictions of technological unemployment have repeatedly proven premature, the pace and scope of current technological change may differ from historical precedents. AI systems now perform tasks in domains like medical diagnosis, legal research, and financial analysis that were previously thought to require human judgment. Whether new forms of employment will emerge to absorb displaced workers, as has occurred historically, remains uncertain.

Policy responses to post-industrial transformation include investment in education and training, place-based economic development, portable benefits not tied to specific employers, and proposals for universal basic income that would provide economic security independent of employment. The appropriate policy mix depends on contested assumptions about technological trajectories, labor market dynamics, and the proper role of government in shaping economic outcomes.`,
        questions: [
          { id: 1, type: "tfng", text: "Manufacturing still dominates employment in developed countries.", answer: "False" },
          { id: 2, type: "tfng", text: "The post-industrial transition began accelerating in the 1970s-80s.", answer: "True" },
          { id: 3, type: "tfng", text: "Middle-skill occupations have expanded substantially.", answer: "False" },
          { id: 4, type: "tfng", text: "The college wage premium has increased.", answer: "True" },
          { id: 5, type: "tfng", text: "Geographic polarization has no political implications.", answer: "False" },
          { id: 6, type: "short", text: "What reduced transportation costs in globalization? (TWO WORDS)", answer: "containerized shipping" },
          { id: 7, type: "short", text: "What pattern describes the polarized occupational structure? (ONE WORD)", answer: "barbell" },
          { id: 8, type: "short", text: "What type of income proposal provides economic security? (THREE WORDS)", answer: "universal basic income" },
          { id: 9, type: "mcq", text: "What type of tasks are most resistant to automation?", options: ["A. Routine cognitive", "B. Routine manual", "C. Non-routine tasks", "D. All manufacturing"], answer: "C" },
          { id: 10, type: "mcq", text: "What has happened to student debt burdens?", options: ["A. Decreased", "B. Remained stable", "C. Increased", "D. Disappeared"], answer: "C" },
          { id: 11, type: "mcq", text: "What characterizes regions dependent on manufacturing?", options: ["A. Strong growth", "B. Economic decline", "C. Population increase", "D. Rising wages"], answer: "B" },
          { id: 12, type: "mcq", text: "What do AI systems now perform in professional domains?", options: ["A. Only physical labor", "B. Tasks requiring judgment", "C. Nothing significant", "D. Only entertainment"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Gig economy raises questions about worker ________ and benefits.", answer: "classification" }
        ]
      },
      {
        id: "P2",
        title: "Ocean Acidification and Marine Chemistry",
        wordCount: 860,
        text: `The absorption of atmospheric carbon dioxide by the oceans has moderated climate change but at a cost: ocean acidification. As CO2 dissolves in seawater, it forms carbonic acid, which releases hydrogen ions that lower pH and reduce carbonate ion availability. These chemical changes threaten marine organisms that build shells and skeletons from calcium carbonate and could disrupt marine ecosystems on which billions of people depend for food and livelihoods.

Ocean pH has decreased by approximately 0.1 units since preindustrial times, representing a 30 percent increase in hydrogen ion concentration. While this change may seem small, it is unprecedented in at least 300 million years in terms of rate. The ocean has absorbed roughly 30 percent of anthropogenic CO2 emissions, but this buffering capacity comes with consequences for marine chemistry that will persist for centuries even if emissions cease.

Calcifying organisms face the most direct threat. Corals, shellfish, sea urchins, and certain plankton species build structures from calcium carbonate in two forms: calcite and aragonite. As carbonate ion concentrations decline, these organisms must expend more energy to produce shells, potentially reducing growth rates and survival. Aragonite, the more soluble form, is particularly vulnerable; aragonite saturation levels are already declining toward the threshold at which dissolution exceeds production.

Coral reefs, often called the rainforests of the sea, are particularly vulnerable. Reefs depend on calcification by coral polyps and coralline algae to maintain their structures. Combined with warming-induced bleaching events, acidification threatens the continued existence of reef ecosystems that support roughly 25 percent of marine species. Reef loss would devastate fishing communities and coastal tourism while eliminating natural storm protection for coastal populations.

Impacts extend beyond calcification. Acidification affects the physiology of fish and other organisms, with documented effects on behavior, sensory systems, and reproduction. Changes in plankton communities could alter marine food webs from the bottom up. The nitrogen cycle and other biogeochemical processes are influenced by ocean chemistry. These complex interactions make predicting ecosystem-level effects challenging.

Polar regions face particularly severe acidification due to colder water's higher CO2 solubility. Arctic and Antarctic waters may become corrosive to aragonite shells within decades. These regions support highly productive fisheries and unique ecosystems that are particularly vulnerable to rapid chemical change. The implications for species dependent on calcifying organisms at the base of polar food webs are concerning.

Addressing ocean acidification ultimately requires reducing CO2 emissions. Unlike some pollutants that dissipate quickly, CO2 acidification will persist for tens of thousands of years until natural processes restore ocean chemistry. Local interventions such as reducing other stressors, establishing marine protected areas, and potentially adding alkalinity in targeted locations may provide some resilience but cannot address the global-scale chemical transformation underway.

Research priorities include understanding organism and ecosystem responses to acidification across different timescales and in combination with other stressors, developing monitoring systems to track acidification and its impacts, and identifying management approaches that enhance ecosystem resilience. The ocean acidification challenge is inseparable from the broader challenge of climate change, requiring integrated responses at local, national, and global scales.`,
        questions: [
          { id: 14, type: "yng", text: "Ocean pH has increased since preindustrial times.", answer: "No" },
          { id: 15, type: "yng", text: "The ocean has absorbed roughly 30% of human CO2 emissions.", answer: "Yes" },
          { id: 16, type: "yng", text: "Aragonite is less soluble than calcite.", answer: "No" },
          { id: 17, type: "yng", text: "Coral reefs support about 25% of marine species.", answer: "Yes" },
          { id: 18, type: "yng", text: "Polar regions are protected from acidification.", answer: "No" },
          { id: 19, type: "mcq", text: "What forms when CO2 dissolves in seawater?", options: ["A. Oxygen", "B. Carbonic acid", "C. Nitrogen", "D. Sulfur"], answer: "B" },
          { id: 20, type: "mcq", text: "What represents a 0.1 unit pH decrease?", options: ["A. 3% more hydrogen ions", "B. 10% more hydrogen ions", "C. 30% more hydrogen ions", "D. 100% more hydrogen ions"], answer: "C" },
          { id: 21, type: "mcq", text: "Why are polar regions particularly vulnerable?", options: ["A. Warmer water", "B. Cold water absorbs more CO2", "C. Less ocean area", "D. No marine life"], answer: "B" },
          { id: 22, type: "mcq", text: "What ultimately addresses ocean acidification?", options: ["A. Marine protected areas alone", "B. Reducing CO2 emissions", "C. Adding calcium", "D. Warming the ocean"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Acidification effects will persist for tens of ________ of years.", answer: "thousands" },
          { id: 24, type: "summary", text: "Complete: Reef loss would eliminate natural storm ________ for coasts.", answer: "protection" },
          { id: 25, type: "summary", text: "Complete: Acidification affects fish physiology, behavior, and ________.", answer: "reproduction" },
          { id: 26, type: "summary", text: "Complete: Plankton community changes could alter marine food ________.", answer: "webs" }
        ]
      },
      {
        id: "P3",
        title: "Ethics and Artificial Intelligence",
        wordCount: 870,
        text: `The rapid development of artificial intelligence has outpaced the ethical frameworks needed to guide its deployment. AI systems now make consequential decisions affecting employment, credit, criminal justice, healthcare, and many other domains. These systems can perpetuate or amplify biases, operate without meaningful human oversight, and make decisions whose rationale cannot be explained. Developing ethical principles and governance mechanisms for AI has become an urgent priority for technologists, policymakers, and society at large.

Fairness and non-discrimination represent central ethical concerns. AI systems trained on historical data may reproduce and amplify biases present in that data. Predictive policing algorithms can reinforce patterns of over-policing in minority communities. Resume screening systems may discriminate against women or minorities if training data reflects historical hiring patterns. Even when protected characteristics are excluded from input data, proxies can produce discriminatory outcomes. Defining fairness mathematically and ensuring AI systems meet these definitions remains technically and conceptually challenging.

Transparency and explainability have become important principles for AI ethics. Deep learning systems often function as "black boxes" whose decision processes cannot be interpreted even by their creators. When such systems make high-stakes decisions affecting individuals, the lack of explanation raises concerns about accountability and due process. Explainable AI research aims to develop systems that can provide meaningful accounts of their reasoning, though tradeoffs between performance and interpretability complicate this goal.

Autonomy and human control raise questions about appropriate human-machine relationships. Autonomous weapons systems that select and engage targets without meaningful human control threaten principles of international humanitarian law. Healthcare AI that makes diagnostic or treatment recommendations may override or undermine physician judgment. Self-driving vehicles must balance safety, efficiency, and human preferences in ways that require value judgments. Determining when human oversight is necessary and how to maintain meaningful control remains contested.

Privacy concerns extend beyond traditional conceptions of data protection. AI systems can infer sensitive information—health conditions, political views, sexual orientation—from seemingly innocuous data. Facial recognition enables surveillance at unprecedented scale. Behavioral prediction systems can manipulate choices in ways that undermine autonomy. The aggregation of data across contexts creates profiles that individuals may have no opportunity to contest or correct.

Power concentration represents an often-overlooked ethical dimension. AI development requires computational resources and data access concentrated in a small number of companies. These entities shape how AI is developed and deployed, with limited democratic accountability. The economic effects of AI may exacerbate inequality if productivity gains accrue primarily to capital owners. The geopolitical dimensions of AI competition raise further questions about whose values will shape these powerful technologies.

Various initiatives have attempted to codify AI ethics principles. Organizations from technology companies to intergovernmental bodies have issued guidelines emphasizing fairness, transparency, accountability, and human oversight. However, principles alone do not ensure ethical outcomes; implementation requires specific practices, governance mechanisms, and enforcement. Translating high-level principles into technical requirements, organizational practices, and legal frameworks remains a work in progress.

The global scope of AI development complicates governance. Different jurisdictions have different regulatory approaches, cultural values, and capacity for oversight. Race-to-the-bottom dynamics may favor less regulated environments. International coordination on AI governance faces the same challenges that have impeded cooperation on other technology policy issues. Whether global institutions can develop effective frameworks for AI ethics remains to be seen.`,
        questions: [
          { id: 27, type: "tfng", text: "AI ethical frameworks have kept pace with AI development.", answer: "False" },
          { id: 28, type: "tfng", text: "AI systems can amplify biases present in training data.", answer: "True" },
          { id: 29, type: "tfng", text: "Deep learning systems always provide clear explanations.", answer: "False" },
          { id: 30, type: "tfng", text: "Excluding protected characteristics ensures non-discrimination.", answer: "False" },
          { id: 31, type: "tfng", text: "AI principles alone ensure ethical outcomes.", answer: "False" },
          { id: 32, type: "matching", text: "Systems whose reasoning cannot be interpreted", answer: "black boxes" },
          { id: 33, type: "matching", text: "AI that explains its decision-making process", answer: "explainable AI" },
          { id: 34, type: "matching", text: "Weapons selecting targets without human control", answer: "autonomous weapons" },
          { id: 35, type: "mcq", text: "What can predictive policing algorithms reinforce?", options: ["A. Crime reduction", "B. Over-policing patterns", "C. Fair treatment", "D. Community trust"], answer: "B" },
          { id: 36, type: "mcq", text: "What can AI infer from innocuous data?", options: ["A. Nothing useful", "B. Only public information", "C. Sensitive personal information", "D. Only consent-given data"], answer: "C" },
          { id: 37, type: "mcq", text: "Where is AI development capacity concentrated?", options: ["A. Evenly distributed", "B. Small number of companies", "C. Government only", "D. Academia only"], answer: "B" },
          { id: 38, type: "mcq", text: "What may race-to-the-bottom dynamics favor?", options: ["A. Strict regulation", "B. Less regulated environments", "C. International cooperation", "D. Ethical development"], answer: "B" },
          { id: 39, type: "short", text: "What type of recognition enables unprecedented surveillance? (ONE WORD)", answer: "facial" },
          { id: 40, type: "short", text: "What guidelines have organizations issued for AI ethics? (ONE WORD)", answer: "principles" }
        ]
      }
    ]
  }
,
  // ============================================================
  // R22 - ADVANCED (Band 8.0-8.5)
  // ============================================================
  {
    id: "R22",
    level: "Advanced",
    bandTarget: "8.0-8.5",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Democratic Institutions Under Stress",
        wordCount: 870,
        text: `Liberal democracies that once seemed securely established are experiencing unprecedented strain. Trust in democratic institutions has declined across developed countries. Populist movements challenge established parties and norms. Disinformation spreads through social media faster than it can be corrected. Political polarization has intensified to levels that impede effective governance. Understanding the sources of democratic stress and the possibilities for renewal has become one of the most urgent questions in contemporary politics.

The decline of political parties as intermediary institutions has weakened representative democracy. Parties traditionally aggregated interests, recruited and socialized politicians, and provided organizational infrastructure for political participation. Declining party membership and identification have hollowed out these functions. Candidates increasingly build personal brands independent of party structures. The erosion of party discipline makes governance more difficult as legislative coalitions become harder to maintain.

Economic insecurity and inequality have fueled democratic discontent. Decades of wage stagnation for middle and working classes, combined with visible gains for economic elites, have undermined faith that democratic systems serve ordinary citizens. The 2008 financial crisis and its aftermath, in which banks received bailouts while homeowners lost their houses, crystallized perceptions that economic and political systems are rigged in favor of the powerful.

Cultural backlash against rapid social change has mobilized constituencies that feel threatened by immigration, secularization, and changing gender and racial norms. These cultural conflicts cut across traditional left-right economic divisions, scrambling political alignments. Right-wing populist movements have successfully mobilized cultural resentments, often combining nativist appeals with economic populism that breaks from orthodox conservative positions.

The information environment has been transformed in ways that undermine shared understanding of facts and events. Social media algorithms optimize for engagement, which often means promoting emotionally charged and divisive content. Filter bubbles and echo chambers reinforce existing beliefs while limiting exposure to different perspectives. Disinformation campaigns, whether foreign or domestic, exploit these dynamics to sow confusion and distrust.

Elite dysfunction has contributed to democratic malaise. Political classes perceived as corrupt, self-serving, or incompetent lose legitimacy. Revolving doors between government and private sector, inadequate responses to evident problems, and the perception that politicians serve donors rather than constituents breed cynicism. Technocratic governance that marginalizes democratic input invites populist backlash.

Democratic erosion can proceed through multiple pathways. Authoritarian-minded leaders may capture institutions and use them to entrench power—packing courts, attacking media, and manipulating elections. Gridlock and dysfunction may render democratic institutions unable to address pressing problems, leading citizens to question their value. Declining civic participation and engagement may hollow out democracy from below even as formal structures remain.

Renewal possibilities include reforms that reduce money in politics, strengthen party organizations, and revitalize local governance. Civic education initiatives may rebuild democratic culture and skills. Antitrust action against technology monopolies could reshape the information environment. Electoral reforms such as ranked-choice voting and independent redistricting could reduce polarization incentives. Whether these reforms can gain traction against resistant interests remains the central political challenge.`,
        questions: [
          { id: 1, type: "tfng", text: "Trust in democratic institutions has increased globally.", answer: "False" },
          { id: 2, type: "tfng", text: "Party membership has declined in many democracies.", answer: "True" },
          { id: 3, type: "tfng", text: "The 2008 financial crisis increased faith in economic systems.", answer: "False" },
          { id: 4, type: "tfng", text: "Social media algorithms prioritize accuracy over engagement.", answer: "False" },
          { id: 5, type: "tfng", text: "Democratic erosion can only happen through military coups.", answer: "False" },
          { id: 6, type: "short", text: "What term describes ideological isolation online? (TWO WORDS)", answer: "filter bubbles" },
          { id: 7, type: "short", text: "What type of voting reform could reduce polarization? (TWO WORDS)", answer: "ranked-choice" },
          { id: 8, type: "short", text: "What backlash has immigration and secularization fueled? (ONE WORD)", answer: "cultural" },
          { id: 9, type: "mcq", text: "What have parties traditionally provided?", options: ["A. Only funding", "B. Intermediary functions", "C. Media control", "D. Military support"], answer: "B" },
          { id: 10, type: "mcq", text: "What did the 2008 crisis crystallize?", options: ["A. Trust in banks", "B. Perceptions systems are rigged", "C. Economic equality", "D. Political consensus"], answer: "B" },
          { id: 11, type: "mcq", text: "What invites populist backlash?", options: ["A. Democratic participation", "B. Technocratic governance", "C. Electoral reform", "D. Party strength"], answer: "B" },
          { id: 12, type: "mcq", text: "What might reshape the information environment?", options: ["A. More algorithms", "B. Antitrust action", "C. Less regulation", "D. More social media"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Authoritarian leaders may ________ courts and manipulate elections.", answer: "pack" }
        ]
      },
      {
        id: "P2",
        title: "The Human Microbiome and Health",
        wordCount: 860,
        text: `The human body hosts trillions of microorganisms—bacteria, viruses, fungi, and other microbes—that collectively constitute the microbiome. Once viewed primarily as pathogens to be eliminated, these microbial communities are now understood to play essential roles in human health, from digestion to immunity to brain function. The emerging science of the microbiome is transforming understanding of health and disease while opening new therapeutic possibilities.

The gut microbiome, containing over 1,000 bacterial species, performs functions essential to human health. These bacteria digest complex carbohydrates that human enzymes cannot break down, producing short-chain fatty acids that nourish intestinal cells. They synthesize vitamins including B12 and K. They train and regulate the immune system, teaching it to distinguish harmful pathogens from beneficial commensals. The gut microbiome also influences metabolism in ways that affect obesity and metabolic disease.

The gut-brain axis connects intestinal microbes to brain function through multiple pathways. Gut bacteria produce neurotransmitters including serotonin and dopamine. They influence the vagus nerve that connects gut and brain. They modulate inflammation, which affects brain function. Animal studies have demonstrated that microbiome composition affects behavior, stress response, and cognitive function. Human studies have found associations between microbiome characteristics and conditions including depression, anxiety, and autism spectrum disorders.

Microbiome composition varies substantially among individuals and is influenced by diet, medication, environment, and genetics. Western diets high in processed foods and low in fiber tend to reduce microbiome diversity. Antibiotic use, while sometimes necessary, can devastate beneficial bacteria and allow harmful species to proliferate. Cesarean delivery and formula feeding shape infant microbiomes differently than vaginal birth and breastfeeding, with potential long-term health implications.

Dysbiosis—imbalance in the microbiome—has been associated with numerous diseases. Inflammatory bowel diseases involve disrupted gut microbial communities and inappropriate immune responses to commensal bacteria. Type 2 diabetes and obesity correlate with specific microbiome characteristics. Allergies and autoimmune diseases may reflect immune dysregulation related to microbiome composition. Causation is often difficult to establish, as disease and microbiome changes may both result from common causes.

Therapeutic approaches targeting the microbiome are developing rapidly. Probiotics—live beneficial bacteria—have modest evidence for some conditions but have not consistently demonstrated broad health benefits. Prebiotics—dietary components that promote beneficial bacteria—may offer a more robust approach. Fecal microbiota transplantation has proven remarkably effective for recurrent Clostridioides difficile infection and is being investigated for other conditions.

The microbiome challenges traditional approaches to medicine that treat the body as an autonomous entity. Health emerges from the interaction between human cells and microbial communities that are part of us but not entirely under our control. Lifestyle factors that affect the microbiome—diet, exercise, stress, sleep—may influence health through mechanisms now being elucidated. Personalized medicine may need to consider individual microbiome characteristics when selecting treatments.

Research challenges include moving beyond correlational studies to establish causal mechanisms, developing standardized methods for characterizing microbiomes, and understanding the complex interactions among thousands of microbial species and between microbes and host. The microbiome field remains in early stages, with much yet to be discovered about how our microbial partners shape human health.`,
        questions: [
          { id: 14, type: "yng", text: "The microbiome consists only of bacteria.", answer: "No" },
          { id: 15, type: "yng", text: "Gut bacteria can synthesize certain vitamins.", answer: "Yes" },
          { id: 16, type: "yng", text: "Western diets typically increase microbiome diversity.", answer: "No" },
          { id: 17, type: "yng", text: "Fecal transplants have proven effective for C. difficile.", answer: "Yes" },
          { id: 18, type: "yng", text: "Causation in microbiome-disease relationships is easy to establish.", answer: "No" },
          { id: 19, type: "mcq", text: "What do gut bacteria produce that nourishes intestinal cells?", options: ["A. Glucose", "B. Short-chain fatty acids", "C. Proteins", "D. Oxygen"], answer: "B" },
          { id: 20, type: "mcq", text: "What nerve connects gut and brain?", options: ["A. Optic nerve", "B. Vagus nerve", "C. Sciatic nerve", "D. Trigeminal nerve"], answer: "B" },
          { id: 21, type: "mcq", text: "What does antibiotic use do to beneficial bacteria?", options: ["A. Enhances them", "B. Devastates them", "C. Has no effect", "D. Multiplies them"], answer: "B" },
          { id: 22, type: "mcq", text: "What term describes microbiome imbalance?", options: ["A. Symbiosis", "B. Dysbiosis", "C. Homeostasis", "D. Metabolism"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Gut bacteria train the immune system to distinguish pathogens from ________.", answer: "commensals" },
          { id: 24, type: "summary", text: "Complete: Probiotics have modest evidence but not consistently demonstrated ________ benefits.", answer: "broad" },
          { id: 25, type: "summary", text: "Complete: Health emerges from interaction between human cells and ________ communities.", answer: "microbial" },
          { id: 26, type: "summary", text: "Complete: The microbiome challenges treating the body as an autonomous ________.", answer: "entity" }
        ]
      },
      {
        id: "P3",
        title: "Space Exploration and Human Settlement",
        wordCount: 870,
        text: `The prospect of human settlement beyond Earth has moved from science fiction toward serious planning. NASA's Artemis program aims to establish sustainable lunar presence by the late 2020s. SpaceX and other private companies pursue Mars colonization as a long-term goal. Whether these ambitions can be realized depends on overcoming formidable technical challenges, but the philosophical and practical questions they raise deserve consideration regardless of timelines.

The technical challenges for long-duration spaceflight and extraterrestrial settlement are substantial. Radiation exposure in interplanetary space far exceeds Earth surface levels and poses cancer and neurological risks. Microgravity causes bone loss, muscle atrophy, and cardiovascular deconditioning. Life support systems must recycle air, water, and waste with extreme efficiency over months or years. The psychological effects of isolation and confinement in extreme environments remain inadequately understood.

Mars presents particular challenges and opportunities. The journey takes six to nine months each way with current propulsion technology, and launch windows occur only every 26 months when planetary alignments are favorable. Mars has thin atmosphere providing minimal radiation protection and no breathable oxygen. Dust storms can last months. Yet Mars has water ice, raw materials for construction and fuel production, and a 24.6-hour day that could support biological rhythms.

In-situ resource utilization—using local materials rather than transporting everything from Earth—is essential for sustainable settlement. Martian atmosphere can be processed to produce oxygen and rocket fuel. Water ice can supply drinking water, agriculture, and hydrogen. Regolith might be converted to construction materials. Each resource produced locally reduces the prohibitive cost of launching mass from Earth's gravity well.

Closed-loop life support systems must recycle nearly all materials to support long-duration habitation. Current systems on the International Space Station still require substantial resupply from Earth. Fully closed systems that maintain stable ecosystems over years remain experimental. Agriculture in space faces challenges from radiation, limited light, and the need to maintain soil health in isolated systems.

The governance of space settlement raises novel questions. Who has authority over extraterrestrial territories? The Outer Space Treaty of 1967 prohibits national sovereignty claims over celestial bodies but does not address private property rights or resource extraction. How would settlements govern themselves, and what obligations would they have to Earth? The answers will shape whether space becomes a frontier for human expansion or an extension of existing power structures and conflicts.

The philosophical case for space settlement rests on multiple arguments. Species survival motivates those concerned about existential risks from asteroid impacts, nuclear war, or other catastrophes; an Earth-independent population provides insurance against extinction. The expansion of human presence and consciousness into the cosmos appeals to those with frontier or pioneering values. Scientific discovery in environments radically different from Earth could yield transformative knowledge.

Critics question whether resources devoted to space settlement could better address Earth's problems. The costs of space colonization are enormous compared to pressing needs in healthcare, poverty alleviation, and environmental protection. Space settlement might divert attention from making Earth sustainable. The romanticization of frontier mythology may obscure how historical frontiers involved dispossession and exploitation. These debates will intensify as space settlement moves from speculation toward possibility.`,
        questions: [
          { id: 27, type: "tfng", text: "NASA's Artemis program aims for lunar presence by 2050.", answer: "False" },
          { id: 28, type: "tfng", text: "Radiation in interplanetary space exceeds Earth surface levels.", answer: "True" },
          { id: 29, type: "tfng", text: "Mars launch windows occur monthly.", answer: "False" },
          { id: 30, type: "tfng", text: "Current ISS systems require no resupply from Earth.", answer: "False" },
          { id: 31, type: "tfng", text: "The Outer Space Treaty prohibits national sovereignty claims.", answer: "True" },
          { id: 32, type: "matching", text: "Using local materials rather than transporting from Earth", answer: "in-situ resource utilization" },
          { id: 33, type: "matching", text: "Systems recycling nearly all materials", answer: "closed-loop life support" },
          { id: 34, type: "matching", text: "1967 treaty governing outer space", answer: "Outer Space Treaty" },
          { id: 35, type: "mcq", text: "How long does the Mars journey take?", options: ["A. 1-2 weeks", "B. 1-2 months", "C. 6-9 months", "D. 2-3 years"], answer: "C" },
          { id: 36, type: "mcq", text: "What can Martian atmosphere be processed to produce?", options: ["A. Gold", "B. Oxygen and fuel", "C. Food", "D. Clothing"], answer: "B" },
          { id: 37, type: "mcq", text: "What motivates species survival arguments?", options: ["A. Tourism", "B. Existential risk concerns", "C. Entertainment", "D. Profit"], answer: "B" },
          { id: 38, type: "mcq", text: "What do critics suggest space resources could address?", options: ["A. Space tourism", "B. Earth's problems", "C. Alien contact", "D. Asteroid mining"], answer: "B" },
          { id: 39, type: "short", text: "How long is a Mars day in hours? (NUMBER)", answer: "24.6" },
          { id: 40, type: "short", text: "What causes bone loss in space? (ONE WORD)", answer: "microgravity" }
        ]
      }
    ]
  },

  // ============================================================
  // R23 - ADVANCED (Band 8.5)
  // ============================================================
  {
    id: "R23",
    level: "Advanced",
    bandTarget: "8.5",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Information Theory and Communication",
        wordCount: 870,
        text: `Information theory, developed by Claude Shannon at Bell Labs in the 1940s, provides the mathematical foundation for understanding communication in all its forms. Shannon's framework quantified information, established fundamental limits on data compression and transmission, and enabled the digital revolution that has transformed modern life. Though originating in engineering, information theory has found applications across fields from biology to physics to linguistics, becoming a cornerstone of our understanding of complex systems.

Shannon defined information mathematically in terms of uncertainty reduction. Before receiving a message, a recipient faces uncertainty about what will be communicated. Information quantifies how much that uncertainty is reduced when the message arrives. A highly predictable message—one the recipient could largely anticipate—conveys little information, while an unexpected message conveys much. This counter-intuitive insight separates information from meaning: a random string conveys maximum information despite being meaningless.

Entropy, borrowed from thermodynamics, measures the amount of uncertainty in a source. A fair coin flip has one bit of entropy; the outcome could be either heads or tails with equal probability. English text has approximately 1.0 to 1.5 bits of entropy per character because letter frequencies and sequential dependencies make the next character partly predictable. Data compression exploits this redundancy, representing frequent patterns with short codes to reduce message length without losing information.

Channel capacity describes the maximum rate at which information can be reliably transmitted over a noisy communication channel. Shannon's noisy channel coding theorem proved that reliable communication is possible at rates up to channel capacity but not above it—a surprising result establishing a sharp boundary between possible and impossible. This theorem guided the development of error-correcting codes that enable reliable digital communication over noisy channels.

The applications of information theory extend far beyond telecommunications. In biology, DNA can be analyzed as an information-carrying molecule with approximately two bits per base pair. The genetic code represents one example of how biological systems store, transmit, and process information. Information-theoretic concepts have informed understanding of neural coding in the brain, though the brain's computational principles differ substantially from engineered systems.

Cryptography relies on information-theoretic principles. Encryption aims to transform messages so that only intended recipients can recover them. Information-theoretic security—encryption that cannot be broken regardless of computational power—requires that the key be at least as long as the message and used only once. Practical cryptographic systems instead rely on computational security, where breaking encryption is theoretically possible but computationally infeasible.

Machine learning has reinvigorated connections between information theory and statistical inference. Information-theoretic quantities like mutual information measure dependencies between variables relevant to learning. Deep learning success has prompted renewed attention to information-theoretic analysis of neural networks, though interpretation remains contested. Minimum description length principles connect compression and generalization in ways that inform model selection.

The philosophical implications of information theory continue to be explored. Some physicists propose that information is fundamental to physical reality—that "it from bit" as John Wheeler expressed it. Others see information theory as a mathematical tool without ontological implications. The relationship between Shannon information and semantic meaning remains problematic; information theory measures surprisal but not significance. These conceptual questions accompany the practical power that information theory has brought to engineering and science.`,
        questions: [
          { id: 1, type: "tfng", text: "Shannon developed information theory in the 1980s.", answer: "False" },
          { id: 2, type: "tfng", text: "Predictable messages convey little information.", answer: "True" },
          { id: 3, type: "tfng", text: "English text has more entropy than random strings.", answer: "False" },
          { id: 4, type: "tfng", text: "Reliable communication above channel capacity is possible.", answer: "False" },
          { id: 5, type: "tfng", text: "DNA carries approximately two bits per base pair.", answer: "True" },
          { id: 6, type: "short", text: "What measures uncertainty in a source? (ONE WORD)", answer: "entropy" },
          { id: 7, type: "short", text: "How many bits of entropy does a coin flip have? (ONE WORD)", answer: "one" },
          { id: 8, type: "short", text: "Who said 'it from bit'? (ONE WORD)", answer: "Wheeler" },
          { id: 9, type: "mcq", text: "What does data compression exploit?", options: ["A. Randomness", "B. Redundancy", "C. Noise", "D. Capacity"], answer: "B" },
          { id: 10, type: "mcq", text: "What does information-theoretic security require?", options: ["A. Short keys", "B. Reusable keys", "C. Keys as long as messages", "D. No encryption"], answer: "C" },
          { id: 11, type: "mcq", text: "What has reinvigorated information theory connections?", options: ["A. Radio", "B. Television", "C. Machine learning", "D. Print media"], answer: "C" },
          { id: 12, type: "mcq", text: "What does information theory measure but not?", options: ["A. Surprisal; meaning", "B. Meaning; surprisal", "C. Length; weight", "D. Speed; distance"], answer: "A" },
          { id: 13, type: "summary", text: "Complete: Shannon's framework enabled the ________ revolution.", answer: "digital" }
        ]
      },
      {
        id: "P2",
        title: "Pandemic Preparedness and Response",
        wordCount: 860,
        text: `The COVID-19 pandemic exposed critical gaps in global preparedness for infectious disease threats. Despite decades of warnings from public health experts, the world proved unprepared for a pandemic of this scale. Health systems were overwhelmed, supply chains for essential equipment failed, and coordination among countries was inadequate. Understanding the lessons of COVID-19 is essential for improving responses to future pandemics, which epidemiologists consider virtually certain to occur.

Pandemic preparedness encompasses multiple dimensions. Surveillance systems must detect novel pathogens quickly enough to enable early response. Laboratory capacity is needed to characterize threats and develop diagnostics. Stockpiles of medical countermeasures—personal protective equipment, medications, ventilators—provide immediate response capability. Surge capacity in healthcare systems accommodates patient volumes exceeding normal levels. Plans for non-pharmaceutical interventions—testing, contact tracing, quarantine, social distancing—require advance preparation and public communication.

Early detection and response represent the best opportunity to contain outbreaks before they become pandemics. The International Health Regulations require countries to report potential public health emergencies, but compliance has been incomplete and verification difficult. Investment in disease surveillance, particularly in regions where novel pathogens are likely to emerge, can provide early warning. Genomic sequencing enables rapid identification of new threats and tracking of their spread.

Vaccine development capabilities proved crucial during COVID-19. Platform technologies like mRNA vaccines, developed through years of prior research, enabled vaccines within months rather than the years traditionally required. However, vaccine manufacturing capacity was insufficient to supply global demand quickly, and distribution was highly inequitable. Advance investment in manufacturing capacity and mechanisms for equitable access would improve future pandemic response.

Supply chain vulnerabilities became apparent when demand for personal protective equipment, testing supplies, and other essentials exceeded production capacity. Concentrated manufacturing in limited geographic locations created bottlenecks. Strategic reserves were inadequate or had been depleted. Building resilient supply chains requires balancing efficiency and cost against security and reliability—tradeoffs that received insufficient attention before the pandemic.

The coordination challenges of pandemic response cross jurisdictional boundaries. Pathogens spread globally regardless of national borders. Yet public health authority resides primarily with national and subnational governments whose interests may conflict. International institutions like the World Health Organization provide technical guidance and facilitate cooperation but lack enforcement authority. The pandemic revealed tensions between national interests and global solidarity that remain unresolved.

Non-pharmaceutical interventions proved essential when vaccines and treatments were unavailable but faced implementation challenges. Testing capacity was initially inadequate in many countries. Contact tracing proved difficult at scale. Quarantine and isolation required support systems many countries lacked. Social distancing measures imposed enormous economic and social costs that were disproportionately borne by vulnerable populations. Public compliance depended on trust in authorities that varied across societies.

Risk communication during pandemics must balance providing accurate information with avoiding panic and maintaining public trust. Uncertainty is inherent in evolving situations, yet the public often expects definitive guidance. Misinformation spreads rapidly through social media. Political polarization in some countries undermined public health messaging. Developing effective risk communication strategies that maintain credibility across diverse audiences represents an ongoing challenge.`,
        questions: [
          { id: 14, type: "yng", text: "The world was well-prepared for the COVID-19 pandemic.", answer: "No" },
          { id: 15, type: "yng", text: "mRNA vaccines were developed entirely during the pandemic.", answer: "No" },
          { id: 16, type: "yng", text: "Global vaccine distribution was highly equitable.", answer: "No" },
          { id: 17, type: "yng", text: "The WHO has enforcement authority over countries.", answer: "No" },
          { id: 18, type: "yng", text: "Future pandemics are considered virtually certain.", answer: "Yes" },
          { id: 19, type: "mcq", text: "What do the International Health Regulations require?", options: ["A. Vaccine mandates", "B. Reporting public health emergencies", "C. Border closures", "D. Economic sanctions"], answer: "B" },
          { id: 20, type: "mcq", text: "What technology enabled rapid vaccine development?", options: ["A. Traditional methods", "B. mRNA platforms", "C. Animal testing", "D. Computer simulation only"], answer: "B" },
          { id: 21, type: "mcq", text: "What created supply chain bottlenecks?", options: ["A. Distributed manufacturing", "B. Concentrated manufacturing locations", "C. Excessive reserves", "D. Low demand"], answer: "B" },
          { id: 22, type: "mcq", text: "What does risk communication balance?", options: ["A. Speed and accuracy", "B. Accurate information and avoiding panic", "C. Cost and efficiency", "D. National and local needs"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Platform technologies enabled vaccines within ________ rather than years.", answer: "months" },
          { id: 24, type: "summary", text: "Complete: Strategic reserves were inadequate or had been ________.", answer: "depleted" },
          { id: 25, type: "summary", text: "Complete: Social distancing costs were disproportionately borne by ________ populations.", answer: "vulnerable" },
          { id: 26, type: "summary", text: "Complete: Public compliance depended on ________ in authorities.", answer: "trust" }
        ]
      },
      {
        id: "P3",
        title: "Cultural Heritage Preservation",
        wordCount: 870,
        text: `Cultural heritage—the tangible and intangible legacy of human creativity, memory, and meaning—faces unprecedented threats from armed conflict, climate change, development pressure, and the erosion of traditional knowledge. Preserving this heritage matters not only for its intrinsic value but for its role in sustaining identity, fostering social cohesion, and enabling communities to connect past, present, and future. The challenges of heritage preservation in a rapidly changing world require rethinking approaches developed in different circumstances.

Tangible heritage encompasses archaeological sites, historic buildings, cultural landscapes, and movable objects from artworks to everyday artifacts. The scale of threat is staggering: UNESCO estimates that climate change will affect most World Heritage sites within this century. Armed conflicts have destroyed irreplaceable heritage from Palmyra to Mosul. Development pressures lead to demolition of historic neighborhoods. Looting and trafficking remove objects from their contexts, destroying information and feeding illegal markets.

Intangible heritage—practices, expressions, knowledge, and skills transmitted within communities—faces different but equally serious threats. Globalization, urbanization, and changing lifestyles lead to abandonment of traditional practices. Languages carrying unique knowledge systems disappear at alarming rates; linguists estimate that half of the world's 7,000 languages may vanish within this century. When elder practitioners die without transmitting their knowledge, centuries of accumulated wisdom can disappear overnight.

International frameworks for heritage protection have developed substantially since the 1954 Hague Convention on protecting cultural property during armed conflict. The 1972 World Heritage Convention established the iconic World Heritage List and mechanisms for international cooperation. The 2003 Convention on Intangible Cultural Heritage recognized non-material dimensions of culture. These instruments provide frameworks for identification, protection, and international cooperation, though implementation remains uneven.

Digital technologies offer new possibilities for heritage documentation and access. High-resolution imaging, 3D scanning, and photogrammetry can create detailed records of sites and objects. Virtual reality enables immersive experiences of heritage that might otherwise be inaccessible. Digital archives can preserve endangered languages and oral traditions. Yet digitization raises questions about authenticity, access, and control; a digital replica cannot substitute for lived engagement with heritage.

Community involvement has become central to heritage preservation philosophy. Top-down approaches that imposed external expertise often alienated local communities from their own heritage. Contemporary practice emphasizes community participation in identifying what heritage matters, how it should be preserved, and who should control access. Living heritage requires ongoing practice within communities rather than freezing forms in museum displays.

The economics of heritage preservation present persistent challenges. Maintenance of historic structures and sites requires sustained funding that government budgets often cannot provide. Tourism can generate revenue but also threatens fragile sites through overvisitation and commercialization. Private investment can save endangered heritage but may prioritize profit over preservation values. Developing sustainable economic models that align financial incentives with preservation goals remains difficult.

Ethical questions pervade heritage preservation. Whose heritage is valued, and whose is neglected or erased? Colonial-era collections removed objects from origin communities that now seek repatriation. Contested heritage associated with painful histories—sites of atrocity, symbols of oppression—raises questions about what should be preserved and how. Heritage increasingly becomes entangled in identity politics and international disputes. Navigating these dimensions requires not only technical expertise but ethical judgment and political wisdom.`,
        questions: [
          { id: 27, type: "tfng", text: "Climate change will affect most World Heritage sites.", answer: "True" },
          { id: 28, type: "tfng", text: "Half of world languages may vanish this century.", answer: "True" },
          { id: 29, type: "tfng", text: "The World Heritage Convention was established in 1954.", answer: "False" },
          { id: 30, type: "tfng", text: "Digital replicas fully substitute for lived heritage engagement.", answer: "False" },
          { id: 31, type: "tfng", text: "Top-down preservation approaches always succeeded.", answer: "False" },
          { id: 32, type: "matching", text: "Practices and knowledge transmitted within communities", answer: "intangible heritage" },
          { id: 33, type: "matching", text: "High-resolution 3D recording of sites", answer: "digital documentation" },
          { id: 34, type: "matching", text: "Return of objects to origin communities", answer: "repatriation" },
          { id: 35, type: "mcq", text: "What do linguists estimate about world languages?", options: ["A. They're increasing", "B. Half may vanish", "C. All are secure", "D. They're becoming uniform"], answer: "B" },
          { id: 36, type: "mcq", text: "What can tourism threaten?", options: ["A. Nothing", "B. Fragile sites", "C. Only modern buildings", "D. Only natural sites"], answer: "B" },
          { id: 37, type: "mcq", text: "What does contemporary preservation emphasize?", options: ["A. External expertise only", "B. Community participation", "C. Government control", "D. Private ownership"], answer: "B" },
          { id: 38, type: "mcq", text: "What do contested heritage sites raise questions about?", options: ["A. Only costs", "B. What should be preserved", "C. Only tourism", "D. Only architecture"], answer: "B" },
          { id: 39, type: "short", text: "What convention recognized intangible heritage in 2003? (YEAR)", answer: "2003" },
          { id: 40, type: "short", text: "What can destroy accumulated wisdom overnight? (TWO WORDS)", answer: "elder death" }
        ]
      }
    ]
  }
,
  // ============================================================
  // R24 - ADVANCED (Band 8.5)
  // ============================================================
  {
    id: "R24",
    level: "Advanced",
    bandTarget: "8.5",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Human Enhancement Technologies",
        wordCount: 870,
        text: `Technologies that enhance human capabilities beyond typical levels raise profound questions about human nature, social equality, and the boundaries of medicine. From cognitive enhancers to genetic modification to brain-computer interfaces, human enhancement technologies promise benefits while generating concerns about safety, access, and what it means to be human. As these technologies advance from speculation toward reality, thoughtful consideration of their implications becomes increasingly urgent.

Cognitive enhancement through pharmacological means already occurs widely, though often informally. Stimulants prescribed for attention disorders are used off-label by students and professionals seeking improved focus and productivity. Modafinil, developed for sleep disorders, is used to extend waking hours without typical fatigue. The search continues for compounds that might improve memory, accelerate learning, or enhance creativity. Current enhancers offer modest effects with significant limitations, but more powerful interventions may emerge.

Genetic technologies open possibilities for enhancement that extend beyond treating disease. Preimplantation genetic testing already enables selection of embryos based on genetic characteristics. Gene editing tools like CRISPR could theoretically modify embryos to enhance traits like intelligence or physical capability, though the complexity of these traits and risks of unintended effects make such applications distant. The distinction between therapy and enhancement becomes blurred when genetic interventions could prevent disease while also conferring advantages.

Brain-computer interfaces represent another enhancement frontier. Current devices restore function to those with disabilities—enabling paralyzed individuals to control computers or prosthetics through neural signals. Future interfaces might augment normal cognition, enabling direct brain-to-brain communication, enhanced memory storage, or accelerated information processing. Companies like Neuralink pursue such visions, though substantial technical obstacles remain.

Physical enhancement through technology ranges from performance-enhancing drugs in athletics to potential future interventions like exoskeletons or genetic modifications affecting strength and endurance. The sports world's ongoing struggles with doping illustrate the competitive pressures driving enhancement and the difficulty of maintaining fair competition when enhancement is possible. Military interest in enhanced soldiers raises additional concerns about coercion and the ethics of combat.

Ethical objections to enhancement take several forms. Some argue that enhancement is "unnatural" or violates human dignity, though the boundaries of the natural are contested and humans have always used tools to extend capabilities. Concerns about authenticity ask whether enhanced achievements are truly one's own. Religious perspectives may view enhancement as inappropriate interference with divine creation. These objections reflect deep disagreements about human nature and values.

Social justice concerns focus on access and inequality. If enhancements are expensive and privately obtained, they could exacerbate existing inequalities, creating enhanced and unenhanced classes with diverging capabilities and opportunities. The children of wealthy parents might receive genetic or technological advantages that compound across generations. Alternatively, if enhancements became universally available, competitive pressures might make them effectively mandatory, reducing rather than expanding choice.

Regulatory frameworks for enhancement technologies remain underdeveloped. Medical regulations focus on safety and efficacy for treating disease, not on enhancing normal function. Athletic organizations ban certain substances but face constant adaptation as new enhancers emerge. Genetic modifications raise questions about consent from future generations who cannot participate in decisions affecting them. International governance is complicated by different cultural values and competitive dynamics among nations.

The future of human enhancement remains uncertain. Technical limitations may prove insurmountable, leaving enhancement largely aspirational. Alternatively, breakthroughs could rapidly expand possibilities, forcing societies to confront questions they have barely begun to consider. How humanity navigates enhancement technologies will shape not only individual lives but the trajectory of human evolution itself.`,
        questions: [
          { id: 1, type: "tfng", text: "Cognitive enhancement through drugs is rare.", answer: "False" },
          { id: 2, type: "tfng", text: "CRISPR could theoretically modify embryos for enhancement.", answer: "True" },
          { id: 3, type: "tfng", text: "Current brain-computer interfaces only restore function.", answer: "True" },
          { id: 4, type: "tfng", text: "The therapy-enhancement distinction is always clear.", answer: "False" },
          { id: 5, type: "tfng", text: "Regulatory frameworks for enhancement are well-developed.", answer: "False" },
          { id: 6, type: "short", text: "What drug extends waking hours without fatigue? (ONE WORD)", answer: "Modafinil" },
          { id: 7, type: "short", text: "What gene editing tool is mentioned? (ONE WORD)", answer: "CRISPR" },
          { id: 8, type: "short", text: "What company pursues brain-computer interfaces? (ONE WORD)", answer: "Neuralink" },
          { id: 9, type: "mcq", text: "What do current cognitive enhancers offer?", options: ["A. Dramatic effects", "B. Modest effects with limitations", "C. No effects", "D. Permanent changes"], answer: "B" },
          { id: 10, type: "mcq", text: "What do authenticity concerns ask?", options: ["A. If enhancements are safe", "B. If achievements are truly one's own", "C. If costs are reasonable", "D. If technology works"], answer: "B" },
          { id: 11, type: "mcq", text: "What could expensive enhancements exacerbate?", options: ["A. Health", "B. Existing inequalities", "C. Competition", "D. Research"], answer: "B" },
          { id: 12, type: "mcq", text: "What do genetic modifications raise questions about?", options: ["A. Cost only", "B. Consent from future generations", "C. Manufacturing", "D. Marketing"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Enhancement technologies will shape human ________ itself.", answer: "evolution" }
        ]
      },
      {
        id: "P2",
        title: "The Future of Work and Automation",
        wordCount: 860,
        text: `Automation technologies are transforming work at an accelerating pace, raising fundamental questions about employment, economic security, and human purpose. While technological change has always disrupted labor markets, the scope and speed of current developments—particularly in artificial intelligence and robotics—may differ qualitatively from historical precedents. Understanding these dynamics and preparing for their consequences has become an urgent policy priority.

Historical perspective suggests both reassurance and caution. Previous technological revolutions eliminated many occupations while creating new ones, and employment has generally recovered despite dire predictions. The agricultural workforce shrank from majority to single-digit percentages of employment without causing permanent unemployment crisis. Manufacturing automation displaced millions of workers who found employment in services. Yet the pace of current change may exceed the economy's adjustment capacity, and the skills required for emerging jobs may not match those displaced workers possess.

Artificial intelligence enables automation of cognitive tasks previously thought to require human intelligence. Machine learning systems now match or exceed human performance in image recognition, language translation, medical diagnosis, and legal document review. These capabilities threaten not only routine clerical work but professional occupations requiring education and expertise. Unlike previous automation waves that primarily affected manual labor, AI potentially automates across the skill spectrum.

The geographic distribution of automation impacts creates regional challenges. Manufacturing automation has devastated communities dependent on factory employment, contributing to social problems and political discontent. Service automation may similarly concentrate in certain regions or affect certain demographic groups disproportionately. Policy responses must address not only aggregate employment but its distribution across geography and population.

New forms of work are emerging alongside automation. The gig economy enables flexible, task-based work mediated by digital platforms but often without traditional employment protections. Remote work has expanded dramatically, enabled by communication technologies and accelerated by pandemic experience. Creative and interpersonal work may prove more resistant to automation, though predictions about automation limits have repeatedly proven wrong.

Skills and education face fundamental reorientation. Technical skills may become obsolete faster than educational systems can adapt. Lifelong learning becomes essential as careers span multiple occupational transitions. Yet access to retraining varies widely, and the effectiveness of existing programs is mixed. Determining which skills will remain valuable when automation capabilities are uncertain poses challenges for individuals and institutions alike.

Policy responses range from market-oriented to transformative. Education and training investments aim to equip workers for evolving demands. Portable benefits not tied to specific employers could provide security amid job transitions. Wage subsidies or earned income tax credits support low-wage work. More radical proposals include universal basic income providing economic security independent of employment, or job guarantees ensuring work for all who want it. Each approach embodies different values and assumptions about automation's trajectory.

The meaning of work extends beyond economics. Work provides not only income but structure, purpose, social connection, and identity. If automation reduces the need for human labor, how will people find meaning and organize their lives? Some envision liberation from drudgery enabling flourishing through leisure, creativity, and care work. Others worry about purposelessness and social fragmentation if work's organizing role diminishes. These questions about human flourishing may ultimately prove more challenging than the economic adjustments automation requires.`,
        questions: [
          { id: 14, type: "yng", text: "Historical technological change always caused permanent unemployment.", answer: "No" },
          { id: 15, type: "yng", text: "AI threatens both routine and professional occupations.", answer: "Yes" },
          { id: 16, type: "yng", text: "Automation impacts are evenly distributed geographically.", answer: "No" },
          { id: 17, type: "yng", text: "The gig economy provides traditional employment protections.", answer: "No" },
          { id: 18, type: "yng", text: "Work provides only economic benefits.", answer: "No" },
          { id: 19, type: "mcq", text: "What has AI enabled automation of?", options: ["A. Only manual tasks", "B. Cognitive tasks", "C. Nothing new", "D. Only creative work"], answer: "B" },
          { id: 20, type: "mcq", text: "What do portable benefits address?", options: ["A. Only wages", "B. Security amid job transitions", "C. Only healthcare", "D. Only retirement"], answer: "B" },
          { id: 21, type: "mcq", text: "What becomes essential as careers span transitions?", options: ["A. Single skills", "B. Lifelong learning", "C. Early retirement", "D. Government jobs"], answer: "B" },
          { id: 22, type: "mcq", text: "What does work provide beyond income?", options: ["A. Nothing", "B. Purpose and identity", "C. Only health insurance", "D. Only vacation"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Manufacturing automation devastated ________ dependent on factories.", answer: "communities" },
          { id: 24, type: "summary", text: "Complete: Universal basic income provides security independent of ________.", answer: "employment" },
          { id: 25, type: "summary", text: "Complete: Some envision liberation from ________ enabling flourishing.", answer: "drudgery" },
          { id: 26, type: "summary", text: "Complete: Questions about human ________ may prove most challenging.", answer: "flourishing" }
        ]
      },
      {
        id: "P3",
        title: "Media, Democracy, and Public Discourse",
        wordCount: 870,
        text: `The relationship between media and democracy has always been complex, but digital transformation has fundamentally altered how information circulates and public opinion forms. Traditional media institutions that once served as gatekeepers have lost influence to social platforms where anyone can publish and algorithms determine visibility. These changes create both opportunities for democratic participation and risks to the informed public discourse that democracy requires.

The traditional media ecosystem, whatever its flaws, performed functions essential to democracy. Professional journalists investigated wrongdoing, provided factual reporting, and served as intermediaries between citizens and institutions. Editorial processes verified information before publication. Shared media experiences created common reference points for public discussion. The business model, based on advertising and subscriptions, incentivized reaching broad audiences with credible content.

Digital platforms have disrupted this ecosystem profoundly. Social media enables direct communication that bypasses traditional gatekeepers, empowering voices previously excluded from public discourse. Citizen journalism documents events that professional media might miss or ignore. Niche publications serve communities with specific interests. Yet the same openness enables disinformation, harassment, and manipulation to spread with unprecedented speed and scale.

Algorithmic curation shapes what information people encounter in ways that may undermine democratic discourse. Platforms optimize for engagement, which often means promoting content that provokes strong emotional reactions—outrage, fear, tribalism. Filter bubbles limit exposure to diverse perspectives. Recommendation systems can lead users toward increasingly extreme content. These dynamics are not neutral technical features but design choices with political consequences.

The economics of digital media create problematic incentives. Attention-based business models reward content that captures eyeballs regardless of quality or truth. The collapse of local news leaves communities without coverage of local government and issues. Clickbait and sensationalism outcompete serious journalism in the competition for engagement. Investigative reporting, expensive and often unremunerative, struggles to survive.

Disinformation and manipulation have become pervasive concerns. Foreign actors exploit social media to influence elections and polarize societies. Domestic actors spread false claims for political or commercial gain. Deepfakes and synthetic media enable increasingly sophisticated deception. The speed of viral spread often outpaces fact-checking. Trust in media institutions has declined even as the need for trustworthy information has grown.

Polarization has intensified partly due to media dynamics. Partisan media ecosystems provide divergent accounts of reality, leaving citizens without shared factual foundations for debate. Social media enables self-selection into ideologically homogeneous communities. The absence of common ground makes democratic deliberation difficult; citizens increasingly view those with different views not as fellow citizens with different perspectives but as enemies whose views are illegitimate.

Reform proposals address different dimensions of the problem. Platform regulation could require transparency about algorithmic processes, limit targeted advertising, or impose liability for harmful content. Antitrust action could reduce the concentrated power of dominant platforms. Media literacy education could help citizens navigate the information environment. Public investment in journalism could support reporting that markets fail to sustain. Each approach involves tradeoffs between competing values including free expression, innovation, and democratic health.

The future of democratic discourse depends on developing institutions and norms suited to the digital age. Technical systems alone cannot solve problems that are fundamentally social and political. Citizens, platforms, governments, and civil society all have roles in creating information environments that support rather than undermine democratic self-governance.`,
        questions: [
          { id: 27, type: "tfng", text: "Traditional media served as information gatekeepers.", answer: "True" },
          { id: 28, type: "tfng", text: "Social media only enables positive democratic participation.", answer: "False" },
          { id: 29, type: "tfng", text: "Platform algorithms are neutral technical features.", answer: "False" },
          { id: 30, type: "tfng", text: "Local news coverage has expanded in the digital age.", answer: "False" },
          { id: 31, type: "tfng", text: "Trust in media institutions has increased recently.", answer: "False" },
          { id: 32, type: "matching", text: "Limiting exposure to diverse perspectives", answer: "filter bubbles" },
          { id: 33, type: "matching", text: "Content optimized to capture attention regardless of quality", answer: "clickbait" },
          { id: 34, type: "matching", text: "Synthetic media enabling sophisticated deception", answer: "deepfakes" },
          { id: 35, type: "mcq", text: "What do platforms optimize for?", options: ["A. Truth", "B. Engagement", "C. Diversity", "D. Accuracy"], answer: "B" },
          { id: 36, type: "mcq", text: "What enables direct communication bypassing gatekeepers?", options: ["A. Print media", "B. Social media", "C. Television", "D. Radio"], answer: "B" },
          { id: 37, type: "mcq", text: "What has collapsed in many communities?", options: ["A. National news", "B. Local news", "C. Sports coverage", "D. Weather reporting"], answer: "B" },
          { id: 38, type: "mcq", text: "What could platform regulation require?", options: ["A. More advertising", "B. Algorithmic transparency", "C. Less content", "D. Higher prices"], answer: "B" },
          { id: 39, type: "short", text: "What kind of media ecosystems provide divergent reality accounts? (ONE WORD)", answer: "partisan" },
          { id: 40, type: "short", text: "What type of education helps citizens navigate information? (TWO WORDS)", answer: "media literacy" }
        ]
      }
    ]
  },

  // ============================================================
  // R25 - ADVANCED (Band 8.5)
  // ============================================================
  {
    id: "R25",
    level: "Advanced",
    bandTarget: "8.5",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Synthetic Biology and Bioengineering",
        wordCount: 870,
        text: `Synthetic biology applies engineering principles to biological systems, enabling the design and construction of new biological parts, devices, and organisms with capabilities not found in nature. This emerging field promises revolutionary applications in medicine, agriculture, energy, and manufacturing while raising profound questions about safety, ethics, and the boundaries between natural and artificial life.

The foundational insight of synthetic biology is that biological systems can be understood and manipulated as modular, programmable systems analogous to electronic circuits. DNA provides the "code" that can be written and edited; proteins serve as functional components; cells operate as chassis for engineered systems. This engineering perspective has enabled systematic approaches to designing organisms with specified functions.

Gene synthesis technologies allow creation of DNA sequences from scratch, no longer requiring extraction from existing organisms. Costs have fallen exponentially, making it increasingly feasible to construct entire genomes. CRISPR and other gene editing tools enable precise modification of existing organisms. These capabilities have democratized genetic engineering, making it accessible beyond traditional biotechnology centers, including in community biology labs and even individual garages.

Applications span multiple domains. In medicine, engineered cells can be programmed to detect and treat disease, including cancer immunotherapies and living drug delivery systems. Engineered microorganisms produce pharmaceuticals, biofuels, and industrial chemicals through fermentation. Agricultural applications include crops with enhanced nutritional content or pest resistance. Materials science applications produce novel proteins with industrial applications.

The most ambitious vision of synthetic biology involves creating artificial life from non-living chemical components. Craig Venter's 2010 creation of a cell with a completely synthetic genome demonstrated the feasibility of genome-scale construction. Subsequent work has created minimal cells with stripped-down genomes containing only genes essential for survival. These achievements represent steps toward understanding life's fundamental requirements and eventually creating novel life forms designed from scratch.

Biosecurity concerns center on the potential misuse of synthetic biology capabilities. The same technologies that enable beneficial applications could theoretically create dangerous pathogens. Gene synthesis could reconstruct historical pathogens like smallpox or engineer enhanced versions of existing threats. Dual-use research presents dilemmas about publication and sharing of potentially dangerous information. The democratization of biotechnology makes oversight more difficult.

Environmental risks include the possibility that engineered organisms could escape containment and establish themselves in ecosystems. Gene drives—genetic systems that spread through populations faster than normal inheritance—could transform or eliminate entire species. The complexity of ecological interactions makes predicting consequences of releasing engineered organisms extremely difficult. Containment strategies include genetic safeguards that prevent reproduction outside controlled conditions.

Ethical debates extend beyond safety to fundamental questions about creating and modifying life. Some view synthetic biology as inappropriate interference with nature or divine creation. Others see it as an extension of humanity's long history of modifying organisms through breeding and cultivation. Questions about the moral status of synthetic organisms—particularly if they develop capacities associated with consciousness—may eventually require attention. The ownership and control of synthetic organisms raises issues of intellectual property, benefit sharing, and corporate power.

Governance of synthetic biology must balance enabling beneficial applications against managing risks. Self-regulation by the scientific community has played an important role but may be insufficient as capabilities spread. International coordination faces challenges from different national approaches and competitive dynamics. The pace of technological change consistently outpaces regulatory adaptation. Finding governance frameworks that are both effective and flexible enough to accommodate rapid change remains an ongoing challenge.`,
        questions: [
          { id: 1, type: "tfng", text: "Synthetic biology treats biological systems as programmable.", answer: "True" },
          { id: 2, type: "tfng", text: "Gene synthesis costs have increased over time.", answer: "False" },
          { id: 3, type: "tfng", text: "Craig Venter created a cell with synthetic genome in 2010.", answer: "True" },
          { id: 4, type: "tfng", text: "Engineered organisms cannot escape containment.", answer: "False" },
          { id: 5, type: "tfng", text: "Governance of synthetic biology is fully resolved.", answer: "False" },
          { id: 6, type: "short", text: "What gene editing tool is mentioned? (ONE WORD)", answer: "CRISPR" },
          { id: 7, type: "short", text: "What genetic systems spread faster than normal inheritance? (TWO WORDS)", answer: "gene drives" },
          { id: 8, type: "short", text: "Who created a synthetic genome cell in 2010? (ONE WORD)", answer: "Venter" },
          { id: 9, type: "mcq", text: "What serves as functional components in synthetic biology?", options: ["A. DNA", "B. Proteins", "C. Cells", "D. Computers"], answer: "B" },
          { id: 10, type: "mcq", text: "What could gene synthesis theoretically reconstruct?", options: ["A. Buildings", "B. Historical pathogens", "C. Machines", "D. Computers"], answer: "B" },
          { id: 11, type: "mcq", text: "What makes predicting release consequences difficult?", options: ["A. Simple systems", "B. Ecological complexity", "C. Good data", "D. Clear models"], answer: "B" },
          { id: 12, type: "mcq", text: "What has played an important governance role?", options: ["A. Government only", "B. Self-regulation by scientists", "C. International law only", "D. No governance"], answer: "B" },
          { id: 13, type: "summary", text: "Complete: Democratization of biotechnology makes ________ more difficult.", answer: "oversight" }
        ]
      },
      {
        id: "P2",
        title: "Philosophical Foundations of Human Rights",
        wordCount: 860,
        text: `Human rights—the fundamental entitlements that all humans possess simply by virtue of being human—constitute one of the most important moral and political frameworks of the modern era. Yet the philosophical foundations of human rights remain contested, with implications for how rights are understood, justified, and implemented across diverse cultural and political contexts.

Natural rights theories, historically influential in the development of human rights, ground rights in human nature or reason. John Locke argued that individuals possess inherent rights to life, liberty, and property that precede and constrain government. These rights are "natural" in being discoverable through reason rather than dependent on positive law. The American Declaration of Independence's assertion that "all men are created equal" with "unalienable rights" reflects this natural rights tradition.

Critics challenge natural rights on multiple grounds. The claim that rights exist in nature independent of human convention appears metaphysically dubious to many modern thinkers. Natural rights theories historically excluded many humans—women, non-Europeans, the enslaved—from their scope, suggesting that supposedly universal principles reflected particular prejudices. The alleged self-evidence of natural rights leaves unclear how to resolve disputes about their content or application.

Political theories ground rights in agreements or practices rather than nature. Social contract theories treat rights as products of actual or hypothetical agreements among individuals forming societies. Rights on this view are conventions that rational individuals would accept because they serve mutual advantage. John Rawls's influential theory derives principles of justice, including basic liberties, from agreements made under conditions that ensure fairness and impartiality.

Interest theories define rights as protections for important human interests. Rights exist to safeguard interests so fundamental that they warrant imposing duties on others. This approach connects rights to human welfare in ways that seem more concrete than abstract natural rights. However, determining which interests are sufficiently important to generate rights, and how to weigh competing interests, presents challenges.

Agency or autonomy theories ground rights in the capacity for self-determination. Human dignity derives from the ability to make choices and pursue self-directed lives. Rights protect the conditions necessary for autonomous agency. Immanuel Kant's moral philosophy, treating persons as ends rather than merely means, provides philosophical resources for this approach. Critics question whether agency theories can ground rights for those with limited autonomy, including children and individuals with cognitive disabilities.

Cultural relativist challenges question whether human rights can be genuinely universal across diverse cultures and traditions. Western origins of human rights documents and institutions raise concerns about cultural imperialism. Some traditions emphasize community over individual, duties over rights, or different orderings of values than those reflected in international human rights law. Defenders of universality argue that human rights protect interests common to all humans regardless of cultural particularity.

The relationship between human rights and democracy presents tensions. Democratic majorities may vote to violate minority rights. Constitutional protections for rights constrain democratic decision-making. Some argue that rights should be subject to democratic deliberation rather than entrenched against revision. Others maintain that certain rights are preconditions for legitimate democracy rather than products of it.

The practice of human rights extends beyond philosophical justification to enforcement and implementation. International human rights law establishes obligations that states accept by treaty. Monitoring and accountability mechanisms assess compliance. Yet enforcement remains limited; powerful states violate rights with impunity while weaker states face intervention. The gap between human rights ideals and actual protection of rights remains substantial.`,
        questions: [
          { id: 14, type: "yng", text: "Natural rights theories ground rights in human nature.", answer: "Yes" },
          { id: 15, type: "yng", text: "Natural rights historically included all humans equally.", answer: "No" },
          { id: 16, type: "yng", text: "Social contract theories see rights as products of agreements.", answer: "Yes" },
          { id: 17, type: "yng", text: "Agency theories successfully ground rights for those with limited autonomy.", answer: "No" },
          { id: 18, type: "yng", text: "Human rights enforcement is complete and effective.", answer: "No" },
          { id: 19, type: "mcq", text: "Who argued for inherent rights to life, liberty, and property?", options: ["A. Kant", "B. Locke", "C. Rawls", "D. Marx"], answer: "B" },
          { id: 20, type: "mcq", text: "What do interest theories define rights as?", options: ["A. Natural facts", "B. Protections for important interests", "C. Divine commands", "D. Government grants"], answer: "B" },
          { id: 21, type: "mcq", text: "What do cultural relativists question?", options: ["A. Rights existence", "B. Universality across cultures", "C. Legal systems", "D. Political parties"], answer: "B" },
          { id: 22, type: "mcq", text: "What may democratic majorities vote to do?", options: ["A. Expand all rights", "B. Violate minority rights", "C. Eliminate voting", "D. Create equality"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Natural rights are discoverable through ________ rather than positive law.", answer: "reason" },
          { id: 24, type: "summary", text: "Complete: Kant's philosophy treats persons as ________ rather than means.", answer: "ends" },
          { id: 25, type: "summary", text: "Complete: Constitutional protections ________ democratic decision-making.", answer: "constrain" },
          { id: 26, type: "summary", text: "Complete: Powerful states violate rights with ________.", answer: "impunity" }
        ]
      },
      {
        id: "P3",
        title: "Complexity Science and Systems Thinking",
        wordCount: 870,
        text: `Complexity science studies systems composed of many interacting components whose collective behavior cannot be predicted from the properties of individual parts. From ecosystems to economies, from neural networks to social movements, complex systems exhibit emergent properties, nonlinear dynamics, and adaptive behavior that challenge traditional analytical approaches. Understanding complexity has become essential for addressing problems that resist simple solutions.

Emergence describes properties that arise from interactions among components but cannot be reduced to those components. Consciousness emerges from neural activity but is not present in individual neurons. Market prices emerge from trading decisions but are not determined by any single trader. Flocking behavior emerges from simple rules followed by individual birds. Emergent properties often surprise because they are not obvious from examining parts in isolation.

Nonlinearity means that outputs are not proportional to inputs. Small changes can produce large effects through amplification and positive feedback, while large interventions may produce little change if the system absorbs them. The "butterfly effect"—the idea that a butterfly's wing movements could eventually influence distant weather—captures the sensitive dependence on initial conditions that characterizes chaotic systems. Prediction becomes fundamentally limited even in deterministic systems.

Self-organization occurs when order arises spontaneously without central coordination. Ant colonies solve complex problems through simple local interactions without any ant directing overall behavior. Market economies coordinate production and consumption through price signals without central planning. The internet evolved through distributed decisions rather than top-down design. Self-organization can be more robust and adaptive than hierarchical control but may also produce undesirable outcomes.

Adaptation and evolution characterize complex systems that change in response to their environments. Biological evolution produces organisms exquisitely adapted to their niches through variation and selection. Firms adapt to competitive pressures through innovation and imitation. Social norms evolve through cultural transmission and modification. Understanding how systems adapt—and when they fail to—is crucial for designing interventions.

Network structure profoundly influences system behavior. The pattern of connections among components determines how information, diseases, or influences spread. Small-world networks combine local clustering with long-range connections enabling rapid global spread. Scale-free networks have highly connected hubs that can be both strengths and vulnerabilities. Network analysis has become essential for understanding phenomena from epidemics to financial contagion to social movements.

Traditional policy approaches often assume linear causation and predictable responses that complex systems violate. Command-and-control regulation assumes that authorities can specify desired outcomes and enforce compliance. Economic models assume equilibrium conditions that may never obtain. Planning assumes that outcomes can be predicted and controlled. Complexity suggests that intervention effects may be unpredictable, delayed, or counterintuitive.

Systems thinking offers alternative approaches suited to complexity. Rather than seeking to control outcomes directly, interventions might influence conditions that enable desired behaviors to emerge. Adaptive management adjusts approaches based on feedback rather than following fixed plans. Scenario planning prepares for multiple possible futures rather than predicting single outcomes. Building resilience—the capacity to maintain function despite disturbance—may be more achievable than preventing all disruptions.

The implications of complexity science extend to epistemology—how we know what we know. Complex systems may be fundamentally unpredictable yet still exhibit patterns amenable to understanding. Simulation and modeling help explore system behavior without claiming precise prediction. Humility about the limits of knowledge and control becomes appropriate when addressing complex challenges.`,
        questions: [
          { id: 27, type: "tfng", text: "Emergence can be predicted from examining parts in isolation.", answer: "False" },
          { id: 28, type: "tfng", text: "In nonlinear systems, small changes can produce large effects.", answer: "True" },
          { id: 29, type: "tfng", text: "Self-organization requires central coordination.", answer: "False" },
          { id: 30, type: "tfng", text: "Network structure influences how information spreads.", answer: "True" },
          { id: 31, type: "tfng", text: "Traditional policy assumes complex unpredictable responses.", answer: "False" },
          { id: 32, type: "matching", text: "Properties arising from interactions but not present in parts", answer: "emergence" },
          { id: 33, type: "matching", text: "Sensitive dependence on initial conditions", answer: "butterfly effect" },
          { id: 34, type: "matching", text: "Order arising without central coordination", answer: "self-organization" },
          { id: 35, type: "mcq", text: "What do complex systems exhibit?", options: ["A. Simple predictability", "B. Emergent properties", "C. Linear responses", "D. Central control"], answer: "B" },
          { id: 36, type: "mcq", text: "What do scale-free networks have?", options: ["A. No connections", "B. Highly connected hubs", "C. Equal connections", "D. No structure"], answer: "B" },
          { id: 37, type: "mcq", text: "What does adaptive management adjust based on?", options: ["A. Fixed plans", "B. Feedback", "C. Authority", "D. Prediction"], answer: "B" },
          { id: 38, type: "mcq", text: "What may be more achievable than preventing disruptions?", options: ["A. Total control", "B. Building resilience", "C. Perfect prediction", "D. Elimination of complexity"], answer: "B" },
          { id: 39, type: "short", text: "What coordinates market economies without central planning? (TWO WORDS)", answer: "price signals" },
          { id: 40, type: "short", text: "What kind of thinking offers approaches suited to complexity? (ONE WORD)", answer: "systems" }
        ]
      }
    ]
  }

];

// Export for use in test engine
if (typeof module !== 'undefined' && module.exports) {
  module.exports = READING_TESTS_ADVANCED;
}
