import Image from "next/image";
import { business } from "@/lib/business";
import { IMAGES, sized } from "@/lib/images";
import { Reveal } from "@/components/ui/reveal";

const facts: [string, string][] = [
  ["Established", business.established],
  ["Location", `${business.city}, ${business.state}`],
  ["Role", "Trader · Exporter"],
  ["CEO", business.ceo],
];

export function CompanyNote() {
  return (
    <section className="container-px py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line">
            <Image
              src={sized(IMAGES.factory, 1200)}
              alt="Industrial operations"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500/70" />
              About the Company
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">Who we are</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 leading-relaxed text-muted">
              {business.name} is a trader, retailer and exporter established in {business.established} in{" "}
              {business.city}, {business.state}, India. We deal in refurbished marine diesel engines and
              generators, marine engine parts, engine spares &amp; motor scrap, marine electrical items
              and automation products, supplied to international buyers.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 leading-relaxed text-muted">
              Our approach is straightforward — keep a focused range, quote clearly, and confirm every
              detail with the buyer before an order is placed. Minimum order quantity is one unit.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line text-sm">
              {facts.map(([k, v]) => (
                <div key={k} className="bg-white p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">{k}</dt>
                  <dd className="mt-1 font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
