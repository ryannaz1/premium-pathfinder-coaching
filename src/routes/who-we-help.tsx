import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, GraduationCap, LineChart, NotebookPen, Presentation, Users } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const title = "Who We Help — University, Master's & PhD Students | Yes We Do Your Projects";
const description =
  "We coach undergraduates, Master's students, PhD researchers, international students, exam candidates and families seeking premium academic support across all majors and courses, in English, Arabic and French.";

const groups = [
  {
    icon: GraduationCap,
    label: "Undergraduate students",
    copy: "You understand the material in lectures but lose marks in assessment: unclear structure, thin argument, weak referencing or running out of time. Coaching works on the gap between knowing something and being graded well on it.",
    needs: ["All majors and courses", "Essay and coursework structure", "Module-level subject tutoring", "Revision and exam technique"],
  },
  {
    icon: NotebookPen,
    label: "Master's students",
    copy: "A Master's raises the bar on independence, critical depth and research quality — usually in less time. We help you plan backwards from submission and keep momentum between supervisor meetings, including for senior projects and theses.",
    needs: ["Master's theses and dissertations", "Research methodology", "Critical academic writing"],
  },
  {
    icon: Users,
    label: "International students",
    copy: "You are adapting to a new academic system, a different marking culture and, often, writing at university level in an additional language. We make the unwritten expectations explicit.",
    needs: ["Academic English and register", "Referencing and integrity conventions", "Understanding marking criteria"],
  },
  {
    icon: Presentation,
    label: "Exam and SAT candidates",
    copy: "High-stakes assessment rewards preparation strategy as much as knowledge. We start with a diagnostic, target your weakest areas and rehearse under real conditions.",
    needs: ["Diagnostic assessment", "Targeted weak-area work", "Timing and exam technique"],
  },
  {
    icon: BookOpen,
    label: "Parents and families",
    copy: "You want serious, well-structured support and honest reporting rather than reassurance. We agree scope clearly and keep the coaching relationship with the student, because that is what builds independence.",
    needs: ["Clear scope and expectations", "Honest progress feedback", "Support that builds independence"],
  },
  {
    icon: LineChart,
    label: "Ambitious high performers",
    copy: "You are already doing well and want a sharper edge: stronger arguments, better research design, and a coach who will tell you where the work is merely good. We support students at all levels, from undergraduates to PhD researchers.",
    needs: ["Advanced feedback on drafts", "Research design and rigour", "Long-term academic strategy"],
  },
];

const faqs: FaqItem[] = [
  {
    question: "Do I need to be struggling to work with a coach?",
    answer:
      "No. Roughly as many students come to us doing well and wanting to do better as come to us behind. Coaching is about raising the ceiling as much as lifting the floor.",
  },
  {
    question: "Do you work with PhD researchers?",
    answer:
      "We support doctoral researchers with methodology, structure and writing feedback. We do not supervise doctoral research, and we say so clearly at consultation if we are not the right fit.",
  },
  {
    question: "Can a parent arrange coaching for their child?",
    answer:
      "Yes. Parents frequently arrange the consultation. We keep scope, progress and expectations transparent with the parent while working directly with the student.",
  },
  {
    question: "Will you write anything for me?",
    answer:
      "No. We coach, teach and give feedback so you produce your own work. That boundary is not negotiable and it protects your academic standing.",
  },
];

export const Route = createFileRoute("/who-we-help")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/who-we-help" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/who-we-help" }],
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
  component: WhoWeHelpPage,
});

function WhoWeHelpPage() {
  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Who We Help" }]} />
          <p className="eyebrow mt-6">Who we help</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            Students and researchers who take academic work seriously
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We work with students across all majors, courses and assignment types — from first-year
            undergraduate coursework to senior projects, Master's dissertations and PhD research.
            Coaching is available in English, Arabic and French. What our students share is a
            willingness to do the work themselves and a wish to do it properly, with an expert
            alongside them.
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
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {groups.map(({ icon: Icon, label, copy, needs }) => (
              <div key={label} className="bg-card p-6 sm:p-8">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h2 className="mt-4 text-xl leading-snug text-foreground">{label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <ul className="mt-5 space-y-2">
                  {needs.map((n) => (
                    <li key={n} className="border-t border-border pt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial py-14 md:py-20">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Before you get in touch
          </h2>
          <div className="mt-10 max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-editorial py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
            Not sure which of these is you?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
            Message us with your course and what you are finding difficult. We will tell you which
            kind of support fits — or that you do not need us.
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
