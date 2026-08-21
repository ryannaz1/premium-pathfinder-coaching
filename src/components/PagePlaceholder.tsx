import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function PagePlaceholder({
  eyebrow,
  h1,
  intro,
}: {
  eyebrow: string;
  h1: string;
  intro: string;
}) {
  return (
    <section className="border-b border-border bg-paper">
      <div className="container-editorial py-16 md:py-24">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: eyebrow }]} />
        <p className="eyebrow mt-6">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">{h1}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CTAButton to="/contact" withArrow>
            Book a consultation
          </CTAButton>
          <WhatsAppButton variant="outline" />
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          This page is being built out in the next phase of the site.
        </p>
      </div>
    </section>
  );
}
