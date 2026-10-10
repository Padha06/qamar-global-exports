"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";
import { nav } from "@/lib/site";
import { cn, waLink } from "@/lib/utils";
import { useScrolled } from "@/hooks/use-scrolled";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

const desktopNav = nav.filter((n) => n.href !== "/");

export function SiteHeader() {
  const scrolled = useScrolled(16);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const wa = waLink(
    business.primaryWhatsapp,
    "Hello Qamar Global Exports, I would like to enquire about your products."
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
          scrolled
            ? "glass-strong border-slate-200 shadow-[0_8px_30px_-18px_rgba(16,24,40,0.25)]"
            : "border-slate-200 bg-white/95 shadow-[0_6px_20px_-16px_rgba(16,24,40,0.35)] backdrop-blur-md md:border-transparent md:bg-transparent md:shadow-none md:backdrop-blur-none"
        )}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="container-px">
          <div className="flex h-[var(--header-h)] items-center justify-between gap-4">
            <Link href="/" aria-label={`${business.name} home`} className="shrink-0">
              <Logo className="h-9 w-auto lg:h-12" priority />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {desktopNav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active ? "text-orange-600" : "text-slate-600 hover:text-navy-900"
                    )}
                  >
                    {item.short}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2.5 lg:flex">
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="sm" className="rounded-full">
                <Link href="/contact#rfq">Request Quote</Link>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-sm lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        <motion.div
          className="h-px origin-left bg-gradient-to-r from-orange-500 via-orange-400 to-transparent"
          style={{ scaleX: progress }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="glass-strong absolute inset-x-0 top-0 flex max-h-[92dvh] flex-col overflow-y-auto rounded-b-3xl border-b border-slate-200 p-5"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <div className="flex items-center justify-between">
                <Logo className="h-12 w-auto" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col" aria-label="Mobile">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between border-b border-slate-100 py-3.5 text-lg font-medium text-navy-800"
                    >
                      {item.label}
                      <span className="font-mono text-xs text-orange-500/70">0{i + 1}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <Button asChild size="lg">
                  <Link href="/contact#rfq">Request a Quote</Link>
                </Button>
                <Button asChild variant="wa" size="lg">
                  <a href={wa} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Sales
                  </a>
                </Button>
              </div>
              <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {business.moq} · Worldwide Supply · Verified Exporter
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
