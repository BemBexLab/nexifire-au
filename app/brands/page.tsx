import BuildSmarter from "@/components/BuildSmarter";
import GetInTouchSection from "@/components/GetInTouch";
import OurBrands from "@/components/OurBrands";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import React from "react";

export const metadata = createPageMetadata({
  title: "Our Brands: The NexiFire Portfolio of Growth",
  description:
    "Explore NexiFire's family of brands, including Ink Founders, Story Loom, Web Geeks Global, Ink2Audiobook, and Web Founders USA.",
  pathname: "/brands",
});

const page = () => {
  return (
    <section className="bg-white overflow-hidden">
      <PageHero
        eyebrow="Our Brands"
        title={`BRANDS BUILT WITH PURPOSE`}
        description={`A strategic network of specialized entities, each meticulously engineered to solve complex growth challenges and provide high level infrastructure in the global market.`}
      />
      <OurBrands />
      <BuildSmarter
        title={`Build your brand the\nway it should’ve been\nbuilt from day one`}
        description={`Choose the brands that are perfect for your goals—each one is created to\ntake your business forward with clarity and control.\n\nIf you're serious about building something that lasts, this is where it starts.`}
        primaryButtonText="Let's Talk"
        primaryButtonHref="/contact"
        secondaryButtonText="See Our Work"
        secondaryButtonHref="/brands"
        backgroundImageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
        backgroundImageAlt="Team meeting"
      />
      <GetInTouchSection />
    </section>
  );
};

export default page;
