type Props = {
  quote: string;
  attribution: string;
};

export function TestimonialCard({ quote, attribution }: Props) {
  return (
    <figure className="flex h-full flex-col justify-between border border-border bg-card p-6 sm:p-8">
      <blockquote className="text-base leading-relaxed text-foreground">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {attribution}
      </figcaption>
    </figure>
  );
}
