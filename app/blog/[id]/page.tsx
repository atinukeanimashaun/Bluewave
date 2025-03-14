"use client";

import { useParams } from "next/navigation";
import { blogData } from "@/contants";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Image from "next/image";
import SocialMedia from "@/components/SocialMedia";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link'
import { FaMoneyBillWave, FaCalendarDay } from "react-icons/fa";
import { MdTram } from "react-icons/md";
import BlueWave36 from "@/images/BlueWave36.jpg"
import ImageLayout from "@/components/About/ImageLayout";
import RecentPost from "@/components/Blog/RecentPost";


const BlogDetail = () => {
  const { id } = useParams(); // Get ID from URL
  const blog = blogData.find(
    (y) => y.title.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!blog) {
    return <div className="text-center text-2xl mt-10">blog not found</div>;
  }

  return (
    <div>
      <Hero
        title={blog.title}
        subtitle="Families seeking adventure will find this blog post a treasure trove of information on yacht."
        backgroundImage={blog.image}
      />

       <Container className="py-20 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[68%] space-y-5">
          <div className="space-y-5">
            <h1 className="font-semibold text-[36px]">
            Unveiling the Elegance of Yacht Rentals
            </h1>

            <p className="text-[18px]">
            In the realm of travel, few experiences rival the allure of yacht rentals. Beyond a mode of transportation, yachts are floating palaces that redefine the very essence of luxury and freedom. In this blog post, we unravel the enchanting tapestry that makes yacht rentals an irresistible venture for those seeking a seamless blend of opulence and boundless exploration.
            </p>
            
            <div className="border-l-4 border-l-spaceCadet">
              <h2 className="font-semibold text-[30px] pl-10 text-center">
              Yacht rentals are not just about the destination; they're about the moments you create along the way.
              </h2>
            </div>
            
            <p className="text-[18px]">
            A yacht is more than a vessel; it's a floating haven of opulence. From sleek exteriors to lavish interiors, yacht rentals promise an indulgent experience that transcends the ordinary. Meticulously designed cabins, spacious lounges, and state-of-the-art amenities create an ambiance of pure luxury on the open seas.
            </p>

            <Image
              src={BlueWave36}
              alt={blog.title}
              width={500}
              height={300}
              className="w-[700px] h-[500px] object-contain rounded-xl"
            />
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold text-[30px]">Luxurious Havens on Water</h2>

            <p className="text-[18px]">
            One of the captivating aspects of yacht rentals is the ability to tailor the experience to your desires. Whether it's a romantic getaway, a family vacation, or a celebration with friends, yacht charters offer flexibility in crafting an itinerary that suits your preferences. The journey becomes a personalized symphony, orchestrated to match your rhythm.
            </p>

            <ul className="list-disc marker:text-brightYellow px-6">
              {[
                "Luxurious Havens on Water",
                "Tailored to Perfection",
                "Freedom to Explore",
                "Professional Crew, Seamless Service",
                "Unforgettable Moments",
                "A Lifestyle Beyond Ordinary",
              ].map((item, index) => (
                <li key={index} className="text-[18px]">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[18px]">
            Yacht rentals embody a lifestyle beyond the ordinary. It's a fusion of comfort, sophistication, and the thrill of exploration. Stepping onto a yacht is not just a departure from the shore; it's an entry into a world where luxury meets the expanse of the sea.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold text-[30px]">Embark on Your Yachting Odyssey:</h2>

            <p className="text-[18px]">
            In conclusion, the allure of yacht rentals lies in the harmonious blend of luxury, freedom, and unforgettable experiences. It beckons those with a spirit of adventure and an appreciation for the finer things in life. Embark on your yachting odyssey, where the allure of the open seas awaits to captivate your senses and redefine your perception of travel.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[30%] sticky top-10 self-start">
        <RecentPost />
      </div>
      </Container > 

      <ImageLayout />
    </div >
  );
};

export default BlogDetail;