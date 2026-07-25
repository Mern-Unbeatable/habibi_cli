// import { useState } from "react";
// import { ArrowRight, Bookmark, Check, Star, X } from "lucide-react";
// import useReveal from "../../hooks/useReveal";
// import MigrationModal from "./MigrationModal";

// const COMPARISONS = [
//   {
//     category: "ARCHITECTURE",
//     feature: "Unified All-in-One Database",
//     ekklesia: {
//       main: "Fully Integrated & Included",
//       highlight: "Zero data silos or duplicate profiles",
//     },
//     typical: "Patchwork of 4-6 separate apps with sync errors",
//   },
//   {
//     category: "FINANCE",
//     feature: "Integrated Fund Accounting & CRA Receipts",
//     ekklesia: {
//       main: "Fully Integrated & Included",
//       highlight: "1-Click automated tax receipt dispatch",
//     },
//     typical:
//       "Requires extra QuickBooks subscription & manual spreadsheet export",
//   },
//   {
//     category: "INTELLIGENCE",
//     feature: "Native AI Ministry Assistant",
//     ekklesia: {
//       main: "Fully Integrated & Included",
//       highlight: "Natural language reporting & automated care suggestions",
//     },
//     typical: "Not available or legacy add-on",
//   },
//   {
//     category: "MOBILE",
//     feature: "Custom Branded Pocket Church Mobile App",
//     ekklesia: {
//       main: "Included in all plans",
//       highlight: "Full white-label congregation app",
//     },
//     typical: "$199/mo extra add-on or generic shared app",
//   },
//   {
//     category: "PRICING",
//     feature: "Transparent All-Inclusive Pricing",
//     ekklesia: {
//       main: "Single predictable tier, zero hidden module fees",
//       highlight: "30-40% average cost savings",
//     },
//     typical: "Module add-ons per feature (Giving + App + SMS fees)",
//   },
//   {
//     category: "SECURITY",
//     feature: "Canadian Data Sovereignty & PIPEDA Compliance",
//     ekklesia: {
//       main: "Fully Integrated & Included",
//       highlight: "Data stored securely in Canadian data centres",
//     },
//     typical: "US-hosted data with limited local compliance",
//   },
//   {
//     category: "ONBOARDING",
//     feature: "Dedicated White-Glove Data Migration",
//     ekklesia: {
//       main: "Included for free with dedicated migration engineer",
//       highlight: "100% data fidelity guarantee",
//     },
//     typical: "Do-it-yourself CSV import with formatting headaches",
//   },
// ];

// const EkklesiaCell = ({ main, highlight }) => (
//   <div className="rounded-xl border border-[#2DD4BF]/30 bg-[#10182B]/85 p-4 h-full flex flex-col justify-center transition-all duration-200 shadow-[#2DD4BF4D]/25 shadow-md">
//     <div className="flex items-start gap-2.5 mb-1.5">
//       <div className="w-5 h-5 rounded-full bg-[#06B6D4]/20 flex items-center justify-center shrink-0 mt-0.5">
//         <Check size={13} strokeWidth={3} className="text-cyan-400" />
//       </div>
//       <span className="text-sm font-semibold leading-snug text-white">
//         {main}
//       </span>
//     </div>
//     <div className="flex items-center gap-1.5 pl-7">
//       <Star size={12} className="shrink-0 text-[#FACC15] fill-yellow-500" />
//       <span className="text-[11px] sm:text-xs font-normal leading-tight text-[#FACC15]">
//         {highlight}
//       </span>
//     </div>
//   </div>
// );

// const TypicalCell = ({ text }) => (
//   <div className="rounded-xl border border-white/[0.07] bg-[#131725]/60 p-4 h-full flex items-center">
//     <div className="flex items-start gap-2.5">
//       <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/25 flex items-center justify-center shrink-0 mt-0.5">
//         <X size={12} strokeWidth={2.5} className="text-red-400" />
//       </div>
//       <span className="text-xs sm:text-sm font-normal leading-snug text-[#F4F4F4]">
//         {text}
//       </span>
//     </div>
//   </div>
// );

// const Features = () => {
//   const scope = useReveal();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <section
//       ref={scope}
//       id="features"
//       className="relative py-14 md:py-20 overflow-hidden bg-[#F4F6F9]"
//     >
//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12 lg:mb-14">
//           <p
//             data-reveal
//             className="inline-flex items-center gap-1.5 text-xs font-normal uppercase tracking-[0.2em] mb-4 text-[#00C4D4]"
//           >
//             <Bookmark size={14} strokeWidth={2.5} className="shrink-0" />
//             WHAT MAKES US DIFFERENT
//           </p>

//           <h2
//             data-reveal
//             className="font-serif font-medium text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.15] tracking-tight mb-4 max-w-3xl mx-auto text-[#0F172A]"
//           >
//             EkklésiaOne vs Typical Church Software
//           </h2>

//           <p
//             data-reveal
//             data-delay="0.08"
//             className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto text-slate-500"
//           >
//             Most church platforms bolt modules together and charge per feature.
//             EkklésiaOne is built as one — no stitching required.
//           </p>
//         </div>

//         {/* Main Comparison Card */}
//         <div
//           data-reveal
//           data-delay="0.12"
//           className="rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative bg-[#0F172A]"
//         >
//           {/* Table Column Headers (Desktop) */}
//           <div className="hidden lg:grid grid-cols-[1.3fr_1fr_1fr] gap-5 mb-6 px-1 items-center">
//             <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
//               PLATFORM FEATURE / CAPABILITY
//             </p>
//             <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
//               EKKLESIAONE STANDARD
//             </p>
//             <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
//               TYPICAL CHURCH SOFTWARE
//             </p>
//           </div>

//           {/* Rows */}
//           <div className="space-y-4">
//             {COMPARISONS.map((row) => (
//               <div
//                 key={row.feature}
//                 className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr] gap-3 lg:gap-5 items-stretch"
//               >
//                 {/* Column 1: Feature Title & Category */}
//                 <div className="flex flex-col justify-center py-1 lg:py-0">
//                   <h3 className="font-semibold text-base sm:text-[17px] leading-snug text-white mb-0.5">
//                     {row.feature}
//                   </h3>
//                   <span className="text-[10px] font-normal uppercase tracking-[0.18em] text-[#98C2FF]">
//                     {row.category}
//                   </span>
//                 </div>

//                 {/* Column 2: EkklésiaOne Standard */}
//                 <div>
//                   <div className="lg:hidden mb-1">
//                     <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00C4D4]">
//                       EkklésiaOne Standard
//                     </span>
//                   </div>
//                   <EkklesiaCell
//                     main={row.ekklesia.main}
//                     highlight={row.ekklesia.highlight}
//                   />
//                 </div>

//                 {/* Column 3: Typical Church Software */}
//                 <div>
//                   <div className="lg:hidden mb-1">
//                     <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
//                       Typical Church Software
//                     </span>
//                   </div>
//                   <TypicalCell text={row.typical} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Action Button */}
//         <div
//           data-reveal
//           data-delay="0.2"
//           className="flex justify-center mt-8 sm:mt-10 lg:mt-12"
//         >
//           <button
//             type="button"
//             onClick={() => setIsModalOpen(true)}
//             className="group inline-flex items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-normal text-sm text-white bg-[#06B6D4] shadow-[0_8px_25px_rgba(0,196,212,0.45)] hover:shadow-[0_12px_30px_rgba(0,196,212,0.6)] transition-all duration-300 hover:scale-105 cursor-pointer"
//           >
//             See how Easy Migration Is
//             <ArrowRight
//               size={18}
//               className="transition-transform group-hover:translate-x-1"
//             />
//           </button>
//         </div>

//         {/* Modal */}
//         <MigrationModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//         />
//       </div>
//     </section>
//   );
// };

// export default Features;

import { useState } from "react";
import { ArrowRight, Bookmark, Check, Star, X } from "lucide-react";
import useReveal from "../../hooks/useReveal";
import MigrationModal from "./MigrationModal";

const COMPARISONS = [
  {
    category: "ARCHITECTURE",
    feature: "Unified All-in-One Database",
    ekklesia: {
      main: "Fully Integrated & Included",
      highlight: "Zero data silos or duplicate profiles",
    },
    typical: "Patchwork of 4-6 separate apps with sync errors",
  },
  {
    category: "FINANCE",
    feature: "Integrated Fund Accounting & CRA Receipts",
    ekklesia: {
      main: "Fully Integrated & Included",
      highlight: "1-Click automated tax receipt dispatch",
    },
    typical:
      "Requires extra QuickBooks subscription & manual spreadsheet export",
  },
  {
    category: "INTELLIGENCE",
    feature: "Native AI Ministry Assistant",
    ekklesia: {
      main: "Fully Integrated & Included",
      highlight: "Natural language reporting & automated care suggestions",
    },
    typical: "Not available or legacy add-on",
  },
  {
    category: "MOBILE",
    feature: "Custom Branded Pocket Church Mobile App",
    ekklesia: {
      main: "Included in all plans",
      highlight: "Full white-label congregation app",
    },
    typical: "$199/mo extra add-on or generic shared app",
  },
  {
    category: "PRICING",
    feature: "Transparent All-Inclusive Pricing",
    ekklesia: {
      main: "Single predictable tier, zero hidden module fees",
      highlight: "30-40% average cost savings",
    },
    typical: "Module add-ons per feature (Giving + App + SMS fees)",
  },
  {
    category: "SECURITY",
    feature: "Canadian Data Sovereignty & PIPEDA Compliance",
    ekklesia: {
      main: "Fully Integrated & Included",
      highlight: "Data stored securely in Canadian data centres",
    },
    typical: "US-hosted data with limited local compliance",
  },
  {
    category: "ONBOARDING",
    feature: "Dedicated White-Glove Data Migration",
    ekklesia: {
      main: "Included for free with dedicated migration engineer",
      highlight: "100% data fidelity guarantee",
    },
    typical: "Do-it-yourself CSV import with formatting headaches",
  },
];

const EkklesiaCell = ({ main, highlight }) => (
  <div className="rounded-xl border border-[#2DD4BF]/30 bg-[#10182B]/85 p-3 sm:p-4 w-full h-full flex flex-col justify-center transition-all duration-200 shadow-[#2DD4BF4D]/25 shadow-md overflow-hidden">
    <div className="flex items-start gap-2 sm:gap-2.5 mb-1 sm:mb-1.5 min-w-0">
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#06B6D4]/20 flex items-center justify-center shrink-0 mt-0.5">
        <Check size={11} strokeWidth={3} className="text-cyan-400 sm:hidden" />
        <Check
          size={13}
          strokeWidth={3}
          className="text-cyan-400 hidden sm:block"
        />
      </div>
      <span className="flex-1 min-w-0 text-[13px] sm:text-sm font-semibold leading-snug text-white wrap-break-word">
        {main}
      </span>
    </div>
    <div className="flex items-start gap-1.5 pl-6 sm:pl-7 min-w-0">
      <Star
        size={11}
        className="shrink-0 mt-0.5 text-[#FACC15] fill-yellow-500 sm:hidden"
      />
      <Star
        size={12}
        className="shrink-0 mt-0.5 text-[#FACC15] fill-yellow-500 hidden sm:block"
      />
      <span className="flex-1 min-w-0 text-[10px] sm:text-xs font-normal leading-tight text-[#FACC15] wrap-break-word">
        {highlight}
      </span>
    </div>
  </div>
);

const TypicalCell = ({ text }) => (
  <div className="rounded-xl border border-white/[0.07] bg-[#131725]/60 p-3 sm:p-4 w-full h-full flex items-center overflow-hidden">
    <div className="flex items-start gap-2 sm:gap-2.5 min-w-0 w-full">
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500/10 border border-red-500/25 flex items-center justify-center shrink-0 mt-0.5">
        <X size={10} strokeWidth={2.5} className="text-red-400 sm:hidden" />
        <X
          size={12}
          strokeWidth={2.5}
          className="text-red-400 hidden sm:block"
        />
      </div>
      <span className="flex-1 min-w-0 text-[11px] sm:text-sm font-normal leading-snug text-[#F4F4F4] wrap-break-word">
        {text}
      </span>
    </div>
  </div>
);

const Features = () => {
  const scope = useReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      ref={scope}
      id="features"
      className="relative py-10 sm:py-14 md:py-20 overflow-hidden bg-[#F4F6F9]"
    >
      <div className="relative container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 ">
        {/* Section Header */}
        <div className="text-left md:text-center mb-7 sm:mb-12 lg:mb-14">
          <p
            data-reveal
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-normal uppercase tracking-[0.2em] mb-3 sm:mb-4 text-[#00C4D4]"
          >
            <Bookmark
              size={12}
              strokeWidth={2.5}
              className="shrink-0 sm:hidden"
            />
            <Bookmark
              size={14}
              strokeWidth={2.5}
              className="shrink-0 hidden sm:block"
            />
            WHAT MAKES US DIFFERENT
          </p>

          <h2
            data-reveal
            className="font-marcellus font-normal text-black text-[2rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl leading-[1.12] tracking-tight mb-4"
          >
            EkklésiaOne vs Typical Church Software
          </h2>

          <p
            data-reveal
            data-delay="0.08"
            className="text-sm  sm:text-base leading-relaxed max-w-3xl mx-auto text-slate-500 "
          >
            Most church platforms bolt modules together and charge per feature.
            EkklésiaOne is built as one — no stitching required.
          </p>
        </div>

        {/* Main Comparison Card */}
        <div
          data-reveal
          data-delay="0.12"
          className="rounded-2xl sm:rounded-3xl p-3.5 xs:p-4 sm:p-6 lg:p-12 shadow-2xl relative bg-[#0F172A] overflow-hidden"
        >
          {/* Table Column Headers (Desktop only) */}
          <div className="hidden lg:grid grid-cols-[1.3fr_1fr_1fr] gap-5 mb-6 px-1 items-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              PLATFORM FEATURE / CAPABILITY
            </p>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              EKKLESIAONE STANDARD
            </p>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              TYPICAL CHURCH SOFTWARE
            </p>
          </div>

          {/* Rows */}
          <div className="space-y-4 sm:space-y-4 lg:space-y-5">
            {COMPARISONS.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] gap-4 sm:gap-3 lg:gap-5 items-stretch rounded-xl sm:rounded-none bg-white/2 sm:bg-transparent p-2.5 sm:p-0 border border-white/5 sm:border-none w-full"
              >
                {/* Column 1: Feature Title & Category (full width on mobile & tablet) */}
                <div className="min-w-0 flex flex-col justify-center py-0.5 lg:py-0 sm:col-span-2 lg:col-span-1">
                  <h3 className="font-semibold text-[14px] xs:text-[15px] sm:text-base lg:text-[17px] leading-snug text-white mb-0.5 wrap-break-word">
                    {row.feature}
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-normal uppercase tracking-[0.18em] text-[#98C2FF]">
                    {row.category}
                  </span>
                </div>

                {/* Column 2: EkklésiaOne Standard */}
                <div className="min-w-0 flex flex-col">
                  <div className="lg:hidden mb-2">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#00C4D4]">
                      EkklésiaOne Standard
                    </span>
                  </div>
                  <EkklesiaCell
                    main={row.ekklesia.main}
                    highlight={row.ekklesia.highlight}
                  />
                </div>

                {/* Column 3: Typical Church Software */}
                <div className="min-w-0 flex flex-col">
                  <div className="lg:hidden mb-2">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Typical Church Software
                    </span>
                  </div>
                  <TypicalCell text={row.typical} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div
          data-reveal
          data-delay="0.2"
          className="flex justify-center mt-7 sm:mt-10 lg:mt-12 px-2"
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-9 py-3.5 sm:py-4 rounded-full font-normal text-[13px] sm:text-sm text-white bg-[#06B6D4] shadow-[0_8px_25px_rgba(0,196,212,0.45)] hover:shadow-[0_12px_30px_rgba(0,196,212,0.6)] transition-all duration-300 hover:scale-105 cursor-pointer text-center"
          >
            See how Easy Migration Is
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1 sm:hidden"
            />
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1 hidden sm:block"
            />
          </button>
        </div>

        {/* Modal */}
        <MigrationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Features;
