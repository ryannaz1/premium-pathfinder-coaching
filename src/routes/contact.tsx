import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site, mailtoHref } from "@/lib/site";

const title = "Contact Yes We Do Your Projects — Book an Academic Consultation";
const description =
  "Book a consultation or message an academic coach on WhatsApp. Email ryannazha@gmail.com or write to us using the contact form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const fieldClass =
  "mt-1.5 w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground";

const services = [
  "University Tutoring",
  "Academic Coaching",
  "Thesis & Dissertation Coaching",
  "Research Methodology",
  "Academic Writing Coaching",
  "Editing & Proofreading",
  "Exam Preparation",
  "SAT Preparation",
  "Research & Statistics Support",
  "Not sure yet",
];

const levels = ["Undergraduate", "Master's", "PhD", "High school / SAT", "Other"];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `WhatsApp: ${data.get("whatsapp")}`,
      `Country: ${data.get("country")}`,
      `University: ${data.get("university")}`,
      `Level of study: ${data.get("level")}`,
      `Service needed: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Academic coaching enquiry",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section className="bg-paper">
      <div className="container-editorial grid gap-12 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <p className="eyebrow mt-6">Contact</p>
          <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
            Book a consultation with an academic coach
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Tell us your course, level of study and what you need help with. We reply with an
            honest recommendation — WhatsApp is usually fastest.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <WhatsAppButton label="Chat with an academic coach" />
            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              <Mail className="size-4" aria-hidden="true" />
              {site.email}
            </a>
          </div>

          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="eyebrow">WhatsApp</dt>
              <dd className="mt-1 flex items-center gap-2 text-foreground">
                <MessageCircle className="size-4 text-accent" aria-hidden="true" />
                {site.whatsappNumber}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1 text-foreground">{site.email}</dd>
            </div>
            <div>
              <dt className="eyebrow">Instagram</dt>
              <dd className="mt-1">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4"
                >
                  @yeswedoyourprojects
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="border border-border bg-card p-6 sm:p-8">
          <h2 className="text-2xl">Send us a message</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="WhatsApp number" name="whatsapp" />
            <Field label="Country" name="country" />
            <Field label="University or school" name="university" />
            <div>
              <label htmlFor="level" className="text-sm font-semibold text-foreground">
                Level of study
              </label>
              <select id="level" name="level" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                {levels.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service" className="text-sm font-semibold text-foreground">
                Service needed
              </label>
              <select id="service" name="service" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground">
                Message
              </label>
              <textarea id="message" name="message" rows={5} className={fieldClass} required />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-ink-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Send enquiry
          </button>
          <p aria-live="polite" className="mt-4 text-xs text-muted-foreground">
            {sent
              ? "Your email app should now be open with your enquiry ready to send."
              : "Submitting opens your email app with the details pre-filled."}
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-foreground">
        {label}
science      </label>
      <input id={name} name={name} type={type} required={required} className={fieldClass} />
    </div>
  );
}
