import {
  integrityDefault,
  languagesDefault,
  levelsDefault,
  type LandingContent,
} from "./types";

export const serviceLandings: LandingContent[] = [
  {
    slug: "thesis-dissertation-coaching",
    group: "Services",
    label: "Thesis & dissertation coaching",
    eyebrow: "Service · Thesis & dissertation",
    h1: "Thesis and dissertation coaching for Master's and PhD students",
    title: "Thesis & Dissertation Coaching | Master's & PhD Support",
    description:
      "One-to-one coaching for dissertations and theses: research question, literature review, methodology, chapter feedback and submission planning.",
    intro:
      "A dissertation is the first piece of work most students manage entirely themselves, with a supervisor who sees it once a month. Coaching supplies the missing structure: a plan with dates, a defensible method, and regular feedback on chapters you have written.",
    highlights: [
      {
        title: "A question you can finish",
        copy: "Most dissertation trouble starts with a topic too broad to research in the time and access available. We narrow it before you lose a month.",
      },
      {
        title: "Chapter-by-chapter momentum",
        copy: "Milestones with dates for introduction, literature review, methodology, findings and discussion, so nothing lands in the final fortnight.",
      },
      {
        title: "Feedback on your drafts",
        copy: "Detailed comments on argument, evidence, structure and clarity — always on writing you produced.",
      },
      {
        title: "Submission and defence",
        copy: "Formatting, appendices, abstract, and preparation for viva-style questions about your choices.",
      },
    ],
    lists: [
      {
        heading: "What we coach",
        items: [
          "Topic selection and research questions",
          "Literature review structure and synthesis",
          "Methodology and justification",
          "Data collection planning",
          "Findings, analysis and discussion",
          "Abstract, formatting and referencing",
        ],
      },
      {
        heading: "Who this is for",
        items: [
          "Master's students on a one-year timeline",
          "Undergraduate final-year dissertations",
          "PhD candidates drafting chapters",
          "Students who have stalled and need a plan",
          "International students writing in a second language",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Do you write dissertations?",
        answer:
          "No. We coach, guide and give feedback. You research, write and submit your own dissertation.",
      },
      {
        question: "When should I start coaching?",
        answer:
          "Ideally at the proposal stage, but we regularly help students who are mid-way and behind schedule.",
      },
      {
        question: "How often do we meet?",
        answer:
          "Most students book weekly or fortnightly, with more intensive support around chapter deadlines.",
      },
      {
        question: "Can you help if my supervisor is unresponsive?",
        answer:
          "Yes. Coaching often fills exactly that gap, while keeping your supervisor's requirements central.",
      },
    ],
    related: [
      { label: "PhD research support", to: "/phd-research-support" },
      { label: "Research methodology support", to: "/research-methodology-support" },
      { label: "Literature review support", to: "/literature-review-support" },
      { label: "Academic writing coaching", to: "/academic-writing-coaching" },
    ],
    serviceType: "Thesis and dissertation coaching",
  },
  {
    slug: "phd-research-support",
    group: "Services",
    label: "PhD research support",
    eyebrow: "Service · Doctoral research",
    h1: "PhD research support and doctoral coaching",
    title: "PhD Research Support | Doctoral Coaching, Methodology & Writing",
    description:
      "Coaching for PhD candidates: research design, methodology, literature synthesis, chapter drafting, publication planning and viva preparation.",
    intro:
      "Doctoral work fails on stamina and structure far more often than on intellect. We provide the external accountability, methodological challenge and writing feedback that a single supervisor rarely has time to give.",
    highlights: [
      {
        title: "Framing an original contribution",
        copy: "Articulating what is genuinely new in your work and defending that claim against the existing literature.",
      },
      {
        title: "Methodological rigour",
        copy: "Pressure-testing design, sampling, instruments and analysis before your examiners do it for you.",
      },
      {
        title: "Writing at doctoral length",
        copy: "Chapter architecture, argument continuity across 80,000 words, and a realistic writing routine.",
      },
      {
        title: "Milestones and the viva",
        copy: "Upgrade and confirmation documents, conference abstracts, publication planning and mock viva questioning.",
      },
    ],
    lists: [
      {
        heading: "Support areas",
        items: [
          "Research proposals and upgrade reports",
          "Systematic literature synthesis",
          "Qualitative and quantitative methodology",
          "Data analysis strategy",
          "Chapter feedback and revision",
          "Viva and defence preparation",
        ],
      },
      {
        heading: "Also useful for",
        items: [
          "Candidates returning after interruption",
          "Part-time doctoral students",
          "International candidates writing in English",
          "Students preparing a first journal submission",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Can coaching replace my supervisor?",
        answer:
          "No, and it should not. We complement supervision with more frequent structure, feedback and accountability.",
      },
      {
        question: "Do you help with publications?",
        answer:
          "We coach article structure, journal fit and responding to reviewer comments. The writing remains yours.",
      },
      {
        question: "Can you prepare me for the viva?",
        answer:
          "Yes. Mock questioning on method, contribution and limitations, plus how to concede a point without losing the argument.",
      },
      {
        question: "Do you write chapters for candidates?",
        answer: "No. Doctoral work must be entirely your own; we coach and critique it.",
      },
    ],
    related: [
      { label: "Research methodology support", to: "/research-methodology-support" },
      { label: "Literature review support", to: "/literature-review-support" },
      { label: "Data analysis & statistics", to: "/data-analysis-statistics" },
      { label: "Thesis & dissertation coaching", to: "/thesis-dissertation-coaching" },
    ],
    serviceType: "Doctoral research coaching",
  },
  {
    slug: "academic-writing-coaching",
    group: "Services",
    label: "Academic writing coaching",
    eyebrow: "Service · Academic writing",
    h1: "Academic writing coaching for university students",
    title: "Academic Writing Coaching | Essays, Reports & Research Writing",
    description:
      "Coaching in academic writing: argument, structure, critical voice, paragraph craft, referencing and clarity for students writing in a second language.",
    intro:
      "Academic writing is a specific register with rules most students are never taught explicitly. We teach them: how a paragraph makes a claim, how to hedge without vagueness, how to signal critical distance, and how to sound like a scholar rather than a search engine.",
    highlights: [
      {
        title: "Structure that carries argument",
        copy: "Introductions that promise something specific, paragraphs that deliver one point each, conclusions that do more than repeat.",
      },
      {
        title: "Critical voice",
        copy: "Moving from reporting sources to evaluating them, which is the single biggest grade lever in most rubrics.",
      },
      {
        title: "Clarity in a second language",
        copy: "Sentence-level coaching for students marked on academic English, working from your own drafts.",
      },
      {
        title: "Referencing and paraphrase",
        copy: "Paraphrasing that genuinely reformulates, citation practice that holds up under similarity checking.",
      },
    ],
    lists: [
      {
        heading: "We work on",
        items: [
          "Essays and coursework",
          "Reports and case studies",
          "Reflective writing",
          "Dissertation chapters",
          "Research articles",
          "Abstracts and executive summaries",
        ],
      },
      {
        heading: "Referencing styles",
        items: ["Harvard", "APA", "MLA and MHRA", "Chicago", "OSCOLA", "Vancouver and IEEE"],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Is this proofreading?",
        answer:
          "No. Proofreading corrects your text; coaching teaches you to correct it yourself, which is what your institution expects and what actually improves your grades.",
      },
      {
        question: "Can you help with academic English specifically?",
        answer:
          "Yes. Most of our writing students are studying in a second or third language.",
      },
      {
        question: "How quickly do people improve?",
        answer:
          "Structural improvements usually appear within two or three assignments; register and voice take a term of deliberate practice.",
      },
      {
        question: "Will you rewrite my draft?",
        answer:
          "No. We annotate and explain so the revision is yours.",
      },
    ],
    related: [
      { label: "Assignment & coursework guidance", to: "/assignment-coursework-guidance" },
      { label: "Literature review support", to: "/literature-review-support" },
      { label: "Thesis & dissertation coaching", to: "/thesis-dissertation-coaching" },
      { label: "International student support", to: "/international-student-academic-support" },
    ],
    serviceType: "Academic writing coaching",
  },
  {
    slug: "research-methodology-support",
    group: "Services",
    label: "Research methodology support",
    eyebrow: "Service · Methodology",
    h1: "Research methodology support and guidance",
    title: "Research Methodology Support | Qualitative & Quantitative Design",
    description:
      "Guidance on research design, sampling, instruments, qualitative and quantitative methods, ethics and writing a defensible methodology chapter.",
    intro:
      "The methodology chapter is where markers decide whether to trust everything that follows. We help you choose a method your question actually requires, apply it properly, and justify it in writing against alternatives you considered and rejected.",
    highlights: [
      {
        title: "Question-first design",
        copy: "The method follows the question and the data you can realistically access — not the other way round.",
      },
      {
        title: "Instruments and sampling",
        copy: "Questionnaire and interview design, sampling strategy, pilot testing, validity and reliability.",
      },
      {
        title: "Analysis planning",
        copy: "Deciding before collection how the data will be analysed, so you do not end up with unusable results.",
      },
      {
        title: "Ethics and limitations",
        copy: "Ethics applications, consent and data protection, plus a limitations section that shows judgement rather than apology.",
      },
    ],
    lists: [
      {
        heading: "Approaches covered",
        items: [
          "Quantitative and survey research",
          "Qualitative interviews and focus groups",
          "Mixed methods",
          "Case study research",
          "Systematic and scoping reviews",
          "Experimental and quasi-experimental design",
        ],
      },
      {
        heading: "Deliverables we support",
        items: [
          "Methodology chapters",
          "Research proposals",
          "Ethics applications",
          "Data collection instruments",
          "Analysis plans",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "I have collected data with the wrong design. Can you help?",
        answer:
          "Often yes. We assess what your data can legitimately support and help you reframe the claims honestly.",
      },
      {
        question: "Do you help with mixed methods?",
        answer:
          "Yes, including how to integrate strands rather than presenting two studies side by side.",
      },
      {
        question: "Can you help write the ethics application?",
        answer:
          "We coach what committees look for and review your drafts; you submit your own application.",
      },
      {
        question: "Which subjects do you cover?",
        answer:
          "Social sciences, business, health, education, engineering and science research alike.",
      },
    ],
    related: [
      { label: "Research proposal support", to: "/research-proposal-support" },
      { label: "Data analysis & statistics", to: "/data-analysis-statistics" },
      { label: "PhD research support", to: "/phd-research-support" },
      { label: "Literature review support", to: "/literature-review-support" },
    ],
    serviceType: "Research methodology guidance",
  },
  {
    slug: "research-proposal-support",
    group: "Services",
    label: "Research proposal support",
    eyebrow: "Service · Research proposals",
    h1: "Research proposal support for Master's and PhD applications",
    title: "Research Proposal Support | Master's, PhD & Funding Proposals",
    description:
      "Coaching on research proposals: problem statement, aims and objectives, literature framing, methodology, timeline and feasibility for approval or admission.",
    intro:
      "A proposal has one job: convince a reader that the study is worth doing, novel enough, and achievable by you in the time available. Most rejected proposals fail the third test. We help you pass all three.",
    highlights: [
      {
        title: "Problem statement with a gap",
        copy: "Locating a genuine gap in the literature and stating it in a paragraph a busy reviewer can grasp immediately.",
      },
      {
        title: "Aims, objectives and questions",
        copy: "Separating the three properly, so your objectives are testable and your questions are answerable.",
      },
      {
        title: "Feasible scope and timeline",
        copy: "A Gantt-style plan with access, ethics and analysis time built in, not assumed away.",
      },
      {
        title: "Reviewer expectations",
        copy: "What supervisory panels, admissions committees and funders each weight most heavily.",
      },
    ],
    lists: [
      {
        heading: "Proposal types",
        items: [
          "Master's dissertation proposals",
          "PhD admission proposals",
          "Upgrade and confirmation documents",
          "Funding and scholarship proposals",
          "Undergraduate project proposals",
        ],
      },
      {
        heading: "Sections we coach",
        items: [
          "Title and abstract",
          "Background and rationale",
          "Preliminary literature review",
          "Methodology and ethics",
          "Timeline and resources",
          "Expected contribution",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "My proposal was rejected. Can you help me revise it?",
        answer:
          "Yes. We read the feedback with you, identify whether the issue is novelty, method or feasibility, and rebuild accordingly.",
      },
      {
        question: "How long should a proposal be?",
        answer:
          "It depends entirely on the institution — from two pages for a Master's to fifteen for a funded PhD. We work to your published guidance.",
      },
      {
        question: "Can you help contact potential supervisors?",
        answer:
          "We coach how to write the approach email and align your proposal to a supervisor's research interests.",
      },
      {
        question: "Do you write proposals?",
        answer: "No. You write it; we guide and critique.",
      },
    ],
    related: [
      { label: "PhD research support", to: "/phd-research-support" },
      { label: "Research methodology support", to: "/research-methodology-support" },
      { label: "Literature review support", to: "/literature-review-support" },
      { label: "Academic writing coaching", to: "/academic-writing-coaching" },
    ],
    serviceType: "Research proposal coaching",
  },
  {
    slug: "literature-review-support",
    group: "Services",
    label: "Literature review support",
    eyebrow: "Service · Literature reviews",
    h1: "Literature review support and guidance",
    title: "Literature Review Support | Search, Synthesis & Structure",
    description:
      "Coaching on literature reviews: search strategy, source appraisal, thematic synthesis, identifying the gap and writing a review that argues rather than lists.",
    intro:
      "A weak literature review summarises studies one after another. A strong one organises the field into themes and debates, and ends by making your study look necessary. We coach the search, the synthesis and the structure that gets you there.",
    highlights: [
      {
        title: "Systematic search strategy",
        copy: "Databases, keywords, Boolean logic, inclusion criteria and a record of what you searched — increasingly required, even outside formal reviews.",
      },
      {
        title: "Appraisal, not acceptance",
        copy: "Judging quality, method and relevance so your review has a critical spine.",
      },
      {
        title: "Thematic synthesis",
        copy: "Grouping sources by argument and finding where the field disagrees, rather than by author or date.",
      },
      {
        title: "Naming the gap",
        copy: "Closing the review by stating precisely what is missing and how your study addresses it.",
      },
    ],
    lists: [
      {
        heading: "Review types",
        items: [
          "Narrative literature reviews",
          "Systematic-style reviews",
          "Scoping reviews",
          "Theoretical framework chapters",
          "Standalone review assignments",
        ],
      },
      {
        heading: "Tools and skills",
        items: [
          "Database searching",
          "Reference management",
          "Synthesis matrices",
          "Critical appraisal tools",
          "Paraphrasing and citation practice",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "How many sources do I need?",
        answer:
          "Fewer than students fear, more critically handled. Coverage of the key debates matters more than a count.",
      },
      {
        question: "Can you help with a systematic review?",
        answer:
          "Yes — protocol, PRISMA-style reporting, screening and extraction planning.",
      },
      {
        question: "My review reads like a list. How do I fix it?",
        answer:
          "By reorganising around themes and disagreements instead of studies. That restructure is one of our most common pieces of work.",
      },
      {
        question: "Do you find sources for me?",
        answer:
          "We teach you to search effectively and may point to seminal work, but the reading and selection are yours.",
      },
    ],
    related: [
      { label: "Research methodology support", to: "/research-methodology-support" },
      { label: "Thesis & dissertation coaching", to: "/thesis-dissertation-coaching" },
      { label: "Academic writing coaching", to: "/academic-writing-coaching" },
      { label: "PhD research support", to: "/phd-research-support" },
    ],
    serviceType: "Literature review coaching",
  },
  {
    slug: "data-analysis-statistics",
    group: "Services",
    label: "Data analysis & statistics",
    eyebrow: "Service · Data analysis",
    h1: "Data analysis and statistics support for students",
    title: "Data Analysis & Statistics Support | Research Data Coaching",
    description:
      "Guidance on analysing research data: choosing tests, running analysis in SPSS or Excel, checking assumptions, interpreting output and reporting results.",
    intro:
      "Most students do not need more statistics theory — they need to know which test their data justifies, how to run it, and how to write up the output without overclaiming. That is the whole of this service.",
    highlights: [
      {
        title: "Choosing the right test",
        copy: "Matching test to data type, design and assumptions, and knowing the non-parametric alternative when assumptions fail.",
      },
      {
        title: "Running the analysis",
        copy: "Step-by-step guidance in SPSS or Excel, with data cleaning, coding and variable setup done properly first.",
      },
      {
        title: "Reading the output",
        copy: "What the p-value, effect size and confidence interval actually mean for your research question.",
      },
      {
        title: "Reporting to standard",
        copy: "APA-style tables and figures, and results text that states findings without inflating them.",
      },
    ],
    lists: [
      {
        heading: "Analyses we cover",
        items: [
          "Descriptive statistics",
          "T-tests, ANOVA and non-parametric equivalents",
          "Correlation and regression",
          "Chi-square and categorical analysis",
          "Reliability and factor analysis",
          "Thematic analysis for qualitative data",
        ],
      },
      {
        heading: "Tools",
        items: ["SPSS", "Excel", "Basic R and Python workflows", "NVivo-style qualitative coding"],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Will you analyse my dataset for me?",
        answer:
          "No. We work through it with you so you can run, explain and defend the analysis yourself.",
      },
      {
        question: "My results are not significant. Is that a problem?",
        answer:
          "Not academically. Non-significant results are findings; we coach how to report and discuss them properly.",
      },
      {
        question: "Do you support qualitative data too?",
        answer:
          "Yes — coding frameworks, thematic analysis and evidencing themes with data extracts.",
      },
      {
        question: "Which software do you use?",
        answer:
          "Most often SPSS and Excel, with basic support for R and Python. We are not affiliated with any vendor.",
      },
    ],
    related: [
      { label: "SPSS & statistics help", to: "/spss-statistics-help" },
      { label: "Research methodology support", to: "/research-methodology-support" },
      { label: "Social science academic support", to: "/social-science-academic-support" },
      { label: "PhD research support", to: "/phd-research-support" },
    ],
    serviceType: "Data analysis and statistics coaching",
  },
  {
    slug: "assignment-coursework-guidance",
    group: "Services",
    label: "Assignment & coursework guidance",
    eyebrow: "Service · Assignments & coursework",
    h1: "Assignment and coursework guidance for university students",
    title: "Assignment & Coursework Guidance | University Support",
    description:
      "Coaching on university assignments and coursework: decoding the brief, planning, research, structure, referencing and feedback on your own drafts.",
    intro:
      "Marks are lost on the brief far more often than on the subject. We start every assignment the same way: what is this task actually asking, what does the rubric reward, and what does a strong answer look like before you write a word.",
    highlights: [
      {
        title: "Decoding the brief and rubric",
        copy: "Command words, weighting and criteria translated into a plan with a target for each section.",
      },
      {
        title: "Research and reading strategy",
        copy: "Finding credible sources fast and reading selectively instead of reading everything badly.",
      },
      {
        title: "Planning before writing",
        copy: "An outline with an argument in it, so the draft is assembly rather than invention.",
      },
      {
        title: "Feedback loops",
        copy: "Comments on your draft against the rubric, then a revision plan you execute yourself.",
      },
    ],
    lists: [
      {
        heading: "Assignment types",
        items: [
          "Essays and critical reviews",
          "Reports and case studies",
          "Presentations and posters",
          "Group projects",
          "Reflective writing",
          "Portfolios",
        ],
      },
      {
        heading: "Also covered",
        items: [
          "Managing multiple deadlines",
          "Extension and mitigating circumstances processes",
          "Recovering from a failed assessment",
          "Time management under part-time work",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Can you help the day before a deadline?",
        answer:
          "Sometimes, but the work will be triage. Coaching is far more effective with at least a week.",
      },
      {
        question: "Do you do assignments for students?",
        answer:
          "No, and we decline those requests. We coach so your submitted work is genuinely yours.",
      },
      {
        question: "Can you review my draft?",
        answer:
          "Yes. Draft feedback against your rubric is one of the most requested things we do.",
      },
      {
        question: "Which subjects?",
        answer:
          "A wide range across engineering, business, computing, health, law, social sciences, humanities, science and design.",
      },
    ],
    related: [
      { label: "Academic writing coaching", to: "/academic-writing-coaching" },
      { label: "Final-year project support", to: "/final-year-project-support" },
      { label: "Business academic support", to: "/business-academic-support" },
      { label: "International student support", to: "/international-student-academic-support" },
    ],
    serviceType: "Assignment and coursework coaching",
  },
  {
    slug: "final-year-project-support",
    group: "Services",
    label: "Final-year project support",
    eyebrow: "Service · Final-year & senior projects",
    h1: "Final-year and senior project support",
    title: "Final-Year Project Support | Senior Project Coaching for Students",
    description:
      "Coaching for final-year and senior projects: scoping, planning, technical execution guidance, report writing and defence preparation across disciplines.",
    intro:
      "A final-year project runs for months with almost no external structure and carries a large share of your degree classification. We provide the project management, technical sounding board and writing feedback that turns a good idea into a finished, defensible submission.",
    highlights: [
      {
        title: "Realistic scoping",
        copy: "Cutting an ambitious idea down to something deliverable, with the ambition retained in the discussion rather than the workload.",
      },
      {
        title: "Milestones and accountability",
        copy: "A schedule with checkpoints and someone who notices when you slip, which is usually the deciding factor.",
      },
      {
        title: "Technical guidance",
        copy: "Whatever the project needs — modelling, code, experiments, prototypes, fieldwork or drawings — talked through as method.",
      },
      {
        title: "Report and defence",
        copy: "Structuring the written submission and rehearsing the questions your panel will ask.",
      },
    ],
    lists: [
      {
        heading: "Project types",
        items: [
          "Engineering design and build projects",
          "Software and IT projects",
          "Architecture and design studio projects",
          "Business and management research projects",
          "Laboratory and field-based science projects",
          "Social research projects",
        ],
      },
      {
        heading: "Stages we support",
        items: [
          "Topic selection and proposal",
          "Literature and background",
          "Design and implementation",
          "Testing, results and analysis",
          "Written report",
          "Presentation and viva",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "My project has stalled. Can you help?",
        answer:
          "Yes. We assess what is genuinely achievable in the time left and rebuild the plan around it.",
      },
      {
        question: "Do you build the project for me?",
        answer:
          "No. We guide technique and review your progress; you build, write and submit it.",
      },
      {
        question: "Can you help with the presentation?",
        answer:
          "Yes — slide structure, timing, demonstration strategy and handling panel questions.",
      },
      {
        question: "Is this the same as capstone support?",
        answer:
          "Closely related. Capstone projects are often team-based and industry-facing; see our capstone page.",
      },
    ],
    related: [
      { label: "Capstone project support", to: "/capstone-project-support" },
      { label: "Engineering project help", to: "/engineering-project-help" },
      { label: "Computer science support", to: "/computer-science-academic-support" },
      { label: "Physical project models", to: "/physical-project-models" },
    ],
    serviceType: "Final-year project coaching",
  },
  {
    slug: "capstone-project-support",
    group: "Services",
    label: "Capstone project support",
    eyebrow: "Service · Capstone projects",
    h1: "Capstone project support and coaching",
    title: "Capstone Project Support | Team, Industry & Applied Project Coaching",
    description:
      "Coaching for capstone projects: client briefs, team coordination, applied research, deliverables, documentation and final presentations.",
    intro:
      "Capstones are assessed like professional work: a real or simulated client, a team, a deadline that does not move, and a deliverable someone outside the university could use. The academic skills are only half of it — the coordination is the other half.",
    highlights: [
      {
        title: "Client brief to scope",
        copy: "Converting a vague industry brief into requirements, success criteria and a deliverable you can actually hand over.",
      },
      {
        title: "Team coordination",
        copy: "Splitting work fairly, tracking contribution evidence, and handling the member who disappears in week six.",
      },
      {
        title: "Applied research quality",
        copy: "Keeping the academic rigour — evidence, method, referencing — inside a practical deliverable.",
      },
      {
        title: "Handover and presentation",
        copy: "Documentation, reflection and a final presentation pitched at both academics and the client.",
      },
    ],
    lists: [
      {
        heading: "Capstone contexts",
        items: [
          "Engineering design capstones",
          "Software and IT capstones",
          "Business consultancy projects",
          "Health and community projects",
          "Design and architecture capstones",
        ],
      },
      {
        heading: "Deliverables",
        items: [
          "Requirements and scope documents",
          "Project plans and risk registers",
          "Prototypes and technical outputs",
          "Final report and appendices",
          "Client-facing presentation",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Can you coach a whole team?",
        answer:
          "Yes. Group sessions work well for capstones, with individual sessions for specific technical or writing needs.",
      },
      {
        question: "How do you handle unequal contribution?",
        answer:
          "We coach documentation of contribution and how to escalate to your module leader early, before marks are affected.",
      },
      {
        question: "Do you produce deliverables?",
        answer:
          "No. We guide planning and quality; the team produces and submits the work.",
      },
      {
        question: "Do you help with the client relationship?",
        answer:
          "Yes — scoping conversations, expectation setting and professional communication.",
      },
    ],
    related: [
      { label: "Final-year project support", to: "/final-year-project-support" },
      { label: "Business academic support", to: "/business-academic-support" },
      { label: "Engineering project help", to: "/engineering-project-help" },
      { label: "Assignment & coursework guidance", to: "/assignment-coursework-guidance" },
    ],
    serviceType: "Capstone project coaching",
  },
];
