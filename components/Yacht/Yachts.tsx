"use client"

import React, { useState } from 'react'
import Container from '../Container'
import { yachtData } from '@/contants';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';

const Yachts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Yachts & Boats");
  const categories = [...new Set(yachtData.map((yacht) => yacht.category))];

  const { setSelectedPage } = useAppContext();
  const router = useRouter();

  const filteredYachts =
    selectedCategory === "Yachts & Boats"
      ? yachtData
      : yachtData.filter((yacht) => yacht.category === selectedCategory);

  const handleSeeMore = (yacht: any) => {
    setSelectedPage(yacht);
    const yachtSlug = yacht.title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/yacht/${yachtSlug}`);
  };
  return (
    <Container className="py-20">
      <div className="flex flex-row justify-between gap-4 my-10">
        {/* Yachts & Boats Button */}
        <Button variant="outline"
          onClick={() => setSelectedCategory("Yachts & Boats")}
          className={`font-semibold text-[18px] px-4 py-2 border rounded-full duration-300 transition-all cursor-pointer ${selectedCategory === "Yachts & Boats"
            ? "border-spaceCadet text-white bg-spaceCadet hover:bg-spaceCadet hover:text-white"
            : "border-spaceCadet text-spaceCadet hover:bg-white"
            }`}
        >
          Yachts & Boats
        </Button>

        {/* Other Categories */}
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Button variant="outline"
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-[18px] capitalize rounded-full border transition-all duration-300 ${selectedCategory === category
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
        {filteredYachts.map((item) => (
          <div key={item.id} className="space-y-3">
            <Image
              src={item.image[1]}
              alt='item.image'
              width={500}
              height={300}
              className="w-[400px] h-[600px] object-cover rounded-xl"
            />

            <h1 onClick={() => handleSeeMore(item)}
              className="font-semibold text-[28px] text-spaceCadet capitalize hover:text-brightYellow hoverEffect">
              {item.title}
            </h1>

            <div className="mt-5 divide-y-2">
              <div className="flex justify-between">
                <p className="text-[16px] capitalize font-medium">length</p>

                <h2 className="text-[20px] font-semibold">
                  {item.length}
                </h2>
              </div>

              <div className="flex justify-between py-3">
                <p className="text-[16px] capitalize font-medium">year</p>

                <h2 className="text-[20px] font-semibold">
                  {item.year}
                </h2>
              </div>

              <div className="flex justify-between py-3">
                <p className="text-[16px] capitalize font-medium">capacity</p>

                <h2 className="text-[20px] font-semibold">
                  {item.capacity}
                </h2>
              </div>

              <div className="flex justify-between py-3">
                <p className="text-[16px] capitalize font-medium">price</p>

                <h2 className="text-[20px] font-semibold">
                  {item.price}
                </h2>
              </div>

              <div className="py-5">
                <Button variant="ghost"
                  onClick={() => handleSeeMore(item)}
                  className="text-[18px] capitalize text-spaceCadet bg-transparent border border-spaceCadet rounded-full hover:text-white hover:bg-spaceCadet hoverEffect p-4"
                >
                  see more
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Yachts
