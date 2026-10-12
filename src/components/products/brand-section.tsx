import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Brand } from "@/lib/brands";
import { Reveal } from "@/components/ui/reveal";

export function BrandSection({ brand }: { brand: Brand }) {
  return (
    <div id={brand.slug} className="cv scroll-mt-28 border-t border-line py-12">
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative h-12 w-32 shrink-0">
          <Image
            src={brand.logo}
            alt={brand.name}
            fill
            sizes="128px"
            className="object-contain object-left"
          />
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{brand.name}</h3>
        <Link
          href="/contact#rfq"
          className="ml-auto hidden rounded-full border border-line bg-white px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-orange-500/60 hover:text-orange-700 sm:inline-flex"
        >
          Enquire
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {brand.products.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 4) * 0.04}>
            <Link
              href="/contact#rfq"
              className="group card-industrial glow-hover flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={p.image}
                  alt={`${brand.name} ${p.name}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={55}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-3.5">
                <h4 className="text-sm font-semibold leading-snug text-ink">{p.name}</h4>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-medium text-orange-600">
                  Request quote
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
