import { Church } from "lucide-react";

const churches = [
  "Grace Community",
  "First Baptist",
  "New Life Assembly",
  "Harvest Center",
  "Faith Chapel",
  "Calvary Bible",
  "Living Water",
  "Cornerstone",
];

const TrustedBy = () => {
  const track = [...churches, ...churches];

  return (
    <section className="py-14 xl:py-8 bg-white border-b border-slate-100 overflow-hidden">
      <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-9 xl:mb-6 px-5">
        Trusted by over 2,500 churches worldwide
      </p>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex min-w-max items-center" style={{ "--marquee-duration": "32s" }}>
          {track.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2.5 mx-9 opacity-50 hover:opacity-100 transition-opacity cursor-default"
            >
              <Church size={20} className="text-primary" />
              <span className="font-display font-semibold text-lg text-ink whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
