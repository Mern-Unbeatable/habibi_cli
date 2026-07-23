import React, { useState, useEffect } from "react";
import {
  X,
  User,
  Mail,
  Building2,
  Phone,
  Users,
  Layers,
  ArrowRight,
} from "lucide-react";

const MigrationModal = ({ isOpen, onClose, defaultTab = "trial" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    churchName: "",
    phone: "",
    congregationSize: "",
    currentSoftware: "",
  });

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Migration Form:", { activeTab, ...formData });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm transition-opacity">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#121C33] border border-slate-800/80 p-6 sm:p-8 shadow-2xl z-10 text-white overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00C4D4] flex items-center justify-center font-bold text-slate-950 text-lg shadow-sm">
              E
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">
              EkklésiaOne
            </span>
          </div>

          {/* Toggle Switch + Close */}
          <div className="flex items-center gap-3">
            {/* Toggle Segmented Bar */}
            <div className="flex items-center bg-[#151C2C] border border-slate-800 p-1 rounded-full text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("demo")}
                className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                  activeTab === "demo"
                    ? "bg-[#00C4D4] text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Book 1-on-1 Demo
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("trial")}
                className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                  activeTab === "trial"
                    ? "bg-[#FACC15] text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Start 30-Day Free Trial
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            {activeTab === "trial"
              ? "Activate Your 30-Day Free Workspace"
              : "Schedule Your Guided Platform Tour"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {activeTab === "trial"
              ? "Full access to all 16 capabilities. No credit card required. Instant activation."
              : "See how EkklésiaOne unifies your church software in a 25-minute tailored walkthrough."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-normal text-white mb-1.5">
                Full Name *
              </label>
              <div className="relative flex items-center">
                <User
                  size={16}
                  className="absolute left-3.5 text-slate-500 pointer-events-none"
                />
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Pastor David Miller"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#1A2744] border border-slate-800 focus:border-[#00C4D4] rounded-xl py-2.5 pl-10 pr-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Work / Church Email */}
            <div>
              <label className="block text-xs font-normal text-white mb-1.5">
                Work / Church Email *
              </label>
              <div className="relative flex items-center">
                <Mail
                  size={16}
                  className="absolute left-3.5 text-slate-500 pointer-events-none"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="david@gracechurch.ca"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1A2744] border border-slate-800 focus:border-[#00C4D4] rounded-xl py-2.5 pl-10 pr-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Church Name */}
            <div>
              <label className="block text-xs font-normal text-white mb-1.5">
                Church Name *
              </label>
              <div className="relative flex items-center">
                <Building2
                  size={16}
                  className="absolute left-3.5 text-slate-500 pointer-events-none"
                />
                <input
                  type="text"
                  name="churchName"
                  required
                  placeholder="Grace Community Church"
                  value={formData.churchName}
                  onChange={handleChange}
                  className="w-full bg-[#1A2744] border border-slate-800 focus:border-[#00C4D4] rounded-xl py-2.5 pl-10 pr-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Direct Phone Number */}
            <div>
              <label className="block text-xs font-normal text-white mb-1.5">
                Direct Phone Number
              </label>
              <div className="relative flex items-center">
                <Phone
                  size={16}
                  className="absolute left-3.5 text-slate-500 pointer-events-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="(416) 555-0199"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#1A2744] border border-slate-800 focus:border-[#00C4D4] rounded-xl py-2.5 pl-10 pr-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Approximate Congregation Size */}
            <div>
              <label className="block text-xs font-normal text-white mb-1.5">
                Approximate Congregation Size
              </label>
              <div className="relative flex items-center">
                <Users
                  size={16}
                  className="absolute left-3.5 text-slate-500 pointer-events-none"
                />
                <input
                  type="text"
                  name="congregationSize"
                  placeholder="150 – 500 members"
                  value={formData.congregationSize}
                  onChange={handleChange}
                  className="w-full bg-[#1A2744] border border-slate-800 focus:border-[#00C4D4] rounded-xl py-2.5 pl-10 pr-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Current Primary Church Software */}
            <div>
              <label className="block text-xs font-normal text-white mb-1.5">
                Current Primary Church Software
              </label>
              <div className="relative flex items-center">
                <Layers
                  size={16}
                  className="absolute left-3.5 text-slate-500 pointer-events-none"
                />
                <input
                  type="text"
                  name="currentSoftware"
                  placeholder="Planning Center"
                  value={formData.currentSoftware}
                  onChange={handleChange}
                  className="w-full bg-[#1A2744] border border-slate-800 focus:border-[#00C4D4] rounded-xl py-2.5 pl-10 pr-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 cursor-pointer rounded-xl font-semibold text-sm sm:text-base text-slate-950 bg-primary hover:scale-99 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Continue to Preferences
              <ArrowRight size={18} className="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MigrationModal;
