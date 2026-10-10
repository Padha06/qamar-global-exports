import type { Metadata } from "next";
import { products } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";
import { IMAGES, sized } from "@/lib/images";
import { PageHero } from "@/components/layout/page-hero";
import { ProductShowcase } from "@/components/products/product-showcase";
import { TrustBar } from "@/components/home/trust-bar";
import { RfqSection } from "@/components/home/rfq-section";

export const metadata: Metadata = buildMetadata({
  title: "Marine Products — Engines, Spares, Electricals & Automation",
  description:
    "Refurbished marine diesel engines and generators, marine engine parts, engine spares & motor scrap, marine electrical items and automation products supplied from India. MOQ 1.",
  path: "/products",
  keywords: [
    "marine diesel engine exporter",
    "marine engine parts",
    "engine spares",
    "motor scrap",
    "marine electrical items",
    "automation products",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Marine Products"
        title={
          <>
            Marine engines, spares,{" "}
            <span className="text-gradient-orange">electricals &amp; automation</span>
          </>
        }
        intro="Refurbished marine diesel engines and generators, engine parts, engine spares & motor scrap, marine electrical items and automation products — availability, condition and specification are confirmed on enquiry."
        image={sized(IMAGES.marineEngineBlock, 1400)}
        imageAlt="Marine diesel engine"
        crumbs={[{ label: "Products" }]}
      />

      <TrustBar />

      {products.map((p, i) => (
        <ProductShowcase key={p.slug} product={p} index={i} />
      ))}

      <RfqSection />
    </>
  );
}
