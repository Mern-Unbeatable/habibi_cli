import { UserCheck, Headphones, TrendingUp, Award } from "lucide-react";
import useReveal from "../../hooks/useReveal";

const features = [
  {
    icon: UserCheck,
    iconBg: "bg-[#06B6D415] text-[#06B6D4]",
    title: "Guided Onboarding",
    description:
      "Our dedicated onboarding team walks you through data migration, staff training, and a custom launch plan — at no extra cost.",
  },
  {
    icon: Headphones,
    iconBg: "bg-[#C9A53515] text-[#C9A535]",
    title: "Always-On Help",
    description:
      "Reach real humans via live chat, email, or phone. Our Canadian-based support team is available when your ministry needs it most.",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-[#A78BFA15] text-[#A78BFA]",
    title: "Grows With You",
    description:
      "As your congregation grows, EkklésiasOne scales with you. Upgrade plans seamlessly — your data and settings stay intact.",
  },
];

const WhiteGloveSupport = () => {
  const scope = useReveal();

  return (
    <section ref={scope} className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-18">
          <p
            data-reveal
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-normal text-primary mb-3"
          >
            <Award size={14} className="text-primary" />
            WHITE-GLOVE SUPPORT
          </p>
          <h2
            data-reveal
            className="font-marcellus font-normal text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight tracking-tight"
          >
            We're With You Every Step
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {features.map(({ icon: Icon, iconBg, title, description }, index) => (
            <div
              key={title}
              data-reveal
              data-delay={`${index * 0.1}`}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Badge */}
              <div
                className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-6`}
              >
                <Icon size={22} className="stroke-[2.2]" />
              </div>

              {/* Title */}
              <h3 className="font-marcellus font-normal text-xl sm:text-2xl text-ink mb-3">
                {title}
              </h3>

              {/* Description */}
              <p className="text-[#6B6B8D] text-sm sm:text-base leading-relaxed max-w-sm font-normal">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteGloveSupport;
