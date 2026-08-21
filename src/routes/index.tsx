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
import { TestimonialCard } from "@/components/TestimonialCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site, whatsappHref } from "@/lib/site";

const title = "Premium Academic Coaching & University Tutoring | Yes We Do Your Projects";
const description =
  "One-to-one academic coaching, university tutoring, thesis and dissertation guidance, academic writing support and SAT preparation for students in the UK, UAE, Canada and Lebanon.";

const faqs: FaqItem[] = [
  {
    question: "Do you write assignments, dissertations or theses for students?",
    answer:
      "No. We are an academic coaching and tutoring service. We help you plan, research, structure, improve and understand your work through guidance and feedback. You remain fully responsible for producing and submitting your own academic work.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Undergraduate and Master's students, international students studying abroad, students preparing for important exams such as the SAT, and parents arranging premium academic support for their children.",
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
  {
    question: "Which subjects and disciplines do you cover?",
    answer:
      "We cover a broad range of university disciplines including business and management, social sciences, humanities, economics, health sciences and research-heavy programmes. If we are not the right fit for your subject, we will tell you honestly.",
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
  { icon: NotebookPen, label: "Master's students", copy: "Researchers navigating dissertations, methodology and higher academic standards." },
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
  { place: "United Kingdom", description: "Coaching for UK undergraduate and Master's students, including international students.", to: "/locations/uk" },
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
  { title: "Referencing and integrity", copy: "Citation conventions and originality rules vary by institution. We coach practice that is defensible under any similarity check." },
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
              Premium academic coaching for ambitious university students
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Yes We Do Your Projects provides expert one-to-one tutoring, academic coaching,
              research guidance, exam preparation and academic writing support — helping you
              produce stronger work of your own, with a coach beside you at every stage.
            </p>
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
      <Section eyebrow="What we help with" heading="Expert support across the work that actually decides your grade">
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
            See who we help
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


      {/* Testimonials */}
      <Section eyebrow="Student feedback" heading="In our students' words">
        <div className="grid gap-4 md:grid-cols-3">
          <TestimonialCard
            quote="The coaching sessions helped me understand how to structure my dissertation rather than panic about it. I finally felt in control of my own research."
            attribution="Layla M. — Master's student, Dubai"
          />
          <TestimonialCard
            quote="I was struggling to adapt to the UK academic style. My coach explained what examiners actually look for and how to improve my own writing without doing it for me."
            attribution="James T. — Undergraduate, United Kingdom"
          />
          <TestimonialCard
            quote="Working across time zones was easy. The feedback was clear, honest and focused on my weaknesses, which made my final work much stronger."
            attribution="Sophia R. — Student, Montreal"
          />
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
            Talk to an academic coach about your next deadline
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
            Tell us your course, your level of study and what you need help with. We will reply with
            an honest recommendation — no pressure, no obligation.
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
