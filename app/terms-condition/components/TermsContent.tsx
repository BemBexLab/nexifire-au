"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useSidebarSectionNavigation } from "@/components/legal/useSidebarSectionNavigation";

const sections = [
  { id: "use-website", title: "Use of Website" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "information-accuracy", title: "Information Accuracy" },
  { id: "ecosystem-brand-links", title: "Ecosystem Brand Links" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "changes-to-terms", title: "Changes to Terms" },
  { id: "contact", title: "Contact" },
];

const TermsContent = () => {
  const { activeTab, activeIndex, handleSectionClick } =
    useSidebarSectionNavigation(sections);

  return (
    <div className="font-jakarta mx-auto max-w-7xl bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-6 lg:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* --- Sidebar (Table of Contents) --- */}
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(section.id);
                  }}
                  className={`flex min-h-[36px] items-center rounded-[5px] border px-[14px] py-2 text-[14px] font-normal leading-tight tracking-[0.01em] transition-all duration-200 sm:px-[18px] sm:text-[15px]
                  ${
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
          <section id="use-website">
            <h2 className="mb-4 text-[28px] leading-tight bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium sm:text-3xl lg:mb-6 lg:text-4xl">
              Use of Website
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              This website is intended to provide information about NexiFire,
              its ecosystem, brands, and related content. You agree to use this
              website only for lawful purposes and in a manner that does not
              disrupt or damage the website or its content.
            </p>
          </section>

          <section id="intellectual-property">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight sm:text-3xl lg:mb-6 lg:text-4xl">
              Intellectual Property
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              All content on this website, including text, branding, logos,
              graphics, design elements, and other materials, is the property of
              NexiFire unless otherwise stated. No content may be copied,
              reproduced, distributed, or used without prior written permission.
            </p>
          </section>

          <section id="information-accuracy">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Information Accuracy
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              We aim to keep all information accurate and up to date. However,
              NexiFire does not guarantee that all website content will always
              be complete, current, or error-free.
            </p>
          </section>

          <section id="ecosystem-brand-links">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Ecosystem Brand Links
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              This website may contain links to the official websites of brands
              operating within the NexiFire ecosystem. While these brands are
              part of our broader network, each website may include content,
              terms, or policies specific to its respective operations.
            </p>
          </section>

          <section id="limitation-of-liability">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              NexiFire shall not be held liable for any direct, indirect,
              incidental, consequential, or punitive damages arising from your
              access to, use of, or inability to use this website or any linked
              sites, or reliance on information provided on the website.
            </p>
          </section>

          <section id="changes-to-terms">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Changes to Terms
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              We reserve the right to update or modify these Terms and
              Conditions at any time. Continued use of the website after changes
              indicates acceptance of the revised terms.
            </p>
          </section>

          <section id="contact">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">Contact</h2>
            <p className="mb-6 text-base text-gray-500 sm:text-lg lg:mb-8">
              If you have any questions regarding these Terms and Conditions,
              please contact us through our official contact page.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="shrink-0 rounded bg-[#B24002] p-2 text-white">
                  <FaPhoneAlt color="#FFFFFF" size={18} />
                </div>
                <a
                  href="tel:+61272283952"
                  className="text-base text-gray-500 hover:underline sm:text-lg"
                >
                  (02) 7228 3952
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
                <span className="text-base text-gray-500 uppercase sm:text-lg">
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
