import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/brands";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function BrandsSection() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-px py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Brands We Supply"
          title={
            <>
              Equipment &amp; spares for the marine industry&apos;s{" "}
              <span className="text-gradient-orange">leading brands</span>
            </>
          }
          intro="We source and supply engines, generators, spares, electrical and automation equipment across the marine brands below. Availability is confirmed on enquiry."
        />

        <Reveal delay={0.05}>
          <div className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4 lg:grid-cols-5">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/products#${b.slug}`}
                aria-label={b.name}
                className="group flex h-24 items-center justify-center bg-white p-5 transition-colors hover:bg-slate-50"
              >
                <div className="relative h-9 w-full max-w-[150px]">
                  <Image
                    src={b.logo}
                    alt={b.name}
                    fill
                    sizes="150px"
                    className="object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 flex justify-center">
            <Button asChild>
              <Link href="/products#brands">Explore all brands &amp; products</Link>
            </Button>
          </div>
          <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-wider text-muted">
            All trademarks belong to their respective owners
          </p>
        </Reveal>
      </div>
    </section>
  );
}
