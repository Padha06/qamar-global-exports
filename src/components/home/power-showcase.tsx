import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProductsByCategory, productHref } from "@/lib/catalog";
import { kvaRatings } from "@/lib/site";
import { IMAGES, sized } from "@/lib/images";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function PowerShowcase() {
  const items = getProductsByCategory("generators");

  return (
    <section className="container-px py-20 lg:py-28">
      <SectionHeading
        eyebrow="Power Equipment"
        title={
          <>
            Diesel &amp; marine <span className="text-gradient-orange">generators and engines</span>
          </>
        }
        intro="Refurbished generator sets and marine power equipment, sourced to your requirement. Availability and specification are confirmed on enquiry."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Feature image + ratings */}
        <Reveal className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
            <Image
              src={sized(IMAGES.gensetYellow, 1600)}
              alt="Refurbished industrial diesel generator set"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              Example ratings
            </span>
            {kvaRatings.map((r) => (
              <span
                key={r}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink"
              >
                {r}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted">
            Example ratings shown for reference — actual availability is confirmed on enquiry.
          </p>
        </Reveal>

        {/* Product rows */}
        <div className="lg:col-span-5">
          <ul className="border-y border-line">
            {items.map((p, i) => (
              <li key={p.slug} className="border-b border-line last:border-b-0">
                <Link href={productHref(p)} className="group flex items-start gap-4 py-5">
                  <span className="mt-1 font-mono text-xs text-muted">0{i + 1}</span>
                  <span className="flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-lg font-semibold text-ink">{p.name}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-orange-600" />
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{p.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/generators">View generators</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact#rfq">Request a quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
