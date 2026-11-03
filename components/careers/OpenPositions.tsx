"use client";

import React from "react";
import { ShieldCheck, Sparkles, Users, Briefcase } from "lucide-react";

const positions = [
  {
    category: "Division 01 // Security Guards",
    title: "Manned Security Guard & Sentries",
    roles: [
      "Civilian Security Guard (Corporate / Commercial Towers)",
      "Industrial Sentry & Gate Control Sentry",
      "Lady Security Guard (Frisking & Lobby Vigilance)",
      "Executive Protection / VIP Bouncer",
      "Security Supervisor & Head Guard (Ex-Servicemen Preferred)",
    ],
    badgeColor: "text-amber-900 bg-amber-500/15 border-amber-500/30",
    icon: ShieldCheck,
  },
  {
    category: "Division 02 // Housekeeping Services",
    title: "Mechanized Housekeeping Attendants",
    roles: [
      "Auto-Scrubber & Floor Machine Operator",
      "Corporate Cabin & Workstation Specialist",
      "Washroom Hygiene & Restroom Attendant",
      "Industrial Shop Floor & Warehouse Cleaner",
      "Housekeeping Supervisor & Quality Inspector",
    ],
    badgeColor: "text-blue-900 bg-blue-500/15 border-blue-500/30",
    icon: Sparkles,
  },
  {
    category: "Division 03 // Enterprise Support Staff",
    title: "Administrative & Support Personnel",
    roles: [
      "Front-Desk Executive & Receptionist (Graduate & Bilingual)",
      "Office Assistant & Multi-Tasking Staff (MTS)",
      "Corporate Pantry Steward & Hospitality Associate",
      "Data Entry Operator & Back-Office Assistant",
      "Warehouse Loader, Packer & Material Helper",
    ],
    badgeColor: "text-emerald-900 bg-emerald-500/15 border-emerald-500/30",
    icon: Users,
  },
];

export const OpenPositions: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-xs">
          <Briefcase className="w-3.5 h-3.5 text-amber-700" />
          Immediate Openings
        </div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
          Current <span className="gold-gradient-text uppercase">Job Vacancies</span> Across Service Regions
        </h2>
        <p className="text-slate-600 text-sm font-semibold">
          Immediate site deployments available across Delhi, Noida, Greater Noida, Ghaziabad, Hapur, Bulandshahar & Prayagraj.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {positions.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.category}
              className="vanguard-card p-6 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border ${p.badgeColor}`}>
                  {p.category}
                </span>

                <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Icon className="w-5 h-5 text-amber-700 shrink-0" />
                  {p.title}
                </h3>

                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {p.roles.map((r) => (
                    <li key={r} className="text-xs font-semibold text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#application-form"
                  className="block text-center py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
                >
                  Apply For This Position
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
