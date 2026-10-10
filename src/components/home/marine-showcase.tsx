import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products, productHref } from "@/lib/catalog";
import { IMAGES, sized } from "@/lib/images";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function MarineShowcase() {
  return (
    <section className="container-px py-20 lg:py-28">
      <SectionHeading
        eyebrow="Marine Products"
        title={
          <>
            Marine power, spares,{" "}
            <span className="text-gradient-orange">electricals &amp; automation</span>
          </>
        }
        intro="Refurbished marine engines and generators, engine spares and motor scrap, marine electrical items and automation equipment — availability confirmed on enquiry."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
            <Image
              src={sized(IMAGES.shipEngineRoom2, 1400)}
              alt="Ship engine room machinery"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={65}
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-muted">
            Marine &amp; industrial equipment, sourced and supplied worldwide.
          </p>
        </Reveal>

        <div className="lg:col-span-6">
          <ul className="border-y border-line">
            {products.map((p, i) => (
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
              <Link href="/products">View all products</Link>
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
