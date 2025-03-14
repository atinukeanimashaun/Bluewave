import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import BlueWave12 from '@/images/BlueWave12.jpg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { faqsData } from '@/contants'

const Frequently = () => {
  return (
    <div className="py-[60px] md:py-[80px] xl:py-[130px]">
      <Container className="flex flex-col lg:flex-row gap-6 xl:gap-14">
        <div>
          <div>
            <h1 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-10 lg:leading-[50px] xl:max-w-[550px] my-3">
              The most common questions
            </h1>

            <p className="py-2 text-[20px] max-w-[850px]">
              Our yachts and boats are equipped with state-of-the-art amenities, ensuring a lavish and comfortable experience.
            </p>
          </div>

          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqsData.slice(0, 3).map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}
                className="bg-diamond p-4 rounded-xl border-0">
                <AccordionTrigger className="font-semibold text-[24px] text-spaceCadet hover:text-brightYellow">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[18px] leading-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Image
          src={BlueWave12}
          alt='BlueWave'
          width={500}
          height={300}
          className="w-full lg:w-[500px] xl:w-[800px] h-[450px] lg:h-[700px] rounded-xl object-cover"
        />
      </Container>
    </div>
  )
}

export default Frequently
