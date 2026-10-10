"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, ArrowRight, CheckCircle2, Loader2, Mail, MessageCircle, Send } from "lucide-react";
import { business } from "@/lib/business";
import { products } from "@/lib/catalog";
import { cn, mailLink, waLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Reveal } from "@/components/ui/reveal";

type FormState = {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  category: string;
  quantity: string;
  details: string;
  contactMethod: string;
};

const EMPTY: FormState = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  category: products[0].name,
  quantity: "",
  details: "",
  contactMethod: "WhatsApp",
};

type Status = "idle" | "submitting" | "sent" | "fallback" | "error";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function RfqSection() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState<1 | 2>(1);

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      setErrors((prev) => ({ ...prev, [k]: undefined }));
    };

  const composed = `New enquiry — Qamar Global Exports
Name: ${form.name || "-"}
Company: ${form.company || "-"}
Country: ${form.country || "-"}
Email: ${form.email || "-"}
Phone / WhatsApp: ${form.phone || "-"}
Product category: ${form.category}
Quantity / kVA: ${form.quantity || "-"}
Preferred contact: ${form.contactMethod}
Details: ${form.details || "-"}`;

  function validateStepOne() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.country.trim()) next.country = "Please enter your country.";
    if (!form.email.trim()) next.email = "Please enter your business email.";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "Please enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (validateStepOne()) setStep(2);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.category.trim()) {
      setErrors({ category: "Please select a product category." });
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; configured?: boolean };
      if (res.ok && data.ok) setStatus("sent");
      else if (data.configured === false) setStatus("fallback");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="rfq" className="relative scroll-mt-24 border-y border-line bg-[#F2F3EF]">
      <div className="container-px py-14 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left: intro + contact */}
          <div>
            <Reveal>
              <div className="eyebrow mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500/70" />
                Request a Quote
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-2xl font-semibold leading-tight tracking-tightest text-ink sm:text-4xl">
                Tell us what you need
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-muted">
                Share your product and quantity and we will confirm availability and send a written
                quotation. Minimum order quantity is one unit.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <a
                href={waLink(business.primaryWhatsapp, "Hello Qamar Global Exports, I would like a quotation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#128C3E] lg:hidden"
              >
                <MessageCircle className="h-4 w-4" />
                Prefer WhatsApp? Message us
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 hidden space-y-3 lg:block">
                {business.whatsapp.map((num) => (
                  <a
                    key={num}
                    href={waLink(num, "Hello Qamar Global Exports, I would like a quotation.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-line bg-white p-3 transition-colors hover:border-[#25D366]/60"
                  >
                    <MessageCircle className="h-5 w-5 text-[#128C3E]" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">WhatsApp</p>
                      <p className="text-sm font-medium text-ink">{num}</p>
                    </div>
                  </a>
                ))}
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 rounded-xl border border-line bg-white p-3 transition-colors hover:border-orange-500/60"
                >
                  <Mail className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Email</p>
                    <p className="text-sm font-medium text-ink">{business.email}</p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: form / states */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-white p-5 shadow-[0_30px_70px_-50px_rgba(16,36,58,0.5)] sm:p-8">
              {status === "sent" ? (
                <StateBlock
                  tone="green"
                  icon={<CheckCircle2 className="h-8 w-8" />}
                  title="Enquiry sent"
                  text="Thank you — your enquiry has been received. We will review it and respond."
                />
              ) : status === "fallback" ? (
                <StateBlock
                  tone="orange"
                  icon={<MessageCircle className="h-8 w-8" />}
                  title="One more step"
                  text="Automatic email delivery isn't set up on this website yet. Send your enquiry instantly — your details are already filled in."
                  actions={
                    <>
                      <Button asChild variant="wa">
                        <a href={waLink(business.primaryWhatsapp, composed)} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" /> Send on WhatsApp
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href={mailLink(business.email, `Enquiry — ${form.category}`, composed)}>
                          <Mail className="h-4 w-4" /> Send by email
                        </a>
                      </Button>
                    </>
                  }
                  onReset={() => {
                    setStatus("idle");
                    setStep(1);
                  }}
                />
              ) : status === "error" ? (
                <StateBlock
                  tone="red"
                  icon={<AlertCircle className="h-8 w-8" />}
                  title="Something went wrong"
                  text="We couldn't submit your enquiry just now. Please try WhatsApp or email."
                  actions={
                    <>
                      <Button asChild variant="wa">
                        <a href={waLink(business.primaryWhatsapp, composed)} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" /> WhatsApp
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href={mailLink(business.email, `Enquiry — ${form.category}`, composed)}>
                          <Mail className="h-4 w-4" /> Email
                        </a>
                      </Button>
                    </>
                  }
                  onReset={() => setStatus("idle")}
                />
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  {/* Step indicator */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      Step {step} of 2
                    </span>
                    <div className="flex gap-1.5">
                      <span className={cn("h-1 w-8 rounded-full", step >= 1 ? "bg-orange-500" : "bg-slate-200")} />
                      <span className={cn("h-1 w-8 rounded-full", step >= 2 ? "bg-orange-500" : "bg-slate-200")} />
                    </div>
                  </div>

                  {step === 1 ? (
                    <div className="space-y-3.5">
                      <Field label="Full Name" htmlFor="rfq-name" error={errors.name} required>
                        <Input id="rfq-name" value={form.name} onChange={update("name")} autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} />
                      </Field>
                      <Field label="Company Name" htmlFor="rfq-company">
                        <Input id="rfq-company" value={form.company} onChange={update("company")} autoComplete="organization" placeholder="Company" />
                      </Field>
                      <div className="grid gap-3.5 sm:grid-cols-2">
                        <Field label="Country" htmlFor="rfq-country" error={errors.country} required>
                          <Input id="rfq-country" value={form.country} onChange={update("country")} autoComplete="country-name" placeholder="e.g. United Kingdom" aria-invalid={!!errors.country} />
                        </Field>
                        <Field label="Business Email" htmlFor="rfq-email" error={errors.email} required>
                          <Input id="rfq-email" type="email" value={form.email} onChange={update("email")} autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email} />
                        </Field>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3.5">
                      <div className="grid gap-3.5 sm:grid-cols-2">
                        <Field label="Phone / WhatsApp" htmlFor="rfq-phone">
                          <Input id="rfq-phone" value={form.phone} onChange={update("phone")} autoComplete="tel" placeholder="+00 00000 00000" />
                        </Field>
                        <Field label="Preferred Contact" htmlFor="rfq-contact">
                          <Select id="rfq-contact" value={form.contactMethod} onChange={update("contactMethod")}>
                            <option>WhatsApp</option>
                            <option>Email</option>
                            <option>Both</option>
                          </Select>
                        </Field>
                      </div>
                      <Field label="Product Category" htmlFor="rfq-category" error={errors.category} required>
                        <Select id="rfq-category" value={form.category} onChange={update("category")} aria-invalid={!!errors.category}>
                          {products.map((p) => (
                            <option key={p.slug} value={p.name}>
                              {p.name}
                            </option>
                          ))}
                          <option value="Other / mixed order">Other / mixed order</option>
                        </Select>
                      </Field>
                      <Field label="Quantity or kVA Rating" htmlFor="rfq-qty">
                        <Input id="rfq-qty" value={form.quantity} onChange={update("quantity")} placeholder="e.g. 1 x 125 kVA, or 20 MT" />
                      </Field>
                      <Field label="Requirement Details" htmlFor="rfq-details">
                        <Textarea id="rfq-details" rows={3} value={form.details} onChange={update("details")} placeholder="Specification, destination port, timeline…" />
                      </Field>
                    </div>
                  )}

                  <div className="flex gap-3 pt-1">
                    {step === 2 && (
                      <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)} className="shrink-0">
                        <ArrowLeft className="h-4 w-4" /> Back
                      </Button>
                    )}
                    {step === 1 ? (
                      <Button type="button" size="lg" onClick={goNext} className="flex-1 group">
                        Continue
                        <ArrowRight className="transition-transform group-hover:translate-x-1" />
                      </Button>
                    ) : (
                      <Button type="submit" size="lg" className="flex-1" disabled={status === "submitting"}>
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" /> Send Enquiry
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                  <p className="text-center font-mono text-[10px] uppercase tracking-wider text-muted">
                    MOQ 1 · No obligation
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

function StateBlock({
  tone,
  icon,
  title,
  text,
  actions,
  onReset,
}: {
  tone: "green" | "orange" | "red";
  icon: React.ReactNode;
  title: string;
  text: string;
  actions?: React.ReactNode;
  onReset?: () => void;
}) {
  const tones = {
    green: "bg-emerald-50 text-emerald-600",
    orange: "bg-orange-50 text-orange-600",
    red: "bg-red-50 text-red-600",
  } as const;
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className={cn("flex h-16 w-16 items-center justify-center rounded-full", tones[tone])}>{icon}</div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted">{text}</p>
      {actions && <div className="mt-6 flex flex-wrap justify-center gap-3">{actions}</div>}
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-6 font-mono text-[11px] uppercase tracking-wider text-muted hover:text-ink"
        >
          Edit enquiry
        </button>
      )}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="text-orange-600"> *</span>}
      </Label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}

function Select({
  id,
  value,
  onChange,
  children,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      {...rest}
      className="h-11 w-full rounded-xl border border-line bg-white px-4 text-[15px] text-ink focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/25 sm:h-12"
    >
      {children}
    </select>
  );
}
