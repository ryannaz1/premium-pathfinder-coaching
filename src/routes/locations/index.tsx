import { createFileRoute } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { locations } from "@/lib/locations";

const title = "Locations — UK, Dubai, Abu Dhabi, Montreal & Lebanon | Yes We Do Your Projects";
const description =
  "Online academic coaching and university tutoring for students in the United Kingdom, Dubai, Abu Dhabi, Montreal and Quebec, and Lebanon — delivered in your time zone.";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://premium-pathfinder-coaching.lovable.app/locations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://premium-pathfinder-coaching.lovable.app/locations" }],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Locations" }]} />
          <p className="eyebrow mt-6">Locations</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            Academic coaching across four academic cultures
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Coaching is delivered online and scheduled in your time zone. What changes between
            regions is not the delivery but the academic system: how work is graded, which
            referencing conventions apply, and what independent research is expected to look like.
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
          <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">Where we work</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
            {locations.map((l) => (
              <ServiceCard
                key={l.slug}
                title={l.place}
                description={l.short}
                to={`/locations/${l.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-editorial py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
            Studying somewhere else?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
            These are the regions we know best, but coaching is online. Message us with your
            university and time zone and we will tell you honestly whether we are the right fit.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton label="Chat on WhatsApp" />
          </div>
        </div>
      </section>
    </>
  );
}
