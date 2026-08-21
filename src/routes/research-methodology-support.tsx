import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "research-methodology-support";

export const Route = createFileRoute("/research-methodology-support")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
