"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MessageCircle, Send } from "lucide-react";
import { business } from "@/lib/business";
import { products } from "@/lib/catalog";
import { mailLink, waLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Reveal } from "@/components/ui/reveal";

export function RfqSection({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    product: products[0].name,
    quantity: "",
    message: "",
  });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const composed = `New RFQ — Qamar Global Exports
Name: ${form.name || "-"}
Company: ${form.company || "-"}
Country: ${form.country || "-"}
Email: ${form.email || "-"}
Product: ${form.product}
Quantity / kVA: ${form.quantity || "-"}
Details: ${form.message || "-"}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.open(waLink(business.primaryWhatsapp, composed), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="rfq" className="relative scroll-mt-24 overflow-hidden border-y border-slate-200 bg-slate-50">
      <div className="absolute inset-0 blueprint opacity-50" />
      <div className="container-px relative py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Reveal>
              <div className="eyebrow mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500/70" />
                Request a Quote
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl font-semibold leading-tight tracking-tightest text-navy-900 sm:text-4xl">
                Tell us what you need — we&apos;ll quote within{" "}
                <span className="text-gradient-orange">24 hours</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-slate-600">
                Share your product and quantity. No minimum order — start with a single unit and
                we&apos;ll handle the rest, from inspection to worldwide shipment.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 space-y-3">
                {business.whatsapp.map((num) => (
                  <a
                    key={num}
                    href={waLink(num, "Hello Qamar Global Exports, I would like a quotation.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition-colors hover:border-[#25D366]/60"
                  >
                    <MessageCircle className="h-5 w-5 text-[#128C3E]" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">WhatsApp</p>
                      <p className="text-sm font-medium text-navy-900">{num}</p>
                    </div>
                  </a>
                ))}
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition-colors hover:border-orange-500/60"
                >
                  <Mail className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Email</p>
                    <p className="text-sm font-medium text-navy-900">{business.email}</p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="glass-strong rounded-3xl border border-slate-200 p-6 shadow-[0_30px_70px_-45px_rgba(16,24,40,0.5)] sm:p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-navy-900">Enquiry ready to send</h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-600">
                    We opened WhatsApp with your details prefilled. If it didn&apos;t open, use the
                    buttons below.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <Button asChild variant="wa">
                      <a
                        href={waLink(business.primaryWhatsapp, composed)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4" /> Open WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={mailLink(business.email, `RFQ — ${form.product}`, composed)}>
                        <Mail className="h-4 w-4" /> Email instead
                      </a>
                    </Button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 font-mono text-[11px] uppercase tracking-wider text-slate-500 hover:text-navy-900"
                  >
                    Edit enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="rfq-name">Full Name</Label>
                      <Input id="rfq-name" required value={form.name} onChange={update("name")} placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="rfq-company">Company</Label>
                      <Input id="rfq-company" value={form.company} onChange={update("company")} placeholder="Company name" />
                    </div>
                    <div>
                      <Label htmlFor="rfq-country">Country</Label>
                      <Input id="rfq-country" required value={form.country} onChange={update("country")} placeholder="e.g. Nigeria" />
                    </div>
                    <div>
                      <Label htmlFor="rfq-email">Email</Label>
                      <Input id="rfq-email" type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="rfq-product">Product of Interest</Label>
                    <select
                      id="rfq-product"
                      value={form.product}
                      onChange={update("product")}
                      className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-[15px] text-navy-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/25"
                    >
                      {products.map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Other / Mixed order">Other / Mixed order</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="rfq-qty">Quantity / kVA Rating</Label>
                    <Input id="rfq-qty" value={form.quantity} onChange={update("quantity")} placeholder="e.g. 1 x 125 kVA, or 20 MT clay" />
                  </div>

                  <div>
                    <Label htmlFor="rfq-message">Requirement Details</Label>
                    <Textarea
                      id="rfq-message"
                      rows={compact ? 3 : 4}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Destination port, specifications, timeline…"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4" />
                    Submit Request
                  </Button>
                  <p className="text-center font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    MOQ 1 · No obligation · Reply within 24 hours
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
