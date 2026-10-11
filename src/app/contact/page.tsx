import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { business } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { waLink } from "@/lib/utils";
import { PageHero } from "@/components/layout/page-hero";
import { RfqSection } from "@/components/home/rfq-section";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Request a Quote",
  description:
    "Contact Qamar Global Exports in Bhavnagar, Gujarat, India. WhatsApp +91 9924860752 / +91 7567867881 or email sales@qamarglobalexports.com for a quote — MOQ 1.",
  path: "/contact",
  keywords: ["contact generator exporter", "request quote generator", "WhatsApp diesel generator"],
});

const cards = [
  { icon: MessageCircle, label: "WhatsApp", lines: business.whatsapp, href: waLink(business.primaryWhatsapp, "Hello Qamar Global Exports, I would like a quotation."), tone: "text-[#128C3E]" },
  { icon: Mail, label: "Email", lines: [business.email], href: `mailto:${business.email}`, tone: "text-orange-500" },
  { icon: MapPin, label: "Location", lines: [business.addressLine], href: undefined, tone: "text-orange-500" },
  { icon: Clock, label: "Response", lines: ["We aim to reply promptly"], href: undefined, tone: "text-orange-500" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about your <span className="text-gradient-orange">requirement</span>
          </>
        }
        intro="Share what you need and we'll confirm availability and send a written quotation."
        image="/sections/about-warehouse.webp"
        imageAlt="Warehouse staging area"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="container-px -mt-8 pb-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const Icon = c.icon;
            const inner = (
              <div className="card-industrial glow-hover h-full p-5">
                <Icon className={`h-5 w-5 ${c.tone}`} />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  {c.label}
                </p>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm font-medium text-navy-900">
                    {l}
                  </p>
                ))}
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div key={c.label}>{inner}</div>
            );
          })}
        </div>
      </section>

      <RfqSection />
    </>
  );
}
