import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { CHURCH_LOGIN_URL, MEMBER_LOGIN_URL } from "../../constants/links";

const HERO_GROUP_IMAGE = "/hero-group.png";

const EASE = [0.22, 0.61, 0.36, 1];

const copyContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const copyItem = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const BULLETS = ["One Platform", "One Connected Ecosystem", "One System"];

const ChurchArchGraphic = () => (
  <svg
    className="absolute left-0 top-1/2 -translate-y-1/2 w-[180px] sm:w-[220px] lg:w-[260px] h-auto pointer-events-none select-none"
    viewBox="0 0 200 420"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M100 10 L100 400 M100 10 L55 90 M100 10 L145 90 M55 90 L55 400 M145 90 L145 400"
      stroke="#C9A535"
      strokeWidth="1.2"
      strokeOpacity="0.18"
      strokeLinecap="round"
    />
    <path
      d="M70 400 Q100 370 130 400"
      stroke="#C9A535"
      strokeWidth="1.2"
      strokeOpacity="0.18"
      strokeLinecap="round"
    />
  </svg>
);

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#1C1A40" }}
    >
      <ChurchArchGraphic />

      <div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.6) 40%, transparent 100%)",
        }}
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          <motion.div
            variants={copyContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center lg:text-left lg:pl-6 xl:pl-10"
          >
            <motion.p
              variants={copyItem}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold tracking-wide mb-7"
              style={{
                borderColor: "rgba(201,165,53,0.35)",
                color: "#C9A535",
                backgroundColor: "rgba(201,165,53,0.06)",
              }}
            >
              <span aria-hidden="true">✨</span>
              THE INTELLIGENT CHURCH OPERATING SYSTEM
            </motion.p>

            <motion.h1
              variants={copyItem}
              className="font-bold text-[2.4rem] leading-[1.1] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] tracking-tight mb-6"
              style={{ color: "#FFFFFF", fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Everything Your Church Needs.
              <br />
              One Powerful Platform.
            </motion.h1>

            <motion.p
              variants={copyItem}
              className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-7"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              Run your entire ministry from a single platform — people, giving, accounting,
              communications, volunteers, events, attendance, mobile app, AI automation,
              reporting, and more.
            </motion.p>

            <motion.ul
              variants={copyItem}
              className="space-y-2 mb-7 text-sm sm:text-base font-medium"
              style={{ color: "#C9A535" }}
            >
              {BULLETS.map((item) => (
                <li key={item} className="flex items-center gap-2.5 justify-center lg:justify-start">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "#C9A535" }}
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.blockquote
              variants={copyItem}
              className="text-sm sm:text-base italic leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 pl-4 border-l-2"
              style={{
                color: "rgba(255,255,255,0.65)",
                borderColor: "#C9A535",
              }}
            >
              Built to help churches spend less time managing software and more time building
              God&apos;s Kingdom.
            </motion.blockquote>

            <motion.div
              variants={copyItem}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href={CHURCH_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-base sm:text-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 no-underline"
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
                Book a Demo
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href={MEMBER_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-base sm:text-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-1 no-underline"
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.45)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#C9A535";
                  e.currentTarget.style.color = "#C9A535";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                See How It Works
                <ChevronRight size={16} />
              </a>
            </motion.div>

            <motion.p
              variants={copyItem}
              className="text-xs sm:text-sm flex items-center gap-1.5 justify-center lg:justify-start"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              <span style={{ color: "#C9A535" }} aria-hidden="true">
                📍
              </span>
              Proudly Canadian. Built for Churches Worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            className="relative flex items-end justify-center lg:justify-end"
          >
            <img
              src={HERO_GROUP_IMAGE}
              alt="Diverse church community standing together"
              className="relative z-10 w-full max-w-[520px] lg:max-w-none lg:w-[115%] xl:w-[120%] h-auto object-contain object-bottom"
              style={{
                maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
