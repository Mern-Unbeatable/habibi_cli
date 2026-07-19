import PageHeader from "../../Components/ui/PageHeader";
import Testimonials from "../../Components/landing/Testimonials";
import TrustedBy from "../../Components/landing/TrustedBy";
import CTA from "../../Components/landing/CTA";

const TestimonialsPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Hear it from our churches"
        subtitle="Thousands of church leaders trust EkklésiasOne every week. Here's what they say."
      />
      <Testimonials />
      <TrustedBy />
      <CTA />
    </>
  );
};

export default TestimonialsPage;
