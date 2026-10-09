"use client";

import { BadgeCheck, FileCheck2, Globe2, Package, ShieldCheck } from "lucide-react";
import { StaggerGroup, staggerChild } from "@/components/ui/reveal";
import { motion } from "framer-motion";

const items = [
  { label: "IEC", sub: "Verified", icon: FileCheck2 },
  { label: "GST", sub: "Verified", icon: BadgeCheck },
  { label: "TrustSEAL", sub: "Verified", icon: ShieldCheck },
  { label: "Worldwide", sub: "Supply", icon: Globe2 },
  { label: "MOQ", sub: "1 Only", icon: Package },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-slate-200 bg-white">
      <div className="container-px">
        <StaggerGroup className="grid grid-cols-2 divide-x divide-slate-100 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={staggerChild}
                className="flex items-center justify-center gap-3 px-3 py-5"
              >
                <Icon className="h-5 w-5 shrink-0 text-orange-500" />
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-navy-900">{item.label}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
