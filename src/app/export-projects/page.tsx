import type { Metadata } from "next";
import Image from "next/image";
import { FileText, PackageCheck, Ship, MessagesSquare } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { IMAGES, gallery, sized } from "@/lib/images";
import { PageHero } from "@/components/layout/page-hero";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { RfqSection } from "@/components/home/rfq-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Worldwide Enquiry",
  description:
    "How international enquiries work at Qamar Global Exports — share your requirement, we confirm availability, issue a written quotation, and arrange shipping for confirmed orders from India.",
  path: "/export-projects",
  keywords: ["generator export enquiry", "clay export enquiry", "international supply India"],
});

const support = [
  { icon: PackageCheck, title: "Export packing", detail: "Packing suited to the product and mode of transport, agreed per order." },
  { icon: FileText, title: "Documentation", detail: "Commercial invoice and standard export documents for confirmed orders." },
  { icon: Ship, title: "Freight coordination", detail: "Sea or air freight arranged with the buyer, on agreed terms." },
  { icon: MessagesSquare, title: "Direct communication", detail: "One point of contact from enquiry through to dispatch." },
];

export default function WorldwideEnquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Worldwide Enquiry"
        title={
          <>
            How international <span className="text-gradient-orange">enquiries work</span>
          </>
        }
        intro="We supply from Bhavnagar, Gujarat, India to buyers internationally. This page explains what happens from your first message to a confirmed order."
        image={sized(IMAGES.containerShip, 2000)}
        imageAlt="Container ship at port"
        crumbs={[{ label: "Worldwide Enquiry" }]}
      />

      <ProcessTimeline />

      <section className="border-y border-line bg-white">
        <div className="container-px py-20 lg:py-24">
          <SectionHeading
            eyebrow="Shipping & Support"
            title={
              <>
                What we can <span className="text-gradient-orange">support</span>
              </>
            }
            intro="For confirmed orders, we coordinate the practical details with the buyer. Exact terms, schedules and documents are agreed per shipment."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {support.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.06} className="bg-white p-6">
                  <Icon className="h-6 w-6 text-orange-500" />
                  <h3 className="mt-4 text-base font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.detail}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-px py-20 lg:py-24">
        <SectionHeading
          eyebrow="Our Range"
          title="Products we supply"
          intro="A focused set of power equipment and clay products. Availability is confirmed on enquiry."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[gallery.generators[0], gallery.marine[0], gallery.clay[0], gallery.clay[1]].map((g, i) => (
            <Reveal key={g.src} delay={i * 0.06}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
                <Image
                  src={sized(g.src, 700)}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted">
                {g.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <RfqSection />
    </>
  );
}
