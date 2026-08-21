import { createFileRoute } from "@tanstack/react-router";

import { LocationPage } from "@/components/LocationPage";
import { getLocation, locationHead } from "@/lib/locations";

const slug = "uk";

export const Route = createFileRoute("/locations/uk")({
  head: () => locationHead(slug),
  component: () => <LocationPage location={getLocation(slug)} />,
});
