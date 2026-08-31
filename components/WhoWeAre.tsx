"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { TfiArrowTopRight } from "react-icons/tfi";

type WhoWeAreProps = {
  heading: string;
  paragraphs: Array<
    | string
    | {
        text: string;
        className?: string;
      }
  >;
  image: {
    src: string;
    alt: string;
    priority?: boolean;
    loading?: "eager" | "lazy";
  };
  buttonLabel: string;
  buttonHref: string;
};

const WhoWeAre = ({
  heading,
  paragraphs,
  image,
  buttonLabel,
  buttonHref,
}: WhoWeAreProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadImage, setShouldLoadImage] = useState(
    image.priority || image.loading === "eager",
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || shouldLoadImage || image.priority || image.loading === "eager") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadImage(true);
          observer.disconnect();
        }
      },
      { rootMargin: "280px 0px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [image.loading, image.priority, shouldLoadImage]);

  return (
    <section
      ref={sectionRef}
      className="mx-auto my-16 grid w-full max-w-[1600px] min-w-0 grid-cols-1 items-center gap-10 px-4 sm:my-20 sm:px-6 md:gap-12 lg:my-30 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-stretch lg:gap-8 lg:px-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(460px,0.95fr)] xl:gap-10 xl:px-10 2xl:gap-14 2xl:px-10"
    >
      <div className="flex w-full min-w-0 max-w-3xl flex-col">
        <h2 className="[word-spacing:0.5rem] inline-block w-full max-w-full break-words bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-center font-jakarta text-4xl font-regular uppercase leading-[1.1] text-transparent sm:text-4xl md:text-5xl lg:text-left lg:text-5xl 2xl:text-6xl">
          {heading}
        </h2>

        <div className="font-jakarta mt-6 space-y-4 text-base leading-[1.7] text-[#777777] sm:mt-8 sm:text-lg md:mt-10">
          {paragraphs.map((paragraph) => {
            const text =
              typeof paragraph === "string" ? paragraph : paragraph.text;
            const className =
              typeof paragraph === "string" ? undefined : paragraph.className;

            return (
              <p key={text} className={className}>
                {text}
              </p>
            );
          })}

          <motion.a
            href={buttonHref}
            style={{
              background: "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
            }}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3 text-base font-light text-white sm:w-fit md:text-lg"
            whileHover={{
              y: -3,
              scale: 1.02,
              boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
            }}
            whileTap={{ y: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
          >
            {buttonLabel}
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
          </motion.a>
        </div>
      </div>

      <div className="relative aspect-[660/732] w-full max-w-[420px] justify-self-center overflow-hidden rounded-3xl bg-[#eeeeee] sm:max-w-[520px] md:max-w-[600px] lg:aspect-auto lg:max-w-[660px] lg:min-w-0 lg:justify-self-end lg:self-stretch">
        {shouldLoadImage && (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1535px) 50vw, 660px"
            loading={image.loading ?? "lazy"}
            priority={image.priority}
            className="object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default WhoWeAre;