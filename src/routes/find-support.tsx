import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail, ShieldCheck } from "lucide-react";
import { z } from "zod";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { findSupportCopy } from "@/components/FindSupportCTA";
import { site } from "@/lib/site";
import { socialMeta } from "@/lib/seo";

const title = "Find Support for My Course | Yes We Do Your Projects";
const description =
  "Tell us your university, course and academic level and we'll help you find the right academic coaching, tutoring, research or technical project support.";
const url = "https://premium-pathfinder-coaching.lovable.app/find-support";

export const Route = createFileRoute("/find-support")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      ...socialMeta(title, description),
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: FindSupportPage,
});

const levels = ["Undergraduate / Bachelor's", "Master's", "PhD", "Other"];

const supportOptions = [
  "Assignment/coursework guidance",
  "Exam preparation",
  "Final-year/senior project",
  "Engineering project",
  "Architecture/design project",
  "Thesis/dissertation coaching",
  "PhD research guidance",
  "Research methodology",
  "SPSS/data analysis",
  "GIS",
  "AutoCAD",
  "Revit",
  "3ds Max",
  "Arduino",
  "Other",
];

const languages = ["English", "Arabic", "French"];

const schema = z.object({
  university: z.string().trim().min(2, "Please enter your university or institution").max(120),
  country: z.string().trim().min(2, "Please enter your country").max(80),
  major: z.string().trim().min(2, "Please enter your major or subject").max(120),
  course: z.string().trim().min(1, "Please enter your course name or code").max(120),
  level: z.string().trim().min(1, "Please select your academic level"),
  support: z.array(z.string()).min(1, "Please select at least one type of support"),
  language: z.string().trim().min(1, "Please select a preferred language"),
  description: z
    .string()
    .trim()
    .min(10, "Please describe briefly what you're working on")
    .max(1000, "Please keep this under 1000 characters"),
  whatsapp: z
    .string()
    .trim()
    .min(6, "Please enter your WhatsApp number")
    .max(25)
    .regex(/^[+0-9()\s-]+$/, "Please enter a valid phone number"),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const initial: FormValues = {
  university: "",
  country: "",
  major: "",
  course: "",
  level: "",
  support: [],
  language: "",
  description: "",
  whatsapp: "",
};

function buildMessage(v: FormValues) {
  return [
    "Hi Yes We Do Your Projects, I'd like academic support.",
    "",
    `University: ${v.university}`,
    `Country: ${v.country}`,
    `Major: ${v.major}`,
    `Course: ${v.course}`,
    `Academic level: ${v.level}`,
    `Support needed: ${v.support.join(", ")}`,
    `Language: ${v.language}`,
    `My WhatsApp: ${v.whatsapp}`,
    "",
    "What I need help with:",
    v.description,
    "",
    "Please let me know what support is available.",
  ].join("\n");
}

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-ink";

function FindSupportPage() {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<{ wa: string; mail: string } | null>(null);

  function set<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function toggleSupport(option: string) {
    setValues((prev) => ({
      ...prev,
      support: prev.support.includes(option)
        ? prev.support.filter((s) => s !== option)
        : [...prev.support, option],
    }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setResult(null);
      return;
    }
    setErrors({});
    const message = buildMessage(parsed.data);
    setResult({
      wa: `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`,
      mail: `mailto:${site.email}?subject=${encodeURIComponent(
        `Academic support request — ${parsed.data.major} (${parsed.data.level})`,
      )}&body=${encodeURIComponent(message)}`,
    });
    requestAnimationFrame(() => {
      document.getElementById("support-options")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial py-12 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Find support" }]} />
          <p className="eyebrow mt-6">Course finder</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            Find Support for My Course
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {findSupportCopy}
          </p>
          <p className="mt-6 flex max-w-2xl gap-3 text-xs leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              We coach, tutor and give feedback. Students research, build and submit their own
              assessed work. Nothing you enter here is stored — your answers are only used to
              prepare a message you choose to send us.
            </span>
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial py-12 md:py-16">
          <form onSubmit={onSubmit} noValidate className="max-w-2xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="University / Institution" error={errors.university} id="university">
                <input
                  id="university"
                  className={fieldClass}
                  value={values.university}
                  maxLength={120}
                  onChange={(e) => set("university", e.target.value)}
                />
              </Field>
              <Field label="Country" error={errors.country} id="country">
                <input
                  id="country"
                  className={fieldClass}
                  value={values.country}
                  maxLength={80}
                  onChange={(e) => set("country", e.target.value)}
                />
              </Field>
              <Field label="Major / Subject" error={errors.major} id="major">
                <input
                  id="major"
                  className={fieldClass}
                  value={values.major}
                  maxLength={120}
                  onChange={(e) => set("major", e.target.value)}
                />
              </Field>
              <Field label="Course name or course code" error={errors.course} id="course">
                <input
                  id="course"
                  className={fieldClass}
                  value={values.course}
                  maxLength={120}
                  onChange={(e) => set("course", e.target.value)}
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field label="Academic level" error={errors.level} id="level">
                <select
                  id="level"
                  className={fieldClass}
                  value={values.level}
                  onChange={(e) => set("level", e.target.value)}
                >
                  <option value="">Select your level</option>
                  {levels.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <fieldset className="mt-8">
              <legend className="font-display text-base text-foreground">
                Support needed
                <span className="ml-2 text-xs text-muted-foreground">(select all that apply)</span>
              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {supportOptions.map((opt) => {
                  const checked = values.support.includes(opt);
                  return (
                    <label
                      key={opt}
                      className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors ${
                        checked
                          ? "border-ink bg-card text-foreground"
                          : "border-border bg-card/60 text-muted-foreground hover:border-ink/40"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="size-4 accent-current"
                        checked={checked}
                        onChange={() => toggleSupport(opt)}
                      />
                      {opt}
                    </label>
                  );
                })}
              </div>
              {errors.support && (
                <p className="mt-2 text-xs text-destructive">{errors.support}</p>
              )}
            </fieldset>

            <fieldset className="mt-8">
              <legend className="font-display text-base text-foreground">Preferred language</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {languages.map((l) => (
                  <label
                    key={l}
                    className={`flex cursor-pointer items-center gap-2 border px-4 py-2.5 text-sm transition-colors ${
                      values.language === l
                        ? "border-ink bg-card text-foreground"
                        : "border-border bg-card/60 text-muted-foreground hover:border-ink/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="language"
                      className="size-4 accent-current"
                      checked={values.language === l}
                      onChange={() => set("language", l)}
                    />
                    {l}
                  </label>
                ))}
              </div>
              {errors.language && (
                <p className="mt-2 text-xs text-destructive">{errors.language}</p>
              )}
            </fieldset>

            <div className="mt-8 grid gap-6">
              <Field
                label="Short description of what you're working on"
                error={errors.description}
                id="description"
              >
                <textarea
                  id="description"
                  rows={5}
                  maxLength={1000}
                  className={fieldClass}
                  value={values.description}
                  onChange={(e) => set("description", e.target.value)}
                  placeholder="e.g. Final-year civil engineering project on structural analysis — I need help planning the methodology and interpreting my results."
                />
              </Field>
              <Field label="Your WhatsApp number" error={errors.whatsapp} id="whatsapp">
                <input
                  id="whatsapp"
                  type="tel"
                  inputMode="tel"
                  maxLength={25}
                  className={fieldClass}
                  value={values.whatsapp}
                  onChange={(e) => set("whatsapp", e.target.value)}
                  placeholder="+971 50 000 0000"
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-md bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Get my support options
            </button>
          </form>
        </div>
      </section>

      <section id="support-options" className="bg-paper">
        <div className="container-editorial py-12 md:py-16">
          {result ? (
            <div className="max-w-2xl border border-border bg-card p-6 sm:p-8">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-3 font-display text-2xl leading-snug">
                Your request is ready to send
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We've prepared a summary of your course and what you're working on. Send it to us on
                WhatsApp or by email and a member of the team will review it and reply with the
                support options we can genuinely offer. We confirm availability only after we've
                read your request.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={result.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Send on WhatsApp
                </a>
                <a
                  href={result.mail}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Email us instead
                </a>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Prefer to write yourself? WhatsApp {site.whatsappNumber} or email {site.email}.
              </p>
            </div>
          ) : (
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Complete the form above and we'll prepare a summary you can send us on WhatsApp or by
              email. Requests are reviewed by a person — we don't use automated tutor matching.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-display text-base text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
