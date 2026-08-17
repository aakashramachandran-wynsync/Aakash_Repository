import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, accent, description, className }) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gold/60" />
        <span className="eyebrow text-gold/80">{eyebrow}</span>
      </div>
      <h2 className="font-display mt-4 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
        {title} {accent ? <span className="text-gradient-gold italic">{accent}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
