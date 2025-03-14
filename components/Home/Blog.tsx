"use client"

import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { blogData } from '@/contants'
import Image from 'next/image'
import { Button } from '../ui/button'
import { BsArrowRight } from 'react-icons/bs'
import { useAppContext } from '@/context/AppContext'
import { useRouter } from 'next/navigation'

const Blog = () => {
  const { setSelectedPage } = useAppContext();
  const router = useRouter();

  const handleBlogDetail = (Blog: any) => {
    setSelectedPage(Blog);
    const BlogSlug = Blog.title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/Blog/${BlogSlug}`);
  };
  return (
    <div className="py-20">
      <Container>
        <div className="pt-7 pb-5 space-y-5">
          <p className="text-[16px] text-blueberry uppercase">news</p>

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">
            <h1 className="text-[36px] md:text-[42px] lg:text-[50px] font-semibold ">
              Featured Articles
            </h1>

            <Link href="/insight" className="py-2 px-5 w-36 text-[20px] text-black capitalize border-[1px] border-spaceCadet rounded-full hover:bg-spaceCadet hover:text-white hoverEffect cursor-pointer">
              learn more
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogData.slice(0, 3).map((item) => (
            <div key={item.id} className="space-y-3">
              <Image
                src={item.image}
                alt='item.image'
                width={500}
                height={300}
                className="w-[400px] h-[600px] object-cover rounded-xl"
              />

              <p className="text-[18px] font-medium">
                {item.date}
              </p>

              <h1 onClick={() => handleBlogDetail(item)}
                className="font-semibold text-[28px] text-spaceCadet hover:text-brightYellow hoverEffect">
                {item.title}
              </h1>

              <p className="text-[18px] font-medium">
                {item.description}
              </p>

              <Button variant="ghost"
                onClick={() => handleBlogDetail(item)}
                className="text-[18px] capitalize text-spaceCadet hover:text-brightYellow hoverEffect p-0"
              >
                read more

                <BsArrowRight />
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Blog