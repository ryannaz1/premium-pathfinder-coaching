import { Link } from "@tanstack/react-router";
import { ChevronDown, Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { site, whatsappHref, mailtoHref } from "@/lib/site";
import { landings, type LandingGroup } from "@/lib/landing";
import { useIsMobile } from "@/hooks/use-mobile";

const directoryGroups: LandingGroup[] = [
  "Locations",
  "Subjects",
  "Services",
  "Software",
  "Models",
  "Students",
];

const serviceLinks = [
  { label: "University Tutoring", to: "/services/university-tutoring" },
  { label: "Academic Coaching", to: "/services/academic-coaching" },
  { label: "Assignment & Coursework Guidance", to: "/services/university-tutoring" },
  { label: "Research Project Guidance", to: "/services/research-methodology" },
  { label: "Senior & Final-Year Projects", to: "/services" },
  { label: "Capstone Projects", to: "/services" },
  { label: "Thesis & Dissertation Coaching", to: "/services/thesis-dissertation-coaching" },
  { label: "PhD Research Guidance", to: "/services/research-methodology" },
  { label: "Academic Writing Coaching", to: "/services/academic-writing-coaching" },
  { label: "Research Methodology", to: "/services/research-methodology" },
  { label: "Data Analysis & Statistics", to: "/services/research-statistics-support" },
  { label: "Engineering Project Support", to: "/services" },
  { label: "Architecture & Design Project Support", to: "/services" },
  { label: "Technical Software Support", to: "/services" },
  { label: "Editing & Proofreading", to: "/services/editing-proofreading" },
  { label: "Exam Preparation", to: "/services/exam-preparation" },
  { label: "SAT Preparation", to: "/services/sat-preparation" },
];

const locationLinks = [
  { label: "United Kingdom", to: "/locations/uk" },
  { label: "Dubai", to: "/locations/dubai" },
  { label: "Abu Dhabi", to: "/locations/abu-dhabi" },
  { label: "Montreal", to: "/locations/montreal" },
  { label: "Lebanon", to: "/locations/lebanon" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Who We Help", to: "/who-we-help" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

const languageLinks = [
  { label: "English", to: "/" },
  { label: "العربية", to: "/ar" },
  { label: "Français", to: "/fr" },
];

/**
 * Collapsible on mobile, always expanded from md up.
 * Rendered open during SSR so every link stays in the crawlable HTML.
 */
function FooterGroup({
  title,
  links,
  collapsible = true,
}: {
  title: string;
  links: { label: string; to: string }[];
  collapsible?: boolean;
}) {
  const isMobile = useIsMobile();
  const open = collapsible ? !isMobile : true;

  return (
    <details
      open={open}
      className="group border-b border-ink-foreground/10 py-3 md:border-0 md:py-0"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between text-[0.7rem] font-sans font-semibold uppercase tracking-[0.18em] text-ink-foreground/60 md:cursor-default md:pointer-events-none">
        {title}
        <ChevronDown
          className="size-4 shrink-0 transition-transform group-open:rotate-180 md:hidden"
          aria-hidden="true"
        />
      </summary>
      <ul className="mt-3 space-y-2.5 md:mt-4">
        {links.map((l) => (
          <li key={`${title}-${l.label}`}>
            <Link
              to={l.to as never}
              className="text-sm text-ink-foreground/85 transition-colors hover:text-ink-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-editorial py-12 pb-28 md:py-16 md:pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="Yes We Do Your Projects crowned chimpanzee logo"
                width={56}
                height={56}
                loading="lazy"
                className="size-12 shrink-0 object-contain"
              />
              <p className="font-display text-2xl">Yes We Do Your Projects</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/75">
              Premium one-to-one academic coaching, tutoring, research guidance and technical
              project support for students at every academic level — from undergraduate study to
              Master&apos;s and PhD research — across the UK, UAE, Canada, Lebanon and
              internationally. Support is available in English, Arabic and French.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-foreground/85 hover:text-ink-foreground"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                {site.whatsappNumber}
              </a>
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 text-ink-foreground/85 hover:text-ink-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-foreground/85 hover:text-ink-foreground"
              >
                <Instagram className="size-4" aria-hidden="true" />
                @yeswedoyourprojects
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-foreground/85 hover:text-ink-foreground"
              >
                <Facebook className="size-4" aria-hidden="true" />
                Facebook
              </a>
            </div>
          </div>

          <FooterGroup title="Services" links={serviceLinks} />
          <FooterGroup title="Locations" links={locationLinks} />
          <div>
            <FooterGroup title="Company" links={companyLinks} />
            <div className="mt-3 md:mt-8">
              <FooterGroup title="Language" links={languageLinks} collapsible={false} />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-ink-foreground/15 pt-8">
          <h3 className="text-[0.7rem] font-sans font-semibold uppercase tracking-[0.18em] text-ink-foreground/60">
            Explore academic support
          </h3>
          <div className="mt-4 grid gap-0 md:mt-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {directoryGroups.map((group) => (
              <FooterGroup
                key={group}
                title={group}
                links={landings
                  .filter((l) => l.group === group)
                  .map((l) => ({ label: l.label, to: `/${l.slug}` }))}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-ink-foreground/15 pt-6">
          <p className="text-xs leading-relaxed text-ink-foreground/60">
            Yes We Do Your Projects provides coaching, tutoring and guidance only. We do not write,
            complete or submit academic work on behalf of students; students remain responsible for
            producing and submitting their own work.
          </p>
          <p className="mt-4 text-xs text-ink-foreground/50">
            © {new Date().getFullYear()} Yes We Do Your Projects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
