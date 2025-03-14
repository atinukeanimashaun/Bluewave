import React from 'react'
import Container from '../Container'
import { cruiseData } from '@/contants'
import Image from 'next/image'

const Cruise = () => {
  return (
    <Container className="py-[60px] md:py-[80px] xl:py-[130px]">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cruiseData.map((cruise) => (
          <div key={cruise.id} className="flex flex-col gap-4">
            <Image
              src={cruise.image}
              alt='cruise.image'
              width={500}
              height={300}
              className="w- h-[400px] rounded-xl object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="flex items-center gap-3">
              <Image
                src={cruise.icon}
                alt='cruise.icon'
                width={500}
                height={300}
                className="w-12 h-12"
              />

              <h1 className="font-semibold text-[26px] text-spaceCadet">
                {cruise.title}
              </h1>
            </div>

            <p className="text-[18px]">
              {cruise.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Cruise
