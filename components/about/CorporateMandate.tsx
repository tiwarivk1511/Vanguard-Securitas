"use client";

import React from "react";
import Image from "next/image";

export const CorporateMandate: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-5 relative">
          <div className="vanguard-card p-8 rounded-3xl border border-amber-500/30 bg-white text-center space-y-6 relative shadow-lg shadow-slate-900/5">
            <div className="w-40 h-40 mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 bg-amber-500/15 rounded-full blur-2xl" />
              <Image
                src="/vanguard-logo.png"
                alt="Vanguard Securitas Emblem"
                width={140}
                height={140}
                className="relative z-10 drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
              />
            </div>

            <div>
              <h3 className="text-2xl font-black gold-gradient-text uppercase tracking-widest">
                The Vanguard Emblem
              </h3>
              <p className="text-xs text-slate-600 font-bold tracking-wider uppercase mt-1">
                Symbol of Leadership & Protection
              </p>
            </div>

            <div className="space-y-3 text-xs font-medium text-slate-700 text-left pt-2 border-t border-slate-200">
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1" />
                <span><strong className="text-amber-900 font-bold">Golden Chevron:</strong> Represents leadership, nobility & gold-standard service delivery.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0 mt-1" />
                <span><strong className="text-slate-900 font-bold">Silver Spearhead:</strong> Symbolizes upward precision, alertness & proactive vigilance.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1" />
                <span><strong className="text-blue-900 font-bold">Dark Slate Shield:</strong> Represents impenetrable protection & robust corporate defense.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Executive Overview & <span className="gold-gradient-text uppercase">Corporate Mandate</span>
          </h2>

          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
            Vanguard Securitas & Manpower Services is a premier, integrated security and facility workforce management organization built to safeguard critical corporate infrastructure, industrial plants, commercial real estate, and institutional campuses across India.
          </p>

          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
            Modern enterprises require more than passive personnel deployment; they demand an agile partner governed by strict Standard Operating Procedures (SOPs), proactive threat mitigation, and rigorous statutory transparency. By consolidating Security Guards, Housekeeping Services, and Support Staff under a unified command structure, Vanguard Securitas eliminates multi-vendor friction, optimizes facility operating expenditure, and enforces uncompromising service benchmarks across every client site.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-xs font-extrabold text-amber-900 uppercase">Proactive Prevention</div>
              <div className="text-xs text-slate-600 font-medium">Operational doctrine built on stopping threats long before they escalate.</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-xs font-extrabold text-emerald-900 uppercase">Statutory Transparency</div>
              <div className="text-xs text-slate-600 font-medium">Zero default guarantee with audit-ready digital bank muster rolls.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
