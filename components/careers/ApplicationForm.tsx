"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Phone } from "lucide-react";

export const ApplicationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "Security Guard",
    location: "Delhi",
    experience: "1-3 Years",
    remarks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="application-form">
      <div className="vanguard-card p-8 sm:p-12 rounded-3xl bg-white border border-amber-500/30 shadow-lg shadow-slate-900/5">

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Job Application Submitted!</h3>
            <p className="text-sm text-slate-700 font-semibold max-w-md mx-auto">
              Thank you, <strong>{formData.name}</strong>. Our Recruitment Officer has received your candidate profile for <strong>{formData.role}</strong> ({formData.location}). We will call you within 24 hours at <strong>{formData.phone}</strong> for interview scheduling.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm"
            >
              Submit Another Candidate Form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center space-y-2 border-b border-slate-200 pb-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-extrabold text-amber-900 bg-amber-500/15 border border-amber-500/30 uppercase">
                Recruitment & Onboarding
              </span>
              <h2 className="text-3xl font-black text-slate-900">Apply For Employment</h2>
              <p className="text-xs text-slate-600 font-bold">
                Fill in your candidate details below for active postings across Delhi, Noida, Greater Noida, Ghaziabad, Hapur, Bulandshahar & Prayagraj.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-extrabold text-slate-800 uppercase">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold text-slate-800 uppercase">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-extrabold text-slate-800 uppercase">Applied Position *</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
                >
                  <option value="Security Guard" className="bg-white text-slate-900">Security Guard (Manned Guarding)</option>
                  <option value="Lady Security Guard" className="bg-white text-slate-900">Lady Security Guard</option>
                  <option value="Security Supervisor / Ex-Serviceman" className="bg-white text-slate-900">Security Supervisor / Ex-Serviceman</option>
                  <option value="VIP Bouncer" className="bg-white text-slate-900">Executive Protection / VIP Bouncer</option>
                  <option value="Housekeeping Attendant" className="bg-white text-slate-900">Housekeeping Attendant</option>
                  <option value="Floor Scrubber Operator" className="bg-white text-slate-900">Floor Machine / Scrubber Operator</option>
                  <option value="Front Desk Executive" className="bg-white text-slate-900">Front Desk Executive / Receptionist</option>
                  <option value="Multi-Tasking Staff (MTS)" className="bg-white text-slate-900">Office Assistant / MTS</option>
                  <option value="Pantry Steward" className="bg-white text-slate-900">Pantry Steward / Hospitality</option>
                  <option value="Warehouse Helper / Loader" className="bg-white text-slate-900">Warehouse Helper / Loader</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold text-slate-800 uppercase">Preferred Work Location *</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
                >
                  <option value="Delhi" className="bg-white text-slate-900">Delhi</option>
                  <option value="Noida" className="bg-white text-slate-900">Noida</option>
                  <option value="Greater Noida" className="bg-white text-slate-900">Greater Noida</option>
                  <option value="Ghaziabad" className="bg-white text-slate-900">Ghaziabad</option>
                  <option value="Hapur" className="bg-white text-slate-900">Hapur</option>
                  <option value="Bulandshahar" className="bg-white text-slate-900">Bulandshahar</option>
                  <option value="Prayagraj" className="bg-white text-slate-900">Prayagraj</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-extrabold text-slate-800 uppercase">Past Work Experience & Remarks</label>
              <textarea
                rows={3}
                placeholder="Mention past employer, security guard experience, or special skills..."
                value={formData.remarks}
                onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-md shadow-amber-500/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              Submit Candidate Application
            </button>

            <div className="pt-3 border-t border-slate-200 text-center text-xs font-bold text-slate-600 flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>Direct Recruitment Helpline: <strong>+91 8860661641</strong> | <strong>+91 9818152112</strong></span>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
