import React from 'react'
import Container from '../Container'
import BlueWave from '@/images/BlueWave.jpg'
import BlueWave1 from '@/images/BlueWave1.jpg'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className="py-20">
      <Container className="flex flex-col md:flex-row gap-6">
        <div className="">
          <Image
            src={BlueWave}
            alt='BlueWave'
            width={500}
            height={300}
            className="w-[500px] h-[400px] md:h-[850px] rounded-xl object-cover"
          />
        </div>

        <div className="space-y-4">
          <p className="text-[17px] uppercase text-blueberry my-2">
            our story
          </p>

          <h1 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-10 lg:leading-[50px] max-w-[450px] lg:max-w-[650px] my-3">
            Unwind in Style with Rent Yacht and Boat
          </h1>

          <p className="py-2 text-[20px] max-w-[700px]">
            Immerse yourself in the epitome of elegance and comfort with our meticulously curated fleet of yachts and boats.
          </p>

          <div className="my-10">
            <Link href="/about" className="py-2 px-5 text-[20px] text-black capitalize border-[1px] border-spaceCadet rounded-full hover:bg-spaceCadet hover:text-white hoverEffect cursor-pointer">
              about us
            </Link>
          </div>

          <div className="pt-10">
            <Image
              src={BlueWave1}
              alt='BlueWave1'
              width={500}
              height={300}
              className="w-[600px] h-[500px] rounded-xl"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
