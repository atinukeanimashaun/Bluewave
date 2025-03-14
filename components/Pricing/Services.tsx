import React from 'react'
import Container from '../Container'
import { companyLogos, planData } from '@/contants'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Services = () => {
  return (
    <Container className="py-[60px] md:py-[80px] xl:py-[130px]">
      <div className="flex flex-col items-center justify-center text-center gap-3">
        <p className="text-[17px] uppercase text-blueberry my-2">basic pack</p>

        <h1 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-10 lg:leading-[50px]">
          Services included in every plan
        </h1>

        <p className="py-2 text-[20px] lg:max-w-[900px]">
          Our pricing structure is designed to accommodate various preferences and budgets, allowing you to tailor your experience based on your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pb-24">
        {planData.map((item) => (
          <div key={item.id} className="p-5 bg-diamond rounded-xl flex flex-col items-start gap-2">
            <Image
              src={item.icon}
              alt={item.title}
              width={500}
              height={300}
              className="w-16 h-16"
            />
            <h2 className="font-semibold text-[26px]">{item.title}</h2>
            <p className="text-[18px] max-w-[350px]">{item.description}</p>

            <div className="">
              <Link
                href={item.href}
                className="py-4 text-[20px] text-spaceCadet rounded-full hover:text-brightYellow hoverEffect cursor-pointer flex items-center justify-center gap-2"
              >
                Learn more

                <ArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center gap-8 gap-y-2 py-3 px-6 w-full" >
        {
          companyLogos.slice(6,12).map((logo, index) => (
            <Image key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              width={400}
              height={200}
              className="w-36 h-20 object-contain"
            />
          ))
        }
      </div>
    </Container>
  )
}

export default Services
