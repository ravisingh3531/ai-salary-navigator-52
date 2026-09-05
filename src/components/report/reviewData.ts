export type Review = {
  rank: number;
  medal?: string;
  name: string;
  tagline: string;
  overview: string;
  curriculum: string;
  premiumVerdict: string;
  tools?: string;
  projects: string;
  delivery: string;
  support: string;
  fees: string;
  bestFor: string[];
  chooseDifferently: string[];
  pros: string[];
  cons: string[];
  verdict: string;
  ceiling: string;
  bands: string;
  cta: string;
  scores: {
    curriculum: number;
    portfolio: number;
    placement: number;
    transparency: number;
    completion: number;
    roi: number;
    overall: number;
  };
};

export const reviews: Review[] = [
  {
    rank: 1,
    medal: "🥇",
    name: "LogicMojo — AI & Machine Learning Course",
    tagline:
      "Best overall for salary-focused AI career growth — deepest 2026 premium-skill stack, interview-defensible portfolio, live IST mentorship, career support, strongest capability-per-rupee",
    overview:
      "A specialist AI provider rather than a broad EdTech marketplace, built around one question: can a working Indian learner reach production-capable AI engineering — the level the market prices at a premium — in one structured sequence, without a career break? The combination on offer is unusual: depth normally found only in ₹2L+ programs, currency normally found only in narrow specialist GenAI courses, live IST delivery with human code review, and structured interview and career support, at a mid-band price with no bond and no income-share agreement.",
    curriculum:
      "Fifteen modules that move deliberately from Python, pandas, SQL and intuition-first mathematics through classical ML with correct evaluation, deep learning in PyTorch, NLP and transformers, and computer vision — then into the layers that decide 2026 pricing: LLM engineering with hosted and open-weight models, embeddings and production RAG, fine-tuning with LoRA/QLoRA, agents, agent frameworks and MCP, evaluation and guardrails, MLOps/LLMOps, and finally AI system design with interview preparation and a learner-designed deployed capstone.",
    tools:
      "Python, NumPy, pandas, scikit-learn, PyTorch, Hugging Face, OpenAI/Anthropic/Gemini APIs, LangChain, LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, ChromaDB/Pinecone/Qdrant, Ollama, MLflow, FastAPI, Docker, Git, cloud deployment.",
    premiumVerdict:
      "The only program on this list rated Deep or Comprehensive across all seven premium layers — including the ones that actually determine engineering-band pricing: agent frameworks, MCP, open-weight models, evaluation and MLOps.",
    projects:
      "10–15 progressive projects that end in a learner-designed, deployed capstone. Human code review on submissions, project defence practice, AI system design and case-interview preparation, and GitHub portfolio construction. Deployment is mandatory, so the portfolio contains running systems rather than notebooks.",
    delivery:
      "Live IST batches (evening and weekend) with real instructors, in-session doubt resolution, mentor channels between sessions, recordings with a structured catch-up path, cohort accountability, prerequisite onboarding for Python and maths, and batch deferral. Completion likelihood: high.",
    support:
      "Career guidance on company and role targeting, portfolio and GitHub review, AI-role interview preparation across ML, GenAI and system design, project defence practice, and negotiation guidance [VERIFY]. Stated plainly: this is career assistance aimed at AI/ML/GenAI roles — not a guaranteed placement. Any published outcome figure is Tier B and should be read with its denominator.",
    fees:
      "₹XX,XXX with EMI and no bond [VERIFY current fee]. Frame it as capability-per-rupee against the Tier A bands for AI/ML/GenAI engineering roles — and note honestly that free alternatives exist for disciplined self-learners who can supply structure, sequence and review themselves.",
    bestFor: [
      "Engineers with 2–10 years targeting AI/ML/GenAI engineering bands",
      "IT-services professionals targeting product-company and GCC roles",
      "Analysts moving up to DS/ML pay",
      "Seniors adding agents, RAG and AI system design to existing depth",
      "Switchers who want engineering capability with prerequisite support",
    ],
    chooseDifferently: [
      "Placement infrastructure is the actual purchase → Scaler",
      "A university credential is required by your process → upGrad or Great Learning",
      "Your employer is funding a recognised certificate → Simplilearn",
      "You cannot attend any live session → a self-paced track with review",
      "Your budget is under ₹20,000 → PW Skills, then return for depth",
    ],
    pros: [
      "Deep coverage of every 2026 premium layer, including MCP and open-weight models",
      "Live IST cohorts with real instructors rather than recordings relabelled as live",
      "Human code review — rare below the ₹2L band",
      "Deployment is mandatory, so projects survive technical questioning",
      "AI system design and project defence practice built into the syllabus",
      "Prerequisite onboarding lowers the dropout cliff for switchers",
      "Mid-band pricing with EMI, no bond and no ISA",
      "Curriculum refreshed as the market moved, not on an annual academic cycle",
    ],
    cons: [
      "Requires genuine live attendance — a poor fit for unpredictable shift work",
      "Career support is assistance, not placement infrastructure with partner referrals",
      "No university or IIT tag for HR filters that demand one",
      "Brand recognition is smaller than upGrad, Simplilearn or Scaler",
      "10–15 weekly hours for months is a real commitment, not a claim to skim",
      "Specialist rather than marketplace: fewer adjacent tracks to switch into mid-way",
    ],
    verdict:
      "The highest capability ceiling on this list for a learner who commits to live structure, and the clearest path to the exact skills the 2026 market prices at engineering-band premiums.",
    ceiling: "Level 4–5",
    bands: "AI/ML and GenAI engineering bands (Tier A reference, [VERIFY])",
    cta: "Explore LogicMojo AI Course — Curriculum, Batches & Projects →",
    scores: {
      curriculum: 9.6,
      portfolio: 9.4,
      placement: 8.2,
      transparency: 8.8,
      completion: 9.2,
      roi: 9.5,
      overall: 9.3,
    },
  },
  {
    rank: 2,
    medal: "🥈",
    name: "Scaler — Data Science, Machine Learning & AI Program",
    tagline: "Best placement infrastructure for product-company and top-GCC packages",
    overview:
      "India's best-known premium online tech bootcamp. The AI/ML track sits inside a CS-strong program covering DSA, system design, machine learning and an increasingly substantial GenAI component. What you are buying is placement infrastructure, brand and an alumni network at ₹3–4L [VERIFY] — and for readers whose salary goal is specifically a product-company offer, that infrastructure is real and hard to replicate alone.",
    curriculum:
      "Strong programming and DSA foundations, Python, statistics, SQL, rigorous classical ML, deep learning, NLP, some computer vision, system design, and a growing GenAI component covering LLM fundamentals, prompting, some RAG and early agent content.",
    premiumVerdict:
      "Excellent CS and ML fundamentals; GenAI and agentic depth sits behind the specialists; MLOps is good but not central. The DSA weighting is an asset for product-company interviews and simultaneously a cost measured in AI hours.",
    projects:
      "5–10 projects with a CS-engineering flavour, plus very strong structured interview preparation across DSA, system design and ML. Fewer deployment-heavy AI projects than specialist programs produce.",
    delivery:
      "Live IST classes, structured cohorts, a strong TA and mentor network and high accountability, with comparatively strong completion for the price band. The pace is fast — designed for motivated learners with existing programming aptitude.",
    support:
      "The strongest structured placement operation on this list: partner network, dedicated interview preparation and referrals. Publishes placement data [VERIFY current report and date] — label it Tier B and read the eligibility filter, median versus average, and the reporting window before you treat it as a forecast.",
    fees:
      "₹3–4L [VERIFY] with long-tenure EMI — a multi-year financial commitment. Strong ROI if you complete and actually use the placement channels; weak if you exit at month five with the loan still running.",
    bestFor: [
      "Engineers targeting product companies and top GCCs",
      "Learners who want DSA, system design and AI in one package",
      "Anyone able to commit 15–20 hours a week for a year or more",
    ],
    chooseDifferently: [
      "You want AI specifically, not months of DSA",
      "₹3–4L or 11–18 months is a genuine stretch",
      "You are a non-technical switcher starting from zero",
      "Frontier GenAI and agentic depth is the priority",
    ],
    pros: [
      "Best-in-class placement operation and partner access in India",
      "Rigorous DSA and system design — exactly what product loops test",
      "High accountability and comparatively strong completion",
      "Powerful alumni network and referral culture",
      "Publishes outcome data, which most competitors avoid",
      "Structured mock interview cadence across multiple rounds",
    ],
    cons: [
      "₹3–4L is the highest commitment here, on long-tenure EMI",
      "Months of DSA are hours not spent on GenAI depth",
      "Agent frameworks, MCP and production RAG lag specialists",
      "Fast pace punishes learners without programming aptitude",
      "Placement figures rest on eligibility filters that shrink the denominator",
      "11–18 months of 15–20 weekly hours is a heavy life change",
    ],
    verdict:
      "If a product-company package is the goal and the fee is genuinely affordable, this is the strongest placement infrastructure available online in India — but you are buying a tech bootcamp with AI inside, not an AI specialist program.",
    ceiling: "Level 4",
    bands: "Product-company engineering bands (Tier A reference, [VERIFY])",
    cta: "Compare Scaler's AI/ML Track →",
    scores: {
      curriculum: 8.4,
      portfolio: 8.3,
      placement: 9.6,
      transparency: 8.2,
      completion: 8.6,
      roi: 7.6,
      overall: 8.7,
    },
  },
  {
    rank: 3,
    medal: "🥉",
    name: "upGrad — PG Programme in Machine Learning & AI (IIIT-Bangalore)",
    tagline: "Best university credential for HR-filter and promotion pathways",
    overview:
      "India's largest higher-EdTech platform delivering an IIIT-Bangalore-affiliated postgraduate programme. Its salary relevance is specific and real: the credential gets past HR filters and promotion committees that weigh formal qualifications — a genuine lever for career switchers and internal-mobility candidates, and much less of one inside a technical round.",
    curriculum:
      "Python, statistics and inferential mathematics, EDA, classical ML, deep learning fundamentals, NLP, computer vision, some GenAI and LLM content, and selectable capstone specialisations.",
    premiumVerdict:
      "Broad and academically organised with moderate depth in the newest areas. University approval cycles refresh GenAI, agents and MCP more slowly than specialist providers can.",
    projects:
      "8–12 assignments plus a capstone — well-scoped and well-graded, academic in flavour, with few deployment-focused outputs. Interview preparation is moderate.",
    delivery:
      "An academic cadence: recorded content, live sessions, assigned mentors and real deadlines. The pace is deliberate; doubt resolution runs through tickets and scheduled sessions. Completion is moderate to high.",
    support:
      "A career services team and a job board [VERIFY]. The language is 'assistance' — label any published figure Tier B and state what it omits, especially the eligibility criteria behind placement percentages.",
    fees:
      "₹1.5–3.5L [VERIFY], with EMI and frequent no-cost EMI offers. This is a credential-weighted purchase: you are paying for recognition and structure as much as technical depth. It is fairer to say so than to imply otherwise.",
    bestFor: [
      "Career switchers who need a credential to be taken seriously",
      "Professionals whose organisations formally weigh qualifications",
      "Learners who thrive on academic structure and deadlines",
    ],
    chooseDifferently: [
      "You are chasing GenAI or agentic engineering bands",
      "You want deployment and MLOps depth",
      "₹1.5–3.5L is a stretch for a credential you may not need",
      "You assume IIIT-B faculty teach every session — clarify the affiliation first",
    ],
    pros: [
      "IIIT-Bangalore association carries genuine weight with HR and promotion panels",
      "Mature learner operations and clear deadlines",
      "Strong statistics and ML foundations, well sequenced",
      "Frequent no-cost EMI makes the sticker price manageable",
      "Specialisation choices let you angle the capstone at your domain",
      "Large alumni base for internal referrals",
    ],
    cons: [
      "Newest GenAI layers refresh slowly under academic governance",
      "Few deployment-grade project outputs",
      "Ticket-based doubt resolution is slower than live mentorship",
      "Price is credential-driven, not depth-driven",
      "Faculty association is not the same as faculty teaching your batch",
      "Interview preparation is thin relative to the fee",
    ],
    verdict:
      "The best choice when the credential genuinely changes your path — and a weaker one if bought primarily for 2026 engineering-band skills.",
    ceiling: "Level 3–4",
    bands: "Analyst to mid ML/DS bands, credential-assisted (Tier A reference, [VERIFY])",
    cta: "Explore upGrad's IIIT-B ML & AI Programme →",
    scores: {
      curriculum: 7.6,
      portfolio: 7.2,
      placement: 8.0,
      transparency: 7.4,
      completion: 8.4,
      roi: 7.0,
      overall: 8.0,
    },
  },
  {
    rank: 4,
    name: "Great Learning — PG Program in AI & Machine Learning (UT Austin / Great Lakes)",
    tagline: "Best mentor-led weekend program with global university branding",
    overview:
      "A long-running, operationally mature program carrying McCombs (UT Austin) and Great Lakes branding, built around weekend live mentor sessions. Its salary relevance is a combination of high completion rates among working professionals and an internationally recognisable brand — useful for mid-career professionals adding AI to existing domain expertise.",
    curriculum:
      "Python, statistics, supervised and unsupervised learning, feature engineering, deep learning, computer vision, NLP, and a GenAI module covering LLMs, prompting and applied use cases.",
    premiumVerdict:
      "Solid ML and DL coverage; GenAI is applied rather than deep on production RAG, fine-tuning or agents; MLOps is light.",
    projects:
      "8–12 projects with mentor feedback — one of the better feedback loops in this price band — plus a capstone, though few outputs are deployment-grade. Resume support and mock interviews are included.",
    delivery:
      "Recorded core content plus live weekend IST mentor sessions with practitioner mentors, supported by strong learner-support operations. Completion is moderate to high, which is the program's quiet advantage.",
    support:
      "Resume support and mock interviews, with 'assistance' language throughout [VERIFY]. Treat any published figure as Tier B and ask for the denominator.",
    fees:
      "₹1.5–3.5L [VERIFY] with EMI widely available. The value sits in format and brand signal; premium-layer depth per rupee is moderate.",
    bestFor: [
      "Working professionals with reliable weekend availability",
      "Mid-career domain professionals adding AI to existing expertise",
      "Learners who want mentor discussion plus a recognisable brand",
    ],
    chooseDifferently: [
      "You want deep GenAI, agents or production MLOps",
      "You need weekday flexibility instead of fixed weekends",
      "Your budget is constrained relative to the depth delivered",
      "You expect UT Austin faculty to teach your sessions",
    ],
    pros: [
      "Weekend live mentor format fits full-time work well",
      "Among the better mentor feedback loops in its band",
      "Mature support operations and low administrative friction",
      "Internationally recognisable university branding",
      "Reliable completion rates for working professionals",
      "Good ML and DL sequencing for domain professionals",
    ],
    cons: [
      "GenAI stays at applied level; agents and MCP are not meaningful components",
      "MLOps and deployment are light",
      "Brand premium is a real part of the fee",
      "Weekend-only cadence stretches the calendar",
      "Interview preparation is generic rather than AI-role specific",
      "Few portfolio artefacts that survive a deep technical round",
    ],
    verdict:
      "One of the most reliably completable premium programs here — choose it for structure, mentorship and brand signal, not frontier engineering depth.",
    ceiling: "Level 3–4",
    bands: "Mid ML/DS and applied-AI bands (Tier A reference, [VERIFY])",
    cta: "Check Great Learning's AI & ML Program →",
    scores: {
      curriculum: 7.4,
      portfolio: 7.4,
      placement: 7.6,
      transparency: 7.4,
      completion: 8.6,
      roi: 7.0,
      overall: 7.9,
    },
  },
  {
    rank: 5,
    name: "Intellipaat — Advanced Certification in AI & Machine Learning (IIT-affiliated)",
    tagline: "Best IIT-tagged credential at mid-tier pricing with deployment exposure",
    overview:
      "A large Indian EdTech provider with IIT-institute affiliations [VERIFY current affiliation and program name]. The salary relevance is a combination rarely found at this price: an IIT tag that clears HR filters, plus more deployment awareness than several higher-priced competitors, at a third to a half of premium pricing.",
    curriculum:
      "Python, statistics, SQL, machine learning, deep learning, NLP, computer vision, cloud and deployment components, and a growing GenAI section covering LLMs, prompting and introductory RAG.",
    premiumVerdict:
      "Broader and more deployment-aware than most mid-tier programs; GenAI and agentic depth is moderate; quality varies noticeably by module and instructor.",
    projects:
      "6–12 scenario-framed projects plus a capstone, with review depth that varies, and some genuine deployment exposure. Interview preparation is moderate.",
    delivery:
      "A hybrid of self-paced content and live sessions, with 24/7 support claims that are worth testing during pre-sales. Cohorts are larger. Completion is moderate.",
    support:
      "Job assistance and resume preparation plus published partner lists [VERIFY currency]. Label all figures Tier B.",
    fees:
      "₹80K–₹2L [VERIFY], with EMI and frequent discounting — negotiate, and get inclusions confirmed in writing before paying. ROI is good for credential-plus-breadth buyers.",
    bestFor: [
      "Learners wanting an IIT-associated credential under ₹2L",
      "Professionals wanting broad coverage with some deployment exposure",
      "Proactive learners willing to chase support when needed",
    ],
    chooseDifferently: [
      "You need intensive personal mentorship",
      "Frontier GenAI and agent frameworks are the goal",
      "High-pressure sales follow-up is a dealbreaker for you",
    ],
    pros: [
      "IIT association at roughly half of premium pricing",
      "Deployment and cloud exposure beyond most mid-tier peers",
      "Broad curriculum covering ML, DL, NLP and CV",
      "Frequent discounts make negotiation genuinely worthwhile",
      "Scenario-framed projects map to enterprise contexts",
      "Hybrid format tolerates irregular weeks",
    ],
    cons: [
      "Module quality varies with instructor allocation",
      "Support experience depends heavily on how hard you push",
      "Aggressive sales follow-up is a common complaint",
      "GenAI depth stops at introductory RAG",
      "Large cohorts reduce individual code feedback",
      "Partner lists are not evidence of hires",
    ],
    verdict:
      "A sensible middle path for breadth plus an institutional tag — with the caveat that you will drive your own support experience.",
    ceiling: "Level 3–4",
    bands: "Entry to mid ML/DS bands (Tier A reference, [VERIFY])",
    cta: "Compare Intellipaat's AI & ML Certification →",
    scores: {
      curriculum: 7.4,
      portfolio: 7.0,
      placement: 7.2,
      transparency: 6.8,
      completion: 7.4,
      roi: 7.8,
      overall: 7.6,
    },
  },
  {
    rank: 6,
    name: "Simplilearn — PG Program in AI & Machine Learning (Purdue University / IBM)",
    tagline: "Best for employer-sponsored corporate upskilling and internal mobility",
    overview:
      "A certification-led global platform with Purdue and IBM collaboration. Its salary relevance is unusually specific: it is one of the most commonly employer-reimbursed platforms in India, with credentials familiar to HR and L&D teams. Its strongest lever is internal mobility and promotion — not an external switch into an engineering band.",
    curriculum:
      "Python, statistics, machine learning, deep learning with TensorFlow/Keras, NLP, computer vision, reinforcement learning basics, and a GenAI module covering LLMs and prompting.",
    premiumVerdict:
      "Broad and certification-optimised with moderate depth. Agents, MCP and production RAG are not meaningful components of the program.",
    projects:
      "5–10 guided projects plus a capstone, with limited independent design and little code review. Interview preparation is basic to moderate.",
    delivery:
      "Predominantly a self-paced core plus live masterclasses — an important distinction from fully live cohorts. Support runs through forums and tickets. Completion depends almost entirely on personal discipline.",
    support:
      "Career services and a job board with an enterprise orientation; label any figure Tier B [VERIFY].",
    fees:
      "₹1.5–2.5L [VERIFY] with EMI and frequent promotions. ROI is strong when the employer is paying and moderate when you are self-funding.",
    bestFor: [
      "Employer-funded professionals",
      "Corporate employees needing credentials for internal mobility",
      "Managers wanting structured AI literacy rather than build skills",
    ],
    chooseDifferently: [
      "You need live instruction and real mentorship",
      "You are targeting hands-on engineering bands on this course alone",
      "You are self-funding and could buy more depth per rupee elsewhere",
    ],
    pros: [
      "Widely accepted for employer reimbursement in India",
      "Purdue and IBM branding registers instantly with HR and L&D",
      "Broad syllabus suitable for literacy and internal mobility",
      "Flexible self-paced core suits unpredictable corporate calendars",
      "Frequent promotions reduce effective cost",
      "Good option for managers who must evaluate AI work, not build it",
    ],
    cons: [
      "'Live masterclasses' are not the same as a live cohort",
      "Limited code review and independent project design",
      "Agents, MCP and production RAG effectively absent",
      "Completion depends entirely on self-discipline",
      "Fee is high relative to premium-layer depth when self-funded",
      "Interview preparation is not AI-role specific",
    ],
    verdict:
      "Excellent if your employer is paying and internal recognition drives your next raise; moderate value if you are self-funding for an engineering-band switch.",
    ceiling: "Level 3–4",
    bands: "Internal-mobility and applied-AI bands (Tier A reference, [VERIFY])",
    cta: "Check Simplilearn's Purdue AI & ML Program →",
    scores: {
      curriculum: 7.0,
      portfolio: 6.6,
      placement: 7.0,
      transparency: 6.8,
      completion: 6.8,
      roi: 7.2,
      overall: 7.2,
    },
  },
  {
    rank: 7,
    name: "DeepLearning.AI on Coursera — ML + Deep Learning Specializations",
    tagline:
      "Best AI foundations in the world at near-zero cost — salary impact only with a self-built portfolio",
    overview:
      "Andrew Ng's programs are the global reference standard for foundations, now surrounded by short courses on GenAI, RAG, agents and LLM applications. The salary relevance is honest and narrow: the strongest conceptual grounding available at any price and, on its own, no portfolio, no interview preparation and no hiring channel. This is a foundation layer, not a salary program.",
    curriculum:
      "Supervised and unsupervised learning, neural networks, decision trees, recommenders and an RL introduction; then DL fundamentals, tuning, regularisation, structuring ML projects, CNNs, sequence models, attention and transformers; plus short courses on prompting, LangChain, RAG, fine-tuning and agentic patterns.",
    premiumVerdict:
      "Unmatched clarity on foundations. No MLOps, no deployment pipeline, no Indian context, and GenAI content spread thinly across many short courses.",
    projects:
      "High-quality scaffolded assignments that teach exceptionally well and demonstrate very little to a recruiter. No interview preparation.",
    delivery:
      "Fully self-paced with world-class production values, and no live sessions, mentors, code review or cohort. Completion rates are low, as they are for all self-paced content.",
    support: "None claimed — and the platform is honest about that, which is worth credit.",
    fees:
      "Free to audit; roughly ₹3,000–4,000 a month via Coursera Plus [VERIFY]. Unmatched cost value; subscription creep and non-completion are the real risks.",
    bestFor: [
      "Highly self-directed learners",
      "Students with time and no budget",
      "Professionals building foundations before paying for a program",
      "Anyone supplementing a paid course",
    ],
    chooseDifferently: [
      "You need accountability or a hiring channel",
      "You need a course-produced portfolio and interview practice",
      "You want IST support and Indian market context",
      "You have abandoned two self-paced courses before",
    ],
    pros: [
      "The clearest explanations of ML and DL foundations available anywhere",
      "Free to audit — zero financial risk",
      "Attention and transformer coverage is genuinely interview-useful",
      "Short-course library keeps pace with GenAI topics",
      "Certificates recognised globally as a signal of foundations",
      "Excellent companion to any paid program",
    ],
    cons: [
      "No portfolio a recruiter would treat as evidence",
      "No interview preparation or hiring access",
      "No MLOps or deployment pipeline",
      "No Indian salary or hiring context",
      "Low completion without external accountability",
      "GenAI depth fragmented across many short courses",
    ],
    verdict:
      "The best foundations anywhere, and an incomplete answer to 'how do I raise my salary with AI' — pair it with structure and self-built projects.",
    ceiling: "Level 2–3 alone",
    bands: "No direct band without a self-built portfolio (Tier A reference, [VERIFY])",
    cta: "Start DeepLearning.AI's Specializations (Free to Audit) →",
    scores: {
      curriculum: 8.2,
      portfolio: 4.5,
      placement: 2.0,
      transparency: 9.5,
      completion: 4.0,
      roi: 9.6,
      overall: 7.0,
    },
  },
  {
    rank: 8,
    name: "IBM AI Engineering Professional Certificate (Coursera)",
    tagline: "Best low-cost applied AI engineering track with an enterprise-recognised name",
    overview:
      "A structured, applied certificate aimed at practising AI engineering with widely used tooling. Its salary relevance is implementation orientation at a fraction of any Indian premium program's price, carrying a name that registers in enterprise and IT-services contexts.",
    curriculum:
      "ML with Python and scikit-learn, deep learning fundamentals, Keras/TensorFlow, PyTorch, computer vision applications, and — in current versions — GenAI, LLM, prompting and RAG components [VERIFY current module list].",
    premiumVerdict:
      "Strong applied breadth for the price; a moderate GenAI layer; MLOps and deployment are touched rather than taught.",
    projects:
      "6–10 guided labs and projects with a capstone. You must extend them into original work for them to be defensible in an interview. No interview preparation included.",
    delivery:
      "Fully self-paced with cloud-notebook labs and no live sessions, mentors or human review. Completion is low.",
    support: "None claimed.",
    fees:
      "Free to audit; roughly ₹3,000–4,000 a month [VERIFY]. Excellent cost value, with the same subscription-creep caution.",
    bestFor: [
      "Budget-constrained learners who already write code",
      "Professionals in enterprise contexts where IBM branding registers",
    ],
    chooseDifferently: [
      "You are a complete beginner",
      "You need mentorship, accountability or placement support",
      "You want deep GenAI, agents or MLOps",
    ],
    pros: [
      "Applied, hands-on framing rather than lecture-only theory",
      "Both TensorFlow and PyTorch exposure",
      "Cloud-notebook labs remove local setup friction",
      "IBM name is familiar in enterprise and services hiring",
      "Free to audit, cheap to certify",
      "Reasonable bridge from coding ability to applied ML",
    ],
    cons: [
      "Guided labs need extension before they are portfolio-grade",
      "No human review or accountability",
      "MLOps and deployment barely covered",
      "Low completion typical of self-paced formats",
      "No Indian hiring context or interview preparation",
      "Beginners will struggle without prior coding",
    ],
    verdict:
      "The best applied-practice value on this list, and the strongest ₹0–₹5,000 option for someone who already codes.",
    ceiling: "Level 2–3",
    bands: "Entry applied-AI bands with extended projects (Tier A reference, [VERIFY])",
    cta: "Explore IBM's AI Engineering Certificate →",
    scores: {
      curriculum: 7.2,
      portfolio: 5.6,
      placement: 2.0,
      transparency: 9.2,
      completion: 4.2,
      roi: 9.4,
      overall: 6.8,
    },
  },
  {
    rank: 9,
    name: "Udacity — AI / Machine Learning Engineer Nanodegrees",
    tagline: "Best human project review in the self-paced band",
    overview:
      "Project-based nanodegrees with human reviewers on every submission — genuinely rare among self-paced options. Salary relevance: reviewed, portfolio-grade projects for self-directed learners, with limited India-specific career support [VERIFY current programs, India pricing and support scope].",
    curriculum:
      "[VERIFY current nanodegree content] — typically ML fundamentals, deep learning, deployment, and GenAI or agent tracks depending on the program chosen.",
    premiumVerdict:
      "Moderate depth with strong project structure; coverage of agents, MCP and fine-tuning varies significantly by program.",
    projects:
      "4–6 reviewed projects per nanodegree — the format's real strength, because a human tells you what is wrong. Interview preparation is basic.",
    delivery:
      "Self-paced with reviewer feedback and no live cohort. Completion is moderate — better than pure MOOCs because submissions are gated by review.",
    support:
      "Career services with limited India specificity [VERIFY]. Label any figure Tier B.",
    fees:
      "[VERIFY] — subscription pricing, so India value depends on how fast you finish and on currency. Moderate ROI.",
    bestFor: [
      "Self-directed learners who want reviewed projects without a live schedule",
      "Professionals with unpredictable working hours",
    ],
    chooseDifferently: [
      "You need IST live support and Indian hiring context",
      "You want placement infrastructure",
      "Your budget is tight and the subscription clock worries you",
    ],
    pros: [
      "Human review on every project — the differentiator in this band",
      "Portfolio-grade outputs rather than copy-along notebooks",
      "Flexible pacing for unpredictable schedules",
      "Clear project rubrics that teach professional standards",
      "Deployment appears in several tracks",
      "Reviewer feedback builds defence-ready understanding",
    ],
    cons: [
      "Subscription pricing punishes slow finishers",
      "Little India-specific career support or hiring access",
      "No live cohort or peer accountability",
      "Agent, MCP and fine-tuning coverage varies by program",
      "Interview preparation is basic",
      "Content refresh cadence is uneven across nanodegrees",
    ],
    verdict:
      "The best self-paced option for building reviewed portfolio projects — pair it with Indian-context interview preparation.",
    ceiling: "Level 3",
    bands: "Entry to mid applied-AI bands (Tier A reference, [VERIFY])",
    cta: "Explore Udacity's AI Nanodegrees →",
    scores: {
      curriculum: 6.8,
      portfolio: 8.0,
      placement: 4.0,
      transparency: 7.6,
      completion: 6.4,
      roi: 6.6,
      overall: 6.7,
    },
  },
  {
    rank: 10,
    name: "PW Skills — Data Science with Generative AI",
    tagline: "Best ultra-affordable entry for freshers testing the field",
    overview:
      "Physics Wallah's skilling arm: affordability-first, Hindi-English delivery, and a very large community. Salary relevance is honest and bounded — an entry-band starting point, enough for a first GitHub presence and analyst or junior conversations, and not enough for engineering-band premiums.",
    curriculum:
      "Python, statistics, SQL, machine learning, introductory deep learning, and a GenAI component covering LLM basics, prompting, APIs and introductory RAG [VERIFY current curriculum].",
    premiumVerdict:
      "Entry-level depth throughout, with no meaningful agent frameworks, MCP or MLOps.",
    projects:
      "4–8 guided entry-level projects. Interview preparation is basic.",
    delivery:
      "Recorded-first with live doubt sessions and an active community, mobile-friendly for learners studying on a phone. Completion is moderate.",
    support:
      "A growing placement cell with an entry-level focus [VERIFY]. Label all figures Tier B.",
    fees:
      "₹5,000–₹30,000 [VERIFY]. The lowest-risk structured entry available — frame it as a starting investment before a deeper program, not as the whole path.",
    bestFor: [
      "Students and freshers with tight budgets",
      "Hindi-preferring learners",
      "Anyone testing AI before a larger investment",
    ],
    chooseDifferently: [
      "You are an experienced professional targeting engineering bands",
      "You need mentorship, code review or deployment depth",
      "Agents and fine-tuning are on your target job description",
    ],
    pros: [
      "Extremely low financial risk",
      "Hindi-English delivery widens access considerably",
      "Mobile-friendly for learners without a laptop-first setup",
      "Large, active peer community",
      "Live doubt sessions despite the low price",
      "Good first exposure to Python, SQL and ML basics",
    ],
    cons: [
      "No agent frameworks, MCP or MLOps",
      "Guided projects only — little independent design",
      "Recorded-first delivery demands self-discipline",
      "Placement support is entry-level in scope",
      "Not sufficient alone for a premium-band switch",
      "Code review is effectively absent",
    ],
    verdict:
      "The best first ₹10,000 in Indian AI education — with a clear understanding that a second, deeper investment is needed to reach the bands where premiums live.",
    ceiling: "Level 2–3",
    bands: "Entry / analyst bands (Tier A reference, [VERIFY])",
    cta: "Check PW Skills' Data Science with GenAI →",
    scores: {
      curriculum: 5.8,
      portfolio: 5.4,
      placement: 5.0,
      transparency: 6.4,
      completion: 6.6,
      roi: 8.4,
      overall: 6.3,
    },
  },
];
