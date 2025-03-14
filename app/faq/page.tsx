import Frequently from "@/components/Faq/Frequently";
import Hero from "@/components/Faq/Hero";
import Testimonials from "@/components/Home/Testimonials";
import Faqs from "@/components/OurTeam/Faqs";

export default function Faq() {
  return (
    <div>
      <Hero />
      <Frequently />
      <Faqs />
      <Testimonials page="page2" />
    </div>
  );
}
