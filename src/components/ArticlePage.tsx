import { Link } from "@tanstack/react-router";
import { Check, Clock, ShieldCheck } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { FAQ } from "@/components/FAQ";
import { FindSupportCTA } from "@/components/FindSupportCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { integrityNote, type Article, type Block } from "@/lib/articles";
import { mailtoHref, site } from "@/lib/site";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "p":
      return <p className="mt-5 text-base leading-relaxed text-muted-foreground">{block.text}</p>;
    case "h3":
      return <h3 className="mt-8 text-xl leading-snug text-foreground">{block.text}</h3>;
    case "list":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-foreground">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "note":
      return (
        <p className="mt-6 border-l-2 border-accent bg-sand px-5 py-4 text-base leading-relaxed text-foreground">
          {block.text}
        </p>
      );
    case "table":
      return (
        <figure className="mt-6">
          <div className="overflow-x-auto border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead className="bg-secondary">
                <tr>
                  {block.columns.map((c) => (
                    <th
                      key={c}
                      scope="col"
                      className="border-b border-border px-4 py-3 font-semibold text-foreground"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("|")} className="align-top">
                    {row.map((cell, i) => (
                      <td
                        key={`${cell}-${i}`}
                        className="border-b border-border px-4 py-3 leading-relaxed text-muted-foreground"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-xs text-muted-foreground">{block.caption}</figcaption>
          )}
        </figure>
      );
  }
}

export function ArticlePage({ article }: { article: Article }) {
  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial py-12 md:py-16">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Resources", to: "/resources" },
              { label: article.label },
            ]}
          />
          <p className="eyebrow mt-6">{article.category}</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            {article.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {article.intro}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-4" aria-hidden="true" />
            {article.readingTime}
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-editorial grid gap-12 py-12 md:py-16 lg:grid-cols-[1fr_18rem]">
          <article>
            <nav aria-label="On this page" className="border border-border bg-card p-6">
              <p className="eyebrow">On this page</p>
              <ul className="mt-4 space-y-2">
                {article.sections.map((s) => (
                  <li key={s.heading}>
                    <a
                      href={`#${slugify(s.heading)}`}
                      className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {article.sections.map((section) => (
              <section key={section.heading} className="mt-12 scroll-mt-24" id={slugify(section.heading)}>
                <h2 className="text-2xl leading-snug sm:text-3xl">{section.heading}</h2>
                {section.blocks.map((block, i) => (
                  <BlockView key={i} block={block} />
                ))}
              </section>
            ))}

            <section className="mt-12 scroll-mt-24" id="faq">
              <h2 className="text-2xl leading-snug sm:text-3xl">Frequently asked questions</h2>
              <div className="mt-6">
                <FAQ items={article.faqs} />
              </div>
            </section>

            {article.sources && article.sources.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl leading-snug sm:text-3xl">Further reading</h2>
                <ul className="mt-5 space-y-3">
                  {article.sources.map((s) => (
                    <li key={s.url} className="text-sm leading-relaxed text-muted-foreground">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <p className="mt-12 flex gap-3 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{integrityNote}</span>
            </p>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border border-border bg-card p-6">
              <p className="eyebrow">Related support</p>
              <ul className="mt-4 space-y-3">
                {article.related.map((r) => (
                  <li key={r.to}>
                    <Link
                      to={r.to as never}
                      className="text-sm text-foreground underline underline-offset-4 hover:text-accent"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 border border-border bg-sand p-6">
              <p className="eyebrow">More resources</p>
              <Link
                to="/resources"
                className="mt-4 inline-block text-sm text-foreground underline underline-offset-4 hover:text-accent"
              >
                All student guides
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-border bg-paper">
        <div className="container-editorial py-12 md:py-16">
          <FindSupportCTA tone="sand" className="mx-auto max-w-3xl" />
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-editorial py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
            Need help with your project?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us what you're studying, what you're working on and where you're stuck. We provide
            tutoring, coaching, research guidance and technical support while helping students
            develop their own academic work.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton label="Chat With an Academic Coach" />
            <CTAButton to="/contact" variant="accent">
              Book a Consultation
            </CTAButton>
          </div>
          <p className="mt-6 text-xs text-foreground/70">
            WhatsApp{" "}
            <a
              href={`https://wa.me/${site.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {site.whatsappNumber}
            </a>{" "}
            ·{" "}
            <a href={mailtoHref} className="underline underline-offset-4">
              {site.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
