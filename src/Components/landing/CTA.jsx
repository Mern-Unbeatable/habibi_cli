import { ArrowRight } from "lucide-react";
import useReveal from "../../hooks/useReveal";
import { CHURCH_LOGIN_URL, MEMBER_LOGIN_URL } from "../../constants/links";

const CTA = () => {
  const scope = useReveal();

  return (
    <section ref={scope} className="relative py-24 lg:py-28 bg-primary overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-24 w-[26rem] h-[26rem] border-[3rem] border-white/5 rounded-full" />
        <div className="absolute -bottom-40 -left-24 w-[26rem] h-[26rem] border-[3rem] border-white/5 rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center text-white">
        <h2 data-reveal className="font-display font-bold text-4xl sm:text-5xl leading-[1.15] tracking-tight mb-6">
          Ready to spend less time on admin
          <br className="hidden sm:block" /> and more time on ministry?
        </h2>
        <p data-reveal data-delay="0.1" className="text-lg sm:text-xl text-white/75 mb-11 max-w-2xl mx-auto leading-relaxed">
          Join 2,500+ churches already using EkklésiasOne. Set up takes minutes,
          and our team migrates your data for free.
        </p>

        <div data-reveal data-delay="0.2" className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CHURCH_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 bg-white text-primary hover:bg-cream rounded-2xl font-bold text-lg shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 no-underline"
          >
            Start Your Free Trial
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={MEMBER_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border-2 border-white/25 text-white hover:bg-white/10 hover:border-white/50 rounded-2xl font-bold text-lg transition-all flex items-center justify-center no-underline"
          >
            Member Login
          </a>
        </div>

        <p data-reveal data-delay="0.3" className="mt-8 text-sm text-white/50">
          No credit card required · Free data migration · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
