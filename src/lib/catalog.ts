export type Product = {
  slug: string;
  name: string;
  category: "generators" | "clay";
  categoryLabel: string;
  tagline: string;
  short: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  brands?: string[];
  image: string;
  imageAlt: string;
};

export const categories = [
  {
    slug: "generators",
    name: "Generators",
    label: "Power Systems",
    short: "Refurbished Diesel & Marine Generators",
    description:
      "Refurbished diesel generator sets, marine diesel generators and marine diesel engines — sourced, inspected and exported worldwide.",
    image: "https://images.unsplash.com/photo-1523559094051-53bac879eb80",
    accent: "Power",
  },
  {
    slug: "clay-products",
    name: "Clay Products",
    label: "Industrial Minerals",
    short: "Roasted Edible Clay, Clay Powder & Ball Clay",
    description:
      "Roasted edible clay, finely milled clay powder and ball clay supplied in retail and bulk export packing.",
    image: "https://images.pexels.com/photos/33367162/pexels-photo-33367162.jpeg",
    accent: "Minerals",
  },
] as const;

export const products: Product[] = [
  {
    slug: "refurbished-diesel-generators",
    name: "Refurbished Diesel Generators",
    category: "generators",
    categoryLabel: "Generators",
    tagline: "Cummins • Kirloskar • Caterpillar-style",
    short: "Fully refurbished diesel generator sets in multiple kVA ratings — inspected and export-ready.",
    description:
      "We supply refurbished diesel generator sets from leading brands such as Cummins, Kirloskar and Caterpillar-style units. Every set is inspected, serviced and tested before dispatch, and is available across popular kVA ratings — from compact 10 kVA sets up to heavy-duty 320 kVA and larger on request.",
    specs: [
      { label: "Configuration", value: "Sound-proof canopy / open set" },
      { label: "Ratings", value: "10, 62.5, 125, 320 kVA & custom" },
      { label: "Phase", value: "Single / Three phase" },
      { label: "Condition", value: "Refurbished & tested" },
    ],
    highlights: ["Brands: Cummins, Kirloskar, Caterpillar-style", "Multiple kVA ratings", "Tested before dispatch", "MOQ 1"],
    brands: ["Cummins", "Kirloskar", "Caterpillar", "Perkins", "Mahindra", "Ashok Leyland"],
    image: "https://images.unsplash.com/photo-1759692071712-adc78a8516c8",
    imageAlt: "Refurbished industrial diesel generator set",
  },
  {
    slug: "marine-diesel-generators",
    name: "Marine Diesel Generators",
    category: "generators",
    categoryLabel: "Generators",
    tagline: "Auxiliary & shipboard power",
    short: "Marine-grade diesel generator sets built for shipboard auxiliary power and continuous duty.",
    description:
      "Marine diesel generators for auxiliary and shipboard power applications, supplied in corrosion-resistant marine specification. Suitable for vessels, workboats and offshore requirements, available refurbished and export-ready.",
    specs: [
      { label: "Application", value: "Shipboard / auxiliary power" },
      { label: "Cooling", value: "Marine heat-exchanger / keel cooled" },
      { label: "Condition", value: "Refurbished & tested" },
      { label: "MOQ", value: "1 unit" },
    ],
    highlights: ["Marine specification", "Auxiliary power", "Corrosion-resistant build", "Worldwide shipping"],
    image: "https://images.unsplash.com/photo-1685720543979-e9524b3b0176",
    imageAlt: "Marine diesel generator engine room",
  },
  {
    slug: "marine-diesel-engines",
    name: "Marine Diesel Engines",
    category: "generators",
    categoryLabel: "Generators",
    tagline: "Propulsion & auxiliary engines",
    short: "Marine diesel engines for propulsion and auxiliary duty, sourced and prepared for export.",
    description:
      "Marine diesel engines for propulsion and auxiliary duty across workboats, fishing vessels and commercial craft. We source engines and match them to your vessel requirement, with inspection and documentation support for international buyers.",
    specs: [
      { label: "Duty", value: "Propulsion / auxiliary" },
      { label: "Configuration", value: "Inline & V-type" },
      { label: "Condition", value: "Refurbished & tested" },
      { label: "MOQ", value: "1 unit" },
    ],
    highlights: ["Custom matched to vessel", "Inline & V-type", "Inspection supported", "Export documentation"],
    image: "https://images.pexels.com/photos/13757275/pexels-photo-13757275.jpeg",
    imageAlt: "Heavy marine diesel engine under service",
  },
  {
    slug: "roasted-edible-clay",
    name: "Roasted Edible Clay",
    category: "clay",
    categoryLabel: "Clay Products",
    tagline: "Food-grade, export packed",
    short: "Food-grade roasted edible clay, cleaned, roasted and packed for retail and bulk export.",
    description:
      "Roasted edible clay prepared to a clean, food-grade standard — roasted, sieved and packed for retail or bulk export markets. Available in retail packs and bulk bags for importers, distributors and end users.",
    specs: [
      { label: "Grade", value: "Food / edible" },
      { label: "Process", value: "Roasted & sieved" },
      { label: "Packing", value: "Retail packs / bulk bags" },
      { label: "MOQ", value: "1 unit" },
    ],
    highlights: ["Food-grade standard", "Retail & bulk packing", "Export ready", "Worldwide supply"],
    image: "https://images.pexels.com/photos/33367162/pexels-photo-33367162.jpeg",
    imageAlt: "Roasted edible clay chunks",
  },
  {
    slug: "clay-powder",
    name: "Clay Powder",
    category: "clay",
    categoryLabel: "Clay Products",
    tagline: "Fine-milled, consistent",
    short: "Finely milled clay powder with consistent texture for industrial and food applications.",
    description:
      "Fine-milled clay powder supplied with consistent mesh and texture for a range of industrial, cosmetic and food-related applications. Available in retail and bulk export packing with MOQ 1.",
    specs: [
      { label: "Form", value: "Fine powder" },
      { label: "Mesh", value: "Custom on request" },
      { label: "Packing", value: "Retail packs / bulk bags" },
      { label: "MOQ", value: "1 unit" },
    ],
    highlights: ["Consistent mesh", "Multiple applications", "Retail & bulk", "Quality focused"],
    image: "https://images.unsplash.com/photo-1614927264019-37a220a6f162",
    imageAlt: "Fine brown clay powder",
  },
  {
    slug: "ball-clay",
    name: "Ball Clay",
    category: "clay",
    categoryLabel: "Clay Products",
    tagline: "Plastic, high-bonding",
    short: "Plastic ball clay with strong bonding properties for ceramics and industrial use.",
    description:
      "Ball clay with excellent plasticity and bonding strength for ceramics, tiles and industrial applications. Supplied in bulk export packing with transparent grading and MOQ 1.",
    specs: [
      { label: "Properties", value: "Plastic, high bonding" },
      { label: "Application", value: "Ceramics / industrial" },
      { label: "Packing", value: "Bulk / bulk bags" },
      { label: "MOQ", value: "1 unit" },
    ],
    highlights: ["High plasticity", "Strong bonding", "Bulk packing", "Transparent grading"],
    image: "https://images.pexels.com/photos/5302904/pexels-photo-5302904.jpeg",
    imageAlt: "Raw ball clay material",
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
