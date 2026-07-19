import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, MessageCircle } from "lucide-react";
import useReveal from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

const faqs = [
  {
    question: "How easy is it to get started?",
    answer:
      "Very easy. Sign up, and you can import your existing data or start fresh. Our onboarding wizard guides you through every step, and our team helps with data migration at no extra cost.",
  },
  {
    question: "Can I import data from my current system?",
    answer:
      "Yes. EkklésiasOne supports imports from all major church management platforms, plus CSV and Excel files. Our team assists with the migration — completely free of charge.",
  },
  {
    question: "Is my church's data secure?",
    answer:
      "Absolutely. We use bank-level 256-bit encryption, run regular security audits, keep automated backups, and are fully GDPR compliant — with a 99.9% uptime guarantee.",
  },
  {
    question: "Do I need technical skills to use it?",
    answer:
      "Not at all. EkklésiasOne is designed for everyone, from tech-savvy volunteers to pastors who prefer simplicity. Video tutorials and live support cover every feature.",
  },
  {
    question: "What payment methods work for online giving?",
    answer:
      "We support credit and debit cards, ACH bank transfers, Apple Pay, Google Pay, and text-to-give. Members can set up recurring donations in seconds.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. There are no contracts and no cancellation fees. If you cancel, you can export all of your data anytime — it always belongs to you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const scope = useReveal();

  return (
    <section ref={scope} id="faq" className="py-24 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about EkklésiasOne. Can't find your answer? We're one message away."
        />

        <div className="space-y-4">
          {faqs.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={question}
                data-reveal
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-primary/30 bg-cream shadow-soft" : "border-slate-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 sm:px-7 py-5 text-left cursor-pointer"
                >
                  <span className="font-display font-semibold text-ink text-base sm:text-lg">
                    {question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-primary text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={17} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-7 pb-6 text-slate-600 leading-relaxed">{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          data-reveal
          className="mt-10 rounded-2xl bg-cream border border-slate-200 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <MessageCircle size={22} className="text-primary" />
            </span>
            <div className="text-center sm:text-left">
              <p className="font-display font-bold text-ink">Still have questions?</p>
              <p className="text-sm text-slate-500">Our team replies in under an hour.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-sm transition-colors no-underline whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
