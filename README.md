# Qamar Global Exports — Website

Premium B2B industrial export website for **Qamar Global Exports** (Bhavnagar, Gujarat, India) —
refurbished diesel generators, marine generators and engines, roasted edible clay, clay powder and
ball clay, supplied to international buyers. **MOQ 1.**

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** — light industrial design system (paper `#F7F8F6`, navy `#10243A`, orange `#F26A21`)
- **Framer Motion** — restrained scroll reveals (respects reduced-motion)
- **Lenis** — smooth scrolling
- Fonts via `@fontsource` (Sora, Inter, IBM Plex Mono)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
npm run typecheck
```

## Configuration

Copy `.env.example` to `.env.local`:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical URL used for metadata, OG tags and the sitemap. |
| `ENQUIRY_WEBHOOK_URL` | optional | Server-side endpoint that receives website enquiries as JSON. **Until this is set, enquiry delivery is inactive** and the form offers a WhatsApp / email fallback (see below). |

### Enquiry delivery (`ENQUIRY_WEBHOOK_URL`)

The RFQ form posts to `POST /api/enquiry`. The route validates server-side and then:

- **If `ENQUIRY_WEBHOOK_URL` is set** — forwards the enquiry and returns `{ ok: true }` on success.
  Point it at something that delivers mail / stores the lead, e.g. Formspree, a CRM endpoint, Zapier,
  Make, n8n, or your own API.
- **If it is not set** — returns `{ ok: false, configured: false }`. The UI then shows a WhatsApp /
  email fallback with the enquiry pre-filled. **It never shows a false "sent" confirmation.**

No credentials are exposed to the client; the webhook lives only on the server.

## Structure

```
src/
  app/
    layout.tsx            # shell: header, footer, mobile nav, WhatsApp FAB, smooth scroll, JSON-LD
    page.tsx              # Homepage
    api/enquiry/route.ts  # RFQ endpoint (server-side validation + optional webhook delivery)
    generators/           # Refurbished diesel + marine generators & engines
    clay-products/        # Roasted edible clay, clay powder, ball clay
    about/                # About the company
    export-projects/      # Worldwide enquiry process
    certifications/       # TrustSEAL / GST / IEC
    contact/              # Contact + RFQ form
    not-found.tsx  robots.ts  sitemap.ts
  components/
    layout/   site-header, mobile-nav, site-footer, whatsapp-fab, smooth-scroll, page-hero
    home/     hero, trust-bar, power-showcase, clay-showcase, why-qamar, quick-facts,
              worldwide, process-timeline, company-note, rfq-section, final-cta
    products/ product-showcase
    ui/       button, badge, input, reveal, section-heading, logo
  lib/        business, catalog, images, seo, site, utils
```

## Content policy

Every business fact lives in `src/lib/business.ts`, `src/lib/catalog.ts` and `src/lib/site.ts`.
The copy uses **only verified information** (company details, MOQ 1, GST/IEC/TrustSEAL verifications,
the six product categories). It deliberately avoids unverified claims — no export-count statistics,
response-time guarantees, inspection/testing or food-grade claims, Incoterms, manufacturer
affiliations, or fabricated testimonials. Keep it that way when editing.

## Notes

- **Logo:** the client-supplied file is at `public/qamar-logo.png` and rendered via `components/ui/logo.tsx`.
- **Photography:** hotlinked from Unsplash / Pexels (allow-listed in `next.config.mjs`), rendered with
  `next/image`. Replace with the client's own product photography when available.
- **SEO:** metadata, Open Graph, JSON-LD `Organization`, `robots.txt` and `sitemap.xml` are generated.
