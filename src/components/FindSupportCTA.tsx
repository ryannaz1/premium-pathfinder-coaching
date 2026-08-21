import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = {
  tone?: "paper" | "sand" | "ink";
  className?: string;
};

export const findSupportHeadline = "Find Support for My Course";
export const findSupportCopy =
  "Can't find your course? Tell us what you're studying and what you're working on, and we'll help you find the right academic support.";

export function FindSupportCTA({ tone = "sand", className }: Props) {
  const isInk = tone === "ink";
  const toneClass = {
    paper: "bg-paper border-border",
    sand: "bg-sand border-border",
    ink: "bg-ink border-ink-foreground/20 text-ink-foreground",
  }[tone];

  return (
    <div className={cn("border p-6 sm:p-8", toneClass, className)}>
      <p className={cn("eyebrow", isInk && "text-ink-foreground/70")}>Course finder</p>
      <h2
        className={cn(
          "mt-3 font-display text-2xl leading-snug sm:text-3xl",
          isInk ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {findSupportHeadline}
      </h2>
      <p
        className={cn(
          "mt-4 max-w-2xl text-sm leading-relaxed sm:text-base",
          isInk ? "text-ink-foreground/75" : "text-muted-foreground",
        )}
      >
        {findSupportCopy}
      </p>
      <Link
        to="/find-support"
        className={cn(
          "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 sm:w-auto",
          isInk ? "bg-accent text-accent-foreground" : "bg-ink text-ink-foreground",
        )}
      >
        {findSupportHeadline}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
