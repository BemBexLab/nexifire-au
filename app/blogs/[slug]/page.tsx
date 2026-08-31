import Blog from "@/components/Blog";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";
import { siteUrl } from "@/lib/metadata";
import { notFound } from "next/navigation";
import React from "react";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () =>
  blogPosts.map((post) => ({
    slug: post.slug,
  }));

export const dynamicParams = false;

export const generateMetadata = async ({ params }: BlogPageProps) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: new URL(`/blogs/${post.slug}`, siteUrl).toString(),
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
