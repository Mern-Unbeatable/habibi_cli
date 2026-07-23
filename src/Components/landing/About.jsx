import { Heart, Eye, Shield, Zap } from "lucide-react";
import useReveal from "../../hooks/useReveal";

const stats = [
  { value: "2,500+", label: "Churches Served" },
  { value: "150k+", label: "Members Managed" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "4.9/5", label: "Customer Rating" },
];

const values = [
  {
    icon: Heart,
    title: "People First",
    description:
      "Built by church leaders, for church leaders. We understand ministry because we live it.",
  },
  {
    icon: Eye,
    title: "Radical Simplicity",
    description:
      "Powerful features wrapped in an interface anyone can use — no training required.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Bank-level encryption and GDPR compliance keep your congregation's data private.",
  },
  {
    icon: Zap,
    title: "Always Improving",
    description:
      "New features ship every month, shaped directly by feedback from real churches.",
  },
];

const About = () => {
  const scope = useReveal();

  return (
    <section ref={scope} id="about" className="py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">
          <div>
            <p
              data-reveal
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-semibold text-xs uppercase tracking-[0.15em] mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Our Story
            </p>
            <h2
              data-reveal
              className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-ink leading-[1.15] tracking-tight mb-6"
            >
              Built by church leaders,
              <br />
              <span className="text-primary">for church leaders.</span>
            </h2>
            <div
              data-reveal
              data-delay="0.1"
              className="space-y-5 text-lg text-slate-600 leading-relaxed"
            >
              <p>
                EkklésiasOne was born from a simple belief: church software
                should empower ministry, not complicate it. Too many churches
                waste hours every week wrestling with spreadsheets and
                disconnected tools.
              </p>
              <p>
                So we partnered with pastors, administrators, and volunteers to
                build a platform that truly understands the local church. Just
                as the early church gathered in unity, we bring all your
                ministry tools together into one seamless experience.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                data-reveal
                data-delay={`${(i % 2) * 0.1}`}
                className="bg-cream rounded-3xl p-7 border border-slate-100 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary" />
                </div>
                <h4 className="font-display font-bold text-lg text-ink mb-2">
                  {title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-3xl overflow-hidden border border-slate-200"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white py-10 px-6 text-center">
              <p className="font-display font-bold text-4xl text-primary mb-2">
                {value}
              </p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.12em]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
