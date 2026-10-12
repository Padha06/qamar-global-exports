import Link from "next/link";
import { Linkedin, Mail, MapPin, MessageCircle, Store } from "lucide-react";
import { business, credentials } from "@/lib/business";
import { nav } from "@/lib/site";
import { waLink } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

export function SiteFooter() {
  const wa = waLink(business.primaryWhatsapp, "Hello Qamar Global Exports, I would like to enquire.");

  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="container-px py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1.1fr]">
          <div>
            <span className="inline-block rounded-2xl bg-white p-3 shadow-sm">
              <Logo className="h-20 w-auto" />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {business.tagline} Refurbished marine diesel engines, generators, engine spares,
              electrical items and automation products — supplied from {business.city},{" "}
              {business.state}, India to international buyers.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {credentials.map((c) => (
                <span
                  key={c.short}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/12 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  {c.short}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={business.indiamart}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-orange-400/60 hover:text-white"
              >
                <Store className="h-3.5 w-3.5 text-orange-400" /> IndiaMART
              </a>
              <a
                href={business.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-orange-400/60 hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5 text-orange-400" /> LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-label text-slate-500">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 lg:grid-cols-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-slate-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-label text-slate-500">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-slate-300 hover:text-white">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                  <span>
                    {business.whatsapp[0]}
                    <br />
                    {business.whatsapp[1]}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex items-center gap-2.5 text-slate-300 hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-orange-400" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                {business.addressLine}
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[11px] text-slate-500">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
            {business.nature} · Est. {business.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
