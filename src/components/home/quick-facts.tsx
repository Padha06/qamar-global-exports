"use client";

import { quickFacts } from "@/lib/business";
import { StaggerGroup, staggerChild } from "@/components/ui/reveal";
import { motion } from "framer-motion";

export function QuickFacts() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-px">
        <StaggerGroup className="grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:py-12">
          {quickFacts.map((f, i) => (
            <motion.div
              key={f.label}
              variants={staggerChild}
              className={`px-2 text-center lg:px-6 ${i !== 0 ? "lg:border-l lg:border-line" : ""}`}
            >
              <p className="font-display text-2xl font-bold tracking-tightest text-ink sm:text-3xl">
                {f.value}
              </p>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
                {f.label}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
