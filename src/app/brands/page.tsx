import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brands } from "@/lib/brands";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { RfqSection } from "@/components/home/rfq-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Brands & Products",
  description:
    "Qamar Global Exports supplies marine engines, generators, spares, electrical and automation equipment across leading brands including Cummins, Caterpillar, Perkins, Wärtsilä, MAN, Yanmar, MTU, Volvo Penta, ABB, Siemens and more.",
  path: "/brands",
  keywords: [
    "Cummins marine engine parts",
    "Caterpillar marine engine",
    "Wartsila engine spares",
    "MAN marine engine",
    "Yanmar marine engine",
    "marine brand spares exporter",
  ],
});

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands We Supply"
        title={
          <>
            Marine brands &amp; the <span className="text-gradient-orange">products we source</span>
          </>
        }
        intro="We supply engines, generators, spares, electrical and automation equipment across a wide range of marine brands. Product availability is confirmed on enquiry."
        image="/sections/marine-feature.webp"
        imageAlt="Marine engines and equipment"
        crumbs={[{ label: "Brands" }]}
      />

      <section className="container-px py-16 lg:py-20">
        {/* Quick index */}
        <div className="flex flex-wrap gap-2">
          {brands.map((b) => (
            <a
              key={b.slug}
              href={`#${b.slug}`}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-orange-500/50 hover:text-orange-700"
            >
              {b.name}
            </a>
          ))}
        </div>

        <div className="mt-14 space-y-16">
          {brands.map((b) => (
            <div key={b.slug} id={b.slug} className="scroll-mt-24">
              <div className="flex flex-wrap items-center gap-4 border-b border-line pb-5">
                <div className="relative h-12 w-32 shrink-0">
                  <Image
                    src={b.logo}
                    alt={b.name}
                    fill
                    sizes="128px"
                    className="object-contain object-left"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{b.name}</h2>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {b.products.length} products
                  </p>
                </div>
                <Button asChild variant="outline" size="sm" className="ml-auto hidden rounded-full sm:inline-flex">
                  <Link href="/contact#rfq">Enquire</Link>
                </Button>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {b.products.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                    <div className="card-industrial glow-hover flex h-full flex-col overflow-hidden">
                      <div className="relative aspect-[4/3] bg-slate-100">
                        <Image
                          src={p.image}
                          alt={`${b.name} ${p.name}`}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={65}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <h3 className="text-sm font-semibold text-ink">{p.name}</h3>
                        <Link
                          href="/contact#rfq"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-orange-600"
                        >
                          Request quote
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center font-mono text-[11px] uppercase tracking-wider text-muted">
          All trademarks belong to their respective owners · Qamar Global Exports supplies parts and
          equipment for these brands and is not an authorised dealer unless stated.
        </p>
      </section>

      <RfqSection />
    </>
  );
}
