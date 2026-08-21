import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

type Props = {
  place: string;
  description: string;
  to: string;
};

export function LocationCard({ place, description, to }: Props) {
  return (
    <Link
      to={to}
      className="group flex items-start gap-4 border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/60"
    >
      <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
      <span>
        <span className="block text-lg font-display text-foreground">{place}</span>
        <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
          {description}
        </span>
      </span>
    </Link>
  );
}
