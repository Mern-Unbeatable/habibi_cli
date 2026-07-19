import { Link } from "react-router";
import logoMark from "../../assets/logo-mark.png";

const Logo = ({ light = false }) => {
  return (
    <Link to="/" className="flex items-center gap-2.5 no-underline shrink-0">
      <span
        className={`w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden ${
          light ? "shadow-md" : "border border-slate-100 shadow-sm"
        }`}
      >
        <img src={logoMark} alt="EkklésiasOne logo" className="w-8 h-8 object-contain" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display font-bold text-xl tracking-tight ${light ? "text-white" : "text-ink"}`}
        >
          Ekklésias<span className="text-secondary">One</span>
        </span>
        <span
          className={`hidden sm:block text-[9px] font-medium tracking-wide ${light ? "text-slate-400" : "text-slate-500"}`}
        >
          One intelligent operating system for the Church
        </span>
      </span>
    </Link>
  );
};

export default Logo;
