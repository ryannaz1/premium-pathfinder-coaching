import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

const title = "Locations — UK, Dubai, Abu Dhabi, Montreal & Lebanon | Yes We Do Your Projects";
const description =
  "Online academic coaching and university tutoring for students in the United Kingdom, Dubai, Abu Dhabi and the UAE, Montreal and Quebec, and Lebanon.";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Locations"
      h1="Where we support students"
      intro="Online coaching delivered in your time zone across the United Kingdom, Dubai, Abu Dhabi and the wider UAE, Montreal and Quebec, and Lebanon."
    />
  ),
});
