"use client";

import { LazyMotion, domAnimation, m } from "motion/react";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question:
      "What is NexiFire, and how is it different from a traditional agency?",
    answer:
      "NexiFire is a parent organisation that operates a network of specialized brands. Where different brands offer separate services, instead of all being on one team. This produces high-quality work, deploys focused experts for each function, making sure of deeper expertise, better execution, and scalable results.",
  },
  {
    question: "Do you provide services directly?",
    answer:
      "Yes. Through our ecosystem of specialized brands, we provide focused services based on your business needs and growth stage.",
  },
  {
    question: "How does your ecosystem work?",
    answer:
      "Each brand in the NexiFire ecosystem is built to solve a specific business need. That lets us combine specialized execution with coordinated growth strategy.",
  },
  {
    question: "Why do you use multiple brands instead of one team?",
    answer:
      "Because specialization creates stronger outcomes. Each brand is designed to go deeper in its area rather than offering broad but surface-level support.",
  },
  {
    question: "Will I be working with multiple teams?",
    answer:
      "Not always. We keep the process simple and aligned, so you get the right people involved without unnecessary complexity.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work with growing businesses, founders, and brands that need clear systems, strong execution, and scalable support.",
  },
  {
    question: "Can I choose specific services or brands?",
    answer:
      "Yes. You can engage with a single specialized brand or combine services depending on your goals.",
  },
  {
    question: "How do you make sure quality across different brands?",
    answer:
      "We maintain consistent strategy, standards, and oversight across the ecosystem so every deliverable stays aligned and high quality.",
  },
  {
    question: "What makes NexiFire’s approach more effective?",
    answer:
      "Our structure allows depth, clarity, and execution. Instead of one general team doing everything, specialists focus on what they do best.",
  },
  {
    question: "How do I get started with NexiFire?",
    answer:
      "Start with a consultation. We’ll understand your goals, identify the right path, and connect you with the right team or brand.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8 xl:px-0">
          <m.h2
            className="font-jakarta mx-auto mb-6 max-w-[760px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-center text-3xl font-regular uppercase leading-[1.08] text-transparent sm:text-4xl md:mb-8 md:text-5xl lg:max-w-none lg:whitespace-nowrap lg:text-6xl"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Frequently Asked Questions
          </m.h2>

          <div className="space-y-3 sm:space-y-[14px]">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <m.div
                  key={index}
                  className="overflow-hidden rounded-[6px] border border-[#ececec] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.42,
                    delay: Math.min(index * 0.04, 0.24),
                    ease: "easeOut",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex min-h-[58px] w-full items-center justify-between gap-4 px-4 py-4 text-left sm:min-h-[62px] sm:px-5 md:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="min-w-0 flex-1 text-base font-medium leading-[1.4] text-[#282828] sm:text-[17px] md:text-lg">
                      {item.question}
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#eb6a1f] sm:h-8 sm:w-8">
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 stroke-[1.75] sm:h-[17px] sm:w-[17px]" />
                      ) : (
                        <ChevronDown className="h-4 w-4 stroke-[1.75] sm:h-[17px] sm:w-[17px]" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-5 pt-0 sm:px-5 md:px-6 md:pr-14">
                        <p className="max-w-[1120px] text-sm leading-[1.7] text-[#666666] sm:text-base md:text-[17px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default FAQs;
