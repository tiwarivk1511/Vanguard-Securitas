"use client";

import React from "react";
import Link from "next/link";
import {
  UserCheck,
  ShieldCheck,
  HeartPulse,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Filter
} from "lucide-react";

const stages = [
  {
    step: "01",
    title: "Physical Screening",
    desc: "Physical stamina, height, eyesight, and literacy checks.",
    icon: UserCheck,
  },
  {
    step: "02",
    title: "KYC & Background",
    desc: "Aadhaar, PAN, police verification & past employer check.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Medical Fitness",
    desc: "Comprehensive physical fitness, vision, and substance screening.",
    icon: HeartPulse,
  },
  {
    step: "04",
    title: "Academy Drilling",
    desc: "PSARA modules, firefighting & customer soft skills.",
    icon: GraduationCap,
  },
  {
    step: "05",
    title: "Site Induction",
    desc: "Post orders, client SOP drilling & ceremonial sign-off.",
    icon: CheckCircle,
  },
];

export const VettingFunnel: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-slate-200 relative overflow-hidden" id="vetting-funnel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-xs font-bold uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-amber-700" />
            Selection & Training Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our 5-Stage <span className="font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest">Candidate Vetting Journey</span>
          </h2>
          <p className="text-slate-700 font-semibold text-sm sm:text-base leading-relaxed">
            Every security guard, housekeeping attendant, and support staff member passes our multi-tier verification before stepping onto your premises.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-md">
                      STEP {stage.step}
                    </span>
                    <Icon className="w-4 h-4 text-slate-700" />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Verification Dossier Callout with Gold Gradient Button */}
        <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="text-sm font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Audit-Ready Candidate Dossiers
            </div>
            <p className="text-xs text-slate-600 font-medium">
              We provide police verification copies, medical fitness reports, and Aadhaar records prior to site onboarding.
            </p>
          </div>

          <Link
            href="/about#vetting-funnel"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center gap-1.5"
          >
            <span>Training Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
