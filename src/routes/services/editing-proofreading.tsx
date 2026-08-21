import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import { getService, serviceHead } from "@/lib/services";

const slug = "editing-proofreading";

export const Route = createFileRoute("/services/editing-proofreading")({
  head: () => serviceHead(slug),
  component: () => <ServicePage service={getService(slug)} />,
});
