import Image from "next/image";
import Link from "next/link";
import { getProductsByCategory, productHref } from "@/lib/catalog";
import { sized } from "@/lib/images";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function ClayShowcase() {
  const items = getProductsByCategory("clay");

  return (
    <section className="border-y border-line bg-[#F2F3EF]">
      <div className="container-px py-20 lg:py-28">
        <SectionHeading
          eyebrow="Clay & Materials"
          title={
            <>
              Roasted edible clay, powder &amp; <span className="text-gradient-orange">ball clay</span>
            </>
          }
          intro="Raw and roasted clay materials supplied for wholesale and export. Grade and packaging are confirmed per order."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link href={productHref(p)} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-white">
                  <Image
                    src={sized(p.image, 800)}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="/clay-products">View clay products</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact#rfq">Request a quote</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
