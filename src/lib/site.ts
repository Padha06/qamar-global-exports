export const nav = [
  { label: "Home", href: "/" },
  { label: "Generators", href: "/generators" },
  { label: "Clay Products", href: "/clay-products" },
  { label: "About", href: "/about" },
  { label: "Export Projects", href: "/export-projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
] as const;

export const whyQamar = [
  {
    title: "Low MOQ — Order 1",
    detail: "Start with a single unit. Minimum order quantity of just 1 makes it easy to trial Qamar before scaling up.",
    icon: "package",
  },
  {
    title: "Quality Inspection",
    detail: "Generators are inspected, serviced and tested; clay products are checked and graded before dispatch.",
    icon: "shield",
  },
  {
    title: "Worldwide Logistics",
    detail: "Sea and container freight to Africa, the UK, Kazakhstan, the Middle East, Europe and beyond.",
    icon: "globe",
  },
  {
    title: "Transparent Pricing",
    detail: "Clear quotations with no hidden charges. You always know what you are paying for.",
    icon: "receipt",
  },
] as const;

export const processSteps = [
  { step: "01", title: "Share Your Requirement", detail: "Send us the product, kVA rating or quantity you need via WhatsApp, e-mail or the RFQ form." },
  { step: "02", title: "Receive a Quotation", detail: "We confirm availability and send a transparent quotation with specifications and pricing." },
  { step: "03", title: "Inspection & Documentation", detail: "Units are inspected and tested. Export documents and packing are prepared." },
  { step: "04", title: "Worldwide Dispatch", detail: "Your order ships by sea or air with tracking — from Bhavnagar, Gujarat to your port." },
] as const;

export const productBrands = [
  "Cummins",
  "Kirloskar",
  "Caterpillar",
  "Perkins",
  "Mahindra",
  "Ashok Leyland",
  "Cummins Marine",
  "Caterpillar Marine",
] as const;
