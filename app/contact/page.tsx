import GetInTouchContact from "@/components/GetInTouchContact";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import React from "react";

export const metadata = createPageMetadata({
  title: "Contact NexiFire:  Let's Talk Growth",
  description:
    "Get in touch with NexiFire to discuss your brand's growth strategy. Reach our US or Australia offices, or fill out our contact form.",
  pathname: "/contact",
});

const page = () => {
  return (
    <section className="bg-white overflow-hidden">
      <PageHero
        eyebrow="Contact Us"
        title={`Let’s Talk`}
        description="Looking to start something new or increase the visibility of an existing business? We’re here to guide you with the right strategy and the right systems. Let’s understand your goals and create a clear path ahead, together."
      />
      <GetInTouchContact />
    </section>
  );
};

export default page;
