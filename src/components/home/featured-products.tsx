import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products, productHref } from "@/lib/catalog";
import { sized } from "@/lib/images";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function FeaturedProducts() {
  return (
    <section className="container-px py-20 lg:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Our Products"
          title={
            <>
              Equipment &amp; materials we{" "}
              <span className="text-gradient-orange">export worldwide</span>
            </>
          }
          intro="Refurbished diesel and marine generators, marine engines and industrial clay — every item inspected before it ships."
        />
        <Link
          href="/generators"
          className="link-underline hidden shrink-0 text-sm font-medium text-orange-600 sm:inline-block"
        >
          View all products
        </Link>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.08}>
            <Link
              href={productHref(p)}
              className="group card-industrial glow-hover flex h-full flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={sized(p.image, 900)}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/55 via-navy-900/5 to-transparent" />
                <span className="glass absolute left-3 top-3 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-orange-700">
                  {p.categoryLabel}
                </span>
                <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wider text-white/90">
                  {p.tagline}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-navy-900">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.short}</p>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    MOQ 1 · Worldwide
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-600">
                    Details
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
