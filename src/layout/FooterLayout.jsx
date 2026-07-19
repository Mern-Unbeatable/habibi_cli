import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../Components/ui/Logo";
import { MEMBER_LOGIN_URL, CHURCH_LOGIN_URL } from "../constants/links";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const FooterLayout = () => {
  return (
    <footer className="bg-ink text-slate-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid gap-12 lg:gap-8 md:grid-cols-2 lg:grid-cols-12 mb-14">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-sm leading-relaxed">
              The all-in-one church management platform that helps you organize
              people, events, giving, and communication — so you can focus on
              ministry, not admin.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-secondary-light" />
                support@ekklesiasone.com
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-secondary-light" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-secondary-light" />
                123 Ministry Lane, TX 75001
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-5">Product</h4>
            <ul className="space-y-3">
              {productLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link to={href} className="hover:text-white transition-colors no-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link to={href} className="hover:text-white transition-colors no-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white mb-5">Get Started</h4>
            <p className="text-sm leading-relaxed mb-5">
              Already part of a church using EkklésiasOne? Jump straight into your dashboard.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={CHURCH_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-center text-sm font-semibold text-white bg-primary hover:bg-primary-light rounded-xl transition-colors no-underline"
              >
                Church Login
              </a>
              <a
                href={MEMBER_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-center text-sm font-semibold text-white border border-white/15 hover:border-white/40 rounded-xl transition-colors no-underline"
              >
                Member Login
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} EkklésiasOne. All rights reserved.</p>
          <p className="text-slate-500">Built for the modern church.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
