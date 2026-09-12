import { createFileRoute } from "@tanstack/react-router";

import { LocationPage } from "@/components/LocationPage";
import { getLocation, locationHead } from "@/lib/locations";

const slug = "saudi-arabia";

export const Route = createFileRoute("/locations/saudi-arabia")({
  head: () => locationHead(slug),
  component: () => <LocationPage location={getLocation(slug)} />,
});
