"use client"

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import BlueWave15 from '@/images/BlueWave15.jpg'
import { companyLogos, testimonialsData } from '@/contants'
import Container from '../Container'
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

const Testimonials = ({ page }: { page: "page1" | "page2" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  }, []);

  return (
    <>
      {page === "page1" && (
        <>
          <div className="relative overflow-hidden h-[55rem]"
            style={{ backgroundImage: `url(${BlueWave15.src})` }}>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/50">
              <Container className="flex flex-col items-center gap-3 lg:gap-8">
                <div className="md:max-w-[1000px]">
                  <p className="text-[20px] md:text-[28px] lg:text-[34px] my-3 md:h-64">
                  &quot;{testimonialsData[currentIndex].description}&quot;
                  </p>

                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 w-full md:mt-8">
                    <div className="flex items-center gap-4">
                      <Image src={testimonialsData[currentIndex].avatar}
                        alt='avatar'
                        width={400}
                        height={200}
                        className="w-20 h-20 rounded-full object-cover"
                      />

                      <div className="flex flex-col gap-2">
                        <p className="text-[20px] font-medium">
                          {testimonialsData[currentIndex].name}
                        </p>

                        <p className="text-[16px]">
                          {testimonialsData[currentIndex].title}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end md:justify-between gap-3">
                      <div
                        onClick={prevSlide}

                      >
                        <IoArrowBackCircleOutline className="w-16 h-16" />
                      </div>

                      <div
                        onClick={nextSlide}

                      >
                        <IoArrowForwardCircleOutline className="w-16 h-16" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center gap-8 gap-y-2 bg-white/50 border rounded-xl py-3 px-6 w-full">
                  {companyLogos.slice(0,6).map((logo, index) => (
                    <Image key={index}
                      src={logo}
                      alt={`Company Logo ${index + 1}`}
                      width={400}
                      height={200}
                      className="w-36 h-20 object-contain"
                    />
                  ))}
                </div>
              </Container >
            </div>
          </div>
        </>
      )}

      {page === "page2" && (
        <Container className="py-[60px] md:py-[80px] xl:py-[130px]">
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <p className="text-[17px] uppercase text-blueberry my-2">testimonials</p>

            <p className="text-[20px] md:text-[26px] lg:text-[34px] max-w-[800px]">
            &quot;Renting a yacht from Rent Yacht and Boat was an absolute dream realized! From the moment we stepped on board, the crew made us feel like royalty. The vessel was pristine, the service impeccable, and the views breathtaking. This experience exceeded our expectations in every way.&quot;
            </p>

            <div className="flex gap-3 mt-8">
              {[
                "/images/avatar1.webp",
                "/images/avatar2.webp",
                "/images/avatar3.webp",
              ].map((avatar, index) => (
                <Image key={index}
                src={avatar}
                alt='avatar'
                width={400}
                height={200}
                className="w-16 h-16 rounded-full object-cover"
              />
              ))}
            </div>
          </div>
        </Container>
      )}
    </>
  )
}

export default Testimonials
