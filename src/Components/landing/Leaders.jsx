import useReveal from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=500&h=600`;

const leaders = [
  { role: "Senior Pastors", img: photo("photo-1560250097-0b93528c311a") },
  { role: "Church Admins", img: photo("photo-1573496359142-b8d87734a5a2") },
  { role: "Treasurers", img: photo("photo-1556157382-97eda2d62296") },
  { role: "Worship Leaders", img: photo("photo-1511632765486-a01980e01a18") },
  { role: "Kids Ministry", img: photo("photo-1544776193-352d25ca82cd") },
  { role: "Group Leaders", img: photo("photo-1522071820081-009f0129c71c") },
  { role: "Volunteers", img: photo("photo-1531427186611-ecfd6d936c79") },
  { role: "Members", img: photo("photo-1523803326055-9729b9e8ff2f") },
];

const Leaders = () => {
  const scope = useReveal();

  return (
    <section ref={scope} className="py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built For Everyone"
          title="Software for every church leader"
          subtitle="From the senior pastor to the newest volunteer — everyone gets the tools they need, with permissions that fit their role."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {leaders.map(({ role, img }, i) => (
            <div
              key={role}
              data-reveal
              data-delay={`${(i % 4) * 0.08}`}
              className="group relative aspect-square rounded-3xl overflow-hidden bg-slate-200 shadow-soft cursor-pointer"
            >
              <img
                src={img}
                alt={role}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-white font-display font-bold text-base sm:text-lg leading-tight">
                  {role}
                </p>
                <span className="block h-1 w-8 bg-secondary rounded-full mt-2 transition-all duration-300 group-hover:w-14" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaders;
