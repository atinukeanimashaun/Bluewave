import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import BlueWav6 from '@/images/BlueWave6.jpg'

const AboutUs = () => {
  return (
    <div className="py-20">
      <Container className="flex flex-col lg:flex-row gap-6">
        <div className="space-y-4">
          <div className="space-y-4 pb-8 border-b-[1px] border-b-gray-200">
            <p className="text-[17px] uppercase text-blueberry my-2">
              about company
            </p>

            <h1 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-10 lg:leading-[50px] min-w-[300px] lg:max-w-[550px] my-3">
              Our crew members are not just sailors
            </h1>

            <p className="py-2 text-[20px] max-w-[550px]">
              Immerse yourself in the epitome of elegance and comfort with our meticulously curated fleet of yachts and boats.
            </p>
          </div>

          <div className="pt-7 flex flex-col md:flex-row gap-3">
            {[
              {
                title: "1k+",
                description: "With years of sailing expertise",
              },
              {
                title: "83",
                description: "Our seasoned maritime maestro",
              },
            ].map((team, index) => (
              <div key={index} className="flex flex-col gap-5 items-start py-5 px-7 bg-cyan-50 rounded-xl">
                <h1 className="font-bold text-[50px] lg:text-[70px] text-brightYellow">
                  {team.title}
                </h1>

                <p className="text-[20px] lg:max-w-[200px]">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <Image
            src={BlueWav6}
            alt='BlueWave'
            width={500}
            height={300}
            className="w-full xl:w-[800px] h-[450px] lg:h-[600px] rounded-xl object-cover"
          />
        </div>
      </Container>
    </div>
  )
}

export default AboutUs