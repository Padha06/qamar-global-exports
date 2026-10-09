import Image from "next/image";
import { Quote } from "lucide-react";
import { business } from "@/lib/business";
import { IMAGES, sized } from "@/lib/images";
import { Reveal } from "@/components/ui/reveal";
import { Logo } from "@/components/ui/logo";

export function CeoMessage() {
  return (
    <section className="container-px py-20 lg:py-28">
      <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_70px_-45px_rgba(16,24,40,0.5)] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[300px] lg:min-h-full">
          <Image
            src={sized(IMAGES.factory, 1200)}
            alt="Industrial operations at Qamar Global Exports"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent lg:bg-gradient-to-r lg:from-navy-900/25 lg:to-white/25" />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-2.5 shadow-lg">
            <Logo className="h-16 w-auto" />
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12">
          <Quote className="h-10 w-10 text-orange-500" />
          <blockquote className="mt-5">
            <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
              &ldquo;We started Qamar Global Exports with one principle — deal honestly, inspect
              thoroughly, and deliver exactly what we promise. Whether you order a single 10 kVA
              generator or a full container of clay, you receive the same transparency and
              attention. That is how we earn long-term trade partners across the world.&rdquo;
            </p>
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-orange-200 bg-orange-50 font-display text-lg font-bold text-orange-600">
              AL
            </div>
            <div>
              <p className="font-semibold text-navy-900">{business.ceo}</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {business.ceoTitle}
              </p>
            </div>
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-label text-orange-600">
              {business.tagline}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
