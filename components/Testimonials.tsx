"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Hannah Bertin",
    avatar: "/images/Ellipse 16.png",
    review:
      "NexiFire brought a level of structure I never realised I was missing. I’m an author and worked with one of NexiFire’s brands, Ink Founders. I must say, they were very professional. Everything was aligned under one system, and they helped me with editing, marketing, and publishing my book. I really appreciated their support.",
  },
  {
    id: 2,
    name: "Benjamin Paul",
    avatar: "/images/Ellipse 16 (1).png",
    review:
      "I was concerned about my website development because I wanted it to be unique and responsive across all devices. NexiFire’s brand, Web Founders, helped me tremendously with that. They kept everything connected, from strategy through to execution. It felt like working with a complete growth system.",
  },
  {
    id: 3,
    name: "John Alex",
    avatar: "/images/Ellipse 16 (2).png",
    review:
      "I was looking for support with creating my author website and publishing my book, and I worked with NexiFire’s brand, StoryLoom. There’s no doubt that their complete system gave me greater clarity and confidence. Everything was handled carefully, from my author website to publishing my book across different platforms. Every step was well managed.",
  },
  {
    id: 4,
    name: "Olivia James",
    avatar: "https://i.pravatar.cc/100?img=4",
    review:
      "Before NexiFire, I was trying to manage everything separately, but after working with them, we finally had a clear direction and a structured approach towards growth. They handled content creation for my website as well as the marketing for my book, and I was very satisfied with their work. I worked with Web Geeks Global and The Quill Book, and the biggest difference was how everything worked together. Each part of the process was handled by the right specialists, yet the entire experience felt connected and well managed.",
  },
  {
    id: 5,
    name: "Alex Williams",
    avatar: "https://i.pravatar.cc/100?img=6",
    review:
      "My name is Alex, and I run an IT services company. I’ve worked with one of NexiFire’s brands, and I would describe their work as highly professional. They delivered everything on time, and I was very pleased with the content and illustrations they created for my website. I requested a few revisions as well, and each one was handled with great attention to detail. That level of care impressed me the most.",
  },
  {
    id: 6,
    name: "Ernest Santillanes",
    avatar: "https://i.pravatar.cc/100?img=5",
    review:
      "I’m using Ink Founders for my fiction book, and they have been incredible with the editing, formatting, and publishing process. They follow my instructions carefully for every chapter and make adjustments based on my feedback. I’m also very impressed with how they optimised my book for Amazon after publishing.",
  },
];

const Stars = () => {
  return (
    <div className="mb-5 flex items-center gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
        >
          <path
            d="M13.3148 0L16.458 9.67376H26.6296L18.4006 15.6525L21.5438 25.3262L13.3148 19.3475L5.0858 25.3262L8.22899 15.6525L-2.86102e-06 9.67376H10.1716L13.3148 0Z"
            fill="#B24002"
          />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  const slides = useMemo(() => {
    const grouped: Testimonial[][] = [];
    for (let i = 0; i < testimonials.length; i += 3) {
      grouped.push(testimonials.slice(i, i + 3));
    }
    return grouped;
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <div className="mb-8 text-center sm:mb-[34px]">
          <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text font-jakarta text-3xl font-medium uppercase leading-tight text-transparent sm:text-4xl lg:text-5xl">
            WHAT ARE THEY
            <br />
            SAYING ABOUT US?
          </h2>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${(100 / slides.length) * currentSlide}%)`,
            }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="grid w-full shrink-0 grid-cols-1 gap-4 rounded-[12px] px-[2px] md:grid-cols-3"
                style={{ width: `${100 / slides.length}%` }}
              >
                {slide.map((item) => (
                  <article
                    key={item.id}
                    className="flex h-full min-h-[338px] flex-col rounded-[12px] border border-[#eaeaea] bg-white px-4 pb-[18px] pt-[14px]"
                    style={{
                      boxShadow:
                        "0 10px 24px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
                    }}
                  >
                    <Stars />

                    <div
                      className="reviews-scroll h-[150px] overflow-y-scroll pr-2"
                      aria-label={`${item.name} review`}
                    >
                      <p className="text-base leading-[1.58] text-[#7a7a7a]">
                        {item.review}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center gap-[12px] pt-[18px]">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="h-[64px] w-[64px] rounded-full object-cover"
                        sizes="64px"
                      />
                      <span className="text-[16px] font-medium text-[#4d4d4d]">
                        {item.name}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[26px] flex items-center justify-center gap-[6px]">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={
                index === currentSlide
                  ? "h-[8px] w-[24px] rounded-full bg-[#C65A12] transition-all duration-300"
                  : "h-[8px] w-[8px] rounded-full bg-[#d6d6d6] transition-all duration-300"
              }
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .reviews-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .reviews-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
