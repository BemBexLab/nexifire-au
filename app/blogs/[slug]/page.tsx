import Blog from "@/components/Blog";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Only posts included in the build-time data set are valid routes.
export const dynamicParams = false;

export const generateStaticParams = () =>
  blogPosts.map((post) => ({
    slug: post.slug,
  }));

export const generateMetadata = async ({
  params,
}: BlogPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
  };
};

const page = async ({ params }: BlogPageProps) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="bg-white">
      <Blog post={post} />
    </section>
  );
};

export default page;