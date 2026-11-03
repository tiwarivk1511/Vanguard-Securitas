"use client";

import React from "react";
import {
  DollarSign,
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  Award,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "100% On-Time Bank Salary",
    desc: "Direct NEFT salary transfer directly into your bank account on or before the 7th of every month with digital payslips.",
    color: "text-amber-800 bg-amber-500/15 border-amber-500/30",
  },
  {
    icon: HeartPulse,
    title: "Day 1 EPF & ESIC Cover",
    desc: "Immediate Provident Fund UAN generation & ESIC IP cards providing free medical & accidental treatment for you and family.",
    color: "text-emerald-800 bg-emerald-500/15 border-emerald-500/30",
  },
  {
    icon: ShieldCheck,
    title: "Free Uniforms & Kitting",
    desc: "Complete ceremonial uniform kit provided including badges, boots, belt, lanyard, walkie-talkie & safety PPE gear.",
    color: "text-blue-800 bg-blue-500/15 border-blue-500/30",
  },
  {
    icon: GraduationCap,
    title: "PSARA Academy Training",
    desc: "Paid professional drilling in access control, firefighting, CPR, floor scrubbers, and corporate hospitality etiquette.",
    color: "text-purple-800 bg-purple-500/15 border-purple-500/30",
  },
  {
    icon: Award,
    title: "Clear Promotion Ladder",
    desc: "Performers quickly escalate from Security Guard / Attendant to Head Sentry, Site Supervisor, and Area Field Officer.",
    color: "text-rose-800 bg-rose-500/15 border-rose-500/30",
  },
  {
    icon: CheckCircle2,
    title: "Dignified Work Environment",
    desc: "Strict POSH compliance, respectful workplace culture, structured reliever bench rest days, and legal protection.",
    color: "text-cyan-800 bg-cyan-500/15 border-cyan-500/30",
  },
];

export const WhyWorkWithVanguard: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
          Why Job Seekers Choose <span className="gold-gradient-text uppercase">Vanguard Securitas</span>
        </h2>
        <p className="text-slate-600 text-sm font-semibold">
          We treat our workforce as valued corporate ambassadors, providing dignity, security, and financial transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="vanguard-card p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-amber-500/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${b.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{b.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
