import { ArrowRight, Check, Lock, Star, X } from "lucide-react";
import useReveal from "../../hooks/useReveal";

const COMPARISONS = [
  {
    category: "Architecture",
    feature: "Unified All-in-One Database",
    ekklesia: {
      main: "Fully Integrated & Included",
      highlight: "Zero data silos or duplicate profiles",
    },
    typical: "Patchwork of 4-6 separate apps with sync errors",
  },
  {
    category: "Finance",
    feature: "Integrated Fund Accounting & CRA Receipts",
    ekklesia: {
      main: "Fully Integrated & Included",
      highlight: "1-Click automated tax receipt dispatch",
    },
    typical: "Requires extra QuickBooks subscription & manual spreadsheet export",
  },
  {
    category: "Intelligence",
    feature: "Native AI Ministry Assistant",
    ekklesia: {
      main: "Fully Integrated & Included",
      highlight: "Natural language reporting & automated care suggestions",
    },
    typical: "Not available or legacy add-on",
  },
  {
    category: "Mobile",
    feature: "Custom Branded Pocket Church Mobile App",
    ekklesia: {
      main: "Included in all plans",
      highlight: "Full white-label congregation app",
    },
    typical: "$199/mo extra add-on or generic shared app",
  },
  {
    category: "Pricing",
    feature: "Transparent All-Inclusive Pricing",
    ekklesia: {
      main: "Single predictable tier, zero hidden module fees",
      highlight: "30-40% average cost savings",
    },
    typical: "Module add-ons per feature (Giving + App + SMS fees)",
  },
  {
    category: "Security",
    feature: "Canadian Data Sovereignty & PIPEDA Compliance",
    ekklesia: {
      main: "Fully Integrated & Included",
      highlight: "Data stored securely in Canadian data centres",
    },
    typical: "US-hosted data with limited local compliance",
  },
  {
    category: "Onboarding",
    feature: "Dedicated White-Glove Data Migration",
    ekklesia: {
      main: "Included for free with dedicated migration engineer",
      highlight: "100% data fidelity guarantee",
    },
    typical: "Do-it-yourself CSV import with formatting headaches",
  },
];

const EkklesiaCell = ({ main, highlight }) => (
  <div
    className="rounded-xl border p-4 h-full"
    style={{
      backgroundColor: "rgba(255,255,255,0.04)",
      borderColor: "rgba(6,182,212,0.25)",
    }}
  >
    <div className="flex items-start gap-2.5 mb-2">
      <Check size={16} className="shrink-0 mt-0.5" style={{ color: "#06B6D4" }} />
      <span className="text-sm font-semibold leading-snug" style={{ color: "#FFFFFF" }}>
        {main}
      </span>
    </div>
    <div className="flex items-start gap-2 pl-6">
      <Star size={12} className="shrink-0 mt-1" style={{ color: "#C9A535" }} fill="#C9A535" />
      <span className="text-xs leading-relaxed" style={{ color: "#C9A535" }}>
        {highlight}
      </span>
    </div>
  </div>
);

const TypicalCell = ({ text }) => (
  <div
    className="rounded-xl border p-4 h-full"
    style={{
      backgroundColor: "rgba(0,0,0,0.2)",
      borderColor: "rgba(255,255,255,0.06)",
    }}
  >
    <div className="flex items-start gap-2.5">
      <X size={16} className="shrink-0 mt-0.5" style={{ color: "#F87171" }} />
      <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.65)" }}>
        {text}
      </span>
    </div>
  </div>
);

const Features = () => {
  const scope = useReveal();

  return (
    <section
      ref={scope}
      id="features"
      className="relative py-14 lg:py-20 overflow-hidden"
      style={{ backgroundColor: "#F3F4F8" }}
    >
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <p
            data-reveal
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] mb-5"
            style={{ color: "#06B6D4" }}
          >
            <Lock size={14} strokeWidth={2.5} />
            What Makes Us Different
          </p>

          <h2
            data-reveal
            className="font-marcellus font-normal text-[#1C1A40] text-[2rem] sm:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-tight mb-4 max-w-3xl mx-auto"
          >
            EkklésiaOne vs Typical Church Software
          </h2>

          <p
            data-reveal
            data-delay="0.08"
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#64748B" }}
          >
            Most church platforms bolt modules together and charge per feature. EkklésiaOne
            is built as one — no stitching required.
          </p>
        </div>

        <div
          data-reveal
          data-delay="0.12"
          className="rounded-3xl overflow-hidden p-5 sm:p-8 lg:p-10"
          style={{ backgroundColor: "#1C1A40" }}
        >
          <div className="hidden lg:grid grid-cols-[1.1fr_1fr_1fr] gap-4 mb-5 px-1">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Platform Feature / Capability
            </p>
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-center"
              style={{ color: "#06B6D4" }}
            >
              EkklésiaOne Standard
            </p>
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-right"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Typical Church Software
            </p>
          </div>

          <div className="space-y-4">
            {COMPARISONS.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_1fr] gap-3 lg:gap-4 items-stretch"
              >
                <div className="flex flex-col justify-center py-2 lg:py-0">
                  <p className="font-semibold text-sm sm:text-base mb-1" style={{ color: "#FFFFFF" }}>
                    {row.feature}
                  </p>
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {row.category}
                  </p>
                </div>

                <div className="lg:hidden">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2"
                    style={{ color: "#06B6D4" }}
                  >
                    EkklésiaOne Standard
                  </p>
                </div>
                <EkklesiaCell main={row.ekklesia.main} highlight={row.ekklesia.highlight} />

                <div className="lg:hidden">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    Typical Church Software
                  </p>
                </div>
                <TypicalCell text={row.typical} />
              </div>
            ))}
          </div>
        </div>

        <div data-reveal data-delay="0.2" className="flex justify-center mt-8 lg:mt-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all hover:-translate-y-0.5 no-underline"
            style={{
              backgroundColor: "#06B6D4",
              color: "#FFFFFF",
              boxShadow: "0 8px 28px rgba(6,182,212,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#05a3bd";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#06B6D4";
            }}
          >
            See how Easy Migration is
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
