"use client";

import Image from "next/image";
import { Anchor, Globe2 } from "lucide-react";
import { exportMarkets } from "@/lib/business";
import { IMAGES, sized } from "@/lib/images";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, staggerChild } from "@/components/ui/reveal";
import { motion } from "framer-motion";

export function Destinations() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50">
      <div className="absolute inset-0 blueprint opacity-50" />
      <div className="container-px relative py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Export Destinations"
              title={
                <>
                  Shipping from Gujarat to{" "}
                  <span className="text-gradient-orange">buyers worldwide</span>
                </>
              }
              intro="Our export network reaches importers, traders and end-users across Africa, the UK, Kazakhstan, the Middle East, Europe and beyond."
            />

            <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2">
              {exportMarkets.map((m) => (
                <motion.div
                  key={m.region}
                  variants={staggerChild}
                  className="rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-orange-500/50"
                >
                  <div className="flex items-center gap-2">
                    <Anchor className="h-4 w-4 text-orange-500" />
                    <h3 className="text-sm font-semibold text-navy-900">{m.region}</h3>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{m.countries}</p>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_70px_-45px_rgba(16,24,40,0.5)] sm:aspect-[5/5]">
              <Image
                src={sized(IMAGES.containers, 1200)}
                alt="Shipping containers at a port terminal ready for export"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/65 via-navy-900/10 to-transparent" />

              <div className="glass absolute left-4 top-4 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-orange-500" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-600">
                    Global Reach
                  </span>
                </div>
                <p className="mt-1 text-2xl font-bold tracking-tight text-navy-900">40+ Countries</p>
              </div>

              <div className="glass absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl p-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    Shipping terms
                  </p>
                  <p className="text-sm font-semibold text-navy-900">FOB · CIF · Door Delivery</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-700">
                  Worldwide
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
