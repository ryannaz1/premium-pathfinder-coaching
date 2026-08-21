import { createFileRoute, Link } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { majorCategories, practicalProjects, technicalAreas } from "@/lib/disciplines";
import { services } from "@/lib/services";

const title = "Academic Coaching & Tutoring Services | Yes We Do Your Projects";
const description =
  "University tutoring, academic coaching, thesis and dissertation support, academic writing, exam prep and SAT prep across all majors and levels — in English, Arabic and French.";

const faqs: FaqItem[] = [
  {
    question: "Which service do I need?",
    answer:
      "If you need subject understanding, start with university tutoring. If you need structure, planning and accountability, choose academic coaching. For a dissertation, thesis coaching plus research methodology is the usual combination. Tell us your situation and we will recommend honestly.",
  },
  {
    question: "Do you support all majors?",
    answer:
      "We coach across a wide range of university majors and courses — engineering, medicine and health, business, computer science, architecture and design, arts and humanities, social sciences, law and the sciences — from weekly assignments and essays to senior projects, Master's theses, dissertations and PhD research. If a particular subject is outside our expertise, we will say so clearly.",
  },
  {
    question: "Do you support Bachelor's, Master's and PhD students?",
    answer:
      "Yes. Undergraduate and Bachelor's students for assignments, coursework, exams and final-year or capstone projects; Master's and PhD students for research planning, methodology, literature reviews, thesis and dissertation coaching and academic writing.",
  },
  {
    question: "Can you help with engineering, architecture and technical projects?",
    answer:
      "Yes. We provide guidance and tutoring for technical university projects involving GIS, Revit, AutoCAD, 3ds Max, Arduino, SPSS, Photoshop, CAD, 3D modelling, technical and architectural drawings, data analysis, presentations and physical models or maquettes.",
  },
  {
    question: "What languages do you provide support in?",
    answer:
      "English, Arabic and French. Students can receive explanations, tutoring, coaching and guidance in whichever of the three suits them and their programme.",
  },
  {
    question: "Do you write or submit work for students?",
    answer:
      "No. Every service is coaching, teaching or feedback on work you produce yourself. You remain responsible for producing and submitting your own academic work.",
  },
  {
    question: "Are all services delivered online?",
    answer:
      "Yes. Sessions are one-to-one and online, scheduled around your time zone, which is how we support students in the UK, the UAE, Canada and Lebanon.",
  },
  {
    question: "Can I combine several services?",
    answer:
      "Yes, and most students do. A common combination is tutoring during term with exam preparation before assessments, or thesis coaching alongside statistics support.",
  },
];

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://premium-pathfinder-coaching.lovable.app/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://premium-pathfinder-coaching.lovable.app/services" }],
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <p className="eyebrow mt-6">Services</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            Academic coaching and tutoring services
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Expert one-to-one support across all majors, courses, assignments, senior projects,
            Master's theses, dissertations and PhD research. Coaching is available in English, Arabic
            and French, and every service is built around your own course, your own work and your own
            deadlines.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact" withArrow>
              Book a consultation
            </CTAButton>
            <WhatsAppButton label="Ask about a service" variant="outline" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial py-14 md:py-20">
          <p className="eyebrow">All services</p>
          <h2 className="mt-3 max-w-2xl text-2xl leading-snug sm:text-3xl">
            Nine ways we support ambitious students
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                index={i}
                title={s.name}
                description={s.description}
                to={`/services/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-paper">
        <div className="container-editorial py-14 md:py-20">
          <p className="eyebrow">Disciplines</p>
          <h2 className="mt-3 max-w-2xl text-2xl leading-snug sm:text-3xl">
            All majors. All courses. All academic levels.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We support students across virtually every university discipline, from engineering and
            medicine to business, computer science, architecture, arts, sciences, law and the
            social sciences.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {majorCategories.map((cat) => (
              <div key={cat.name} className="bg-card p-6">
                <h3 className="text-base text-foreground">{cat.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cat.subjects.join(" · ")}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-foreground">
            Don&apos;t see your major?{" "}
            <Link to="/contact" className="font-semibold underline underline-offset-4">
              Contact us
            </Link>{" "}
            — we support many additional disciplines.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-ink text-ink-foreground">
        <div className="container-editorial py-14 md:py-20">
          <p className="eyebrow">Technical support</p>
          <h2 className="mt-3 max-w-2xl text-2xl leading-snug sm:text-3xl">
            Technical tools &amp; project support
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/75">
            Guidance and tutoring for students working with specialist software, technical tools,
            modelling, data analysis and practical university projects.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {technicalAreas.map((t) => (
              <li
                key={t}
                className="border border-ink-foreground/25 px-3 py-1.5 text-sm text-ink-foreground/90"
              >
                {t}
              </li>
            ))}
          </ul>
          <h3 className="mt-12 text-xl text-ink-foreground">Physical models &amp; project builds</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-foreground/75">
            Guidance and tutoring for {practicalProjects.join(", ").toLowerCase()} — students build
            and submit their own work.
          </p>
          <p className="mt-8 text-xs leading-relaxed text-ink-foreground/60">
            We are an independent academic coaching service and are not certified by, affiliated
            with or partnered with any named software company.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial grid gap-6 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-14">
          <div>
            <p className="eyebrow">Languages</p>
            <h2 className="mt-3 max-w-2xl text-2xl leading-snug sm:text-3xl">
              Academic support in English, Arabic &amp; French
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Students can receive explanations, tutoring, coaching and guidance in English, Arabic
              or French. Sessions are online, across multiple time zones.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {["English", "العربية · Arabic", "Français · French"].map((l) => (
              <li
                key={l}
                className="border border-border bg-card px-4 py-2.5 font-display text-base text-foreground"
              >
                {l}
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section className="border-b border-border bg-paper">
        <div className="container-editorial grid gap-10 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-2xl leading-snug sm:text-3xl">Choosing the right support</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-editorial py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-2xl leading-snug sm:text-3xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Send us a short message about your course and your deadline. We will point you to the
            right service — or tell you honestly if we are not the right fit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact" withArrow>
              Book a consultation
            </CTAButton>
            <WhatsAppButton variant="outline" />
          </div>
        </div>
      </section>
    </>
  );
}
