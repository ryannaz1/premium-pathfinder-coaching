import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import { getService, serviceHead } from "@/lib/services";

const slug = "academic-writing-coaching";

export const Route = createFileRoute("/services/academic-writing-coaching")({
  head: () => serviceHead(slug),
  component: () => <ServicePage service={getService(slug)} />,
});
