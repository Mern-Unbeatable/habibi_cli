import { CheckCircle2, LayoutGrid } from "lucide-react";
import useReveal from "../../hooks/useReveal";

const CHECKLIST = [
  "One login. One database. One source of truth.",
  "Zero integrations to maintain, zero data silos.",
  "Ministry-first workflows designed for real churches.",
];

const TrustedBy = () => {
  const scope = useReveal();

  return (
    <section ref={scope} className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="text-center lg:text-left">
            <p
              data-reveal
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] mb-6"
              style={{ color: "#06B6D4" }}
            >
              <LayoutGrid size={15} strokeWidth={2.5} />
              Platform Overview
            </p>

            <h2
              data-reveal
              className="font-bold text-[2rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl leading-[1.12] tracking-tight mb-6"
              style={{
                color: "#1C1A40",
                fontFamily: '"Playfair Display", Georgia, serif',
              }}
            >
              One Platform.
              <br />
              Endless Possibilities.
            </h2>

            <p
              data-reveal
              data-delay="0.08"
              className="text-base sm:text-lg leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0"
              style={{ color: "#475569" }}
            >
              Managing a ministry shouldn&apos;t mean juggling a dozen disconnected tools.
            </p>

            <p
              data-reveal
              data-delay="0.12"
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ color: "#475569" }}
            >
              With EkklésiasOne, everything—people, giving, events, communications, and
              more—lives in one unified system designed around how churches actually work.
            </p>

            <ul className="space-y-4">
              {CHECKLIST.map((item, i) => (
                <li
                  key={item}
                  data-reveal
                  data-delay={`${0.16 + i * 0.08}`}
                  className="flex items-start gap-3 text-left max-w-xl mx-auto lg:mx-0"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#06B6D4" }}
                  />
                  <span className="text-sm sm:text-base font-medium" style={{ color: "#1C1A40" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal data-delay="0.2" className="relative flex justify-center lg:justify-end">
            <img
              src="/platform-overview.png"
              alt="EkklésiasOne platform ecosystem diagram showing connected modules for people, giving, communication, operations, growth, and mobile experience"
              loading="lazy"
              className="w-full max-w-[640px] lg:max-w-none h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
