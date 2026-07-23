const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }) => {
  const alignment = align === "left" ? "text-left" : "text-center mx-auto";

  return (
    <div className={`max-w-3xl mb-14 lg:mb-16 ${alignment}`}>
      {eyebrow && (
        <p
          data-reveal
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-semibold text-xs uppercase tracking-[0.15em] mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          {eyebrow}
        </p>
      )}
      <h2
        data-reveal
        className="font-marcellus font-normal text-3xl sm:text-4xl lg:text-[2.75rem] text-ink leading-[1.15] tracking-tight mb-5"
      >
        {title}
      </h2>
      {subtitle && (
        <p data-reveal data-delay="0.1" className="text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
