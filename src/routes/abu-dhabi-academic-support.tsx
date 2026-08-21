import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "abu-dhabi-academic-support";

export const Route = createFileRoute("/abu-dhabi-academic-support")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
