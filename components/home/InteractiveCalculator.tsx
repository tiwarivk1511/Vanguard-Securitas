"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export const InteractiveCalculator: React.FC = () => {
  const [facilityType, setFacilityType] = useState("Corporate IT Park");
  const [vertical, setVertical] = useState("Security Guards");
  const [headcount, setHeadcount] = useState(10);

  return (
    <section className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Side Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-amber-700" />
              Workforce Estimator Tool
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Estimate Your <span className="gold-gradient-text uppercase">Facility Manpower</span>
            </h2>

            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              Use our interactive estimator to configure site deployment requirements for your commercial tower, warehouse, or campus. Receive full statutory indemnification under PSARA & Central Minimum Wage guidelines.
            </p>

            <div className="space-y-3 pt-2 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero HR recruitment, PF/ESIC filing & leave replacement overhead</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent NEFT bank muster roll proof with every monthly invoice</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Same-day reliever bench replacement during absenteeism</span>
              </div>
            </div>
          </div>

          {/* Right Side Calculator Panel */}
          <div className="lg:col-span-7">
            <div className="vanguard-card p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-slate-50/90 space-y-6 shadow-lg shadow-slate-900/5">

              {/* Facility Selection */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 block">
                  1. Facility Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Corporate IT Park", "Manufacturing", "Commercial Plaza", "Institutional"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFacilityType(type)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                        facilityType === type
                          ? "bg-amber-500 text-slate-950 shadow-sm"
                          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Vertical */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 block">
                  2. Primary Vertical Needed
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {["Security Guards", "Housekeeping", "Support Staff"].map((v) => (
                    <button
                      key={v}
                      onClick={() => setVertical(v)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                        vertical === v
                          ? "bg-slate-900 text-white shadow-sm"
                          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Headcount Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                    3. Required Staff Strength
                  </label>
                  <span className="text-lg font-black text-amber-800">{headcount} Associates</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  step="2"
                  value={headcount}
                  onChange={(e) => setHeadcount(Number(e.target.value))}
                  className="w-full accent-amber-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Estimated Summary Result Box */}
              <div className="p-5 rounded-2xl bg-white border border-amber-500/30 space-y-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Selected Configuration</div>
                    <div className="text-sm font-black text-slate-900">
                      {headcount} x {vertical} ({facilityType})
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-bold text-emerald-700">Statutory Assurance</div>
                    <div className="text-xs font-bold text-slate-800">100% PSARA & EPF/ESIC Compliant</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[10px] text-slate-500 font-bold">Shift Coverage</div>
                    <div className="font-extrabold text-amber-800">24/7/365</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[10px] text-slate-500 font-bold">Reliever Bench</div>
                    <div className="font-extrabold text-blue-800">Included</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[10px] text-slate-500 font-bold">Onboarding</div>
                    <div className="font-extrabold text-emerald-800">7 Days</div>
                  </div>
                </div>

                <Link
                  href={`/contact?vertical=${encodeURIComponent(vertical)}&headcount=${headcount}&facility=${encodeURIComponent(facilityType)}`}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Get Tailored Commercial Proposal
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
