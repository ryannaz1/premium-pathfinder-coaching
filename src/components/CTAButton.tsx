import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-200";

const variants = {
  primary: "bg-ink text-ink-foreground hover:bg-ink/90",
  accent: "bg-accent text-accent-foreground hover:opacity-90",
  outline: "border border-ink/25 text-foreground hover:border-ink/60 hover:bg-secondary",
  quiet: "text-foreground underline-offset-4 hover:underline px-0 py-1",
} as const;

type Props = {
  to: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  withArrow?: boolean;
};

export function CTAButton({
  to,
  children,
  variant = "primary",
  className,
  withArrow = false,
}: Props) {
  return (
    <Link to={to as never} className={cn(base, variants[variant], className)}>
      {children}
      {withArrow && <ArrowRight className="size-4" aria-hidden="true" />}
    </Link>
  );
}
