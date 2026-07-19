import { Check, X } from "lucide-react";
import useReveal from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

const rows = [
  "Unlimited users & volunteers",
  "Free support & training",
  "No setup fees",
  "Free data migration",
  "Member portal included",
  "Cancel anytime",
];

const Comparison = () => {
  const scope = useReveal();

  return (
    <section ref={scope} className="py-24 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Compare"
          title="Why churches choose EkklésiasOne"
          subtitle="Most platforms nickel-and-dime you with add-ons and per-user fees. We keep it simple: everything included, one fair price."
        />

        <div data-reveal className="rounded-[2rem] border border-slate-200 shadow-lift overflow-hidden bg-white">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-cream border-b border-slate-200 px-6 sm:px-8 py-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] self-center">
              What you get
            </span>
            <span className="font-display font-bold text-primary text-center text-base sm:text-xl self-center">
              EkklésiasOne
            </span>
            <span className="font-display font-semibold text-slate-400 text-center text-base sm:text-xl self-center">
              The Others
            </span>
          </div>

          {rows.map((feature, i) => (
            <div
              key={feature}
              className={`grid grid-cols-[1.4fr_1fr_1fr] items-center px-6 sm:px-8 py-5 ${
                i !== rows.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <span className="font-semibold text-ink text-sm sm:text-base pr-4">{feature}</span>
              <span className="flex justify-center">
                <span className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Check size={17} className="text-emerald-600" />
                </span>
              </span>
              <span className="flex justify-center">
                <span className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                  <X size={17} className="text-rose-400" />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
