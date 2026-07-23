import { Star, MessageCircle, Import, Headset } from "lucide-react";
import useReveal from "../../hooks/useReveal";

const photo = (id, w = 400, h = 460) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}&h=${h}`;

const team = [
  photo("photo-1573497019940-1c28c88b4f3e"),
  photo("photo-1551836022-d5d88e9218df"),
  photo("photo-1600180758890-6b94519a8ba6"),
  photo("photo-1521737711867-e3b97375f902"),
];

const points = [
  { icon: Star, text: "4.9/5 average support rating" },
  { icon: MessageCircle, text: "Under 1 hour response time" },
  { icon: Import, text: "Free data migration, done for you" },
  { icon: Headset, text: "Real humans — no bots, no tickets lost" },
];

const Support = () => {
  const scope = useReveal();

  return (
    <section ref={scope} className="py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div
            data-reveal
            className="grid grid-cols-2 gap-4 sm:gap-5 max-w-md mx-auto lg:max-w-none w-full"
          >
            <img
              src={team[0]}
              alt="Support team member"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-soft"
            />
            <img
              src={team[1]}
              alt="Support team member"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-soft mt-8"
            />
            <img
              src={team[2]}
              alt="Support team member"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-soft -mt-8"
            />
            <img
              src={team[3]}
              alt="Support team member"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-soft"
            />
          </div>

          <div>
            <p
              data-reveal
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-semibold text-xs uppercase tracking-[0.15em] mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Real Support, Real People
            </p>
            <h2
              data-reveal
              className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-ink leading-[1.15] tracking-tight mb-6"
            >
              Unmatched customer service, from people who get ministry
            </h2>
            <p
              data-reveal
              data-delay="0.1"
              className="text-lg text-slate-600 leading-relaxed mb-9"
            >
              Our support team is made up of people who have served in real
              churches. When you call, you talk to someone who understands
              Sunday morning — not a script.
            </p>

            <div className="space-y-4">
              {points.map(({ icon: Icon, text }, i) => (
                <div
                  key={text}
                  data-reveal
                  data-delay={`${i * 0.08}`}
                  className="flex items-center gap-4 bg-cream border border-slate-100 rounded-2xl px-5 py-4"
                >
                  <span className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-secondary" />
                  </span>
                  <span className="font-semibold text-ink">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
