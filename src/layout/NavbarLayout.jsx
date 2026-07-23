import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, User, Church } from "lucide-react";
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
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "bg-[#131330]/95 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
            : "bg-[#131330] border-white/10"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          <Logo useFullLogo />

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className={`text-sm font-medium no-underline transition-colors ${
                  pathname === href
                    ? "text-primary font-semibold"
                    : "text-white/90 hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3.5">
            <a
              href={MEMBER_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-primary border border-primary hover:bg-primary/10 transition-all no-underline flex items-center gap-2"
            >
              Member Login
              <User size={16} className="text-primary" />
            </a>
            <a
              href={CHURCH_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-primary hover:opacity-90 shadow-md shadow-primary/30 transition-all no-underline flex items-center gap-2"
            >
              Church Login
              <Church size={16} className="text-white" />
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="lg:hidden p-2.5 -mr-2 rounded-xl text-white hover:bg-white/10 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#131330] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <Logo useFullLogo />
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col">
            <div className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium text-base no-underline transition-colors ${
                    pathname === href
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-white/90 hover:bg-white/5 hover:text-white"
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
                className="py-3 px-4 text-center font-semibold text-primary border border-primary rounded-full no-underline flex items-center justify-center gap-2 hover:bg-primary/10"
              >
                Member Login
                <User size={16} className="text-primary" />
              </a>
              <a
                href={CHURCH_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 text-center font-semibold text-white bg-primary rounded-full shadow-md shadow-primary/30 no-underline flex items-center justify-center gap-2 hover:opacity-90"
              >
                Church Login
                <Church size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarLayout;
