import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { FAQ } from "@/components/FAQ";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getService, type ServiceContent } from "@/lib/services";

export function ServicePage({ service }: { service: ServiceContent }) {
  const related = service.related.map(getService).filter(Boolean);

  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial section-y">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: service.name },
            ]}
          />
          <p className="eyebrow mt-6">{service.name}</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            {service.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {service.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact" withArrow>
              Book a consultation
            </CTAButton>
            <WhatsAppButton label="Chat with an academic coach" variant="outline" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial grid gap-10 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div>
            <p className="eyebrow">Who it is for</p>
            <h2 className="mt-3 text-2xl leading-snug sm:text-3xl">
              Is {service.name} right for you?
            </h2>
          </div>
          <ul className="space-y-4">
            {service.forWho.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-paper">
        <div className="container-editorial section-y">
          <p className="eyebrow">What support includes</p>
          <h2 className="mt-3 max-w-2xl text-2xl leading-snug sm:text-3xl">
            What we cover together
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((item) => (
              <div key={item.title} className="surface-card p-6 sm:p-8">
                <h3 className="text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial section-y">
          <p className="eyebrow">How the process works</p>
          <h2 className="mt-3 max-w-2xl text-2xl leading-snug text-foreground sm:text-3xl">
            From first message to real progress
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step.title} className="border-t border-border pt-5">
                <span className="font-display text-3xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border bg-paper">
        <div className="container-editorial grid gap-10 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-2xl leading-snug sm:text-3xl">Common questions</h2>
          </div>
          <FAQ items={service.faqs} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-b border-border bg-sand">
          <div className="container-editorial section-y">
            <p className="eyebrow">Related support</p>
            <h2 className="mt-3 text-2xl leading-snug sm:text-3xl">Students often combine this with</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/services/${r.slug}` as never}
                  className="surface-card p-6 transition-colors hover:border-accent/50 sm:p-8"
                >
                  <h3 className="text-lg text-foreground">{r.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-paper">
        <div className="container-editorial py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-2xl leading-snug sm:text-3xl">
            Talk to us about {service.name}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Tell us your course, level of study and deadline. We will tell you honestly whether we
            can help and how.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact" withArrow>
              Book a consultation
            </CTAButton>
            <WhatsAppButton variant="outline" />
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Coaching and guidance only. You remain responsible for producing and submitting your own
            academic work.
          </p>
        </div>
      </section>
    </>
  );
}
