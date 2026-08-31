import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { serviceCategories } from "@/lib/categories";
import { cn } from "@/lib/utils";

export function CategoryGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {serviceCategories.map(({ title, copy, to, icon: Icon }) => (
        <Link
          key={title}
          to={to as never}
          className="group surface-card flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lift sm:flex-col sm:gap-5 sm:p-7"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-accent">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-lg leading-snug text-foreground">{title}</span>
            <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{copy}</span>
            <span className="mt-4 hidden items-center gap-1.5 text-sm font-semibold text-foreground sm:inline-flex">
              View details
              <ArrowRight
                className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </span>
          <ArrowRight
            className="mt-1 size-4 shrink-0 text-accent sm:hidden"
            aria-hidden="true"
          />
        </Link>
      ))}
    </div>
  );
}
