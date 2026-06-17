import BuildSmarter from "@/components/BuildSmarter";
import FAQs from "@/components/FAQs";
import GetInTouchSection from "@/components/GetInTouch";
import LazyLatestBlogs from "@/components/LazyLatestBlogs";
import OurValues from "@/components/OurValues";
import PageHero from "@/components/PageHero";
import WhoWeAre from "@/components/WhoWeAre";
import WhyNexifire from "@/components/WhyNexifire";
import React from "react";

const page = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <PageHero
        eyebrow="About NexiFire"
        title={`A Global Ecosystem of\nIndustry Leaders.`}
        description="NexiFire is a strategic parent organization overseeing a diverse portfolio of specialized brands in media, technology, and digital growth. We provide the high level governance and operational infrastructure that allows our subsidiary companies to deliver world class execution and sustainable market leadership."
      />
      <WhoWeAre
        heading="Who We Are"
        paragraphs={[
          {
            text: "NexiFire is built differently.",
            className: "text-2xl font-semibold text-[#282828] sm:text-3xl",
          },
          "NexiFire is a multi dimensional growth ecosystem built on the principle of specialized excellence. Instead of managing everything in one place, we have built a group of focused brands, each one specialized in a specific area.",
          "This means every challenge, whether it is book services, writing, polishing it, working on book promotion and optimization on different platforms, content development for websites, website development on different e-commerce platforms, or marketing, is handled by experts who do that one thing exceptionally well and in an organized way.",
          "As the parent company, our role is to guide the strategy and bring everything together. We give our brands the direction, systems, and support they need to deliver real results. We connect strategy with execution. That means we do not just plan, we build, launch, and optimize systems that actually grow your business. At NexiFire, we believe growth is not one dimensional. It comes from combining strong storytelling, reliable technology, and high performing marketing systems. Whether you're starting something new or scaling an existing business, we make sure every step is clear, every system is built to scale, and every result can be measured.",
        ]}
        image={{
          src: "/images/Rectangle 9.png",
          alt: "Who We Are",
        }}
        buttonLabel="Let's Talk"
        buttonHref="/contact"
      />
      <WhyNexifire />
      <OurValues />
      <BuildSmarter
        title={`Ready to Align with\na Higher Standard\nof Growth?`}
        description={`Stop searching for a vendor and start partnering with an ecosystem. Let the\nNexiFire Group provide the specialized expertise and strategic\ninfrastructure your brand needs to lead its industry.`}
        primaryButtonText="Explore Our Portfolio"
        primaryButtonHref="/brands"
        secondaryButtonText="Consult with the Head Office"
        secondaryButtonHref="/contact"
        backgroundImageSrc="/images/Frame 418.png"
        backgroundImageAlt="Team meeting"
      />
      <FAQs />
      <LazyLatestBlogs />
      <GetInTouchSection />
    </section>
  );
};

export default page;
