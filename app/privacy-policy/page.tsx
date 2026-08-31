import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import LazyPrivacyContent from "./components/LazyPrivacyContent";

export const metadata = createPageMetadata({
  title: "Privacy Policy: NexiFire Data Protection",
  description:
    "Read NexiFire's privacy policy to learn how we collect, use, and protect your personal information when you visit our website or contact us.",
  pathname: "/privacy-policy",
});

const page = () => {
  return (
    <section className="overflow-x-clip bg-white">
      <PageHero
        title={`Privacy Policy`}
        description={`At NexiFire, we value your privacy and are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or interact with our ecosystem of brands.`}
      />
      <LazyPrivacyContent />
    </section>
  );
};

export default page;
