import BlogsGrid from "@/components/BlogsGrid";
import LazyGetInTouch from "@/components/LazyGetInTouch";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import React from "react";

export const metadata = createPageMetadata({
  title: "Blog: Insights on Growth From NexiFire",
  description:
    "Read NexiFire's latest articles on publishing, content strategy, and digital growth systems designed to help brands scale with clarity.",
  pathname: "/blogs",
});

const page = () => {
  return (
    <section className="bg-white overflow-hidden">
      <PageHero
        eyebrow="Blog"
        title={`Our Latest Articles`}
        description={`Stay up to date with practical ideas and system-driven strategies across publishing, digital growth, and technology. Our team is built to help you scale with clarity.`}
      />
      <BlogsGrid />
      <LazyGetInTouch />
    </section>
  );
};

export default page;