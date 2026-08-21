import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

const title = "About Yes We Do Your Projects — Academic Coaching Brand";
const description =
  "Learn how Yes We Do Your Projects supports university and Master's students with ethical, one-to-one academic coaching and tutoring.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="About"
      h1="About Yes We Do Your Projects"
      intro="An academic coaching brand built around one-to-one guidance, honest advice and academic integrity. [PLACEHOLDER — company story, team and credentials to be supplied.]"
    />
  ),
});
