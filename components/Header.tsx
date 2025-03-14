"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { headerData } from '@/contants';
import Image from 'next/image';
import BlueWaveLogo from '@/images/BlueWaveLogo.png'
import { AlignLeft, X } from 'lucide-react';
import { motion } from "motion/react"

const Header = () => {
  const [nav, setNav] = useState(false);

  const toggleMenu = () => {
    setNav(!nav);
  };

  // const sidebarRef = useOutsideClick<HTMLDivElement>(toggleMenu);

  return (
    <div className="absolute top-0 left-0 w-full px-5 xl:px-0 z-50">
      <div className="mx-auto lg:max-w-screen-lg flex items-center justify-between bg-white/10 border-2 border-diamond rounded-[20px] p-4 mt-6">
        {/* logo */}
        <Link href='/'>
          <Image
            src={BlueWaveLogo}
            alt='BlueWaveLogo'
            className="w-[8rem] lg:w-44"
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-6 text-white font-semibold capitalize text-lg">
          {headerData?.map((item) => (
            <Link key={item?.title} href={item?.href}
              className="hover:text-brightYellow hoverEffect relative group">
              {item?.title}

              <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-brightYellow hoverEffect group-hover:w-1/2 group-hover:left-0" />
              <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-brightYellow hoverEffect group-hover:w-1/2 group-hover:right-0" />
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="px-8 py-4 bg-spaceCadet rounded-full capitalize text-white font-semibold hover:bg-brightYellow hover:text-spaceCadet hidden lg:block hoverEffect">
          contact us
        </Link>

        {/* User Actions */}
        <div className="ml-2 lg:hidden flex gap-4" onClick={toggleMenu}>
          {nav ? (
            <AlignLeft className="w-10 h-10 p-1 text-white" />
          ) : (
            <AlignLeft className="w-10 h-10 p-1 text-white" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Toggle */}
      <nav
        className={`${nav ? "fixed translate-x-0" : "hidden translate-x-full"
          } top-6 left-3 bg-darkColor/50 shadow-xl hoverEffect w-full`}>
        <motion.div 
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration:0.4, delay:0.3 }}
          // ref={sidebarRef}
          className="bg-spaceCadet min-w-72 max-w-96 h-screen flex flex-col justify-start rounded-tr-[18px]">
          <div className="flex items-center justify-between w-full p-5">
            <Link href="/">
              <Image src={BlueWaveLogo} alt="blueWaveLogo" className="w-[8rem]" />
            </Link>

            <div onClick={toggleMenu}>
              <X className="text-white w-8 h-8 hover:text-brightYellow hoverEffect" />
            </div>
          </div>

          <div className="flex flex-col items-start px-5 mt-5 text-white space-y-5 capitalize">
            {headerData?.map((item) => (
              <Link key={item?.title} href={item?.href}
                className="hover:text-brightYellow hoverEffect relative group">
                {item?.title}

                <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-brightYellow hoverEffect group-hover:w-1/2 group-hover:left-0" />
                <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-brightYellow hoverEffect group-hover:w-1/2 group-hover:right-0" />
              </Link>
            ))}

            <Link href="/" className="px-8 py-4 bg-brightYellow rounded-full capitalize text-spaceCadet font-semibold hoverEffect">
              contact us
            </Link>
          </div>
        </motion.div>
      </nav>
    </div>
  )
}

export default Header
