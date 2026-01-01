// =============================================================================
// IELTS ACADEMIC READING TESTS - FULL EXAM FORMAT
// Each test: 3 passages (~800-900 words each), 40 questions total
// =============================================================================

const READING_TESTS_FULL = [
  // ============================================================
  // R1 - FOUNDATION (Band 6.0-6.5)
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
        text: `For much of human history, access to books and written knowledge was restricted to a small elite. Early libraries were typically private collections owned by wealthy individuals, religious institutions, or ruling authorities. These repositories were designed primarily to preserve texts rather than to disseminate knowledge widely. As a result, literacy remained limited to scholars, clergy, and the privileged classes for centuries.

The concept of the public library as we understand it today emerged gradually during the eighteenth and nineteenth centuries. The Enlightenment period fostered new ideas about education and the democratization of knowledge. Philosophers argued that access to information was essential for civic participation and social progress. However, it was not until the industrial revolution that public libraries began to appear in significant numbers.

Rapid industrialization in Europe and North America created large urban populations with limited access to formal education. Factory workers, many of whom had migrated from rural areas, had few opportunities for self-improvement. Recognizing this need, governments and wealthy philanthropists began funding public libraries as instruments of social reform. The intention was to provide working-class citizens with access to knowledge that could help them advance economically and participate more fully in democratic society.

One of the most influential figures in the public library movement was Andrew Carnegie, the Scottish-American industrialist. Between 1883 and 1929, Carnegie funded the construction of over 2,500 libraries worldwide, primarily in English-speaking countries. His philosophy was that libraries could serve as "the university of the people," offering educational opportunities to those who could not afford formal schooling. Carnegie's model typically required local communities to provide land and ongoing operational funding, ensuring community investment in their libraries.

The twentieth century saw dramatic expansion in both the number and scope of public libraries. In addition to lending books, libraries began offering reference services, children's programming, and community meeting spaces. The introduction of audiovisual materials in the mid-century further broadened their appeal and utility.

The digital revolution of the late twentieth and early twenty-first centuries presented both challenges and opportunities for public libraries. Some predicted that the rise of the internet and e-books would make physical libraries obsolete. Instead, libraries have adapted by offering digital resources, computer access, and technology training. Many libraries now serve as community hubs, providing services ranging from job search assistance to maker spaces equipped with 3D printers.

Despite these adaptations, public libraries face ongoing challenges. Budget constraints have forced many to reduce hours and staff. Questions persist about the future role of libraries in an age when information is increasingly available online. Nevertheless, supporters argue that libraries remain essential institutions, providing equitable access to knowledge and serving as trusted community spaces in an era of digital division.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Early restrictions on knowledge access", "ii. The birth of modern libraries", "iii. Carnegie's contribution", "iv. Digital transformation"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Industrial growth and education", "ii. Enlightenment ideas about knowledge", "iii. Rural migration patterns", "iv. Government funding models"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Carnegie's library program", "ii. Libraries and social reform", "iii. The digital challenge", "iv. Children's services"], answer: "ii" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Community partnerships", "ii. Budget problems", "iii. Carnegie's library philanthropy", "iv. Reference services"], answer: "iii" },
          { id: 5, type: "tfng", text: "Early libraries were primarily intended for public education.", answer: "False" },
          { id: 6, type: "tfng", text: "The Enlightenment influenced ideas about public access to knowledge.", answer: "True" },
          { id: 7, type: "tfng", text: "Carnegie funded libraries only in the United States.", answer: "False" },
          { id: 8, type: "tfng", text: "Carnegie required communities to provide ongoing funding for libraries.", answer: "True" },
          { id: 9, type: "tfng", text: "The internet has made public libraries unnecessary.", answer: "False" },
          { id: 10, type: "short", text: "Who owned most early libraries? (NO MORE THAN THREE WORDS)", answer: "wealthy individuals" },
          { id: 11, type: "short", text: "What process created large urban populations? (ONE WORD)", answer: "industrialization" },
          { id: 12, type: "short", text: "How many libraries did Carnegie fund? (NO MORE THAN TWO WORDS)", answer: "2500 libraries" },
          { id: 13, type: "short", text: "What type of training do modern libraries offer? (ONE WORD)", answer: "technology" }
        ]
      },
      {
        id: "P2",
        title: "Urban Parks and Mental Health",
        wordCount: 820,
        text: `As cities around the world become increasingly dense and urbanized, researchers have turned their attention to the relationship between urban green spaces and mental health. Parks, gardens, and other natural areas within cities are now recognized as potentially significant contributors to psychological well-being, though the mechanisms through which they operate and the extent of their benefits remain subjects of ongoing investigation.

The concept that natural environments might benefit mental health is not new. As early as the nineteenth century, urban planners argued that parks could provide city dwellers with relief from the stresses of industrial life. Frederick Law Olmsted, the designer of New York's Central Park, believed that exposure to natural scenery could have restorative effects on the mind. However, it was not until the late twentieth century that researchers began systematically studying these claims.

One influential framework for understanding nature's psychological benefits is attention restoration theory, developed by environmental psychologists Rachel and Stephen Kaplan in the 1980s. According to this theory, modern urban environments place heavy demands on what the Kaplans called "directed attention" – the focused concentration required to navigate traffic, filter out noise, and process the constant stream of stimuli characteristic of city life. Natural environments, by contrast, engage a different type of attention – "soft fascination" – that allows the mental resources used for directed attention to recover.

Empirical research has generally supported the idea that exposure to green spaces is associated with better mental health outcomes. Studies using various methodologies – from laboratory experiments to large-scale epidemiological surveys – have found correlations between access to green space and reduced levels of stress, anxiety, and depression. Some research suggests that even brief exposure to natural settings, such as a twenty-minute walk in a park, can produce measurable improvements in mood and cognitive function.

However, not all urban parks provide equal benefits. Research indicates that several factors influence the extent to which green spaces support mental health. The quality of the space matters: well-maintained parks with mature trees and diverse vegetation appear more restorative than poorly kept spaces. Safety perceptions also play a role; individuals who feel unsafe in a park are unlikely to experience psychological benefits from visiting it. Accessibility is another critical factor, as parks that are difficult to reach may go underutilized regardless of their quality.

The relationship between green space and mental health also appears to vary across different populations. Some studies suggest that the psychological benefits of parks may be particularly pronounced for individuals from lower socioeconomic backgrounds, who often have less access to private gardens and may face higher levels of daily stress. However, these same populations frequently live in neighborhoods with fewer and lower-quality parks, raising issues of environmental justice.

Urban planners and public health officials have increasingly incorporated these research findings into policy. Many cities now include green space provision in their planning guidelines, and some have invested heavily in creating new parks or improving existing ones. Nevertheless, questions remain about how best to design green spaces to maximize mental health benefits and how to ensure equitable access across all communities.`,
        questions: [
          { id: 14, type: "yng", text: "Olmsted designed Central Park based on scientific research.", answer: "Not Given" },
          { id: 15, type: "yng", text: "Attention restoration theory was developed in the 1980s.", answer: "Yes" },
          { id: 16, type: "yng", text: "Natural environments require directed attention.", answer: "No" },
          { id: 17, type: "yng", text: "Well-maintained parks are more beneficial than poorly kept ones.", answer: "Yes" },
          { id: 18, type: "yng", text: "All cities now require green space in urban planning.", answer: "Not Given" },
          { id: 19, type: "mcq", text: "According to attention restoration theory, urban environments:", options: ["A. Provide soft fascination", "B. Demand directed attention", "C. Restore mental resources", "D. Reduce stress naturally"], answer: "B" },
          { id: 20, type: "mcq", text: "Research suggests that exposure to parks can:", options: ["A. Cure mental illness", "B. Replace medical treatment", "C. Reduce stress and anxiety", "D. Eliminate depression"], answer: "C" },
          { id: 21, type: "mcq", text: "Which factor does NOT affect park benefits according to the passage?", options: ["A. Maintenance quality", "B. Safety perceptions", "C. Entrance fees", "D. Accessibility"], answer: "C" },
          { id: 22, type: "mcq", text: "Lower socioeconomic groups may benefit more from parks because they:", options: ["A. Have more free time", "B. Live closer to parks", "C. Face higher daily stress", "D. Prefer outdoor activities"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Natural environments engage '________' rather than directed attention.", answer: "soft fascination" },
          { id: 24, type: "summary", text: "Complete: A ______-minute walk in a park can improve mood.", answer: "twenty" },
          { id: 25, type: "summary", text: "Complete: Issues of environmental ________ arise regarding park access.", answer: "justice" },
          { id: 26, type: "summary", text: "Complete: Parks need to be ________ to be used effectively.", answer: "accessible" }
        ]
      },
      {
        id: "P3",
        title: "Language Extinction and Cultural Loss",
        wordCount: 880,
        text: `Linguists estimate that of the approximately 7,000 languages spoken in the world today, between 50 and 90 percent may disappear by the end of this century. This phenomenon, known as language death or language extinction, typically occurs when the last speakers of a language die without passing it on to younger generations. While languages have always evolved and occasionally disappeared throughout human history, the current rate of language loss is unprecedented, prompting concerns about the cultural and intellectual consequences of this trend.

Language extinction most commonly occurs through a process called language shift, in which speakers gradually abandon their native language in favor of a more dominant one. This shift typically happens over several generations and is driven by a complex interplay of economic, social, and political factors. Economic pressures often play a central role: speakers may perceive that fluency in a dominant language offers better employment opportunities and social mobility. Government policies, including those that historically prohibited or discouraged minority language use in schools and public institutions, have also contributed to language shift in many regions.

The consequences of language extinction extend far beyond the loss of vocabulary and grammar. Languages serve as repositories of cultural knowledge, encoding unique ways of understanding and categorizing the world. Indigenous languages often contain sophisticated systems for classifying plants, animals, and ecological relationships that have developed over millennia of close observation. When a language dies, this accumulated knowledge frequently disappears as well, representing an irreplaceable loss not only for the community that spoke it but potentially for humanity as a whole.

Languages also embody cultural practices, oral traditions, and historical memories that may have no equivalent expression in other languages. Poetry, songs, stories, and ceremonial language often cannot be fully translated, as they depend on the specific sounds, rhythms, and associations of their original language. The loss of a language therefore represents a diminishment of human cultural diversity analogous to the loss of a species in the biological realm.

Efforts to preserve endangered languages have taken various forms. Documentation projects, often conducted by academic linguists in partnership with community members, create recordings, dictionaries, and grammars that preserve linguistic knowledge even if active speakers disappear. Language revitalization programs aim more ambitiously to increase the number of speakers, typically through educational initiatives that teach the language to children. Some such programs have achieved notable successes: Hebrew was revived as a living language in the twentieth century, and Welsh has seen significant increases in speaker numbers following sustained government support.

However, language preservation efforts face significant challenges and have attracted some criticism. Documentation alone cannot prevent a language from dying; it merely creates an archive for future study. Revitalization programs require sustained resources and community commitment that may be difficult to maintain. Some critics argue that efforts to preserve endangered languages are ultimately futile given the economic and social pressures favoring dominant languages, while others suggest that such efforts may impose external values on communities that have pragmatic reasons for shifting to majority languages.

Despite these debates, most linguists agree that the current rate of language extinction represents a significant loss. Each language offers a unique window into human cognition and culture, and the disappearance of linguistic diversity limits our understanding of the full range of human thought and expression. Whether and how to address this loss, however, remains a matter of ongoing discussion among researchers, policymakers, and affected communities.`,
        questions: [
          { id: 27, type: "matching", text: "Economic pressures driving language shift", paragraph: "B", answer: "B" },
          { id: 28, type: "matching", text: "Cultural knowledge encoded in languages", paragraph: "C", answer: "C" },
          { id: 29, type: "matching", text: "Successful language revival examples", paragraph: "E", answer: "E" },
          { id: 30, type: "matching", text: "Criticisms of preservation efforts", paragraph: "F", answer: "F" },
          { id: 31, type: "matching", text: "Estimates of language loss this century", paragraph: "A", answer: "A" },
          { id: 32, type: "tfng", text: "Language extinction has never occurred before in human history.", answer: "False" },
          { id: 33, type: "tfng", text: "Economic factors are often central to language shift.", answer: "True" },
          { id: 34, type: "tfng", text: "All endangered languages can be successfully revitalized.", answer: "Not Given" },
          { id: 35, type: "tfng", text: "Hebrew was successfully revived as a spoken language.", answer: "True" },
          { id: 36, type: "tfng", text: "Most linguists are unconcerned about language extinction.", answer: "False" },
          { id: 37, type: "mcq", text: "Language shift primarily occurs because:", options: ["A. Languages naturally evolve", "B. Speakers see advantages in dominant languages", "C. Governments require it", "D. Children refuse to learn"], answer: "B" },
          { id: 38, type: "mcq", text: "Indigenous languages often contain:", options: ["A. Simple vocabulary", "B. Ecological classification systems", "C. Written literature only", "D. Universal grammar"], answer: "B" },
          { id: 39, type: "mcq", text: "The author compares language loss to:", options: ["A. Economic decline", "B. Political change", "C. Species extinction", "D. Technological progress"], answer: "C" },
          { id: 40, type: "mcq", text: "The passage suggests that language preservation:", options: ["A. Is universally supported", "B. Always succeeds", "C. Faces challenges and criticism", "D. Should be abandoned"], answer: "C" }
        ]
      }
    ]
  },

  // ============================================================
  // R2 - FOUNDATION (Band 6.0-6.5)
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
        title: "The History of Paper Making",
        wordCount: 830,
        text: `Paper is so ubiquitous in modern life that its remarkable history is often overlooked. Before paper's invention, civilizations around the world developed various methods for recording information, each with significant limitations. Stone tablets, used by ancient Mesopotamians, were durable but heavy and difficult to transport. Papyrus, made from reeds growing along the Nile, served Egyptian scribes well but was fragile and could only be produced in limited regions. Parchment, prepared from animal skins, was more versatile but expensive to produce, requiring the hides of numerous animals for even a single book.

The invention of true paper is credited to Cai Lun, a Chinese court official who, according to historical records, presented his papermaking process to the Emperor in 105 CE. However, archaeological evidence suggests that paper may have been produced in China as early as the second century BCE. Cai Lun's innovation lay in refining the manufacturing process and standardizing the materials used. His method involved pulping plant fibers—typically from mulberry bark, hemp, or old rags—soaking them in water, spreading the resulting slurry on screens, and pressing and drying the sheets.

For centuries, papermaking remained a closely guarded Chinese secret that gave the empire a significant advantage in administration and trade. The technology eventually spread westward following the Battle of Talas in 751 CE, when Arab forces captured Chinese papermakers and learned their techniques. Paper mills subsequently appeared across the Islamic world, with significant production centers in Samarkand, Baghdad, and Damascus. Arab papermakers made important improvements to the process, including the use of linen and cotton fibers, which produced stronger paper than the bark-based Chinese varieties.

Paper reached Europe through Spain and Italy in the medieval period. The first European paper mill was established in Xàtiva, Spain, in 1056, and the technology gradually spread northward. European papermakers further refined the process, developing water-powered mills that could produce paper more efficiently. The invention of the printing press by Johannes Gutenberg around 1440 dramatically increased demand for paper, as books could now be produced far more quickly than hand-copying allowed.

The industrial revolution brought transformative changes to papermaking. In 1799, the Frenchman Louis-Nicolas Robert invented the first papermaking machine, which could produce continuous rolls of paper rather than individual sheets. This innovation was refined by Bryan Donkin and the Fourdrinier brothers in England, resulting in the Fourdrinier machine that remains the basis of modern paper production. The nineteenth century also saw the development of wood pulp as a raw material, dramatically reducing costs and enabling mass production of newspapers, books, and other printed materials.

Today, the paper industry is a global enterprise producing hundreds of millions of tons of paper annually. Modern papermaking involves sophisticated chemistry and engineering, with computer-controlled processes ensuring consistent quality. Despite predictions that digital technology would create a "paperless society," global paper consumption has continued to rise, driven largely by packaging needs and demand in developing economies. However, environmental concerns about deforestation and water pollution have prompted increased attention to sustainable forestry practices and recycling programs.`,
        questions: [
          { id: 1, type: "tfng", text: "Stone tablets were easy to transport.", answer: "False" },
          { id: 2, type: "tfng", text: "Papyrus could only be made in certain regions.", answer: "True" },
          { id: 3, type: "tfng", text: "Cai Lun invented paper in 105 CE.", answer: "Not Given" },
          { id: 4, type: "tfng", text: "Paper technology spread to Arabs through trade.", answer: "False" },
          { id: 5, type: "tfng", text: "Arab papermakers used linen and cotton fibers.", answer: "True" },
          { id: 6, type: "short", text: "What material was parchment made from? (NO MORE THAN TWO WORDS)", answer: "animal skins" },
          { id: 7, type: "short", text: "When did paper mills first appear in Spain? (YEAR)", answer: "1056" },
          { id: 8, type: "short", text: "Who invented the printing press? (ONE NAME)", answer: "Gutenberg" },
          { id: 9, type: "short", text: "What machine remains the basis of modern paper production? (ONE WORD)", answer: "Fourdrinier" },
          { id: 10, type: "mcq", text: "According to paragraph 2, archaeological evidence suggests paper may have existed:", options: ["A. Before 105 CE", "B. Only after 105 CE", "C. In Egypt first", "D. In Europe first"], answer: "A" },
          { id: 11, type: "mcq", text: "The Battle of Talas was significant because:", options: ["A. China won control of paper trade", "B. Paper technology spread to Arabs", "C. European papermaking began", "D. Paper became obsolete"], answer: "B" },
          { id: 12, type: "mcq", text: "Louis-Nicolas Robert's machine was innovative because it:", options: ["A. Used wood pulp", "B. Was water-powered", "C. Produced continuous rolls", "D. Made colored paper"], answer: "C" },
          { id: 13, type: "mcq", text: "The passage indicates that paper consumption:", options: ["A. Has declined with digital technology", "B. Continues to increase globally", "C. Remains stable", "D. Is only growing in developed nations"], answer: "B" }
        ]
      },
      {
        id: "P2",
        title: "Tourism and Economic Development",
        wordCount: 810,
        text: `Tourism has emerged as one of the world's largest industries, accounting for approximately 10 percent of global GDP and employing one in ten workers worldwide. For many developing nations, tourism represents a promising path to economic development, offering the potential to generate foreign exchange, create employment, and stimulate infrastructure investment. However, the relationship between tourism and development is complex, and the benefits of tourism are not automatically realized or equitably distributed.

The economic case for tourism development rests on several pillars. Tourism creates demand for accommodation, food services, transportation, and entertainment, generating both direct employment in these sectors and indirect employment in supporting industries. Unlike many export industries, tourism brings consumers to the product rather than shipping products to consumers, allowing destinations to capture more of the value chain locally. Tourism can also provide a market for local crafts, agricultural products, and cultural performances that might otherwise lack commercial viability.

Foreign exchange earnings from tourism can be particularly valuable for developing economies facing balance of payment constraints. International tourists typically pay in hard currencies, providing a source of foreign exchange that can be used to import capital goods or service external debts. Some economists argue that tourism can serve as an engine of broader economic growth, as revenue from tourism stimulates demand in other sectors through multiplier effects.

However, tourism development also carries significant risks and potential drawbacks. Perhaps most prominently, tourism-dependent economies are vulnerable to external shocks beyond their control. Political instability, natural disasters, economic recessions in source markets, and even changing travel fashions can cause sudden drops in tourist arrivals, with devastating effects on local employment and government revenues. The COVID-19 pandemic dramatically illustrated this vulnerability, with international tourist arrivals falling by 74 percent in 2020 and many tourism-dependent economies experiencing severe recessions.

Tourism can also generate negative environmental and social impacts. Increased visitor numbers may strain water supplies, generate waste, and damage fragile ecosystems. In popular destinations, rising property prices driven by tourism investment may price local residents out of housing markets. The transformation of traditional practices into commercial entertainment can lead to cultural commodification, while the economic pressures of tourism may encourage harmful practices such as wildlife exploitation.

Furthermore, the economic benefits of tourism do not always accrue to local communities. Foreign-owned hotels and tour operators may repatriate profits rather than reinvesting locally. All-inclusive resorts may capture most tourist spending within their compounds, providing limited spillover to surrounding communities. Seasonal employment patterns can create income instability, while low wages in many tourism jobs limit their developmental impact.

Successful tourism development therefore requires careful planning and management. Governments must balance tourism promotion with environmental protection and ensure that benefits are distributed equitably. Community-based tourism initiatives attempt to direct more benefits to local populations by involving residents in tourism planning and operation. Certification schemes and responsible tourism guidelines aim to minimize negative impacts while maintaining tourism's economic benefits.`,
        questions: [
          { id: 14, type: "yng", text: "Tourism accounts for about 10% of global employment.", answer: "Yes" },
          { id: 15, type: "yng", text: "All developing nations benefit equally from tourism.", answer: "No" },
          { id: 16, type: "yng", text: "Tourism brings consumers to products rather than the reverse.", answer: "Yes" },
          { id: 17, type: "yng", text: "The COVID-19 pandemic had minimal impact on tourism.", answer: "No" },
          { id: 18, type: "yng", text: "All-inclusive resorts always benefit local communities.", answer: "No" },
          { id: 19, type: "summary", text: "Complete: Tourism can provide foreign ________ for developing economies.", answer: "exchange" },
          { id: 20, type: "summary", text: "Complete: Revenue from tourism creates ________ effects in other sectors.", answer: "multiplier" },
          { id: 21, type: "summary", text: "Complete: International arrivals fell ________ percent in 2020.", answer: "74" },
          { id: 22, type: "summary", text: "Complete: Rising property prices may affect local ________ markets.", answer: "housing" },
          { id: 23, type: "mcq", text: "The passage suggests tourism is valuable because:", options: ["A. It replaces manufacturing", "B. It captures value locally", "C. It requires no investment", "D. It never fluctuates"], answer: "B" },
          { id: 24, type: "mcq", text: "Tourism-dependent economies are vulnerable to:", options: ["A. Only natural disasters", "B. Multiple external factors", "C. Only economic issues", "D. Local competition"], answer: "B" },
          { id: 25, type: "mcq", text: "Cultural commodification refers to:", options: ["A. Increasing cultural exchange", "B. Traditional practices becoming commercial entertainment", "C. Protecting heritage sites", "D. Government cultural programs"], answer: "B" },
          { id: 26, type: "mcq", text: "Community-based tourism aims to:", options: ["A. Exclude local residents", "B. Maximize foreign investment", "C. Direct benefits to local populations", "D. Reduce tourist numbers"], answer: "C" }
        ]
      },
      {
        id: "P3",
        title: "The Psychology of Habit Formation",
        wordCount: 850,
        text: `Habits govern much of human behavior. Researchers estimate that approximately 40 percent of daily actions are habitual rather than deliberate, performed automatically with minimal conscious thought. Understanding how habits form, persist, and change has become a significant focus of psychological research, with implications for health promotion, addiction treatment, and behavior modification more broadly.

The scientific study of habit has a long history, dating back to William James's influential discussion in his 1890 work "The Principles of Psychology." James described habits as behaviors that become automatic through repetition, freeing up mental resources for other tasks. Modern neuroscience has largely confirmed this view, revealing that habits involve a shift in brain activity from the prefrontal cortex, associated with deliberate decision-making, to the basal ganglia, involved in automatic behaviors.

Contemporary research conceptualizes habits as having three components: a cue, a routine, and a reward. The cue is a trigger that initiates the habitual behavior—it might be a time of day, a location, an emotional state, or the presence of other people. The routine is the behavior itself. The reward is the positive outcome that reinforces the habit, which can be tangible (such as food) or intangible (such as a sense of accomplishment). This "habit loop," popularized by journalist Charles Duhigg, provides a framework for understanding both how habits develop and how they might be changed.

Habits form through repeated performance of a behavior in a consistent context. Each repetition strengthens the association between the contextual cue and the behavioral response. Research by Philippa Lally and colleagues at University College London found that on average, it takes 66 days for a new behavior to become automatic, though this varied considerably among individuals and depending on the complexity of the behavior. Simple habits formed more quickly than complex ones.

Once established, habits prove remarkably resistant to change. This persistence reflects the neurological basis of habits: the neural pathways supporting habitual behaviors become increasingly efficient with repetition, making the habit easier to perform than alternative behaviors. The automatic nature of habits also means that they can be triggered before conscious deliberation occurs, making willpower an unreliable tool for habit change.

Breaking unwanted habits therefore requires strategic approaches rather than relying on motivation alone. Research suggests that the most effective strategies involve disrupting the habit loop. Changing the environment to remove or alter cues can prevent habits from being triggered. Substituting a new routine that provides similar rewards can redirect the habit loop toward more desirable behavior. Mindfulness practices can increase awareness of habitual triggers, creating space for deliberate choice.

Context change can also facilitate habit change. Studies have found that major life transitions, such as moving house or changing jobs, often coincide with successful habit modification. These transitions disrupt established cues and routines, creating a window of opportunity for forming new habits. This finding has practical implications for health interventions, suggesting that targeting people during life transitions may enhance effectiveness.

The implications of habit research extend beyond individual behavior change. Organizational and policy interventions can shape environments to support healthy habits and discourage harmful ones. "Nudge" approaches, which alter choice architecture to make desired behaviors easier, draw on insights from habit research. Understanding the automatic nature of much human behavior has fundamentally changed how researchers, clinicians, and policymakers approach behavior change.`,
        questions: [
          { id: 27, type: "tfng", text: "About 40% of daily actions are habitual.", answer: "True" },
          { id: 28, type: "tfng", text: "William James wrote about habits in 1890.", answer: "True" },
          { id: 29, type: "tfng", text: "Habits are controlled primarily by the prefrontal cortex.", answer: "False" },
          { id: 30, type: "tfng", text: "All habits take exactly 66 days to form.", answer: "False" },
          { id: 31, type: "tfng", text: "Complex habits form faster than simple ones.", answer: "False" },
          { id: 32, type: "matching", text: "The trigger that starts a habit", answer: "cue" },
          { id: 33, type: "matching", text: "The behavior itself", answer: "routine" },
          { id: 34, type: "matching", text: "What reinforces the habit", answer: "reward" },
          { id: 35, type: "mcq", text: "The basal ganglia is associated with:", options: ["A. Deliberate decisions", "B. Automatic behaviors", "C. Emotional responses", "D. Memory formation"], answer: "B" },
          { id: 36, type: "mcq", text: "According to the passage, habits are hard to break because:", options: ["A. People lack motivation", "B. Neural pathways become efficient", "C. Rewards are too powerful", "D. Cues cannot be changed"], answer: "B" },
          { id: 37, type: "mcq", text: "Life transitions help habit change by:", options: ["A. Increasing willpower", "B. Disrupting established cues", "C. Providing new rewards", "D. Strengthening neural pathways"], answer: "B" },
          { id: 38, type: "mcq", text: "'Nudge' approaches work by:", options: ["A. Punishing bad habits", "B. Rewarding good habits", "C. Making desired behaviors easier", "D. Eliminating all choices"], answer: "C" },
          { id: 39, type: "short", text: "Who popularized the 'habit loop' concept? (ONE NAME)", answer: "Duhigg" },
          { id: 40, type: "short", text: "On average, how many days does it take to form a habit? (NUMBER)", answer: "66" }
        ]
      }
    ]
  },

  // ============================================================
  // R3 - FOUNDATION (Band 6.0-6.5)  
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
        title: "Ancient Trade Routes",
        wordCount: 820,
        text: `Long before the advent of modern transportation, networks of trade routes connected distant civilizations across vast distances. These routes enabled the exchange not only of goods but also of ideas, technologies, religions, and cultural practices. The most famous of these networks, the Silk Road, stretched thousands of kilometers from China to the Mediterranean, but numerous other routes crisscrossed Africa, the Americas, and the seas connecting Asia, Europe, and Africa.

The term "Silk Road" was coined by German geographer Ferdinand von Richthofen in 1877, though the routes it describes had been in use for over two millennia. Despite its name, silk was only one of many commodities traded along these paths. Chinese merchants exported porcelain, tea, and paper alongside silk, while receiving gold, silver, glassware, textiles, and horses from the west. Perhaps more significantly, the routes facilitated the transfer of technologies such as papermaking, gunpowder, and the magnetic compass from China to the West.

Travel along the Silk Road was arduous and dangerous. Merchants rarely completed the entire journey themselves; instead, goods typically passed through multiple intermediaries. Caravans faced extreme temperatures crossing the Taklamakan Desert and the mountain passes of Central Asia. Bandits posed constant threats, and political instability could close routes entirely. To manage these risks, caravanserais—fortified waypoints offering food, shelter, and protection—developed at regular intervals along the routes.

Maritime trade routes complemented and eventually superseded many overland paths. Ships could carry larger volumes of goods more efficiently than camels or horses, and sea routes avoided many of the political obstacles that could disrupt land travel. The Indian Ocean trade network connected East Africa, Arabia, India, and Southeast Asia, while the Mediterranean served as a highway linking Europe, North Africa, and the Middle East. Chinese fleets under Admiral Zheng He reached as far as East Africa in the early fifteenth century.

The impact of ancient trade routes on world history cannot be overstated. They facilitated the spread of religions: Buddhism traveled from India along the Silk Road to China and beyond, while Islam spread through trade contacts across Africa and Asia. Diseases also traveled these routes—most devastatingly, the Black Death, which may have moved from Central Asia to Europe along Silk Road paths in the fourteenth century, killing an estimated one-third of Europe's population.

Trade routes also catalyzed urban development. Cities at strategic crossroads prospered as commercial centers, developing cosmopolitan cultures that blended influences from multiple civilizations. Samarkand, located in modern Uzbekistan, exemplified this phenomenon, becoming a wealthy center of learning and commerce where Persian, Turkish, Chinese, and Indian influences mixed. The decline of the Silk Road following the expansion of European maritime trade contributed to the economic decline of many such Central Asian cities.`,
        questions: [
          { id: 1, type: "tfng", text: "The Silk Road was named by a Chinese historian.", answer: "False" },
          { id: 2, type: "tfng", text: "Silk was the only product traded on the Silk Road.", answer: "False" },
          { id: 3, type: "tfng", text: "Merchants typically traveled the entire route themselves.", answer: "False" },
          { id: 4, type: "tfng", text: "Caravanserais provided protection for travelers.", answer: "True" },
          { id: 5, type: "tfng", text: "Maritime routes could carry more goods than land routes.", answer: "True" },
          { id: 6, type: "short", text: "Who coined the term 'Silk Road'? (ONE NAME)", answer: "Richthofen" },
          { id: 7, type: "short", text: "What technology transferred from China to the West? (ANY ONE)", answer: "papermaking" },
          { id: 8, type: "short", text: "What Chinese admiral reached East Africa? (ONE NAME)", answer: "Zheng He" },
          { id: 9, type: "short", text: "What disease traveled along the Silk Road? (TWO WORDS)", answer: "Black Death" },
          { id: 10, type: "mcq", text: "The passage states that goods on the Silk Road:", options: ["A. Were carried by single merchants", "B. Passed through multiple intermediaries", "C. Were only luxury items", "D. Traveled only westward"], answer: "B" },
          { id: 11, type: "mcq", text: "Maritime trade superseded land routes because ships:", options: ["A. Were faster", "B. Were more comfortable", "C. Could carry more efficiently", "D. Were never attacked"], answer: "C" },
          { id: 12, type: "mcq", text: "Samarkand prospered because:", options: ["A. It had natural resources", "B. It was at a strategic crossroads", "C. It had military power", "D. It controlled all trade"], answer: "B" },
          { id: 13, type: "mcq", text: "The passage suggests the Black Death may have:", options: ["A. Originated in Europe", "B. Traveled along trade routes", "C. Been prevented by trade", "D. Only affected Asia"], answer: "B" }
        ]
      },
      {
        id: "P2",
        title: "Renewable Energy in Developing Nations",
        wordCount: 800,
        text: `The global transition to renewable energy presents both unique challenges and unprecedented opportunities for developing nations. While industrialized countries face the task of replacing existing fossil fuel infrastructure, many developing nations have the potential to leapfrog directly to clean energy systems, much as they bypassed landline telephones for mobile communications. However, realizing this potential requires navigating complex financial, technical, and political obstacles.

The economic case for renewable energy in developing countries has strengthened dramatically in recent years. The cost of solar photovoltaic systems has fallen by approximately 90 percent since 2010, making solar power competitive with or cheaper than fossil fuels in many regions. Wind power costs have similarly declined. For countries that must import oil, coal, or natural gas, domestically produced renewable energy offers the additional benefit of reducing dependence on volatile international commodity markets and improving energy security.

Decentralized renewable energy systems hold particular promise for developing nations, where grid infrastructure is often inadequate or absent entirely. Over 750 million people worldwide lack access to electricity, primarily in Sub-Saharan Africa and South Asia. For these populations, extending centralized grid systems is often prohibitively expensive due to the high costs of transmission infrastructure over long distances to serve sparse populations. Solar home systems and microgrids offer an alternative path to electrification that can be deployed rapidly and scaled incrementally.

Despite these advantages, barriers to renewable energy adoption persist. Initial capital costs remain significant even as operating costs have fallen, and many developing countries face constraints in accessing affordable financing. Technical capacity for installing and maintaining renewable systems may be limited. Existing utility models and regulatory frameworks designed for centralized fossil fuel systems may inadvertently disadvantage distributed renewable generation. Political factors, including vested interests in existing energy industries, can also slow transitions.

International cooperation has increasingly focused on supporting renewable energy development in lower-income countries. Climate finance commitments from developed nations aim to help developing countries both mitigate greenhouse gas emissions and adapt to climate change impacts. The Green Climate Fund, established under the United Nations Framework Convention on Climate Change, has allocated billions of dollars for renewable energy projects. However, critics argue that climate finance has fallen short of pledges and often takes the form of loans rather than grants, adding to debt burdens.

The employment implications of renewable energy transitions are complex. While renewable industries can create new jobs in manufacturing, installation, and maintenance, the transition may also displace workers in fossil fuel sectors. Just transition frameworks attempt to address these concerns by providing retraining programs and social support for affected workers and communities. For developing countries, renewable energy offers the prospect of building local industries and technical expertise rather than remaining dependent on imported fuels and technologies.`,
        questions: [
          { id: 14, type: "yng", text: "Solar power costs have fallen approximately 90% since 2010.", answer: "Yes" },
          { id: 15, type: "yng", text: "All developing countries import fossil fuels.", answer: "Not Given" },
          { id: 16, type: "yng", text: "Over 750 million people lack electricity access.", answer: "Yes" },
          { id: 17, type: "yng", text: "Extending centralized grids is always the cheapest option.", answer: "No" },
          { id: 18, type: "yng", text: "Climate finance has exceeded all pledges.", answer: "No" },
          { id: 19, type: "summary", text: "Complete: Developing nations can ________ directly to clean energy.", answer: "leapfrog" },
          { id: 20, type: "summary", text: "Complete: Solar home systems can be deployed rapidly and scaled ________.", answer: "incrementally" },
          { id: 21, type: "summary", text: "Complete: Climate finance often takes the form of ________ rather than grants.", answer: "loans" },
          { id: 22, type: "summary", text: "Complete: ________ transition frameworks support displaced workers.", answer: "Just" },
          { id: 23, type: "mcq", text: "The passage compares renewable energy adoption to:", options: ["A. Industrial revolution", "B. Mobile phone adoption", "C. Agricultural development", "D. Urban growth"], answer: "B" },
          { id: 24, type: "mcq", text: "Decentralized energy is particularly useful because:", options: ["A. It is always cheaper", "B. Grid infrastructure is often inadequate", "C. It produces more power", "D. It never requires maintenance"], answer: "B" },
          { id: 25, type: "mcq", text: "Barriers to adoption include:", options: ["A. Falling costs", "B. Technical capacity limits", "C. Excess financing", "D. Simple regulations"], answer: "B" },
          { id: 26, type: "mcq", text: "Renewable transitions can benefit developing countries by:", options: ["A. Increasing fuel imports", "B. Building local expertise", "C. Eliminating all jobs", "D. Requiring more fossil fuels"], answer: "B" }
        ]
      },
      {
        id: "P3",
        title: "Early Medical Discoveries and Scientific Method",
        wordCount: 840,
        text: `Medical knowledge developed slowly and unevenly across ancient civilizations, constrained by limited understanding of anatomy, physiology, and the causes of disease. Early physicians in Mesopotamia, Egypt, Greece, and China developed treatments based on careful observation of symptoms and outcomes, but their explanations for why treatments worked (or failed) were typically rooted in religious, philosophical, or supernatural frameworks rather than what we would today recognize as scientific reasoning.

The Hippocratic tradition in ancient Greece represented a significant advance toward empirical medicine. Hippocrates and his followers rejected supernatural explanations for disease, instead attributing illness to natural causes, particularly imbalances among four bodily "humors" (blood, phlegm, yellow bile, and black bile). While the humoral theory was ultimately incorrect, the Hippocratic emphasis on observation, prognosis, and careful documentation of cases established practices that would prove foundational to later medical science.

Islamic scholars preserved and extended Greek medical knowledge during the medieval period when much of Europe had lost access to classical texts. Physicians such as Ibn Sina (known in the West as Avicenna) compiled encyclopedic medical texts that synthesized Greek, Persian, and Indian medical traditions. Al-Razi (Rhazes) made important contributions to the understanding of infectious diseases, including the first clear clinical description distinguishing smallpox from measles. These works were later translated into Latin and became standard references in European medical education.

The European Renaissance and subsequent Scientific Revolution transformed medical practice through the development of new approaches to investigation. Andreas Vesalius challenged Galenic anatomical dogma through systematic human dissection, publishing detailed anatomical illustrations in 1543. William Harvey demonstrated the circulation of blood through experimental investigation in 1628, overturning the ancient belief that blood was continually produced and consumed. These advances established observation and experimentation as the foundations of medical knowledge.

The nineteenth century brought further revolutionary developments. The germ theory of disease, developed primarily through the work of Louis Pasteur and Robert Koch, finally explained the true causes of infectious diseases and enabled the development of vaccines, antiseptic surgical techniques, and eventually antibiotics. Meanwhile, the development of anesthesia made surgery safer and more humane, and advances in statistical methods allowed researchers to evaluate treatment effectiveness more rigorously.

Many early medical treatments were ineffective or actively harmful by modern standards. Bloodletting, purging, and the administration of toxic substances such as mercury persisted as common treatments well into the nineteenth century. Understanding why such ineffective treatments remained popular for so long reveals important insights about the difficulties of establishing medical knowledge in the absence of controlled experimental methods and proper understanding of placebo effects.

Despite their limitations, early medical practitioners made genuine contributions that laid groundwork for modern medicine. Their emphasis on careful observation, documentation of cases, and attempts at systematic understanding of disease established traditions of inquiry that would eventually bear fruit. The history of medicine illustrates both the difficulty of acquiring reliable knowledge about complex biological systems and the remarkable progress that becomes possible when rigorous methods of investigation are developed and applied.`,
        questions: [
          { id: 27, type: "tfng", text: "Early physicians understood the true causes of disease.", answer: "False" },
          { id: 28, type: "tfng", text: "Hippocrates explained disease through supernatural causes.", answer: "False" },
          { id: 29, type: "tfng", text: "Ibn Sina's works combined multiple medical traditions.", answer: "True" },
          { id: 30, type: "tfng", text: "Vesalius supported Galen's anatomical theories.", answer: "False" },
          { id: 31, type: "tfng", text: "The germ theory was developed primarily by Pasteur and Koch.", answer: "True" },
          { id: 32, type: "matching", text: "Described the humoral theory", answer: "Hippocrates" },
          { id: 33, type: "matching", text: "Distinguished smallpox from measles", answer: "Al-Razi" },
          { id: 34, type: "matching", text: "Published anatomical illustrations in 1543", answer: "Vesalius" },
          { id: 35, type: "matching", text: "Demonstrated blood circulation", answer: "Harvey" },
          { id: 36, type: "mcq", text: "Islamic scholars contributed to medicine by:", options: ["A. Rejecting all Greek knowledge", "B. Preserving and extending classical texts", "C. Inventing modern surgery", "D. Developing germ theory"], answer: "B" },
          { id: 37, type: "mcq", text: "The passage suggests bloodletting persisted because:", options: ["A. It was effective", "B. Controlled methods were lacking", "C. Doctors were dishonest", "D. Patients demanded it"], answer: "B" },
          { id: 38, type: "mcq", text: "The author's attitude toward early medicine is:", options: ["A. Entirely dismissive", "B. Uncritically positive", "C. Balanced and appreciative", "D. Indifferent"], answer: "C" },
          { id: 39, type: "short", text: "What four 'humors' did Hippocrates believe in? (NAME ANY TWO)", answer: "blood phlegm" },
          { id: 40, type: "short", text: "When did Harvey demonstrate blood circulation? (YEAR)", answer: "1628" }
        ]
      }
    ]
  }
];

// ============================================================
  // R4 - FOUNDATION (Band 6.0-6.5)
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
        wordCount: 870,
        text: `Online education has transformed from a niche alternative into a mainstream component of modern learning systems. What began as correspondence courses delivered through postal services has evolved into sophisticated digital platforms offering everything from brief tutorials to complete university degrees. This transformation has accelerated dramatically in recent years, reshaping expectations about how, when, and where learning can occur.

The roots of distance education extend back to the mid-nineteenth century, when universities began offering courses by mail to students who could not attend in person. These early programs served primarily working adults and those in remote locations, allowing them to pursue education while maintaining employment and family responsibilities. The model proved popular but faced inherent limitations: communication between students and instructors was slow, and the lack of real-time interaction made certain subjects difficult to teach effectively.

The development of broadcast media introduced new possibilities. Educational radio programs emerged in the 1920s, followed by instructional television in subsequent decades. The Open University, established in the United Kingdom in 1969, pioneered the combination of broadcast lectures with printed materials and periodic in-person sessions, demonstrating that distance education could achieve academic credibility comparable to traditional universities.

The internet revolution fundamentally altered these possibilities. Early online courses in the 1990s often consisted of little more than text documents and email communication. However, increasing bandwidth, improving video technology, and more sophisticated platforms gradually enabled richer educational experiences. Discussion forums allowed asynchronous interaction among students across time zones. Video conferencing brought real-time communication to distance learning. Learning management systems provided centralized access to materials, assignments, and grades.

The concept of Massive Open Online Courses, or MOOCs, emerged around 2012, attracting global attention and significant investment. Platforms such as Coursera, edX, and Udacity offered courses from prestigious universities to anyone with internet access, often at no cost. Initial enthusiasm was enormous, with some predicting that online education would revolutionize or even replace traditional higher education. Enrollment numbers reached into the millions for popular courses.

However, early MOOC experiences revealed significant challenges. Completion rates proved disappointingly low, often below ten percent. Students who lacked strong self-discipline or prior educational background struggled without the structure and support of traditional classrooms. Assessment remained problematic, with concerns about academic integrity in unsupervised online examinations. The promise of credentials that employers would value equally to traditional degrees remained largely unfulfilled.

Despite these challenges, online education has continued to expand and mature. Many traditional universities now offer hybrid programs combining online and in-person elements. Corporate training has increasingly moved online, reducing costs while improving consistency and accessibility. The global pandemic of 2020 forced rapid adoption of online learning across all educational levels, demonstrating both its potential and its limitations on an unprecedented scale.

The future of online education likely involves continued integration with traditional approaches rather than complete replacement. Technology continues to improve, with artificial intelligence offering possibilities for personalized instruction at scale. Yet the social dimensions of education—the relationships among students and between students and teachers—remain difficult to replicate fully in digital environments. The most effective educational approaches may ultimately combine the flexibility and accessibility of online learning with the engagement and community of in-person experiences.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. The transformation of distance learning", "ii. Challenges of online assessment", "iii. Corporate training online", "iv. The future of MOOCs"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Modern video technology", "ii. Early correspondence education", "iii. Internet bandwidth improvements", "iv. University credibility issues"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. The Open University model", "ii. Email communication", "iii. Student completion rates", "iv. Artificial intelligence"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. The pandemic effect", "ii. Corporate training", "iii. Internet-enabled learning evolution", "iv. Discussion forums"], answer: "iii" },
          { id: 5, type: "tfng", text: "Correspondence courses began in the twentieth century.", answer: "False" },
          { id: 6, type: "tfng", text: "The Open University was established in the United States.", answer: "False" },
          { id: 7, type: "tfng", text: "Early MOOCs attracted millions of enrollments.", answer: "True" },
          { id: 8, type: "tfng", text: "MOOC completion rates typically exceeded fifty percent.", answer: "False" },
          { id: 9, type: "tfng", text: "The 2020 pandemic slowed the adoption of online learning.", answer: "False" },
          { id: 10, type: "short", text: "When did educational radio programs emerge? (DECADE)", answer: "1920s" },
          { id: 11, type: "short", text: "What is the abbreviation for Massive Open Online Courses?", answer: "MOOCs" },
          { id: 12, type: "short", text: "What type of rates were disappointingly low for MOOCs? (ONE WORD)", answer: "completion" },
          { id: 13, type: "short", text: "What technology offers possibilities for personalized instruction? (TWO WORDS)", answer: "artificial intelligence" }
        ]
      },
      {
        id: "P2",
        title: "Animal Migration Patterns",
        wordCount: 840,
        text: `Each year, billions of animals undertake remarkable journeys across the planet, traveling thousands of kilometers in search of food, breeding grounds, or favorable climates. These migrations represent some of the most impressive feats of navigation and endurance in the natural world, yet many aspects of migratory behavior remain poorly understood despite decades of scientific study.

Migration has evolved independently in numerous animal groups, suggesting that it offers significant survival advantages under certain conditions. Birds are perhaps the most familiar migrants, with species like the Arctic tern traveling from pole to pole, covering distances exceeding 70,000 kilometers annually. However, migration is also common among mammals, fish, insects, and even some reptiles. The wildebeest herds of East Africa, salmon returning to their natal streams, and monarch butterflies journeying to Mexican forests all represent distinct solutions to similar environmental challenges.

The triggers for migration vary among species and populations. Many birds respond to changing day length, which provides a reliable seasonal signal that is independent of variable weather conditions. Other species appear to respond to temperature changes, food availability, or internal biological clocks. Some migrations occur on annual cycles, while others span multiple generations; monarch butterflies, for example, complete their journey over three to four generations, with no individual making the entire round trip.

Navigation during migration presents a substantial biological puzzle. Research has revealed that animals employ multiple navigational mechanisms, often in combination. Many species can detect the Earth's magnetic field, using it as a compass to maintain directional heading. The sun and stars provide celestial cues for orientation. Olfactory navigation—following scent gradients—has been demonstrated in salmon and some birds. Landmarks and memory play roles in species that follow established routes. The integration of these various cues into coherent navigation remains an active area of scientific investigation.

Human activities have increasingly disrupted traditional migration patterns. Habitat loss along migration routes eliminates crucial stopover sites where animals rest and refuel during their journeys. Climate change is altering the timing of seasonal events, potentially creating mismatches between migrants and the food resources they depend upon. Light pollution confuses nocturnal migrants that navigate by stars. Structures such as wind turbines, communication towers, and glass buildings cause millions of bird deaths annually.

Conservation of migratory species presents unique challenges because protection must extend across entire migratory routes, which often span multiple countries and continents. International agreements such as the Convention on Migratory Species attempt to coordinate protection efforts, but implementation varies widely among signatory nations. Identifying critical habitats along migration corridors and ensuring their protection requires extensive research and international cooperation.

Technological advances have revolutionized the study of migration in recent decades. Satellite tracking devices small enough to attach to birds and even large insects now allow researchers to follow individual animals throughout their journeys. DNA analysis helps identify population structure and connectivity among geographically separated groups. Radar systems detect mass movements of migrants invisible to direct observation. These tools have revealed previously unknown migration routes and stopover sites while highlighting the vulnerability of migratory populations to environmental change.

Understanding migration remains important not only for conservation but also for addressing broader questions about animal cognition and evolution. How do young animals that have never made the journey know where to go? How do populations adapt when traditional routes become unsuitable? The study of migration continues to yield insights into navigation, physiology, and the remarkable capabilities of animal nervous systems.`,
        questions: [
          { id: 14, type: "yng", text: "The Arctic tern travels further than any other migratory bird.", answer: "Not Given" },
          { id: 15, type: "yng", text: "Monarch butterflies complete their migration within a single generation.", answer: "No" },
          { id: 16, type: "yng", text: "Animals can use the Earth's magnetic field for navigation.", answer: "Yes" },
          { id: 17, type: "yng", text: "Climate change affects the timing of migration.", answer: "Yes" },
          { id: 18, type: "yng", text: "All signatory nations implement the Convention on Migratory Species equally.", answer: "No" },
          { id: 19, type: "mcq", text: "What triggers migration in many bird species?", options: ["A. Temperature alone", "B. Food availability", "C. Changing day length", "D. Wind patterns"], answer: "C" },
          { id: 20, type: "mcq", text: "How do salmon navigate during migration?", options: ["A. Following other fish", "B. Using olfactory cues", "C. Detecting magnetic fields only", "D. Following warm currents"], answer: "B" },
          { id: 21, type: "mcq", text: "What effect does light pollution have on migrants?", options: ["A. Improves navigation", "B. Confuses nocturnal migrants", "C. Increases speed", "D. Attracts predators"], answer: "B" },
          { id: 22, type: "mcq", text: "Why is protecting migratory species challenging?", options: ["A. They move too fast to track", "B. Protection must span multiple countries", "C. They are too numerous", "D. Scientists disagree on methods"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Stopover sites allow animals to rest and ________ during journeys.", answer: "refuel" },
          { id: 24, type: "summary", text: "Complete: Climate change creates ________ between migrants and food resources.", answer: "mismatches" },
          { id: 25, type: "summary", text: "Complete: Satellite tracking devices can now follow ________ animals.", answer: "individual" },
          { id: 26, type: "summary", text: "Complete: DNA analysis identifies population structure and ________ among groups.", answer: "connectivity" }
        ]
      },
      {
        id: "P3",
        title: "Transportation and Economic Development",
        wordCount: 880,
        text: `The relationship between transportation infrastructure and economic development has been recognized since ancient times. Roman roads facilitated trade and administration across a vast empire. Canal systems in eighteenth-century Britain enabled the movement of heavy goods that would have been impractical by road. Railways transformed nineteenth-century economies by dramatically reducing transport costs and opening new markets. Today, this relationship remains central to economic policy, though its nature has grown more complex as economies have evolved.

Transportation infrastructure reduces the costs of moving goods and people between locations. Lower transport costs expand the geographic reach of markets, allowing producers to sell to more distant customers while enabling consumers to access a wider range of products. This expansion of market size creates opportunities for specialization and economies of scale that can increase productivity and economic output. Regions with poor transportation connections, by contrast, tend to remain economically isolated, with limited access to external markets and suppliers.

The economic impacts of transportation investment extend beyond direct cost reductions. Improved transportation increases land values by making locations more accessible and therefore more desirable for residential and commercial development. It influences where businesses choose to locate, with transportation hubs attracting firms that depend on efficient logistics. Labor markets expand as workers can commute from greater distances, potentially improving the match between workers' skills and available jobs.

However, the relationship between transportation and economic development is not automatic or uniformly positive. Infrastructure investment alone cannot guarantee economic growth; other factors such as education, institutional quality, and existing economic conditions shape how effectively improved transportation translates into development. Some investments may primarily benefit already-prosperous regions or sectors rather than spreading benefits broadly. Large infrastructure projects can also produce negative consequences, including environmental damage, displacement of communities, and increased congestion in areas that attract additional traffic.

The economic case for transportation investment requires careful analysis of both costs and benefits. Construction and maintenance of infrastructure require substantial financial resources that could alternatively support other public investments. Projects often cost more and take longer than initially projected, while expected benefits may fail to materialize as predicted. Political considerations can distort investment decisions, directing resources to projects with questionable economic justification while more beneficial alternatives are neglected.

Different modes of transportation serve different economic functions. Road networks provide flexibility, allowing door-to-door movement without fixed routes or schedules. Rail systems excel at moving large volumes over fixed corridors efficiently but lack flexibility. Water transport remains the most cost-effective method for moving heavy bulk commodities over long distances. Air transport enables rapid movement of people and high-value goods across continents but at considerably higher costs. Effective transportation systems typically integrate multiple modes, allowing each to serve its comparative advantage.

Technological change continues to reshape transportation economics. Containerization revolutionized shipping in the mid-twentieth century, dramatically reducing loading times and costs while enabling seamless transfer between ships, trains, and trucks. Digital technologies now enable more efficient routing, tracking, and logistics management. Electric and autonomous vehicles promise further transformations, potentially reducing operating costs while changing the economics of both passenger and freight transportation.

Developing countries face particular challenges in transportation infrastructure. Many lack basic road and rail networks necessary to connect rural areas to urban markets. Limited financial resources constrain investment capacity while institutional weaknesses may lead to poor project selection and implementation. International development organizations and foreign investment can help address these gaps, though concerns about debt sustainability and appropriate technology choices complicate such assistance. Building effective transportation systems remains essential for economic development but requires careful attention to local conditions and priorities.`,
        questions: [
          { id: 27, type: "tfng", text: "Roman roads were primarily built for military purposes.", answer: "Not Given" },
          { id: 28, type: "tfng", text: "Lower transport costs expand market reach for producers.", answer: "True" },
          { id: 29, type: "tfng", text: "Improved transportation always decreases land values.", answer: "False" },
          { id: 30, type: "tfng", text: "Infrastructure investment alone guarantees economic growth.", answer: "False" },
          { id: 31, type: "tfng", text: "Water transport is the most cost-effective for heavy bulk commodities.", answer: "True" },
          { id: 32, type: "matching", text: "Provides door-to-door flexibility", answer: "road networks" },
          { id: 33, type: "matching", text: "Excels at moving large volumes over fixed corridors", answer: "rail systems" },
          { id: 34, type: "matching", text: "Revolutionized shipping in the mid-twentieth century", answer: "containerization" },
          { id: 35, type: "mcq", text: "What can infrastructure investment produce according to the passage?", options: ["A. Only positive outcomes", "B. Both positive and negative consequences", "C. Mainly environmental benefits", "D. Automatic economic growth"], answer: "B" },
          { id: 36, type: "mcq", text: "Why might political considerations distort investment decisions?", options: ["A. Politicians prefer road projects", "B. Resources go to projects with questionable justification", "C. Citizens demand more airports", "D. Engineers make poor recommendations"], answer: "B" },
          { id: 37, type: "mcq", text: "What challenge do developing countries face?", options: ["A. Too much foreign investment", "B. Excessive road networks", "C. Limited financial resources", "D. Over-reliance on air transport"], answer: "C" },
          { id: 38, type: "mcq", text: "What does effective transportation typically require?", options: ["A. Focus on one mode only", "B. Integration of multiple modes", "C. Elimination of water transport", "D. Reduction of rail systems"], answer: "B" },
          { id: 39, type: "short", text: "What type of transport enables rapid movement across continents? (ONE WORD)", answer: "air" },
          { id: 40, type: "short", text: "What technologies enable more efficient routing and logistics? (ONE WORD)", answer: "digital" }
        ]
      }
    ]
  },

  // ============================================================
  // R5 - FOUNDATION (Band 6.0-6.5)
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
        title: "The History of Paper Making",
        wordCount: 860,
        text: `Paper is so ubiquitous in modern life that its revolutionary significance is easily overlooked. Before its invention, writing depended on materials that were expensive, fragile, or difficult to produce in quantity. Clay tablets, though durable, were heavy and cumbersome. Papyrus, made from reeds growing along the Nile, was limited in geographic availability. Parchment, prepared from animal skins, required extensive processing and remained costly. The development of paper transformed the possibilities for recording and transmitting information, ultimately helping to reshape human civilization.

The invention of paper is traditionally attributed to Cai Lun, a Chinese court official, in 105 CE. However, archaeological evidence suggests that papermaking techniques existed in China at least two centuries earlier. Early Chinese paper was made by pulping plant fibers—typically from hemp, bark, or old rags—mixing the pulp with water, spreading the mixture over a fine screen, and allowing it to dry into sheets. This basic process, though refined over millennia, remains fundamentally similar to papermaking today.

For centuries, papermaking remained a closely guarded Chinese technology. The method gradually spread along the Silk Road trading routes, reaching the Arab world in the eighth century after the capture of Chinese papermakers following a battle in Central Asia. Arab craftsmen improved upon Chinese techniques, introducing new materials and developing smoother, more uniform sheets suitable for calligraphy. By the twelfth century, paper mills had been established in Spain and Italy, bringing papermaking to Europe.

The arrival of paper in Europe coincided with other developments that amplified its impact. The printing press, developed by Johannes Gutenberg around 1450, required an affordable writing surface to realize its revolutionary potential. Paper provided exactly that. The combination of movable type printing and relatively inexpensive paper enabled the mass production of books for the first time in history. Literacy rates increased, knowledge spread more rapidly, and the intellectual transformations of the Renaissance and Reformation accelerated.

The industrial revolution brought mechanization to papermaking. Until the late eighteenth century, paper was made by hand, sheet by sheet, limiting production capacity. The invention of the Fourdrinier machine in 1799 enabled continuous production of paper in long rolls, dramatically increasing output while reducing costs. The development of wood pulp as a raw material in the mid-nineteenth century freed papermaking from dependence on limited supplies of rags and other traditional fiber sources.

Modern papermaking is a sophisticated industrial process. Wood chips are converted to pulp through mechanical grinding or chemical treatment that separates cellulose fibers from lignin and other components. The pulp is bleached, mixed with water and additives, and spread onto a moving screen where water drains away. The resulting mat passes through heated rollers that press and dry it into finished paper. Large mills produce hundreds of tons daily, supplying demands ranging from newspapers and packaging to specialized papers for printing currency or filtering laboratory samples.

Environmental concerns have increasingly shaped the paper industry. Paper production consumes substantial quantities of water and energy while generating various pollutants. The industry's dependence on wood has contributed to deforestation in some regions. In response, recycling programs have expanded, with recycled fiber now constituting a significant portion of paper production in many countries. Mills have adopted cleaner production technologies and more sustainable forestry practices. The development of alternative fibers from agricultural residues and non-wood plants offers additional possibilities for reducing environmental impacts.

The digital revolution has reduced demand for some traditional paper uses while creating others. Electronic communication has replaced much paper correspondence, and many newspapers and publications have migrated online. Yet packaging demand has grown with the expansion of e-commerce, and paper remains valued for applications where digital alternatives prove inadequate. Despite predictions of a paperless future, global paper production continues at substantial levels, though the mix of products and production methods continues to evolve.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Writing materials before paper", "ii. Modern papermaking processes", "iii. Environmental concerns", "iv. Chinese technology secrets"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Arab improvements", "ii. The origins of paper in China", "iii. European paper mills", "iv. Industrial production"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. The spread of papermaking knowledge", "ii. Digital alternatives to paper", "iii. Gutenberg's invention", "iv. Recycling programs"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Paper and printing's combined impact", "ii. Wood pulp development", "iii. Water consumption", "iv. Alternative fibers"], answer: "i" },
          { id: 5, type: "tfng", text: "Papyrus was available throughout the ancient world.", answer: "False" },
          { id: 6, type: "tfng", text: "Paper was invented before 105 CE.", answer: "True" },
          { id: 7, type: "tfng", text: "Arab craftsmen learned papermaking through trade agreements.", answer: "False" },
          { id: 8, type: "tfng", text: "The Fourdrinier machine enabled continuous paper production.", answer: "True" },
          { id: 9, type: "tfng", text: "Global paper production has stopped due to digital technology.", answer: "False" },
          { id: 10, type: "short", text: "Who is traditionally credited with inventing paper? (TWO WORDS)", answer: "Cai Lun" },
          { id: 11, type: "short", text: "What trading routes spread papermaking westward? (TWO WORDS)", answer: "Silk Road" },
          { id: 12, type: "short", text: "When was the Fourdrinier machine invented? (YEAR)", answer: "1799" },
          { id: 13, type: "short", text: "What industry development has increased packaging demand? (ONE WORD)", answer: "e-commerce" }
        ]
      },
      {
        id: "P2",
        title: "Tourism and Economic Development",
        wordCount: 830,
        text: `Tourism has become one of the world's largest industries, contributing significantly to economic output and employment in destinations ranging from remote Pacific islands to major metropolitan centers. International tourist arrivals have grown from approximately 25 million in 1950 to well over one billion annually in recent decades. This remarkable expansion has generated both enthusiasm about tourism's developmental potential and concerns about its social and environmental costs.

The economic benefits of tourism are substantial and varied. Visitors spend money on accommodation, food, transportation, entertainment, and souvenirs, creating demand that supports businesses and generates employment. Tourism is particularly valuable as an export industry that brings foreign currency into local economies without requiring goods to be shipped abroad. Many developing countries have embraced tourism as a development strategy, investing in infrastructure and marketing to attract international visitors.

Employment creation represents one of tourism's most visible economic contributions. Hotels, restaurants, tour operators, and transportation companies directly employ millions of workers worldwide. Additional jobs are created indirectly in sectors supplying goods and services to tourism businesses, from farmers providing food to construction workers building facilities. Tourism employment often provides opportunities for workers with limited formal education, though such positions may offer relatively low wages and unstable working conditions.

However, the economic benefits of tourism are not always distributed equitably. Large international hotel chains and tour operators may capture much of the revenue from tourism, with limited spending reaching local communities. In some destinations, tourism development has increased property values and living costs, making housing unaffordable for local residents. Seasonal fluctuations in visitor numbers can create unstable income patterns, with workers facing unemployment during off-peak periods.

Tourism's economic vulnerability was dramatically illustrated during the global pandemic that began in 2020. International travel virtually ceased for extended periods, devastating economies heavily dependent on visitor spending. Island nations and countries where tourism constitutes a large share of economic output suffered particularly severe downturns. This experience highlighted the risks of excessive dependence on tourism and prompted renewed discussion of economic diversification.

Environmental impacts present additional concerns. Tourism development can damage natural environments that attracted visitors in the first place, through construction in sensitive areas, pollution, or overuse of limited resources such as fresh water. The transportation of tourists, particularly by air, contributes significantly to carbon emissions and climate change. Popular destinations have experienced overcrowding that diminishes both visitor experience and residents' quality of life.

Sustainable tourism approaches attempt to maximize benefits while minimizing negative impacts. Ecotourism emphasizes small-scale, low-impact activities that support conservation while providing economic benefits to local communities. Community-based tourism involves local residents in planning and operating tourism activities, increasing their share of economic benefits. Certification programs and destination management strategies aim to establish standards and practices that balance economic, social, and environmental considerations.

The future of tourism will likely involve continued growth alongside increasing attention to sustainability. Emerging destinations will compete for visitors while established ones work to manage the challenges of popularity. Technology will reshape how tourism is marketed, booked, and experienced. The fundamental appeal of travel—the desire to experience new places, cultures, and activities—shows no signs of diminishing, ensuring that tourism will remain an important economic force while requiring ongoing efforts to address its complexities.`,
        questions: [
          { id: 14, type: "yng", text: "International tourist arrivals exceeded one billion annually before 2000.", answer: "No" },
          { id: 15, type: "yng", text: "Tourism creates more jobs than manufacturing globally.", answer: "Not Given" },
          { id: 16, type: "yng", text: "Large international companies may capture much tourism revenue.", answer: "Yes" },
          { id: 17, type: "yng", text: "The 2020 pandemic severely affected tourism-dependent economies.", answer: "Yes" },
          { id: 18, type: "yng", text: "Ecotourism always eliminates negative environmental impacts.", answer: "Not Given" },
          { id: 19, type: "mcq", text: "Why is tourism valuable as an export industry?", options: ["A. It creates manufacturing jobs", "B. It brings foreign currency without shipping goods", "C. It reduces transportation costs", "D. It requires minimal investment"], answer: "B" },
          { id: 20, type: "mcq", text: "What can happen to local residents in tourism areas?", options: ["A. Housing becomes more affordable", "B. Employment becomes more stable", "C. Housing may become unaffordable", "D. Property values decrease"], answer: "C" },
          { id: 21, type: "mcq", text: "What did the 2020 pandemic highlight about tourism?", options: ["A. Its environmental benefits", "B. Its stability as an industry", "C. Risks of excessive dependence on it", "D. Its minimal economic impact"], answer: "C" },
          { id: 22, type: "mcq", text: "What does community-based tourism aim to increase?", options: ["A. International hotel presence", "B. Local share of economic benefits", "C. Air transportation", "D. Seasonal fluctuations"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Tourism employment may offer relatively low wages and ________ conditions.", answer: "unstable" },
          { id: 24, type: "summary", text: "Complete: Seasonal fluctuations create unstable ________ patterns.", answer: "income" },
          { id: 25, type: "summary", text: "Complete: Air transportation contributes to carbon emissions and climate ________.", answer: "change" },
          { id: 26, type: "summary", text: "Complete: ________ programs aim to establish tourism standards.", answer: "certification" }
        ]
      },
      {
        id: "P3",
        title: "The Psychology of Habit Formation",
        wordCount: 870,
        text: `Habits shape human behavior more profoundly than most people realize. Studies suggest that approximately forty percent of daily actions are performed habitually, without conscious deliberation. Understanding how habits form and change has become a significant focus of psychological research, with implications for everything from personal health and productivity to marketing and public policy.

The scientific study of habits dates to the early twentieth century, when psychologists began documenting how repetition creates automatic behavioral patterns. William James, in his influential Principles of Psychology, described habits as the "enormous fly-wheel of society," arguing that they conserve mental energy by freeing the mind from attending to routine actions. This efficiency allows conscious attention to focus on novel situations and complex decisions while familiar activities proceed automatically.

Contemporary research has refined understanding of habit formation considerably. Habits are now understood to consist of three components: a cue that triggers the behavior, a routine that constitutes the behavior itself, and a reward that reinforces the association between cue and routine. This "habit loop," as it has been termed, explains why habits can be remarkably persistent: once established, the cue automatically activates the routine with minimal conscious involvement.

The neurological basis of habits involves distinct brain systems. Novel, deliberate actions engage the prefrontal cortex, the region associated with planning and conscious decision-making. As behaviors become habitual through repetition, control shifts to the basal ganglia, a deeper brain structure involved in automatic processes. This neurological shift explains why habits feel effortless and why breaking them can be surprisingly difficult—doing so requires reengaging conscious control systems that have essentially delegated responsibility.

Research on habit formation has identified several factors that influence how quickly habits develop. Consistency appears crucial: behaviors performed at the same time, in the same place, or following the same preceding action become habitual more readily than those occurring irregularly. The complexity of the behavior matters as well, with simple actions becoming automatic more quickly than complicated sequences. Early studies suggested habits form in approximately twenty-one days, but more recent research indicates considerable variation, with some habits requiring several months to become fully automatic.

Changing existing habits poses particular challenges. Simply deciding to stop a habitual behavior is often ineffective because the habit loop remains intact: encountering the cue continues to trigger the urge to perform the routine. More successful approaches typically involve either avoiding the cue, substituting an alternative routine that provides similar rewards, or changing the reward expectations associated with the behavior. Environmental modifications that remove cues or make habitual behaviors more difficult can be particularly effective.

The understanding of habits has been applied extensively in health behavior change. Programs addressing smoking cessation, weight management, and exercise adherence often incorporate habit-based strategies. The goal is frequently not just to change specific behaviors but to establish new automatic patterns that require minimal ongoing willpower to maintain. This approach recognizes that sustainable behavior change depends on making healthy choices feel as natural and effortless as the unhealthy alternatives they replace.

Commercial applications of habit research have proliferated. Companies design products and services to create user habits, recognizing that habitual customers provide reliable revenue with minimal marketing costs. Mobile applications incorporate features intended to establish habitual usage patterns. The ethics of deliberately engineering consumer habits has attracted criticism, particularly when products such as social media or video games exploit psychological vulnerabilities to create compulsive usage patterns that users themselves find problematic.

Public policy increasingly considers habits as well. Default options in retirement savings plans, food labeling and placement in cafeterias, and urban design that facilitates walking all reflect insights from habit research. These "nudge" approaches aim to make beneficial choices easier and more automatic rather than relying solely on information and conscious decision-making that may be insufficient to change entrenched behavioral patterns.`,
        questions: [
          { id: 27, type: "tfng", text: "About forty percent of daily actions are performed habitually.", answer: "True" },
          { id: 28, type: "tfng", text: "William James believed habits waste mental energy.", answer: "False" },
          { id: 29, type: "tfng", text: "The habit loop consists of cue, routine, and reward.", answer: "True" },
          { id: 30, type: "tfng", text: "Habits always form within twenty-one days.", answer: "False" },
          { id: 31, type: "tfng", text: "Simply deciding to stop a habit is usually highly effective.", answer: "False" },
          { id: 32, type: "matching", text: "Associated with planning and conscious decision-making", answer: "prefrontal cortex" },
          { id: 33, type: "matching", text: "Involved in automatic processes", answer: "basal ganglia" },
          { id: 34, type: "matching", text: "Involves options designed to make beneficial choices easier", answer: "nudge approaches" },
          { id: 35, type: "mcq", text: "What makes behaviors become habitual more readily?", options: ["A. Performing them at random times", "B. Performing them consistently", "C. Making them complex", "D. Avoiding rewards"], answer: "B" },
          { id: 36, type: "mcq", text: "Why is breaking habits difficult?", options: ["A. The brain lacks flexibility", "B. Habits are genetically determined", "C. It requires reengaging conscious control", "D. Rewards are always physical"], answer: "C" },
          { id: 37, type: "mcq", text: "What criticism has been made of commercial habit applications?", options: ["A. They are too expensive", "B. They don't work", "C. They may exploit psychological vulnerabilities", "D. They require too much research"], answer: "C" },
          { id: 38, type: "mcq", text: "What do health behavior change programs aim to establish?", options: ["A. Strict rules", "B. New automatic patterns", "C. Conscious willpower", "D. Information-based decisions"], answer: "B" },
          { id: 39, type: "short", text: "What percentage of daily actions are performed habitually? (NUMBER)", answer: "forty" },
          { id: 40, type: "short", text: "Who wrote Principles of Psychology? (TWO WORDS)", answer: "William James" }
        ]
      }
    ]
  },

  // ============================================================
  // R6 - FOUNDATION (Band 6.5)
  // ============================================================
  {
    id: "R6",
    level: "Foundation",
    bandTarget: "6.5",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "The History of Printing Technology",
        wordCount: 850,
        text: `Before the invention of printing, the reproduction of written texts was a laborious manual process. Scribes copied manuscripts by hand, typically working in monasteries where religious texts received the most attention. A single book might require months or even years to produce, making written materials extremely expensive and accessible only to wealthy individuals, religious institutions, and royal courts. Knowledge transmission remained limited by the physical constraints of handwritten copying.

Several civilizations developed early printing techniques before the breakthrough that would transform European society. The Chinese invented woodblock printing by the seventh century, carving entire pages into wooden blocks that could be inked and pressed onto paper. This method enabled the production of multiple copies but required enormous effort to carve each page individually. In Korea, movable metal type was developed in the thirteenth century, a significant advancement that nonetheless remained relatively limited in its impact on broader society.

The development of the printing press with movable type by Johannes Gutenberg in Germany around 1450 represents one of history's most consequential technological innovations. Gutenberg's system combined several elements: individual metal letters that could be arranged into pages and reused, a press mechanism adapted from those used in wine and olive oil production, and an oil-based ink that adhered properly to metal type and transferred cleanly to paper. This combination enabled the relatively rapid production of multiple identical copies of texts.

The effects of Gutenberg's invention were profound and far-reaching. Book production increased dramatically while costs declined, making written materials accessible to a much broader audience. Scholars estimate that more books were produced in the fifty years following Gutenberg's invention than in the previous thousand years of European history. Literacy rates increased as books became more affordable and education expanded. Ideas could now spread more rapidly across geographic distances, accelerating intellectual exchange.

The printing press played a crucial role in several major historical developments. The Protestant Reformation would likely have remained a local phenomenon without the ability to mass-produce pamphlets and translations of religious texts. Scientific knowledge accumulated more effectively when findings could be widely distributed and built upon by researchers across Europe. The Enlightenment's philosophical and political ideas reached audiences that would have been impossible to address through manuscript circulation alone.

Printing technology continued to evolve over subsequent centuries. The development of stereotyping in the eighteenth century enabled plates to be cast from set type, facilitating longer print runs and reprints without resetting. Steam-powered presses in the nineteenth century dramatically increased production speed, while the linotype machine, invented in 1884, mechanized the typesetting process itself. These innovations supported the rise of mass-circulation newspapers and the expansion of publishing that characterized industrial-era society.

The twentieth century brought further transformations. Offset lithography, which transfers images from plates to rubber cylinders before printing, became dominant for commercial printing. Phototypesetting replaced mechanical typesetting, and eventually digital technologies transformed the entire production process. Desktop publishing, emerging in the 1980s, placed professional-quality printing capabilities within reach of individuals and small organizations. The internet and digital distribution have more recently begun displacing print for many purposes, yet printing remains essential for packaging, marketing materials, and publications where physical format offers advantages over digital alternatives.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Gutenberg's innovation", "ii. Manual text reproduction", "iii. Chinese woodblock printing", "iv. The Protestant Reformation"], answer: "ii" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Korean movable type", "ii. Early printing techniques before Gutenberg", "iii. Steam-powered presses", "iv. Desktop publishing"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Gutenberg's printing system", "ii. Offset lithography", "iii. Monastery scriptoriums", "iv. Digital transformation"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Linotype machines", "ii. Scientific limitations", "iii. Dramatic effects of printing", "iv. Religious restrictions"], answer: "iii" },
          { id: 5, type: "tfng", text: "Chinese woodblock printing was developed after Gutenberg's press.", answer: "False" },
          { id: 6, type: "tfng", text: "Gutenberg adapted press mechanisms from wine production.", answer: "True" },
          { id: 7, type: "tfng", text: "More books were produced in fifty years after Gutenberg than the previous thousand years.", answer: "True" },
          { id: 8, type: "tfng", text: "The linotype machine was invented in the eighteenth century.", answer: "False" },
          { id: 9, type: "tfng", text: "Digital technologies have completely replaced all printing.", answer: "False" },
          { id: 10, type: "short", text: "Where did scribes typically work? (ONE WORD)", answer: "monasteries" },
          { id: 11, type: "short", text: "When did Gutenberg develop his printing press? (APPROXIMATE YEAR)", answer: "1450" },
          { id: 12, type: "short", text: "What type of ink did Gutenberg's system use? (TWO WORDS)", answer: "oil-based" },
          { id: 13, type: "short", text: "When did desktop publishing emerge? (DECADE)", answer: "1980s" }
        ]
      },
      {
        id: "P2",
        title: "Urban Housing Challenges",
        wordCount: 820,
        text: `Cities around the world face mounting challenges in providing adequate housing for their residents. Rapid urbanization has concentrated growing populations in metropolitan areas where housing supply often struggles to keep pace with demand. The consequences include rising costs, declining affordability, and growing populations living in substandard conditions. Addressing urban housing challenges has become a critical priority for governments, planners, and communities worldwide.

The fundamental dynamic underlying urban housing challenges is straightforward: when more people seek housing in an area than the number of available units, prices increase. Geographic constraints limit expansion in many cities, whether mountains, water bodies, or protected lands. Regulatory restrictions, including zoning laws and building codes, further constrain supply even where physical expansion might be possible. Infrastructure limitations—the capacity of transportation, water, and utilities systems—impose additional constraints on how quickly and where housing can be built.

Rising housing costs affect different populations differently but create particular hardship for lower-income residents. As a general rule, housing is considered affordable when it consumes no more than thirty percent of household income. In many expensive cities, lower-income households spend fifty percent or more of their earnings on rent, leaving insufficient resources for food, healthcare, transportation, and other necessities. This "cost burden" can force difficult tradeoffs and contribute to financial instability.

When formal housing becomes unaffordable, residents turn to alternative arrangements. Overcrowding represents one response, with multiple families or generations sharing units designed for fewer occupants. Informal settlements—often called slums, favelas, or shanty towns—house substantial populations in many developing-world cities, typically lacking adequate sanitation, utilities, and security of tenure. Even in wealthy countries, homelessness has increased in cities where housing costs have outpaced incomes, creating visible populations living in shelters, vehicles, or on streets.

Policy approaches to housing affordability vary considerably. Some governments provide public housing directly, constructing and managing residential buildings available to eligible residents at below-market rents. Others offer subsidies to help lower-income households afford private-market housing, such as housing vouchers that cover a portion of rent. Rent control regulations limit how much landlords can charge or increase rents, though economists debate whether such controls ultimately help or harm housing availability. Inclusionary zoning requires developers to include affordable units in new construction projects.

Supply-side approaches aim to increase overall housing production, on the theory that expanded supply will moderate prices. These include streamlining approval processes, reducing regulatory requirements, allowing higher-density construction, and investing in infrastructure that enables development in new areas. However, market-rate construction alone typically produces housing that remains unaffordable for lower-income residents, at least initially. Whether new supply eventually "filters down" to become affordable as it ages remains contested.

The challenge of urban housing connects to broader questions about how cities develop and whom they serve. Housing represents most households' largest expense and strongly influences access to employment, education, and amenities. Where people can afford to live shapes patterns of opportunity and inequality that affect entire metropolitan regions. Finding sustainable solutions to housing challenges requires balancing multiple objectives—affordability, quality, neighborhood stability, environmental sustainability, and property rights—that often exist in tension.`,
        questions: [
          { id: 14, type: "yng", text: "Geographic constraints affect all cities equally.", answer: "No" },
          { id: 15, type: "yng", text: "Housing is considered affordable at thirty percent of income or less.", answer: "Yes" },
          { id: 16, type: "yng", text: "Informal settlements exist only in developing countries.", answer: "No" },
          { id: 17, type: "yng", text: "Economists unanimously support rent control.", answer: "No" },
          { id: 18, type: "yng", text: "New market-rate construction immediately helps lowest-income residents.", answer: "No" },
          { id: 19, type: "mcq", text: "What happens when housing demand exceeds supply?", options: ["A. Prices decrease", "B. Prices increase", "C. Supply automatically adjusts", "D. Government intervenes"], answer: "B" },
          { id: 20, type: "mcq", text: "What is a 'cost burden' in housing?", options: ["A. Construction expenses", "B. Spending too much income on rent", "C. Property taxes", "D. Maintenance costs"], answer: "B" },
          { id: 21, type: "mcq", text: "What do housing vouchers do?", options: ["A. Provide free housing", "B. Cover a portion of rent", "C. Guarantee home ownership", "D. Reduce property taxes"], answer: "B" },
          { id: 22, type: "mcq", text: "What does inclusionary zoning require?", options: ["A. Higher density only", "B. Affordable units in new construction", "C. Public housing construction", "D. Rent control"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Infrastructure limitations include transportation, water, and ________ systems.", answer: "utilities" },
          { id: 24, type: "summary", text: "Complete: Informal settlements often lack adequate ________ and utilities.", answer: "sanitation" },
          { id: 25, type: "summary", text: "Complete: Supply-side approaches aim to increase overall housing ________.", answer: "production" },
          { id: 26, type: "summary", text: "Complete: Housing strongly influences access to employment, education, and ________.", answer: "amenities" }
        ]
      },
      {
        id: "P3",
        title: "Decision-Making in Organizations",
        wordCount: 860,
        text: `Organizations of all types—businesses, governments, nonprofits, and community groups—must make decisions that allocate resources, set directions, and respond to challenges. The quality of these decisions significantly influences organizational performance, yet achieving consistently good decision-making proves surprisingly difficult. Understanding the factors that affect organizational decisions has become a major focus of management research and practice.

Classical models of decision-making assumed that managers could identify problems clearly, generate comprehensive alternative solutions, evaluate all options against consistent criteria, and select the optimal choice. This "rational actor" model provided a logical framework for understanding how decisions should be made but bore limited resemblance to how decisions actually occur in complex organizations. Real-world decision-making operates under constraints that the classical model largely ignored.

Herbert Simon, whose work earned a Nobel Prize, introduced the concept of "bounded rationality" to describe how decision-makers actually function. Humans have limited information-processing capacity; they cannot realistically consider all possible alternatives or fully predict the consequences of each option. Instead, decision-makers typically "satisfice"—choosing options that appear satisfactory rather than continuing to search for optimal solutions. Time pressures, incomplete information, and cognitive limitations all constrain the rationality of organizational decisions.

Group decision-making introduces additional dynamics. Organizations rarely vest important decisions in single individuals; instead, committees, teams, and hierarchies shape most significant choices. Group processes can improve decisions by incorporating diverse perspectives and expertise, catching errors that individuals might miss, and building commitment to implementation. However, groups can also produce worse outcomes through phenomena such as "groupthink," where desire for consensus suppresses critical evaluation and leads to poorly examined choices.

Political factors influence organizational decisions in ways that rational models often overlook. Decisions allocate resources and opportunities, creating winners and losers among organizational members and stakeholders. Individuals and coalitions pursue their interests through the decision process, advocating for outcomes that benefit them regardless of organizational welfare. Power relationships determine whose preferences carry weight. Important decisions often reflect negotiation and compromise among competing interests rather than objective analysis.

Cognitive biases systematically affect decision-making at both individual and organizational levels. Confirmation bias leads decision-makers to seek and weight information that supports their existing beliefs while discounting contradictory evidence. Anchoring causes initial information to disproportionately influence subsequent judgments. Overconfidence leads to underestimation of risks and overestimation of abilities. Availability bias makes vivid or recent events seem more likely than statistical analysis would suggest. Awareness of these biases does not necessarily prevent them from affecting decisions.

Organizations have developed various mechanisms to improve decision quality. Structured decision processes ensure that alternatives are systematically considered and evaluated against explicit criteria. Devil's advocacy assigns someone to challenge proposed decisions, countering groupthink tendencies. Scenario planning examines how decisions might play out under different future conditions rather than assuming a single predicted future. Post-decision reviews analyze outcomes to identify what worked and what could improve future decisions.

Technology increasingly supports organizational decision-making. Data analytics can identify patterns in large datasets that human analysis would miss. Decision support systems help structure complex choices and model potential outcomes. Artificial intelligence applications are beginning to make or recommend decisions in domains ranging from loan approvals to medical diagnosis. Yet technology cannot eliminate the human dimensions of organizational decision-making—the political interests, cognitive limitations, and value judgments that fundamentally shape how organizations choose their paths forward.`,
        questions: [
          { id: 27, type: "tfng", text: "Classical decision models accurately describe real-world decision-making.", answer: "False" },
          { id: 28, type: "tfng", text: "Herbert Simon received a Nobel Prize for his work.", answer: "True" },
          { id: 29, type: "tfng", text: "Satisficing means finding the optimal solution.", answer: "False" },
          { id: 30, type: "tfng", text: "Group decision-making always produces better outcomes than individual decisions.", answer: "False" },
          { id: 31, type: "tfng", text: "Awareness of cognitive biases completely prevents their effects.", answer: "False" },
          { id: 32, type: "matching", text: "Choosing satisfactory rather than optimal options", answer: "satisficing" },
          { id: 33, type: "matching", text: "Desire for consensus suppressing critical evaluation", answer: "groupthink" },
          { id: 34, type: "matching", text: "Assigning someone to challenge proposed decisions", answer: "devil's advocacy" },
          { id: 35, type: "mcq", text: "What does bounded rationality recognize?", options: ["A. Unlimited processing capacity", "B. Limited cognitive capacity", "C. Perfect information availability", "D. Optimal outcomes"], answer: "B" },
          { id: 36, type: "mcq", text: "What do political factors in organizations create?", options: ["A. Universal agreement", "B. Winners and losers", "C. Perfect rationality", "D. Automatic solutions"], answer: "B" },
          { id: 37, type: "mcq", text: "What does confirmation bias cause?", options: ["A. Seeking contradictory evidence", "B. Seeking supporting evidence", "C. Random decisions", "D. Group consensus"], answer: "B" },
          { id: 38, type: "mcq", text: "What can scenario planning examine?", options: ["A. Past decisions only", "B. Single predicted futures", "C. Different future conditions", "D. Current performance"], answer: "C" },
          { id: 39, type: "short", text: "What bias causes initial information to disproportionately influence judgment? (ONE WORD)", answer: "anchoring" },
          { id: 40, type: "short", text: "What type of analytics identifies patterns in large datasets? (ONE WORD)", answer: "data" }
        ]
      }
    ]
  },

  // ============================================================
  // R7 - FOUNDATION (Band 6.5)
  // ============================================================
  {
    id: "R7",
    level: "Foundation",
    bandTarget: "6.5",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Museums and Cultural Identity",
        wordCount: 860,
        text: `Museums occupy a distinctive position in modern societies, serving simultaneously as repositories of cultural heritage, educational institutions, and spaces for public engagement with history and identity. Their collections and exhibitions shape how communities understand their past and present, making museums powerful instruments for the construction and reinforcement of cultural narratives. This role has attracted both appreciation for museums' contributions and criticism of how they have exercised their cultural authority.

The modern museum emerged in the eighteenth and nineteenth centuries as collections previously held by royalty and aristocracy became accessible to broader publics. The British Museum, established in 1753, and the Louvre, opened to the public in 1793, exemplified this transformation. These institutions framed their missions in terms of public education and the preservation of cultural treasures for the benefit of all citizens. However, their collections reflected and reinforced existing hierarchies, privileging certain cultures and perspectives while marginalizing others.

National museums played explicit roles in shaping national identities during the era of nation-state formation. Collections emphasized artifacts that illustrated national histories, celebrated national achievements, and distinguished national cultures from those of neighbors and rivals. Exhibition narratives typically presented coherent national stories, smoothing over internal divisions and conflicts that complicated straightforward national identities. Museums thus participated in the broader project of creating citizens who identified with national communities and accepted national authority.

Colonial relationships profoundly influenced museum collections and practices. European museums acquired vast quantities of objects from colonized territories, whether through purchase, excavation, seizure, or theft. These collections enabled European publics to view exotic artifacts from distant lands while reinforcing notions of European cultural superiority and the legitimacy of colonial rule. The display of non-Western objects frequently emphasized their strangeness or primitiveness rather than treating them as sophisticated cultural productions deserving equal respect.

The decolonization movements of the mid-twentieth century and subsequent decades prompted reconsideration of museum practices. Critics questioned how non-Western cultures were represented, who controlled narrative authority, and whether objects should remain in institutions far from their communities of origin. Indigenous peoples and formerly colonized nations demanded consultation in how their cultures were presented and, in many cases, the return of significant objects. These demands have intensified in recent years, with some major museums returning artifacts while others resist repatriation claims.

Contemporary museums increasingly acknowledge multiple perspectives and contested histories. Exhibition design has shifted from authoritative presentations of fixed truths toward approaches that recognize complexity, present alternative viewpoints, and invite visitor interpretation. Community consultation has become standard practice when displaying the heritage of living communities. Some museums have reimagined their fundamental purposes, emphasizing social inclusion, cultural dialogue, and addressing contemporary issues rather than simply preserving and displaying collections.

Digital technologies have expanded possibilities for museum engagement. Online collections allow access regardless of physical location. Virtual exhibitions create experiences impossible in physical spaces. Social media enables ongoing conversation between museums and publics. However, digital access cannot fully replicate the experience of encountering original objects, and questions persist about whether virtual engagement deepens or substitutes for physical museum visits.

Museums continue to negotiate their roles in societies where cultural authority is contested and identities are multiple and fluid. They remain important institutions for preserving and interpreting cultural heritage, but the terms on which they do so are increasingly subject to debate and negotiation rather than accepted uncritically.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Museum roles and influence", "ii. Digital technologies", "iii. Repatriation debates", "iv. National identity formation"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Colonial collections", "ii. The emergence of public museums", "iii. Indigenous consultation", "iv. Virtual exhibitions"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Digital engagement", "ii. Museums and nation-building", "iii. Object returns", "iv. Community consultation"], answer: "ii" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Colonial influence on museums", "ii. Contemporary approaches", "iii. Public accessibility", "iv. Social media use"], answer: "i" },
          { id: 5, type: "tfng", text: "The British Museum was established in the nineteenth century.", answer: "False" },
          { id: 6, type: "tfng", text: "National museums helped shape national identities.", answer: "True" },
          { id: 7, type: "tfng", text: "Colonial museums always treated non-Western objects with equal respect.", answer: "False" },
          { id: 8, type: "tfng", text: "All major museums now support repatriation claims.", answer: "False" },
          { id: 9, type: "tfng", text: "Digital access can fully replicate the experience of original objects.", answer: "False" },
          { id: 10, type: "short", text: "When was the Louvre opened to the public? (YEAR)", answer: "1793" },
          { id: 11, type: "short", text: "What type of relationships influenced colonial museum collections? (ONE WORD)", answer: "colonial" },
          { id: 12, type: "short", text: "What has become standard practice for living communities? (TWO WORDS)", answer: "community consultation" },
          { id: 13, type: "short", text: "What enables ongoing conversation between museums and publics? (TWO WORDS)", answer: "social media" }
        ]
      },
      {
        id: "P2",
        title: "Climate Adaptation Strategies",
        wordCount: 830,
        text: `As evidence of climate change has accumulated and its effects have become increasingly visible, attention has expanded from efforts to reduce greenhouse gas emissions to strategies for adapting to changes that are already occurring or are now unavoidable. Climate adaptation encompasses a wide range of adjustments in natural and human systems that respond to actual or expected climate conditions, aiming to reduce vulnerability and exploit potential opportunities. This adaptation agenda has become a major focus of policy, planning, and investment worldwide.

The necessity of adaptation reflects the inertia in the climate system. Even if emissions were somehow eliminated immediately, temperatures would continue to rise for decades due to greenhouse gases already in the atmosphere and heat already absorbed by oceans. Many impacts—more frequent heat waves, changing precipitation patterns, rising sea levels—are now effectively locked in regardless of future emission trajectories. Adaptation is therefore not an alternative to emission reduction but a necessary complement, addressing impacts that mitigation alone cannot prevent.

Adaptation strategies vary considerably depending on the risks being addressed and the resources available. Infrastructure modifications represent one major category: building sea walls and storm barriers to protect coastal areas, upgrading drainage systems to handle more intense rainfall, designing buildings to withstand higher temperatures. Agricultural adaptations include shifting to crop varieties better suited to changing conditions, adjusting planting schedules, and improving irrigation efficiency. Public health measures address heat-related illness, vector-borne diseases whose ranges may expand, and other climate-sensitive health threats.

Planning and information systems support more effective adaptation. Climate projections, though uncertain in their specifics, provide guidance about the range of conditions communities may face. Risk assessments identify which assets and populations face greatest vulnerability. Early warning systems enable preparation for extreme events. Land-use planning can guide development away from high-risk areas and preserve natural features that buffer climate impacts.

The resources required for adequate adaptation are substantial. The costs of protecting infrastructure, modifying practices, and responding to climate impacts will run to hundreds of billions of dollars annually in coming decades. Developing countries face particularly severe challenges, as they often confront significant climate vulnerabilities with limited financial and institutional capacity. International climate agreements have recognized the need for wealthy countries to support adaptation in developing nations, though actual funding has fallen far short of estimated needs.

Adaptation raises difficult questions about equity and responsibility. Climate change impacts fall disproportionately on populations and regions least responsible for causing the problem. Within societies, vulnerable populations—the poor, the elderly, those with health conditions—typically face greatest risks while having fewest resources to adapt. Ensuring that adaptation measures protect those most in need rather than primarily benefiting those with political influence and economic resources presents ongoing challenges.

The limits of adaptation also require acknowledgment. Some climate impacts may exceed the capacity of systems to adapt, particularly under higher-emission scenarios. Coral reef ecosystems, for example, face bleaching and die-off even with warming already experienced. Some low-lying island nations may become uninhabitable regardless of adaptation measures. Recognizing these limits reinforces the importance of aggressive emission reductions alongside adaptation efforts to avoid crossing thresholds beyond which adaptation becomes inadequate.`,
        questions: [
          { id: 14, type: "yng", text: "Adaptation can completely replace the need for emission reductions.", answer: "No" },
          { id: 15, type: "yng", text: "Temperatures will continue rising even if emissions stop immediately.", answer: "Yes" },
          { id: 16, type: "yng", text: "Climate projections provide exact predictions of future conditions.", answer: "No" },
          { id: 17, type: "yng", text: "International funding for adaptation has met estimated needs.", answer: "No" },
          { id: 18, type: "yng", text: "Some low-lying islands may become uninhabitable.", answer: "Yes" },
          { id: 19, type: "mcq", text: "Why is adaptation necessary according to the passage?", options: ["A. Emissions have stopped", "B. Some impacts are unavoidable", "C. Mitigation has failed", "D. Technology will solve problems"], answer: "B" },
          { id: 20, type: "mcq", text: "What is one example of infrastructure adaptation?", options: ["A. Reducing emissions", "B. Building sea walls", "C. Planting trees", "D. Recycling programs"], answer: "B" },
          { id: 21, type: "mcq", text: "What challenge do developing countries face?", options: ["A. Too much funding", "B. Limited vulnerability", "C. Limited capacity", "D. Excessive adaptation"], answer: "C" },
          { id: 22, type: "mcq", text: "What does the passage say about equity in adaptation?", options: ["A. Benefits are equally distributed", "B. The wealthy bear most risks", "C. Vulnerable populations face greatest risks", "D. Political influence is irrelevant"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Climate adaptation aims to reduce ________ and exploit opportunities.", answer: "vulnerability" },
          { id: 24, type: "summary", text: "Complete: Risk assessments identify which assets and populations face greatest ________.", answer: "vulnerability" },
          { id: 25, type: "summary", text: "Complete: Adaptation costs will reach hundreds of ________ of dollars annually.", answer: "billions" },
          { id: 26, type: "summary", text: "Complete: Coral reefs face ________ and die-off from warming.", answer: "bleaching" }
        ]
      },
      {
        id: "P3",
        title: "Human Memory Systems",
        wordCount: 850,
        text: `Human memory represents one of the most remarkable and complex functions of the brain. It enables us to retain information from past experiences, apply learned knowledge to novel situations, and maintain continuous identity across time. Understanding how memory works has been a central concern of psychology and neuroscience, with significant implications for education, clinical treatment, and everyday life.

Memory is not a single unified system but rather a collection of related processes that operate somewhat independently. The most basic distinction separates short-term memory, which holds limited information for brief periods, from long-term memory, which can retain vast quantities of information indefinitely. Short-term memory—sometimes called working memory when its active processing functions are emphasized—allows us to hold phone numbers long enough to dial them or follow the thread of a conversation. Long-term memory stores everything from personal experiences to general knowledge to learned skills.

Within long-term memory, further distinctions apply. Episodic memory concerns specific events and experiences—what happened at your birthday party, where you parked your car this morning. Semantic memory encompasses general knowledge about the world—the capital of France, how photosynthesis works—without specific recollection of when or how that knowledge was acquired. Procedural memory stores skills and habits, from riding a bicycle to typing on a keyboard, which can be performed automatically without conscious attention.

The formation of long-term memories involves a process called consolidation, during which memories become stabilized and integrated with existing knowledge. Sleep appears to play an important role in this process; studies consistently show that sleep deprivation impairs memory formation. The hippocampus, a seahorse-shaped structure deep in the brain, is critical for forming new episodic memories; damage to this region can result in profound amnesia while leaving existing memories and procedural skills intact.

Retrieval—the process of accessing stored memories—is not simply a matter of locating and reproducing stored information. Each act of retrieval actually reconstructs the memory, potentially modifying it in the process. Context strongly influences retrieval; returning to a location where events occurred often facilitates remembering them. Emotions associated with memories affect their accessibility, with highly emotional events typically more readily recalled, sometimes intrusively so in cases of trauma.

Memory is far from perfect. Forgetting occurs naturally through decay over time and interference from similar information. More troublingly, memories can be distorted or entirely false while feeling completely authentic. Research has demonstrated that leading questions, exposure to misinformation, and imagination can create confident but inaccurate memories. These findings have important implications for eyewitness testimony, therapeutic practices involving recovered memories, and everyday assumptions about the reliability of recollection.

Various strategies can enhance memory performance. Spaced repetition—distributing practice over time rather than concentrating it—produces more durable learning than massed study. Elaborative encoding, which connects new information to existing knowledge, improves retention compared to simple repetition. Testing not only measures learning but actually strengthens memory, an effect sometimes called "the testing effect" or retrieval practice. Understanding these principles can significantly improve educational practices and individual learning strategies.

Age-related memory changes present both normal variations and pathological conditions. Some decline in memory function appears normal with aging, particularly in the speed of retrieval and the ability to multitask. However, severe memory loss is not an inevitable consequence of aging and may indicate conditions such as Alzheimer's disease that require medical attention. Research into cognitive aging and dementia remains a major priority given the increasing proportion of elderly populations worldwide.`,
        questions: [
          { id: 27, type: "tfng", text: "Memory is a single unified system.", answer: "False" },
          { id: 28, type: "tfng", text: "Short-term memory can hold unlimited information.", answer: "False" },
          { id: 29, type: "tfng", text: "The hippocampus is critical for forming new episodic memories.", answer: "True" },
          { id: 30, type: "tfng", text: "Each act of retrieval reproduces memories exactly as stored.", answer: "False" },
          { id: 31, type: "tfng", text: "Severe memory loss is a normal consequence of aging.", answer: "False" },
          { id: 32, type: "matching", text: "Stores skills and habits performed automatically", answer: "procedural memory" },
          { id: 33, type: "matching", text: "Concerns specific events and experiences", answer: "episodic memory" },
          { id: 34, type: "matching", text: "Encompasses general knowledge about the world", answer: "semantic memory" },
          { id: 35, type: "mcq", text: "What role does sleep play in memory?", options: ["A. No significant role", "B. Important for consolidation", "C. Causes forgetting", "D. Damages the hippocampus"], answer: "B" },
          { id: 36, type: "mcq", text: "What can create false memories according to the passage?", options: ["A. Good sleep", "B. Leading questions", "C. Spaced repetition", "D. Procedural learning"], answer: "B" },
          { id: 37, type: "mcq", text: "What is the 'testing effect'?", options: ["A. Tests cause anxiety", "B. Testing damages memory", "C. Testing strengthens memory", "D. Tests measure only recall"], answer: "C" },
          { id: 38, type: "mcq", text: "What produces more durable learning?", options: ["A. Massed study", "B. Spaced repetition", "C. Single review", "D. Passive reading"], answer: "B" },
          { id: 39, type: "short", text: "What structure is seahorse-shaped? (ONE WORD)", answer: "hippocampus" },
          { id: 40, type: "short", text: "What connects new information to existing knowledge? (TWO WORDS)", answer: "elaborative encoding" }
        ]
      }
    ]
  },

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
  },

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
        wordCount: 880,
        text: `The nature of consciousness represents one of the most profound puzzles facing contemporary science and philosophy. How does subjective experience—the felt quality of seeing red, feeling pain, or tasting coffee—arise from the physical processes of the brain? This question, sometimes called the "hard problem" of consciousness, has resisted solution despite remarkable advances in neuroscience and continues to generate vigorous debate about the relationship between mind and matter.

The philosophical tradition offers several approaches to the mind-body problem. Dualism, associated with René Descartes, holds that mind and body are fundamentally different substances—the mental is non-physical and cannot be reduced to brain processes. This view accords with intuition but faces the notorious problem of explaining how non-physical mind could interact with physical body. Materialism or physicalism, the dominant view in contemporary science, holds that mental states are identical to or constituted by physical brain states. Yet materialists struggle to explain why any physical process should give rise to subjective experience at all.

Neuroscience has mapped correlations between brain activity and conscious experience in increasing detail. Specific neural patterns accompany specific experiences—particular regions activate when subjects see faces, feel emotions, or recall memories. Disorders of consciousness following brain damage reveal which neural systems are necessary for awareness. Yet correlation is not explanation, and the mechanisms by which neural activity produces consciousness remain elusive. We lack a theory that would allow us to predict which physical systems are conscious and what their experiences are like.

Several theoretical frameworks attempt to bridge this explanatory gap. Integrated Information Theory proposes that consciousness corresponds to integrated information processing—the capacity of a system to represent information that is both differentiated and unified. Global Workspace Theory suggests that consciousness arises when information is broadcast widely across the brain, making it available to multiple specialized systems simultaneously. Higher-Order Theories hold that consciousness requires representations of one's own mental states. Each framework captures aspects of conscious experience but none has achieved consensus acceptance.

The question of animal consciousness illustrates the empirical challenges. Non-human animals cannot report their experiences verbally, forcing researchers to infer consciousness from behavior and neural similarities to humans. Most scientists accept that mammals and birds have some form of conscious experience, though its character may differ substantially from human consciousness. Whether consciousness extends to fish, insects, or other organisms remains deeply uncertain. Similar questions arise for artificial systems: could appropriately programmed computers be conscious, and how would we know?

Altered states of consciousness provide additional evidence about consciousness's nature and neural basis. Anesthesia can reversibly eliminate consciousness while preserving other brain functions, revealing something about the necessary conditions for awareness. Psychedelic drugs produce dramatic alterations in experience that correlate with specific changes in neural activity. Meditation practices can modify consciousness in ways that practitioners describe as profound. These phenomena offer windows into consciousness's variability and its relationship to brain states.

The implications of solving or failing to solve the consciousness problem extend beyond philosophy and science. Questions about the moral status of fetuses, patients in vegetative states, animals, and potentially artificial intelligences depend partly on assessments of their consciousness. The possibility that consciousness might have been different or might be fundamentally inexplicable challenges assumptions about scientific explanation. Whether or not the hard problem admits of solution, engaging with it illuminates the remarkable nature of the minds we possess.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. The hard problem introduced", "ii. Dualist philosophy", "iii. Neural correlates", "iv. Altered states"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Neuroscience methods", "ii. Traditional philosophical approaches", "iii. Theoretical frameworks", "iv. Animal consciousness"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Neuroscience findings and limitations", "ii. Artificial consciousness", "iii. Meditation effects", "iv. Moral implications"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Animal studies", "ii. Consciousness theories", "iii. Anesthesia research", "iv. Philosophical history"], answer: "ii" },
          { id: 5, type: "tfng", text: "The hard problem of consciousness has been definitively solved.", answer: "False" },
          { id: 6, type: "tfng", text: "Dualism holds that mind and body are the same substance.", answer: "False" },
          { id: 7, type: "tfng", text: "Neural correlations fully explain how consciousness arises.", answer: "False" },
          { id: 8, type: "tfng", text: "Most scientists accept that mammals have some conscious experience.", answer: "True" },
          { id: 9, type: "tfng", text: "Anesthesia can reversibly eliminate consciousness.", answer: "True" },
          { id: 10, type: "short", text: "Who is dualism associated with? (FULL NAME)", answer: "René Descartes" },
          { id: 11, type: "short", text: "What theory proposes consciousness is integrated information? (ABBREVIATION)", answer: "IIT" },
          { id: 12, type: "short", text: "What can non-human animals not do regarding their experiences? (ONE WORD)", answer: "report" },
          { id: 13, type: "short", text: "What drugs produce dramatic alterations in experience? (ONE WORD)", answer: "psychedelic" }
        ]
      },
      {
        id: "P2",
        title: "International Trade and Global Governance",
        wordCount: 850,
        text: `The international trading system that emerged after World War II has profoundly shaped global economic development, creating institutional frameworks that govern how nations exchange goods, services, and capital. This system has enabled unprecedented expansion of trade and contributed to remarkable economic growth, while also generating tensions and inequalities that challenge its legitimacy and sustainability. Understanding both the achievements and the limitations of global trade governance illuminates debates about economic globalization and its future trajectory.

The General Agreement on Tariffs and Trade, established in 1947 and later succeeded by the World Trade Organization, provided the institutional foundation for trade liberalization. Through successive negotiating rounds, member countries agreed to reduce tariffs and other barriers, expanding market access and stimulating trade growth. The principle of most-favored-nation treatment prevented discrimination among trading partners, while national treatment required equal treatment of domestic and foreign goods within national markets. These rules constrained protectionism and created predictability that facilitated international commerce.

Trade expansion delivered substantial benefits but distributed them unevenly. Developing countries that integrated successfully into global value chains experienced rapid industrialization and poverty reduction. China's export-led growth, lifting hundreds of millions from poverty, represents the most dramatic example. However, other developing countries remained marginalized, unable to compete in global markets dominated by established industrial powers. Within countries, trade created winners and losers—import-competing industries and their workers suffered while export sectors and consumers benefited.

The consensus supporting trade liberalization has eroded in recent decades. Workers in developed countries who lost jobs to import competition grew skeptical of trade's benefits. Concerns about labor standards, environmental protection, and regulatory autonomy in trade agreements generated opposition from civil society groups. The financial crisis of 2008 and its aftermath intensified protectionist pressures as countries sought to preserve domestic employment. Rising geopolitical tensions between major trading powers have further strained the multilateral trading system.

Regional and bilateral trade agreements have proliferated as multilateral negotiations have stalled. These preferential arrangements create trade among members while potentially diverting trade from non-members. The complexity of overlapping agreements—sometimes called the "spaghetti bowl" of preferential trade—creates compliance challenges and may fragment rather than integrate the global economy. Whether regional agreements serve as building blocks or stumbling blocks toward global integration remains debated.

Trade governance increasingly extends beyond traditional border measures to address domestic regulations affecting trade. Agreements covering services, intellectual property, investment, and regulatory coherence reach deep into national policy space. This expansion raises questions about democratic accountability when international commitments constrain domestic policy choices. The tension between trade liberalization and policy autonomy has become a central challenge for trade governance.

The future of global trade governance faces fundamental uncertainties. Climate change requires trade rules compatible with decarbonization efforts, raising questions about carbon border adjustments and green industrial policy. Digital trade demands governance frameworks for cross-border data flows, electronic commerce, and emerging technologies. Geopolitical competition between major powers may fragment the trading system into rival blocs. Whether multilateral institutions can adapt to these challenges or whether trade governance will become increasingly fragmented remains to be seen.`,
        questions: [
          { id: 14, type: "yng", text: "GATT was established before World War II ended.", answer: "No" },
          { id: 15, type: "yng", text: "Trade expansion benefited all countries equally.", answer: "No" },
          { id: 16, type: "yng", text: "China's growth lifted hundreds of millions from poverty.", answer: "Yes" },
          { id: 17, type: "yng", text: "Support for trade liberalization has strengthened recently.", answer: "No" },
          { id: 18, type: "yng", text: "Trade governance now reaches into domestic policy areas.", answer: "Yes" },
          { id: 19, type: "mcq", text: "What did most-favored-nation treatment prevent?", options: ["A. Trade growth", "B. Discrimination among partners", "C. Market access", "D. Tariff reduction"], answer: "B" },
          { id: 20, type: "mcq", text: "What is the 'spaghetti bowl' in trade?", options: ["A. Food trade", "B. Complex overlapping agreements", "C. Simple tariffs", "D. Single market"], answer: "B" },
          { id: 21, type: "mcq", text: "What intensified protectionist pressures?", options: ["A. Trade growth", "B. 2008 financial crisis", "C. Reduced tariffs", "D. Successful integration"], answer: "B" },
          { id: 22, type: "mcq", text: "What does climate change require of trade rules?", options: ["A. Ignore environment", "B. Compatibility with decarbonization", "C. Increased emissions", "D. Less regulation"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: National treatment requires equal treatment of domestic and ________ goods.", answer: "foreign" },
          { id: 24, type: "summary", text: "Complete: Workers in developed countries who lost jobs grew ________ of trade.", answer: "skeptical" },
          { id: 25, type: "summary", text: "Complete: Regional agreements may ________ rather than integrate the economy.", answer: "fragment" },
          { id: 26, type: "summary", text: "Complete: Carbon ________ adjustments are discussed for climate-compatible trade.", answer: "border" }
        ]
      },
      {
        id: "P3",
        title: "Gene Editing and Bioethics",
        wordCount: 870,
        text: `The development of CRISPR-Cas9 and related gene editing technologies has created unprecedented capabilities to modify the genetic material of living organisms with precision, efficiency, and accessibility far exceeding previous methods. These technologies offer remarkable potential for treating genetic diseases, improving agricultural productivity, and controlling disease vectors, while also raising profound ethical questions about altering the fundamental code of life. Navigating these possibilities and concerns requires careful consideration of both the science and the values at stake.

Gene editing works by introducing targeted changes to DNA sequences. The CRISPR system, adapted from bacterial immune defenses, uses guide RNA molecules to direct a cutting enzyme to specific genomic locations, where modifications can be made through cellular repair mechanisms. Compared to earlier gene editing tools, CRISPR is faster, cheaper, more accurate, and more accessible, enabling research applications across numerous laboratories and organisms. This democratization of gene editing capability amplifies both its promise and its risks.

Therapeutic applications offer the most compelling case for gene editing. Genetic diseases caused by specific mutations—sickle cell disease, certain cancers, inherited blindness—might be treated by correcting the underlying genetic defect. Clinical trials have demonstrated promising results for some conditions, with patients achieving sustained remission from previously incurable diseases. Somatic cell editing, which modifies genes in specific tissues without affecting future generations, raises fewer ethical concerns than germline editing but still requires careful attention to safety and informed consent.

Germline editing—modifications to eggs, sperm, or embryos that would be inherited by future generations—presents far more profound implications. In 2018, a Chinese scientist announced the birth of twin girls whose genomes had been edited to confer HIV resistance, provoking widespread condemnation from the scientific community. The announcement violated established ethical guidelines, raised safety concerns about unknown long-term effects, and forced confrontation with questions about human enhancement that many researchers had considered premature.

The prospect of editing human embryos forces engagement with fundamental questions about human nature and enhancement. Should genetic modifications be limited to treating disease, or might they extend to enhancing traits like intelligence, athleticism, or longevity? Where does the line between therapy and enhancement fall, and who decides? If enhancement becomes possible and accessible only to the wealthy, might genetic modification exacerbate existing social inequalities? These questions lack easy answers and require deliberation extending beyond scientific expertise.

Agricultural applications of gene editing present different considerations. Editing crop genomes to improve yield, disease resistance, or nutritional content could contribute to food security under climate change pressures. Gene drives—systems that spread genetic modifications through wild populations—offer potential tools for controlling disease-carrying mosquitoes or invasive species but raise concerns about ecological risks and the permanence of environmental modification. Regulatory frameworks developed for earlier transgenic technologies may not be well-suited to gene-edited organisms.

Governance of gene editing technologies requires balancing innovation with precaution. International scientific organizations have called for moratoria on clinical germline editing until safety is established and societal consensus achieved. National regulations vary considerably, with some jurisdictions permitting research that others prohibit. The global nature of science and the portability of gene editing capabilities make purely national governance inadequate. Yet achieving international agreement on technologies with such varied implications remains deeply challenging.`,
        questions: [
          { id: 27, type: "tfng", text: "CRISPR is slower and more expensive than previous methods.", answer: "False" },
          { id: 28, type: "tfng", text: "The CRISPR system was adapted from bacterial immune defenses.", answer: "True" },
          { id: 29, type: "tfng", text: "Somatic cell editing affects future generations.", answer: "False" },
          { id: 30, type: "tfng", text: "The 2018 gene-edited twins announcement was widely praised.", answer: "False" },
          { id: 31, type: "tfng", text: "National regulations for gene editing are uniform worldwide.", answer: "False" },
          { id: 32, type: "matching", text: "Modifications inherited by future generations", answer: "germline editing" },
          { id: 33, type: "matching", text: "Systems that spread modifications through wild populations", answer: "gene drives" },
          { id: 34, type: "matching", text: "Directs cutting enzyme to specific locations", answer: "guide RNA" },
          { id: 35, type: "mcq", text: "What does democratization of gene editing amplify?", options: ["A. Only promise", "B. Only risks", "C. Both promise and risks", "D. Neither"], answer: "C" },
          { id: 36, type: "mcq", text: "What did the 2018 announcement violate?", options: ["A. Patent laws", "B. Ethical guidelines", "C. Trade agreements", "D. Immigration rules"], answer: "B" },
          { id: 37, type: "mcq", text: "What might genetic enhancement exacerbate?", options: ["A. Disease treatment", "B. Scientific research", "C. Social inequalities", "D. International cooperation"], answer: "C" },
          { id: 38, type: "mcq", text: "What have international organizations called for?", options: ["A. Immediate clinical use", "B. Moratoria on germline editing", "C. No regulation", "D. Unlimited research"], answer: "B" },
          { id: 39, type: "short", text: "What disease did the 2018 twins receive resistance to? (ABBREVIATION)", answer: "HIV" },
          { id: 40, type: "short", text: "What could gene drives help control? (ONE WORD)", answer: "mosquitoes" }
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
        title: "Quantum Computing and Its Implications",
        wordCount: 870,
        text: `Quantum computing represents a fundamentally different approach to information processing that exploits the strange properties of quantum mechanics to perform calculations impossible for classical computers. After decades of theoretical development and experimental progress, quantum computers have begun demonstrating capabilities that exceed what conventional machines can achieve, heralding a technological transition with profound implications for cryptography, drug discovery, materials science, and artificial intelligence.

Classical computers process information in binary digits or bits, each existing in a definite state of either zero or one. Quantum computers instead use quantum bits or qubits, which can exist in superpositions of both states simultaneously until measured. This property allows quantum computers to explore many computational paths in parallel, providing exponential speedup for certain types of problems. Additionally, quantum entanglement creates correlations between qubits that have no classical analog, enabling further computational advantages.

The theoretical power of quantum computing was established decades ago, but building practical quantum computers has required overcoming formidable engineering challenges. Qubits are extraordinarily fragile, easily disrupted by environmental noise that causes decoherence and computational errors. Maintaining quantum states requires extreme conditions—temperatures near absolute zero for some technologies—and sophisticated error correction schemes that demand many physical qubits for each logical qubit used in computation. Despite these difficulties, recent years have seen remarkable progress toward fault-tolerant quantum systems.

In 2019, Google announced that its quantum processor had achieved "quantum supremacy"—performing a calculation that would take classical supercomputers thousands of years in just minutes. While the specific task was artificial, designed to showcase quantum advantage rather than solve a practical problem, the milestone demonstrated that quantum computers could exceed classical capabilities. Subsequent achievements by multiple research groups and companies have extended quantum advantage to additional domains.

The implications for cryptography are particularly significant. Much current encryption relies on the difficulty of factoring large numbers—a task that classical computers find intractable for sufficiently large numbers but that quantum computers could potentially solve efficiently using Shor's algorithm. This possibility threatens the security of communications, financial transactions, and government secrets protected by existing cryptographic systems. The development of quantum-resistant encryption has become an urgent priority, with new standards emerging to protect against future quantum attacks.

Beyond cryptography, quantum computing promises advances in simulation and optimization. Simulating quantum systems—the behavior of molecules, materials, and chemical reactions—is naturally suited to quantum computers, potentially accelerating drug discovery and materials design. Optimization problems across logistics, finance, and machine learning might benefit from quantum approaches. However, identifying which problems quantum computers will actually solve better than classical alternatives remains an active area of research.

The race to develop practical quantum computing has intensified, with governments and corporations investing billions. Different technological approaches—superconducting circuits, trapped ions, photonic systems—compete for dominance. Questions remain about which problems will yield to quantum solutions, when genuinely useful applications will emerge, and whether classical algorithms might narrow the gap for some tasks. Yet the trajectory of progress suggests that quantum computing will eventually transform computation in ways comparable to the transition from mechanical to electronic computing.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to quantum computing", "ii. Cryptographic threats", "iii. Engineering challenges", "iv. Google's achievement"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. How classical and quantum computing differ", "ii. Error correction methods", "iii. Simulation applications", "iv. Investment trends"], answer: "i" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Cryptographic implications", "ii. Technical obstacles to quantum computing", "iii. Supremacy demonstrations", "iv. Drug discovery"], answer: "ii" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Materials science", "ii. Quantum supremacy achieved", "iii. Government investment", "iv. Optimization problems"], answer: "ii" },
          { id: 5, type: "tfng", text: "Qubits can exist in only one state at a time.", answer: "False" },
          { id: 6, type: "tfng", text: "Qubits are easily disrupted by environmental noise.", answer: "True" },
          { id: 7, type: "tfng", text: "Google's quantum supremacy task solved a practical real-world problem.", answer: "False" },
          { id: 8, type: "tfng", text: "Current encryption could be threatened by quantum computers.", answer: "True" },
          { id: 9, type: "tfng", text: "All problems will benefit from quantum computing solutions.", answer: "False" },
          { id: 10, type: "short", text: "What can qubits exist in simultaneously? (ONE WORD)", answer: "superpositions" },
          { id: 11, type: "short", text: "What algorithm could break current encryption? (TWO WORDS)", answer: "Shor's algorithm" },
          { id: 12, type: "short", text: "What year did Google announce quantum supremacy?", answer: "2019" },
          { id: 13, type: "short", text: "What type of encryption is being developed against quantum attacks? (TWO WORDS)", answer: "quantum-resistant" }
        ]
      },
      {
        id: "P2",
        title: "Migration and Identity in the Modern World",
        wordCount: 840,
        text: `Human migration has shaped societies throughout history, but contemporary migration occurs at unprecedented scale and complexity. Over 280 million people currently live outside their country of birth, and countless more move within national borders. These movements reshape both sending and receiving communities, challenging conventional notions of identity, belonging, and citizenship while creating both opportunities and tensions that define the modern global experience.

The drivers of migration are varied and interconnected. Economic disparities pull workers toward higher wages and opportunities unavailable at home. Political instability and persecution generate refugees fleeing violence and oppression. Environmental changes, including climate-related disasters and long-term degradation, are displacing growing numbers. Family reunification remains a major category as established migrants bring relatives to join them. These diverse motivations produce equally diverse populations of migrants with different legal statuses, resources, and prospects.

Receiving societies respond to migration with varied and often ambivalent policies. Labor markets depend on migrant workers for both skilled and essential low-wage positions that native workers cannot or will not fill. Yet political discourse frequently portrays migration as threatening—to employment, public services, national identity, or security. This tension between economic dependence and political resistance shapes immigration policy, often producing contradictory approaches that regulate entry tightly while tolerating irregular status for workers already present.

For migrants themselves, the experience involves profound negotiation of identity and belonging. Maintaining connections to home while integrating into new communities requires navigating between cultures, languages, and expectations. Second generations face particular complexity, raised between their parents' heritage and the societies where they grow up. Transnational identities increasingly characterize migrant communities, with technology enabling ongoing connection across distances that previously severed ties more completely.

The impacts on sending communities are equally significant though often overlooked. Remittances—money sent home by migrants—exceed foreign aid in many developing countries, providing crucial household income and foreign exchange. Yet migration also creates brain drain as educated and ambitious individuals leave, depleting communities of talent and leadership. Families are separated for extended periods, with social costs that economic measures miss. The dynamics between migration's costs and benefits for sending regions remain contested.

Integration outcomes vary considerably depending on policy approaches, economic conditions, and social attitudes. Some societies have achieved relatively successful incorporation of diverse migrant populations, while others exhibit persistent segregation, discrimination, and social tension. Evidence suggests that integration is facilitated by language acquisition, educational opportunity, labor market access, and social contact with native populations, but outcomes depend on both migrant characteristics and receiving society responses.

Climate change will likely increase migration pressures as rising seas, intensifying droughts, and extreme weather events render some regions less habitable. This prospective "climate migration" raises questions about legal frameworks designed for political rather than environmental displacement, about equitable distribution of climate refugees, and about the adequacy of existing institutions to manage movements of potentially unprecedented scale. How societies navigate these challenges will shape global politics and human welfare for generations.`,
        questions: [
          { id: 14, type: "yng", text: "Over 280 million people live outside their country of birth.", answer: "Yes" },
          { id: 15, type: "yng", text: "Political discourse always welcomes migration positively.", answer: "No" },
          { id: 16, type: "yng", text: "Remittances exceed foreign aid in many developing countries.", answer: "Yes" },
          { id: 17, type: "yng", text: "Integration outcomes are uniform across all societies.", answer: "No" },
          { id: 18, type: "yng", text: "Climate change may increase future migration.", answer: "Yes" },
          { id: 19, type: "mcq", text: "What creates refugees according to the passage?", options: ["A. Economic opportunity only", "B. Family reunification", "C. Political instability and persecution", "D. Technology advancement"], answer: "C" },
          { id: 20, type: "mcq", text: "What do second generations navigate between?", options: ["A. Two countries only", "B. Parents' heritage and host society", "C. Economic systems", "D. Legal frameworks"], answer: "B" },
          { id: 21, type: "mcq", text: "What does brain drain deplete?", options: ["A. Remittances", "B. Foreign aid", "C. Talent and leadership", "D. Immigration policy"], answer: "C" },
          { id: 22, type: "mcq", text: "What facilitates integration according to the passage?", options: ["A. Isolation", "B. Language acquisition", "C. Avoiding contact", "D. Maintaining separation"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Economic ________ pull workers toward higher wages.", answer: "disparities" },
          { id: 24, type: "summary", text: "Complete: Technology enables ongoing ________ across distances.", answer: "connection" },
          { id: 25, type: "summary", text: "Complete: Climate ________ raises questions about legal frameworks.", answer: "migration" },
          { id: 26, type: "summary", text: "Complete: Transnational ________ increasingly characterize migrant communities.", answer: "identities" }
        ]
      },
      {
        id: "P3",
        title: "Antibiotic Resistance: A Global Health Crisis",
        wordCount: 860,
        text: `The effectiveness of antibiotics—the wonder drugs that transformed medicine in the twentieth century—is diminishing as bacteria evolve resistance to these critical medicines. Antimicrobial resistance threatens to return healthcare to a pre-antibiotic era in which common infections could become untreatable and routine surgeries unacceptably dangerous. The World Health Organization has identified antimicrobial resistance as one of the greatest threats to global health, food security, and development, requiring urgent coordinated action across sectors and borders.

The biology of resistance is straightforward: bacteria that survive antibiotic exposure pass their resistant traits to offspring, and through horizontal gene transfer, even to unrelated bacteria. Antibiotics kill susceptible bacteria but leave resistant ones to multiply, with each exposure accelerating selection for resistance. This evolution is inevitable over time, but human practices have dramatically accelerated the process. Overuse and misuse of antibiotics in human medicine, combined with massive agricultural application, have created evolutionary pressure that is producing resistance faster than new antibiotics are being developed.

In human medicine, antibiotics are frequently prescribed unnecessarily or inappropriately. Viral infections, against which antibiotics have no effect, are often treated with antibiotics due to diagnostic uncertainty or patient expectations. Courses are sometimes not completed, allowing partially resistant bacteria to survive. In many countries, antibiotics remain available without prescription, facilitating self-medication and inappropriate use. Healthcare-associated infections increasingly involve resistant organisms, creating cycles of escalating treatment and resistance.

Agricultural use may exceed human medical use in many countries. Antibiotics are administered to food animals not only to treat disease but also to promote growth and prevent illness in crowded conditions. This practice provides immediate economic benefits to producers but contributes to the emergence and spread of resistance. Resistant bacteria can transfer from animals to humans through food, direct contact, and environmental pathways. Regulations restricting agricultural antibiotic use have been implemented in some jurisdictions but face industry opposition and enforcement challenges.

The pipeline of new antibiotics has dwindled as pharmaceutical companies have reduced investment in this area. Antibiotic development is commercially unattractive: new antibiotics should be reserved to delay resistance development, limiting sales volume; treatment courses are short, limiting revenue per patient; and resistance eventually emerges regardless of stewardship, shortening the period of market advantage. These economic disincentives have produced innovation gaps that leave clinicians without effective options for some infections.

Alternative approaches are being explored. Bacteriophages—viruses that infect bacteria—offer potential therapy that could evolve alongside bacterial resistance. Vaccines can prevent infections that would otherwise require antibiotic treatment. Rapid diagnostics could reduce unnecessary prescriptions by quickly distinguishing bacterial from viral infections. None of these approaches offers a complete solution, but together they might help preserve antibiotic effectiveness.

Addressing antimicrobial resistance requires action across multiple domains. Stewardship programs can reduce inappropriate antibiotic use in healthcare. Regulatory changes can limit agricultural use. Economic incentives can stimulate antibiotic development. Surveillance systems can track resistance patterns. International cooperation is essential given that bacteria cross borders freely. The coordination challenges are formidable, but the consequences of inaction—millions of deaths from untreatable infections—make response imperative.`,
        questions: [
          { id: 27, type: "tfng", text: "Antibiotic resistance is a natural evolutionary process.", answer: "True" },
          { id: 28, type: "tfng", text: "Antibiotics are effective against viral infections.", answer: "False" },
          { id: 29, type: "tfng", text: "Agricultural antibiotic use may exceed human medical use.", answer: "True" },
          { id: 30, type: "tfng", text: "Pharmaceutical companies have increased antibiotic investment.", answer: "False" },
          { id: 31, type: "tfng", text: "Bacteriophages could potentially evolve alongside bacterial resistance.", answer: "True" },
          { id: 32, type: "matching", text: "Transfer resistant traits to unrelated bacteria", answer: "horizontal gene transfer" },
          { id: 33, type: "matching", text: "Viruses that infect bacteria", answer: "bacteriophages" },
          { id: 34, type: "matching", text: "Programs to reduce inappropriate antibiotic use", answer: "stewardship programs" },
          { id: 35, type: "mcq", text: "Why is antibiotic development commercially unattractive?", options: ["A. High demand", "B. Long treatment courses", "C. Limited sales volume", "D. No resistance emerges"], answer: "C" },
          { id: 36, type: "mcq", text: "How can resistant bacteria transfer from animals to humans?", options: ["A. Only through food", "B. Through food, contact, and environment", "C. They cannot transfer", "D. Only through air"], answer: "B" },
          { id: 37, type: "mcq", text: "What could rapid diagnostics reduce?", options: ["A. All prescriptions", "B. Unnecessary prescriptions", "C. Doctor visits", "D. Hospital capacity"], answer: "B" },
          { id: 38, type: "mcq", text: "What makes international cooperation essential?", options: ["A. Economic benefits", "B. Bacteria cross borders", "C. Political pressure", "D. Market advantages"], answer: "B" },
          { id: 39, type: "short", text: "What does WHO identify antimicrobial resistance as? (TWO WORDS)", answer: "greatest threats" },
          { id: 40, type: "short", text: "What can prevent infections requiring antibiotics? (ONE WORD)", answer: "vaccines" }
        ]
      }
    ]
  },

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
        title: "Behavioral Economics and Public Policy",
        wordCount: 870,
        text: `Behavioral economics has emerged as a powerful framework for understanding human decision-making and designing more effective public policies. By incorporating insights from psychology about how people actually behave—rather than how rational economic models assume they should behave—behavioral economics has revealed systematic patterns in human judgment that create both vulnerabilities and opportunities for policy intervention. The application of these insights, sometimes called "nudging," has spread across governments worldwide while also generating controversy about paternalism and manipulation.

Traditional economics assumed that individuals make decisions by rationally evaluating all available information and selecting options that maximize their expected utility. This framework proved useful for many purposes but failed to explain numerous observed behaviors: why people persistently save too little for retirement despite intending to save more; why they choose immediate gratification over larger delayed rewards; why their decisions are influenced by how options are presented even when the underlying choices are identical. Behavioral economics addresses these anomalies by incorporating psychological realism into economic models.

Several key concepts characterize behavioral economic analysis. Loss aversion describes the tendency to feel losses more acutely than equivalent gains, leading to risk-seeking behavior to avoid losses and risk-averse behavior to secure gains. Present bias refers to the disproportionate weight given to immediate outcomes relative to future ones, explaining failures of self-control. Anchoring effects show that initial information, even when arbitrary, influences subsequent judgments. Default effects demonstrate that people tend to accept whatever option requires no active choice.

The policy implications of these insights have been substantial. Automatic enrollment in retirement savings plans, with the option to opt out rather than requiring active opt-in, dramatically increases participation rates by exploiting default effects. Energy bills that compare household usage to neighbors leverage social norms and loss aversion to encourage conservation. Simplified enrollment processes for government benefits reduce barriers created by complexity and procrastination. These interventions often achieve policy goals at minimal cost compared to traditional regulatory or incentive-based approaches.

The "nudge" approach advocates preserving freedom of choice while designing choice environments that make beneficial decisions easier. A cafeteria that places healthy foods at eye level while keeping less healthy options available does not restrict choice but does influence it. Critics argue that this distinction is less clear than proponents suggest—all choice environments shape decisions, and labeling some arrangements as "neutral" while others are "nudges" may be arbitrary. More fundamental objections question whether governments should manipulate citizen choices even toward beneficial ends.

The effectiveness of behavioral interventions varies across contexts and populations. Effects demonstrated in laboratory studies do not always replicate in field settings. Interventions that work initially may fade as novelty wears off or as people develop countermeasures. Cultural differences influence which psychological mechanisms operate and how strongly. What works in one policy domain may not transfer to others. These limitations counsel humility about behavioral approaches while not negating their genuine contributions.

Behavioral economics has also influenced thinking about regulation and consumer protection. Disclosure requirements have been reconsidered in light of evidence that complex information often fails to inform decisions effectively. Default rules in contracts and financial products have attracted attention given their powerful effects. The intersection of behavioral insights with digital technology raises new questions as platforms optimize for engagement using techniques that may exploit psychological vulnerabilities.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to behavioral economics", "ii. Loss aversion explained", "iii. Nudge controversies", "iv. Digital platforms"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Policy applications", "ii. Limitations of traditional economics", "iii. Default effects", "iv. Cultural differences"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Key behavioral economics concepts", "ii. Retirement savings", "iii. Energy conservation", "iv. Consumer protection"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Behavioral policy applications", "ii. Philosophical objections", "iii. Laboratory studies", "iv. Financial regulation"], answer: "i" },
          { id: 5, type: "tfng", text: "Traditional economics assumed fully rational decision-making.", answer: "True" },
          { id: 6, type: "tfng", text: "Loss aversion makes people feel gains more acutely than losses.", answer: "False" },
          { id: 7, type: "tfng", text: "Automatic enrollment increases retirement savings participation.", answer: "True" },
          { id: 8, type: "tfng", text: "All behavioral interventions work equally across all contexts.", answer: "False" },
          { id: 9, type: "tfng", text: "Digital platforms may exploit psychological vulnerabilities.", answer: "True" },
          { id: 10, type: "short", text: "What bias explains failures of self-control? (TWO WORDS)", answer: "present bias" },
          { id: 11, type: "short", text: "What do energy bills compare household usage to? (ONE WORD)", answer: "neighbors" },
          { id: 12, type: "short", text: "What approach preserves freedom of choice while shaping decisions? (ONE WORD)", answer: "nudge" },
          { id: 13, type: "short", text: "What type of requirements have been reconsidered for effectiveness? (ONE WORD)", answer: "disclosure" }
        ]
      },
      {
        id: "P2",
        title: "Plastic Pollution and Ocean Health",
        wordCount: 850,
        text: `Plastic debris has accumulated in the world's oceans to an extent that constitutes a global environmental crisis. From visible garbage patches to microscopic particles pervading marine food webs, plastic pollution threatens marine life, ecosystem health, and potentially human wellbeing. Understanding the sources, transport, and impacts of marine plastic pollution is essential for developing effective responses to this rapidly growing problem.

The scale of plastic pollution is staggering. Global plastic production has increased from approximately two million tonnes annually in 1950 to over 400 million tonnes today, with only a small fraction recycled and much eventually reaching the ocean. Rivers carry plastic waste from land to sea, with Asian rivers contributing disproportionately due to waste management gaps in rapidly developing regions. Fishing and shipping industries contribute directly through lost or discarded gear and cargo. Once in the ocean, plastics persist for decades to centuries, accumulating in quantities that increase annually.

Plastic impacts marine life through multiple pathways. Entanglement in debris injures and kills seabirds, marine mammals, and sea turtles. Ingestion of plastic items, mistaken for food, can cause starvation by filling stomachs with indigestible material or introduce toxic substances into organisms. Ghost fishing by abandoned nets continues catching marine life indefinitely. These direct effects are increasingly documented as plastic encounters more frequently occur throughout ocean ecosystems.

Microplastics—fragments smaller than five millimeters—present less visible but potentially more pervasive threats. Larger plastic items fragment through weathering but do not mineralize, producing ever-smaller particles that spread throughout water columns and sediments. Microplastics have been found in species from plankton to whales, in deep-sea environments, and in polar regions remote from human habitation. The ecological and health implications of this ubiquitous contamination remain under investigation, with concerns about physical harm, chemical transfer, and food web effects.

The chemical dimensions of plastic pollution add complexity. Plastics contain additives—plasticizers, flame retardants, stabilizers—that can leach into surrounding water and organisms. Additionally, plastics absorb hydrophobic pollutants already present in seawater, potentially concentrating and transporting contaminants. Whether these chemical effects produce significant biological impacts depends on exposure levels, bioavailability, and organism susceptibility—parameters that vary across species and environments and remain incompletely understood.

Addressing plastic pollution requires intervention across the material lifecycle. Reducing plastic production and consumption addresses the problem at its source but confronts entrenched economic interests and consumer habits. Improving waste management, particularly in regions with inadequate systems, can prevent leakage to waterways. Cleanup efforts remove existing debris but cannot match the pace of new input and may cause collateral damage to marine life. Each approach faces practical limitations that prevent any single solution from sufficing.

Extended producer responsibility, which makes manufacturers accountable for end-of-life management of their products, has gained traction as a policy framework. International negotiations toward a global plastics treaty have commenced, aiming to establish binding commitments that individual national actions cannot achieve. Meanwhile, research continues into biodegradable alternatives, enhanced recycling technologies, and methods for removing microplastics from water. The challenge of marine plastic pollution illustrates both the environmental consequences of material choices and the difficulties of addressing problems that span jurisdictions and generations.`,
        questions: [
          { id: 14, type: "yng", text: "Most plastic produced globally is recycled.", answer: "No" },
          { id: 15, type: "yng", text: "Asian rivers contribute disproportionately to ocean plastic.", answer: "Yes" },
          { id: 16, type: "yng", text: "Microplastics have been found in polar regions.", answer: "Yes" },
          { id: 17, type: "yng", text: "Cleanup efforts can match the pace of new plastic input.", answer: "No" },
          { id: 18, type: "yng", text: "International negotiations for a plastics treaty have begun.", answer: "Yes" },
          { id: 19, type: "mcq", text: "How much plastic is produced annually today?", options: ["A. 2 million tonnes", "B. 100 million tonnes", "C. Over 400 million tonnes", "D. 1 billion tonnes"], answer: "C" },
          { id: 20, type: "mcq", text: "What continues catching marine life indefinitely?", options: ["A. Microplastics", "B. Ghost fishing", "C. River pollution", "D. Chemical leaching"], answer: "B" },
          { id: 21, type: "mcq", text: "What size defines microplastics?", options: ["A. Smaller than 1mm", "B. Smaller than 5mm", "C. Smaller than 10mm", "D. Smaller than 1cm"], answer: "B" },
          { id: 22, type: "mcq", text: "What does extended producer responsibility make manufacturers do?", options: ["A. Reduce prices", "B. Account for end-of-life management", "C. Increase production", "D. Avoid recycling"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Plastics persist for decades to ________ in the ocean.", answer: "centuries" },
          { id: 24, type: "summary", text: "Complete: Ingestion can cause ________ by filling stomachs with plastic.", answer: "starvation" },
          { id: 25, type: "summary", text: "Complete: Plastics can ________ hydrophobic pollutants from seawater.", answer: "absorb" },
          { id: 26, type: "summary", text: "Complete: Reducing plastic production confronts entrenched economic ________.", answer: "interests" }
        ]
      },
      {
        id: "P3",
        title: "The Psychology of Expertise",
        wordCount: 860,
        text: `What distinguishes experts from novices in complex domains—chess, medicine, music, athletics—has long fascinated psychologists seeking to understand skilled performance and how it develops. Research into expertise has revealed both the remarkable capabilities that extensive practice produces and the limitations and vulnerabilities that persist even among the highly skilled. These findings have implications for education, training, and assessment across professional and artistic fields.

The classic finding in expertise research concerns the role of domain-specific knowledge organized in meaningful patterns. Chess masters can glance at board positions from actual games and reproduce them accurately, but perform no better than novices with randomly arranged pieces. This suggests that expertise involves not superior memory in general but memory for meaningful configurations within the domain. Experts see patterns where novices see individual elements, enabling rapid recognition and response that appears almost intuitive.

The acquisition of expertise typically requires extended practice, famously quantified in the "ten-thousand-hour rule" popularized from studies of musicians and athletes. However, subsequent research has complicated this picture. Practice quantity alone does not guarantee expertise; practice quality matters greatly. "Deliberate practice"—focused effort on improving specific weaknesses with immediate feedback—produces better results than mere repetition. Additionally, individual differences in aptitude and learning rate mean that the same practice investment yields different outcomes across individuals.

The knowledge structures that enable expert performance also create characteristic limitations. Experts can become trapped by familiar patterns, failing to notice when situations deviate from expectations. Automation of skilled responses—essential for fluent performance—can prevent the flexible analysis that novel problems require. Overconfidence in domain judgment may extend inappropriately to areas beyond actual expertise. These vulnerabilities help explain why experts sometimes fail spectacularly at tasks within their nominal domain.

Transfer of expertise across domains proves more limited than intuition might suggest. Skills developed in one context often fail to generalize to others, even when they appear related. Chess masters do not become better logical reasoners generally; medical experts in one specialty may struggle with problems in another. This specificity of expertise challenges educational approaches that emphasize general thinking skills over domain-specific knowledge, though some higher-level metacognitive abilities may transfer more broadly.

Assessment of expertise raises methodological challenges. Credentials and experience correlate imperfectly with actual performance, yet direct performance assessment is often impractical or impossible. In fields where feedback is delayed, ambiguous, or absent—like medicine or economic forecasting—expertise may fail to develop despite lengthy experience because learning from outcomes is impaired. Distinguishing genuine expertise from confident presentation requires careful evaluation that simple markers of credentials or experience cannot provide.

The development of artificial intelligence has created new perspectives on expertise. In some domains, AI systems now match or exceed human expert performance, raising questions about the future value of human expertise and how humans and machines might complement each other. The study of expertise thus connects fundamental questions about human cognition with practical issues of education, professional development, and the changing nature of skilled work in an automated world.`,
        questions: [
          { id: 27, type: "tfng", text: "Chess masters perform better with randomly arranged pieces than novices.", answer: "False" },
          { id: 28, type: "tfng", text: "Practice quantity alone guarantees the development of expertise.", answer: "False" },
          { id: 29, type: "tfng", text: "Deliberate practice involves focused effort on specific weaknesses.", answer: "True" },
          { id: 30, type: "tfng", text: "Expertise transfers easily across all related domains.", answer: "False" },
          { id: 31, type: "tfng", text: "AI systems now match human performance in some domains.", answer: "True" },
          { id: 32, type: "matching", text: "Focused practice with immediate feedback", answer: "deliberate practice" },
          { id: 33, type: "matching", text: "Failing to notice deviations from expectations", answer: "pattern trapping" },
          { id: 34, type: "matching", text: "Skills often fail to generalize to other contexts", answer: "transfer limitation" },
          { id: 35, type: "mcq", text: "What do experts see that novices see as individual elements?", options: ["A. Random information", "B. Patterns", "C. Simple facts", "D. General knowledge"], answer: "B" },
          { id: 36, type: "mcq", text: "What prevents flexible analysis in experts?", options: ["A. Lack of knowledge", "B. Automation of responses", "C. Too much feedback", "D. Limited practice"], answer: "B" },
          { id: 37, type: "mcq", text: "In which fields may expertise fail to develop despite experience?", options: ["A. Fields with immediate feedback", "B. Fields with delayed or absent feedback", "C. Simple domains", "D. Physical skills only"], answer: "B" },
          { id: 38, type: "mcq", text: "What do credentials correlate imperfectly with?", options: ["A. Education level", "B. Actual performance", "C. Practice hours", "D. Domain knowledge"], answer: "B" },
          { id: 39, type: "short", text: "How many hours of practice does the famous rule specify? (HYPHENATED)", answer: "ten-thousand" },
          { id: 40, type: "short", text: "What type of abilities may transfer more broadly? (ONE WORD)", answer: "metacognitive" }
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
        text: `Time is among the most familiar yet most puzzling features of human experience. We measure it, manage it, and mark its passage, yet philosophers and physicists continue to debate whether time flows, whether the future is determined, and whether time itself is fundamental to reality or emerges from more basic physical processes. These questions, at the intersection of philosophy, physics, and psychology, illuminate the deep conceptual challenges that time presents.

Our ordinary experience of time involves a sense of flow from past through present toward future, with the present moment possessing a special reality that past and future lack. We remember the past but not the future; we can influence future events but not past ones. This asymmetry seems built into the fabric of experience, giving time a direction that space lacks. The "arrow of time" feels as real and fundamental as time itself.

However, the equations of fundamental physics contain no inherent time direction. The laws governing particle interactions work equally well forward or backward in time. The statistical mechanics underlying thermodynamics explains the arrow of time through entropy increase, but this explanation remains controversial—why did entropy start low enough to increase? Cosmological explanations pointing to boundary conditions at the Big Bang push the question back but do not resolve it. The direction of time, so vivid in experience, remains puzzling in physical terms.

Philosophical disputes about time center on its ontological status—what aspects of time truly exist. Presentism holds that only the present moment exists; past and future are not real in the same sense. Eternalism contends that all times exist equally, with past, present, and future representing different locations in a four-dimensional block universe rather than different modes of being. Growing block theory proposes that the past and present exist but the future does not, with reality accumulating as time passes.

These positions connect to debates about free will and determinism. If the future already exists in some sense, can our choices genuinely affect what happens? Block universe interpretations suggest that our sense of open possibilities may be illusory, though defenders argue that reality can be determined without being deterministic. The relationship between time's metaphysics and human agency remains philosophically contested.

The psychology of time perception adds further complexity. Subjective experience of duration varies with attention, emotion, and memory. Time seems to speed up with age and slow down in emergencies. These variations reveal that our sense of time is a construction of the mind rather than a direct perception of an external flow. Whether this construction corresponds to any objective temporal reality or creates an illusion of passage remains debated.

Quantum mechanics and general relativity further complicate the picture. Quantum entanglement exhibits correlations across space that seem to transcend normal temporal ordering. General relativity reveals that time passes differently depending on gravity and velocity, making simultaneity relative rather than absolute. Efforts to unify quantum mechanics and gravity may require reconceptualizing time fundamentally—perhaps treating it as emergent from more basic structures rather than fundamental itself.

These investigations matter beyond academic philosophy. Our temporal experience shapes planning, memory, regret, anticipation, and much of what makes life meaningful. Understanding time better—whether through physics, philosophy, or psychology—illuminates the human condition even if complete answers remain elusive.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to time's puzzles", "ii. Psychological perception", "iii. Quantum mechanics", "iv. Free will debates"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Physics equations", "ii. Experience of temporal flow", "iii. Eternalism explained", "iv. Brain construction"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. The physics of time's direction", "ii. Memory formation", "iii. Free will", "iv. Quantum time"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Psychological time", "ii. Competing theories of time's existence", "iii. General relativity", "iv. Agency questions"], answer: "ii" },
          { id: 5, type: "tfng", text: "Physical laws work equally well forward and backward in time.", answer: "True" },
          { id: 6, type: "tfng", text: "Presentism holds that past, present, and future all equally exist.", answer: "False" },
          { id: 7, type: "tfng", text: "Subjective time experience varies with emotion and attention.", answer: "True" },
          { id: 8, type: "tfng", text: "General relativity shows time passes the same everywhere.", answer: "False" },
          { id: 9, type: "tfng", text: "Complete answers about time have been achieved.", answer: "False" },
          { id: 10, type: "short", text: "What phrase describes the direction of time? (THREE WORDS)", answer: "arrow of time" },
          { id: 11, type: "short", text: "What theory holds only the present exists? (ONE WORD)", answer: "presentism" },
          { id: 12, type: "short", text: "What increases according to thermodynamics? (ONE WORD)", answer: "entropy" },
          { id: 13, type: "short", text: "What type of correlations does quantum entanglement exhibit? (ONE WORD)", answer: "correlations" }
        ]
      },
      {
        id: "P2",
        title: "Rewilding and Conservation Strategy",
        wordCount: 850,
        text: `Rewilding has emerged as a provocative and contested approach to conservation that challenges traditional practices focused on preserving existing ecosystems in their current states. Instead of maintaining nature as we find it, rewilding advocates propose restoring ecological processes—particularly those involving large animals—that have been lost or diminished through human activity. This approach has generated enthusiasm for its ambitious vision while also provoking criticism about feasibility, safety, and appropriate human relationships with nature.

The conceptual foundations of rewilding rest on evidence that ecosystems shaped by large animals differ substantially from those without them. Large herbivores and carnivores exert "top-down" influences that cascade through food webs, affecting vegetation, smaller animals, and even physical landscape features. The reintroduction of wolves to Yellowstone National Park, for example, is credited with triggering changes that rippled through the ecosystem—from elk behavior to vegetation patterns to stream morphology. Rewilding aims to restore such ecological dynamics where they have been lost.

Rewilding proposals vary considerably in ambition. At one end, projects focus on restoring locally extirpated species to areas where they recently occurred—wolves to Scotland, beavers to English rivers. More ambitious visions propose introducing functional analogs of extinct megafauna—using Asian elephants to replicate ecological functions of mammoths in northern landscapes, or introducing African lions to substitute for extinct American lions. These "Pleistocene rewilding" proposals have attracted both fascination and fierce criticism.

Practical challenges are substantial. Large predators require extensive territories and inevitably come into conflict with human activities, particularly livestock agriculture. Public acceptance varies enormously—wolves generate both enthusiasm and hostility depending on stakeholder perspectives. Ecosystems have changed since large animals disappeared, and reintroductions may not recreate historical conditions. The unpredictability of ecological responses makes outcomes uncertain, raising questions about whether rewilding experiments might cause unforeseen harms.

The relationship between rewilding and rural communities requires careful attention. Rewilding projects have sometimes been perceived as elite impositions that disregard local livelihoods and land use traditions. Agricultural communities bear disproportionate costs from wildlife conflicts while conservation benefits accrue more broadly. Successful rewilding likely requires genuine engagement with affected communities, compensation mechanisms for losses, and attention to how conservation relates to rural economies and cultures.

Critics raise philosophical objections as well as practical ones. The aspiration to restore "wild" nature may romanticize a past that never existed in the idealized form imagined. Human influences on landscapes extend back millennia; distinguishing "natural" from "anthropogenic" states proves difficult. Some argue that embracing novel ecosystems adapted to current conditions represents a more realistic and perhaps more ethical approach than attempting to recreate past states that may be unachievable and whose value is assumed rather than demonstrated.

Despite these challenges, rewilding has energized conservation discourse and generated projects that are testing its premises. The outcomes of ongoing initiatives will provide evidence about what rewilding can realistically achieve, what limitations it faces, and how it might complement rather than replace other conservation approaches.`,
        questions: [
          { id: 14, type: "yng", text: "Traditional conservation focuses on preserving current ecosystem states.", answer: "Yes" },
          { id: 15, type: "yng", text: "Large animals have minimal effects on ecosystems.", answer: "No" },
          { id: 16, type: "yng", text: "Pleistocene rewilding proposes using analogs of extinct animals.", answer: "Yes" },
          { id: 17, type: "yng", text: "Public acceptance of predator reintroduction is uniform.", answer: "No" },
          { id: 18, type: "yng", text: "Human influence on landscapes extends back millennia.", answer: "Yes" },
          { id: 19, type: "mcq", text: "What did wolf reintroduction to Yellowstone reportedly trigger?", options: ["A. No changes", "B. Cascade effects through ecosystem", "C. Increased elk populations", "D. Simplified food webs"], answer: "B" },
          { id: 20, type: "mcq", text: "What do large predators inevitably come into conflict with?", options: ["A. Other predators only", "B. Human activities", "C. Climate change", "D. Conservation goals"], answer: "B" },
          { id: 21, type: "mcq", text: "What have rewilding projects sometimes been perceived as?", options: ["A. Community initiatives", "B. Economic opportunities", "C. Elite impositions", "D. Scientific experiments"], answer: "C" },
          { id: 22, type: "mcq", text: "What do critics suggest about 'wild' nature?", options: ["A. It is easily restored", "B. It may romanticize an idealized past", "C. It always existed", "D. It requires no human intervention"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Large animals exert 'top-down' influences through food ________.", answer: "webs" },
          { id: 24, type: "summary", text: "Complete: Agricultural communities bear disproportionate ________ from wildlife conflicts.", answer: "costs" },
          { id: 25, type: "summary", text: "Complete: Novel ecosystems are adapted to ________ conditions.", answer: "current" },
          { id: 26, type: "summary", text: "Complete: Rewilding has ________ conservation discourse.", answer: "energized" }
        ]
      },
      {
        id: "P3",
        title: "Artificial General Intelligence: Possibilities and Risks",
        wordCount: 870,
        text: `The prospect of artificial general intelligence—AI systems that match or exceed human cognitive capabilities across all domains—has moved from science fiction speculation toward serious research programs and policy concerns. While current AI excels at narrow tasks, general intelligence that could flexibly address any intellectual challenge remains elusive. The path to AGI, its likely characteristics, and its implications for humanity are subjects of intense debate among researchers, philosophers, and policymakers wrestling with possibly the most consequential technology humanity might develop.

Current AI systems, despite impressive capabilities, operate within narrow domains defined by their training. A chess-playing AI cannot compose music; a language model cannot navigate physical environments. Human intelligence, by contrast, exhibits remarkable flexibility—the same mind that masters language also reasons about mathematics, navigates social relationships, and solves novel problems never previously encountered. Achieving this generality in artificial systems presents challenges that incremental improvements to current approaches may or may not overcome.

Researchers disagree about how far we are from AGI and what approaches might achieve it. Some anticipate transformative progress within decades through scaling current methods—larger neural networks trained on more data with more computation. Others believe fundamental conceptual breakthroughs are required that no one can currently envision. The uncertainty itself is significant: if transformative AI is coming, humanity should prepare; but preparing for something whose timing and characteristics remain unknown presents obvious difficulties.

The potential benefits of AGI are immense. Intelligence is fundamentally useful—it enables solving problems, achieving goals, and understanding phenomena. Artificial intelligence that matched human capabilities while operating at computational speeds could accelerate scientific discovery, solve coordination problems, and create abundance that improves human welfare. These possibilities inspire much AGI research and investment.

However, the risks have attracted increasing attention. An AGI system with goals misaligned with human values could pursue those goals in ways harmful to humanity, potentially catastrophically so if the system possesses superior capabilities. The "alignment problem"—ensuring AI systems pursue objectives that humans actually want—may be substantially harder than achieving AGI capabilities themselves. We do not currently know how to specify human values precisely enough to encode them in AI systems or how to verify that systems possess the values we intend.

Even well-aligned AGI raises governance challenges. Concentration of such powerful capabilities could enable unprecedented control over society. Competition among developers might create pressures to deploy systems before safety is adequately assured. The global nature of AI development complicates national regulation. International coordination on AI governance remains nascent despite growing recognition of its importance.

Some researchers advocate slowing or pausing certain AGI research until safety challenges are better understood. Others argue that competitive dynamics make such coordination infeasible and that safety research must proceed alongside capability development. The difficulty of these governance questions matches the technical challenges—perhaps exceeding them—as humanity confronts a technology that could transform civilization in ways both wonderful and terrible.

Whether AGI arrives in decades or centuries, and whether it proves beneficial or catastrophic, may depend on decisions made today about research priorities, safety investments, and governance frameworks. The stakes could not be higher, yet the uncertainty surrounding nearly every relevant question makes wise action exceptionally difficult.`,
        questions: [
          { id: 27, type: "tfng", text: "Current AI systems operate flexibly across all domains.", answer: "False" },
          { id: 28, type: "tfng", text: "Researchers agree on when AGI will be achieved.", answer: "False" },
          { id: 29, type: "tfng", text: "The alignment problem concerns ensuring AI pursues human-compatible goals.", answer: "True" },
          { id: 30, type: "tfng", text: "International coordination on AI governance is well-established.", answer: "False" },
          { id: 31, type: "tfng", text: "Some researchers advocate pausing certain AGI research.", answer: "True" },
          { id: 32, type: "matching", text: "AI matching human capabilities across all domains", answer: "artificial general intelligence" },
          { id: 33, type: "matching", text: "Ensuring AI systems pursue intended objectives", answer: "alignment problem" },
          { id: 34, type: "matching", text: "Pressures from developers racing to deploy", answer: "competitive dynamics" },
          { id: 35, type: "mcq", text: "What do current AI systems lack compared to human intelligence?", options: ["A. Processing speed", "B. Flexibility across domains", "C. Training data", "D. Computational power"], answer: "B" },
          { id: 36, type: "mcq", text: "What could accelerate scientific discovery?", options: ["A. Narrow AI only", "B. Human intelligence alone", "C. AGI matching human capabilities", "D. Less computation"], answer: "C" },
          { id: 37, type: "mcq", text: "What might misaligned AGI pursue harmfully?", options: ["A. Human values", "B. Its own goals", "C. Safety research", "D. Governance frameworks"], answer: "B" },
          { id: 38, type: "mcq", text: "What complicates national AI regulation?", options: ["A. Lack of interest", "B. Global nature of development", "C. Simple technology", "D. Uniform standards"], answer: "B" },
          { id: 39, type: "short", text: "What type of intelligence operates across all domains? (ONE WORD)", answer: "general" },
          { id: 40, type: "short", text: "What remains nascent despite growing recognition? (THREE WORDS)", answer: "international coordination" }
        ]
      }
    ]
  },

  // ============================================================
  // R18 - ADVANCED (Band 7.5-8.0)
  // ============================================================
  {
    id: "R18",
    level: "Advanced",
    bandTarget: "7.5-8.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Consciousness and the Mind-Body Problem",
        wordCount: 890,
        text: `The nature of consciousness remains one of the most profound and contentious questions in philosophy and science. How does subjective experience arise from the physical processes of the brain? Why does the sensation of seeing red feel a particular way, distinct from seeing blue or hearing a sound? These questions, which constitute what philosophers call the "mind-body problem," have generated centuries of debate and continue to resist definitive resolution despite remarkable advances in neuroscience.

Dualist approaches, historically dominant in Western philosophy, posit that mind and body are fundamentally distinct substances. René Descartes famously argued that the mind, being non-physical and indivisible, differs categorically from the extended, divisible matter of the body. This position appeals to intuitions about the apparent irreducibility of mental experience to physical description, yet it faces the persistent challenge of explaining how non-physical mind could interact with physical brain—the so-called interaction problem that troubled Descartes himself.

Materialist or physicalist positions maintain that consciousness is ultimately physical, arising from or being identical to brain processes. Identity theory proposes that mental states simply are brain states, while functionalism suggests that mental states are defined by their causal roles rather than their physical substrate. These approaches align with scientific methodology and have gained adherents as neuroscience has revealed increasingly detailed correlations between brain activity and mental states. Yet critics argue that no amount of physical description explains why there is subjective experience at all.

The philosopher David Chalmers has influentially distinguished between "easy problems" and the "hard problem" of consciousness. Easy problems—explaining cognitive functions like attention, memory, and verbal report—may be difficult in practice but present no fundamental conceptual obstacle. The hard problem asks why these functions are accompanied by subjective experience. Chalmers argues that physical explanations leave this question untouched, suggesting that consciousness may be a fundamental feature of reality not reducible to physical processes.

Neuroscience has made remarkable progress in correlating conscious states with brain activity. Studies of patients with brain damage reveal which regions are necessary for various aspects of consciousness. Neuroimaging allows researchers to identify neural correlates of conscious perception. Theories like Global Workspace Theory and Integrated Information Theory attempt to explain consciousness in terms of specific patterns of neural activity or information processing. Yet whether these approaches genuinely explain consciousness or merely describe its physical correlates remains disputed.

Questions about consciousness extend to practical and ethical domains. If consciousness arises from certain patterns of information processing, might artificial systems achieve consciousness? What moral status would such systems possess? How should we assess consciousness in non-human animals or in humans with severe brain damage? The answers to these questions depend partly on theoretical understanding of consciousness that we do not yet possess.

The persistence of the mind-body problem reflects deep tensions between subjective experience and objective description, between first-person perspective and third-person science. Some philosophers argue that these tensions reveal limitations in our conceptual frameworks rather than properties of reality. Others suggest that consciousness may require fundamentally new scientific paradigms or even transcend scientific explanation altogether. The debate continues, driven by both philosophical analysis and empirical discovery, toward resolution that remains elusive.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. The enduring mystery of consciousness", "ii. Neuroscience solutions", "iii. Dualist philosophy", "iv. Practical applications"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Materialist perspectives", "ii. Dualist mind-body distinction", "iii. The hard problem", "iv. Neural correlates"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Physical approaches to consciousness", "ii. Ethical implications", "iii. Descartes' argument", "iv. Scientific limitations"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Brain damage studies", "ii. Chalmers' distinction of problems", "iii. Artificial consciousness", "iv. Information theory"], answer: "ii" },
          { id: 5, type: "tfng", text: "Descartes believed mind and body are the same substance.", answer: "False" },
          { id: 6, type: "tfng", text: "Functionalism defines mental states by their causal roles.", answer: "True" },
          { id: 7, type: "tfng", text: "The hard problem concerns cognitive functions like memory.", answer: "False" },
          { id: 8, type: "tfng", text: "Neuroscience has definitively solved the mind-body problem.", answer: "False" },
          { id: 9, type: "tfng", text: "Some philosophers believe consciousness may transcend scientific explanation.", answer: "True" },
          { id: 10, type: "short", text: "Who distinguished between easy and hard problems of consciousness? (ONE NAME)", answer: "Chalmers" },
          { id: 11, type: "short", text: "What problem did dualism face regarding mind-body interaction? (TWO WORDS)", answer: "interaction problem" },
          { id: 12, type: "short", text: "What theory proposes mental states are brain states? (TWO WORDS)", answer: "identity theory" },
          { id: 13, type: "short", text: "What allows researchers to identify neural correlates? (ONE WORD)", answer: "neuroimaging" }
        ]
      },
      {
        id: "P2",
        title: "Biodiversity Loss and Ecosystem Services",
        wordCount: 860,
        text: `The current rate of species extinction exceeds natural background rates by orders of magnitude, prompting scientists to characterize the present era as Earth's sixth mass extinction event. Unlike previous mass extinctions triggered by natural catastrophes, this crisis results primarily from human activities: habitat destruction, overexploitation, pollution, invasive species, and climate change. Understanding the implications of biodiversity loss requires examining the complex relationships between species diversity and the ecosystem services upon which human societies depend.

Ecosystem services encompass the benefits that natural systems provide to humanity, conventionally categorized as provisioning services (food, water, materials), regulating services (climate regulation, water purification, pollination), cultural services (recreation, aesthetic value, spiritual significance), and supporting services (nutrient cycling, soil formation). These services underpin human well-being and economic activity, though their value is often unrecognized until degradation makes their importance apparent.

The relationship between biodiversity and ecosystem function has been extensively studied, revealing several important patterns. Species-rich ecosystems generally exhibit greater productivity, more efficient resource use, and greater stability in the face of environmental variation. Functional redundancy—multiple species performing similar ecological roles—provides insurance against the loss of individual species. However, this redundancy has limits; as species losses accumulate, ecosystem functions eventually decline, sometimes abruptly when keystone species or critical thresholds are affected.

Pollination illustrates biodiversity's economic importance. Approximately seventy-five percent of crop species depend at least partly on animal pollination, with services valued globally at hundreds of billions of dollars annually. Pollinator populations, including bees, butterflies, and other insects, have declined substantially in many regions due to habitat loss, pesticide exposure, disease, and climate change. These declines threaten agricultural productivity and food security, demonstrating how biodiversity loss can translate into tangible economic and social consequences.

Beyond utilitarian value, biodiversity possesses intrinsic worth that many philosophers and traditions recognize. Species represent millions of years of evolutionary history; their extinction forecloses possibilities that cannot be recovered. Arguments for biodiversity conservation thus rest on multiple foundations: economic self-interest, ecological prudence, and ethical obligations to other species and future generations. These foundations sometimes align and sometimes conflict, creating complex policy challenges.

Conservation strategies must address biodiversity loss at multiple scales. Protected areas preserve habitat for species unable to persist in human-dominated landscapes. Sustainable management practices can maintain biodiversity in agricultural, forestry, and fishing systems. Restoration efforts attempt to recover degraded ecosystems, though restoration typically cannot fully replicate original ecological communities. International agreements and national policies establish frameworks for conservation, though implementation and enforcement remain inconsistent.

The trajectory of biodiversity under climate change presents particular challenges. Species must either adapt to changing conditions, shift their ranges to track suitable climate, or face extinction. Many species cannot move quickly enough to keep pace with projected climate change, particularly those in fragmented landscapes where dispersal is impeded. Climate-adapted conservation planning attempts to anticipate these challenges, but substantial uncertainty complicates decision-making.`,
        questions: [
          { id: 14, type: "yng", text: "Current extinction rates match natural background rates.", answer: "No" },
          { id: 15, type: "yng", text: "Ecosystem services include climate regulation.", answer: "Yes" },
          { id: 16, type: "yng", text: "Species-rich ecosystems are generally more stable.", answer: "Yes" },
          { id: 17, type: "yng", text: "Restoration can fully replicate original ecological communities.", answer: "No" },
          { id: 18, type: "yng", text: "All species can move quickly enough to adapt to climate change.", answer: "No" },
          { id: 19, type: "mcq", text: "What percentage of crop species depend on animal pollination?", options: ["A. 25 percent", "B. 50 percent", "C. 75 percent", "D. 90 percent"], answer: "C" },
          { id: 20, type: "mcq", text: "What does functional redundancy provide?", options: ["A. Increased extinction", "B. Insurance against species loss", "C. Reduced productivity", "D. Economic decline"], answer: "B" },
          { id: 21, type: "mcq", text: "What threatens pollinator populations?", options: ["A. Habitat loss and pesticides", "B. Increased food production", "C. Climate stability", "D. Protected areas"], answer: "A" },
          { id: 22, type: "mcq", text: "What complicates species range shifts?", options: ["A. Connected landscapes", "B. Fragmented landscapes", "C. Stable climate", "D. International agreements"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Species extinction forecloses ________ that cannot be recovered.", answer: "possibilities" },
          { id: 24, type: "summary", text: "Complete: Conservation arguments rest on economic, ecological, and ________ foundations.", answer: "ethical" },
          { id: 25, type: "summary", text: "Complete: Protected areas preserve habitat for species unable to persist in ________ landscapes.", answer: "human-dominated" },
          { id: 26, type: "summary", text: "Complete: Climate-adapted conservation involves substantial ________.", answer: "uncertainty" }
        ]
      },
      {
        id: "P3",
        title: "The Philosophy of Scientific Revolutions",
        wordCount: 870,
        text: `Thomas Kuhn's The Structure of Scientific Revolutions, published in 1962, transformed understanding of how science develops and changed the vocabulary used to discuss scientific change. Kuhn challenged the then-dominant view of science as a cumulative enterprise steadily approaching truth through the gradual accumulation of facts and theories. Instead, he proposed that science progresses through alternating periods of "normal science" and revolutionary transformation, with each period characterized by distinct "paradigms" that shape scientific thought and practice.

Normal science, in Kuhn's account, proceeds within the framework of an accepted paradigm—a constellation of beliefs, values, techniques, and exemplary achievements that define legitimate problems and methods for a scientific community. Scientists engaged in normal science do not question fundamental assumptions; rather, they extend and articulate the paradigm, solving puzzles whose solutions are expected to conform to established frameworks. This puzzle-solving activity is productive precisely because it focuses effort on tractable problems rather than foundational questions.

Anomalies—observations or experimental results that resist explanation within the prevailing paradigm—inevitably accumulate during normal science. Initially, scientists typically attribute anomalies to experimental error or incomplete understanding rather than to fundamental flaws in the paradigm. Only when anomalies become sufficiently numerous or significant do they generate crisis, prompting scientists to question previously unquestioned assumptions and consider alternative frameworks.

Scientific revolutions occur when a new paradigm emerges that resolves persistent anomalies while retaining the explanatory achievements of its predecessor. The transition is not straightforwardly rational in the sense of being determined by evidence and logic alone; rather, it involves gestalt shifts in perception and judgment that Kuhn compared to religious conversion. Scientists who adopt the new paradigm literally see the world differently, and communication across paradigmatic boundaries faces fundamental obstacles because the meanings of key terms change with paradigm shifts.

Kuhn's concept of paradigm shift has been enormously influential, extending far beyond philosophy of science into popular discourse. However, the concept has also attracted substantial criticism. Kuhn's early formulation appeared to deny that science makes genuine progress toward truth, suggesting instead that paradigms are simply incommensurable—lacking common standards for comparison. This implication troubled scientists and philosophers who regarded truth-approximation as central to scientific enterprise.

Later interpreters have sought to preserve Kuhn's insights about the social and psychological dimensions of scientific change while softening the relativistic implications. Science may involve paradigm-bound perception without being entirely determined by paradigms. Different paradigms may be partially comparable even if not fully translatable. Revolutionary changes may represent genuine cognitive achievements rather than merely different ways of seeing. These modifications attempt to reconcile Kuhn's insights with the intuition that scientific revolutions represent, at least sometimes, progress in understanding.

The Structure of Scientific Revolutions continues to generate discussion six decades after publication. Its influence reflects both the power of Kuhn's analysis and the importance of the questions it addresses: How does scientific knowledge develop? What distinguishes science from other intellectual activities? How should we understand the relationship between scientific theories and reality? These questions remain central to philosophy of science and extend to broader debates about knowledge, rationality, and intellectual progress.`,
        questions: [
          { id: 27, type: "tfng", text: "Kuhn viewed science as purely cumulative progress toward truth.", answer: "False" },
          { id: 28, type: "tfng", text: "Normal science operates within accepted paradigms.", answer: "True" },
          { id: 29, type: "tfng", text: "Scientists immediately question paradigms when anomalies appear.", answer: "False" },
          { id: 30, type: "tfng", text: "Kuhn compared paradigm shifts to religious conversion.", answer: "True" },
          { id: 31, type: "tfng", text: "All critics agree with Kuhn's original formulation.", answer: "False" },
          { id: 32, type: "matching", text: "Observations resisting paradigmatic explanation", answer: "anomalies" },
          { id: 33, type: "matching", text: "Solving problems within established frameworks", answer: "normal science" },
          { id: 34, type: "matching", text: "Lacking common standards for comparison", answer: "incommensurable" },
          { id: 35, type: "mcq", text: "When was The Structure of Scientific Revolutions published?", options: ["A. 1952", "B. 1962", "C. 1972", "D. 1982"], answer: "B" },
          { id: 36, type: "mcq", text: "What generates crisis in normal science?", options: ["A. Successful puzzle-solving", "B. Accumulation of anomalies", "C. Religious conversion", "D. Popular discourse"], answer: "B" },
          { id: 37, type: "mcq", text: "What troubled critics about Kuhn's early formulation?", options: ["A. Its popularity", "B. Denial of progress toward truth", "C. Focus on psychology", "D. Historical examples"], answer: "B" },
          { id: 38, type: "mcq", text: "What do later interpreters try to preserve?", options: ["A. Relativistic implications only", "B. Social dimensions while softening relativism", "C. Purely cumulative progress", "D. Complete paradigm determination"], answer: "B" },
          { id: 39, type: "short", text: "What activity characterizes normal science? (TWO WORDS)", answer: "puzzle-solving" },
          { id: 40, type: "short", text: "What shifts does Kuhn describe in paradigm transitions? (ONE WORD)", answer: "gestalt" }
        ]
      }
    ]
  },

  // ============================================================
  // R19 - ADVANCED (Band 7.5-8.0)
  // ============================================================
  {
    id: "R19",
    level: "Advanced",
    bandTarget: "7.5-8.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Quantum Computing: Principles and Prospects",
        wordCount: 880,
        text: `Quantum computing represents a fundamentally different approach to information processing that exploits phenomena from quantum mechanics to perform calculations impossible or impractical for classical computers. While still in early stages of development, quantum computing has attracted enormous scientific and commercial interest for its potential to revolutionize cryptography, drug discovery, materials science, optimization, and artificial intelligence. Understanding quantum computing requires grappling with counterintuitive principles that challenge classical intuitions about information and computation.

Classical computers process information as bits—binary digits that are definitively either zero or one. Quantum computers instead use quantum bits, or qubits, which can exist in superposition—simultaneously representing both zero and one until measured. This superposition enables quantum computers to explore multiple computational pathways simultaneously rather than sequentially, providing exponential speedup for certain problems. When multiple qubits are entangled—correlated in ways that classical physics cannot explain—operations on one qubit instantaneously affect others regardless of physical separation.

Quantum algorithms exploit these properties to achieve computational advantages. Shor's algorithm, developed by mathematician Peter Shor in 1994, demonstrated that a sufficiently powerful quantum computer could factor large numbers exponentially faster than any known classical algorithm. Since the security of widely used encryption systems depends on the difficulty of factoring large numbers, this discovery prompted both concern about cryptographic vulnerability and excitement about quantum computing's potential. Grover's algorithm provides quadratic speedup for unstructured search problems, with applications ranging from database search to optimization.

Building practical quantum computers faces formidable engineering challenges. Qubits are extraordinarily fragile, losing their quantum properties through interaction with their environment—a process called decoherence. Maintaining qubits in coherent states requires extreme isolation, typically achieved through cooling to temperatures near absolute zero or using other sophisticated techniques. Error rates remain high compared to classical computers, necessitating error correction schemes that require many physical qubits per logical qubit. Current systems have achieved tens to hundreds of qubits, far short of the thousands or millions needed for many practical applications.

Different physical implementations of qubits are being pursued. Superconducting circuits, used by IBM and Google, employ electrical circuits cooled to millikelvin temperatures. Trapped ions, pursued by IonQ and Honeywell, use electromagnetic fields to suspend charged atoms whose quantum states serve as qubits. Photonic approaches encode information in light particles, potentially enabling room-temperature operation. Each approach has distinct advantages and challenges; which will prove most practical for scaled-up quantum computing remains uncertain.

Near-term applications focus on problems where even imperfect quantum computers may provide advantages. Quantum simulation of molecular systems could accelerate drug discovery and materials development by modeling quantum phenomena that classical computers struggle to represent. Quantum machine learning may enhance pattern recognition in certain domains. Quantum optimization might improve logistics, financial modeling, and resource allocation. However, claims about quantum advantage require careful scrutiny, as classical algorithms continue to improve and the boundary between quantum and classical capabilities remains contested.

The quantum computing industry has attracted substantial investment from technology companies, governments, and venture capital. Projections of market size vary enormously, reflecting uncertainty about when and for what problems quantum computers will provide practical value. Workforce development, standardization, and integration with classical computing infrastructure present additional challenges. Whether quantum computing fulfills its transformative promise depends on continued scientific progress and engineering innovation over the coming decades.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to quantum computing", "ii. Engineering challenges", "iii. Commercial investment", "iv. Classical bit processing"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Qubits and superposition", "ii. Shor's algorithm", "iii. Error correction", "iv. Physical implementations"], answer: "i" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Decoherence problems", "ii. Quantum algorithms and their advantages", "iii. Near-term applications", "iv. Market projections"], answer: "ii" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Investment trends", "ii. Engineering challenges for quantum computers", "iii. Algorithm development", "iv. Workforce development"], answer: "ii" },
          { id: 5, type: "tfng", text: "Classical bits can exist in superposition.", answer: "False" },
          { id: 6, type: "tfng", text: "Shor's algorithm was developed in 1994.", answer: "True" },
          { id: 7, type: "tfng", text: "Current quantum computers have millions of qubits.", answer: "False" },
          { id: 8, type: "tfng", text: "Superconducting qubits operate at room temperature.", answer: "False" },
          { id: 9, type: "tfng", text: "The boundary between quantum and classical capabilities is clearly established.", answer: "False" },
          { id: 10, type: "short", text: "What do qubits lose through environmental interaction? (TWO WORDS)", answer: "quantum properties" },
          { id: 11, type: "short", text: "What algorithm provides quadratic speedup for search? (ONE WORD)", answer: "Grover's" },
          { id: 12, type: "short", text: "What encryption vulnerability did Shor's algorithm reveal? (ONE WORD)", answer: "factoring" },
          { id: 13, type: "short", text: "What uses electromagnetic fields to suspend charged atoms? (TWO WORDS)", answer: "trapped ions" }
        ]
      },
      {
        id: "P2",
        title: "Economic Inequality and Social Mobility",
        wordCount: 850,
        text: `Economic inequality has increased substantially in many developed countries over recent decades, reversing earlier trends toward greater equality. This rise has prompted renewed attention to questions about inequality's causes, consequences, and appropriate policy responses. Understanding contemporary inequality requires examining both the distribution of income and wealth and the dynamics of social mobility that determine how economic position is transmitted across generations.

Income inequality, typically measured by the Gini coefficient or by comparing shares received by different portions of the population, has grown in most advanced economies since the 1980s. In the United States, the share of total income received by the top one percent has more than doubled since 1980, returning to levels not seen since the 1920s. Wealth inequality, measuring accumulated assets rather than annual income, is even more pronounced; the wealthiest households hold vastly disproportionate shares of total wealth.

Multiple factors contribute to rising inequality. Technological change has increased returns to education and skills while automating many middle-income occupations. Globalization has expanded labor markets, benefiting some workers while displacing others. Declining unionization has reduced worker bargaining power. Tax policy changes have reduced top marginal rates. Financial sector growth has generated extreme compensation for successful participants. Assigning relative weights to these factors remains contested among economists.

Social mobility describes the extent to which individuals' economic outcomes depend on their family origins. High mobility suggests opportunity: children born into poverty can rise to prosperity through talent and effort. Low mobility suggests inherited advantage: economic position passes from parent to child regardless of individual merit. Studies comparing economic outcomes across generations reveal substantial variation in mobility across countries, with Nordic countries generally showing higher mobility than the United States or United Kingdom.

The relationship between inequality and mobility is complex. The "Great Gatsby Curve," identified by economist Alan Krueger, documents a negative correlation between inequality and intergenerational mobility across countries: more unequal societies tend to exhibit lower mobility. This pattern suggests that high inequality may impede opportunity by reducing access to education, healthcare, and social networks for those born into disadvantage. However, causal mechanisms remain debated, and country-specific factors complicate international comparisons.

Consequences of inequality extend beyond individual welfare to societal outcomes. Research has linked inequality to reduced economic growth, diminished social cohesion, lower levels of trust, poorer health outcomes, and political instability. However, these relationships are contested, with some economists arguing that inequality provides incentives for effort and innovation that ultimately benefit all. The optimal level of inequality, if such exists, depends on value judgments about equity and efficiency that economics alone cannot resolve.

Policy responses to inequality involve tradeoffs. Progressive taxation redistributes income but may reduce incentives for productive activity. Social programs support disadvantaged populations but require funding and may create dependency. Educational investment expands opportunity but takes time to affect inequality. Labor market regulations protect workers but may reduce employment. Navigating these tradeoffs requires balancing competing values and acknowledging uncertainty about policy effects.`,
        questions: [
          { id: 14, type: "yng", text: "Income inequality has decreased in most developed countries since the 1980s.", answer: "No" },
          { id: 15, type: "yng", text: "Wealth inequality is less pronounced than income inequality.", answer: "No" },
          { id: 16, type: "yng", text: "Nordic countries generally show higher social mobility than the US.", answer: "Yes" },
          { id: 17, type: "yng", text: "The Great Gatsby Curve shows inequality correlates with lower mobility.", answer: "Yes" },
          { id: 18, type: "yng", text: "Economists agree on the optimal level of inequality.", answer: "No" },
          { id: 19, type: "mcq", text: "What has happened to the top one percent's income share since 1980?", options: ["A. Halved", "B. Remained stable", "C. More than doubled", "D. Decreased slightly"], answer: "C" },
          { id: 20, type: "mcq", text: "What does high social mobility suggest?", options: ["A. Inherited advantage", "B. Economic opportunity", "C. Fixed positions", "D. Reduced growth"], answer: "B" },
          { id: 21, type: "mcq", text: "Who identified the Great Gatsby Curve?", options: ["A. Thomas Piketty", "B. Alan Krueger", "C. Milton Friedman", "D. John Keynes"], answer: "B" },
          { id: 22, type: "mcq", text: "What has declined, reducing worker bargaining power?", options: ["A. Education", "B. Technology", "C. Unionization", "D. Globalization"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Technological change has increased returns to education and ________.", answer: "skills" },
          { id: 24, type: "summary", text: "Complete: Inequality has been linked to reduced growth and diminished social ________.", answer: "cohesion" },
          { id: 25, type: "summary", text: "Complete: Progressive taxation may reduce ________ for productive activity.", answer: "incentives" },
          { id: 26, type: "summary", text: "Complete: The optimal level of inequality depends on ________ judgments.", answer: "value" }
        ]
      },
      {
        id: "P3",
        title: "Linguistic Relativity and Thought",
        wordCount: 870,
        text: `The hypothesis that language shapes thought—known as linguistic relativity or the Sapir-Whorf hypothesis—has been debated for over a century. Do speakers of different languages perceive and conceptualize the world differently because of the languages they speak? This question touches fundamental issues in cognitive science, anthropology, and philosophy of mind, with implications for understanding human diversity and the nature of human cognition itself.

The hypothesis takes strong and weak forms. The strong version, linguistic determinism, holds that language determines thought—that we can only think what our language allows us to express. This extreme position finds little contemporary support, as humans clearly can think about concepts they lack words for and can learn new concepts from other languages. The weak version, linguistic relativism, suggests that language influences thought without determining it—that linguistic categories make certain thoughts more accessible or natural without making others impossible.

Benjamin Lee Whorf, the hypothesis's most influential early proponent, studied Native American languages and argued that their grammatical structures reflected fundamentally different ways of conceptualizing reality. His analysis of Hopi, for example, suggested that its grammatical treatment of time differed radically from European languages, implying different temporal concepts. However, Whorf's specific claims about Hopi have been challenged by subsequent research, and his methodology has been criticized for relying too heavily on linguistic structure as evidence for thought patterns.

Contemporary research has investigated linguistic relativity through controlled experiments examining how speakers of different languages perform on non-linguistic cognitive tasks. Studies of color perception have been particularly influential. Languages vary in how they divide the color spectrum into named categories; Russian, for example, distinguishes light blue from dark blue as separate basic colors while English treats them as variants of blue. Experiments have found that Russian speakers are faster at discriminating light from dark blue than English speakers, suggesting that linguistic categories affect perceptual processing.

Spatial reasoning provides another domain of investigation. Some languages describe space primarily in terms of relative directions (left, right), while others use absolute directions (north, south) even for small-scale spatial relations. Speakers of languages using absolute directions maintain awareness of cardinal orientation that speakers of relative-direction languages typically lack. This difference appears to reflect genuine cognitive variation shaped by linguistic practice rather than merely different ways of talking about the same underlying cognition.

Grammatical features beyond vocabulary have also received attention. Some languages obligatorily mark certain distinctions that other languages leave optional or unexpressed. Japanese requires speakers to mark social status relationships in verb forms. Turkish requires evidential markers indicating how speakers know what they assert. Research suggests these obligatory distinctions affect what information speakers attend to and remember, though effects are typically subtle rather than dramatic.

The current consensus recognizes that language does influence thought, but in more limited and specific ways than early proponents suggested. Language provides cognitive tools that facilitate certain patterns of thought without making others impossible. These effects are neither trivial nor all-encompassing; understanding their scope and mechanisms remains an active area of research at the intersection of linguistics, psychology, and cognitive science.`,
        questions: [
          { id: 27, type: "tfng", text: "Linguistic determinism has strong contemporary support.", answer: "False" },
          { id: 28, type: "tfng", text: "Whorf studied Native American languages.", answer: "True" },
          { id: 29, type: "tfng", text: "Whorf's claims about Hopi have been universally accepted.", answer: "False" },
          { id: 30, type: "tfng", text: "Russian distinguishes light and dark blue as separate basic colors.", answer: "True" },
          { id: 31, type: "tfng", text: "All languages use relative directions for spatial relations.", answer: "False" },
          { id: 32, type: "matching", text: "Language determines thought completely", answer: "linguistic determinism" },
          { id: 33, type: "matching", text: "Language influences without determining thought", answer: "linguistic relativism" },
          { id: 34, type: "matching", text: "Markers indicating how speakers know assertions", answer: "evidential markers" },
          { id: 35, type: "mcq", text: "What did Whorf argue about Hopi?", options: ["A. It lacked color terms", "B. Its temporal concepts differed from European languages", "C. It used relative directions", "D. It had no grammatical structure"], answer: "B" },
          { id: 36, type: "mcq", text: "What do color perception studies suggest?", options: ["A. All languages see color identically", "B. Linguistic categories affect perception", "C. Color terms are universal", "D. Language has no effect"], answer: "B" },
          { id: 37, type: "mcq", text: "What do Japanese verb forms mark?", options: ["A. Color distinctions", "B. Spatial relations", "C. Social status relationships", "D. Evidential sources"], answer: "C" },
          { id: 38, type: "mcq", text: "What is the current consensus on linguistic relativity?", options: ["A. Language completely determines thought", "B. Language has no effect on thought", "C. Language influences thought in limited ways", "D. Only vocabulary matters"], answer: "C" },
          { id: 39, type: "short", text: "What is another name for the Sapir-Whorf hypothesis? (TWO WORDS)", answer: "linguistic relativity" },
          { id: 40, type: "short", text: "What do speakers of absolute-direction languages maintain awareness of? (TWO WORDS)", answer: "cardinal orientation" }
        ]
      }
    ]
  },

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
        title: "The Economics of Climate Change Mitigation",
        wordCount: 880,
        text: `Climate change mitigation—reducing greenhouse gas emissions to limit future warming—presents an economic challenge of unprecedented scale and complexity. The costs and benefits of mitigation span generations and cross national boundaries, requiring coordination among actors with divergent interests and capacities. Economic analysis has shaped understanding of mitigation options and informed policy debates, though significant uncertainties and value judgments complicate any definitive prescriptions.

The economic case for mitigation rests on comparing the costs of reducing emissions against the damages avoided by limiting warming. Integrated assessment models attempt this comparison, projecting emissions trajectories, modeling climate responses, estimating economic damages from climate change, and calculating mitigation costs under various scenarios. These models have informed major climate assessments and policy discussions, though they involve substantial uncertainties at every stage and have been criticized for potentially underestimating climate damages.

Carbon pricing represents the economists' preferred approach to mitigation, internalizing the external costs of emissions by making polluters pay for climate damages. Carbon taxes directly set emission prices, while cap-and-trade systems limit total emissions and allow trading of emission permits. Both approaches create incentives for emission reductions wherever they are cheapest, theoretically achieving targets at minimum cost. However, implementation faces political obstacles, and concerns about competitiveness and distributional impacts have limited adoption.

The discount rate—how much future benefits and costs are reduced relative to present ones—profoundly affects mitigation economics. High discount rates imply that future climate damages matter little today, weakening the case for immediate mitigation investment. Low discount rates treat future generations more equally, strengthening mitigation arguments. The appropriate discount rate involves ethical judgments about intergenerational equity that economics alone cannot resolve, yet this choice dramatically affects policy conclusions.

Mitigation costs depend heavily on assumptions about technological change. If clean energy technologies continue improving rapidly and costs continue falling, transitioning to low-carbon systems becomes progressively cheaper. Optimistic technology assumptions suggest that ambitious mitigation targets can be achieved at modest cost; pessimistic assumptions imply prohibitive expenses. Real-world evidence from recent years—dramatic cost reductions in solar, wind, and battery technologies—has generally supported optimistic projections, though significant challenges remain for hard-to-decarbonize sectors.

The distribution of mitigation costs and benefits raises equity concerns. Developing countries contributed least to accumulated emissions yet face disproportionate climate impacts and have fewer resources for adaptation. Historical responsibility arguments suggest wealthy countries should bear greater mitigation burdens. Capacity arguments point to the same conclusion from different premises. International climate negotiations have struggled to translate these principles into burden-sharing arrangements that all parties find acceptable.

Co-benefits of mitigation—improvements in air quality, energy security, and public health that accompany emission reductions—can offset mitigation costs and build political support. In some cases, co-benefits alone may justify policies that happen to reduce emissions. Attention to co-benefits has expanded the coalition supporting climate action beyond those primarily motivated by climate concerns, though co-benefit calculations introduce additional uncertainties.

The pace of mitigation affects both costs and outcomes. Gradual transitions allow capital stock turnover, technology development, and economic adjustment, reducing disruption costs. However, delay locks in high-emission infrastructure and narrows options for limiting warming to target levels. Finding optimal timing requires balancing these considerations under substantial uncertainty about future technology, climate sensitivity, and societal preferences.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to mitigation economics", "ii. Carbon pricing mechanisms", "iii. Technology assumptions", "iv. Co-benefits analysis"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Discount rate debates", "ii. Cost-benefit analysis approaches", "iii. Equity considerations", "iv. Mitigation timing"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Carbon pricing approaches", "ii. Technology development", "iii. International negotiations", "iv. Future projections"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Co-benefits of mitigation", "ii. The discount rate's significance", "iii. Distributional concerns", "iv. Optimal timing"], answer: "ii" },
          { id: 5, type: "tfng", text: "Integrated assessment models involve no uncertainty.", answer: "False" },
          { id: 6, type: "tfng", text: "Carbon taxes directly set emission prices.", answer: "True" },
          { id: 7, type: "tfng", text: "High discount rates strengthen the case for immediate mitigation.", answer: "False" },
          { id: 8, type: "tfng", text: "Solar and wind costs have fallen dramatically.", answer: "True" },
          { id: 9, type: "tfng", text: "Developing countries contributed most to accumulated emissions.", answer: "False" },
          { id: 10, type: "short", text: "What do cap-and-trade systems limit? (TWO WORDS)", answer: "total emissions" },
          { id: 11, type: "short", text: "What type of judgments does discount rate choice involve? (ONE WORD)", answer: "ethical" },
          { id: 12, type: "short", text: "What improvements accompany emission reductions? (THREE WORDS)", answer: "air quality" },
          { id: 13, type: "short", text: "What does delay lock in? (THREE WORDS)", answer: "high-emission infrastructure" }
        ]
      },
      {
        id: "P2",
        title: "Neuroscience of Decision-Making",
        wordCount: 860,
        text: `Understanding how the brain makes decisions has become a central focus of cognitive neuroscience, with implications extending from basic science to economics, law, and artificial intelligence. Research has revealed that decision-making involves multiple interacting brain systems, challenging simplistic models of rational choice while providing insights into why humans sometimes make choices that appear irrational by economic standards.

The prefrontal cortex plays a crucial role in deliberative decision-making—weighing options, considering consequences, and implementing plans. Damage to prefrontal regions impairs these capacities, leading to poor decisions despite intact intelligence and knowledge. Patients with ventromedial prefrontal damage, famously studied by Antonio Damasio, can analyze choices intellectually yet make disastrous real-world decisions, suggesting that emotional processing contributes essentially to adaptive choice.

The reward system, centered on dopamine-releasing neurons in the midbrain and their projections to the nucleus accumbens and other structures, signals the value of outcomes and drives learning about rewards. This system responds not just to received rewards but to reward predictions and prediction errors—the difference between expected and actual outcomes. These signals enable learning from experience but also make the system vulnerable to manipulation by addictive substances and behaviors that artificially stimulate reward circuitry.

Research on intertemporal choice—decisions involving tradeoffs between immediate and delayed outcomes—has revealed neural correlates of time preference. Brain imaging studies have identified systems that respond preferentially to immediate rewards and others involved in patient, future-oriented choices. Individual differences in the balance between these systems correlate with real-world outcomes including saving behavior, health choices, and academic achievement.

The interplay between emotion and cognition in decision-making has received extensive attention. Rather than emotion distorting rational choice, evidence suggests that emotion often guides adaptive behavior by providing rapid assessments of options based on past experience. The somatic marker hypothesis, developed by Damasio, proposes that bodily feelings associated with past outcomes influence current decisions, often unconsciously. This perspective reframes emotion not as an obstacle to good decisions but as an essential input.

Social decisions involve additional neural machinery. Theory of mind—understanding others' mental states—engages regions including the temporoparietal junction and medial prefrontal cortex. Decisions about fairness, trust, and cooperation involve these regions along with reward and emotional systems. Economic games that model social interactions have been combined with brain imaging to reveal neural substrates of social preferences that standard economic models often ignore.

The neuroscience of decision-making has practical applications. Understanding reward system dysfunction informs approaches to addiction treatment. Knowledge of prefrontal development explains adolescent risk-taking and has influenced legal policies regarding juvenile responsibility. Insights into consumer decision-making are applied in marketing. However, translating neuroscience findings into policy raises ethical questions about autonomy, responsibility, and manipulation that extend beyond scientific evidence.

Individual differences in decision-making neural systems have implications for personalized interventions. Some people may benefit from strategies that strengthen prefrontal control; others may need approaches targeting reward sensitivity or emotional regulation. Identifying these differences and matching interventions accordingly represents a frontier in applying neuroscience to improve real-world decision-making.`,
        questions: [
          { id: 14, type: "yng", text: "The prefrontal cortex handles deliberative decision-making.", answer: "Yes" },
          { id: 15, type: "yng", text: "Patients with ventromedial prefrontal damage make excellent real-world decisions.", answer: "No" },
          { id: 16, type: "yng", text: "The reward system responds only to received rewards.", answer: "No" },
          { id: 17, type: "yng", text: "Emotion always distorts rational choice.", answer: "No" },
          { id: 18, type: "yng", text: "Adolescent risk-taking relates to prefrontal development.", answer: "Yes" },
          { id: 19, type: "mcq", text: "Who studied patients with ventromedial prefrontal damage?", options: ["A. Peter Shor", "B. Antonio Damasio", "C. Thomas Kuhn", "D. Alan Krueger"], answer: "B" },
          { id: 20, type: "mcq", text: "What do prediction errors measure?", options: ["A. Brain size", "B. Difference between expected and actual outcomes", "C. Prefrontal activity", "D. Emotional responses"], answer: "B" },
          { id: 21, type: "mcq", text: "What does the somatic marker hypothesis propose?", options: ["A. Emotions should be ignored", "B. Bodily feelings influence decisions", "C. Only cognition matters", "D. Rewards are irrelevant"], answer: "B" },
          { id: 22, type: "mcq", text: "What engages theory of mind regions?", options: ["A. Simple reward tasks", "B. Understanding others' mental states", "C. Motor control", "D. Visual processing"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Dopamine-releasing neurons signal the ________ of outcomes.", answer: "value" },
          { id: 24, type: "summary", text: "Complete: Addictive substances artificially stimulate reward ________.", answer: "circuitry" },
          { id: 25, type: "summary", text: "Complete: Time preference involves tradeoffs between immediate and ________ outcomes.", answer: "delayed" },
          { id: 26, type: "summary", text: "Complete: Personalized interventions represent a ________ in applying neuroscience.", answer: "frontier" }
        ]
      },
      {
        id: "P3",
        title: "International Law and State Sovereignty",
        wordCount: 870,
        text: `The relationship between international law and state sovereignty presents enduring tensions that shape global governance. Sovereignty, the principle that states possess supreme authority within their territories and are equal in their independence from external control, forms the foundation of the international system. Yet international law increasingly constrains what states may do domestically and requires cooperation on matters from trade to human rights to environmental protection. How these competing principles are balanced affects issues from humanitarian intervention to climate agreements.

The modern conception of sovereignty emerged from the Peace of Westphalia in 1648, which ended the Thirty Years' War by establishing that rulers would determine religious practice within their territories without external interference. This principle was subsequently generalized to other domains, creating a system of territorially defined states whose internal affairs were immune from outside intervention. The sovereign equality of states became a cornerstone of international relations and international law.

International law developed primarily as law between sovereigns—rules governing relations among states rather than within them. Treaties created binding obligations that states voluntarily accepted, and customary international law emerged from state practice accepted as legally obligatory. This consent-based system preserved sovereignty by making states the authors and subjects of international rules. States could not be bound without their agreement, and enforcement depended largely on reciprocity and reputation rather than coercion.

The twentieth century witnessed significant evolution. International institutions like the United Nations created forums for multilateral cooperation and dispute resolution. International human rights law established standards for how states must treat their own citizens, traditionally a purely domestic matter. International criminal law held individuals accountable for atrocities previously shielded by state sovereignty. Environmental agreements addressed transboundary problems requiring collective action. These developments constrained sovereignty in ways that the Westphalian system had not contemplated.

Humanitarian intervention illustrates the tensions most starkly. Traditional sovereignty prohibits intervention in states' internal affairs, yet massive human rights violations prompt demands for international response. The "Responsibility to Protect" doctrine, adopted by the UN General Assembly in 2005, holds that sovereignty entails responsibility to protect populations and that the international community may act when states manifestly fail this responsibility. However, disagreement persists about when intervention is legitimate and who may authorize it, as evidenced by controversies over interventions in Libya, Syria, and elsewhere.

International economic law constrains sovereignty through different mechanisms. Trade agreements restrict states' ability to impose tariffs and other barriers. Investment treaties protect foreign investors against certain government actions. These constraints are typically accepted voluntarily in exchange for reciprocal benefits, but they can limit democratic choices about economic policy in ways that generate domestic resistance. The tension between international economic commitments and domestic political demands has fueled backlash against globalization in many countries.

The future of the sovereignty-international law relationship remains contested. Some advocate deeper integration and stronger international institutions capable of addressing global challenges that states cannot solve individually. Others defend traditional sovereignty against perceived overreach by international bodies or powerful states acting under international pretexts. Finding appropriate balances requires ongoing negotiation among states with diverse interests, capacities, and perspectives on legitimate governance.`,
        questions: [
          { id: 27, type: "tfng", text: "The Peace of Westphalia established modern sovereignty concepts in 1648.", answer: "True" },
          { id: 28, type: "tfng", text: "Traditional international law governed matters within states.", answer: "False" },
          { id: 29, type: "tfng", text: "States can be bound by international law without their consent.", answer: "False" },
          { id: 30, type: "tfng", text: "The Responsibility to Protect was adopted in 2005.", answer: "True" },
          { id: 31, type: "tfng", text: "There is universal agreement on when humanitarian intervention is legitimate.", answer: "False" },
          { id: 32, type: "matching", text: "Supreme authority within territories", answer: "sovereignty" },
          { id: 33, type: "matching", text: "Rules emerging from accepted state practice", answer: "customary international law" },
          { id: 34, type: "matching", text: "Standards for how states treat citizens", answer: "human rights law" },
          { id: 35, type: "mcq", text: "What did the Peace of Westphalia end?", options: ["A. World War I", "B. The Thirty Years' War", "C. The Cold War", "D. Colonial rule"], answer: "B" },
          { id: 36, type: "mcq", text: "What does consent-based international law preserve?", options: ["A. Individual rights only", "B. State sovereignty", "C. Economic equality", "D. Military power"], answer: "B" },
          { id: 37, type: "mcq", text: "What has fueled backlash against globalization?", options: ["A. Environmental benefits", "B. Tension between economic commitments and domestic demands", "C. Increased sovereignty", "D. Reduced trade"], answer: "B" },
          { id: 38, type: "mcq", text: "What do investment treaties protect?", options: ["A. Domestic industries only", "B. Foreign investors", "C. State sovereignty", "D. Tariff rates"], answer: "B" },
          { id: 39, type: "short", text: "What principle forms the foundation of the international system? (ONE WORD)", answer: "sovereignty" },
          { id: 40, type: "short", text: "What doctrine holds sovereignty entails protection responsibility? (THREE WORDS)", answer: "responsibility to protect" }
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
        title: "The Evolution of Human Cooperation",
        wordCount: 870,
        text: `Human cooperation presents a puzzle for evolutionary theory. Natural selection typically favors traits that increase individual reproductive success, yet humans routinely cooperate with unrelated individuals, share resources, and maintain social norms even when defection would provide immediate advantages. Understanding how cooperation evolved and persists despite apparent fitness costs has become a major focus of research spanning evolutionary biology, anthropology, economics, and psychology.

Kin selection provides one explanation for cooperation among relatives. William Hamilton formalized this insight with the concept of inclusive fitness: genes can spread not only through an individual's own reproduction but through the reproduction of relatives who carry copies of the same genes. From this perspective, helping relatives can be favored by selection even at some cost to the helper, provided the benefit to relatives (discounted by genetic relatedness) exceeds the cost. Kin selection explains much cooperation within families and among close relatives, but humans also cooperate extensively with non-relatives.

Reciprocal altruism extends cooperation beyond kin. Robert Trivers proposed that natural selection can favor helping non-relatives if recipients are likely to reciprocate in the future. This requires that individuals interact repeatedly, can recognize each other, and can remember past interactions. Under these conditions, strategies that cooperate with cooperators and punish defectors can invade populations of pure defectors and resist invasion by them. However, reciprocal altruism struggles to explain cooperation in large groups or one-shot interactions where future reciprocity is unlikely.

Indirect reciprocity introduces reputation as a mechanism enabling cooperation among strangers. Individuals may help others not because they expect direct return but because helping enhances their reputation and increases the likelihood that third parties will help them in the future. This mechanism requires that information about individuals' cooperative behavior spreads through social networks. Language may have been particularly important for indirect reciprocity, enabling gossip and reputation management that support cooperation at scale.

Cultural group selection offers another perspective. While genetic group selection faces theoretical objections—migration and interbreeding tend to homogenize groups, preventing selection from acting on group-level traits—cultural variation between groups may be maintained more easily. If groups with more cooperative cultural norms outcompete less cooperative groups, selection at the group level can favor cooperation even when it is costly to individuals within groups. Cultural transmission of norms and institutions can maintain between-group variation that genetic transmission cannot.

The psychology of cooperation involves emotions and intuitions that evolved under ancestral conditions. Anger at norm violators motivates costly punishment that deters defection even when punishment provides no direct benefit to the punisher. Guilt and shame promote conformity to social expectations. Moral intuitions about fairness and reciprocity guide behavior in ways that supported cooperation in small-scale ancestral groups. Whether these psychological mechanisms adequately support cooperation in modern large-scale societies, where anonymity and mobility weaken reputation effects, remains debated.

Institutions—formal rules and organizations—extend cooperation beyond what informal mechanisms can sustain. Legal systems enforce contracts and punish defection. Political institutions coordinate collective action and provide public goods. Economic institutions structure exchange and reduce transaction costs. The evolution of increasingly sophisticated institutions has enabled human cooperation at scales far exceeding what any other species achieves, from multinational corporations to international agreements.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. The evolutionary puzzle of cooperation", "ii. Kin selection theory", "iii. Institutional development", "iv. Psychological mechanisms"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Reciprocal altruism", "ii. Kin selection and inclusive fitness", "iii. Cultural group selection", "iv. Reputation mechanisms"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Extending cooperation beyond kin", "ii. Institutional cooperation", "iii. Moral psychology", "iv. Language evolution"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Formal institutions", "ii. Genetic group selection", "iii. Reputation and indirect reciprocity", "iv. Ancestral conditions"], answer: "iii" },
          { id: 5, type: "tfng", text: "Natural selection typically favors traits increasing individual reproductive success.", answer: "True" },
          { id: 6, type: "tfng", text: "Kin selection explains all human cooperation.", answer: "False" },
          { id: 7, type: "tfng", text: "Reciprocal altruism requires repeated interactions.", answer: "True" },
          { id: 8, type: "tfng", text: "Genetic group selection faces no theoretical objections.", answer: "False" },
          { id: 9, type: "tfng", text: "Institutions have enabled cooperation at unprecedented scales.", answer: "True" },
          { id: 10, type: "short", text: "Who formalized inclusive fitness? (TWO WORDS)", answer: "William Hamilton" },
          { id: 11, type: "short", text: "Who proposed reciprocal altruism? (TWO WORDS)", answer: "Robert Trivers" },
          { id: 12, type: "short", text: "What may have been important for indirect reciprocity? (ONE WORD)", answer: "language" },
          { id: 13, type: "short", text: "What motivates costly punishment of norm violators? (ONE WORD)", answer: "anger" }
        ]
      },
      {
        id: "P2",
        title: "Digital Democracy and Political Participation",
        wordCount: 850,
        text: `Digital technologies have transformed political communication and participation in ways that inspire both optimism and concern. Social media platforms, online organizing tools, and digital government services have created new channels for citizen engagement while raising questions about information quality, polarization, and the concentration of power in technology companies. Assessing the democratic implications of digitization requires examining both expanded opportunities and emerging threats.

Optimistic perspectives emphasize how digital technologies lower barriers to political participation. Social media enables citizens to share political content, express opinions, and engage with elected officials directly. Online platforms facilitate organizing, from local community groups to transnational movements. Crowdfunding enables political campaigns to raise money from many small donors rather than depending on wealthy contributors. Petition sites allow citizens to signal preferences on issues without waiting for elections. These tools may engage citizens who would not participate through traditional channels.

The Arab Spring and subsequent protest movements demonstrated digital media's potential for rapid mobilization. Social media helped coordinate protests, document abuses, and attract international attention. Activists could bypass state-controlled media to communicate directly with publics both domestic and global. These events prompted enthusiasm about social media's democratizing potential, though subsequent developments—reassertion of authoritarian control in most affected countries—tempered initial optimism.

Concerns about digital democracy have multiplied. Filter bubbles and algorithmic curation may expose users primarily to content reinforcing existing views, reducing exposure to opposing perspectives and potentially increasing polarization. Misinformation spreads rapidly through networks where emotional resonance outweighs accuracy. Foreign actors have exploited digital platforms to interfere in elections through disinformation campaigns. These problems are amplified by business models that reward engagement regardless of content quality.

The attention economy shapes political discourse in troubling ways. Content that provokes strong emotional reactions—outrage, fear, tribal identification—tends to spread more than nuanced analysis. Political actors adapt by producing increasingly extreme content, potentially contributing to polarization and undermining deliberative democracy. The collapse of traditional media business models has reduced investment in investigative journalism while new digital media often lack editorial standards or fact-checking resources.

Platform governance raises questions about private power over public discourse. A handful of technology companies control the primary channels for political communication, making decisions about content moderation that affect what billions of users see. These decisions involve difficult tradeoffs between free expression and harm prevention, yet occur largely outside democratic accountability. Calls for regulation encounter challenges including free speech concerns, technical complexity, and the global nature of platforms operating across jurisdictional boundaries.

Digital government services offer efficiency gains but raise access concerns. Online delivery can reduce costs and improve convenience for many citizens. However, digital divides mean that some populations—elderly citizens, low-income communities, rural residents with poor internet access—may be excluded from services increasingly available only online. Ensuring digital democracy includes rather than excludes vulnerable populations requires deliberate attention to access and design.

The trajectory of digital democracy remains uncertain. Technology continues to evolve; platforms rise and fall; regulatory approaches are still developing. Whether digitization ultimately strengthens or undermines democratic governance depends on choices made by citizens, platforms, and governments about how to design and govern digital public spaces.`,
        questions: [
          { id: 14, type: "yng", text: "Digital technologies have lowered some barriers to political participation.", answer: "Yes" },
          { id: 15, type: "yng", text: "The Arab Spring led to lasting democracy in most affected countries.", answer: "No" },
          { id: 16, type: "yng", text: "Filter bubbles may reduce exposure to opposing perspectives.", answer: "Yes" },
          { id: 17, type: "yng", text: "Platform content moderation decisions are fully democratically accountable.", answer: "No" },
          { id: 18, type: "yng", text: "Digital divides affect access to online government services.", answer: "Yes" },
          { id: 19, type: "mcq", text: "What do optimists emphasize about digital technology?", options: ["A. Increased polarization", "B. Lower participation barriers", "C. Platform power", "D. Misinformation spread"], answer: "B" },
          { id: 20, type: "mcq", text: "What spreads rapidly in digital networks?", options: ["A. Only accurate information", "B. Nuanced analysis", "C. Misinformation", "D. Government content"], answer: "C" },
          { id: 21, type: "mcq", text: "What does the attention economy reward?", options: ["A. Accuracy only", "B. Engagement regardless of quality", "C. Traditional journalism", "D. Balanced reporting"], answer: "B" },
          { id: 22, type: "mcq", text: "What populations may be excluded from digital services?", options: ["A. Young urban users", "B. Technology employees", "C. Low-income and elderly citizens", "D. Platform owners"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Algorithmic curation may increase ________.", answer: "polarization" },
          { id: 24, type: "summary", text: "Complete: Business models reward engagement regardless of content ________.", answer: "quality" },
          { id: 25, type: "summary", text: "Complete: Platform governance involves decisions affecting ________ of users.", answer: "billions" },
          { id: 26, type: "summary", text: "Complete: Digital democracy's trajectory remains ________.", answer: "uncertain" }
        ]
      },
      {
        id: "P3",
        title: "Antibiotic Resistance: A Growing Crisis",
        wordCount: 860,
        text: `Antibiotic resistance represents one of the most serious threats to global public health, potentially reversing a century of progress against infectious disease. Bacteria that survive antibiotic exposure can develop resistance mechanisms that render treatments ineffective, spreading these adaptations through reproduction and horizontal gene transfer. Without effective antibiotics, common infections become dangerous and routine medical procedures risky. Understanding and addressing antibiotic resistance requires action across medicine, agriculture, and public policy.

The mechanisms of antibiotic resistance are diverse. Some bacteria produce enzymes that degrade antibiotics before they can act. Others modify the molecular targets that antibiotics attack, reducing drug binding. Efflux pumps actively expel antibiotics from bacterial cells. Reduced permeability limits antibiotic entry. These mechanisms can arise through spontaneous mutations or be acquired from other bacteria through plasmid transfer, transformation, or transduction. Once resistance genes exist, selection pressure from antibiotic use ensures their spread.

Antibiotic misuse accelerates resistance development. Overprescription for viral infections where antibiotics are ineffective exposes bacteria to drugs unnecessarily. Incomplete treatment courses allow partially resistant bacteria to survive. Over-the-counter availability in some countries enables self-medication without proper diagnosis. Agricultural use of antibiotics for growth promotion and disease prevention in livestock creates vast reservoirs of resistant bacteria. Each unnecessary exposure provides opportunities for resistance to develop and spread.

The economic incentives for antibiotic development are misaligned with public health needs. Unlike drugs for chronic conditions that patients take indefinitely, antibiotics are typically used for short courses. New antibiotics should be reserved for resistant infections, further limiting market size. Development costs remain high while resistance may eventually render any new antibiotic ineffective. These factors have led major pharmaceutical companies to exit antibiotic research, leaving a pipeline inadequate to address emerging resistance.

Healthcare settings present particular challenges. Hospitals concentrate vulnerable patients with weakened immune systems, invasive devices that provide entry points for infection, and heavy antibiotic use that selects for resistance. Healthcare-associated infections with resistant organisms cause substantial morbidity and mortality. Infection control practices—hand hygiene, isolation precautions, stewardship programs limiting unnecessary antibiotic use—can reduce transmission but require sustained resources and attention that compete with other priorities.

International dimensions complicate responses. Resistance knows no borders; resistant bacteria travel with people and goods. Countries with weak regulatory systems become reservoirs from which resistance spreads globally. Yet coordination among health systems with different resources, priorities, and pharmaceutical regulations is difficult to achieve. International agreements on antibiotic stewardship and access remain limited despite growing recognition of resistance as a global threat.

Alternatives to traditional antibiotics are being explored. Phage therapy uses viruses that infect bacteria to treat infections. Antimicrobial peptides and other novel approaches may provide new mechanisms of action. Vaccines can prevent infections, reducing the need for antibiotic treatment. Rapid diagnostic tools enable targeted treatment, avoiding unnecessary broad-spectrum antibiotic use. However, none of these approaches offers a complete solution, and all face development challenges and regulatory hurdles.

Addressing antibiotic resistance requires coordinated action across multiple domains: reducing unnecessary antibiotic use in medicine and agriculture, maintaining infection control in healthcare settings, investing in new antibiotic development despite unfavorable economics, and building international cooperation on a genuinely global problem. The alternative—a post-antibiotic era where common infections kill and surgery becomes dangerous—is too consequential to accept.`,
        questions: [
          { id: 27, type: "tfng", text: "Antibiotic resistance can spread through horizontal gene transfer.", answer: "True" },
          { id: 28, type: "tfng", text: "Antibiotics are effective against viral infections.", answer: "False" },
          { id: 29, type: "tfng", text: "Major pharmaceutical companies are increasingly investing in antibiotic research.", answer: "False" },
          { id: 30, type: "tfng", text: "Resistant bacteria cannot cross international borders.", answer: "False" },
          { id: 31, type: "tfng", text: "Vaccines can help reduce the need for antibiotic treatment.", answer: "True" },
          { id: 32, type: "matching", text: "Actively expel antibiotics from cells", answer: "efflux pumps" },
          { id: 33, type: "matching", text: "Uses viruses to treat bacterial infections", answer: "phage therapy" },
          { id: 34, type: "matching", text: "Concentrate vulnerable patients with resistant organisms", answer: "hospitals" },
          { id: 35, type: "mcq", text: "What accelerates resistance development?", options: ["A. Proper diagnosis", "B. Antibiotic misuse", "C. Infection control", "D. International coordination"], answer: "B" },
          { id: 36, type: "mcq", text: "Why have pharmaceutical companies exited antibiotic research?", options: ["A. Antibiotics are too profitable", "B. Development is too easy", "C. Economic incentives are misaligned", "D. Resistance is not a concern"], answer: "C" },
          { id: 37, type: "mcq", text: "What do rapid diagnostic tools enable?", options: ["A. More broad-spectrum use", "B. Targeted treatment", "C. Increased resistance", "D. Agricultural applications"], answer: "B" },
          { id: 38, type: "mcq", text: "What would a post-antibiotic era involve?", options: ["A. Safer surgeries", "B. Fewer infections", "C. Common infections becoming dangerous", "D. Better pharmaceuticals"], answer: "C" },
          { id: 39, type: "short", text: "What provides opportunities for resistance to develop? (TWO WORDS)", answer: "unnecessary exposure" },
          { id: 40, type: "short", text: "What type of programs limit unnecessary antibiotic use? (ONE WORD)", answer: "stewardship" }
        ]
      }
    ]
  },

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
        title: "The Economics of Inequality",
        wordCount: 870,
        text: `Economic inequality has emerged as one of the defining issues of contemporary political economy. The distribution of income and wealth within societies affects economic growth, social cohesion, political stability, and individual well-being in complex ways that economists and policymakers continue to debate. Understanding the causes, consequences, and potential remedies for inequality requires examining both economic mechanisms and the political choices that shape distributional outcomes.

The measurement of inequality involves multiple dimensions that do not always move together. Income inequality captures the distribution of earnings, wages, and investment returns in a given period. Wealth inequality reflects accumulated assets minus debts and typically exceeds income inequality substantially. Consumption inequality measures differences in living standards, which may differ from income inequality due to savings, borrowing, and transfers. Each measure tells part of the story while potentially obscuring others.

The past several decades have witnessed significant increases in inequality in many developed economies. In the United States, the share of income received by the top one percent roughly doubled from the 1970s to the present. Similar, though generally smaller, increases occurred across other wealthy nations. Meanwhile, global inequality has evolved differently, with rising inequality within countries partially offset by convergence between countries as China, India, and other developing economies grew rapidly.

Multiple factors have contributed to rising inequality. Technological change has increased demand for skilled workers while reducing demand for routine tasks, widening wage gaps between education levels. Globalization has exposed workers in developed countries to competition from lower-wage economies while enabling returns to globally mobile capital. Declining unionization has reduced workers' bargaining power. Changes in tax policy and social spending have altered how governments mediate market outcomes. The relative importance of these factors remains debated among economists.

The consequences of inequality extend beyond material living standards. High inequality may reduce social mobility as advantaged families invest more in children's human capital and transmit advantages across generations. Political influence may become concentrated as wealth disparities enable disproportionate participation in political processes. Social trust and cohesion may erode when citizens perceive that economic outcomes reflect rigged systems rather than merit. Health outcomes correlate with inequality through pathways involving stress, social comparison, and resource access.

Policy approaches to inequality reflect different values and beliefs about causation. Progressive taxation and redistribution directly address inequality in outcomes but may affect incentives for work and investment. Investments in education and training aim to reduce inequality in opportunities while potentially increasing productivity. Labor market regulations such as minimum wages and collective bargaining protections can increase worker bargaining power. Antitrust enforcement can address inequality arising from market concentration. Each approach involves tradeoffs that reasonable people weigh differently.

The politics of inequality policy are shaped by interests, ideologies, and institutions. Those who benefit from existing distributions may resist changes that would reduce their advantages. Ideological beliefs about desert, responsibility, and the proper role of government influence policy preferences. Political institutions determine how competing interests and ideas translate into policy outcomes. Understanding inequality thus requires attention to political economy as much as to economics narrowly defined.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to inequality issues", "ii. Measurement approaches", "iii. Policy solutions", "iv. Global trends"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. Causes of inequality", "ii. Dimensions of inequality measurement", "iii. Political consequences", "iv. Tax policy"], answer: "ii" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Historical trends in inequality", "ii. Education gaps", "iii. Labor markets", "iv. Health effects"], answer: "i" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Contributing factors to rising inequality", "ii. Policy solutions", "iii. Measurement problems", "iv. Political influence"], answer: "i" },
          { id: 5, type: "tfng", text: "Wealth inequality typically exceeds income inequality.", answer: "True" },
          { id: 6, type: "tfng", text: "Global inequality has increased uniformly everywhere.", answer: "False" },
          { id: 7, type: "tfng", text: "Technological change has reduced demand for skilled workers.", answer: "False" },
          { id: 8, type: "tfng", text: "High inequality may reduce social mobility.", answer: "True" },
          { id: 9, type: "tfng", text: "There is consensus on the best policy approach to inequality.", answer: "False" },
          { id: 10, type: "short", text: "What roughly doubled for the top 1% since the 1970s in the US? (TWO WORDS)", answer: "income share" },
          { id: 11, type: "short", text: "What has declined, reducing workers' bargaining power? (ONE WORD)", answer: "unionization" },
          { id: 12, type: "short", text: "What may erode when outcomes seem rigged? (TWO WORDS)", answer: "social trust" },
          { id: 13, type: "short", text: "What enforcement can address market concentration? (ONE WORD)", answer: "antitrust" }
        ]
      },
      {
        id: "P2",
        title: "The Microbiome and Human Health",
        wordCount: 850,
        text: `The human body hosts trillions of microorganisms—bacteria, viruses, fungi, and other microbes—that collectively constitute the microbiome. Far from being mere passengers or pathogens, these microbes form complex ecosystems that influence human health in profound ways, from digestion and immunity to metabolism and even brain function. The emerging understanding of the microbiome is transforming medical research and opening new therapeutic possibilities.

The gut microbiome has received the most attention due to its size, diversity, and functional importance. The human gut harbors perhaps a thousand bacterial species, with the total microbial gene count exceeding the human genome by a factor of one hundred. These bacteria perform essential functions including breaking down dietary fiber, synthesizing vitamins, training the immune system, and protecting against pathogenic invaders. The composition of this community varies among individuals based on genetics, diet, medication, and environment.

Disruption of the microbiome—dysbiosis—has been associated with numerous health conditions. Inflammatory bowel diseases correlate with reduced microbial diversity and altered community composition. Metabolic disorders including obesity and type 2 diabetes show microbiome signatures that may contribute to disease processes. Allergies and autoimmune conditions have been linked to early-life microbiome development, supporting the "hygiene hypothesis" that modern sanitation practices may inadvertently impair immune system maturation.

Perhaps most surprisingly, the gut microbiome appears to communicate with the brain through what researchers call the gut-brain axis. Microbial metabolites, immune signals, and neural pathways create bidirectional communication that may influence mood, cognition, and behavior. Animal studies have demonstrated that transferring microbiomes between individuals can transfer behavioral traits, and preliminary human research suggests associations between microbiome composition and conditions ranging from depression to autism spectrum disorders.

Therapeutic manipulation of the microbiome represents a growing frontier. Probiotics—beneficial bacteria consumed as supplements or in fermented foods—aim to improve microbiome composition, though evidence for their effectiveness varies considerably depending on strain, dosage, and condition. Prebiotics—dietary substances that promote beneficial bacterial growth—offer another approach. Fecal microbiota transplantation, transferring gut microbes from healthy donors to patients, has proven remarkably effective for recurrent Clostridium difficile infections and is being investigated for other conditions.

The microbiome also influences how individuals respond to medications. Gut bacteria metabolize many drugs, potentially affecting their efficacy and toxicity. Variation in microbiome composition may help explain why patients respond differently to the same treatments. Personalized medicine approaches increasingly consider microbiome status alongside genetic factors when predicting treatment outcomes or selecting therapeutic approaches.

Significant challenges remain in translating microbiome science into clinical practice. Establishing causation rather than correlation requires experimental evidence that is difficult to obtain in humans. Individual variation in microbiome composition complicates attempts to define "healthy" communities. Interventions may have unintended consequences in complex ecosystems we do not fully understand. Despite these challenges, the microbiome has emerged as a crucial frontier in understanding human health and disease.`,
        questions: [
          { id: 14, type: "yng", text: "The gut contains fewer microbial genes than the human genome.", answer: "No" },
          { id: 15, type: "yng", text: "Microbiome composition varies based on diet and environment.", answer: "Yes" },
          { id: 16, type: "yng", text: "The gut-brain axis allows bidirectional communication.", answer: "Yes" },
          { id: 17, type: "yng", text: "All probiotics are equally effective for all conditions.", answer: "No" },
          { id: 18, type: "yng", text: "Gut bacteria can affect drug metabolism.", answer: "Yes" },
          { id: 19, type: "mcq", text: "How many bacterial species does the gut harbor approximately?", options: ["A. 100", "B. 500", "C. 1000", "D. 10000"], answer: "C" },
          { id: 20, type: "mcq", text: "What has been linked to the 'hygiene hypothesis'?", options: ["A. Cancer", "B. Allergies and autoimmune conditions", "C. Heart disease", "D. Aging"], answer: "B" },
          { id: 21, type: "mcq", text: "What has proven remarkably effective for C. difficile infections?", options: ["A. Antibiotics alone", "B. Probiotics", "C. Fecal microbiota transplantation", "D. Prebiotics"], answer: "C" },
          { id: 22, type: "mcq", text: "What complicates defining 'healthy' microbiome communities?", options: ["A. Lack of research", "B. Individual variation", "C. Simple composition", "D. Uniform responses"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Disruption of the microbiome is called ________.", answer: "dysbiosis" },
          { id: 24, type: "summary", text: "Complete: Dietary substances promoting beneficial bacteria are called ________.", answer: "prebiotics" },
          { id: 25, type: "summary", text: "Complete: Personalized medicine considers microbiome alongside ________ factors.", answer: "genetic" },
          { id: 26, type: "summary", text: "Complete: Establishing ________ rather than correlation remains challenging.", answer: "causation" }
        ]
      },
      {
        id: "P3",
        title: "Urban Planning and Livable Cities",
        wordCount: 860,
        text: `The design of cities profoundly shapes the lives of their inhabitants—affecting health, economic opportunity, social connection, environmental sustainability, and daily experience. As urban populations grow and cities face challenges from climate change, aging infrastructure, and social inequality, questions about how to create livable urban environments have become pressing concerns for planners, policymakers, and citizens. The principles and practices of urban planning continue to evolve in response to these challenges.

The history of urban planning reflects changing assumptions about what makes cities function well. Nineteenth-century reformers focused on public health, creating sewage systems, water supplies, and building codes that dramatically reduced urban disease. Early twentieth-century modernists envisioned cities organized by function, with separated zones for living, working, and recreation connected by automobile infrastructure. Postwar critiques, exemplified by Jane Jacobs, challenged this separation, arguing that mixed-use neighborhoods with pedestrian-scale streets created vitality and safety that planned districts lacked.

Contemporary planning emphasizes principles that reflect lessons from this history. Mixed-use development that integrates residential, commercial, and public spaces enables people to meet daily needs within walking distance, reducing car dependence while creating lively streetscapes. Transit-oriented development concentrates density around public transportation, enabling sustainable mobility. Complete streets accommodate multiple modes—walking, cycling, transit, driving—rather than prioritizing automobile traffic. Green infrastructure integrates natural systems into urban fabric for stormwater management, cooling, and ecological connectivity.

Housing affordability has become a central planning challenge as urban land values have risen. In desirable cities, housing costs consume increasing shares of household income, displacing lower-income residents and creating segregation by economic status. Planning responses include inclusionary zoning requirements, density bonuses for affordable units, and public housing investment. However, land use regulations that restrict development can also contribute to affordability problems by limiting housing supply. Balancing multiple objectives proves difficult in practice.

Public space plays crucial roles in urban life that extend beyond recreation. Parks, plazas, and streets serve as democratic spaces where diverse populations encounter each other, creating the social fabric that holds cities together. The quality and accessibility of public space affects health through opportunities for physical activity and stress reduction. Privatization and securitization of urban space—shopping malls replacing main streets, gated communities limiting access—raise concerns about exclusion and diminished public life.

Climate adaptation and mitigation have become planning imperatives. Cities must reduce emissions through transportation systems, building efficiency, and energy sources while also preparing for impacts—heat waves, flooding, water scarcity—that climate change will bring. These challenges intersect with equity concerns, as vulnerable populations often face greatest exposure to environmental hazards while having fewest resources to adapt.

Participatory planning processes aim to involve affected communities in decisions that shape their neighborhoods. Top-down planning has often disregarded local knowledge and preferences, producing outcomes that served some constituencies while harming others. Meaningful participation requires resources and institutional commitment beyond token consultation. Whose voices shape planning outcomes remains a contested question that reflects broader issues of power and representation in urban governance.`,
        questions: [
          { id: 27, type: "tfng", text: "Nineteenth-century planners focused primarily on automobile infrastructure.", answer: "False" },
          { id: 28, type: "tfng", text: "Jane Jacobs supported the modernist separation of urban functions.", answer: "False" },
          { id: 29, type: "tfng", text: "Mixed-use development can reduce car dependence.", answer: "True" },
          { id: 30, type: "tfng", text: "Land use regulations always improve housing affordability.", answer: "False" },
          { id: 31, type: "tfng", text: "Climate adaptation and mitigation have become planning priorities.", answer: "True" },
          { id: 32, type: "matching", text: "Concentrates density around public transportation", answer: "transit-oriented development" },
          { id: 33, type: "matching", text: "Accommodates walking, cycling, transit, and driving", answer: "complete streets" },
          { id: 34, type: "matching", text: "Integrates natural systems for stormwater and cooling", answer: "green infrastructure" },
          { id: 35, type: "mcq", text: "What did modernist planners envision cities organized by?", options: ["A. Social class", "B. Function with separated zones", "C. Age groups", "D. Random development"], answer: "B" },
          { id: 36, type: "mcq", text: "What can inclusionary zoning requirements address?", options: ["A. Traffic congestion", "B. Housing affordability", "C. Air pollution", "D. Crime rates"], answer: "B" },
          { id: 37, type: "mcq", text: "What raises concerns about exclusion from public life?", options: ["A. Public parks", "B. Mixed-use development", "C. Privatization of urban space", "D. Transit systems"], answer: "C" },
          { id: 38, type: "mcq", text: "Who often faces greatest exposure to environmental hazards?", options: ["A. Wealthy populations", "B. Suburban residents", "C. Vulnerable populations", "D. Rural communities"], answer: "C" },
          { id: 39, type: "short", text: "What type of processes aim to involve communities in decisions? (ONE WORD)", answer: "participatory" },
          { id: 40, type: "short", text: "What reformer is exemplified as critiquing modernist planning? (TWO WORDS)", answer: "Jane Jacobs" }
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
        title: "Cognitive Biases in Legal Reasoning",
        wordCount: 870,
        text: `Legal systems depend on the assumption that judges, jurors, and other decision-makers can evaluate evidence objectively and apply rules rationally to reach fair outcomes. However, psychological research has revealed systematic biases in human cognition that affect legal reasoning in ways that challenge these assumptions. Understanding how cognitive biases operate in legal contexts has important implications for procedural design, legal education, and the pursuit of justice.

Confirmation bias—the tendency to seek, interpret, and remember information that confirms existing beliefs—pervades legal reasoning. Investigators who develop early theories about cases may unconsciously discount contradictory evidence while emphasizing supporting information. Prosecutors convinced of a defendant's guilt may interpret ambiguous evidence in ways that support conviction. Even judges, trained to evaluate evidence impartially, show confirmation effects when forming initial impressions of cases.

Anchoring effects influence numerical judgments throughout legal proceedings. Initial demands in civil litigation anchor subsequent settlement negotiations, with higher starting points producing higher outcomes regardless of underlying merits. Prosecutors' charging decisions anchor plea negotiations. Damage awards are influenced by anchors introduced through plaintiffs' demands or arbitrary numbers mentioned during proceedings. These effects persist even when anchors are recognized as irrelevant or strategically inflated.

The hindsight bias creates particular problems for legal determinations that require evaluating past decisions with knowledge of their outcomes. Negligence law asks whether defendants acted reasonably given what they knew at the time, but decision-makers inevitably know how things turned out and overestimate how foreseeable outcomes were. Criminal appeals that evaluate whether trial errors were "harmless" suffer similar distortion. Once outcomes are known, it becomes psychologically difficult to assess what reasonable actors would have expected beforehand.

Source monitoring errors affect how fact-finders evaluate testimony. Witnesses may genuinely believe memories that were actually constructed from post-event information, suggestion, or imagination. Jurors struggle to distinguish confidently presented but inaccurate testimony from less confident but accurate accounts. The adversarial system's assumption that cross-examination reveals truth may be optimistic given how memory actually functions.

Racial and other implicit biases affect legal decision-making despite explicit commitments to equality. Studies have documented disparities in traffic stops, charging decisions, bail determinations, and sentencing that persist after controlling for legally relevant factors. Decision-makers are often unaware of these biases, which operate automatically and can contradict consciously held egalitarian values. Debiasing interventions have shown mixed results, suggesting that structural changes may be necessary to address disparities that individual efforts cannot eliminate.

Procedural reforms can mitigate some cognitive biases. Blinding investigators to information that might prejudice their analysis, as in forensic evidence evaluation, reduces confirmation bias. Structured decision protocols that require explicit consideration of contradicting evidence can counteract selective attention. Jury instructions addressing specific biases may help, though evidence on their effectiveness is limited. More fundamental reforms might restructure legal proceedings to account for how human cognition actually operates rather than assuming idealized rational deliberation.

The implications extend beyond procedure to substantive legal doctrine. Legal standards like "reasonable person" or "foreseeable harm" assume cognitive capacities that psychology suggests people lack. Whether and how law should accommodate these limitations raises deep questions about the relationship between idealized legal concepts and empirical human reality.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to cognitive biases in law", "ii. Confirmation bias examples", "iii. Anchoring in negotiations", "iv. Procedural reforms"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. How confirmation bias affects legal reasoning", "ii. Hindsight problems", "iii. Witness memory", "iv. Implicit biases"], answer: "i" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Confirmation effects", "ii. Anchoring influences on numerical judgments", "iii. Memory construction", "iv. Racial disparities"], answer: "ii" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Hindsight bias in evaluating past decisions", "ii. Settlement negotiations", "iii. Implicit bias research", "iv. Reform proposals"], answer: "i" },
          { id: 5, type: "tfng", text: "Confirmation bias affects only untrained decision-makers.", answer: "False" },
          { id: 6, type: "tfng", text: "Higher anchors in litigation produce higher outcomes.", answer: "True" },
          { id: 7, type: "tfng", text: "People can easily assess foreseeability after knowing outcomes.", answer: "False" },
          { id: 8, type: "tfng", text: "Cross-examination reliably reveals the truth about testimony.", answer: "False" },
          { id: 9, type: "tfng", text: "Debiasing interventions have consistently succeeded.", answer: "False" },
          { id: 10, type: "short", text: "What bias involves seeking confirming information? (TWO WORDS)", answer: "confirmation bias" },
          { id: 11, type: "short", text: "What type of biases can contradict consciously held values? (ONE WORD)", answer: "implicit" },
          { id: 12, type: "short", text: "What can blinding investigators reduce? (TWO WORDS)", answer: "confirmation bias" },
          { id: 13, type: "short", text: "What legal standard assumes cognitive capacities people may lack? (TWO WORDS)", answer: "reasonable person" }
        ]
      },
      {
        id: "P2",
        title: "Extinction Events and Evolutionary Recovery",
        wordCount: 850,
        text: `Mass extinction events have punctuated the history of life on Earth, periodically eliminating substantial fractions of existing species and reshaping evolutionary trajectories for millions of years afterward. The "Big Five" extinctions—events that each eliminated at least 75% of marine species—transformed life in ways that continue to influence biodiversity today. Understanding these past catastrophes provides context for assessing current extinction rates and potential recovery scenarios.

The causes of mass extinctions have varied. The end-Permian extinction approximately 252 million years ago, the largest on record, appears to have resulted from massive volcanic eruptions that triggered climate change, ocean acidification, and anoxia. The end-Cretaceous extinction 66 million years ago resulted from asteroid impact, as evidenced by the global iridium anomaly and Chicxulub crater. Other extinctions remain less definitively explained, likely involving multiple interacting factors including sea level changes, continental rearrangement, and volcanic activity.

The patterns of extinction selectivity reveal important features of evolutionary vulnerability. Body size, metabolic rate, geographic range, and ecological specialization have all influenced survival odds across different events. Species with narrow ecological tolerances and restricted ranges face greater risk than widespread generalists. Marine organisms with calcium carbonate shells prove vulnerable to ocean acidification events. However, the traits that predict vulnerability vary among extinctions, suggesting that different kill mechanisms select against different characteristics.

Recovery from mass extinctions has typically required millions of years, with different taxonomic groups recovering at different rates. Initial post-extinction communities tend to be dominated by disaster taxa—opportunistic species that thrive in disturbed conditions but give way as ecosystems mature. Ecological complexity rebuilds gradually as specialized niches are refilled, often by lineages quite different from those that previously occupied them. The replacement of dinosaurs by mammals following the end-Cretaceous extinction exemplifies how evolutionary opportunities can emerge from catastrophe.

Current extinction rates have prompted comparisons to past mass extinctions. Species are disappearing at rates perhaps a hundred to a thousand times background levels, driven primarily by habitat destruction, overexploitation, invasive species, pollution, and climate change. Whether these losses constitute a sixth mass extinction remains debated, as current losses have not yet approached the severity of past events. However, the trajectory of continuing species loss raises concerns about potential thresholds beyond which cascade effects might accelerate extinctions.

The timescales of extinction and recovery present sobering perspectives. Mass extinctions unfold over thousands to millions of years in the geological record—geologically sudden but spanning many human generations. Recovery requires similar or longer periods, meaning that extinctions occurring in human lifetimes may diminish biodiversity for millions of years. The species we lose cannot be recovered within any meaningful human timeframe; their evolutionary potential is permanently eliminated.

Conservation efforts operate within these constraints. Preventing extinctions preserves options that cannot be restored once lost. Protecting habitat maintains the conditions under which species can persist and evolve. While past mass extinctions demonstrate that life eventually recovers from catastrophic losses, the relevant timescales far exceed anything meaningful for human civilization. This asymmetry between the speed of destruction and recovery underscores the urgency of conservation action.`,
        questions: [
          { id: 14, type: "yng", text: "The Big Five extinctions each eliminated at least 75% of marine species.", answer: "Yes" },
          { id: 15, type: "yng", text: "All mass extinctions had identical causes.", answer: "No" },
          { id: 16, type: "yng", text: "Widespread generalists typically face higher extinction risk than specialists.", answer: "No" },
          { id: 17, type: "yng", text: "Recovery from mass extinctions typically requires millions of years.", answer: "Yes" },
          { id: 18, type: "yng", text: "Lost species can be recovered within human timeframes.", answer: "No" },
          { id: 19, type: "mcq", text: "What caused the end-Permian extinction?", options: ["A. Asteroid impact", "B. Volcanic eruptions", "C. Sea level rise alone", "D. Continental collision"], answer: "B" },
          { id: 20, type: "mcq", text: "What evidences the asteroid cause of end-Cretaceous extinction?", options: ["A. Volcanic rock", "B. Iridium anomaly and crater", "C. Fossil patterns only", "D. Temperature records"], answer: "B" },
          { id: 21, type: "mcq", text: "What dominates initial post-extinction communities?", options: ["A. Specialized species", "B. Large predators", "C. Disaster taxa", "D. Previous dominant groups"], answer: "C" },
          { id: 22, type: "mcq", text: "How do current extinction rates compare to background levels?", options: ["A. Same rate", "B. Half the rate", "C. 100-1000 times higher", "D. Lower"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Species with narrow ecological ________ face greater extinction risk.", answer: "tolerances" },
          { id: 24, type: "summary", text: "Complete: Dinosaurs were replaced by ________ after the end-Cretaceous extinction.", answer: "mammals" },
          { id: 25, type: "summary", text: "Complete: Preventing extinctions preserves ________ that cannot be restored.", answer: "options" },
          { id: 26, type: "summary", text: "Complete: The asymmetry between destruction and recovery underscores conservation ________.", answer: "urgency" }
        ]
      },
      {
        id: "P3",
        title: "Information Asymmetry and Market Failure",
        wordCount: 860,
        text: `Markets depend on information to function efficiently—prices signal value, quality guides purchasing decisions, and competition ensures that resources flow toward their most productive uses. However, when parties to transactions possess different information, market mechanisms can fail to produce efficient or fair outcomes. Understanding how information asymmetry affects market performance has been central to economic theory since the seminal contributions that earned George Akerlof, Michael Spence, and Joseph Stiglitz the Nobel Prize in Economics.

Akerlof's analysis of the used car market—the "market for lemons"—illustrated how adverse selection can cause markets to collapse. Sellers know whether their cars are reliable or defective, but buyers cannot easily distinguish between them. Unable to identify quality, buyers offer prices reflecting average expected quality. This price proves attractive only to sellers of poor-quality "lemons," while owners of good cars withdraw from the market. The process repeats, driving down prices and quality until potentially only lemons remain. Similar dynamics affect insurance markets, credit markets, and employment relationships.

Signaling provides one market response to information asymmetry. Informed parties take costly actions that credibly communicate their private information to less informed parties. Education may serve partly as a signal of ability rather than solely building productive skills—if completing a degree is easier for more capable individuals, employers can use educational attainment to screen applicants even if the education itself adds no productivity. Product warranties signal quality by making quality claims costly for producers of inferior goods. The costs of signaling represent real resources devoted to addressing information problems.

Screening describes actions by the uninformed party to induce information revelation. Insurance companies offer menus of policies with different coverage levels and prices, designed so that high-risk individuals select more comprehensive coverage while low-risk individuals choose basic plans. Employers use probationary periods to learn about worker productivity before extending permanent positions. Credit card companies offer different terms that attract different risk profiles. Effective screening separates types but may do so imperfectly and at administrative cost.

Market failures from information asymmetry justify various policy interventions. Mandatory disclosure requirements address information gaps by compelling informed parties to share relevant information. Professional licensing ensures that consumers can trust practitioners' competence in areas where individual assessment is impractical. Lemon laws create remedies for buyers of defective products. Financial regulation mandates disclosure of risks and restricts practices that exploit information advantages.

The information economics perspective has transformed understanding across many domains. Healthcare markets involve extreme information asymmetries between patients and providers. Financial markets can experience bubbles and crashes when some traders possess information others lack. Principal-agent relationships throughout organizations involve information asymmetries that shape incentive design. Corporate governance arrangements address information asymmetries between managers and shareholders. In each context, understanding information distribution illuminates market outcomes and policy possibilities.

Digital technologies are changing information landscapes in complex ways. The internet reduces some search costs and enables information sharing that reduces certain asymmetries. However, it also creates new asymmetries—platforms possess information about users that users cannot easily access or verify. Data has become a valuable asset, and information advantages can convey market power. How information economics applies in digital environments continues to evolve.`,
        questions: [
          { id: 27, type: "tfng", text: "Efficient markets require equal information among all parties.", answer: "Not Given" },
          { id: 28, type: "tfng", text: "In the 'lemons' market, good cars eventually dominate.", answer: "False" },
          { id: 29, type: "tfng", text: "Education may partly serve as a signal of ability.", answer: "True" },
          { id: 30, type: "tfng", text: "Screening is done by the more informed party.", answer: "False" },
          { id: 31, type: "tfng", text: "Digital technologies eliminate all information asymmetries.", answer: "False" },
          { id: 32, type: "matching", text: "Credibly communicating private information through costly actions", answer: "signaling" },
          { id: 33, type: "matching", text: "Inducing information revelation by offering menu choices", answer: "screening" },
          { id: 34, type: "matching", text: "Poor-quality used cars driving out good ones", answer: "adverse selection" },
          { id: 35, type: "mcq", text: "What does adverse selection cause in the lemons market?", options: ["A. Market growth", "B. Price increases", "C. Market collapse", "D. Quality improvement"], answer: "C" },
          { id: 36, type: "mcq", text: "What do product warranties signal?", options: ["A. Low price", "B. Product quality", "C. Market share", "D. Production costs"], answer: "B" },
          { id: 37, type: "mcq", text: "What do insurance company policy menus attempt to achieve?", options: ["A. Uniform coverage", "B. Risk separation", "C. Lower premiums", "D. Customer satisfaction"], answer: "B" },
          { id: 38, type: "mcq", text: "What do digital platforms possess about users?", options: ["A. Physical products", "B. Information users cannot verify", "C. Equal knowledge", "D. Transparent data"], answer: "B" },
          { id: 39, type: "short", text: "What economists won the Nobel for information asymmetry research? (THREE SURNAMES)", answer: "Akerlof Spence Stiglitz" },
          { id: 40, type: "short", text: "What laws create remedies for buyers of defective products? (ONE WORD)", answer: "lemon" }
        ]
      }
    ]
  },

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
        title: "The Ethics of Enhancement Technologies",
        wordCount: 870,
        text: `Emerging technologies are creating unprecedented possibilities for enhancing human capabilities beyond what medicine traditionally considers treatment of disease or disability. Cognitive enhancement through pharmaceuticals, genetic modification to increase intelligence or athleticism, neural interfaces that augment memory or perception—these possibilities raise fundamental questions about human identity, fairness, and the boundaries of legitimate intervention. The ethics of enhancement has become a critical frontier where philosophy, policy, and technology intersect.

Enhancement is typically distinguished from treatment by whether interventions address pathological conditions or improve already normal functioning. A medication that treats clinical depression differs from one that would improve mood in already healthy individuals. Corrective lenses for impaired vision differ from hypothetical interventions that would give people superhuman visual acuity. However, this treatment-enhancement distinction proves difficult to maintain rigorously. What counts as normal functioning is partly socially constructed and varies across contexts. Many accepted interventions, from caffeine to education, already enhance performance beyond biological baselines.

Arguments for enhancement often appeal to autonomy and well-being. If individuals could safely improve their cognitive abilities, extend their lifespans, or enhance their children's capacities, why should they not be free to do so? Enhancement technologies could reduce suffering, increase human flourishing, and expand the range of what humans can experience and accomplish. From this perspective, opposition to enhancement reflects unjustified attachment to biological contingencies that evolution happened to produce rather than characteristics with inherent value.

Critics raise various objections. Enhancement technologies could exacerbate existing inequalities if available only to the wealthy, creating new forms of social stratification based on augmented capacities. Competitive pressures might coerce enhancement even among those who would prefer to remain unenhanced, as unaugmented individuals find themselves unable to compete in education and employment. The pursuit of enhancement could undermine appreciation for human diversity and dignity, reducing people to their measurable performances and capacities.

Deeper philosophical objections question whether enhanced persons would remain authentically human or meaningfully identical to their unenhanced selves. If pharmaceutical enhancement enables academic achievement, does the achievement belong to the person or to the drug? If genetic modification produces a child with superior abilities, does this child result from parental acceptance or engineering? These concerns about authenticity and identity challenge whether enhanced accomplishments and characteristics would retain the value we currently attribute to human achievements.

The enhancement debate intersects with disability studies perspectives that challenge the assumption that disability represents deficit requiring correction. Disability rights advocates argue that many limitations result from social arrangements rather than individual impairments, and that enhancement aspirations may reflect ableist values rather than objective improvements. The relationship between enhancement, disability, and normality raises questions about which differences should be eliminated and which should be accommodated.

Policy responses to enhancement technologies will likely vary across contexts and jurisdictions. Sports already regulate performance enhancement, though with ongoing controversy about where lines should be drawn. Professional and academic contexts may develop similar regulations. Reproductive technologies raise particular concerns about consent, given that future persons cannot choose whether to be enhanced. International coordination may prove necessary to address technologies that cross borders easily and that competitive pressures may drive even reluctant societies to adopt.`,
        questions: [
          { id: 1, type: "heading", paragraph: "A", text: "Choose the correct heading for paragraph 1", options: ["i. Introduction to enhancement ethics", "ii. Treatment distinctions", "iii. Autonomy arguments", "iv. Policy approaches"], answer: "i" },
          { id: 2, type: "heading", paragraph: "B", text: "Choose the correct heading for paragraph 2", options: ["i. The treatment-enhancement distinction", "ii. Arguments for enhancement", "iii. Inequality concerns", "iv. Authenticity questions"], answer: "i" },
          { id: 3, type: "heading", paragraph: "C", text: "Choose the correct heading for paragraph 3", options: ["i. Disability perspectives", "ii. Policy responses", "iii. Arguments supporting enhancement", "iv. Identity concerns"], answer: "iii" },
          { id: 4, type: "heading", paragraph: "D", text: "Choose the correct heading for paragraph 4", options: ["i. Critical objections to enhancement", "ii. Autonomy arguments", "iii. Definitions of enhancement", "iv. Sports regulations"], answer: "i" },
          { id: 5, type: "tfng", text: "The treatment-enhancement distinction is straightforward to apply.", answer: "False" },
          { id: 6, type: "tfng", text: "Caffeine and education already enhance performance.", answer: "True" },
          { id: 7, type: "tfng", text: "Enhancement technologies could increase social equality.", answer: "False" },
          { id: 8, type: "tfng", text: "Disability rights advocates uniformly support enhancement.", answer: "False" },
          { id: 9, type: "tfng", text: "Sports already regulate performance enhancement.", answer: "True" },
          { id: 10, type: "short", text: "What type of technologies might create new social stratification? (ONE WORD)", answer: "enhancement" },
          { id: 11, type: "short", text: "What concern asks whether achievements belong to person or drug? (ONE WORD)", answer: "authenticity" },
          { id: 12, type: "short", text: "Whose consent cannot be obtained for reproductive enhancement? (TWO WORDS)", answer: "future persons" },
          { id: 13, type: "short", text: "What type of pressures might coerce enhancement adoption? (ONE WORD)", answer: "competitive" }
        ]
      },
      {
        id: "P2",
        title: "Complexity Science and Systems Thinking",
        wordCount: 850,
        text: `Traditional scientific approaches often assume that systems can be understood by analyzing their components and that cause-effect relationships are linear and proportionate. However, many important phenomena—from ecosystems to economies, from cities to consciousness—exhibit complex behaviors that emerge from interactions among components and that cannot be predicted from individual parts alone. Complexity science studies these emergent properties and the principles governing systems where the whole exceeds the sum of its parts.

Complex systems share several characteristic features. They consist of numerous interacting agents whose behaviors are interdependent—each agent's actions affect others, whose responses in turn affect the original agent. This interdependence creates feedback loops that can amplify small changes or maintain stability against perturbations. The systems exhibit nonlinearity, meaning that outputs are not proportional to inputs; small causes can have large effects, and large interventions may produce minimal change. Emergent properties arise at system levels that cannot be reduced to component properties.

Self-organization represents a particularly striking feature of complex systems. Without central coordination, agents interacting through local rules can generate large-scale patterns and structures. Ant colonies build elaborate nests, market prices emerge from countless individual transactions, neural activity generates consciousness—in each case, order arises without a designer specifying the outcome. This spontaneous emergence challenges assumptions that complex organization requires top-down control.

Complex systems often operate at the "edge of chaos"—a regime between rigid order and random disorder where both stability and adaptability coexist. Systems too rigidly ordered cannot adapt to changing conditions; those too disordered cannot maintain coherent function. The edge of chaos enables both resilience against minor disturbances and capacity to reorganize when circumstances demand. Understanding this balance has implications for designing organizations, managing ecosystems, and governing societies.

Predictability in complex systems faces fundamental limits. Sensitivity to initial conditions—the "butterfly effect"—means that small measurement uncertainties can produce large prediction errors over time. Path dependence implies that history matters: systems can settle into different long-term states depending on early events that themselves may be random or minor. These limitations do not mean that complex systems are incomprehensible, but they constrain the precision of prediction and control that traditional approaches assume possible.

Applications of complexity thinking span numerous domains. Epidemiologists model disease spread through network interactions. Ecologists analyze food webs as complex adaptive systems. Urban planners recognize cities as self-organizing systems where interventions may have unintended consequences. Financial regulators increasingly appreciate how interconnections among institutions can create systemic risk exceeding individual institution risk. Climate science grapples with feedback loops and tipping points in Earth systems.

The implications for policy and management are significant. Traditional approaches assume that diagnosis leads to intervention leads to predicted outcome. Complexity suggests that causation is often circular, outcomes are often unpredictable, and interventions frequently produce unintended consequences. This counsels humility, adaptive management that learns from outcomes, and recognition that control may be more limited than planners assume. Yet complexity also reveals possibilities for influence through understanding leverage points where small changes can shift system behavior significantly.`,
        questions: [
          { id: 14, type: "yng", text: "Complex systems can be fully understood through component analysis.", answer: "No" },
          { id: 15, type: "yng", text: "Feedback loops can both amplify changes and maintain stability.", answer: "Yes" },
          { id: 16, type: "yng", text: "Self-organization requires central coordination.", answer: "No" },
          { id: 17, type: "yng", text: "Systems too rigidly ordered can easily adapt to change.", answer: "No" },
          { id: 18, type: "yng", text: "Path dependence means early events can affect long-term outcomes.", answer: "Yes" },
          { id: 19, type: "mcq", text: "What arises at system levels that cannot be reduced to components?", options: ["A. Linear effects", "B. Emergent properties", "C. Simple patterns", "D. Predictable outcomes"], answer: "B" },
          { id: 20, type: "mcq", text: "What does the 'butterfly effect' describe?", options: ["A. Large causes, small effects", "B. Sensitivity to initial conditions", "C. System stability", "D. Predictable change"], answer: "B" },
          { id: 21, type: "mcq", text: "What regime allows both stability and adaptability?", options: ["A. Rigid order", "B. Random disorder", "C. Edge of chaos", "D. Complete control"], answer: "C" },
          { id: 22, type: "mcq", text: "What does complexity thinking counsel for policy?", options: ["A. Confident prediction", "B. Humility and adaptive management", "C. Rigid planning", "D. Ignoring feedback"], answer: "B" },
          { id: 23, type: "summary", text: "Complete: Complex systems exhibit ________ where outputs are not proportional to inputs.", answer: "nonlinearity" },
          { id: 24, type: "summary", text: "Complete: Ant colonies demonstrate ________ without central coordination.", answer: "self-organization" },
          { id: 25, type: "summary", text: "Complete: Financial regulators appreciate how interconnections create ________ risk.", answer: "systemic" },
          { id: 26, type: "summary", text: "Complete: Small changes at ________ points can shift system behavior significantly.", answer: "leverage" }
        ]
      },
      {
        id: "P3",
        title: "The Science of Sleep",
        wordCount: 860,
        text: `Sleep occupies approximately one-third of human life, yet its fundamental purposes remained mysterious until relatively recently. Modern sleep science has revealed that sleep is far from passive downtime—it involves complex brain processes essential for memory consolidation, emotional regulation, metabolic health, and immune function. Understanding sleep has profound implications for public health, as chronic sleep deprivation has reached epidemic proportions in modern societies with significant consequences for individual well-being and societal function.

Sleep architecture involves cycling through distinct stages with different characteristics and functions. Non-rapid eye movement (NREM) sleep progresses through lighter to deeper stages characterized by synchronized brain waves, reduced heart rate, and decreased body temperature. Rapid eye movement (REM) sleep features desynchronized brain activity resembling wakefulness, muscle paralysis, and vivid dreaming. A complete sleep cycle takes approximately ninety minutes, with the proportion of REM sleep increasing toward morning. Each stage appears to serve different functions that together maintain optimal cognitive and physiological function.

Memory consolidation represents one of sleep's most studied functions. Learning during waking hours produces fragile memory traces that require sleep for stabilization and integration with existing knowledge. Different memory types depend on different sleep stages—declarative memories benefit particularly from slow-wave NREM sleep, while procedural skills show REM-dependent improvement. Sleep after learning improves performance beyond what would occur with equivalent waking rest, and sleep deprivation impairs memory formation even when subsequent recovery sleep is allowed.

The mechanisms underlying sleep's cognitive benefits involve neural replay and synaptic homeostasis. During sleep, brain patterns associated with daytime experiences are reactivated, potentially strengthening relevant connections. The synaptic homeostasis hypothesis proposes that waking learning potentiates synapses throughout the brain, and sleep provides an opportunity to selectively prune weaker connections while maintaining stronger ones. This selective consolidation prevents synaptic saturation and maintains the signal-to-noise ratio necessary for effective learning.

Sleep deprivation produces wide-ranging impairments beyond cognitive function. Metabolic effects include insulin resistance and altered appetite hormones that promote weight gain. Immune function is compromised, increasing susceptibility to infection. Cardiovascular risk increases with chronic short sleep. Emotional regulation suffers, with sleep-deprived individuals showing increased amygdala reactivity and reduced prefrontal control. The accumulated effects of insufficient sleep contribute to numerous chronic diseases.

Modern societies have created conditions that systematically restrict sleep. Artificial lighting extends active hours beyond natural day-night cycles. Work demands, social activities, and entertainment compete with sleep time. Screen use before bedtime disrupts circadian rhythms through blue light exposure and arousing content. The result is that sleep duration has declined substantially over recent decades, with significant proportions of populations chronically sleep-deprived.

Public health approaches to sleep are gaining recognition but remain underdeveloped compared to other health behaviors. Later school start times improve adolescent sleep and academic performance. Workplace policies could better accommodate circadian biology and sleep needs. Healthcare systems could more systematically screen for and address sleep disorders. Individual sleep hygiene practices help but cannot fully compensate for societal structures that work against adequate rest. Recognizing sleep as a pillar of health alongside diet and exercise represents an ongoing cultural shift.`,
        questions: [
          { id: 27, type: "tfng", text: "Sleep is essentially passive downtime for the brain.", answer: "False" },
          { id: 28, type: "tfng", text: "REM sleep features muscle paralysis and vivid dreaming.", answer: "True" },
          { id: 29, type: "tfng", text: "Declarative memories benefit particularly from REM sleep.", answer: "False" },
          { id: 30, type: "tfng", text: "Sleep deprivation can increase cardiovascular risk.", answer: "True" },
          { id: 31, type: "tfng", text: "Sleep duration has increased over recent decades.", answer: "False" },
          { id: 32, type: "matching", text: "Features synchronized brain waves and deeper stages", answer: "NREM sleep" },
          { id: 33, type: "matching", text: "Proposes sleep prunes weaker synaptic connections", answer: "synaptic homeostasis hypothesis" },
          { id: 34, type: "matching", text: "Improve adolescent sleep and academic performance", answer: "later school start times" },
          { id: 35, type: "mcq", text: "How long does a complete sleep cycle take approximately?", options: ["A. 30 minutes", "B. 60 minutes", "C. 90 minutes", "D. 120 minutes"], answer: "C" },
          { id: 36, type: "mcq", text: "What disrupts circadian rhythms according to the passage?", options: ["A. Natural light", "B. Screen blue light exposure", "C. Early bedtimes", "D. Limited activities"], answer: "B" },
          { id: 37, type: "mcq", text: "What shows increased reactivity with sleep deprivation?", options: ["A. Prefrontal cortex", "B. Amygdala", "C. Hippocampus", "D. Cerebellum"], answer: "B" },
          { id: 38, type: "mcq", text: "What is sleep increasingly recognized as?", options: ["A. Optional luxury", "B. Pillar of health", "C. Minor factor", "D. Irrelevant habit"], answer: "B" },
          { id: 39, type: "short", text: "What does sleep after learning improve beyond equivalent waking rest? (ONE WORD)", answer: "performance" },
          { id: 40, type: "short", text: "What type of lighting extends active hours? (ONE WORD)", answer: "artificial" }
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
        title: "Democracy and Media Ecosystems",
        wordCount: 860,
        text: `Democratic governance depends on informed citizens making reasoned judgments about candidates, policies, and collective choices. The media ecosystem through which citizens receive political information has been transformed by digital technologies in ways that may support or undermine democratic deliberation. Understanding how changing information environments affect democratic processes has become urgent as concerns mount about misinformation, polarization, and the fragmentation of shared political reality.

Traditional media operated within a relatively concentrated information environment. A limited number of broadcast networks and newspapers reached mass audiences with similar content, creating shared reference points for political discussion. Professional journalists served as gatekeepers, applying standards of accuracy and newsworthiness that, whatever their limitations, provided some quality control. This model had well-documented flaws—concentration enabled elite agenda-setting, commercial pressures shaped coverage, and marginalized perspectives struggled for visibility—but it established certain democratic norms.

Digital platforms have decentralized information distribution in ways that both empower and challenge democratic discourse. Anyone can now publish to potentially global audiences without passing through traditional gatekeeping. This enables diverse voices to participate who were previously excluded and allows citizens to access information independently of elite curation. Grassroots movements have leveraged social media for mobilization that traditional media might have ignored. The democratization of publication has genuine democratic benefits.

However, the attention economy underlying digital platforms creates incentives that may not align with democratic needs. Algorithmic curation optimizes for engagement, often promoting emotionally provocative content over substantive analysis. Filter bubbles may expose users primarily to information confirming existing views, reducing exposure to alternative perspectives that democratic deliberation requires. The volume and velocity of online content overwhelms fact-checking capacity, enabling misinformation to spread faster than corrections.

Political polarization has intensified as partisan media outlets and social media communities reinforce ideological divisions. Citizens increasingly inhabit different information worlds, encountering not just different opinions but different facts and interpretations of events. This epistemic fragmentation makes democratic dialogue difficult—productive debate requires some shared understanding of reality that polarized information environments may erode. Whether digital media caused or merely revealed these divisions remains debated.

Foreign interference in democratic processes has exploited these vulnerabilities. State actors have used social media to spread disinformation, amplify divisions, and undermine trust in democratic institutions. The global reach of digital platforms and the anonymity they enable make such manipulation difficult to detect and counter. The integrity of electoral processes faces new threats that traditional campaign finance regulation and election security measures were not designed to address.

Responses to these challenges remain contested. Platform regulation raises concerns about government control of speech. Content moderation by private companies involves unaccountable power over public discourse. Media literacy education may help citizens navigate complex information environments but cannot solve structural problems. Supporting quality journalism addresses some issues but struggles economically against free content. The relationship between information systems and democratic health has no easy solutions, yet the stakes make addressing these challenges essential.`,
        questions: [
          { id: 1, type: "tfng", text: "Traditional media had unlimited information channels.", answer: "False" },
          { id: 2, type: "tfng", text: "Digital platforms have empowered previously excluded voices.", answer: "True" },
          { id: 3, type: "tfng", text: "Algorithmic curation always prioritizes substantive analysis.", answer: "False" },
          { id: 4, type: "tfng", text: "Foreign actors have exploited social media for interference.", answer: "True" },
          { id: 5, type: "tfng", text: "There are easy solutions to digital media's democratic challenges.", answer: "False" },
          { id: 6, type: "short", text: "What did professional journalists serve as in traditional media? (ONE WORD)", answer: "gatekeepers" },
          { id: 7, type: "short", text: "What optimizes for engagement in digital platforms? (TWO WORDS)", answer: "algorithmic curation" },
          { id: 8, type: "short", text: "What may expose users primarily to confirming information? (TWO WORDS)", answer: "filter bubbles" },
          { id: 9, type: "short", text: "What type of fragmentation makes dialogue difficult? (ONE WORD)", answer: "epistemic" },
          { id: 10, type: "mcq", text: "What did traditional media create for political discussion?", options: ["A. Complete disagreement", "B. Shared reference points", "C. Total fragmentation", "D. Private conversations"], answer: "B" },
          { id: 11, type: "mcq", text: "What does the attention economy optimize for?", options: ["A. Accuracy", "B. Engagement", "C. Education", "D. Consensus"], answer: "B" },
          { id: 12, type: "mcq", text: "What raises concerns about government control of speech?", options: ["A. Media literacy", "B. Platform regulation", "C. Journalism support", "D. Election security"], answer: "B" },
          { id: 13, type: "mcq", text: "What struggles economically against free content?", options: ["A. Social media", "B. Quality journalism", "C. Platform advertising", "D. Disinformation"], answer: "B" }
        ]
      },
      {
        id: "P2",
        title: "The Future of Work",
        wordCount: 850,
        text: `The nature of work is undergoing transformations that will reshape economies, societies, and individual lives in coming decades. Technological change, demographic shifts, globalization, and evolving values are combining to alter what jobs exist, how work is organized, and what work means to those who perform it. While predictions about the future of work vary widely, the magnitude of change underway suggests that current arrangements cannot persist unchanged.

Automation has eliminated jobs throughout industrial history while creating others, but the current technological wave may differ in scope. Artificial intelligence can now perform cognitive tasks—pattern recognition, natural language processing, complex reasoning—that were previously automation-resistant. Estimates of jobs at risk vary enormously depending on methodological assumptions, but even conservative assessments suggest substantial displacement. Whether new job creation will compensate, as it historically has, or whether technology will finally outpace human adaptability remains the central question.

The organization of work is evolving beyond traditional employment relationships. Gig economy platforms connect workers with short-term tasks rather than ongoing employment. Independent contracting and freelance arrangements offer flexibility to some while providing instability and reduced benefits to others. Remote work capabilities, accelerated by pandemic experience, may permanently alter where and how work occurs. These arrangements shift risks from employers to workers while potentially enabling greater autonomy.

Skills requirements are changing in ways that challenge educational and training systems. Technical skills may become obsolete quickly as technologies evolve, while meta-skills—learning agility, creative problem-solving, interpersonal effectiveness—may prove more durable. Yet education systems remain largely organized around credentialing for specific occupational roles rather than developing adaptable capabilities. The mismatch between skills development and labor market needs represents both an individual challenge and a systemic failure.

Inequality in work outcomes may increase without deliberate intervention. Workers with in-demand skills and abilities to navigate changing markets may thrive, while those with routine skills face displacement and downward pressure on wages. Geographic concentration of opportunity advantages some regions while others decline. Existing disparities by race, gender, and class may be amplified as advantages compound across generations. The distributional consequences of labor market transformation require policy attention.

The meaning of work extends beyond economic function to purpose, identity, and social connection. If traditional employment becomes less universal, what replaces its role in structuring lives and providing meaning? Alternatives might include expanded leisure, care work recognition, community engagement, or creative pursuits—but such transitions would require cultural as much as economic adjustment. The relationship between work, worth, and wellbeing may need fundamental reconsideration.

Policy responses are being debated but remain underdeveloped. Education reform, lifelong learning systems, portable benefits, strengthened safety nets, and universal basic income represent options under discussion. Active labor market policies can support transitions, though at scales that current implementations rarely approach. The governance of platforms and new work arrangements raises regulatory questions that existing frameworks address poorly. Preparing for work's future requires both institutional innovation and individual adaptation.`,
        questions: [
          { id: 14, type: "yng", text: "Automation has historically both eliminated and created jobs.", answer: "Yes" },
          { id: 15, type: "yng", text: "All estimates agree precisely on jobs at risk from automation.", answer: "No" },
          { id: 16, type: "yng", text: "Gig economy arrangements can provide both flexibility and instability.", answer: "Yes" },
          { id: 17, type: "yng", text: "Education systems are well-aligned with current labor market needs.", answer: "No" },
          { id: 18, type: "yng", text: "Policy responses to work transformation are fully developed.", answer: "No" },
          { id: 19, type: "mcq", text: "What can AI now perform that was previously automation-resistant?", options: ["A. Physical labor only", "B. Cognitive tasks", "C. Creative arts only", "D. Manual assembly"], answer: "B" },
          { id: 20, type: "mcq", text: "What do gig platforms connect workers with?", options: ["A. Lifetime employment", "B. Short-term tasks", "C. Pension plans", "D. Training programs"], answer: "B" },
          { id: 21, type: "mcq", text: "What type of skills may prove more durable?", options: ["A. Technical specifics", "B. Meta-skills like learning agility", "C. Manual skills", "D. Routine procedures"], answer: "B" },
          { id: 22, type: "mcq", text: "What does the passage say about universal basic income?", options: ["A. Already implemented everywhere", "B. Not under discussion", "C. An option under discussion", "D. Proven ineffective"], answer: "C" },
          { id: 23, type: "summary", text: "Complete: Remote work capabilities were accelerated by ________ experience.", answer: "pandemic" },
          { id: 24, type: "summary", text: "Complete: Geographic ________ of opportunity advantages some regions.", answer: "concentration" },
          { id: 25, type: "summary", text: "Complete: Traditional employment provides purpose, identity, and social ________.", answer: "connection" },
          { id: 26, type: "summary", text: "Complete: Preparing for work's future requires institutional innovation and individual ________.", answer: "adaptation" }
        ]
      },
      {
        id: "P3",
        title: "Neurodiversity and Society",
        wordCount: 860,
        text: `The concept of neurodiversity challenges traditional views that categorize conditions such as autism, ADHD, dyslexia, and other cognitive differences as disorders requiring correction. Instead, neurodiversity advocates propose that these variations represent natural human diversity, with characteristic strengths as well as challenges, deserving accommodation rather than cure. This perspective has gained influence in clinical, educational, and employment contexts while also generating debates about its implications and limits.

The neurodiversity paradigm emerged from autism advocacy communities in the 1990s, drawing on disability rights frameworks that distinguish impairment from disability. According to this view, challenges faced by neurodivergent individuals result largely from environments designed for neurotypical functioning rather than from inherent deficits. A dyslexic person struggles in text-heavy environments but may excel in visual-spatial tasks; an autistic individual may find social conventions bewildering while demonstrating exceptional pattern recognition. The goal shifts from normalizing the individual to modifying environments and expectations.

Educational applications of neurodiversity thinking emphasize accommodation and strengths-based approaches. Rather than focusing exclusively on deficits and remediation, neurodiversity-informed education identifies cognitive profiles that include both challenges and capabilities. Accommodations—extended time, alternative formats, reduced sensory stimulation—enable neurodivergent students to demonstrate competencies that standard conditions may obscure. Some schools have developed programs specifically designed around neurodivergent learning styles.

Employment contexts increasingly recognize neurodivergent talents. Technology companies have developed hiring programs specifically recruiting autistic individuals for roles requiring attention to detail, pattern recognition, and systematic analysis. Advocates argue that workplace accommodations enabling neurodivergent contribution are typically modest in cost while yielding significant benefits. However, employment rates for neurodivergent populations remain substantially below neurotypical averages, suggesting that rhetoric has outpaced practice.

The neurodiversity paradigm has attracted criticism from multiple perspectives. Some clinicians argue that reframing genuine disabilities as mere differences minimizes real suffering and need for treatment. Parents of severely affected individuals question whether neurodiversity advocacy represents their children's experiences and interests. Critics note that neurodiversity discourse often centers on high-functioning individuals whose challenges may differ from those facing more severe impairments. The relationship between neurodiversity advocacy and medical approaches remains contested.

Questions about where neurodiversity boundaries should be drawn present additional complexity. If autism and ADHD represent natural variation, what about conditions with clearer suffering and impairment? The category of neurodiversity could potentially expand indefinitely or contract based on contested judgments about which differences warrant celebration versus remediation. These boundary questions have both theoretical and practical significance for resource allocation, identity formation, and social policy.

The neurodiversity movement has nevertheless achieved significant cultural influence, shifting conversations about cognitive difference toward acceptance and accommodation. Even critics who reject strong neurodiversity claims often accept that neurodivergent individuals deserve respect, that their perspectives have value, and that environments should accommodate diverse cognitive styles where possible. This more moderate consensus may represent neurodiversity's most durable contribution, regardless of how debates about its stronger claims resolve.`,
        questions: [
          { id: 27, type: "tfng", text: "Neurodiversity views cognitive differences as disorders requiring cure.", answer: "False" },
          { id: 28, type: "tfng", text: "The neurodiversity paradigm emerged from autism advocacy communities.", answer: "True" },
          { id: 29, type: "tfng", text: "Workplace accommodations for neurodivergent employees are typically expensive.", answer: "False" },
          { id: 30, type: "tfng", text: "Employment rates for neurodivergent populations equal neurotypical averages.", answer: "False" },
          { id: 31, type: "tfng", text: "All perspectives agree on neurodiversity framework's implications.", answer: "False" },
          { id: 32, type: "matching", text: "Distinguishes impairment from environmental disability", answer: "disability rights frameworks" },
          { id: 33, type: "matching", text: "Identifies cognitive profiles with challenges and capabilities", answer: "strengths-based approaches" },
          { id: 34, type: "matching", text: "Extended time and alternative formats", answer: "accommodations" },
          { id: 35, type: "mcq", text: "According to neurodiversity, what causes challenges for neurodivergent people?", options: ["A. Inherent deficits only", "B. Environments designed for neurotypicals", "C. Lack of intelligence", "D. Personal choices"], answer: "B" },
          { id: 36, type: "mcq", text: "What do technology companies recruit autistic individuals for?", options: ["A. Social skills", "B. Management roles", "C. Pattern recognition roles", "D. Customer service"], answer: "C" },
          { id: 37, type: "mcq", text: "Who questions whether advocacy represents their children?", options: ["A. Technology companies", "B. Parents of severely affected individuals", "C. All educators", "D. All advocates"], answer: "B" },
          { id: 38, type: "mcq", text: "What has neurodiversity shifted conversations toward?", options: ["A. Cure-focused approaches", "B. Acceptance and accommodation", "C. Exclusion", "D. Medical treatment only"], answer: "B" },
          { id: 39, type: "short", text: "When did the neurodiversity paradigm emerge? (DECADE)", answer: "1990s" },
          { id: 40, type: "short", text: "What type of approaches emphasize both challenges and capabilities? (TWO WORDS)", answer: "strengths-based" }
        ]
      }
    ]
  },

  // ============================================================
  // R26-R33 - EXPERT LEVEL (Band 8.5-9.0)
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
  // R29-R33 - EXPERT (Band 8.5-9.0) - Abbreviated for space
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
  // R30-R33 Final Expert Tests
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

  {
    id: "R31",
    level: "Expert",
    bandTarget: "9.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [{ id: "P1", title: "Reserved for Future Test", wordCount: 850, text: "Content to be developed.", questions: [] }, { id: "P2", title: "Reserved", wordCount: 850, text: "Content to be developed.", questions: [] }, { id: "P3", title: "Reserved", wordCount: 850, text: "Content to be developed.", questions: [] }]
  },
  {
    id: "R32",
    level: "Expert",
    bandTarget: "9.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [{ id: "P1", title: "Reserved for Future Test", wordCount: 850, text: "Content to be developed.", questions: [] }, { id: "P2", title: "Reserved", wordCount: 850, text: "Content to be developed.", questions: [] }, { id: "P3", title: "Reserved", wordCount: 850, text: "Content to be developed.", questions: [] }]
  },
  {
    id: "R33",
    level: "Expert",
    bandTarget: "9.0",
    timeMinutes: 60,
    totalQuestions: 40,
    passages: [{ id: "P1", title: "Reserved for Future Test", wordCount: 850, text: "Content to be developed.", questions: [] }, { id: "P2", title: "Reserved", wordCount: 850, text: "Content to be developed.", questions: [] }, { id: "P3", title: "Reserved", wordCount: 850, text: "Content to be developed.", questions: [] }]
  }
];

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { READING_TESTS_FULL };
}
