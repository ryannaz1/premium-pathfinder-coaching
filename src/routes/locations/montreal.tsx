import { createFileRoute } from "@tanstack/react-router";

import { LocationPage } from "@/components/LocationPage";
import { getLocation, locationHead } from "@/lib/locations";

const slug = "montreal";

export const Route = createFileRoute("/locations/montreal")({
  head: () => locationHead(slug),
  component: () => <LocationPage location={getLocation(slug)} />,
});
