import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "thesis-dissertation-coaching";

export const Route = createFileRoute("/thesis-dissertation-coaching")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
