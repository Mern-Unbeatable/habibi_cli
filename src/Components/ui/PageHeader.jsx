import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] } },
};

const PageHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-cream overflow-hidden">
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

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center px-5"
      >
        {eyebrow && (
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-primary font-semibold text-xs uppercase tracking-[0.15em] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          variants={item}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.1] mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default PageHeader;
