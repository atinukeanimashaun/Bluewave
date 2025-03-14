"use client";

import { yachtData } from "@/contants";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
} from "lucide-react";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import Container from "../Container";
import { Button } from "../ui/button";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Yachts = ({ page }: { page: "home" | "about" | "yacht&boat" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { setSelectedPage } = useAppContext();
  const router = useRouter();

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? yachtData.length - 1 : prevIndex - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === yachtData.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const handleSeeMore = (yacht: any) => {
    setSelectedPage(yacht);
    const yachtSlug = yacht.title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/yacht/${yachtSlug}`);
  };

  return (
    <>
      {page === "home" && (
        <>
          {/* Carousel Wrapper 1 */}
          <div className="bg-spaceCadet py-[60px] md:py-[80px] xl:py-[130px]">
            <div className="text-center text-white">
              <p className="text-[16px] uppercase">yachts & boats</p>

              <h1 className="text-[36px] md:text-[42px] lg:text-[50px] font-semibold ">
                Across the world
              </h1>
            </div>

            <Container>
              <div className="relative w-full overflow-hidden mt-10">
                <div
                  className="lg:w-[80%] max-w-[1000px] mx-auto flex items-center gap-1 transition-transform duration-500"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {yachtData.map((item) => (
                    <div
                      key={item.id}
                      className="w-full flex-shrink-0 flex flex-col items-center text-center gap-6 py-4"
                      style={{ minWidth: "80%" }}
                    >
                      <div className="relative overflow-hidden cursor-pointer py-10">
                        <div onClick={() => handleSeeMore(item)} className="bg-blueberry w-64 h-64 rounded-full">
                          <Image
                            src={item.image[0]}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="w-[360px] h-[300px] md:w-[600px] md:h-[350px] lg:w-[1000px] lg:h-[300px] object-contain absolute md:-bottom-3 lg:bottom-1 left-1/2 -translate-x-1/2"
                          />
                        </div>
                      </div>

                      <div className="text-white space-y-3 mt-8">
                        <h2 onClick={() => handleSeeMore(item)} className="text-[30px] md:text-[36px] capitalize">
                          {item.title}
                        </h2>

                        <p className="text-[18px] max-w-[570px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  onClick={prevSlide}
                  className="absolute top-[60%] md:top-[70%] left-2 md:left-20 lg:left-60 cursor-pointer"
                >
                  <ArrowLeftCircle className="w-10 h-10 text-white" />
                </div>

                <div
                  onClick={nextSlide}
                  className="absolute top-[60%] md:top-[70%] right-2 md:right-20 lg:right-60 cursor-pointer"
                >
                  <ArrowRightCircle className="w-10 h-10 text-white" />
                </div>
              </div>
            </Container>
          </div>
        </>
      )}

      {page === "about" && (
        <>
          {/* Carousel Wrapper 2 */}
          <div className="py-[60px] md:py-[80px] xl:py-[130px] mb-6 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url(${yachtData[currentIndex]?.image[1]})`, // Use second image for better background visuals
            }}
          >
            <div className="absolute inset-0 bg-black/40 px-6"></div>
            {/* Carousel Wrapper 2 */}
            <Container>
              <div className="relative w-full overflow-hidden mt-10 flex flex-col lg:flex-row justify-between gap-5">
                <div>
                  <p className="text-[16px] text-white uppercase">yachts & boats</p>

                  <div className="text-white space-y-3 my-8">
                    <h2 className="text-[40px] md:text-[48px] capitalize hover:text-brightYellow hoverEffect">
                      {yachtData[currentIndex].title}
                    </h2>

                    <p className="text-[18px] max-w-[570px]">
                      {yachtData[currentIndex].description}
                    </p>
                  </div>

                  <Button onClick={() => handleSeeMore(yachtData[currentIndex])} className="py-6 px-8 capitalize text-white bg-spaceCadet rounded-full hover:text-spaceCadet hover:bg-brightYellow hoverEffect cursor-pointer w-36">
                    discover more
                  </Button>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-[360px] h-[300px]">
                    <Image
                      src={yachtData[currentIndex].image[0]}
                      alt={yachtData[currentIndex].title}
                      width={600}
                      height={400}
                      className="w-[360px] h-[300px] md:w-[600px] md:h-[350px] lg:w-[1000px] lg:h-[300px] object-contain"
                    />
                  </div>

                  <div className="flex justify-between gap-14">
                    <div
                      onClick={prevSlide}
                      className="cursor-pointer"
                    >
                      <ArrowLeftCircle className="w-10 h-10 text-white" />
                    </div>

                    <div
                      onClick={nextSlide}
                      className="cursor-pointer"
                    >
                      <ArrowRightCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Container>

          </div>
        </>
      )}

      {page === "yacht&boat" && (
        <>
          <Container className="py-20">
          <div className="pt-7 pb-5 space-y-5">
          <p className="text-[16px] text-blueberry uppercase">yacht & boat</p>

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">
            <h1 className="text-[36px] md:text-[42px] lg:text-[50px] font-semibold ">
            Our best Yachts
            </h1>

            <Link href="/yacht" className="py-2 px-5 w-36 text-[20px] text-black capitalize border-[1px] border-spaceCadet rounded-full hover:bg-spaceCadet hover:text-white hoverEffect cursor-pointer">
              view more
            </Link>
          </div>
        </div> 

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {yachtData.slice(0,3).map((item) => (
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
        </>
      )}
    </>
  );
};

export default Yachts;
