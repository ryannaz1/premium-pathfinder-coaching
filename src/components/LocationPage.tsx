import { Clock } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { FAQ } from "@/components/FAQ";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getService } from "@/lib/services";
import type { LocationContent } from "@/lib/locations";

export function LocationPage({ location }: { location: LocationContent }) {
  const popular = location.popular.map(getService).filter(Boolean);

  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial section-y">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Locations", to: "/locations" },
              { label: location.place },
            ]}
          />
          <p className="eyebrow mt-6">Academic coaching · {location.place}</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            {location.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {location.intro}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4 text-accent" aria-hidden="true" />
            {location.timezone}
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
        <div className="container-editorial section-y">
          <p className="eyebrow">What we take into account</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Coaching shaped around how {location.place} students are actually assessed
          </h2>
          <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2">
            {location.context.map((c) => (
              <div key={c.title} className="surface-card p-6 sm:p-8">
                <h3 className="text-xl leading-snug text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial grid gap-10 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div>
            <p className="eyebrow">Academic context</p>
            <h2 className="mt-3 text-2xl leading-snug sm:text-3xl">
              The system your work is graded in
            </h2>
          </div>
          <ul className="space-y-3">
            {location.systemNotes.map((note) => (
              <li
                key={note}
                className="border-b border-border pb-3 text-sm leading-relaxed text-muted-foreground"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-editorial section-y">
          <p className="eyebrow">Most requested here</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Support {location.place} students book most often
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
            {popular.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.name}
                description={s.description}
                to={`/services/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial section-y">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Questions from {location.place} students
          </h2>
          <div className="mt-10 max-w-3xl">
            <FAQ items={location.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-editorial py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
            Talk to a coach about studying in {location.place}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
            Tell us your university, level of study and deadline. We reply with an honest
            recommendation — no pressure, no obligation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact" variant="accent">
              Book a consultation
            </CTAButton>
            <WhatsAppButton label="Chat on WhatsApp" variant="ghost" className="border border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground/10" />
          </div>
        </div>
      </section>
    </>
  );
}
