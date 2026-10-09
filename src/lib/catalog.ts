/**
 * Product catalogue — deliberately factual. No prices, specifications, grades,
 * inventory, packaging or certifications are stated; those are confirmed with
 * the buyer on enquiry.
 */
export type Product = {
  slug: string;
  name: string;
  category: "generators" | "clay";
  categoryLabel: string;
  summary: string;
  detail: string;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    slug: "refurbished-diesel-generators",
    name: "Refurbished Diesel Generators",
    category: "generators",
    categoryLabel: "Generators",
    summary: "Refurbished diesel gensets across a range of kVA ratings — availability confirmed on enquiry.",
    detail:
      "Refurbished diesel generator sets supplied in a range of ratings. Example ratings include 10, 62.5, 125 and 320 kVA. Exact availability, condition and specification are confirmed against your requirement.",
    image: "https://images.unsplash.com/photo-1759692071712-adc78a8516c8",
    imageAlt: "Refurbished industrial diesel generator set",
  },
  {
    slug: "marine-diesel-generators",
    name: "Marine Diesel Generators",
    category: "generators",
    categoryLabel: "Generators",
    summary: "Refurbished marine and shipboard diesel generator sets.",
    detail:
      "Diesel generator sets intended for marine and shipboard use, supplied refurbished. Availability and specification are confirmed per requirement.",
    image: "https://images.unsplash.com/photo-1685720543979-e9524b3b0176",
    imageAlt: "Marine diesel generator set",
  },
  {
    slug: "marine-diesel-engines",
    name: "Marine Diesel Engines",
    category: "generators",
    categoryLabel: "Generators",
    summary: "Marine diesel engines for propulsion and auxiliary applications.",
    detail:
      "Marine diesel engines for propulsion and auxiliary applications, sourced to your requirement. Availability is confirmed on enquiry.",
    image: "https://images.unsplash.com/photo-1660543228631-3f2341090afe",
    imageAlt: "Marine diesel engine",
  },
  {
    slug: "roasted-edible-clay",
    name: "Roasted Edible Clay",
    category: "clay",
    categoryLabel: "Clay Products",
    summary: "Roasted edible clay supplied for wholesale and export.",
    detail:
      "Roasted edible clay supplied for wholesale and export. Grade and packaging are confirmed per order.",
    image: "https://images.pexels.com/photos/33367162/pexels-photo-33367162.jpeg",
    imageAlt: "Roasted edible clay",
  },
  {
    slug: "clay-powder",
    name: "Clay Powder",
    category: "clay",
    categoryLabel: "Clay Products",
    summary: "Clay powder supplied in bulk for wholesale and export.",
    detail:
      "Clay powder supplied in bulk for wholesale and export. Grade and packaging are confirmed per order.",
    image: "https://images.unsplash.com/photo-1614927264019-37a220a6f162",
    imageAlt: "Clay powder",
  },
  {
    slug: "ball-clay",
    name: "Ball Clay",
    category: "clay",
    categoryLabel: "Clay Products",
    summary: "Ball clay supplied in bulk for wholesale and export.",
    detail:
      "Ball clay supplied in bulk for wholesale and export. Grade and packaging are confirmed per order.",
    image: "https://images.pexels.com/photos/6714300/pexels-photo-6714300.jpeg",
    imageAlt: "Ball clay",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]) {
  return products.filter((p) => p.category === category);
}

/** Route + anchor for a product (clay lives at /clay-products, not /clay). */
export function productHref(product: Product) {
  const base = product.category === "clay" ? "clay-products" : "generators";
  return `/${base}#${product.slug}`;
}
