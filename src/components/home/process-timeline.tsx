"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";

function StackCard({
  step,
  i,
}: {
  step: (typeof processSteps)[number];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.92", "start 0.32"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `calc(var(--header-h) + ${1.25 + i * 0.85}rem)`, zIndex: 10 + i }}
    >
      <motion.div
        style={reduce ? undefined : { scale, y }}
        className="mb-6 rounded-2xl border border-line bg-white p-6 shadow-[0_26px_60px_-40px_rgba(16,36,58,0.5)] md:mb-8 md:p-8"
      >
        <div className="flex items-start gap-5">
          <span className="font-display text-4xl font-bold tracking-tightest text-ink/10 md:text-5xl">
            {step.step}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-ink md:text-xl">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{step.detail}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProcessTimeline() {
  return (
    <section className="container-px pb-28 pt-20 lg:pb-32 lg:pt-28">
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
      <div className="mt-14">
        {processSteps.map((step, i) => (
          <StackCard key={step.step} step={step} i={i} />
        ))}
      </div>
    </section>
  );
}
