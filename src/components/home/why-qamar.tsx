"use client";

import { Globe2, Package, ReceiptText, ShieldCheck } from "lucide-react";
import { whyQamar } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, staggerChild } from "@/components/ui/reveal";
import { motion } from "framer-motion";

const icons = { package: Package, shield: ShieldCheck, globe: Globe2, receipt: ReceiptText } as const;

export function WhyQamar() {
  return (
    <section className="container-px py-20 lg:py-28">
      <SectionHeading
        eyebrow="Why Qamar Global Exports"
        title={
          <>
            Built for international buyers who need{" "}
            <span className="text-gradient-orange">trust and precision</span>
          </>
        }
        intro="From a single unit to full container loads, we make global sourcing straightforward, transparent and reliable."
      />

      <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyQamar.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <motion.article
              key={item.title}
              variants={staggerChild}
              className="card-industrial glow-hover group p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
            </motion.article>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
