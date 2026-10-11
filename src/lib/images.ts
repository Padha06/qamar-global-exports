/**
 * Image helpers. All site imagery is now self-hosted (WebP) in /public, so
 * `sized()` simply passes local paths through (and still supports remote
 * Unsplash/Pexels URLs if ever needed).
 */

const UNSPLASH = "https://images.unsplash.com/";
const PEXELS = "https://images.pexels.com/photos/";

export function sized(url: string, w = 1600, q = 78) {
  if (url.startsWith(UNSPLASH)) {
    return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
  }
  if (url.startsWith(PEXELS)) {
    return `${url}?auto=compress&cs=tinysrgb&w=${w}`;
  }
  return url;
}

export const gallery = {
  marine: [
    { src: "/products/marine-engines.webp", alt: "Refurbished marine diesel engine", caption: "Marine diesel engines" },
    { src: "/products/marine-generators.webp", alt: "Marine diesel generator set", caption: "Marine generators" },
    { src: "/products/engine-spares.webp", alt: "Marine engine spare parts", caption: "Engine spares" },
    { src: "/products/motor-scrap.webp", alt: "Used motor parts and scrap", caption: "Motor scrap" },
    { src: "/products/electrical-items.webp", alt: "Marine electrical panel", caption: "Electrical items" },
    { src: "/products/automation-products.webp", alt: "Automation control panel", caption: "Automation products" },
  ],
} as const;
