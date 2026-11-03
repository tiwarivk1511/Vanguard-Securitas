"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldAlert,
  FileCheck2,
  Sparkles,
  GraduationCap,
  Clock4,
  Rocket,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: ShieldAlert,
    title: "Zero Post Vacant Assurance",
    desc: "24/7 Quick Response Team (QRT) and dedicated reliever bench ensure seamless post coverage without vacant posts.",
  },
  {
    icon: FileCheck2,
    title: "Legal & Statutory Indemnification",
    desc: "Complete Principal Employer protection with digital TRRN EPF challans, ESIC history, and direct bank wages.",
  },
  {
    icon: Sparkles,
    title: "Color-Coded Hygiene Standards",
    desc: "International 4-Color Microfiber & Mop System with MSDS-certified biodegradable green cleaning chemicals.",
  },
  {
    icon: GraduationCap,
    title: "Hospitality Etiquette & POSH",
    desc: "Groomed, polite support staff trained in corporate body language, intercom etiquette, and POSH compliance.",
  },
  {
    icon: Clock4,
    title: "Field Supervision & Night Patrols",
    desc: "Site Supervisors and Area Field Officers conducting surprise night patrols (01:00 AM – 04:00 AM).",
  },
  {
    icon: Rocket,
    title: "Structured Mobilization Roadmap",
    desc: "Smooth site takeover timeline from initial perimeter risk survey and SLA drafting to ceremonial Go-Live.",
  },
];

export const WhyVanguard: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-950 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
            Operational Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Businesses Choose <span className="font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest">Vanguard Securitas</span>
          </h2>
          <p className="text-slate-700 font-semibold text-sm sm:text-base leading-relaxed">
            We eliminate common workforce pain points—high attrition, lax supervision, and compliance opacity—through disciplined field leadership.
          </p>
        </div>

        {/* Asymmetric Split Layout: Left Visual Card + Right Feature List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Visual Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                  alt="Vanguard Operations & Supervision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[10px] font-bold text-amber-300 uppercase">Field Command</div>
                  <div className="text-sm font-extrabold">24/7 Monitoring & Night Audits</div>
                </div>
              </div>
              <div className="p-4 space-y-2 text-xs text-slate-700 font-medium">
                <p>
                  Our Area Field Officers conduct surprise night patrols between 01:00 AM – 04:00 AM to verify post alertness and guard sobriety across all sites.
                </p>
                <Link
                  href="/process"
                  className="inline-flex items-center gap-1.5 font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest pt-1 hover:underline"
                >
                  <span>Explore Supervision Process</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-500/40 transition-colors space-y-2 shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest shrink-0">
                      <Icon className="w-4 h-4 text-amber-700" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {feat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed pl-10">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
