import Compare from "@/components/Pricing/Compare";
import Hero from "@/components/Pricing/Hero";
import PricingPlan from "@/components/Pricing/PricingPlan";
import Services from "@/components/Pricing/Services";

;

export default function Pricing() {
  return (
    <div>
      <Hero />
      <Services />
      <PricingPlan />
      <Compare />
    </div>
    );
  }