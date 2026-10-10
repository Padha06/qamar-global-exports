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
  const pool = gallery.marine;
  const others = pool.filter((p) => p.src !== product.image);
  const thumbs = [
    others[index % others.length],
    others[(index + 1) % others.length],
  ].filter((t, i, arr) => t && arr.findIndex((x) => x.src === t.src) === i);

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
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-slate-100">
                <Image
                  src={sized(product.image, 1000)}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  quality={65}
                  className="object-cover"
                />
              </div>

              {thumbs.length > 0 && (
                <div className="hidden grid-cols-2 gap-3 sm:grid">
                  {thumbs.map((t, i) => (
                    <div
                      key={t.src}
                      className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-slate-100"
                    >
                      <Image
                        src={sized(t.src, 500)}
                        alt={`${product.name} — view ${i + 1}`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 46vw, 22vw"
                        quality={55}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
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
