"use client";

import React from "react";
import { Eye, ShieldCheck, Clock, FileText } from "lucide-react";

export const SupervisionMatrix: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="supervision">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <Eye className="w-3.5 h-3.5 text-amber-700" />
          Field Command Hierarchy
        </div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
          Multi-Tier Field <span className="font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest">Supervision Matrix</span>
        </h2>
        <p className="text-slate-600 font-medium text-sm">
          Supervision is the backbone of Vanguard. We enforce distinct layers of operational oversight.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="vanguard-card p-6 rounded-2xl bg-white border border-amber-500/30 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase">
              Tier 1
            </span>
            <ShieldCheck className="w-5 h-5 text-amber-700" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Site Supervisors</h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            Real-time shift briefings, daily guard turnout checks, gate-pass log audits, and hourly task sign-offs at the client premises.
          </p>
          <div className="pt-2 text-[11px] font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest">
            Coverage: On-Site Every Shift
          </div>
        </div>

        <div className="vanguard-card p-6 rounded-2xl bg-white border border-blue-500/30 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-blue-900 text-xs font-bold uppercase">
              Tier 2
            </span>
            <Clock className="w-5 h-5 text-blue-700" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Area Field Officers</h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            Weekly day visits and mandatory surprise night patrolling conducted between <strong className="text-blue-900 font-bold">01:00 AM – 04:00 AM</strong> to verify post alertness, sobriety, and perimeter integrity.
          </p>
          <div className="pt-2 text-[11px] font-extrabold text-blue-800">
            Coverage: Surprise Night Rounds
          </div>
        </div>

        <div className="vanguard-card p-6 rounded-2xl bg-white border border-emerald-500/30 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-900 text-xs font-bold uppercase">
              Tier 3
            </span>
            <FileText className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Monthly SLA Review</h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            Joint monthly scorecard audits with client CSO and Administration heads covering attendance muster rolls, hygiene checklists, and incident log reviews.
          </p>
          <div className="pt-2 text-[11px] font-extrabold text-emerald-800">
            Coverage: Monthly KPI Audit
          </div>
        </div>

      </div>
    </section>
  );
};
