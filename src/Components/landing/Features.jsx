import {
  Users,
  CalendarDays,
  HandCoins,
  BarChart3,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import useReveal from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: Users,
    title: "People & Groups",
    description:
      "Organize your entire congregation with rich profiles, family connections, groups, and custom fields. Find anyone in seconds.",
    tint: "bg-primary/10 text-primary",
  },
  {
    icon: HandCoins,
    title: "Online Giving",
    description:
      "Accept tithes and offerings with secure online, mobile, and text-to-give options. Tax-ready statements, generated automatically.",
    tint: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: CalendarDays,
    title: "Events & Check-In",
    description:
      "Plan services and events with RSVPs, volunteer scheduling, room booking, and secure kids check-in — all from one calendar.",
    tint: "bg-secondary/10 text-secondary",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "Reach the right people at the right time with targeted email, SMS, and push notifications your congregation actually reads.",
    tint: "bg-sky-50 text-sky-600",
  },
  {
    icon: BarChart3,
    title: "Reports & Insights",
    description:
      "Real-time dashboards and custom reports reveal attendance trends, giving patterns, and growth metrics at a glance.",
    tint: "bg-amber-50 text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Security & Privacy",
    description:
      "Bank-level encryption, role-based permissions, automatic backups, and full GDPR compliance keep your data safe.",
    tint: "bg-rose-50 text-rose-500",
  },
];

const Features = () => {
  const scope = useReveal();

  return (
    <section ref={scope} id="features" className="py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Everything Included"
          title="All your church tools, in one simple app"
          subtitle="Stop juggling spreadsheets and disconnected apps. EkklésiasOne brings every ministry tool together in one place your whole team can use."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, tint }, i) => (
            <div
              key={title}
              data-reveal
              data-delay={`${(i % 3) * 0.1}`}
              className="group relative bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:border-primary/25 hover:shadow-lift hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${tint} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon size={26} />
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-3">
                {title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
