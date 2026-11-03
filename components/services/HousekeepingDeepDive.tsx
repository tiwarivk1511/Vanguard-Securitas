"use client";

import React from "react";

export const HousekeepingDeepDive: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="housekeeping">
      <div className="vanguard-card p-8 sm:p-12 rounded-3xl bg-white border border-blue-500/30 space-y-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-blue-900 bg-blue-500/15 border border-blue-500/30">
              Division 02 // Housekeeping Services
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              Mechanized Housekeeping & Hygiene Standards
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="color-coded-hygiene">
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
            <div className="text-xs font-extrabold uppercase text-red-700 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" /> Red Microfiber
            </div>
            <div className="text-xs font-bold text-slate-900">Restroom Fixtures Only</div>
            <p className="text-[11px] text-slate-600 font-medium">Exclusively for high-risk WCs, urinals, and toilet bowls to eliminate cross-contamination.</p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
            <div className="text-xs font-extrabold uppercase text-amber-800 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" /> Yellow Microfiber
            </div>
            <div className="text-xs font-bold text-slate-900">Washroom Sinks & Tiles</div>
            <p className="text-[11px] text-slate-600 font-medium">Used for washroom vanities, sinks, mirrors, and wall tiles.</p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-2">
            <div className="text-xs font-extrabold uppercase text-blue-800 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" /> Blue Microfiber
            </div>
            <div className="text-xs font-bold text-slate-900">Workstations & Glass</div>
            <p className="text-[11px] text-slate-600 font-medium">Dedicated to general office desks, screens, glass partitions, and low-risk lounges.</p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
            <div className="text-xs font-extrabold uppercase text-emerald-800 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" /> Green Microfiber
            </div>
            <div className="text-xs font-bold text-slate-900">Pantry & Cafeteria</div>
            <p className="text-[11px] text-slate-600 font-medium">Strictly enforced for dining tables, cafeteria food surfaces, and pantry counters.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
