"use client"

import React, { useState } from 'react'
import Container from '../Container';
import { eventData } from '@/contants';
import { Button } from '../ui/button';
import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';
import { FaCalendarDay } from 'react-icons/fa';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';

type Event = {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  price: string;
};

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const categories = [...new Set(eventData.map((event) => event.category))];

  const { setSelectedPage } = useAppContext();
  const router = useRouter();

  const filteredEvents =
    selectedCategory === "All Events"
      ? eventData
      : eventData.filter((event: Event) => event.category === selectedCategory);

  const handleDetail = (event: Event) => {
    setSelectedPage(event.id);
    const eventSlug = event.title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/event/${eventSlug}`);
  };
  return (
    <Container className="py-20">
      <div className="flex flex-row justify-between gap-4 my-10">
        {/* All Events Button */}
        <Button variant="outline"
          onClick={() => setSelectedCategory("All Events")}
          className={`font-semibold text-[18px] px-4 py-2 border rounded-full duration-300 transition-all cursor-pointer ${selectedCategory === "All Events"
            ? "border-spaceCadet text-white bg-spaceCadet hover:bg-spaceCadet hover:text-white"
            : "border-spaceCadet text-spaceCadet hover:bg-white"
            }`}
        >
          All Events
        </Button>

        {/* Other Categories */}
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Button variant="outline"
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-[18px] rounded-full border transition-all duration-300 ${selectedCategory === category
                ? "bg-spaceCadet text-white border-spaceCadet"
                : "border-spaceCadet text-spaceCadet hover:bg-white"
                }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredEvents.map((item) => (
          <div key={item.id} className="space-y-3">
            <Image
              src={item.image}
              alt='item.image'
              width={500}
              height={300}
              className="w-[400px] h-[600px] object-cover rounded-xl"
            />

            <div className="flex items-center gap-2 pl-2">
              {Array(5).fill("").map((_, i) => (
                <BsStarFill key={i} className="w-6 h-6 text-brightYellow" />
              ))}
            </div>

            <h1 onClick={() => handleDetail(item)}
            className="font-semibold text-[28px] text-spaceCadet hover:text-brightYellow hoverEffect">
              {item.title}
            </h1>

            <div className="flex items-center gap-3">
              <FaCalendarDay className="text-brightYellow text-[18px]" />

              <p className="text-[18px] font-medium">
                {item.date}
              </p>
            </div>

            <div className="flex justify-between mt-5">
              <p className="text-[28px] text-spaceCadet font-semibold">
                {item.price}
              </p>

              <Link href="/contact"
                className="text-[18px] capitalize bg-brightYellow text-spaceCadet py-2 px-5 rounded-full hover:bg-spaceCadet hover:text-white hoverEffect"
              >
                book  a ticket
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Events
