import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import { getService, serviceHead } from "@/lib/services";

const slug = "research-methodology";

export const Route = createFileRoute("/services/research-methodology")({
  head: () => serviceHead(slug),
  component: () => <ServicePage service={getService(slug)} />,
});
