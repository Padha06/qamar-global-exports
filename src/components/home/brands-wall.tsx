import { productBrands } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function BrandsWall() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white">
      <div className="absolute inset-0 blueprint opacity-50" />
      <div className="container-px relative py-20 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="Brands We Deal In"
          title="Sourced from the power industry's trusted names"
          intro="We refurbish, inspect and export generator sets and marine engines from globally recognised manufacturers."
        />

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
          {productBrands.map((brand, i) => (
            <Reveal key={brand} delay={(i % 4) * 0.05}>
              <div className="group flex h-24 items-center justify-center bg-white transition-colors hover:bg-slate-50">
                <span className="font-display text-base font-semibold tracking-tight text-slate-400 transition-colors group-hover:text-navy-900 sm:text-lg">
                  {brand}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-wider text-slate-500">
            All trademarks belong to their respective owners · Qamar deals in refurbished &amp; reassembled units
          </p>
        </Reveal>
      </div>
    </section>
  );
}
