import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  tone = "default",
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "orange" | "green" | "outline";
}) {
  const tones = {
    default: "border-slate-200 bg-slate-50 text-slate-600",
    orange: "border-orange-500/40 bg-orange-50 text-orange-700",
    green: "border-emerald-500/30 bg-emerald-50 text-emerald-700",
    outline: "border-slate-300 bg-white text-slate-600",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("card-industrial", className)} {...props}>
      {children}
    </div>
  );
}
