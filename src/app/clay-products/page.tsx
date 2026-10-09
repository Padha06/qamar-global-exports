import type { Metadata } from "next";
import { getProductsByCategory } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";
import { IMAGES, sized } from "@/lib/images";
import { PageHero } from "@/components/layout/page-hero";
import { ProductShowcase } from "@/components/products/product-showcase";
import { TrustBar } from "@/components/home/trust-bar";
import { RfqSection } from "@/components/home/rfq-section";

export const metadata: Metadata = buildMetadata({
  title: "Roasted Edible Clay, Clay Powder & Ball Clay",
  description:
    "Roasted edible clay, clay powder and ball clay supplied for wholesale and export from India. Grade and packaging are confirmed per order. MOQ 1.",
  path: "/clay-products",
  keywords: ["roasted edible clay", "clay powder supplier", "ball clay", "clay export India"],
});

export default function ClayProductsPage() {
  const products = getProductsByCategory("clay");

  return (
    <>
      <PageHero
        eyebrow="Clay & Materials"
        title={
          <>
            Roasted Edible Clay, Powder &amp;{" "}
            <span className="text-gradient-orange">Ball Clay</span>
          </>
        }
        intro="Roasted edible clay, clay powder and ball clay supplied for wholesale and export. Grade and packaging are confirmed per order."
        image={sized(IMAGES.clayMineral, 2000)}
        imageAlt="Natural clay material"
        crumbs={[{ label: "Clay Products" }]}
      />

      <TrustBar />

      {products.map((p, i) => (
        <ProductShowcase key={p.slug} product={p} index={i} />
      ))}

      <RfqSection />
    </>
  );
}
