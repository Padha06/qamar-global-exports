export const nav = [
  { label: "Home", short: "Home", href: "/" },
  { label: "Generators", short: "Generators", href: "/generators" },
  { label: "Clay Products", short: "Clay", href: "/clay-products" },
  { label: "About", short: "About", href: "/about" },
  { label: "Worldwide Enquiry", short: "Worldwide", href: "/export-projects" },
  { label: "Certifications", short: "Certifications", href: "/certifications" },
  { label: "Contact", short: "Contact", href: "/contact" },
] as const;

/** Reasons to enquire — only supported, non-committal statements. */
export const reasons = [
  {
    title: "Low minimum order",
    detail: "MOQ 1 — start with a single unit to evaluate before committing to volume.",
    icon: "package",
  },
  {
    title: "Verified business",
    detail: "GST, IEC and TrustSEAL verified Indian exporter based in Bhavnagar, Gujarat.",
    icon: "shield",
  },
  {
    title: "Focused range",
    detail: "We deal in a defined set of power equipment and clay products rather than everything.",
    icon: "layers",
  },
  {
    title: "Transparent approach",
    detail: "Clear written quotations and straightforward communication — no hidden charges.",
    icon: "receipt",
  },
] as const;

/** Enquiry process — describes what happens, without service guarantees. */
export const processSteps = [
  {
    step: "01",
    title: "Share your requirement",
    detail: "Tell us the product, quantity or kVA rating you are looking for, and your destination.",
  },
  {
    step: "02",
    title: "We check availability",
    detail: "We confirm what can be sourced or supplied for your specific requirement.",
  },
  {
    step: "03",
    title: "Quotation & terms",
    detail: "You receive a written quotation with the agreed specification, price and terms.",
  },
  {
    step: "04",
    title: "Shipping arrangement",
    detail: "For confirmed orders we coordinate packing, documents and shipping with you.",
  },
] as const;

/** Example kVA ratings — always framed as an example, not guaranteed stock. */
export const kvaRatings = ["10 kVA", "62.5 kVA", "125 kVA", "320 kVA"] as const;
