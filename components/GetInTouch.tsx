"use client";

import * as FlagIcons from "country-flag-icons/react/3x2";
import { motion } from "motion/react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { countryPhoneOptions } from "@/data/countryPhoneOptions";
import { useContactForm } from "@/components/useContactForm";

const contactPoints = [
  {
    href: "tel:+61272283952",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[16px] w-[16px] text-white"
        aria-hidden="true"
      >
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.49a1 1 0 011 1c0 1.25.19 2.46.57 3.58a1 1 0 01-.25 1.01l-2.19 2.2z" />
      </svg>
    ),
    text: "(02) 7228 3952",
  },
  {
    href: "mailto:contact@nexifire.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[16px] w-[16px] text-white"
        aria-hidden="true"
      >
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 3.24l-8 5-8-5V6l8 5 8-5v1.24z" />
      </svg>
    ),
    text: "contact@nexifire.com",
  },
  {
    href: null,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[16px] w-[16px] text-white"
        aria-hidden="true"
      >
        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z" />
      </svg>
    ),
    text: "16A Fox Cl, Kariong NSW 2250, Australia",
  },
];

export default function GetInTouchSection() {
  const [selectedCountryCode, setSelectedCountryCode] = useState("US");
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const { handleSubmit, isSubmitting, submitMessage, submitStatus } =
    useContactForm("Home page", () => setSelectedCountryCode("US"));
  const countryMenuRef = useRef<HTMLDivElement | null>(null);
  const flagComponents = FlagIcons as Record<
    string,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  >;

  const selectedCountry = useMemo(
    () =>
      countryPhoneOptions.find(
        (country) => country.code === selectedCountryCode
      ) ??
      countryPhoneOptions.find((country) => country.code === "US") ??
      countryPhoneOptions[0],
    [selectedCountryCode]
  );

  const SelectedFlagIcon = selectedCountry
    ? flagComponents[selectedCountry.code]
    : undefined;

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        countryMenuRef.current &&
        !countryMenuRef.current.contains(event.target as Node)
      ) {
        setIsCountryMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCountryMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const renderFlag = (countryCode: string) => {
    const FlagIcon = flagComponents[countryCode];

    if (!FlagIcon) {
      return (
        <span className="text-[13px] font-medium text-[#6f6f6f]">
          {countryCode}
        </span>
      );
    }

    return <FlagIcon className="h-[16px] w-[22px] rounded-[2px]" />;
  };

  return (
    <section className="w-full px-5 pb-12 text-[#3f3f3f] sm:px-8 sm:pb-14 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text py-4 text-center font-jakarta text-3xl font-medium uppercase leading-tight text-transparent sm:text-4xl lg:text-5xl">
            GET IN TOUCH
          </h2>

          <p className="mx-auto max-w-[1050px] text-sm leading-relaxed text-[#8a8a8a] sm:text-base md:text-lg">
            Your journey toward global growth starts with a single conversation.
            Whether you&apos;re looking to build a legacy through publishing or
            scale your brand through high-performance digital infrastructure,
            our team is here to lead the way.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:gap-12 xl:gap-16">
          <div className="w-full pt-[6px] text-center sm:text-left">
            <h3 className="text-lg font-medium uppercase text-[#333333] sm:text-xl">
              WHY CONNECT WITH US?
            </h3>

            <div className="mt-[18px] space-y-0">
              <div className="border-b border-[#e8e8e8] pb-[10px]">
                <p className="text-base font-medium text-[#cc5d12] sm:text-lg">
                  Strategic Consultation:
                </p>
                <p className="mt-[3px] text-base leading-[1.45] text-[#7f7f7f]">
                  We don&apos;t just provide services; we build growth ecosystems.
                </p>
              </div>

              <div className="border-b border-[#e8e8e8] py-[10px]">
                <p className="text-base font-medium text-[#cc5d12] sm:text-lg">
                  Specialized Expertise:
                </p>
                <p className="mt-[3px] text-base leading-[1.45] text-[#7f7f7f]">
                  Direct access to our network of publishing and tech leaders.
                </p>
              </div>

              <div className="py-[10px]">
                <p className="text-base font-medium text-[#cc5d12] sm:text-lg">
                  Global Reach:
                </p>
                <p className="mt-[3px] text-base leading-[1.45] text-[#7f7f7f]">
                  Infrastructure designed to scale your brand across
                  international markets.
                </p>
              </div>
            </div>

            <p className="mx-auto mt-[8px] max-w-[500px] text-base leading-[1.55] text-[#7f7f7f] sm:mx-0">
              Stop managing vendors. Start aligning with an ecosystem. Let&apos;s
              build something extraordinary.
            </p>

            <div className="mt-[15px] space-y-[10px]">
              {contactPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-[14px] sm:justify-start sm:gap-[18px]"
                >
                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[6px] bg-[#B24002]">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="min-w-0 break-words text-sm text-[#7f7f7f] transition-colors hover:text-[#B24002] md:text-[15px]"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="min-w-0 break-words text-sm text-[#7f7f7f] md:text-[15px]">
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="h-full w-full rounded-[8px] border border-[#e6e6e6] bg-[#f7f7f7] p-4 shadow-[0_10px_28px_rgba(0,0,0,0.05)] sm:p-[18px]">
            <h3 className="py-2 text-xl font-semibold uppercase leading-[1.15] text-[#333333] sm:text-2xl">
              FILL THIS FORM TO GET FASTER RESPONSE
            </h3>

            <form className="mt-[18px] space-y-[18px]" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="h-[48px] w-full rounded-[6px] border border-[#a9a9a9] bg-transparent px-[14px] text-[13px] text-[#4d4d4d] outline-none placeholder:text-[#9a9a9a]"
              />

              <div className="grid grid-cols-1 items-start gap-[16px] sm:grid-cols-[210px_minmax(0,1fr)]">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="h-[48px] w-full rounded-[6px] border border-[#a9a9a9] bg-transparent px-[14px] text-[13px] text-[#4d4d4d] outline-none placeholder:text-[#9a9a9a]"
                />

                <div className="flex h-[48px] min-w-0 self-start rounded-[6px] border border-[#a9a9a9] bg-transparent px-[10px]">
                  <div
                    ref={countryMenuRef}
                    className="relative flex h-full w-fit max-w-[132px] shrink-0 items-center"
                  >
                    <button
                      type="button"
                      aria-label="Select country calling code"
                      aria-expanded={isCountryMenuOpen}
                      onClick={() => setIsCountryMenuOpen((open) => !open)}
                      className="flex h-full w-fit max-w-[132px] items-center gap-[5px] bg-transparent pr-[2px] text-[#6f6f6f] outline-none"
                    >
                      <span className="flex items-center justify-center">
                        {SelectedFlagIcon ? (
                          <SelectedFlagIcon className="h-[16px] w-[22px] rounded-[2px]" />
                        ) : (
                          <span className="text-[13px] font-medium">
                            {selectedCountry?.code ?? "US"}
                          </span>
                        )}
                      </span>
                      <span className="whitespace-nowrap text-[13px] leading-none text-[#6f6f6f]">
                        {selectedCountry?.dialCode ?? "+1"}
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`ml-auto h-[20px] w-[20px] shrink-0 text-[#7d7d7d] transition-transform ${
                          isCountryMenuOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path d="M5.25 7.5L10 12.25 14.75 7.5z" />
                      </svg>
                    </button>

                    {isCountryMenuOpen ? (
                      <div className="absolute left-0 top-[calc(100%+8px)] z-30 max-h-[260px] w-[min(82vw,260px)] overflow-y-auto rounded-[8px] border border-[#dddddd] bg-white p-[6px] shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
                        {countryPhoneOptions.map((country) => (
                          <button
                            key={`${country.code}-${country.dialCode}`}
                            type="button"
                            onClick={() => {
                              setSelectedCountryCode(country.code);
                              setIsCountryMenuOpen(false);
                            }}
                            className={`flex w-full items-center gap-[10px] rounded-[8px] px-[10px] py-[9px] text-left text-[13px] transition-colors ${
                              country.code === selectedCountryCode
                                ? "bg-[#f4e2d6] text-[#B24002]"
                                : "text-[#5f5f5f] hover:bg-[#f4f4f4]"
                            }`}
                          >
                            {renderFlag(country.code)}
                            <span className="min-w-0 flex-1 truncate">
                              {country.name}
                            </span>
                            <span className="shrink-0 text-[#8a8a8a]">
                              {country.dialCode}
                            </span>
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <input
                    type="hidden"
                    name="countryCode"
                    value={selectedCountry?.dialCode ?? "+1"}
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="h-full min-w-0 w-full bg-transparent pl-2 text-[13px] text-[#4d4d4d] outline-none placeholder:text-[#9a9a9a]"
                  />
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                required
                className="min-h-[146px] w-full resize-none rounded-[6px] border border-[#a9a9a9] bg-transparent px-[14px] py-[12px] text-[13px] text-[#4d4d4d] outline-none placeholder:text-[#9a9a9a]"
              />

              {submitMessage ? (
                <p
                  className={`text-sm ${
                    submitStatus === "success"
                      ? "text-[#247a39]"
                      : "text-[#b3261e]"
                  }`}
                >
                  {submitMessage}
                </p>
              ) : null}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background:
                    "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
                }}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-base font-light text-white disabled:cursor-not-allowed disabled:opacity-70 md:text-lg"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
                }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                {isSubmitting ? "Sending..." : "Let's Talk"}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
