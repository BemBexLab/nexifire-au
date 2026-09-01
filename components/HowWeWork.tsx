"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { TfiArrowTopRight } from "react-icons/tfi";
import Link from "next/link";

const HowWeWork = () => {
  return (
    <section className="flex w-full justify-center py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid w-full min-w-0 max-w-[1230px] grid-cols-1 items-center gap-10 px-4 sm:px-6 md:gap-12 md:px-8 lg:grid-cols-[minmax(0,0.855fr)_minmax(0,1fr)] lg:gap-10 xl:gap-20 xl:px-0">
        {/* Left Image */}
        <div className="flex min-w-0 justify-center lg:justify-start">
          <div className="relative aspect-[53/43] w-full max-w-[530px] overflow-hidden rounded-[14px]">
            <Image
              src="/images/Rectangle 9 (2).png"
              alt="How we work team"
              fill
              sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 530px, (max-width: 1279px) 43vw, 530px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="mx-auto w-full min-w-0 max-w-[620px] lg:mx-0">
          <h2 className="break-words bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text font-jakarta text-3xl font-medium uppercase leading-tight text-transparent sm:text-4xl lg:text-5xl">
            How We Work
          </h2>

          <p className="mt-4 max-w-[620px] break-words font-jakarta text-lg text-[#777777] sm:mt-6">
            Our organisation believes that excellent results emerge when people
            have a complete understanding of their tasks and work together while
            developing their skills. At NexiFire, you’ll join a work environment
            where teams work together to support your initiatives and teams work
            together to achieve their goals. Our organisation creates a
            workplace environment that enables you to acquire new skills while
            developing your abilities to perform work that has a substantial
            impact.
          </p>

          <Link href="/contact">
            <motion.button
              style={{
                background: "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
              }}
              className="mt-5 flex min-h-[46px] w-full items-center justify-center gap-2 whitespace-pre-line rounded-lg px-5 py-2 text-center text-base font-light text-white sm:w-fit sm:min-w-[200px] md:text-lg"
              whileHover={{
                y: -3,
                scale: 1.02,
                boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
              }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              Let’s Talk
              <motion.span
                whileHover={{ x: 4, y: -2 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
              >
                <TfiArrowTopRight size={20} />
              </motion.span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;