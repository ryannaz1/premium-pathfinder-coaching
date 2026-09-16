import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FileText, ShieldCheck, UploadCloud, CheckCircle2, CreditCard } from "lucide-react";
import { z } from "zod";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { socialMeta, SITE_URL } from "@/lib/seo";
import { site, reportCheckoutUrl } from "@/lib/site";
import { supabase } from "@/integrations/supabase/client";

const title = "Document Scanning & Originality Report Upload | Yes We Do Your Projects";
const description =
  "Upload your draft securely for a document originality scan. Get a clear similarity report you can use to improve your own citations, paraphrasing and referencing before you submit.";
const url = `${SITE_URL}/document-scan`;

const faqs = [
  {
    question: "What happens to the document I upload?",
    answer:
      "Your file is uploaded to private, access-controlled storage. Only our team can open it, and it is used solely to produce your originality report and the feedback that goes with it.",
  },
  {
    question: "Does a similarity report mean my work is plagiarised?",
    answer:
      "No. A similarity score simply highlights text that matches other sources. Quoted material and reference lists often match legitimately. We help you read the report so you can correct genuine citation, paraphrasing and referencing issues yourself.",
  },
  {
    question: "Which file types can I upload?",
    answer:
      "PDF, DOCX, DOC, RTF and TXT files up to 25 MB. If your document is larger, split it or contact us on WhatsApp and we will advise.",
  },
  {
    question: "How is the report paid for?",
    answer:
      "Reports are paid for securely by card at checkout on yesweturnitin.online, our dedicated scanning service, in USD. You upload first, then complete checkout to have your report generated.",
  },
  {
    question: "Will you edit or rewrite my work?",
    answer:
      "No. We explain the report, point out where referencing or paraphrasing needs attention and coach you on how to fix it. You make every change and submit your own work.",
  },
];

export const Route = createFileRoute("/document-scan")({
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Document scanning and originality report",
              serviceType: "Academic originality report and citation feedback",
              description,
              url,
              provider: {
                "@type": "Organization",
                name: "Yes We Do Your Projects",
                url: SITE_URL,
                email: site.email,
              },
              availableLanguage: ["English", "Arabic", "French"],
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                url: reportCheckoutUrl,
                availability: "https://schema.org/InStock",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Document scanning", item: url },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: DocumentScanPage,
});

const levels = ["Undergraduate / Bachelor's", "Master's", "PhD", "Other"];
const documentTypes = [
  "Essay / assignment",
  "Report",
  "Literature review",
  "Thesis / dissertation chapter",
  "Full thesis / dissertation",
  "Other",
];

const ACCEPTED = [".pdf", ".doc", ".docx", ".rtf", ".txt"];
const MAX_BYTES = 25 * 1024 * 1024;

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  whatsapp: z.string().trim().max(25).optional(),
  university: z.string().trim().max(120).optional(),
  level: z.string().trim().min(1, "Please select your academic level"),
  documentType: z.string().trim().min(1, "Please select your document type"),
  notes: z.string().trim().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues | "file", string>>;

const initial: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  university: "",
  level: "",
  documentType: "",
  notes: "",
};

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-ink";

function formatSize(bytes: number) {
  return bytes < 1024 * 1024
    ? `${Math.max(1, Math.round(bytes / 1024))} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function DocumentScanPage() {
  const [values, setValues] = useState<FormValues>(initial);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "uploading" | "done" | "error">("idle");
  const [reference, setReference] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function set<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function acceptFile(next: File | null | undefined) {
    if (!next) return;
    const ext = `.${next.name.split(".").pop()?.toLowerCase() ?? ""}`;
    if (!ACCEPTED.includes(ext)) {
      setErrors((p) => ({ ...p, file: `Please upload one of: ${ACCEPTED.join(", ")}` }));
      return;
    }
    if (next.size > MAX_BYTES) {
      setErrors((p) => ({ ...p, file: "Please keep the file under 25 MB" }));
      return;
    }
    setErrors((p) => ({ ...p, file: undefined }));
    setFile(next);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    const next: Errors = {};
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
    }
    if (!file) next.file = "Please choose a document to upload";
    if (Object.keys(next).length > 0 || !parsed.success || !file) {
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("uploading");

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-120);
    const path = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${safeName}`;

    const upload = await supabase.storage.from("scan-uploads").upload(path, file, {
      contentType: file.type || "application/octet-stream",
      upsert: false,
    });
    if (upload.error) {
      setStatus("error");
      return;
    }

    const insert = await supabase
      .from("scan_submissions")
      .insert({
        full_name: parsed.data.fullName,
        email: parsed.data.email,
        whatsapp: parsed.data.whatsapp || null,
        university: parsed.data.university || null,
        academic_level: parsed.data.level,
        document_type: parsed.data.documentType,
        notes: parsed.data.notes || null,
        file_path: path,
        file_name: file.name,
        file_size: file.size,
      })
      .select("id")
      .single();

    if (insert.error || !insert.data) {
      setStatus("error");
      return;
    }

    setReference(insert.data.id);
    setStatus("done");
    requestAnimationFrame(() => {
      document.getElementById("scan-next-step")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  const checkoutHref = reference
    ? `${reportCheckoutUrl}?ref=${encodeURIComponent(reference)}&email=${encodeURIComponent(values.email)}`
    : reportCheckoutUrl;

  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial py-12 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Document scanning" }]} />
          <p className="eyebrow mt-6">Document scanning</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            Upload your draft for an originality scan
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Send us your draft securely, complete checkout on our scanning service, and receive a
            similarity report with plain-English feedback on your citations, quotations,
            paraphrasing and reference list — so you can correct your own work before submission.
          </p>
          <p className="mt-6 flex max-w-2xl gap-3 text-xs leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              We do not write, rewrite or submit student work, and we never help anyone disguise
              unoriginal text. A scan is a study tool: we explain the report so you can improve your
              own referencing and writing.
            </span>
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="container-editorial py-12 md:py-16">
          <form onSubmit={onSubmit} noValidate className="max-w-2xl">
            <h2 className="font-display text-2xl leading-snug">1. Choose your document</h2>

            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                acceptFile(e.dataTransfer.files?.[0]);
              }}
              className={`mt-4 rounded-md border-2 border-dashed p-6 text-center transition-colors sm:p-10 ${
                dragging ? "border-ink bg-card" : "border-border bg-card/60"
              }`}
            >
              <UploadCloud className="mx-auto size-8 text-accent" aria-hidden="true" />
              <p className="mt-4 text-sm text-foreground">
                Drag your file here, or choose one from your device
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                PDF, DOCX, DOC, RTF or TXT · up to 25 MB
              </p>
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="mt-5 inline-flex items-center justify-center rounded-md border border-ink/25 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Choose file
              </button>
              <input
                ref={inputRef}
                type="file"
                className="sr-only"
                accept={ACCEPTED.join(",")}
                onChange={(e) => acceptFile(e.target.files?.[0])}
              />
              {file && (
                <p className="mt-5 inline-flex max-w-full items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-left text-sm text-foreground">
                  <FileText className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="truncate">{file.name}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {formatSize(file.size)}
                  </span>
                </p>
              )}
            </div>
            {errors.file && <p className="mt-2 text-xs text-destructive">{errors.file}</p>}

            <h2 className="mt-10 font-display text-2xl leading-snug">2. Your details</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <Field label="Full name" id="fullName" error={errors.fullName}>
                <input
                  id="fullName"
                  className={fieldClass}
                  maxLength={120}
                  value={values.fullName}
                  onChange={(e) => set("fullName", e.target.value)}
                />
              </Field>
              <Field label="Email" id="email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  className={fieldClass}
                  maxLength={160}
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </Field>
              <Field label="WhatsApp number (optional)" id="whatsapp" error={errors.whatsapp}>
                <input
                  id="whatsapp"
                  type="tel"
                  inputMode="tel"
                  className={fieldClass}
                  maxLength={25}
                  value={values.whatsapp ?? ""}
                  onChange={(e) => set("whatsapp", e.target.value)}
                  placeholder="+971 50 000 0000"
                />
              </Field>
              <Field label="University (optional)" id="university" error={errors.university}>
                <input
                  id="university"
                  className={fieldClass}
                  maxLength={120}
                  value={values.university ?? ""}
                  onChange={(e) => set("university", e.target.value)}
                />
              </Field>
              <Field label="Academic level" id="level" error={errors.level}>
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
              <Field label="Document type" id="documentType" error={errors.documentType}>
                <select
                  id="documentType"
                  className={fieldClass}
                  value={values.documentType}
                  onChange={(e) => set("documentType", e.target.value)}
                >
                  <option value="">Select document type</option>
                  {documentTypes.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-6">
              <Field label="Anything we should know? (optional)" id="notes" error={errors.notes}>
                <textarea
                  id="notes"
                  rows={4}
                  maxLength={1000}
                  className={fieldClass}
                  value={values.notes ?? ""}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="e.g. Referencing style is APA 7 and my deadline is next Friday."
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "uploading"}
              className="mt-8 w-full rounded-md bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
            >
              {status === "uploading" ? "Uploading…" : "Upload document securely"}
            </button>

            {status === "error" && (
              <p className="mt-4 text-sm text-destructive">
                We couldn't upload that file. Please try again, or send it to us at {site.email}.
              </p>
            )}
          </form>
        </div>
      </section>

      <section id="scan-next-step" className="border-b border-border bg-paper">
        <div className="container-editorial py-12 md:py-16">
          {status === "done" && reference ? (
            <div className="max-w-2xl border border-border bg-card p-6 sm:p-8">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <CheckCircle2 className="size-5 text-accent" aria-hidden="true" />
                Document received
              </p>
              <h2 className="mt-3 font-display text-2xl leading-snug">
                3. Complete checkout to generate your report
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Your reference is{" "}
                <span className="font-mono text-foreground">{reference.slice(0, 8)}</span>. Payment
                is handled securely by card, in USD, on our dedicated scanning service. Once
                checkout is complete we generate your report and email it to {values.email} with
                feedback on what to review.
              </p>
              <a
                href={checkoutHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <CreditCard className="size-4" aria-hidden="true" />
                Pay &amp; generate my report
              </a>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Checkout opens on yesweturnitin.online. Keep your reference handy — quote it if you
                message us at {site.email}.
              </p>
            </div>
          ) : (
            <div className="grid max-w-4xl gap-8 sm:grid-cols-3">
              {[
                {
                  step: "Upload",
                  copy: "Choose your draft and add a few details. The file goes straight into private storage.",
                },
                {
                  step: "Checkout",
                  copy: "Pay securely by card in USD on our scanning service to have the report generated.",
                },
                {
                  step: "Review together",
                  copy: "We send the report and explain what it means, so you can fix your own referencing and paraphrasing.",
                },
              ].map((s, i) => (
                <div key={s.step} className="border-t border-ink/20 pt-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Step {i + 1}
                  </p>
                  <h2 className="mt-2 font-display text-lg">{s.step}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-editorial py-12 md:py-16">
          <h2 className="font-display text-2xl leading-snug sm:text-3xl">
            Document scanning questions
          </h2>
          <dl className="mt-8 max-w-3xl divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.question} className="py-5">
                <dt className="font-display text-base text-foreground">{f.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.answer}</dd>
              </div>
            ))}
          </dl>
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
