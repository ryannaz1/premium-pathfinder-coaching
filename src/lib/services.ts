import type { FaqItem } from "@/components/FAQ";

export type ServiceContent = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  forWho: string[];
  includes: { title: string; copy: string }[];
  process: { title: string; copy: string }[];
  faqs: FaqItem[];
  related: string[];
};

const integrityFaq: FaqItem = {
  question: "Do you complete the work for me?",
  answer:
    "No. We coach, teach and give feedback. You research, write and submit your own work, which keeps you fully within your university's academic integrity rules.",
};

export const services: ServiceContent[] = [
  {
    slug: "university-tutoring",
    name: "University Tutoring",
    h1: "University tutoring for undergraduate, Bachelor's, Master's and PhD students",
    title: "University Tutoring | One-to-One Online Tutors | Yes We Do Your Projects",
    description:
      "One-to-one university tutoring for undergraduate, Bachelor's, Master's and PhD students, including international students, across a wide range of majors. Online sessions built around your modules, assessments and deadlines.",
    intro:
      "University tutoring is one-to-one teaching built around your actual modules, reading lists and assessments. A tutor works through the concepts you find hardest, checks your understanding, and helps you approach coursework and exams with a clear method rather than guesswork.",
    forWho: [
      "Undergraduates who feel behind on a module or lost in lectures",
      "Master's students facing a step-change in academic difficulty",
      "International students adapting to a new academic system and language",
      "Students returning to study after time away",
      "High-performing students who want to move from a good grade to an excellent one",
    ],
    includes: [
      { title: "Subject teaching", copy: "Concepts explained properly, at your pace, with worked examples from your own course material." },
      { title: "Assessment preparation", copy: "Understanding what a brief is really asking, planning your response and reviewing marking criteria." },
      { title: "Feedback on your drafts", copy: "Comments on your own work so you can see exactly what to improve and why." },
      { title: "Study technique", copy: "Reading strategy, note-taking, revision planning and how to manage several deadlines at once." },
      { title: "Confidence and questions", copy: "A space to ask the questions you would not ask in a lecture theatre of two hundred people." },
    ],
    process: [
      { title: "Consultation", copy: "Share your course, level of study and where you are struggling." },
      { title: "Match", copy: "We match you with a tutor suited to your discipline and academic level." },
      { title: "Sessions", copy: "Regular one-to-one online sessions, scheduled around your time zone." },
      { title: "Review", copy: "We track progress against your assessments and adjust the plan." },
    ],
    faqs: [
      integrityFaq,
      { question: "Which subjects do you tutor?", answer: "We cover a broad range of university disciplines including business and management, economics, social sciences, humanities, health sciences and research-heavy programmes. If your subject is not a good fit for us, we will say so honestly." },
      { question: "Are sessions online?", answer: "Yes. All tutoring is delivered online, which is why we can support students in the UK, Dubai, Abu Dhabi, Montreal and Lebanon in their own time zones." },
      { question: "How often should I have sessions?", answer: "Most students book weekly during term, with more intensive blocks before major assessments. We agree a rhythm in your consultation." },
    ],
    related: ["academic-coaching", "exam-preparation", "academic-writing-coaching"],
  },
  {
    slug: "academic-coaching",
    name: "Academic Coaching",
    h1: "Academic coaching for students who want direction, not pressure",
    title: "Academic Coaching for University Students | Yes We Do Your Projects",
    description:
      "One-to-one academic coaching covering planning, workload management, motivation, study strategy and accountability for undergraduate, Bachelor's, Master's and PhD students.",
    intro:
      "Academic coaching is about how you work, not only what you know. A coach helps you build a realistic plan across all your modules, sort priorities, break large projects into manageable stages, and stay accountable between sessions so deadlines stop arriving as emergencies.",
    forWho: [
      "Students juggling several modules, jobs or family responsibilities",
      "Students who procrastinate or freeze on large projects",
      "Master's students managing a dissertation alongside taught modules",
      "Students who work hard but do not see the results they expect",
      "Parents arranging structured support and accountability for their child",
    ],
    includes: [
      { title: "Semester planning", copy: "A map of every deadline, with working backwards from each one so nothing lands unprepared." },
      { title: "Workload strategy", copy: "Prioritising what matters, deciding what is good enough, and protecting time for deep work." },
      { title: "Accountability", copy: "Agreed goals between sessions and an honest review of what did and did not happen." },
      { title: "Study systems", copy: "Note-taking, reading, revision and research workflows that suit how you actually work." },
      { title: "Motivation and focus", copy: "Practical strategies for starting, sustaining attention and recovering from a bad week." },
    ],
    process: [
      { title: "Diagnostic conversation", copy: "We look at your current workload, habits and pressure points." },
      { title: "Plan", copy: "A written plan of priorities, milestones and session rhythm." },
      { title: "Coaching sessions", copy: "Regular check-ins focused on progress, obstacles and adjustments." },
      { title: "Review", copy: "We measure what improved and reset the plan for the next stretch." },
    ],
    faqs: [
      integrityFaq,
      { question: "How is coaching different from tutoring?", answer: "Tutoring teaches subject content. Coaching builds the planning, strategy and habits that let you use your knowledge well. Many students combine both." },
      { question: "Can parents be involved?", answer: "Yes, where the student is comfortable with it. We can agree a simple progress update so families stay informed without micromanaging." },
    ],
    related: ["university-tutoring", "exam-preparation", "thesis-dissertation-coaching"],
  },
  {
    slug: "thesis-dissertation-coaching",
    name: "Thesis & Dissertation Coaching",
    h1: "Thesis and dissertation coaching from topic to submission",
    title: "Thesis & Dissertation Coaching | Master's Research Support",
    description:
      "Coaching for your own dissertation or thesis: topic refinement, research questions, methodology, structure, writing feedback, referencing and viva preparation.",
    intro:
      "A dissertation is the largest piece of work most students ever produce, and it is usually the least supervised. Coaching gives you a second, consistent pair of eyes: someone to test your research question, sanity-check your methodology, review your structure and give you honest feedback on drafts you have written yourself.",
    forWho: [
      "Master's students beginning or midway through a dissertation",
      "Undergraduates writing a final-year research project",
      "Students whose supervisor is unavailable or gives limited feedback",
      "International students unfamiliar with the expectations of a UK or North American thesis",
      "Doctoral candidates preparing chapters or a viva",
    ],
    includes: [
      { title: "Topic refinement", copy: "Narrowing a broad interest into a researchable, defensible topic with available literature." },
      { title: "Research questions", copy: "Turning your topic into precise questions and objectives your study can actually answer." },
      { title: "Methodology guidance", copy: "Choosing and justifying methods, sampling, instruments and analysis approach." },
      { title: "Structure", copy: "Chapter architecture, argument flow and the internal logic examiners look for." },
      { title: "Writing feedback", copy: "Detailed comments on your own drafts: clarity, criticality, evidence and cohesion." },
      { title: "Referencing", copy: "Correct and consistent citation in APA, Harvard, MLA, Chicago or your department's style." },
      { title: "Planning", copy: "A realistic timeline from proposal to submission, with milestones you can hold." },
      { title: "Presentation and viva", copy: "Preparing to present and defend your research clearly and calmly." },
    ],
    process: [
      { title: "Scoping call", copy: "Your topic, deadline, department requirements and where you currently are." },
      { title: "Research plan", copy: "Questions, methodology direction and a milestone timeline." },
      { title: "Chapter coaching", copy: "Sessions and written feedback as you draft each chapter yourself." },
      { title: "Final review", copy: "Coherence, referencing and presentation before you submit your work." },
    ],
    faqs: [
      { question: "Will you write my dissertation?", answer: "No, and we will not accept that request. We coach you through your own research and writing. Students remain responsible for producing and submitting their own academic work." },
      { question: "Can you help after I have a supervisor's feedback?", answer: "Yes. Many students bring supervisor comments to a session so we can help them interpret and act on the feedback." },
      { question: "Do you cover qualitative and quantitative research?", answer: "Yes, including mixed methods. We also offer dedicated research methodology and statistics support." },
    ],
    related: ["research-methodology", "research-statistics-support", "academic-writing-coaching"],
  },
  {
    slug: "research-methodology",
    name: "Research Methodology",
    h1: "Research methodology guidance for student researchers",
    title: "Research Methodology Support & Guidance | Yes We Do Your Projects",
    description:
      "Guidance on research design, qualitative and quantitative methods, sampling, data collection instruments, ethics and how to justify your methodology chapter.",
    intro:
      "The methodology chapter is where most dissertations lose marks. Coaching helps you choose an approach that genuinely fits your research question, design it properly, and explain and justify every decision in the academic language examiners expect.",
    forWho: [
      "Students writing a methodology chapter for the first time",
      "Researchers deciding between qualitative, quantitative and mixed methods",
      "Students preparing an ethics application",
      "Anyone whose proposal was returned with methodology comments",
    ],
    includes: [
      { title: "Research philosophy", copy: "Positioning your study clearly and explaining paradigm choices without jargon for its own sake." },
      { title: "Design choice", copy: "Case study, survey, experiment, interviews, ethnography or mixed methods — matched to your question." },
      { title: "Sampling", copy: "Sampling strategy, size, access and how to defend your choices." },
      { title: "Instruments", copy: "Designing interview guides, questionnaires and observation protocols that produce usable data." },
      { title: "Ethics and limitations", copy: "Ethical approval, consent, data handling, and writing an honest limitations section." },
      { title: "Analysis plan", copy: "Deciding how you will analyse your data before you collect it." },
    ],
    process: [
      { title: "Review", copy: "We read your research question and current plan." },
      { title: "Options", copy: "We discuss realistic method options and the trade-offs of each." },
      { title: "Design", copy: "You build your design with guidance at each decision point." },
      { title: "Feedback", copy: "We review your written methodology chapter and suggest improvements." },
    ],
    faqs: [
      integrityFaq,
      { question: "Can you help me design a questionnaire?", answer: "We coach you through designing it: question types, wording, bias, scales and piloting. The final instrument is yours." },
      { question: "Do you help with ethics applications?", answer: "Yes, we explain what committees look for and review your draft application." },
    ],
    related: ["thesis-dissertation-coaching", "research-statistics-support", "academic-writing-coaching"],
  },
  {
    slug: "academic-writing-coaching",
    name: "Academic Writing Coaching",
    h1: "Academic writing coaching for clearer, more critical work",
    title: "Academic Writing Coaching | Structure, Argument & Referencing",
    description:
      "Coaching in academic structure, clarity, argumentation, critical thinking and referencing, with detailed feedback on your own essays, reports and chapters.",
    intro:
      "Strong academic writing is a skill, not a talent. Coaching shows you how to build an argument, structure paragraphs that carry it, write critically rather than descriptively, and reference accurately — using your own work as the training ground.",
    forWho: [
      "Students told their writing is descriptive rather than critical",
      "International students writing extended academic English",
      "Master's students moving to a higher standard of writing",
      "Anyone who understands the material but loses marks on expression",
    ],
    includes: [
      { title: "Structure", copy: "Essay and report architecture, paragraph design and signposting." },
      { title: "Clarity", copy: "Precise, readable academic prose without padding or false formality." },
      { title: "Argumentation", copy: "Building a thesis, using evidence and handling counter-arguments." },
      { title: "Critical thinking", copy: "Moving from summarising sources to evaluating and synthesising them." },
      { title: "Referencing", copy: "Citation mechanics and integrating sources without over-quoting." },
      { title: "Feedback", copy: "Line-level and structural comments on drafts you have written." },
    ],
    process: [
      { title: "Sample review", copy: "We read a piece of your recent writing and identify patterns." },
      { title: "Targets", copy: "We agree two or three specific improvements to work on." },
      { title: "Practice", copy: "You draft; we coach and give feedback in each cycle." },
      { title: "Consolidation", copy: "We check the improvements are holding across new pieces." },
    ],
    faqs: [
      integrityFaq,
      { question: "Is this the same as proofreading?", answer: "No. Proofreading corrects a finished text. Coaching teaches you to write better next time. We offer both separately." },
      { question: "Which referencing styles do you cover?", answer: "APA, Harvard, MLA, Chicago, Vancouver, OSCOLA and most department-specific variants." },
    ],
    related: ["editing-proofreading", "thesis-dissertation-coaching", "university-tutoring"],
  },
  {
    slug: "editing-proofreading",
    name: "Editing & Proofreading",
    h1: "Editing and proofreading for student academic work",
    title: "Academic Editing & Proofreading Services | Yes We Do Your Projects",
    description:
      "Ethical academic editing and proofreading: grammar, punctuation, consistency, formatting and referencing checks on work you have written yourself.",
    intro:
      "Editing and proofreading polish work you have already written. We correct language, consistency and formatting, and flag places where meaning is unclear — without changing your argument, adding content or writing new material for you.",
    forWho: [
      "Students submitting a dissertation, thesis or major report",
      "Writers using English as an additional language",
      "Students whose department permits proofreading of final drafts",
      "Anyone who wants a careful final check before submission",
    ],
    includes: [
      { title: "Language", copy: "Grammar, punctuation, syntax and word choice." },
      { title: "Consistency", copy: "Terminology, tense, capitalisation, numbers and abbreviations." },
      { title: "Formatting", copy: "Headings, spacing, tables, figures, captions and contents pages." },
      { title: "Referencing check", copy: "Style consistency and matching between citations and reference list." },
      { title: "Clarity flags", copy: "Comments where an argument reads unclearly, for you to resolve." },
    ],
    process: [
      { title: "Send your draft", copy: "Share the document, your style guide and your deadline." },
      { title: "Scope", copy: "We confirm what level of editing your institution permits." },
      { title: "Edit", copy: "Tracked changes and margin comments so you keep full control." },
      { title: "Return and review", copy: "You accept, reject or discuss each change." },
    ],
    faqs: [
      { question: "Is proofreading allowed by universities?", answer: "Most institutions permit language proofreading of your own final draft, and many publish a policy on it. Check your department's rules — we work strictly within them and never rewrite your content." },
      { question: "Will you rewrite weak sections?", answer: "No. We flag them and explain the issue so you can revise it yourself, or you can book writing coaching." },
    ],
    related: ["academic-writing-coaching", "thesis-dissertation-coaching", "research-methodology"],
  },
  {
    slug: "exam-preparation",
    name: "Exam Preparation",
    h1: "Exam preparation coaching for university assessments",
    title: "University Exam Preparation & Revision Coaching",
    description:
      "Structured exam preparation: revision planning, active recall, past-paper strategy, timed practice, exam technique and managing exam pressure.",
    intro:
      "Exam performance depends as much on method as on knowledge. We build a revision plan against your exam timetable, teach evidence-based revision techniques, and rehearse exam technique under timed conditions so the real paper feels familiar.",
    forWho: [
      "Students facing end-of-semester or resit examinations",
      "Students who revise for long hours with disappointing results",
      "Students sitting timed online or open-book assessments",
      "Anyone whose performance drops under exam pressure",
    ],
    includes: [
      { title: "Revision timetable", copy: "A realistic schedule mapped to every exam date and topic weighting." },
      { title: "Active recall", copy: "Retrieval practice, spaced repetition and self-testing instead of rereading." },
      { title: "Past papers", copy: "Reading command words, planning answers and spotting recurring question types." },
      { title: "Timed practice", copy: "Full-condition practice with feedback on structure, timing and marks lost." },
      { title: "Exam technique", copy: "Time allocation, question selection and how to salvage a difficult paper." },
      { title: "Pressure management", copy: "Practical routines for sleep, nerves and the day itself." },
    ],
    process: [
      { title: "Audit", copy: "Exam dates, formats, weightings and your current confidence per topic." },
      { title: "Plan", copy: "A week-by-week revision schedule you can actually follow." },
      { title: "Coaching", copy: "Sessions on weak topics plus technique work." },
      { title: "Mock practice", copy: "Timed papers with detailed feedback before the real thing." },
    ],
    faqs: [
      integrityFaq,
      { question: "How early should I start?", answer: "Six to eight weeks before exams is ideal, but focused work in a shorter window still helps considerably." },
      { question: "Do you help with resits?", answer: "Yes. We start by diagnosing what went wrong the first time, which is usually method rather than effort." },
    ],
    related: ["sat-preparation", "academic-coaching", "university-tutoring"],
  },
  {
    slug: "sat-preparation",
    name: "SAT Preparation",
    h1: "SAT preparation with a personalised, diagnostic-led plan",
    title: "SAT Preparation Tutoring | Personalised SAT Coaching",
    description:
      "One-to-one SAT preparation built on a diagnostic assessment: targeted work on weak areas, practice strategy, exam technique and progress tracking.",
    intro:
      "Effective SAT preparation starts with data, not generic worksheets. A diagnostic assessment shows exactly which question types cost you marks, and every session after that targets those areas while building timing, accuracy and test-day strategy.",
    forWho: [
      "Students applying to universities in the United States",
      "International students sitting the SAT abroad",
      "Students retaking the SAT after a first attempt",
      "Parents arranging structured, accountable preparation",
    ],
    includes: [
      { title: "Diagnostic assessment", copy: "A full practice test analysed by section, question type and timing." },
      { title: "Personalised plan", copy: "A study plan weighted towards the areas that will move your score most." },
      { title: "Reading and writing", copy: "Passage strategy, evidence questions, grammar rules and rhetorical skills." },
      { title: "Maths", copy: "Algebra, problem solving, data analysis and advanced maths, with calculator strategy." },
      { title: "Practice strategy", copy: "How to use official practice tests properly and review every mistake." },
      { title: "Exam technique", copy: "Pacing, guessing strategy, question triage and stamina." },
      { title: "Progress tracking", copy: "Regular checkpoints so you can see what is improving and what still needs work." },
    ],
    process: [
      { title: "Diagnostic", copy: "You sit a full practice test; we analyse the results in detail." },
      { title: "Plan", copy: "We set a timeline to your test date with weekly targets." },
      { title: "Sessions", copy: "Focused one-to-one teaching on your weakest areas." },
      { title: "Checkpoints", copy: "Periodic full practice tests to measure progress and adjust." },
    ],
    faqs: [
      { question: "Do you guarantee a score increase?", answer: "No. Nobody honestly can. What we provide is a diagnostic-led plan, expert teaching and consistent tracking so your preparation is targeted rather than random." },
      { question: "How long does preparation take?", answer: "It depends on your starting point and target. Most students work over two to four months with weekly sessions and independent practice between them." },
      { question: "Are sessions online?", answer: "Yes, one-to-one and scheduled in your time zone." },
    ],
    related: ["exam-preparation", "academic-coaching", "university-tutoring"],
  },
  {
    slug: "research-statistics-support",
    name: "Research & Statistics Support",
    h1: "Research and statistics support for student projects",
    title: "Research & Statistics Support for Students | Data Analysis Coaching",
    description:
      "Coaching in statistical analysis for student research: choosing the right test, using SPSS, R or Excel, interpreting output and reporting results correctly.",
    intro:
      "Statistics stop many good research projects in their tracks. We help you choose the right analysis for your data and design, run it yourself in SPSS, R or Excel, and — most importantly — understand and report what the output actually means.",
    forWho: [
      "Students analysing survey or experimental data for a dissertation",
      "Researchers unsure which statistical test applies",
      "Students learning SPSS, R, Excel or thematic analysis for the first time",
      "Anyone who has results but cannot interpret or write them up",
    ],
    includes: [
      { title: "Test selection", copy: "Matching analysis to your design, variables and assumptions." },
      { title: "Data preparation", copy: "Cleaning, coding, missing data and reliability checks." },
      { title: "Software coaching", copy: "Step-by-step guidance in SPSS, R or Excel so you can run it yourself." },
      { title: "Interpretation", copy: "Understanding output, effect sizes and what the numbers do and do not show." },
      { title: "Qualitative analysis", copy: "Coding frameworks and thematic analysis for interview and text data." },
      { title: "Reporting", copy: "Presenting results in tables, figures and correct academic style." },
    ],
    process: [
      { title: "Data review", copy: "We look at your research question, design and dataset." },
      { title: "Analysis plan", copy: "We agree which analyses answer your questions." },
      { title: "Guided analysis", copy: "You run the analysis with coaching at each step." },
      { title: "Write-up feedback", copy: "We review how you have reported and interpreted the results." },
    ],
    faqs: [
      integrityFaq,
      { question: "Which software do you support?", answer: "SPSS, R, Excel and, for qualitative work, NVivo-style coding approaches." },
      { question: "Can you check analysis I have already run?", answer: "Yes. We review your approach, output and interpretation and explain anything that needs correcting." },
    ],
    related: ["research-methodology", "thesis-dissertation-coaching", "academic-writing-coaching"],
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s]),
) as Record<string, ServiceContent>;

export function getService(slug: string): ServiceContent {
  return serviceBySlug[slug]!;
}

export function serviceHead(slug: string) {
  const s = getService(slug);
  const url = `/services/${s.slug}`;
  return {
    meta: [
      { title: s.title },
      { name: "description", content: s.description },
      { property: "og:title", content: s.title },
      { property: "og:description", content: s.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: s.name,
              description: s.description,
              serviceType: s.name,
              provider: { "@type": "Organization", name: "Yes We Do Your Projects" },
              areaServed: ["United Kingdom", "United Arab Emirates", "Canada", "Lebanon"],
            },
            {
              "@type": "FAQPage",
              mainEntity: s.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ],
        }),
      },
    ],
  };
}
