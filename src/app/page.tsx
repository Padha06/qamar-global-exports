import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { FeaturedProducts } from "@/components/home/featured-products";
import { BrandsWall } from "@/components/home/brands-wall";
import { StatsBand } from "@/components/home/stats-band";
import { WhyQamar } from "@/components/home/why-qamar";
import { Destinations } from "@/components/home/destinations";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { CeoMessage } from "@/components/home/ceo-message";
import { RfqSection } from "@/components/home/rfq-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <BrandsWall />
      <StatsBand />
      <WhyQamar />
      <Destinations />
      <ProcessTimeline />
      <CeoMessage />
      <RfqSection />
    </>
  );
}
