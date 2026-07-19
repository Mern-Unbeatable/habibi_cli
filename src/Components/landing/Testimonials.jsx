import { Star } from "lucide-react";
import useReveal from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

const avatar = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=120&h=120`;

const columns = [
  [
    {
      quote:
        "EkklésiasOne completely transformed how we run our church. What used to take our staff hours every week now takes minutes.",
      name: "Pastor David Mitchell",
      role: "Senior Pastor · Grace Community",
      img: avatar("photo-1560250097-0b93528c311a"),
    },
    {
      quote:
        "The giving platform paid for itself within the first month. We saw a 40% increase in online giving after switching.",
      name: "Sarah Thompson",
      role: "Administrator · New Life Assembly",
      img: avatar("photo-1573496359142-b8d87734a5a2"),
    },
    {
      quote:
        "Our older volunteers picked it up in five minutes. No training sessions needed — it just makes sense.",
      name: "Maria Garcia",
      role: "Volunteer Coordinator · Harvest Center",
      img: avatar("photo-1580489944761-15a19d654956"),
    },
  ],
  [
    {
      quote:
        "As a small church, we needed something affordable yet powerful. EkklésiasOne delivers enterprise features at a price we can afford.",
      name: "Rev. James Okafor",
      role: "Lead Pastor · Faith Chapel",
      img: avatar("photo-1507003211169-0a1dd7228f2d"),
    },
    {
      quote:
        "Anytime we have a question, the support team responds almost instantly. They truly understand ministry.",
      name: "James Wilson",
      role: "Executive Pastor · Cornerstone",
      img: avatar("photo-1472099645785-5658abf4ff4e"),
    },
    {
      quote:
        "The automated reports and event check-ins save our admin team at least ten hours every single week.",
      name: "David Chen",
      role: "Operations Director · Living Water",
      img: avatar("photo-1500648767791-00dcc994a43e"),
    },
  ],
  [
    {
      quote:
        "Switching was the best decision we made all year. Data migration was handled for us, start to finish.",
      name: "Emily Carter",
      role: "Office Manager · Calvary Bible",
      img: avatar("photo-1438761681033-6461ffad8d80"),
    },
    {
      quote:
        "Our members love the portal. Giving statements, event sign-ups, group updates — everything in one place.",
      name: "Hannah Brooks",
      role: "Connections Pastor · The Bridge",
      img: avatar("photo-1544005313-94ddf0286df2"),
    },
    {
      quote:
        "I manage three campuses from a single dashboard. I honestly can't imagine going back to spreadsheets.",
      name: "Michael Reeves",
      role: "Campus Director · City Light Church",
      img: avatar("photo-1506794778202-cad84cf45f1d"),
    },
  ],
];

const ratings = [
  { platform: "Capterra", score: "4.9" },
  { platform: "GetApp", score: "4.8" },
  { platform: "G2", score: "Leader" },
];

const TestimonialCard = ({ quote, name, role, img }) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-soft p-7">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
    <p className="text-slate-700 leading-relaxed mb-6">"{quote}"</p>
    <div className="flex items-center gap-3.5">
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="w-11 h-11 rounded-full object-cover border-2 border-white shadow"
      />
      <div>
        <p className="font-semibold text-ink text-sm">{name}</p>
        <p className="text-xs text-slate-500">{role}</p>
      </div>
    </div>
  </div>
);

const MarqueeColumn = ({ items, direction, className = "", duration = "45s" }) => (
  <div className={`h-full overflow-hidden ${className}`}>
    <div
      className={`flex flex-col ${direction === "down" ? "marquee-col-down" : "marquee-col-up"}`}
      style={{ "--marquee-duration": duration }}
    >
      {[...items, ...items].map((t, i) => (
        <div key={`${t.name}-${i}`} className="pb-6">
          <TestimonialCard {...t} />
        </div>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const scope = useReveal();

  return (
    <section ref={scope} id="testimonials" className="py-24 lg:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Why churches love EkklésiasOne"
          subtitle="Don't take our word for it — here's what church leaders say after making the switch."
        />

        <div data-reveal className="flex flex-wrap justify-center gap-4 mb-14">
          {ratings.map(({ platform, score }) => (
            <div
              key={platform}
              className="bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm font-bold text-ink flex items-center gap-2.5"
            >
              <Star size={15} className="text-amber-400 fill-amber-400" />
              {platform} <span className="text-primary">{score}</span>
            </div>
          ))}
        </div>

        <div data-reveal className="relative h-[38rem] lg:h-[44rem]">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            <MarqueeColumn items={columns[0]} direction="up" duration="42s" />
            <MarqueeColumn items={columns[1]} direction="down" duration="50s" className="hidden md:block" />
            <MarqueeColumn items={columns[2]} direction="up" duration="46s" className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
