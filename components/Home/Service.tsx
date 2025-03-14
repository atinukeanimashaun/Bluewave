import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import Image from 'next/image';
import { serviceData } from '@/contants';
import BlueWave10 from '@/images/blueWave10.jpg';

const Service = () => {
  return (
    <div>
      <Container className="pt-[60px] md:pt-[80px] xl:pt-[130px]">
        {/* Only show the top section when showOnlyServices is false */}
            <div className="flex flex-col lg:flex-row items-center gap-10 pb-10">
              <div className="space-y-4 flex-1">
                <p className="text-[17px] uppercase text-blueberry my-2">service</p>

                <h1 className="font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-10 lg:leading-[50px] lg:max-w-[550px] my-3">
                  Welcome to Rent Yacht and Boat
                </h1>

                <p className="py-2 text-[20px] lg:max-w-[500px]">
                  Whether you&apos;re planning an intimate sunset cruise, a corporate event, or a family getaway, our fleet has the perfect vessel to suit your needs.
                </p>

                <div className="my-10">
                  <Link
                    href="/services"
                    className="py-2 px-5 text-[20px] text-black capitalize border-[1px] border-spaceCadet rounded-full hover:bg-spaceCadet hover:text-white hoverEffect cursor-pointer"
                  >
                    all services
                  </Link>
                </div>
              </div>

              <div className="flex-1">
                <Image
                  src={BlueWave10}
                  alt="BlueWave10"
                  width={500}
                  height={400}
                  className="w-[800px] h-[500px] rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Services Grid - Always Shown */}
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
    </div>
  );
};

export default Service;