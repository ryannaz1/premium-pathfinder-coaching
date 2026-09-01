import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  to: string;
  index?: number;
};

export function ServiceCard({ title, description, to, index }: Props) {
  return (
    <Link
      to={to as never}
      className="group surface-card flex flex-col justify-between gap-6 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lift sm:p-8"
    >
      <div>
        {typeof index === "number" && (
          <span className="eyebrow block">{String(index + 1).padStart(2, "0")}</span>
        )}
        <h3 className="mt-3 text-xl leading-snug text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
        Learn more
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
