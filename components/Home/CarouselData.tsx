"use client";

import { ArrowRight, ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'
import React, { useCallback, useState } from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';
import { yachtData } from '@/contants';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';

const CarouselData = () => {
  const [index, setIndex] = useState(0);

  const { setSelectedPage } = useAppContext();
    const router = useRouter();

  const prevSlide = useCallback(() => {
      setIndex((prevIndex) => (prevIndex === 0 ? yachtData.length - 1 : prevIndex - 1));
    }, []);
  
    const nextSlide = useCallback(() => {
      setIndex((prevIndex) => (prevIndex === yachtData.length - 1 ? 0 : prevIndex + 1));
    }, []);

    const handleSeeMore = (yacht: any) => {
    setSelectedPage(yacht);
    const yachtSlug = yacht.title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/yacht/${yachtSlug}`);
  };
  return (
    <div className="relative w-full mx-auto">
      {/*Title and Controls */}
      <div className="flex justify-between lg:justify-normal items-center gap-6 mb-4">
        <h2 className="text-[18px] md:text-[20px] font-bold text-white">
          Our Popular Yachts & Boats
        </h2>

        <div className="flex gap-4">
          <button onClick={prevSlide} className="">
            <ChevronLeftCircle className="w-10 h-10 text-white" />
          </button>

          <button onClick={nextSlide} className="">
            <ChevronRightCircle className="w-10 h-10 text-white" />
          </button>
        </div>
      </div>

      {/* Carousel Slides */}
      <div className="overflow-hidden">
        <div className="flex gap-3 transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {yachtData.map((item) => (
            <div key={item.id}
              className="w-[90%] md:w-[55%] lg:w-[70%] flex-shrink-0 p-1"
            >
              <div className="min-w-[95%] md:min-w-[47.5%] lg:min-w-[50.5%] flex gap-4 bg-white/25 py-4 px-3 xl:px-4 border-[1px] border-white/35 rounded-2xl">
                <div className="space-y-3">
                  <h3 className="text-[18px] md:text-[20px] font-semibold mt-3 text-white">
                    {item.title}
                  </h3>

                  <p className="text-[16px]">{item.text}</p>

                  <Button  onClick={() => handleSeeMore(item)}
                    variant="ghost"
                    className="text-[16px] p-0 text-brightYellow capitalize hover:text-white hoverEffect hover:bg-transparent"
                  >
                    yacht info
                    <ArrowRight />
                  </Button>
                </div>

                {item.image.length > 1 && (
                  <Image
                    src={item.image[1]} // Using the second image
                    alt={item.title}
                    width={500}
                    height={300}
                    className="rounded-lg w-32 lg:w-40 h-40"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarouselData