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
    "Export-grade roasted edible clay, finely milled clay powder and ball clay supplied in retail and bulk packing from India. MOQ 1, worldwide supply.",
  path: "/clay-products",
  keywords: ["roasted edible clay exporter", "clay powder supplier", "ball clay exporter", "edible clay India"],
});

export default function ClayProductsPage() {
  const products = getProductsByCategory("clay");

  return (
    <>
      <PageHero
        eyebrow="Industrial Minerals"
        title={
          <>
            Roasted Edible Clay, Clay Powder &amp; <span className="text-gradient-orange">Ball Clay</span>
          </>
        }
        intro="Food-grade roasted edible clay, consistent clay powder and high-bonding ball clay — cleaned, graded and packed for retail and bulk export."
        image={sized(IMAGES.clayMineral, 2000)}
        imageAlt="Natural clay and mineral chunks"
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
