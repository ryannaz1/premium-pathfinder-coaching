import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/LandingPage";
import { getLanding, landingHead } from "@/lib/landing";

const slug = "engineering-software-support";

export const Route = createFileRoute("/engineering-software-support")({
  head: () => landingHead(slug),
  component: () => <LandingPage content={getLanding(slug)} />,
});
