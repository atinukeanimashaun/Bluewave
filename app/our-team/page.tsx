import Testimonials from "@/components/Home/Testimonials";
import Faqs from "@/components/OurTeam/Faqs";
import Hero from "@/components/OurTeam/Hero";
import Team from "@/components/OurTeam/Team";


export default function OurTeam() {
  return (
    <div>
      <Hero />
      <Team />
      <Faqs />
      <Testimonials page="page2" />
    </div>
  );
}
