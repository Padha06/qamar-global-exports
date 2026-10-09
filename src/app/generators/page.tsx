import type { Metadata } from "next";
import { getProductsByCategory } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";
import { IMAGES, sized } from "@/lib/images";
import { PageHero } from "@/components/layout/page-hero";
import { ProductShowcase } from "@/components/products/product-showcase";
import { TrustBar } from "@/components/home/trust-bar";
import { RfqSection } from "@/components/home/rfq-section";

export const metadata: Metadata = buildMetadata({
  title: "Refurbished Diesel & Marine Generators",
  description:
    "Refurbished diesel generators (Cummins, Kirloskar, Caterpillar-style), marine diesel generators and marine diesel engines — 10 to 320+ kVA, MOQ 1, worldwide shipping from India.",
  path: "/generators",
  keywords: ["refurbished diesel generator", "marine diesel generator exporter", "Cummins generator", "Kirloskar generator", "marine diesel engine"],
});

export default function GeneratorsPage() {
  const products = getProductsByCategory("generators");

  return (
    <>
      <PageHero
        eyebrow="Power Systems"
        title={
          <>
            Refurbished Diesel &amp; <span className="text-gradient-orange">Marine Generators</span>
          </>
        }
        intro="Refurbished diesel generator sets, marine diesel generators and marine diesel engines — inspected, tested and supplied worldwide in ratings from 10 kVA to 320+ kVA."
        image={sized(IMAGES.gensetInline, 2000)}
        imageAlt="Refurbished industrial diesel generator"
        crumbs={[{ label: "Generators" }]}
      />
      <TrustBar />
      {products.map((p, i) => (
        <ProductShowcase key={p.slug} product={p} index={i} />
      ))}
      <RfqSection />
    </>
  );
}
