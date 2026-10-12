"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, ReceiptText, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", aria: "Home", href: "/", icon: Home },
  { label: "Products", aria: "Marine products", href: "/products", icon: Package },
  { label: "Brands", aria: "Brands", href: "/brands", icon: Tag },
  { label: "Quote", aria: "Request a quote", href: "/contact#rfq", icon: ReceiptText },
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
        <ul className="grid grid-cols-4">
          {items.map((item) => {
            const baseHref = item.href.split("#")[0];
            const active =
              baseHref !== "/contact" &&
              (item.href === "/" ? pathname === "/" : pathname.startsWith(baseHref));
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <Link href={item.href} aria-label={item.aria}>
                  <span
                    className={cn(
                      "relative flex h-[var(--bottom-nav-h)] flex-col items-center justify-center gap-1 transition-colors",
                      active ? "text-orange-600" : "text-slate-500"
                    )}
                  >
                    {active && <span className="absolute top-0 h-0.5 w-8 rounded-full bg-orange-500" />}
                    <Icon className="h-[21px] w-[21px]" strokeWidth={active ? 2.4 : 1.9} />
                    <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
