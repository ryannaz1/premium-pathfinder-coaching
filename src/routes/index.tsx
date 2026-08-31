import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  GraduationCap,
  Globe,
  Languages,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import heroImage from "@/assets/hero-coaching.jpg";
import { CategoryGrid } from "@/components/CategoryGrid";
import { CTAButton } from "@/components/CTAButton";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { FindSupportCTA } from "@/components/FindSupportCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { academicLevels, majorCategories, softwareGrid } from "@/lib/disciplines";
import { site, whatsappHref } from "@/lib/site";
import { socialMeta } from "@/lib/seo";


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

const heroPoints = [
  {
    icon: ShieldCheck,
    title: "Academic integrity",
    copy: "Guidance and coaching only — your work stays yours.",
  },
  {
    icon: Sparkles,
    title: "Expert guidance",
    copy: "Specialists across academic and technical disciplines.",
  },
  {
    icon: Languages,
    title: "English · Arabic · French",
    copy: "Explanations in the language you think in.",
  },
  {
    icon: Globe,
    title: "Online, your time zone",
    copy: "UK, UAE, Canada and Lebanon scheduling.",
  },
];

const reasons = [
  "One-to-one support, never group classes",
  "Academic and technical specialists",
  "Support from undergraduate to PhD",
  "English, Arabic and French",
  "Clear, fast replies on WhatsApp",
  "Your work stays entirely your own",
];

const steps = [
  { title: "Tell us", copy: "Share your course, level and what you're working on." },
  { title: "Match", copy: "We recommend the right format of academic or technical support." },
  { title: "Work together", copy: "One-to-one sessions, guidance and structured feedback." },
  { title: "Submit with confidence", copy: "You understand, finish and submit your own work." },
];

const locations = [
  { place: "United Kingdom", copy: "UK universities, all levels", to: "/locations/uk" },
  { place: "UAE", copy: "Dubai, Abu Dhabi & all Emirates", to: "/locations/dubai" },
  { place: "Canada", copy: "Montreal & across Quebec", to: "/locations/montreal" },
  { place: "Lebanon", copy: "Lebanese universities", to: "/locations/lebanon" },
];

const majorLinks: Record<string, string> = {
  Engineering: "/engineering-project-help",
  "Medicine & Health": "/medicine-academic-support",
  "Business & Management": "/business-academic-support",
  "Computer Science & Technology": "/computer-science-academic-support",
  "Architecture & Design": "/architecture-project-help",
  "Arts & Humanities": "/arts-humanities-academic-support",
  "Social Sciences": "/social-science-academic-support",
  Law: "/law-academic-support",
  Science: "/science-academic-support",
};



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://yeswedoyourprojects.online/" },
      ...socialMeta(title, description),
    ],
    links: [{ rel: "canonical", href: "https://yeswedoyourprojects.online/" }],
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
        <div className="container-editorial grid gap-10 py-12 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow">Academic &amp; technical project support</p>
            <h1 className="mt-4 text-[2rem] leading-[1.1] text-foreground sm:text-5xl lg:text-[3.4rem]">
              Expert support for your university work.
              <span className="mt-1 block text-accent">You keep the learning.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              One-to-one coaching, tutoring, research guidance and technical project support for
              university students — across every major, from first assignment to PhD research.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton to="/find-support" variant="primary" withArrow className="px-6 py-3.5">
                Get expert support
              </CTAButton>
              <WhatsAppButton label="Chat on WhatsApp" variant="outline" className="px-6 py-3.5" />
            </div>

            <dl className="mt-9 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {heroPoints.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-sm font-semibold text-foreground">{title}</dt>
                    <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{copy}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="A university student working on coursework with notes, books and a laptop"
              width={1200}
              height={1364}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* Primary conversion interaction */}
      <section className="border-b border-border bg-background">
        <div className="container-editorial section-y">
          <div className="max-w-2xl">
            <p className="eyebrow">Choose your area</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">What do you need help with?</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Pick the closest area and see exactly how we support it — or tell us about your
              course and we&rsquo;ll point you to the right support.
            </p>
          </div>
          <CategoryGrid className="mt-10" />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton to="/services" variant="outline" withArrow>
              See all services
            </CTAButton>
            <Link
              to="/find-support"
              className="inline-flex items-center gap-1.5 px-1 py-3 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Can&rsquo;t find your course?
              <ArrowRight className="size-4 text-accent" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why / process / locations */}
      <section className="border-b border-border bg-sand">
        <div className="container-editorial section-y grid gap-10 lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-2xl leading-tight sm:text-3xl">Why students choose us</h2>
            <ul className="mt-6 space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl leading-tight sm:text-3xl">How it works</h2>
            <ol className="mt-6 space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-accent/40 font-display text-sm text-accent">
                    {i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">{s.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {s.copy}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl leading-tight sm:text-3xl">Support in your location</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {locations.map((l) => (
                <li key={l.place}>
                  <Link
                    to={l.to as never}
                    className="surface-card flex items-center gap-3 px-4 py-3 transition-colors hover:border-accent/50"
                  >
                    <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-foreground">{l.place}</span>
                      <span className="block text-xs text-muted-foreground">{l.copy}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/locations"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
            >
              View all locations
              <ArrowRight className="size-4 text-accent" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technical expertise */}
      <section className="border-b border-border bg-background">
        <div className="container-editorial section-y">
          <div className="max-w-2xl">
            <p className="eyebrow">Technical expertise</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              Software and technical project support
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Guidance for students working with programming languages, engineering software,
              modelling tools and statistical packages — plus physical models, prototypes and
              presentation boards.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-2">
            {[
              "Python",
              "Java",
              "C++",
              "MATLAB",
              "R",
              "Arduino",
              "AutoCAD",
              "Revit",
              "3ds Max",
              "SketchUp",
              "SolidWorks",
              "STAAD",
              "ETABS",
              "GIS",
              "SPSS",
              "STATA",
              "Excel",
              "Photoshop",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {softwareGrid.map((s) => (
              <div key={s.name} className="surface-card p-5 sm:p-6">
                <p className="font-display text-lg text-foreground">{s.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link to="/engineering-software-support" className="underline-offset-4 hover:underline">
              Engineering software support
            </Link>
            <Link to="/spss-statistics-help" className="underline-offset-4 hover:underline">
              SPSS &amp; statistics help
            </Link>
            <Link to="/revit-project-help" className="underline-offset-4 hover:underline">
              Revit project help
            </Link>
            <Link to="/autocad-help" className="underline-offset-4 hover:underline">
              AutoCAD help
            </Link>
            <Link to="/arduino-project-help" className="underline-offset-4 hover:underline">
              Arduino project help
            </Link>
            <Link to="/physical-project-models" className="underline-offset-4 hover:underline">
              Physical models &amp; maquettes
            </Link>
          </div>

          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            We are an independent academic coaching service. We are not certified by, affiliated
            with or partnered with any of the software companies named above.
          </p>
        </div>
      </section>

      {/* Majors + levels */}
      <section className="border-b border-border bg-sand">
        <div className="container-editorial section-y grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow">Majors &amp; disciplines</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              All majors. All courses. All levels.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Engineering, medicine and health, business, computer science, architecture and
              design, arts and humanities, social sciences, law and the sciences.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {majorCategories.map((cat) => {
                const to = majorLinks[cat.name];
                return (
                  <li key={cat.name}>
                    {to ? (
                      <Link
                        to={to as never}
                        className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {cat.name}
                      </Link>
                    ) : (
                      <span className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                        {cat.name}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Don&rsquo;t see your major?{" "}
              <Link to="/find-support" className="font-semibold text-foreground underline underline-offset-4">
                Tell us what you&rsquo;re studying
              </Link>{" "}
              — we support many additional disciplines.
            </p>
          </div>

          <div>
            <p className="eyebrow">Academic levels</p>
            <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">Undergraduate to PhD</h2>
            <div className="mt-7 space-y-3">
              {academicLevels.map((l) => (
                <div key={l.name} className="surface-card p-5">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="size-4 text-accent" aria-hidden="true" />
                    <h3 className="text-base font-semibold text-foreground">{l.name}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course finder */}
      <section className="border-b border-border bg-background">
        <div className="container-editorial section-y">
          <FindSupportCTA tone="paper" className="rounded-2xl shadow-card" />
        </div>
      </section>

      {/* Resources */}
      <section className="border-b border-border bg-background">
        <div className="container-editorial pb-14 md:pb-20">
          <p className="eyebrow">Free student guides</p>
          <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">Read before your next deadline</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                to: "/resources/spss-dissertation-data-analysis-guide",
                title: "SPSS for dissertation data analysis",
              },
              {
                to: "/resources/how-to-choose-dissertation-methodology",
                title: "How to choose a dissertation methodology",
              },
              {
                to: "/resources/engineering-final-year-project-guide",
                title: "Planning an engineering final-year project",
              },
              {
                to: "/resources/revit-for-architecture-students",
                title: "Revit for architecture students",
              },
              {
                to: "/resources/architecture-maquette-guide",
                title: "Planning and building an architecture maquette",
              },
            ].map((r) => (
              <Link
                key={r.to}
                to={r.to as never}
                className="surface-card group flex items-center justify-between gap-4 p-5 transition-colors hover:border-accent/50"
              >
                <span className="text-sm font-semibold leading-snug text-foreground">{r.title}</span>
                <ArrowRight
                  className="size-4 shrink-0 text-accent transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integrity + feedback */}
      <section className="border-b border-border bg-sand">
        <div className="container-editorial section-y grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="eyebrow">Academic integrity</p>
            <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">
              Support that keeps your work your own
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We provide tutoring, coaching, research guidance, technical support and feedback so
              you understand and complete your own work. We do not write or submit academic work on
              behalf of students, and we follow university academic integrity standards.
            </p>
          </div>
          <div>
            <p className="eyebrow">Student feedback</p>
            <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">Coming soon</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We only publish feedback from students who have actually worked with us, in their own
              words and with their permission. In the meantime, ask us anything on WhatsApp — we
              will tell you honestly whether we are the right fit.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-foreground underline underline-offset-4"
            >
              Follow @yeswedoyourprojects on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-background">
        <div className="container-editorial section-y grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">
              Questions students ask before booking
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink text-ink-foreground">
        <div className="container-editorial py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
            Tell us what you&rsquo;re working on
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
            Assignment, engineering project, dissertation, thesis, PhD research or technical
            project — send us the details and we&rsquo;ll recommend the right support.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/find-support"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Get expert support
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md border border-ink-foreground/30 px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10 sm:w-auto"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-xs text-ink-foreground/60">
            Coaching and guidance only. You remain responsible for producing and submitting your own
            academic work.
          </p>
        </div>
      </section>
    </>
  );
}
