import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "final-year-project-support";

export const Route = createFileRoute("/final-year-project-support")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
