"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageCircle, Mountain, ReceiptText, Zap } from "lucide-react";
import { business } from "@/lib/business";
import { cn, waLink } from "@/lib/utils";

const items = [
  { label: "Home", href: "/", icon: Home, type: "link" as const },
  { label: "Generators", href: "/generators", icon: Zap, type: "link" as const },
  { label: "Clay", href: "/clay-products", icon: Mountain, type: "link" as const },
  { label: "Quote", href: "/contact#rfq", icon: ReceiptText, type: "link" as const },
  {
    label: "WhatsApp",
    href: waLink(business.primaryWhatsapp, "Hello Qamar Global Exports, I would like to enquire."),
    icon: MessageCircle,
    type: "external" as const,
  },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 lg:hidden"
      aria-label="Mobile quick navigation"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="glass-strong border-t border-slate-200 shadow-[0_-8px_30px_-18px_rgba(16,24,40,0.3)]">
        <ul className="grid grid-cols-5">
          {items.map((item) => {
            const baseHref = item.href.split("#")[0];
            const active =
              item.type === "link" &&
              baseHref !== "/contact" &&
              (item.href === "/" ? pathname === "/" : pathname.startsWith(baseHref));
            const Icon = item.icon;

            const inner = (
              <span
                className={cn(
                  "relative flex h-[var(--bottom-nav-h)] flex-col items-center justify-center gap-1 transition-colors",
                  item.type === "external"
                    ? "text-[#128C3E]"
                    : active
                      ? "text-orange-600"
                      : "text-slate-500"
                )}
              >
                {active && (
                  <span className="absolute top-0 h-0.5 w-8 rounded-full bg-orange-500" />
                )}
                <Icon className="h-[20px] w-[20px]" strokeWidth={active ? 2.4 : 1.9} />
                <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
              </span>
            );

            return (
              <li key={item.label}>
                {item.type === "external" ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp sales">
                    {inner}
                  </a>
                ) : (
                  <Link href={item.href} aria-label={item.label}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
