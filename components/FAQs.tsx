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
      "NexiFire is a parent organisation that operates a network of specialised brands. Where different brands offer separate services, instead of all being on one team. This produces high-quality work, deploys focused experts for each function, making sure of deeper expertise, better execution, and scalable results.",
  },
  {
    question: "Do you provide services directly?",
    answer:
      "NexiFire does not operate like a traditional service provider. We assess and design the strategy and oversee execution, while our specialised brands handle each function with dedicated expertise.",
  },
  {
    question: "How does your ecosystem work?",
    answer:
      "We start by understanding your business and developing a clear growth strategy. From there, we assign the right specialised brands for each area, such as publishing, technology, or marketing, while maintaining centralised coordination and performance tracking.",
  },
  {
    question: "Why do you use multiple brands instead of one team?",
    answer:
      "Because specialisation delivers better results. Each brand is built to master one specific area, which allows for higher quality execution compared to a generalist team trying to do everything, and not come up with high-quality results",
  },
  {
    question: "Will I be working with multiple teams?",
    answer:
      "You benefit from multiple expert teams, but the process remains streamlined. NexiFire manages coordination, so you experience a structured and aligned workflow rather than dealing with disconnected teams.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Execution is carried out through our specialised brands, including dedicated teams for book writing, editing, proofreading, marketing and publishing, audiobook production, website development, and digital marketing.",
  },
  {
    question: "Can I choose specific services or brands?",
    answer:
      "Yes. Depending on your needs, we can deploy one specialised brand or multiple brands as part of a complete growth system.",
  },
  {
    question: "How do you make sure quality across different brands?",
    answer:
      "All brands operate under NexiFire’s strategic direction, systems, and standards. This ensures consistency, accountability, and alignment across every part of your project.",
  },
  {
    question: "What makes NexiFire’s approach more effective?",
    answer:
      "Our approach combines strategy, specialised execution, and continuous optimisation. Instead of isolated efforts, we build connected systems designed for long-term scalability and measurable results.",
  },
  {
    question: "How do I get started with NexiFire?",
    answer:
      "You can start by consulting with our team. We will assess your current position, identify growth opportunities, and recommend a structured approach using the right combination of our specialised brands.",
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