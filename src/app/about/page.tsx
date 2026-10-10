import type { Metadata } from "next";
import { BadgeCheck, Building2, FileCheck2, ShieldCheck } from "lucide-react";
import { business, credentials } from "@/lib/business";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { IMAGES, sized } from "@/lib/images";
import { PageHero } from "@/components/layout/page-hero";
import { QuickFacts } from "@/components/home/quick-facts";
import { WhyQamar } from "@/components/home/why-qamar";
import { CompanyNote } from "@/components/home/company-note";
import { RfqSection } from "@/components/home/rfq-section";
import { Reveal } from "@/components/ui/reveal";

const credIcons = { TrustSEAL: ShieldCheck, GST: BadgeCheck, IEC: FileCheck2 } as const;

export const metadata: Metadata = buildMetadata({
  title: "About & Why Qamar Global Exports",
  description:
    "Qamar Global Exports is a TrustSEAL, GST and IEC verified trader and exporter based in Bhavnagar, Gujarat, India, supplying generators and clay products to international buyers with MOQ 1.",
  path: "/about",
  keywords: ["Qamar Global Exports", "verified exporter India", "Bhavnagar trader exporter"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Company"
        title={
          <>
            A verified Indian exporter built on{" "}
            <span className="text-gradient-orange">clarity</span>
          </>
        }
        intro={`${business.name} is a trader, retailer and exporter established in ${business.established} in ${business.city}, ${business.state}, India, supplying refurbished generators and clay products to international buyers.`}
        image={sized(IMAGES.factory, 1400)}
        imageAlt="Industrial operations"
        crumbs={[{ label: "About" }]}
      />

      <section className="container-px py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
                A focused range, clearly quoted
              </h2>
            </Reveal>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                {business.name} keeps its range deliberately narrow so buyers know exactly what they
                are sourcing. We deal in refurbished diesel and marine generators, marine diesel
                engines, and clay products.
              </p>
              <p>
                As a {business.nature.toLowerCase()}, we work with importers, traders and end users.
                Our {business.moq} policy lets a buyer start with a single unit before committing to
                volume.
              </p>
              <p>
                Every enquiry is answered with a written quotation covering the agreed specification,
                price and terms. Availability is confirmed before any order is placed.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { k: "Established", v: business.established },
                { k: "Headquarters", v: `${business.city}, ${business.state}` },
                { k: "Role", v: "Trader · Exporter" },
                { k: "MOQ", v: "1 unit" },
                { k: "Supply", v: "International" },
                { k: "CEO", v: business.ceo },
              ].map((row, i) => (
                <Reveal
                  key={row.k}
                  delay={i * 0.05}
                  className="rounded-2xl border border-line bg-white p-4"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">{row.k}</p>
                  <p className="mt-1 text-sm font-medium text-ink">{row.v}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-white p-7 shadow-[0_30px_70px_-50px_rgba(16,36,58,0.5)]">
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-orange-500" />
                <h3 className="text-lg font-semibold text-ink">Verified &amp; Registered</h3>
              </div>
              <p className="mt-3 text-sm text-muted">
                The following verifications are held by the business. No certificate numbers or
                artwork are published here.
              </p>
              <ul className="mt-6 space-y-4">
                {credentials.map((c) => {
                  const Icon = credIcons[c.short as keyof typeof credIcons];
                  return (
                    <li key={c.short} className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 text-orange-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{c.label}</p>
                        <p className="text-xs text-muted">{c.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-muted">
                {siteUrl.replace("https://", "")} · {business.email}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <QuickFacts />
      <WhyQamar />
      <CompanyNote />
      <RfqSection />
    </>
  );
}
