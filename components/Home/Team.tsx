import React from 'react'
import Container from '../Container'
import Link from 'next/link'

const Team = () => {
  return (
    <div className="bg-spaceCadet text-white pt-32 md:pt-64 pb-[60px] md:pb-[80px] xl:pb-[130px] mt-56 relative">
      <div className="relative max-w-screen-xl mx-auto px-4">
        <div className="absolute -top-[25rem] md:-top-[32rem] left-0 w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl z-10 px-3">
          <video className="w-full h-[500px] md:h-[600px] object-cover rounded-xl" autoPlay loop muted playsInline>
            <source src="/videos/BlueWaveVideo.mov" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/50 mx-3 rounded-xl"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center h-full text-white text-center px-6">
            <h1 className="text-4xl md:text-5xl font-semibold">Modern and First class Yacht fleet</h1>
            <p className="text-[20px] mt-4 max-w-[700px] mb-5 pb-3">
              Our yachts and boats are equipped with state-of-the-art amenities, ensuring a lavish and comfortable experience.
            </p>
            <Link
              href="/contact"
              className="py-4 px-8 capitalize text-spaceCadet bg-brightYellow rounded-full hover:text-brightYellow hover:bg-spaceCadet hoverEffect cursor-pointer w-36"
            >
              book now
            </Link>
          </div>
        </div>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10 pt-28">
          <div className="space-y-4 flex-1 md:mx-10 lg:mx-0">
            <h1 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-10 lg:leading-[50px] lg:max-w-[550px] my-4">
              A range waiting to be discover
            </h1>
            <p className="py-2 text-[20px] lg:max-w-[550px]">
              At Rent Yacht and Boat, we are more than a team; we are a crew united by a shared love for the sea and a dedication to providing unparalleled experiences.
            </p>
            <div className="my-10">
              <Link
                href="/about"
                className="py-2 px-5 text-[20px] text-white capitalize border-[1px] border-white rounded-full hover:bg-brightYellow hover:text-spaceCadet hover:border-0 hoverEffect cursor-pointer"
              >
                our team
              </Link>
            </div>
          </div>

          <div className="flex-1 divide-y-2">
            {[
              { title: '1k+', text: 'Clients', description: 'With years of sailing expertise and an intimate knowledge of the seas' },
              { title: '1k+', text: 'Yachts', description: 'Their creativity knows no bounds as they turn your visions into reality, curating every detail to perfection.' },
              { title: '83', text: 'Crews', description: 'Your journey begins with us, and our crew is ready to make it extraordinary.' }
            ].map((team, index) => (
              <div key={index} className="flex gap-5 items-center py-3">
                <div className="flex flex-col gap-0.5 items-center w-40">
                  <h1 className="font-bold text-[50px] lg:text-[70px] text-brightYellow">{team.title}</h1>
                  <p className="text-[18px]">{team.text}</p>
                </div>
                <div>
                  <p className="text-[20px] max-w-[500px]">{team.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Team