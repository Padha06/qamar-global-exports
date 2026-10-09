"use client";

import { BadgeCheck, FileCheck2, Globe2, Package, ShieldCheck } from "lucide-react";
import { trustBar } from "@/lib/business";
import { StaggerGroup, staggerChild } from "@/components/ui/reveal";
import { motion } from "framer-motion";

function iconFor(label: string) {
  if (label.includes("IEC")) return FileCheck2;
  if (label.includes("GST")) return BadgeCheck;
  if (label.includes("TrustSEAL")) return ShieldCheck;
  if (label.includes("MOQ")) return Package;
  return Globe2;
}

export function TrustBar() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-px">
        <StaggerGroup className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 sm:gap-x-10">
          {trustBar.map((label) => {
            const Icon = iconFor(label);
            return (
              <motion.span
                key={label}
                variants={staggerChild}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-ink"
              >
                <Icon className="h-4 w-4 text-orange-500" />
                {label}
              </motion.span>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
