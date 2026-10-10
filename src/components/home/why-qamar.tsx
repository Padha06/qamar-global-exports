import { Package, ReceiptText, ShieldCheck, Ship } from "lucide-react";
import { reasons } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

const icons = {
  package: Package,
  shield: ShieldCheck,
  ship: Ship,
  receipt: ReceiptText,
} as const;

export function WhyQamar() {
  return (
    <section className="container-px py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Reveal>
            <div className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500/70" />
              Why Qamar
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl font-semibold leading-tight tracking-tightest text-ink sm:text-4xl">
              A focused, verified Indian exporter
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-sm text-muted">
              We keep our range narrow and our terms clear, so buyers know exactly what they are
              ordering before they commit.
            </p>
          </Reveal>
        </div>

        <ul className="border-y border-line">
          {reasons.map((r, i) => {
            const Icon = icons[r.icon as keyof typeof icons];
            return (
              <Reveal
                as="li"
                key={r.title}
                delay={i * 0.06}
                className="flex gap-5 border-b border-line py-6 last:border-b-0"
              >
                <Icon className="mt-1 h-5 w-5 shrink-0 text-orange-600" />
                <div>
                  <h3 className="text-lg font-semibold text-ink">{r.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{r.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
