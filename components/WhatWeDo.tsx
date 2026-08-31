"use client"

import React, { type ReactNode } from "react";
import { LazyMotion, domAnimation, m } from "motion/react";

type StyledText =
  | string
  | {
      text: string;
      className?: string;
    };

type TextContent = StyledText | ReactNode;

type WhatWeDoCard = {
  title: TextContent;
  description?: TextContent;
  icon: ReactNode;
  featured?: boolean;
};

type WhatWeDoProps = {
  heading: TextContent;
  description?: TextContent;
  cards: WhatWeDoCard[];
};

const isStyledText = (
  content: TextContent,
): content is { text: string; className?: string } =>
  typeof content === "object" &&
  content !== null &&
  !React.isValidElement(content) &&
  "text" in content;

const getTextValue = (content: TextContent) =>
  isStyledText(content) ? content.text : content;

const getTextClassName = (content: TextContent) =>
  isStyledText(content) ? content.className ?? "" : "";

const getKeyValue = (content: TextContent, fallback: string) =>
  typeof content === "string"
    ? content
    : isStyledText(content)
      ? content.text
      : fallback;

const hasTextContent = (content: TextContent | undefined) => {
  if (content === undefined || content === null || content === false) {
    return false;
  }

  if (typeof content === "string") {
    return content.trim().length > 0;
  }

  if (isStyledText(content)) {
    return content.text.trim().length > 0;
  }

  return true;
};

const WhatWeDo = ({ heading, description, cards }: WhatWeDoProps) => {
  const hasDescription = hasTextContent(description);

  return (
    <LazyMotion features={domAnimation}>
      <section className="mx-auto mt-20 flex w-full max-w-[1330px] flex-col items-center justify-center px-4 md:mt-28 md:px-6 xl:mt-30">
        <div
          className={`relative flex w-full flex-col gap-5 md:gap-6 ${
            hasDescription
              ? "xl:min-h-[90px] xl:flex-row xl:items-center"
              : "items-center"
          }`}
        >
          <m.h2
            className={`whitespace-pre-line bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-4xl font-jakarta font-medium uppercase tracking-tight text-transparent md:text-5xl xl:text-6xl ${
              hasDescription ? "xl:absolute xl:left-0" : "text-center"
            } ${getTextClassName(
              heading,
            )}`}
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {getTextValue(heading)}
          </m.h2>
          {hasDescription && description && (
            <m.p
              className={`w-full max-w-[370px] whitespace-pre-line text-sm text-[#777777] md:text-base xl:absolute xl:-right-19 ${getTextClassName(
                description,
              )}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              {getTextValue(description)}
            </m.p>
          )}
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 xl:mt-10 xl:grid-cols-4">
          {cards.map((card, index) => (
            <m.div
              key={getKeyValue(card.title, `what-we-do-card-${index}`)}
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className={`min-h-[180px] w-full origin-bottom-left rounded-2xl p-5 transition-transform duration-300 ease-out hover:-rotate-4 hover:shadow-[0_22px_50px_rgba(17,17,17,0.12)] md:p-6 xl:h-[200px] xl:w-[320px] ${
                card.featured
                  ? "bg-white shadow-[0_0_0_1px_rgba(17,17,17,0.05),0_18px_38px_rgba(17,17,17,0.1)]"
                  : "bg-white shadow-[0_0_0_1px_rgba(17,17,17,0.04),0_10px_24px_rgba(17,17,17,0.06)]"
              }`}
            >
              <div className="mb-4">{card.icon}</div>
              <p
                className={`mb-2 whitespace-pre-line font-jakarta text-md font-medium text-gray-900 ${getTextClassName(
                  card.title,
                )}`}
              >
                {getTextValue(card.title)}
              </p>
              {hasTextContent(card.description) && card.description && (
                <div
                  className={`whitespace-pre-line text-[14px] font-jakarta leading-relaxed text-gray-500 ${getTextClassName(
                    card.description,
                  )}`}
                >
                  {getTextValue(card.description)}
                </div>
              )}
            </m.div>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
};

export default WhatWeDo;
