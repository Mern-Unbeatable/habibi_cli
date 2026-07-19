import PageHeader from "../../Components/ui/PageHeader";
import Features from "../../Components/landing/Features";
import Screenshots from "../../Components/landing/Screenshots";
import Leaders from "../../Components/landing/Leaders";
import Comparison from "../../Components/landing/Comparison";
import CTA from "../../Components/landing/CTA";

const FeaturesPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything you need to run your church"
        subtitle="Powerful, easy-to-use tools designed specifically for modern ministries — all in one platform."
      />
      <Features />
      <Screenshots />
      <Leaders />
      <Comparison />
      <CTA />
    </>
  );
};

export default FeaturesPage;
