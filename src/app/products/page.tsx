import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/catalog";
import { brands } from "@/lib/brands";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { ProductShowcase } from "@/components/products/product-showcase";
import { BrandSection } from "@/components/products/brand-section";
import { TrustBar } from "@/components/home/trust-bar";
import { RfqSection } from "@/components/home/rfq-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Products — Marine Engines, Generators, Spares, Electricals & Automation",
  description:
    "Refurbished marine diesel engines and generators, engine spares, motor scrap, electrical items and automation products — plus equipment and spares by brand (Cummins, Caterpillar, Wärtsilä, MAN, Yanmar, MTU, ABB, Siemens and more). MOQ 1.",
  path: "/products",
  keywords: [
    "marine diesel engine exporter",
    "marine engine parts",
    "engine spares",
    "motor scrap",
    "marine electrical items",
    "automation products",
    "Cummins marine parts",
    "Caterpillar marine engine",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Marine engines, spares,{" "}
            <span className="text-gradient-orange">electricals &amp; automation</span>
          </>
        }
        intro="Refurbished marine diesel engines and generators, engine parts, motor scrap, electrical items and automation products. Browse by category below, or find equipment and spares by brand."
        image="/sections/marine-feature.webp"
        imageAlt="Marine engines, generators and equipment"
        crumbs={[{ label: "Products" }]}
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#brands"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-orange-500/60 hover:text-orange-700"
          >
            Find by brand ↓
          </a>
        </div>
      </PageHero>

      <TrustBar />

      {/* By category */}
      {products.map((p, i) => (
        <ProductShowcase key={p.slug} product={p} index={i} />
      ))}

      {/* Find by brand */}
      <section id="brands" className="cv scroll-mt-20 border-y border-line bg-white">
        <div className="container-px py-20 lg:py-24">
          <SectionHeading
            eyebrow="Find by Brand"
            title={
              <>
                Equipment &amp; spares by{" "}
                <span className="text-gradient-orange">brand</span>
              </>
            }
            intro="We supply engines, generators, spares, electrical and automation equipment across the marine brands below. Tap a brand to jump to its products — availability is confirmed on enquiry."
          />

          <Reveal delay={0.05}>
            <div className="mt-10 grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {brands.map((b) => (
                <a
                  key={b.slug}
                  href={`#${b.slug}`}
                  aria-label={b.name}
                  className="group flex h-20 items-center justify-center bg-white p-4 transition-colors hover:bg-slate-50 sm:h-24 sm:p-5"
                >
                  <div className="relative h-8 w-full max-w-[150px] sm:h-9">
                    <Image
                      src={b.logo}
                      alt={b.name}
                      fill
                      sizes="150px"
                      className="object-contain opacity-80 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brand product sections */}
      <div className="container-px">
        {brands.map((b) => (
          <BrandSection key={b.slug} brand={b} />
        ))}
        <p className="pb-16 pt-2 text-center font-mono text-[11px] uppercase tracking-wider text-muted">
          All trademarks belong to their respective owners · Qamar Global Exports supplies parts and
          equipment for these brands and is not an authorised dealer unless stated.
        </p>
      </div>

      <RfqSection />
    </>
  );
}
