"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import TextFluxUnveil from "./TextFluxUnveil";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { TfiArrowTopRight } from "react-icons/tfi";
import Image from "next/image";
import Clients from "./Clients";
import RichTextLetterReveal from "./RichTextLetterReveal";

type TriangleParticleProps = {
  className: string;
  delay?: number;
  enabled?: boolean;
  filterId: string;
  rotate?: number;
  scale?: number;
};

const TriangleParticle = ({
  className,
  delay = 0,
  enabled = true,
  filterId,
  rotate = 0,
  scale = 1,
}: TriangleParticleProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="43"
    height="41"
    viewBox="0 0 43 41"
    fill="none"
    className={`pointer-events-none absolute z-30 h-[31px] w-[33px] md:h-[41px] md:w-[43px] ${className}`}
    initial={{ opacity: 0, scale: scale * 0.55, rotate: rotate - 12 }}
    animate={
      enabled
        ? { opacity: 1, scale, rotate }
        : { opacity: 0, scale: scale * 0.55, rotate: rotate - 12 }
    }
    transition={{ duration: 0.45, ease: "easeOut", delay }}
    aria-hidden="true"
  >
    <g filter={`url(#${filterId})`}>
      <path
        d="M39.5389 2.70002L32.7081 20.2105L25.8782 37.7201L14.2886 23.9467L2.69992 10.1743L21.1185 6.43712L39.5389 2.70002Z"
        fill="#DA682A"
      />
    </g>
    <defs>
      <filter
        id={filterId}
        x="-4.88758e-05"
        y="1.21593e-05"
        width="42.239"
        height="40.4201"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="1.35"
          result="effect1_foregroundBlur_279_717"
        />
      </filter>
    </defs>
  </motion.svg>
);

const HomeHero = () => {
  const [animatedCount, setAnimatedCount] = useState(0);
  const [cardTiltDone, setCardTiltDone] = useState(false);
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const isHeroInView = useInView(heroRef, {
    amount: 0.25,
    once: true,
    initial: true,
  });
  const shouldAnimate = isHeroInView;
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const heroDescription =
    "NexiFire is a collective of specialized brands delivering strategy, \nmarketing, content, and digital systems designed to grow businesses with clarity and precision.";
  const businessHeading = "Built For Businesses That Are Serious About Growth";
  const giftRibbonShapes = [
    { x: -40, y: -32, rotate: -62, scale: 1.05, delay: 0.05 },
    { x: 62, y: -42, rotate: -20, scale: 0.72, delay: 0.12 },
    { x: 192, y: -34, rotate: 14, scale: 0.64, delay: 0.18 },
    { x: 248, y: 24, rotate: 42, scale: 0.7, delay: 0.25 },
    { x: 238, y: 132, rotate: 28, scale: 0.58, delay: 0.31 },
    { x: 206, y: 256, rotate: -34, scale: 0.82, delay: 0.37 },
    { x: 98, y: 284, rotate: -6, scale: 0.68, delay: 0.44 },
    { x: 8, y: 268, rotate: -26, scale: 0.6, delay: 0.5 },
    { x: -36, y: 178, rotate: -48, scale: 0.76, delay: 0.56 },
    { x: -48, y: 72, rotate: -30, scale: 0.66, delay: 0.62 },
  ];

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    const updateDesktopLayout = () => setIsDesktopLayout(desktopQuery.matches);

    updateDesktopLayout();
    desktopQuery.addEventListener("change", updateDesktopLayout);

    return () =>
      desktopQuery.removeEventListener("change", updateDesktopLayout);
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    const target = 230;
    const duration = 1400;
    let start: number | null = null;
    let rafId = 0;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setAnimatedCount(Math.floor(progress * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [shouldAnimate]);

  const lineX = useSpring(
    useTransform(cursorX, (v) => v * 0.25),
    {
      stiffness: 180,
      damping: 22,
    },
  );
  const lineY = useSpring(
    useTransform(cursorY, (v) => v * 0.25),
    {
      stiffness: 180,
      damping: 22,
    },
  );
  const leftRingX = useSpring(
    useTransform(cursorX, (v) => v * 0.55),
    {
      stiffness: 180,
      damping: 22,
    },
  );
  const leftRingY = useSpring(
    useTransform(cursorY, (v) => v * 0.55),
    {
      stiffness: 180,
      damping: 22,
    },
  );
  const rightRingX = useSpring(
    useTransform(cursorX, (v) => v * 0.85),
    {
      stiffness: 180,
      damping: 22,
    },
  );
  const rightRingY = useSpring(
    useTransform(cursorY, (v) => v * 0.85),
    {
      stiffness: 180,
      damping: 22,
    },
  );

  const handlePanelMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const normalizedY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    cursorX.set(normalizedX * 12);
    cursorY.set(normalizedY * 12);
  };

  const handlePanelMouseLeave = () => {
    cursorX.set(0);
    cursorY.set(0);
  };

  return (
    <section ref={heroRef}>
      <div className="relative flex justify-center overflow-hidden bg-[#F6F6F6] px-4 pb-12 pt-24 text-[#1f1f1f] sm:px-6 md:pb-16 md:pt-30 lg:px-8 lg:pb-18 xl:min-h-[1080px] xl:px-4 xl:pb-0 xl:pt-70 xl:[clip-path:polygon(0%_0%,100%_0%,100%_100%,48%_100%,44%_92%,0%_92%)]">
        <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center gap-12 md:gap-14 xl:flex-row xl:items-start xl:justify-center xl:gap-x-16 2xl:gap-x-48">
          {/* Column # 01 */}
          <div className="flex w-full max-w-[680px] shrink-0 flex-col text-center xl:max-w-[520px] xl:text-left 2xl:max-w-[600px]">
            <div className="h-full w-full lg:self-stretch">
              {/* Welcome to Nexifire Text */}
              <div
                className="font-mulish mx-auto h-13 w-fit rounded-[10px] px-4 py-3 text-base md:px-5 md:text-xl xl:mx-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
                }}
              >
                <TextFluxUnveil
                  text="Welcome to NexiFire"
                  enabled={shouldAnimate}
                />
              </div>

              {/* Main text Area */}
              <div className="relative">
                <h1 className="mx-auto mt-3 w-full max-w-[670px] font-jakarta text-[36px] uppercase leading-[1.02] text-black sm:text-[44px] md:text-[58px] xl:mx-0 xl:text-[68px] 2xl:text-[80px]">
                  <motion.span
                    initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                    animate={
                      shouldAnimate
                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                        : { opacity: 0, y: 12, filter: "blur(6px)" }
                    }
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: 0.12,
                    }}
                    className="inline-block mr-3"
                  >
                    We Build and
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                    animate={
                      shouldAnimate
                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                        : { opacity: 0, y: 12, filter: "blur(6px)" }
                    }
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: 0.28,
                    }}
                    className="relative inline-block xl:whitespace-nowrap"
                  >
                    <Image
                      src="/images/Ellipse 19.png"
                      alt="text Overlapping Ellipse Image"
                      width={1000}
                      height={1000}
                      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[260px] max-w-none -translate-x-1/2 -translate-y-1/2 md:w-[360px] xl:w-[500px]"
                    />
                    <span className="relative z-10">Scale Brands</span>
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                    animate={
                      shouldAnimate
                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                        : { opacity: 0, y: 12, filter: "blur(6px)" }
                    }
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: 0.42,
                    }}
                    className="inline-block xl:whitespace-nowrap"
                  >
                    That Bring Real
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                    animate={
                      shouldAnimate
                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                        : { opacity: 0, y: 12, filter: "blur(6px)" }
                    }
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: 0.54,
                    }}
                    className="inline-block"
                  >
                    Growth
                  </motion.span>
                </h1>
                <p className="mx-auto mt-5 w-full max-w-[620px] font-jakarta text-base leading-[1.65] text-[#777777] md:text-lg xl:mx-0">
                  <RichTextLetterReveal
                    text={heroDescription}
                    enabled={shouldAnimate}
                  />
                </p>
              </div>

              {/* Buttons Div */}
              <div className="w-full">
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row xl:justify-start">
                  <Link href="/brands">
                    <motion.button
                      style={{
                        background:
                          "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-light text-white sm:w-[250px] md:text-lg"
                      whileHover={{
                        y: -3,
                        scale: 1.02,
                        boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
                      }}
                      whileTap={{ y: 0, scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 20,
                      }}
                    >
                      Explore Our Brands
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
                  <Link href="/contact">
                    <motion.button
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-black px-6 py-3 text-base font-light text-black transition hover:bg-white sm:w-[220px] md:text-lg"
                      whileHover={{
                        y: -3,
                        scale: 1.02,
                        backgroundColor: "#ffffff",
                      }}
                      whileTap={{ y: 0, scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 20,
                      }}
                    >
                      Work With Us
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
            </div>
          </div>

          {/* Column # 02 */}
          <div className="flex w-full max-w-[720px] shrink-0 flex-col gap-y-7 xl:max-w-[560px] 2xl:max-w-[645px]">
            {/* Top row 2 divs */}
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-[minmax(0,290px)_minmax(0,1fr)] md:items-start xl:flex xl:flex-row">
              {/* Left Card */}
              <div className="relative h-auto min-h-[250px] w-full md:h-[350px] md:min-h-0 xl:h-[320px] xl:w-[250px] 2xl:h-[350px] 2xl:w-[290px]">
                <div className="pointer-events-none absolute inset-0">
                  {giftRibbonShapes.map((piece, index) => (
                    <motion.svg
                      key={`gift-ribbon-shape-${index}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 36 37"
                      fill="none"
                      className="absolute hidden xl:block"
                      style={{ left: piece.x, top: piece.y }}
                      initial={{ opacity: 0, scale: 0.2, y: 8, rotate: 0 }}
                      animate={
                        shouldAnimate && cardTiltDone
                          ? {
                              opacity: [0, 1, 1],
                              scale: [0.2, piece.scale * 1.1, piece.scale],
                              y: [8, 0, -2, 0],
                              rotate: [0, piece.rotate],
                            }
                          : undefined
                      }
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.75 + piece.delay,
                      }}
                    >
                      <path
                        d="M25.1834 -5.26902e-06L30.0976 18.1419L35.012 36.2825L17.5054 32.0944L-2.85208e-05 27.9065L12.5909 13.9537L25.1834 -5.26902e-06Z"
                        fill="#B24002"
                      />
                    </motion.svg>
                  ))}
                </div>
                <motion.div
                  className="flex h-full min-h-[250px] w-full flex-col rounded-3xl bg-[#E6E6E6] px-5 py-6 font-jakarta shadow-lg sm:px-6 sm:py-7 md:h-[350px] xl:w-[250px] xl:px-4 xl:py-6 2xl:w-[290px] 2xl:px-5 2xl:py-7"
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: shouldAnimate && isDesktopLayout ? -5 : 0,
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  onAnimationComplete={() => setCardTiltDone(true)}
                  style={{ transformOrigin: "left bottom" }}
                >
                  <p className="text-center tabular-nums text-[56px]! leading-none! text-black sm:text-[64px]! md:text-8xl! xl:text-[72px]! 2xl:pb-3 2xl:text-8xl!">
                    {animatedCount}+
                  </p>
                  <p className="w-full text-[#5C5D5F] xl:text-[15px] 2xl:text-base">
                    Global Brands Scaled. Trusted by industry leaders to
                    dominate their markets through our specialized ecosystem.
                  </p>

                  {/* Loading Bar */}
                  <div className="mt-auto pb-4 md:pb-5 xl:pb-4 2xl:pb-5">
                    <div className="h-[10px] w-full max-w-[250px] bg-[#D9D9D9] xl:max-w-[210px] 2xl:max-w-[250px]">
                      <motion.div
                        className="h-full bg-[#B24002]"
                        initial={{ width: "0%" }}
                        animate={{ width: shouldAnimate ? "80%" : "0%" }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.25,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right div */}
              <div
                className="relative h-[270px] w-full overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat sm:h-[320px] md:h-[350px] xl:w-[286px] 2xl:w-[370px]"
                role="img"
                aria-label="Second Col Corporate image"
              >
                <Image
                  src="/images/Rectangle 23805.png"
                  alt="Corporate growth team"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 370px"
                  className="object-cover"
                />
                {/* Overlapping SVG */}
                <div className="absolute left-6 top-6 z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-black md:left-10 md:top-15 md:h-[80px] md:w-[80px]">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="z-20 h-8 w-8 md:h-12 md:w-12"
                    initial={{ y: 14, opacity: 0 }}
                    animate={
                      shouldAnimate
                        ? { y: 0, opacity: 1 }
                        : { y: 14, opacity: 0 }
                    }
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <motion.path
                      d="M46 12L27 31L17 21L2 36"
                      stroke="#B24002"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 1 }}
                      animate={
                        shouldAnimate
                          ? { pathLength: 1, opacity: 1 }
                          : { pathLength: 0, opacity: 1 }
                      }
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                    />
                    <motion.path
                      d="M34 12H46V24"
                      stroke="#B24002"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 1 }}
                      animate={
                        shouldAnimate
                          ? { pathLength: 1, opacity: 1 }
                          : { pathLength: 0, opacity: 1 }
                      }
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                        delay: 0.8,
                      }}
                    />
                  </motion.svg>
                </div>
              </div>
            </div>

            <div className="relative overflow-visible">
              <TriangleParticle
                filterId="graph-particle-right-top"
                className="-right-4 top-4 sm:-right-4 sm:top-4 md:-right-5 md:top-6 lg:-right-5 lg:top-6 xl:-right-5 xl:top-5 2xl:-right-6 2xl:top-4"
                rotate={120}
                scale={0.86}
                delay={0.65}
                enabled={shouldAnimate}
              />
              <TriangleParticle
                filterId="graph-particle-right-middle"
                className="right-30 top-[174px] sm:right-34 sm:top-[174px] md:right-46 md:top-[182px] lg:right-46 lg:top-[182px] xl:right-40 xl:top-[128px] 2xl:right-46 2xl:top-[32px]"
                rotate={-18}
                scale={0.5}
                delay={0.78}
                enabled={shouldAnimate}
              />
              <TriangleParticle
                filterId="graph-particle-right-bottom"
                className="right-20 -bottom-5 sm:right-24 sm:-bottom-5 md:right-30 md:-bottom-5 lg:right-30 lg:-bottom-5 xl:right-26 xl:-bottom-5 2xl:right-29 2xl:-bottom-7"
                rotate={-28}
                scale={0.54}
                delay={0.9}
                enabled={shouldAnimate}
              />

              {/* Bottom Div container fully animated */}
              <div
                className="relative flex h-[300px] w-full overflow-hidden rounded-3xl bg-black px-5 pb-[150px] pt-6 font-jakarta sm:h-[320px] md:h-[340px] md:px-8 md:pb-[200px] md:pt-8 xl:h-auto xl:min-h-[280px] xl:px-8 xl:pb-[170px] xl:pt-8 2xl:h-[200px] 2xl:min-h-0 2xl:px-10 2xl:pb-10 2xl:pt-10"
                onMouseMove={handlePanelMouseMove}
                onMouseLeave={handlePanelMouseLeave}
              >
                {/* Text Overlapping Div */}
                <div className="relative z-20 flex w-full flex-col gap-y-4 xl:w-full xl:gap-y-5 2xl:w-1/2 2xl:gap-y-6">
                  <div className="flex gap-x-3 items-center">
                    <motion.div style={{ x: lineX, y: lineY }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="68"
                        height="2"
                        viewBox="0 0 68 2"
                        fill="none"
                      >
                        <path
                          d="M0 0.627563H67.7755"
                          stroke="white"
                          strokeWidth="1.2551"
                        />
                      </svg>
                    </motion.div>

                    {/* Flex Text */}
                    <p className="shrink-0 whitespace-nowrap text-xs! leading-tight! text-white md:text-sm!">
                      Strategy. Execution. Scale.
                    </p>
                  </div>

                  <p className="w-full max-w-full text-[20px]! font-medium leading-tight! text-white sm:max-w-[290px] md:text-[26px]! xl:max-w-[320px]">
                    <RichTextLetterReveal
                      text={businessHeading}
                      enabled={shouldAnimate}
                      preserveWords
                    />
                  </p>
                </div>

                {/* SVG Bottom Left */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="119"
                  viewBox="0 0 97 119"
                  fill="none"
                  className="absolute -bottom-4 left-0 h-[84px] w-[68px] md:h-[119px] md:w-[97px]"
                  style={{ x: leftRingX, y: leftRingY }}
                >
                  <circle
                    cx="37.7549"
                    cy="59.1733"
                    r="45.1573"
                    transform="rotate(18.3221 37.7549 59.1733)"
                    stroke="url(#paint0_linear_269_568)"
                    strokeWidth="28"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_269_568"
                      x1="37.7549"
                      y1="0.016037"
                      x2="37.7549"
                      y2="85.0546"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#393939" />
                      <stop offset="1" stopColor="#1F1F1F" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </motion.svg>

                {/* SVG Top Right */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="178"
                  height="177"
                  viewBox="0 0 178 177"
                  fill="none"
                  className="absolute right-0 top-0 h-[110px] w-[110px] rounded-3xl opacity-80 md:h-[177px] md:w-[178px]"
                  style={{ x: rightRingX, y: rightRingY }}
                >
                  <circle
                    cx="110.298"
                    cy="65.7951"
                    r="90.1224"
                    transform="rotate(-42.8231 110.298 65.7951)"
                    stroke="url(#paint0_linear_269_566)"
                    strokeWidth="40.35"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_269_566"
                      x1="110.298"
                      y1="-44.5023"
                      x2="110.298"
                      y2="114.05"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#393939" />
                      <stop offset="1" stopColor="#1F1F1F" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </motion.svg>

                {/* Graph col div */}
                <div className="absolute bottom-0 right-5 flex h-[140px] w-[min(210px,calc(100%-2.5rem))] items-end justify-end gap-2 md:right-8 md:h-[180px] md:w-[250px] md:gap-3 xl:right-8 xl:h-[170px] xl:w-[232px] 2xl:right-5 2xl:h-[170px] 2xl:w-[240px]">
                  <TriangleParticle
                    filterId="graph-particle-inside-left"
                    className="-left-1 top-[54px] sm:-left-1 sm:top-[54px] md:-left-1 md:top-[72px] lg:-left-1 lg:top-[72px] xl:-left-1 xl:top-[62px] 2xl:-left-2 2xl:top-[50px]"
                    rotate={-12}
                    scale={0.6}
                    delay={0.72}
                    enabled={shouldAnimate}
                  />
                  <motion.div
                    className="h-[52px] w-full max-w-[60px] origin-bottom rounded-t-xl bg-[#DA682A] md:h-[84px] md:max-w-[74px] xl:h-[58px] xl:max-w-[68px] 2xl:h-[74px] 2xl:max-w-[74px]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: shouldAnimate ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                  />
                  <motion.div
                    className="h-[84px] w-full max-w-[60px] origin-bottom rounded-t-xl bg-[#C65416] md:h-[126px] md:max-w-[74px] xl:h-[92px] xl:max-w-[68px] 2xl:h-[108px] 2xl:max-w-[74px]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: shouldAnimate ? 1 : 0 }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: 0.35,
                    }}
                  />
                  <motion.div
                    className="h-[118px] w-full max-w-[60px] origin-bottom rounded-t-xl bg-[#B24002] md:h-[168px] md:max-w-[74px] xl:h-[132px] xl:max-w-[68px] 2xl:h-[132px] 2xl:max-w-[74px]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: shouldAnimate ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.5 }}
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full justify-center pt-6 sm:pb-5 md:pb-5 md:pt-10 xl:justify-start xl:pt-8">
              <Clients />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
