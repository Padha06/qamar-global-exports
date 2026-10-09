import type { Metadata } from "next";
import Image from "next/image";
import { Boxes, Container, FileText, Plane, Ship, Warehouse } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { IMAGES, gallery, sized } from "@/lib/images";
import { PageHero } from "@/components/layout/page-hero";
import { Destinations } from "@/components/home/destinations";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { RfqSection } from "@/components/home/rfq-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Export Projects & Destinations",
  description:
    "Qamar Global Exports ships generators and clay worldwide — sea and container freight to Africa, the UK, Kazakhstan, the Middle East, Europe and beyond, FOB and CIF terms.",
  path: "/export-projects",
  keywords: ["generator export Africa", "export to Kazakhstan", "clay export UK", "container freight India"],
});

const logistics = [
  { icon: Ship, title: "Sea Freight", detail: "FCL & LCL container shipping to major world ports." },
  { icon: Container, title: "Export Packing", detail: "Generators crated and clay palletised or bulk-bagged." },
  { icon: FileText, title: "Documentation", detail: "Invoice, packing list, COO and export papers handled." },
  { icon: Plane, title: "Air Freight", detail: "Urgent and sample consignments by air on request." },
  { icon: Warehouse, title: "Storage & Staging", detail: "Warehouse staging before container loading." },
  { icon: Boxes, title: "Terms", detail: "FOB, CIF and door-delivery options tailored to you." },
];

export default function ExportProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Export Projects & Destinations"
        title={
          <>
            From Bhavnagar to ports <span className="text-gradient-orange">around the world</span>
          </>
        }
        intro="A logistics network built for heavy equipment and bulk materials — moving generators and clay to importers and end-users across continents."
        image={sized(IMAGES.containerShip, 2000)}
        imageAlt="Container cargo ship at port"
        crumbs={[{ label: "Export Projects" }]}
      />

      <Destinations />

      <section className="container-px py-20 lg:py-28">
        <SectionHeading
          eyebrow="Logistics Capability"
          title={
            <>
              Export logistics, <span className="text-gradient-orange">handled end-to-end</span>
            </>
          }
          intro="We coordinate packing, documentation and freight so your cargo arrives safely and on time."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {logistics.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.06} className="card-industrial glow-hover p-6">
                <Icon className="h-6 w-6 text-orange-500" />
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-px pb-20 lg:pb-28">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[gallery.generators[0], gallery.marine[2], gallery.clay[0], gallery.generators[3]].map((g, i) => (
            <Reveal key={g.src} delay={i * 0.06}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200">
                <Image src={sized(g.src, 700)} alt={g.alt} fill sizes="25vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 to-transparent" />
                <p className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wider text-white">
                  {g.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessTimeline />
      <RfqSection />
    </>
  );
}
