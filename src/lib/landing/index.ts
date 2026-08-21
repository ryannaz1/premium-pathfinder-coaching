import { locationLandings } from "./locations";
import { subjectLandings } from "./subjects";
import { serviceLandings } from "./services";
import { softwareLandings } from "./software";
import { modelLandings } from "./models";
import type { LandingContent } from "./types";

export type { LandingContent, LandingGroup } from "./types";

export const landings: LandingContent[] = [
  ...locationLandings,
  ...subjectLandings,
  ...serviceLandings,
  ...softwareLandings,
  ...modelLandings,
];

const BASE_URL = "https://premium-pathfinder-coaching.lovable.app";

export function getLanding(slug: string): LandingContent {
  const found = landings.find((l) => l.slug === slug);
  if (!found) throw new Error(`Unknown landing page: ${slug}`);
  return found;
}

export function landingsByGroup(group: LandingContent["group"]) {
  return landings.filter((l) => l.group === group);
}

export function landingHead(slug: string) {
  const l = getLanding(slug);
  const url = `${BASE_URL}/${l.slug}`;
  return {
    meta: [
      { title: l.title },
      { name: "description", content: l.description },
      { property: "og:title", content: l.title },
      { property: "og:description", content: l.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
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
              name: l.h1,
              description: l.description,
              serviceType: l.serviceType,
              url,
              provider: {
                "@type": "Organization",
                name: "Yes We Do Your Projects",
                url: BASE_URL,
                email: "ryannazha@gmail.com",
              },
              availableLanguage: ["English", "Arabic", "French"],
              ...(l.areaServed
                ? { areaServed: { "@type": "Place", name: l.areaServed } }
                : {}),
            },
            {
              "@type": "FAQPage",
              mainEntity: l.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                { "@type": "ListItem", position: 2, name: l.label, item: url },
              ],
            },
          ],
        }),
      },
    ],
  };
}
