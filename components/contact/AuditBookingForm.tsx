"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export const AuditBookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    vertical: "Security Guards",
    headcount: "10-25",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="vanguard-card p-5 sm:p-10 rounded-3xl bg-white border border-amber-500/30 shadow-lg shadow-slate-900/5">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-900">Audit Request Received!</h3>
          <p className="text-sm text-slate-700 font-medium max-w-md mx-auto">
            Thank you, <strong>{formData.name}</strong>. Our Operations Directorate has received your inquiry for <strong>{formData.vertical}</strong>. A Field Officer will contact you within 24 hours at <strong>{formData.phone}</strong>.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Request On-Site Assessment
            </h3>
            <p className="text-xs text-slate-600 font-bold">
              Fill out your site details to get a customized commercial proposal within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-extrabold text-slate-800 uppercase">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-extrabold text-slate-800 uppercase">Company / Organization *</label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Tech Park"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-extrabold text-slate-800 uppercase">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-extrabold text-slate-800 uppercase">Corporate Email *</label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-extrabold text-slate-800 uppercase">Required Vertical</label>
              <select
                value={formData.vertical}
                onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
              >
                <option value="Security Guards" className="bg-white text-slate-900 font-medium">Security Guards Division</option>
                <option value="Housekeeping Services" className="bg-white text-slate-900 font-medium">Housekeeping Services Division</option>
                <option value="Support Staff" className="bg-white text-slate-900 font-medium">Support Staff Division</option>
                <option value="Integrated All 3 Verticals" className="bg-white text-slate-900 font-medium">Integrated All 3 Verticals</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-extrabold text-slate-800 uppercase">Site Location / City *</label>
              <input
                type="text"
                required
                placeholder="Delhi, Noida, Gr. Noida, Ghaziabad, Hapur, Bulandshahar, Prayagraj"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-extrabold text-slate-800 uppercase">Specific Site Requirements & Remarks</label>
            <textarea
              rows={3}
              placeholder="Mention facility square footage, shift hours, or specific post orders..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <Send className="w-4 h-4" />
            Submit Assessment Request
          </button>
        </form>
      )}
    </div>
  );
};
