import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CHURCH_LOGIN_URL, MEMBER_LOGIN_URL } from "../../constants/links";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=900&h=1100",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=900&h=1100",
  "https://images.unsplash.com/photo-1516280440502-a7f45778a082?auto=format&fit=crop&q=80&w=900&h=1100",
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=900&h=1100",
];

const EASE = [0.22, 0.61, 0.36, 1];

const copyContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const copyItem = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 xl:pt-20 xl:pb-0 xl:h-[calc(100svh-8.5rem)] xl:min-h-160 xl:flex xl:items-center bg-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#dcd5cc 1px, transparent 1px), linear-gradient(90deg, #dcd5cc 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative w-full container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <motion.div
            variants={copyContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.p
              variants={copyItem}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-700 mb-7"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              Trusted by 2,500+ churches worldwide
            </motion.p>

            <motion.h1
              variants={copyItem}
              className="font-display font-bold text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-6xl xl:text-[3.4rem] 2xl:text-6xl text-ink tracking-tight mb-6"
            >
              Ministry is your calling.
              <br />
              <span className="text-primary">Admin is ours.</span>
            </motion.h1>

            <motion.p
              variants={copyItem}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9 xl:mb-7"
            >
              EkklésiasOne brings your people, giving, events, and communication
              together in one beautifully simple platform — powerful enough for
              large churches, easy enough for any volunteer.
            </motion.p>

            <motion.div
              variants={copyItem}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-9 xl:mb-7"
            >
              <a
                href={CHURCH_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-semibold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 no-underline"
              >
                Get Started Free
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href={MEMBER_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-ink border border-slate-200 rounded-2xl font-semibold text-lg shadow-sm transition-all hover:-translate-y-0.5 flex items-center justify-center no-underline"
              >
                Member Login
              </a>
            </motion.div>

            <motion.div
              variants={copyItem}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm font-medium text-slate-500"
            >
              {["No setup fees", "Free data migration", "Cancel anytime"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-secondary" />
                    {item}
                  </span>
                ),
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
            className="relative max-w-md mx-auto lg:max-w-none xl:max-w-[24rem] 2xl:max-w-108 w-full"
          >
            {/* Top Left Cross Element */}
            <div className="absolute top-8 -left-10 z-0 opacity-40 rotate-[-15deg] pointer-events-none">
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-secondary"
              >
                <path
                  d="M12 2v20M6 8h12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Top Right Cross Element */}
            <div className="absolute top-24 -right-12 z-0 opacity-40 rotate-15 pointer-events-none">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary-dark"
              >
                <path
                  d="M12 2v20M6 8h12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="relative z-10 rounded-t-full rounded-b-[2.5rem] overflow-hidden border-8 border-white shadow-[0_32px_80px_-20px_rgb(59_21_60/0.35)] aspect-4/5 bg-slate-200">
              {HERO_IMAGES.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt="Church administrator using EkklésiasOne"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImg ? "opacity-100" : "opacity-0"
                  }`}
                  loading="eager"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
