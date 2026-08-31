import BuildSmarter from "@/components/BuildSmarter";
import GetInTouchSection from "@/components/GetInTouch";
import HomeHero from "@/components/HomeHero";
import LazyLatestBlogs from "@/components/LazyLatestBlogs";
import LazyTestimonials from "@/components/LazyTestimonials";
import LogoSlider from "@/components/LogoSlider";
import NavBar from "@/components/NavBar";
import NotAnAgency from "@/components/NotAnAgency";
import TestimonialsSection from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";
import { whatWeDoCards } from "@/data/whatWeDoCards";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "NexiFire: Growth Ecosystem for Brands That Scale",
  description:
    "NexiFire is a growth ecosystem of specialized brands delivering strategy, marketing, content, and digital systems that help businesses scale.",
  pathname: "/",
});

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative z-30">
        <HomeHero />
      </div>
      <div className="relative z-20 mt-2 sm:mt-4 lg:mt-6 xl:z-10 xl:-mt-24">
        <LogoSlider />
      </div>
      <div className="pointer-events-none relative z-40 hidden h-0 xl:block">
        <div className="absolute left-0 top-[-132px] h-32 w-44 -translate-x-8 bg-[#F6F6F6]/95 blur-3xl" />
        <div className="absolute left-[43%] top-[-132px] h-28 w-40 -translate-x-1/2 bg-[#F6F6F6]/95 blur-3xl" />
        <div className="absolute left-[47%] top-[-120px] h-24 w-32 -translate-x-1/2 bg-[#F6F6F6]/90 blur-2xl" />
        <div className="absolute right-0 top-[-132px] h-32 w-44 translate-x-8 bg-[#F6F6F6]/95 blur-3xl" />
      </div>
      <WhatWeDo
        heading="What We Do"
        description={`Through our brands, we deliver integrated solutions across key growth
areas.`}
        cards={whatWeDoCards}
      />
      <NotAnAgency />
      <BuildSmarter
        title={`BUILD SMARTER. GROW FASTER.`}
        description={`Whether you're building a brand or scaling one, NexiFire gives you the structure, strategy, and execution to move forward with clarity.`}
        primaryButtonText="Let's Talk"
        primaryButtonHref="/contact"
        secondaryButtonText="See Our Work"
        secondaryButtonHref="/brands"
        backgroundImageSrc="/images/Frame 417.png"
        backgroundImageAlt="Team meeting"
        stats={[
          { value: 25, suffix: "K+", label: "Leads Generated" },
          { value: 50, suffix: "+", label: "Brands Scaled" },
          { value: 120, suffix: "+", label: "Campaigns Launched" },
          { value: 8, suffix: "+", label: "Years Experience" },
        ]}
      />
      <LazyTestimonials />
      <LazyLatestBlogs />
      <GetInTouchSection />
    </section>
  );
}
