import React from 'react'
import Container from '../Container'
import { serviceData } from '@/contants'
import Image from 'next/image'

const Service = () => {
  return (
    <Container className="pt-5 pb-[60px] md:pb-[80px] xl:pb-[130px]">
      <div className="flex flex-col items-center justify-center text-center gap-3">
        <h1 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px]">
          The best process
        </h1>

        <p className="py-2 text-[20px] max-w-[900px]">
          Each of our services is designed to cater to diverse preferences, ensuring that your boat or yacht rental experience with us is not just a journey but a personalized.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pb-24">
        {serviceData.map((item, index) => (
          <div key={index} className="p-5 bg-diamond rounded-xl flex flex-col items-center text-center gap-2">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-16 h-16"
            />
            <h2 className="font-semibold text-[26px]">{item.title}</h2>
            <p className="text-[16px]">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Service