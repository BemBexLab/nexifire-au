import CareerApplicationForm from "@/components/CareerApplicationForm";
import HowWeWork from "@/components/HowWeWork";
import PageHero from "@/components/PageHero";
import WhyYouBelongHere from "@/components/WhyYouBelongHere";
import { createPageMetadata } from "@/lib/metadata";
import React from "react";

export const metadata = createPageMetadata({
  title: "Careers: Join the NexiFire Growth Ecosystem",
  description:
    "Build your career with NexiFire's network of specialized brands. Explore internships and open roles in tech, marketing, and content.",
  pathname: "/careers",
});

const page = () => {
  return (
    <section className="bg-white overflow-hidden">
      <PageHero
        eyebrow="Career"
        title={`Join NexiFire`}
        description={`Join a growing ecosystem of specialized brands where your skills are valued, your growth is supported, and your work contributes to creating the results you want`}
      />
      <HowWeWork />
      <WhyYouBelongHere />
      <CareerApplicationForm />
    </section>
  );
};

export default page;
