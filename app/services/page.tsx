import PageHero from "@/components/PageHero";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import { serviceWhatWeDoCards } from "./data";
import React from "react";
import BuildSmarter from "@/components/BuildSmarter";
import FAQs from "@/components/FAQs";
import GetInTouchSection from "@/components/GetInTouch";

const page = () => {
  return (
    <section className="bg-white overflow-hidden">
      <PageHero
        eyebrow="How NexiFire Works"
        title={`We Don’t Offer Services. We Deploy Specialized Systems for Growth.`}
        description={`NexiFire connects strategy, execution, and specialized expertise through a network of focused brands, so every part of your business is built to scale.`}
      />
      <WhoWeAre
        heading={`The NexiFire Advantage: Built for Depth, Designed\nto Scale`}
        paragraphs={[
          "Most businesses struggle with growth because they rely on one team to manage everything. That usually leads to average results, limited expertise, and disconnected execution. Strategies look good when described, but without the right specialists in place, they do not scale or deliver consistent performance.",

          {
            text: "NexiFire is built differently.",
            className: "font-semibold",
          },

          "Instead of offering isolated services, we operate as a structured ecosystem of specialized brands, each focused on mastering one specific area. This means every part of your business, from acquisition to content in terms of books, articles, or research to technology that includes website development, digital marketing, optimization, and various services, is handled by experts who do that one thing exceptionally well.",

          "Our model combines deep specialization with seamless coordination. Each brand works within its domain, while NexiFire makes sure everything stays aligned under one clear strategy. The result is an integrated system that’s both focused and connected, designed not just to perform, but to scale.",

          "Through this approach, we deliver complete growth functions, not scattered services. Whether it’s driving customer acquisition, building a strong brand presence, or developing reliable infrastructure, every piece works together as part of a larger system.",

          "What this means for you is simple: faster execution, more reliable performance, and systems that are created for long-term growth, not short-term success. You gain clarity across your operations, confidence in your strategy, and a structure that’s designed to grow with your business.",
        ]}
        image={{
          src: "/images/Rectangle 9 (1).png",
          alt: "Who We Are",
          loading: "eager",
          priority: true,
        }}
        buttonLabel="Let's Talk"
        buttonHref="/contact"
      />
      <div className="mb-13">
        <WhatWeDo heading="The NexiFire Model" cards={serviceWhatWeDoCards} />
      </div>
      <BuildSmarter
        title={`Get a Custom Growth\nSystem and Build Your\nEcosystem`}
        description={`We design and deploy the system that makes sure each service is handled\nby a specialist.`}
        primaryButtonText="Consult With NexiFire"
        primaryButtonHref="/contact"
        secondaryButtonText="Visit Our Brands"
        secondaryButtonHref="/brands"
        backgroundImageSrc="/images/Frame 419.png"
        backgroundImageAlt="Team meeting"
      />
      <FAQs />
      <GetInTouchSection />
    </section>
  );
};

export default page;
