import {
  BarChart3,
  Calendar,
  Check,
  CheckCircle2,
  DollarSign,
  LayoutGrid,
  MessageCircle,
  Smartphone,
  Users,
} from "lucide-react";
import useReveal from "../../hooks/useReveal";

const PILLARS = [
  {
    title: "People & Care",
    icon: Users,
    color: "#06B6D4",
    iconBg: "rgba(6,182,212,0.12)",
    items: [
      { label: "GraceConnect Kids (Child Check-in)", highlight: true },
      { label: "PeopleHub", highlight: false },
      { label: "Community", highlight: false },
      { label: "Presence", highlight: false },
    ],
  },
  {
    title: "Giving & Finance",
    icon: DollarSign,
    color: "#C9A535",
    iconBg: "rgba(201,165,53,0.12)",
    items: [
      { label: "Generosity", highlight: false },
      { label: "The Ledger", highlight: true, highlightColor: "#C9A535" },
    ],
  },
  {
    title: "Communication & Engagement",
    icon: MessageCircle,
    color: "#8B5CF6",
    iconBg: "rgba(139,92,246,0.12)",
    items: [
      { label: "OneVoice", highlight: false },
      { label: "EventFlow", highlight: false },
      { label: "Digital Resource Centre", highlight: false },
    ],
  },
  {
    title: "Serving & Operations",
    icon: Calendar,
    color: "#10B981",
    iconBg: "rgba(16,185,129,0.12)",
    items: [
      { label: "ServiceFlow", highlight: false },
      { label: "Gatekeeper", highlight: false },
      { label: "AutoPilot", highlight: false },
    ],
  },
  {
    title: "Growth & Insight",
    icon: BarChart3,
    color: "#EC4899",
    iconBg: "rgba(236,72,153,0.12)",
    items: [
      { label: "Daily Manna", highlight: false },
      { label: "Insight", highlight: false },
    ],
  },
  {
    title: "Platform & Experience",
    icon: Smartphone,
    color: "#F59E0B",
    iconBg: "rgba(245,158,11,0.12)",
    items: [
      { label: "Pocket Church Mobile App", highlight: false },
      { label: "White-Glove", highlight: true, highlightColor: "#C9A535" },
    ],
  },
];

const VideoShowcase = () => {
  const scope = useReveal();

  return (
    <section
      ref={scope}
      id="capabilities"
      className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#F8F9FD" }}
    >
      <div className="relative container mx-auto ">
        <div className="text-left md:text-center mb-12 lg:mb-16">
          <p
            data-reveal
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] mb-5"
            style={{ color: "#06B6D4" }}
          >
            <LayoutGrid size={15} strokeWidth={2.5} />
            16 Capabilities
          </p>

          <h2
            data-reveal
            className="font-marcellus font-normal text-[2rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-[#1C1A40] leading-[1.12] tracking-tight max-w-3xl mx-auto"
          >
            Six Pillars of Ministry Excellence
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                data-reveal
                data-delay={`${i * 0.06}`}
                className="bg-white rounded-2xl border border-[#1C1A4012]/1 shadow p-6 sm:p-7"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: pillar.iconBg }}
                >
                  <Icon size={22} style={{ color: pillar.color }} />
                </div>

                <h3 className="font-marcellus font-normal text-lg sm:text-xl text-[#1C1A40] mb-4">
                  {pillar.title}
                </h3>

                <ul className="space-y-2.5">
                  {pillar.items.map((item) => {
                    const isHighlighted = item.highlight;
                    const textColor = isHighlighted
                      ? item.highlightColor || pillar.color
                      : "#64748B";

                    return (
                      <li key={item.label} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          className="shrink-0 mt-0.5"
                          style={{ color: pillar.color }}
                        />
                        <span
                          className="text-sm sm:text-[0.95rem] leading-snug"
                          style={{ color: textColor }}
                        >
                          {item.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
