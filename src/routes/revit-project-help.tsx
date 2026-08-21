import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "revit-project-help";

export const Route = createFileRoute("/revit-project-help")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
