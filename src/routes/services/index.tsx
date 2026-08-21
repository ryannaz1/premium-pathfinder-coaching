import { createFileRoute } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { services } from "@/lib/services";

const title = "Academic Coaching & Tutoring Services | Yes We Do Your Projects";
const description =
  "University tutoring, academic coaching, thesis and dissertation coaching, research methodology, academic writing, editing, exam preparation, SAT preparation and statistics support.";

const faqs: FaqItem[] = [
  {
    question: "Which service do I need?",
    answer:
      "If you need subject understanding, start with university tutoring. If you need structure, planning and accountability, choose academic coaching. For a dissertation, thesis coaching plus research methodology is the usual combination. Tell us your situation and we will recommend honestly.",
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
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
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
            Expert one-to-one support across tutoring, coaching, research, academic writing,
            editing, exam preparation and SAT preparation. Every service is built around your own
            course, your own work and your own deadlines.
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
