"use client";

import React from "react";
import { Compass, Target, ShieldCheck, Sparkles } from "lucide-react";

export const StrategicPhilosophy: React.FC = () => {
  return (
    <section className="bg-white py-20 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Strategic Vision, Mission & <span className="font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest">Core Philosophy</span>
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            We view facility personnel not as mere headcount, but as visible ambassadors of our clients&apos; corporate reputation and workplace dignity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Vision */}
          <div className="vanguard-card p-6 rounded-2xl bg-slate-50 border border-amber-500/30 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest">Direction</span>
              <h3 className="text-xl font-bold text-slate-900">Vision Statement</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                To be recognized as India&apos;s most trusted, process-driven security and manpower partner—setting the gold standard in physical asset protection, workplace hygiene, and disciplined support staffing through ethical governance and operational agility.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="vanguard-card p-6 rounded-2xl bg-slate-50 border border-blue-500/30 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-800">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-800">Execution</span>
              <h3 className="text-xl font-bold text-slate-900">Mission Mandate</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                To empower enterprises to focus exclusively on their core business growth while we safeguard their perimeters, sanitize their workspaces, and power their daily administrative workflows through rigorously vetted and continuously trained personnel.
              </p>
            </div>
          </div>

          {/* Integrity */}
          <div className="vanguard-card p-6 rounded-2xl bg-slate-50 border border-emerald-500/30 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800">Ethics</span>
              <h3 className="text-xl font-bold text-slate-900">Uncompromising Integrity</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Zero tolerance for statutory defaults, unverified deployments, or dilution of supervision. We maintain transparent muster rolls, timely wage disbursements, and complete legal indemnification for our principal employers.
              </p>
            </div>
          </div>

          {/* Agility */}
          <div className="vanguard-card p-6 rounded-2xl bg-slate-50 border border-purple-500/30 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-800">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-800">Agility</span>
              <h3 className="text-xl font-bold text-slate-900">Tactical Responsiveness</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Supported by a 24/7 Quick Response Team (QRT) and a structured reserve pool (reliever bench), we guarantee zero-post-vacant execution even during seasonal surges, emergencies, or unscheduled contingencies.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
