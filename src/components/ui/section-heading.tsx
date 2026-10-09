import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <div className={cn("eyebrow mb-4 flex items-center gap-3", align === "center" && "justify-center")}>
            <span className="h-px w-8 bg-orange-500/70" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tightest sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-slate-200" : "text-slate-600")}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
