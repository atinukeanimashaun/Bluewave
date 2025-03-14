"use client"

import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import { blogData } from '@/contants'
import { useAppContext } from '@/context/AppContext'
import { useRouter } from 'next/navigation'

const RecentPost = () => {
  const { setSelectedPage } = useAppContext();
  const router = useRouter();

  const handleBlogDetail = (Blog: any) => {
    setSelectedPage(Blog);
    const BlogSlug = Blog.title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/Blog/${BlogSlug}`);
  };
  return (
    <Container className="bg-diamond p-4 rounded-xl">
      <h1 className="font-semibold text-[24px] capitalize">
        recent posts
      </h1>

      <div className="flex flex-col gap-6 mt-8">
        {blogData.slice(0, 4).map((item) => (
          <div key={item.id} onClick={() => handleBlogDetail(item)}
            className="flex gap-4">
            <Image
              src={item.image}
              alt='item.image'
              width={500}
              height={300}
              className="w-[100px] h-[100px] object-cover rounded-xl"
            />

            <div className="space-y-2">
              <h1 className="font-semibold text-[20px] text-spaceCadet hover:text-brightYellow hoverEffect">
                {item.title}
              </h1>

              <p className="text-[18px] font-medium">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default RecentPost
