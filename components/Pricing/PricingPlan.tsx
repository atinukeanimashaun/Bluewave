import React from 'react'
import Container from '../Container'
import { pricingData } from '@/contants'
import Link from 'next/link'

const PricingPlan = () => {
  return (
    <div className="bg-spaceCadet text-white py-[60px] md:py-[80px] xl:py-[130px]">
      <Container>
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <p className="text-[17px] uppercase my-2">pricing plans</p>

          <h1 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-10 lg:leading-[50px]">
            Pricing that suits your needs
          </h1>

          <p className="py-2 text-[20px] lg:max-w-[900px]">
            Our hourly rates vary based on the type of vessel you choose and the duration of your adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className="p-6 bg-white rounded-xl space-y-3"
            >
              <h2 className="text-[36px] text-spaceCadet font-semibold">
                {plan.title}
              </h2>

              <p className="text-xl text-black">
                {plan.description}
              </p>

              <p className="text-[30px] font-semibold text-spaceCadet">
                {plan.price}
              </p>

              <div className="py-4">
                <Link
                  href="/contact"
                  className="py-2 w-full flex items-center justify-center text-[20px] text-white bg-spaceCadet capitalize border-[1px] border-spaceCadet rounded-full hover:bg-brightYellow hover:border-0 hover:text-spaceCadet hoverEffect cursor-pointer"
                > 
                  buy now
                </Link>
              </div>

              <ul className="mt-10 text-left list-disc marker:text-brightYellow px-6">
                {plan.list.map((item, index) => (
                  <li key={index} className="text-black py-2">
                   {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default PricingPlan