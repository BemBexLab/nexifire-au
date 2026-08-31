"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { TfiArrowTopRight } from "react-icons/tfi";

type BuildSmarterStat = {
  value: number;
  suffix?: string;
  label: string;
};

export type BuildSmarterProps = {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref?: string;
  secondaryButtonText: string;
  secondaryButtonHref?: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  stats?: BuildSmarterStat[];
  showStats?: boolean;
};

function CountUpStat({
  value,
  suffix = "",
  start,
}: {
  value: number;
  suffix?: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1200;
    let startTime: number | null = null;
    let rafId = 0;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, value]);

  return (
    <span className="block text-3xl font-semibold leading-none text-[#2d2d2d] sm:text-[42px] md:text-[48px]">
      {count}
      {suffix}
    </span>
  );
}

const BuildSmarter = ({
  title,
  description,
  primaryButtonText,
  primaryButtonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref = "/contact",
  backgroundImageSrc,
  backgroundImageAlt,
  stats = [],
  showStats = true,
}: BuildSmarterProps) => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });
  const hasStats = showStats && stats.length > 0;

  return (
    <section className="flex justify-center bg-white px-5 py-10 sm:px-8 md:px-6 lg:py-12">
      <div className="w-full max-w-[1600px]">
        {/* HERO CARD */}
        <div className="relative min-h-[560px] w-full overflow-hidden rounded-[8px] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[630px]">
          {/* Background Image */}
          <Image
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1600px"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15 md:bg-gradient-to-r md:from-black/90 md:via-black/45 md:to-transparent" />

          {/* Left Content */}
          <div className="relative z-10 flex min-h-[560px] items-end py-8 sm:min-h-[520px] sm:py-10 md:min-h-[600px] md:items-center md:py-16 lg:min-h-[630px]">
            <div className="w-full max-w-full px-5 pt-16 font-jakarta sm:px-8 md:px-12 md:pt-24 lg:pt-[120px]">
              <h2 className="w-full font-normal uppercase text-white md:max-w-[50%]">
                {title}
              </h2>

              <p className="mt-5 w-fit md:max-w-1/2 sm:max-w-full whitespace-pre-line text-sm font-light leading-7 text-white/80 sm:text-base md:mt-6 md:text-[20px] md:leading-8">
                {description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-8">
                <motion.div
                  className="w-full sm:w-fit"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                    boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
                  }}
                  whileTap={{ y: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                >
                  <Link
                    href={primaryButtonHref}
                    style={{
                      background:
                        "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
                    }}
                    className="flex min-h-[46px] w-full items-center justify-center gap-2 whitespace-pre-line rounded-lg px-5 py-3 text-center text-base font-light text-white sm:w-fit sm:min-w-[200px] md:text-lg"
                  >
                    {primaryButtonText}
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
                  </Link>
                </motion.div>

                <Link
                  href={secondaryButtonHref}
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 whitespace-pre-line rounded-[8px] border border-white/40 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white backdrop-blur-[2px] transition hover:bg-white/10 sm:w-auto md:text-base"
                >
                  {secondaryButtonText}
                  <TfiArrowTopRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        {hasStats && (
          <div
            ref={statsRef}
            className="grid grid-cols-1 gap-8 pt-8 text-center sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:gap-0"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center font-jakarta md:px-6 ${
                  index < stats.length - 1
                    ? "md:border-r md:border-[#dfdfdf]"
                    : ""
                }`}
              >
                <div className="mb-3 flex flex-col items-center">
                  <CountUpStat
                    value={stat.value}
                    suffix={stat.suffix}
                    start={statsInView}
                  />
                  <div className="h-2 w-full rounded-full bg-black/50 blur-sm" />
                </div>
                <p className="whitespace-pre-line text-base font-light text-[#9a9a9a] sm:text-[18px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BuildSmarter;