import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { gallery, sized } from "@/lib/images";
import { business } from "@/lib/business";
import { cn, waLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function ProductShowcase({ product, index = 0 }: { product: Product; index?: number }) {
  const reversed = index % 2 === 1;
  const pool = product.category === "generators" ? gallery.generators : gallery.clay;
  const shots = [product.image, pool[2].src, pool[3].src].filter(
    (src, i, arr) => arr.indexOf(src) === i
  );

  const wa = waLink(
    business.primaryWhatsapp,
    `Hello Qamar Global Exports, I am interested in ${product.name}. Please share availability and pricing.`
  );

  return (
    <section id={product.slug} className="scroll-mt-24 border-b border-line py-16 lg:py-24">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          {/* Gallery */}
          <Reveal className={cn(reversed && "lg:order-2")}>
            <div className="space-y-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
                <Image
                  src={sized(shots[0], 1200)}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {shots.slice(1, 3).map((src, i) => (
                  <div key={i} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line">
                    <Image
                      src={sized(src, 700)}
                      alt={`${product.name} — view ${i + 1}`}
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Detail */}
          <Reveal delay={0.08} className={cn(reversed && "lg:order-1")}>
            <div>
              <span className="eyebrow">{product.categoryLabel}</span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {product.name}
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{product.detail}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={`/contact#rfq`}>
                    <ArrowUpRight className="h-4 w-4" />
                    Request a Quote
                  </a>
                </Button>
                <Button asChild variant="wa">
                  <a href={wa} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
