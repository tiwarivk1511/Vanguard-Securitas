"use client";

import React from "react";
import { BookOpen, ShieldCheck, Flame, Sparkles, Users2 } from "lucide-react";

export const TrainingModules: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-900 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-purple-700" />
          Vanguard Training Academy
        </div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
          Core Training & <span className="gold-gradient-text uppercase">Skill Enhancement Modules</span>
        </h2>
        <p className="text-slate-600 text-sm font-medium">
          Mandatory classroom and practical drilling before staff onboarding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="vanguard-card p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase">
              Module A
            </span>
            <ShieldCheck className="w-5 h-5 text-amber-700" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Tactical & Access Drills</h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            Parade drills, uniform turnout standards, frisking protocols, hand-held metal detector operation, vehicle under-chassis mirror checks, gate-pass verification, and perimeter intrusion deterrence.
          </p>
        </div>

        <div className="vanguard-card p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-900 text-xs font-bold uppercase">
              Module B
            </span>
            <Flame className="w-5 h-5 text-rose-700" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Firefighting & Life Safety</h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            Classification of fires (Class A, B, C, D, Electrical), hands-on operation of CO2, ABC, and foam extinguishers, hose-reel deployment, smoke evacuation leadership, and basic CPR/first aid.
          </p>
        </div>

        <div className="vanguard-card p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-blue-900 text-xs font-bold uppercase">
              Module C
            </span>
            <Sparkles className="w-5 h-5 text-blue-700" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Mechanized Hygiene Mastery</h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            Safe operation of single-disc scrubbers, wet/dry industrial vacuums, high-pressure jet washers, chemical dilution calibration, MSDS hazard literacy, and bio-waste segregation rules.
          </p>
        </div>

        <div className="vanguard-card p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-900 text-xs font-bold uppercase">
              Module D
            </span>
            <Users2 className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Corporate Etiquette & POSH</h3>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            Polite greeting protocols, telephone and intercom etiquette, conflict de-escalation without aggression, gender sensitization (POSH compliance), and monthly on-site refresher drills.
          </p>
        </div>

      </div>
    </section>
  );
};
