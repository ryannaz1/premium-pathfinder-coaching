import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  GraduationCap,
  LineChart,
  NotebookPen,
  Presentation,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-coaching.jpg";
import { CTAButton } from "@/components/CTAButton";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { LocationCard } from "@/components/LocationCard";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  academicLevels,
  helpAreas,
  majorCategories,
  practicalProjects,
  softwareGrid,
  technicalAreas,
} from "@/lib/disciplines";
import { site, whatsappHref } from "@/lib/site";

const title = "Academic Support for Every Major, Course & Level | Yes We Do Your Projects";
const description =
  "Academic coaching, university tutoring, research guidance and technical project support across all majors and levels — undergraduate to PhD, in English, Arabic and French.";

const faqs: FaqItem[] = [
  {
    question: "What subjects do you cover?",
    answer:
      "We support students across a wide range of majors, disciplines and university courses. If your subject isn't listed, contact us and we'll assess your requirements.",
  },
  {
    question: "Do you support Bachelor's, Master's and PhD students?",
    answer:
      "Yes. We support undergraduate and Bachelor's students with assignments, coursework, exams and final-year projects, and Master's and PhD students with research guidance, thesis and dissertation coaching, methodology support, literature reviews, academic writing guidance and research planning.",
  },
  {
    question: "Can you help with engineering projects?",
    answer:
      "Yes. We provide tutoring and guidance for engineering coursework, modelling, technical drawings, prototypes, calculations, reports and final-year or capstone engineering projects.",
  },
  {
    question: "Can you help with GIS, Revit, AutoCAD and 3ds Max?",
    answer:
      "Yes. We provide tutoring and guidance for university projects using GIS mapping and spatial analysis, Revit and BIM modelling, AutoCAD drafting and 3ds Max modelling, rendering and visualisation. We are independent and not certified by or affiliated with these software companies.",
  },
  {
    question: "Can you help with Arduino projects?",
    answer:
      "Yes. We guide students through circuit design, sensors, wiring logic, code structure, debugging and documenting Arduino-based prototypes and technical projects.",
  },
  {
    question: "Can you help with SPSS and data analysis?",
    answer:
      "Yes. We help you choose appropriate statistical tests, set up and run analyses in SPSS or similar tools, interpret the output and present results correctly in your own report, thesis or dissertation.",
  },
  {
    question: "Can you help with engineering and technical projects?",
    answer:
      "Yes. We provide guidance and tutoring for technical projects involving areas such as GIS, Revit, AutoCAD, 3ds Max, Arduino, SPSS, Photoshop, CAD, modelling, data analysis and more.",
  },
  {
    question: "Can you help with architecture projects and maquettes?",
    answer:
      "Yes. We can provide guidance for architectural design projects, technical drawings, 3D modelling, presentations and physical model/maquette projects.",
  },
  {
    question: "Do you support all majors?",
    answer:
      "We support a broad range of majors across engineering, medicine, business, technology, architecture, design, sciences, humanities, social sciences, law and more.",
  },
  {
    question: "What languages do you provide support in?",
    answer: "English, Arabic and French.",
  },
  {
    question: "Do you complete assignments for students?",
    answer:
      "No. We provide tutoring, coaching, research guidance, technical guidance and feedback. Students remain responsible for producing and submitting their own academic work.",
  },
  {
    question: "Are sessions online or in person?",
    answer:
      "Sessions are delivered online, which is why we can support students across the United Kingdom, Dubai, Abu Dhabi and the wider UAE, Montreal and Quebec, and Lebanon within their own time zones.",
  },
  {
    question: "How do I get started?",
    answer:
      "Message us on WhatsApp or email us with your subject, level of study and what you would like support with. We will discuss your goals in a consultation and recommend the right format of support.",
  },
];

const services = [
  {
    title: "University Tutoring",
    description:
      "One-to-one tutoring that builds genuine subject understanding, from first-year modules to advanced Master's coursework.",
  },
  {
    title: "Academic Coaching",
    description:
      "Structured guidance on planning, priorities, workload and academic strategy so you work with direction rather than pressure.",
  },
  {
    title: "Thesis & Dissertation Coaching",
    description:
      "Support with topic refinement, research questions, structure and feedback across every stage of your own research project.",
  },
  {
    title: "Research Methodology",
    description:
      "Choose and justify the right methods, design your study properly, and explain your approach with academic confidence.",
  },
  {
    title: "Academic Writing Coaching",
    description:
      "Sharpen structure, clarity, argumentation, critical thinking and referencing so your writing meets university expectations.",
  },
  {
    title: "SAT Preparation",
    description:
      "Personalised preparation built around a diagnostic assessment, weak-area work, practice strategy and exam technique.",
  },
];

const audiences = [
  { icon: GraduationCap, label: "University students", copy: "Undergraduates who want to understand their subject, not just survive the deadline." },
  { icon: Users, label: "International students", copy: "Students adapting to a new academic system, language and set of expectations." },
  { icon: NotebookPen, label: "Master's & PhD students", copy: "Researchers navigating theses, dissertations, methodology and higher academic standards." },
  { icon: Presentation, label: "Exam candidates", copy: "Students preparing for high-stakes assessments including the SAT." },
  { icon: BookOpen, label: "Parents", copy: "Families arranging serious, well-structured academic support for their child." },
  { icon: LineChart, label: "Ambitious students", copy: "Students aiming higher who want expert mentoring alongside their studies." },
];

const steps = [
  { title: "Consultation", copy: "Tell us your course, level of study and what you are finding difficult. We listen before we recommend anything." },
  { title: "Plan", copy: "We agree a clear plan: what we will cover, how often we meet and what progress should look like." },
  { title: "Coaching", copy: "One-to-one online sessions with a coach, plus structured feedback on your own drafts and work." },
  { title: "Progress", copy: "We review what improved, adjust the plan and keep you accountable through to your deadline or exam." },
];

const reasons = [
  { title: "Coaching, not shortcuts", copy: "We build skills you keep. Every piece of work stays yours, which protects your academic integrity." },
  { title: "One-to-one attention", copy: "No group classes or recycled slide decks — support is shaped around your course and your goals." },
  { title: "International perspective", copy: "We work with students across the UK, the UAE, Canada and Lebanon, and understand each system's expectations." },
  { title: "Clear communication", copy: "Fast replies on WhatsApp, straight answers about what we can and cannot do, and no pressure tactics." },
];

const locations = [
  { place: "United Kingdom", description: "Coaching for UK undergraduate, Bachelor's, Master's and PhD students, including international students.", to: "/locations/uk" },
  { place: "Dubai", description: "Premium private academic support for students and families in Dubai.", to: "/locations/dubai" },
  { place: "Abu Dhabi", description: "One-to-one tutoring and coaching for Abu Dhabi students.", to: "/locations/abu-dhabi" },
  { place: "Montreal & Quebec", description: "Support for university students studying in Montreal and across Quebec.", to: "/locations/montreal" },
  { place: "Lebanon", description: "Academic coaching for Lebanese students studying locally or abroad.", to: "/locations/lebanon" },
];

const trustPoints = [
  { stat: "13,000+", label: "Students following @yeswedoyourprojects" },
  { stat: "4 regions", label: "UK · UAE · Quebec · Lebanon" },
  { stat: "1-to-1", label: "Every session, never group classes" },
  { stat: "100% yours", label: "You write and submit your own work" },
];

const international = [
  { title: "A new academic system", copy: "Marking criteria, classification language and expectations around independent research differ between the UK, North America and the Gulf. We make them explicit instead of leaving you to infer them." },
  { title: "Academic English", copy: "Writing at university level in an additional language is a skill of its own. We coach register, structure and argument — your ideas stay yours." },
  { title: "Referencing and integrity", copy: "Citation conventions and originality rules vary by institution. We coach proper citation, originality and academic integrity so students can confidently develop and reference their own work." },
  { title: "Your time zone", copy: "Sessions are scheduled in GMT/BST, GST, Eastern Time or Beirut time, including evenings and weekends." },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-paper">
        <div className="container-editorial grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow">Academic coaching · UK · UAE · Canada · Lebanon</p>
            <h1 className="mt-5 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Academic support for every major, every course &amp; every level
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From your first university assignment to your final-year project, Master's
              dissertation or PhD research, we provide personalised academic, research and
              technical guidance across disciplines — in English, Arabic and French.
            </p>
            <p className="mt-5 max-w-xl font-display text-lg leading-snug text-foreground">
              Engineering. Medicine. Business. Architecture. Computer Science. Arts. Sciences.
              Every major, every level.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {[
                "Undergraduate",
                "Bachelor's",
                "Master's",
                "PhD",
                "International students",
                "Students studying abroad",
              ].map((tag) => (
                <li
                  key={tag}
                  className="border border-border px-3 py-1 text-xs tracking-wide text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton to="/contact" variant="primary" withArrow>
                Book a consultation
              </CTAButton>
              <WhatsAppButton label="Chat on WhatsApp" variant="outline" />
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Coaching and guidance only. We never write or submit academic work on your behalf.
            </p>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="A university student studying with notes, books and a laptop in a quiet library"
              width={1408}
              height={1600}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-px left-0 hidden bg-paper p-5 pr-8 sm:block">
              <p className="eyebrow">Trusted by a community of</p>
              <p className="mt-1 font-display text-2xl text-foreground">13,000+ followers</p>
              <p className="text-xs text-muted-foreground">on Instagram @yeswedoyourprojects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-sand">
        <div className="container-editorial grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:py-12">
          {trustPoints.map((t) => (
            <div key={t.stat}>
              <p className="font-display text-2xl leading-none text-foreground sm:text-3xl">
                {t.stat}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {t.label}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* What we help with */}
      <Section eyebrow="What we help with" heading="Expert support across every level of university work">
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
          From first-year assignments to PhD dissertations, and from engineering to business,
          humanities and health sciences. We coach across all majors, all courses and all
          assignment types — in English, Arabic and French.
        </p>
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="bg-card p-6 sm:p-8">
              <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CTAButton to="/services" variant="outline" withArrow>
            See all services
          </CTAButton>
        </div>
      </Section>

      {/* Help areas */}
      <Section tone="sand" eyebrow="Scope of support" heading="What can we help you with?">
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Coaching, tutoring, research guidance and technical guidance across the full range of
          university work — at every stage, from brief to submission.
        </p>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {helpAreas.map((area) => (
            <div key={area} className="bg-card px-5 py-4 text-sm text-foreground">
              {area}
            </div>
          ))}
        </div>
      </Section>

      {/* Majors */}
      <Section
        eyebrow="Majors & disciplines"
        heading="All majors. All courses. All academic levels."
      >
        <p className="mb-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          We support students across virtually every university discipline, from engineering and
          medicine to business, computer science, architecture, arts, sciences, law and the social
          sciences.
        </p>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
          If you don't see your subject listed, contact us — we can assess your requirements and
          recommend the appropriate support.
        </p>
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {majorCategories.map((cat) => (
            <div key={cat.name} className="bg-card p-6 sm:p-8">
              <h3 className="text-lg text-foreground">{cat.name}</h3>
              <ul className="mt-4 space-y-1.5">
                {cat.subjects.map((s) => (
                  <li key={s} className="text-sm leading-relaxed text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-foreground">
          Don't see your major?{" "}
          <Link to="/contact" className="font-semibold underline underline-offset-4">
            Contact us
          </Link>{" "}
          — we support many additional disciplines.
        </p>
      </Section>

      {/* Technical & project support */}
      <Section
        tone="ink"
        eyebrow="Technical support"
        heading="Technical tools & project support"
      >
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-ink-foreground/75">
          Guidance and tutoring for students working with specialist software, technical tools,
          modelling, data analysis and practical university projects.
        </p>
        <ul className="flex flex-wrap gap-2">
          {technicalAreas.map((t) => (
            <li
              key={t}
              className="border border-ink-foreground/25 px-3 py-1.5 text-sm text-ink-foreground/90"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <p className="eyebrow">Software guidance</p>
          <h3 className="mt-3 max-w-2xl text-2xl leading-tight text-ink-foreground">
            The tools students most often need help with
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {softwareGrid.map((s) => (
              <div key={s.name} className="border-t border-ink-foreground/25 pt-5">
                <p className="font-display text-xl uppercase tracking-wide text-accent">
                  {s.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/75">{s.copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs leading-relaxed text-ink-foreground/60">
            We are an independent academic coaching service. We are not certified by, affiliated
            with or partnered with any of the software companies named above.
          </p>
        </div>
      </Section>

      {/* Practical projects */}
      <Section eyebrow="Practical projects" heading="Physical models & project builds">
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
          From digital projects to physical models. We provide guidance, tutoring and feedback on
          planning, materials, technique and presentation — students build and submit their own
          work.
        </p>
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {practicalProjects.map((p, i) => (
            <div key={p} className="bg-card p-6">
              <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-sm leading-relaxed text-foreground">{p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Languages */}
      <section className="border-b border-border bg-sand">
        <div className="container-editorial grid gap-8 py-14 md:grid-cols-[1fr_auto] md:items-center md:py-16">
          <div>
            <p className="eyebrow">Languages</p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
              Academic support in English, Arabic &amp; French
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Students can receive explanations, tutoring, coaching and guidance in English,
              Arabic or French.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {["English", "العربية · Arabic", "Français · French"].map((l) => (
              <li
                key={l}
                className="border border-border bg-card px-5 py-3 font-display text-lg text-foreground"
              >
                {l}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Academic levels */}
      <Section eyebrow="Academic levels" heading="Support from undergraduate to PhD">
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {academicLevels.map((l) => (
            <div key={l.name} className="bg-card p-6 sm:p-8">
              <h3 className="text-lg text-foreground">{l.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Don't see your course CTA */}
      <section className="border-b border-border bg-background">
        <div className="container-editorial py-14 md:py-20">
          <div className="border border-border bg-card p-8 md:p-12">
            <h2 className="max-w-2xl text-2xl leading-tight sm:text-3xl">
              Don't see your course or project?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Tell us your major, course, academic level and what you need help with. We'll assess
              your requirements and recommend the most appropriate support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton to="/contact" variant="primary" withArrow>
                Tell us about your project
              </CTAButton>
              <WhatsAppButton label="Chat on WhatsApp" variant="outline" />
            </div>
          </div>
        </div>
      </section>


      {/* Who we help */}
      <Section
        tone="sand"
        eyebrow="Who we help"
        heading="Students and families who take academic work seriously"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, label, copy }) => (
            <div key={label} className="rule-accent">
              <Icon className="size-5 text-accent" aria-hidden="true" />
              <h3 className="mt-3 text-lg text-foreground">{label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why students choose us */}
      <Section eyebrow="Why students choose us" heading="Serious support, honestly delivered">
        <div className="grid gap-10 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title}>
              <h3 className="text-xl text-foreground">{r.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {r.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section tone="ink" eyebrow="How it works" heading="Four steps from first message to finished work">
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-ink-foreground/25 pt-5">
              <span className="font-display text-3xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg text-ink-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/75">{s.copy}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Featured services */}
      <Section eyebrow="Featured services" heading="Where students ask for us most">
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            index={0}
            title="Thesis & Dissertation Coaching"
            description="Refine your topic and research question, plan your methodology and receive structured feedback on your own drafts."
            to="/services/thesis-dissertation-coaching"
          />
          <ServiceCard
            index={1}
            title="Academic Writing Coaching"
            description="Build clear structure, stronger argumentation and correct referencing so your writing reads at university standard."
            to="/services/academic-writing-coaching"
          />
          <ServiceCard
            index={2}
            title="SAT Preparation"
            description="A diagnostic-led preparation plan targeting your weakest areas, with practice strategy and exam technique."
            to="/services/sat-preparation"
          />
        </div>
      </Section>

      {/* International students */}
      <Section
        eyebrow="International students"
        heading="Studying far from home, assessed by rules nobody explained"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {international.map((i) => (
            <div key={i.title} className="rule-accent">
              <h3 className="text-xl text-foreground">{i.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{i.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CTAButton to="/who-we-help" variant="outline" withArrow>
            Find the right support
          </CTAButton>
        </div>
      </Section>

      {/* Locations */}
      <Section
        tone="sand"
        eyebrow="International locations"
        heading="Online coaching, in your time zone"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <LocationCard key={l.place} place={l.place} description={l.description} to={l.to} />
          ))}
        </div>
        <div className="mt-8">
          <CTAButton to="/locations" variant="outline" withArrow>
            Explore all locations
          </CTAButton>
        </div>
      </Section>


      {/* Student feedback */}
      <Section eyebrow="Student feedback" heading="Student feedback coming soon">
        <div className="rounded-lg border border-border bg-card p-8 md:p-12">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We only publish feedback from students who have actually worked with us, in
            their own words and with their permission. Verified testimonials will appear
            here as students complete their coaching programmes.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            In the meantime, you are welcome to ask about our approach directly on
            WhatsApp — we will tell you honestly whether we are the right fit.
          </p>
        </div>

        <div className="mt-8">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground underline underline-offset-4"
          >
            Follow @yeswedoyourprojects on Instagram
          </a>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="sand" eyebrow="FAQ" heading="Questions students ask before booking">
        <div className="max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-ink text-ink-foreground">
        <div className="container-editorial py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
            Tell us what you're studying. Tell us what you're working on.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
            Whether it's an assignment, engineering project, dissertation, thesis, PhD research or
            technical project, tell us what you need help with and we'll recommend the right
            support.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Book a consultation
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-ink-foreground/30 px-6 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
            >
              Chat with an academic coach
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({
  eyebrow,
  heading,
  children,
  tone = "paper",
}: {
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
  tone?: "paper" | "sand" | "ink";
}) {
  const toneClass = {
    paper: "bg-background text-foreground",
    sand: "bg-sand text-foreground",
    ink: "bg-ink text-ink-foreground",
  }[tone];

  return (
    <section className={`${toneClass} border-b border-border`}>
      <div className="container-editorial py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">{heading}</h2>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
