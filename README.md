# Qamar Global Exports — Website

Premium B2B industrial export website for **Qamar Global Exports** (Bhavnagar, Gujarat, India) —
worldwide supply of refurbished diesel generators, marine generators & engines, roasted edible clay,
clay powder and ball clay.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom industrial design system (navy `#0B1D3A`, safety orange `#FF6B00`)
- **Framer Motion** — scroll reveals, stagger, page micro-interactions
- **Lenis** — buttery-smooth scrolling
- Photography-led layout (real equipment imagery via `next/image`)
- Fonts via `@fontsource` (Sora, Inter, IBM Plex Mono) — self-hosted, no build-time font fetch

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

Type-check only:

```bash
npm run typecheck
```

## Configuration

Copy `.env.example` to `.env.local` and set the public site URL used for canonical/OG tags and the
sitemap:

```
NEXT_PUBLIC_SITE_URL=https://www.qamarglobalexports.com
```

All business details (name, address, CEO, WhatsApp numbers, e-mail, MOQ, certifications) live in
`src/lib/business.ts`. Product catalogue lives in `src/lib/catalog.ts`. Image sources live in
`src/lib/images.ts`.

## Structure

```
src/
  app/
    layout.tsx            # shell: header, footer, mobile nav, WhatsApp FAB, smooth scroll, JSON-LD
    page.tsx              # Homepage
    generators/           # Refurbished diesel + marine generators & engines
    clay-products/        # Roasted edible clay, clay powder, ball clay
    about/                # About / Why Qamar
    export-projects/      # Export destinations & logistics
    certifications/       # TrustSEAL / GST / IEC
    contact/              # Contact + RFQ form
    not-found.tsx  robots.ts  sitemap.ts
  components/
    layout/   site-header, mobile-nav, site-footer, whatsapp-fab, smooth-scroll, page-hero
    home/     hero, trust-bar, featured-products, brands-wall, stats-band, why-qamar,
              destinations, process-timeline, ceo-message, rfq-section
    products/ product-card, product-showcase
    ui/       button, badge, input, reveal, section-heading, marquee, logo
  lib/        business, catalog, images, seo, site, utils
```

## Notes

- The logo in `src/components/ui/logo.tsx` and `public/*.svg` is a **vector recreation** of the
  supplied brand mark (globe + cargo ship + "G" arrow + wordmark) so it stays crisp at every size.
  Drop in the original raster/SVG file as `public/qamar-logo.*` if you prefer the exact artwork.
- Images are hotlinked from Unsplash / Pexels / Wikimedia and rendered through `next/image`
  (remote hosts allow-listed in `next.config.mjs`). Swap in owned photography before launch.
- The RFQ form has no backend — it composes a prefilled WhatsApp / e-mail message and opens it.
