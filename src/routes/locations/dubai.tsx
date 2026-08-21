import { createFileRoute } from "@tanstack/react-router";

import { LocationPage } from "@/components/LocationPage";
import { getLocation, locationHead } from "@/lib/locations";

const slug = "dubai";

export const Route = createFileRoute("/locations/dubai")({
  head: () => locationHead(slug),
  component: () => <LocationPage location={getLocation(slug)} />,
});
