import { Link } from "@tanstack/react-router";
import { Check, Globe, ShieldCheck } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { FAQ } from "@/components/FAQ";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { LandingContent } from "@/lib/landing";

const guideBySlug: Record<string, { label: string; to: string }> = {
  "spss-statistics-help": {
    label: "Read the guide: SPSS for Dissertation Data Analysis",
    to: "/resources/spss-dissertation-data-analysis-guide",
  },
  "data-analysis-statistics": {
    label: "Read the guide: SPSS for Dissertation Data Analysis",
    to: "/resources/spss-dissertation-data-analysis-guide",
  },
  "research-methodology-support": {
    label: "Read the guide: How to Choose a Dissertation Methodology",
    to: "/resources/how-to-choose-dissertation-methodology",
  },
  "research-proposal-support": {
    label: "Read the guide: How to Choose a Dissertation Methodology",
    to: "/resources/how-to-choose-dissertation-methodology",
  },
  "thesis-dissertation-coaching": {
    label: "Read the guide: How to Choose a Dissertation Methodology",
    to: "/resources/how-to-choose-dissertation-methodology",
  },
  "engineering-project-help": {
    label: "Read the guide: Engineering Final-Year Project",
    to: "/resources/engineering-final-year-project-guide",
  },
  "final-year-project-support": {
    label: "Read the guide: Engineering Final-Year Project",
    to: "/resources/engineering-final-year-project-guide",
  },
  "revit-project-help": {
    label: "Read the guide: Revit for Architecture Students",
    to: "/resources/revit-for-architecture-students",
  },
  "architecture-project-help": {
    label: "Read the guide: Revit for Architecture Students",
    to: "/resources/revit-for-architecture-students",
  },
  "architecture-maquette-help": {
    label: "Read the guide: Planning and Building an Architecture Maquette",
    to: "/resources/architecture-maquette-guide",
  },
  "physical-project-models": {
    label: "Read the guide: Planning and Building an Architecture Maquette",
    to: "/resources/architecture-maquette-guide",
  },
  "building-model-help": {
    label: "Read the guide: Planning and Building an Architecture Maquette",
    to: "/resources/architecture-maquette-guide",
  },
};

export function LandingPage({ content }: { content: LandingContent }) {
  const guide = guideBySlug[content.slug];
  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial section-y">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: content.label }]} />
          <p className="eyebrow mt-6">{content.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            {content.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {content.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact" withArrow>
              Book a consultation
            </CTAButton>
            <WhatsAppButton label="Chat on WhatsApp" variant="outline" />
          </div>
          {guide && (
            <p className="mt-6 text-sm text-muted-foreground">
              <Link
                to={guide.to as never}
                className="font-semibold text-foreground underline underline-offset-4 hover:text-accent"
              >
                {guide.label}
              </Link>
            </p>
          )}
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-editorial section-y">
          <p className="eyebrow">What the support covers</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
            How we help with {content.label.toLowerCase()}
          </h2>
          <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2">
            {content.highlights.map((h) => (
              <div key={h.title} className="surface-card p-6 sm:p-8">
                <h3 className="text-xl leading-snug text-foreground">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial section-y">
          <div className="grid gap-10 md:grid-cols-2">
            {content.lists.map((list) => (
              <div key={list.heading}>
                <h2 className="text-2xl leading-snug sm:text-3xl">{list.heading}</h2>
                <ul className="mt-6 space-y-3">
                  {list.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-editorial grid gap-4 py-0 md:grid-cols-3">
          <div className="surface-card p-6 sm:p-8">
            <p className="eyebrow">Academic levels</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {content.levelsNote}
            </p>
          </div>
          <div className="surface-card p-6 sm:p-8">
            <p className="eyebrow inline-flex items-center gap-2">
              <Globe className="size-4 text-accent" aria-hidden="true" />
              English · Arabic · French
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {content.languages}
            </p>
          </div>
          <div className="surface-card p-6 sm:p-8">
            <p className="eyebrow inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
              Academic integrity
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {content.integrity}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-paper">
        <div className="container-editorial grid gap-10 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-2xl leading-snug sm:text-3xl">Common questions</h2>
          </div>
          <FAQ items={content.faqs} />
        </div>
      </section>

      {content.related.length > 0 && (
        <section className="border-b border-border bg-sand">
          <div className="container-editorial section-y">
            <p className="eyebrow">Related support</p>
            <h2 className="mt-3 text-2xl leading-snug sm:text-3xl">Students often also look at</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.related.map((r) => (
                <Link
                  key={r.to}
                  to={r.to as never}
                  className="surface-card p-6 transition-colors hover:border-accent/50 sm:p-8"
                >
                  <h3 className="text-base leading-snug text-foreground">{r.label}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-sand">
        <div className="container-editorial py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
            Talk to a coach about your {content.label.toLowerCase()}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Send us your course, level of study and deadline. We reply with an honest view of
            whether we can help and how — in English, Arabic or French.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact" variant="accent">
              Book a consultation
            </CTAButton>
            <WhatsAppButton
              label="Chat on WhatsApp"
              variant="ghost"
              className="text-foreground hover:bg-ink-foreground/10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
