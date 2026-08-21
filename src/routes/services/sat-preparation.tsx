import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import { getService, serviceHead } from "@/lib/services";

const slug = "sat-preparation";

export const Route = createFileRoute("/services/sat-preparation")({
  head: () => serviceHead(slug),
  component: () => <ServicePage service={getService(slug)} />,
});
