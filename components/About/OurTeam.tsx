import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { teamData } from '@/contants'
import Image from 'next/image'
import SocialMedia from '../SocialMedia'

const OurTeam = () => {
  return (
    <div>
      <Container className="bg-white py-20">
        <div className="pt-7 pb-5 space-y-3">
          <p className="text-[16px] text-blueberry uppercase">team</p>

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">
            <h1 className="text-[36px] md:text-[42px] lg:text-[50px] font-semibold ">
              Meet our Crew
            </h1>

            <Link href="/team" className="py-2 px-5 w-36 text-[20px] text-black capitalize border-[1px] border-spaceCadet rounded-full hover:bg-spaceCadet hover:text-white hoverEffect cursor-pointer">
              our team
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {teamData.slice(0,6).map((item) => (
            <div key={item.id} className="group h-[500px] overflow-hidden shadow-xl rounded-xl relative">
              <Image
                src={item.image}
                alt='item.image'
                width={500}
                height={300}
                className="h-[500px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="space-y-3 h-[150px] w-full absolute -bottom-0 flex flex-col justify-end p-3 bg-white/50 rounded-b-xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-[26px] font-bold capitalize">
                  {item.name}
                </h1>

                <p className="text-[18px]">
                  {item.title}
                </p>

                <SocialMedia />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default OurTeam
