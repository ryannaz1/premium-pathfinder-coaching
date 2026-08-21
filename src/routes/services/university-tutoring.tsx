import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import { getService, serviceHead } from "@/lib/services";

const slug = "university-tutoring";

export const Route = createFileRoute("/services/university-tutoring")({
  head: () => serviceHead(slug),
  component: () => <ServicePage service={getService(slug)} />,
});
