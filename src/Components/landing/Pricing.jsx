import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import useReveal from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";
import { CHURCH_LOGIN_URL } from "../../constants/links";

const plans = [
  {
    name: "Starter",
    description: "For small churches just getting started.",
    monthly: 29,
    yearly: 24,
    features: [
      "Up to 150 members",
      "Event management",
      "Online giving tools",
      "Email communication",
      "Attendance tracking",
      "Standard support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing churches that need more power.",
    monthly: 59,
    yearly: 49,
    features: [
      "Up to 1,000 members",
      "Advanced event tools",
      "Full giving platform",
      "Email & SMS messaging",
      "Volunteer scheduling",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large and multi-campus ministries.",
    monthly: 99,
    yearly: 82,
    features: [
      "Unlimited members",
      "Multi-campus support",
      "Advanced workflows",
      "Custom reports & API",
      "Dedicated onboarding",
      "24/7 dedicated support",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(true);
  const scope = useReveal();

  return (
    <section ref={scope} id="pricing" className="py-24 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that grows with you"
          subtitle="No hidden fees, no per-user charges, no surprises. Every plan starts with a free trial — no credit card required."
        />

        <div data-reveal className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-semibold ${!yearly ? "text-ink" : "text-slate-400"}`}>
            Monthly
          </span>
          <button
            onClick={() => setYearly(!yearly)}
            aria-label="Toggle yearly billing"
            className={`relative w-14 h-8 rounded-full transition-colors cursor-pointer ${
              yearly ? "bg-primary" : "bg-slate-300"
            }`}
          >
            <span
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-all ${
                yearly ? "left-7" : "left-1"
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${yearly ? "text-ink" : "text-slate-400"}`}>
            Yearly
            <span className="ml-2 text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
              Save 17%
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map(({ name, description, monthly, yearly: yearlyPrice, features, popular }, i) => (
            <div
              key={name}
              data-reveal
              data-delay={`${i * 0.12}`}
              className={`relative rounded-[2rem] p-8 flex flex-col bg-white transition-transform duration-300 hover:-translate-y-1.5 ${
                popular
                  ? "border-2 border-primary shadow-lift lg:scale-[1.04] z-10"
                  : "border border-slate-200 shadow-soft"
              }`}
            >
              {popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-secondary text-white text-xs font-bold uppercase tracking-wider py-2 px-5 rounded-full shadow-md whitespace-nowrap">
                  <Sparkles size={13} /> Most Popular
                </span>
              )}

              <div className="mb-7">
                <h3 className="font-display font-bold text-2xl text-ink mb-2">{name}</h3>
                <p className="text-slate-500 text-sm">{description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="font-display font-bold text-5xl text-ink">
                  ${yearly ? yearlyPrice : monthly}
                </span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>

              <ul className="space-y-3.5 mb-9 flex-1">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-emerald-600" />
                    </span>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHURCH_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-2 no-underline ${
                  popular
                    ? "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25"
                    : "bg-slate-100 hover:bg-slate-200 text-ink"
                }`}
              >
                Start Free Trial
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>

        <p data-reveal className="text-center text-sm text-slate-500 mt-12">
          All plans include free data migration, unlimited admin users, and a 30-day money-back guarantee.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
