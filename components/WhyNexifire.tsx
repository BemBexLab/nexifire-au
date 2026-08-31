"use client";

import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 50 50"
        fill="none"
      >
        <circle
          cx="22.9167"
          cy="22.9166"
          r="18.75"
          stroke="url(#paint0_linear_444_276)"
          strokeWidth="2"
        />
        <path
          d="M45.4416 43.6975C45.311 43.8947 45.0749 44.1308 44.6028 44.6029C44.1307 45.075 43.8946 45.3111 43.6974 45.4417C42.542 46.2069 40.9789 45.8125 40.3248 44.5909C40.2131 44.3823 40.1173 44.0625 39.9256 43.4229C39.7162 42.7241 39.6115 42.3747 39.5913 42.1288C39.4721 40.6809 40.6808 39.4722 42.1287 39.5914C42.3746 39.6116 42.724 39.7163 43.4228 39.9257C44.0624 40.1174 44.3822 40.2132 44.5908 40.3249C45.8124 40.979 46.2067 42.5421 45.4416 43.6975Z"
          stroke="url(#paint1_linear_444_276)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_444_276"
            x1="4.16675"
            y1="22.9166"
            x2="41.6667"
            y2="22.9166"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_444_276"
            x1="39.5833"
            y1="42.7084"
            x2="45.8333"
            y2="42.7084"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "We are Built for Depth",
    description:
      "We don’t do everything in one place. We build focused brands that do one thing exceptionally well.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M4.16675 25C4.16675 15.179 4.16675 10.2686 7.21772 7.2176C10.2687 4.16663 15.1792 4.16663 25.0001 4.16663C34.821 4.16663 39.7315 4.16663 42.7824 7.2176C45.8334 10.2686 45.8334 15.179 45.8334 25C45.8334 34.8209 45.8334 39.7314 42.7824 42.7823C39.7315 45.8333 34.821 45.8333 25.0001 45.8333C15.1792 45.8333 10.2687 45.8333 7.21772 42.7823C4.16675 39.7314 4.16675 34.8209 4.16675 25Z"
          stroke="url(#paint0_linear_444_280)"
          strokeWidth="2"
        />
        <path
          d="M14.5833 37.5L14.5833 31.25"
          stroke="url(#paint1_linear_444_280)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25 37.5V25"
          stroke="url(#paint2_linear_444_280)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M35.4167 37.5V18.75"
          stroke="url(#paint3_linear_444_280)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_444_280"
            x1="4.16675"
            y1="25"
            x2="45.8334"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_444_280"
            x1="14.5833"
            y1="34.375"
            x2="15.5833"
            y2="34.375"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_444_280"
            x1="25"
            y1="31.25"
            x2="26"
            y2="31.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_444_280"
            x1="35.4167"
            y1="28.125"
            x2="36.4167"
            y2="28.125"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "System That Brings Growth",
    description:
      "Every strategy is designed to scale, not just perform temporarily.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 50 50"
        fill="none"
      >
        <circle
          cx="25.0001"
          cy="12.5"
          r="8.33333"
          stroke="url(#paint0_linear_444_286)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M37.5 18.75C40.9518 18.75 43.75 16.4182 43.75 13.5417C43.75 10.6652 40.9518 8.33337 37.5 8.33337"
          stroke="url(#paint1_linear_444_286)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12.5 18.75C9.04822 18.75 6.25 16.4182 6.25 13.5417C6.25 10.6652 9.04822 8.33337 12.5 8.33337"
          stroke="url(#paint2_linear_444_286)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <ellipse
          cx="25"
          cy="35.4167"
          rx="12.5"
          ry="8.33333"
          stroke="url(#paint3_linear_444_286)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M41.6667 39.5833C45.3214 38.7818 47.9167 36.7522 47.9167 34.375C47.9167 31.9977 45.3214 29.9681 41.6667 29.1666"
          stroke="url(#paint4_linear_444_286)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8.33325 39.5833C4.67857 38.7818 2.08325 36.7522 2.08325 34.375C2.08325 31.9977 4.67857 29.9681 8.33325 29.1666"
          stroke="url(#paint5_linear_444_286)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_444_286"
            x1="16.6667"
            y1="12.5"
            x2="33.3334"
            y2="12.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_444_286"
            x1="37.5"
            y1="13.5417"
            x2="43.75"
            y2="13.5417"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_444_286"
            x1="12.5"
            y1="13.5417"
            x2="6.25"
            y2="13.5417"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_444_286"
            x1="12.5"
            y1="35.4167"
            x2="37.5"
            y2="35.4167"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_444_286"
            x1="41.6667"
            y1="34.375"
            x2="47.9167"
            y2="34.375"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_444_286"
            x1="8.33325"
            y1="34.375"
            x2="2.08325"
            y2="34.375"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Clarity Over Complexity",
    description: "We simplify growth so you can move faster with confidence.",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M33.3333 45.8333C29.405 45.8333 27.4408 45.8333 26.2204 44.6129C25 43.3925 25 41.4283 25 37.5L25 12.5C25 8.57159 25 6.6074 26.2204 5.38702C27.4408 4.16663 29.405 4.16663 33.3333 4.16663L37.5 4.16663C41.4284 4.16663 43.3926 4.16663 44.6129 5.38702C45.8333 6.6074 45.8333 8.57159 45.8333 12.5V37.5C45.8333 41.4283 45.8333 43.3925 44.6129 44.6129C43.3926 45.8333 41.4284 45.8333 37.5 45.8333H33.3333Z"
          stroke="url(#paint0_linear_444_294)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25 25H29.1667M25 12.5L29.1667 12.5M25 37.5H29.1667M25 31.25L31.25 31.25M25 18.75L31.25 18.75"
          stroke="url(#paint1_linear_444_294)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4.16675 12.0833L4.16675 10.1041C4.16675 6.82494 6.96497 4.16663 10.4167 4.16663C13.8685 4.16663 16.6667 6.82494 16.6667 10.1041L16.6667 12.0833M4.16675 12.0833C4.16675 12.0833 6.5105 14.0625 10.4167 14.0625C14.323 14.0625 16.6667 12.0833 16.6667 12.0833M4.16675 12.0833L4.16675 32.362C4.16675 33.5945 4.16675 34.2107 4.24543 34.8154C4.33824 35.5287 4.51258 36.2302 4.76535 36.9077C4.97964 37.482 5.26972 38.0331 5.84988 39.1354L8.30829 43.8064M16.6667 12.0833L16.6667 32.362C16.6667 33.5945 16.6667 34.2107 16.5881 34.8154C16.4953 35.5287 16.3209 36.2302 16.0681 36.9077C15.8539 37.482 15.5638 38.0331 14.9836 39.1354L12.5252 43.8064M12.5252 43.8064L11.9243 44.9482C11.6388 45.4906 11.0551 45.8333 10.4167 45.8333C9.77834 45.8333 9.19473 45.4906 8.90923 44.9482L8.30829 43.8064M12.5252 43.8064H8.30829"
          stroke="url(#paint2_linear_444_294)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_444_294"
            x1="25"
            y1="25"
            x2="45.8333"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_444_294"
            x1="25"
            y1="25"
            x2="31.25"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_444_294"
            x1="4.16675"
            y1="25"
            x2="16.6667"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Execution That Increases Customers",
    description: "Everything we build is designed with results in mind.",
  },
];

const WhyNexifire = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadCards, setShouldLoadCards] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || shouldLoadCards) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadCards(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldLoadCards]);

  return (
    <section ref={sectionRef} className="w-full pb-14 md:pb-16 lg:pb-20">
      <div className="mx-auto w-full max-w-[1680px] px-4 text-center sm:px-6 lg:px-8">
        <h2 className="inline-block max-w-full break-words bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text font-jakarta text-3xl font-normal uppercase leading-tight text-transparent sm:text-4xl md:text-5xl xl:text-6xl">
          Why NexiFire
        </h2>

        {shouldLoadCards ? (
          <div className="mt-8 grid grid-cols-1 overflow-hidden sm:mt-10 sm:grid-cols-2 lg:mt-12 xl:grid-cols-4">
            {features.map((item, index) => (
              <div
                key={item.id}
                className={`flex min-w-0 flex-col items-center px-4 py-7 text-center sm:px-6 sm:py-8 md:px-8 xl:px-6 xl:py-5 2xl:px-12 ${
                  index < features.length - 1
                    ? "border-b border-[#e6e6e6]"
                    : ""
                } ${index >= 2 ? "sm:border-b-0" : ""} ${
                  index % 2 === 0 ? "sm:border-r sm:border-[#e6e6e6]" : ""
                } ${
                  index < features.length - 1
                    ? "xl:border-b-0 xl:border-r xl:border-[#e6e6e6]"
                    : "xl:border-r-0"
                }`}
              >
                <div className="mb-4 flex h-10 items-center justify-center text-[#f26a21]">
                  {item.icon}
                </div>

                <h3 className="max-w-[320px] break-words font-jakarta text-base font-medium leading-[1.3] text-[#282828] sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[420px] break-words font-jakarta text-sm leading-[1.55] text-[#444444] sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="mt-8 min-h-[620px] sm:mt-10 sm:min-h-[360px] lg:mt-12 xl:min-h-[190px]"
          />
        )}
      </div>
    </section>
  );
};

export default WhyNexifire;