"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";
import { IMAGES, sized } from "@/lib/images";
import { cn, waLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Hero media — a real cinematic clip, rotated with a cross-fade between four
 * shots (diesel generators → marine engine → clay → export logistics).
 * Delivery uses the 16:9 master on tablet/desktop and the 9:16 master on
 * phones. When reduced-motion is preferred, a static poster image is shown
 * instead (no autoplay, no layout shift).
 */
const DESKTOP_CLIPS = [
  "/videos/diesel-generators-desktop.mp4",
  "/videos/marine-engine-desktop.mp4",
  "/videos/clay-materials-desktop.mp4",
  "/videos/export-logistics-desktop.mp4",
];
const MOBILE_CLIPS = [
  "/videos/diesel-generators-mobile.mp4",
  "/videos/marine-engine-mobile.mp4",
  "/videos/clay-materials-mobile.mp4",
  "/videos/export-logistics-mobile.mp4",
];
const ROTATE_MS = 8000;

function HeroMedia() {
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const clips = isDesktop ? DESKTOP_CLIPS : MOBILE_CLIPS;
  const showVideo = !reduce;

  const [index, setIndex] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!showVideo) return;
    setIndex(0);
    const id = setInterval(() => setIndex((i) => (i + 1) % clips.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [showVideo, clips.length]);

  useEffect(() => {
    if (!showVideo) return;
    refs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) video.play().catch(() => {});
      else video.pause();
    });
  }, [index, showVideo, clips]);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-slate-50 sm:aspect-[16/10] lg:aspect-[4/3]">
      {/* Poster / reduced-motion fallback */}
      <Image
        src={sized(IMAGES.gensetInline, 1600)}
        alt="Refurbished industrial diesel generator set"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />

      {showVideo &&
        clips.map((src, i) => (
          <video
            key={src}
            ref={(el) => {
              refs.current[i] = el;
            }}
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "none"}
            aria-hidden="true"
            tabIndex={-1}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out",
              i === index ? "opacity-100" : "opacity-0"
            )}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/55 via-navy-900/5 to-transparent" />

      <div className="glass absolute bottom-4 left-4 rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-navy-800">
        Power &amp; materials · supplied worldwide
      </div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const wa = waLink(
    business.primaryWhatsapp,
    "Hello Qamar Global Exports, I would like to enquire about your products."
  );

  return (
    <section className="relative bg-white pt-[calc(var(--header-h)+var(--safe-t))]">
      <div className="container-px">
        <div
          data-hero
          className="grid min-h-[calc(100svh-var(--header-h))] items-center gap-10 pb-12 pt-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20"
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
              <Button asChild variant="outline" size="lg">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Sales
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Media */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
          >
            <HeroMedia />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
