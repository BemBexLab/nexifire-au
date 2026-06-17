"use client";

import * as FlagIcons from "country-flag-icons/react/3x2";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiPlus } from "react-icons/fi";
import { TfiArrowTopRight } from "react-icons/tfi";
import { countryPhoneOptions } from "@/data/countryPhoneOptions";

type FlagIconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { title?: string }
>;

const flagIcons = FlagIcons as unknown as Record<string, FlagIconComponent>;

const CareerApplicationForm = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("AU");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const selectedCountry =
    countryPhoneOptions.find((country) => country.code === selectedCountryCode) ??
    countryPhoneOptions.find((country) => country.code === "AU") ??
    countryPhoneOptions[0];
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

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCountryOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    const response = await fetch("/api/careers", {
      method: "POST",
      body: new FormData(event.currentTarget),
    });
    const result = (await response.json().catch(() => ({}))) as {
      error?: string;
    };

    if (response.ok) {
      event.currentTarget.reset();
      setSelectedCountryCode("AU");
      setResumeName("");
      setSubmitStatus("success");
      setSubmitMessage("Thanks. Your application has been sent.");
    } else {
      setSubmitStatus("error");
      setSubmitMessage(result.error || "Unable to send your application right now.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="w-full font-jakarta pb-16 pt-8 md:pb-20">
      <div className="mx-auto max-w-[860px] px-4 sm:px-6">
        <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-center font-jakarta text-3xl font-medium uppercase leading-tight text-transparent sm:text-4xl lg:text-5xl">
          Looking for Growth
          <br />
          and Opportunity?
        </h2>

        <div className="mx-auto mt-4 max-w-[680px] rounded-[14px] border border-[#e8e8e8] p-5 shadow-[0_6px_20px_rgba(0,0,0,0.05)] md:mt-4 md:p-6">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                className="h-[40px] w-full rounded-[5px] border border-[#cfcfcf] bg-transparent px-3 text-[12px] text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a]"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                className="h-[40px] w-full rounded-[5px] border border-[#cfcfcf] bg-transparent px-3 text-[12px] text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a]"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="h-[40px] w-full rounded-[5px] border border-[#cfcfcf] bg-transparent px-3 text-[12px] text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a]"
              />

              <div
                ref={countryDropdownRef}
                className="relative flex h-[40px] min-w-0 items-center rounded-[5px] border border-[#cfcfcf] bg-transparent px-2"
              >
                <button
                  type="button"
                  aria-expanded={isCountryOpen}
                  aria-haspopup="listbox"
                  aria-label="Select country calling code"
                  onClick={() => setIsCountryOpen((isOpen) => !isOpen)}
                  className="flex h-full w-fit max-w-[132px] shrink-0 items-center gap-[5px] bg-transparent pr-1 text-[#6f6f6f] outline-none"
                >
                  <span className="flex h-[14px] w-[21px] shrink-0 items-center overflow-hidden rounded-[2px]">
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
                  <span className="whitespace-nowrap text-[12px] font-medium leading-none text-[#6f6f6f]">
                    {selectedCountry.dialCode}
                  </span>
                  <FiChevronDown
                    className={`h-[14px] w-[14px] shrink-0 text-[#8a8a8a] transition-transform ${
                      isCountryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <input
                  type="hidden"
                  name="countryCode"
                  value={selectedCountry.dialCode}
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  required
                  className="h-full min-w-0 flex-1 bg-transparent px-2 text-[12px] text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a]"
                />

                {isCountryOpen ? (
                  <div
                    role="listbox"
                    className="absolute left-0 top-[calc(100%+6px)] z-50 max-h-[220px] w-[min(82vw,280px)] overflow-y-auto rounded-[5px] border border-[#cfcfcf] bg-white py-1 shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
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
                          className={`flex w-full items-center gap-2 px-3 py-2 text-left text-[12px] transition-colors ${
                            country.code === selectedCountryCode
                              ? "bg-[#f4e2d6] text-[#B24002]"
                              : "text-[#4a4a4a] hover:bg-[#f2f2f2]"
                          }`}
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
                          <span className="shrink-0 whitespace-nowrap font-medium text-[#6f6f6f]">
                            {country.dialCode}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                name="salaryExpectation"
                type="text"
                placeholder="Salary Expectation"
                className="h-[40px] w-full rounded-[5px] border border-[#cfcfcf] bg-transparent px-3 text-[12px] text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a]"
              />

              <div className="relative">
                <select
                  name="position"
                  required
                  defaultValue=""
                  className="h-[40px] w-full appearance-none rounded-[5px] border border-[#cfcfcf] bg-transparent px-3 text-[12px] text-[#9a9a9a] outline-none"
                >
                  <option value="" disabled>
                    Choose Your Position
                  </option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>UI/UX Designer</option>
                  <option>Marketing Specialist</option>
                </select>
                <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#b3b3b3]" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="relative">
                <select
                  name="employmentStatus"
                  defaultValue=""
                  className="h-[40px] w-full appearance-none rounded-[5px] border border-[#cfcfcf] bg-transparent px-3 text-[12px] text-[#9a9a9a] outline-none"
                >
                  <option value="" disabled>
                    Are You Currently employed?
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#b3b3b3]" />
              </div>

              <input
                name="joinTimeline"
                type="text"
                placeholder="How Soon Can You Join?"
                className="h-[40px] w-full rounded-[5px] border border-[#cfcfcf] bg-transparent px-3 text-[12px] text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a]"
              />
            </div>

            <input
              name="portfolio"
              type="text"
              placeholder="Link Your Portfolio"
              className="h-[40px] w-full rounded-[5px] border border-[#cfcfcf] bg-transparent px-3 text-[12px] text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a]"
            />

            <label className="flex min-h-[106px] w-full cursor-pointer flex-col items-center justify-center rounded-[4px] border border-dashed border-[#cfcfcf] bg-transparent text-center">
              <input
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(event) =>
                  setResumeName(event.currentTarget.files?.[0]?.name ?? "")
                }
              />
              <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#d85a05] text-white">
                <FiPlus className="text-[12px]" />
              </span>
              <span className="mt-3 text-[12px] text-[#8e8e8e]">
                {resumeName || "Upload Resume"}
              </span>
              <span className="mt-1 text-[11px] text-[#a0a0a0]">
                PDF, DOC, or DOCX up to 5MB
              </span>
            </label>

            {submitMessage ? (
              <p
                className={`text-sm ${
                  submitStatus === "success" ? "text-[#247a39]" : "text-[#b3261e]"
                }`}
              >
                {submitMessage}
              </p>
            ) : null}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
              }}
              className="mt-5 flex min-h-[46px] w-full items-center justify-center gap-2 whitespace-pre-line rounded-4xl px-5 py-1 text-center text-base font-light text-white disabled:cursor-not-allowed disabled:opacity-70 md:text-lg"
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
    </section>
  );
};

export default CareerApplicationForm;
