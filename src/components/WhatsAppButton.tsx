import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappHref } from "@/lib/site";

type Props = {
  label?: string;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
};

export function WhatsAppButton({
  label = "Chat on WhatsApp",
  className,
  variant = "solid",
}: Props) {
  const styles = {
    solid: "bg-whatsapp text-whatsapp-foreground hover:opacity-90",
    outline: "border border-border text-foreground hover:bg-secondary",
    ghost: "text-foreground hover:bg-secondary",
  }[variant];

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — opens WhatsApp in a new tab`}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-200",
        styles,
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}

export function WhatsAppFloating() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with an academic coach on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform duration-200 hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
