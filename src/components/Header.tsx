import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { navLinks, whatsappHref } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-editorial flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-base leading-tight tracking-tight text-foreground sm:text-lg"
          onClick={() => setOpen(false)}
        >
          <img
            src={logoAsset.url}
            alt="Yes We Do Your Projects crowned chimpanzee logo"
            width={44}
            height={44}
            className="size-9 shrink-0 object-contain sm:size-11"
          />
          <span>
          Yes We Do
          <span className="block text-[0.65rem] font-sans font-semibold uppercase tracking-[0.22em] text-accent">
            Your Projects
          </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground underline-offset-4 hover:underline"
          >
            WhatsApp us
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-ink-foreground transition-opacity hover:opacity-90"
          >
            Book a consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-editorial flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base text-foreground last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-ink px-4 py-3 text-sm font-semibold text-ink-foreground"
              >
                Book a consultation
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border px-4 py-3 text-sm font-semibold text-foreground"
              >
                Chat on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
