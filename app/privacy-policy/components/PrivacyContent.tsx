"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useSidebarSectionNavigation } from "@/components/legal/useSidebarSectionNavigation";

const sections = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use-your-information", title: "How We Use Your Information" },
  { id: "choice-opt-out", title: "Choice / Opt-Out" },
  {
    id: "information-obtained-from-third-parties",
    title: "Information Obtained from Third Parties",
  },
  { id: "information-sharing", title: "Information Sharing" },
  {
    id: "cookies-and-tracking-technologies",
    title: "Cookies and Tracking Technologies",
  },
  { id: "brand-page-links", title: "Brand Page Links" },
  { id: "data-security", title: "Data Security" },
  {
    id: "correcting-and-updating-your-information",
    title: "Correcting and Updating Your Information",
  },
  {
    id: "mobile-number-collection-and-use",
    title: "Mobile Number Collection and Use",
  },
  {
    id: "non-disclosure-of-consent-information",
    title: "Non-Disclosure of Consent Information",
  },
  { id: "updates-to-this-policy", title: "Updates to This Policy" },
  { id: "contact", title: "Contact" },
];

const introParagraphs: React.ReactNode[] = [
  "By using the NexiFire website and engaging with us as a client, lead, applicant, or visitor, you agree to the terms of this Privacy Policy.",
  <>This policy describes how NexiFire ("NexiFire," "we," "us," or "our") collects and uses the personal information you provide through our website at <a className="text-[#B24002] font-semibold hover:text-blue-700" href="/"  rel="noopener noreferrer">https://www.nexifire.com.au/</a>, including when you interact with the brands in our ecosystem. It also explains the choices available to you regarding your information and how you can access or update it.</>,
];

const informationWeCollectItems = [
  "Contact information, such as your name, email address, phone number, and mailing address.",
  "Business information, such as your company name, company size, industry, and project details, is submitted through consultation requests or inquiry forms.",
  "Career and application information, such as your resume, cover letter, and work history, is required when you apply for a role with NexiFire or one of our brands.",
  "Preference information, such as the services you're interested in, marketing preferences, and communication history.",
];

const howWeUseYourInformationItems = [
  "Respond to consultation requests and answer your questions",
  "Assess your business needs and recommend the right brand or service within our ecosystem",
  "Process career applications",
  "Manage and improve our client and lead communications",
  "Send you the requested information about our services or brands",
  "Send newsletters, blog updates, or marketing communications (where you've opted in)",
  "Monitor and improve website performance and user experience",
  "Comply with legal obligations",
];

const informationSharingItems: React.ReactNode[] = [
  <><b>Within our ecosystem of brands,</b> where necessary to connect your inquiry with the specialized brand or team best suited to assist you.</>,
  <><b>With service providers</b> who support our business operations (for example, hosting, analytics, or email delivery providers), who are authorized to use your information only to provide those services to us.</>,
  <><b>As required by law,</b> such as to comply with a subpoena, legal process, or government request, or to protect our rights, your safety, or the safety of others.</>,
  <><b>In connection with a business transaction,</b> if NexiFire is involved in a merger, acquisition, or sale of assets, you will be notified of any resulting change in how your information is handled.</>,
  <><b>With your consent,</b> to any other third party, where you have given us prior permission to do so.</>,
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

const PrivacyContent = () => {
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
          <section id="privacy-policy">
            <h1 className="mb-4 inline-block bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-[32px] font-medium leading-tight text-transparent sm:text-4xl lg:mb-6 lg:text-5xl">
              Privacy Policy
            </h1>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              {introParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <SectionWrapper
            id="information-we-collect"
            title="Information We Collect"
          >
            <p>We collect the following personal information from you:</p>
            <ul className="list-disc space-y-3 pl-6">
              {informationWeCollectItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              As is true of most websites, we also automatically collect
              technical information about your visit, including your IP address,
              browser type, device type, referring/exit pages, pages visited,
              and operating system.
            </p>
          </SectionWrapper>

          <SectionWrapper
            id="how-we-use-your-information"
            title="How We Use Your Information"
          >
            <p>We use the information we collect to:</p>
            <ul className="list-disc space-y-3 pl-6">
              {howWeUseYourInformationItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionWrapper>

          <SectionWrapper id="choice-opt-out" title="Choice / Opt-Out">
            <p>
              You may stop receiving marketing emails or newsletters at any
              time by following the unsubscribe link included in those emails,
              or by contacting us at contact@nexifire.com.au.
            </p>
          </SectionWrapper>

          <SectionWrapper
            id="information-obtained-from-third-parties"
            title="Information Obtained from Third Parties"
          >
            <p>
              If a third party provides us with your personal information, for
              example, a referral or business partner, we will only use that
              information for the specific purpose for which it was provided.
            </p>
          </SectionWrapper>

          <SectionWrapper
            id="information-sharing"
            title="Information Sharing"
          >
            <p>
              NexiFire does not sell, trade, or rent your personal information
              to third parties.
            </p>
            <p>We may share your information in the following circumstances:</p>
            <ul className="list-disc space-y-3 pl-6">
              {informationSharingItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </SectionWrapper>

          <SectionWrapper
            id="cookies-and-tracking-technologies"
            title="Cookies and Tracking Technologies"
          >
            <p>
              Our website may use cookies and similar tracking technologies to
              remember your preferences, understand how visitors use our site,
              and compile aggregated, non-identifying statistics that help us
              improve performance. We may also work with third-party analytics
              providers who use cookies to help us understand site usage.
            </p>
            <p>
              You can control or disable cookies through your browser settings;
              please note that some parts of our site may not function as
              intended if cookies are disabled.
            </p>
          </SectionWrapper>

          <SectionWrapper id="brand-page-links" title="Brand Page Links">
            <p>
              Our website may contain links to the pages of brands operating
              within the NexiFire ecosystem, as well as links to third-party
              websites. While these brands are part of our broader network, each
              may maintain its own content and privacy practices. We encourage
              you to review the privacy policy of any brand or external site
              before submitting personal information to it.
            </p>
          </SectionWrapper>

          <SectionWrapper id="data-security" title="Data Security">
            <p>
              We follow generally accepted industry standards to protect the
              personal information you share with us, both during transmission
              and once received. However, no method of transmission over the
              internet or electronic storage is completely secure, and we cannot
              guarantee absolute security. If you have any questions about the
              security of our website, please contact us at
              {" "}<a href="mailto:contact@nexifire.com.au" className="text-[#B24002] font-semibold hover:text-blue-700"  rel="noopener noreferrer">contact@nexifire.com.au</a>.
            </p>
          </SectionWrapper>

          <SectionWrapper
            id="correcting-and-updating-your-information"
            title="Correcting and Updating Your Information"
          >
            <p>
              To review, correct, or update the personal information you've
              provided to us, please contact us at <a href="mailto:contact@nexifire.com.au" className="text-[#B24002] font-semibold hover:text-blue-700"  rel="noopener noreferrer">contact@nexifire.com.au</a>.
            </p>
          </SectionWrapper>

          <SectionWrapper
            id="mobile-number-collection-and-use"
            title="Mobile Number Collection and Use"
          >
            <p>
              If you provide your mobile number through our website (for
              example, via a consultation or contact form), you consent to
              receive calls or text messages from us related to your inquiry and
              our services. We will not share your mobile number with third
              parties without your consent, except as required by law. You may
              opt out of text communications at any time by replying STOP or by
              contacting us directly.
            </p>
          </SectionWrapper>

          <SectionWrapper
            id="non-disclosure-of-consent-information"
            title="Non-Disclosure of Consent Information"
          >
            <p>
              Any consent you provide regarding communication preferences,
              including text messaging- will not be shared with, sold to, or
              accessed by third parties, except as required by law. This
              includes any external partners or service providers involved in
              delivering our services. Your consent preferences are used
              strictly for their intended communication purpose.
            </p>
          </SectionWrapper>

          <SectionWrapper
            id="updates-to-this-policy"
            title="Updates to This Policy"
          >
            <p>
              NexiFire may update this Privacy Policy from time to time to
              reflect changes in our practices or for legal, operational, or
              regulatory reasons. Any changes will be reflected on this page,
              and we encourage you to review it periodically.
            </p>
          </SectionWrapper>

          <section id="contact">
            <h2 className="mb-4 inline-block bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-[28px] font-medium leading-tight text-transparent sm:text-3xl lg:mb-6 lg:text-4xl">
              Contact
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <p>
                If you have any questions regarding this Privacy Policy, please
                reach out to us:
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

export default PrivacyContent;
