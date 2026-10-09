export const business = {
  name: "Qamar Global Exports",
  legalShort: "Qamar Global Exports",
  tagline: "Delivering Trust. Powering Possibilities.",
  established: "2025",
  ceo: "Abdullah Lakhani",
  ceoTitle: "Founder & Chief Executive Officer",
  nature: "Trader — Retailer & Exporter",
  city: "Bhavnagar",
  state: "Gujarat",
  country: "India",
  addressLine: "Bhavnagar, Gujarat, India",
  email: "sales@qamarglobalexports.com",
  whatsapp: ["+91 9924860752", "+91 7567867881"],
  get whatsappDigits() {
    return this.whatsapp.map((n) => n.replace(/[^\d]/g, ""));
  },
  primaryWhatsapp: "+91 9924860752",
  moq: "MOQ 1",
  publishedAt: "2025",
} as const;

export const credentials = [
  { label: "TrustSEAL Verified", short: "TrustSEAL", detail: "IndiaMART TrustSEAL verified exporter" },
  { label: "GST Verified", short: "GST", detail: "GST-compliant registered business" },
  { label: "IEC Verified", short: "IEC", detail: "Import Export Code holder — authorised to trade worldwide" },
] as const;

export const highlights = [
  { label: "MOQ 1", detail: "Order a single unit" },
  { label: "Worldwide Supply", detail: "Africa, UK, Middle East, Europe & more" },
  { label: "TrustSEAL Verified", detail: "Verified exporter" },
  { label: "GST Verified", detail: "Registered & compliant" },
  { label: "IEC Verified", detail: "Global trade authorised" },
] as const;

export const trustBar = [
  "MOQ 1",
  "Worldwide Supply",
  "TrustSEAL Verified",
  "GST Verified",
  "IEC Verified",
] as const;

export const exportMarkets = [
  { region: "Africa", countries: "Nigeria, Kenya, Tanzania, Ghana, South Africa & more" },
  { region: "United Kingdom", countries: "UK & Ireland" },
  { region: "Kazakhstan", countries: "Kazakhstan & Central Asia" },
  { region: "Middle East", countries: "UAE, Saudi Arabia, Oman, Qatar & more" },
  { region: "Europe", countries: "EU & wider European markets" },
  { region: "South & Southeast Asia", countries: "Bangladesh, Sri Lanka, Vietnam & more" },
] as const;

/** Optional lightweight stats for the homepage band. */
export const stats = [
  { value: "MOQ 1", label: "Lowest possible order" },
  { value: "5", label: "Product lines sourced" },
  { value: "2025", label: "Established (Gujarat, India)" },
  { value: "24h", label: "Typical enquiry response" },
] as const;
