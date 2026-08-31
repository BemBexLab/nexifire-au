"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import { TfiArrowTopRight } from "react-icons/tfi";
import Link from "next/link";

const values = [
  {
    title: "Specialization",
    description: "Each of our brands is created to master one specific area.",
  },
  {
    title: "Integrity",
    description:
      "We create systems that are stable, secure, and built on long-term plans",
  },
  {
    title: "Synergy",
    description:
      "We connect creative storytelling with technical execution for reliable and real results.",
  },
  {
    title: "Precision",
    description:
      "Decisions are guided by research data and insights and not guesswork.",
  },
];

type BloomCustom = {
  x: number;
  y: number;
  rotate: number;
  delay: number;
};

const bloomEase = [0.23, 1, 0.32, 1] as const;

const bloomVariants: Variants = {
  hidden: {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
  },
  visible: (custom: BloomCustom) => ({
    x: custom.x,
    y: custom.y,
    rotate: custom.rotate,
    scale: 1,
    transition: {
      duration: 1,
      delay: custom.delay,
      ease: bloomEase,
    },
  }),
};

const OurValues = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadImages, setShouldLoadImages] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || shouldLoadImages) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadImages(true);
          observer.disconnect();
        }
      },
      { rootMargin: "280px 0px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldLoadImages]);

  return (
    <section ref={sectionRef} className="w-full pb-16 md:pb-20 lg:pb-24">
      <div className="mx-auto grid w-full max-w-[1240px] min-w-0 grid-cols-1 items-center gap-12 px-5 sm:gap-14 sm:px-6 md:px-8 xl:grid-cols-2 xl:gap-16">
        <div className="flex min-w-0 items-center justify-center xl:justify-start">
          <div className="relative h-[335px] w-full max-w-[320px] sm:h-[425px] sm:max-w-[410px] md:h-[500px] md:max-w-[500px] xl:h-[540px] xl:w-[490px] xl:max-w-none">
            {shouldLoadImages ? (
              <div className="absolute left-1/2 top-0 h-[540px] w-[490px] origin-top -translate-x-1/2 scale-[0.62] sm:scale-[0.78] md:scale-[0.92] xl:left-0 xl:translate-x-0 xl:scale-100">
                <div className="absolute left-[58px] top-[18px] sm:left-[58px] sm:top-[18px] md:left-[58px] md:top-[18px] lg:left-[58px] lg:top-[18px]">
                  <motion.div
                    custom={{ x: 65, y: 50, rotate: 11, delay: 0.05 }}
                    variants={bloomVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    className="absolute h-[360px] w-[270px] sm:h-[390px] sm:w-[300px] md:h-[420px] md:w-[330px] origin-bottom-center overflow-hidden rounded-[14px] shadow-[0_25px_50px_rgba(0,0,0,0.18)]"
                  >
                    <Image
                      src="/images/Frame 418.png"
                      alt="Team collaboration"
                      fill
                      sizes="(max-width: 640px) 270px, (max-width: 768px) 300px, 330px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </motion.div>

                  <motion.div
                    custom={{ x: 25, y: 28, rotate: 4, delay: 0.12 }}
                    variants={bloomVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    className="absolute z-[5] h-[375px] w-[285px] sm:h-[405px] sm:w-[315px] md:h-[435px] md:w-[345px] origin-bottom-center overflow-hidden rounded-[14px] shadow-[0_28px_55px_rgba(0,0,0,0.20)]"
                  >
                    <Image
                      src="/images/Frame 419.png"
                      alt="Team meeting"
                      fill
                      sizes="(max-width: 640px) 285px, (max-width: 768px) 315px, 345px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </motion.div>

                  <motion.div
                    custom={{ x: -25, y: 3, rotate: -3, delay: 0.2 }}
                    variants={bloomVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    className="absolute z-10 h-[400px] w-[305px] sm:h-[430px] sm:w-[335px] md:h-[460px] md:w-[370px] origin-bottom-center overflow-hidden rounded-[18px] shadow-[0_30px_65px_rgba(0,0,0,0.25)]"
                  >
                    <Image
                      src="/images/Rectangle 9.png"
                      alt="Our values team"
                      fill
                      sizes="(max-width: 640px) 305px, (max-width: 768px) 335px, 370px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </div>
            ) : (
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-[248px] w-[189px] -translate-x-1/2 rounded-[18px] bg-[#eeeeee] sm:h-[312px] sm:w-[238px] md:h-[368px] md:w-[281px] xl:left-[58px] xl:top-[18px] xl:h-[400px] xl:w-[305px] xl:translate-x-0"
              />
            )}
          </div>
        </div>

        <div className="w-full min-w-0 max-w-[560px] justify-self-center xl:justify-self-start">
          <h2 className="inline-block max-w-full break-words bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text font-jakarta text-3xl font-normal uppercase leading-tight text-transparent sm:text-4xl md:text-5xl xl:text-6xl">
            OUR VALUES
          </h2>

          <div className="mt-7">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`py-4 ${
                  index !== values.length - 1 ? "border-b border-[#e4e4e4]" : ""
                }`}
              >
                <h3 className="break-words font-jakarta text-base font-semibold leading-tight text-[#282828] sm:text-lg">
                  {value.title}
                </h3>
                <p className="mt-2 break-words font-jakarta text-sm leading-[1.55] text-[#444444] sm:text-base xl:text-[15px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <Link href="/services" className="mt-4 block w-full sm:w-fit">
            <motion.button
              style={{
                background: "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3 text-base font-light text-white sm:w-fit"
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
  );
};

export default OurValues;