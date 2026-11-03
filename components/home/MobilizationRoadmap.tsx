"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  Search,
  FileText,
  Truck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    phase: "PHASE 01",
    title: "Site Audit & Survey",
    desc: "Perimeter vulnerability mapping, cleaning area calculation & proposal submission.",
    icon: Search,
  },
  {
    phase: "PHASE 02",
    title: "SLA & Roster Setup",
    desc: "Work order execution, post orders drafting & candidate shortlisting.",
    icon: FileText,
  },
  {
    phase: "PHASE 03",
    title: "Dry Run & Dispatch",
    desc: "Uniform kitting, walkie-talkie/register delivery & shadow shift induction.",
    icon: Truck,
  },
  {
    phase: "PHASE 04",
    title: "Go-Live & Command",
    desc: "Ceremonial shift takeover, daily attendance reporting & night patrol audits.",
    icon: CheckCircle2,
  },
];

export const MobilizationRoadmap: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-950 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-cyan-700" />
            Seamless Onboarding Protocol
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Structured <span className="font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest">Mobilization Roadmap</span>
          </h2>
          <p className="text-slate-700 font-semibold text-sm sm:text-base leading-relaxed">
            Transitioning your security, housekeeping, or support staffing to Vanguard Securitas is structured, completely seamless, and disruption-free.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.phase}
                className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 uppercase">
                      {step.phase}
                    </span>
                    <Icon className="w-4 h-4 text-slate-700" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link with Gold Gradient Button */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-amber-500/25 transition-all"
          >
            <span>Initiate Site Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
