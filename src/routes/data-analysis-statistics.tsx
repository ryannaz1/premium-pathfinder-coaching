import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "data-analysis-statistics";

export const Route = createFileRoute("/data-analysis-statistics")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
