import type { Metadata } from "next";
import { BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { business, credentials } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { RfqSection } from "@/components/home/rfq-section";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Certifications & Verification",
  description:
    "Qamar Global Exports is TrustSEAL Verified, GST Verified and IEC Verified — giving international buyers confidence and a compliant export paper trail.",
  path: "/certifications",
  keywords: ["TrustSEAL verified exporter", "GST verified exporter", "IEC verified India"],
});

const icons = { TrustSEAL: ShieldCheck, GST: BadgeCheck, IEC: FileCheck2 } as const;

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications & Verification"
        title={
          <>
            Verified, compliant &amp; <span className="text-gradient-orange">trade-ready</span>
          </>
        }
        intro="Verification labels confirm the business details you are dealing with. No certificate numbers or artwork are published here."
        image="/products/electrical-items.webp"
        imageAlt="Marine electrical control panel"
        crumbs={[{ label: "Certifications" }]}
      />

      <section className="container-px py-20 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {credentials.map((c, i) => {
            const Icon = icons[c.short as keyof typeof icons];
            return (
              <Reveal key={c.short} delay={i * 0.08} className="card-industrial glow-hover p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-600">
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-navy-900">{c.label}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.detail}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Active
                </span>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_40px_-30px_rgba(16,24,40,0.35)] lg:p-10">
            <h3 className="text-xl font-semibold text-ink">
              Export documentation
            </h3>
            <p className="mt-3 max-w-2xl text-muted">
              For confirmed orders we provide standard export documents. Specific requirements are
              agreed with the buyer for each shipment.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Commercial Invoice",
                "Packing List",
                "Bill of Lading / Airway Bill",
                "Certificate of Origin",
                "IEC & GST details",
                "Other documents on request",
              ].map((doc) => (
                <li
                  key={doc}
                  className="flex items-center gap-3 rounded-xl border border-line bg-slate-50 px-4 py-3 text-sm text-ink"
                >
                  <FileCheck2 className="h-4 w-4 shrink-0 text-orange-500" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <RfqSection />
    </>
  );
}
