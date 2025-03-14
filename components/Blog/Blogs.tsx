"use client"

import React, { useState } from 'react'
import Container from '../Container'
import { blogData } from '@/contants';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '../ui/button';
import { BsArrowRight } from 'react-icons/bs';
import RecentPost from './RecentPost';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const categories = [...new Set(blogData.map((blog) => blog.category))];

  const { setSelectedPage } = useAppContext();
  const router = useRouter();

  const filteredBlog =
    selectedCategory === "All Blogs"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  const handleBlogDetail = (blog: any) => {
    setSelectedPage(blog);
    const blogSlug = blog.title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/blog/${blogSlug}`);
  };

  return (
    <Container className="py-20 flex flex-col-reverse lg:flex-row gap-5">
      <div className="w-full lg:w-[65%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBlog.map((item) => (
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
      </div>

      <div className="w-full lg:w-[40%] md:sticky top-10 self-start">
        <div className="space-y-4 bg-diamond p-4 rounded-xl mb-10">
          <h1 className="font-semibold text-[24px] capitalize">categories</h1>

          <div className="flex flex-row gap-4 my-10">
            {/* All Events Button */}
            <Button variant="outline"
              onClick={() => setSelectedCategory("All Blogs")}
              className={`font-semibold text-[18px] px-4 py-2 border rounded-full duration-300 transition-all cursor-pointer ${selectedCategory === "All Blogs"
                ? "border-spaceCadet text-white bg-spaceCadet hover:bg-spaceCadet hover:text-white"
                : "border-spaceCadet text-spaceCadet hover:bg-white"
                }`}
            >
              All Blogs
            </Button>

            {/* Other Categories */}
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Button variant="outline"
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-[18px] rounded-full border transition-all duration-300 ${selectedCategory === category
                    ? "bg-spaceCadet text-white border-spaceCadet"
                    : "border-spaceCadet text-spaceCadet hover:bg-white"
                    }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <RecentPost />
      </div>
    </Container>
  )
}

export default Blogs