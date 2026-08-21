import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "physical-project-models";

export const Route = createFileRoute("/physical-project-models")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
