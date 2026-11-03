"use client";

import React from "react";
import { ShieldCheck, Clock, FileCheck, Award, Users2, Zap } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "Integrated",
    label: "Service Verticals",
    desc: "Guards, Housekeeping & Support Staffing",
  },
  {
    icon: Clock,
    value: "Continuous",
    label: "Command Oversight",
    desc: "24/7 Desk & Night Patrol Inspections",
  },
  {
    icon: FileCheck,
    value: "Complete",
    label: "Statutory Compliance",
    desc: "EPF, ESIC, Minimum Wages & PSARA",
  },
  {
    icon: Award,
    value: "ISO-Grade",
    label: "SOP Governance",
    desc: "Site Manuals & Incident Escalation",
  },
  {
    icon: Users2,
    value: "Selective",
    label: "Funnel Vetting",
    desc: "Physical, KYC, Medical & Police Vetting",
  },
  {
    icon: Zap,
    value: "Rapid",
    label: "Site Mobilization",
    desc: "From Survey to Ceremonial Go-Live",
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col justify-between space-y-2 p-3 ${idx > 0 ? "md:pl-4" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-800 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-amber-900 uppercase tracking-wider">
                    {stat.value}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-extrabold text-slate-900">
                    {stat.label}
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium leading-snug mt-0.5">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
