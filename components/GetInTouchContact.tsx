"use client";

import React, { useEffect, useRef, useState } from "react";
import * as FlagIcons from "country-flag-icons/react/3x2";
import { countryPhoneOptions } from "@/data/countryPhoneOptions";
import { motion } from "motion/react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { useContactForm } from "@/components/useContactForm";

type FlagIconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { title?: string }
>;

const flagIcons = FlagIcons as unknown as Record<string, FlagIconComponent>;

const contactItems = [
  {
    id: "phone",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.068"
        height="23.068"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.1757 20.1848C17.1732 20.1848 15.1948 19.7484 13.2404 18.8757C11.2861 18.0029 9.50788 16.7653 7.90592 15.1627C6.30397 13.5601 5.06662 11.7819 4.19387 9.82815C3.32112 7.8744 2.88443 5.89599 2.88379 3.8929C2.88379 3.60455 2.97991 3.36425 3.17214 3.17202C3.36438 2.97978 3.60467 2.88367 3.89302 2.88367H7.78578C8.01005 2.88367 8.2103 2.95992 8.38651 3.11243C8.56273 3.26493 8.66685 3.44499 8.69889 3.65261L9.32366 7.01672C9.3557 7.27303 9.34769 7.48929 9.29963 7.66551C9.25157 7.84172 9.16346 7.99391 9.0353 8.12207L6.70446 10.4769C7.02485 11.0697 7.40515 11.6422 7.84537 12.1946C8.28559 12.7469 8.77034 13.2797 9.29963 13.793C9.79623 14.2896 10.3169 14.7503 10.8615 15.1752C11.4062 15.6 11.9829 15.9883 12.5916 16.3401L14.8504 14.0813C14.9946 13.9372 15.183 13.8292 15.4156 13.7574C15.6482 13.6857 15.8763 13.6655 16.0999 13.6969L19.416 14.3697C19.6403 14.4338 19.8245 14.5501 19.9687 14.7186C20.1128 14.8871 20.1849 15.0752 20.1849 15.2828V19.1756C20.1849 19.4639 20.0888 19.7042 19.8966 19.8965C19.7043 20.0887 19.464 20.1848 19.1757 20.1848Z"
          fill="white"
        />
      </svg>
    ),
    iconAlt: "Phone",
    label: "(02) 7228 3952",
    href: "tel:+61272283952",
  },
  {
    id: "email",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.068"
        height="23.068"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.224 3.84485H3.8452C2.78791 3.84485 1.93246 4.70991 1.93246 5.7672L1.92285 17.3013C1.92285 18.3586 2.78791 19.2236 3.8452 19.2236H19.224C20.2813 19.2236 21.1463 18.3586 21.1463 17.3013V5.7672C21.1463 4.70991 20.2813 3.84485 19.224 3.84485ZM19.224 7.68955L11.5346 12.4954L3.8452 7.68955V5.7672L11.5346 10.5731L19.224 5.7672V7.68955Z"
          fill="white"
        />
      </svg>
    ),
    iconAlt: "Email",
    label: "contact@nexifire.com.au",
    href: "mailto:contact@nexifire.com.au",
  },
  {
    id: "address",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.068"
        height="23.068"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11.5339 11.0535C10.8966 11.0535 10.2854 10.8004 9.83475 10.3497C9.38411 9.89908 9.13095 9.28788 9.13095 8.65058C9.13095 8.01328 9.38411 7.40209 9.83475 6.95145C10.2854 6.50081 10.8966 6.24765 11.5339 6.24765C12.1712 6.24765 12.7824 6.50081 13.233 6.95145C13.6837 7.40209 13.9368 8.01328 13.9368 8.65058C13.9368 8.96614 13.8747 9.27861 13.7539 9.57015C13.6331 9.86168 13.4561 10.1266 13.233 10.3497C13.0099 10.5728 12.745 10.7498 12.4534 10.8706C12.1619 10.9914 11.8494 11.0535 11.5339 11.0535ZM11.5339 1.92236C9.74945 1.92236 8.0381 2.63123 6.77631 3.89301C5.51453 5.1548 4.80566 6.86615 4.80566 8.65058C4.80566 13.6967 11.5339 21.1458 11.5339 21.1458C11.5339 21.1458 18.2621 13.6967 18.2621 8.65058C18.2621 6.86615 17.5532 5.1548 16.2915 3.89301C15.0297 2.63123 13.3183 1.92236 11.5339 1.92236Z"
          fill="white"
        />
      </svg>
    ),
    iconAlt: "Location",
    label: "16A Fox Cl, Kariong NSW 2250, Australia",
  },
] as const;

const GetInTouchContact = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("US");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const { handleSubmit, isSubmitting, submitMessage, submitStatus } =
    useContactForm("Contact page", () => setSelectedCountryCode("US"));
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const selectedCountry =
    countryPhoneOptions.find(
      (country) => country.code === selectedCountryCode,
    ) ?? countryPhoneOptions[0];
  const SelectedFlag = flagIcons[selectedCountry.code];

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <section className="font-jakarta flex w-full items-center justify-center py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-[1139px] grid-cols-1 items-center justify-center gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-[470px_605px] lg:gap-16">
        <div className="mx-auto w-full max-w-[605px] pt-2 lg:mx-0 lg:max-w-none">
          <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-center font-jakarta text-3xl font-medium uppercase leading-tight text-transparent sm:text-4xl lg:text-left lg:text-5xl">
            Get In Touch With
            <br />
            NexiFire
          </h2>

          <p className="mx-auto mt-2 max-w-[550px] text-center text-base font-normal leading-[1.45] text-[#777777] sm:text-lg lg:mx-0 lg:text-left lg:leading-[1.25]">
            Tell us where you are and where you want to go. NexiFire will design
            the system, align the right specialists, and help you move forward
            with confidence.
          </p>

          <div className="mx-auto mt-8 w-fit space-y-5 lg:mx-0">
            {contactItems.map((item) => {
              const contentClassName =
                item.id === "address"
                  ? "text-md font-normal uppercase tracking-[-0.01em] text-[#777777]"
                  : "text-md font-normal text-[#777777] transition-colors hover:text-[#B24002]";

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-start gap-4"
                >
                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[5px] bg-[#B24002]">
                    <span
                      aria-label={item.iconAlt}
                      className="flex h-[20px] w-[20px] items-center justify-center [&>svg]:h-full [&>svg]:w-full"
                    >
                      {item.icon}
                    </span>
                  </div>

                  {"href" in item ? (
                    <a href={item.href} className={contentClassName}>
                      {item.label}
                    </a>
                  ) : (
                    <span className={contentClassName}>{item.label}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex w-full justify-center lg:justify-start">
          <div className="w-full max-w-[605px] rounded-[14px] border border-[#e7e7e7] px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:px-5 sm:py-5 lg:w-[675px]">
            <h3 className="text-center text-xl font-bold uppercase tracking-wide text-[#444444] sm:text-2xl lg:text-left">
              Fill This Form To Get Faster Response
            </h3>

            <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="h-[42px] w-full font-mulish rounded-[5px] border border-[#bababa] bg-transparent px-3 text-[13px] text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a]"
              />

              <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-[250px_300px] sm:gap-x-3">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="h-[42px] w-full rounded-[5px] border border-[#bababa] bg-transparent px-3 font-mulish text-[13px] text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a] sm:w-[250px]"
                />

                <div
                  ref={countryDropdownRef}
                  className="relative w-full sm:w-[300px]"
                >
                  <div className="flex h-[42px] w-full items-center overflow-hidden rounded-[5px] border border-[#bababa] bg-transparent font-mulish sm:w-[300px]">
                    <button
                      type="button"
                      aria-expanded={isCountryOpen}
                      aria-haspopup="listbox"
                      onClick={() => setIsCountryOpen((isOpen) => !isOpen)}
                      className="flex h-full shrink-0 items-center gap-2 px-3"
                    >
                      <span className="flex h-[14px] w-[21px] items-center overflow-hidden rounded-[2px]">
                        {SelectedFlag ? (
                          <SelectedFlag
                            title={selectedCountry.name}
                            className="h-full w-full"
                          />
                        ) : (
                          <span className="text-[10px] font-semibold text-[#6f6f6f]">
                            {selectedCountry.code}
                          </span>
                        )}
                      </span>
                      <span className="text-[12px] font-medium text-[#6f6f6f]">
                        {selectedCountry.dialCode}
                      </span>
                      <span className="h-0 w-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#b0b0b0]" />
                    </button>

                    <input
                      type="hidden"
                      name="countryCode"
                      value={selectedCountry.dialCode}
                    />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="font-mulish min-w-0 flex-1 bg-transparent px-3 text-[13px] text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a]"
                    />
                  </div>

                  {isCountryOpen && (
                    <div
                      role="listbox"
                      className="absolute left-0 top-[46px] z-50 max-h-[220px] w-full overflow-y-auto rounded-[5px] border border-[#bababa] bg-white py-1 shadow-[0_10px_24px_rgba(0,0,0,0.12)] sm:w-[300px]"
                    >
                      {countryPhoneOptions.map((country) => {
                        const CountryFlag = flagIcons[country.code];

                        return (
                          <button
                            key={country.code}
                            type="button"
                            role="option"
                            aria-selected={country.code === selectedCountryCode}
                            onClick={() => {
                              setSelectedCountryCode(country.code);
                              setIsCountryOpen(false);
                            }}
                            className="flex w-full items-center gap-2 px-3 py-2 text-left text-[12px] text-[#4a4a4a] transition hover:bg-[#f2f2f2]"
                          >
                            <span className="flex h-[14px] w-[21px] shrink-0 items-center overflow-hidden rounded-[2px]">
                              {CountryFlag ? (
                                <CountryFlag
                                  title={country.name}
                                  className="h-full w-full"
                                />
                              ) : (
                                <span className="text-[10px] font-semibold text-[#6f6f6f]">
                                  {country.code}
                                </span>
                              )}
                            </span>
                            <span className="min-w-0 flex-1 truncate">
                              {country.name}
                            </span>
                            <span className="shrink-0 font-medium text-[#6f6f6f]">
                              {country.dialCode}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                required
                rows={5}
                className="w-full font-mulish rounded-[5px] border border-[#bababa] bg-transparent px-3 py-3 text-[13px] text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a]"
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
                className="mt-4 font-mulish flex w-full items-center justify-center gap-2 rounded-lg px-7 py-2 text-base font-light text-white disabled:cursor-not-allowed disabled:opacity-70 sm:w-full md:text-lg"
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
};

export default GetInTouchContact;
