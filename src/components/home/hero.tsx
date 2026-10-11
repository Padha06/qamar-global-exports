"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";
import { cn, waLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Hero — an editorial split on desktop/tablet and a clean stacked layout on
 * phones (text, then a 16:9 video card). The video is always shown in a 16:9
 * frame so the full picture is visible with no zoom/crop. Clips cross-fade
 * through four shots; only the active clip preloads and phones load a lighter
 * 720p cut. A poster JPG covers reduced-motion and the pre-play state.
 */
const CLIPS = [
  "marine-engine",
  "marine-generator",
  "engine-spares-scrap",
  "marine-electrical",
  "spares-dispatch",
];
const ROTATE_MS = 7000;

const clipPoster = (n: string) => `/videos/posters/${n}.jpg`;
const clipSrc = (n: string, small: boolean) => `/videos/${n}${small ? "-sm" : ""}.mp4`;

function useClips() {
  const reduce = useReducedMotion();
  const [vp, setVp] = useState<"md" | "sm" | null>(null);
  const [index, setIndex] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setVp(mq.matches ? "md" : "sm");
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const show = vp !== null && !reduce;

  useEffect(() => {
    if (!show) return;
    setIndex(0);
    const id = setInterval(() => setIndex((i) => (i + 1) % CLIPS.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [show, vp]);

  useEffect(() => {
    if (!show) return;
    refs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) video.play().catch(() => {});
      else video.pause();
    });
  }, [index, show, vp]);

  return { vp, index, refs, show };
}

export function Hero() {
  const reduce = useReducedMotion();
  const clip = useClips();
  const isMobile = clip.vp === "sm";
  const wa = waLink(
    business.primaryWhatsapp,
    "Hello Qamar Global Exports, I would like to enquire about your products."
  );

  return (
    <section className="relative bg-white pt-[calc(var(--header-h)+var(--safe-t))]">
      <div className="container-px">
        <div
          data-hero
          className="grid min-h-[calc(100svh-var(--header-h))] items-center gap-10 pb-12 pt-10 md:grid-cols-[1.05fr_1fr] md:gap-12 lg:gap-16 lg:py-20"
        >
          {/* Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-orange-500" />
              <span className="font-mono text-[11px] uppercase tracking-label text-muted">
                {business.city}, {business.state}, India
              </span>
            </motion.div>

            <motion.h1
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="mt-5 text-balance text-[2rem] font-semibold leading-[1.05] tracking-tightest text-ink sm:text-[2.75rem] lg:text-[3.25rem]"
            >
              Industrial Power &amp; Materials. Sourced for Global Markets.
            </motion.h1>

            <motion.p
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
              className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted"
            >
              {business.blurb}
            </motion.p>

            <motion.p
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
              className="mt-5 font-mono text-[12px] uppercase tracking-wider text-muted"
            >
              Minimum order quantity: 1 · Worldwide supply · India-based exporter
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg" className="group">
                <Link href="/contact#rfq">
                  Request a Quote
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hidden md:inline-flex">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Sales
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Video — always a 16:9 frame (no zoom/crop on any screen) */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            className="relative"
          >
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-line bg-slate-100">
              <Image
                src={clipPoster(CLIPS[0])}
                alt="Refurbished marine diesel engine and equipment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {clip.show &&
                CLIPS.map((name, i) => (
                  <video
                    key={name + (isMobile ? "-sm" : "")}
                    ref={(el) => {
                      clip.refs.current[i] = el;
                    }}
                    muted
                    loop
                    playsInline
                    preload={i === 0 ? "auto" : "none"}
                    poster={clipPoster(name)}
                    aria-hidden="true"
                    tabIndex={-1}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1000ms] ease-out",
                      i === clip.index ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <source src={clipSrc(name, isMobile)} type="video/mp4" />
                  </video>
                ))}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/55 via-navy-900/5 to-transparent" />
              <div className="glass absolute bottom-4 left-4 rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-navy-800">
                Power &amp; materials · supplied worldwide
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
