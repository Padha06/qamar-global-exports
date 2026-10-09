import { processSteps } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ProcessTimeline() {
  return (
    <section className="container-px py-20 lg:py-28">
      <SectionHeading
        eyebrow="How It Works"
        title={
          <>
            From enquiry to delivery in{" "}
            <span className="text-gradient-orange">four clear steps</span>
          </>
        }
        intro="A transparent process designed for first-time importers and repeat trade buyers alike."
      />

      <ol className="mt-14 grid gap-6 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.step} delay={i * 0.08} className="relative">
            <div className="relative h-full rounded-2xl border border-line bg-white p-6 shadow-[0_18px_40px_-34px_rgba(16,36,58,0.35)]">
              <span className="font-display text-4xl font-bold tracking-tightest text-ink/10">
                {step.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
              {i < processSteps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-orange-500/60 to-transparent lg:block" />
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
