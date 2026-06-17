"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useSidebarSectionNavigation } from "@/components/legal/useSidebarSectionNavigation";

const sections = [
  { id: "info-collect", title: "Information We Collect" },
  { id: "how-use", title: "How We Use Your Information" },
  { id: "sharing", title: "Information Sharing" },
  { id: "security", title: "Data Security" },
  { id: "cookies", title: "Cookies and Tracking" },
  { id: "brand-links", title: "Brand Page Links" },
  { id: "updates", title: "Updates to This Policy" },
  { id: "contact", title: "Contact" },
];

const PrivacyContent = () => {
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
                  ${isActive
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

        {/* --- Main Content Area --- */}
        <main className="w-full space-y-8 lg:w-3/4 lg:space-y-10">

          <section id="info-collect">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight sm:text-3xl lg:mb-6 lg:text-4xl">
              Information We Collect
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <p>
                We may collect personal information that you voluntarily provide
                to us, such as your name, email address, phone number, company
                details, or any information submitted through contact forms,
                consultation requests, career applications, or other website
                forms.
              </p>
              <p>
                We may also collect non-personal information such as browser
                type, device information, IP address, pages visited, and
                website usage data to help us improve our platform and user
                experience.
              </p>
            </div>
          </section>

          <section id="how-use">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight sm:text-3xl lg:mb-6 lg:text-4xl">
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <p>
                The information we collect is used to respond to your inquiries,
                improve our services, manage communication, process
                applications, and enhance website functionality.
              </p>
              <p>
                We may also use the information for internal analysis,
                performance monitoring, and to provide updates related to our
                brands, services, and content where appropriate.
              </p>
            </div>
          </section>

          <section id="sharing">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight sm:text-3xl lg:mb-6 lg:text-4xl">
              Information Sharing
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <p>
                NexiFire does not sell, trade, or rent your personal
                information to third parties.
              </p>
              <p>
                However, information may be shared internally within our
                ecosystem of specialized brands where necessary to better
                address your inquiry or align you with the appropriate team.
              </p>
            </div>
          </section>

          <section id="security">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight sm:text-3xl lg:mb-6 lg:text-4xl">
              Data Security
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              We take reasonable steps to protect your information from
              unauthorized access, misuse, or disclosure. While no digital
              platform can guarantee complete security, we are committed to
              maintaining secure systems and processes.
            </p>
          </section>

          <section id="cookies">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight sm:text-3xl lg:mb-6 lg:text-4xl">
              Cookies and Tracking
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              Our website may use cookies and similar technologies to improve
              user experience, analyze traffic, and optimize website
              performance.
            </p>
          </section>

          <section id="brand-links">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight sm:text-3xl lg:mb-6 lg:text-4xl">
              Brand Page Links
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              Our website may contain links to the official pages of brands
              operating within the NexiFire ecosystem. While these pages are
              part of our broader network, each brand may maintain its own
              content, policies, and practices related to its operations.
            </p>
          </section>

          <section id="updates">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight sm:text-3xl lg:mb-6 lg:text-4xl">
              Updates to This Policy
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              NexiFire may update this Privacy Policy from time to time. Any
              changes will be reflected on this page.
            </p>
          </section>

          <section id="contact">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight sm:text-3xl lg:mb-6 lg:text-4xl">
              Contact
            </h2>
            <p className="mb-6 text-base text-gray-500 sm:text-lg lg:mb-8">
              If you have any questions regarding this Privacy Policy, please
              contact us through our official contact page.
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

export default PrivacyContent;
