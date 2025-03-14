import Testimonials from "@/components/Home/Testimonials";
import Team from "@/components/Home/Team";
import Hero from "@/components/Services/Hero";
import Cruise from "@/components/Services/Cruise";
import Service from "@/components/Services/Service";

export default function Services() {
  return (
    <div>
      <Hero />
      <Cruise />
      <Service />
      <Team />
      <Testimonials page="page2" />
    </div>
    );
  }