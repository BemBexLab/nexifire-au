import type { ReactNode } from "react";

export type WhatWeDoCard = {
  title: string;
  description: string;
  icon: ReactNode;
  featured?: boolean;
};

export const whatWeDoCards: WhatWeDoCard[] = [
  {
    title: "Brand Strategy",
    description:
      "We define how your business is positioned, perceived, and remembered.",
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
          cx="26.4427"
          cy="26.4428"
          r="20"
          transform="rotate(-3.41 26.4427 26.4428)"
          stroke="url(#paint0_linear_280_1117)"
          strokeWidth="2"
        />
        <circle
          cx="26.4428"
          cy="26.4428"
          r="12"
          transform="rotate(-3.41 26.4428 26.4428)"
          stroke="url(#paint1_linear_280_1117)"
          strokeWidth="2"
        />
        <circle
          cx="26.4427"
          cy="26.4428"
          r="4"
          transform="rotate(-3.41 26.4427 26.4428)"
          fill="url(#paint2_linear_280_1117)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_280_1117"
            x1="5.44275"
            y1="26.4428"
            x2="47.4427"
            y2="26.4428"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_280_1117"
            x1="13.4428"
            y1="26.4428"
            x2="39.4428"
            y2="26.4428"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_280_1117"
            x1="22.4427"
            y1="26.4428"
            x2="30.4427"
            y2="26.4428"
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
    title: "Digital Marketing",
    description:
      "We connect your business with the right audience at the right time.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M45.8334 14.5834L30.4591 29.8639C28.3807 31.9297 27.3414 32.9626 26.0524 32.9625C24.7633 32.9623 23.7243 31.9292 21.6463 29.8629L21.1477 29.3671C19.0679 27.299 18.028 26.2649 16.738 26.2654C15.4481 26.2659 14.409 27.3007 12.3306 29.3703L4.16675 37.5M45.8334 14.5834V26.1372M45.8334 14.5834H34.2039"
          stroke="url(#paint0_linear_279_649)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_279_649"
            x1="4.16675"
            y1="26.0417"
            x2="45.8334"
            y2="26.0417"
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
    title: "Content Creation",
    description: "We craft content that builds trust and drives engagement.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 53 53"
        fill="none"
      >
        <path
          d="M14.2747 32.3854L30.9118 31.3941"
          stroke="url(#paint0_linear_280_1106)"
          strokeWidth="2"
        />
        <path
          d="M14.7084 39.6641L26.1464 38.9825"
          stroke="url(#paint1_linear_280_1106)"
          strokeWidth="2"
        />
        <path
          d="M25.3488 6.68106L25.6585 11.8802C25.9506 16.7819 26.0967 19.2328 27.7102 20.6649C29.3237 22.0969 31.7746 21.9509 36.6764 21.6588L44.9949 21.1631"
          stroke="url(#paint2_linear_280_1106)"
          strokeWidth="2"
        />
        <path
          d="M21.1655 6.88874C24.412 6.69529 25.7787 6.62907 27.0327 7.02632C28.287 7.42382 29.3609 8.2602 31.891 10.2783L40.5649 17.1974C43.4917 19.5319 44.708 20.5281 45.4031 21.8681C46.0982 23.2081 46.2123 24.7767 46.435 28.5138L46.4891 29.4224C46.7245 33.372 46.8922 36.234 46.7287 38.4348C46.5674 40.6066 46.0907 41.9833 45.1486 43.0448C44.2064 44.1063 42.8961 44.7431 40.7589 45.1612C38.5931 45.5848 35.7314 45.7582 31.7817 45.9935L23.4635 46.4892C19.514 46.7245 16.6518 46.8922 14.451 46.7288C12.2792 46.5675 10.9016 46.0908 9.8401 45.1487C8.77877 44.2066 8.1417 42.896 7.72369 40.759C7.30006 38.5932 7.12769 35.7314 6.89235 31.7818L6.3967 23.4635C6.16136 19.5141 5.9927 16.6519 6.15611 14.4511C6.3174 12.2793 6.79406 10.9017 7.73621 9.8402C8.67762 8.77949 9.99277 8.14182 12.1415 7.72286C14.3179 7.29851 17.1954 7.1253 21.1655 6.88874Z"
          stroke="url(#paint3_linear_280_1106)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_280_1106"
            x1="14.3044"
            y1="32.8845"
            x2="30.9416"
            y2="31.8932"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_280_1106"
            x1="14.7381"
            y1="40.1632"
            x2="26.1762"
            y2="39.4817"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_280_1106"
            x1="25.8134"
            y1="14.4797"
            x2="44.5302"
            y2="13.3645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_280_1106"
            x1="5.64628"
            y1="27.682"
            x2="47.2392"
            y2="25.2036"
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
    title: "Website & Funnels",
    description: "We design systems that convert visitors into customers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 50 50"
        fill="none"
      >
        <rect
          x="2.91919"
          y="2.91931"
          width="44.1616"
          height="44.1616"
          rx="8.30233"
          stroke="url(#paint0_linear_280_1111)"
          strokeWidth="2"
        />
        <path
          d="M38.8954 26.1663L30.085 30.2366V27.9502L36.345 25.2646L36.2742 25.387V25.0907L36.345 25.2131L30.085 22.5274V20.2411L38.8954 24.3114V26.1663Z"
          fill="url(#paint1_linear_280_1111)"
        />
        <path
          d="M28.1013 16.6667L23.8507 32.4586H21.8091L26.0597 16.6667H28.1013Z"
          fill="url(#paint2_linear_280_1111)"
        />
        <path
          d="M11.0101 26.1663V24.3114L19.8206 20.2411V22.5274L13.5605 25.2131L13.6314 25.0907V25.387L13.5605 25.2646L19.8206 27.9502V30.2366L11.0101 26.1663Z"
          fill="url(#paint3_linear_280_1111)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_280_1111"
            x1="1.91919"
            y1="25.0001"
            x2="48.0808"
            y2="25.0001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_280_1111"
            x1="30.085"
            y1="25.2388"
            x2="38.8954"
            y2="25.2388"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_280_1111"
            x1="21.8091"
            y1="24.5627"
            x2="28.1013"
            y2="24.5627"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B24002" />
            <stop offset="1" stopColor="#FF5B01" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_280_1111"
            x1="11.0101"
            y1="25.2388"
            x2="19.8206"
            y2="25.2388"
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
