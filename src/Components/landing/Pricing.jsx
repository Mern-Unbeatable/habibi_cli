import { Check, X } from "lucide-react";
import useReveal from "../../hooks/useReveal";
import { CHURCH_LOGIN_URL } from "../../constants/links";

const plans = [
  {
    name: "Free",
    titleColor: "text-[#7A357C]",
    price: "$0",
    description:
      "For new or very small congregations just getting started with digital ministry tools.",
    features: [
      { text: "Member directory (50)", included: true },
      { text: "Attendance tracking", included: true },
      { text: "Basic email messaging", included: true },
      { text: "Member portal", included: true },
      { text: "Volunteer scheduling", included: false },
      { text: "Church accounting", included: false },
      { text: "GraceConnect check-in", included: false },
    ],
    buttonText: "Get Started Free",
    isDark: false,
    popular: false,
  },
  {
    name: "Sprout",
    titleColor: "text-[#7A357C]",
    price: "$75",
    description:
      "Core platform for active, growing churches managing their full ministry digitally.",
    features: [
      { text: "Everything in Free", included: true },
      { text: "Unlimited members", included: true },
      { text: "Volunteer scheduling", included: true },
      { text: "Grace Connect check-in", included: true },
      { text: "Church accounting (CAD)", included: true },
      { text: "Daily devotional", included: true },
      { text: "HOD requisition portal", included: false },
    ],
    buttonText: "Start Sprout Trial",
    isDark: false,
    popular: false,
  },
  {
    name: "Blossom",
    titleColor: "text-[#7A357C]",
    price: "$120",
    description:
      "Multi-department churches with advanced workflows, approvals, and communications.",
    features: [
      { text: "Everything in Sprout", included: true },
      { text: "HOD requisition portal", included: true },
      { text: "Pastorate approval chain", included: true },
      { text: "Email + SMS + WhatsApp", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Resource library", included: true },
      { text: "15 automation categories", included: true },
    ],
    buttonText: "Start Blossom Trial",
    isDark: false,
    popular: false,
  },
  {
    name: "Garden",
    titleColor: "text-amber-400",
    price: "$175",
    description:
      "Large ministries and multi-campus networks needing enterprise-level control and support.",
    features: [
      { text: "Everything in Blossom", included: true },
      { text: "Super admin portal", included: true },
      { text: "Custom role creation", included: true },
      { text: "Multi-campus management", included: true },
      { text: "White-label option", included: true },
      { text: "Priority support + onboarding", included: true },
      { text: "Full data import assistance", included: true },
    ],
    buttonText: "Get Garden",
    isDark: true,
    popular: true,
  },
];

const Pricing = () => {
  const scope = useReveal();

  return (
    <section
      ref={scope}
      id="pricing"
      className="py-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div
            data-reveal
            className="inline-flex items-center px-3 py-0.5 rounded-full border border-primary/40 text-primary text-xs sm:text-sm font-normal bg-primary/5 mb-4"
          >
            Transparent Kingdom Stewardship Pricing
          </div>
          <h2
            data-reveal
            className="font-marcellus font-normal text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight tracking-tight mb-3"
          >
            Plans for every congregation
          </h2>
          <p
            data-reveal
            data-delay="0.1"
            className="text-slate-600 text-sm sm:text-base font-normal"
          >
            All modules on every plan. No hidden fees. Always in Canadian
            dollars.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map(
            (
              {
                name,
                titleColor,
                price,
                description,
                features,
                buttonText,
                isDark,
                popular,
              },
              i,
            ) => (
              <div
                key={name}
                data-reveal
                data-delay={`${i * 0.1}`}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isDark ? "bg-[#003840] text-white shadow-2xl" : "bg-[#FAFAFA]"
                }`}
              >
                {/* Popular Tag */}
                {popular && (
                  <div className="absolute top-0 right-0 bg-[#FFC107] text-slate-950 text-xs font-semibold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <h3
                    className={`font-normal text-base mb-4 ${
                      isDark ? titleColor : titleColor
                    }`}
                  >
                    {name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline mb-4">
                    <span
                      className={`font-bold text-3xl sm:text-4xl ${isDark ? "text-white" : "text-ink"}`}
                    >
                      {price}
                    </span>
                    <span
                      className={`text-xs ml-1 font-normal ${
                        isDark ? "text-white/70" : "text-slate-500"
                      }`}
                    >
                      CAD/mon
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal min-h-11 ${
                      isDark ? "text-white/80" : "text-[#575757]"
                    }`}
                  >
                    {description}
                  </p>

                  {/* Benefits Header */}
                  <p
                    className={`font-semibold text-xs sm:text-sm mb-4 ${
                      isDark ? "text-white" : "text-ink"
                    }`}
                  >
                    Benefits
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {features.map(({ text, included }) => (
                      <li
                        key={text}
                        className="flex items-start gap-2.5 text-xs sm:text-sm"
                      >
                        {isDark ? (
                          <span className="w-4 h-4 rounded-full bg-white text-[#003840] flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={10} className="stroke-3" />
                          </span>
                        ) : included ? (
                          <Check
                            size={14}
                            className="text-primary stroke-[2.5] shrink-0 mt-0.5"
                          />
                        ) : (
                          <X
                            size={14}
                            className="text-slate-300 stroke-2 shrink-0 mt-0.5"
                          />
                        )}
                        <span
                          className={`font-normal ${
                            isDark
                              ? "text-white/95"
                              : included
                                ? "text-slate-700"
                                : "text-slate-400/80"
                          }`}
                        >
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <a
                  href={CHURCH_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full text-sm font-medium text-center text-white bg-primary hover:bg-cyan-600 transition-colors shadow-xs no-underline flex items-center justify-center mt-auto"
                >
                  {buttonText}
                </a>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
