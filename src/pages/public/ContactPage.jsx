import PageHeader from "../../Components/ui/PageHeader";
import Contact from "../../Components/landing/Contact";
import FAQ from "../../Components/landing/FAQ";
import CTA from "../../Components/landing/CTA";

const ContactPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to a real person"
        subtitle="Our support team is here to help — with questions, demos, or migrating from your current system."
      />
      <Contact />
      <FAQ />
      <CTA />
    </>
  );
};

export default ContactPage;
