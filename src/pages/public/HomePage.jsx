import Hero from "../../Components/landing/Hero";
import TrustedBy from "../../Components/landing/TrustedBy";
import VideoShowcase from "../../Components/landing/VideoShowcase";
import Leaders from "../../Components/landing/Leaders";
import Features from "../../Components/landing/Features";
import Screenshots from "../../Components/landing/Screenshots";
import Support from "../../Components/landing/Support";
import WhiteGloveSupport from "../../Components/landing/WhiteGloveSupport";
import Testimonials from "../../Components/landing/Testimonials";
import ProudlyCanadian from "../../Components/landing/ProudlyCanadian";
import CTA from "../../Components/landing/CTA";
import Pricing from "../../Components/landing/Pricing";
import FAQ from "../../Components/landing/FAQ";
import Contact from "../../Components/landing/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <VideoShowcase />
      <Leaders />
      <Features />
      <Screenshots />
      <Pricing />
      <WhiteGloveSupport />
      <Testimonials />
      <ProudlyCanadian />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
};

export default HomePage;
