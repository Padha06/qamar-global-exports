"use client";

import { motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";
import { waLink } from "@/lib/utils";
import { WhatsappIcon } from "@/components/ui/whatsapp-icon";

export function WhatsAppFab() {
  const [expanded, setExpanded] = useState(false);
  const [nudge, setNudge] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setNudge(true), 6000);
    const t2 = setTimeout(() => setNudge(false), 14000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  const wa = waLink(
    business.primaryWhatsapp,
    "Hello Qamar Global Exports, I would like to enquire about your products."
  );
  const alt = waLink(
    business.whatsapp[1],
    "Hello Qamar Global Exports, I would like to enquire about your products."
  );

  return (
    <div className="fixed right-4 z-[55] bottom-[calc(var(--bottom-nav-h)+var(--safe-b)+1rem)] lg:bottom-6">
      {expanded && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="glass-strong mb-3 w-[260px] rounded-2xl border border-slate-200 p-3 shadow-[0_20px_50px_-20px_rgba(16,24,40,0.4)]"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
              Chat with sales
            </span>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-navy-900"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-xl bg-[#25D366]/12 p-2.5 transition-colors hover:bg-[#25D366]/20"
          >
            <Phone className="h-4 w-4 text-[#128C3E]" />
            <span className="text-sm text-navy-900">{business.whatsapp[0]}</span>
          </a>
          <a
            href={alt}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2.5 rounded-xl bg-slate-50 p-2.5 transition-colors hover:bg-slate-100"
          >
            <Phone className="h-4 w-4 text-[#128C3E]" />
            <span className="text-sm text-navy-900">{business.whatsapp[1]}</span>
          </a>
        </motion.div>
      )}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-label="Open WhatsApp chat options"
        className="relative ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_-12px_rgba(37,211,102,0.7)] transition-transform hover:scale-105 active:scale-95"
      >
        {!expanded && nudge && (
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 animate-pulse-glow rounded-full bg-orange-500 ring-2 ring-white" />
        )}
        <WhatsappIcon className="h-7 w-7 text-white" />
      </button>
    </div>
  );
}
