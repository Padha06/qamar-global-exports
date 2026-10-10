import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  crumbs = [],
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image: string;
  imageAlt?: string;
  crumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white pt-[calc(var(--header-h)+var(--safe-t))]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          quality={50}
          loading="lazy"
          className="object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-[#f4f6fa]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f6fa] via-[#f4f6fa]/70 to-transparent" />
        <div className="absolute inset-0 blueprint opacity-60" />
      </div>

      <div className={cn("container-px", "py-16 lg:py-24")}>
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-400"
        >
          <Link href="/" className="hover:text-orange-600">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" />
              {c.href ? (
                <Link href={c.href} className="hover:text-orange-600">{c.label}</Link>
              ) : (
                <span className="text-slate-600">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500/70" />
              {eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-[2rem] font-semibold leading-[1.06] tracking-tightest sm:text-4xl lg:text-5xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{intro}</p>
            </Reveal>
          )}
          {children && <Reveal delay={0.18}>{children}</Reveal>}
        </div>
      </div>
    </section>
  );
}
