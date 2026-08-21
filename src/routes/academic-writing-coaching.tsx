import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "academic-writing-coaching";

export const Route = createFileRoute("/academic-writing-coaching")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
