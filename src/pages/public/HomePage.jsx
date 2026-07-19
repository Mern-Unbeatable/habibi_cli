import Hero from "../../Components/landing/Hero";
import TrustedBy from "../../Components/landing/TrustedBy";
import VideoShowcase from "../../Components/landing/VideoShowcase";
import Leaders from "../../Components/landing/Leaders";
import Features from "../../Components/landing/Features";
import Screenshots from "../../Components/landing/Screenshots";
import Support from "../../Components/landing/Support";
import Testimonials from "../../Components/landing/Testimonials";
import Comparison from "../../Components/landing/Comparison";
import Pricing from "../../Components/landing/Pricing";
import FAQ from "../../Components/landing/FAQ";
import Contact from "../../Components/landing/Contact";
import CTA from "../../Components/landing/CTA";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <VideoShowcase />
      <Leaders />
      <Features />
      <Screenshots />
      <Support />
      <Testimonials />
      <Comparison />
      <Pricing />
      <FAQ />
      <Contact />
      {/* <CTA /> */}
    </>
  );
};

export default HomePage;
