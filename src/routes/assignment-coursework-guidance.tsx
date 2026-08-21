import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "assignment-coursework-guidance";

export const Route = createFileRoute("/assignment-coursework-guidance")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
