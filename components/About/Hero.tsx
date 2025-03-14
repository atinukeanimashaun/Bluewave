import React from 'react'
import HeroLayout from '../HeroLayout'
import Link from 'next/link'

const Hero = () => {
  return (
    <HeroLayout 
    title="We make every trip unforgettable"
    subtitle="At Rent Yacht and Boat, we pride ourselves on delivering exceptional service tailored to exceed your expectations.."
    backgroundImage="/images/BlueWave24.jpg">
      <div className="flex flex-col lg:flex-row justify-between gap-3 md:gap-9 mt-3 w-full h-14">
        <div className="flex-1 flex flex-row gap-4">
          <Link href="/contact" className="py-4 px-8 capitalize text-spaceCadet bg-brightYellow rounded-full hover:text-brightYellow hover:bg-spaceCadet hoverEffect cursor-pointer w-36">
            book now
          </Link>

          <Link href="/yacht" className="py-4 px-8 capitalize text-white bg-transparent border-[1px] rounded-full hover:text-spaceCadet hover:bg-brightYellow hover:border-0 hoverEffect cursor-pointer w-44">
            discover more
          </Link>
        </div>
      </div>
    </HeroLayout>
  )
}

export default Hero