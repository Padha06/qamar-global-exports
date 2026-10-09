import Image from "next/image";
import { Check, MessageCircle, Sparkles } from "lucide-react";
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
    `Hello Qamar Global Exports, I am interested in ${product.name}. Please share pricing and availability.`
  );

  return (
    <section id={product.slug} className="scroll-mt-24 border-b border-slate-100 py-16 lg:py-24">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          {/* Gallery */}
          <Reveal className={cn(reversed && "lg:order-2")}>
            <div className="space-y-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_70px_-45px_rgba(16,24,40,0.5)]">
                <Image
                  src={sized(shots[0], 1200)}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-orange-700">
                  {product.categoryLabel}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {shots.slice(1, 3).map((src, i) => (
                  <div key={i} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200">
                    <Image src={sized(src, 700)} alt={`${product.name} detail ${i + 1}`} fill sizes="25vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Detail */}
          <Reveal delay={0.08} className={cn(reversed && "lg:order-1")}>
            <div>
              <span className="eyebrow">{product.tagline}</span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
                {product.name}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">{product.description}</p>

              <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
                {product.specs.map((s) => (
                  <div key={s.label} className="bg-white p-4">
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{s.label}</dt>
                    <dd className="mt-1 text-sm font-medium text-navy-900">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700"
                  >
                    <Check className="h-3.5 w-3.5 text-orange-500" />
                    {h}
                  </li>
                ))}
              </ul>

              {product.brands && (
                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Brands we source</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.brands.map((b) => (
                      <span key={b} className="rounded-md border border-slate-200 px-2.5 py-1 text-xs text-slate-600">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={`/contact#rfq`}>
                    <Sparkles className="h-4 w-4" />
                    Request Quote
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
