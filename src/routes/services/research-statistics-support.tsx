import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import { getService, serviceHead } from "@/lib/services";

const slug = "research-statistics-support";

export const Route = createFileRoute("/services/research-statistics-support")({
  head: () => serviceHead(slug),
  component: () => <ServicePage service={getService(slug)} />,
});
