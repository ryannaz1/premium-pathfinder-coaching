import { createFileRoute } from "@tanstack/react-router";

import { LocationPage } from "@/components/LocationPage";
import { getLocation, locationHead } from "@/lib/locations";

const slug = "abu-dhabi";

export const Route = createFileRoute("/locations/abu-dhabi")({
  head: () => locationHead(slug),
  component: () => <LocationPage location={getLocation(slug)} />,
});
