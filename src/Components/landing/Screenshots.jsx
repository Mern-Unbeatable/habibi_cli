import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  CalendarDays,
  HandCoins,
  BarChart3,
  CheckCircle2,
  Search,
  TrendingUp,
} from "lucide-react";
import useReveal from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

const people = [
  {
    initials: "DM",
    name: "David Mitchell",
    detail: "Elder · Mitchell Family",
    tag: "Leader",
  },
  {
    initials: "ST",
    name: "Sarah Thompson",
    detail: "Worship Team · Alto",
    tag: "Volunteer",
  },
  {
    initials: "JO",
    name: "James Okafor",
    detail: "New Member · Family of 4",
    tag: "New",
  },
  {
    initials: "AL",
    name: "Ana Lopez",
    detail: "Youth Ministry",
    tag: "Volunteer",
  },
];

const events = [
  {
    day: "SUN",
    date: "21",
    title: "Sunday Worship Service",
    detail: "9:00 AM · Main Hall",
    color: "border-primary",
  },
  {
    day: "WED",
    date: "24",
    title: "Midweek Bible Study",
    detail: "7:00 PM · Room 204",
    color: "border-secondary",
  },
  {
    day: "SAT",
    date: "27",
    title: "Community Outreach",
    detail: "10:00 AM · Downtown",
    color: "border-emerald-500",
  },
];

const givingRows = [
  { method: "Online Giving", amount: "$14,270", pct: 62 },
  { method: "Text-to-Give", amount: "$5,860", pct: 26 },
  { method: "In-Person", amount: "$4,250", pct: 12 },
];

const reportBars = [35, 52, 44, 66, 58, 80, 72, 90];

const PeopleMock = () => (
  <div className="p-6">
    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 mb-5">
      <Search size={15} className="text-slate-400" />
      <span className="text-sm text-slate-400">Search 1,284 members...</span>
    </div>
    <div className="space-y-3">
      {people.map(({ initials, name, detail, tag }) => (
        <div
          key={name}
          className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl p-3 shadow-sm"
        >
          <span className="w-10 h-10 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
            {initials}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-ink truncate">{name}</p>
            <p className="text-xs text-slate-400 truncate">{detail}</p>
          </div>
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
              tag === "New"
                ? "bg-secondary/10 text-secondary"
                : "bg-primary/10 text-primary"
            }`}
          >
            {tag}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const EventsMock = () => (
  <div className="p-6">
    <div className="flex items-center justify-between mb-5">
      <p className="font-display font-bold text-ink">June 2026</p>
      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg">
        + New Event
      </span>
    </div>
    <div className="space-y-3">
      {events.map(({ day, date, title, detail, color }) => (
        <div
          key={title}
          className={`flex items-center gap-4 bg-white border-l-4 ${color} border-y border-r border-slate-100 rounded-xl p-4 shadow-sm`}
        >
          <div className="text-center shrink-0 w-10">
            <p className="text-[10px] font-bold text-slate-400">{day}</p>
            <p className="font-display font-bold text-xl text-ink leading-none">
              {date}
            </p>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink truncate">{title}</p>
            <p className="text-xs text-slate-400 truncate">{detail}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const GivingMock = () => (
  <div className="p-6">
    <div className="bg-primary rounded-2xl p-5 text-white mb-5">
      <p className="text-xs text-white/70 mb-1">Total Giving · June</p>
      <p className="font-display font-bold text-3xl">$24,380</p>
      <p className="text-xs text-emerald-300 font-semibold mt-1 flex items-center gap-1">
        <TrendingUp size={13} /> +18% from last month
      </p>
    </div>
    <div className="space-y-4">
      {givingRows.map(({ method, amount, pct }) => (
        <div key={method}>
          <div className="flex justify-between text-sm mb-1.5">
            <span className="font-semibold text-ink">{method}</span>
            <span className="text-slate-500">{amount}</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ReportsMock = () => (
  <div className="p-6">
    <div className="flex items-center justify-between mb-5">
      <div>
        <p className="font-display font-bold text-ink">Attendance Trend</p>
        <p className="text-xs text-slate-400">Last 8 Sundays</p>
      </div>
      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
        ↑ Growing
      </span>
    </div>
    <div className="flex items-end gap-2.5 h-40 mb-2">
      {reportBars.map((height, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-lg ${i === 7 ? "bg-secondary" : "bg-primary/15"}`}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
    <div className="grid grid-cols-2 gap-3 mt-4">
      <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
        <p className="text-xs text-slate-400">Avg. Attendance</p>
        <p className="font-display font-bold text-lg text-ink">386</p>
      </div>
      <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
        <p className="text-xs text-slate-400">Growth Rate</p>
        <p className="font-display font-bold text-lg text-ink">+9.4%</p>
      </div>
    </div>
  </div>
);

const tabs = [
  {
    id: "people",
    label: "People",
    icon: Users,
    heading: "Know every member personally",
    description:
      "Manage detailed profiles, family connections, and group memberships. Track pastoral care, notes, and milestones — all in one place.",
    highlights: [
      "Unlimited member profiles",
      "Family linking & grouping",
      "Custom fields & smart tags",
    ],
    Mock: PeopleMock,
  },
  {
    id: "events",
    label: "Events",
    icon: CalendarDays,
    heading: "Plan events that bring people together",
    description:
      "From Sunday services to community outreach, manage every event with RSVPs, volunteer scheduling, and automated reminders.",
    highlights: [
      "Drag-and-drop calendar",
      "Volunteer scheduling",
      "Room & resource booking",
    ],
    Mock: EventsMock,
  },
  {
    id: "giving",
    label: "Giving",
    icon: HandCoins,
    heading: "Make generosity simple and secure",
    description:
      "Enable online, mobile, and text-to-give. Automatically generate statements, track pledges, and watch contributions in real time.",
    highlights: [
      "Multiple giving methods",
      "Recurring donations",
      "Tax-ready statements",
    ],
    Mock: GivingMock,
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    heading: "Make data-driven ministry decisions",
    description:
      "Beautiful dashboards and custom reports give you deep insight into attendance trends, giving patterns, and member engagement.",
    highlights: [
      "Visual dashboards",
      "Custom report builder",
      "Growth trend analysis",
    ],
    Mock: ReportsMock,
  },
];

const Screenshots = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scope = useReveal();

  const {
    icon: Icon,
    heading,
    description,
    highlights,
    Mock,
  } = tabs[activeTab];

  return (
    <section ref={scope} id="screenshots" className="py-24 lg:py-28 bg-cream">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Tour"
          title="See exactly how it works"
          subtitle="A quick look inside the platform. Click through the tabs to explore what your team gets on day one."
        />

        <div
          data-reveal
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {tabs.map((tab, i) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  i === activeTab
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-primary/30 hover:text-primary"
                }`}
              >
                <TabIcon size={17} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          data-reveal
          className="bg-white rounded-4xl border border-slate-200 shadow-lift overflow-hidden"
        >
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            className="grid lg:grid-cols-2"
          >
            <div className="p-10 lg:p-14 flex flex-col justify-center order-2 lg:order-1">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-7">
                <Icon size={26} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-5">
                {heading}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {description}
              </p>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-secondary shrink-0"
                    />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cream p-8 lg:p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-l border-slate-100 order-1 lg:order-2">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-lift border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <Mock />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
