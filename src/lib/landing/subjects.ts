import {
  integrityDefault,
  languagesDefault,
  levelsDefault,
  type LandingContent,
} from "./types";

export const subjectLandings: LandingContent[] = [
  {
    slug: "engineering-project-help",
    group: "Subjects",
    label: "Engineering",
    eyebrow: "Discipline · Engineering",
    h1: "Engineering project help and academic support",
    title: "Engineering Project Help & Academic Support | Yes We Do Your Projects",
    description:
      "Coaching for engineering students: coursework, calculations, lab reports, simulations, prototypes and final-year or capstone engineering projects, undergraduate to PhD.",
    intro:
      "Engineering assessment punishes two things above all: an unjustified assumption and an unexplained result. We coach students through the reasoning chain — problem definition, assumptions, method, calculation, verification and reporting — so your project holds up when a supervisor pushes on it.",
    highlights: [
      {
        title: "Calculations you can defend",
        copy: "We work through the derivation with you, check units and assumptions, and make sure you can explain every step rather than reproduce it.",
      },
      {
        title: "Technical reporting",
        copy: "Structuring reports so method, results and discussion read as one argument, with figures and tables that a marker can interpret without help.",
      },
      {
        title: "Prototypes and testing",
        copy: "Scoping what is buildable in your timeframe, planning tests, recording data honestly and interpreting failure as evidence.",
      },
      {
        title: "Software and modelling guidance",
        copy: "AutoCAD, Revit, CAD modelling, MATLAB-style analysis, simulation output and Arduino prototyping — taught as technique, not done for you.",
      },
    ],
    lists: [
      {
        heading: "Disciplines we cover",
        items: [
          "Civil and structural engineering",
          "Mechanical and mechatronics",
          "Electrical and electronics",
          "Computer and software engineering",
          "Chemical and environmental engineering",
          "Biomedical and industrial engineering",
        ],
      },
      {
        heading: "Typical engineering deliverables",
        items: [
          "Lab and technical reports",
          "Design calculations and justifications",
          "Simulation and modelling write-ups",
          "Final-year and capstone projects",
          "Prototype documentation",
          "Project presentations and defences",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Can you help with a final-year engineering project?",
        answer:
          "Yes. We help scope the project realistically, plan milestones, guide technical execution, review your data and prepare you for the defence — while you do the engineering work yourself.",
      },
      {
        question: "Do you support specific software?",
        answer:
          "We provide tutoring for AutoCAD, Revit, 3ds Max, GIS, Arduino and statistical tools. We are independent and not affiliated with or certified by any software vendor.",
      },
      {
        question: "Which academic levels do you support?",
        answer:
          "Undergraduate and Bachelor's through to Master's and PhD, including research-based engineering degrees.",
      },
      {
        question: "Will you do my calculations for me?",
        answer:
          "No. We teach the method and check your reasoning. The submitted work has to be yours.",
      },
    ],
    related: [
      { label: "Engineering software support", to: "/engineering-software-support" },
      { label: "Arduino project help", to: "/arduino-project-help" },
      { label: "AutoCAD help", to: "/autocad-help" },
      { label: "Final-year project support", to: "/final-year-project-support" },
    ],
    serviceType: "Engineering academic coaching and project guidance",
  },
  {
    slug: "architecture-project-help",
    group: "Subjects",
    label: "Architecture",
    eyebrow: "Discipline · Architecture",
    h1: "Architecture project help and studio support",
    title: "Architecture Project Help | Studio, Drawings & Modelling Support",
    description:
      "Academic support for architecture students: concept development, studio crits, technical drawings, BIM and 3D modelling, presentation boards and maquettes.",
    intro:
      "Architecture is assessed on a narrative as much as a building: concept, site reading, spatial logic, technical resolution and the way you present all of it under crit conditions. We coach each of those layers, including the software and model-making that carry them.",
    highlights: [
      {
        title: "Concept to resolution",
        copy: "Turning a site analysis and a brief into a defensible concept, then holding that concept through plans, sections and details.",
      },
      {
        title: "Drawings that communicate",
        copy: "Line weights, hierarchy, annotation and drawing sets that read clearly rather than merely being complete.",
      },
      {
        title: "Digital workflow",
        copy: "Revit and BIM structure, AutoCAD drafting standards, 3ds Max visualisation and Photoshop post-production for boards.",
      },
      {
        title: "Crit and board strategy",
        copy: "Board composition, sequencing and verbal defence, so the jury follows your argument instead of hunting for it.",
      },
    ],
    lists: [
      {
        heading: "What we support",
        items: [
          "Studio design projects",
          "Site and precedent analysis",
          "Technical drawing sets",
          "3D modelling and visualisation",
          "Presentation boards and portfolios",
          "Architectural theory and dissertations",
        ],
      },
      {
        heading: "Related fields",
        items: [
          "Interior architecture and interior design",
          "Urban planning",
          "Landscape architecture",
          "Construction and building technology",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Can you help with studio projects?",
        answer:
          "Yes. We coach concept development, spatial reasoning, drawing production technique and crit preparation. You design and produce the submitted work.",
      },
      {
        question: "Do you help with physical models?",
        answer:
          "Yes, as guidance on materials, scale, construction sequence and finishing. See our maquette and physical model pages for detail.",
      },
      {
        question: "Which software can you tutor?",
        answer:
          "Revit, AutoCAD, 3ds Max, Photoshop and general 3D modelling workflows, taught as skills you then apply yourself.",
      },
      {
        question: "Can you support an architecture dissertation?",
        answer:
          "Yes. Architectural history, theory and research-based dissertations get the same research and writing coaching as any other discipline.",
      },
    ],
    related: [
      { label: "Revit project help", to: "/revit-project-help" },
      { label: "Architecture maquette help", to: "/architecture-maquette-help" },
      { label: "3ds Max help", to: "/3d-max-help" },
      { label: "Design academic support", to: "/design-academic-support" },
    ],
    serviceType: "Architecture academic coaching and project guidance",
  },
  {
    slug: "business-academic-support",
    group: "Subjects",
    label: "Business & management",
    eyebrow: "Discipline · Business & management",
    h1: "Academic support for business and management students",
    title: "Business Academic Support | Management, Finance & Marketing Coaching",
    description:
      "Coaching for business students: case analysis, strategy reports, finance and accounting coursework, marketing research and MBA or Master's dissertations.",
    intro:
      "Business marking rewards applied judgement: a framework used to reach a decision, not a framework described. We coach students to move from summarising a case to arguing a defensible recommendation supported by evidence.",
    highlights: [
      {
        title: "Case analysis with a verdict",
        copy: "Structuring analysis so it ends in a recommendation with trade-offs acknowledged, which is what distinction-level marking wants.",
      },
      {
        title: "Frameworks used properly",
        copy: "SWOT, Porter, PESTLE and financial ratios applied to evidence rather than listed as decoration.",
      },
      {
        title: "Quantitative confidence",
        copy: "Accounting mechanics, financial modelling logic, survey design and statistical interpretation for business research.",
      },
      {
        title: "MBA and Master's dissertations",
        copy: "Research questions that are actually researchable, realistic data collection and a methodology chapter that withstands scrutiny.",
      },
    ],
    lists: [
      {
        heading: "Subjects covered",
        items: [
          "Management and strategy",
          "Finance and accounting",
          "Economics",
          "Marketing and consumer behaviour",
          "Human resources and organisational behaviour",
          "Supply chain, logistics and project management",
        ],
      },
      {
        heading: "Typical assessments",
        items: [
          "Case study reports",
          "Business plans and feasibility studies",
          "Consultancy-style projects",
          "Survey-based research projects",
          "Group project coordination",
          "Dissertations and capstones",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Can you help with an MBA dissertation?",
        answer:
          "Yes. We coach research design, industry data sourcing, analysis and chapter structure at MBA and Master's level.",
      },
      {
        question: "Do you help with financial modelling?",
        answer:
          "We tutor the logic and structure of models and the interpretation of outputs, so you can build and defend the model yourself.",
      },
      {
        question: "Can you support survey research?",
        answer:
          "Yes — questionnaire design, sampling, reliability and analysis in SPSS or Excel, plus how to report results honestly.",
      },
      {
        question: "Do you write business reports for students?",
        answer: "No. We coach and give feedback; you write and submit your own work.",
      },
    ],
    related: [
      { label: "Data analysis & statistics", to: "/data-analysis-statistics" },
      { label: "SPSS & statistics help", to: "/spss-statistics-help" },
      { label: "Thesis & dissertation coaching", to: "/thesis-dissertation-coaching" },
      { label: "Assignment & coursework guidance", to: "/assignment-coursework-guidance" },
    ],
    serviceType: "Business and management academic coaching",
  },
  {
    slug: "computer-science-academic-support",
    group: "Subjects",
    label: "Computer science",
    eyebrow: "Discipline · Computer science & IT",
    h1: "Academic support for computer science and IT students",
    title: "Computer Science Academic Support | Programming & Project Coaching",
    description:
      "Coaching for computer science students: programming concepts, algorithms, databases, software projects, data science and final-year or Master's CS projects.",
    intro:
      "Computer science students rarely fail because they cannot code. They lose marks because the design decisions are unexplained, the testing is thin, or the report does not evidence the engineering behind the repository. We coach both halves.",
    highlights: [
      {
        title: "Concepts before syntax",
        copy: "Algorithms, complexity, data structures, concurrency and database design explained until you can reason about them without a tutorial open.",
      },
      {
        title: "Project architecture",
        copy: "Scoping a project you can finish, choosing a stack for defensible reasons and documenting the decisions your marker is looking for.",
      },
      {
        title: "Debugging as a method",
        copy: "Reading errors, isolating faults and testing systematically — the skill that separates a stalled project from a finished one.",
      },
      {
        title: "Data science and AI coursework",
        copy: "Dataset preparation, model choice, evaluation metrics and writing up results without overclaiming.",
      },
    ],
    lists: [
      {
        heading: "Areas covered",
        items: [
          "Programming fundamentals and OOP",
          "Algorithms and data structures",
          "Databases and SQL",
          "Web and mobile development projects",
          "Networking and cybersecurity coursework",
          "Data science, AI and machine learning",
        ],
      },
      {
        heading: "Project support",
        items: [
          "Final-year and capstone software projects",
          "Requirements and system analysis",
          "Testing strategy and documentation",
          "Dissertation write-up for technical work",
          "Demonstration and viva preparation",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Will you write my code?",
        answer:
          "No. We explain concepts, review your code with you and help you debug and document it. The commits stay yours.",
      },
      {
        question: "Can you help with a final-year software project?",
        answer:
          "Yes — scope, architecture, milestone planning, testing strategy, the written dissertation and the demo.",
      },
      {
        question: "Do you cover machine learning coursework?",
        answer:
          "Yes, including data preparation, model selection, evaluation and careful reporting of results.",
      },
      {
        question: "Which languages do you tutor in?",
        answer:
          "Teaching is available in English, Arabic or French, across common academic programming languages.",
      },
    ],
    related: [
      { label: "Final-year project support", to: "/final-year-project-support" },
      { label: "Data analysis & statistics", to: "/data-analysis-statistics" },
      { label: "Engineering project help", to: "/engineering-project-help" },
      { label: "Capstone project support", to: "/capstone-project-support" },
    ],
    serviceType: "Computer science academic coaching",
  },
  {
    slug: "medicine-academic-support",
    group: "Subjects",
    label: "Medicine & health",
    eyebrow: "Discipline · Medicine & health sciences",
    h1: "Academic support for medicine, nursing and health science students",
    title: "Medicine & Health Academic Support | Nursing, Pharmacy & Research Coaching",
    description:
      "Academic coaching for medical, nursing, pharmacy and public health students: evidence appraisal, reflective writing, research projects and dissertations.",
    intro:
      "Health programmes assess written work against clinical evidence standards: is the source appropriate, is the appraisal critical, is the reasoning safe. We coach students to write to that standard without ever advising on clinical practice itself.",
    highlights: [
      {
        title: "Critical appraisal",
        copy: "Reading trials, systematic reviews and guidelines critically, and using appraisal tools properly in your own writing.",
      },
      {
        title: "Reflective and portfolio writing",
        copy: "Gibbs, Driscoll and similar models used to produce genuine reflection rather than description of events.",
      },
      {
        title: "Research and audit projects",
        copy: "Framing a research or audit question, ethics considerations, data handling and honest reporting of limitations.",
      },
      {
        title: "Exam and revision strategy",
        copy: "Managing high-volume content, spaced revision and question technique for written and applied assessments.",
      },
    ],
    lists: [
      {
        heading: "Programmes we support",
        items: [
          "Medicine",
          "Nursing and midwifery",
          "Pharmacy",
          "Dentistry",
          "Public health and health management",
          "Biomedical and health sciences",
        ],
      },
      {
        heading: "Common assessments",
        items: [
          "Evidence-based practice essays",
          "Literature reviews and systematic-style reviews",
          "Reflective portfolios",
          "Research proposals and dissertations",
          "Case-based written assignments",
          "Poster and conference presentations",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Do you give clinical advice?",
        answer:
          "No. Our support is strictly academic: writing, research method, appraisal and study skills. Clinical judgement stays with your programme and supervisors.",
      },
      {
        question: "Can you help with a nursing dissertation?",
        answer:
          "Yes. We coach research question, search strategy, appraisal framework, structure and chapter feedback.",
      },
      {
        question: "Do you support Vancouver referencing?",
        answer:
          "Yes, along with APA and Harvard, which are the styles health students most often need.",
      },
      {
        question: "Can you help with statistics for a health project?",
        answer:
          "Yes — test selection, SPSS execution and interpreting results in clinical context.",
      },
    ],
    related: [
      { label: "Literature review support", to: "/literature-review-support" },
      { label: "SPSS & statistics help", to: "/spss-statistics-help" },
      { label: "Research methodology support", to: "/research-methodology-support" },
      { label: "Academic writing coaching", to: "/academic-writing-coaching" },
    ],
    serviceType: "Health sciences academic coaching",
  },
  {
    slug: "law-academic-support",
    group: "Subjects",
    label: "Law",
    eyebrow: "Discipline · Law",
    h1: "Academic support for law students",
    title: "Law Academic Support | Legal Research, Writing & Dissertation Coaching",
    description:
      "Coaching for law students: case analysis, problem questions, legal research, OSCOLA referencing and LLM dissertations. Academic support, not legal advice.",
    intro:
      "Law is marked on authority and precision. A strong answer identifies the issue, applies the correct authority, engages the counter-argument and reaches a conclusion. We coach that structure until it becomes automatic under exam conditions.",
    highlights: [
      {
        title: "Problem questions",
        copy: "IRAC and similar structures applied so every issue is spotted, addressed and resolved with authority.",
      },
      {
        title: "Legal research skill",
        copy: "Finding cases, statutes and journal commentary efficiently, and knowing when secondary sources carry weight.",
      },
      {
        title: "Essay-style critique",
        copy: "Building a doctrinal or theoretical argument that engages scholarship rather than summarising the law.",
      },
      {
        title: "OSCOLA and citation precision",
        copy: "Footnoting conventions taught properly, because law markers notice.",
      },
    ],
    lists: [
      {
        heading: "Areas covered",
        items: [
          "Contract, tort and criminal law",
          "Public and constitutional law",
          "Commercial and company law",
          "International and human rights law",
          "Legal theory and jurisprudence",
          "Comparative law research",
        ],
      },
      {
        heading: "Assessment types",
        items: [
          "Problem questions",
          "Doctrinal essays",
          "Case notes",
          "Research dissertations at LLB and LLM level",
          "Moot preparation and oral argument",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Do you provide legal advice?",
        answer:
          "No. We provide academic coaching for law students. We do not advise on real legal matters.",
      },
      {
        question: "Can you help with an LLM dissertation?",
        answer:
          "Yes. Research question, comparative or doctrinal methodology, source strategy and chapter feedback.",
      },
      {
        question: "Do you teach OSCOLA?",
        answer:
          "Yes, along with APA and Harvard for jurisdictions and programmes that use them.",
      },
      {
        question: "Can you help with moot preparation?",
        answer:
          "Yes — argument construction, authority selection and handling questions from the bench.",
      },
    ],
    related: [
      { label: "Academic writing coaching", to: "/academic-writing-coaching" },
      { label: "Literature review support", to: "/literature-review-support" },
      { label: "Thesis & dissertation coaching", to: "/thesis-dissertation-coaching" },
      { label: "Assignment & coursework guidance", to: "/assignment-coursework-guidance" },
    ],
    serviceType: "Law academic coaching",
  },
  {
    slug: "arts-humanities-academic-support",
    group: "Subjects",
    label: "Arts & humanities",
    eyebrow: "Discipline · Arts & humanities",
    h1: "Academic support for arts and humanities students",
    title: "Arts & Humanities Academic Support | Essay and Research Coaching",
    description:
      "Coaching for history, literature, philosophy, media and cultural studies students: argument construction, close reading, source work and dissertations.",
    intro:
      "Humanities marking rewards an argument that could be disagreed with, evidenced from primary and secondary sources and expressed precisely. We coach students out of summary and into interpretation.",
    highlights: [
      {
        title: "Thesis-driven essays",
        copy: "Building a contestable claim and sustaining it across an essay instead of narrating chronology or plot.",
      },
      {
        title: "Source and archive work",
        copy: "Handling primary sources critically, situating them in historiography or theory, and citing them properly.",
      },
      {
        title: "Theory without jargon",
        copy: "Applying critical and cultural theory so it does analytical work rather than decorating the paragraph.",
      },
      {
        title: "Long-form projects",
        copy: "Structuring a dissertation of significant length with a coherent through-line and a realistic reading plan.",
      },
    ],
    lists: [
      {
        heading: "Fields covered",
        items: [
          "History and historiography",
          "Literature and comparative literature",
          "Philosophy",
          "Media, film and communications",
          "Cultural studies",
          "Languages and linguistics",
        ],
      },
      {
        heading: "What we work on",
        items: [
          "Essay planning and argument",
          "Close reading and textual analysis",
          "Historiographical and theoretical framing",
          "Dissertation structure and chapters",
          "MHRA, MLA, Chicago and Harvard referencing",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages:
      "Coaching in English, Arabic and French is particularly useful in humanities, where students often read sources in one language and write in another.",
    integrity: integrityDefault,
    faqs: [
      {
        question: "Can you help me find an argument for an open essay title?",
        answer:
          "Yes. Turning a broad title into a specific, arguable question is one of the most valuable things coaching does in humanities.",
      },
      {
        question: "Do you help with foreign-language sources?",
        answer:
          "We can discuss sources in English, Arabic and French and coach how to cite and quote translated material correctly.",
      },
      {
        question: "Can you support a creative or practice-based project?",
        answer:
          "We support the critical and written components — rationale, contextual review and reflective commentary.",
      },
      {
        question: "Do you rewrite essays?",
        answer:
          "No. We give feedback on your drafts so you make the revisions yourself.",
      },
    ],
    related: [
      { label: "Academic writing coaching", to: "/academic-writing-coaching" },
      { label: "Literature review support", to: "/literature-review-support" },
      { label: "Thesis & dissertation coaching", to: "/thesis-dissertation-coaching" },
      { label: "Social science academic support", to: "/social-science-academic-support" },
    ],
    serviceType: "Arts and humanities academic coaching",
  },
  {
    slug: "social-science-academic-support",
    group: "Subjects",
    label: "Social sciences",
    eyebrow: "Discipline · Social sciences",
    h1: "Academic support for social science students",
    title: "Social Science Academic Support | Research Methods & Dissertation Coaching",
    description:
      "Coaching for psychology, sociology, politics, education and social work students: research design, qualitative and quantitative methods, and dissertations.",
    intro:
      "Social science degrees live or die on method. Whether you are running a survey, coding interviews or building a theoretical argument, the marker is asking whether your claims are warranted by your evidence. That is exactly what we coach.",
    highlights: [
      {
        title: "Research design",
        copy: "Matching question to method, defining variables or coding frames, and being explicit about sampling and limitations.",
      },
      {
        title: "Qualitative analysis",
        copy: "Thematic analysis, coding discipline and writing findings that stay grounded in the data.",
      },
      {
        title: "Quantitative analysis",
        copy: "Descriptive and inferential statistics in SPSS, including assumption checks and honest interpretation.",
      },
      {
        title: "Ethics and reflexivity",
        copy: "Ethics applications, consent, positionality and the reflexive writing many programmes now require.",
      },
    ],
    lists: [
      {
        heading: "Fields covered",
        items: [
          "Psychology",
          "Sociology and anthropology",
          "Political science and international relations",
          "Education",
          "Social work and criminology",
          "Development studies",
        ],
      },
      {
        heading: "Typical work",
        items: [
          "Research proposals and ethics forms",
          "Literature reviews",
          "Survey and interview studies",
          "Statistical analysis and reporting",
          "Undergraduate and Master's dissertations",
          "PhD chapters and methodology",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Can you help me choose between qualitative and quantitative methods?",
        answer:
          "Yes. We start from your research question and what data is realistically available to you, then justify the choice in writing.",
      },
      {
        question: "Do you help with SPSS?",
        answer:
          "Yes — test selection, running the analysis, reading the output and reporting it in APA style.",
      },
      {
        question: "Can you support an ethics application?",
        answer:
          "Yes. We coach how to describe risk, consent and data handling clearly enough for a committee.",
      },
      {
        question: "Do you analyse my data for me?",
        answer:
          "We teach you how to run and interpret the analysis so the work and the understanding are yours.",
      },
    ],
    related: [
      { label: "Research methodology support", to: "/research-methodology-support" },
      { label: "SPSS & statistics help", to: "/spss-statistics-help" },
      { label: "Research proposal support", to: "/research-proposal-support" },
      { label: "PhD research support", to: "/phd-research-support" },
    ],
    serviceType: "Social science academic coaching",
  },
  {
    slug: "science-academic-support",
    group: "Subjects",
    label: "Science",
    eyebrow: "Discipline · Natural & applied sciences",
    h1: "Academic support for science students",
    title: "Science Academic Support | Maths, Physics, Chemistry & Biology Coaching",
    description:
      "Tutoring and research coaching for science students: problem sets, lab reports, data handling, statistics and research projects from undergraduate to PhD.",
    intro:
      "Science assessment splits into two skills: solving problems correctly and reporting evidence honestly. Most students are stronger at one than the other. We coach both, using your own problem sets and lab data.",
    highlights: [
      {
        title: "Problem-solving technique",
        copy: "Working through mathematics, physics and chemistry problems methodically, with the reasoning written out rather than assumed.",
      },
      {
        title: "Laboratory reporting",
        copy: "Method, results, error analysis and discussion structured so a marker can follow the experiment and trust the numbers.",
      },
      {
        title: "Data handling and statistics",
        copy: "Uncertainty, significant figures, graphing conventions and appropriate statistical tests.",
      },
      {
        title: "Research projects",
        copy: "Project scoping, literature context, method justification and writing up results including negative ones.",
      },
    ],
    lists: [
      {
        heading: "Subjects covered",
        items: [
          "Mathematics and statistics",
          "Physics",
          "Chemistry",
          "Biology and biological sciences",
          "Environmental science",
          "Interdisciplinary research sciences",
        ],
      },
      {
        heading: "Assessment support",
        items: [
          "Problem sets and tutorials",
          "Lab reports and practical write-ups",
          "Exam technique",
          "Final-year research projects",
          "Master's and PhD research writing",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Can you help with a lab report?",
        answer:
          "Yes — structure, error analysis, figures and discussion, based on data you collected.",
      },
      {
        question: "Do you tutor university mathematics?",
        answer:
          "Yes, including calculus, linear algebra, differential equations and statistics as they appear in science degrees.",
      },
      {
        question: "Can you help me prepare for exams?",
        answer:
          "Yes. We work through past papers, timing strategy and the topics that carry the most marks.",
      },
      {
        question: "Do you complete problem sets for students?",
        answer:
          "No. We teach the method and check your working; the submitted solutions must be yours.",
      },
    ],
    related: [
      { label: "Data analysis & statistics", to: "/data-analysis-statistics" },
      { label: "Research methodology support", to: "/research-methodology-support" },
      { label: "Final-year project support", to: "/final-year-project-support" },
      { label: "Medicine & health support", to: "/medicine-academic-support" },
    ],
    serviceType: "Science academic tutoring and research coaching",
  },
  {
    slug: "design-academic-support",
    group: "Subjects",
    label: "Design",
    eyebrow: "Discipline · Design",
    h1: "Academic support for design students",
    title: "Design Academic Support | Studio Projects, Portfolios & Written Work",
    description:
      "Coaching for graphic, product, interior and industrial design students: concept development, process documentation, portfolios and written dissertations.",
    intro:
      "Design is marked on process as much as outcome. A beautiful final artefact with no documented iteration usually scores below a rougher one with visible research, testing and reasoning. We coach the process and the writing that evidences it.",
    highlights: [
      {
        title: "Concept and research",
        copy: "User and context research, precedent studies and a brief you can argue from rather than guess at.",
      },
      {
        title: "Process documentation",
        copy: "Sketchbooks, iteration logs and process boards that show decisions, not just outputs.",
      },
      {
        title: "Digital craft",
        copy: "Photoshop, 3D modelling and visualisation technique for presentation-quality output.",
      },
      {
        title: "Portfolio and written work",
        copy: "Portfolio narrative for assessment or applications, plus design theory essays and dissertations.",
      },
    ],
    lists: [
      {
        heading: "Fields covered",
        items: [
          "Graphic design and visual communication",
          "Product and industrial design",
          "Interior design",
          "3D and digital design",
          "Design theory and history",
        ],
      },
      {
        heading: "Deliverables",
        items: [
          "Studio projects",
          "Presentation boards",
          "Process books",
          "Prototypes and models",
          "Design dissertations",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Can you help build my portfolio?",
        answer:
          "We coach selection, sequencing and the narrative around your work. The design work itself stays yours.",
      },
      {
        question: "Do you tutor Photoshop and 3D software?",
        answer:
          "Yes, as academic skills tutoring. We are independent of any software vendor.",
      },
      {
        question: "Can you help with a design dissertation?",
        answer:
          "Yes — research question, theoretical framing, structure and feedback on your drafts.",
      },
      {
        question: "Do you produce design work for students?",
        answer: "No. We guide and critique; you create and submit your own work.",
      },
    ],
    related: [
      { label: "Photoshop academic project help", to: "/photoshop-academic-project-help" },
      { label: "3D modelling help", to: "/3d-modelling-help" },
      { label: "Architecture project help", to: "/architecture-project-help" },
      { label: "Physical project models", to: "/physical-project-models" },
    ],
    serviceType: "Design academic coaching",
  },
];
