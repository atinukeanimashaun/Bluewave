"use client";

import React from 'react'
import Container from '../Container'
import { eventData } from '@/contants'
import Image from 'next/image'
import { BsArrowRight, BsStarFill } from "react-icons/bs";
import { Button } from '../ui/button';
import { FaCalendarDay } from "react-icons/fa";
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';


const Event = () => {
  const { setSelectedPage } = useAppContext();
  const router = useRouter();

  const handleDetail = (event: any) => {
    setSelectedPage(event);
    const eventSlug = event.title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/event/${eventSlug}`);
  };

  return (
    <div className="py-20">
      <Container>
        <div className="pt-7 pb-5 space-y-5">
          <p className="text-[16px] text-blueberry uppercase">event</p>

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">
            <h1 className="text-[36px] md:text-[42px] lg:text-[50px] font-semibold ">
              Our best Events
            </h1>

            <Link href="/event" className="py-2 px-5 w-36 text-[20px] text-black capitalize border-[1px] border-spaceCadet rounded-full hover:bg-spaceCadet hover:text-white hoverEffect cursor-pointer">
              learn more
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {eventData.slice(0, 3).map((item) => (
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

              <Button variant="ghost"
                onClick={() => handleDetail(item)}
                className="text-[18px] capitalize text-spaceCadet hover:text-brightYellow hoverEffect p-0"
              >
                event info

                <BsArrowRight />
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Event