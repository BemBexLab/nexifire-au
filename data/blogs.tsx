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
    image: "/images/01.png",
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
          <Fragment key="ink-founders-in-practice"><a className="hover:underline font-bold text-red-500" href="https://www.inkfounders.com/">Ink Founders</a> takes your manuscript through editing, publishing, and platform optimization. Ink2Audiobook produces your audiobook and gets it distributed across major platforms. The Quill Book steps in if your project needs deeper creative development. Storyloom develops the content strategy that keeps your audience engaged between launches. And Web Founders and Web Geeks Global build the website, run the campaigns, and make sure more people find you every single month.</Fragment>,
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
  {
    id: 2,
    slug: "how-to-build-a-scalable-content-to-growth-system",
    title: "How to Build a Scalable Content to Growth System",
    description:
      "Most businesses today are creating content, but out of them, few are actually creating something that grows with them and leads to success.",
    image: "/images/02.png",
    publishedAt: "2026-01-15",
    content: [
      {
        paragraphs: [
          "Most businesses today are creating content, but out of them, few are actually creating something that grows with them and leads to success. You’ll see brands publishing blogs, posting on social media, even writing books, yet nothing truly compounds. No doubt the effort is there, but the results stay inconsistent. That’s because content, on its own, doesn’t create growth. What creates growth is a system.",
          "A scalable content-to-growth system is not about doing more. It’s about connecting what you already do in a way that produces momentum. When content is aligned with infrastructure, distribution, and performance, it goes far beyond just a single activity and starts becoming a long term asset. That shift is what separates brands that stay stuck from those that scale.",
        ],
      },
      {
        heading: "Why Most Content Fails to Deliver Results",
        paragraphs: [
          "The biggest issue isn’t the quality of content, but its disconnection. Content is often created without a clear path to conversion. A blog might be well written, but it does not promise reaching the right audience. A website might look impressive, but fail to generate leads or engage the visitors. Marketing campaigns may bring traffic, but without the right structure in place, that traffic disappears without impact.",
          "This happens because different parts of the business operate in silos. Content is created in one place, websites are built in another, and marketing is managed somewhere else entirely. There is no unified direction, no shared system tying everything together. In results, each effort exists on its own, and growth never compounds.",
        ],
      },
      {
        heading: "Understanding What a Real Growth System Looks Like",
        paragraphs: [
          <>A content-to-growth system starts with a very simple idea that every piece of content should be purposeful. It should lead somewhere, connect to something, and ultimately become a part of something with a larger objective.</>,
          <>Instead of asking what to publish next, the focus shifts to how each piece fits into a bigger structure. This will make your content not only knowledgeable but also with a practical approach, which will generate leads as customers will start taking your services and implementing your ideas in their businesses.</>,
          <>As mentioned above, a properly built system, content attracts attention, infrastructure captures it, and marketing amplifies it. With time, data purifies the process, making each step more effective. This is what creates scalability with reliability. Growth stops depending on constant effort and starts building on itself.</>
        ],
      },
      {
        heading: "The Role of Content as a Long-Term Asset",
        // headingLevel: 3,
        paragraphs: [
          "Content should never be treated as something temporary. When created with a proper strategy, it becomes an asset that continues to deliver value long after it’s published. A blog can rank on search engines and bring consistent traffic. A book can establish authority and open new revenue streams. Even a simple article, when structured correctly, can become a foundation for multiple growth channels.",
          <>This is the approach taken by structured publishing systems like <a className="text-red-500 hover:underline font-bold" href="https://www.inkfounders.com/">Ink Founders</a> for book creating services, where content is not just created for visibility but positioned for long-term distribution and scalability. The focus is not on producing more, but on producing content that lasts.</>,
        ],
      },
      {
        heading: "Expanding Content Beyond a Single Format",
        // headingLevel: 3,
        // subheading: "Your Words, Heard by the World",
        paragraphs: [
          "One of the most overlooked aspects of scalability is content expansion. Most businesses use content once and move on, which limits its potential. A stronger approach is to extend the life of content by adapting it into different formats.",
          <>You should always try to incorporate different creative aspects that help to bring the audience, like written content, for example, which can evolve into audio, allowing it to reach a completely different audience. With the growing demand for audio-based consumption, this shift has become increasingly important. Systems like those used by <a className="text-red-500 hover:underline font-bold" href="https://ink2audiobook.com/">Ink 2 Audiobook</a>, a self-publishing company that creates audiobooks and demonstrates how content can move beyond text and into formats that increase accessibility and engagement.</>,
          "This kind of expansion doesn’t just increase reach. It multiplies the value of the original content without requiring entirely new ideas. The same core message continues to work across different platforms and formats, reinforcing its impact over time.",
        ],
      },
      {
        heading: "Why Infrastructure Is Where Growth Actually Happens",
        // headingLevel: 3,
        // subheading: "For the Stories That Demand More",
        paragraphs: [
          "Content may bring attention, but infrastructure tells everything about what happens next. Without a strong foundation, even the best content fails to come up with meaningful results. This is where most businesses do not perform well. They invest a lot in creating content but overlook the systems that convert attention into action.",
          "A well-structured website plays an important role in this process. It is not just a place for information, but a platform designed to guide users working to bring a specific outcome. When built with a focus on conversion, clarity, and user flow, a website is not just a digital presence but becomes a growth tool.",
          <>Teams that specialize in this area, such as <a className="text-red-500 hover:underline font-bold" href="https://www.webfoundersusa.com/">Web Founders</a>, focus on creating environments where visitors are not just informed, but get proper directions. Every element is intentional, from the website content to layout, to structure, responsiveness, and messaging, making sure that traffic generated by content is not wasted.</>,
        ],
      },
      {
        heading: "Converting Visibility Into Scalable Growth",
        // headingLevel: 3,
        // subheading: "Storytelling That Builds Brands",
        paragraphs: [
          "Once content and infrastructure are aligned, the next step is amplification. This is where marketing plays its role, not as a standalone effort but as a continuation of the system. Instead of trying to force results through constant spending, the focus shifts to scaling what is already working.",
          <>Performance based marketing allows businesses to take proven content and extend its reach. When done in the right way, it makes sure that the right message reaches the right audience at the right time. This approach is reflected in structured growth environments like <a className="text-red-500 hover:underline font-bold" href="https://webgeeksglobal.com/">Web Geeks Global</a>, where campaigns are built on data, refined through testing, and optimized for long-term performance.</>,
          <>The difference here is subtle but powerful. Growth is no longer dependent on guesswork. It becomes predictable, measurable, and repeatable.</>,
        ],
      },
      {
        heading: "Connecting Everything Into One System",
        // headingLevel: 3,
        // subheading: "The Infrastructure and Marketing Engine Behind Your Platform",
        paragraphs: [
          // eslint-disable-next-line react/no-unescaped-entities
          <>The real strength of a content-to-growth system lies in how each part supports the others. Content attracts attention, infrastructure captures it, and marketing amplifies it. When these elements are aligned and work together on a project, they create a continuous cycle where each step reinforces the next.</>,
          "Instead of starting from zero every time, the system builds on itself. A single piece of content can generate traffic, leads, and insights, which then inform future decisions. Over time, this creates a compounding effect, where growth becomes more efficient and more consistent.",
        ],
      },
      {
        heading: "Shifting From Activity to Strategy",
        paragraphs: [
          "One of the most important changes a business can make is shifting its mindset around content. Instead of treating it as something that needs to be constantly produced, it should be seen as something that needs to be strategically created",
          "This means focusing less on quantity and more on alignment is what we should start doing for the betterment. Every piece of content should have a clear role within the system. It should connect to a larger objective and contribute to measurable outcomes. When this shift happens, content stops being a task and starts becoming an investment.",
        ],
      },
      {
        heading: "What This Means for Long-Term Growth",
        paragraphs: [
          "A scalable system changes how growth works. It removes the dependency on constant effort and replaces it with a structure that continues to deliver over time. Instead of chasing results, businesses begin to build systems that generate them.",
          "The impact of this goes beyond marketing. It creates clarity, improves efficiency, and allows businesses to scale without losing direction. Each part of the system becomes more effective because it is no longer working in isolation.",
        ],
      },
      {
        heading: "Final Thought",
        paragraphs: [
          "Building a scalable content-to-growth system is not about doing more. It’s about doing things in a way that connects, compounds, and continues to deliver.",
          "When content is aligned with infrastructure and supported by the right growth strategy, it stops being temporary. It becomes something that works for you over time, quietly building momentum in the background.",
          "That is the difference between content that fills space and content that builds a business.",
          "And once that system is in place, growth is no longer something you chase. It becomes something you design.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "how-to-self-publish-a-book-in-2026",
    title: "How to Self-Publish a Book in 2026",
    description:
      "If you’ve ever dreamed of seeing your name on a book cover, 2026 is the perfect year to turn that dream into reality.",
    image: "/images/3.png",
    publishedAt: "2026-01-15",
    content: [
      {
        paragraphs: [
          "If you’ve ever dreamed of seeing your name on a book cover, 2026 is the perfect year to turn that dream into reality. The world of publishing has changed, and self-publishing now allows authors complete control over their stories. You don’t need to wait for a traditional publisher’s approval or compromise your vision. With the right guidance and trusted partners, you can bring your book to life exactly as you imagine it.",
        ],
      },
      {
        heading: "Start with a Strong Manuscript",
        paragraphs: [
          <>Writing a book is just the first step. Finishing a draft is exciting, but revising, editing, and refining your words is what turns a manuscript into a book that readers will truly enjoy. This is where professional support becomes invaluable. Many authors trust <a className="font-bold text-red-300 hover:underline" href="https://www.inkfounders.com/">Ink Founders</a>, a Nexifire brand that specializes in helping writers polish their manuscripts. From developmental editing to line editing and proofreading, Ink Founders ensures your story is not only compelling but also polished and professional. A skilled editor transforms a good manuscript into a book that stands out in the market.</>,
        ],
      },
      {
        heading: "Design Your Book Like a Professional",
        paragraphs: [
          <>A book’s cover is often the first thing a reader notices, and the interior layout can make or break the reading experience. Typography, chapter flow, and formatting for print or digital editions all matter. This is where <b>Ink Founders</b> comes in. There is another Nexifire brand, <a className="font-bold text-red-300 hover:underline" href="https://www.webfoundersusa.com/">Web Founders</a>, that helps authors create stunning websites and create a digital presence by boosting social media marketing for your book. Both brands together make sure that both eBooks and print books are beautifully formatted. Their expertise in design and user experience guarantees that every page feels professional and polished, a professional author website development, and makes your work a joy for readers to explore. NexiFire has made things easier by giving all services under one roof. Each service is handled by its specialist in the respective field.</>
        ],
      },
      {
        heading: "Publish Seamlessly with a Complete System",
        // headingLevel: 3,
        paragraphs: [
          <>Publishing a book is more than just uploading it online. Distribution, platform management, and coordination between print and digital versions are essential. <a className="text-red-500 hover:underline font-bold" href="https://storyloompublishing.com/">Storyloom</a>, part of the Nexifire network, handles the entire publishing journey from start to finish. Whether you are releasing an eBook, a print edition, or distributing across multiple platforms, Storyloom keeps everything coordinated. Authors can focus on their writing while knowing that their book is in capable, professional hands.</>,
        ],
      },
      {
        heading: "Marketing That Connects with Readers",
        // headingLevel: 3,
        // subheading: "Your Words, Heard by the World",
        paragraphs: [
          <>Even the best books need visibility to succeed. Marketing often feels like a separate task, but with the right approach, it can seamlessly complement the publishing process. <a href="https://thequillbook.com/">The Quill Book</a>, a Nexifire brand, helps authors promote their work effectively. From social media campaigns to email newsletters, every marketing effort is aligned with the publishing strategy, ensuring your book reaches the right readers. This coordinated approach makes self publishing not only easier but also more impactful.</>,
        ],
      },
      {
        heading: "Build Your Author Platform Beyond the Book",
        // headingLevel: 3,
        // subheading: "For the Stories That Demand More",
        paragraphs: [
          "Self publishing in 2026 is about more than releasing a book. It’s about sharing your voice, building a platform, and creating new opportunities beyond the page. Working with Nexifire’s network of specialized brands allows you to focus on storytelling while experts handle publishing, design, and marketing. Your work can lead to speaking engagements, workshops, or even courses, turning your book into a foundation for long-term growth as an author.",
        ],
      },
      {
        heading: "Your Story Deserves to Be Told",
        // headingLevel: 3,
        // subheading: "Storytelling That Builds Brands",
        paragraphs: [
          "With Ink Founders guiding your writing, Web Founders supporting your website development and marketing, Storyloom managing your publishing process, and The Quill Book enhancing your marketing reach, self publishing becomes a structured, fulfilling experience. Your story is unique, and in 2026, you have the tools and support to bring it to readers everywhere. It’s no longer about navigating a complex system alone; it’s about joining a network that helps your creativity thrive.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "why-your-ads-are-not-converting",
    title: "Why Your Ads Are Not Converting (And What's Actually Holding You Back)",
    description:
      "You spend the money. You set everything up. The clicks start coming in, and then absolutely nothing happens.",
    image: "/images/4.png",
    publishedAt: "2026-01-15",
    content: [
      {
        paragraphs: [
          "You spend the money. You set everything up. The clicks start coming in, and then absolutely nothing happens. No leads, no sales, no return. Just a shrinking budget and a growing headache.",
          "And the worst part? Everything looked fine before you launched.",
          "Here's what most people don't want to accept: ads fail for reasons. Specific ones. It's rarely one catastrophic mistake; it's usually a few small things that don't line up, and together they quietly sink the whole campaign.",
        ],
      },
      {
        heading: "You're Flying Blind Because Your Tracking Is Broken",
        paragraphs: [
          "Most people never even look at this. They obsess over the creative, the copy, the targeting, and completely ignore whether their tracking is actually working.",
          "When your pixel or conversion setup is broken, the platform doesn't know who's converting. So it does what it's trained to do: it finds people who click. Not people who buy. Not people who fill out a form. Just people who click.",
          "We see this at Nexifire more than almost anything else. The ads look great, the budget is healthy, but the backend data is a disaster. And without accurate data, you're not making a decision,  you're making guesses and calling them a strategy.",
        ],
      },
      {
        heading: "You're Optimizing for One Thing but Expecting Another",
        paragraphs: [
          <>This one is subtle, and it breaks a lot of campaigns</>,
          <>Say you're running a traffic objective, but your actual goal is leads. Or you're optimizing for engagement and measuring success by sales. The platform will deliver exactly what you asked for, and you'll wonder why it "isn't working."</>,
          <>Platforms are not mind readers. They execute on the objective you set. If that objective doesn't match what you actually want to happen, the whole campaign is pointed in the wrong direction from day one.</>,
          <>Getting this alignment right, campaign goal matching business goal, is one of the most fundamental things we focus on at Nexifire.</>,
        ],
      },
      {
        heading: "The Right Audience Isn't Seeing Your Ads",
        // headingLevel: 3,
        paragraphs: [
          "You could have the best ad ever made. If it's reaching the wrong people, it doesn't matter.",
          <>Too broad, and your message lands on people who have zero interest in what you're offering. Too narrow and your ads barely spend, let alone scale. And when targeting is built on assumptions rather than real audience data, you're basically throwing darts in the dark.</>,
          <>High-performing campaigns aren't just reaching more people. They're reaching the right people. That's a completely different goal.</>
        ],
      },
      {
        heading: "Your Ad Looks Nice, but Doesn't Say Much",
        // headingLevel: 3,
        // subheading: "Your Words, Heard by the World",
        paragraphs: [
          "A clean design doesn't make someone stop scrolling. A message that hits them where they actually are, that does.",
          <>People are moving fast. They're not admiring your color palette. They're scanning for something that feels relevant to their life, their problem, their situation right now.</>,
          <>"Best services." "Contact us today." "We've been in business for 20 years." Nobody is stopping for that. It doesn't mean anything to them.</>,
          <>The ads that actually convert are specific. They name a real problem. They offer a real solution. They make the person feel like the ad was written for them, because in a good campaign, it basically was.</>
        ],
      },
      {
        heading: "The Landing Page Is Where You're Actually Losing People",
        // headingLevel: 3,
        // subheading: "For the Stories That Demand More",
        paragraphs: [
          <>Clicks are not conversions. What happens after the click is where the real battle is.Slow page. Confusing layout. A page that looks and feels completely different from the ad that brought them there. Any of those things and the person is gone — usually in under five seconds.</>,
          "This is one of the most common misdiagnoses in advertising. The ad gets blamed, budgets get cut, campaigns get paused, when the actual problem was the page the whole time.",
          <>At Nexifire, we treat the entire journey as one system. The ad, the landing page, and the action we want someone to take all have to speak the same language and feel like one experience.</>,
        ],
      },
      {
        heading: "You Keep Changing Things Before They Have a Chance to Work",
        // headingLevel: 3,
        // subheading: "Storytelling That Builds Brands",
        paragraphs: [
          "Platforms need time and data to figure out who to show your ads to. That's just how they work.",
          <>Every time you edit the campaign, change the budget, or swap out the creative, the learning process resets. The algorithm starts over. And if you keep doing that, the campaign never stabilizes, performance bounces around, and you never get clean enough data to make real decisions.</>,
          <>Patience isn't passive. Letting a campaign breathe and actually gather data is an active, strategic choice.</>,
        ],
      },
      {
        heading: "Your Audience Has Seen This Ad Too Many Times",
        // headingLevel: 3,
        // subheading: "The Infrastructure and Marketing Engine Behind Your Platform",
        paragraphs: [
          <>Strong ads get tired. It's not a failure, it's just reality.</>,
          "When the same people keep seeing the same message, they stop noticing it. Frequency goes up, engagement goes down, and conversions drop with it. It happens gradually, which is why it often gets missed until the damage is already done.",
          "Refreshing creativity isn't just about new visuals. It's about finding new angles, reframing the message, and staying current with where your audience's head is at.",
        ],
      },
      {
        heading: "The Real Problem: You Have Ads Running, Not a System Working",
        paragraphs: [
          "This is the one that stings a little.",
          "Ads don't grow a business by themselves. They accelerate whatever is already in place. If the foundation is shaky, no real funnel, no clear audience journey, no strategy connecting the pieces, then running more ads just speeds up the burn rate.",
          "A lot of businesses are in this position without realizing it. They're running campaigns, but there's no actual system underneath them. Just ads pointing to pages, with no thought given to what happens next.",
          "That's the core of what Nexifire is built around. Not just running campaigns, but building the structure that makes those campaigns actually produce something. Strategy, creative, targeting, conversion all working together instead of existing as separate, disconnected pieces.",
        ],
      },
      {
        heading: "What's Actually Going Wrong With Your Ads",
        paragraphs: [
          "It's not bad luck. It's not the platform. And it's almost never just one thing you can point to and fix.",
          "Ads stop converting when something in the system breaks down. Usually quietly. Usually in more than one place.",
          "But when the message is right, the audience is right, the funnel holds together, and the data is clean, it stops feeling like gambling. The campaign starts doing what you built it to do.",
          "That's the difference between running ads and actually building something from them.",
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
      (a, b) => {
        const publishedAtDifference =
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

        return publishedAtDifference || b.id - a.id;
      },
    )
    .slice(0, limit);
