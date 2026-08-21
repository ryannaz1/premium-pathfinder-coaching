import { createFileRoute } from "@tanstack/react-router";
import { Compass, Handshake, ShieldCheck, Sparkles } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site, mailtoHref } from "@/lib/site";

const title = "About Yes We Do Your Projects — Premium Academic Coaching";
const description =
  "Yes We Do Your Projects is a premium academic coaching practice supporting university and Master's students in the UK, UAE, Canada and Lebanon with tutoring, research and writing guidance.";

const principles = [
  {
    icon: ShieldCheck,
    title: "Academic integrity first",
    copy: "We coach, teach and give feedback. We do not write, complete or submit academic work on a student's behalf. Every piece of work a student submits is their own, and we are explicit about that boundary before anyone books.",
  },
  {
    icon: Compass,
    title: "Honest recommendations",
    copy: "If coaching is not what a student needs, we say so. If a subject or deadline is outside what we can genuinely support, we say that too, at consultation rather than after payment.",
  },
  {
    icon: Handshake,
    title: "One-to-one, never generic",
    copy: "No group classes, no recycled slide decks, no template answers. Support is built around your modules, your marking criteria and the way your department actually assesses.",
  },
  {
    icon: Sparkles,
    title: "Skills that outlast the deadline",
    copy: "The measure of good coaching is that a student needs less of it over time. We aim to make you independent, not dependent.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
          <p className="eyebrow mt-6">About</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            A premium academic coaching practice, not an essay service
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Yes We Do Your Projects began with a simple observation: most students who fall behind
            at university are not lacking intelligence or effort. They are missing structure,
            feedback and someone who will explain what the marking criteria actually reward. That
            is what we provide, one student at a time.
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
        <div className="container-editorial grid gap-10 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 text-2xl leading-snug sm:text-3xl">How we work</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              We deliver one-to-one academic coaching and tutoring online, across four regions with
              genuinely different academic cultures: the United Kingdom, the UAE, Quebec and
              Lebanon. Every engagement starts with a consultation, because the right support for a
              first-year undergraduate losing marks on structure is nothing like the right support
              for a Master's student three weeks from a methodology chapter.
            </p>
            <p>
              From there we agree a plan: what we will cover, how often we meet, and what progress
              should look like. Sessions are scheduled in your time zone. Between sessions we give
              structured feedback on the work you have written yourself, so you can see precisely
              what to change and why it matters to your grade.
            </p>
            <p>
              Our Instagram community — over thirteen thousand students — is deliberately light in
              tone. The coaching behind it is not. Students come for the humour and stay because the
              academic support is serious, specific and honest about its limits.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial py-14 md:py-20">
          <p className="eyebrow">Our principles</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
            What we will and will not do
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:mt-14 md:grid-cols-2">
            {principles.map(({ icon: Icon, title: t, copy }) => (
              <div key={t} className="bg-card p-6 sm:p-8">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-xl leading-snug text-foreground">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-editorial py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
            Speak to us before you commit to anything
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
            Consultations are conversations, not sales calls. Message us on WhatsApp or email{" "}
            <a href={mailtoHref} className="underline underline-offset-4 hover:text-ink-foreground">
              {site.email}
            </a>
            .
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
