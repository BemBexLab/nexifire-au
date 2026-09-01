import type { ReactNode } from "react";

export type WhatWeDoCard = {
  title: string;
  description: React.ReactNode;
  icon: ReactNode;
  featured?: boolean;
};

export const serviceWhatWeDoCards: WhatWeDoCard[] = [
  {
    title: "Strategic Direction ",
    description: (
      <>
        <ul className="list-outside list-disc space-y-1 pl-5 text-[14px] leading-[1.7] text-[#444444] marker:text-[#444444]">
          <li>Business analysis</li>
          <li>Growth roadmap</li>
          <li>System design</li>
        </ul>
      </>
    ),
    featured: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 53 53"
        fill="none"
      >
        <circle
          cx="26.4429"
          cy="26.4427"
          r="20"
          transform="rotate(-3.41 26.4429 26.4427)"
          stroke="url(#paint0_linear_553_1506)"
          strokeWidth="2"
        />
        <circle
          cx="26.4431"
          cy="26.4427"
          r="12"
          transform="rotate(-3.41 26.4431 26.4427)"
          stroke="url(#paint1_linear_553_1506)"
          strokeWidth="2"
        />
        <circle
          cx="26.4428"
          cy="26.4427"
          r="4"
          transform="rotate(-3.41 26.4428 26.4427)"
          fill="url(#paint2_linear_553_1506)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_553_1506"
            x1="5.44287"
            y1="26.4427"
            x2="47.4429"
            y2="26.4427"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_553_1506"
            x1="13.4431"
            y1="26.4427"
            x2="39.4431"
            y2="26.4427"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_553_1506"
            x1="22.4428"
            y1="26.4427"
            x2="30.4428"
            y2="26.4427"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Specialised Deployment",
    description: (
      <>
        <ul className="list-outside list-disc space-y-1 pl-5 text-[14px] leading-[1.7] text-[#444444] marker:text-[#444444]">
          <li>Assign the right brand(s) for each function</li>
          <li>Each brand focuses on one area only</li>
        </ul>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M45.8332 21.8751V25.0001C45.8332 34.821 45.8332 39.7315 42.7822 42.7824C39.7312 45.8334 34.8208 45.8334 24.9998 45.8334C15.1789 45.8334 10.2684 45.8334 7.21748 42.7824C4.1665 39.7315 4.1665 34.821 4.1665 25.0001C4.1665 15.1792 4.1665 10.2687 7.21748 7.21772C10.2684 4.16675 15.1789 4.16675 24.9998 4.16675H28.1248"
          stroke="url(#paint0_linear_608_1593)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="39.5835"
          cy="10.4167"
          r="6.25"
          stroke="url(#paint1_linear_608_1593)"
          strokeWidth="2"
        />
        <path
          d="M14.5835 29.1666L19.3604 24.3897C20.1739 23.5761 21.493 23.5761 22.3066 24.3897L25.6104 27.6934C26.4239 28.507 27.743 28.507 28.5566 27.6934L35.4168 20.8333M35.4168 20.8333V26.0416M35.4168 20.8333H30.2085"
          stroke="url(#paint2_linear_608_1593)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_608_1593"
            x1="4.1665"
            y1="25.0001"
            x2="45.8332"
            y2="25.0001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_608_1593"
            x1="33.3335"
            y1="10.4167"
            x2="45.8335"
            y2="10.4167"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_608_1593"
            x1="14.5835"
            y1="24.9999"
            x2="35.4168"
            y2="24.9999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Coordinated Execution",
    description: (
      <>
        <ul className="list-outside list-disc space-y-1 pl-5 text-[14px] leading-[1.7] text-[#444444] marker:text-[#444444]">
          <li>Central oversight by NexiFire</li>
          <li>Alignment across all moving parts</li>
        </ul>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 50 50"
        fill="none"
      >
        <circle
          cx="24.9998"
          cy="12.5001"
          r="8.33333"
          stroke="url(#paint0_linear_608_1634)"
          strokeWidth="2"
        />
        <path
          d="M37.5 18.7499C40.9518 18.7499 43.75 16.4181 43.75 13.5416C43.75 10.6651 40.9518 8.33325 37.5 8.33325"
          stroke="url(#paint1_linear_608_1634)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12.5 18.7499C9.04822 18.7499 6.25 16.4181 6.25 13.5416C6.25 10.6651 9.04822 8.33325 12.5 8.33325"
          stroke="url(#paint2_linear_608_1634)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <ellipse
          cx="25"
          cy="35.4166"
          rx="12.5"
          ry="8.33333"
          stroke="url(#paint3_linear_608_1634)"
          strokeWidth="2"
        />
        <path
          d="M41.6665 39.5834C45.3212 38.782 47.9165 36.7523 47.9165 34.3751C47.9165 31.9979 45.3212 29.9682 41.6665 29.1667"
          stroke="url(#paint4_linear_608_1634)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8.3335 39.5834C4.67882 38.782 2.0835 36.7523 2.0835 34.3751C2.0835 31.9979 4.67882 29.9682 8.3335 29.1667"
          stroke="url(#paint5_linear_608_1634)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_608_1634"
            x1="16.6665"
            y1="12.5001"
            x2="33.3332"
            y2="12.5001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_608_1634"
            x1="37.5"
            y1="13.5416"
            x2="43.75"
            y2="13.5416"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_608_1634"
            x1="12.5"
            y1="13.5416"
            x2="6.25"
            y2="13.5416"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_608_1634"
            x1="12.5"
            y1="35.4166"
            x2="37.5"
            y2="35.4166"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_608_1634"
            x1="41.6665"
            y1="34.3751"
            x2="47.9165"
            y2="34.3751"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_608_1634"
            x1="8.3335"
            y1="34.3751"
            x2="2.0835"
            y2="34.3751"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Optimisation & Scaling",
    description: (
      <>
        <ul className="list-outside list-disc space-y-1 pl-5 text-[14px] leading-[1.7] text-[#444444] marker:text-[#444444]">
          <li>Data tracking</li>
          <li>Continuous improvement</li>
          <li>Scaling what works</li>
        </ul>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M4.1665 25.0001C4.1665 15.1792 4.1665 10.2687 7.21748 7.21772C10.2684 4.16675 15.1789 4.16675 24.9998 4.16675C34.8208 4.16675 39.7312 4.16675 42.7822 7.21772C45.8332 10.2687 45.8332 15.1792 45.8332 25.0001C45.8332 34.821 45.8332 39.7315 42.7822 42.7824C39.7312 45.8334 34.8208 45.8334 24.9998 45.8334C15.1789 45.8334 10.2684 45.8334 7.21748 42.7824C4.1665 39.7315 4.1665 34.821 4.1665 25.0001Z"
          stroke="url(#paint0_linear_608_1642)"
          strokeWidth="2"
        />
        <path
          d="M14.5835 37.5V18.75"
          stroke="url(#paint1_linear_608_1642)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25 37.5V12.5"
          stroke="url(#paint2_linear_608_1642)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M35.4165 37.4999V27.0833"
          stroke="url(#paint3_linear_608_1642)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_608_1642"
            x1="4.1665"
            y1="25.0001"
            x2="45.8332"
            y2="25.0001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_608_1642"
            x1="14.5835"
            y1="28.125"
            x2="15.5835"
            y2="28.125"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_608_1642"
            x1="25"
            y1="25"
            x2="26"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_608_1642"
            x1="35.4165"
            y1="32.2916"
            x2="36.4165"
            y2="32.2916"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];
