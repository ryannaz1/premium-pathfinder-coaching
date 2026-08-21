import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "engineering-project-help";

export const Route = createFileRoute("/engineering-project-help")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
