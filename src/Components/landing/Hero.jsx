import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, HandCoins, Star, TrendingUp } from "lucide-react";
import { CHURCH_LOGIN_URL, MEMBER_LOGIN_URL } from "../../constants/links";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=900&h=1100";

const EASE = [0.22, 0.61, 0.36, 1];

const copyContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const copyItem = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const FloatCard = ({ className, delay, children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
    transition={{
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay, ease: EASE },
      y: { duration: 4.8, delay, repeat: Infinity, ease: "easeInOut" },
    }}
    className={`absolute bg-white rounded-2xl shadow-lift border border-slate-100 ${className}`}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 xl:pt-20 xl:pb-0 xl:h-[calc(100svh-8.5rem)] xl:min-h-[40rem] xl:flex xl:items-center bg-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#dcd5cc 1px, transparent 1px), linear-gradient(90deg, #dcd5cc 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
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
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
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
              {["No setup fees", "Free data migration", "Cancel anytime"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-secondary" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
            className="relative max-w-md mx-auto lg:max-w-none xl:max-w-[24rem] 2xl:max-w-[27rem] w-full"
          >
            <div className="relative rounded-t-full rounded-b-[2.5rem] overflow-hidden border-8 border-white shadow-[0_32px_80px_-20px_rgb(59_21_60_/_0.35)] aspect-[4/5] bg-slate-200">
              <img
                src={HERO_IMAGE}
                alt="Church administrator using EkklésiasOne"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <FloatCard delay={0.9} className="top-16 -right-2 sm:-right-6 px-4 py-3 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <HandCoins size={19} className="text-emerald-600" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink leading-tight">+$250.00</p>
                <p className="text-[11px] text-slate-400">New donation received</p>
              </div>
            </FloatCard>

            <FloatCard delay={1.05} className="top-1/2 -left-2 sm:-left-8 px-4 py-3 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users size={19} className="text-primary" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink leading-tight">412 checked in</p>
                <p className="text-[11px] text-slate-400">Sunday Service · 9:00 AM</p>
              </div>
            </FloatCard>

            <FloatCard delay={1.2} className="-bottom-6 left-1/2 -translate-x-1/2 px-5 py-3.5 flex items-center gap-4">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </span>
              <div className="flex items-center gap-1.5">
                <TrendingUp size={15} className="text-emerald-500" />
                <p className="text-sm font-bold text-ink whitespace-nowrap">4.9/5 from 2,500+ churches</p>
              </div>
            </FloatCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
