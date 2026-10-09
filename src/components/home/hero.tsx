"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, Globe2, MessageCircle, ShieldCheck } from "lucide-react";
import { business } from "@/lib/business";
import { IMAGES, sized } from "@/lib/images";
import { waLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const wa = waLink(
    business.primaryWhatsapp,
    "Hello Qamar Global Exports, I would like a quotation for your products."
  );

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Light background wash */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={sized(IMAGES.factoryHall, 2000)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/88 to-[#f4f6fa]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
        <div className="absolute inset-0 blueprint opacity-50" />
        <div className="absolute -right-24 top-1/4 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.10),transparent_65%)] blur-2xl" />
      </div>

      <div className="container-px relative">
        <div
          data-hero
          className="grid min-h-[calc(100svh-68px)] items-center gap-12 py-16 lg:grid-cols-[1fr_1.02fr] lg:py-20"
        >
          {/* Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-50 px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-label text-orange-700">
                Bhavnagar, Gujarat · India · Est. {business.established}
              </span>
            </motion.div>

            <motion.h1
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
              className="mt-6 text-balance text-[2.15rem] font-semibold leading-[1.04] tracking-tightest text-navy-900 sm:text-5xl lg:text-[3.4rem]"
            >
              Refurbished Diesel &amp; Marine Generators,{" "}
              <span className="text-gradient-orange">Supplied Worldwide</span>
            </motion.h1>

            <motion.p
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
              className="mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600"
            >
              Genuine Cummins, Kirloskar and Caterpillar-style gensets, marine engines and industrial
              clay — inspected, tested and exported from India with a minimum order of just one unit.
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.22 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg" className="group">
                <Link href="/contact#rfq">
                  Request Quote
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Sales
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-xs text-slate-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-orange-500" /> TrustSEAL Verified
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-orange-500" /> GST &amp; IEC Verified
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe2 className="h-4 w-4 text-orange-500" /> Exports to 40+ countries
              </span>
            </motion.div>
          </div>

          {/* Photo cluster */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-[0_50px_100px_-55px_rgba(16,24,40,0.7)]">
              <Image
                src={sized(IMAGES.gensetInline, 1600)}
                alt="Large refurbished industrial diesel generator set"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/35 via-transparent to-transparent" />

              {/* badge top-left */}
              <div className="glass absolute left-4 top-4 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-navy-800">
                Refurbished · Tested
              </div>
              {/* badge top-right */}
              <div className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white shadow-lg">
                MOQ 1
              </div>

              {/* inset secondary photo */}
              <div className="absolute bottom-4 left-4 hidden w-[40%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={sized(IMAGES.marineEngineBlock, 900)}
                    alt="Marine diesel engine"
                    fill
                    sizes="22vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* floating spec card */}
            <div className="glass absolute -bottom-6 right-6 rounded-2xl px-4 py-3 shadow-[0_24px_60px_-30px_rgba(16,24,40,0.6)]">
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Power range</p>
              <p className="text-base font-bold text-navy-900">10 – 320+ kVA</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                Cummins · Kirloskar · Cat
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
