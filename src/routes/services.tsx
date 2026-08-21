import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

const title = "Academic Coaching & Tutoring Services | Yes We Do Your Projects";
const description =
  "University tutoring, academic coaching, thesis and dissertation coaching, research methodology, academic writing, editing, exam preparation and SAT preparation.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Services"
      h1="Academic coaching and tutoring services"
      intro="Expert one-to-one support across tutoring, coaching, research methodology, academic writing, editing, exam preparation and SAT preparation."
    />
  ),
});
