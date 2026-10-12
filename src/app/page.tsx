import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { MarineShowcase } from "@/components/home/marine-showcase";
import { BrandsSection } from "@/components/home/brands-section";
import { WhyQamar } from "@/components/home/why-qamar";
import { QuickFacts } from "@/components/home/quick-facts";
import { Worldwide } from "@/components/home/worldwide";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { CompanyNote } from "@/components/home/company-note";
import { RfqSection } from "@/components/home/rfq-section";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <MarineShowcase />
      <BrandsSection />
      <WhyQamar />
      <QuickFacts />
      <Worldwide />
      <ProcessTimeline />
      <CompanyNote />
      <RfqSection />
      <FinalCta />
    </>
  );
}
