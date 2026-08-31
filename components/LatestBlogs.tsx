"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { SlArrowRight } from "react-icons/sl";
import { getRecentBlogPosts } from "@/data/blogs";

const LatestBlogs = () => {
  const blogs = getRecentBlogPosts(3);

  return (
    <LazyMotion features={domAnimation}>
      <section className="flex w-full items-center justify-center bg-white pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col px-4 sm:px-6 lg:px-8">
          <m.h2
            className="break-normal! bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text pb-8 text-center font-jakarta text-3xl! font-medium uppercase leading-tight! tracking-normal! text-transparent [text-wrap:wrap]! [word-spacing:normal]! sm:pb-10 sm:text-4xl! lg:text-5xl!"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Our Latest Blogs
          </m.h2>

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <m.article
                key={blog.id}
                className="w-full overflow-hidden rounded-2xl border border-[#EEEEEE] bg-[#FEFEFE]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-[#F3F3F3]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                </div>

                <div className="px-4 pb-5 pt-4 sm:px-5">
                  <h3 className="min-h-[56px] break-normal! text-[16px]! font-normal leading-[1.45]! tracking-normal! text-[#444444] [text-wrap:wrap]! [word-spacing:normal]! sm:min-h-[64px] sm:text-[17px]!">
                    {blog.title}
                  </h3>

                  <p className="mt-2 break-normal! text-[14px]! leading-[1.65]! tracking-normal! text-[#777777] [word-spacing:normal]!">
                    {blog.description}
                  </p>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="mt-4 inline-flex items-center gap-2 border-b border-[#f26a21] pb-[1px] text-[14px] font-normal leading-loose text-[#B24002]"
                  >
                    Learn More
                    <span className="text-[16px] leading-none"><SlArrowRight size={13} /></span>
                  </Link>
                </div>
              </m.article>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default LatestBlogs;