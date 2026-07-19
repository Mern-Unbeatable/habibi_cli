import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "../Components/ui/Logo";
import { MEMBER_LOGIN_URL, CHURCH_LOGIN_URL } from "../constants/links";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const NavbarLayout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 border-b ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-slate-200/80 shadow-[0_4px_20px_rgb(34_26_44_/_0.05)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          <Logo />

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold no-underline transition-colors ${
                  pathname === href
                    ? "text-primary bg-primary/5"
                    : "text-slate-600 hover:text-primary hover:bg-slate-900/[0.03]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={MEMBER_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 border border-slate-200 hover:border-primary/40 hover:text-primary bg-white/60 transition-colors no-underline"
            >
              Member Login
            </a>
            <a
              href={CHURCH_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-dark shadow-md shadow-primary/25 transition-colors no-underline flex items-center gap-1.5"
            >
              Church Login
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="lg:hidden p-2.5 -mr-2 rounded-xl text-slate-700 hover:bg-slate-900/5 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <Logo />
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col">
            <div className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3.5 rounded-xl font-display font-semibold text-lg no-underline transition-colors ${
                    pathname === href
                      ? "text-primary bg-primary/5"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-8 flex flex-col gap-3">
              <a
                href={MEMBER_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 text-center font-semibold text-slate-700 border border-slate-200 rounded-xl no-underline"
              >
                Member Login
              </a>
              <a
                href={CHURCH_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 text-center font-semibold text-white bg-primary rounded-xl shadow-md shadow-primary/25 no-underline"
              >
                Church Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarLayout;
