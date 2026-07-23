import { ArrowRight, Check } from "lucide-react";
import useReveal from "../../hooks/useReveal";
import { CHURCH_LOGIN_URL } from "../../constants/links";

const CTA = () => {
  const scope = useReveal();

  return (
    <section
      ref={scope}
      className="relative py-20 sm:py-28 bg-[#0A0D24] text-white overflow-hidden"
    >
      {/* Background Image from public */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/ctabg.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>

      {/* Bottom primary tint + soft blur glow */}
      <div
        className="absolute inset-x-0 bottom-0 z-1 h-[60%] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to top, black 30%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-linear-to-t from-primary/1.5 via-primary/1 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] max-w-3xl h-56 bg-primary blur-[120px] opacity-8" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div
          data-reveal
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/4 border border-white/15 text-slate-300 text-xs font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Ready when you are</span>
        </div>

        {/* Headline */}
        <h2
          data-reveal
          className="font-marcellus font-normal text-4xl sm:text-5xl lg:text-6xl text-white text-center leading-[1.15] mb-5 tracking-tight"
        >
          Bring Your Whole Church
          <br />
          <span className="text-[#d4af37]">Into One Place.</span>
        </h2>

        {/* Subtitle */}
        <p
          data-reveal
          data-delay="0.1"
          className="text-white font-inter max-w-xl mx-auto text-center text-sm sm:text-base leading-relaxed mb-12 opacity-90 font-normal"
        >
          See why churches are leaving their patchwork of apps behind for the
          one platform that does it all.
        </p>

        {/* Limited Time Offer Box */}
        <div
          data-reveal
          data-delay="0.2"
          className="relative max-w-xl mx-auto bg-[#12162E]  rounded-2xl sm:rounded-3xl p-7 sm:p-10 text-center shadow-2xl backdrop-blur-md mb-10 overflow-hidden"
        >
          <p className="text-[#d4af37] font-semibold text-xs uppercase tracking-widest mb-3">
            LIMITED-TIME OFFER
          </p>

          <h3 className="font-marcellus font-normal text-2xl sm:text-3xl text-white mb-3">
            Start Your Free 30-Day Demo
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm mb-7">
            No credit card required · Full platform access · White-glove
            onboarding included
          </p>

          <a
            href={CHURCH_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#AA8E3C] hover:brightness-110 text-gray-200 font-normal text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-95 no-underline cursor-pointer"
          >
            Claim Your 30-Day Demo
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Action Buttons */}
        <div
          data-reveal
          data-delay="0.3"
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href={CHURCH_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-[14px] bg-primary hover:bg-primary/90 text-gray-200 font-normal text-sm inline-flex items-center gap-2 shadow-md shadow-primary/25 transition-all no-underline"
          >
            Book a Demo
            <ArrowRight size={15} />
          </a>
          <a
            href="/contact"
            className="px-6 py-2.5 rounded-full border border-[#374151] text-gray-200 hover:bg-white/5 font-normal text-sm inline-flex items-center gap-2 transition-all no-underline"
          >
            Talk to Our Team
          </a>
        </div>

        {/* Bottom Line & Badges */}
        <div className="w-full max-w-2xl mx-auto border-t border-white/10 pt-8">
          <div
            data-reveal
            data-delay="0.4"
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 font-normal"
          >
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-primary stroke-[2.5]" />
              One System
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-primary stroke-[2.5]" />
              One Connected Ecosystem
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-primary stroke-[2.5]" />
              One Platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
