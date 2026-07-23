import { Star } from "lucide-react";
import useReveal from "../../hooks/useReveal";

const row1 = [
  {
    quote:
      "EkklésiasOne replaced four separate tools we were paying for. The integrated giving and accounting alone saved us 15 hours a month.",
    name: "Pastor Michael Adeyemi",
    role: "Lead Pastor · New Life Church, Toronto",
    initial: "P",
  },
  {
    quote:
      "The onboarding team was incredible. We were fully migrated in two weeks. Our staff actually enjoys using the platform now.",
    name: "Jennifer Osei",
    role: "Church Administrator · Grace Community, Calgary",
    initial: "J",
  },
  {
    quote:
      "The mobile app alone has transformed how our congregation engages. Giving is up 23% since launch and attendance tracking is effortless.",
    name: "Pastor David Lin",
    role: "Executive Pastor · Harvest Fellowship, Vancouver",
    initial: "P",
  },
];

const row2 = [
  {
    quote:
      "As someone who came from corporate finance, the fund accounting in EkklésiasOne is the most rigorous I've seen in any church platform.",
    name: "Adeola Thompson",
    role: "Finance Director · Covenant Church, Ottawa",
    initial: "A",
  },
  {
    quote:
      "We were on four platforms before. Now it's one. Our volunteers love the app, our giving is transparent, and our team has peace of mind.",
    name: "Pastor Ruth Nakamura",
    role: "Senior Pastor · City Light Church, Edmonton",
    initial: "P",
  },
  {
    quote:
      "The AI automation handles our follow-up sequences, giving receipts, and volunteer reminders. It's like having a full admin team built in.",
    name: "Thomas Mensah",
    role: "Director of Operations · Kingdom Embassy, Montreal",
    initial: "T",
  },
];

const TestimonialCard = ({ quote, name, role, initial }) => (
  <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-[#1C1A40BF] text-sm leading-relaxed mb-6 font-normal">
        "{quote}"
      </p>
    </div>
    <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
      <div className="w-10 h-10 rounded-full bg-[#131433] text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-sm">
        {initial}
      </div>
      <div className="overflow-hidden">
        <p className="font-medium text-ink text-sm sm:text-base leading-tight truncate">
          {name}
        </p>
        <p className="text-xs text-slate-500 truncate mt-0.5">{role}</p>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = "left", duration = "40s" }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-2">
      <div
        className={`flex items-stretch gap-4 w-max ${
          direction === "right" ? "marquee-row-right" : "marquee-row-left"
        }`}
        style={{ "--marquee-duration": duration }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="w-85 sm:w-100 md:w-110 shrink-0 flex flex-col"
          >
            <TestimonialCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const scope = useReveal();

  return (
    <section
      ref={scope}
      id="testimonials"
      className="py-20 lg:py-24 bg-[#F5F5FA] overflow-hidden"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 mb-12 lg:mb-16 text-center">
        <p
          data-reveal
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-primary mb-3"
        >
          <span>☆</span> TESTIMONIALS
        </p>
        <h2
          data-reveal
          className="font-marcellus font-normal text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight tracking-tight"
        >
          Trusted by Church Leaders Across Canada
        </h2>
      </div>

      <div data-reveal className="relative max-w-[100vw]">
        {/* Soft edge fade out gradients */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 md:w-48 bg-linear-to-r from-[#F5F5FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 md:w-48 bg-linear-to-l from-[#F5F5FA] to-transparent z-10 pointer-events-none" />

        <div className="">
          {/* First row moves left to right */}
          <MarqueeRow items={row1} direction="right" duration="38s" />

          {/* Second row moves right to left */}
          <MarqueeRow items={row2} direction="left" duration="38s" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
