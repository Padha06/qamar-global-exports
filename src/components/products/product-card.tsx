import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { productHref } from "@/lib/catalog";
import { sized } from "@/lib/images";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={productHref(product)}
      className="group card-industrial glow-hover flex flex-col"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={sized(product.image, 900)}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
        <span className="glass absolute left-3 top-3 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-orange-700">
          {product.categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{product.tagline}</p>
        <h3 className="mt-2 text-lg font-semibold text-navy-900">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{product.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-orange-600">
          View details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
