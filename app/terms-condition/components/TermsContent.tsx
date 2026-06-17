"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useSidebarSectionNavigation } from "@/components/legal/useSidebarSectionNavigation";

const sections = [
  { id: "use-of-website", title: "Use of Website" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "information-accuracy", title: "Information Accuracy" },
  { id: "communications", title: "Communications" },
  { id: "ecosystem-brand-links", title: "Ecosystem Brand Links" },
  {
    id: "disclaimers-and-limitation-of-liability",
    title: "Disclaimers and Limitation of Liability",
  },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes-to-terms", title: "Changes to Terms" },
  { id: "contact", title: "Contact" },
];

const introParagraphs: React.ReactNode[] = [
  <>Welcome to NexiFire. By accessing or using our website at <a className="text-[#B24002] font-semibold hover:text-blue-700" href="/" rel="noopener noreferrer">https://www.nexifire.com.au/</a>, you agree to be legally bound by these Terms and Conditions, including any terms incorporated by reference. Please read them carefully. If you do not accept these Terms and Conditions, you should not use this website.</>,
  "NexiFire may revise these Terms and Conditions at any time by updating this page. We encourage you to review this page periodically, as continued use of the website after changes are posted constitutes your acceptance of the revised terms.",
  <>In these Terms and Conditions, "Website" refers to all pages, content, and services available at <a className="text-[#B24002] font-semibold hover:text-blue-700" href="/"  rel="noopener noreferrer">nexifire.com.au</a> and across the brands operating within the NexiFire ecosystem.</>,
];

const useOfWebsiteItems = [
  "Submit information through our forms that is false, misleading, or that impersonates another person or entity",
  "Attempt to gain unauthorized access to any part of the website, our systems, or related accounts",
  "Use any automated tool, bot, scraper, or similar technology to extract data from the website without our prior written consent",
  "Transmit any virus, malware, or other harmful code through the website",
  "Use the website to harass, defame, or violate the legal rights of others",
  "Use the website for any unlawful, fraudulent, or unauthorized commercial purpose",
];

type SectionWrapperProps = {
  children: React.ReactNode;
  id: string;
  title: string;
};

function SectionWrapper({ children, id, title }: SectionWrapperProps) {
  return (
    <section id={id}>
      <h2 className="mb-4 inline-block bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-[28px] font-medium leading-tight text-transparent sm:text-3xl lg:mb-6 lg:text-4xl">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
        {children}
      </div>
    </section>
  );
}

const TermsContent = () => {
  const { activeTab, activeIndex, handleSectionClick } =
    useSidebarSectionNavigation(sections);

  return (
    <div className="font-jakarta mx-auto max-w-7xl bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-6 lg:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <aside className="w-full lg:sticky lg:top-24 lg:w-[360px] lg:self-start">
          <h2 className="border-b border-[#ECECEC] pb-2 text-[20px] font-semibold leading-none tracking-[-0.01em] text-[#3E3E3E] md:text-[21px]">
            Table Of Content
          </h2>
          <div className="mt-[18px] flex flex-col gap-[10px] sm:gap-[12px]">
            {sections.map((section, index) => {
              const isActive = activeTab === section.id;
              const distanceFromActive = Math.abs(index - activeIndex);
              const isNearActive = distanceFromActive === 1;
              const inactiveGlassEffect = isNearActive
                ? index < activeIndex
                  ? "bg-white/80 backdrop-blur-[2px] shadow-[inset_0_-13px_20px_-20px_rgba(178,64,2,0.9)]"
                  : "bg-white/80 backdrop-blur-[2px] shadow-[inset_0_13px_20px_-20px_rgba(178,64,2,0.9)]"
                : "bg-white";

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleSectionClick(section.id);
                  }}
                  className={`flex min-h-[36px] items-center rounded-[5px] border px-[14px] py-2 text-[14px] font-normal leading-tight tracking-[0.01em] transition-all duration-200 sm:px-[18px] sm:text-[15px] ${
                    isActive
                      ? "border-[#B24002] bg-[#B24002] text-white "
                      : `border-[#EFEFEF] text-[#7A7A7A] ${inactiveGlassEffect} hover:border-[#E8E8E8] hover:bg-white hover:text-[#5F5F5F]`
                  }`}
                >
                  {section.title}
                </a>
              );
            })}
          </div>
        </aside>

        <main className="w-full space-y-8 lg:w-3/4 lg:space-y-10">
          <section id="terms-and-conditions">
            <h1 className="mb-4 inline-block bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-[32px] font-medium leading-tight text-transparent sm:text-4xl lg:mb-6 lg:text-5xl">
              Terms and Conditions
            </h1>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              {introParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <SectionWrapper id="use-of-website" title="Use of Website">
            <p>
              This website is intended to provide information about NexiFire,
              its ecosystem of brands, services, and related content. You agree
              to use this website only for lawful purposes and in a manner that
              does not disrupt, damage, or interfere with the website, its
              content, or its proper functioning.
            </p>
            <p>In using this website, you agree not to:</p>
            <ul className="list-disc space-y-3 pl-6">
              {useOfWebsiteItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              We reserve the right, at our sole discretion, to restrict,
              suspend, or terminate access to the website for any user who
              violates these terms.
            </p>
          </SectionWrapper>

          <SectionWrapper
            id="intellectual-property"
            title="Intellectual Property"
          >
            <p>
              All content on this website, including text, branding, logos,
              graphics, design elements, layouts, and other materials, is the
              property of NexiFire or its licensors, unless otherwise stated. No
              content may be copied, reproduced, distributed, republished, or
              used for any commercial purpose without our prior written
              permission.
            </p>
            <p>
              Any information, materials, or content you submit to us through
              consultation forms, career applications, or other inquiries
              (collectively, "Submitted Information") remains subject to our
              Privacy Policy. By submitting such information, you confirm that
              you have the right to share it and that doing so does not infringe
              the rights of any third party.
            </p>
          </SectionWrapper>

          <SectionWrapper
            id="information-accuracy"
            title="Information Accuracy"
          >
            <p>
              We aim to keep all information on this website accurate, current,
              and reliable. However, NexiFire makes no representation, warranty,
              or guarantee that any content, including descriptions of our
              services, brands, or results, will be complete, error-free, or
              continuously available. Information on this website is provided
              for general informational purposes and should not be relied upon
              as a substitute for direct consultation with our team about your
              specific needs.
            </p>
          </SectionWrapper>

          <SectionWrapper id="communications" title="Communications">
            <p>
              By submitting a consultation request, contact form, or providing
              your phone number on this website, you consent to receive
              communications from NexiFire related to your inquiry, including by
              phone, email, or SMS text message. Message frequency may vary, and
              message/data rates may apply depending on your carrier.
            </p>
            <p>
              You may opt out of SMS communications at any time by replying
              STOP, or opt out of email communications using the unsubscribe
              link included in our emails. You can also contact us directly
              using the details below. For more information on how we handle
              your information, please see our <a className="text-[#B24002] font-semibold hover:text-blue-700" href="/privacy-policy" rel="noopener noreferrer">Privacy Policy</a>.
            </p>
          </SectionWrapper>

          <SectionWrapper
            id="ecosystem-brand-links"
            title="Ecosystem Brand Links"
          >
            <p>
              This website may contain links to the official websites of brands
              operating within the NexiFire ecosystem, as well as links to
              third-party websites. While these brands are part of our broader
              network, each website may maintain its own content, terms, and
              policies specific to its operations. NexiFire is not responsible
              for the content, terms, or practices of any linked website, and
              we encourage you to review the terms of any site before engaging
              with it.
            </p>
          </SectionWrapper>

          <SectionWrapper
            id="disclaimers-and-limitation-of-liability"
            title="Disclaimers and Limitation of Liability"
          >
            <p>
              This website and its content are provided on an "as is" and "as
              available" basis, without warranties of any kind, either express
              or implied. NexiFire does not guarantee that the website will be
              uninterrupted, secure, or free of errors.
            </p>
            <p>
              To the fullest extent permitted by law, NexiFire shall not be
              held liable for any direct, indirect, incidental, consequential,
              or punitive damages arising from your access to, use of, or
              inability to use this website or any linked sites, or your
              reliance on any information provided on the website.
            </p>
            <p>
              Nothing in these Terms and Conditions is intended to limit any
              rights you may have under the Australian Consumer Law or other
              applicable legislation that cannot lawfully be excluded.
            </p>
          </SectionWrapper>

          <SectionWrapper id="governing-law" title="Governing Law">
            <p>
              These Terms and Conditions are governed by the laws of New South
              Wales, Australia. Any disputes arising from your use of this
              website will be subject to the exclusive jurisdiction of the
              courts of New South Wales.
            </p>
          </SectionWrapper>

          <SectionWrapper id="changes-to-terms" title="Changes to Terms">
            <p>
              We reserve the right to update or modify these Terms and
              Conditions at any time. Any changes will be reflected on this
              page, and continued use of the website after such changes are
              posted indicates your acceptance of the revised terms.
            </p>
          </SectionWrapper>

          <section id="contact">
            <h2 className="mb-4 inline-block bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-[28px] font-medium leading-tight text-transparent sm:text-3xl lg:mb-6 lg:text-4xl">
              Contact
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <p>
                If you have any questions regarding these Terms and Conditions,
                please contact us:
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="shrink-0 rounded bg-[#B24002] p-2 text-white">
                  <FaPhoneAlt color="#FFFFFF" size={18} />
                </div>
                <a
                  href="tel:+61468285539"
                  className="text-base text-gray-500 hover:underline sm:text-lg"
                >
                  0468 285 539
                </a>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="shrink-0 rounded bg-[#B24002] p-2 text-white">
                  <MdEmail color="#FFFFFF" size={18} />
                </div>
                <a
                  href="mailto:contact@nexifire.com.au"
                  className="break-all text-base text-gray-500 hover:underline sm:text-lg"
                >
                  contact@nexifire.com.au
                </a>
              </div>

              <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                <div className="shrink-0 rounded bg-[#B24002] p-2 text-white">
                  <FaLocationDot color="#FFFFFF" size={18} />
                </div>
                <span className="text-base text-gray-500 sm:text-lg">
                  16A Fox Cl, Kariong NSW 2250, Australia
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TermsContent;
