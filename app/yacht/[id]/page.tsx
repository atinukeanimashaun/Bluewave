"use client";

import { useParams } from "next/navigation";
import { yachtData } from "@/contants";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Image from "next/image";
import SocialMedia from "@/components/SocialMedia";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link'
import ImageLayout from "@/components/About/ImageLayout";
import Yachts from "@/components/Home/Yachts";

const YachtDetail = () => {
  const { id } = useParams(); // Get ID from URL
  const yacht = yachtData.find(
    (y) => y.title.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!yacht) {
    return <div className="text-center text-2xl mt-10">Yacht not found</div>;
  }

  return (
    <div>
      <Hero
        title={yacht.title}
        subtitle={yacht.description}
        backgroundImage={yacht.image[2]}
      />

      <Container className="py-20 flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[65%] space-y-5">
          <div className="space-y-5">
            <h1 className="font-semibold text-[36px]">
              {`Welcome aboard ${yacht.title}.`}
            </h1>

            <p className="text-[18px]">
              {`Our meticulously crafted yacht offers a timeless maritime experience, perfect for those seeking a blend of sophistication and comfort on the open seas. ${yacht.title} comes with a professional and experienced crew dedicated to ensuring a seamless and enjoyable journey. From navigation to hospitality, our crew is committed to making your experience on board ${yacht.title} exceptional.`}
            </p>

            <Image
              src={yacht.image[0]}
              alt={yacht.title}
              width={500}
              height={300}
              className="w-[700px] h-[500px] object-contain"
            />
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold text-[30px]">Customized Experiences</h2>

            <p className="text-[18px]">
              {`${yacht.title} is available for hourly, half-day, and full-day rentals, allowing you to tailor your maritime experience to your preferences. Whether it's a romantic sunset cruise, a family outing, or a corporate event, Harbor Bliss sets the stage for an unforgettable journey on the water.`}
            </p>

            <div className="rounded-xl">
              <Image
                src={yacht.image[1]}
                alt={yacht.title}
                width={500}
                height={300}
                className="w-[700px] h-[500px] object-contain rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold text-[30px]">Versatile for Events</h2>

            <p className="text-[18px]">
              {`${yacht.title} is versatile and well-suited for various events, from intimate celebrations to corporate gatherings. With its classic charm, this yacht provides a distinctive venue for creating lasting memories. ${yacht.title} comes with a professional and experienced crew dedicated to ensuring a seamless and enjoyable journey. From navigation to hospitality, our crew is committed to making your experience on board ${yacht.title} exceptional.`}
            </p>

            <h2 className="font-semibold text-[30px]">
              Key Features:
            </h2>

            <ul className="list-disc marker:text-brightYellow px-6">
              {[
                "Classic Design",
                "Intimate Seating Areas",
                "Spacious Deck",
                "Cozy Interiors",
                "Professional Crew",
                "Versatile for Events"
              ].map((item, index) => (
                <li key={index} className="text-[18px]">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[18px]">
              {`${yacht.title}  is a vision of classic design, featuring sleek lines, wooden detailing, and a timeless silhouette. Step aboard and be transported to an era of maritime grace and beauty. The yacht is designed with intimate seating areas, allowing guests to relax in comfort while enjoying the scenic beauty of the water. Whether you're sipping cocktails or having a quiet conversation, ${yacht.title} provides the perfect setting. The expansive deck is an inviting space for sunbathing, taking in the sea breeze, or hosting events. With ample room for socializing, it's an ideal spot for enjoying the company of friends and family against the backdrop of the open waters.`}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[35%] sticky top-10 self-start">
          <h1 className="font-semibold text-[24px]">
            Technical Specifications
          </h1>

          <div className="mt-5 divide-y-2">
            <div className="flex justify-between py-4">
              <p className="text-[16px] capitalize font-medium">length</p>

              <h2 className="text-[20px] font-semibold">
                {yacht.length}
              </h2>
            </div>

            <div className="flex justify-between py-4">
              <p className="text-[16px] capitalize font-medium">year</p>

              <h2 className="text-[20px] font-semibold">
                {yacht.year}
              </h2>
            </div>

            <div className="flex justify-between py-4">
              <p className="text-[16px] capitalize font-medium">capacity</p>

              <h2 className="text-[20px] font-semibold">
                {yacht.capacity}
              </h2>
            </div>

            <div className="flex justify-between py-4">
              <p className="text-[16px] capitalize font-medium">tape</p>

              <h2 className="text-[20px] capitalize font-semibold">
                {yacht.category}
              </h2>
            </div>

            <div className="flex justify-between py-4">
              <p className="text-[16px] capitalize font-medium">price</p>

              <h2 className="text-[20px] font-semibold">
                {yacht.price}
              </h2>
            </div>

            <div className="py-6 space-y-3">
              <h1 className="font-semibold text-[24px]">Share on</h1>

              <SocialMedia />
            </div>
          </div>

          <div className="py-6 space-y-4">
            <h1 className="font-semibold text-[24px]">
              Have Additional Questions?
            </h1>

            <div className="flex items-center gap-2">
              <IoCall className="w-5 h-5 text-brightYellow" />

              <a href="tel:+234803513453"
                className="text-[18px] text-spaceCadet hover:text-brightYellow hoverEffect hover:underline">
                +234 803-003-453
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineEmail className="w-5 h-5 text-brightYellow" />

              <a
                href="mailto:info@bluewave.com"
                className="text-[18px] text-spaceCadet hover:text-brightYellow hoverEffect hover:underline"
              >
                info@bluewave.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <IoLocationSharp className="w-6 h-6 text-brightYellow" />

              <a href="https://www.google.com/maps/search/?api=1&query=5+Richard+street,+ikeja+Lagos,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] text-spaceCadet hover:text-brightYellow hoverEffect hover:underline">
                5 Richard street, ikeja Lagos, Nigeria
              </a>
            </div>

            <div className="mt-10 pt-5">
              <Link
                href="/contact"
                className="py-4 px-8 capitalize text-spaceCadet bg-brightYellow rounded-full hover:text-brightYellow hover:bg-spaceCadet hoverEffect cursor-pointer w-36"
              >
                Book a Yacht
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <ImageLayout />

      <Yachts page="yacht&boat" />
    </div >
  );
};

export default YachtDetail;