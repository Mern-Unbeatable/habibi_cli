import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../Components/ui/Logo";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Testimonials", href: "/testimonials" },
];

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];
const currentYear = new Date().getFullYear();
const FooterLayout = () => {
  return (
    <footer className="bg-[#131330] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-5 pr-0 lg:pr-6">
            <Logo useFullLogo />
            <p className="mt-6 text-sm text-slate-300 leading-relaxed max-w-sm">
              The all-in-one church management platform that helps you organize
              people, events, giving, and communication — so you can focus on
              ministry, not admin.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white text-base mb-5">Company</h4>
            <ul className="space-y-3.5 text-sm">
              {companyLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-slate-300 hover:text-primary transition-colors no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white text-base mb-5">Product</h4>
            <ul className="space-y-3.5 text-sm">
              {productLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-slate-300 hover:text-primary transition-colors no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <div className="space-y-4 text-sm text-slate-300">
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-slate-200 shrink-0" />
                <span>support@ekklesiasone.com</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-slate-200 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-slate-200 shrink-0" />
                <span>123 Ministry Lane, TX 75001</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>Copyright © {currentYear} EkklesiasOne</p>
          <div className="flex items-center gap-3 text-slate-400">
            <Link
              to="/terms"
              className="hover:text-white transition-colors no-underline"
            >
              Term of use
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/privacy"
              className="hover:text-white transition-colors no-underline"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/cookies"
              className="hover:text-white transition-colors no-underline"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
