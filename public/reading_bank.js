// =============================================================================
// EVOLVE READING TESTS - COMPLETE (R1-R33)
// All 33 IELTS-style reading tests with full passages and questions
// =============================================================================

const READING_TESTS_FULL = [

// ============================================================
// R1 - FOUNDATION (Band 6.0-6.5) - Libraries
// ============================================================
{
  id: "R1",
  level: "Foundation",
  bandTarget: "6.0-6.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Evolution of Public Libraries",
      wordCount: 850,
      text: `Public libraries have undergone remarkable transformations since their earliest incarnations in the ancient world. The great library of Alexandria, founded in the third century BCE, represented one of humanity's first attempts to gather and preserve written knowledge systematically. However, such institutions served primarily scholars and the elite, remaining inaccessible to ordinary citizens for centuries.

The concept of the public library as we understand it today emerged gradually during the eighteenth and nineteenth centuries. The Enlightenment period fostered new ideas about education and the democratization of knowledge. Philosophers argued that access to information was essential for civic participation and social progress.

Rapid industrialization in Europe and North America created large urban populations with limited access to formal education. Factory workers, many of whom had migrated from rural areas, had few opportunities for self-improvement. Recognizing this need, governments and wealthy philanthropists began funding public reading rooms and lending libraries.

One of the most influential figures in the public library movement was Andrew Carnegie, the Scottish-American industrialist. Between 1883 and 1929, Carnegie funded the construction of over 2,500 libraries worldwide, primarily in English-speaking countries. His philosophy was that libraries could provide opportunities for self-education to anyone willing to make the effort.

The twentieth century saw dramatic expansion in both the number and scope of public libraries. In addition to lending books, libraries began offering reference services, children's programming, and community meeting spaces. The introduction of audiovisual materials in the mid-century further broadened their appeal.

The digital revolution of the late twentieth and early twenty-first centuries presented both challenges and opportunities for public libraries. Some predicted that the rise of the internet and e-books would make physical libraries obsolete. Instead, libraries have adapted by offering digital resources, computer access, and technology training.

Despite these adaptations, public libraries face ongoing challenges. Budget constraints have forced many to reduce hours and staff. Questions persist about the future role of libraries in an age when information is increasingly available online. Nevertheless, supporters argue that libraries remain vital community institutions, providing not just access to information but also spaces for learning, meeting, and civic engagement.`,
      questions: [
        { id: 1, type: "heading", text: "The Library of Alexandria primarily served:", options: ["A. All citizens equally", "B. Scholars and the elite", "C. Factory workers", "D. Children only"], answer: "B" },
        { id: 2, type: "tfng", text: "The Library of Alexandria was open to all citizens.", answer: "False" },
        { id: 3, type: "tfng", text: "Andrew Carnegie funded libraries in multiple countries.", answer: "True" },
        { id: 4, type: "tfng", text: "Physical libraries have become obsolete due to the internet.", answer: "False" },
        { id: 5, type: "mcq", text: "What did Enlightenment philosophers believe about information?", options: ["A. It should be controlled by governments", "B. It was essential for civic participation", "C. It was too dangerous for ordinary people", "D. It should only be available to scholars"], answer: "B" },
        { id: 6, type: "mcq", text: "What challenge do modern libraries face?", options: ["A. Too many visitors", "B. Budget constraints", "C. Excessive book donations", "D. Staff surplus"], answer: "B" },
        { id: 7, type: "short", text: "How many libraries did Carnegie fund? (Write a NUMBER)", answer: "2500" },
        { id: 8, type: "short", text: "In which century did public libraries emerge as we know them today?", answer: "nineteenth" },
        { id: 9, type: "mcq", text: "What did twentieth-century libraries add beyond book lending?", options: ["A. Only reference services", "B. Reference services, children's programming, and meeting spaces", "C. Only audiovisual materials", "D. Only computer access"], answer: "B" },
        { id: 10, type: "tfng", text: "The Enlightenment occurred in the twentieth century.", answer: "False" },
        { id: 11, type: "short", text: "What nationality was Andrew Carnegie? (TWO WORDS)", answer: "Scottish-American" },
        { id: 12, type: "mcq", text: "How have libraries adapted to the digital age?", options: ["A. By closing branches", "B. By offering digital resources and technology training", "C. By eliminating books", "D. By increasing fees"], answer: "B" },
        { id: 13, type: "tfng", text: "Factory workers had many opportunities for education during industrialization.", answer: "False" }
      ]
    },
    {
      id: "P2",
      title: "The Benefits of Urban Green Spaces",
      wordCount: 820,
      text: `Urban green spaces, including parks, gardens, and tree-lined streets, provide numerous benefits to city residents. Research has consistently demonstrated that access to nature within urban environments improves physical health, mental wellbeing, and community cohesion.

The physical health benefits of urban green spaces are well documented. Parks and trails encourage physical activity, from walking and jogging to cycling and team sports. Studies have shown that neighborhoods with more green space tend to have lower rates of obesity, heart disease, and other chronic conditions. Trees and plants also improve air quality by absorbing pollutants and producing oxygen.

Mental health benefits are equally significant. Exposure to natural environments has been shown to reduce stress, anxiety, and depression. The concept of "biophilia" suggests that humans have an innate need to connect with nature, and that this connection is essential for psychological wellbeing. Urban residents who spend time in parks report higher levels of life satisfaction.

Green spaces also provide important environmental services within cities. Trees provide shade, reducing the urban heat island effect that makes cities significantly warmer than surrounding rural areas. Vegetation absorbs rainfall, reducing flooding and strain on drainage systems. Urban forests and gardens also support biodiversity.

Social benefits of green spaces include providing venues for community interaction. Parks serve as gathering places where people from different backgrounds can meet. Community gardens have been shown to strengthen social ties and foster a sense of neighborhood identity.

Despite these benefits, access to green space is not equally distributed. Low-income neighborhoods often have less access to quality green spaces than wealthier areas, raising concerns about environmental justice.

Planners are exploring various strategies to increase urban greenery, including green roofs, pocket parks in vacant lots, and requirements for developers to include green space in new projects. Some cities are converting abandoned industrial sites into parks and trails.`,
      questions: [
        { id: 14, type: "tfng", text: "Urban green spaces only benefit mental health.", answer: "False" },
        { id: 15, type: "tfng", text: "Trees help cool cities through providing shade.", answer: "True" },
        { id: 16, type: "tfng", text: "All neighborhoods have equal access to green spaces.", answer: "False" },
        { id: 17, type: "tfng", text: "Community gardens can strengthen social ties.", answer: "True" },
        { id: 18, type: "mcq", text: "The urban heat island effect refers to:", options: ["A. Parks being cooler than buildings", "B. Cities being warmer than rural areas", "C. Green spaces reducing pollution", "D. Air conditioning usage"], answer: "B" },
        { id: 19, type: "mcq", text: "According to the passage, biophilia suggests that:", options: ["A. Humans fear nature", "B. Humans have an innate need to connect with nature", "C. Nature is dangerous in cities", "D. Plants grow better in cities"], answer: "B" },
        { id: 20, type: "mcq", text: "Which is NOT mentioned as a strategy to increase urban greenery?", options: ["A. Green roofs", "B. Pocket parks", "C. Underground gardens", "D. Converting industrial sites"], answer: "C" },
        { id: 21, type: "short", text: "What do trees absorb to improve air quality? (ONE WORD)", answer: "pollutants" },
        { id: 22, type: "short", text: "What type of justice concern is raised about unequal green space access?", answer: "environmental" },
        { id: 23, type: "tfng", text: "Vegetation helps reduce flooding in cities.", answer: "True" },
        { id: 24, type: "mcq", text: "What health conditions are reduced in neighborhoods with more green space?", options: ["A. Only obesity", "B. Obesity, heart disease, and chronic conditions", "C. Only heart disease", "D. Only mental illness"], answer: "B" },
        { id: 25, type: "short", text: "What type of gardens strengthen neighborhood identity?", answer: "community" },
        { id: 26, type: "yng", text: "The author believes green spaces are unnecessary for modern cities.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The History of Paper Making",
      wordCount: 830,
      text: `The invention of paper transformed human civilization, enabling the widespread recording and transmission of knowledge. While papyrus and parchment preceded paper, neither offered the combination of durability, affordability, and ease of production that made paper revolutionary.

Paper was invented in China around 105 CE, traditionally credited to Cai Lun, an official of the Han Dynasty court. The earliest papers were made from mulberry bark, hemp, and rags soaked in water and beaten into a pulp. This pulp was then spread on screens, pressed, and dried to form thin sheets.

The secrets of papermaking gradually spread westward along the Silk Road. Arab traders learned the craft after capturing Chinese papermakers at the Battle of Talas in 751 CE. Paper mills were established in Baghdad, Damascus, and Cairo. Arab papermakers introduced cotton and linen rags as raw materials, improving quality.

Paper reached Europe through Islamic Spain in the twelfth century. The first European paper mill was established in Xàtiva, Spain, around 1056. Italian manufacturers soon became leaders in European production, with mills in Fabriano producing high-quality paper exported throughout the continent.

The invention of the printing press by Johannes Gutenberg around 1450 dramatically increased demand for paper. Hand-produced paper could not keep pace with printing press output, stimulating innovation in manufacturing.

The nineteenth century brought revolutionary changes. In 1799, Louis-Nicolas Robert invented the first continuous papermaking machine. Wood pulp replaced rags as the primary raw material, making paper cheaper and more abundant but also less durable.

Modern paper production faces environmental challenges including deforestation, water consumption, and chemical pollution. The industry has responded with increased recycling and cleaner production methods. Despite predictions of a paperless office, global paper consumption continues to rise.`,
      questions: [
        { id: 27, type: "tfng", text: "Papyrus was invented after paper.", answer: "False" },
        { id: 28, type: "tfng", text: "Chinese papermakers shared their techniques freely.", answer: "False" },
        { id: 29, type: "tfng", text: "The printing press increased demand for paper.", answer: "True" },
        { id: 30, type: "tfng", text: "Modern paper is more durable than traditional rag paper.", answer: "False" },
        { id: 31, type: "mcq", text: "When was paper invented in China?", options: ["A. 751 CE", "B. 105 CE", "C. 1056", "D. 1799"], answer: "B" },
        { id: 32, type: "mcq", text: "How did Arabs learn papermaking?", options: ["A. Through trade agreements", "B. By capturing Chinese papermakers", "C. Through diplomatic exchange", "D. From European manufacturers"], answer: "B" },
        { id: 33, type: "mcq", text: "What did Arab papermakers introduce as raw materials?", options: ["A. Wood pulp", "B. Cotton and linen rags", "C. Mulberry bark", "D. Hemp fibers"], answer: "B" },
        { id: 34, type: "short", text: "Who is traditionally credited with inventing paper? (TWO WORDS)", answer: "Cai Lun" },
        { id: 35, type: "short", text: "Where was the first European paper mill established? (ONE WORD)", answer: "Spain" },
        { id: 36, type: "short", text: "What replaced rags as the primary raw material in the 19th century?", answer: "wood pulp" },
        { id: 37, type: "mcq", text: "Which Italian city became known for high-quality paper?", options: ["A. Rome", "B. Fabriano", "C. Venice", "D. Milan"], answer: "B" },
        { id: 38, type: "tfng", text: "The paperless office has reduced global paper consumption.", answer: "False" },
        { id: 39, type: "yng", text: "The author suggests digital technology has eliminated paper use.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates paper production causes environmental concerns.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R2 - FOUNDATION (Band 6.0-6.5) - Coffee, Sleep, Energy
// ============================================================
{
  id: "R2",
  level: "Foundation",
  bandTarget: "6.0-6.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The History of Coffee",
      wordCount: 820,
      text: `Coffee is one of the world's most popular beverages, consumed by billions of people daily. Its journey from an Ethiopian forest to breakfast tables worldwide spans centuries and continents.

According to legend, coffee was discovered by an Ethiopian goat herder named Kaldi around the 9th century. He noticed his goats became unusually energetic after eating berries from a certain tree. Curious, Kaldi tried the berries himself and experienced a similar boost in energy.

Coffee cultivation began in earnest in Yemen during the 15th century. Arab traders brought coffee plants from Ethiopia and established the first coffee plantations. The port city of Mocha became a major trading hub, giving its name to a style of coffee still popular today.

Despite restrictions, coffee eventually spread beyond Arabia. Travelers smuggled seeds to India, and Dutch traders established plantations in Java. The Dutch introduced coffee to Europe in the 17th century, where it quickly became fashionable among the wealthy.

Coffeehouses emerged as important social institutions in Europe. In England, they were nicknamed "penny universities" because for the price of a coffee, patrons could engage in intellectual discussion. Lloyd's of London famously began as a coffee house.

The French established coffee plantations in the Caribbean, while the Portuguese brought coffee to Brazil, which would eventually become the world's largest producer. The 19th century saw the development of new brewing methods and the rise of coffee as a mass-market commodity.

Today, coffee is grown in tropical regions around the world, with Brazil, Vietnam, and Colombia among the leading producers. The industry employs tens of millions of people globally. Despite concerns about fair trade and sustainability, coffee consumption continues to grow.`,
      questions: [
        { id: 1, type: "tfng", text: "Coffee was first discovered in Yemen.", answer: "False" },
        { id: 2, type: "tfng", text: "Yemeni traders tried to prevent coffee seeds from being exported.", answer: "True" },
        { id: 3, type: "tfng", text: "Lloyd's of London started as a coffee house.", answer: "True" },
        { id: 4, type: "tfng", text: "Brazil was the first country to establish coffee plantations.", answer: "False" },
        { id: 5, type: "mcq", text: "According to legend, who discovered coffee?", options: ["A. Arab traders", "B. A goat herder named Kaldi", "C. Dutch merchants", "D. Local monks"], answer: "B" },
        { id: 6, type: "mcq", text: "Why were English coffeehouses called 'penny universities'?", options: ["A. They charged university fees", "B. Patrons could engage in intellectual discussion for the price of coffee", "C. They were located near universities", "D. They taught formal courses"], answer: "B" },
        { id: 7, type: "mcq", text: "Which country brought coffee to Brazil?", options: ["A. France", "B. Netherlands", "C. Portugal", "D. Spain"], answer: "C" },
        { id: 8, type: "short", text: "In which century did coffee cultivation begin in Yemen?", answer: "15th" },
        { id: 9, type: "short", text: "What port city became a major coffee trading hub?", answer: "Mocha" },
        { id: 10, type: "short", text: "What Indonesian island did the Dutch establish plantations on?", answer: "Java" },
        { id: 11, type: "mcq", text: "Which is the world's largest coffee producer today?", options: ["A. Ethiopia", "B. Vietnam", "C. Brazil", "D. Colombia"], answer: "C" },
        { id: 12, type: "tfng", text: "Coffee was introduced to Europe in the 15th century.", answer: "False" },
        { id: 13, type: "short", text: "What country is the origin of coffee?", answer: "Ethiopia" }
      ]
    },
    {
      id: "P2",
      title: "Sleep and Memory",
      wordCount: 810,
      text: `Sleep plays a crucial role in memory consolidation, the process by which short-term memories are transformed into long-lasting ones. Scientists have long observed that people who sleep after learning new information retain it better than those who stay awake.

During waking hours, the hippocampus temporarily stores new memories. However, this storage capacity is limited. During sleep, particularly during deep sleep stages, the brain replays these memories and transfers them to the neocortex for long-term storage. This process strengthens neural connections and integrates new information with existing knowledge.

Different sleep stages benefit different types of memory. Deep slow-wave sleep seems particularly important for declarative memories—facts and events that can be consciously recalled. REM sleep may be more important for procedural memories—skills and habits performed automatically.

Sleep deprivation has profound effects on memory formation. Studies show that even moderate sleep restriction impairs the ability to form new memories. The hippocampus functions less efficiently when we are sleep-deprived, making it harder to encode new information.

The timing of sleep also matters. Research suggests that sleeping soon after learning is more beneficial than delaying sleep. Even brief naps can improve memory retention.

Age affects the relationship between sleep and memory. Older adults typically experience less deep sleep, which may contribute to age-related memory decline. However, improving sleep quality in older adults can partially offset memory impairments.

Understanding the sleep-memory connection has practical implications. Students might benefit from reviewing material before bed rather than cramming late into the night. Workers learning new skills might perform better after adequate rest.`,
      questions: [
        { id: 14, type: "tfng", text: "The hippocampus has unlimited storage capacity.", answer: "False" },
        { id: 15, type: "tfng", text: "Memory consolidation occurs primarily during sleep.", answer: "True" },
        { id: 16, type: "tfng", text: "REM sleep is most important for declarative memories.", answer: "False" },
        { id: 17, type: "tfng", text: "Older adults typically experience more deep sleep than younger adults.", answer: "False" },
        { id: 18, type: "mcq", text: "What is memory consolidation?", options: ["A. Forgetting information", "B. Transferring memories to long-term storage", "C. Creating new memories", "D. Recalling old memories"], answer: "B" },
        { id: 19, type: "mcq", text: "What shape is the hippocampus described as?", options: ["A. Round", "B. Triangular", "C. Not described", "D. Star-shaped"], answer: "C" },
        { id: 20, type: "mcq", text: "According to the passage, when is the best time to study?", options: ["A. Late at night", "B. Early morning only", "C. Before bed", "D. During meals"], answer: "C" },
        { id: 21, type: "short", text: "What type of sleep is important for procedural memories?", answer: "REM" },
        { id: 22, type: "short", text: "Where are memories transferred for long-term storage?", answer: "neocortex" },
        { id: 23, type: "mcq", text: "What type of memories are facts and events?", options: ["A. Procedural", "B. Declarative", "C. Short-term", "D. Automatic"], answer: "B" },
        { id: 24, type: "tfng", text: "Brief naps can improve memory retention.", answer: "True" },
        { id: 25, type: "short", text: "What brain structure temporarily stores new memories?", answer: "hippocampus" },
        { id: 26, type: "yng", text: "The author recommends studying late into the night.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "Renewable Energy Sources",
      wordCount: 800,
      text: `The global transition to renewable energy represents one of the most significant technological and economic shifts of the 21st century. As concerns about climate change intensify and fossil fuel reserves diminish, nations worldwide are investing heavily in clean energy alternatives.

Solar power has experienced remarkable growth in recent decades. The cost of photovoltaic panels has dropped by over 90% since 2010, making solar energy competitive with fossil fuels in many markets. Large solar farms now generate electricity at costs lower than new coal or gas plants.

Wind energy has similarly transformed. Modern wind turbines are far more efficient than their predecessors, with offshore installations capturing stronger, more consistent winds. Denmark now generates over 40% of its electricity from wind power.

Hydroelectric power remains the largest source of renewable electricity globally. While large dam projects face environmental concerns, smaller run-of-river installations and pumped storage facilities offer more sustainable alternatives.

Battery technology is addressing the intermittency challenge of renewables. Lithium-ion batteries have improved dramatically, enabling grid-scale storage that can smooth out fluctuations in solar and wind generation.

The transition creates economic opportunities. The renewable energy sector now employs more people than the fossil fuel industry in many countries. Manufacturing, installation, and maintenance of clean energy systems provide jobs across skill levels.

Challenges remain, including the need for grid modernization, land use conflicts, and the environmental impacts of battery production. However, the momentum toward renewables appears irreversible, driven by both economic forces and climate imperatives.`,
      questions: [
        { id: 27, type: "tfng", text: "Solar panel costs have increased since 2010.", answer: "False" },
        { id: 28, type: "tfng", text: "Denmark generates over 40% of its electricity from wind.", answer: "True" },
        { id: 29, type: "tfng", text: "Hydroelectric power is the smallest source of renewable electricity.", answer: "False" },
        { id: 30, type: "tfng", text: "Battery technology helps address intermittency of renewables.", answer: "True" },
        { id: 31, type: "mcq", text: "By how much have solar panel costs dropped since 2010?", options: ["A. 50%", "B. 70%", "C. Over 90%", "D. 30%"], answer: "C" },
        { id: 32, type: "mcq", text: "What type of batteries are mentioned for grid storage?", options: ["A. Lead-acid", "B. Lithium-ion", "C. Nickel-cadmium", "D. Alkaline"], answer: "B" },
        { id: 33, type: "mcq", text: "What advantage do offshore wind installations have?", options: ["A. Lower costs", "B. Stronger, more consistent winds", "C. Easier maintenance", "D. Less visual impact"], answer: "B" },
        { id: 34, type: "short", text: "What type of hydroelectric installations are more sustainable?", answer: "run-of-river" },
        { id: 35, type: "short", text: "What sector now employs more people than fossil fuels in many countries?", answer: "renewable energy" },
        { id: 36, type: "mcq", text: "What challenge is NOT mentioned for the renewable transition?", options: ["A. Grid modernization", "B. Land use conflicts", "C. Labor shortages", "D. Battery production impacts"], answer: "C" },
        { id: 37, type: "tfng", text: "Large dam projects have no environmental concerns.", answer: "False" },
        { id: 38, type: "short", text: "What is the main concern driving the shift to renewables?", answer: "climate change" },
        { id: 39, type: "yng", text: "The author believes the transition to renewables will reverse.", answer: "No" },
        { id: 40, type: "yng", text: "The passage suggests renewable energy creates jobs.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R3 - FOUNDATION (Band 6.0-6.5) - Medicine, Migration, Transport
// ============================================================
{
  id: "R3",
  level: "Foundation",
  bandTarget: "6.0-6.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Development of Modern Medicine",
      wordCount: 830,
      text: `The history of medicine spans thousands of years, from ancient healing practices to today's sophisticated treatments. Understanding this evolution helps us appreciate both the achievements and the challenges that remain in healthcare.

Ancient civilizations developed diverse medical traditions. Egyptian physicians created surgical instruments and documented treatments on papyrus. Greek medicine, particularly through Hippocrates, emphasized observation and natural causes of disease rather than supernatural explanations. Traditional Chinese medicine developed acupuncture and herbal remedies that continue to be practiced today.

The medieval period saw limited progress in Europe, where medical knowledge was often mixed with religious beliefs. However, Islamic scholars preserved and expanded upon Greek medical texts, making significant advances in pharmacology and surgery.

The Renaissance brought renewed interest in human anatomy. Andreas Vesalius published detailed anatomical drawings based on actual dissection, correcting many long-held errors. William Harvey later demonstrated how blood circulates through the body, overturning theories that had persisted for centuries.

The 19th century transformed medicine dramatically. The germ theory of disease, developed by Louis Pasteur and Robert Koch, revealed that microorganisms cause many illnesses. This discovery led to antiseptic surgery, vaccines, and eventually antibiotics.

The 20th century brought remarkable advances including organ transplants, imaging technologies like X-rays and MRI, and the development of numerous drugs. The discovery of DNA's structure opened new frontiers in genetic medicine.

Today's medicine faces both old and new challenges. While infectious diseases have been controlled in many regions, chronic conditions like diabetes and heart disease have increased. The rise of antibiotic-resistant bacteria threatens to undo a century of progress. Global health inequalities mean that life-saving treatments remain unavailable to millions.`,
      questions: [
        { id: 1, type: "tfng", text: "Hippocrates emphasized supernatural causes of disease.", answer: "False" },
        { id: 2, type: "tfng", text: "Islamic scholars preserved Greek medical texts.", answer: "True" },
        { id: 3, type: "tfng", text: "The germ theory of disease was developed in the 20th century.", answer: "False" },
        { id: 4, type: "tfng", text: "Chronic diseases have increased in modern times.", answer: "True" },
        { id: 5, type: "mcq", text: "Who published detailed anatomical drawings during the Renaissance?", options: ["A. Hippocrates", "B. Andreas Vesalius", "C. Louis Pasteur", "D. William Harvey"], answer: "B" },
        { id: 6, type: "mcq", text: "What did William Harvey demonstrate?", options: ["A. Germ theory", "B. Blood circulation", "C. DNA structure", "D. Antiseptic surgery"], answer: "B" },
        { id: 7, type: "mcq", text: "Who developed the germ theory of disease?", options: ["A. Vesalius and Harvey", "B. Pasteur and Koch", "C. Hippocrates", "D. Islamic scholars"], answer: "B" },
        { id: 8, type: "short", text: "What material did Egyptian physicians use to document treatments?", answer: "papyrus" },
        { id: 9, type: "short", text: "What treatment method from Chinese medicine is still practiced today?", answer: "acupuncture" },
        { id: 10, type: "mcq", text: "What threat is mentioned regarding antibiotics?", options: ["A. High costs", "B. Resistant bacteria", "C. Side effects", "D. Shortage"], answer: "B" },
        { id: 11, type: "tfng", text: "All people worldwide have access to life-saving treatments.", answer: "False" },
        { id: 12, type: "short", text: "What discovery opened new frontiers in genetic medicine?", answer: "DNA" },
        { id: 13, type: "mcq", text: "During which period was medical knowledge mixed with religious beliefs in Europe?", options: ["A. Renaissance", "B. Medieval period", "C. 20th century", "D. Ancient times"], answer: "B" }
      ]
    },
    {
      id: "P2",
      title: "Animal Migration Patterns",
      wordCount: 810,
      text: `Animal migration is one of nature's most remarkable phenomena, involving journeys that span continents and oceans. These movements, driven by the search for food, breeding grounds, or favorable climate, demonstrate extraordinary navigational abilities.

Birds are perhaps the most celebrated migrants. Arctic terns travel from Arctic to Antarctic and back each year, covering over 70,000 kilometers. Many songbirds navigate thousands of kilometers between summer breeding grounds and winter habitats. Some species fly non-stop for days over open ocean.

Marine migrations are equally impressive. Gray whales travel 20,000 kilometers annually between feeding grounds in Alaska and breeding lagoons in Mexico. Sea turtles cross entire oceans to return to the same beaches where they hatched. Salmon famously swim upstream, returning to their birth rivers to spawn.

Land mammals also undertake significant journeys. Wildebeest in Africa travel in herds of millions, following seasonal rains and fresh grass. Caribou migrate across Arctic tundra, covering up to 5,000 kilometers yearly. Even smaller animals like monarch butterflies travel thousands of kilometers between generations.

Scientists continue to unravel how animals navigate. Many species use Earth's magnetic field as a compass. Birds may also orient by the sun, stars, and landmarks. Salmon appear to remember the unique chemical signature of their home stream.

Climate change is disrupting traditional migration patterns. Warming temperatures shift the timing of food availability, potentially causing mismatches between migrating animals and their food sources. Habitat loss along migration routes creates additional challenges.

Conservation efforts focus on protecting critical stopover sites and corridors. International cooperation is essential since migration routes cross national boundaries. Understanding migration patterns helps scientists identify priority areas for protection.`,
      questions: [
        { id: 14, type: "tfng", text: "Arctic terns travel over 70,000 kilometers annually.", answer: "True" },
        { id: 15, type: "tfng", text: "Gray whales breed in Alaska.", answer: "False" },
        { id: 16, type: "tfng", text: "Salmon return to random rivers to spawn.", answer: "False" },
        { id: 17, type: "tfng", text: "Climate change has no effect on migration patterns.", answer: "False" },
        { id: 18, type: "mcq", text: "How do many species navigate during migration?", options: ["A. Following roads", "B. Using Earth's magnetic field", "C. Random movement", "D. Following other animals only"], answer: "B" },
        { id: 19, type: "mcq", text: "What do wildebeest follow during migration?", options: ["A. Other animals", "B. Rivers", "C. Seasonal rains and fresh grass", "D. Temperature changes"], answer: "C" },
        { id: 20, type: "mcq", text: "How far do caribou migrate annually?", options: ["A. 1,000 km", "B. Up to 5,000 km", "C. 10,000 km", "D. 20,000 km"], answer: "B" },
        { id: 21, type: "short", text: "Where do gray whales feed? (ONE WORD)", answer: "Alaska" },
        { id: 22, type: "short", text: "What insect is mentioned as migrating thousands of kilometers?", answer: "monarch butterflies" },
        { id: 23, type: "mcq", text: "What do salmon use to find their home stream?", options: ["A. Visual memory", "B. Sound", "C. Chemical signature", "D. Temperature"], answer: "C" },
        { id: 24, type: "tfng", text: "Conservation requires only local efforts.", answer: "False" },
        { id: 25, type: "short", text: "What do birds use besides magnetic fields to orient?", answer: "sun" },
        { id: 26, type: "yng", text: "The author suggests migration routes should be protected.", answer: "Yes" }
      ]
    },
    {
      id: "P3",
      title: "Public Transportation Systems",
      wordCount: 820,
      text: `Public transportation systems are essential infrastructure for modern cities, moving millions of people daily while reducing traffic congestion, air pollution, and energy consumption. The design and efficiency of these systems significantly impact urban quality of life.

Subway and metro systems form the backbone of transportation in many major cities. These underground rail networks can move large numbers of passengers quickly, unaffected by surface traffic. London's Underground, opened in 1863, was the world's first, and today's largest metro systems include those in Tokyo, Shanghai, and Beijing.

Bus rapid transit (BRT) has emerged as a cost-effective alternative to rail. BRT systems feature dedicated lanes, pre-paid boarding, and frequent service that mimics rail efficiency at a fraction of the cost. Curitiba, Brazil, pioneered modern BRT in the 1970s, and the model has spread worldwide.

Light rail and tram systems occupy a middle ground between buses and metros. These surface-level trains serve medium-density corridors and can share streets with other traffic. Many cities are reviving historic streetcar lines or building new light rail networks.

The integration of different transit modes is crucial for system effectiveness. Transfer stations allow passengers to move easily between buses, trains, and other options. Unified fare systems and real-time information apps improve the passenger experience.

Challenges facing public transit include funding constraints, aging infrastructure, and competition from ride-sharing services. The COVID-19 pandemic severely impacted ridership, forcing many systems to reduce service while facing revenue shortfalls.

Looking ahead, autonomous vehicles and electric buses promise to transform public transit. However, the fundamental goal remains unchanged: moving people efficiently while minimizing environmental impact and providing equitable access to transportation.`,
      questions: [
        { id: 27, type: "tfng", text: "London's Underground was the world's first metro system.", answer: "True" },
        { id: 28, type: "tfng", text: "BRT systems are more expensive than rail.", answer: "False" },
        { id: 29, type: "tfng", text: "The COVID-19 pandemic increased transit ridership.", answer: "False" },
        { id: 30, type: "tfng", text: "Light rail systems can share streets with traffic.", answer: "True" },
        { id: 31, type: "mcq", text: "Which city pioneered modern BRT?", options: ["A. London", "B. Tokyo", "C. Curitiba", "D. Shanghai"], answer: "C" },
        { id: 32, type: "mcq", text: "When was London's Underground opened?", options: ["A. 1863", "B. 1900", "C. 1970s", "D. 1950"], answer: "A" },
        { id: 33, type: "mcq", text: "What features do BRT systems have?", options: ["A. Underground tunnels", "B. Dedicated lanes and pre-paid boarding", "C. Limited stops only", "D. Only rush hour service"], answer: "B" },
        { id: 34, type: "short", text: "Which cities have the largest metro systems? (Name ONE)", answer: "Tokyo" },
        { id: 35, type: "short", text: "What type of system is between buses and metros?", answer: "light rail" },
        { id: 36, type: "mcq", text: "What improves passenger experience according to the passage?", options: ["A. Longer wait times", "B. More transfers", "C. Real-time information apps", "D. Higher fares"], answer: "C" },
        { id: 37, type: "tfng", text: "Many cities are abandoning historic streetcar lines.", answer: "False" },
        { id: 38, type: "short", text: "What new technology promises to transform buses?", answer: "electric" },
        { id: 39, type: "yng", text: "The author believes public transit is unnecessary.", answer: "No" },
        { id: 40, type: "yng", text: "The passage suggests environmental impact matters for transit.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R4 - FOUNDATION (Band 6.0-6.5) - Online Ed, Habits, Silk Road
// ============================================================
{
  id: "R4",
  level: "Foundation",
  bandTarget: "6.0-6.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Rise of Online Education",
      wordCount: 820,
      text: `Online education has transformed how people learn, making knowledge accessible to millions who might otherwise lack educational opportunities. From university courses to professional training, digital platforms have reshaped the educational landscape.

The roots of online education trace back to correspondence courses in the 19th century, where students received materials by mail. The internet accelerated this trend dramatically. In 2012, Massive Open Online Courses (MOOCs) burst onto the scene, offering free university-level courses to anyone with internet access.

Online learning offers several advantages. Students can study at their own pace, replaying lectures and reviewing materials as needed. Geographic barriers disappear when courses are delivered digitally. Working professionals can advance their education without leaving their jobs. The cost is often lower than traditional programs.

However, online education faces significant challenges. Completion rates for MOOCs are notoriously low, often below 10%. Students may struggle without face-to-face interaction and immediate feedback. Technical issues and unreliable internet access create barriers in many regions. Some employers question the value of online credentials.

The COVID-19 pandemic forced a massive shift to online learning. Schools and universities worldwide scrambled to move classes online, exposing both the potential and limitations of digital education. Many students and teachers found the transition difficult.

Blended learning models, combining online and in-person instruction, are emerging as a promising approach. These hybrid programs aim to capture the flexibility of online learning while preserving the benefits of direct interaction.

The future likely holds continued growth in online education, but as a complement to rather than replacement for traditional learning. Quality assurance and recognition of online credentials remain important issues to address.`,
      questions: [
        { id: 1, type: "tfng", text: "Online education began with the internet.", answer: "False" },
        { id: 2, type: "tfng", text: "MOOC completion rates are typically very high.", answer: "False" },
        { id: 3, type: "tfng", text: "Online learning removes geographic barriers.", answer: "True" },
        { id: 4, type: "tfng", text: "The COVID-19 pandemic had no effect on education.", answer: "False" },
        { id: 5, type: "mcq", text: "When did MOOCs become prominent?", options: ["A. 19th century", "B. 2012", "C. 2020", "D. 1990s"], answer: "B" },
        { id: 6, type: "mcq", text: "What is a typical MOOC completion rate?", options: ["A. Over 90%", "B. About 50%", "C. Below 10%", "D. About 75%"], answer: "C" },
        { id: 7, type: "mcq", text: "What learning model combines online and in-person instruction?", options: ["A. MOOC", "B. Correspondence", "C. Blended learning", "D. Traditional"], answer: "C" },
        { id: 8, type: "short", text: "How did 19th century students receive course materials?", answer: "mail" },
        { id: 9, type: "short", text: "What creates barriers in many regions for online learning?", answer: "internet access" },
        { id: 10, type: "mcq", text: "What do some employers question about online education?", options: ["A. The cost", "B. The value of credentials", "C. The subjects offered", "D. The technology used"], answer: "B" },
        { id: 11, type: "tfng", text: "Blended learning is entirely online.", answer: "False" },
        { id: 12, type: "short", text: "What does MOOC stand for? (First word)", answer: "Massive" },
        { id: 13, type: "yng", text: "The author suggests online learning will replace traditional education.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Psychology of Habits",
      wordCount: 800,
      text: `Habits shape much of human behavior, from morning routines to how we spend our free time. Understanding the psychology behind habit formation can help us build beneficial habits and break destructive ones.

Psychologists describe habits as automatic behaviors triggered by contextual cues. Unlike deliberate decisions, habits require little conscious thought. The brain creates these shortcuts to conserve mental energy for more complex tasks.

The habit loop, identified by researchers, consists of three components: cue, routine, and reward. A cue triggers the behavior, the routine is the behavior itself, and the reward reinforces the pattern. Understanding this loop is key to changing habits.

Forming new habits requires consistent repetition. Studies suggest that habits take an average of 66 days to form, though this varies widely depending on the complexity of the behavior. Starting small and linking new behaviors to existing routines increases success.

Breaking bad habits is notoriously difficult because the neural pathways remain even after we stop the behavior. Rather than trying to eliminate habits, experts recommend replacing them with alternative behaviors that satisfy the same underlying need.

Environment plays a crucial role in habit formation. Designing spaces that make good habits easier and bad habits harder can be more effective than relying on willpower alone. For example, keeping healthy snacks visible while hiding junk food influences eating behavior.

Social context also matters. We tend to adopt habits from people around us. Surrounding ourselves with people who have habits we admire can facilitate positive change.

The key insight from habit research is that willpower is limited. Successful behavior change relies more on restructuring environments and routines than on constant self-discipline.`,
      questions: [
        { id: 14, type: "tfng", text: "Habits require significant conscious thought.", answer: "False" },
        { id: 15, type: "tfng", text: "The habit loop consists of three components.", answer: "True" },
        { id: 16, type: "tfng", text: "Habits typically form within one week.", answer: "False" },
        { id: 17, type: "tfng", text: "Breaking bad habits is easy because neural pathways disappear.", answer: "False" },
        { id: 18, type: "mcq", text: "What are the three components of the habit loop?", options: ["A. Start, middle, end", "B. Cue, routine, reward", "C. Trigger, action, result", "D. Input, process, output"], answer: "B" },
        { id: 19, type: "mcq", text: "How many days on average do habits take to form?", options: ["A. 21 days", "B. 7 days", "C. 66 days", "D. 30 days"], answer: "C" },
        { id: 20, type: "mcq", text: "What do experts recommend instead of eliminating bad habits?", options: ["A. Using medication", "B. Replacing them with alternatives", "C. Ignoring them", "D. Punishing yourself"], answer: "B" },
        { id: 21, type: "short", text: "What does the brain conserve by creating habit shortcuts?", answer: "mental energy" },
        { id: 22, type: "short", text: "What is limited according to habit research?", answer: "willpower" },
        { id: 23, type: "mcq", text: "What influences eating behavior according to the passage?", options: ["A. Meal timing", "B. Food visibility", "C. Eating speed", "D. Plate size"], answer: "B" },
        { id: 24, type: "tfng", text: "Social context has no effect on habits.", answer: "False" },
        { id: 25, type: "short", text: "What role does environment play in habit formation?", answer: "crucial" },
        { id: 26, type: "yng", text: "The author suggests willpower alone ensures success.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Silk Road Trade Network",
      wordCount: 830,
      text: `The Silk Road was a network of trade routes connecting East and West for centuries. This ancient highway facilitated not just the exchange of goods but also the transmission of ideas, religions, and technologies across vast distances.

The Silk Road earned its name from the lucrative Chinese silk trade, though many other commodities traveled these routes. Spices, precious stones, metals, and textiles moved westward, while wool, gold, and silver flowed east. The trade made fortunes for merchants brave enough to undertake the dangerous journeys.

The routes passed through challenging terrain including deserts, mountain ranges, and steppes. Camel caravans were essential for crossing the harsh landscapes. Oasis towns along the routes provided vital rest stops and became prosperous trading centers.

Cultural exchange was perhaps the Silk Road's most lasting legacy. Buddhism spread from India to China and beyond. Islam later traveled eastward along these same routes. Art styles, musical instruments, and scientific knowledge crossed cultural boundaries.

Technology transfer transformed societies on both ends of the road. Papermaking moved from China westward, eventually reaching Europe. Gunpowder followed centuries later. In exchange, Western innovations including glassmaking techniques traveled east.

Disease also traveled the Silk Road. The Black Death is believed to have spread to Europe along trade routes from Central Asia, demonstrating the interconnected nature of the medieval world.

The Silk Road declined with the rise of maritime trade routes in the 15th century. Sea travel proved faster and could carry larger volumes of goods. However, the legacy of cross-cultural exchange established by the Silk Road continues to shape our connected world today.`,
      questions: [
        { id: 27, type: "tfng", text: "The Silk Road only transported silk.", answer: "False" },
        { id: 28, type: "tfng", text: "Buddhism spread along the Silk Road.", answer: "True" },
        { id: 29, type: "tfng", text: "The Silk Road crossed easy terrain.", answer: "False" },
        { id: 30, type: "tfng", text: "Maritime routes eventually replaced the Silk Road.", answer: "True" },
        { id: 31, type: "mcq", text: "What animals were essential for Silk Road travel?", options: ["A. Horses", "B. Camels", "C. Donkeys", "D. Elephants"], answer: "B" },
        { id: 32, type: "mcq", text: "What spread from India to China via the Silk Road?", options: ["A. Islam", "B. Christianity", "C. Buddhism", "D. Confucianism"], answer: "C" },
        { id: 33, type: "mcq", text: "What disease spread along the Silk Road to Europe?", options: ["A. Smallpox", "B. Malaria", "C. The Black Death", "D. Cholera"], answer: "C" },
        { id: 34, type: "short", text: "What technology moved from China westward?", answer: "papermaking" },
        { id: 35, type: "short", text: "What type of towns served as rest stops?", answer: "oasis" },
        { id: 36, type: "mcq", text: "When did the Silk Road decline?", options: ["A. 10th century", "B. 15th century", "C. 18th century", "D. 5th century"], answer: "B" },
        { id: 37, type: "tfng", text: "Gunpowder moved from West to East.", answer: "False" },
        { id: 38, type: "short", text: "What Western technique traveled east?", answer: "glassmaking" },
        { id: 39, type: "yng", text: "The author suggests the Silk Road only affected ancient times.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates trade routes can spread disease.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R5 - FOUNDATION (Band 6.0-6.5) - Nutrition, Social Media, Coral
// ============================================================
{
  id: "R5",
  level: "Foundation",
  bandTarget: "6.0-6.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "Understanding Human Nutrition",
      wordCount: 810,
      text: `Proper nutrition is fundamental to human health, providing the energy and building blocks our bodies need to function. Despite abundant food in many parts of the world, nutritional challenges persist, from deficiencies to overconsumption.

Macronutrients—carbohydrates, proteins, and fats—provide energy measured in calories. Carbohydrates serve as the body's primary fuel source. Proteins build and repair tissues. Fats, despite their negative reputation, are essential for hormone production and nutrient absorption.

Micronutrients—vitamins and minerals—are needed in smaller amounts but remain critical for health. Vitamin D supports bone health and immune function. Iron carries oxygen in the blood. Deficiencies in these nutrients can cause serious health problems even when calorie intake is adequate.

The concept of a balanced diet has evolved over time. Early nutrition science focused on preventing deficiency diseases like scurvy and rickets. Modern research emphasizes the role of diet in chronic diseases including heart disease, diabetes, and certain cancers.

Processed foods present particular challenges. While food processing extends shelf life and improves convenience, heavily processed foods often contain excess sugar, salt, and unhealthy fats while lacking fiber and essential nutrients.

Cultural and economic factors strongly influence dietary patterns. Traditional diets, such as the Mediterranean diet, often provide excellent nutrition. However, globalization has spread Western dietary patterns, contributing to rising obesity rates worldwide.

Nutrition science continues to evolve, sometimes with conflicting recommendations. What remains consistent is that diets rich in vegetables, fruits, whole grains, and lean proteins support better health outcomes than those dominated by processed foods and added sugars.`,
      questions: [
        { id: 1, type: "tfng", text: "Macronutrients include vitamins and minerals.", answer: "False" },
        { id: 2, type: "tfng", text: "Fats are essential for hormone production.", answer: "True" },
        { id: 3, type: "tfng", text: "Early nutrition science focused on chronic diseases.", answer: "False" },
        { id: 4, type: "tfng", text: "Processed foods typically contain excess sugar and salt.", answer: "True" },
        { id: 5, type: "mcq", text: "What is the body's primary fuel source?", options: ["A. Protein", "B. Fat", "C. Carbohydrates", "D. Vitamins"], answer: "C" },
        { id: 6, type: "mcq", text: "What micronutrient supports bone health?", options: ["A. Iron", "B. Vitamin D", "C. Protein", "D. Carbohydrates"], answer: "B" },
        { id: 7, type: "mcq", text: "What does iron do in the body?", options: ["A. Builds muscles", "B. Carries oxygen in blood", "C. Stores energy", "D. Digests food"], answer: "B" },
        { id: 8, type: "short", text: "Name one deficiency disease mentioned.", answer: "scurvy" },
        { id: 9, type: "short", text: "What type of diet is mentioned as providing excellent nutrition?", answer: "Mediterranean" },
        { id: 10, type: "mcq", text: "What has contributed to rising global obesity rates?", options: ["A. Exercise trends", "B. Traditional diets", "C. Western dietary patterns", "D. Vitamin supplements"], answer: "C" },
        { id: 11, type: "tfng", text: "Nutrition recommendations have remained unchanged.", answer: "False" },
        { id: 12, type: "short", text: "What do proteins do in the body?", answer: "build and repair tissues" },
        { id: 13, type: "yng", text: "The author suggests processed foods are optimal for health.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "Social Media and Society",
      wordCount: 820,
      text: `Social media has fundamentally changed how humans communicate, share information, and form communities. Platforms like Facebook, Twitter, and Instagram connect billions of users worldwide, creating unprecedented opportunities and challenges.

The rise of social media began in the early 2000s with platforms like MySpace and LinkedIn. Facebook, launched in 2004, rapidly grew to become the dominant platform. Twitter introduced microblogging in 2006, while Instagram brought photo-sharing to the mainstream in 2010.

Social media offers numerous benefits. It enables instant communication across distances, helps people maintain relationships, and provides platforms for marginalized voices. Social movements have organized effectively through these platforms, demonstrating their power for social change.

However, concerns have grown about negative effects. Studies link excessive social media use to anxiety, depression, and sleep problems, particularly among young people. The platforms can create echo chambers that reinforce existing beliefs and spread misinformation.

Privacy issues present another challenge. Users often share personal information without fully understanding how it may be used. Data breaches and targeted advertising raise questions about digital privacy rights.

The business model of social media, based on capturing attention to sell advertising, incentivizes engagement over accuracy or wellbeing. Algorithmic feeds prioritize content that generates strong emotional reactions, potentially amplifying divisive content.

Governments worldwide are grappling with how to regulate social media. Questions arise about content moderation, data protection, and the power of tech companies. Finding the right balance between free expression and preventing harm remains challenging.

Despite criticisms, social media has become integral to modern life. The future likely holds continued evolution as both platforms and regulations adapt to address emerging concerns.`,
      questions: [
        { id: 14, type: "tfng", text: "Facebook was the first social media platform.", answer: "False" },
        { id: 15, type: "tfng", text: "Social media can help social movements organize.", answer: "True" },
        { id: 16, type: "tfng", text: "Social media has no negative effects on mental health.", answer: "False" },
        { id: 17, type: "tfng", text: "Echo chambers can spread misinformation.", answer: "True" },
        { id: 18, type: "mcq", text: "When was Facebook launched?", options: ["A. 2000", "B. 2004", "C. 2006", "D. 2010"], answer: "B" },
        { id: 19, type: "mcq", text: "What did Twitter introduce?", options: ["A. Photo-sharing", "B. Video calls", "C. Microblogging", "D. Professional networking"], answer: "C" },
        { id: 20, type: "mcq", text: "What drives social media business models?", options: ["A. Subscription fees", "B. Capturing attention for advertising", "C. Government funding", "D. Product sales"], answer: "B" },
        { id: 21, type: "short", text: "What mental health issues are linked to excessive social media use? (Name ONE)", answer: "anxiety" },
        { id: 22, type: "short", text: "When was Instagram launched?", answer: "2010" },
        { id: 23, type: "mcq", text: "What do algorithmic feeds prioritize?", options: ["A. Accurate information", "B. Old content", "C. Content generating emotional reactions", "D. Educational material"], answer: "C" },
        { id: 24, type: "tfng", text: "Data privacy on social media is not a concern.", answer: "False" },
        { id: 25, type: "short", text: "What type of advertising concerns are raised about social media?", answer: "targeted" },
        { id: 26, type: "yng", text: "The author suggests social media will disappear.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "Coral Reef Ecosystems",
      wordCount: 800,
      text: `Coral reefs are among Earth's most diverse and valuable ecosystems, supporting approximately 25% of all marine species despite covering less than 1% of the ocean floor. These underwater structures, built by tiny coral polyps over thousands of years, face unprecedented threats from human activities.

Coral reefs exist in warm, shallow waters in tropical regions. The coral animals live in symbiosis with algae called zooxanthellae, which provide nutrients through photosynthesis and give corals their vibrant colors. This relationship is sensitive to environmental changes.

The biodiversity of coral reefs rivals that of tropical rainforests. Fish, invertebrates, and other organisms depend on reefs for food and shelter. Many commercially important fish species spend part of their lives in reef ecosystems.

Reefs provide valuable services to human communities. They protect coastlines from storms and erosion. They support fishing industries that feed millions of people. Reef tourism generates billions of dollars annually. Compounds from reef organisms show promise in medical research.

Climate change poses the greatest threat to coral reefs. Rising ocean temperatures cause coral bleaching, where stressed corals expel their symbiotic algae and turn white. Prolonged bleaching leads to coral death. Ocean acidification, caused by absorbed carbon dioxide, makes it harder for corals to build their calcium carbonate skeletons.

Local threats compound climate impacts. Pollution, overfishing, and destructive fishing practices damage reefs. Coastal development destroys reef habitats. Runoff carrying sediments and nutrients degrades water quality.

Conservation efforts include marine protected areas, restoration projects, and research into heat-resistant coral varieties. However, ultimately protecting reefs requires addressing climate change at a global scale. Without action, scientists warn that most reefs could disappear within decades.`,
      questions: [
        { id: 27, type: "tfng", text: "Coral reefs cover more than 10% of the ocean floor.", answer: "False" },
        { id: 28, type: "tfng", text: "Coral reefs support about 25% of marine species.", answer: "True" },
        { id: 29, type: "tfng", text: "Coral bleaching is caused by cold temperatures.", answer: "False" },
        { id: 30, type: "tfng", text: "Coral reefs protect coastlines from storms.", answer: "True" },
        { id: 31, type: "mcq", text: "What gives corals their color?", options: ["A. Minerals", "B. Zooxanthellae algae", "C. The water", "D. Sunlight reflection"], answer: "B" },
        { id: 32, type: "mcq", text: "What happens during coral bleaching?", options: ["A. Corals grow faster", "B. Corals expel their algae", "C. Corals reproduce", "D. Corals move locations"], answer: "B" },
        { id: 33, type: "mcq", text: "What makes it harder for corals to build skeletons?", options: ["A. Ocean acidification", "B. Warm water", "C. Too much sunlight", "D. Fish activity"], answer: "A" },
        { id: 34, type: "short", text: "What type of waters do coral reefs exist in?", answer: "warm shallow" },
        { id: 35, type: "short", text: "What are coral structures built by?", answer: "polyps" },
        { id: 36, type: "mcq", text: "What is NOT mentioned as a local threat to reefs?", options: ["A. Pollution", "B. Volcanic activity", "C. Overfishing", "D. Coastal development"], answer: "B" },
        { id: 37, type: "tfng", text: "Reef tourism generates billions of dollars annually.", answer: "True" },
        { id: 38, type: "short", text: "What do zooxanthellae provide to corals?", answer: "nutrients" },
        { id: 39, type: "yng", text: "The author suggests coral reefs are not in danger.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates global action is needed to save reefs.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R6 - FOUNDATION (Band 6.0-6.5) - Architecture, Water, Money
// ============================================================
{
  id: "R6",
  level: "Foundation",
  bandTarget: "6.0-6.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "Roman Architecture and Engineering",
      wordCount: 820,
      text: `The Romans were master builders whose architectural innovations continue to influence construction today. From roads to aqueducts to monumental buildings, Roman engineering achievements demonstrated both practical skill and artistic vision.

Roman concrete, known as opus caementicium, was a revolutionary material. Unlike modern concrete, it used volcanic ash called pozzolana, which created an exceptionally durable substance. Many Roman structures have survived two thousand years, while modern concrete often deteriorates within decades.

The arch was central to Roman construction. While not invented by the Romans, they perfected and expanded its use. Arches distributed weight efficiently, allowing the construction of bridges, aqueducts, and large interior spaces without the massive columns required by earlier building methods.

The Colosseum exemplifies Roman engineering prowess. This massive amphitheater could seat 50,000 spectators and featured sophisticated systems for managing crowds. An underground network of chambers and passages allowed animals and gladiators to appear dramatically in the arena.

Roman roads connected the empire, facilitating trade, military movement, and communication. Built with multiple layers including gravel, sand, and stone slabs, these roads were remarkably durable. The expression "all roads lead to Rome" reflects the network's extent.

Aqueducts brought fresh water to Roman cities, some spanning dozens of kilometers. The engineering precision required to maintain proper gradients over such distances was remarkable. Cities like Rome could support populations of over a million partly due to reliable water supply.

The Pantheon demonstrates Roman mastery of domed construction. Its unreinforced concrete dome remained the world's largest for over 1,300 years. The building's proportions and the oculus, a circular opening at the dome's apex, create striking light effects.

Roman architectural and engineering principles spread throughout their empire and were revived during the Renaissance, continuing to shape the built environment today.`,
      questions: [
        { id: 1, type: "tfng", text: "Romans invented the arch.", answer: "False" },
        { id: 2, type: "tfng", text: "Roman concrete used volcanic ash.", answer: "True" },
        { id: 3, type: "tfng", text: "The Colosseum could seat 100,000 spectators.", answer: "False" },
        { id: 4, type: "tfng", text: "Roman roads were built with multiple layers.", answer: "True" },
        { id: 5, type: "mcq", text: "What is pozzolana?", options: ["A. A type of stone", "B. Volcanic ash", "C. A construction tool", "D. A building style"], answer: "B" },
        { id: 6, type: "mcq", text: "What advantage did arches provide?", options: ["A. Decoration only", "B. Weight distribution", "C. Waterproofing", "D. Sound insulation"], answer: "B" },
        { id: 7, type: "mcq", text: "How long did the Pantheon's dome remain the world's largest?", options: ["A. 500 years", "B. 800 years", "C. Over 1,300 years", "D. 2,000 years"], answer: "C" },
        { id: 8, type: "short", text: "What is the name of Roman concrete?", answer: "opus caementicium" },
        { id: 9, type: "short", text: "What is the circular opening in the Pantheon's dome called?", answer: "oculus" },
        { id: 10, type: "mcq", text: "What did aqueducts bring to Roman cities?", options: ["A. Sewage removal", "B. Fresh water", "C. Heated air", "D. Trade goods"], answer: "B" },
        { id: 11, type: "tfng", text: "Modern concrete is more durable than Roman concrete.", answer: "False" },
        { id: 12, type: "short", text: "What period revived Roman architectural principles?", answer: "Renaissance" },
        { id: 13, type: "mcq", text: "What was beneath the Colosseum's arena?", options: ["A. Water tanks", "B. Chambers and passages", "C. Heating systems", "D. Nothing"], answer: "B" }
      ]
    },
    {
      id: "P2",
      title: "The Water Cycle",
      wordCount: 800,
      text: `The water cycle, also known as the hydrological cycle, describes the continuous movement of water through Earth's systems. This natural process distributes fresh water across the planet and is essential for all life.

Evaporation begins the cycle when heat from the sun transforms liquid water into water vapor. Oceans are the primary source, contributing about 90% of atmospheric moisture. Lakes, rivers, and even soil also release water vapor.

Plants contribute through transpiration, releasing water vapor from their leaves. A single large tree can transpire hundreds of liters daily. Together, evaporation and transpiration are sometimes called evapotranspiration.

Rising water vapor cools as it reaches higher altitudes. Cool air holds less moisture, causing vapor to condense into tiny droplets that form clouds. Different cloud types form at various altitudes and conditions.

Precipitation occurs when water droplets in clouds combine and become heavy enough to fall. Depending on temperature conditions, precipitation falls as rain, snow, sleet, or hail. Mountains often receive more precipitation as air rises and cools along their slopes.

Some precipitation infiltrates the ground, replenishing groundwater aquifers. Plants absorb water through their roots. Groundwater may remain underground for thousands of years before returning to the surface through springs or wells.

Runoff carries precipitation across land surfaces toward streams, rivers, and eventually oceans. Along the way, water may be stored in lakes and wetlands. Human activities including agriculture and urbanization significantly affect runoff patterns.

The water cycle connects all Earth's water reservoirs. Climate change is altering the cycle, intensifying droughts in some regions while increasing flooding in others. Understanding the water cycle is crucial for managing this vital resource.`,
      questions: [
        { id: 14, type: "tfng", text: "Oceans contribute about 50% of atmospheric moisture.", answer: "False" },
        { id: 15, type: "tfng", text: "Plants release water vapor through transpiration.", answer: "True" },
        { id: 16, type: "tfng", text: "Cool air can hold more moisture than warm air.", answer: "False" },
        { id: 17, type: "tfng", text: "Groundwater may remain underground for thousands of years.", answer: "True" },
        { id: 18, type: "mcq", text: "What is the combined term for evaporation and transpiration?", options: ["A. Precipitation", "B. Evapotranspiration", "C. Condensation", "D. Infiltration"], answer: "B" },
        { id: 19, type: "mcq", text: "Why do mountains often receive more precipitation?", options: ["A. They are closer to oceans", "B. Air rises and cools along slopes", "C. They have more vegetation", "D. They attract clouds magnetically"], answer: "B" },
        { id: 20, type: "mcq", text: "What percentage of atmospheric moisture comes from oceans?", options: ["A. 50%", "B. 70%", "C. About 90%", "D. 100%"], answer: "C" },
        { id: 21, type: "short", text: "What is another name for the water cycle?", answer: "hydrological cycle" },
        { id: 22, type: "short", text: "How much water can a large tree transpire daily?", answer: "hundreds of liters" },
        { id: 23, type: "mcq", text: "What does infiltration replenish?", options: ["A. Clouds", "B. Oceans", "C. Groundwater aquifers", "D. Rivers only"], answer: "C" },
        { id: 24, type: "tfng", text: "Human activities have no effect on runoff patterns.", answer: "False" },
        { id: 25, type: "short", text: "Name one form of precipitation besides rain.", answer: "snow" },
        { id: 26, type: "yng", text: "The author suggests climate change affects the water cycle.", answer: "Yes" }
      ]
    },
    {
      id: "P3",
      title: "The Evolution of Money",
      wordCount: 810,
      text: `Money has taken many forms throughout human history, evolving from simple barter to complex digital transactions. Understanding this evolution illuminates both economic principles and human social development.

Before money existed, people traded goods directly through barter. This system had obvious limitations: both parties needed to want what the other offered, and goods had to be divisible and transportable. Finding a "coincidence of wants" was often difficult.

Commodity money emerged as a solution. Items with intrinsic value—cattle, salt, shells, or precious metals—served as a medium of exchange. These commodities were widely accepted and could be stored for future transactions.

Metal coins appeared around 600 BCE in Lydia, present-day Turkey. Standardized weights and government stamps guaranteed their value. Coins spread rapidly throughout the ancient world, facilitating trade and economic growth.

Paper money originated in China during the Tang Dynasty. Initially, paper notes represented deposited coins and could be redeemed for metal. Eventually, governments issued paper currency backed by their authority rather than physical reserves.

Banking systems developed to manage money flows. Banks accepted deposits, made loans, and facilitated transfers. This created money beyond physical currency, as deposits could be used for payments without moving actual coins.

Credit and debit cards, introduced in the 20th century, further separated money from physical form. Electronic transfers became possible, moving enormous sums across the globe in seconds.

Today, cryptocurrencies represent the latest evolution. Bitcoin and similar digital currencies use blockchain technology to enable transactions without central banks or governments. Whether cryptocurrencies will achieve widespread adoption remains uncertain, but they demonstrate money's continuing evolution.`,
      questions: [
        { id: 27, type: "tfng", text: "Barter systems had no limitations.", answer: "False" },
        { id: 28, type: "tfng", text: "Metal coins first appeared in China.", answer: "False" },
        { id: 29, type: "tfng", text: "Paper money originated during the Tang Dynasty.", answer: "True" },
        { id: 30, type: "tfng", text: "Banks can create money through deposits and loans.", answer: "True" },
        { id: 31, type: "mcq", text: "Where did metal coins first appear?", options: ["A. China", "B. Rome", "C. Lydia", "D. Egypt"], answer: "C" },
        { id: 32, type: "mcq", text: "What is a 'coincidence of wants'?", options: ["A. Two people wanting the same thing", "B. Both parties wanting what the other offers", "C. Random economic events", "D. A type of currency"], answer: "B" },
        { id: 33, type: "mcq", text: "What technology do cryptocurrencies use?", options: ["A. Cloud computing", "B. Blockchain", "C. Artificial intelligence", "D. Traditional banking"], answer: "B" },
        { id: 34, type: "short", text: "Name one example of commodity money.", answer: "salt" },
        { id: 35, type: "short", text: "When did metal coins first appear? (Include BCE)", answer: "600 BCE" },
        { id: 36, type: "mcq", text: "What guaranteed the value of early coins?", options: ["A. Only their weight", "B. Standardized weights and government stamps", "C. The bank that issued them", "D. International agreements"], answer: "B" },
        { id: 37, type: "tfng", text: "Credit cards were introduced in the 19th century.", answer: "False" },
        { id: 38, type: "short", text: "What is the most famous cryptocurrency mentioned?", answer: "Bitcoin" },
        { id: 39, type: "yng", text: "The author is certain cryptocurrencies will be universally adopted.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates money continues to evolve.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R7 - FOUNDATION (Band 6.0-6.5) - Earthquakes, Photography, Decisions
// ============================================================
{
  id: "R7",
  level: "Foundation",
  bandTarget: "6.0-6.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "Understanding Earthquakes",
      wordCount: 820,
      text: `Earthquakes are among nature's most powerful and destructive forces. These sudden ground movements result from the release of energy accumulated in Earth's crust, affecting millions of people each year worldwide.

The Earth's outer layer consists of tectonic plates that float on the semi-fluid mantle below. These plates are constantly moving, though typically at speeds of only a few centimeters per year. Where plates meet, stress accumulates along fault lines.

When accumulated stress exceeds the strength of rocks, sudden movement occurs along faults. This releases energy in the form of seismic waves that travel through the Earth, causing the shaking we experience as earthquakes.

The Richter scale, developed in 1935, measures earthquake magnitude based on seismic wave amplitude. Each whole number increase represents a tenfold increase in measured amplitude and approximately 31 times more energy release. The moment magnitude scale has largely replaced Richter for large earthquakes.

Earthquake effects depend on magnitude, depth, distance from the epicenter, and local geology. Soft soils amplify shaking, while solid bedrock reduces it. Secondary effects include landslides, tsunamis, and fires from broken gas lines.

Building codes in earthquake-prone regions require structures to withstand seismic forces. Modern techniques include flexible foundations, reinforced concrete, and cross-bracing. Retrofitting older buildings improves safety but remains expensive.

Prediction remains elusive despite decades of research. Scientists can identify high-risk areas and estimate long-term probabilities, but cannot specify when earthquakes will strike. Early warning systems provide seconds to minutes of notice once an earthquake begins.

Preparedness saves lives. Securing heavy objects, identifying safe spots, and maintaining emergency supplies reduce earthquake risks. Public education and regular drills improve response when earthquakes occur.`,
      questions: [
        { id: 1, type: "tfng", text: "Tectonic plates move several meters per year.", answer: "False" },
        { id: 2, type: "tfng", text: "The Richter scale was developed in 1935.", answer: "True" },
        { id: 3, type: "tfng", text: "Scientists can precisely predict when earthquakes will occur.", answer: "False" },
        { id: 4, type: "tfng", text: "Soft soils reduce earthquake shaking.", answer: "False" },
        { id: 5, type: "mcq", text: "What causes earthquakes?", options: ["A. Weather patterns", "B. Release of energy along faults", "C. Underground rivers", "D. Volcanic eruptions only"], answer: "B" },
        { id: 6, type: "mcq", text: "How much more energy is released with each Richter scale number?", options: ["A. 10 times", "B. 31 times", "C. 100 times", "D. 2 times"], answer: "B" },
        { id: 7, type: "mcq", text: "What secondary effect is NOT mentioned?", options: ["A. Landslides", "B. Tsunamis", "C. Hurricanes", "D. Fires"], answer: "C" },
        { id: 8, type: "short", text: "What are tectonic plates floating on?", answer: "mantle" },
        { id: 9, type: "short", text: "What type of rock reduces earthquake shaking?", answer: "bedrock" },
        { id: 10, type: "mcq", text: "What scale has largely replaced Richter for large earthquakes?", options: ["A. Seismic scale", "B. Moment magnitude scale", "C. Intensity scale", "D. Power scale"], answer: "B" },
        { id: 11, type: "tfng", text: "Early warning systems can provide days of advance notice.", answer: "False" },
        { id: 12, type: "short", text: "What accumulates along fault lines?", answer: "stress" },
        { id: 13, type: "yng", text: "The author suggests preparedness can save lives.", answer: "Yes" }
      ]
    },
    {
      id: "P2",
      title: "The Art and Science of Photography",
      wordCount: 810,
      text: `Photography has transformed how humanity records and shares visual information. From its invention in the 19th century to today's digital age, this medium combines artistic expression with scientific principles.

The word photography means "drawing with light," aptly describing its fundamental process. Early pioneers like Nicéphore Niépce and Louis Daguerre developed methods to permanently capture images formed by light passing through a lens.

The daguerreotype, introduced in 1839, required long exposures but produced remarkably detailed images on silver-plated copper. Within decades, faster processes and more portable equipment made photography accessible to amateurs.

Film photography dominated for over a century. Light-sensitive chemicals on film reacted to exposure, creating a negative image later developed into prints. Professional photographers mastered complex techniques involving aperture, shutter speed, and film sensitivity.

Digital photography, emerging in the 1990s, revolutionized the field. Electronic sensors replaced film, allowing instant review and unlimited shots. Digital editing software expanded creative possibilities while challenging traditional notions of photographic truth.

Smartphone cameras have made photography ubiquitous. Billions of photos are taken daily, documenting everything from historic events to everyday meals. Social media platforms have become the primary venues for sharing images.

Despite these technological changes, fundamental principles remain constant. Composition, lighting, and timing continue to distinguish memorable photographs from snapshots. Understanding how light interacts with subjects remains essential.

Photography continues to evolve with artificial intelligence, computational photography, and immersive technologies. Yet its core purpose—capturing moments and sharing perspectives—remains unchanged since the first successful photograph nearly two centuries ago.`,
      questions: [
        { id: 14, type: "tfng", text: "Photography means 'drawing with light'.", answer: "True" },
        { id: 15, type: "tfng", text: "The daguerreotype was introduced in the 20th century.", answer: "False" },
        { id: 16, type: "tfng", text: "Digital photography allows instant review of images.", answer: "True" },
        { id: 17, type: "tfng", text: "Smartphone cameras have made photography less common.", answer: "False" },
        { id: 18, type: "mcq", text: "When was the daguerreotype introduced?", options: ["A. 1800", "B. 1839", "C. 1900", "D. 1990"], answer: "B" },
        { id: 19, type: "mcq", text: "What replaced film in digital cameras?", options: ["A. Paper", "B. Electronic sensors", "C. Silver plates", "D. Chemicals"], answer: "B" },
        { id: 20, type: "mcq", text: "What did daguerreotypes require?", options: ["A. Long exposures", "B. No light", "C. Digital processing", "D. Color film"], answer: "A" },
        { id: 21, type: "short", text: "Name one pioneer of photography mentioned.", answer: "Niépce" },
        { id: 22, type: "short", text: "What did daguerreotypes use as a surface?", answer: "silver-plated copper" },
        { id: 23, type: "mcq", text: "What continues to distinguish memorable photographs?", options: ["A. Camera cost", "B. Composition, lighting, and timing", "C. Filter use", "D. Photo editing only"], answer: "B" },
        { id: 24, type: "tfng", text: "Digital photography began in the 1970s.", answer: "False" },
        { id: 25, type: "short", text: "Where are images primarily shared today?", answer: "social media" },
        { id: 26, type: "yng", text: "The author suggests photography's purpose has fundamentally changed.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Psychology of Decision Making",
      wordCount: 800,
      text: `Every day, humans make thousands of decisions, from trivial choices about what to eat to life-changing determinations about careers and relationships. Understanding how we make decisions reveals both the power and limitations of human cognition.

Psychologists distinguish between two decision-making systems. System 1 operates automatically and quickly, relying on intuition and pattern recognition. System 2 is deliberate and analytical, requiring conscious effort. Most daily decisions use System 1, while complex problems engage System 2.

Cognitive biases systematically influence decisions. Confirmation bias leads people to seek information supporting existing beliefs. Anchoring causes excessive reliance on initial information. The availability heuristic makes easily recalled events seem more likely.

Emotions significantly affect decisions, sometimes helpfully and sometimes not. Fear can prevent dangerous choices but may also cause excessive caution. Excitement may encourage risk-taking. Research shows that people often make poorer decisions when experiencing strong emotions.

Decision fatigue occurs when making many choices depletes mental resources. Studies find that judges make more lenient decisions earlier in the day and more conservative ones as fatigue sets in. Simplifying routine choices preserves mental energy for important decisions.

Group decision-making introduces additional dynamics. Groups can pool knowledge and catch individual errors, but also suffer from groupthink, where pressure for consensus suppresses dissent. Effective groups encourage diverse perspectives and constructive disagreement.

Improving decision-making involves recognizing our limitations. Slowing down, seeking diverse viewpoints, and challenging assumptions can counteract biases. Decision frameworks and checklists help ensure important factors are considered.

Understanding decision psychology also helps in designing systems. Choice architecture—how options are presented—significantly influences outcomes. Default options, simplification, and timely prompts can improve decisions without restricting freedom.`,
      questions: [
        { id: 27, type: "tfng", text: "System 1 thinking is slow and deliberate.", answer: "False" },
        { id: 28, type: "tfng", text: "Confirmation bias involves seeking supporting information.", answer: "True" },
        { id: 29, type: "tfng", text: "Emotions never affect decision-making.", answer: "False" },
        { id: 30, type: "tfng", text: "Groups always make better decisions than individuals.", answer: "False" },
        { id: 31, type: "mcq", text: "What causes anchoring bias?", options: ["A. Emotional decisions", "B. Excessive reliance on initial information", "C. Group pressure", "D. Decision fatigue"], answer: "B" },
        { id: 32, type: "mcq", text: "What happens during decision fatigue?", options: ["A. Better decisions", "B. Mental resources are depleted", "C. Faster thinking", "D. Increased creativity"], answer: "B" },
        { id: 33, type: "mcq", text: "What is groupthink?", options: ["A. Efficient group processing", "B. Pressure for consensus suppressing dissent", "C. Shared intuition", "D. Better decision quality"], answer: "B" },
        { id: 34, type: "short", text: "Which system relies on intuition?", answer: "System 1" },
        { id: 35, type: "short", text: "What heuristic makes easily recalled events seem more likely?", answer: "availability" },
        { id: 36, type: "mcq", text: "What is choice architecture?", options: ["A. Building design", "B. How options are presented", "C. Computer programming", "D. Group structure"], answer: "B" },
        { id: 37, type: "tfng", text: "Most daily decisions use System 2.", answer: "False" },
        { id: 38, type: "short", text: "What helps ensure important factors are considered?", answer: "checklists" },
        { id: 39, type: "yng", text: "The author suggests humans make perfect decisions.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates decision quality can be improved.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R8 - INTERMEDIATE (Band 6.5-7.0) - AI Healthcare, Coasts, Neuroscience
// ============================================================
{
  id: "R8",
  level: "Intermediate",
  bandTarget: "6.5-7.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "Artificial Intelligence in Healthcare",
      wordCount: 880,
      text: `Artificial intelligence is rapidly transforming healthcare delivery, from diagnosis to treatment planning to drug discovery. While the technology offers tremendous potential benefits, it also raises significant ethical and practical concerns that healthcare systems must address.

Machine learning algorithms excel at pattern recognition, making them particularly valuable for analyzing medical images. AI systems have demonstrated diagnostic accuracy comparable to or exceeding human specialists in detecting certain conditions from X-rays, MRIs, and pathology slides. In some studies, AI detected early-stage cancers that human radiologists missed.

Beyond imaging, AI applications span healthcare broadly. Natural language processing extracts useful information from clinical notes. Predictive models identify patients at high risk for readmission or deterioration. Robot-assisted surgery offers precision beyond human capability. Virtual health assistants provide preliminary triage and health information.

Drug discovery represents a particularly promising application. Traditional drug development takes over a decade and costs billions of dollars with high failure rates. AI can accelerate this process by predicting which molecular structures might prove effective, identifying potential drug interactions, and optimizing clinical trial designs.

However, AI in healthcare faces significant challenges. Training data may reflect historical biases, potentially leading to disparities in care. An algorithm trained primarily on data from one demographic group may perform poorly for others. Ensuring fairness across populations requires careful attention to data collection and algorithm validation.

The "black box" nature of many AI systems poses transparency challenges. When algorithms make recommendations affecting patient care, clinicians need to understand the reasoning. Explainable AI research aims to make machine learning decisions more interpretable, but progress has been incremental.

Regulatory frameworks struggle to keep pace with rapidly evolving technology. Traditional medical device approval processes assume fixed products, while AI systems may continuously learn and change. Determining liability when AI contributes to medical errors remains legally uncertain.

Integration into clinical workflows presents practical challenges. Healthcare professionals need training to effectively use AI tools. Systems must integrate with existing electronic health records. Workflow disruptions can reduce efficiency even when AI improves outcomes.

Despite these challenges, healthcare AI continues advancing rapidly. The technology's potential to improve outcomes while reducing costs makes its eventual widespread adoption likely. The key lies in developing AI responsibly, ensuring benefits are distributed equitably while minimizing risks.`,
      questions: [
        { id: 1, type: "tfng", text: "AI has never outperformed human specialists in diagnosis.", answer: "False" },
        { id: 2, type: "tfng", text: "Training data biases can lead to disparities in AI healthcare.", answer: "True" },
        { id: 3, type: "tfng", text: "Traditional drug development is fast and inexpensive.", answer: "False" },
        { id: 4, type: "tfng", text: "Regulatory frameworks have fully adapted to AI technology.", answer: "False" },
        { id: 5, type: "mcq", text: "What makes AI valuable for medical imaging?", options: ["A. Low cost", "B. Pattern recognition ability", "C. Speed alone", "D. Simple programming"], answer: "B" },
        { id: 6, type: "mcq", text: "What is a 'black box' problem in AI?", options: ["A. Physical storage", "B. Lack of transparency in decision-making", "C. Power consumption", "D. Data encryption"], answer: "B" },
        { id: 7, type: "mcq", text: "How long does traditional drug development typically take?", options: ["A. 2-3 years", "B. 5 years", "C. Over a decade", "D. 6 months"], answer: "C" },
        { id: 8, type: "short", text: "What type of processing extracts information from clinical notes?", answer: "natural language processing" },
        { id: 9, type: "short", text: "What does explainable AI research aim to improve?", answer: "interpretability" },
        { id: 10, type: "mcq", text: "What is NOT mentioned as an AI healthcare application?", options: ["A. Image analysis", "B. Drug discovery", "C. Surgery assistance", "D. Physical therapy"], answer: "D" },
        { id: 11, type: "tfng", text: "AI systems in healthcare never change after deployment.", answer: "False" },
        { id: 12, type: "short", text: "What must AI systems integrate with?", answer: "electronic health records" },
        { id: 13, type: "yng", text: "The author believes AI in healthcare should be abandoned.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "Climate Change and Coastal Communities",
      wordCount: 860,
      text: `Coastal communities worldwide face mounting challenges from climate change. Rising seas, intensifying storms, and shifting ecosystems threaten both infrastructure and livelihoods, requiring unprecedented adaptation efforts.

Sea level rise poses the most direct threat. Thermal expansion of warming oceans and melting ice sheets have already raised global mean sea level by about 20 centimeters since 1900. Current projections suggest an additional 30 to 100 centimeters by 2100, depending on emissions trajectories. Some low-lying island nations face existential threats from even modest increases.

Storm surge impacts are amplified by higher baseline sea levels. When hurricanes and typhoons make landfall, elevated seas allow waves to reach further inland. Storm intensity may also increase as warming oceans provide more energy to fuel cyclones. Coastal flooding during storms affects millions of people annually.

Erosion reshapes coastlines as seas rise and storms intensify. Beaches that provide recreation and coastal protection narrow or disappear. Cliffs collapse as wave action undercuts their bases. Hard infrastructure like seawalls can protect specific areas but may accelerate erosion elsewhere.

Saltwater intrusion threatens freshwater supplies in coastal areas. As seas rise, saltwater penetrates further into aquifers and estuaries. Agricultural lands become too saline for traditional crops. Water treatment costs increase as source water quality degrades.

Coastal ecosystems are transforming rapidly. Wetlands that buffer storms and support fisheries cannot migrate inland fast enough as seas rise. Coral reefs face bleaching from warming waters and acidification from absorbed carbon dioxide. Changes in ocean chemistry and temperature alter fish distributions.

Adaptation strategies vary based on resources and circumstances. Wealthy communities may invest in seawalls, beach nourishment, and building elevation. Managed retreat—relocating away from vulnerable areas—is increasingly discussed though politically difficult. Natural solutions like wetland restoration provide multiple benefits but require space.

Climate justice concerns arise as impacts fall disproportionately on those least responsible for emissions and least able to adapt. Developing nations and marginalized communities within wealthy countries often face the greatest risks with the fewest resources.`,
      questions: [
        { id: 14, type: "tfng", text: "Sea levels have risen about 20 centimeters since 1900.", answer: "True" },
        { id: 15, type: "tfng", text: "Seawalls prevent erosion everywhere equally.", answer: "False" },
        { id: 16, type: "tfng", text: "Coral reefs benefit from warming waters.", answer: "False" },
        { id: 17, type: "tfng", text: "Managed retreat is politically easy to implement.", answer: "False" },
        { id: 18, type: "mcq", text: "What causes sea level rise?", options: ["A. Thermal expansion and ice melt", "B. Underwater volcanoes", "C. Decreased rainfall", "D. Tectonic movement"], answer: "A" },
        { id: 19, type: "mcq", text: "What threatens freshwater supplies in coastal areas?", options: ["A. Pollution only", "B. Saltwater intrusion", "C. Overfishing", "D. Industrial waste"], answer: "B" },
        { id: 20, type: "mcq", text: "What projected sea level rise is mentioned for 2100?", options: ["A. 5-10 cm", "B. 30-100 cm", "C. 200-300 cm", "D. No change"], answer: "B" },
        { id: 21, type: "short", text: "What provides energy to fuel stronger storms?", answer: "warming oceans" },
        { id: 22, type: "short", text: "What type of solutions include wetland restoration?", answer: "natural" },
        { id: 23, type: "mcq", text: "What happens to wetlands as seas rise?", options: ["A. They expand", "B. Cannot migrate fast enough", "C. They become forests", "D. They are unaffected"], answer: "B" },
        { id: 24, type: "tfng", text: "Climate impacts affect all communities equally.", answer: "False" },
        { id: 25, type: "short", text: "What process makes agricultural lands too saline?", answer: "saltwater intrusion" },
        { id: 26, type: "yng", text: "The author suggests climate justice is irrelevant.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "Neuroscience and Learning",
      wordCount: 850,
      text: `Advances in neuroscience are reshaping our understanding of how humans learn, with significant implications for education and training. Brain imaging and cognitive research reveal mechanisms underlying memory formation, skill acquisition, and knowledge transfer.

The brain exhibits remarkable plasticity—the ability to reorganize neural connections in response to experience. This neuroplasticity underlies all learning, from infant language acquisition to adult skill development. Contrary to earlier beliefs, the brain remains plastic throughout life, though the degree diminishes with age.

Memory formation involves multiple stages and brain regions. Working memory, managed largely by the prefrontal cortex, holds information temporarily for immediate use. Long-term memory consolidation, involving the hippocampus, transfers selected information to distributed cortical storage during sleep and rest.

Different types of learning engage distinct neural systems. Declarative learning of facts and concepts relies heavily on hippocampal-cortical interactions. Procedural learning of skills involves the basal ganglia and cerebellum. Emotional learning engages the amygdala, creating strong memories of significant events.

Attention plays a crucial role in learning. The brain cannot process all incoming information and must select what to encode. Focused attention strengthens memory formation while divided attention impairs it. This has practical implications for learning environments and multitasking.

Spacing and retrieval enhance learning more than massed practice and passive review. Distributed practice over time creates stronger memories than cramming. Actively retrieving information strengthens neural pathways more effectively than simply re-reading material. Testing, rather than just study, improves long-term retention.

Sleep is essential for memory consolidation. During sleep, the brain replays and organizes new learning, integrating it with existing knowledge. Sleep deprivation impairs both new learning and consolidation of previous study.

Individual differences in learning reflect variations in brain structure and function. Some differences are innate while others result from experience. Understanding these differences can help personalize instruction, though neuroscience cannot yet prescribe specific teaching methods for individuals.

The application of neuroscience to education remains an evolving field. While certain principles are well established, many educational neuromyths persist. Claims that people are "left-brained" or "right-brained" learners or that we use only 10% of our brains lack scientific support. Critical evaluation of neuroscience claims remains important.`,
      questions: [
        { id: 27, type: "tfng", text: "The brain loses all plasticity after childhood.", answer: "False" },
        { id: 28, type: "tfng", text: "Sleep is important for memory consolidation.", answer: "True" },
        { id: 29, type: "tfng", text: "Cramming is the most effective study method.", answer: "False" },
        { id: 30, type: "tfng", text: "The left-brain/right-brain learner concept is scientifically proven.", answer: "False" },
        { id: 31, type: "mcq", text: "What brain region manages working memory?", options: ["A. Hippocampus", "B. Prefrontal cortex", "C. Amygdala", "D. Cerebellum"], answer: "B" },
        { id: 32, type: "mcq", text: "What type of learning involves the amygdala?", options: ["A. Procedural", "B. Declarative", "C. Emotional", "D. Motor skills"], answer: "C" },
        { id: 33, type: "mcq", text: "What is more effective than passive review?", options: ["A. More reading", "B. Retrieval practice", "C. Highlighting", "D. Listening only"], answer: "B" },
        { id: 34, type: "short", text: "What ability allows the brain to reorganize connections?", answer: "neuroplasticity" },
        { id: 35, type: "short", text: "What brain structure is crucial for long-term memory?", answer: "hippocampus" },
        { id: 36, type: "mcq", text: "What impairs memory formation according to the passage?", options: ["A. Focused attention", "B. Divided attention", "C. Active retrieval", "D. Spaced practice"], answer: "B" },
        { id: 37, type: "tfng", text: "Humans use only 10% of their brains.", answer: "False" },
        { id: 38, type: "short", text: "What practice creates stronger memories than cramming?", answer: "distributed practice" },
        { id: 39, type: "yng", text: "The author suggests all neuroscience claims about learning are valid.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates neuroplasticity underlies learning.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R9 - INTERMEDIATE (Band 6.5-7.0) - Inequality, Transport, Sleep
// ============================================================
{
  id: "R9",
  level: "Intermediate",
  bandTarget: "6.5-7.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "Economic Inequality and Social Mobility",
      wordCount: 870,
      text: `Economic inequality has emerged as one of the defining issues of our time. The gap between the wealthy and the rest of society has widened significantly in many countries over recent decades, raising questions about fairness, economic efficiency, and democratic governance.

Income inequality measures the distribution of earnings across a population. The Gini coefficient, ranging from 0 (perfect equality) to 1 (maximum inequality), provides a standard measure. Many developed countries have seen their Gini coefficients rise since the 1980s, reversing post-war trends toward greater equality.

Wealth inequality typically exceeds income inequality because wealth accumulates over time. The wealthiest individuals own disproportionate shares of assets including stocks, real estate, and businesses. Inheritance perpetuates wealth concentration across generations.

Multiple factors drive inequality trends. Globalization and technological change have increased returns to education and skills while reducing demand for routine work. Declining union membership has weakened worker bargaining power. Tax policies have shifted, with top marginal rates falling from post-war highs.

Social mobility—the ability to move between economic classes—interacts with inequality. High inequality makes mobility more difficult as gaps become harder to cross. The "Great Gatsby curve" illustrates how countries with higher inequality tend to have lower intergenerational mobility.

Education plays a central but complex role. While education can provide ladders for advancement, educational quality and access themselves reflect existing inequalities. Children from wealthy families enjoy advantages from early childhood that compound over time.

Policy debates center on tradeoffs between efficiency and equity. Some argue that inequality provides incentives for productivity and innovation. Others contend that extreme inequality harms economic growth by reducing social cohesion and limiting human capital development.

Progressive taxation, social insurance, education investment, and labor market regulations represent common policy tools. Different societies choose different balances based on values and political processes. International comparisons reveal considerable variation in both inequality levels and policy approaches.

The consequences of inequality extend beyond economics. Research links inequality to health disparities, social trust, political polarization, and democratic participation. Understanding these connections informs debates about acceptable levels and appropriate responses.`,
      questions: [
        { id: 1, type: "tfng", text: "Income inequality measures are typically higher than wealth inequality.", answer: "False" },
        { id: 2, type: "tfng", text: "The Gini coefficient ranges from 0 to 1.", answer: "True" },
        { id: 3, type: "tfng", text: "Union membership has increased in recent decades.", answer: "False" },
        { id: 4, type: "tfng", text: "High inequality makes social mobility easier.", answer: "False" },
        { id: 5, type: "mcq", text: "What does the 'Great Gatsby curve' illustrate?", options: ["A. Literary trends", "B. Higher inequality correlates with lower mobility", "C. Economic growth patterns", "D. Tax policies"], answer: "B" },
        { id: 6, type: "mcq", text: "What has NOT contributed to rising inequality?", options: ["A. Globalization", "B. Technological change", "C. Stronger unions", "D. Tax policy shifts"], answer: "C" },
        { id: 7, type: "mcq", text: "What perpetuates wealth concentration across generations?", options: ["A. Education", "B. Hard work", "C. Inheritance", "D. Immigration"], answer: "C" },
        { id: 8, type: "short", text: "What measure ranges from 0 to 1 for inequality?", answer: "Gini coefficient" },
        { id: 9, type: "short", text: "What has weakened worker bargaining power?", answer: "declining union membership" },
        { id: 10, type: "mcq", text: "What is NOT mentioned as a consequence of inequality?", options: ["A. Health disparities", "B. Environmental damage", "C. Political polarization", "D. Reduced social trust"], answer: "B" },
        { id: 11, type: "tfng", text: "All economists agree inequality is harmful.", answer: "False" },
        { id: 12, type: "short", text: "What type of taxation redistributes wealth?", answer: "progressive" },
        { id: 13, type: "yng", text: "The author suggests education alone solves inequality.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Future of Transportation",
      wordCount: 850,
      text: `Transportation systems are undergoing their most significant transformation since the automobile replaced the horse. Electric vehicles, autonomous technology, and shared mobility are converging to reshape how people and goods move.

Electric vehicles have reached a tipping point. Battery costs have fallen dramatically while energy density has improved. Range anxiety is diminishing as charging infrastructure expands. Government policies in many countries mandate transitions away from internal combustion engines.

Autonomous vehicle technology continues advancing despite technical challenges. Self-driving systems must navigate unpredictable real-world conditions including weather, construction, and unusual situations. Full autonomy may take longer than early predictions suggested, but incremental automation is already widespread.

The implications of autonomous vehicles extend beyond individual transportation. Truck drivers, taxi operators, and delivery personnel face potential displacement. Parking needs may decline if vehicles circulate rather than sit idle. Urban design could shift dramatically.

Shared mobility models challenge the traditional paradigm of vehicle ownership. Ride-hailing services have grown rapidly in urban areas. Car-sharing and bike-sharing reduce the need for personal vehicles. Some analysts predict that transportation as a service will become the dominant model.

Air transportation faces pressure to reduce emissions. Aviation currently accounts for about 2-3% of global carbon dioxide emissions, a share likely to grow as other sectors decarbonize faster. Sustainable aviation fuels, improved efficiency, and eventually electric or hydrogen-powered aircraft offer potential solutions.

Urban mobility increasingly emphasizes alternatives to cars. Cities are expanding cycling infrastructure, improving public transit, and creating pedestrian zones. These changes improve air quality, reduce congestion, and create more livable urban environments.

The transition creates both opportunities and challenges. New industries and jobs emerge while others decline. Infrastructure investment requirements are substantial. Ensuring equitable access to new mobility options across income levels and geographies requires policy attention.

Freight transportation is similarly transforming. Electric trucks, autonomous long-haul vehicles, and drone delivery are moving from concept to implementation. Logistics optimization using artificial intelligence increases efficiency while changing labor requirements.`,
      questions: [
        { id: 14, type: "tfng", text: "Battery costs for electric vehicles have increased.", answer: "False" },
        { id: 15, type: "tfng", text: "Autonomous vehicles face no technical challenges.", answer: "False" },
        { id: 16, type: "tfng", text: "Aviation accounts for about 2-3% of global CO2 emissions.", answer: "True" },
        { id: 17, type: "tfng", text: "Cities are expanding cycling infrastructure.", answer: "True" },
        { id: 18, type: "mcq", text: "What concern is diminishing with EV infrastructure expansion?", options: ["A. Cost concerns", "B. Range anxiety", "C. Style options", "D. Speed limitations"], answer: "B" },
        { id: 19, type: "mcq", text: "What model challenges traditional vehicle ownership?", options: ["A. Electric vehicles", "B. Larger cars", "C. Shared mobility", "D. Manual transmission"], answer: "C" },
        { id: 20, type: "mcq", text: "What future aircraft power sources are mentioned?", options: ["A. Nuclear", "B. Electric or hydrogen", "C. Coal", "D. Solar only"], answer: "B" },
        { id: 21, type: "short", text: "What workers face displacement from autonomous vehicles?", answer: "truck drivers" },
        { id: 22, type: "short", text: "What may decline if autonomous vehicles circulate rather than park?", answer: "parking needs" },
        { id: 23, type: "mcq", text: "What is NOT mentioned as improving urban mobility?", options: ["A. Cycling infrastructure", "B. Public transit", "C. Underground tunnels", "D. Pedestrian zones"], answer: "C" },
        { id: 24, type: "tfng", text: "Full vehicle autonomy has been achieved.", answer: "False" },
        { id: 25, type: "short", text: "What technology optimizes freight logistics?", answer: "artificial intelligence" },
        { id: 26, type: "yng", text: "The author suggests transportation change brings no challenges.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Science of Sleep",
      wordCount: 860,
      text: `Sleep, occupying roughly one-third of human life, remains partially mysterious despite decades of research. Scientists continue uncovering the vital functions sleep serves while modern lifestyles increasingly compromise sleep quality and duration.

Sleep follows predictable cycles alternating between REM (rapid eye movement) and non-REM stages. Non-REM sleep progresses through three stages of increasing depth. REM sleep, when most dreaming occurs, features brain activity resembling wakefulness despite muscle paralysis.

The circadian rhythm, our internal 24-hour clock, regulates sleep timing. Light exposure is the primary synchronizer, suppressing melatonin production that promotes sleep. Modern artificial lighting and screen use can disrupt this natural rhythm, delaying sleep onset.

Sleep serves multiple biological functions. Physical restoration occurs during deep non-REM sleep when growth hormone is released and tissue repair accelerates. Cognitive processing continues throughout sleep cycles. Memory consolidation transfers daily learning to long-term storage.

The immune system depends on adequate sleep. Sleep deprivation impairs immune function, increasing susceptibility to infection. Chronic sleep deficiency is associated with elevated inflammation and increased risk of various diseases.

Metabolic health is closely tied to sleep. Poor sleep disrupts hormones regulating appetite and glucose metabolism. Sleep restriction increases hunger while reducing satiety signals. These effects contribute to obesity and diabetes risk.

Mental health both affects and is affected by sleep. Insomnia is both a symptom and a risk factor for depression and anxiety. Adequate sleep supports emotional regulation and resilience. Sleep disorders frequently co-occur with psychiatric conditions.

Modern society poses numerous threats to sleep. Work schedules, social demands, and entertainment options compete with sleep time. The blue light from screens suppresses melatonin production. Caffeine and alcohol disrupt sleep architecture.

Sleep disorders affect millions. Insomnia, sleep apnea, and restless leg syndrome each have distinct causes and treatments. Many sufferers remain undiagnosed and untreated despite significant impacts on health and quality of life.

Improving sleep hygiene involves establishing consistent schedules, creating conducive environments, and managing sleep-interfering behaviors. When problems persist, professional evaluation can identify treatable underlying conditions.`,
      questions: [
        { id: 27, type: "tfng", text: "Sleep occupies about one-third of human life.", answer: "True" },
        { id: 28, type: "tfng", text: "Most dreaming occurs during non-REM sleep.", answer: "False" },
        { id: 29, type: "tfng", text: "Blue light from screens promotes melatonin production.", answer: "False" },
        { id: 30, type: "tfng", text: "Sleep deprivation improves immune function.", answer: "False" },
        { id: 31, type: "mcq", text: "What regulates our internal 24-hour clock?", options: ["A. Body temperature", "B. Circadian rhythm", "C. Diet", "D. Exercise"], answer: "B" },
        { id: 32, type: "mcq", text: "What hormone is released during deep non-REM sleep?", options: ["A. Insulin", "B. Adrenaline", "C. Growth hormone", "D. Cortisol"], answer: "C" },
        { id: 33, type: "mcq", text: "What is the primary synchronizer of circadian rhythm?", options: ["A. Food intake", "B. Light exposure", "C. Exercise", "D. Social interaction"], answer: "B" },
        { id: 34, type: "short", text: "What feature characterizes REM sleep besides dreaming?", answer: "muscle paralysis" },
        { id: 35, type: "short", text: "What suppresses melatonin production?", answer: "light" },
        { id: 36, type: "mcq", text: "What is NOT mentioned as a sleep disorder?", options: ["A. Insomnia", "B. Sleep apnea", "C. Narcolepsy", "D. Restless leg syndrome"], answer: "C" },
        { id: 37, type: "tfng", text: "Sleep has no connection to mental health.", answer: "False" },
        { id: 38, type: "short", text: "What disrupts sleep architecture along with caffeine?", answer: "alcohol" },
        { id: 39, type: "yng", text: "The author suggests sleep disorders are rare.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates consistent schedules help sleep.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R10 - INTERMEDIATE (Band 6.5-7.0) - Urban Food, Privacy, Architecture
// ============================================================
{
  id: "R10",
  level: "Intermediate",
  bandTarget: "6.5-7.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "Urban Food Systems and Sustainability",
      wordCount: 850,
      text: `Urban areas, home to over half the world's population, depend on complex food systems that stretch across global supply chains. The sustainability of these systems faces mounting challenges from environmental constraints, population growth, and changing consumption patterns.

Modern urban food systems have evolved to prioritize efficiency and convenience. Supermarkets offer year-round access to produce from around the world. Processing and packaging extend shelf life, reducing waste along supply chains. However, these conveniences come with environmental and social costs.

Food miles—the distance food travels from farm to plate—contribute significantly to carbon emissions. Refrigerated transportation, particularly air freight for perishables, consumes substantial energy. The concentration of production in certain regions creates vulnerability to disruptions.

Urban agriculture is experiencing a renaissance. Rooftop farms, vertical growing systems, and community gardens bring food production into cities. These initiatives reduce transportation distances, engage communities, and can provide fresh produce in food deserts—neighborhoods lacking access to healthy food options.

Food waste represents a major sustainability challenge. Roughly one-third of food produced globally is lost or wasted along supply chains and in households. In wealthy countries, consumer waste predominates, while developing nations lose more food during storage and transportation.

Alternative protein sources may reshape urban diets. Plant-based meat substitutes have improved dramatically, attracting mainstream consumers. Cultured meat, grown from animal cells without raising livestock, is approaching commercial viability. Insect protein, common in some cultures, offers efficient conversion of feed to nutrition.

Local food movements challenge global supply chains by emphasizing seasonal eating and regional production. Farmers markets and community-supported agriculture connect urban consumers directly with nearby producers. While local food cannot fully replace global trade, it diversifies supply and strengthens community food security.

Urban food policy increasingly addresses these challenges. Cities are developing food strategies that integrate nutrition, sustainability, and equity concerns. School meal programs, urban farming initiatives, and food waste reduction campaigns reflect growing attention to urban food systems.`,
      questions: [
        { id: 1, type: "tfng", text: "More than half the world's population lives in urban areas.", answer: "True" },
        { id: 2, type: "tfng", text: "Modern urban food systems prioritize local production.", answer: "False" },
        { id: 3, type: "tfng", text: "About one-third of global food is lost or wasted.", answer: "True" },
        { id: 4, type: "tfng", text: "Cultured meat has been commercially available for decades.", answer: "False" },
        { id: 5, type: "mcq", text: "What are food deserts?", options: ["A. Regions with drought", "B. Neighborhoods lacking healthy food access", "C. Desert farming areas", "D. Food storage facilities"], answer: "B" },
        { id: 6, type: "mcq", text: "What is the main waste problem in wealthy countries?", options: ["A. Storage losses", "B. Transportation losses", "C. Consumer waste", "D. Production waste"], answer: "C" },
        { id: 7, type: "mcq", text: "What is NOT mentioned as urban agriculture?", options: ["A. Rooftop farms", "B. Underground farms", "C. Vertical systems", "D. Community gardens"], answer: "B" },
        { id: 8, type: "short", text: "What term describes the distance food travels from farm to plate?", answer: "food miles" },
        { id: 9, type: "short", text: "What type of meat is grown from animal cells?", answer: "cultured meat" },
        { id: 10, type: "mcq", text: "What connects urban consumers directly with producers?", options: ["A. Supermarkets", "B. Online retailers", "C. Farmers markets", "D. Fast food chains"], answer: "C" },
        { id: 11, type: "tfng", text: "Local food can fully replace global trade.", answer: "False" },
        { id: 12, type: "short", text: "What do developing nations lose more food during?", answer: "storage and transportation" },
        { id: 13, type: "yng", text: "The author suggests urban food systems face no challenges.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "Digital Privacy in the Modern Age",
      wordCount: 860,
      text: `The digital transformation of daily life has created unprecedented opportunities for surveillance and data collection. Personal information, once scattered and difficult to aggregate, now flows through interconnected systems that track, analyze, and monetize human behavior.

Every online interaction generates data. Web browsing creates detailed records of interests and behaviors. Smartphones track locations continuously. Social media reveals relationships and opinions. Smart devices in homes monitor activities from viewing habits to sleep patterns.

The business model underlying much of the internet relies on data collection. "Free" services like search engines and social platforms extract value by profiling users for targeted advertising. This surveillance capitalism has made detailed personal dossiers commercially valuable.

Government surveillance capabilities have expanded alongside commercial data collection. Intelligence agencies access communications data through various legal and technical means. Law enforcement uses cell site data, license plate readers, and facial recognition. The boundaries between public safety and privacy remain contested.

Privacy harms extend beyond individual intrusion. Data can enable discrimination in employment, housing, and insurance. Surveillance chills free expression and political organizing. Breaches expose sensitive information to criminals. Aggregated data creates power imbalances between individuals and institutions.

Legal frameworks struggle to address digital privacy. Regulations like the European Union's General Data Protection Regulation (GDPR) have established new standards requiring consent and data minimization. However, enforcement challenges persist and many regions lack comprehensive privacy laws.

Technical approaches to privacy protection include encryption, anonymization, and privacy-preserving computation. Browser extensions and VPNs can limit tracking. However, technical solutions require user knowledge and effort, creating inequitable protection.

Privacy norms are evolving across generations. Younger people may share more readily on social platforms while simultaneously demanding control over their data. Public awareness of privacy issues has increased following high-profile breaches and scandals, though behavior change often lags awareness.

The future of privacy will depend on regulatory choices, technological development, and social norms. Finding balances between data's benefits and privacy protection remains an ongoing negotiation among individuals, companies, and governments.`,
      questions: [
        { id: 14, type: "tfng", text: "Smartphones can track user locations continuously.", answer: "True" },
        { id: 15, type: "tfng", text: "Free online services generate revenue without using personal data.", answer: "False" },
        { id: 16, type: "tfng", text: "The GDPR is a United States regulation.", answer: "False" },
        { id: 17, type: "tfng", text: "Technical privacy solutions require no user effort.", answer: "False" },
        { id: 18, type: "mcq", text: "What is surveillance capitalism?", options: ["A. Government spying", "B. Monetizing user data for advertising", "C. Security camera systems", "D. Employee monitoring"], answer: "B" },
        { id: 19, type: "mcq", text: "What does data collection enable according to the passage?", options: ["A. Only advertising", "B. Discrimination and power imbalances", "C. Improved services only", "D. No negative effects"], answer: "B" },
        { id: 20, type: "mcq", text: "What law enforcement technology is NOT mentioned?", options: ["A. Facial recognition", "B. License plate readers", "C. DNA databases", "D. Cell site data"], answer: "C" },
        { id: 21, type: "short", text: "What does GDPR stand for? (First word)", answer: "General" },
        { id: 22, type: "short", text: "What do VPNs help limit?", answer: "tracking" },
        { id: 23, type: "mcq", text: "What has increased following privacy scandals?", options: ["A. Data sharing", "B. Public awareness", "C. Corporate profits", "D. Government surveillance"], answer: "B" },
        { id: 24, type: "tfng", text: "Privacy norms remain constant across generations.", answer: "False" },
        { id: 25, type: "short", text: "What chills free expression according to the passage?", answer: "surveillance" },
        { id: 26, type: "yng", text: "The author suggests privacy debates are resolved.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "Modern Architecture and Sustainability",
      wordCount: 850,
      text: `Architecture increasingly confronts the imperative of environmental sustainability. Buildings account for roughly 40% of global energy consumption and significant carbon emissions, making the built environment central to addressing climate change.

Green building design encompasses multiple strategies. Energy efficiency reduces heating, cooling, and lighting demands through improved insulation, high-performance windows, and smart building controls. Renewable energy integration through solar panels and other technologies can move buildings toward net-zero energy consumption.

Material choices significantly impact building sustainability. Embodied carbon—the emissions from producing building materials—has gained attention as operational energy use decreases. Concrete and steel production generate substantial carbon dioxide. Alternative materials like mass timber and recycled components offer lower-carbon options.

Passive design principles reduce energy needs through building orientation and form. South-facing windows maximize winter solar gain in northern climates. Thermal mass stores heat for later release. Natural ventilation reduces air conditioning requirements. These approaches, often drawn from traditional architecture, are being rediscovered.

Building certifications like LEED and BREEAM provide frameworks for measuring and communicating sustainability performance. While imperfect, these systems have raised awareness and created market incentives for green building. Increasingly stringent standards push the industry forward.

Retrofitting existing buildings presents enormous challenges and opportunities. Most buildings standing in 2050 have already been built, making renovation essential to meeting climate goals. However, retrofit costs are high and returns often uncertain, creating market barriers.

Urban planning interacts with building sustainability. Dense, mixed-use development reduces transportation energy by enabling walking and transit use. Building orientation and spacing affect access to daylight and natural ventilation. Green infrastructure—parks, urban forests, green roofs—moderates urban heat.

The architectural profession is debating its role in sustainability transitions. Some argue for radical reduction in new construction, prioritizing adaptive reuse. Others emphasize technical innovation to make new buildings carbon-neutral or even carbon-negative. Both approaches will likely prove necessary.`,
      questions: [
        { id: 27, type: "tfng", text: "Buildings account for about 40% of global energy consumption.", answer: "True" },
        { id: 28, type: "tfng", text: "Embodied carbon has become less important as buildings become more efficient.", answer: "False" },
        { id: 29, type: "tfng", text: "Most buildings standing in 2050 have already been built.", answer: "True" },
        { id: 30, type: "tfng", text: "Dense development increases transportation energy use.", answer: "False" },
        { id: 31, type: "mcq", text: "What is embodied carbon?", options: ["A. Carbon in the air", "B. Emissions from producing materials", "C. Carbon absorbed by buildings", "D. Heating emissions"], answer: "B" },
        { id: 32, type: "mcq", text: "What do south-facing windows maximize?", options: ["A. Views", "B. Privacy", "C. Winter solar gain", "D. Cooling"], answer: "C" },
        { id: 33, type: "mcq", text: "Which certification is NOT mentioned?", options: ["A. LEED", "B. Energy Star", "C. BREEAM", "D. Both A and C are mentioned"], answer: "B" },
        { id: 34, type: "short", text: "What reduces air conditioning needs through building design?", answer: "natural ventilation" },
        { id: 35, type: "short", text: "What lower-carbon material alternative is mentioned?", answer: "mass timber" },
        { id: 36, type: "mcq", text: "What creates barriers to building retrofits?", options: ["A. Available technology", "B. High costs and uncertain returns", "C. Lack of interest", "D. Government regulations"], answer: "B" },
        { id: 37, type: "tfng", text: "Building certification systems are perfect measures.", answer: "False" },
        { id: 38, type: "short", text: "What does green infrastructure include?", answer: "parks" },
        { id: 39, type: "yng", text: "The author suggests only new construction matters for sustainability.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates material choices impact sustainability.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R11 - INTERMEDIATE (Band 7.0-7.5) - Language, Ocean, Cooperation
// ============================================================
{
  id: "R11",
  level: "Intermediate",
  bandTarget: "7.0-7.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "Second Language Acquisition",
      wordCount: 870,
      text: `The ability to learn additional languages beyond one's native tongue has fascinated researchers and educators for centuries. Understanding how humans acquire second languages has practical implications for millions of learners and teachers worldwide.

Children acquire first languages through immersion, progressing from babbling to fluency without explicit instruction. Second language acquisition differs fundamentally, especially for adults. The brain's language-learning mechanisms change with age, though the precise nature and timing of these changes remain debated.

The critical period hypothesis suggests optimal windows for language learning that close or narrow with age. Evidence supports some form of age-related decline in ultimate attainment, particularly for pronunciation. However, adults retain considerable language-learning capacity and may even excel at certain aspects like vocabulary acquisition.

Input and interaction drive language development. Comprehensible input—language just beyond current ability—provides material for acquisition. Interaction allows negotiation of meaning and feedback on production. Immersion environments maximize both, explaining their effectiveness for language learning.

Transfer from the first language influences second language development. Similarities facilitate learning while differences create challenges. Grammatical patterns, pronunciation features, and conceptual categories from native languages shape how learners perceive and produce the new language.

Individual differences in language aptitude, motivation, and learning strategies produce varying outcomes. Working memory capacity correlates with language learning success. Integrative motivation—desire to connect with speakers of the target language—predicts sustained effort. Effective learners deploy metacognitive strategies to monitor and optimize their learning.

Classroom instruction can accelerate acquisition when well designed. Explicit grammar instruction benefits adult learners who bring analytical capabilities. Communicative approaches provide meaningful practice. The optimal balance between explicit instruction and communicative practice varies by learner characteristics and goals.

Technology increasingly mediates language learning. Apps provide accessible practice opportunities. Speech recognition enables pronunciation feedback. AI chatbots offer conversation partners. Online resources connect learners with native speakers globally. However, technology supplements rather than replaces human interaction.

Multilingualism is becoming the global norm rather than the exception. Most of the world's population speaks multiple languages. Cognitive benefits of bilingualism, including enhanced executive function, add motivation for language learning beyond practical communication needs.`,
      questions: [
        { id: 1, type: "tfng", text: "Children acquire first languages through explicit instruction.", answer: "False" },
        { id: 2, type: "tfng", text: "Adults retain considerable language-learning capacity.", answer: "True" },
        { id: 3, type: "tfng", text: "First language transfer only creates challenges for learners.", answer: "False" },
        { id: 4, type: "tfng", text: "Most of the world's population is monolingual.", answer: "False" },
        { id: 5, type: "mcq", text: "What does the critical period hypothesis suggest?", options: ["A. Language learning is impossible after age 12", "B. Optimal windows for learning narrow with age", "C. Adults learn better than children", "D. All languages are equally difficult"], answer: "B" },
        { id: 6, type: "mcq", text: "What is comprehensible input?", options: ["A. Any language exposure", "B. Language just beyond current ability", "C. Native speaker speech", "D. Written text only"], answer: "B" },
        { id: 7, type: "mcq", text: "What cognitive capacity correlates with language learning success?", options: ["A. IQ", "B. Working memory", "C. Reading speed", "D. Age"], answer: "B" },
        { id: 8, type: "short", text: "What type of motivation involves desire to connect with speakers?", answer: "integrative" },
        { id: 9, type: "short", text: "What do adults bring that helps with explicit grammar instruction?", answer: "analytical capabilities" },
        { id: 10, type: "mcq", text: "What aspect of language do adults potentially excel at?", options: ["A. Pronunciation", "B. Grammar rules", "C. Vocabulary acquisition", "D. Accent reduction"], answer: "C" },
        { id: 11, type: "tfng", text: "Technology can fully replace human interaction in language learning.", answer: "False" },
        { id: 12, type: "short", text: "What benefit of bilingualism is mentioned besides communication?", answer: "enhanced executive function" },
        { id: 13, type: "yng", text: "The author suggests age-related decline prevents all adult language learning.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "Ocean Circulation and Climate",
      wordCount: 860,
      text: `The world's oceans play a fundamental role in regulating Earth's climate through the transport and storage of vast quantities of heat. Ocean circulation patterns redistribute energy from equatorial regions toward the poles, moderating temperature extremes and influencing weather systems globally.

Surface currents are driven primarily by wind patterns. Trade winds near the equator and westerlies at mid-latitudes push water across ocean basins. The Coriolis effect, resulting from Earth's rotation, deflects currents to the right in the Northern Hemisphere and left in the Southern Hemisphere, creating characteristic circular patterns called gyres.

Thermohaline circulation—the global conveyor belt—operates on different principles. Differences in water density, determined by temperature and salinity, drive deep water formation and flow. Cold, salty water sinks in the North Atlantic, beginning a journey through the deep ocean that takes centuries to complete.

The Gulf Stream, part of the Atlantic circulation system, carries warm water from the tropics northward along the North American coast before crossing toward Europe. This heat transport keeps Western Europe significantly warmer than corresponding latitudes in North America. The current moves more water than all the world's rivers combined.

El Niño and La Niña represent periodic disruptions to Pacific circulation. During El Niño events, weakened trade winds allow warm water to accumulate in the eastern Pacific, suppressing upwelling of nutrient-rich cold water. These oscillations affect weather patterns across the globe, influencing everything from monsoons to hurricane formation.

Climate change threatens to alter ocean circulation. Warming temperatures and melting ice reduce the density contrast that drives thermohaline circulation. Models suggest potential weakening of the Atlantic overturning circulation, though uncertainty remains about timing and magnitude.

Ocean acidification, distinct from warming, results from absorption of atmospheric carbon dioxide. The resulting chemical changes threaten marine organisms that build shells and skeletons from calcium carbonate. Coral reefs and shellfish face particular vulnerability as ocean chemistry shifts.

The ocean's role as a heat sink has moderated atmospheric warming but cannot continue indefinitely. Warming ocean waters hold less dissolved oxygen, creating dead zones. Marine heatwaves are becoming more frequent and intense, causing mass coral bleaching and ecosystem disruption.`,
      questions: [
        { id: 14, type: "tfng", text: "Surface currents are driven primarily by temperature.", answer: "False" },
        { id: 15, type: "tfng", text: "The Gulf Stream carries warm water northward.", answer: "True" },
        { id: 16, type: "tfng", text: "Ocean acidification is caused by ocean warming.", answer: "False" },
        { id: 17, type: "tfng", text: "Marine heatwaves are becoming less frequent.", answer: "False" },
        { id: 18, type: "mcq", text: "What drives thermohaline circulation?", options: ["A. Wind patterns", "B. Density differences from temperature and salinity", "C. Tidal forces", "D. Earth's rotation alone"], answer: "B" },
        { id: 19, type: "mcq", text: "How long does the deep ocean journey take to complete?", options: ["A. Days", "B. Years", "C. Centuries", "D. Millions of years"], answer: "C" },
        { id: 20, type: "mcq", text: "What effect does the Coriolis force have?", options: ["A. Heats water", "B. Deflects currents", "C. Creates waves", "D. Deepens oceans"], answer: "B" },
        { id: 21, type: "short", text: "What are the circular current patterns called?", answer: "gyres" },
        { id: 22, type: "short", text: "What causes ocean acidification?", answer: "carbon dioxide absorption" },
        { id: 23, type: "mcq", text: "What happens during El Niño events?", options: ["A. Trade winds strengthen", "B. Warm water accumulates in eastern Pacific", "C. Upwelling increases", "D. Oceans cool rapidly"], answer: "B" },
        { id: 24, type: "tfng", text: "The ocean can absorb heat indefinitely.", answer: "False" },
        { id: 25, type: "short", text: "What creates dead zones in warming oceans?", answer: "less dissolved oxygen" },
        { id: 26, type: "yng", text: "The author suggests ocean circulation is unaffected by climate change.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Evolution of Human Cooperation",
      wordCount: 850,
      text: `Humans display remarkable levels of cooperation extending far beyond what any other species achieves. Understanding how such extensive cooperation evolved and persists presents a puzzle for evolutionary theory, which traditionally emphasizes competition and individual fitness.

Kin selection provides one explanation for cooperation. Helping genetic relatives indirectly promotes one's own genes. Hamilton's rule predicts that altruism toward kin should scale with relatedness, explaining why people sacrifice more for close relatives than distant ones.

Reciprocal altruism extends cooperation beyond kin. When individuals interact repeatedly, helping today can yield future returns. The tit-for-tat strategy—cooperating initially and then mirroring the partner's previous action—proves remarkably effective in repeated interactions.

However, human cooperation extends far beyond these mechanisms. We cooperate with strangers we will never meet again, contribute to public goods, and follow social norms even when violations would go unpunished. These behaviors require additional explanations.

Reputation and indirect reciprocity may help. Helping others builds a reputation that attracts future cooperation. People track others' cooperative histories and preferentially associate with reliable cooperators. In small-scale societies where reputations spread, this creates strong incentives for prosocial behavior.

Group selection theory, controversial but revived, suggests that competition between groups can favor cooperative traits within groups. Groups of cooperators may outcompete groups of defectors, even if individuals within groups have incentives to defect.

Cultural evolution amplifies human cooperative capacity. Social learning transmits norms, institutions, and technologies that facilitate cooperation. Cultural group selection operates faster than genetic selection, potentially explaining rapid development of large-scale cooperation.

Institutions formalize and enforce cooperative arrangements. Property rights, contracts, and legal systems reduce the risks of cooperation by providing enforcement mechanisms. Modern economies depend on institutional infrastructure that enables cooperation among millions of strangers.

Psychological mechanisms underlying cooperation include empathy, guilt, and moral reasoning. These emotions and capacities appear early in child development, suggesting innate foundations for cooperative behavior.`,
      questions: [
        { id: 27, type: "tfng", text: "Human cooperation levels match those of other species.", answer: "False" },
        { id: 28, type: "tfng", text: "Kin selection explains helping genetic relatives.", answer: "True" },
        { id: 29, type: "tfng", text: "The tit-for-tat strategy always defects.", answer: "False" },
        { id: 30, type: "tfng", text: "Group selection theory has universal acceptance.", answer: "False" },
        { id: 31, type: "mcq", text: "What does Hamilton's rule predict?", options: ["A. All cooperation is impossible", "B. Altruism scales with genetic relatedness", "C. Strangers cooperate most", "D. Cooperation decreases over time"], answer: "B" },
        { id: 32, type: "mcq", text: "What strategy involves mirroring partner's previous action?", options: ["A. Always cooperate", "B. Always defect", "C. Tit-for-tat", "D. Random choice"], answer: "C" },
        { id: 33, type: "mcq", text: "What does indirect reciprocity involve?", options: ["A. Direct exchange", "B. Reputation building", "C. Genetic inheritance", "D. Forced cooperation"], answer: "B" },
        { id: 34, type: "short", text: "What type of selection operates faster than genetic selection?", answer: "cultural" },
        { id: 35, type: "short", text: "What do property rights and contracts provide?", answer: "enforcement mechanisms" },
        { id: 36, type: "mcq", text: "What psychological capacity is NOT mentioned for cooperation?", options: ["A. Empathy", "B. Guilt", "C. Intelligence", "D. Moral reasoning"], answer: "C" },
        { id: 37, type: "tfng", text: "Cooperative psychology appears late in child development.", answer: "False" },
        { id: 38, type: "short", text: "What transmits norms and institutions?", answer: "social learning" },
        { id: 39, type: "yng", text: "The author suggests human cooperation is easily explained.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates institutions enable large-scale cooperation.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R12 - INTERMEDIATE (Band 7.0-7.5) - Creativity, Agriculture, Science
// ============================================================
{
  id: "R12",
  level: "Intermediate",
  bandTarget: "7.0-7.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Psychology of Creativity",
      wordCount: 860,
      text: `Creativity—the ability to produce novel and useful ideas—has become increasingly valued in economies driven by innovation. Understanding the psychological processes underlying creativity can help individuals and organizations foster more creative thinking.

Creativity involves both divergent thinking, generating many possible solutions, and convergent thinking, selecting and refining the best options. Creative individuals display flexibility in switching between these modes, exploring widely before focusing narrowly.

The creative process often follows stages: preparation, incubation, illumination, and verification. Preparation involves gathering knowledge and defining problems. Incubation allows unconscious processing while attention is elsewhere. Illumination brings the "aha moment" when solutions emerge. Verification tests and refines ideas.

Expertise provides the foundation for creativity within domains. Deep knowledge enables recognition of promising patterns and combinations. However, excessive expertise can create fixedness, making it harder to see beyond conventional approaches. The most creative individuals often have both deep expertise and broad interests.

Intrinsic motivation powerfully supports creativity. People produce more creative work when driven by interest and enjoyment rather than external rewards. Excessive focus on evaluation can undermine creative risk-taking. Environments that support autonomy and accept failure encourage creative exploration.

Constraints, paradoxically, can enhance creativity. Complete freedom can be paralyzing, while appropriate limitations focus attention and encourage resourcefulness. Time pressure can stimulate creativity up to a point but becomes harmful when severe.

Group creativity presents distinct dynamics. Brainstorming, despite popularity, often produces fewer ideas than individuals working alone due to production blocking and evaluation apprehension. However, diverse groups can combine perspectives in ways unavailable to individuals.

Creativity can be cultivated through practice and environmental design. Exposure to diverse experiences and perspectives builds the raw material for novel combinations. Physical environments that balance stimulation with opportunity for reflection support creative work. Regular creative exercises build skills and habits.

While some creative ability appears innate, substantial development is possible. Deliberate practice in creative domains, combined with supportive environments and appropriate mindsets, can significantly enhance creative output.`,
      questions: [
        { id: 1, type: "tfng", text: "Creativity involves only divergent thinking.", answer: "False" },
        { id: 2, type: "tfng", text: "Intrinsic motivation supports creativity better than external rewards.", answer: "True" },
        { id: 3, type: "tfng", text: "Complete freedom always maximizes creativity.", answer: "False" },
        { id: 4, type: "tfng", text: "Brainstorming always produces more ideas than individual work.", answer: "False" },
        { id: 5, type: "mcq", text: "What is the 'incubation' stage?", options: ["A. Gathering information", "B. Unconscious processing while attention is elsewhere", "C. Testing ideas", "D. Presenting solutions"], answer: "B" },
        { id: 6, type: "mcq", text: "What can excessive expertise create?", options: ["A. More creativity", "B. Fixedness", "C. Better solutions", "D. Faster work"], answer: "B" },
        { id: 7, type: "mcq", text: "What undermines creative risk-taking?", options: ["A. Autonomy", "B. Interest", "C. Excessive focus on evaluation", "D. Broad interests"], answer: "C" },
        { id: 8, type: "short", text: "What two types of thinking does creativity involve?", answer: "divergent and convergent" },
        { id: 9, type: "short", text: "What stage brings the 'aha moment'?", answer: "illumination" },
        { id: 10, type: "mcq", text: "What harms group brainstorming effectiveness?", options: ["A. Diversity", "B. Production blocking", "C. Group size being too small", "D. Too much time"], answer: "B" },
        { id: 11, type: "tfng", text: "Creative ability is entirely fixed from birth.", answer: "False" },
        { id: 12, type: "short", text: "What provides the foundation for domain creativity?", answer: "expertise" },
        { id: 13, type: "yng", text: "The author suggests constraints are always harmful to creativity.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "Sustainable Agriculture Practices",
      wordCount: 850,
      text: `Agriculture faces the challenge of feeding a growing global population while reducing environmental impacts. Sustainable agriculture seeks to meet current food needs without compromising future generations' ability to meet theirs, balancing productivity with environmental stewardship.

Conventional industrial agriculture has dramatically increased yields through mechanization, synthetic fertilizers, pesticides, and irrigation. However, this approach has generated significant environmental costs including soil degradation, water pollution, biodiversity loss, and greenhouse gas emissions.

Soil health forms the foundation of sustainable agriculture. Healthy soils teem with organisms that cycle nutrients, maintain structure, and suppress diseases. Practices like cover cropping, reduced tillage, and compost application build soil organic matter and biological activity.

Integrated pest management (IPM) reduces reliance on synthetic pesticides. IPM combines cultural practices, biological controls, and judicious chemical use. Crop rotation disrupts pest life cycles. Beneficial insects prey on harmful ones. Pesticides become last resorts rather than first responses.

Water conservation grows increasingly critical as aquifers deplete and climate patterns shift. Drip irrigation delivers water directly to roots, reducing waste. Soil improvement increases water-holding capacity. Drought-resistant crop varieties reduce irrigation needs.

Diversification enhances agricultural resilience. Monocultures create vulnerability to pests and market fluctuations. Integrating multiple crops, livestock, and trees within farming systems spreads risk and can improve productivity through complementary interactions.

Agroecology applies ecological principles to agricultural systems. Understanding farms as ecosystems rather than factories suggests management approaches that work with natural processes. Traditional farming systems often embody agroecological principles developed over centuries.

The transition to sustainable agriculture faces economic and practical barriers. Initial costs may exceed conventional approaches while new methods are learned. Market pressures and policy incentives often favor conventional practices. Knowledge gaps require research and education investment.

Consumer demand and policy support are increasingly driving change. Organic and sustainably certified products command price premiums. Government programs reward conservation practices. Growing awareness of agriculture's environmental footprint creates pressure for transformation.`,
      questions: [
        { id: 14, type: "tfng", text: "Conventional agriculture has no environmental costs.", answer: "False" },
        { id: 15, type: "tfng", text: "IPM eliminates all pesticide use.", answer: "False" },
        { id: 16, type: "tfng", text: "Drip irrigation delivers water directly to roots.", answer: "True" },
        { id: 17, type: "tfng", text: "Monocultures reduce vulnerability to pests.", answer: "False" },
        { id: 18, type: "mcq", text: "What builds soil organic matter?", options: ["A. Synthetic fertilizers", "B. Cover cropping and compost", "C. Deep tillage", "D. Pesticide application"], answer: "B" },
        { id: 19, type: "mcq", text: "What does IPM stand for?", options: ["A. Industrial Pest Methods", "B. Integrated Pest Management", "C. Intensive Production Model", "D. International Plant Movement"], answer: "B" },
        { id: 20, type: "mcq", text: "What approach views farms as ecosystems?", options: ["A. Industrial agriculture", "B. Monoculture farming", "C. Agroecology", "D. Chemical farming"], answer: "C" },
        { id: 21, type: "short", text: "What forms the foundation of sustainable agriculture?", answer: "soil health" },
        { id: 22, type: "short", text: "What do beneficial insects prey on?", answer: "harmful ones" },
        { id: 23, type: "mcq", text: "What drives change toward sustainable agriculture?", options: ["A. Lower costs only", "B. Consumer demand and policy support", "C. Reduced labor needs", "D. Simpler methods"], answer: "B" },
        { id: 24, type: "tfng", text: "Transition to sustainable agriculture has no barriers.", answer: "False" },
        { id: 25, type: "short", text: "What do organic products command?", answer: "price premiums" },
        { id: 26, type: "yng", text: "The author suggests conventional agriculture is entirely sustainable.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Structure of Scientific Revolutions",
      wordCount: 860,
      text: `Thomas Kuhn's influential 1962 book "The Structure of Scientific Revolutions" transformed understanding of how science develops. His ideas about paradigms and scientific change continue to shape philosophy of science and influence broader discussions of knowledge and progress.

Kuhn argued that science does not progress through steady accumulation of facts, as commonly believed. Instead, science alternates between periods of "normal science" within established paradigms and revolutionary periods when paradigms shift.

A paradigm encompasses the shared assumptions, methods, and exemplary achievements that define a scientific field. Scientists working within a paradigm share fundamental beliefs about what questions are important, what methods are appropriate, and what counts as a satisfactory explanation.

Normal science involves puzzle-solving within paradigmatic constraints. Scientists extend theories, refine measurements, and apply paradigms to new cases. Anomalies—observations that don't fit the paradigm—are typically set aside or attributed to experimental error.

Scientific revolutions occur when accumulated anomalies create crisis. The old paradigm proves increasingly unable to accommodate observations. New theories emerge that explain the anomalies while preserving successes of the prior paradigm.

Paradigm shifts involve more than new theories; they change fundamental concepts and standards of evaluation. What counts as relevant evidence and valid reasoning may shift. Scientists literally see the world differently before and after revolutionary transitions.

Kuhn's concept of incommensurability—the difficulty of comparing paradigms across revolutionary divides—sparked controversy. Critics argued this made scientific progress arbitrary or irrational. Kuhn clarified that scientists can and do compare paradigms, but lack a neutral language for doing so.

The influence of Kuhn's ideas extended far beyond philosophy of science. Social scientists adopted paradigm language to describe their disciplines. Business consultants discussed "paradigm shifts" in markets and organizations. The term entered common usage, though often losing Kuhn's precise meaning.

Subsequent philosophers refined and critiqued Kuhn's framework. Some argue science is more continuous than Kuhn suggested. Others question whether all sciences fit the paradigm model. Despite criticisms, Kuhn permanently changed how we think about scientific development.`,
      questions: [
        { id: 27, type: "tfng", text: "Kuhn argued science progresses through steady fact accumulation.", answer: "False" },
        { id: 28, type: "tfng", text: "Normal science involves puzzle-solving within paradigms.", answer: "True" },
        { id: 29, type: "tfng", text: "Anomalies always immediately cause paradigm shifts.", answer: "False" },
        { id: 30, type: "tfng", text: "Kuhn's ideas only influenced philosophy of science.", answer: "False" },
        { id: 31, type: "mcq", text: "What does a paradigm encompass?", options: ["A. Only experimental methods", "B. Shared assumptions, methods, and achievements", "C. Government funding rules", "D. Laboratory equipment"], answer: "B" },
        { id: 32, type: "mcq", text: "What is incommensurability?", options: ["A. Measuring scientific output", "B. Difficulty comparing paradigms across revolutions", "C. Mathematical equations", "D. Laboratory standards"], answer: "B" },
        { id: 33, type: "mcq", text: "When was 'The Structure of Scientific Revolutions' published?", options: ["A. 1942", "B. 1962", "C. 1982", "D. 1972"], answer: "B" },
        { id: 34, type: "short", text: "What are observations that don't fit paradigms called?", answer: "anomalies" },
        { id: 35, type: "short", text: "What occurs when accumulated anomalies create crisis?", answer: "scientific revolutions" },
        { id: 36, type: "mcq", text: "What criticism was raised about incommensurability?", options: ["A. It was too precise", "B. It made progress seem arbitrary", "C. It was mathematically wrong", "D. It supported tradition"], answer: "B" },
        { id: 37, type: "tfng", text: "The term 'paradigm shift' entered common usage.", answer: "True" },
        { id: 38, type: "short", text: "Who wrote 'The Structure of Scientific Revolutions'?", answer: "Thomas Kuhn" },
        { id: 39, type: "yng", text: "The author suggests Kuhn's ideas are universally accepted without criticism.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates paradigm shifts change how scientists see the world.", answer: "Yes" }
      ]
    }
  ]
},

// ============================================================
// R13 - INTERMEDIATE (Band 7.0-7.5) - Microbiome, Mind, Globalization
// ============================================================
{
  id: "R13",
  level: "Intermediate",
  bandTarget: "7.0-7.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Human Microbiome",
      wordCount: 870,
      text: `The human body hosts trillions of microorganisms—bacteria, viruses, fungi, and other life forms—collectively known as the microbiome. Far from being mere passengers or pathogens, these organisms play essential roles in human health and disease.

The gut microbiome, containing the majority of human-associated microbes, has received the most attention. Thousands of bacterial species inhabit the digestive tract, forming complex communities that vary considerably among individuals. These communities develop from birth and are shaped by diet, environment, and medications throughout life.

Gut bacteria perform vital functions beyond digestion. They synthesize vitamins, particularly B vitamins and vitamin K. They metabolize dietary fiber into short-chain fatty acids that nourish intestinal cells. They help regulate the immune system, training it to distinguish harmful invaders from beneficial organisms.

The gut-brain axis represents a fascinating connection between microbiome and mental health. Gut bacteria produce neurotransmitters and other signaling molecules that affect mood and cognition. Alterations in gut microbiome composition correlate with depression, anxiety, and neurodevelopmental disorders.

Disruptions to the microbiome, called dysbiosis, are associated with numerous conditions. Inflammatory bowel disease, obesity, type 2 diabetes, and even some cancers show microbiome alterations. Whether these changes cause disease or result from it remains an active research question.

Antibiotics, while lifesaving against bacterial infections, also damage beneficial microbiota. A single antibiotic course can dramatically alter gut communities, sometimes with lasting effects. Overuse of antibiotics may contribute to rising rates of allergies, autoimmune diseases, and other conditions.

Diet profoundly shapes the microbiome. High-fiber diets promote diverse bacterial communities. Ultra-processed foods may reduce diversity. Fermented foods can introduce beneficial organisms. However, individual responses to dietary interventions vary substantially.

Probiotics—live beneficial microorganisms—and prebiotics—substances that feed beneficial bacteria—represent attempts to manipulate the microbiome. Evidence supports some applications but the field remains immature. Fecal microbiota transplantation has proven remarkably effective for certain infections but raises safety questions for other applications.

Future medicine may routinely consider microbiome composition in disease prevention and treatment. Personalized approaches accounting for individual microbiome characteristics could improve therapeutic outcomes.`,
      questions: [
        { id: 1, type: "tfng", text: "The gut microbiome contains a minority of human-associated microbes.", answer: "False" },
        { id: 2, type: "tfng", text: "Gut bacteria synthesize some vitamins.", answer: "True" },
        { id: 3, type: "tfng", text: "Antibiotics only affect harmful bacteria.", answer: "False" },
        { id: 4, type: "tfng", text: "All individuals respond identically to dietary interventions.", answer: "False" },
        { id: 5, type: "mcq", text: "What is dysbiosis?", options: ["A. Normal microbiome function", "B. Disruptions to the microbiome", "C. Bacterial reproduction", "D. Vitamin synthesis"], answer: "B" },
        { id: 6, type: "mcq", text: "What do gut bacteria metabolize fiber into?", options: ["A. Proteins", "B. Short-chain fatty acids", "C. Sugars", "D. Water"], answer: "B" },
        { id: 7, type: "mcq", text: "What connects gut and brain?", options: ["A. Blood vessels only", "B. The gut-brain axis", "C. Direct nerves only", "D. Nothing"], answer: "B" },
        { id: 8, type: "short", text: "What feed beneficial bacteria?", answer: "prebiotics" },
        { id: 9, type: "short", text: "What treatment transplants gut communities?", answer: "fecal microbiota transplantation" },
        { id: 10, type: "mcq", text: "What type of diet promotes diverse microbiome?", options: ["A. High-fat", "B. High-fiber", "C. High-protein", "D. Ultra-processed"], answer: "B" },
        { id: 11, type: "tfng", text: "Microbiome research questions are fully resolved.", answer: "False" },
        { id: 12, type: "short", text: "What mental health conditions correlate with microbiome alterations?", answer: "depression and anxiety" },
        { id: 13, type: "yng", text: "The author suggests microbiome research is a mature field.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "Philosophy of Mind and Consciousness",
      wordCount: 860,
      text: `Consciousness—subjective experience and awareness—presents one of philosophy's deepest puzzles. Despite centuries of inquiry and recent advances in neuroscience, explaining how physical processes give rise to subjective experience remains profoundly mysterious.

The hard problem of consciousness, articulated by philosopher David Chalmers, distinguishes between explaining cognitive functions and explaining why these functions are accompanied by subjective experience. We might fully understand how the brain processes visual information without explaining why there is something it is like to see red.

Physicalism holds that mental states are entirely physical—ultimately brain states. Identity theory proposes that each type of mental state corresponds to a specific brain state. Functionalism defines mental states by their causal roles rather than physical implementation, allowing for multiple physical realizations of the same mental state.

Dualism maintains that mind and matter are fundamentally different substances. While Cartesian dualism positing separate mental and physical realms has few contemporary defenders, property dualism—accepting physical substance while arguing consciousness has irreducibly non-physical properties—remains influential.

Qualia—the subjective, qualitative aspects of experience—are central to consciousness debates. What philosophers call the redness of red or the painfulness of pain seem to resist physical explanation. Frank Jackson's famous thought experiment about Mary, a color scientist who knows everything physical about color but has never seen it, challenges physicalism.

Neuroscience has identified neural correlates of consciousness—brain activity patterns associated with conscious states. However, correlation does not explain causation. Why specific neural activity produces specific experiences remains unexplained.

Integrated information theory proposes that consciousness corresponds to integrated information in a system. Global workspace theory suggests consciousness arises when information is widely broadcast across brain areas. These theories offer promising frameworks but face objections and remain incomplete.

The scope of consciousness extends beyond humans. Animal consciousness raises ethical questions about treatment of other species. Some argue that plants or even simple systems may have basic forms of experience. Artificial consciousness—whether machines could become conscious—has implications for AI development.

Progress in understanding consciousness may require conceptual innovations as significant as those that transformed physics in the twentieth century. The mystery remains humbling despite all we have learned.`,
      questions: [
        { id: 14, type: "tfng", text: "The hard problem of consciousness is fully solved.", answer: "False" },
        { id: 15, type: "tfng", text: "Functionalism defines mental states by physical implementation.", answer: "False" },
        { id: 16, type: "tfng", text: "Neural correlates explain why experiences occur.", answer: "False" },
        { id: 17, type: "tfng", text: "Questions about animal consciousness have ethical implications.", answer: "True" },
        { id: 18, type: "mcq", text: "Who articulated the hard problem of consciousness?", options: ["A. Frank Jackson", "B. David Chalmers", "C. Descartes", "D. Aristotle"], answer: "B" },
        { id: 19, type: "mcq", text: "What does physicalism hold?", options: ["A. Mind and matter are separate", "B. Mental states are entirely physical", "C. Consciousness is impossible", "D. Only experience is real"], answer: "B" },
        { id: 20, type: "mcq", text: "What are qualia?", options: ["A. Brain regions", "B. Subjective aspects of experience", "C. Philosophical arguments", "D. Neural patterns"], answer: "B" },
        { id: 21, type: "short", text: "What theory proposes consciousness corresponds to integrated information?", answer: "integrated information theory" },
        { id: 22, type: "short", text: "What does Mary, the color scientist, challenge?", answer: "physicalism" },
        { id: 23, type: "mcq", text: "What type of dualism has few contemporary defenders?", options: ["A. Property dualism", "B. Cartesian dualism", "C. Substance monism", "D. Functionalism"], answer: "B" },
        { id: 24, type: "tfng", text: "Current consciousness theories are complete.", answer: "False" },
        { id: 25, type: "short", text: "What type of consciousness concerns whether machines could be conscious?", answer: "artificial" },
        { id: 26, type: "yng", text: "The author suggests consciousness is fully understood.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "Globalization and Cultural Change",
      wordCount: 850,
      text: `Globalization has accelerated cultural exchange and transformation worldwide. The increasing interconnection of economies, communications, and movements of people has profound implications for cultural identity, diversity, and development.

Economic globalization drives cultural change through markets and corporations. Consumer products from multinational companies reach remote villages. Fast food chains spread dietary patterns. Fashion trends cross borders quickly. Critics worry about cultural homogenization as local practices give way to global commercial culture.

Media and communications technology amplify cultural flows. Satellite television and internet access expose populations to foreign content. Social media enables direct cultural exchange between individuals across continents. English has become the dominant language of international communication, raising concerns about linguistic diversity.

Migration creates cultural mixing in unprecedented ways. Diaspora communities maintain connections to homelands while adapting to new environments. Second-generation immigrants often navigate multiple cultural identities. Urban areas become increasingly multicultural mosaics.

Cultural globalization is not simply Western or American dominance, despite common assumptions. Korean pop music, Japanese animation, Indian cinema, and Brazilian music achieve global popularity. Cultural flows move in multiple directions, though not equally in all directions.

Resistance and adaptation characterize local responses. Communities selectively adopt elements from global culture while maintaining distinctive practices. Hybrid forms emerge that combine local and global influences. Religious and cultural revival movements sometimes react against perceived threats from outside influences.

Indigenous cultures face particular pressures. Traditional languages, practices, and knowledge systems developed over centuries can disappear within generations. Digital documentation and revitalization efforts attempt to preserve endangered cultures, though effectiveness varies.

Tourism both threatens and supports local cultures. Tourist demand can commercialize and distort cultural practices. However, tourism income can also fund cultural preservation and create economic incentives for maintaining traditions.

The debate continues between those emphasizing cultural loss and homogenization and those highlighting ongoing diversity and creative hybridization. The outcome likely varies across contexts, with some cultures more vulnerable than others and different elements of culture showing different trajectories.`,
      questions: [
        { id: 27, type: "tfng", text: "Cultural globalization flows only from West to East.", answer: "False" },
        { id: 28, type: "tfng", text: "English has become dominant in international communication.", answer: "True" },
        { id: 29, type: "tfng", text: "All communities simply accept global culture without adaptation.", answer: "False" },
        { id: 30, type: "tfng", text: "Tourism only harms local cultures.", answer: "False" },
        { id: 31, type: "mcq", text: "What spreads dietary patterns globally?", options: ["A. Governments", "B. Fast food chains", "C. Schools", "D. Hospitals"], answer: "B" },
        { id: 32, type: "mcq", text: "What is NOT mentioned as achieving global popularity?", options: ["A. Korean pop music", "B. Japanese animation", "C. German literature", "D. Indian cinema"], answer: "C" },
        { id: 33, type: "mcq", text: "What do diaspora communities maintain?", options: ["A. Only new culture", "B. Connections to homelands", "C. Isolation", "D. Single identity"], answer: "B" },
        { id: 34, type: "short", text: "What forms combine local and global influences?", answer: "hybrid" },
        { id: 35, type: "short", text: "What do revival movements react against?", answer: "outside influences" },
        { id: 36, type: "mcq", text: "What attempts to preserve endangered cultures?", options: ["A. Only tourism", "B. Digital documentation and revitalization", "C. Commercial development", "D. Immigration"], answer: "B" },
        { id: 37, type: "tfng", text: "Second-generation immigrants often have single cultural identities.", answer: "False" },
        { id: 38, type: "short", text: "What kind of areas become multicultural mosaics?", answer: "urban" },
        { id: 39, type: "yng", text: "The author concludes globalization has uniform effects everywhere.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates indigenous cultures face particular pressures.", answer: "Yes" }
      ]
    }
  ]
},
{
  id: "R14",
  title: "Advanced Reading Test 14",
  level: "Advanced",
  band: "7.0-7.5",
  passages: [
    {
      id: "P1",
      title: "Quantum Computing and Information Theory",
      wordCount: 870,
      text: `Quantum computing represents a fundamental departure from classical computation, leveraging quantum mechanical phenomena to process information in ways impossible for conventional computers. While classical computers manipulate bits existing as either zero or one, quantum computers employ qubits that can exist in superposition—simultaneously representing multiple states until measured.

This superposition property enables quantum parallelism, allowing quantum computers to explore vast solution spaces simultaneously. A system of just fifty qubits can represent more states than the most powerful classical supercomputers can process individually. However, extracting useful information from these quantum states requires carefully designed algorithms.

Entanglement, another quantum phenomenon, links qubits so that measuring one instantly affects its entangled partners regardless of distance. This "spooky action at distance," as Einstein famously described it, enables quantum algorithms to achieve computational speedups impossible classically. Shor's algorithm for factoring large numbers threatens current encryption systems, while Grover's algorithm accelerates database searches.

Quantum error correction presents formidable challenges. Qubits are extraordinarily fragile, losing their quantum properties through decoherence when interacting with their environment. Current quantum computers require extensive error correction, with thousands of physical qubits needed to create single reliable logical qubits. Maintaining qubits at temperatures near absolute zero adds engineering complexity.

Despite limitations, quantum advantages have been demonstrated for specific problems. Google's Sycamore processor achieved quantum supremacy in 2019, performing a calculation in minutes that would require thousands of years classically. However, practical applications remain limited, with current devices termed "noisy intermediate-scale quantum" computers.

Quantum simulation may prove the most impactful near-term application. Simulating molecular behavior for drug discovery and materials science is naturally suited to quantum computation. Classical computers struggle to model quantum systems accurately, but quantum computers can simulate them directly.

Quantum cryptography offers theoretically unbreakable encryption through quantum key distribution. Any attempt to intercept quantum-encrypted communications disturbs the quantum states, alerting communicating parties. Some networks already implement quantum cryptography, though widespread deployment faces practical obstacles.

The quantum computing industry has attracted massive investment from technology companies and governments worldwide. IBM, Google, Microsoft, and numerous startups compete to achieve scalable quantum computing. National quantum initiatives in the United States, China, and European Union reflect strategic importance attributed to this technology.`,
      questions: [
        { id: 1, type: "tfng", text: "Classical computers use qubits for computation.", answer: "False" },
        { id: 2, type: "tfng", text: "Superposition allows qubits to represent multiple states simultaneously.", answer: "True" },
        { id: 3, type: "tfng", text: "Entanglement effects are limited by distance.", answer: "False" },
        { id: 4, type: "tfng", text: "Current quantum computers require extensive error correction.", answer: "True" },
        { id: 5, type: "mcq", text: "What did Google's Sycamore processor demonstrate?", options: ["A. Quantum simulation", "B. Quantum supremacy", "C. Quantum cryptography", "D. Quantum networking"], answer: "B" },
        { id: 6, type: "mcq", text: "What threatens current encryption systems?", options: ["A. Grover's algorithm", "B. Quantum simulation", "C. Shor's algorithm", "D. Classical computing"], answer: "C" },
        { id: 7, type: "mcq", text: "What temperature do qubits require?", options: ["A. Room temperature", "B. Near absolute zero", "C. Boiling point", "D. Moderate cooling"], answer: "B" },
        { id: 8, type: "short", text: "What causes qubits to lose their quantum properties?", answer: "decoherence" },
        { id: 9, type: "short", text: "What type of application may prove most impactful near-term?", answer: "quantum simulation" },
        { id: 10, type: "mcq", text: "What alerts parties to interception in quantum cryptography?", options: ["A. Error messages", "B. Disturbance of quantum states", "C. Network delays", "D. Encryption failure"], answer: "B" },
        { id: 11, type: "tfng", text: "Only technology companies invest in quantum computing.", answer: "False" },
        { id: 12, type: "short", text: "What accelerates database searches?", answer: "Grover's algorithm" },
        { id: 13, type: "yng", text: "The author suggests quantum computing will replace all classical computing.", answer: "Not Given" }
      ]
    },
    {
      id: "P2",
      title: "The Anthropocene and Planetary Boundaries",
      wordCount: 865,
      text: `Humanity has become a geological force, prompting scientists to propose a new epoch: the Anthropocene. This proposed era recognizes that human activities now rival natural processes in shaping Earth's systems, from atmospheric composition to biodiversity patterns. The precise start date remains debated, with candidates including the agricultural revolution, industrial revolution, or mid-twentieth century acceleration.

The planetary boundaries framework identifies nine Earth system processes crucial for maintaining conditions favorable to human civilization. Crossing these boundaries risks triggering abrupt or irreversible environmental changes. Research indicates humanity has already transgressed several boundaries, including those for climate change, biodiversity loss, and biogeochemical flows.

Climate change represents the most widely recognized boundary. Atmospheric carbon dioxide concentrations have risen from pre-industrial levels of 280 parts per million to over 420, higher than any point in at least 800,000 years. Global average temperatures have increased approximately 1.1 degrees Celsius, with projections suggesting potentially catastrophic warming without dramatic emissions reductions.

Biodiversity loss may prove equally consequential. Current extinction rates exceed background rates by one hundred to one thousand times. Populations of monitored wildlife species have declined by nearly seventy percent since 1970. This biosphere integrity boundary may be the most fundamentally transgressed, with unknown consequences for ecosystem services humanity depends upon.

Biogeochemical flows of nitrogen and phosphorus have been dramatically altered by agricultural fertilizers. These nutrients, essential for food production, cause eutrophication when they reach waterways, creating dead zones in coastal areas worldwide. The Baltic Sea and Gulf of Mexico exemplify severe impacts from nutrient pollution.

Land-system change threatens both biodiversity and climate stability. Deforestation continues, particularly in tropical regions, eliminating carbon sinks and habitat for countless species. The Amazon rainforest approaches a tipping point where it could transition from carbon sink to carbon source, accelerating climate change.

Novel entities—synthetic chemicals, plastics, and other human-created materials—represent an emerging boundary of concern. Microplastics pervade ecosystems from ocean depths to mountain peaks. Persistent organic pollutants accumulate in food chains. The full effects of introducing thousands of novel substances into the environment remain poorly understood.

The boundaries interact in complex ways. Climate change accelerates biodiversity loss. Deforestation affects regional and global climate. These interactions create risks of cascading effects and systemic breakdown that linear analyses may underestimate.`,
      questions: [
        { id: 14, type: "tfng", text: "The start date of the Anthropocene is definitively established.", answer: "False" },
        { id: 15, type: "tfng", text: "Humanity has transgressed all nine planetary boundaries.", answer: "False" },
        { id: 16, type: "tfng", text: "Current CO2 levels exceed those of the past 800,000 years.", answer: "True" },
        { id: 17, type: "tfng", text: "Wildlife populations have increased since 1970.", answer: "False" },
        { id: 18, type: "mcq", text: "How many Earth system processes does the planetary boundaries framework identify?", options: ["A. Five", "B. Seven", "C. Nine", "D. Twelve"], answer: "C" },
        { id: 19, type: "mcq", text: "What causes dead zones in coastal areas?", options: ["A. Climate change", "B. Plastic pollution", "C. Eutrophication from nutrients", "D. Overfishing"], answer: "C" },
        { id: 20, type: "mcq", text: "What may the Amazon transition from?", options: ["A. Desert to forest", "B. Carbon sink to carbon source", "C. Grassland to rainforest", "D. Ocean to land"], answer: "B" },
        { id: 21, type: "short", text: "What type of pollutants accumulate in food chains?", answer: "persistent organic pollutants" },
        { id: 22, type: "short", text: "By how much have extinction rates exceeded background rates?", answer: "one hundred to one thousand times" },
        { id: 23, type: "mcq", text: "Which boundary may be most fundamentally transgressed?", options: ["A. Climate change", "B. Ocean acidification", "C. Biosphere integrity", "D. Freshwater use"], answer: "C" },
        { id: 24, type: "tfng", text: "The boundaries operate independently without interaction.", answer: "False" },
        { id: 25, type: "short", text: "What pervades ecosystems from ocean depths to mountain peaks?", answer: "microplastics" },
        { id: 26, type: "yng", text: "The author believes the full effects of novel entities are well understood.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "Behavioral Economics and Decision Making",
      wordCount: 860,
      text: `Behavioral economics challenges the rational actor model underlying classical economic theory. Drawing on psychology, it examines how cognitive limitations, emotional influences, and social factors shape economic decisions in ways that deviate systematically from theoretical predictions. These insights have profound implications for policy, business, and personal decision-making.

Prospect theory, developed by Daniel Kahneman and Amos Tversky, demonstrates that people evaluate outcomes relative to reference points rather than absolute values, and weight losses more heavily than equivalent gains. This loss aversion explains seemingly irrational behaviors like holding losing investments while selling winners, or refusing favorable gambles involving potential losses.

Mental accounting describes how people compartmentalize money and decisions rather than treating resources fungibly as rational theory predicts. Windfall income is often spent differently than earned income. Credit card spending exceeds cash spending for the same goods. These mental categories, while psychologically natural, can lead to suboptimal financial outcomes.

Hyperbolic discounting explains why people procrastinate and struggle with self-control. Immediate rewards are valued disproportionately over delayed ones, with this preference reversing as both outcomes recede into the future. This explains why people can sincerely plan to exercise tomorrow while choosing to skip today's workout.

Anchoring demonstrates how initial information, even arbitrary numbers, affects subsequent judgments. Real estate prices, salary negotiations, and retail pricing all exploit anchoring effects. Simply mentioning a high number before negotiation can shift outcomes substantially, even when the anchor is transparently irrelevant.

Heuristics—mental shortcuts for quick judgments—generally serve people well but create predictable biases. Availability heuristic leads people to overestimate risks they easily recall, like plane crashes, while underestimating common dangers like car accidents. Representativeness causes neglect of base rates when examples seem prototypical.

Choice architecture applies behavioral insights to improve decisions. Default options dramatically affect outcomes—automatic enrollment in retirement plans substantially increases participation without restricting choice. Simplifying options, timing information delivery, and social comparison feedback can all nudge behavior toward beneficial outcomes.

Critics argue behavioral economics overemphasizes irrationality while undervaluing how heuristics enable efficient decisions under uncertainty. Markets may correct individual biases through competition and learning. Nevertheless, behavioral insights have been institutionalized in government "nudge units" worldwide and transformed marketing practices.`,
      questions: [
        { id: 27, type: "tfng", text: "Behavioral economics supports the rational actor model.", answer: "False" },
        { id: 28, type: "tfng", text: "People weight losses more heavily than equivalent gains.", answer: "True" },
        { id: 29, type: "tfng", text: "Mental accounting treats all money fungibly.", answer: "False" },
        { id: 30, type: "tfng", text: "Anchoring effects require relevant anchors to be effective.", answer: "False" },
        { id: 31, type: "mcq", text: "Who developed prospect theory?", options: ["A. Adam Smith", "B. Kahneman and Tversky", "C. Richard Thaler", "D. Milton Friedman"], answer: "B" },
        { id: 32, type: "mcq", text: "What does hyperbolic discounting explain?", options: ["A. Investment returns", "B. Procrastination and self-control problems", "C. Market efficiency", "D. Rational choices"], answer: "B" },
        { id: 33, type: "mcq", text: "What leads people to overestimate memorable risks?", options: ["A. Representativeness", "B. Mental accounting", "C. Availability heuristic", "D. Loss aversion"], answer: "C" },
        { id: 34, type: "short", text: "What substantially increases retirement plan participation?", answer: "automatic enrollment" },
        { id: 35, type: "short", text: "What type of units have governments established based on behavioral insights?", answer: "nudge units" },
        { id: 36, type: "mcq", text: "How do people evaluate outcomes according to prospect theory?", options: ["A. By absolute values", "B. Relative to reference points", "C. Through rational calculation", "D. Based on market prices"], answer: "B" },
        { id: 37, type: "tfng", text: "Critics believe heuristics are always harmful.", answer: "False" },
        { id: 38, type: "short", text: "What type of spending exceeds cash spending for the same goods?", answer: "credit card" },
        { id: 39, type: "yng", text: "The author dismisses all criticisms of behavioral economics.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates behavioral insights have affected marketing.", answer: "Yes" }
      ]
    }
  ]
},
{
  id: "R15",
  title: "Advanced Reading Test 15",
  level: "Advanced",
  band: "7.0-7.5",
  passages: [
    {
      id: "P1",
      title: "Epigenetics and Inheritance",
      wordCount: 870,
      text: `Epigenetics has revolutionized understanding of heredity by revealing mechanisms through which gene expression changes without alterations to DNA sequences. These modifications, potentially heritable across generations, challenge the central dogma that information flows unidirectionally from genes to traits and suggest environmental influences may leave molecular marks transmitted to offspring.

DNA methylation, the addition of methyl groups to DNA, typically suppresses gene expression. Patterns of methylation are established during development and can persist through cell divisions. While most methylation marks are erased during reproduction, some evidence suggests certain marks escape this reprogramming and pass to subsequent generations.

Histone modifications represent another epigenetic layer. DNA wraps around histone proteins, and chemical modifications to these proteins affect how tightly DNA is packaged, influencing which genes are accessible for expression. Acetylation generally opens chromatin structure, enhancing transcription, while other modifications can silence genes.

Non-coding RNAs add complexity to epigenetic regulation. Long non-coding RNAs can guide modification machinery to specific genomic locations. Small RNAs can silence genes through RNA interference. The full scope of RNA-mediated regulation continues expanding as research progresses.

Environmental factors demonstrably influence epigenetic marks. Nutrition, stress, toxin exposure, and other experiences modify methylation and histone patterns. Studies of famine survivors show epigenetic effects visible in subsequent generations. However, distinguishing true transgenerational inheritance from effects on germ cells present during exposure remains methodologically challenging.

Developmental programming illustrates epigenetic sensitivity. Early-life experiences, including prenatal conditions, can establish epigenetic patterns influencing health throughout life. The developmental origins of health and disease hypothesis posits that conditions during critical periods program metabolism, disease susceptibility, and even behavioral tendencies.

Cancer research has embraced epigenetics. Tumors display characteristic epigenetic changes, including global hypomethylation and localized hypermethylation of tumor suppressor genes. Unlike genetic mutations, epigenetic modifications are potentially reversible, making them attractive therapeutic targets. Drugs modifying DNA methylation or histone acetylation are already approved for certain cancers.

Epigenetics bridges nature and nurture, suggesting experiences can become biologically embedded and potentially transmitted. This has implications for understanding health disparities, trauma transmission, and evolutionary mechanisms beyond natural selection of random mutations.`,
      questions: [
        { id: 1, type: "tfng", text: "Epigenetic changes involve alterations to DNA sequences.", answer: "False" },
        { id: 2, type: "tfng", text: "DNA methylation typically enhances gene expression.", answer: "False" },
        { id: 3, type: "tfng", text: "Histone acetylation generally opens chromatin structure.", answer: "True" },
        { id: 4, type: "tfng", text: "All epigenetic marks are erased during reproduction.", answer: "False" },
        { id: 5, type: "mcq", text: "What wraps around histone proteins?", options: ["A. RNA", "B. DNA", "C. Methyl groups", "D. Acetyl groups"], answer: "B" },
        { id: 6, type: "mcq", text: "What adds complexity to epigenetic regulation?", options: ["A. DNA sequences", "B. Genetic mutations", "C. Non-coding RNAs", "D. Protein synthesis"], answer: "C" },
        { id: 7, type: "mcq", text: "What makes epigenetic modifications attractive therapeutic targets?", options: ["A. Their permanence", "B. Their reversibility", "C. Their rarity", "D. Their simplicity"], answer: "B" },
        { id: 8, type: "short", text: "What hypothesis relates early conditions to later disease?", answer: "developmental origins of health and disease" },
        { id: 9, type: "short", text: "What type of changes do tumors display epigenetically?", answer: "hypomethylation and hypermethylation" },
        { id: 10, type: "mcq", text: "What do studies of famine survivors show?", options: ["A. No genetic effects", "B. DNA mutations", "C. Epigenetic effects in subsequent generations", "D. Immediate recovery"], answer: "C" },
        { id: 11, type: "tfng", text: "Distinguishing true transgenerational inheritance is methodologically simple.", answer: "False" },
        { id: 12, type: "short", text: "What can guide modification machinery to specific genomic locations?", answer: "long non-coding RNAs" },
        { id: 13, type: "yng", text: "The author suggests epigenetics has no relevance to cancer treatment.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Science of Sleep Architecture",
      wordCount: 865,
      text: `Sleep architecture describes the structured organization of sleep into distinct stages cycling throughout the night. Understanding these patterns reveals sleep's complexity and explains how various factors—from aging to medications to disorders—affect sleep quality beyond simple duration measures.

Non-rapid eye movement sleep comprises three stages of progressively deeper sleep. Stage N1, the transitional phase lasting minutes, features slowing brain waves and easy awakening. Stage N2, constituting roughly half of total sleep, shows distinctive brain wave patterns called sleep spindles and K-complexes. Stage N3, slow-wave sleep characterized by delta waves, represents the deepest sleep from which awakening is most difficult.

Rapid eye movement sleep, characterized by fast brain activity resembling wakefulness, features vivid dreaming, temporary muscle paralysis, and rapid eye movements. Despite its active brain state, REM sleep is considered the stage most important for cognitive functions including memory consolidation, emotional processing, and creative problem-solving.

Sleep cycles progress through these stages approximately every ninety minutes, with composition changing across the night. Early cycles contain more slow-wave sleep, while REM periods lengthen toward morning. This architecture explains why late-night or early-morning sleep deprivation disproportionately affects REM-dependent functions.

Slow-wave sleep appears crucial for physical restoration and immune function. Growth hormone release peaks during deep sleep. Memory consolidation involves information transfer from hippocampus to cortex during this stage. Slow-wave sleep tends to be preserved when sleep is restricted, suggesting homeostatic priority.

Age profoundly affects sleep architecture. Infants spend half their sleep in REM, while older adults may see dramatic slow-wave sleep reduction. Sleep efficiency—time asleep relative to time in bed—declines with age. These changes may contribute to cognitive aging and increased disease susceptibility in elderly populations.

Sleep disorders disrupt normal architecture in characteristic ways. Sleep apnea fragments sleep through repeated awakenings, reducing slow-wave and REM sleep. Insomnia often shows prolonged sleep onset and increased lighter sleep stages. Understanding architectural disruptions helps diagnose disorders and evaluate treatments.

Modern sleep tracking technology, while increasingly sophisticated, captures only approximations of true sleep architecture. Polysomnography—measuring brain waves, eye movements, and muscle activity simultaneously—remains the gold standard for clinical assessment.`,
      questions: [
        { id: 14, type: "tfng", text: "Sleep architecture refers only to sleep duration.", answer: "False" },
        { id: 15, type: "tfng", text: "Stage N2 constitutes roughly half of total sleep.", answer: "True" },
        { id: 16, type: "tfng", text: "REM sleep features temporary muscle paralysis.", answer: "True" },
        { id: 17, type: "tfng", text: "Sleep cycles progress through stages every thirty minutes.", answer: "False" },
        { id: 18, type: "mcq", text: "What stage represents the deepest sleep?", options: ["A. N1", "B. N2", "C. N3", "D. REM"], answer: "C" },
        { id: 19, type: "mcq", text: "What peaks during deep sleep?", options: ["A. Cortisol release", "B. Growth hormone release", "C. Adrenaline", "D. Melatonin"], answer: "B" },
        { id: 20, type: "mcq", text: "What percentage of sleep is REM in infants?", options: ["A. Twenty-five percent", "B. Half", "C. Ten percent", "D. Seventy-five percent"], answer: "B" },
        { id: 21, type: "short", text: "What brain wave patterns characterize Stage N2?", answer: "sleep spindles and K-complexes" },
        { id: 22, type: "short", text: "What remains the gold standard for sleep assessment?", answer: "polysomnography" },
        { id: 23, type: "mcq", text: "When do REM periods lengthen?", options: ["A. Early in the night", "B. Middle of the night", "C. Toward morning", "D. During naps"], answer: "C" },
        { id: 24, type: "tfng", text: "Sleep efficiency increases with age.", answer: "False" },
        { id: 25, type: "short", text: "What fragments sleep in sleep apnea?", answer: "repeated awakenings" },
        { id: 26, type: "yng", text: "The author suggests modern sleep tracking equals polysomnography accuracy.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Economics of Platform Markets",
      wordCount: 860,
      text: `Platform markets have transformed economic activity by connecting distinct user groups through digital intermediaries. These two-sided or multi-sided markets exhibit distinctive dynamics that challenge traditional economic analysis and have produced unprecedented concentrations of market power in companies like Amazon, Apple, Google, and Meta.

Network effects drive platform economics. Direct network effects mean platforms become more valuable as users join—a social network with few members offers little value. Indirect network effects connect different user groups—more app developers attract more smartphone users, who in turn attract more developers. These effects create powerful feedback loops enabling rapid growth.

Platform competition often produces winner-take-all dynamics. Once a platform achieves critical mass, network effects make switching costly for users. Competitors face a chicken-and-egg problem: they cannot attract one user group without the other. Multi-homing—using multiple platforms simultaneously—can moderate concentration, but switching costs and exclusive contracts often limit this moderating force.

Pricing strategies differ fundamentally from traditional markets. Platforms may subsidize one user group while charging another. Free services to consumers attract the audience that advertisers pay to reach. Determining optimal pricing requires understanding cross-subsidization across platform sides and how price changes affect participation on each side.

Data accumulation creates additional competitive advantages. Platforms collect vast information about user behavior, enabling personalization, targeted advertising, and service improvements. Machine learning algorithms improve with more data, creating a data feedback loop where leading platforms maintain advantages through superior information assets.

Regulatory frameworks struggle to address platform market power. Traditional antitrust analysis focusing on consumer prices seems inadequate when services are free. Defining relevant markets proves difficult when platforms span multiple industries. Proposals range from breaking up large platforms to requiring interoperability or data portability.

The global dimension complicates governance further. Platforms operate across jurisdictions with different regulatory approaches. The European Union has taken aggressive action while the United States historically favored lighter regulation. China has developed alternative platforms largely separated from Western ecosystems.

Platform labor arrangements have drawn scrutiny. Gig economy workers classified as independent contractors lack traditional employment protections. Algorithmic management creates new forms of workplace surveillance and control. Debates continue over how platform work should be categorized and regulated.`,
      questions: [
        { id: 27, type: "tfng", text: "Platform markets connect distinct user groups.", answer: "True" },
        { id: 28, type: "tfng", text: "Direct network effects connect different user groups.", answer: "False" },
        { id: 29, type: "tfng", text: "Platforms always charge all user groups equally.", answer: "False" },
        { id: 30, type: "tfng", text: "Traditional antitrust analysis focuses on consumer prices.", answer: "True" },
        { id: 31, type: "mcq", text: "What enables rapid platform growth?", options: ["A. Government support", "B. Network effect feedback loops", "C. Low technology costs", "D. Simple regulation"], answer: "B" },
        { id: 32, type: "mcq", text: "What can moderate platform concentration?", options: ["A. More regulation", "B. Multi-homing", "C. Higher prices", "D. Fewer features"], answer: "B" },
        { id: 33, type: "mcq", text: "What region has taken aggressive regulatory action?", options: ["A. United States", "B. China", "C. European Union", "D. Japan"], answer: "C" },
        { id: 34, type: "short", text: "What problem do competitors face when entering platform markets?", answer: "chicken-and-egg problem" },
        { id: 35, type: "short", text: "What creates additional competitive advantages through information?", answer: "data accumulation" },
        { id: 36, type: "mcq", text: "How are gig economy workers typically classified?", options: ["A. Full employees", "B. Part-time employees", "C. Independent contractors", "D. Government workers"], answer: "C" },
        { id: 37, type: "tfng", text: "Machine learning algorithms improve with more data.", answer: "True" },
        { id: 38, type: "short", text: "What creates new forms of workplace surveillance?", answer: "algorithmic management" },
        { id: 39, type: "yng", text: "The author suggests regulatory frameworks adequately address platform power.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates China has platforms separate from Western ecosystems.", answer: "Yes" }
      ]
    }
  ]
},

// R16 - ADVANCED (Band 7.5-8.0)
{
  id: "R16",
  level: "Advanced",
  bandTarget: "7.5-8.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Neuroscience of Decision Making",
      wordCount: 875,
      text: `Human decision-making involves intricate neural processes that neuroscience is only beginning to unravel. Traditional economic models assumed rational actors maximizing utility through logical analysis, but neuroimaging studies reveal that emotions, intuitions, and cognitive biases fundamentally shape our choices in ways we rarely consciously recognize.

The prefrontal cortex, particularly the ventromedial region, plays a crucial role in evaluating options and anticipating outcomes. Patients with damage to this area, such as the famous case of Phineas Gage, retain intellectual capabilities but make catastrophically poor decisions. They can analyze options logically yet fail to integrate emotional signals that normally guide advantageous choices.

The brain's reward circuitry, centered on the nucleus accumbens and ventral tegmental area, processes anticipated pleasure and motivates behavior. Dopamine neurons respond not merely to rewards but to predictions of reward, creating learning signals that shape future decisions. Unexpected rewards trigger dopamine surges; expected rewards that fail to materialize cause dopamine dips.

Temporal discounting presents a particularly revealing window into decision neuroscience. Given choices between smaller immediate rewards and larger delayed ones, people typically overvalue immediacy—a pattern with clear neural correlates. Immediate rewards activate limbic regions associated with emotional processing, while delayed rewards primarily engage prefrontal areas associated with abstract reasoning.

The interplay between these systems helps explain addiction, procrastination, and various self-control failures. Addictive substances hijack reward circuitry, creating powerful craving signals that override prefrontal restraint. Understanding these mechanisms suggests interventions—precommitment strategies, environmental restructuring—that might strengthen self-control.

Social decisions engage additional neural machinery. The anterior cingulate cortex monitors outcomes and detects errors, including social missteps. Mirror neurons, though their function remains debated, may facilitate understanding others' intentions. The temporoparietal junction enables perspective-taking essential for strategic interaction.

Recent research explores how neural processes might be modified. Transcranial magnetic stimulation can temporarily alter prefrontal function, changing risk preferences and moral judgments. While such interventions raise ethical concerns, they demonstrate the neural basis of decisions once considered purely philosophical matters.

The implications extend to law, policy, and everyday life. If decisions reflect neural processes shaped by factors beyond conscious control—genetics, development, environment—traditional concepts of free will and responsibility require reexamination. Neuromarketing applies these insights commercially, designing appeals that target neural vulnerabilities.`,
      questions: [
        { id: 1, type: "tfng", text: "Traditional economic models accurately predicted decision-making processes.", answer: "False" },
        { id: 2, type: "tfng", text: "The ventromedial prefrontal cortex is involved in evaluating options.", answer: "True" },
        { id: 3, type: "tfng", text: "Phineas Gage lost his intellectual capabilities after brain damage.", answer: "False" },
        { id: 4, type: "tfng", text: "Dopamine neurons only respond to actual rewards received.", answer: "False" },
        { id: 5, type: "mcq", text: "What triggers dopamine surges?", options: ["A. Expected rewards", "B. Unexpected rewards", "C. Delayed rewards", "D. Social rewards"], answer: "B" },
        { id: 6, type: "mcq", text: "Temporal discounting refers to:", options: ["A. Preferring delayed rewards", "B. Overvaluing immediate rewards", "C. Ignoring all rewards", "D. Equal valuation of rewards"], answer: "B" },
        { id: 7, type: "mcq", text: "What brain area monitors social missteps?", options: ["A. Nucleus accumbens", "B. Anterior cingulate cortex", "C. Ventral tegmental area", "D. Mirror neurons"], answer: "B" },
        { id: 8, type: "short", text: "What region enables perspective-taking for strategic interaction?", answer: "temporoparietal junction" },
        { id: 9, type: "short", text: "What technique can temporarily alter prefrontal function?", answer: "transcranial magnetic stimulation" },
        { id: 10, type: "mcq", text: "What field applies neuroscience commercially?", options: ["A. Neurolaw", "B. Neurophilosophy", "C. Neuromarketing", "D. Neuroeducation"], answer: "C" },
        { id: 11, type: "tfng", text: "Mirror neuron function is definitively established.", answer: "False" },
        { id: 12, type: "short", text: "What do addictive substances hijack?", answer: "reward circuitry" },
        { id: 13, type: "yng", text: "The author believes traditional concepts of free will need no revision.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Evolution of Language",
      wordCount: 870,
      text: `The origin and evolution of human language remains one of the most debated topics in science, touching on anthropology, linguistics, neuroscience, and evolutionary biology. While other species communicate through various means, human language possesses unique features—particularly its generative grammar and symbolic abstraction—that set it apart from animal communication systems.

The timing of language emergence proves difficult to establish. Speech leaves no direct fossil record, compelling researchers to seek indirect evidence. Changes in anatomical structures—the descended larynx, the hypoglossal canal's size, the configuration of the ear bones—suggest when speech capabilities developed. Genetic evidence, particularly the FOXP2 gene associated with language, provides additional clues.

Some scholars argue language emerged suddenly, perhaps through a single mutation, within the past one hundred thousand years. This "saltational" view, associated with Noam Chomsky, emphasizes language's unique properties and the lack of intermediate forms. Critics counter that complex adaptations typically evolve gradually and that language likely developed through multiple stages.

Gestural theories propose that language evolved first as manual communication before transitioning to speech. Great apes show sophisticated gestural abilities, and sign languages demonstrate that manual modality fully supports linguistic complexity. The transition to speech may have freed hands for tool use while enabling communication in darkness or while carrying objects.

Social complexity theories emphasize language's role in managing relationships within growing human groups. As group sizes increased beyond what grooming could maintain, vocal communication provided an efficient alternative for social bonding. Gossip—sharing social information—may have been language's original selective pressure.

The relationship between language and thought remains contested. Strong versions of linguistic relativity, associated with Benjamin Whorf, claimed language determines thought, but this view has been largely abandoned. Weaker versions—that language influences certain cognitive processes—find empirical support. Different languages categorize color, time, and space differently, affecting how speakers perceive these domains.

Language acquisition in children provides insights into linguistic nature. Children acquire language with remarkable speed despite limited input, mastering complex grammatical rules without explicit instruction. This "poverty of the stimulus" argument suggests innate language capacities, though debates continue about their specificity and evolutionary origin.

Languages change continuously through processes linguists increasingly understand. Sound changes follow predictable patterns. Grammaticalization transforms content words into grammatical elements. Language contact produces pidgins and creoles, revealing universal constraints on linguistic structure.`,
      questions: [
        { id: 14, type: "tfng", text: "Speech leaves direct evidence in the fossil record.", answer: "False" },
        { id: 15, type: "tfng", text: "The FOXP2 gene is associated with language.", answer: "True" },
        { id: 16, type: "tfng", text: "Chomsky supports the view that language evolved gradually.", answer: "False" },
        { id: 17, type: "tfng", text: "Sign languages demonstrate full linguistic complexity.", answer: "True" },
        { id: 18, type: "mcq", text: "What provides indirect evidence of speech capabilities?", options: ["A. Written records", "B. Anatomical structures", "C. Cave paintings", "D. Tool types"], answer: "B" },
        { id: 19, type: "mcq", text: "According to gestural theories, what may have freed hands?", options: ["A. Walking upright", "B. Transition to speech", "C. Tool abandonment", "D. Social grooming"], answer: "B" },
        { id: 20, type: "mcq", text: "What may have been language's original selective pressure?", options: ["A. Tool making", "B. Hunting coordination", "C. Gossip", "D. Territorial defense"], answer: "C" },
        { id: 21, type: "short", text: "What is the name for the argument about children acquiring language despite limited input?", answer: "poverty of the stimulus" },
        { id: 22, type: "short", text: "What transforms content words into grammatical elements?", answer: "grammaticalization" },
        { id: 23, type: "mcq", text: "What view of linguistic relativity has been largely abandoned?", options: ["A. Weak versions", "B. Strong versions", "C. All versions", "D. Modified versions"], answer: "B" },
        { id: 24, type: "tfng", text: "Different languages categorize color identically.", answer: "False" },
        { id: 25, type: "short", text: "What type of languages emerge from language contact?", answer: "pidgins and creoles" },
        { id: 26, type: "yng", text: "The author suggests the timing of language emergence is easily determined.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "Sustainable Urban Transportation Systems",
      wordCount: 865,
      text: `Urban transportation systems face mounting pressure to reduce carbon emissions, improve air quality, and enhance livability while meeting growing mobility demands. Cities worldwide are experimenting with integrated approaches that combine technological innovation, infrastructure investment, and policy mechanisms to create more sustainable transportation networks.

Public transit forms the backbone of sustainable urban mobility. High-capacity systems—metro networks, bus rapid transit, light rail—move large numbers efficiently with lower per-capita emissions than private vehicles. However, many transit systems suffer from underinvestment, declining ridership, and competition from ride-hailing services. Successful systems typically feature frequent service, comprehensive coverage, and integration with other modes.

Active transportation—walking and cycling—produces zero direct emissions while providing health benefits. Protected cycling infrastructure has enabled dramatic increases in cycling rates in cities like Copenhagen and Amsterdam. However, climate, topography, and distance limit cycling's potential as a primary mode. Electric bicycles and scooters extend active transportation's range and appeal.

Electric vehicles promise to eliminate tailpipe emissions, though their environmental benefit depends on electricity sources. Widespread adoption requires charging infrastructure, battery technology improvements, and price reductions. Some cities ban conventional vehicles from central areas or plan to phase out internal combustion engines entirely.

Shared mobility services—car sharing, bike sharing, ride-hailing—can reduce vehicle ownership and parking demand. However, ride-hailing may increase vehicle miles traveled if it substitutes for transit or active transportation rather than private car trips. Regulatory frameworks struggle to capture sharing economy benefits while managing negative externalities.

Land use patterns fundamentally shape transportation demand. Sprawling development necessitates automobile dependence; compact, mixed-use development supports transit and active transportation. Transit-oriented development clusters housing and commercial activity around transit stations, reducing travel distances and supporting transit ridership.

Pricing mechanisms can shift behavior. Congestion pricing charges vehicles for entering busy areas during peak periods, reducing traffic and generating revenue for transit investment. Parking pricing similarly influences mode choice. However, pricing raises equity concerns if lower-income residents bear disproportionate burdens without adequate alternatives.

Autonomous vehicles present both opportunities and risks for sustainability. They could enable efficient shared fleets that reduce parking needs and vehicle ownership. Alternatively, they could increase vehicle miles traveled by enabling productive use of travel time, inducing sprawl, and competing with transit. Policy choices will shape which scenario materializes.`,
      questions: [
        { id: 27, type: "tfng", text: "Public transit produces higher per-capita emissions than private vehicles.", answer: "False" },
        { id: 28, type: "tfng", text: "Ride-hailing always reduces vehicle miles traveled.", answer: "False" },
        { id: 29, type: "tfng", text: "Electric vehicle benefits depend partly on electricity sources.", answer: "True" },
        { id: 30, type: "tfng", text: "Congestion pricing generates revenue for transit.", answer: "True" },
        { id: 31, type: "mcq", text: "What extends active transportation's range?", options: ["A. Better roads", "B. Electric bicycles", "C. More sidewalks", "D. Traffic signals"], answer: "B" },
        { id: 32, type: "mcq", text: "What type of development supports transit ridership?", options: ["A. Sprawling development", "B. Industrial zones", "C. Transit-oriented development", "D. Suburban expansion"], answer: "C" },
        { id: 33, type: "mcq", text: "What concern does pricing raise?", options: ["A. Efficiency", "B. Technology", "C. Equity", "D. Speed"], answer: "C" },
        { id: 34, type: "short", text: "Which cities are mentioned as having high cycling rates?", answer: "Copenhagen and Amsterdam" },
        { id: 35, type: "short", text: "What type of development necessitates automobile dependence?", answer: "sprawling development" },
        { id: 36, type: "mcq", text: "What could autonomous vehicles compete with?", options: ["A. Bicycles only", "B. Walking only", "C. Transit", "D. Parking"], answer: "C" },
        { id: 37, type: "tfng", text: "Land use patterns have no effect on transportation demand.", answer: "False" },
        { id: 38, type: "short", text: "What charges vehicles entering busy areas during peak periods?", answer: "congestion pricing" },
        { id: 39, type: "yng", text: "The author believes autonomous vehicles will definitely improve sustainability.", answer: "Not Given" },
        { id: 40, type: "yng", text: "The passage suggests successful transit systems need frequent service.", answer: "Yes" }
      ]
    }
  ]
},

// R17 - ADVANCED (Band 7.5-8.0)
{
  id: "R17",
  level: "Advanced",
  bandTarget: "7.5-8.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Science of Memory Consolidation",
      wordCount: 880,
      text: `Memory consolidation—the process by which temporary memories become stable long-term memories—involves intricate neurological mechanisms that neuroscience continues to explore. Understanding consolidation has profound implications for education, treating memory disorders, and comprehending consciousness itself.

The hippocampus serves as a critical waystation for new memories. Information initially encoded in this structure must be consolidated into the neocortex for permanent storage. This transfer occurs gradually, explaining why hippocampal damage impairs recent memories while sparing older ones—a pattern observed in the famous patient H.M.

Sleep plays an essential role in consolidation. During slow-wave sleep, the hippocampus replays recent experiences at accelerated speeds, transmitting patterns to the neocortex. REM sleep may then integrate this information with existing knowledge structures. Sleep deprivation impairs memory formation, not merely because of attention deficits during encoding but because consolidation itself requires sleep.

Synaptic consolidation occurs within hours of learning, stabilizing memory traces through protein synthesis and structural changes at synapses. Blocking protein synthesis during this window prevents long-term memory formation. Systems consolidation, involving hippocampal-neocortical transfer, unfolds over weeks to years, gradually rendering memories independent of the hippocampus.

Reconsolidation challenges traditional views of memory stability. When memories are reactivated, they enter a labile state requiring reconsolidation to persist. This vulnerability window offers therapeutic possibilities—traumatic memories might be modified during reconsolidation, potentially treating post-traumatic stress disorder. However, reconsolidation also means memories can be corrupted through suggestion.

Emotional memories consolidate differently from neutral ones. The amygdala modulates consolidation in other brain regions, enhancing memory for emotionally significant events. Stress hormones like cortisol strengthen consolidation up to a point, beyond which they impair memory. This inverted-U relationship helps explain both vivid traumatic memories and stress-induced memory failures.

Spaced practice enhances consolidation compared to massed practice—studying material across multiple sessions produces better retention than concentrated cramming. Each retrieval attempt strengthens memory traces and identifies gaps requiring further study. This spacing effect has clear educational implications often ignored in academic settings.

Individual differences in consolidation efficiency may partly explain memory variations across people and across the lifespan. Aging impairs slow-wave sleep, potentially contributing to age-related memory decline. Genetic factors influence consolidation-related proteins. Understanding these differences might enable personalized interventions for memory enhancement.`,
      questions: [
        { id: 1, type: "tfng", text: "The hippocampus is where permanent memories are stored.", answer: "False" },
        { id: 2, type: "tfng", text: "Patient H.M. had impaired recent memories but preserved older ones.", answer: "True" },
        { id: 3, type: "tfng", text: "Sleep deprivation only affects attention during encoding.", answer: "False" },
        { id: 4, type: "tfng", text: "Blocking protein synthesis prevents long-term memory formation.", answer: "True" },
        { id: 5, type: "mcq", text: "During what type of sleep does the hippocampus replay experiences?", options: ["A. REM sleep", "B. Light sleep", "C. Slow-wave sleep", "D. Dreaming"], answer: "C" },
        { id: 6, type: "mcq", text: "What does reconsolidation suggest about memories?", options: ["A. They are permanent", "B. They can be modified when reactivated", "C. They never change", "D. They cannot be corrupted"], answer: "B" },
        { id: 7, type: "mcq", text: "What brain structure modulates emotional memory consolidation?", options: ["A. Hippocampus", "B. Neocortex", "C. Amygdala", "D. Cerebellum"], answer: "C" },
        { id: 8, type: "short", text: "What hormone strengthens consolidation up to a point?", answer: "cortisol" },
        { id: 9, type: "short", text: "What practice enhances consolidation compared to massed practice?", answer: "spaced practice" },
        { id: 10, type: "mcq", text: "What impairs slow-wave sleep and may contribute to memory decline?", options: ["A. Exercise", "B. Aging", "C. Diet", "D. Meditation"], answer: "B" },
        { id: 11, type: "tfng", text: "Systems consolidation occurs within hours.", answer: "False" },
        { id: 12, type: "short", text: "What disorder might be treated by modifying memories during reconsolidation?", answer: "post-traumatic stress disorder" },
        { id: 13, type: "yng", text: "The author suggests cramming is as effective as spaced study.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Philosophy of Artificial Intelligence",
      wordCount: 875,
      text: `Artificial intelligence raises profound philosophical questions about the nature of mind, consciousness, and intelligence itself. As AI systems grow more capable, debates once confined to academic philosophy acquire practical urgency for policy, ethics, and human self-understanding.

The Turing test, proposed in 1950, suggested that machines demonstrating human-equivalent conversational ability should be considered intelligent. Critics argue this behaviorist approach conflates appearance with reality—a system might simulate intelligence without possessing it. The Chinese Room argument, advanced by John Searle, illustrates this concern: a person manipulating Chinese symbols according to rules might produce appropriate responses without understanding Chinese.

Functionalism, a dominant philosophy of mind, holds that mental states are defined by their functional roles rather than their physical substrate. On this view, silicon-based systems could genuinely think if they instantiate the right functional organization. Opponents contend that consciousness requires specific biological properties that silicon cannot replicate.

The hard problem of consciousness—explaining why subjective experience exists—applies to AI with particular force. Even if machines process information similarly to brains, why should this processing feel like anything? Some philosophers argue consciousness emerges from information integration; others maintain it requires biological neurons; still others consider it fundamentally mysterious.

Machine learning approaches raise distinctive philosophical issues. Deep learning systems develop internal representations opaque even to their creators, achieving goals without explicit programming of methods. This opacity challenges our understanding of intelligence and complicates attribution of understanding or intention to AI systems.

The alignment problem concerns ensuring AI systems pursue goals beneficial to humanity. As systems grow more capable, misalignment between programmed objectives and human values poses increasing risks. Specifying human values precisely enough for AI implementation proves surprisingly difficult—values are contextual, conflicting, and often tacit.

Debates about AI sentience have intensified. If AI systems can suffer, they may deserve moral consideration. Some argue current systems already experience forms of suffering; others dismiss this as anthropomorphic projection. The difficulty of detecting consciousness in systems unlike us makes this question particularly challenging.

Questions of creativity and originality emerge as AI generates art, music, and literature. Can algorithmic processes be genuinely creative, or merely recombinatorial? The distinction matters for copyright, attribution, and understanding creativity itself.`,
      questions: [
        { id: 14, type: "tfng", text: "The Turing test was proposed in the 21st century.", answer: "False" },
        { id: 15, type: "tfng", text: "Functionalism holds that mental states require biological substrate.", answer: "False" },
        { id: 16, type: "tfng", text: "Deep learning systems have transparent internal representations.", answer: "False" },
        { id: 17, type: "tfng", text: "Specifying human values for AI is straightforward.", answer: "False" },
        { id: 18, type: "mcq", text: "What does the Chinese Room argument illustrate?", options: ["A. Machines can understand language", "B. Simulation of intelligence isn't real intelligence", "C. AI is conscious", "D. The Turing test is valid"], answer: "B" },
        { id: 19, type: "mcq", text: "What is the hard problem of consciousness?", options: ["A. Building faster computers", "B. Explaining subjective experience", "C. Programming AI", "D. Testing intelligence"], answer: "B" },
        { id: 20, type: "mcq", text: "What does the alignment problem concern?", options: ["A. Hardware compatibility", "B. Ensuring AI goals benefit humanity", "C. Software bugs", "D. Processing speed"], answer: "B" },
        { id: 21, type: "short", text: "Who advanced the Chinese Room argument?", answer: "John Searle" },
        { id: 22, type: "short", text: "What describes deep learning's internal representations?", answer: "opaque" },
        { id: 23, type: "mcq", text: "What emerges as AI generates art and literature?", options: ["A. Legal clarity", "B. Questions of creativity and originality", "C. Reduced human art", "D. Universal agreement"], answer: "B" },
        { id: 24, type: "tfng", text: "Values are always explicit and non-conflicting.", answer: "False" },
        { id: 25, type: "short", text: "What might AI deserve if it can suffer?", answer: "moral consideration" },
        { id: 26, type: "yng", text: "The author believes we have definitively determined if AI can be conscious.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "Global Water Security Challenges",
      wordCount: 870,
      text: `Water security—reliable access to adequate quantities of acceptable quality water—represents one of humanity's most pressing challenges. Climate change, population growth, and competing demands strain water resources worldwide, with potentially severe consequences for human welfare, food security, and geopolitical stability.

Freshwater constitutes less than three percent of Earth's water, and most of this is locked in glaciers and ice caps. Accessible surface and groundwater supplies are unevenly distributed, leaving many regions chronically water-stressed. Climate change exacerbates this maldistribution, altering precipitation patterns and causing more extreme droughts and floods.

Groundwater depletion poses particular concerns. Aquifers that accumulated over millennia are being pumped at unsustainable rates for irrigation and urban supply. The Ogallala Aquifer in the United States, supporting significant agricultural production, has declined dramatically. Parts of northern India face similar depletion. Once exhausted, these aquifers cannot readily recover.

Agricultural water use dominates global consumption, accounting for approximately seventy percent of freshwater withdrawals. Irrigation has enabled dramatic increases in food production but often inefficiently. Flood irrigation loses substantial water to evaporation; drip systems deliver water directly to plant roots with far less waste. However, efficient systems require capital investment many farmers cannot afford.

Urban water challenges intensify as cities grow. Aging infrastructure in developed countries loses substantial treated water through leaks. Rapidly growing cities in developing countries struggle to extend water and sanitation services to expanding populations. Informal settlements often lack legal connections, relying on expensive vendors or contaminated sources.

Water quality problems compound quantity concerns. Agricultural runoff carries fertilizers and pesticides into waterways. Industrial effluents contaminate supplies. Inadequate sanitation pollutes water sources with pathogens. Treating contaminated water requires resources unavailable in many regions; prevention through watershed protection and pollution control offers better long-term solutions.

Transboundary water resources create geopolitical tensions. Rivers crossing international borders generate competing claims. The Nile, Mekong, and Indus basins all feature disputes among riparian nations. Water has rarely caused wars historically, but scarcity may intensify future conflicts or leverage in negotiations.

Solutions require integrated approaches: improving efficiency, protecting sources, recycling wastewater, and developing alternative supplies through desalination or rainwater harvesting. Pricing water appropriately while protecting access for the poor presents policy challenges. Governance reforms are needed to manage common pool resources sustainably.`,
      questions: [
        { id: 27, type: "tfng", text: "Freshwater constitutes more than ten percent of Earth's water.", answer: "False" },
        { id: 28, type: "tfng", text: "Groundwater aquifers can quickly recover after depletion.", answer: "False" },
        { id: 29, type: "tfng", text: "Agricultural use accounts for about seventy percent of freshwater withdrawals.", answer: "True" },
        { id: 30, type: "tfng", text: "Water has historically been a frequent cause of wars.", answer: "False" },
        { id: 31, type: "mcq", text: "What type of irrigation is more efficient?", options: ["A. Flood irrigation", "B. Drip systems", "C. Spray systems", "D. Channel irrigation"], answer: "B" },
        { id: 32, type: "mcq", text: "Where is the Ogallala Aquifer located?", options: ["A. India", "B. China", "C. United States", "D. Australia"], answer: "C" },
        { id: 33, type: "mcq", text: "What offers better long-term solutions than treating contaminated water?", options: ["A. More treatment plants", "B. Prevention through watershed protection", "C. Importing water", "D. Rationing"], answer: "B" },
        { id: 34, type: "short", text: "What percentage of Earth's water is freshwater? (Write as: less than X percent)", answer: "less than three percent" },
        { id: 35, type: "short", text: "What do informal settlements often lack for water access?", answer: "legal connections" },
        { id: 36, type: "mcq", text: "Which rivers are mentioned as having transboundary disputes?", options: ["A. Amazon, Congo, Yangtze", "B. Nile, Mekong, Indus", "C. Mississippi, Thames, Rhine", "D. Danube, Volga, Ganges"], answer: "B" },
        { id: 37, type: "tfng", text: "Drip irrigation systems require no capital investment.", answer: "False" },
        { id: 38, type: "short", text: "What type of settlements rely on expensive vendors for water?", answer: "informal settlements" },
        { id: 39, type: "yng", text: "The author suggests water pricing should ignore poor populations.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates climate change improves water distribution.", answer: "No" }
      ]
    }
  ]
},

// R18 - ADVANCED (Band 7.5-8.0)
{
  id: "R18",
  level: "Advanced",
  bandTarget: "7.5-8.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Economics of Healthcare Systems",
      wordCount: 875,
      text: `Healthcare systems worldwide grapple with fundamental economic challenges: rising costs driven by technological advancement and aging populations, uneven access despite substantial spending, and difficult tradeoffs between competing goals. Different nations have adopted vastly different approaches, offering natural experiments in healthcare economics.

The United States represents one extreme, relying heavily on private insurance and spending far more per capita than any other country—approximately twice the average of other wealthy nations. Despite this spending, Americans have lower life expectancy and higher infant mortality than many peers. Administrative complexity consumes substantial resources; billing and insurance-related costs dwarf those in simpler systems.

Single-payer systems, exemplified by Canada and the United Kingdom's National Health Service, use government as the primary insurer or provider. These systems typically achieve universal coverage at lower cost but face challenges including wait times for non-emergency procedures and constraints on expensive treatments. Political decisions determine resource allocation, sometimes inadequately.

Multipayer systems in countries like Germany and France combine public and private insurance with varying degrees of regulation. These systems often achieve good outcomes with moderate costs but require complex regulatory frameworks to manage competition and ensure access. Supplementary private insurance enables faster access to those who can afford it, raising equity concerns.

Healthcare markets differ fundamentally from textbook competitive markets. Information asymmetries between providers and patients limit consumer choice. The third-party payer problem—where someone other than the consumer pays—reduces price sensitivity. Demand is unpredictable and often urgent, limiting shopping behavior. Supplier-induced demand occurs when providers influence utilization.

Cost containment strategies include payment reform, encouraging value over volume. Traditional fee-for-service payment incentivizes more services regardless of outcomes. Capitation pays fixed amounts per patient, transferring financial risk to providers. Bundled payments cover entire episodes of care, encouraging efficiency. Each approach creates different incentives with distinct advantages and risks.

Pharmaceutical pricing presents particular challenges. Drug development requires massive upfront investment with uncertain returns, justifying high prices according to manufacturers. But monopoly pricing for essential medications raises ethical concerns, particularly when public funding supported research. International price variations lead to reimportation controversies and access disparities.

Health economics increasingly recognizes social determinants—income, education, housing, environment—as crucial factors influencing health outcomes more than medical care. Upstream interventions addressing these factors may prove more cost-effective than downstream treatment.`,
      questions: [
        { id: 1, type: "tfng", text: "The United States spends less per capita on healthcare than other wealthy nations.", answer: "False" },
        { id: 2, type: "tfng", text: "Single-payer systems always eliminate wait times.", answer: "False" },
        { id: 3, type: "tfng", text: "Healthcare markets function like textbook competitive markets.", answer: "False" },
        { id: 4, type: "tfng", text: "Social determinants may influence health more than medical care.", answer: "True" },
        { id: 5, type: "mcq", text: "What consumes substantial resources in the US system?", options: ["A. Medical equipment", "B. Administrative complexity", "C. Research", "D. Training"], answer: "B" },
        { id: 6, type: "mcq", text: "What does capitation payment involve?", options: ["A. Paying per service", "B. Fixed amounts per patient", "C. Paying only for outcomes", "D. Government subsidies"], answer: "B" },
        { id: 7, type: "mcq", text: "What justifies high drug prices according to manufacturers?", options: ["A. Simple production", "B. Massive upfront investment", "C. Low demand", "D. Easy approval"], answer: "B" },
        { id: 8, type: "short", text: "What type of payment incentivizes more services regardless of outcomes?", answer: "fee-for-service" },
        { id: 9, type: "short", text: "What problem occurs when providers influence utilization?", answer: "supplier-induced demand" },
        { id: 10, type: "mcq", text: "What do multipayer systems combine?", options: ["A. Only private insurance", "B. Public and private insurance", "C. Only government provision", "D. Charity care only"], answer: "B" },
        { id: 11, type: "tfng", text: "Americans have higher life expectancy than many peers.", answer: "False" },
        { id: 12, type: "short", text: "What interventions may be more cost-effective than downstream treatment?", answer: "upstream interventions" },
        { id: 13, type: "yng", text: "The author suggests the US healthcare system is the most efficient.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Psychology of Group Decision Making",
      wordCount: 870,
      text: `Group decision making pervades organizational life, from corporate boards to government committees, yet groups often make worse decisions than their most capable members would individually. Understanding why groups fail—and how to improve their performance—draws on social psychology, organizational behavior, and behavioral economics.

Groupthink, identified by Irving Janis, occurs when cohesive groups prioritize consensus over critical evaluation. Members suppress dissent, self-censor doubts, and develop illusions of invulnerability and unanimity. Historical fiascoes including the Bay of Pigs invasion and Challenger disaster have been attributed to groupthink. Prevention requires structured dissent, outside perspectives, and leaders who encourage criticism.

Information sharing problems undermine group wisdom. Members tend to discuss information everyone already knows rather than unique information held by individuals. This common knowledge effect means groups fail to pool distributed expertise effectively. Structured techniques like having members share unique information before discussion can mitigate this tendency.

Social influence processes shape group judgments. Conformity pressure leads individuals to align with perceived majorities, even when majoring views are wrong. Cascade effects occur when early speakers influence later ones, potentially leading groups astray based on initial contributions. Anonymous voting and simultaneous revelation of judgments can reduce these influences.

Group polarization describes the tendency for group discussion to push opinions toward extremes. If members initially lean toward risk, discussion typically produces riskier decisions; if initially cautious, more caution results. Echo chambers and filter bubbles in online environments may amplify polarization by limiting exposure to opposing views.

Diversity can improve group decisions by introducing varied perspectives and information. Demographic diversity correlates with performance on complex tasks. Cognitive diversity—differences in knowledge, mental models, and problem-solving approaches—may matter more. However, diversity must be managed carefully; conflict and communication difficulties can offset benefits.

Status and power dynamics distort deliberation. High-status members speak more and receive more attention regardless of expertise. Dissent from low-status members carries less weight. Psychological safety—the belief that one can speak without penalty—enables more equal participation and reduces self-censorship.

Decision markets and prediction aggregation methods offer alternatives to traditional deliberation. Properly designed, these mechanisms incentivize honest revelation and efficiently aggregate distributed information. Some organizations use prediction markets for forecasting, though implementation challenges remain.`,
      questions: [
        { id: 14, type: "tfng", text: "Groups always make better decisions than individuals.", answer: "False" },
        { id: 15, type: "tfng", text: "Groupthink involves prioritizing consensus over critical evaluation.", answer: "True" },
        { id: 16, type: "tfng", text: "Groups typically discuss unique information first.", answer: "False" },
        { id: 17, type: "tfng", text: "High-status members receive attention regardless of expertise.", answer: "True" },
        { id: 18, type: "mcq", text: "What historical event has been attributed to groupthink?", options: ["A. Moon landing", "B. Bay of Pigs invasion", "C. Civil rights movement", "D. Internet development"], answer: "B" },
        { id: 19, type: "mcq", text: "What can reduce social influence in group decisions?", options: ["A. More discussion", "B. Stronger leaders", "C. Anonymous voting", "D. Larger groups"], answer: "C" },
        { id: 20, type: "mcq", text: "What does group polarization describe?", options: ["A. Groups becoming more moderate", "B. Groups pushing opinions toward extremes", "C. Groups becoming more diverse", "D. Groups reaching consensus faster"], answer: "B" },
        { id: 21, type: "short", text: "Who identified the concept of groupthink?", answer: "Irving Janis" },
        { id: 22, type: "short", text: "What effect means groups discuss already-known information?", answer: "common knowledge effect" },
        { id: 23, type: "mcq", text: "What enables more equal participation in groups?", options: ["A. Hierarchy", "B. Psychological safety", "C. Time pressure", "D. Larger size"], answer: "B" },
        { id: 24, type: "tfng", text: "Cognitive diversity refers only to demographic differences.", answer: "False" },
        { id: 25, type: "short", text: "What do properly designed decision markets incentivize?", answer: "honest revelation" },
        { id: 26, type: "yng", text: "The author suggests diversity always improves decisions without challenges.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Future of Work and Automation",
      wordCount: 865,
      text: `Technological change has always transformed work, but artificial intelligence and automation may disrupt labor markets more profoundly than previous innovations. Economists debate whether this time is different and what policies might address potential disruptions to employment, wages, and economic security.

Historical perspective offers some reassurance. Agricultural employment fell from forty percent to two percent of the workforce over the twentieth century without causing permanent unemployment. Manufacturing similarly declined while service employment grew. New technologies create new jobs even as they destroy old ones; the net effect historically has been positive.

Several factors suggest current automation differs. Machine learning enables automation of cognitive tasks previously requiring human judgment. Robotics advances allow physical tasks in unstructured environments. The pace of change may outstrip workers' ability to adapt. Unlike agricultural workers moving to factories, displaced workers may lack pathways to new employment.

Job polarization has already occurred in many developed economies. Middle-skill jobs in manufacturing and administration have declined while both high-skill professional jobs and low-skill service jobs have grown. This hollowing out of the middle class has contributed to wage stagnation and inequality, with social and political consequences.

Estimates of automation potential vary widely. Some studies suggest nearly half of jobs could be automated with current technology; others argue many jobs contain tasks difficult to automate even if some components are vulnerable. The speed of adoption depends on economic conditions, regulatory frameworks, and social acceptance, not merely technical capability.

Skills that complement rather than compete with automation may prove most valuable. Creativity, complex communication, leadership, and expertise in applying judgment remain difficult to automate. Educational systems may need reorientation from knowledge transmission toward developing these distinctively human capabilities.

Policy responses include strengthening safety nets, expanding education and training, and considering more radical options like universal basic income or job guarantees. Portable benefits detached from specific employers could address gig economy precarity. Worker ownership and profit-sharing might distribute automation's gains more broadly.

The relationship between technology and work is not predetermined but shaped by choices. Automation can augment human capabilities or replace human workers depending on design decisions and incentive structures. Ensuring technology serves human flourishing requires deliberate effort.`,
      questions: [
        { id: 27, type: "tfng", text: "Agricultural employment has remained stable over the past century.", answer: "False" },
        { id: 28, type: "tfng", text: "Machine learning only automates physical tasks.", answer: "False" },
        { id: 29, type: "tfng", text: "Job polarization has reduced middle-skill jobs.", answer: "True" },
        { id: 30, type: "tfng", text: "All economists agree automation will cause permanent unemployment.", answer: "False" },
        { id: 31, type: "mcq", text: "What has grown alongside high-skill jobs?", options: ["A. Middle-skill jobs", "B. Low-skill service jobs", "C. Manufacturing jobs", "D. Agricultural jobs"], answer: "B" },
        { id: 32, type: "mcq", text: "What skills may prove most valuable?", options: ["A. Routine physical tasks", "B. Data entry", "C. Skills that complement automation", "D. Repetitive calculations"], answer: "C" },
        { id: 33, type: "mcq", text: "What affects speed of automation adoption beyond technical capability?", options: ["A. Only cost", "B. Economic conditions, regulations, and social acceptance", "C. Only regulations", "D. Only worker preferences"], answer: "B" },
        { id: 34, type: "short", text: "What has contributed to wage stagnation and inequality?", answer: "hollowing out of the middle class" },
        { id: 35, type: "short", text: "What could address gig economy precarity?", answer: "portable benefits" },
        { id: 36, type: "mcq", text: "What might distribute automation's gains more broadly?", options: ["A. Higher taxes only", "B. Worker ownership and profit-sharing", "C. Reducing wages", "D. Eliminating unions"], answer: "B" },
        { id: 37, type: "tfng", text: "The relationship between technology and work is predetermined.", answer: "False" },
        { id: 38, type: "short", text: "What radical policy option involves unconditional income?", answer: "universal basic income" },
        { id: 39, type: "yng", text: "The author suggests automation can only replace workers, not augment them.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates creativity is easy to automate.", answer: "No" }
      ]
    }
  ]
},

// R19 - ADVANCED (Band 8.0-8.5)
{
  id: "R19",
  level: "Advanced",
  bandTarget: "8.0-8.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Genetics of Human Behavior",
      wordCount: 880,
      text: `Behavioral genetics explores how genetic variation influences psychological traits and behaviors—a field that has produced important findings while generating considerable controversy. Modern genomic tools have transformed understanding of genetic influences while highlighting the complexity of gene-environment interactions.

Twin studies provided early evidence for genetic influences on behavior. Identical twins share all genes while fraternal twins share half on average, enabling researchers to estimate heritability—the proportion of trait variation attributable to genetic differences. Twin studies consistently show substantial heritability for intelligence, personality traits, and mental disorders, typically ranging from forty to eighty percent.

However, heritability is frequently misunderstood. High heritability does not mean environmental factors are unimportant; it describes variance in a specific population under specific conditions. Height is highly heritable yet has increased dramatically due to nutrition improvements. Heritability also does not imply immutability—genetic influences can often be modified through environmental interventions.

Genome-wide association studies have identified thousands of genetic variants associated with psychological traits. The effect of any single variant is typically tiny—often accounting for less than one percent of trait variance. This polygenic architecture means traits reflect the combined influence of many genes, each contributing marginally.

The search for specific gene-behavior links has often disappointed. Early candidate gene studies reported associations that failed replication. The "warrior gene" supposedly linked to aggression, the "gay gene," and numerous genes allegedly tied to intelligence have not withstood scrutiny. Complex traits resist simple genetic explanations.

Gene-environment interactions complicate the picture further. Genetic predispositions may manifest differently depending on environmental conditions. Some individuals may be genetically more susceptible to environmental influences—whether positive or negative—displaying greater plasticity in development. This differential susceptibility challenges both purely genetic and purely environmental accounts.

Epigenetics adds another layer of complexity. Environmental experiences can alter gene expression without changing DNA sequences, sometimes across generations. Trauma, nutrition, and social conditions may leave epigenetic marks affecting behavior. The boundary between genetic and environmental influences becomes blurred.

Ethical concerns surround behavioral genetics. Historical misuse in eugenics movements casts a shadow. Genetic determinism—the mistaken view that genes fix behavioral outcomes—could undermine responsibility and motivation. Yet ignoring genetic influences prevents understanding conditions like addiction and mental illness that clearly have genetic components.`,
      questions: [
        { id: 1, type: "tfng", text: "Twin studies compare identical and fraternal twins to estimate heritability.", answer: "True" },
        { id: 2, type: "tfng", text: "High heritability means environmental factors are unimportant.", answer: "False" },
        { id: 3, type: "tfng", text: "Individual genetic variants typically account for large portions of trait variance.", answer: "False" },
        { id: 4, type: "tfng", text: "Early candidate gene studies have consistently replicated.", answer: "False" },
        { id: 5, type: "mcq", text: "What proportion of trait variation is typically heritable for psychological traits?", options: ["A. 10-20%", "B. 40-80%", "C. 90-100%", "D. Less than 5%"], answer: "B" },
        { id: 6, type: "mcq", text: "What does polygenic architecture mean?", options: ["A. One gene determines traits", "B. Traits reflect many genes with small effects", "C. Environment alone determines traits", "D. Genes never influence behavior"], answer: "B" },
        { id: 7, type: "mcq", text: "What can alter gene expression without changing DNA sequences?", options: ["A. Twin studies", "B. Heritability", "C. Epigenetics", "D. Genome sequencing"], answer: "C" },
        { id: 8, type: "short", text: "What term describes genetic tendency to be more affected by environmental influences?", answer: "differential susceptibility" },
        { id: 9, type: "short", text: "What historical movement misused genetic ideas?", answer: "eugenics" },
        { id: 10, type: "mcq", text: "What has dramatically increased despite high heritability?", options: ["A. Intelligence", "B. Height", "C. Personality", "D. Eye color"], answer: "B" },
        { id: 11, type: "tfng", text: "The warrior gene has withstood scientific scrutiny.", answer: "False" },
        { id: 12, type: "short", text: "What type of studies identify genetic variants associated with traits?", answer: "genome-wide association studies" },
        { id: 13, type: "yng", text: "The author believes genetic influences should be completely ignored.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The History of International Trade",
      wordCount: 875,
      text: `International trade has shaped civilizations since ancient times, creating wealth, spreading ideas, and connecting distant societies. The evolution of trade from regional exchange to global commerce reflects technological changes, institutional innovations, and shifting political arrangements that continue to generate both opportunities and tensions.

Ancient trade routes established patterns persisting for millennia. The Silk Road linked China to the Mediterranean, carrying silk, spices, and ideas across Central Asia. Maritime routes connected the Indian Ocean littoral from East Africa to Southeast Asia. These networks enriched participating societies while spreading religions, technologies, and diseases.

The age of European exploration transformed global trade fundamentally. Portuguese navigators reached India by sea, bypassing Ottoman middlemen. Spanish conquest of the Americas introduced silver that fueled global commerce. Colonial systems extracted resources from conquered territories while forcing their populations into exploitative arrangements.

The industrial revolution intensified trade by reducing transportation costs and increasing production capacity. Steam ships and railroads moved goods faster and cheaper. Britain championed free trade after establishing industrial supremacy, exporting manufactured goods while importing raw materials and food. Comparative advantage theory, articulated by David Ricardo, provided intellectual justification.

The late nineteenth century saw unprecedented trade globalization. The gold standard facilitated international payments. Migration redistributed labor across continents. Capital flowed from Europe to developing regions. However, this first globalization ended with World War One, followed by protectionism, depression, and another devastating war.

The post-war Bretton Woods system rebuilt international economic order. The General Agreement on Tariffs and Trade progressively reduced barriers. Regional integration in Europe demonstrated trade's potential to promote peace alongside prosperity. The World Trade Organization institutionalized trade governance, though with imperfect enforcement mechanisms.

Contemporary trade involves complex global value chains crossing multiple borders during production. A single product may contain components from dozens of countries. Services trade has grown alongside goods trade. Digital platforms enable smaller firms to participate in international commerce.

Debate continues over trade's effects. Economists generally find net benefits from specialization and competition, but distributional consequences can be severe. Workers in import-competing industries may experience displacement that general prosperity does not automatically remedy. Managing trade's costs while capturing its benefits remains a central policy challenge.`,
      questions: [
        { id: 14, type: "tfng", text: "The Silk Road connected China to the Mediterranean.", answer: "True" },
        { id: 15, type: "tfng", text: "Portuguese navigators increased Ottoman control of trade routes.", answer: "False" },
        { id: 16, type: "tfng", text: "The first globalization ended before World War One.", answer: "False" },
        { id: 17, type: "tfng", text: "Contemporary trade involves global value chains.", answer: "True" },
        { id: 18, type: "mcq", text: "What introduced silver that fueled global commerce?", options: ["A. Portuguese exploration", "B. Spanish conquest of the Americas", "C. British colonialism", "D. Chinese trade"], answer: "B" },
        { id: 19, type: "mcq", text: "Who articulated comparative advantage theory?", options: ["A. Adam Smith", "B. John Keynes", "C. David Ricardo", "D. Milton Friedman"], answer: "C" },
        { id: 20, type: "mcq", text: "What facilitated international payments in the late nineteenth century?", options: ["A. Paper currency", "B. Gold standard", "C. Silver standard", "D. Barter"], answer: "B" },
        { id: 21, type: "short", text: "What agreement progressively reduced trade barriers after World War Two?", answer: "General Agreement on Tariffs and Trade" },
        { id: 22, type: "short", text: "What organization institutionalized trade governance?", answer: "World Trade Organization" },
        { id: 23, type: "mcq", text: "What may workers in import-competing industries experience?", options: ["A. Automatic gains", "B. Displacement", "C. Higher wages", "D. Job security"], answer: "B" },
        { id: 24, type: "tfng", text: "Services trade has declined relative to goods trade.", answer: "False" },
        { id: 25, type: "short", text: "What did regional integration in Europe demonstrate trade could promote?", answer: "peace alongside prosperity" },
        { id: 26, type: "yng", text: "The author suggests trade benefits are distributed equally.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Science of Ecosystem Restoration",
      wordCount: 870,
      text: `Ecosystem restoration has emerged as a critical response to unprecedented environmental degradation, offering hope for reversing habitat loss, restoring biodiversity, and recovering ecosystem services. The United Nations declared 2021-2030 the Decade of Ecosystem Restoration, reflecting growing recognition that conservation alone cannot address accumulated damage.

Restoration ecology developed as a scientific discipline integrating ecology, conservation biology, and land management. Unlike simple rehabilitation aimed at returning productivity, ecological restoration seeks to recover indigenous species composition, ecosystem structure, and natural processes. Reference ecosystems provide targets, though historical conditions may be neither achievable nor desirable given changed circumstances.

Passive restoration removes stressors and allows natural recovery. Secondary succession following agricultural abandonment demonstrates ecosystems' regenerative capacity. Costs are minimal, but recovery may take decades or centuries, and altered conditions may prevent return to historical states. Invasive species, changed hydrology, or fragmented landscapes can arrest succession.

Active restoration intervenes to accelerate recovery through site preparation, seeding, planting, and species reintroduction. Restoring vegetation provides habitat structure enabling animal communities to reassemble. Keystone species—organisms with disproportionate ecological influence—may be prioritized. Assisted migration introduces species to suitable habitat beyond their current range, anticipating climate change.

Wetland restoration has achieved notable success. Drained wetlands can be rewetted, recovering hydrological functions and wildlife habitat relatively quickly. Constructed wetlands treat wastewater while providing habitat. Coastal wetland restoration protects shorelines from storms and sequesters carbon—providing valued ecosystem services that justify substantial investment.

Forest restoration presents greater challenges given longer time scales. Reforestation plants trees on deforested land; afforestation establishes forests where none existed historically. Plantation forestry may increase tree cover without recovering biodiversity or ecosystem functions. Forest landscape restoration takes an integrated approach addressing social and economic factors alongside ecological goals.

Marine restoration has expanded beyond traditional approaches like artificial reefs. Coral gardening propagates fragments for transplantation. Seagrass meadows—critical habitats that sequester carbon—are being restored. Marine protected areas allow depleted fish populations to recover, with spillover benefiting surrounding fisheries.

Measuring restoration success requires appropriate metrics beyond simple measures like tree survival. Biodiversity indicators, ecosystem function measures, and assessment of ecosystem services provide more complete evaluation. Adaptive management adjusts interventions based on monitoring results.`,
      questions: [
        { id: 27, type: "tfng", text: "The UN declared 2021-2030 the Decade of Ecosystem Restoration.", answer: "True" },
        { id: 28, type: "tfng", text: "Passive restoration requires intensive intervention.", answer: "False" },
        { id: 29, type: "tfng", text: "Wetland restoration has achieved notable success.", answer: "True" },
        { id: 30, type: "tfng", text: "Plantation forestry always recovers biodiversity effectively.", answer: "False" },
        { id: 31, type: "mcq", text: "What do reference ecosystems provide for restoration?", options: ["A. Funding", "B. Targets", "C. Labor", "D. Materials"], answer: "B" },
        { id: 32, type: "mcq", text: "What can arrest secondary succession?", options: ["A. Only invasive species", "B. Invasive species, changed hydrology, or fragmentation", "C. Only changed hydrology", "D. Only fragmentation"], answer: "B" },
        { id: 33, type: "mcq", text: "What introduces species beyond their current range anticipating climate change?", options: ["A. Passive restoration", "B. Constructed wetlands", "C. Assisted migration", "D. Plantation forestry"], answer: "C" },
        { id: 34, type: "short", text: "What type of species have disproportionate ecological influence?", answer: "keystone species" },
        { id: 35, type: "short", text: "What do coastal wetlands provide as valued ecosystem services?", answer: "shoreline protection and carbon sequestration" },
        { id: 36, type: "mcq", text: "What does coral gardening do?", options: ["A. Removes coral", "B. Propagates fragments for transplantation", "C. Studies coral disease", "D. Prevents coral growth"], answer: "B" },
        { id: 37, type: "tfng", text: "Tree survival is a complete measure of restoration success.", answer: "False" },
        { id: 38, type: "short", text: "What type of management adjusts interventions based on monitoring?", answer: "adaptive management" },
        { id: 39, type: "yng", text: "The author suggests conservation alone can address accumulated environmental damage.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates seagrass meadows sequester carbon.", answer: "Yes" }
      ]
    }
  ]
},

// R20 - EXPERT (Band 8.0-8.5)
{
  id: "R20",
  level: "Expert",
  bandTarget: "8.0-8.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Philosophy of Scientific Explanation",
      wordCount: 875,
      text: `Scientific explanation occupies a central place in philosophy of science, raising fundamental questions about what constitutes genuine understanding of natural phenomena. Different philosophical accounts propose competing criteria for explanatory success, with implications for how we evaluate scientific theories and claims.

The covering law model, developed by Carl Hempel, held that explanation requires subsuming phenomena under general laws. An event is explained when it can be logically derived from statements of initial conditions plus universal laws. This deductive-nomological approach captured important features of explanation in physics while facing difficulties with probabilistic explanations and the intuition that not all valid derivations explain.

The causal account, advanced by Wesley Salmon and others, emphasizes identification of causal mechanisms producing phenomena. Understanding involves tracing causal processes and interactions rather than merely subsuming under laws. This approach better handles cases where correlation does not imply causation and accords with scientific practice focused on mechanisms.

Unificationist accounts, developed by Philip Kitcher, define explanatory power as ability to unify diverse phenomena under common patterns. Newton's laws explained both planetary motion and falling apples by showing both instantiate the same gravitational principles. Good theories reduce the number of independent phenomena requiring separate explanation.

Pragmatic approaches reject the search for universal explanatory criteria, emphasizing that explanations serve context-dependent purposes. What counts as explanatory depends on the questioner's background knowledge and interests. Scientific explanations may differ legitimately depending on disciplinary contexts and practical aims.

Explanation in biological and social sciences poses particular challenges. Evolutionary explanations invoke historical narratives rather than laws; functional explanations appeal to purposes without implying design. Reductionist explanations seek lower-level mechanisms while holistic explanations appeal to system-level properties emergent from component interactions.

The relationship between explanation and prediction remains contested. Symmetry theses claimed that good explanations should predict and good predictions should explain. Yet evolutionary theory explains without predicting specific outcomes; actuarial tables predict without explaining individual deaths. Understanding these asymmetries illuminates explanation's nature.

Scientific models further complicate explanatory questions. Idealized models deliberately misrepresent reality yet provide understanding. How can false assumptions generate genuine explanation? Perhaps models explain by isolating key causal factors, or by demonstrating that certain features are unnecessary for phenomena of interest.`,
      questions: [
        { id: 1, type: "tfng", text: "The covering law model requires subsuming phenomena under general laws.", answer: "True" },
        { id: 2, type: "tfng", text: "Causal accounts emphasize logical derivation over mechanisms.", answer: "False" },
        { id: 3, type: "tfng", text: "Pragmatic approaches seek universal explanatory criteria.", answer: "False" },
        { id: 4, type: "tfng", text: "Evolutionary theory explains without predicting specific outcomes.", answer: "True" },
        { id: 5, type: "mcq", text: "Who developed the covering law model?", options: ["A. Wesley Salmon", "B. Philip Kitcher", "C. Carl Hempel", "D. Thomas Kuhn"], answer: "C" },
        { id: 6, type: "mcq", text: "What do unificationist accounts define explanatory power as?", options: ["A. Predictive accuracy", "B. Ability to unify phenomena", "C. Mathematical precision", "D. Experimental control"], answer: "B" },
        { id: 7, type: "mcq", text: "What did Newton's laws explain by unification?", options: ["A. Only planetary motion", "B. Only falling objects", "C. Both planetary motion and falling apples", "D. Neither"], answer: "C" },
        { id: 8, type: "short", text: "What type of explanations invoke historical narratives rather than laws?", answer: "evolutionary explanations" },
        { id: 9, type: "short", text: "What type of explanations appeal to purposes without implying design?", answer: "functional explanations" },
        { id: 10, type: "mcq", text: "What do idealized models deliberately do to reality?", options: ["A. Perfectly represent it", "B. Misrepresent it", "C. Ignore it", "D. Measure it"], answer: "B" },
        { id: 11, type: "tfng", text: "Good predictions always provide explanations.", answer: "False" },
        { id: 12, type: "short", text: "Who advanced the causal account of explanation?", answer: "Wesley Salmon" },
        { id: 13, type: "yng", text: "The author believes there is consensus on what constitutes scientific explanation.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Anthropology of Gift Exchange",
      wordCount: 870,
      text: `Gift exchange has fascinated anthropologists since Marcel Mauss's seminal essay on the gift, revealing how apparently voluntary transfers create binding obligations and constitute fundamental social bonds. Understanding gift economies challenges market-centered assumptions about economic rationality while illuminating persistent non-market relationships within modern societies.

Mauss argued that gifts are never free but carry obligations to receive and reciprocate. The gift creates a debt binding giver and receiver; failure to reciprocate invites social sanction or supernatural consequence. This triple obligation—to give, receive, and repay—structures social relationships across diverse societies studied by early ethnographers.

The Kula exchange of the Trobriand Islands, described by Bronislaw Malinowski, exemplified ceremonial exchange. Valuable shell ornaments circulated clockwise and counterclockwise through a ring of islands. Participants gained prestige through generosity rather than accumulation. Economic trade in practical goods accompanied but remained distinct from these prestigious exchanges.

Potlatch ceremonies among Pacific Northwest peoples involved competitive giving and sometimes destruction of wealth. Chiefs demonstrated superiority through generosity exceeding rivals' capacity to reciprocate. Colonial authorities banned potlatch, seeing it as wasteful and incompatible with capitalist accumulation—revealing how gift economies threatened colonial economic projects.

The distinction between gift and commodity remains analytically important. Commodity exchange involves alienable goods transferred between independent parties; equivalence enables the transaction to end the relationship. Gift exchange involves inalienable goods—things retaining connection to givers—transferred between parties in ongoing relationships; reciprocity extends rather than terminates connection.

Gift giving persists within market societies. Birthday presents, holiday exchanges, and charitable donations follow gift logic rather than market rationality. Recipients often prefer gifts carrying personal meaning over economically efficient cash transfers. The thought counts precisely because gifts index relationships.

Blood and organ donation present interesting cases. Treating these as market commodities seems repugnant to many, yet purely altruistic framing may not accurately describe donor motivations. Richard Titmuss famously argued that commercializing blood donation would reduce supply by crowding out altruistic motivations—though empirical evidence remains mixed.

Digital sharing economies complicate these distinctions further. Open source software, Wikipedia contributions, and creative commons content blend gift-like volunteer contributions with market-oriented platforms. Understanding these hybrid arrangements requires moving beyond dichotomous thinking.`,
      questions: [
        { id: 14, type: "tfng", text: "Mauss argued gifts carry no obligations.", answer: "False" },
        { id: 15, type: "tfng", text: "Kula exchange involved shell ornaments circulating through islands.", answer: "True" },
        { id: 16, type: "tfng", text: "Colonial authorities encouraged potlatch ceremonies.", answer: "False" },
        { id: 17, type: "tfng", text: "Commodity exchange typically terminates relationships.", answer: "True" },
        { id: 18, type: "mcq", text: "What three obligations does gift exchange create according to Mauss?", options: ["A. Give, receive, forget", "B. Give, receive, repay", "C. Buy, sell, profit", "D. Take, keep, hide"], answer: "B" },
        { id: 19, type: "mcq", text: "Who described the Kula exchange?", options: ["A. Marcel Mauss", "B. Bronislaw Malinowski", "C. Richard Titmuss", "D. Claude Lévi-Strauss"], answer: "B" },
        { id: 20, type: "mcq", text: "What did potlatch ceremonies demonstrate superiority through?", options: ["A. Accumulation", "B. Military power", "C. Generosity", "D. Political office"], answer: "C" },
        { id: 21, type: "short", text: "What type of goods retain connection to givers?", answer: "inalienable goods" },
        { id: 22, type: "short", text: "Who argued commercializing blood donation would reduce supply?", answer: "Richard Titmuss" },
        { id: 23, type: "mcq", text: "Why do recipients often prefer meaningful gifts over cash?", options: ["A. Cash is worthless", "B. Gifts index relationships", "C. Cash is illegal", "D. Gifts are more expensive"], answer: "B" },
        { id: 24, type: "tfng", text: "Gift giving has disappeared from market societies.", answer: "False" },
        { id: 25, type: "short", text: "What economies blend volunteer contributions with market platforms?", answer: "digital sharing economies" },
        { id: 26, type: "yng", text: "The author suggests dichotomous thinking adequately explains modern sharing.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Engineering of Earthquake-Resistant Structures",
      wordCount: 865,
      text: `Earthquake engineering has evolved dramatically over the past century, developing sophisticated approaches to protect structures and their occupants from seismic forces. Understanding how buildings respond to ground motion has enabled designs that prevent collapse even in severe earthquakes, though achieving resilient communities requires addressing issues beyond structural survival.

Seismic forces arise from ground acceleration during earthquakes. Structures amplify these accelerations based on their dynamic properties—particularly the fundamental period of vibration determined by height and stiffness. Buildings whose natural frequencies match dominant earthquake frequencies experience resonance, dramatically increasing forces and damage.

Base isolation represents one of earthquake engineering's most significant innovations. Flexible bearings between foundation and superstructure allow the ground to move beneath a building while the structure remains relatively stationary. Lead-rubber bearings and friction pendulum systems provide both flexibility and energy dissipation. Isolated structures experience greatly reduced accelerations.

Energy dissipation devices supplement traditional structural systems. Viscous dampers absorb energy through fluid flow. Metallic yielding dampers deform plastically, converting kinetic energy to heat. Friction dampers dissipate energy through controlled sliding. These devices concentrate damage in replaceable components, protecting the primary structure.

Capacity design principles ensure structures fail in predictable, ductile modes rather than sudden brittle collapse. Strong-column weak-beam design forces plastic hinges to form in beams rather than columns, preventing story collapse. Ductile detailing provides confinement allowing concrete members to deform substantially before losing strength.

Performance-based design moves beyond prescriptive codes to specify desired behavior at different hazard levels. Immediate occupancy performance maintains functionality after moderate earthquakes; life safety prevents collapse in severe events; collapse prevention represents minimum acceptable performance in maximum credible earthquakes. Building owners can choose performance levels based on risk tolerance and cost.

Non-structural elements—ceilings, partitions, mechanical systems—cause most earthquake injuries and repair costs even when structures perform well. Securing these elements receives increasing attention. Contents damage can render technically sound buildings unusable; hospitals must remain operational when most needed.

Community resilience extends beyond individual building performance. Lifeline systems—transportation, utilities, communications—enable emergency response and recovery. Land use planning can restrict development in high-hazard zones. Economic and social factors determine how quickly communities recover from disasters that engineering alone cannot prevent.`,
      questions: [
        { id: 27, type: "tfng", text: "Seismic forces arise from ground acceleration.", answer: "True" },
        { id: 28, type: "tfng", text: "All buildings respond identically to earthquake frequencies.", answer: "False" },
        { id: 29, type: "tfng", text: "Base isolation keeps structures stationary while ground moves.", answer: "True" },
        { id: 30, type: "tfng", text: "Non-structural elements rarely cause earthquake injuries.", answer: "False" },
        { id: 31, type: "mcq", text: "What do energy dissipation devices protect by concentrating damage?", options: ["A. Non-structural elements", "B. Primary structure", "C. Foundation", "D. Ground"], answer: "B" },
        { id: 32, type: "mcq", text: "What does strong-column weak-beam design prevent?", options: ["A. All damage", "B. Foundation movement", "C. Story collapse", "D. Window breakage"], answer: "C" },
        { id: 33, type: "mcq", text: "What represents minimum acceptable performance in maximum credible earthquakes?", options: ["A. Immediate occupancy", "B. Life safety", "C. Collapse prevention", "D. Zero damage"], answer: "C" },
        { id: 34, type: "short", text: "What type of systems allow ground to move beneath buildings?", answer: "base isolation" },
        { id: 35, type: "short", text: "What converts kinetic energy to heat through plastic deformation?", answer: "metallic yielding dampers" },
        { id: 36, type: "mcq", text: "What systems enable emergency response and recovery?", options: ["A. Damping systems", "B. Lifeline systems", "C. Base isolation", "D. Ductile detailing"], answer: "B" },
        { id: 37, type: "tfng", text: "Performance-based design only uses prescriptive codes.", answer: "False" },
        { id: 38, type: "short", text: "What type of detailing allows concrete members to deform substantially?", answer: "ductile detailing" },
        { id: 39, type: "yng", text: "The author suggests engineering alone can fully protect communities.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates hospitals must remain operational after earthquakes.", answer: "Yes" }
      ]
    }
  ]
},

// R21 - EXPERT (Band 8.0-8.5)
{
  id: "R21",
  level: "Expert",
  bandTarget: "8.0-8.5",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Neuroscience of Creativity",
      wordCount: 875,
      text: `Creativity—the generation of novel and valuable ideas—has long seemed resistant to scientific investigation. Recent neuroscience research is revealing the brain networks underlying creative thought, challenging romantic notions of creativity as mysterious inspiration while highlighting the complex cognitive processes involved.

Contrary to popular belief, creativity does not depend primarily on the right hemisphere. Brain imaging studies show creative tasks engage distributed networks spanning both hemispheres. The lateralization myth persists in popular culture despite decades of disconfirming evidence, demonstrating how compelling intuitions can resist scientific correction.

Three large-scale brain networks contribute to creative cognition. The default mode network, active during internally directed thought, generates spontaneous ideas and associations. The executive control network, centered in prefrontal regions, evaluates and refines ideas against task demands. The salience network detects promising ideas and switches between generative and evaluative modes.

Creative individuals show distinctive patterns of network interaction. Highly creative people display stronger connectivity between the default mode and executive networks—systems typically working in opposition. This ability to couple imagination with evaluation may underlie the capacity to generate ideas that are both novel and useful.

Divergent thinking—generating multiple possible solutions—has served as a primary creativity measure. Neuroscience reveals divergent thinking involves suppressing obvious associations while activating remote concepts. This requires overcoming cognitive fixation and relaxing constraints normally filtering thought. Moderate reductions in cognitive control may enhance creativity in some contexts.

Insight, the sudden emergence of solutions, involves distinctive neural processes. Increased activity in the anterior superior temporal gyrus precedes insight moments, suggesting remote semantic associations unconsciously prepared then suddenly becoming conscious. The rewarding feeling accompanying insight may reinforce creative behavior.

Sleep benefits creative problem solving through several mechanisms. Memory consolidation during sleep reorganizes information, sometimes producing novel combinations. Reduced prefrontal activity during REM sleep may allow unusual associations typically inhibited during waking. Historical reports of creative breakthroughs during sleep gain scientific plausibility.

Individual differences in creativity reflect both cognitive and personality factors. Openness to experience consistently correlates with creativity across domains. Cognitive flexibility—the ability to shift perspectives—underlies creative thinking. These factors may be partly heritable yet also influenced by training and experience.`,
      questions: [
        { id: 1, type: "tfng", text: "Creativity depends primarily on the right hemisphere.", answer: "False" },
        { id: 2, type: "tfng", text: "The default mode network generates spontaneous ideas.", answer: "True" },
        { id: 3, type: "tfng", text: "Creative people show weaker connectivity between brain networks.", answer: "False" },
        { id: 4, type: "tfng", text: "Sleep benefits creative problem solving.", answer: "True" },
        { id: 5, type: "mcq", text: "What does the executive control network do?", options: ["A. Generates random ideas", "B. Evaluates and refines ideas", "C. Detects emotions", "D. Controls movement"], answer: "B" },
        { id: 6, type: "mcq", text: "What does the salience network do?", options: ["A. Stores memories", "B. Detects promising ideas", "C. Controls language", "D. Processes vision"], answer: "B" },
        { id: 7, type: "mcq", text: "What does divergent thinking involve suppressing?", options: ["A. All thoughts", "B. Obvious associations", "C. Emotions", "D. Movement"], answer: "B" },
        { id: 8, type: "short", text: "What brain region shows increased activity before insight moments?", answer: "anterior superior temporal gyrus" },
        { id: 9, type: "short", text: "What personality trait consistently correlates with creativity?", answer: "openness to experience" },
        { id: 10, type: "mcq", text: "What may reduced prefrontal activity during REM sleep allow?", options: ["A. Better focus", "B. Unusual associations", "C. Deeper sleep", "D. Memory loss"], answer: "B" },
        { id: 11, type: "tfng", text: "The lateralization myth has been supported by recent research.", answer: "False" },
        { id: 12, type: "short", text: "What ability underlies the capacity to generate novel and useful ideas?", answer: "coupling imagination with evaluation" },
        { id: 13, type: "yng", text: "The author suggests creativity is purely inherited.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Economics of Network Effects",
      wordCount: 870,
      text: `Network effects occur when a product or service becomes more valuable as more people use it, creating dynamics that profoundly shape competitive outcomes in technology markets. Understanding these effects helps explain the emergence of dominant platforms, the challenges facing new entrants, and the policy debates surrounding technology regulation.

Direct network effects arise when users benefit directly from others' participation. Telephones exemplify this pattern—a phone is useless without others to call, and each new user increases value for existing users. Social networks follow similar logic; their value depends on having friends and contacts participating.

Indirect network effects operate through complementary goods. A gaming console becomes more valuable as more games are developed for it; game developers prefer platforms with more users. This creates two-sided markets where platforms must attract both user groups, each valuing the other's participation. Credit cards, operating systems, and app stores exhibit this pattern.

Network effects create positive feedback loops enabling rapid growth. Once a product achieves critical mass, its advantages compound as more users attract more users or more complementors. However, achieving initial adoption proves challenging when the product offers limited value without an established network—the classic chicken-and-egg problem.

Strategies for launching network products include subsidizing early adopters, focusing on niche markets where critical mass is achievable, ensuring backward compatibility with established networks, and creating value independent of network size. Each approach addresses the cold start problem differently with varying success rates.

Winner-take-all dynamics characterize many networked markets. Once a platform achieves dominance, switching costs and network effects create lock-in that competitors struggle to overcome. History shows that dominant networks can persist despite inferior quality, as when the QWERTY keyboard layout survived allegedly superior alternatives.

However, network effects do not guarantee permanent dominance. Technological discontinuities can reset competitions. User multihoming—participating in multiple networks—moderates winner-take-all outcomes. Social networks have displaced predecessors despite established network effects; MySpace fell to Facebook, which now faces competition.

Policy debates increasingly focus on networked platforms. Market power arising from network effects raises antitrust concerns distinct from traditional monopoly analysis. Proposals range from breaking up large platforms to requiring interoperability or data portability. The optimal approach remains contested among economists and policymakers.`,
      questions: [
        { id: 14, type: "tfng", text: "Network effects make products less valuable as more people use them.", answer: "False" },
        { id: 15, type: "tfng", text: "Direct network effects operate through complementary goods.", answer: "False" },
        { id: 16, type: "tfng", text: "Network effects guarantee permanent market dominance.", answer: "False" },
        { id: 17, type: "tfng", text: "The QWERTY keyboard persisted despite allegedly superior alternatives.", answer: "True" },
        { id: 18, type: "mcq", text: "What exemplifies direct network effects?", options: ["A. Gaming consoles", "B. Telephones", "C. Credit cards", "D. App stores"], answer: "B" },
        { id: 19, type: "mcq", text: "What creates two-sided markets?", options: ["A. Direct network effects", "B. Government regulation", "C. Indirect network effects", "D. Patent protection"], answer: "C" },
        { id: 20, type: "mcq", text: "What is the chicken-and-egg problem?", options: ["A. Too many users", "B. Limited value without established network", "C. Excessive competition", "D. Technical failures"], answer: "B" },
        { id: 21, type: "short", text: "What term describes users participating in multiple networks?", answer: "multihoming" },
        { id: 22, type: "short", text: "What social network fell to Facebook?", answer: "MySpace" },
        { id: 23, type: "mcq", text: "What do proposals for platform regulation include?", options: ["A. Only breaking up platforms", "B. Breaking up, interoperability, or data portability", "C. Only interoperability", "D. Only increased market power"], answer: "B" },
        { id: 24, type: "tfng", text: "Once products achieve critical mass, advantages compound.", answer: "True" },
        { id: 25, type: "short", text: "What can reset network competitions?", answer: "technological discontinuities" },
        { id: 26, type: "yng", text: "The author suggests consensus exists on optimal platform regulation.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Science of Vaccine Development",
      wordCount: 875,
      text: `Vaccine development has transformed public health over two centuries, yet the COVID-19 pandemic revealed both remarkable capabilities and persistent vulnerabilities in the global vaccine enterprise. Understanding the science, economics, and logistics of vaccine development illuminates both recent achievements and remaining challenges.

Vaccines work by training the immune system to recognize pathogens without causing disease. Traditional approaches use weakened or inactivated pathogens, or isolated protein components. The immune system responds to these antigens, creating memory cells that provide protection against future infection. This principle, discovered empirically before immunology existed, now benefits from detailed mechanistic understanding.

Platform technologies have revolutionized vaccine development. Rather than developing each vaccine from scratch, platforms provide standardized approaches adaptable to different pathogens. The mRNA platform, validated spectacularly during COVID-19, instructs cells to produce pathogen proteins triggering immune responses. Viral vector platforms use harmless viruses to deliver genetic instructions. These platforms dramatically accelerate development timelines.

Clinical trials establish safety and efficacy through progressively larger studies. Phase one trials test safety in small groups. Phase two expands testing while optimizing dosing. Phase three involves thousands of participants to measure protection against disease. Statistical analysis determines whether observed differences exceed chance variation. Regulatory agencies evaluate evidence before approving vaccines.

Manufacturing scale-up presents formidable challenges. Biological production processes are difficult to standardize and scale. Quality control must ensure consistent, sterile products. Supply chains span multiple countries and numerous specialized suppliers. Building manufacturing capacity requires years of investment—problematic when pandemic response demands speed.

Vaccine distribution faces logistical obstacles, particularly for products requiring cold chain maintenance. Reaching remote populations requires infrastructure often lacking in developing countries. Last-mile delivery depends on trained healthcare workers and community trust. Vaccine hesitancy, fueled by misinformation, undermines uptake even where supply exists.

Global equity in vaccine access emerged as a central pandemic concern. Wealthy nations secured supplies while developing countries waited. COVAX aimed to ensure equitable distribution but fell short of goals. Intellectual property debates pitted pharmaceutical innovation incentives against global public health needs.

Future pandemic preparedness requires sustained investment in platform technologies, manufacturing capacity, surveillance systems, and international cooperation mechanisms. The speed of COVID-19 vaccine development demonstrated possibilities; ensuring similar speed for future threats requires advance preparation.`,
      questions: [
        { id: 27, type: "tfng", text: "Vaccines train the immune system using actual disease.", answer: "False" },
        { id: 28, type: "tfng", text: "Platform technologies allow standardized approaches for different pathogens.", answer: "True" },
        { id: 29, type: "tfng", text: "Manufacturing capacity can be built quickly during pandemics.", answer: "False" },
        { id: 30, type: "tfng", text: "COVAX fully achieved equitable vaccine distribution goals.", answer: "False" },
        { id: 31, type: "mcq", text: "What does the mRNA platform instruct cells to do?", options: ["A. Attack pathogens", "B. Produce pathogen proteins", "C. Destroy viruses", "D. Create antibodies directly"], answer: "B" },
        { id: 32, type: "mcq", text: "What does Phase three of clinical trials involve?", options: ["A. Small safety tests", "B. Dosing optimization", "C. Thousands of participants", "D. Manufacturing"], answer: "C" },
        { id: 33, type: "mcq", text: "What does cold chain maintenance refer to?", options: ["A. Laboratory storage", "B. Temperature-controlled distribution", "C. Manufacturing processes", "D. Clinical trials"], answer: "B" },
        { id: 34, type: "short", text: "What type of cells provide protection against future infection?", answer: "memory cells" },
        { id: 35, type: "short", text: "What undermines vaccine uptake even where supply exists?", answer: "vaccine hesitancy" },
        { id: 36, type: "mcq", text: "What do intellectual property debates pit against each other?", options: ["A. Profits vs. losses", "B. Innovation incentives vs. public health", "C. Research vs. development", "D. Manufacturing vs. distribution"], answer: "B" },
        { id: 37, type: "tfng", text: "Traditional vaccines only use live pathogens.", answer: "False" },
        { id: 38, type: "short", text: "What initiative aimed to ensure equitable global vaccine distribution?", answer: "COVAX" },
        { id: 39, type: "yng", text: "The author suggests future pandemic preparedness requires no advance investment.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates wealthy nations secured vaccine supplies before developing countries.", answer: "Yes" }
      ]
    }
  ]
},
// R22 - EXPERT (Band 8.5-9.0)
{
  id: "R22",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Philosophy of Personal Identity",
      wordCount: 880,
      text: `Personal identity—what makes someone the same person over time—has puzzled philosophers for centuries. The question matters practically for moral responsibility, punishment, and promises, yet defies easy resolution. Different theories emphasize psychological continuity, physical continuity, or deny identity's fundamental importance altogether.

John Locke proposed that memory constitutes personal identity. The person who remembers yesterday's experiences is the same person who had them. This psychological continuity view accords with intuitions about what matters in survival—we care about future selves with whom we share memories, preferences, and projects, regardless of physical changes.

However, memory-based theories face objections. Thomas Reid's "brave officer" paradox noted that an elderly general might remember being a young officer who remembered being a flogged schoolboy, without the general remembering the flogging. Transitivity of identity seems violated. Defenders respond by appealing to overlapping chains of memory connections rather than direct recall.

Physical continuity theories ground identity in bodily continuity, particularly the brain. The brain stores memories and generates psychological characteristics; bodily continuity explains psychological continuity without making memory constitutive of identity. Yet if teleportation perfectly recreated your body elsewhere, would you step into the machine? Intuitions diverge.

Derek Parfit's influential work questioned whether personal identity is what fundamentally matters. Parfit argued that what we care about—psychological continuity and connectedness—can occur without identity, as when a person divides into two psychologically continuous successors. Neither successor is identical to the original, yet both have what matters. Perhaps identity is not the deep fact we assume.

Buddhist philosophy long anticipated aspects of Parfit's view. The doctrine of anatta (non-self) denies permanent substantial selves, describing persons as streams of momentary mental and physical events. Attachment to self, on this view, causes suffering; liberation involves recognizing self's constructed nature.

Four-dimensionalist perspectives dissolve some puzzles by treating persons as extended through time like objects extended through space. The person is a four-dimensional worm with temporal parts; the young officer and general are different temporal parts of one extended entity. This view handles persistence through change but may conflict with our sense of being wholly present at each moment.

The narrative identity approach suggests we constitute ourselves through the stories we tell about our lives. Identity is not a metaphysical fact but an ongoing construction integrating past, present, and projected future into meaningful unity. This view emphasizes agency in self-creation while raising questions about narrative distortion and self-deception.`,
      questions: [
        { id: 1, type: "tfng", text: "John Locke believed physical continuity constitutes personal identity.", answer: "False" },
        { id: 2, type: "tfng", text: "The brave officer paradox was proposed by Thomas Reid.", answer: "True" },
        { id: 3, type: "tfng", text: "Derek Parfit believed personal identity is always fundamentally important.", answer: "False" },
        { id: 4, type: "tfng", text: "Buddhist philosophy has anticipated aspects of modern identity discussions.", answer: "True" },
        { id: 5, type: "mcq", text: "What constitutes personal identity according to Locke?", options: ["A. Physical body", "B. Memory", "C. Soul", "D. DNA"], answer: "B" },
        { id: 6, type: "mcq", text: "What does the Buddhist concept of anatta mean?", options: ["A. Permanent self", "B. Non-self", "C. Reincarnation", "D. Enlightenment"], answer: "B" },
        { id: 7, type: "mcq", text: "What do four-dimensionalist perspectives treat persons as?", options: ["A. Points in time", "B. Extended through time like spatial objects", "C. Only present", "D. Unchanging"], answer: "B" },
        { id: 8, type: "short", text: "What does narrative identity suggest we constitute ourselves through?", answer: "stories we tell about our lives" },
        { id: 9, type: "short", text: "What stores memories and generates psychological characteristics?", answer: "brain" },
        { id: 10, type: "mcq", text: "According to Buddhism, what causes suffering?", options: ["A. Memory loss", "B. Attachment to self", "C. Physical change", "D. Time passing"], answer: "B" },
        { id: 11, type: "tfng", text: "Physical continuity theories cannot explain psychological continuity.", answer: "False" },
        { id: 12, type: "short", text: "What does Parfit argue can occur without identity?", answer: "psychological continuity and connectedness" },
        { id: 13, type: "yng", text: "The author suggests all philosophers agree on what constitutes personal identity.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Ecology of Urban Forests",
      wordCount: 875,
      text: `Urban forests—the trees and associated vegetation within cities—provide essential ecosystem services while facing unique environmental stresses. Understanding urban forest ecology enables better management of these green assets, increasingly recognized as critical infrastructure for climate adaptation and public health.

Urban trees face challenging growing conditions. Compacted soils restrict root growth and water infiltration. Heat islands created by pavement and buildings stress trees adapted to cooler conditions. Air pollution damages foliage and reduces photosynthesis. Limited rooting space in planting pits constrains tree size and stability. Salt from winter road maintenance toxifies urban soils.

Species selection must balance multiple factors. Native species support local wildlife but may tolerate urban conditions poorly. Exotic species may thrive in cities but provide fewer ecosystem benefits and risk becoming invasive. Climate change complicates selection—species suited to current conditions may fail as temperatures rise. Urban foresters increasingly select species for anticipated future climates.

Tree diversity provides resilience against pests and diseases. Dutch elm disease devastated American cities dominated by elms; emerald ash borer now threatens ash monocultures. The rule of thumb recommends no more than ten percent of any single species, no more than twenty percent of any genus, and no more than thirty percent of any family. Achieving diversity while maintaining aesthetic coherence requires thoughtful planning.

Urban forests provide quantifiable benefits often termed ecosystem services. Trees shade buildings, reducing cooling energy consumption. They intercept rainfall, reducing stormwater runoff and flooding. They filter air pollution, improving respiratory health. They sequester carbon, mitigating climate change. Economic valuations demonstrate returns on investment in urban forestry substantially exceeding costs.

Social benefits extend beyond environmental services. Green streets reduce crime and increase property values. Hospital patients with tree views recover faster. Urban nature improves mental health and cognitive function. Environmental justice concerns arise when tree canopy concentrates in wealthy neighborhoods while heat-vulnerable communities lack shade.

Management of urban forests requires coordination across municipal departments. Streets, parks, utilities, and planning departments all affect urban trees. Urban forestry programs develop comprehensive inventories, establish planting and maintenance budgets, and create strategic plans for canopy expansion. Community engagement builds support and enables volunteer participation.

Climate adaptation increasingly drives urban forestry strategy. Trees provide crucial cooling through shade and evapotranspiration. Strategic planting targets heat-vulnerable areas. Green infrastructure incorporating trees manages flooding risks. However, trees themselves face climate stresses requiring assisted migration or breeding programs to develop heat-tolerant varieties.`,
      questions: [
        { id: 14, type: "tfng", text: "Urban trees face easier growing conditions than rural trees.", answer: "False" },
        { id: 15, type: "tfng", text: "Native species always thrive better in urban conditions.", answer: "False" },
        { id: 16, type: "tfng", text: "Dutch elm disease devastated cities dominated by elms.", answer: "True" },
        { id: 17, type: "tfng", text: "Tree canopy is equally distributed across all neighborhoods.", answer: "False" },
        { id: 18, type: "mcq", text: "What restricts root growth in urban environments?", options: ["A. Too much water", "B. Compacted soils", "C. Cold temperatures", "D. Excessive nutrients"], answer: "B" },
        { id: 19, type: "mcq", text: "What is the recommended maximum percentage for any single species?", options: ["A. Five percent", "B. Ten percent", "C. Twenty percent", "D. Thirty percent"], answer: "B" },
        { id: 20, type: "mcq", text: "What do trees intercept to reduce flooding?", options: ["A. Sunlight", "B. Rainfall", "C. Wind", "D. Pollution"], answer: "B" },
        { id: 21, type: "short", text: "What pest now threatens ash monocultures?", answer: "emerald ash borer" },
        { id: 22, type: "short", text: "What type of justice concerns arise regarding tree distribution?", answer: "environmental justice" },
        { id: 23, type: "mcq", text: "How do trees provide cooling?", options: ["A. Only through shade", "B. Through shade and evapotranspiration", "C. Only through evapotranspiration", "D. Through air conditioning"], answer: "B" },
        { id: 24, type: "tfng", text: "Economic valuations show urban forestry costs exceed benefits.", answer: "False" },
        { id: 25, type: "short", text: "What benefit do hospital patients with tree views experience?", answer: "faster recovery" },
        { id: 26, type: "yng", text: "The author suggests climate change simplifies species selection.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Psychology of Moral Judgment",
      wordCount: 870,
      text: `Moral psychology investigates how people actually make moral judgments, revealing processes quite different from the rational deliberation assumed by traditional ethics. Research shows that intuitions, emotions, and automatic processes play larger roles than conscious reasoning, with significant implications for understanding morality and designing ethical institutions.

Jonathan Haidt's social intuitionist model proposes that moral judgments typically arise from quick, automatic intuitions rather than deliberate reasoning. Reasoning often serves to justify conclusions already reached intuitively. Studies show people condemn harmless taboo violations—like eating one's dead pet or using a flag as a cleaning rag—while struggling to articulate reasons beyond "it's just wrong."

Moral foundations theory identifies several psychological foundations underlying moral intuitions. Care and harm concerns generate compassion and protection. Fairness and reciprocity motivate equality and justice. Loyalty to in-groups, respect for authority, and purity concerns also shape moral judgments. Different cultures and political orientations weight these foundations differently, helping explain moral disagreement.

The trolley problem and its variants reveal moral judgment's complexity. Most people judge it permissible to divert a trolley to kill one person instead of five but impermissible to push someone in front of the trolley to achieve the same result. This distinction between action and omission, and between personal and impersonal harm, resists easy rational justification yet proves psychologically robust.

Neuroscience illuminates moral judgment's basis. Brain regions associated with emotion activate during moral judgment; patients with damage to emotional processing areas, particularly the ventromedial prefrontal cortex, show altered moral judgments. However, the relationship between emotion and morality remains debated—emotions may constitute moral judgments or merely influence them.

Moral reasoning does matter despite intuitions' primacy. Exposure to reasoned argument can shift intuitions over time. Education in ethical reasoning improves moral judgment quality. Expert deliberation produces more consistent and defensible conclusions than untutored intuition. The interplay between intuition and reason proves more complex than either purely rationalist or purely intuitionist accounts suggest.

Cultural variation in moral judgments challenges moral universalism. Individualistic and collectivistic cultures differ in weighing individual rights against group harmony. However, some concerns—protecting children, reciprocity, fairness—appear cross-culturally universal, suggesting a shared moral foundation with cultural elaboration.

These findings have practical applications. Understanding moral psychology improves ethical education, organizational ethics programs, and institutional design. Recognizing intuitions' power while cultivating reasoning's corrective role offers a realistic approach to moral improvement.`,
      questions: [
        { id: 27, type: "tfng", text: "Moral judgments primarily arise from deliberate reasoning.", answer: "False" },
        { id: 28, type: "tfng", text: "People can always articulate reasons for moral condemnation.", answer: "False" },
        { id: 29, type: "tfng", text: "The trolley problem reveals consistent rational principles in moral judgment.", answer: "False" },
        { id: 30, type: "tfng", text: "Cultural variation challenges moral universalism.", answer: "True" },
        { id: 31, type: "mcq", text: "What does Haidt's model propose about moral judgments?", options: ["A. They arise from deliberation", "B. They arise from intuition", "C. They are culturally learned", "D. They are genetically determined"], answer: "B" },
        { id: 32, type: "mcq", text: "What does moral foundations theory identify?", options: ["A. Universal laws", "B. Psychological foundations of intuitions", "C. Rational principles", "D. Cultural rules"], answer: "B" },
        { id: 33, type: "mcq", text: "What brain damage affects moral judgments?", options: ["A. Motor cortex", "B. Visual cortex", "C. Ventromedial prefrontal cortex", "D. Cerebellum"], answer: "C" },
        { id: 34, type: "short", text: "What can exposure to reasoned argument shift over time?", answer: "intuitions" },
        { id: 35, type: "short", text: "What do most people judge impermissible in trolley scenarios?", answer: "pushing someone in front of the trolley" },
        { id: 36, type: "mcq", text: "What appears cross-culturally universal?", options: ["A. All moral judgments", "B. Protecting children, reciprocity, fairness", "C. Political views", "D. Religious beliefs"], answer: "B" },
        { id: 37, type: "tfng", text: "Moral reasoning has no effect on moral judgment.", answer: "False" },
        { id: 38, type: "short", text: "What does expert deliberation produce compared to untutored intuition?", answer: "more consistent and defensible conclusions" },
        { id: 39, type: "yng", text: "The author suggests intuitions are sufficient for moral judgment.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates different political orientations weight moral foundations differently.", answer: "Yes" }
      ]
    }
  ]
},

// R23 - EXPERT (Band 8.5-9.0)
{
  id: "R23",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Science of Consciousness",
      wordCount: 875,
      text: `Consciousness—subjective experience, the felt quality of awareness—remains perhaps the deepest problem in science and philosophy. Despite remarkable progress in understanding brain function, explaining how physical processes generate subjective experience eludes current frameworks, leading some to question whether consciousness can be scientifically explained at all.

The "hard problem" of consciousness, articulated by David Chalmers, distinguishes the challenge of explaining subjective experience from easier problems of explaining cognitive functions. We might explain attention, memory, and behavior in physical terms without explaining why these processes feel like anything. The explanatory gap between physical description and felt experience seems unbridgeable to some philosophers.

Neural correlates of consciousness—brain states associated with conscious experience—have been extensively mapped. Certain brain regions appear necessary for consciousness; damage to them produces unconsciousness or specific experiential deficits. Yet correlating brain states with experience differs from explaining why those states produce that experience. The correlation-explanation gap persists.

Global workspace theory proposes that consciousness arises when information is broadcast widely across brain networks, making it available for various cognitive processes. This broadcasting, mediated by frontal-parietal networks, creates unified awareness from distributed processing. The theory explains some consciousness features while leaving the hard problem unresolved.

Integrated information theory, developed by Giulio Tononi, equates consciousness with integrated information—information generated by a system beyond what its parts generate independently. The theory yields a mathematical measure of consciousness (phi) and counterintuitive predictions, like consciousness in simple systems and lack of consciousness in certain complex but modular systems.

Higher-order theories claim that conscious states require higher-order representations—thoughts about thoughts. A mental state becomes conscious when it is represented by a higher-order state. This explains why some processing remains unconscious while other processing enters awareness, but critics question whether higher-order representation is sufficient for phenomenal consciousness.

Panpsychism, once dismissed as fringe, has gained serious philosophical attention. If consciousness cannot emerge from wholly non-conscious matter, perhaps consciousness is fundamental—present in some form throughout nature. This avoids the emergence problem but faces the combination problem: how do micro-experiences combine into unified macro-experiences?

Scientific progress continues despite philosophical puzzles. Improved measures distinguish conscious from unconscious patients. Psychedelics reveal consciousness's malleability. Sleep and anesthesia research illuminates consciousness's neural basis. Whether these advances will eventually solve or dissolve the hard problem remains hotly contested.`,
      questions: [
        { id: 1, type: "tfng", text: "The hard problem of consciousness has been definitively solved.", answer: "False" },
        { id: 2, type: "tfng", text: "Neural correlates of consciousness have been mapped.", answer: "True" },
        { id: 3, type: "tfng", text: "Global workspace theory fully resolves the hard problem.", answer: "False" },
        { id: 4, type: "tfng", text: "Panpsychism has gained serious philosophical attention.", answer: "True" },
        { id: 5, type: "mcq", text: "Who articulated the hard problem of consciousness?", options: ["A. Giulio Tononi", "B. David Chalmers", "C. Daniel Dennett", "D. Francis Crick"], answer: "B" },
        { id: 6, type: "mcq", text: "What does integrated information theory equate consciousness with?", options: ["A. Brain size", "B. Integrated information", "C. Neural activity", "D. Behavior"], answer: "B" },
        { id: 7, type: "mcq", text: "What problem does panpsychism face?", options: ["A. Emergence problem", "B. Combination problem", "C. Memory problem", "D. Attention problem"], answer: "B" },
        { id: 8, type: "short", text: "What networks mediate global workspace broadcasting?", answer: "frontal-parietal networks" },
        { id: 9, type: "short", text: "What do higher-order theories claim conscious states require?", answer: "higher-order representations" },
        { id: 10, type: "mcq", text: "What reveals consciousness's malleability?", options: ["A. Surgery", "B. Psychedelics", "C. Exercise", "D. Meditation only"], answer: "B" },
        { id: 11, type: "tfng", text: "Correlating brain states with experience is the same as explaining the relationship.", answer: "False" },
        { id: 12, type: "short", text: "What mathematical measure does integrated information theory yield?", answer: "phi" },
        { id: 13, type: "yng", text: "The author believes science cannot make progress on consciousness.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The History of Epidemiology",
      wordCount: 870,
      text: `Epidemiology—the study of disease distribution and determinants in populations—has evolved from investigating infectious disease outbreaks to addressing chronic diseases, injuries, and social determinants of health. This evolution reflects changing disease patterns, methodological advances, and broadening conceptions of what constitutes legitimate epidemiological inquiry.

John Snow's investigation of London's cholera epidemic in 1854 exemplified early epidemiological reasoning. By mapping cholera deaths and identifying the Broad Street pump as a common source, Snow demonstrated waterborne transmission decades before germ theory was established. His removal of the pump handle—possibly apocryphal—symbolizes epidemiology's practical orientation.

The germ theory of disease, established by Pasteur, Koch, and others in the late nineteenth century, provided theoretical foundations for epidemiology while focusing attention on infectious agents. Koch's postulates specified criteria for establishing microbial causation. However, these criteria proved too rigid for diseases with multiple causes or healthy carriers.

The twentieth century's epidemiological transition saw chronic diseases replace infections as leading causes of death in developed countries. This required new methods suited to diseases with long latency periods and multiple risk factors. Cohort studies following populations over time and case-control studies comparing cases to controls enabled investigation of cancer, heart disease, and other chronic conditions.

The Framingham Heart Study, begun in 1948, pioneered prospective cohort methodology. By following thousands of residents over decades, researchers identified major cardiovascular risk factors including high blood pressure, smoking, and cholesterol. This model has been applied to numerous conditions, generating foundational knowledge about chronic disease epidemiology.

Smoking and lung cancer research demonstrated epidemiology's ability to establish causation without complete mechanistic understanding. Bradford Hill's criteria for causal inference—strength, consistency, temporality, biological gradient, plausibility, and others—provided frameworks for evaluating observational evidence. The resulting public health interventions have saved millions of lives.

Social epidemiology examines how social conditions shape health. Income inequality, racism, neighborhood characteristics, and social networks influence disease patterns beyond individual behaviors. This perspective locates disease causes in social structures, suggesting interventions targeting fundamental causes rather than proximate risk factors.

Molecular and genetic epidemiology integrate biological markers into population studies. Genomic data enable investigation of gene-environment interactions. Biomarkers allow earlier disease detection and exposure assessment. These developments promise precision public health while raising concerns about reductionism and equity in access to sophisticated testing.`,
      questions: [
        { id: 14, type: "tfng", text: "John Snow's cholera investigation preceded germ theory.", answer: "True" },
        { id: 15, type: "tfng", text: "Koch's postulates proved flexible enough for all diseases.", answer: "False" },
        { id: 16, type: "tfng", text: "The Framingham Heart Study began in 1948.", answer: "True" },
        { id: 17, type: "tfng", text: "Social epidemiology focuses only on individual behaviors.", answer: "False" },
        { id: 18, type: "mcq", text: "What did John Snow identify as the cholera source?", options: ["A. Contaminated food", "B. Broad Street pump", "C. Infected persons", "D. Bad air"], answer: "B" },
        { id: 19, type: "mcq", text: "What type of studies follow populations over time?", options: ["A. Case-control", "B. Cross-sectional", "C. Cohort", "D. Ecological"], answer: "C" },
        { id: 20, type: "mcq", text: "Who developed criteria for causal inference?", options: ["A. John Snow", "B. Robert Koch", "C. Bradford Hill", "D. Louis Pasteur"], answer: "C" },
        { id: 21, type: "short", text: "What transition saw chronic diseases replace infections as leading causes of death?", answer: "epidemiological transition" },
        { id: 22, type: "short", text: "What does social epidemiology suggest interventions should target?", answer: "fundamental causes" },
        { id: 23, type: "mcq", text: "What do molecular epidemiology studies integrate?", options: ["A. Economic data", "B. Biological markers", "C. Political factors", "D. Weather patterns"], answer: "B" },
        { id: 24, type: "tfng", text: "Complete mechanistic understanding was required to link smoking and lung cancer.", answer: "False" },
        { id: 25, type: "short", text: "What study identified major cardiovascular risk factors?", answer: "Framingham Heart Study" },
        { id: 26, type: "yng", text: "The author suggests precision public health raises no concerns.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Economics of Climate Change Mitigation",
      wordCount: 875,
      text: `Climate change presents perhaps the most complex challenge ever faced by economic policy, requiring coordination across nations, generations, and sectors while confronting pervasive uncertainty. Economic analysis illuminates both the costs of inaction and the design of effective mitigation policies, though fundamental questions about valuation and distribution remain contested.

The social cost of carbon attempts to quantify damages from each additional ton of carbon dioxide emitted. Estimates vary enormously depending on discount rates, climate sensitivity assumptions, damage functions, and treatment of catastrophic risks. The US government's estimate of around fifty dollars per ton contrasts with academic estimates ranging from negative values to several hundred dollars, reflecting genuine uncertainty and value judgments.

Carbon pricing through taxes or emissions trading represents economists' preferred mitigation approach. By making polluters pay for damages, pricing internalizes externalities and incentivizes efficient abatement across sources. Revenue can offset regressive impacts or reduce other distortionary taxes. Yet political feasibility has limited carbon pricing's implementation, particularly at levels economists consider adequate.

Technology policy complements carbon pricing. Innovation in clean energy, carbon capture, and efficiency reduces mitigation costs. However, market forces alone underinvest in innovation due to knowledge spillovers and long time horizons. Public research funding, deployment subsidies, and technology standards can accelerate innovation, though picking winners risks costly failures.

International coordination presents fundamental challenges. Climate change is a global commons problem requiring collective action. Individual nations face incentives to free ride on others' efforts. The Paris Agreement relies on voluntary pledges rather than binding commitments, raising questions about whether ambitions will ratchet upward sufficiently.

Distributional considerations pervade climate economics. Developing countries contributed least to accumulated emissions yet face disproportionate climate impacts. Within countries, poor communities often bear environmental burdens while wealthy individuals contribute more to emissions. Climate policy can exacerbate or ameliorate these inequities depending on design choices.

Intergenerational ethics underlies discount rate debates. High discount rates—reflecting pure time preference or expected economic growth—reduce present values of future damages, lowering optimal mitigation levels. Critics argue that discounting future welfare at rates reflecting current returns privileges present generations morally.

Economic models increasingly incorporate tipping points, irreversibilities, and catastrophic risks that earlier analyses underweighted. Fat-tailed distributions of potential damages may justify precautionary action even under uncertainty. However, translating these insights into policy recommendations remains challenging given model limitations and political constraints.`,
      questions: [
        { id: 27, type: "tfng", text: "Social cost of carbon estimates show little variation.", answer: "False" },
        { id: 28, type: "tfng", text: "Carbon pricing is economists' preferred mitigation approach.", answer: "True" },
        { id: 29, type: "tfng", text: "Market forces optimally invest in clean energy innovation.", answer: "False" },
        { id: 30, type: "tfng", text: "The Paris Agreement includes binding commitments.", answer: "False" },
        { id: 31, type: "mcq", text: "What does carbon pricing internalize?", options: ["A. Profits", "B. Externalities", "C. Wages", "D. Interest rates"], answer: "B" },
        { id: 32, type: "mcq", text: "What problem does climate change exemplify?", options: ["A. Private goods", "B. Club goods", "C. Global commons", "D. Natural monopoly"], answer: "C" },
        { id: 33, type: "mcq", text: "What do high discount rates do to present values of future damages?", options: ["A. Increase them", "B. Reduce them", "C. Keep them constant", "D. Eliminate them"], answer: "B" },
        { id: 34, type: "short", text: "What can revenue from carbon pricing offset?", answer: "regressive impacts" },
        { id: 35, type: "short", text: "What type of risks have economic models increasingly incorporated?", answer: "tipping points, irreversibilities, and catastrophic risks" },
        { id: 36, type: "mcq", text: "Who contributed least to accumulated emissions?", options: ["A. Developed countries", "B. Developing countries", "C. All equally", "D. Small nations"], answer: "B" },
        { id: 37, type: "tfng", text: "Political feasibility has supported adequate carbon pricing.", answer: "False" },
        { id: 38, type: "short", text: "What may fat-tailed distributions of damages justify?", answer: "precautionary action" },
        { id: 39, type: "yng", text: "The author suggests discount rate debates are settled.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates climate policy design affects equity outcomes.", answer: "Yes" }
      ]
    }
  ]
},

// R24 - EXPERT (Band 8.5-9.0)
{
  id: "R24",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Linguistics of Sign Languages",
      wordCount: 875,
      text: `Sign languages are fully developed natural languages with complex grammar, rich vocabulary, and the capacity to express any concept expressible in spoken languages. Linguistic research over the past half-century has demolished misconceptions about sign languages as primitive gesture systems or visual encodings of spoken languages, revealing them as independent linguistic systems of equal sophistication.

American Sign Language, British Sign Language, and other national sign languages differ substantially from one another and from the spoken languages of their regions. ASL has more in common structurally with unrelated sign languages than with English. This independence demonstrates that sign languages are not derived from spoken languages but develop naturally within deaf communities through the same processes that generate spoken languages.

Sign languages exploit the visual-gestural modality's unique properties. Simultaneity allows multiple grammatical elements to be expressed at once—manual signs, facial expressions, and body positioning can convey distinct information concurrently. Iconic elements persist even as signs become conventionalized, though iconicity does not make signs transparent to non-signers or undermine their linguistic status.

Phonological structure exists in sign languages despite the absence of sound. Signs decompose into smaller meaningless units—handshapes, locations, movements, and orientations—combined according to language-specific rules. Minimal pairs differing in single parameters demonstrate phonological contrast. This discovery revolutionized understanding of phonology, showing it concerns combinatorial structure rather than sound per se.

Grammatical structures in sign languages parallel spoken language complexity. Signs function as nouns, verbs, adjectives, and adverbs. Morphological processes modify signs systematically. Word order and spatial relationships encode grammatical relations. Recursion and embedding enable unlimited sentence complexity. Despite modality differences, underlying linguistic principles appear universal.

Sign language acquisition follows developmental stages similar to spoken language acquisition. Deaf children with signing parents babble manually, produce first signs at similar ages to first words, and progress through similar grammatical stages. This parallel development supports the view that language acquisition is guided by innate capacities independent of modality.

Neuroscience reveals that sign language processing engages left hemisphere language areas similar to spoken language, despite different sensory modalities. Deaf signers with left hemisphere damage show aphasias paralleling spoken language aphasias. Right hemisphere damage impairs spatial cognition but not sign language grammar, demonstrating that linguistic and spatial processing, though both visual, are neurologically distinct.

Signed languages remain endangered despite increased recognition. Most deaf children have hearing parents who do not sign; without early language exposure, these children risk language deprivation. Cochlear implants, while beneficial for some, cannot fully substitute for natural language access that sign languages provide.`,
      questions: [
        { id: 1, type: "tfng", text: "Sign languages are visual encodings of spoken languages.", answer: "False" },
        { id: 2, type: "tfng", text: "ASL has more structural similarity to other sign languages than to English.", answer: "True" },
        { id: 3, type: "tfng", text: "Sign languages lack phonological structure.", answer: "False" },
        { id: 4, type: "tfng", text: "Sign language processing engages left hemisphere language areas.", answer: "True" },
        { id: 5, type: "mcq", text: "What allows multiple grammatical elements to be expressed at once?", options: ["A. Speed", "B. Simultaneity", "C. Simplicity", "D. Sound"], answer: "B" },
        { id: 6, type: "mcq", text: "What do minimal pairs in sign languages demonstrate?", options: ["A. Iconicity", "B. Phonological contrast", "C. Grammatical complexity", "D. Cultural difference"], answer: "B" },
        { id: 7, type: "mcq", text: "What do deaf children with signing parents do?", options: ["A. Babble manually", "B. Learn slower", "C. Avoid signing", "D. Speak earlier"], answer: "A" },
        { id: 8, type: "short", text: "What smaller meaningless units do signs decompose into?", answer: "handshapes, locations, movements, and orientations" },
        { id: 9, type: "short", text: "What brain damage impairs spatial cognition but not sign grammar?", answer: "right hemisphere damage" },
        { id: 10, type: "mcq", text: "What risk do deaf children without early sign exposure face?", options: ["A. Physical disability", "B. Language deprivation", "C. Enhanced hearing", "D. Social preference"], answer: "B" },
        { id: 11, type: "tfng", text: "Iconicity makes signs transparent to non-signers.", answer: "False" },
        { id: 12, type: "short", text: "What enables unlimited sentence complexity in sign languages?", answer: "recursion and embedding" },
        { id: 13, type: "yng", text: "The author suggests cochlear implants fully substitute for sign language.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Geopolitics of Energy Transition",
      wordCount: 870,
      text: `The transition from fossil fuels to renewable energy will reshape global geopolitics as profoundly as the shift to oil did a century ago. Nations currently powerful due to hydrocarbon resources face diminished influence while those controlling renewable technologies and critical minerals may gain leverage. Managing this transition requires understanding both its transformative potential and its risks.

Petrostates—nations deriving substantial revenue and power from oil and gas exports—face existential challenges. Russia, Saudi Arabia, and other major exporters must diversify economies before declining demand strands fossil fuel assets. The speed of transition determines whether adjustment is gradual or disruptive. Some petrostates may attempt to destabilize competitors or accelerate extraction before assets lose value.

Renewable energy resources distribute differently than fossil fuels. Solar and wind resources are more widely available, potentially democratizing energy access. However, geography still matters—the sunniest and windiest locations enable cheapest production. Nations with abundant renewable resources and transmission connections may emerge as new energy exporters.

Critical minerals required for clean energy technologies—lithium, cobalt, rare earths—concentrate in few countries. The Democratic Republic of Congo supplies most cobalt; China dominates rare earth processing. These concentrations create new dependencies potentially as problematic as oil dependencies. Supply chain diversification and recycling can reduce but not eliminate these vulnerabilities.

China's dominance in renewable technology manufacturing raises strategic concerns. Chinese firms produce most solar panels, batteries, and electric vehicles. While this reduces costs globally, it creates dependencies troubling national security planners. Industrial policy in the United States, Europe, and elsewhere aims to develop domestic manufacturing, though at higher cost.

Energy transition may reduce conflict in some regions while increasing it in others. Less competition for oil reserves could ease tensions in the Middle East. However, competition for critical minerals may generate new resource conflicts. Regions where renewable energy installations compete with other land uses—agriculture, conservation, indigenous rights—face domestic tensions.

Climate-induced migration and instability create indirect geopolitical effects. As some regions become less habitable, population movements will strain receiving countries and generate conflict. Water stress, food insecurity, and extreme weather threaten state stability in vulnerable regions, potentially creating failed states and refugee crises.

International cooperation becomes more important yet more difficult as energy transition reshapes interests and alliances. Historic frameworks assumed continued fossil fuel dominance. New institutions must facilitate technology transfer, coordinate infrastructure investment, and manage the decline of fossil fuel industries while addressing legitimate development concerns of poorer nations.`,
      questions: [
        { id: 14, type: "tfng", text: "Petrostates face no challenges from energy transition.", answer: "False" },
        { id: 15, type: "tfng", text: "Renewable energy resources are more widely distributed than fossil fuels.", answer: "True" },
        { id: 16, type: "tfng", text: "China dominates rare earth processing.", answer: "True" },
        { id: 17, type: "tfng", text: "Energy transition will eliminate all geopolitical tensions.", answer: "False" },
        { id: 18, type: "mcq", text: "What do petrostates need to do before declining demand?", options: ["A. Increase extraction", "B. Diversify economies", "C. Import more oil", "D. Reduce populations"], answer: "B" },
        { id: 19, type: "mcq", text: "Where is most cobalt sourced from?", options: ["A. China", "B. Australia", "C. Democratic Republic of Congo", "D. Chile"], answer: "C" },
        { id: 20, type: "mcq", text: "What does China produce most of?", options: ["A. Oil", "B. Natural gas", "C. Solar panels, batteries, and EVs", "D. Coal"], answer: "C" },
        { id: 21, type: "short", text: "What can reduce but not eliminate critical mineral vulnerabilities?", answer: "supply chain diversification and recycling" },
        { id: 22, type: "short", text: "What may create failed states and refugee crises?", answer: "climate-induced migration and instability" },
        { id: 23, type: "mcq", text: "What may generate new resource conflicts?", options: ["A. Less oil competition", "B. Competition for critical minerals", "C. Reduced energy use", "D. International cooperation"], answer: "B" },
        { id: 24, type: "tfng", text: "Historic international frameworks anticipated energy transition.", answer: "False" },
        { id: 25, type: "short", text: "What do renewable installations compete with regarding land use?", answer: "agriculture, conservation, indigenous rights" },
        { id: 26, type: "yng", text: "The author suggests geography is irrelevant for renewable energy.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Neuroscience of Language Processing",
      wordCount: 875,
      text: `Language processing engages complex neural systems that neuroscience is progressively mapping. Understanding how the brain comprehends and produces language illuminates both normal function and disorders while informing debates about language's relationship to other cognitive capacities.

The classical model identified Broca's area in the left frontal lobe with speech production and Wernicke's area in the left temporal lobe with comprehension. Damage to these regions produces distinctive aphasia patterns. However, modern imaging reveals language processing involves distributed networks extending well beyond these classical regions.

The dual-stream model proposes separate ventral and dorsal pathways. The ventral stream, connecting temporal and frontal regions through the extreme capsule, processes sound-to-meaning mapping. The dorsal stream, passing through the arcuate fasciculus and superior longitudinal fasciculus, handles sound-to-articulation mapping. This architecture parallels the visual system's dual streams.

Syntax processing—understanding grammatical relationships—engages specific neural systems. Broca's area appears involved in processing complex syntactic structures, though debate continues about whether it serves syntax specifically or domain-general cognitive processes recruited for syntax. Some evidence suggests specialized syntactic processing; other evidence points to general working memory contributions.

Semantic processing—retrieving word meanings—engages temporal and frontal regions in a distributed semantic network. Different categories of knowledge—animals, tools, abstract concepts—may engage partly distinct regions, reflecting either how knowledge organizes in the brain or how we interact with different entity types. The anterior temporal lobe appears crucial for integrating semantic information.

Predictive processing characterizes language comprehension. The brain does not passively decode incoming speech but actively predicts upcoming content based on context. Violations of predictions generate distinctive neural responses. This predictive architecture enables rapid comprehension despite speech's ambiguity and noise, but also creates susceptibility to expectation-based misperceptions.

The relationship between language and thought remains debated in neuroscience. Some argue that language areas serve broader conceptual processing; others maintain language processing is modular. Neuroimaging studies find extensive overlap between language and thought networks, though interpretation remains contested. Patients who lose language retain substantial cognitive abilities, suggesting at least partial independence.

Bilingual brains offer unique insights. Different languages engage largely overlapping networks, though some specialization occurs. Switching between languages requires cognitive control engaging prefrontal regions. Evidence suggests bilingualism may enhance certain executive functions, though claims about cognitive benefits remain controversial.`,
      questions: [
        { id: 27, type: "tfng", text: "The classical model fully explains language processing.", answer: "False" },
        { id: 28, type: "tfng", text: "The dual-stream model proposes ventral and dorsal pathways.", answer: "True" },
        { id: 29, type: "tfng", text: "The brain passively decodes incoming speech.", answer: "False" },
        { id: 30, type: "tfng", text: "Different languages engage completely separate brain networks.", answer: "False" },
        { id: 31, type: "mcq", text: "What does the ventral stream process?", options: ["A. Sound-to-articulation", "B. Sound-to-meaning", "C. Visual information", "D. Motor control"], answer: "B" },
        { id: 32, type: "mcq", text: "What brain area appears crucial for integrating semantic information?", options: ["A. Broca's area", "B. Motor cortex", "C. Anterior temporal lobe", "D. Visual cortex"], answer: "C" },
        { id: 33, type: "mcq", text: "What generates distinctive neural responses during comprehension?", options: ["A. Confirmation", "B. Prediction violations", "C. Silence", "D. Simple sentences"], answer: "B" },
        { id: 34, type: "short", text: "What connects temporal and frontal regions in the dorsal stream?", answer: "arcuate fasciculus and superior longitudinal fasciculus" },
        { id: 35, type: "short", text: "What do patients who lose language retain?", answer: "substantial cognitive abilities" },
        { id: 36, type: "mcq", text: "What does switching between languages require?", options: ["A. Sleep", "B. Cognitive control", "C. Special training", "D. Native fluency"], answer: "B" },
        { id: 37, type: "tfng", text: "All categories of knowledge engage identical brain regions.", answer: "False" },
        { id: 38, type: "short", text: "What enables rapid comprehension despite speech ambiguity?", answer: "predictive architecture" },
        { id: 39, type: "yng", text: "The author believes bilingual cognitive benefits are definitively proven.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates modern imaging shows language processing is distributed.", answer: "Yes" }
      ]
    }
  ]
},
// R25 - EXPERT (Band 8.5-9.0)
{
  id: "R25",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Mathematics of Voting Systems",
      wordCount: 875,
      text: `Voting systems translate individual preferences into collective decisions, yet no system can satisfy all desirable properties simultaneously. Mathematical analysis reveals fundamental limitations while illuminating tradeoffs among alternative approaches, insights increasingly relevant as democracies worldwide face questions about electoral reform.

Arrow's impossibility theorem, proved by Kenneth Arrow in 1951, establishes that no ranked voting system with three or more candidates can simultaneously satisfy several reasonable criteria: unanimity, independence of irrelevant alternatives, and non-dictatorship. If everyone prefers A to B, the collective ranking should too (unanimity). The collective ranking of A versus B should depend only on individual rankings of A versus B, not on preferences about C (independence). No single voter should determine outcomes regardless of others' preferences (non-dictatorship). Yet no system achieves all three.

Plurality voting—selecting the candidate with the most first-place votes—suffers well-documented pathologies. Vote splitting among similar candidates enables plurality winners opposed by majorities. Strategic voting incentivizes supporting frontrunners rather than first choices. Plurality systems tend toward two-party dominance, marginalizing minority viewpoints.

Ranked choice voting (instant runoff) asks voters to rank candidates and eliminates the candidate with fewest first-choice votes in successive rounds until one achieves a majority. This reduces spoiler effects and enables voting one's true preferences, though the elimination order can produce non-monotonic results where voting for a candidate can cause them to lose.

Approval voting allows voters to approve any number of candidates, with the most-approved winning. This simple system encourages honest voting and avoids vote splitting but provides less information than ranked ballots. Strategic incentives exist to approve only frontrunners, potentially reintroducing problems approval voting aims to solve.

Condorcet methods seek candidates who would defeat all others in pairwise comparisons. Such candidates, when they exist, have strong claim to represent majority preferences. However, Condorcet cycles can occur where A beats B beats C beats A, requiring additional rules to break ties that reintroduce strategic vulnerabilities.

Proportional representation systems aim to distribute seats in proportion to vote shares. Party list systems and single transferable vote achieve proportionality but sacrifice local representation or simplicity. The tradeoff between proportional and majoritarian systems reflects deeper tensions about democracy's purposes—representing diverse viewpoints versus producing decisive governance.

The Gibbard-Satterthwaite theorem proves that all non-dictatorial voting systems with three or more candidates are susceptible to strategic manipulation. Voters can sometimes benefit from misrepresenting preferences. No voting system design can eliminate strategic incentives entirely, though some systems reduce manipulation opportunities.`,
      questions: [
        { id: 1, type: "tfng", text: "Arrow's theorem was proved in 1951.", answer: "True" },
        { id: 2, type: "tfng", text: "Plurality voting avoids vote splitting problems.", answer: "False" },
        { id: 3, type: "tfng", text: "Condorcet cycles make selecting winners straightforward.", answer: "False" },
        { id: 4, type: "tfng", text: "The Gibbard-Satterthwaite theorem shows some systems eliminate strategic voting.", answer: "False" },
        { id: 5, type: "mcq", text: "What does unanimity require?", options: ["A. One voter decides", "B. Collective ranking matches universal individual preference", "C. Random selection", "D. Equal votes"], answer: "B" },
        { id: 6, type: "mcq", text: "What problem does ranked choice voting reduce?", options: ["A. Complexity", "B. Spoiler effects", "C. Participation", "D. Counting time"], answer: "B" },
        { id: 7, type: "mcq", text: "What does approval voting allow?", options: ["A. Ranking all candidates", "B. Approving any number of candidates", "C. Only one vote", "D. Weighted votes"], answer: "B" },
        { id: 8, type: "short", text: "Who proved Arrow's impossibility theorem?", answer: "Kenneth Arrow" },
        { id: 9, type: "short", text: "What do Condorcet methods seek?", answer: "candidates who would defeat all others in pairwise comparisons" },
        { id: 10, type: "mcq", text: "What do proportional systems sacrifice for proportionality?", options: ["A. Fairness", "B. Local representation or simplicity", "C. Vote counting", "D. Ballot design"], answer: "B" },
        { id: 11, type: "tfng", text: "Plurality systems tend toward multi-party diversity.", answer: "False" },
        { id: 12, type: "short", text: "What can produce non-monotonic results in ranked choice voting?", answer: "elimination order" },
        { id: 13, type: "yng", text: "The author suggests voting systems can satisfy all desirable properties.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Archaeology of Ancient Civilizations",
      wordCount: 870,
      text: `Archaeological methods have revolutionized understanding of ancient civilizations, enabling reconstruction of societies that left no written records while reinterpreting those that did. Scientific techniques developed over the past century transform artifacts and sites into rich sources of information about past lifeways, technologies, and social organization.

Stratigraphy—the analysis of layered deposits—provides fundamental dating and contextual information. Deeper layers typically represent earlier periods; objects found together in the same layer likely date from similar times. Careful excavation records spatial relationships enabling reconstruction of activities and events. The Harris matrix formalizes stratigraphic relationships into analytical diagrams.

Radiocarbon dating revolutionized archaeological chronology after its development by Willard Libby in 1949. Carbon-14 absorbed during life decays at known rates after death, enabling age determination of organic materials up to approximately fifty thousand years old. Calibration using tree rings and other sources corrects for variations in atmospheric carbon, improving accuracy.

Other absolute dating techniques expand the toolkit. Potassium-argon and argon-argon dating measure decay in volcanic materials, reaching much further back than radiocarbon. Thermoluminescence and optically stimulated luminescence date last heating or light exposure of certain minerals. Dendrochronology provides annual precision where suitable trees existed.

Material analysis reveals ancient technologies and trade networks. Chemical composition identifies source locations of obsidian, copper, and other materials, tracing exchange systems across hundreds of kilometers. Residue analysis detects traces of foods, medicines, and other substances in pottery vessels. Ancient DNA extracted from bones and sediments illuminates population movements and relationships.

Landscape approaches examine settlement patterns across regions rather than individual sites. Geographic information systems enable spatial analysis of site distributions in relation to resources, routes, and neighboring communities. Remote sensing technologies—aerial photography, satellite imagery, lidar—detect features invisible from the ground, transforming survey efficiency.

Environmental archaeology reconstructs past climates and ecosystems. Pollen analysis reveals vegetation histories; sediment cores document environmental change. Understanding how past peoples adapted to environmental conditions illuminates human-environment relationships relevant to contemporary challenges.

Ethnoarchaeology studies living societies to develop interpretive frameworks for archaeological evidence. Observing how current communities produce and discard material culture generates hypotheses about archaeological patterns. Experimental archaeology replicates ancient technologies to understand production processes and use-wear patterns.`,
      questions: [
        { id: 14, type: "tfng", text: "Stratigraphy analyzes layered deposits.", answer: "True" },
        { id: 15, type: "tfng", text: "Radiocarbon dating was developed in the nineteenth century.", answer: "False" },
        { id: 16, type: "tfng", text: "Ancient DNA cannot illuminate population movements.", answer: "False" },
        { id: 17, type: "tfng", text: "Ethnoarchaeology studies extinct societies.", answer: "False" },
        { id: 18, type: "mcq", text: "Who developed radiocarbon dating?", options: ["A. Harris", "B. Willard Libby", "C. Darwin", "D. Leakey"], answer: "B" },
        { id: 19, type: "mcq", text: "What corrects radiocarbon dating for atmospheric variations?", options: ["A. Temperature adjustment", "B. Calibration using tree rings", "C. Chemical analysis", "D. Depth measurement"], answer: "B" },
        { id: 20, type: "mcq", text: "What does residue analysis detect in pottery?", options: ["A. Age only", "B. Traces of foods and substances", "C. Manufacturing location", "D. Artistic style"], answer: "B" },
        { id: 21, type: "short", text: "What formalizes stratigraphic relationships into diagrams?", answer: "Harris matrix" },
        { id: 22, type: "short", text: "What reveals vegetation histories?", answer: "pollen analysis" },
        { id: 23, type: "mcq", text: "What enables spatial analysis of site distributions?", options: ["A. Hand surveys", "B. Geographic information systems", "C. Excavation", "D. Dating"], answer: "B" },
        { id: 24, type: "tfng", text: "Deeper stratigraphic layers typically represent later periods.", answer: "False" },
        { id: 25, type: "short", text: "What replicates ancient technologies to understand production?", answer: "experimental archaeology" },
        { id: 26, type: "yng", text: "The author suggests archaeology only studies written societies.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Ethics of Artificial Intelligence",
      wordCount: 875,
      text: `Artificial intelligence raises profound ethical questions about autonomy, responsibility, fairness, and human flourishing. As AI systems increasingly make decisions affecting lives—in criminal justice, hiring, healthcare, and beyond—developing ethical frameworks and governance mechanisms becomes urgent. The field of AI ethics addresses these challenges through interdisciplinary analysis and practical recommendations.

Algorithmic bias presents immediate concerns. AI systems trained on historical data may perpetuate or amplify existing discrimination. Facial recognition systems show higher error rates for darker-skinned individuals. Hiring algorithms may disadvantage women in male-dominated fields. Criminal risk assessment tools may reflect racial disparities in policing and sentencing. Detecting and mitigating such biases requires ongoing vigilance and technical approaches.

Transparency and explainability prove challenging for complex AI systems. Machine learning models may reach accurate predictions through processes opaque even to their creators. This "black box" problem complicates accountability when errors occur. Individuals affected by AI decisions may have no recourse if reasons cannot be articulated. Explainable AI research seeks methods for understanding model behavior without sacrificing performance.

Autonomy concerns arise as AI systems make increasingly consequential decisions. Should algorithms determine loan eligibility, medical treatments, or parole decisions? Some argue efficiency justifies algorithmic decision-making; others insist human judgment must retain ultimate authority. The appropriate scope of automated decision-making varies across domains and remains contested.

Privacy implications of AI merit attention. Machine learning enables extraction of sensitive information from seemingly innocuous data. Predictive systems may know individuals better than they know themselves. Surveillance capabilities expand as AI analyzes video, audio, and text at scale. Balancing AI capabilities against privacy rights requires both technical and policy responses.

Existential risk from advanced AI has gained prominence in discourse. Some researchers argue that sufficiently advanced AI could pose risks to human existence if its goals diverge from human values. Others consider such scenarios speculative distractions from present harms. Regardless of position on long-term risks, ensuring AI systems remain aligned with human intentions presents genuine technical challenges.

Labor market impacts generate distributional concerns. AI automation may displace workers faster than new opportunities emerge. Benefits may concentrate among technology owners while costs fall on displaced workers. Social safety nets and education systems may prove inadequate for managing transitions.

Governance frameworks are developing but remain fragmented. The European Union's AI Act establishes risk-based regulations. Various jurisdictions require algorithmic impact assessments. Professional organizations develop ethical guidelines. Whether these mechanisms will prove adequate for rapidly advancing technology remains uncertain.`,
      questions: [
        { id: 27, type: "tfng", text: "Facial recognition systems show equal error rates across skin tones.", answer: "False" },
        { id: 28, type: "tfng", text: "Machine learning models always provide transparent reasoning.", answer: "False" },
        { id: 29, type: "tfng", text: "All researchers agree on AI existential risk severity.", answer: "False" },
        { id: 30, type: "tfng", text: "The European Union has established AI regulations.", answer: "True" },
        { id: 31, type: "mcq", text: "What may AI systems trained on historical data perpetuate?", options: ["A. Innovation", "B. Existing discrimination", "C. Transparency", "D. Privacy"], answer: "B" },
        { id: 32, type: "mcq", text: "What does explainable AI research seek?", options: ["A. Higher performance only", "B. Methods for understanding model behavior", "C. Faster processing", "D. More data"], answer: "B" },
        { id: 33, type: "mcq", text: "What may machine learning extract from innocuous data?", options: ["A. Nothing useful", "B. Sensitive information", "C. Only technical data", "D. Public records"], answer: "B" },
        { id: 34, type: "short", text: "What term describes AI decision processes opaque to creators?", answer: "black box" },
        { id: 35, type: "short", text: "What may concentrate among technology owners while workers bear costs?", answer: "benefits" },
        { id: 36, type: "mcq", text: "What type of regulations does the EU AI Act establish?", options: ["A. Uniform", "B. Risk-based", "C. Industry-specific", "D. Voluntary"], answer: "B" },
        { id: 37, type: "tfng", text: "Privacy is enhanced by AI's predictive capabilities.", answer: "False" },
        { id: 38, type: "short", text: "What ensures AI systems remain aligned with human intentions?", answer: "alignment" },
        { id: 39, type: "yng", text: "The author suggests current governance frameworks are fully adequate.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates hiring algorithms may disadvantage certain groups.", answer: "Yes" }
      ]
    }
  ]
},

// R26 - EXPERT (Band 8.5-9.0)
{
  id: "R26",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Sociology of Scientific Knowledge",
      wordCount: 880,
      text: `The sociology of scientific knowledge examines how social factors shape the production, validation, and acceptance of scientific claims. Once considered immune to sociological analysis, science has become a rich domain for understanding how knowledge emerges from collective human activity rather than simply reflecting objective nature.

The strong programme in sociology of science, developed at the University of Edinburgh, advocated symmetrical treatment of true and false scientific beliefs—both requiring sociological explanation. Traditional approaches explained false beliefs sociologically while treating true beliefs as simply reflecting reality. The strong programme insists that social processes shape all knowledge claims regardless of their eventual acceptance or rejection.

Laboratory studies pioneered by Bruno Latour and others observed scientists at work, revealing the messy, contingent processes behind published findings. Scientific facts emerge through negotiations, instrument calibrations, and rhetorical strategies rather than straightforward observation. The clean, logical structure of scientific papers conceals the uncertain, iterative processes of discovery. This constructivist approach generated both insights and controversy.

Scientific controversies reveal how social factors influence knowledge claims. Disputes about cold fusion, climate change, or nutritional science show experts disagreeing while reaching outside technical evidence to social, political, and economic considerations. How controversies close—or persist—depends on factors beyond evidence alone, including institutional power, public opinion, and political stakes.

Citation networks and collaboration patterns reveal science's social structure. Certain researchers and institutions dominate fields through accumulated prestige and resources. The Matthew Effect—the rich getting richer—concentrates rewards among already-successful scientists. Geographic and demographic factors shape who participates in science and whose voices carry authority.

Paradigms and research programs create intellectual communities with shared assumptions, methods, and standards. Thomas Kuhn's concept of paradigm shifts highlighted how scientific revolutions involve social as well as intellectual transformation. Researchers trained in different paradigms may literally perceive phenomena differently, making neutral comparison difficult.

The science-policy interface demonstrates knowledge's social embeddedness. Scientific findings supporting political positions receive different treatment than inconvenient results. Expert advisors navigate tensions between scientific uncertainty and policy demands for clarity. Decisions about research priorities reflect social values about which questions merit investigation.

Science and technology studies has expanded to examine innovation, expertise, and public engagement with science. Understanding science as social practice does not necessarily undermine its authority but can enable more reflexive and democratic relationships between science and society.`,
      questions: [
        { id: 1, type: "tfng", text: "The strong programme treats true and false beliefs symmetrically.", answer: "True" },
        { id: 2, type: "tfng", text: "Laboratory studies show science as clean and logical.", answer: "False" },
        { id: 3, type: "tfng", text: "Scientific controversies depend only on technical evidence.", answer: "False" },
        { id: 4, type: "tfng", text: "The Matthew Effect distributes scientific rewards equally.", answer: "False" },
        { id: 5, type: "mcq", text: "Where was the strong programme developed?", options: ["A. Harvard", "B. Cambridge", "C. University of Edinburgh", "D. MIT"], answer: "C" },
        { id: 6, type: "mcq", text: "Who pioneered laboratory studies of science?", options: ["A. Thomas Kuhn", "B. Bruno Latour", "C. Robert Merton", "D. Karl Popper"], answer: "B" },
        { id: 7, type: "mcq", text: "What does the Matthew Effect describe?", options: ["A. Equal distribution", "B. Random allocation", "C. Concentration among successful scientists", "D. Declining prestige"], answer: "C" },
        { id: 8, type: "short", text: "What does the clean structure of papers conceal?", answer: "uncertain, iterative processes of discovery" },
        { id: 9, type: "short", text: "Who introduced the concept of paradigm shifts?", answer: "Thomas Kuhn" },
        { id: 10, type: "mcq", text: "What shapes research priority decisions?", options: ["A. Random selection", "B. Social values", "C. Alphabetical order", "D. Age of researcher"], answer: "B" },
        { id: 11, type: "tfng", text: "Traditional approaches explained true beliefs sociologically.", answer: "False" },
        { id: 12, type: "short", text: "What do researchers in different paradigms literally do differently?", answer: "perceive phenomena" },
        { id: 13, type: "yng", text: "The author believes sociology of science necessarily undermines scientific authority.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Biology of Aging",
      wordCount: 875,
      text: `Aging—the progressive decline in physiological function with time—presents one of biology's greatest challenges. Understanding why and how organisms age could enable interventions extending healthy lifespan. Recent research has identified mechanisms underlying aging while raising hopes and controversies about the possibility of significant life extension.

Evolutionary theory explains why aging exists despite natural selection favoring survival and reproduction. Selection pressure weakens after reproductive age—genes with late-onset harmful effects face little evolutionary penalty. Antagonistic pleiotropy proposes that some genes benefit early survival while causing later deterioration. The disposable soma theory suggests organisms allocate resources between reproduction and maintenance, with limited investment in long-term survival.

Cellular senescence contributes to tissue deterioration. Senescent cells cease dividing but resist death, accumulating with age and secreting inflammatory factors damaging surrounding tissues. Clearing senescent cells in mice improves health and extends lifespan, inspiring development of senolytic drugs targeting these cells.

Telomere shortening limits cell division potential. These protective chromosome caps erode with each replication; critically short telomeres trigger senescence or cell death. Telomerase, the enzyme that maintains telomeres, is suppressed in most adult cells. Cancer cells reactivate telomerase, enabling unlimited division—complicating therapeutic approaches targeting this pathway.

Mitochondrial dysfunction contributes to aging. These cellular powerhouses accumulate damage and mutations over time, reducing energy production and increasing harmful reactive oxygen species. The free radical theory of aging emphasizes oxidative damage's role, though antioxidant supplementation has shown disappointing results in extending lifespan.

Epigenetic changes alter gene expression patterns with age. DNA methylation patterns serve as biological clocks more accurate than chronological age in predicting health outcomes. Reprogramming epigenetic marks has reversed aspects of aging in laboratory animals, suggesting epigenetic changes may be causes rather than mere correlates of aging.

Caloric restriction extends lifespan across species from yeast to primates. The mechanisms involve nutrient-sensing pathways including mTOR and sirtuins. Drugs mimicking caloric restriction's effects—rapamycin, metformin, resveratrol—show promise in animal studies though human results remain uncertain.

The prospect of significantly extending human lifespan raises ethical questions. Would extended life benefit individuals and society or create problems of overpopulation, resource depletion, and inequality? Who would access life-extending interventions? These considerations accompany scientific progress in understanding aging.`,
      questions: [
        { id: 14, type: "tfng", text: "Selection pressure strengthens after reproductive age.", answer: "False" },
        { id: 15, type: "tfng", text: "Senescent cells continue dividing normally.", answer: "False" },
        { id: 16, type: "tfng", text: "Telomere shortening limits cell division.", answer: "True" },
        { id: 17, type: "tfng", text: "Antioxidant supplementation has successfully extended human lifespan.", answer: "False" },
        { id: 18, type: "mcq", text: "What do senescent cells secrete?", options: ["A. Growth hormones", "B. Inflammatory factors", "C. Telomerase", "D. Oxygen"], answer: "B" },
        { id: 19, type: "mcq", text: "What do cancer cells reactivate?", options: ["A. Senescence", "B. Apoptosis", "C. Telomerase", "D. Mitochondria"], answer: "C" },
        { id: 20, type: "mcq", text: "What serves as biological clocks predicting health?", options: ["A. Telomere length only", "B. DNA methylation patterns", "C. Cell count", "D. Heart rate"], answer: "B" },
        { id: 21, type: "short", text: "What drugs target senescent cells?", answer: "senolytic drugs" },
        { id: 22, type: "short", text: "What extends lifespan across species from yeast to primates?", answer: "caloric restriction" },
        { id: 23, type: "mcq", text: "What theory emphasizes oxidative damage?", options: ["A. Disposable soma", "B. Free radical theory", "C. Antagonistic pleiotropy", "D. Telomere theory"], answer: "B" },
        { id: 24, type: "tfng", text: "Epigenetic reprogramming has reversed aging aspects in animals.", answer: "True" },
        { id: 25, type: "short", text: "What pathways do caloric restriction mechanisms involve?", answer: "mTOR and sirtuins" },
        { id: 26, type: "yng", text: "The author suggests life extension raises no ethical questions.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The History of Economic Thought",
      wordCount: 870,
      text: `Economic thought has evolved through distinct phases, each responding to contemporary challenges while building on or reacting against predecessors. Understanding this intellectual history illuminates current debates while revealing how economic ideas reflect and shape social conditions.

Mercantilism, dominant from the sixteenth through eighteenth centuries, viewed national wealth as a zero-sum competition for precious metals and trade surpluses. Governments should promote exports, restrict imports, and acquire colonies providing raw materials and captive markets. This framework justified extensive state intervention in commerce and colonial expansion.

Classical economics emerged with Adam Smith's Wealth of Nations in 1776, arguing that self-interested exchange promotes prosperity better than mercantilist regulation. The invisible hand of market competition allocates resources efficiently. David Ricardo developed comparative advantage theory, showing trade benefits all parties. Classical economists generally favored free markets with limited government, though recognizing exceptions.

Karl Marx offered fundamental critique of capitalism, analyzing how capital accumulation produces exploitation, crises, and class conflict. Labor creates value appropriated by capitalists as profit. Competition drives technological change that displaces workers while concentrating capital. Marx predicted capitalism's eventual collapse and replacement by socialism, though his timeline proved mistaken.

The marginalist revolution of the 1870s shifted focus from production to consumption, explaining prices through marginal utility rather than labor. Mathematical formalization enabled more rigorous analysis. General equilibrium theory, developed by Léon Walras, demonstrated how markets could simultaneously determine all prices. This framework remains central to mainstream economics.

John Maynard Keynes transformed economics following the Great Depression. Against classical assumptions of automatic full employment, Keynes argued that inadequate aggregate demand could produce prolonged unemployment requiring government intervention. Keynesian economics dominated postwar policy until challenged by stagflation in the 1970s.

Monetarism and supply-side economics emerged as alternatives, emphasizing monetary policy and tax cuts respectively. Milton Friedman argued that inflation results from excessive money supply growth. These perspectives influenced policy shifts toward deregulation and reduced government intervention in the 1980s.

Contemporary economics encompasses diverse approaches. Behavioral economics incorporates psychological insights challenging rational actor assumptions. Development economics addresses challenges facing poorer nations. Ecological economics questions growth-focused frameworks. The field continues evolving through dialogue among competing perspectives.`,
      questions: [
        { id: 27, type: "tfng", text: "Mercantilism viewed trade as mutually beneficial.", answer: "False" },
        { id: 28, type: "tfng", text: "Adam Smith's Wealth of Nations was published in 1776.", answer: "True" },
        { id: 29, type: "tfng", text: "Marx's predictions about capitalism's timeline proved accurate.", answer: "False" },
        { id: 30, type: "tfng", text: "Keynes argued markets automatically achieve full employment.", answer: "False" },
        { id: 31, type: "mcq", text: "What did mercantilism promote?", options: ["A. Free trade", "B. Exports and import restrictions", "C. Minimal government", "D. Worker rights"], answer: "B" },
        { id: 32, type: "mcq", text: "Who developed comparative advantage theory?", options: ["A. Adam Smith", "B. David Ricardo", "C. Karl Marx", "D. John Keynes"], answer: "B" },
        { id: 33, type: "mcq", text: "What did the marginalist revolution explain prices through?", options: ["A. Labor", "B. Marginal utility", "C. Government decree", "D. Tradition"], answer: "B" },
        { id: 34, type: "short", text: "Who developed general equilibrium theory?", answer: "Léon Walras" },
        { id: 35, type: "short", text: "What challenged Keynesian economics in the 1970s?", answer: "stagflation" },
        { id: 36, type: "mcq", text: "What did Milton Friedman argue causes inflation?", options: ["A. Government spending", "B. Trade deficits", "C. Excessive money supply growth", "D. High wages"], answer: "C" },
        { id: 37, type: "tfng", text: "Behavioral economics supports rational actor assumptions.", answer: "False" },
        { id: 38, type: "short", text: "What does ecological economics question?", answer: "growth-focused frameworks" },
        { id: 39, type: "yng", text: "The author suggests economic thought has reached final consensus.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates classical economists generally favored free markets.", answer: "Yes" }
      ]
    }
  ]
},

// R27 - EXPERT (Band 8.5-9.0)
{
  id: "R27",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Physics of Climate Systems",
      wordCount: 875,
      text: `Earth's climate system involves complex interactions among atmosphere, oceans, ice sheets, and land surfaces, governed by physical principles that scientists increasingly understand. This understanding enables both explanation of past climate variations and projection of future changes under different emission scenarios.

The greenhouse effect, first described by Joseph Fourier in the 1820s, results from atmospheric gases absorbing and re-emitting infrared radiation. Without this effect, Earth's surface temperature would average approximately minus eighteen degrees Celsius rather than the current plus fifteen. Carbon dioxide, methane, water vapor, and other gases create this warming blanket.

Radiative forcing quantifies changes in energy balance from factors including greenhouse gas concentrations, aerosols, and solar variation. Positive forcing adds energy, warming the climate; negative forcing removes energy, cooling it. Human activities since industrialization have produced net positive forcing dominated by carbon dioxide accumulation.

Climate sensitivity measures how much warming results from a given forcing, typically expressed as the temperature change from doubling atmospheric carbon dioxide. Estimates range from approximately two to five degrees Celsius, with uncertainty reflecting complex feedback mechanisms. Water vapor amplifies warming as higher temperatures increase atmospheric moisture. Clouds produce both warming and cooling effects depending on type and altitude.

Ocean circulation distributes heat globally while storing vast amounts of carbon and energy. The thermohaline circulation—driven by temperature and salinity differences—transports warm water poleward and cold water equatorward. Climate change may alter these patterns, potentially weakening the Atlantic meridional overturning circulation with significant regional consequences.

Ice-albedo feedback amplifies polar warming. Ice and snow reflect solar radiation; as warming melts ice, darker ocean and land surfaces absorb more energy, accelerating further warming. This feedback explains why Arctic regions warm faster than the global average and why ice sheet behavior concerns climate scientists.

Carbon cycle feedbacks could amplify or dampen warming. Warming releases carbon from permafrost and potentially from ocean sediments. Changes in vegetation may absorb or release carbon depending on temperature, precipitation, and carbon dioxide fertilization effects. These feedbacks introduce uncertainty into long-term projections.

Climate models integrate these processes into mathematical frameworks simulating past and future climates. Models have successfully reproduced observed warming and other patterns. However, computational limitations require simplifications, and processes like cloud formation remain challenging to model accurately. Ensembles of models provide ranges reflecting uncertainty.`,
      questions: [
        { id: 1, type: "tfng", text: "The greenhouse effect was first described in the 1900s.", answer: "False" },
        { id: 2, type: "tfng", text: "Without the greenhouse effect, Earth would be much colder.", answer: "True" },
        { id: 3, type: "tfng", text: "Climate sensitivity estimates show little uncertainty.", answer: "False" },
        { id: 4, type: "tfng", text: "Arctic regions warm slower than the global average.", answer: "False" },
        { id: 5, type: "mcq", text: "Who first described the greenhouse effect?", options: ["A. Newton", "B. Einstein", "C. Joseph Fourier", "D. Darwin"], answer: "C" },
        { id: 6, type: "mcq", text: "What does positive radiative forcing do?", options: ["A. Cools climate", "B. Warms climate", "C. No effect", "D. Stabilizes climate"], answer: "B" },
        { id: 7, type: "mcq", text: "What drives thermohaline circulation?", options: ["A. Wind only", "B. Temperature and salinity differences", "C. Tides", "D. Earthquakes"], answer: "B" },
        { id: 8, type: "short", text: "What would Earth's temperature be without the greenhouse effect?", answer: "minus eighteen degrees Celsius" },
        { id: 9, type: "short", text: "What feedback amplifies polar warming through reflectivity changes?", answer: "ice-albedo feedback" },
        { id: 10, type: "mcq", text: "What do ensembles of climate models provide?", options: ["A. Single predictions", "B. Ranges reflecting uncertainty", "C. Perfect accuracy", "D. Historical data only"], answer: "B" },
        { id: 11, type: "tfng", text: "Climate models have failed to reproduce observed warming.", answer: "False" },
        { id: 12, type: "short", text: "What processes remain challenging to model accurately?", answer: "cloud formation" },
        { id: 13, type: "yng", text: "The author suggests carbon cycle feedbacks are fully understood.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Anthropology of Religion",
      wordCount: 870,
      text: `The anthropological study of religion examines how religious beliefs and practices function within human societies, seeking explanations that neither reduce religion to delusion nor accept supernatural claims at face value. This approach illuminates religion's social roles while respecting its profound significance for believers.

Edward Tylor proposed animism—belief in spiritual beings—as religion's minimum definition and earliest form. He saw religion evolving from animism through polytheism to monotheism, reflecting intellectual progress. This evolutionary framework, though influential, has been criticized for imposing Western categories and assuming developmental stages.

Émile Durkheim argued that religion expresses and reinforces social solidarity. Sacred things symbolize the group itself; religious rituals create collective effervescence binding participants together. The sacred-profane distinction organizes social life more fundamentally than specific beliefs about supernatural beings. Religion thus serves essential social functions regardless of literal truth.

Clifford Geertz defined religion as a cultural system providing models of and models for reality. Religious symbols establish powerful moods and motivations while formulating conceptions of existence clothed in factuality. Religion makes suffering meaningful by placing it within cosmic frameworks. This interpretive approach emphasizes meaning-making over social function.

Victor Turner analyzed ritual's transformative power. Liminality—the betwixt-and-between state during rites of passage—suspends normal social structures, enabling communitas, an intense feeling of social equality and togetherness. Rituals process individuals through social transitions while regenerating community bonds.

Religious specialists—shamans, priests, prophets—occupy distinctive social roles. Shamans enter altered states to communicate with spirits, typically in small-scale societies. Priests perform established rituals within institutional frameworks. Prophets challenge existing orders with new revelations. Max Weber analyzed how charismatic authority becomes routinized in religious institutions.

Secularization theory predicted religion's decline with modernization, but evidence remains mixed. While religious participation has declined in Western Europe, religion remains vigorous elsewhere and has resurged in various forms. Some argue secularization describes a particular Western trajectory rather than a universal pattern.

Cognitive approaches examine psychological foundations of religious belief. Humans seem predisposed to detect agency, infer design, and imagine minds without bodies. These cognitive tendencies may explain religion's cross-cultural prevalence while leaving open whether they produce true beliefs or systematic errors.`,
      questions: [
        { id: 14, type: "tfng", text: "Tylor's evolutionary framework has been universally accepted.", answer: "False" },
        { id: 15, type: "tfng", text: "Durkheim argued religion reinforces social solidarity.", answer: "True" },
        { id: 16, type: "tfng", text: "Geertz emphasized social function over meaning-making.", answer: "False" },
        { id: 17, type: "tfng", text: "Religious participation has increased in Western Europe.", answer: "False" },
        { id: 18, type: "mcq", text: "What did Tylor propose as religion's earliest form?", options: ["A. Monotheism", "B. Polytheism", "C. Animism", "D. Atheism"], answer: "C" },
        { id: 19, type: "mcq", text: "What does liminality suspend according to Turner?", options: ["A. Time", "B. Normal social structures", "C. Religious belief", "D. Individual identity"], answer: "B" },
        { id: 20, type: "mcq", text: "Who analyzed charismatic authority in religious institutions?", options: ["A. Durkheim", "B. Tylor", "C. Max Weber", "D. Geertz"], answer: "C" },
        { id: 21, type: "short", text: "What feeling does communitas create?", answer: "intense social equality and togetherness" },
        { id: 22, type: "short", text: "What type of specialists enter altered states to communicate with spirits?", answer: "shamans" },
        { id: 23, type: "mcq", text: "What do cognitive approaches examine?", options: ["A. Economic factors", "B. Political institutions", "C. Psychological foundations", "D. Historical texts"], answer: "C" },
        { id: 24, type: "tfng", text: "Secularization theory accurately predicts global religious decline.", answer: "False" },
        { id: 25, type: "short", text: "What does Geertz say religious symbols establish?", answer: "powerful moods and motivations" },
        { id: 26, type: "yng", text: "The author suggests anthropology accepts supernatural claims literally.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Technology of Renewable Energy Storage",
      wordCount: 875,
      text: `Energy storage represents a critical challenge for renewable electricity systems. Solar and wind generation fluctuates with weather and time of day, yet electricity demand must be met continuously. Cost-effective, scalable storage technologies are essential for high renewable energy penetration, driving intensive research and development across multiple approaches.

Lithium-ion batteries dominate current grid storage deployments. Declining costs—falling approximately ninety percent over the past decade—have enabled rapid growth. However, lithium-ion faces limitations: four-hour discharge duration suits daily cycling but not seasonal storage; lithium and cobalt supplies may constrain scaling; fire risks require careful management. Research pursues higher energy density, longer life, and safer chemistries.

Flow batteries store energy in liquid electrolytes pumped through electrochemical cells. Unlike lithium-ion, energy capacity scales independently of power capacity by increasing tank size. Vanadium redox and zinc-bromine systems offer long duration and long life. Lower energy density and higher upfront costs limit current deployment, though costs are declining.

Pumped hydro storage, the oldest grid storage technology, pumps water uphill when excess electricity is available and generates power by releasing it through turbines. Representing over ninety percent of installed storage capacity globally, pumped hydro offers large scale and long duration. However, geographic requirements limit suitable sites, and environmental impacts raise concerns.

Compressed air energy storage uses excess electricity to compress air into underground caverns, releasing it through turbines when needed. Two large facilities operate, with others planned. Geological requirements restrict locations; efficiency improvements and above-ground configurations are being developed.

Hydrogen produced through electrolysis offers potentially unlimited storage duration. Excess renewable electricity splits water into hydrogen and oxygen; hydrogen can be stored and later converted back to electricity through fuel cells or turbines. Low round-trip efficiency—roughly thirty to forty percent—and infrastructure requirements present challenges, though declining electrolyzer costs improve economics.

Thermal storage captures energy as heat or cold. Concentrating solar power plants store heat in molten salt, enabling generation after sunset. Ice storage for cooling shifts electricity demand away from peak hours. Industrial heat storage could enable electrification of high-temperature processes.

Diverse storage technologies will likely coexist, matched to different applications. Short-duration storage manages hourly fluctuations; long-duration storage addresses multi-day weather patterns; seasonal storage balances summer and winter generation. Portfolio approaches hedge against technology risk while optimizing system costs.`,
      questions: [
        { id: 27, type: "tfng", text: "Lithium-ion battery costs have increased over the past decade.", answer: "False" },
        { id: 28, type: "tfng", text: "Flow batteries scale energy capacity independently of power capacity.", answer: "True" },
        { id: 29, type: "tfng", text: "Pumped hydro can be built at any location.", answer: "False" },
        { id: 30, type: "tfng", text: "Hydrogen storage has high round-trip efficiency.", answer: "False" },
        { id: 31, type: "mcq", text: "What percentage of installed storage capacity is pumped hydro?", options: ["A. Fifty percent", "B. Seventy percent", "C. Over ninety percent", "D. Ten percent"], answer: "C" },
        { id: 32, type: "mcq", text: "What limits lithium-ion for seasonal storage?", options: ["A. Cost", "B. Four-hour discharge duration", "C. Size", "D. Temperature"], answer: "B" },
        { id: 33, type: "mcq", text: "What do concentrating solar power plants store heat in?", options: ["A. Water", "B. Molten salt", "C. Oil", "D. Air"], answer: "B" },
        { id: 34, type: "short", text: "What does electrolysis split water into?", answer: "hydrogen and oxygen" },
        { id: 35, type: "short", text: "What type of storage uses underground caverns?", answer: "compressed air energy storage" },
        { id: 36, type: "mcq", text: "What approaches hedge against technology risk?", options: ["A. Single technology", "B. Portfolio approaches", "C. Government mandates", "D. Import reliance"], answer: "B" },
        { id: 37, type: "tfng", text: "All storage technologies suit all applications equally.", answer: "False" },
        { id: 38, type: "short", text: "What does ice storage shift away from peak hours?", answer: "electricity demand" },
        { id: 39, type: "yng", text: "The author suggests one storage technology will dominate all applications.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates flow battery costs are declining.", answer: "Yes" }
      ]
    }
  ]
},
// R25 - EXPERT (Band 8.5-9.0)
{
  id: "R28",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Philosophy of Mathematics",
      wordCount: 875,
      text: `The philosophy of mathematics investigates the nature of mathematical objects, the basis of mathematical knowledge, and mathematics' relationship to physical reality. These questions, debated since antiquity, remain contested among philosophers and mathematicians, with implications for understanding science, logic, and human cognition.

Platonism holds that mathematical objects—numbers, sets, functions—exist independently of human minds in an abstract realm. Mathematicians discover rather than invent mathematical truths. This view explains mathematics' objectivity and its "unreasonable effectiveness" in describing physical reality, as physicist Eugene Wigner famously noted. However, how we access abstract objects epistemologically remains puzzling.

Formalism, associated with David Hilbert, treats mathematics as manipulation of symbols according to specified rules. Mathematical statements are neither true nor false but moves in a formal game. This approach sidesteps metaphysical questions about abstract objects while emphasizing rigor and consistency. Gödel's incompleteness theorems challenged formalism by showing that consistent systems cannot prove their own consistency.

Intuitionism, developed by L.E.J. Brouwer, grounds mathematics in mental construction. Mathematical objects exist only when constructed by minds; proofs must provide construction methods rather than mere existence demonstrations. Intuitionists reject the law of excluded middle for infinite domains and accept a more restricted mathematics than classical approaches allow.

Logicism attempted to reduce mathematics to logic. Frege and Russell sought to derive mathematical truths from purely logical principles. Russell's paradox complicated this program, though type theory and later developments preserved logicism's core insights. The relationship between logic and mathematics remains philosophically significant.

Structuralism views mathematical objects as positions in structures rather than independent entities. The number three is defined by its structural relationships—succeeding two, preceding four—rather than intrinsic properties. This approach explains why different mathematical constructions can equally represent the same mathematical facts.

Naturalism treats mathematics as continuous with natural science, subject to similar empirical constraints. Mathematical theories, like scientific theories, face revision based on their applications. This view challenges the traditional distinction between mathematical and empirical knowledge while raising questions about mathematics' apparent certainty.

The applicability of mathematics to physics remains philosophically puzzling. Why should abstract structures discovered through pure reasoning describe physical reality so precisely? Various explanations invoke evolution, anthropic selection, or deep connections between mathematical and physical structure. No consensus exists on this fundamental question.`,
      questions: [
        { id: 1, type: "tfng", text: "Platonism holds that mathematicians invent rather than discover truths.", answer: "False" },
        { id: 2, type: "tfng", text: "Gödel's theorems supported Hilbert's formalism.", answer: "False" },
        { id: 3, type: "tfng", text: "Intuitionists reject the law of excluded middle for infinite domains.", answer: "True" },
        { id: 4, type: "tfng", text: "Philosophers have reached consensus on mathematics' applicability to physics.", answer: "False" },
        { id: 5, type: "mcq", text: "Who is associated with formalism?", options: ["A. Frege", "B. Brouwer", "C. David Hilbert", "D. Russell"], answer: "C" },
        { id: 6, type: "mcq", text: "What did Russell's paradox complicate?", options: ["A. Platonism", "B. Logicism", "C. Intuitionism", "D. Structuralism"], answer: "B" },
        { id: 7, type: "mcq", text: "What does structuralism define objects by?", options: ["A. Intrinsic properties", "B. Mental construction", "C. Positions in structures", "D. Physical existence"], answer: "C" },
        { id: 8, type: "short", text: "Who noted mathematics' 'unreasonable effectiveness'?", answer: "Eugene Wigner" },
        { id: 9, type: "short", text: "Who developed intuitionism?", answer: "L.E.J. Brouwer" },
        { id: 10, type: "mcq", text: "What does naturalism treat mathematics as continuous with?", options: ["A. Art", "B. Natural science", "C. Religion", "D. History"], answer: "B" },
        { id: 11, type: "tfng", text: "Formalism claims mathematical statements are true or false.", answer: "False" },
        { id: 12, type: "short", text: "What must intuitionist proofs provide rather than existence demonstrations?", answer: "construction methods" },
        { id: 13, type: "yng", text: "The author believes Platonism has solved all epistemological puzzles.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Ecology of Disease Transmission",
      wordCount: 870,
      text: `Infectious disease dynamics depend on complex ecological interactions among pathogens, hosts, vectors, and environments. Understanding these ecological dimensions enables prediction of disease emergence, spread, and control, becoming increasingly important as environmental changes alter disease landscapes.

The basic reproduction number, R0, quantifies transmission potential—the average number of secondary infections produced by one infected individual in a fully susceptible population. When R0 exceeds one, epidemics can spread; below one, outbreaks die out. This threshold concept underlies vaccination targets: herd immunity requires immunizing a proportion of 1-1/R0 to prevent sustained transmission.

Vector-borne diseases add ecological complexity. Mosquitoes, ticks, and other arthropods transmit pathogens between hosts. Vector ecology—population dynamics, feeding behavior, habitat requirements—shapes disease geography and seasonality. Climate change alters vector distributions, potentially expanding disease ranges into newly suitable habitats while contracting others.

Zoonotic diseases—those transmitted from animals to humans—constitute the majority of emerging infections. Wildlife reservoirs maintain pathogens that occasionally spill over to humans through hunting, farming, or habitat encroachment. Bats, rodents, and primates harbor numerous viruses with pandemic potential. Understanding reservoir ecology helps identify spillover risks.

Landscape change profoundly affects disease dynamics. Deforestation can increase contact between humans and wildlife while altering vector habitats. Agricultural intensification concentrates hosts and changes disease transmission patterns. Urbanization creates conditions favoring some pathogens while limiting others. These anthropogenic changes drive disease emergence.

One Health approaches recognize that human, animal, and environmental health are interconnected. Controlling diseases requires collaboration across medical, veterinary, and ecological disciplines. Surveillance systems monitoring wildlife and livestock can provide early warning of human disease threats. Environmental interventions may prove more effective than medical responses for some diseases.

Antimicrobial resistance exemplifies ecological dynamics in microbial evolution. Antibiotic use creates selection pressure favoring resistant strains. Resistance genes spread through bacterial populations via horizontal gene transfer. Agricultural antibiotic use contributes to resistance affecting human health. Addressing resistance requires ecological thinking about microbial communities.

Climate change will reshape infectious disease patterns. Warming temperatures expand ranges for tropical diseases while potentially reducing some temperate infections. Extreme weather events disrupt infrastructure and displacement populations, facilitating outbreaks. Ecological models project future disease distributions, though uncertainty remains substantial.`,
      questions: [
        { id: 14, type: "tfng", text: "When R0 exceeds one, outbreaks die out.", answer: "False" },
        { id: 15, type: "tfng", text: "Zoonotic diseases constitute the majority of emerging infections.", answer: "True" },
        { id: 16, type: "tfng", text: "Deforestation decreases contact between humans and wildlife.", answer: "False" },
        { id: 17, type: "tfng", text: "Agricultural antibiotic use affects human health resistance.", answer: "True" },
        { id: 18, type: "mcq", text: "What proportion must be immunized for herd immunity?", options: ["A. All individuals", "B. 1-1/R0", "C. Half the population", "D. R0 percent"], answer: "B" },
        { id: 19, type: "mcq", text: "What animals harbor numerous viruses with pandemic potential?", options: ["A. Fish and birds", "B. Bats, rodents, and primates", "C. Insects only", "D. Domesticated animals only"], answer: "B" },
        { id: 20, type: "mcq", text: "What do One Health approaches recognize?", options: ["A. Only human health matters", "B. Health domains are interconnected", "C. Animals don't affect humans", "D. Environment is separate"], answer: "B" },
        { id: 21, type: "short", text: "What spreads resistance genes through bacterial populations?", answer: "horizontal gene transfer" },
        { id: 22, type: "short", text: "What does climate change alter that affects disease ranges?", answer: "vector distributions" },
        { id: 23, type: "mcq", text: "What does landscape change drive?", options: ["A. Disease elimination", "B. Disease emergence", "C. Vector extinction", "D. Pathogen death"], answer: "B" },
        { id: 24, type: "tfng", text: "Medical responses are always more effective than environmental interventions.", answer: "False" },
        { id: 25, type: "short", text: "What can provide early warning of human disease threats?", answer: "surveillance systems monitoring wildlife and livestock" },
        { id: 26, type: "yng", text: "The author suggests climate change effects on disease are certain.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Psychology of Expertise",
      wordCount: 875,
      text: `Expertise—exceptional performance in complex domains—has attracted psychological investigation seeking to understand how experts differ from novices and how expertise develops. Research reveals that expertise depends less on innate talent than on specific forms of practice and knowledge organization, with implications for education and training.

Deliberate practice, identified by Anders Ericsson, characterizes expertise development. Unlike mere repetition, deliberate practice involves focused effort on weaknesses, immediate feedback, and progressive difficulty. The "ten thousand hour rule," though oversimplified in popular accounts, captures the extensive preparation expertise requires. Talent alone cannot substitute for accumulated practice.

Expert knowledge differs qualitatively from novice knowledge. Experts organize knowledge in meaningful chunks and schemas, enabling rapid pattern recognition. Chess masters perceive board positions as familiar configurations rather than individual pieces. Medical diagnosticians recognize symptom patterns indicating specific conditions. This organized knowledge enables faster, more accurate performance.

Mental representations in experts prove more sophisticated. Experts maintain richer, more interconnected mental models of their domains. They simulate scenarios, anticipate developments, and plan multiple moves ahead. These representations, developed through extensive experience, enable the intuitive judgments characterizing expertise.

Domain specificity limits expertise transfer. Chess masters show no superior memory for random piece arrangements; their advantage applies only to meaningful positions. Expertise in one area rarely transfers to unrelated domains. General cognitive abilities matter less than domain-specific knowledge and skills, challenging notions of transferable intelligence.

Intuition in experts reflects pattern matching from extensive experience rather than mysterious insight. What appears as instant recognition actually builds on countless prior cases. However, expert intuition can fail in novel situations not matching prior patterns. Knowing when to trust versus override intuition requires metacognitive awareness.

Expertise development follows predictable stages. Novices apply explicit rules consciously. Advanced beginners recognize situational variations. Competent performers set goals and plan systematically. Proficient performers perceive situations holistically. Experts respond intuitively, reserving analysis for novel challenges. Each stage requires different instructional approaches.

Maintaining expertise requires continued engagement. Skills deteriorate without practice; knowledge becomes outdated as fields advance. Expertise is not a fixed achievement but an ongoing process requiring sustained effort. Lifelong learning and deliberate practice maintain and extend expert performance.`,
      questions: [
        { id: 27, type: "tfng", text: "Expertise depends primarily on innate talent.", answer: "False" },
        { id: 28, type: "tfng", text: "Deliberate practice involves mere repetition.", answer: "False" },
        { id: 29, type: "tfng", text: "Chess masters have superior memory for random piece arrangements.", answer: "False" },
        { id: 30, type: "tfng", text: "Expert intuition can fail in novel situations.", answer: "True" },
        { id: 31, type: "mcq", text: "What does deliberate practice involve?", options: ["A. Random practice", "B. Focused effort on weaknesses", "C. Only competition", "D. Passive observation"], answer: "B" },
        { id: 32, type: "mcq", text: "How do experts organize knowledge?", options: ["A. Randomly", "B. Alphabetically", "C. In meaningful chunks and schemas", "D. Chronologically"], answer: "C" },
        { id: 33, type: "mcq", text: "What does domain specificity limit?", options: ["A. Learning speed", "B. Expertise transfer", "C. Memory capacity", "D. Practice time"], answer: "B" },
        { id: 34, type: "short", text: "Who identified deliberate practice?", answer: "Anders Ericsson" },
        { id: 35, type: "short", text: "What do experts maintain that are more interconnected?", answer: "mental models" },
        { id: 36, type: "mcq", text: "What do novices apply consciously?", options: ["A. Intuition", "B. Explicit rules", "C. Pattern matching", "D. Holistic perception"], answer: "B" },
        { id: 37, type: "tfng", text: "Expertise is a fixed achievement requiring no maintenance.", answer: "False" },
        { id: 38, type: "short", text: "What type of awareness helps know when to trust intuition?", answer: "metacognitive awareness" },
        { id: 39, type: "yng", text: "The author suggests talent alone is sufficient for expertise.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates expertise development follows predictable stages.", answer: "Yes" }
      ]
    }
  ]
},

// R29 - EXPERT (Band 8.5-9.0)
{
  id: "R29",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Economics of Information",
      wordCount: 875,
      text: `Information economics analyzes how information asymmetries, search costs, and uncertainty affect markets and institutions. Recognition that parties to transactions often possess different information transformed economic theory, explaining phenomena from insurance markets to corporate governance that perfectly competitive models could not address.

Adverse selection occurs when one party knows more than another before transactions. In insurance markets, those knowing they face higher risks are more likely to purchase coverage, potentially driving out good risks and causing market failure. George Akerlof's "lemons" analysis showed how asymmetric information about quality can cause markets to unravel entirely.

Moral hazard arises when information asymmetries exist after transactions. Insured parties may take greater risks knowing losses are covered. Employees may shirk when effort cannot be perfectly monitored. Designing contracts and institutions that align incentives despite unobservable behavior occupies substantial theoretical and practical attention.

Signaling mechanisms enable informed parties to credibly communicate their type. Educational credentials may signal ability even when education itself adds little productivity—the investment is worthwhile only for high-ability individuals. Job market signaling, analyzed by Michael Spence, illuminates how costly actions can convey information that words alone cannot credibly communicate.

Screening reverses signaling's direction. Uninformed parties design mechanisms inducing informed parties to reveal their types through self-selection. Insurance companies offer menu of contracts—high premiums with low deductibles versus low premiums with high deductibles—that sort policyholders by risk level. Credit markets, labor markets, and many other settings employ screening mechanisms.

Search theory analyzes how individuals find information about prices, quality, and opportunities. Search is costly; optimal search balances costs against expected benefits. This framework explains wage dispersion, unemployment duration, and price variation across sellers. Online platforms have dramatically reduced search costs in many markets.

Contract theory addresses how agreements can be structured given information asymmetries and enforcement limitations. Complete contracts specifying responses to every contingency prove impossible; incomplete contracts must allocate rights and responsibilities given uncertainty. Ownership structures, governance arrangements, and organizational boundaries reflect information problems contracts cannot fully resolve.

Mechanism design, sometimes called reverse game theory, asks what rules and institutions produce desired outcomes given participants' private information and strategic behavior. Auction design, market design, and regulatory policy apply mechanism design principles. The field has produced practical applications from spectrum auctions to kidney exchange systems.`,
      questions: [
        { id: 1, type: "tfng", text: "Adverse selection occurs after transactions.", answer: "False" },
        { id: 2, type: "tfng", text: "Insurance companies use screening mechanisms.", answer: "True" },
        { id: 3, type: "tfng", text: "Complete contracts are easily achievable.", answer: "False" },
        { id: 4, type: "tfng", text: "Online platforms have increased search costs.", answer: "False" },
        { id: 5, type: "mcq", text: "Who analyzed the 'lemons' problem?", options: ["A. Michael Spence", "B. George Akerlof", "C. Ronald Coase", "D. Joseph Stiglitz"], answer: "B" },
        { id: 6, type: "mcq", text: "What does signaling enable?", options: ["A. Hiding information", "B. Credible communication of type", "C. Market failure", "D. Random selection"], answer: "B" },
        { id: 7, type: "mcq", text: "What has mechanism design produced?", options: ["A. Only theoretical insights", "B. Practical applications like spectrum auctions", "C. No real applications", "D. Academic debates only"], answer: "B" },
        { id: 8, type: "short", text: "Who analyzed job market signaling?", answer: "Michael Spence" },
        { id: 9, type: "short", text: "What arises when behavior changes because losses are covered?", answer: "moral hazard" },
        { id: 10, type: "mcq", text: "What do incomplete contracts allocate given uncertainty?", options: ["A. Only money", "B. Rights and responsibilities", "C. No outcomes", "D. Perfect information"], answer: "B" },
        { id: 11, type: "tfng", text: "Educational credentials always add productivity.", answer: "False" },
        { id: 12, type: "short", text: "What does mechanism design ask about given private information?", answer: "what rules and institutions produce desired outcomes" },
        { id: 13, type: "yng", text: "The author suggests perfect competition models explain all phenomena.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Neuroscience of Emotion",
      wordCount: 870,
      text: `Emotion research has transformed from philosophical speculation to rigorous neuroscience, revealing how brain systems generate the feelings shaping experience and behavior. Understanding emotion's neural basis illuminates both normal psychology and disorders from depression to anxiety while raising questions about emotion's nature and function.

Early theories located emotions in specific brain regions. The limbic system hypothesis, influentially articulated by Paul MacLean, proposed that evolutionarily ancient structures surrounding the brainstem generate emotions. This view proved oversimplified—emotions engage distributed networks rather than circumscribed structures—but highlighted subcortical contributions to emotional processing.

The amygdala emerged as crucial for processing threat-related emotions, particularly fear. Patients with amygdala damage show impaired fear recognition and conditioning. However, the amygdala's role extends beyond fear to processing emotionally significant stimuli generally, including positive ones. It contributes to attention, memory, and decision-making through emotional salience signaling.

Prefrontal cortex regions regulate emotion through top-down control. The ventromedial prefrontal cortex integrates emotional signals into decision-making, as demonstrated by Damasio's studies of patients with damage to this area who make poor decisions despite intact reasoning. The dorsolateral prefrontal cortex supports emotion regulation strategies like reappraisal. Prefrontal-amygdala interactions enable flexible emotional responses.

Constructionist theories challenge discrete emotion categories. Lisa Feldman Barrett argues that emotions are constructed from more basic psychological components—core affect (valence and arousal) combined with conceptual knowledge. Brain networks supporting these components interact to produce emotional experiences; no single neural signature corresponds to each emotion category.

Interoception—perception of internal bodily states—contributes to emotional experience. William James proposed that emotions are perceptions of physiological changes. Contemporary evidence shows that brain regions representing bodily states, particularly the insula, contribute to emotional feelings. Individual differences in interoceptive sensitivity relate to emotional experience intensity.

Emotion regulation engages multiple strategies and neural systems. Suppression of emotional expression activates prefrontal regions while potentially increasing physiological arousal. Cognitive reappraisal reinterprets situations to change emotional responses, engaging prefrontal regions while modulating amygdala activity. Effective regulation depends on flexible strategy deployment.

Affective neuroscience increasingly informs clinical applications. Depression involves altered activity in reward circuits and prefrontal-limbic interactions. Anxiety disorders show heightened amygdala reactivity and deficient prefrontal regulation. Interventions targeting these circuits—through medication, neuromodulation, or therapy—may restore healthy emotional functioning.`,
      questions: [
        { id: 14, type: "tfng", text: "Emotions engage only circumscribed brain structures.", answer: "False" },
        { id: 15, type: "tfng", text: "The amygdala only processes fear.", answer: "False" },
        { id: 16, type: "tfng", text: "Constructionist theories support discrete emotion categories.", answer: "False" },
        { id: 17, type: "tfng", text: "Suppression may increase physiological arousal.", answer: "True" },
        { id: 18, type: "mcq", text: "Who articulated the limbic system hypothesis?", options: ["A. William James", "B. Paul MacLean", "C. Lisa Feldman Barrett", "D. Damasio"], answer: "B" },
        { id: 19, type: "mcq", text: "What does the ventromedial prefrontal cortex integrate?", options: ["A. Motor control", "B. Emotional signals into decision-making", "C. Visual processing", "D. Language"], answer: "B" },
        { id: 20, type: "mcq", text: "What did William James propose emotions are?", options: ["A. Brain states", "B. Perceptions of physiological changes", "C. Social constructs", "D. Instincts"], answer: "B" },
        { id: 21, type: "short", text: "Who argues emotions are constructed from basic components?", answer: "Lisa Feldman Barrett" },
        { id: 22, type: "short", text: "What brain region represents bodily states and contributes to emotion?", answer: "insula" },
        { id: 23, type: "mcq", text: "What do anxiety disorders show regarding the amygdala?", options: ["A. Reduced activity", "B. Heightened reactivity", "C. No activity", "D. Damage"], answer: "B" },
        { id: 24, type: "tfng", text: "Prefrontal-amygdala interactions prevent flexible emotional responses.", answer: "False" },
        { id: 25, type: "short", text: "What reinterprets situations to change emotional responses?", answer: "cognitive reappraisal" },
        { id: 26, type: "yng", text: "The author suggests the limbic system hypothesis was completely accurate.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Architecture of Computer Networks",
      wordCount: 875,
      text: `Computer networks enable the global connectivity underlying modern communication, commerce, and social interaction. Understanding network architecture—the protocols, structures, and principles organizing network systems—illuminates both technical functioning and policy debates about network governance, security, and access.

The Internet's architecture reflects design principles emphasizing modularity, robustness, and end-to-end functionality. The layered protocol stack separates functions—physical transmission, data link, network routing, transport, and application—enabling independent evolution of each layer. This modularity has enabled remarkable innovation as applications developers work independently of underlying infrastructure.

The TCP/IP protocol suite provides the Internet's fundamental communication framework. The Internet Protocol handles addressing and routing, forwarding packets through networks toward destinations. The Transmission Control Protocol provides reliable, ordered delivery atop IP's unreliable service. This combination enables diverse applications from web browsing to video streaming.

The Domain Name System translates human-readable names into IP addresses, providing a distributed directory service essential for Internet usability. Hierarchical delegation enables scalable management. However, DNS also creates centralization points raising governance and security concerns. Alternative naming systems remain experimental.

Routing protocols enable networks to exchange reachability information and compute paths through the interconnected mesh. The Border Gateway Protocol connects autonomous systems—networks under unified administrative control—into the global Internet. Routing decisions balance technical metrics with policy preferences, as networks choose which paths to advertise and accept.

Network security faces persistent challenges. The Internet's original design assumed trusted users and focused on survivability rather than security. Cryptographic protocols now protect data in transit, but endpoint security, authentication, and trust remain challenging. Denial-of-service attacks, malware, and data breaches exploit vulnerabilities throughout the network stack.

Content delivery networks and cloud services have transformed Internet architecture. Rather than fetching content from origin servers, users increasingly access cached content from nearby nodes. Cloud computing concentrates processing and storage in massive data centers. These developments improve performance and efficiency while raising concerns about concentration and control.

Net neutrality debates concern whether network operators should treat all traffic equally. Advocates argue neutrality preserves Internet openness and innovation; opponents claim differentiation enables efficient network management and business model diversity. Different jurisdictions have adopted varying regulatory approaches reflecting different weightings of these considerations.`,
      questions: [
        { id: 27, type: "tfng", text: "The Internet's architecture emphasizes modularity.", answer: "True" },
        { id: 28, type: "tfng", text: "TCP provides unreliable delivery.", answer: "False" },
        { id: 29, type: "tfng", text: "The Internet's original design prioritized security.", answer: "False" },
        { id: 30, type: "tfng", text: "Cloud computing decentralizes processing.", answer: "False" },
        { id: 31, type: "mcq", text: "What does the Domain Name System translate?", options: ["A. Languages", "B. Names into IP addresses", "C. Protocols", "D. Applications"], answer: "B" },
        { id: 32, type: "mcq", text: "What connects autonomous systems?", options: ["A. TCP", "B. Border Gateway Protocol", "C. DNS", "D. HTTP"], answer: "B" },
        { id: 33, type: "mcq", text: "What do content delivery networks provide content from?", options: ["A. Origin servers only", "B. Nearby cached nodes", "C. User devices", "D. Single locations"], answer: "B" },
        { id: 34, type: "short", text: "What enables independent evolution of protocol layers?", answer: "modularity" },
        { id: 35, type: "short", text: "What protocols now protect data in transit?", answer: "cryptographic protocols" },
        { id: 36, type: "mcq", text: "What do net neutrality advocates argue it preserves?", options: ["A. Network speed", "B. Internet openness and innovation", "C. Business profits", "D. Government control"], answer: "B" },
        { id: 37, type: "tfng", text: "Alternative naming systems have replaced DNS.", answer: "False" },
        { id: 38, type: "short", text: "What does IP handle?", answer: "addressing and routing" },
        { id: 39, type: "yng", text: "The author suggests all jurisdictions agree on net neutrality.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates the layered stack has enabled innovation.", answer: "Yes" }
      ]
    }
  ]
},

// R30 - EXPERT (Band 8.5-9.0)
{
  id: "R30",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Genetics of Complex Traits",
      wordCount: 875,
      text: `Complex traits—from height to disease susceptibility to intelligence—result from the combined influence of many genes interacting with environmental factors. Understanding this polygenic architecture has transformed genetics while challenging earlier hopes for simple genetic explanations and raising new possibilities for prediction and intervention.

Genome-wide association studies revolutionized complex trait genetics by scanning millions of genetic variants across thousands of individuals. These studies identify variants statistically associated with traits, revealing that most complex traits involve hundreds or thousands of contributing variants, each with tiny effects. No single gene determines height, heart disease risk, or cognitive ability.

Polygenic scores aggregate effects of many variants into single predictive indices. By weighting each variant by its estimated effect and summing across the genome, researchers create scores predicting trait values in new individuals. These scores now explain substantial proportions of variance for some traits, enabling applications from disease risk prediction to educational research.

Missing heritability initially puzzled researchers. Family studies showed traits were highly heritable, but identified variants explained only small proportions of heritability. Sources of missing heritability include rare variants of larger effect, gene-gene interactions, gene-environment interactions, and structural variants not captured by standard genotyping. Larger studies have progressively closed this gap.

Gene-environment interplay takes multiple forms. Gene-environment interaction occurs when genetic effects depend on environmental conditions—genetic risk factors may matter more in adverse environments. Gene-environment correlation occurs when genotypes influence environmental exposure—genetically influenced traits shape the environments individuals select and evoke.

Pleiotropy—single genetic variants affecting multiple traits—proves pervasive. Variants affecting one disease often affect others; variants influencing physical traits often influence behavioral ones. Genetic correlations between traits reveal shared biological pathways while complicating intervention targeting single outcomes.

Population stratification confounds genetic studies when ancestry correlates with both genetic variants and traits of interest. Sophisticated statistical methods address this challenge, but residual confounding remains possible. Concerns about genetic research reinforcing racial categories or enabling discrimination require ongoing attention.

Ethical considerations attend complex trait genetics. Polygenic prediction raises possibilities of embryo selection, educational tracking, and insurance discrimination. Whether such applications serve human welfare or reinforce inequality depends on social choices about their implementation. Genetic determinism—overstating genetic influence while ignoring malleability—represents a persistent interpretive risk.`,
      questions: [
        { id: 1, type: "tfng", text: "Complex traits result from single genes.", answer: "False" },
        { id: 2, type: "tfng", text: "Most complex traits involve thousands of contributing variants.", answer: "True" },
        { id: 3, type: "tfng", text: "Missing heritability has been fully explained.", answer: "False" },
        { id: 4, type: "tfng", text: "Pleiotropy means variants affect only single traits.", answer: "False" },
        { id: 5, type: "mcq", text: "What do genome-wide association studies scan?", options: ["A. Single genes", "B. Millions of genetic variants", "C. Only disease genes", "D. Environmental factors"], answer: "B" },
        { id: 6, type: "mcq", text: "What do polygenic scores aggregate?", options: ["A. Single variant effects", "B. Effects of many variants", "C. Environmental factors", "D. Family history only"], answer: "B" },
        { id: 7, type: "mcq", text: "What does gene-environment interaction involve?", options: ["A. Genes independent of environment", "B. Genetic effects depending on environmental conditions", "C. Environment only", "D. No genetic contribution"], answer: "B" },
        { id: 8, type: "short", text: "What confounds studies when ancestry correlates with variants and traits?", answer: "population stratification" },
        { id: 9, type: "short", text: "What reveals shared biological pathways between traits?", answer: "genetic correlations" },
        { id: 10, type: "mcq", text: "What applications raise ethical concerns?", options: ["A. Only research", "B. Embryo selection, tracking, discrimination", "C. No applications", "D. Historical analysis only"], answer: "B" },
        { id: 11, type: "tfng", text: "Rare variants contribute nothing to heritability.", answer: "False" },
        { id: 12, type: "short", text: "What represents a persistent interpretive risk in genetics?", answer: "genetic determinism" },
        { id: 13, type: "yng", text: "The author suggests complex trait genetics raises no ethical issues.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Sociology of Organizations",
      wordCount: 870,
      text: `Organizations—from corporations to governments to nonprofits—structure much of modern social life. Organizational sociology examines how these entities function, evolve, and shape behavior, drawing on multiple theoretical perspectives that illuminate different aspects of organizational dynamics.

Bureaucracy, analyzed systematically by Max Weber, represents the defining organizational form of modernity. Hierarchical authority, formal rules, specialized roles, and merit-based advancement characterize bureaucratic organization. Weber saw bureaucracy as technically superior to earlier forms but worried about its potential to create "iron cages" constraining human freedom.

Scientific management, developed by Frederick Taylor, sought to optimize work through systematic analysis. Time-motion studies identified efficient methods; piece-rate incentives motivated workers. This approach increased productivity but treated workers mechanistically, provoking resistance and inspiring humanistic alternatives emphasizing social needs and participation.

Human relations perspectives emerged from studies at Western Electric's Hawthorne Works, revealing that social relationships and informal norms shape productivity as much as formal structures. Attention itself improved performance—the Hawthorne effect. This research established that organizations are social systems, not merely technical structures.

Contingency theories argue that optimal organizational design depends on environmental conditions. Mechanistic structures suit stable environments; organic structures suit dynamic ones. Technology, size, and strategy also influence appropriate structures. No universal organizational form exists; design must match context.

Institutional theories examine how organizations conform to cultural expectations and regulatory requirements beyond technical efficiency. Organizations adopt practices because they are legitimate, not merely because they work. Isomorphism—growing similarity among organizations—results from coercive, mimetic, and normative pressures. Institutionalized practices may persist despite inefficiency.

Network perspectives analyze relationships among organizations. Alliance networks, supply chains, and industry ecosystems shape organizational behavior and outcomes. Network position affects information access, resource flows, and power. Organizations embedded in favorable network positions outperform isolated competitors.

Power and politics pervade organizational life. Coalitions compete for resources and influence. Organizational structures reflect and reinforce power distributions. Critical perspectives examine how organizations serve particular interests while claiming universal benefit, and how resistance challenges dominant arrangements.`,
      questions: [
        { id: 14, type: "tfng", text: "Weber worried about bureaucracy constraining freedom.", answer: "True" },
        { id: 15, type: "tfng", text: "Scientific management emphasized worker social needs.", answer: "False" },
        { id: 16, type: "tfng", text: "Contingency theories propose universal optimal structures.", answer: "False" },
        { id: 17, type: "tfng", text: "The Hawthorne effect showed attention improves performance.", answer: "True" },
        { id: 18, type: "mcq", text: "Who developed scientific management?", options: ["A. Max Weber", "B. Frederick Taylor", "C. Elton Mayo", "D. Peter Drucker"], answer: "B" },
        { id: 19, type: "mcq", text: "What do institutional theories argue organizations adopt practices for?", options: ["A. Only efficiency", "B. Legitimacy", "C. Profit only", "D. Random reasons"], answer: "B" },
        { id: 20, type: "mcq", text: "What do network perspectives analyze?", options: ["A. Individual psychology", "B. Relationships among organizations", "C. Technology only", "D. Historical origins"], answer: "B" },
        { id: 21, type: "short", text: "What causes growing similarity among organizations?", answer: "isomorphism" },
        { id: 22, type: "short", text: "What type of structures suit dynamic environments?", answer: "organic structures" },
        { id: 23, type: "mcq", text: "What do critical perspectives examine?", options: ["A. Only efficiency", "B. How organizations serve particular interests", "C. Technology alone", "D. Environmental factors"], answer: "B" },
        { id: 24, type: "tfng", text: "Network position has no effect on organizational outcomes.", answer: "False" },
        { id: 25, type: "short", text: "What did studies at Hawthorne Works reveal?", answer: "social relationships shape productivity" },
        { id: 26, type: "yng", text: "The author suggests institutionalized practices are always efficient.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Science of Materials Engineering",
      wordCount: 875,
      text: `Materials engineering develops materials with specific properties for particular applications, combining fundamental science with practical design. From ancient metallurgy to contemporary nanomaterials, material advances have enabled technological progress while raising new possibilities for sustainable development.

Structure-property relationships form materials science's core principle. A material's properties—mechanical, electrical, thermal, optical—derive from its structure at atomic, microscopic, and macroscopic scales. Understanding these relationships enables designing materials with desired properties by controlling structure through processing.

Metals and alloys remain fundamental structural materials. Steel's strength, ductility, and recyclability make it irreplaceable for construction and manufacturing. Aluminum's light weight enables aerospace applications. Advanced alloys—titanium, nickel superalloys—withstand extreme conditions in jet engines and medical implants. Metallurgical advances continue improving performance.

Polymers have transformed modern life since their synthesis in the twentieth century. Plastics offer versatility, low cost, and processability for countless applications. Engineering polymers provide structural capabilities. Polymer composites combine fibers with polymer matrices for exceptional strength-to-weight ratios. However, plastic waste creates environmental challenges requiring recycling innovations and biodegradable alternatives.

Ceramics and glasses provide capabilities metals and polymers cannot match. Ceramics withstand high temperatures and corrosive environments; glasses enable optics and electronics. Advanced ceramics find applications from cutting tools to thermal barrier coatings. Glass fibers transmit information in telecommunications networks.

Composites combine materials to achieve properties no single material possesses. Carbon fiber reinforced polymers enable lightweight aircraft structures. Metal matrix composites improve engine components. Concrete—aggregate bound with cement—builds infrastructure worldwide. Composite design optimizes material placement for specific loading conditions.

Semiconductors underlie modern electronics. Silicon's properties enable transistors and integrated circuits. Compound semiconductors—gallium arsenide, gallium nitride—provide capabilities silicon cannot match for certain applications. Semiconductor manufacturing has driven miniaturization enabling exponentially increasing computational power.

Nanomaterials exhibit properties differing from bulk materials due to quantum effects and high surface-to-volume ratios. Carbon nanotubes offer extraordinary strength; quantum dots enable tunable optical properties; nanoparticles enhance catalysis. Nanotechnology promises applications from medicine to energy, though potential risks require careful assessment.`,
      questions: [
        { id: 27, type: "tfng", text: "Material properties derive from structure.", answer: "True" },
        { id: 28, type: "tfng", text: "Plastics create no environmental challenges.", answer: "False" },
        { id: 29, type: "tfng", text: "Ceramics cannot withstand high temperatures.", answer: "False" },
        { id: 30, type: "tfng", text: "Nanomaterials exhibit the same properties as bulk materials.", answer: "False" },
        { id: 31, type: "mcq", text: "What forms materials science's core principle?", options: ["A. Cost analysis", "B. Structure-property relationships", "C. Marketing", "D. Historical analysis"], answer: "B" },
        { id: 32, type: "mcq", text: "What enables lightweight aircraft structures?", options: ["A. Steel", "B. Carbon fiber reinforced polymers", "C. Glass", "D. Concrete"], answer: "B" },
        { id: 33, type: "mcq", text: "What underlies modern electronics?", options: ["A. Ceramics", "B. Polymers", "C. Semiconductors", "D. Glass"], answer: "C" },
        { id: 34, type: "short", text: "What do glass fibers transmit in telecommunications?", answer: "information" },
        { id: 35, type: "short", text: "What causes nanomaterials to differ from bulk materials?", answer: "quantum effects and high surface-to-volume ratios" },
        { id: 36, type: "mcq", text: "What makes steel irreplaceable for construction?", options: ["A. Only appearance", "B. Strength, ductility, and recyclability", "C. Only cost", "D. Color"], answer: "B" },
        { id: 37, type: "tfng", text: "Compound semiconductors and silicon have identical capabilities.", answer: "False" },
        { id: 38, type: "short", text: "What offer extraordinary strength at the nanoscale?", answer: "carbon nanotubes" },
        { id: 39, type: "yng", text: "The author suggests nanotechnology risks require no assessment.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates composite design optimizes material placement.", answer: "Yes" }
      ]
    }
  ]
},
// R31 - EXPERT (Band 8.5-9.0)
{
  id: "R31",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Philosophy of Time",
      wordCount: 875,
      text: `Time presents some of philosophy's deepest puzzles. Its nature, reality, and relationship to human experience have occupied thinkers across traditions. Contemporary physics has transformed these debates while leaving fundamental questions unresolved.

The A-theory versus B-theory distinction captures a central divide. A-theory holds that temporal properties—past, present, future—are objective features of reality; the present is metaphysically privileged, and time genuinely flows. B-theory denies special status to the present; all times equally exist, and temporal relations—earlier than, simultaneous with, later than—exhaust time's nature. The flow of time is illusory on this view.

Presentism maintains that only present entities exist. Past objects have ceased to exist; future objects do not yet exist. This accords with common intuition but faces challenges from special relativity, which undermines absolute simultaneity. If simultaneity is relative to reference frames, no objective present exists, seemingly contradicting presentism.

Eternalism holds that past, present, and future entities all equally exist. Time resembles space in this respect—just as distant places exist though we cannot perceive them, distant times exist though we cannot access them. This "block universe" view accords well with physics but seems to conflict with our experience of temporal passage.

The growing block view offers a middle position. Past and present exist, but the future does not yet exist. The block of existence grows as time passes, with the present at its edge. This preserves some temporal asymmetry while accommodating physical considerations better than presentism.

Temporal experience presents distinctive philosophical puzzles. We seem to perceive motion, change, and duration directly. Yet the specious present—the span of time experienced as "now"—has duration that seemingly contradicts the momentary nature of the physical present. How extended experience relates to momentary physical reality remains debated.

The direction of time—why time seems to flow from past to future—connects to physics and metaphysics. Physical laws are largely time-symmetric; what grounds temporal asymmetry? Candidates include thermodynamic entropy increase, cosmological boundary conditions, and causal asymmetries. None has achieved consensus as the fundamental explanation.

Free will and fatalism intersect with temporal metaphysics. If the future already exists, as eternalism suggests, how can our choices make a difference? Compatibilist responses argue that causal efficacy does not require open futures, while others maintain that genuine agency requires temporal openness that eternalism denies.`,
      questions: [
        { id: 1, type: "tfng", text: "A-theory denies special status to the present.", answer: "False" },
        { id: 2, type: "tfng", text: "Presentism faces challenges from special relativity.", answer: "True" },
        { id: 3, type: "tfng", text: "Eternalism holds that only present entities exist.", answer: "False" },
        { id: 4, type: "tfng", text: "Physical laws are largely time-symmetric.", answer: "True" },
        { id: 5, type: "mcq", text: "What does B-theory claim about temporal flow?", options: ["A. It is real", "B. It is illusory", "C. It accelerates", "D. It reverses"], answer: "B" },
        { id: 6, type: "mcq", text: "What does the growing block view hold?", options: ["A. Only future exists", "B. Past and present exist, future does not yet", "C. Nothing exists", "D. Only past exists"], answer: "B" },
        { id: 7, type: "mcq", text: "What is the specious present?", options: ["A. Physical instant", "B. Span experienced as 'now'", "C. Future time", "D. Past moment"], answer: "B" },
        { id: 8, type: "short", text: "What view holds that all times equally exist?", answer: "eternalism" },
        { id: 9, type: "short", text: "What does special relativity undermine?", answer: "absolute simultaneity" },
        { id: 10, type: "mcq", text: "What is a candidate for grounding temporal asymmetry?", options: ["A. Color", "B. Thermodynamic entropy increase", "C. Weight", "D. Temperature only"], answer: "B" },
        { id: 11, type: "tfng", text: "Consensus exists on what grounds temporal asymmetry.", answer: "False" },
        { id: 12, type: "short", text: "What metaphysical debates intersect with free will?", answer: "temporal metaphysics" },
        { id: 13, type: "yng", text: "The author suggests A-theory and B-theory have been reconciled.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Economics of Development",
      wordCount: 870,
      text: `Development economics addresses how nations transition from poverty to prosperity, examining factors enabling or impeding economic growth and human welfare improvement. This field has evolved through competing theories and contentious policy debates, with stakes measured in human lives and livelihoods.

Modernization theory, influential in the mid-twentieth century, saw development as following stages toward modern industrial economies. Traditional societies would transform through capital accumulation and institutional change into economies resembling developed nations. This framework justified large-scale infrastructure investment and technology transfer.

Dependency theory challenged modernization's assumptions, arguing that underdevelopment resulted from exploitation by wealthy nations. Colonial extraction and unfair trade relations structured the global economy to benefit centers at peripheries' expense. Development required breaking dependent relationships through import substitution and South-South cooperation.

Structural adjustment programs, promoted by international financial institutions from the 1980s, emphasized market liberalization, fiscal discipline, and privatization. The Washington Consensus codified these prescriptions. Critics argued these programs ignored local conditions, increased inequality, and undermined social services. Mixed empirical results prompted reconsideration.

Institutional economics shifted focus to governance quality, property rights, and rule of law as development determinants. Why Nations Fail, by Acemoglu and Robinson, argued that inclusive political and economic institutions enable prosperity while extractive institutions perpetuate poverty. Institutions represent long-lasting legacies of historical processes including colonialism.

Human development approaches broadened development beyond economic growth to include health, education, and capabilities. Amartya Sen's capability approach defined development as expanding freedoms people can exercise. The Human Development Index, combining income, education, and life expectancy, operationalized this broader conception.

Geography and natural resources present complex development relationships. Resource-rich countries often underperform economically—the "resource curse." Geographic factors affect disease burden, transportation costs, and agricultural productivity. However, geography is not destiny; institutions and policies mediate geographic influences.

Contemporary debates address globalization's effects, climate change adaptation, and sustainable development pathways. Developing countries face challenges industrializing while reducing emissions. Global value chains offer opportunities but also risks of dependency. Finding development paths compatible with planetary boundaries represents this era's central challenge.`,
      questions: [
        { id: 14, type: "tfng", text: "Modernization theory saw development as following predictable stages.", answer: "True" },
        { id: 15, type: "tfng", text: "Dependency theory supported existing trade relationships.", answer: "False" },
        { id: 16, type: "tfng", text: "Structural adjustment programs emphasized market liberalization.", answer: "True" },
        { id: 17, type: "tfng", text: "Resource-rich countries always outperform economically.", answer: "False" },
        { id: 18, type: "mcq", text: "What did dependency theory argue caused underdevelopment?", options: ["A. Lack of resources", "B. Exploitation by wealthy nations", "C. Climate", "D. Population size"], answer: "B" },
        { id: 19, type: "mcq", text: "Who authored 'Why Nations Fail'?", options: ["A. Amartya Sen", "B. Adam Smith", "C. Acemoglu and Robinson", "D. John Keynes"], answer: "C" },
        { id: 20, type: "mcq", text: "What defines development in Sen's capability approach?", options: ["A. GDP only", "B. Expanding freedoms", "C. Military power", "D. Population growth"], answer: "B" },
        { id: 21, type: "short", text: "What phenomenon describes underperformance of resource-rich countries?", answer: "resource curse" },
        { id: 22, type: "short", text: "What combines income, education, and life expectancy?", answer: "Human Development Index" },
        { id: 23, type: "mcq", text: "What do developing countries face regarding industrialization and emissions?", options: ["A. No conflict", "B. Challenges balancing both", "C. Easy solutions", "D. Only benefits"], answer: "B" },
        { id: 24, type: "tfng", text: "Geography completely determines development outcomes.", answer: "False" },
        { id: 25, type: "short", text: "What codified market liberalization prescriptions?", answer: "Washington Consensus" },
        { id: 26, type: "yng", text: "The author suggests structural adjustment results were universally positive.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Physics of Quantum Computing",
      wordCount: 875,
      text: `Quantum computing harnesses quantum mechanical phenomena to process information in ways fundamentally different from classical computers. This emerging technology promises to solve certain problems exponentially faster than any classical approach, though formidable engineering challenges remain before practical quantum computers become widely available.

Qubits, the quantum analogue of classical bits, can exist in superpositions of zero and one simultaneously. This superposition enables quantum parallelism—representing and manipulating many computational states at once. However, measurement collapses superpositions, yielding single definite values. Extracting useful information requires carefully designed algorithms.

Entanglement creates correlations between qubits that have no classical analogue. Measuring one entangled qubit instantaneously affects its partners regardless of distance—what Einstein called "spooky action at a distance." Entanglement provides computational resources enabling algorithms like quantum teleportation and superdense coding.

Quantum algorithms exploit these phenomena for computational advantage. Shor's algorithm factors large numbers exponentially faster than known classical algorithms, threatening current cryptographic systems. Grover's algorithm provides quadratic speedup for unstructured search. Quantum simulation may prove most impactful, enabling accurate modeling of molecular and material properties.

Decoherence represents quantum computing's central challenge. Qubits lose their quantum properties through interaction with environments, introducing errors that accumulate rapidly. Maintaining coherence requires extreme isolation—often near absolute zero temperatures—and operation within brief coherence times. Current devices are termed "noisy intermediate-scale quantum" computers.

Quantum error correction encodes logical qubits across multiple physical qubits, enabling detection and correction of errors. However, error correction requires substantial overhead—thousands of physical qubits may be needed per logical qubit. Achieving fault-tolerant quantum computing remains a major research goal.

Different physical implementations compete. Superconducting circuits, used by IBM and Google, offer fast operations but require extreme cooling. Trapped ions provide excellent coherence but slower operations. Photonic approaches operate at room temperature but face scalability challenges. Topological qubits, still experimental, promise inherent error protection.

Quantum advantage has been demonstrated for specific tasks. Google's Sycamore processor performed a calculation in minutes that would require thousands of years classically. However, practical applications with commercial value remain limited. The path from laboratory demonstrations to useful quantum computers involves overcoming significant technical obstacles.`,
      questions: [
        { id: 27, type: "tfng", text: "Qubits can only exist in states of zero or one.", answer: "False" },
        { id: 28, type: "tfng", text: "Measurement collapses quantum superpositions.", answer: "True" },
        { id: 29, type: "tfng", text: "Decoherence preserves quantum properties.", answer: "False" },
        { id: 30, type: "tfng", text: "Fault-tolerant quantum computing has been fully achieved.", answer: "False" },
        { id: 31, type: "mcq", text: "What threatens current cryptographic systems?", options: ["A. Grover's algorithm", "B. Shor's algorithm", "C. Classical computing", "D. Error correction"], answer: "B" },
        { id: 32, type: "mcq", text: "What did Einstein call entanglement's effect?", options: ["A. Quantum leap", "B. Spooky action at a distance", "C. Wave collapse", "D. Superposition"], answer: "B" },
        { id: 33, type: "mcq", text: "What do superconducting circuits require?", options: ["A. Room temperature", "B. Extreme cooling", "C. No maintenance", "D. Natural light"], answer: "B" },
        { id: 34, type: "short", text: "What encodes logical qubits across multiple physical qubits?", answer: "quantum error correction" },
        { id: 35, type: "short", text: "What processor demonstrated quantum advantage?", answer: "Google's Sycamore" },
        { id: 36, type: "mcq", text: "What application may prove most impactful for quantum computing?", options: ["A. Word processing", "B. Quantum simulation", "C. Email", "D. Video streaming"], answer: "B" },
        { id: 37, type: "tfng", text: "All physical implementations of quantum computers are equivalent.", answer: "False" },
        { id: 38, type: "short", text: "What type of qubits promise inherent error protection?", answer: "topological qubits" },
        { id: 39, type: "yng", text: "The author suggests practical quantum applications are already widespread.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates quantum parallelism enables representing many states at once.", answer: "Yes" }
      ]
    }
  ]
},

// R32 - EXPERT (Band 8.5-9.0)
{
  id: "R32",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Anthropology of Kinship",
      wordCount: 875,
      text: `Kinship—the social recognition of relationships based on descent and marriage—has been central to anthropology since the discipline's founding. Kinship systems organize social life in ways varying dramatically across cultures, challenging assumptions about family as natural or universal while revealing the cultural construction of relationships.

Lewis Henry Morgan's pioneering work classified kinship terminologies, showing that different societies categorize relatives differently. Some systems distinguish maternal from paternal relatives; others group cousins with siblings. These classifications are not mere linguistic curiosities but reflect distinct social organizations with implications for inheritance, residence, and obligation.

Descent rules determine group membership. Patrilineal systems trace descent through fathers; matrilineal through mothers; bilateral systems recognize both lines. Unilineal descent creates corporate groups—lineages and clans—with collective property, shared ancestors, and mutual obligations. These groups organize political, economic, and religious life in many societies.

Marriage creates alliances between groups as much as unions between individuals. Claude Lévi-Strauss analyzed marriage as exchange, arguing that the incest taboo mandates exogamy, compelling groups to exchange women and thereby create social bonds. This exchange theory, though critiqued for treating women as objects, illuminated marriage's social functions.

Residence patterns—where couples live after marriage—structure family and community. Patrilocal residence, where couples join the husband's family, predominates cross-culturally but is not universal. Matrilocal, neolocal, and avunculocal patterns exist, each with different implications for gender relations and social organization.

David Schneider challenged kinship studies fundamentally, arguing that kinship concepts imposed Western biological assumptions onto other cultures. What anthropologists called kinship might involve culturally specific meanings unrelated to biology—shared substance, nurture, or spiritual connection. This critique prompted reflexivity about analytical categories.

Contemporary kinship studies address new family forms. Assisted reproduction, same-sex partnerships, adoption, and blended families challenge assumptions about biological versus social parenthood. Kinship increasingly appears as something people do rather than have—as practice and process rather than fixed structure.

Globalization transforms kinship through migration, transnational families, and new communication technologies. Families maintain connections across borders while adapting to new contexts. Care circulates through global networks as domestic workers, often mothers themselves, care for others' children while their own children remain distant.`,
      questions: [
        { id: 1, type: "tfng", text: "All societies classify relatives identically.", answer: "False" },
        { id: 2, type: "tfng", text: "Matrilineal systems trace descent through fathers.", answer: "False" },
        { id: 3, type: "tfng", text: "Lévi-Strauss analyzed marriage as exchange.", answer: "True" },
        { id: 4, type: "tfng", text: "Patrilocal residence is universal.", answer: "False" },
        { id: 5, type: "mcq", text: "What did Morgan's work classify?", options: ["A. Languages", "B. Kinship terminologies", "C. Religions", "D. Economics"], answer: "B" },
        { id: 6, type: "mcq", text: "What do unilineal descent systems create?", options: ["A. Random groups", "B. Corporate groups", "C. No groups", "D. Temporary alliances"], answer: "B" },
        { id: 7, type: "mcq", text: "What did Schneider argue kinship concepts imposed?", options: ["A. Political systems", "B. Western biological assumptions", "C. Economic models", "D. Religious beliefs"], answer: "B" },
        { id: 8, type: "short", text: "What mandates exogamy according to Lévi-Strauss?", answer: "incest taboo" },
        { id: 9, type: "short", text: "What does contemporary kinship appear as, rather than fixed structure?", answer: "practice and process" },
        { id: 10, type: "mcq", text: "What challenges assumptions about biological parenthood?", options: ["A. Traditional marriage", "B. Assisted reproduction and new family forms", "C. Historical records", "D. Single parenthood only"], answer: "B" },
        { id: 11, type: "tfng", text: "Kinship classifications only reflect linguistic differences.", answer: "False" },
        { id: 12, type: "short", text: "What transforms kinship through migration and technology?", answer: "globalization" },
        { id: 13, type: "yng", text: "The author suggests family forms are static and unchanging.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Science of Biodiversity Conservation",
      wordCount: 870,
      text: `Biodiversity conservation has emerged as an urgent scientific and policy priority as species extinctions accelerate. Conservation biology, a crisis discipline, combines ecological science with practical action to prevent species loss and protect ecosystems, developing principles and methods for prioritizing limited resources.

Species extinction rates far exceed background rates observed in the fossil record. Current rates may be one hundred to one thousand times higher, with projections suggesting potential mass extinction rivaling the five previous great extinctions. Unlike those events, the current crisis results primarily from human activities—habitat destruction, overexploitation, invasive species, pollution, and climate change.

The species-area relationship, fundamental to conservation planning, describes how species numbers decline with habitat loss. This relationship enables predictions of extinction debt—species committed to extinction through habitat reduction but not yet lost. Fragmentation compounds area effects by isolating populations and reducing gene flow.

Population viability analysis estimates extinction probabilities for specific populations given demographic and environmental variation. Small populations face elevated risks from genetic deterioration, demographic stochasticity, and environmental catastrophes. Minimum viable population sizes provide targets for conservation, though required sizes vary widely with species characteristics.

Protected areas form conservation's cornerstone, but coverage remains insufficient and unevenly distributed. Marine protection lags behind terrestrial. Many protected areas exist only on paper, lacking effective management. Connectivity between reserves enables species movement and genetic exchange; wildlife corridors link isolated habitats.

Conservation prioritization allocates limited resources among competing needs. Hotspots identify regions with exceptional species richness and endemism under threat. Complementarity approaches select reserve networks maximizing species coverage. Phylogenetic diversity considers evolutionary distinctiveness. Each framework reflects different values about what biodiversity conservation should preserve.

Community-based conservation recognizes that local people must benefit from conservation for it to succeed. Indigenous and traditional communities often possess ecological knowledge valuable for conservation. Conflicts between conservation and livelihoods require resolution through integrated approaches. Conservation cannot succeed against local opposition.

Climate change increasingly threatens biodiversity through habitat shifts, phenological mismatches, and novel stressors. Species must migrate, adapt, or face extinction. Assisted migration, managed relocation to suitable future habitats, remains controversial. Conservation strategies must increasingly account for dynamic conditions rather than preserving static states.`,
      questions: [
        { id: 14, type: "tfng", text: "Current extinction rates equal background rates.", answer: "False" },
        { id: 15, type: "tfng", text: "The species-area relationship enables extinction predictions.", answer: "True" },
        { id: 16, type: "tfng", text: "Marine protection exceeds terrestrial protection.", answer: "False" },
        { id: 17, type: "tfng", text: "Climate change threatens biodiversity.", answer: "True" },
        { id: 18, type: "mcq", text: "What primarily causes the current extinction crisis?", options: ["A. Natural cycles", "B. Human activities", "C. Asteroid impacts", "D. Volcanic activity"], answer: "B" },
        { id: 19, type: "mcq", text: "What do wildlife corridors link?", options: ["A. Cities", "B. Isolated habitats", "C. Countries", "D. Oceans"], answer: "B" },
        { id: 20, type: "mcq", text: "What do hotspots identify?", options: ["A. Cold regions", "B. Regions with exceptional richness under threat", "C. Urban areas", "D. Industrial zones"], answer: "B" },
        { id: 21, type: "short", text: "What are species committed to extinction but not yet lost?", answer: "extinction debt" },
        { id: 22, type: "short", text: "What type of conservation recognizes local people must benefit?", answer: "community-based conservation" },
        { id: 23, type: "mcq", text: "What controversial strategy involves moving species to future suitable habitats?", options: ["A. Captive breeding", "B. Assisted migration", "C. Hunting bans", "D. Pollution control"], answer: "B" },
        { id: 24, type: "tfng", text: "All protected areas have effective management.", answer: "False" },
        { id: 25, type: "short", text: "What elevated risks do small populations face?", answer: "genetic deterioration, demographic stochasticity, environmental catastrophes" },
        { id: 26, type: "yng", text: "The author suggests conservation can succeed against local opposition.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The History of Public Health",
      wordCount: 875,
      text: `Public health—organized efforts to protect and improve population health—has evolved from ancient sanitary measures to sophisticated surveillance and intervention systems. This history reveals both remarkable achievements and persistent inequities, with lessons relevant to contemporary challenges from pandemic preparedness to health equity.

Ancient civilizations recognized connections between environment and health. Roman aqueducts provided clean water; drainage systems removed waste. However, disease causation remained mysterious, attributed to miasmas, divine punishment, or humoral imbalance. Epidemic responses included quarantine—isolating the sick and travelers from affected areas.

The sanitary movement of the nineteenth century transformed public health. Edwin Chadwick's reports linked poverty, filth, and disease, advocating clean water, sewerage, and improved housing. Despite incorrect miasmatic theory, sanitary reforms dramatically reduced infectious disease mortality. Cities became healthier through infrastructure investment.

Germ theory revolutionized understanding and intervention. Koch's identification of specific pathogens for tuberculosis, cholera, and anthrax enabled targeted prevention. Vaccination expanded beyond smallpox. Water treatment and food safety measures addressed specific transmission routes. Laboratory science became central to public health practice.

Social medicine traditions emphasized that health inequities reflected social conditions. Rudolf Virchow declared that medicine was a social science and politics was medicine on a large scale. Health required addressing poverty, working conditions, and political arrangements. This perspective influenced public health in various national contexts.

The epidemiological transition saw chronic diseases replace infectious diseases as leading causes of death in developed countries. Public health responded with risk factor epidemiology—identifying behaviors like smoking associated with disease. Health promotion encouraged individual behavior change, though critics questioned emphasis on personal responsibility versus structural factors.

Global health emerged as a distinct field addressing health across national boundaries. International cooperation combats diseases respecting no borders. However, global health institutions reflect power imbalances, and debates continue over research priorities, intellectual property, and health system strengthening versus vertical disease programs.

COVID-19 exposed both public health achievements and failures. Surveillance systems detected novel pathogens rapidly. Vaccines developed with unprecedented speed. Yet pandemic preparedness proved inadequate, inequities shaped outcomes, and public trust frayed under politicization. Future public health must learn these lessons.`,
      questions: [
        { id: 27, type: "tfng", text: "Ancient Romans had drainage systems.", answer: "True" },
        { id: 28, type: "tfng", text: "Chadwick's sanitary theory was scientifically correct.", answer: "False" },
        { id: 29, type: "tfng", text: "Germ theory enabled targeted prevention.", answer: "True" },
        { id: 30, type: "tfng", text: "Global health institutions operate without power imbalances.", answer: "False" },
        { id: 31, type: "mcq", text: "What did the sanitary movement advocate?", options: ["A. Miasma theory", "B. Clean water and sewerage", "C. Divine intervention", "D. Humoral balance"], answer: "B" },
        { id: 32, type: "mcq", text: "Who identified specific pathogens for tuberculosis?", options: ["A. Chadwick", "B. Koch", "C. Virchow", "D. Pasteur"], answer: "B" },
        { id: 33, type: "mcq", text: "What did Virchow declare medicine was?", options: ["A. Pure science", "B. A social science", "C. Religious practice", "D. Individual care only"], answer: "B" },
        { id: 34, type: "short", text: "What transition saw chronic diseases become leading causes of death?", answer: "epidemiological transition" },
        { id: 35, type: "short", text: "What did COVID-19 expose as inadequate?", answer: "pandemic preparedness" },
        { id: 36, type: "mcq", text: "What does risk factor epidemiology identify?", options: ["A. Genetic factors only", "B. Behaviors associated with disease", "C. Environmental beauty", "D. Historical patterns only"], answer: "B" },
        { id: 37, type: "tfng", text: "Sanitary reforms had no effect on mortality.", answer: "False" },
        { id: 38, type: "short", text: "What method isolated the sick and travelers from affected areas?", answer: "quarantine" },
        { id: 39, type: "yng", text: "The author suggests public health faces no contemporary challenges.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates vaccines for COVID-19 developed rapidly.", answer: "Yes" }
      ]
    }
  ]
},

// R33 - EXPERT (Band 8.5-9.0)
{
  id: "R33",
  level: "Expert",
  bandTarget: "8.5-9.0",
  timeMinutes: 60,
  totalQuestions: 40,
  passages: [
    {
      id: "P1",
      title: "The Psychology of Language Acquisition",
      wordCount: 875,
      text: `Language acquisition—how children master the complex systems of human language—represents one of psychology's most remarkable phenomena. Children acquire language with speed and accuracy seemingly inexplicable from the input they receive, raising profound questions about innate capacities, learning mechanisms, and the nature of linguistic knowledge.

The poverty of the stimulus argument, advanced by Noam Chomsky, claims that linguistic input underdetermines the grammars children acquire. Children receive fragmented, error-ridden speech yet extract systematic rules. They do not simply imitate but generate novel sentences. This gap between input and output suggests innate linguistic knowledge—a universal grammar providing the framework for language acquisition.

Statistical learning research demonstrates that infants track distributional patterns in speech. Eight-month-olds can segment continuous speech into word-like units based on transitional probabilities between syllables. This capacity for pattern detection may bootstrap language acquisition, enabling learners to discover linguistic structure from statistical regularities.

Social interaction proves essential for language development. Children acquiring language from live interaction outperform those exposed only to recorded speech. Joint attention—coordinating focus between objects and communicative partners—scaffolds word learning. Social cues guide children toward relevant aspects of situations as words are used.

Critical period effects suggest biological constraints on language acquisition. First language acquisition proceeds effortlessly in early childhood but becomes increasingly difficult with age. Late-exposed deaf children and rare cases of extreme isolation show impaired language development. Second language acquisition in adults rarely achieves native-like proficiency, particularly for phonology and morphosyntax.

Individual differences in language development have genetic components. Twin studies show substantial heritability for vocabulary size, grammatical development, and language disorders. However, environmental factors—socioeconomic status, parental input quality, literacy exposure—also powerfully influence language outcomes. Gene-environment interactions shape developmental trajectories.

Bilingual acquisition demonstrates that children can simultaneously acquire multiple languages without confusion or delay. Bilingual children develop metalinguistic awareness—understanding language as a system—earlier than monolinguals. Code-switching between languages reflects sophisticated competence rather than deficient knowledge. Bilingualism may confer cognitive advantages beyond language.

Developmental language disorders affect approximately seven percent of children. Specific language impairment involves language difficulties without obvious cause; dyslexia specifically affects reading. Understanding these disorders illuminates typical development while enabling intervention. Early identification and treatment improve outcomes substantially.`,
      questions: [
        { id: 1, type: "tfng", text: "Children simply imitate adult speech.", answer: "False" },
        { id: 2, type: "tfng", text: "Infants can track distributional patterns in speech.", answer: "True" },
        { id: 3, type: "tfng", text: "Social interaction is unnecessary for language development.", answer: "False" },
        { id: 4, type: "tfng", text: "Language acquisition becomes easier with age.", answer: "False" },
        { id: 5, type: "mcq", text: "Who advanced the poverty of the stimulus argument?", options: ["A. Skinner", "B. Noam Chomsky", "C. Piaget", "D. Vygotsky"], answer: "B" },
        { id: 6, type: "mcq", text: "What do eight-month-olds segment based on?", options: ["A. Word meaning", "B. Transitional probabilities", "C. Adult instruction", "D. Writing"], answer: "B" },
        { id: 7, type: "mcq", text: "What does joint attention coordinate?", options: ["A. Motor skills", "B. Focus between objects and partners", "C. Sleep patterns", "D. Physical growth"], answer: "B" },
        { id: 8, type: "short", text: "What does the poverty of the stimulus suggest is innate?", answer: "linguistic knowledge" },
        { id: 9, type: "short", text: "What do bilingual children develop earlier than monolinguals?", answer: "metalinguistic awareness" },
        { id: 10, type: "mcq", text: "What percentage of children do developmental language disorders affect?", options: ["A. One percent", "B. Seven percent", "C. Twenty percent", "D. Fifty percent"], answer: "B" },
        { id: 11, type: "tfng", text: "Bilingual code-switching reflects deficient knowledge.", answer: "False" },
        { id: 12, type: "short", text: "What aspects of second language acquisition rarely achieve native-like proficiency?", answer: "phonology and morphosyntax" },
        { id: 13, type: "yng", text: "The author suggests only genetics determine language development.", answer: "No" }
      ]
    },
    {
      id: "P2",
      title: "The Politics of Climate Change",
      wordCount: 870,
      text: `Climate change presents unprecedented political challenges, requiring collective action across nations, generations, and sectors while confronting powerful interests and deep uncertainties. The politics of climate change illuminate broader dynamics of global governance, domestic policy-making, and the relationship between science and democracy.

International negotiations have struggled to produce adequate responses. The Kyoto Protocol established binding emission targets for developed countries but excluded major emitters and faced US withdrawal. The Paris Agreement achieved near-universal participation through voluntary pledges but lacks enforcement mechanisms. Whether commitments translate into action remains uncertain.

Domestic climate politics vary dramatically across nations. Carbon pricing—through taxes or emissions trading—represents economists' preferred approach but faces political resistance. Renewable energy policies have expanded clean energy substantially. Regulatory approaches target specific sectors. Political feasibility often trumps optimal policy design.

Interest group politics shape climate policy. Fossil fuel industries have funded climate skepticism and lobbied against regulation. Renewable energy industries increasingly counter this influence. Environmentalists, youth activists, and climate-affected communities mobilize for action. Corporate positions have evolved as business risks from climate change become apparent.

Public opinion on climate change follows partisan lines in many countries, particularly the United States. Scientific consensus on human-caused warming has not translated into political consensus on response. Misinformation campaigns have exploited uncertainty while social media algorithms may amplify polarization. Communicating climate science effectively remains challenging.

Federalism creates both opportunities and obstacles. Subnational governments—states, provinces, cities—have implemented ambitious climate policies even when national governments resist. California and the European Union have demonstrated that economic growth and emission reductions can coexist. However, subnational action cannot substitute for national and international coordination.

Climate justice movements highlight distributional dimensions. Those least responsible for emissions often face greatest impacts. Indigenous peoples, developing nations, and future generations bear burdens from decisions they did not make. Just transition frameworks address economic dislocations from decarbonization, particularly for fossil fuel workers and communities.

Addressing climate change requires political will that has proven difficult to sustain. Immediate costs and diffuse, delayed benefits create political asymmetries favoring inaction. Overcoming these obstacles requires building coalitions, framing issues effectively, and designing policies that distribute benefits while managing costs.`,
      questions: [
        { id: 14, type: "tfng", text: "The Kyoto Protocol included all major emitters.", answer: "False" },
        { id: 15, type: "tfng", text: "The Paris Agreement has binding enforcement mechanisms.", answer: "False" },
        { id: 16, type: "tfng", text: "Public opinion on climate is non-partisan everywhere.", answer: "False" },
        { id: 17, type: "tfng", text: "Subnational governments have implemented climate policies.", answer: "True" },
        { id: 18, type: "mcq", text: "What is economists' preferred climate policy approach?", options: ["A. Voluntary pledges", "B. Carbon pricing", "C. Moral suasion", "D. No intervention"], answer: "B" },
        { id: 19, type: "mcq", text: "What have fossil fuel industries funded?", options: ["A. Climate action", "B. Climate skepticism", "C. Renewable energy", "D. Carbon taxes"], answer: "B" },
        { id: 20, type: "mcq", text: "What do just transition frameworks address?", options: ["A. Only emissions", "B. Economic dislocations from decarbonization", "C. Weather patterns", "D. Scientific research"], answer: "B" },
        { id: 21, type: "short", text: "What did the US do regarding the Kyoto Protocol?", answer: "withdrew" },
        { id: 22, type: "short", text: "What have California and the EU demonstrated can coexist?", answer: "economic growth and emission reductions" },
        { id: 23, type: "mcq", text: "Who faces greatest climate impacts despite least responsibility?", options: ["A. Wealthy nations", "B. Those least responsible for emissions", "C. Industrial powers", "D. Oil producers"], answer: "B" },
        { id: 24, type: "tfng", text: "Scientific consensus has produced political consensus.", answer: "False" },
        { id: 25, type: "short", text: "What creates political asymmetries favoring inaction?", answer: "immediate costs and diffuse, delayed benefits" },
        { id: 26, type: "yng", text: "The author suggests subnational action can substitute for international coordination.", answer: "No" }
      ]
    },
    {
      id: "P3",
      title: "The Future of Human Enhancement",
      wordCount: 875,
      text: `Human enhancement technologies—interventions improving capacities beyond typical human functioning—raise profound questions about human nature, social justice, and the limits of technological intervention. As capabilities expand from therapeutic restoration to enhancement, ethical frameworks struggle to keep pace.

Cognitive enhancement attracts substantial interest. Pharmaceutical enhancers like modafinil improve wakefulness and possibly other functions. Brain stimulation technologies modulate neural activity. Future possibilities include genetic enhancement of intelligence and direct brain-computer interfaces. The line between treating deficits and enhancing normal function blurs.

Physical enhancement encompasses performance-enhancing drugs in sports, exoskeletons augmenting strength, and emerging genetic modifications. Athletes face regulatory regimes attempting to preserve "natural" competition while definitions of natural prove elusive. Military applications pursue enhanced soldiers raising distinct ethical concerns.

Life extension research aims to slow, halt, or reverse aging processes. Senolytics target senescent cells; gene therapies address aging mechanisms. Radical life extension—living centuries rather than decades—remains speculative but attracts serious scientific attention. Such possibilities would transform social institutions designed around current lifespans.

Enhancement raises fairness concerns. If enhancements remain expensive, they may widen inequalities as the privileged enhance themselves and their children. Enhancement might become necessary to compete, creating coercive dynamics even without mandates. Alternatively, enhancement could reduce natural inequalities if made widely available.

Authenticity debates question whether enhanced achievements are truly one's own. Does pharmacologically enhanced focus undermine genuine accomplishment? Defenders argue that all achievements depend on factors beyond individual control—genetics, upbringing, opportunity. Enhancement simply adds another factor to this constellation.

Human nature arguments oppose enhancement as violating essential human characteristics. Critics worry about hubris, unforeseen consequences, and losing something valuable in human condition. Transhumanists embrace transcending biological limitations as extending human self-improvement. Whether human nature defines limits or presents obstacles for overcoming remains contested.

Governance frameworks for enhancement technologies remain underdeveloped. Regulation designed for therapy may inadequately address enhancement. International coordination proves difficult given different cultural values. Professional ethics, market forces, and individual choice interact in complex ways. Thoughtful governance requires anticipating technological possibilities while remaining adaptable.`,
      questions: [
        { id: 27, type: "tfng", text: "The line between therapy and enhancement is clear.", answer: "False" },
        { id: 28, type: "tfng", text: "Modafinil improves wakefulness.", answer: "True" },
        { id: 29, type: "tfng", text: "Radical life extension is currently achievable.", answer: "False" },
        { id: 30, type: "tfng", text: "Enhancement governance frameworks are fully developed.", answer: "False" },
        { id: 31, type: "mcq", text: "What do senolytics target?", options: ["A. Viruses", "B. Senescent cells", "C. Bacteria", "D. Hormones"], answer: "B" },
        { id: 32, type: "mcq", text: "What concern do expensive enhancements raise?", options: ["A. They may reduce inequalities", "B. They may widen inequalities", "C. They are too effective", "D. They work on everyone equally"], answer: "B" },
        { id: 33, type: "mcq", text: "What do transhumanists embrace?", options: ["A. Biological limits", "B. Transcending biological limitations", "C. Traditional values only", "D. No change"], answer: "B" },
        { id: 34, type: "short", text: "What do defenders of enhancement argue all achievements depend on?", answer: "factors beyond individual control" },
        { id: 35, type: "short", text: "What proves difficult for enhancement governance internationally?", answer: "coordination given different cultural values" },
        { id: 36, type: "mcq", text: "What would radical life extension transform?", options: ["A. Only medicine", "B. Social institutions designed around current lifespans", "C. Nothing", "D. Only genetics"], answer: "B" },
        { id: 37, type: "tfng", text: "Military enhancement applications raise no distinct concerns.", answer: "False" },
        { id: 38, type: "short", text: "What debates question whether enhanced achievements are truly one's own?", answer: "authenticity debates" },
        { id: 39, type: "yng", text: "The author suggests enhancement will eliminate all human inequalities.", answer: "No" },
        { id: 40, type: "yng", text: "The passage indicates brain-computer interfaces are a future possibility.", answer: "Yes" }
      ]
    }
  ]
},

];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { READING_TESTS_FULL };
}
