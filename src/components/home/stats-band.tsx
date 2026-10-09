"use client";

import { stats } from "@/lib/business";
import { StaggerGroup, staggerChild } from "@/components/ui/reveal";
import { motion } from "framer-motion";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white">
      <div className="absolute inset-0 blueprint opacity-50" />
      <div className="container-px relative">
        <StaggerGroup className="grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:py-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={staggerChild}
              className={`px-2 text-center lg:px-6 ${i !== 0 ? "lg:border-l lg:border-slate-200" : ""}`}
            >
              <p className="font-display text-3xl font-bold tracking-tightest text-navy-900 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {s.label}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
