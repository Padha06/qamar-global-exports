import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const needToQuote = ["Product and quantity", "Destination country and port", "Any specification or kVA rating"];

export function Worldwide() {
  return (
    <section className="container-px py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Worldwide Enquiry"
            title={
              <>
                We welcome <span className="text-gradient-orange">international enquiries</span>
              </>
            }
            intro="Qamar Global Exports is based in Bhavnagar, Gujarat, India and supplies to buyers internationally. Send us your requirement and we will confirm product availability, pricing and shipping feasibility for your destination."
          />

          <div className="mt-8">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
              To quote accurately, please share
            </p>
            <ul className="mt-4 space-y-2.5">
              {needToQuote.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-line text-orange-600">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact#rfq">Send your requirement</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/export-projects">How enquiries work</Link>
            </Button>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
            <Image
              src="/sections/worldwide-export.webp"
              alt="Marine parts crated for worldwide export"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-muted">
            Shipping and documents are arranged for confirmed orders, in line with the agreed terms.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
