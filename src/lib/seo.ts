import type { Metadata } from "next";
import { business } from "./business";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.qamarglobalexportz.com";

export const siteName = business.name;

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/og-image.svg",
}: MetaInput): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${business.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "qamarglobalexportz",
      "qamarglobalexports",
      "qamar global exports",
      "qamar global exportz",
      "qamar global exports bhavnagar",
      "marine diesel engine exporter",
      "marine diesel generator",
      "marine engine parts",
      "engine spares",
      "motor scrap",
      "marine electrical items",
      "automation products",
      "Bhavnagar Gujarat exporter",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: business.name }],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export function productLd(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: business.name },
    category: "Industrial supply",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: business.name },
    },
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: business.name,
  url: siteUrl,
  email: business.email,
  foundingDate: business.established,
  slogan: business.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.state,
    addressCountry: "IN",
  },
  contactPoint: business.whatsapp.map((n) => ({
    "@type": "ContactPoint",
    telephone: n,
    contactType: "sales",
    areaServed: "Worldwide",
  })),
};
