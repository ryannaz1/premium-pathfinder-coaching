import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "phd-research-support";

export const Route = createFileRoute("/phd-research-support")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
