import PageHeader from "../../Components/ui/PageHeader";
import FAQ from "../../Components/landing/FAQ";
import CTA from "../../Components/landing/CTA";

const FAQPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Help Center"
        title="Frequently asked questions"
        subtitle="Quick answers to the questions we hear most from church leaders."
      />
      <FAQ />
      <CTA />
    </>
  );
};

export default FAQPage;
