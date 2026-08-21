import { SITE_URL, socialMeta } from "@/lib/seo";
import { spssArticle } from "./spss";
import { methodologyArticle } from "./methodology";
import { engineeringArticle } from "./engineering";
import { revitArticle } from "./revit";
import { maquetteArticle } from "./maquette";
import type { Article } from "./types";

export type { Article, ArticleSection, Block } from "./types";
export { integrityNote } from "./types";

export const articles: Article[] = [
  spssArticle,
  methodologyArticle,
  engineeringArticle,
  revitArticle,
  maquetteArticle,
];

export function getArticle(slug: string): Article {
  const found = articles.find((a) => a.slug === slug);
  if (!found) throw new Error(`Unknown article: ${slug}`);
  return found;
}

export function articleHead(slug: string) {
  const a = getArticle(slug);
  const url = `${SITE_URL}/resources/${a.slug}`;
  return {
    meta: [
      { title: a.title },
      { name: "description", content: a.description },
      { property: "og:title", content: a.title },
      { property: "og:description", content: a.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      ...socialMeta(a.title, a.description),
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: a.h1,
              description: a.description,
              articleSection: a.category,
              inLanguage: "en",
              mainEntityOfPage: { "@type": "WebPage", "@id": url },
              url,
              author: {
                "@type": "Organization",
                name: "Yes We Do Your Projects",
                url: SITE_URL,
              },
              publisher: {
                "@type": "Organization",
                name: "Yes We Do Your Projects",
                url: SITE_URL,
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: a.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/resources` },
                { "@type": "ListItem", position: 3, name: a.label, item: url },
              ],
            },
          ],
        }),
      },
    ],
  };
}
