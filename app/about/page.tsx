import AboutUs from "@/components/About/AboutUs";
import Hero from "@/components/About/Hero";
import ImageLayout from "@/components/About/ImageLayout";
import OurTeam from "@/components/About/OurTeam";
import Service from "@/components/Home/Service";
import Yachts from "@/components/Home/Yachts";

export default function About() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ImageLayout />
      <Service />
      <Yachts page="about" />
      <OurTeam />
    </div>
  );
}