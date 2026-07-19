import PageHeader from "../../Components/ui/PageHeader";
import About from "../../Components/landing/About";
import Support from "../../Components/landing/Support";
import TrustedBy from "../../Components/landing/TrustedBy";
import Testimonials from "../../Components/landing/Testimonials";
import CTA from "../../Components/landing/CTA";

const AboutPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Our mission is your ministry"
        subtitle="We exist to give churches the best technology, so they can focus on what matters most — people."
      />
      <About />
      <Support />
      <TrustedBy />
      <Testimonials />
      <CTA />
    </>
  );
};

export default AboutPage;
