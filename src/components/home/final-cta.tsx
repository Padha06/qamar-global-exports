import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { business } from "@/lib/business";
import { waLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  const wa = waLink(
    business.primaryWhatsapp,
    "Hello Qamar Global Exports, I would like to enquire about your products."
  );

  return (
    <section className="bg-navy-900">
      <div className="container-px py-14 lg:py-16">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to source from India?
            </h2>
            <p className="mt-2 font-mono text-[12px] uppercase tracking-wider text-slate-300">
              MOQ 1 · Worldwide enquiries · TrustSEAL, GST &amp; IEC verified
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
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
        </div>
      </div>
    </section>
  );
}
