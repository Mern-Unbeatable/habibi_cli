import PageHeader from "../../Components/ui/PageHeader";
import Pricing from "../../Components/landing/Pricing";
import Comparison from "../../Components/landing/Comparison";
import FAQ from "../../Components/landing/FAQ";
import CTA from "../../Components/landing/CTA";

const PricingPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Fair pricing for every church size"
        subtitle="No hidden fees, no per-user charges, no complicated tiers. Just simple, transparent pricing."
      />
      <Pricing />
      <Comparison />
      <FAQ />
      <CTA />
    </>
  );
};

export default PricingPage;
