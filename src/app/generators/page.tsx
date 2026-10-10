import type { Metadata } from "next";
import { getProductsByCategory } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";
import { kvaRatings } from "@/lib/site";
import { IMAGES, sized } from "@/lib/images";
import { PageHero } from "@/components/layout/page-hero";
import { ProductShowcase } from "@/components/products/product-showcase";
import { TrustBar } from "@/components/home/trust-bar";
import { RfqSection } from "@/components/home/rfq-section";

export const metadata: Metadata = buildMetadata({
  title: "Refurbished Diesel & Marine Generators",
  description:
    "Refurbished diesel generators, marine diesel generators and marine diesel engines supplied from India. Example ratings 10–320 kVA; availability is confirmed on enquiry. MOQ 1.",
  path: "/generators",
  keywords: ["refurbished diesel generator", "marine diesel generator", "marine diesel engine", "diesel generator India"],
});

export default function GeneratorsPage() {
  const products = getProductsByCategory("generators");

  return (
    <>
      <PageHero
        eyebrow="Power Equipment"
        title={
          <>
            Refurbished Diesel &amp;{" "}
            <span className="text-gradient-orange">Marine Equipment</span>
          </>
        }
        intro="Refurbished diesel generators, marine diesel generators and marine diesel engines. Availability, condition and specification are confirmed against your requirement."
        image={sized(IMAGES.gensetInline, 1400)}
        imageAlt="Refurbished industrial diesel generator"
        crumbs={[{ label: "Generators" }]}
      >
        <div className="mt-7 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
            Example ratings
          </span>
          {kvaRatings.map((r) => (
            <span
              key={r}
              className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink"
            >
              {r}
            </span>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted">
          Example ratings only — actual availability is confirmed on enquiry.
        </p>
      </PageHero>

      <TrustBar />

      {products.map((p, i) => (
        <ProductShowcase key={p.slug} product={p} index={i} />
      ))}

      <RfqSection />
    </>
  );
}
