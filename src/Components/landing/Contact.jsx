import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import useReveal from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "support@ekklesiasone.com" },
  { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Visit Us", value: "123 Ministry Lane, TX 75001" },
  { icon: Clock, label: "Support Hours", value: "Mon – Fri · 8 AM – 8 PM CST" },
];

const inputClasses =
  "w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent transition-shadow";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const scope = useReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section ref={scope} id="contact" className="py-14 lg:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="We'd love to hear from you"
          subtitle="Questions about features, pricing, or migrating your data? Send us a message and a real person will get back to you fast."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div data-reveal className="lg:col-span-2 bg-primary rounded-[2rem] p-4 md:p-6 lg:p-8 sm:p-10 text-white flex flex-col">
            <h3 className="font-display font-bold text-2xl mb-3">Contact Information</h3>
            <p className="text-white/70 leading-relaxed mb-9">
              Reach out through any channel — our support team is made up of
              people who understand ministry.
            </p>

            <div className="space-y-6 mt-auto">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Icon size={19} className="text-secondary-light" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal data-delay="0.15" className="lg:col-span-3 bg-white rounded-[2rem] border border-slate-200 shadow-soft p-6  md:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-ink mb-2">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClasses}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-ink mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClasses}
                    placeholder="john@church.org"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-ink mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows="5"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your church and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  submitted
                    ? "bg-emerald-500 text-white"
                    : "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:-translate-y-0.5"
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={20} /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
