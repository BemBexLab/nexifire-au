
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import LazyTermsContent from "./components/LazyTermsContent";

export const metadata = createPageMetadata({
  title: "Terms & Conditions: NexiFire Website Use Policy",
  description:
    "Review NexiFire's terms and conditions covering website use, services, and your rights and responsibilities as a visitor or client.",
  pathname: "/terms-condition",
});

const page = () => {
  return (
    <section className="overflow-x-clip bg-white">
      <PageHero
        title={`Terms and Conditions`}
        description={`Welcome to NexiFire. By accessing or using our website, you agree to comply with the following terms and conditions.`}
      />
      <LazyTermsContent />
    </section>
  );
};

export default page;
