"use client"

import React, { useRef, useState } from 'react'
import Container from '../Container'
import { teamData } from '@/contants'
import Image from 'next/image'
import SocialMedia from '../SocialMedia'
import { FiPlayCircle, FiPauseCircle } from "react-icons/fi";

const Team = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Container className="bg-white py-20">
      <div className="flex flex-col items-center justify-center text-center gap-5">
        <p className="text-[16px] text-blueberry uppercase">team</p>

        <h1 className="text-[36px] md:text-[42px] lg:text-[50px] font-semibold max-w-[800px]">
          Our team is the backbone of our commitment to safety
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-10">
        {teamData.map((item) => (
          <div key={item.id} className="h-[500px] overflow-hidden shadow-xl rounded-xl relative">
            <Image
              src={item.image}
              alt='item.image'
              width={500}
              height={300}
              className="h-[500px] w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="space-y-2 h-[180px] w-full absolute -bottom-1 flex flex-col justify-center items-center p-3 bg-white rounded-b-xl cursor-pointer">
              <h1 className="text-[26px] font-bold capitalize">
                {item.name}
              </h1>

              <p className="text-[18px]">
                {item.title}
              </p>

              <SocialMedia />
            </div>
          </div>
        ))}
      </div>

      <div className="py-24 flex flex-col lg:flex-row items-center gap-5 pb-10">
        <div className="relative w-full h-[500px] md:h-[600px]">
          <video ref={videoRef} className="w-full h-full object-cover rounded-xl" loop muted playsInline>
            <source src="/videos/BlueWaveVideo1.mp4" type="video/mp4" />
          </video>

          {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl"
        >
          <FiPlayCircle className="w-16 h-16 text-white" />
        </button>
      )}

      {/* Pause Button (Visible when playing) */}
      {isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute bottom-5 right-5 bg-black/60 text-white p-3 rounded-full"
        >
          <FiPauseCircle className="w-8 h-8" />
        </button>
      )}
        </div>

        <div className="space-y-4">
          <h1 className="text-[36px] md:text-[42px] lg:text-[50px] leading-[55px] font-semibold max-w-[600px]">
            We are a family united by a shared love for the sea
          </h1>

          <p className="text-[18px] max-w-[1200px]">
            Embark on a journey with the Horizon Yacht Rentals team, a group of dedicated professionals passionate about curating unparalleled maritime experiences. Our team is the backbone of our commitment to safety, and customer satisfaction.
          </p>

          <p className="font-light text-[18px] uppercase pt-8">
            joseph charles / first captain
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Team
