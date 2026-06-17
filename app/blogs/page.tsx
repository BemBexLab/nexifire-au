import BlogsGrid from "@/components/BlogsGrid";
import GetInTouchSection from "@/components/GetInTouch";
import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <section className="bg-white overflow-hidden">
      <PageHero
        eyebrow="Blog"
        title={`Our Latest Blogs`}
        description={`Stay updated with practical ideas and system driven strategies across publishing, digital growth, and\ntechnology. Our team is built to help you scale with clarity.`}
      />
      <BlogsGrid />
      <GetInTouchSection />
    </section>
  );
};

export default page;
