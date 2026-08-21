import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "architecture-project-help";

export const Route = createFileRoute("/architecture-project-help")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
