import About from "@/components/Home/About";
import Blog from "@/components/Home/Blog";
import Event from "@/components/Home/Event";
import Hero from "@/components/Home/Hero";
import Service from "@/components/Home/Service";
import Team from "@/components/Home/Team";
import Testimonials from "@/components/Home/Testimonials";
import Yachts from "@/components/Home/Yachts";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Yachts page="home" />
      <Service />
      <Team />
      <Event />
      <Testimonials page="page1" />
      <Blog />
    </div>
  );
}
