"use client";

import React from "react";
import { Phone } from "lucide-react";

export const MannedGuardingDeepDive: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="manned-guarding">
      <div className="vanguard-card p-8 sm:p-12 rounded-3xl bg-white border border-amber-500/30 space-y-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-amber-900 bg-amber-500/15 border border-amber-500/30">
              Division 01 // Security Guards
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              Manned Guarding & Tactical Security
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="tel:+918860661641"
              className="px-4 py-2.5 rounded-xl bg-slate-900 text-amber-300 font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              +91 8860661641
            </a>
            <a
              href="tel:+919818152112"
              className="px-4 py-2.5 rounded-xl bg-slate-900 text-amber-300 font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              +91 9818152112
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-extrabold text-slate-900 text-base">Standard On-Site Guarding SOPs</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Multi-stage access control, digital badge issuance, perimeter beat patrolling, server room and DG set inspections, and Golden Hour emergency isolation protocols.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-extrabold text-slate-900 text-base">Industrial Gate Control</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Challan/invoice reading, material gate-pass reconciliation, commercial vehicle under-chassis frisking, weighbridge oversight, dock anti-pilferage security.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-extrabold text-slate-900 text-base">Executive VIP Bouncers & Events</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Close-quarter VIP protection, corporate AGM crowd control, high-value asset transit, defensive tactics, and threat scanning by high-stature bouncers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
