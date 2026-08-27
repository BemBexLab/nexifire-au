"use client";

import type { BlogPost } from "@/data/blogs";
import Image from "next/image";
import React from "react";
import RecentPosts from "./RecentPosts";

type BlogProps = {
  post: BlogPost;
};

const Blog = ({ post }: BlogProps) => {
  return (
    <article className="mt-30 w-full py-8 font-jakarta md:py-10">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-12">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-[4px] bg-[#f6f6f6]">
              <Image
                src={post.image}
                alt={post.title}
                width={1600}
                height={896}
                priority
                sizes="(max-width: 1024px) 100vw, 850px"
                className="block h-auto w-full"
                unoptimized
              />
            </div>

            <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
              <h1
                className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-left font-jakarta text-3xl font-medium uppercase leading-tight text-transparent sm:text-4xl lg:text-4xl"
              >
                {post.title}
              </h1>

              {post.content.map((section, index) => (
                <React.Fragment
                  key={`section-${index}`}
                >
                  {section.heading && (
                    section.headingLevel === 3 ? (
                      <h3
                        className="max-w-[850px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-left font-jakarta text-2xl font-medium leading-tight text-transparent sm:text-3xl lg:text-[32px]"
                      >
                        {section.heading}
                      </h3>
                    ) : (
                      <h2
                        className="max-w-[850px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-left font-jakarta text-2xl font-medium leading-tight text-transparent sm:text-3xl lg:text-[32px]"
                      >
                        {section.heading}
                      </h2>
                    )
                  )}

                  {section.subheading && (
                    <h4
                      className="mt-3 max-w-[760px] font-jakarta text-lg font-semibold leading-tight text-[#B24002] sm:text-xl"
                    >
                      {section.subheading}
                    </h4>
                  )}

                  {section.paragraphs.length > 0 && (
                    <div
                      className={`max-w-[780px] break-words text-[#777777] [overflow-wrap:anywhere] ${
                        index === 0
                          ? "mt-8 space-y-6 text-[16px] leading-[1.75]"
                          : "mt-6 space-y-6 text-[15px] leading-[1.9]"
                      }`}
                    >
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="lg:pt-1">
            <RecentPosts />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blog;
