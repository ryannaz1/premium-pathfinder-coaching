import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { whatsappHref, mailtoHref, site } from "@/lib/site";

export type LocalizedSection = {
  heading: string;
  intro?: string;
  items?: { title: string; copy: string }[];
  paragraphs?: string[];
};

export type LocalizedPageContent = {
  dir: "rtl" | "ltr";
  lang: "ar" | "fr";
  eyebrow: string;
  h1: string;
  intro: string;
  primaryCta: string;
  whatsappCta: string;
  sections: LocalizedSection[];
  faqHeading: string;
  faqs: { question: string; answer: string }[];
  integrityHeading: string;
  integrity: string;
  closingHeading: string;
  closingCopy: string;
  contactHeading: string;
  englishNote: string;
  englishHref: string;
};

export function LocalizedPage({ content }: { content: LocalizedPageContent }) {
  const {
    dir,
    lang,
    eyebrow,
    h1,
    intro,
    primaryCta,
    whatsappCta,
    sections,
    faqHeading,
    faqs,
    integrityHeading,
    integrity,
    closingHeading,
    closingCopy,
    contactHeading,
    englishNote,
    englishHref,
  } = content;

  return (
    <div dir={dir} lang={lang} className={dir === "rtl" ? "text-right" : undefined}>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-editorial section-y">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl md:text-5xl">{h1}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/find-support"
              className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-opacity hover:opacity-90"
            >
              {primaryCta}
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50"
            >
              <MessageCircle className="size-4 text-whatsapp" aria-hidden="true" />
              {whatsappCta}
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {englishNote}{" "}
            <Link
              to={englishHref as never}
              className="font-semibold text-foreground underline underline-offset-4"
            >
              English
            </Link>
          </p>
        </div>
      </section>

      {sections.map((section, i) => (
        <section
          key={section.heading}
          className={`border-b border-border ${i % 2 === 1 ? "bg-secondary/30" : "bg-background"}`}
        >
          <div className="container-editorial section-y">
            <h2 className="text-2xl leading-tight sm:text-3xl">{section.heading}</h2>
            {section.intro && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {section.intro}
              </p>
            )}
            {section.paragraphs?.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {p}
              </p>
            ))}
            {section.items && (
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border bg-card p-5 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="border-b border-border bg-background">
        <div className="container-editorial section-y">
          <h2 className="text-2xl leading-tight sm:text-3xl">{faqHeading}</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-foreground sm:text-base">
                  {f.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="container-editorial section-y">
          <h2 className="text-2xl leading-tight sm:text-3xl">{integrityHeading}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {integrity}
          </p>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-editorial py-14 md:py-20">
          <h2 className="max-w-2xl text-2xl leading-tight sm:text-3xl">{closingHeading}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
            {closingCopy}
          </p>
          <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-foreground/60">
            {contactHeading}
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" dir="ltr">
              {site.whatsappNumber}
            </a>
            <a href={mailtoHref} dir="ltr">
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
