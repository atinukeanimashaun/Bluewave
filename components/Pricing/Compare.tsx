import React from 'react'
import Container from '../Container'
import { compareData } from '@/contants'
import { FaCheck } from "react-icons/fa6";
import Link from 'next/link';

const Compare = () => {
  return (
    <Container className="py-[60px] md:py-[80px] xl:py-[130px]">
      <div className="flex flex-col items-center justify-center text-center gap-3">
        <p className="text-[17px] uppercase text-blueberry my-2">comparing table</p>

        <h1 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-10 lg:leading-[50px]">
          Compare pricing plans
        </h1>

        <p className="py-2 text-[20px] lg:max-w-[900px]">
          Please note that our pricing may vary based on factors such as the type of vessel, duration of the rental, additional services requested, and the specific date and time of your adventure.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-3 pt-4">
        {compareData.map((plan) => (
          <div key={plan.id} className="border border-gray-300 rounded-xl shadow-lg text-center w-full divide-y-2">
            <div className="bg-spaceCadet text-white py-8 space-y-4 rounded-t-xl">
              <p className="text-[20px] font-medium">
                {plan.text}
              </p>

              <p className="text-[36px]  font-semibold">
                {plan.title}
              </p>
            </div>

            <div className="divide-y-2 px-7">
              <div className="space-y-4 py-5">
                <p className="text-[18px] capitalize font-medium">
                  users
                </p>

                <p className="text-[18px]">
                  {plan.users}
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 py-5">
                <p className="text-[18px] capitalize font-medium">
                  Premium supports
                </p>

                <FaCheck className="w-5 h-5 text-spaceCadet" />
              </div>

              <div className="flex flex-col items-center gap-4 py-5">
                <p className="text-[18px] capitalize font-medium">
                  insurance
                </p>

                <p>
                  {plan.icons[0]}
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 py-5">
                <p className="text-[18px] capitalize font-medium">
                  Skippered charter
                </p>

                <p>
                  {plan.icons[1]}
                </p>
              </div>

              <div className="space-y-4 py-5">
                <p className="text-[18px] capitalize font-medium">
                  users
                </p>

                <p className="text-[18px]">
                  {plan.tours}
                </p>
              </div>

              <div className="py-8  flex items-center justify-center">
                <Link
                  href="/contact"
                  className=" py-2 w-[45%] text-[20px] text-white bg-spaceCadet capitalize border-[1px] border-spaceCadet rounded-full hover:bg-brightYellow hover:border-0 hover:text-spaceCadet hoverEffect cursor-pointer"
                >
                  purchase
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Compare
