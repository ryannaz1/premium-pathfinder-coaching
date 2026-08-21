import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

const title = "Resources — Study Skills, Academic Writing & Research Guides";
const description =
  "Practical guides on university study skills, academic writing, thesis research, research methodology, SAT preparation and studying abroad.";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Resources"
      h1="Academic resources and guides"
      intro="Guides on study skills, academic writing, thesis research, research methodology, SAT preparation, international study and graduate life."
    />
  ),
});
