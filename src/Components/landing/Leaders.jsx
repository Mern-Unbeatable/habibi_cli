import { Smartphone } from "lucide-react";
import { FaGooglePlay } from "react-icons/fa";
import useReveal from "../../hooks/useReveal";
import ARCH_IMAGE from "../../assets/Arch.png";
import VECTOR_IMAGE from "../../assets/Vector.png";

const FEATURES = [
  "Secure Giving",
  "Daily Devotion",
  "Child Check-In",
  "Events",
  "Groups",
  "Digital Resource Centre",
];
const ChurchArchGraphic = () => (
  <div className="absolute left-[30%] sm:left-[35%] lg:left-[45%] bottom-0 z-1 flex items-end pointer-events-none select-none max-h-[90%]">
    <img
      src={ARCH_IMAGE}
      alt=""
      aria-hidden="true"
      className="w-47.5 sm:w-50 lg:w-57.5 xl:w-62.5 h-auto object-contain object-bottom shrink-0"
    />
    <img
      src={VECTOR_IMAGE}
      alt=""
      aria-hidden="true"
      className="w-17 sm:w-19 lg:w-22 xl:w-24 h-auto object-contain object-bottom shrink-0 -ml-2 sm:-ml-3"
    />
  </div>
);
const AppStoreButton = ({ platform }) => {
  const isApple = platform === "apple";

  return (
    <a
      href="#"
      className="flex items-center gap-1 px-3 md:px-5 py-2 md:py-3 rounded-xl border transition-all hover:-translate-y-0.5 no-underline"
      style={{
        backgroundColor: "rgba(255,255,255,0.06)",
        borderColor: "rgba(255,255,255,0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#C9A535";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
      }}
    >
      {isApple ? (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="#C9A535"
          aria-hidden="true"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.06 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <FaGooglePlay className="w-5 h-5 text-[#C9A535]" aria-hidden="true" />
      )}
      <div className="text-left">
        <p
          className="text-[10px] leading-none mb-0.5"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          {isApple ? "Download on the" : "Get it on"}
        </p>
        <p
          className="text-sm font-semibold leading-none"
          style={{ color: "#FFFFFF" }}
        >
          {isApple ? "App Store" : "Google Play"}
        </p>
      </div>
    </a>
  );
};

const Leaders = () => {
  const scope = useReveal();

  return (
    <section
      ref={scope}
      className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#1C1A40" }}
    >
      <ChurchArchGraphic />

      <div className="relative container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-16 items-center">
          <div className="text-left ">
            <p
              data-reveal
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] mb-6"
              style={{ color: "#C9A535" }}
            >
              <Smartphone size={15} strokeWidth={2.5} />
              Pocket Church
            </p>

            <h2
              data-reveal
              className="font-marcellus font-normal text-white text-[2rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl leading-[1.12] tracking-tight mb-6"
            >
              Your Church in Every Pocket
            </h2>

            <p
              data-reveal
              data-delay="0.08"
              className="text-base sm:text-lg text-justify leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              The Pocket Church mobile app gives your congregation a beautifully
              branded home for giving, devotionals, events, groups, and more —
              all connected to your EkklésiaOne platform in real time.
            </p>

            <div
              data-reveal
              data-delay="0.12"
              className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-4"
            >
              {FEATURES.map((feature) => (
                <span
                  key={feature}
                  className="px-2 md:px-4 py-1.5 md:py-3 rounded-full text-xs sm:text-sm font-medium border"
                  style={{
                    color: "#FFFFFF",
                    borderColor: "rgba(255,255,255,0.25)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>

            <div
              data-reveal
              data-delay="0.16"
              className="flex flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <AppStoreButton platform="apple" />
              <AppStoreButton platform="google" />
            </div>
          </div>

          <div
            data-reveal
            data-delay="0.2"
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src="/pocket-church-phones.png"
              alt="Pocket Church mobile app showing Give Securely and Daily Devotion screens"
              loading="lazy"
              className="relative z-10 w-full max-w-140 lg:max-w-none h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
