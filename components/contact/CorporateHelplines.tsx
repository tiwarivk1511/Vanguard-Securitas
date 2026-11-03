"use client";

import React from "react";
import { Phone, Mail, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";

export const CorporateHelplines: React.FC = () => {
  return (
    <div className="vanguard-card p-5 sm:p-8 rounded-3xl bg-white border border-amber-500/30 space-y-6 shadow-lg shadow-slate-900/5">
      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
        Direct Corporate Helplines
      </h3>

      <div className="space-y-3.5">
        {/* Phone 1 */}
        <a
          href="tel:+918860661641"
          className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-amber-500/30 flex items-center gap-3.5 hover:border-amber-500 hover:bg-amber-50/40 transition-all group shadow-xs overflow-hidden"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/15 border border-amber-500/35 flex items-center justify-center text-amber-800 shrink-0 group-hover:scale-105 transition-transform">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold uppercase tracking-widest truncate">24/7 Operations Helpline 1</div>
            <div className="text-base sm:text-lg font-black text-slate-900 truncate">+91 8860661641</div>
          </div>
        </a>

        {/* Phone 2 */}
        <a
          href="tel:+919818152112"
          className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-amber-500/30 flex items-center gap-3.5 hover:border-amber-500 hover:bg-amber-50/40 transition-all group shadow-xs overflow-hidden"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/15 border border-amber-500/35 flex items-center justify-center text-amber-800 shrink-0 group-hover:scale-105 transition-transform">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold uppercase tracking-widest truncate">24/7 Operations Helpline 2</div>
            <div className="text-base sm:text-lg font-black text-slate-900 truncate">+91 9818152112</div>
          </div>
        </a>

        {/* Corporate Email */}
        <a
          href="mailto:info.vanguardsecuritas@gmail.com"
          className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200 flex items-center gap-3.5 hover:border-blue-400 hover:bg-blue-50/40 transition-all group shadow-xs overflow-hidden"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-800 shrink-0 group-hover:scale-105 transition-transform">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold uppercase tracking-widest truncate">Official Corporate Email</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 break-all leading-tight">info.vanguardsecuritas@gmail.com</div>
          </div>
        </a>

        {/* WhatsApp Chat */}
        <a
          href="https://wa.me/918860661641?text=Hello%20Vanguard%20Securitas,%20I%20would%20like%20to%20request%20a%20site%20assessment."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/90 border border-emerald-200 flex items-center gap-3.5 hover:bg-emerald-100/70 transition-all group shadow-xs overflow-hidden"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-800 shrink-0 group-hover:scale-105 transition-transform">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[9px] sm:text-[10px] text-emerald-900 font-extrabold uppercase tracking-widest truncate">Instant WhatsApp Support</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">Chat With Command Desk</div>
          </div>
        </a>
      </div>

      <div className="pt-4 border-t border-slate-200 space-y-2 text-xs font-bold text-slate-700">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
          <span>24/7/365 Command & QRT Oversight Desk</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>Verified Candidate Dossiers Delivered Prior to Onboarding</span>
        </div>
      </div>
    </div>
  );
};
