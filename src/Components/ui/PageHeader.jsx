import { useEffect, useRef } from "react";
import gsap from "gsap";

const PageHeader = ({ eyebrow, title, subtitle }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".header-content > *", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#dcd5cc 1px, transparent 1px), linear-gradient(90deg, #dcd5cc 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="header-content relative z-10 max-w-4xl mx-auto text-center px-5">
        {eyebrow && (
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-primary font-semibold text-xs uppercase tracking-[0.15em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.1] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
