import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "3d-max-help";

export const Route = createFileRoute("/3d-max-help")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
