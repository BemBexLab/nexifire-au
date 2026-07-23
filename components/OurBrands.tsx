"use client";

import Image, { type StaticImageData } from "next/image";
import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { motion } from "motion/react";

type BrandLogo =
  | {
      icon: React.ReactNode;
      image?: never;
    }
  | {
      icon?: never;
      image: {
        src: string | StaticImageData;
        alt?: string;
        sizes?: string;
        className?: string;
      };
    };

type BrandItem = BrandLogo & {
  name: string;
  description: string;
  url: string;
};

const LOGO_WIDTH = 180;
const LOGO_HEIGHT = 90;

const brands: BrandItem[] = [
  {
    name: "Ink Founders AU",
    description:
      "Ink Founders AU is where high-level ideas become professional manuscripts. Specialize in ghostwriting, developmental editing, industry-standard formatting, and cover design. All services under one roof that will convert the drafts into a polished book, ready for publishing on different major platforms and global distribution without the stress of managing vendors.",
    url: "https://www.inkfounders.com.au/",
    image: {
      src: "/icons/inkfounder logo-19 1.png",
      alt: "Inkfounders AU Logo",
    },
  },
  {
    name: "Aussie Digital Studios AU",
    description:
      "Aussie Digital Studios AU is Built for Australian businesses tired of investing in websites that look good but fail to deliver results.We combine web design, development, SEO, digital marketing, and branding into one cohesive strategy, aligned with your business goals from day one.",
    url: "https://www.aussiedigitalstudios.com.au/",
    image: {
      src: "/images/image.png",
      alt: "Aussie Digital Studios AU Logo",
    },
  },
];

const renderBrandLogo = (brand: BrandItem) => {
  if (brand.image) {
    return (
      <Image
        src={brand.image.src}
        alt={brand.image.alt ?? `${brand.name} logo`}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        loading="lazy"
        sizes={brand.image.sizes ?? "(max-width: 768px) 90vw, 440px"}
        className={`h-[90px] w-[180px] max-w-full object-contain object-left ${
          brand.image.className ?? ""
        }`}
      />
    );
  }

  return brand.icon;
};

const OurBrands = () => {
  return (
    <section className="w-full font-jakarta py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[980px] px-5 sm:px-6 lg:px-0">
        <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-center font-jakarta text-3xl font-medium uppercase leading-tight text-transparent sm:text-4xl lg:text-5xl">
          Our Brands
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-7 [contain-intrinsic-size:0_900px] [content-visibility:auto] md:mt-10 md:grid-cols-2 md:gap-8">
          {brands.map((brand, index) => (
            <motion.a
              key={brand.name}
              href={brand.url}
              target="__blank"
              className="group relative block rounded-[18px] border border-[#e8e8e8] bg-[#f5f5f5] px-5 pb-20 pt-5 shadow-[0_4px_18px_rgba(0,0,0,0.04)] transition [contain-intrinsic-size:0_360px] [content-visibility:auto] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.08, 0.32),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex max-w-full items-start overflow-hidden">
                <div className="flex h-[90px] w-[180px] max-w-full items-start justify-start overflow-hidden [&>svg]:block [&>svg]:h-[90px] [&>svg]:w-[180px] [&>svg]:max-w-full [&>svg]:shrink-0">
                  {renderBrandLogo(brand)}
                </div>
              </div>

              <h3 className="mt-4 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#282828]">
                {brand.name}
              </h3>

              <p className="mt-4 text-[14px] leading-[1.4] text-[#444444]">
                {brand.description}
              </p>

              <div className="absolute bottom-5 left-5 inline-flex items-center gap-3 text-[15px] font-normal text-[#B24002]">
                <span>Visit Website</span>
                <LiaArrowRightSolid className="text-[18px] transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
