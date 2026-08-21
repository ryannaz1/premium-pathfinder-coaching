import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

const title = "Who We Help — Students, Master's Researchers & Parents | Yes We Do Your Projects";
const description =
  "We support university students, international students, Master's researchers, exam candidates and parents seeking premium academic support.";

export const Route = createFileRoute("/who-we-help")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/who-we-help" },
    ],
    links: [{ rel: "canonical", href: "/who-we-help" }],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Who We Help"
      h1="The students and families we work with"
      intro="Undergraduates, international students, Master's researchers, exam candidates and parents arranging serious academic support."
    />
  ),
});
