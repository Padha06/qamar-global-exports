export const business = {
  name: "Qamar Global Exports",
  tagline: "Delivering Trust. Powering Possibilities.",
  established: "2025",
  ceo: "Abdullah Lakhani",
  ceoTitle: "Chief Executive Officer",
  nature: "Trader — Retailer & Exporter",
  city: "Bhavnagar",
  state: "Gujarat",
  country: "India",
  addressLine: "Bhavnagar, Gujarat, India",
  email: "sales@qamarglobalexports.com",
  whatsapp: ["+91 9924860752", "+91 7567867881"],
  primaryWhatsapp: "+91 9924860752",
  indiamart: "https://www.indiamart.com/qamarglobalexport/",
  linkedin:
    "https://www.linkedin.com/in/abdullah-lakhani19?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  moq: "MOQ 1",
  /** Short, factual one-liner used in metadata and the footer. */
  blurb:
    "Refurbished marine diesel engines, marine generators, engine spares, electrical items and automation products supplied from India to international buyers.",
} as const;

/**
 * Only verifications supplied by the business. Labels are shown as-is; no
 * certificate artwork, numbers or external links are fabricated.
 */
export const credentials = [
  { label: "TrustSEAL Verified", short: "TrustSEAL", detail: "Listed as a TrustSEAL-verified seller." },
  { label: "GST Verified", short: "GST", detail: "GST-registered Indian business." },
  { label: "IEC Verified", short: "IEC", detail: "Holds an Import Export Code (IEC) to trade internationally." },
] as const;

export const trustBar = [
  "MOQ 1",
  "Worldwide enquiries",
  "TrustSEAL Verified",
  "GST Verified",
  "IEC Verified",
] as const;

/** Factual quick facts (no invented statistics). */
export const quickFacts = [
  { value: "2025", label: "Established" },
  { value: "Bhavnagar", label: "Gujarat, India" },
  { value: "MOQ 1", label: "Minimum order" },
  { value: "6", label: "Marine categories" },
] as const;
