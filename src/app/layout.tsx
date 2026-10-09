import type { Metadata, Viewport } from "next";
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

import { business } from "@/lib/business";
import { buildMetadata, organizationLd, siteUrl } from "@/lib/seo";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: `${business.name} — Refurbished Diesel Generators, Marine Generators & Edible Clay`,
    description:
      "Qamar Global Exports, Bhavnagar (Gujarat), India — worldwide supply of refurbished diesel generators, marine diesel generators & engines, roasted edible clay, clay powder and ball clay. MOQ 1. TrustSEAL, GST & IEC verified.",
    path: "/",
    image: "/og-image.svg",
  }),
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
  authors: [{ name: business.ceo }],
  creator: business.name,
  category: "Industrial B2B Export",
};

export const viewport: Viewport = {
  themeColor: "#F7F8F6",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[#F7F8F6]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <SmoothScroll />
        <div className="flex min-h-dvh flex-col pb-[calc(var(--bottom-nav-h)+var(--safe-b))] lg:pb-0">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <MobileNav />
        <WhatsAppFab />
      </body>
    </html>
  );
}
