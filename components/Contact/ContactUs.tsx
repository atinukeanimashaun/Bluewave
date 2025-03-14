import React from 'react'
import Container from '../Container'
import { IoCall, IoLocationSharp } from 'react-icons/io5'
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <Container className="py-[60px] md:py-[80px] xl:py-[130px]">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="space-y-4 flex-1">
          <div className="space-y-4 pb-8 border-b-[1px] border-b-gray-200">
            <p className="text-[17px] uppercase text-blueberry my-2">
              get in touch
            </p>

            <h1 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-10 lg:leading-[50px] min-w-[300px] lg:max-w-[550px] my-3">
              Book your seafaring adventure today
            </h1>

            <p className="py-2 text-[20px] max-w-[550px]">
              Our customer support team is always ready to assist you in planning the perfect aquatic adventure.
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="text-[20px] font-medium">
              Nigeria
            </h1>

            <div className="flex items-center gap-2">
              <IoCall className="w-5 h-5 text-brightYellow" />

              <a href="tel:+234803513453"
                className="text-[18px] text-spaceCadet hover:text-brightYellow hoverEffect hover:underline">
                +234 803-003-453
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineEmail className="w-5 h-5 text-brightYellow" />

              <a
                href="mailto:info@bluewave.com"
                className="text-[18px] text-spaceCadet hover:text-brightYellow hoverEffect hover:underline"
              >
                info@bluewave.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <IoLocationSharp className="w-6 h-6 text-brightYellow" />

              <div className="flex flex-col">
                <a href="https://www.google.com/maps/search/?api=1&query=5+Richard+street,+ikeja+Lagos,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] text-spaceCadet hover:text-brightYellow hoverEffect hover:underline">
                  5 Richard street, ikeja Lagos, Nigeria
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-diamond py-8 px-10 rounded-xl shadow-xl flex-1">
          <form>
            <h2 className="font-semibold text-[36px] text-center">
              Send us a message
            </h2>

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

              <textarea name="message" rows={10} cols={50}
                className="input1 bg-transparent border border-spaceCadet rounded-xl p-4 w-full"
                defaultValue="Your text"
              />
            </div>

            <button type="submit"
              className="bg-spaceCadet text-[18px] text-white mt-7 py-3 w-full md:w-[25%] rounded-full capitalize hover:bg-brightYellow transition-colors hover:text-spaceCadet hoverEffect cursor-pointer">
              submit
            </button>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default ContactUs