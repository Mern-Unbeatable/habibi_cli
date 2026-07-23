import { MapPin, Check } from "lucide-react";
import useReveal from "../../hooks/useReveal";

const ProudlyCanadian = () => {
  const scope = useReveal();

  return (
    <section ref={scope} className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* Location Pin Icon */}
        <div
          data-reveal
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 border border-rose-100 text-rose-500 mb-5 shadow-xs"
        >
          <MapPin size={18} className="stroke-[2.2]" />
        </div>

        {/* Header Title */}
        <h2
          data-reveal
          className="font-marcellus font-normal text-3xl sm:text-4xl text-ink leading-tight mb-4"
        >
          Proudly Canadian
        </h2>

        {/* Description */}
        <p
          data-reveal
          data-delay="0.1"
          className="text-[#575757] font-normal text-base sm:text-[17px] leading-relaxed max-w-2xl mx-auto mb-8"
        >
          EkklésiasOne is built, hosted, and supported in Canada. Your
          congregation's data stays on Canadian soil — compliant with PIPEDA and
          provincial privacy laws. No data leaves Canadian jurisdiction.
        </p>

        {/* Feature Badges */}
        <div
          data-reveal
          data-delay="0.2"
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs text-[#6B6B8D] font-normal">
            <Check size={14} className="text-primary stroke-[2.5]" />
            <span>One System</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs text-[#6B6B8D] font-normal">
            <Check size={14} className="text-primary stroke-[2.5]" />
            <span>One Connected Ecosystem</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs  text-[#6B6B8D] font-normal">
            <Check size={14} className="text-primary stroke-[2.5]" />
            <span>One Platform</span>
          </div>
        </div>
      </div>

      {/* Bottom Border Line */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="border-b border-slate-100" />
      </div>
    </section>
  );
};

export default ProudlyCanadian;
