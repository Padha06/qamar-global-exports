/**
 * Marine product catalogue — deliberately factual. No prices, specifications,
 * grades, inventory or certifications are stated; those are confirmed with the
 * buyer on enquiry.
 */

export type Product = {
  slug: string;
  name: string;
  categoryLabel: string;
  summary: string;
  detail: string;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    slug: "marine-diesel-engines",
    name: "Marine Diesel Engines",
    categoryLabel: "Marine Power",
    summary: "Refurbished marine diesel engines for propulsion and auxiliary duty.",
    detail:
      "Marine diesel engines for propulsion and auxiliary applications, sourced to your vessel requirement. Availability, condition and specification are confirmed on enquiry.",
    image: "/products/marine-engines.webp",
    imageAlt: "Refurbished marine diesel engine",
  },
  {
    slug: "marine-diesel-generators",
    name: "Marine Diesel Generators",
    categoryLabel: "Marine Power",
    summary: "Marine generator sets for shipboard auxiliary power.",
    detail:
      "Diesel generator sets intended for marine and shipboard use, supplied refurbished. Availability and specification are confirmed per requirement.",
    image: "/products/marine-generators.webp",
    imageAlt: "Refurbished marine diesel generator set",
  },
  {
    slug: "engine-spares",
    name: "Engine Spares",
    categoryLabel: "Spares",
    summary: "Spare parts and machined components for marine diesel engines.",
    detail:
      "Spare parts and machined components for marine diesel engines, sourced to your requirement. Availability and condition are confirmed on enquiry.",
    image: "/products/engine-spares.webp",
    imageAlt: "Machined marine engine spare parts",
  },
  {
    slug: "motor-scrap",
    name: "Motor Scrap",
    categoryLabel: "Scrap",
    summary: "Used motor parts and scrap units, sorted and supplied in bulk.",
    detail:
      "Used motor parts and scrap units, sorted by type and supplied in bulk. Availability and condition are confirmed on enquiry.",
    image: "/products/motor-scrap.webp",
    imageAlt: "Used motor parts and industrial metal scrap",
  },
  {
    slug: "electrical-items",
    name: "Electrical Items",
    categoryLabel: "Electrical",
    summary: "Marine-grade electrical components, panels and switchgear.",
    detail:
      "Electrical components, panels and switchgear for marine applications, sourced to your requirement. Availability is confirmed on enquiry.",
    image: "/products/electrical-items.webp",
    imageAlt: "Marine electrical switchgear and control panel",
  },
  {
    slug: "automation-products",
    name: "Automation Products",
    categoryLabel: "Automation",
    summary: "Automation, control and monitoring equipment for vessels.",
    detail:
      "Automation, control and monitoring equipment for marine and industrial use, sourced to your requirement. Availability is confirmed on enquiry.",
    image: "/products/automation-products.webp",
    imageAlt: "Industrial automation control panel",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Route + anchor for a product. */
export function productHref(product: Product) {
  return `/products#${product.slug}`;
}
