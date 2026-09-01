"use client";

import React, { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m, motion } from "motion/react";
import { TfiArrowTopRight } from "react-icons/tfi";
import Link from "next/link";

const images = [
  "/images/Rectangle 45.png",
  "/images/Rectangle 46.png",
  "/images/Rectangle 47.png",
];

const slotCycle = ["left", "front", "right"] as const;
const initialSlotIndex = [0, 2, 1];

const slotStyles = {
  left: {
    x: -140,
    y: -36,
    rotate: 0,
    scale: 0.92,
    zIndex: 1,
    width: 280,
    height: 360,
  },
  front: {
    x: 0,
    y: 88,
    rotate: 0,
    scale: 1.15,
    zIndex: 3,
    width: 320,
    height: 420,
  },
  right: {
    x: 140,
    y: -96,
    rotate: 0,
    scale: 0.92,
    zIndex: 2,
    width: 280,
    height: 300,
  },
};

const NotAnAgency = () => {
  const [cycleStep, setCycleStep] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCycleStep((current) => (current + 1) % 3);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="flex min-h-[800px] sm:mt-6 w-full items-center justify-center px-6 lg:px-20">
        <div className="grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative flex h-[500px] w-full items-center justify-center">
            {images.map((src, index) => {
              const slot =
                slotCycle[
                  (initialSlotIndex[index] + cycleStep) % slotCycle.length
                ];
              const style = slotStyles[slot];

              return (
                <m.img
                  key={src}
                  src={src}
                  alt={`img${index + 1}`}
                  className="absolute rounded-2xl object-fit shadow-none"
                  initial={{ opacity: 0, x: -80, y: 20, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    x: style.x,
                    y: style.y,
                    rotate: style.rotate,
                    scale: style.scale,
                    zIndex: style.zIndex,
                    width: style.width,
                    height: style.height,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              );
            })}
          </div>

          <div className="max-w-xl font-jakarta">
            <m.h2
              className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text font-jakarta text-4xl font-medium uppercase leading-tight text-transparent lg:text-5xl"
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Not an Agency. A
              <br />
              Growth Ecosystem
            </m.h2>

            <m.p
              className="mt-6 text-lg leading-relaxed text-gray-500"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              NexiFire is not a single service provider. We are a group of
              specialised brands built to solve different parts of business
              growth.
            </m.p>

            <m.p
              className="mt-4 text-lg leading-relaxed text-gray-500"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.22 }}
            >
              We are here to plan and execute brand strategy, digital marketing,
              content creation, and conversion systems. Each brand under
              NexiFire focuses on one thing: delivering results with depth, not
              surface level execution.
            </m.p>

            <m.p
              className="mt-4 text-lg leading-relaxed text-gray-500"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.32 }}
            >
              We do not chase trends. We build systems that scale.
            </m.p>

            <Link href="/about">
              <motion.button
                style={{
                  background:
                    "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
                }}
                className="flex mt-5 w-full items-center justify-center gap-2 rounded-lg py-2 text-base font-light text-white sm:w-[200px] md:text-lg"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
                }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                Learn More
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
    </LazyMotion>
  );
};

export default NotAnAgency;
