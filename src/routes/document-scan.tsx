import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, ExternalLink } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { socialMeta, SITE_URL } from "@/lib/seo";
import { site, reportCheckoutUrl } from "@/lib/site";

const title = "Document Scanning & Originality Report | Yes We Do Your Projects";
const description =
  "Get a clear originality and similarity report for your essay, thesis or dissertation, with plain-English feedback on citations, paraphrasing and referencing — on our dedicated scanning service.";
const url = `${SITE_URL}/document-scan`;

const faqs = [
  {
    question: "Where do I upload my document?",
    answer:
      "Uploads and checkout both happen on yesweturnitin.online, our dedicated scanning service. Press the button on this page to open it, then upload your draft and complete checkout there.",
  },
  {
    question: "Does a similarity report mean my work is plagiarised?",
    answer:
      "No. A similarity score simply highlights text that matches other sources. Quoted material and reference lists often match legitimately. We help you read the report so you can correct genuine citation, paraphrasing and referencing issues yourself.",
  },
  {
    question: "Which file types can I scan?",
    answer:
      "Common document formats such as PDF, DOCX, DOC, RTF and TXT are supported. If your document is larger or unusual, contact us on WhatsApp and we will advise.",
  },
  {
    question: "How is the report paid for?",
    answer:
      "Reports are paid for securely by card at checkout on yesweturnitin.online, our dedicated scanning service, in USD.",
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

function DocumentScanPage() {
  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="container-editorial py-12 md:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Document scanning" }]} />
          <p className="eyebrow mt-6">Document scanning</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            Scan your draft before you submit it
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Get a clear similarity report with plain-English feedback on your citations, quotations,
            paraphrasing and reference list — so you can correct your own work before submission.
            Uploads and checkout happen on our dedicated scanning service, yesweturnitin.online.
          </p>
          <div className="mt-8">
            <a
              href={reportCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Upload my document &amp; get my report
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Opens yesweturnitin.online in a new tab · Paid securely by card in USD.
            </p>
          </div>
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
          <div className="grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                step: "Upload",
                copy: "Press the button above to open our scanning service and add your draft there.",
              },
              {
                step: "Checkout",
                copy: "Pay securely by card in USD on the same site to have the report generated.",
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
