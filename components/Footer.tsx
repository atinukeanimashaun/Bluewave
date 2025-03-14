import React from 'react'
import Container from './Container'
import Link from 'next/link'
import BlueWaveLogo from '@/images/BlueWaveLogo.png'
import Image from 'next/image'
import { footerData, instagramData } from '@/contants'
import SocialMedia from './SocialMedia'
import BlueWave6 from '@/images/BlueWave6.jpg'

const Footer = () => {

  return (
    <div className="pt-[5rem] lg:pt-[25rem] pb-24 mt-[50rem] lg:mt-72 bg-spaceCadet text-white">
      <Container className="relative">
        <div className="absolute -top-[53rem] md:-top-[55rem] lg:-top-[42rem] left-0 flex flex-col-reverse lg:flex-row bg-white/95 shadow-2xl rounded-xl lg:h-[600px] mx-4">
          <div className="w-full lg:w-[50%] py-10 px-5 md:px-16 text-center md:text-left">
            <h1 className="text-black text-4xl md:text-5xl font-semibold max-w-[500px]">
              Book your favorite Yacht now!
            </h1>

            <form>
              <div className="mt-8 space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  autoComplete="off"
                  className="input1 bg-transparent border border-spaceCadet rounded-full p-4 w-full"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  autoComplete="off"
                  className="input1 bg-transparent border border-spaceCadet rounded-full p-4 w-full"
                />

                <select name="yacht" id="yacht" className="text-spaceCadet bg-transparent border border-spaceCadet  rounded-full p-4 w-full">
                  <option value="select a yacht">Select a yacht</option>
                  <option value="aqua dream">Aqua Dream</option>
                  <option value="harbor bill">Harbor Bliss</option>
                  <option value="azure odyssey">Azure Odyssey</option>
                  <option value="ocean serenity">Ocean Serenity</option>
                  <option value="blue horizon">Blue Horizon</option>
                  <option value="sunset serenade">Sunset Serenade</option>
                </select>
              </div>

              <button type="submit"
                className="bg-spaceCadet text-[18px] text-white mt-7 py-3 w-full md:w-[25%] rounded-full capitalize hover:bg-brightYellow transition-colors hover:text-spaceCadet hoverEffect cursor-pointer">
                submit
              </button>
            </form>
          </div>

          <div className="w-full lg:w-[50%]">
            <Image
              src={BlueWave6}
              alt="BlueWave6"
              width={500}
              height={300}
              className="rounded-t-xl lg:rounded-t-none lg:rounded-tr-xl lg:rounded-r-xl w-full h-[350px] lg:h-[600px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-10 gap-x-10 lg:gap-x-5 xl:gap-x-16">
          <div className="flex flex-col md:flex-row lg:flex-col md:justify-between items-center md:items-start gap-5">
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <Link href="/">
                <Image
                  src={BlueWaveLogo}
                  alt='BlueWaveLogo'
                  className="w-44"
                />
              </Link>

              <p className="md:w-[350px] lg:w-[245px] text-[18px] text-center md:text-left">
                Book your yacht or boat with Rent Yacht and Boat and let the waves carry you to a world of unmatched beauty.
              </p>
            </div>

            <SocialMedia />
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-10 gap-x-7 xl:gap-x-16">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-y-7 xl:gap-x-16 w-full">
              <div className="space-y-3 w-full md:w-[50%]">
                <h1 className="text-[20px] uppercase text-center md:text-left">
                  links
                </h1>

                <div className="grid grid-cols-2 gap-x-10 lg:gap-x-5 gap-y-5">
                  {footerData.map((item) => (
                    <Link key={item?.title} href={item?.href}
                      className="font-semibold text-[18px] hover:text-brightYellow hoverEffect relative group capitalize">
                      {item?.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="text-[20px] uppercase text-center md:text-left">
                  instagram
                </h1>

                <div className="grid grid-cols-3 gap-4">
                  {instagramData.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Image
                        src={item.src}
                        alt={`Instagram Image ${index + 1}`}
                        width={400}
                        height={200}
                        className="w-[65px] h-[65px] rounded-xl"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 w-full md:w-[70%] lg:w-[60%] flex flex-col items-center lg:items-start">
              <h1 className="text-[20px] uppercase">
                subscribe
              </h1>

              <form className="space-y-4 w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  autoComplete="off"
                  className="input bg-transparent border border-white rounded-full py-3 px-4 w-full"
                />

                <button
                  type="submit"
                  className="bg-transparent text-[18px] text-white py-3 w-full border border-white rounded-full capitalize hover:bg-brightYellow transition-colors hover:text-spaceCadet hover:border-0 hoverEffect cursor-pointer"
                >
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer