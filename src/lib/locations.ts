import type { FaqItem } from "@/components/FAQ";
import { socialMeta } from "@/lib/seo";

export type LocationContent = {
  slug: string;
  place: string;
  short: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  context: { title: string; copy: string }[];
  systemNotes: string[];
  timezone: string;
  popular: string[];
  faqs: FaqItem[];
};

const integrityFaq: FaqItem = {
  question: "Do you write assignments or dissertations for students?",
  answer:
    "No. We provide coaching, teaching and feedback so students produce their own work. Nothing is written or submitted on a student's behalf, which keeps students inside their institution's academic integrity rules.",
};

export const locations: LocationContent[] = [
  {
    slug: "uk",
    place: "United Kingdom",
    short: "Coaching for UK undergraduate, Bachelor's, Master's and PhD students, including international students.",
    h1: "University academic coaching in the United Kingdom",
    title: "UK University Academic Coaching & Tutoring | Yes We Do Your Projects",
    description:
      "One-to-one academic coaching and tutoring for UK university students: essays, dissertations, research methods and exams, delivered online in UK time.",
    intro:
      "We coach undergraduate, Bachelor's, Master's and PhD students studying at UK universities, across a wide range of disciplines. Sessions are online and scheduled in UK time, built around the assessment culture British degrees actually run on: a small number of high-weight essays, a dissertation, and marking criteria that reward critical argument far more than description.",
    timezone: "Sessions run in GMT/BST, including evenings after lectures.",
    context: [
      {
        title: "Built around UK marking criteria",
        copy: "UK grading turns on critical analysis, evidence and argument rather than summary. We work with your module handbook and rubric so you know exactly what separates a 2:1 from a first, or a pass from a distinction at Master's level.",
      },
      {
        title: "Dissertation and final-year projects",
        copy: "Most UK degrees end with an independent dissertation supervised at a distance. We add structure between supervisor meetings: research question, literature review, methodology and steady feedback on your own drafts.",
      },
      {
        title: "One-year Master's pressure",
        copy: "A UK taught Master's compresses a full degree into twelve months, with the dissertation running through summer. Coaching helps you plan backwards from submission instead of reacting to each deadline.",
      },
      {
        title: "Referencing and integrity rules",
        copy: "Harvard, APA, OSCOLA and MHRA all appear across UK institutions. We coach proper citation, originality and academic integrity so you can confidently develop and reference your own work.",
      },
    ],
    systemNotes: [
      "Undergraduate classification: first, 2:1, 2:2, third",
      "Master's grading: distinction, merit, pass",
      "Semester and term structures, with January and May assessment periods",
      "Independent dissertation or capstone in the final year",
      "Turnitin similarity checking as standard practice",
    ],
    popular: [
      "thesis-dissertation-coaching",
      "academic-writing-coaching",
      "university-tutoring",
      "research-methodology",
    ],
    faqs: [
      integrityFaq,
      {
        question: "Do you work with students at any UK university?",
        answer:
          "Yes. Coaching is online and shaped around your own module handbook and marking criteria, so it works for students at any UK institution.",
      },
      {
        question: "Can you help with a Master's dissertation over the summer?",
        answer:
          "Yes. Summer dissertation coaching is one of our most requested formats: a planning session, agreed milestones and structured feedback on each chapter you draft.",
      },
      {
        question: "What times are sessions available?",
        answer:
          "Sessions run in UK time, including weekday evenings and weekends, so they fit around lectures, seminars and part-time work.",
      },
    ],
  },
  {
    slug: "dubai",
    place: "Dubai",
    short: "Premium private academic support for students and families in Dubai.",
    h1: "University academic coaching in Dubai",
    title: "Dubai University Academic Coaching & Tutoring | Yes We Do Your Projects",
    description:
      "Premium one-to-one academic coaching for university students in Dubai: tutoring, dissertation guidance, academic writing and SAT preparation, online in GST.",
    intro:
      "Dubai students study across an unusually international set of institutions: international branch campuses, local universities and online programmes awarded by overseas partners. We coach students through whichever academic system their degree belongs to, online and in Gulf Standard Time.",
    timezone: "Sessions run in GST (UTC+4), including evenings and weekends.",
    context: [
      {
        title: "Branch campuses and mixed academic systems",
        copy: "A degree taught in Dubai may be assessed to British, American, Australian or Indian standards. We start by identifying which conventions your programme follows, because referencing style, grading language and expectations differ sharply between them.",
      },
      {
        title: "Studying in a second language",
        copy: "Many students in Dubai write academically in English while thinking in another language. Coaching focuses on academic register, structure and argument rather than surface correction, so your writing sounds like yours at university standard.",
      },
      {
        title: "Family-supported study",
        copy: "Parents often arrange support in Dubai. We keep the arrangement transparent: clear scope, honest progress feedback and coaching that builds the student's own independence.",
      },
      {
        title: "Transitions to study abroad",
        copy: "Students moving from Dubai to a UK, Canadian or US university face a different academic culture. We prepare them for the reading load, independent study and assessment style before they arrive.",
      },
    ],
    systemNotes: [
      "International branch campuses awarding UK, US and Australian degrees",
      "Sunday-to-thursday and monday-to-friday academic weeks across institutions",
      "GPA and classification systems both in use, depending on the awarding body",
      "Strong demand for SAT and standardised test preparation",
      "Large international student population writing in English as an additional language",
    ],
    popular: [
      "university-tutoring",
      "sat-preparation",
      "academic-writing-coaching",
      "academic-coaching",
    ],
    faqs: [
      integrityFaq,
      {
        question: "Are sessions in Dubai time?",
        answer:
          "Yes. Coaching is scheduled in Gulf Standard Time, with evening and weekend slots for students balancing study with family or work commitments.",
      },
      {
        question: "Can you support SAT preparation in Dubai?",
        answer:
          "Yes. SAT preparation starts with a diagnostic, then targets your weakest sections with practice strategy and timing technique ahead of your test date.",
      },
      {
        question: "Do you work with parents arranging support?",
        answer:
          "Often. We speak with the parent about scope and progress while keeping the coaching relationship with the student, which is what makes it effective.",
      },
    ],
  },
  {
    slug: "abu-dhabi",
    place: "Abu Dhabi",
    short: "One-to-one tutoring and coaching for Abu Dhabi students.",
    h1: "University academic coaching in Abu Dhabi",
    title: "Abu Dhabi University Academic Coaching & Tutoring | Yes We Do Your Projects",
    description:
      "One-to-one academic coaching and university tutoring for students in Abu Dhabi: research methods, academic writing, dissertations and exam preparation, online in GST.",
    intro:
      "Abu Dhabi's universities lean heavily toward research-intensive and professionally accredited programmes, from engineering and health sciences to business and public policy. We coach students through the methodology, writing and exam demands those programmes place on them, online and in Gulf Standard Time.",
    timezone: "Sessions run in GST (UTC+4), scheduled around lab and clinical timetables.",
    context: [
      {
        title: "Research-heavy and technical programmes",
        copy: "Capstones, lab reports and empirical projects are common in Abu Dhabi. We coach research design, data handling and the discipline-specific reporting conventions your department expects.",
      },
      {
        title: "American-style credit systems",
        copy: "Many Abu Dhabi institutions use credit hours, GPA and continuous assessment across midterms, quizzes and finals. Coaching plans around that steady rhythm rather than a single end-of-year push.",
      },
      {
        title: "Accredited professional degrees",
        copy: "Programmes in health sciences, engineering and business often carry external accreditation with strict competency requirements. We help you evidence your reasoning clearly enough to meet them.",
      },
      {
        title: "Bilingual academic environments",
        copy: "Students frequently move between Arabic and English academic contexts. Coaching builds the English academic register your assessments are graded in, without flattening your own voice.",
      },
    ],
    systemNotes: [
      "Credit-hour and GPA-based grading at most institutions",
      "Continuous assessment: midterms, quizzes, projects and finals",
      "Strong presence of engineering, health sciences and business programmes",
      "Capstone and applied research projects in final years",
      "Bilingual Arabic/English academic environments",
    ],
    popular: [
      "research-methodology",
      "research-statistics-support",
      "university-tutoring",
      "exam-preparation",
    ],
    faqs: [
      integrityFaq,
      {
        question: "Can you help with a capstone or final-year project?",
        answer:
          "Yes. We coach scoping, methodology, analysis planning and drafting, and give structured feedback on the work you produce at each stage.",
      },
      {
        question: "Do you support statistics and data analysis?",
        answer:
          "Yes. We help you choose appropriate tests, understand your outputs and explain results correctly — you run and report your own analysis with our guidance.",
      },
      {
        question: "How quickly can coaching start?",
        answer:
          "Usually within a few days of your consultation. Message us on WhatsApp with your programme and deadline and we will tell you honestly what is realistic.",
      },
    ],
  },
  {
    slug: "montreal",
    place: "Montreal & Quebec",
    short: "Support for university students studying in Montreal and across Quebec.",
    h1: "University academic coaching in Montreal and Quebec",
    title: "Montreal & Quebec University Academic Coaching | Yes We Do Your Projects",
    description:
      "Academic coaching and tutoring for university students in Montreal and Quebec: CEGEP transitions, thesis guidance, research methods and academic writing, online in ET.",
    intro:
      "Quebec runs an academic pathway that exists nowhere else in Canada: CEGEP before university, three-year bachelor's degrees for local students, and a bilingual academic culture across Montreal's institutions. We coach students through that structure, online and in Eastern Time.",
    timezone: "Sessions run in Eastern Time (ET), including evenings during term.",
    context: [
      {
        title: "CEGEP to university transition",
        copy: "The jump from CEGEP to a Montreal university changes what independent work means: heavier reading, less scaffolding and more self-directed research. Coaching makes that transition deliberate rather than a first-semester shock.",
      },
      {
        title: "Bilingual academic environments",
        copy: "Students often study in English while living and working in French, or write in French for a programme taught partly in English. We coach the academic writing conventions of the language your work is assessed in.",
      },
      {
        title: "Research-intensive universities",
        copy: "Montreal's universities are research-heavy, and undergraduate honours projects and Master's theses are demanding. We support literature reviews, methodology chapters and supervisor communication.",
      },
      {
        title: "International students in Quebec",
        copy: "Students arriving from Lebanon, the Gulf, France and beyond adapt to new grading conventions and expectations around citation and originality. We cover those norms explicitly.",
      },
    ],
    systemNotes: [
      "CEGEP as the pre-university stage for Quebec residents",
      "Three-year bachelor's degrees for CEGEP graduates, four years for out-of-province students",
      "GPA on a 4.0 or 4.3 scale depending on the institution",
      "Fall and winter semesters, with heavy December and April exam periods",
      "Bilingual French/English academic and professional context",
    ],
    popular: [
      "thesis-dissertation-coaching",
      "academic-coaching",
      "academic-writing-coaching",
      "editing-proofreading",
    ],
    faqs: [
      integrityFaq,
      {
        question: "Do you support CEGEP students as well as university students?",
        answer:
          "Yes. We work with CEGEP students preparing for university-level study, and with undergraduate, Bachelor's, Master's and PhD students already at Montreal and Quebec universities.",
      },
      {
        question: "Can you coach writing in French?",
        answer:
          "Our coaching is delivered in English and focuses on English academic writing. For work assessed in French we can still coach structure, argument and research method, and we will tell you plainly where our support ends.",
      },
      {
        question: "Are sessions in Montreal time?",
        answer:
          "Yes. Coaching is scheduled in Eastern Time, with evening slots that fit around class and work.",
      },
    ],
  },
  {
    slug: "lebanon",
    place: "Lebanon",
    short: "Academic coaching for Lebanese students studying locally or abroad.",
    h1: "University academic coaching in Lebanon",
    title: "Lebanon University Academic Coaching & Tutoring | Yes We Do Your Projects",
    description:
      "Academic coaching and university tutoring for students in Lebanon and Lebanese students abroad: writing, research methods, theses, SAT and exam preparation.",
    intro:
      "Lebanese universities follow a mix of American credit-hour and French academic traditions, and many students are simultaneously preparing to continue their studies abroad. We coach students across Lebanon's universities — including the American University of Beirut (AUB), the Lebanese American University (LAU), Université Saint-Joseph (USJ), the Lebanese University, Balamand, NDU, USEK and others — as well as Lebanese students already overseas, online and in Beirut time.",
    timezone: "Sessions run in Beirut time (EET/EEST), including evenings.",
    context: [
      {
        title: "American and French academic traditions side by side",
        copy: "Depending on your institution you may face GPA-based credit hours and continuous assessment, or a French-influenced structure with heavier final examinations. Coaching adapts to the conventions your degree is graded against.",
      },
      {
        title: "Trilingual study",
        copy: "Students move between Arabic, English and French across their education. We coach English academic writing specifically: register, structure, argument and citation, so language is never what costs you marks.",
      },
      {
        title: "Preparing to study abroad",
        copy: "Many Lebanese students continue to the UK, Canada, France or the Gulf. We prepare them for the academic culture ahead — independent research, referencing standards and expectations around originality.",
      },
      {
        title: "Reliable, flexible online delivery",
        copy: "Coaching is online and sessions can be rescheduled when connectivity or power is unpredictable. We plan around that rather than pretending it does not happen.",
      },
    ],
    systemNotes: [
      "American-model universities such as AUB and LAU: credit hours, GPA and continuous assessment",
      "French-model programmes such as USJ and the Lebanese University, with heavier final examinations",
      "Trilingual Arabic, English and French academic environments",
      "Strong pipeline of students continuing to study abroad",
      "SAT and standardised test preparation for university admission",
    ],
    popular: [
      "academic-writing-coaching",
      "university-tutoring",
      "sat-preparation",
      "thesis-dissertation-coaching",
    ],
    faqs: [
      integrityFaq,
      {
        question: "Do you work with AUB and LAU students?",
        answer:
          "Yes. A large share of our Lebanon students study at the American University of Beirut (AUB) and the Lebanese American University (LAU), across undergraduate courses, senior projects, Master's theses and PhD research. Coaching follows your own course syllabus and the integrity rules of your institution.",
      },
      {
        question: "Do you work with Lebanese students studying abroad?",
        answer:
          "Yes. A large part of our work is with Lebanese students at universities in the UK, Canada, France and the Gulf, coached online in whichever time zone they are in.",
      },
      {
        question: "Can you help with SAT preparation?",
        answer:
          "Yes. SAT coaching begins with a diagnostic, then targets weak areas with practice strategy, timing and exam technique.",
      },
      {
        question: "What if sessions are interrupted by connectivity issues?",
        answer:
          "We reschedule without penalty. Plans are built with flexibility because interruptions are a normal part of studying in Lebanon.",
      },
    ],
  },
];

export const locationBySlug = Object.fromEntries(
  locations.map((l) => [l.slug, l]),
) as Record<string, LocationContent>;

export function getLocation(slug: string): LocationContent {
  return locationBySlug[slug]!;
}

const BASE_URL = "https://yeswedoyourprojects.online";

export function locationHead(slug: string) {
  const l = getLocation(slug);
  const url = `${BASE_URL}/locations/${l.slug}`;
  return {
    meta: [
      { title: l.title },
      { name: "description", content: l.description },
      { property: "og:title", content: l.title },
      { property: "og:description", content: l.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      ...socialMeta(l.title, l.description),
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
              name: `Academic coaching in ${l.place}`,
              description: l.description,
              serviceType: "Academic coaching and university tutoring",
              url,
              provider: { "@type": "Organization", name: "Yes We Do Your Projects", url: BASE_URL },
              areaServed: { "@type": "Place", name: l.place },
              availableLanguage: ["English", "Arabic", "French"],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE_URL}/locations` },
                { "@type": "ListItem", position: 3, name: l.place, item: url },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: l.faqs.map((f) => ({
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
