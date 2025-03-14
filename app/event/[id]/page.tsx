"use client";

import { useParams } from "next/navigation";
import { eventData } from "@/contants";
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
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { MapContainerProps } from "react-leaflet";
import ImageLayout from "@/components/About/ImageLayout";
import Event from "@/components/Home/Event";

const MapContainer = dynamic<MapContainerProps>(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
);

const EventDetail = () => {
  const { id } = useParams(); // Get ID from URL
  const event = eventData.find(
    (y) => y.title.toLowerCase().replace(/\s+/g, "-") === id
  );
  const position: [number, number] = [51.505, -0.09];

  if (!event) {
    return <div className="text-center text-2xl mt-10">event not found</div>;
  }

  return (
    <div>
      <Hero
        title={event.title}
        subtitle="At Rent event & Boat, we invite you to indulge in a luxurious experience on the water, combining the thrill of sailing with the sophistication of an exquisite event."
        backgroundImage={event.image}
      />

      <Container className="py-20 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[68%] space-y-5">
          <div className="space-y-5">
            <h1 className="font-semibold text-[36px]">
              Enjoy an evening of enchantment as the sun dips below the horizon.
            </h1>

            <p className="text-[18px]">
              {`Embark on a maritime journey like never before with our exclusive event and tour package, "Seascape Elegance." At Rent Yacht and Boat, we invite you to indulge in a luxurious experience on the water, combining the thrill of sailing with the sophistication of an exquisite event. Our ${event.title} sets the perfect backdrop for a romantic celebration, whether it's a proposal, anniversary, or simply an intimate gathering with your loved ones. Elevate your business events with a unique twist. Our Corporate Retreat at Sea offers a professional yet relaxed setting for team-building activities, corporate meetings, and networking events. Impress clients or reward your team with a memorable day on the water.`}
            </p>

            <Image
              src={BlueWave36}
              alt={event.title}
              width={500}
              height={300}
              className="w-[700px] h-[500px] object-contain rounded-xl"
            />
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold text-[30px]">Ready to celebrate?</h2>

            <p className="text-[18px]">
              Our Party on the Waves package is designed for those who want to dance, mingle, and revel in the rhythm of the ocean. Perfect for birthdays, bachelor/bachelorette parties, or any occasion that calls for a lively gathering.
            </p>

            <div className="border-l-4 border-l-spaceCadet">
              <h2 className="font-semibold text-[30px] pl-10 text-center">
                Delight your taste buds with our Culinary Cruise Experience.
              </h2>
            </div>

            <p className="text-[18px]">
              Indulge in a gastronomic journey at sea with a carefully crafted menu prepared by our onboard chefs. Ideal for food enthusiasts, this tour combines exquisite cuisine with breathtaking views. Treat your family to a day of fun and relaxation with our Family Fun Day package. From water sports and games to a delicious onboard picnic, this experience is crafted to create lasting memories for you and your loved ones.
            </p>

            <h2 className="font-semibold text-[30px]">
              Tour Inclusions:
            </h2>

            <ul className="list-disc marker:text-brightYellow px-6">
              {[
                "Luxurious Vessel: Choose from our premium fleet of yachts and boats, each equipped with top-tier amenities for your comfort.",
                "Professional Crew: Our experienced crew ensures a safe and enjoyable journey, taking care of all your needs.",
                "Customized Catering: Select from a range of catering options, from gourmet meals to casual snacks, tailored to your preferences.",
                "Entertainment Options: Add entertainment elements such as live music, DJs, or water activities to enhance your experience.",
                "Scenic Routes: Cruise along picturesque coastlines, secluded coves, and iconic landmarks, capturing breathtaking moments."
              ].map((item, index) => (
                <li key={index} className="text-[18px]">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[18px]">
              Delight your taste buds with our Culinary Cruise Experience. Indulge in a gastronomic journey at sea with a carefully crafted menu prepared by our onboard chefs. Ideal for food enthusiasts, this tour combines exquisite cuisine with breathtaking views.
            </p>

            <MapContainer
            center={position} 
            zoom={13} 
            style={{ height: "500px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>A free and open-source map!</Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold text-[30px]">How to Book:</h2>

            <p className="text-[18px]">
              Visit our website, explore the "Seascape Elegance" package, and customize it to suit your preferences. Our user-friendly platform allows you to choose your vessel, select the duration, and add extra services with ease. Let "Seascape Elegance" by Rent Yacht and Boat be the canvas for your unforgettable moments on the water. Book now and set sail for an experience that combines elegance, excitement, and the beauty of the open seas.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[30%] sticky top-10 self-start">
          <div className="mt-5 border-b">
            <div className="flex flex-col gap-1 py-2">
              <div className="flex items-center gap-1">
                <FaCalendarDay className="text-brightYellow w-6 h-6" />
                <h1 className="text-[20px] capitalize font-medium">date</h1>
              </div>

              <p className="text-[16px]]">
                {event.date}
              </p>
            </div>

            <div className="flex flex-col gap-1 py-2">
              <div className="flex items-center gap-1">
                <IoLocationSharp className="text-brightYellow w-6 h-6" />
                <h1 className="text-[20px] capitalize font-medium">location</h1>
              </div>

              <p className="text-[16px] capitalize">
                spain
              </p>
            </div>

            <div className="flex flex-col gap-1 py-2">
              <div className="flex items-center gap-1">
                <FaMoneyBillWave className="text-brightYellow w-6 h-6" />
                <p className="text-[20px]] capitalize font-medium">price</p>
              </div>

              <p className="text-[16px]">
                {event.price}
              </p>
            </div>

            <div className="flex flex-col gap-1 py-2">
              <div className="flex items-center gap-1">
                <MdTram className="text-brightYellow w-6 h-6" />
                <p className="text-[20px] capitalize font-medium">category</p>
              </div>

              <p className="text-[16px] capitalize">
                {event.category}
              </p>
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
                className="py-4 px-8 text-spaceCadet bg-brightYellow rounded-full hover:text-brightYellow hover:bg-spaceCadet hoverEffect cursor-pointer w-36"
              >
                Book a Ticket
              </Link>
            </div>
          </div>
        </div>
      </Container >

      <ImageLayout />
      
      <Event />
    </div >
  );
};

export default EventDetail;