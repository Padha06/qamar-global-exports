import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  reverse = false,
}: {
  items: readonly string[];
  className?: string;
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee items-center gap-12"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-12">
            <span className="font-display text-lg font-semibold tracking-tight text-slate-500 transition-colors hover:text-navy-900 sm:text-xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500/70" />
          </div>
        ))}
      </div>
    </div>
  );
}
