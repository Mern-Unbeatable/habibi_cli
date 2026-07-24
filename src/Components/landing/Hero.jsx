import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { CHURCH_LOGIN_URL, MEMBER_LOGIN_URL } from "../../constants/links";
import HERO_GROUP_IMAGE from "../../assets/Everything.png";
import ARCH_IMAGE from "../../assets/Arch.png";
import VECTOR_IMAGE from "../../assets/Vector.png";
import TextType from "../ui/TextType";
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

const HERO_BADGE_TEXT = [
  "The Intelligent Church Operating System",
  "The Intelligent Church Operating System",
  "The Intelligent Church Operating System ",
];
const ChurchArchGraphic = () => (
  <div className="absolute left-0 bottom-0 z-[1] flex items-end pointer-events-none select-none max-h-[90%]">
    <img
      src={ARCH_IMAGE}
      alt=""
      aria-hidden="true"
      className="w-[200px] sm:w-[240px] lg:w-[280px] xl:w-[300px] h-auto object-contain object-bottom shrink-0"
    />
    <img
      src={VECTOR_IMAGE}
      alt=""
      aria-hidden="true"
      className="w-[72px] sm:w-[88px] lg:w-[304px] xl:w-[312px] h-auto object-contain object-bottom shrink-0 -ml-2 sm:-ml-"
    />
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1C1A40] lg:flex lg:items-center">
      <ChurchArchGraphic />

      <div
        className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 pointer-events-none bg-gradient-to-t from-white from-0% via-white/60 via-40% to-transparent z-20"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        className="relative z-0 flex items-end justify-center mt-6 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 lg:w-[45vw] xl:w-[50vw] pointer-events-none"
      >
        <img
          src={HERO_GROUP_IMAGE}
          alt="Diverse church community standing together"
          className="w-full max-w-[520px] sm:max-w-[600px] lg:max-w-none lg:w-[115%] xl:w-[125%] h-auto object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
        />
      </motion.div>

      {/* Text — inside container only */}
      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <motion.div
          variants={copyContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-2xl text-left lg:text-left"
        >
          <motion.p
            variants={copyItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A535]/35 bg-[#C9A535]/6 text-[#C9A535] text-sm font-semibold tracking-wide mb-7"
          >
            <Sparkles size={16} aria-hidden="true" />
            <TextType
              as="span"
              text={HERO_BADGE_TEXT}
              typingSpeed={45}
              pauseDuration={1800}
              deletingSpeed={25}
              showCursor
              cursorCharacter="|"
              cursorClassName="text-[#C9A535]"
              className="lowercase sm:uppercase"
              textColors={["#C9A535"]}
              startOnVisible
              loop
            />
          </motion.p>
          <motion.h1
            variants={copyItem}
            className="font-marcellus font-normal text-white text-left text-3xl  leading-[1.5] md:leading-[1.1] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] tracking-tight mb-6"
          >
            Everything Your Church Needs.
            <br />
            One Powerful Platform.
          </motion.h1>

          <motion.p
            variants={copyItem}
            className="text-base sm:text-lg leading-relaxed max-w-xl mb-7 text-justify text-white/82"
          >
            Run your entire ministry from a single platform — people, giving,
            accounting, communications, volunteers, events, attendance, mobile
            app, AI automation, reporting, and more.
          </motion.p>

          <motion.ul
            variants={copyItem}
            className="space-y-2 mb-7 text-sm sm:text-base font-medium text-[#C9A535]"
          >
            {BULLETS.map((item) => (
              <li
                key={item}
                className="flex items-start md:items-center gap-2.5 justify-start md:justify-center text-[#FFFFFFE5] lg:justify-start"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0 bg-[#C9A535]" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.blockquote
            variants={copyItem}
            className="text-sm sm:text-base  leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 pl-4 border-l-2 border-[#C9A535] text-[#FFFFFFE5]"
          >
            Built to help churches spend less time managing software and more
            time building God&apos;s Kingdom.
          </motion.blockquote>

          <motion.div
            variants={copyItem}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
          >
            <a
              href={CHURCH_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-glow animate-shimmer group relative w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-base sm:text-lg bg-primary hover:bg-[#05a3bd] text-white shadow-[0_8px_28px_rgba(6,182,212,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] flex items-center justify-center gap-2 no-underline"
            >
              <span className="relative z-10">Book a Demo</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110"
              />
            </a>

            <a
              href={MEMBER_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-border-gradient animate-shimmer group relative w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-base sm:text-lg text-white hover:text-[#C9A535] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] flex items-center justify-center gap-1 no-underline"
            >
              <span className="relative z-10">See How It Works</span>
              <ChevronRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-12"
              />
            </a>
          </motion.div>

          <motion.p
            variants={copyItem}
            className="text-xs sm:text-sm flex items-center gap-1.5 justify-center lg:justify-start text-white"
          >
            <span className="text-[#C9A535]" aria-hidden="true">
              <MapPin size={16} />
            </span>
            Proudly Canadian. Built for Churches Worldwide.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
