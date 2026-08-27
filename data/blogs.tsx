import type React from "react";
import { Fragment } from "react";

export type BlogContentSection = {
  heading?: React.ReactNode;
  headingLevel?: 2 | 3;
  subheading?: React.ReactNode;
  paragraphs: React.ReactNode[];
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  cardTitle?: string;
  description: string;
  image: string;
  publishedAt: string;
  content: BlogContentSection[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "the-nexifire-ecosystem-one-brand-six-pillars-infinite-growth",
    title: "The Nexifire Ecosystem: One Brand, Six Pillars, Infinite Growth",
    description:
      "Most people who come to us have already tried the traditional route.",
    image: "/images/nexifire-ecosystem-hero.png",
    publishedAt: "2026-01-15",
    content: [
      {
        paragraphs: [
          "Most people who come to us have already tried the traditional route.",
          "They hired a freelancer for their book cover. Found someone else for editing. Googled their way through self-publishing platforms, Website development, and digital marketing services and optimization. Built a website on a template. Ran a few ads that didn't quite land. And after all of that, after all the time, money, and energy spent, the results still felt scattered. Disconnected. Like they were building a puzzle without ever seeing the full picture.",
          "That's not a talent problem. That's a system problem.",
          "And it's exactly the problem Nexifire was built to solve",
        ],
      },
      {
        heading: "What Nexifire Actually Is",
        paragraphs: [
          "Let's clear something up right away because this matters.",
          "Nexifire is not an agency. It's not a one-stop shop where a single generalist team tries to do everything at once. That model exists, and honestly? It produces average results across the board. Because no one person, and no one team, can genuinely master six completely different disciplines at the same time.",
          "Nexifire is something different. It's a strategic parent ecosystem that oversees a portfolio of six specialized brands, each one built to master a specific area of author growth and digital business. Every brand operates independently, with its own dedicated team of experts. But they all operate under one unified strategy, one shared standard of quality, and one clear direction.",
          "That's the difference between scattered effort and a system that actually compounds.",
        ],
      },
      {
        heading: "The Six Pillars of the Nexifire Ecosystem",
        paragraphs: [],
      },
      {
        heading: "Ink Founders—Where Your Book Begins",
        headingLevel: 3,
        paragraphs: [
          "Every great author's journey starts with a manuscript. But getting from a raw idea to a professionally published book that readers actually trust, that's a process most first-time authors seriously underestimate.",
          "Ink Founders handles the entire journey. Book writing, editing, proofreading, self-publishing, platform optimization, and author growth strategy. Whether you're starting from a blank page or sitting on a half-finished draft that's been collecting digital dust for two years, Ink Founders brings the expertise to take your work from concept to published — and positioned to sell.",
          "This isn't just about getting your book out there. It's about building your personal brand as an author from the very first page.",
        ],
      },
      {
        heading: "Ink2Audiobook",
        headingLevel: 3,
        subheading: "Your Words, Heard by the World",
        paragraphs: [
          "Here's a number worth paying attention to: the global audiobook market is growing faster than almost any other format in publishing right now. Readers who would never pick up a physical book are listening to one during their morning commute, their workout, their evening walk.",
          "If your book only exists in print, you're invisible to that entire audience.",
          "Ink2Audiobook exists to change that. From professional narration to full production and distribution across major audio platforms, Ink2Audiobook transforms your written work into a high quality audio experience that reaches listeners wherever they are. Same content, extended into a format that multiplies your reach without requiring you to start from scratch.",
        ],
      },
      {
        heading: "The Quill Book",
        headingLevel: 3,
        subheading: "For the Stories That Demand More",
        paragraphs: [
          "Some books need more than a standard publishing process. Some stories are bigger, more layered, more complex, and they need a team that genuinely understands the craft of both writing and publishing at a deeper level.",
          "The Quill Book serves authors whose work demands that extra level of attention. From fiction and non-fiction to specialized genres that require research, sensitivity, and creative precision, The Quill Book brings together story development, editorial expertise, and publishing strategy into one focused service. It's where ambitious authors bring their most important work.",
        ],
      },
      {
        heading: "Storyloom",
        headingLevel: 3,
        subheading: "Storytelling That Builds Brands",
        paragraphs: [
          "Content is everywhere in 2026. But content that actually connects, content that makes readers stop scrolling, lean in, and keep coming back, that's genuinely rare. And that's exactly what Storyloom is built to create.",
          "Storyloom focuses on the craft of storytelling as a growth tool. Whether it's content development, brand narratives, or creative writing that positions you as an authority in your space, Storyloom brings a level of creative depth that generic content mills simply cannot replicate. Because book marketing isn't just about promotion. It's about telling a story that makes people care about you before they ever buy from you.",
        ],
      },
      {
        heading: "Web Founders & Web Geeks Global",
        headingLevel: 3,
        subheading: "The Infrastructure and Marketing Engine Behind Your Platform",
        paragraphs: [
          // eslint-disable-next-line react/no-unescaped-entities
          <Fragment key="web-founders-and-web-geeks-global-intro"><a className="text-red-500 hover:underline font-bold" href="https://www.webfoundersusa.com/">Web Founders</a> and <a className="text-red-500 hover:underline font-bold" href="https://webgeeksglobal.com/">Web Geeks Global</a> are Nexifire's twin execution brands for everything digital. Both teams specialize in website development across major e-commerce platforms and full-scale digital marketing, giving businesses the technical foundation and marketing firepower they need to grow online.</Fragment>,
          "We create brand-focused digital experiences, including WordPress websites, Shopify stores, and fully customized eCommerce platforms. From logo design and Figma-based UI/UX to performance marketing, SEO, and other growth causing solutions, every service is designed to strengthen your brand and support long-term scalability.",
          "Think of them as two dedicated squads working toward the same goal. Building your digital presence, driving the right traffic toward it, and making sure that traffic actually converts into readers, subscribers, and paying customers.",
          "This isn't about running generic ads or putting up a basic website and calling it done. It's about building a real digital infrastructure, one that's designed from day one to scale alongside your author platform and your business.",
          "Every element is intentional. The website layout, the user experience, the campaign structure, and the performance data. Because your online presence isn't just a digital business card. It's where your entire content strategy lives and breathes.",
        ],
      },
      {
        heading: "Why Six Specialized Brands Instead of One Big Team?",
        paragraphs: [
          "This is the question we get asked most often. And it's a fair one.",
          "The answer comes down to one word: depth.",
          "A generalist team can give you a competent book, a decent website, and a passable marketing campaign. But competent, decent, and passable don't build careers. They don't create author platforms that last. They don't generate the kind of results that compound over time and turn a first book into a long term creative business.",
          "Specialization does that.",
          "When your book is handled by people who do nothing but books, your audiobook is produced by people who live and breathe audio, your brand story is crafted by people who understand narrative at a deep level, and your website and marketing are run by teams who do nothing but build and grow digital platforms, the quality of every single piece goes up dramatically.",
          "And when those pieces are connected under one unified strategy through Nexifire, the whole becomes far more powerful than the sum of its parts.",
          "That's not a tagline. That's just how well-built systems work.",
        ],
      },
      {
        heading: "What This Looks Like in Practice",
        paragraphs: [
          "Let's say you're an author with a finished manuscript or running a brand for IT services with a clear vision for what you want your career to look like.",
          "You come to Nexifire. We assess where you are, where you want to go, and what the gap looks like. From there, we build a strategy and then deploy the right combination of specialized brands to execute it.",
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <Fragment key="ink-founders-in-practice"><a className="hover:underline font-bold text-red-500" href="/">Ink Founders</a> takes your manuscript through editing, publishing, and platform optimization. Ink2Audiobook produces your audiobook and gets it distributed across major platforms. The Quill Book steps in if your project needs deeper creative development. Storyloom develops the content strategy that keeps your audience engaged between launches. And Web Founders and Web Geeks Global build the website, run the campaigns, and make sure more people find you every single month.</Fragment>,
          "You're not managing six different vendors. You're working within one ecosystem, with one strategic direction, and one standard of quality across every single touchpoint.",
          "That's what makes it different. And that's what makes it work.",
        ],
      },
      {
        heading: "Growth Isn't One Dimensional",
        paragraphs: [
          "Real, sustainable growth, the kind that doesn't depend on one viral moment or one lucky launch, comes from combining strong storytelling, reliable technology, and high performing marketing systems. It comes from building something connected, not just something busy.",
          "Whether you're publishing your first book or scaling an existing author brand, the Nexifire ecosystem gives you the specialized expertise and strategic infrastructure to do it right. Not just for the launch. For the long term.",
          "Because the goal was never just to publish a book.",
          "The goal is to build something that lasts.",
        ],
      },
    ],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRecentBlogPosts = (limit = 3) =>
  [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
