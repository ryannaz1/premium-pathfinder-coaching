import { createFileRoute, Link } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { socialMeta } from "@/lib/seo";

const title = "Academic Resources & Study Guides | Yes We Do Your Projects";
const description =
  "Practical guidance on academic writing, dissertation planning, research methodology, referencing and exam preparation for undergraduate, Bachelor's, Master's and PhD students.";

const guides = [
  {
    heading: "How to read a marking rubric properly",
    copy: "Most lost marks are visible in the rubric before the essay is written. Map each criterion to a section of your plan, and check what weighting analysis carries relative to description. If a criterion says 'critical evaluation', a summary of the literature cannot score there, however well written it is.",
    link: { to: "/services/academic-writing-coaching", label: "Academic Writing Coaching" },
  },
  {
    heading: "Turning a topic into a research question",
    copy: "A topic is an area; a research question is answerable, bounded and arguable within your word count and timeframe. Narrow by population, context, period or variable until you can state what evidence would answer it — then check that the evidence is actually obtainable.",
    link: { to: "/services/thesis-dissertation-coaching", label: "Thesis & Dissertation Coaching" },
  },
  {
    heading: "Choosing and justifying a methodology",
    copy: "Method follows question, never the reverse. Write the justification first: why this design answers your question better than the obvious alternatives, and what its limitations are. Examiners reward a well-argued limitation far more than a method presented as flawless.",
    link: { to: "/services/research-methodology", label: "Research Methodology" },
  },
  {
    heading: "Planning backwards from a submission date",
    copy: "Fix the deadline, then place drafting, feedback and revision milestones in reverse. Reserve at least a fifth of your total time for revision and formatting. A plan that ends with 'write dissertation' in the final fortnight is not a plan.",
    link: { to: "/services/academic-coaching", label: "Academic Coaching" },
  },
  {
    heading: "Referencing without risking integrity",
    copy: "Record the source at the moment you take the note, not later. Paraphrase from your understanding rather than by rewording the original sentence. When in doubt, cite — over-citation is a stylistic issue; under-citation is a misconduct issue.",
    link: { to: "/services/editing-proofreading", label: "Editing & Proofreading" },
  },
  {
    heading: "Revising for high-stakes exams",
    copy: "Retrieval beats rereading. Test yourself under timed conditions early, when it is uncomfortable, then use the errors to direct your revision. For the SAT specifically, pacing practice matters as much as content review.",
    link: { to: "/services/exam-preparation", label: "Exam Preparation" },
  },
];

const faqs: FaqItem[] = [
  {
    question: "Are these resources a substitute for coaching?",
    answer:
      "They are a starting point. General guidance cannot see your rubric, your draft or your supervisor's feedback, which is where most of the useful detail lives.",
  },
  {
    question: "Will you publish templates or example essays?",
    answer:
      "No. Model answers invite copying and put students at risk. We publish method and principles, and give feedback on the work you produce yourself.",
  },
];

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://premium-pathfinder-coaching.lovable.app/resources" },
      ...socialMeta(title, description),
    ],
    links: [{ rel: "canonical", href: "https://premium-pathfinder-coaching.lovable.app/resources" }],
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
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources" }]} />
          <p className="eyebrow mt-6">Resources</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            Practical academic guidance you can use today
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Short, honest notes on the parts of university work that decide grades: rubrics,
            research questions, methodology, planning, referencing and revision. No templates, no
            model answers — method you can apply to your own work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact" withArrow>
              Book a consultation
            </CTAButton>
            <WhatsAppButton label="Chat on WhatsApp" variant="outline" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-editorial py-14 md:py-20">
          <p className="eyebrow">Student guides</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
            In-depth guides you can work through
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {articles.map((a) => (
              <article key={a.slug} className="bg-card p-6 sm:p-8">
                <p className="eyebrow">
                  {a.category} · {a.readingTime}
                </p>
                <h3 className="mt-3 text-xl leading-snug text-foreground">
                  <Link
                    to={`/resources/${a.slug}` as never}
                    className="underline-offset-4 hover:underline"
                  >
                    {a.h1}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
                <Link
                  to={`/resources/${a.slug}` as never}
                  className="mt-5 inline-block text-sm font-semibold text-foreground underline underline-offset-4 hover:text-accent"
                >
                  Read the guide
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-editorial py-14 md:py-20">
          <p className="eyebrow">Quick notes</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Short answers to recurring questions
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {guides.map((g) => (
              <article key={g.heading} className="bg-card p-6 sm:p-8">
                <h2 className="text-xl leading-snug text-foreground">{g.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.copy}</p>
                <Link
                  to={g.link.to as never}
                  className="mt-5 inline-block text-sm font-semibold text-foreground underline underline-offset-4 hover:text-accent"
                >
                  {g.link.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial py-14 md:py-20">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">About these resources</h2>
          <div className="mt-10 max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-editorial py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
            Want this applied to your own work?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
            Bring your brief, your rubric or your draft to a consultation and we will show you
            exactly where the marks are.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact" variant="accent">
              Book a consultation
            </CTAButton>
            <WhatsAppButton
              label="Chat on WhatsApp"
              variant="ghost"
              className="text-ink-foreground hover:bg-ink-foreground/10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
