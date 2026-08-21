import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { site, whatsappHref, mailtoHref } from "@/lib/site";

const serviceLinks = [
  { label: "University Tutoring", to: "/services/university-tutoring" },
  { label: "Academic Coaching", to: "/services/academic-coaching" },
  { label: "Thesis & Dissertation Coaching", to: "/services/thesis-dissertation-coaching" },
  { label: "Academic Writing Coaching", to: "/services/academic-writing-coaching" },
  { label: "SAT Preparation", to: "/services/sat-preparation" },
];

const locationLinks = [
  { label: "United Kingdom", to: "/locations" },
  { label: "Dubai", to: "/locations" },
  { label: "Abu Dhabi", to: "/locations" },
  { label: "Montreal", to: "/locations" },
  { label: "Lebanon", to: "/locations" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Who We Help", to: "/who-we-help" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

function Column({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h3 className="text-[0.7rem] font-sans font-semibold uppercase tracking-[0.18em] text-ink-foreground/60">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to as never}
              className="text-sm text-ink-foreground/85 transition-colors hover:text-ink-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-editorial py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl">Yes We Do Your Projects</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/75">
              Premium one-to-one academic coaching, tutoring and research guidance for university
              and Master&apos;s students in the UK, the UAE, Canada and Lebanon.
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
                Yes We Do Your Projects on Facebook
              </a>
            </div>
          </div>

          <Column title="Services" links={serviceLinks} />
          <Column title="Locations" links={locationLinks} />
          <Column title="Company" links={companyLinks} />
        </div>

        <div className="mt-12 border-t border-ink-foreground/15 pt-6">
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
