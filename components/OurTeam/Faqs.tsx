import Link from 'next/link'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import Container from '../Container'
import { faqsData } from '@/contants'

const Faqs = () => {
  return (
    <div className="relative">
      <div className="relative max-w-screen-xl mx-auto px-4">
        <div className="absolute -top-[25rem] left-0 w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl z-10 px-3">
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

      <div className="bg-spaceCadet text-white pt-[10rem] md:pt-[20rem] pb-[60px] md:pb-[80px] xl:pb-[130px] mt-[25rem] relative">
        <Container>
          <div className="flex flex-col items-center justify-center text-center gap-5">
            <p className="text-[16px] text-blueberry uppercase">faq</p>

            <h1 className="text-[36px] md:text-[42px] lg:text-[50px] font-semibold">
            Customers frequently ask
            </h1>
          </div>

          <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqsData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}
              className="bg-white/20 p-4 rounded-xl border-0">
              <AccordionTrigger className="font-semibold text-[24px] text-white hover:text-brightYellow">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[18px] leading-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </div>
    </div>
  )
}

export default Faqs