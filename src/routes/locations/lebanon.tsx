import { createFileRoute } from "@tanstack/react-router";

import { LocationPage } from "@/components/LocationPage";
import { getLocation, locationHead } from "@/lib/locations";

const slug = "lebanon";

export const Route = createFileRoute("/locations/lebanon")({
  head: () => locationHead(slug),
  component: () => <LocationPage location={getLocation(slug)} />,
});
