"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Layers,
  UserCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const verticals = [
  {
    id: "security",
    title: "Manned Guarding & Security",
    subtitle: "Division 01 // Security Guards",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "text-amber-900 bg-amber-500/15 border-amber-500/35",
    description: "Deploying physically fit, mentally alert, and legally vetted security personnel trained under PSARA guidelines as the first line of defense against unauthorized intrusion, pilferage, and hazards.",
    roles: [
      { name: "Civilian & Corporate Security Guards", detail: "24/7 static post guarding, perimeter patrolling, digital visitor logging, and parking traffic regulation." },
      { name: "Industrial & Gate Control Sentries", detail: "Inward/outward material gate-pass reconciliation, vehicle frisking, weighbridge oversight, dock security." },
      { name: "Security Supervisors & Head Guards", detail: "Ex-Servicemen led shift roster management, CCTV control room oversight, and client liaison." },
      { name: "Female Security Personnel (Lady Guards)", detail: "Dedicated frisking for female staff, reception lobby vigilance, and zone monitoring." },
      { name: "Executive Protection & VIP Bouncers", detail: "Close-quarter protection for corporate AGMs, VIP transit, crowd control, and access restriction." },
      { name: "Fire & Emergency Wardens", detail: "Hydrant/extinguisher inspection, assembly point coordination, and emergency evacuations." },
    ],
    highlights: [
      "Strict Multi-Stage Access Verification",
      "Randomized Night Patrol Audits",
      "Emergency Response SOPs",
      "PSARA Certified & Police Verified"
    ]
  },
  {
    id: "housekeeping",
    title: "Mechanized Housekeeping",
    subtitle: "Division 02 // Housekeeping Services",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "text-blue-900 bg-blue-500/15 border-blue-500/35",
    description: "Scientific, mechanized, and eco-conscious facility upkeep engineered to maintain pristine hygiene, sterile workspaces, and odor-free environments across commercial and industrial properties.",
    roles: [
      { name: "Workstations, Cabins & Boardrooms", detail: "Microfiber dry/wet dusting, ergonomic chair care, and anti-static IT peripheral cleaning." },
      { name: "Restrooms & Washroom Hygiene", detail: "Hourly checklist sign-offs, UV/odor inspection audits, WC/urinal high-frequency sanitization." },
      { name: "Lobbies, Corridors & Hard Floors", detail: "Walk-behind auto-scrubbers, single-disc buffing, granite/marble crystallization, and safety." },
      { name: "Pantry, Cafeteria & Dining Zones", detail: "Food-safe surface degreasing, dishwashing area upkeep, and immediate waste clearance cycles." },
      { name: "Industrial Shop Floors & Warehouses", detail: "Heavy-duty sweeping, oil stain removal, high-reach duct vacuuming, and scrap segregation." },
      { name: "Facade, Glass & Carpet Care", detail: "Internal/external glass squeegee cleaning, carpet shampooing, and upholstery dry-foam extraction." },
    ],
    highlights: [
      "International 4-Color Microfiber System",
      "MSDS-Certified Biodegradable Green Chemicals",
      "Hourly Restroom Checklist Sign-offs",
      "Zero Cross-Contamination Guarantee"
    ]
  },
  {
    id: "support",
    title: "Enterprise Support Staffing",
    subtitle: "Division 03 // Support Staff",
    icon: Users,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "text-emerald-900 bg-emerald-500/15 border-emerald-500/35",
    description: "Articulate, well-groomed, and task-proficient auxiliary personnel integrating seamlessly into daily administrative workflows from front-desk hospitality to back-office logistics.",
    roles: [
      { name: "Front-Desk Executives & Receptionists", detail: "EPABX call routing, visitor greeting, digital pass issuance, meeting room calendar coordination." },
      { name: "Office Assistants & Multi-Tasking Staff (MTS)", detail: "Inter-departmental file movement, scanning, binding, stationery tracking, and statutory errands." },
      { name: "Corporate Pantry & Hospitality Stewards", detail: "Executive beverage service, boardroom refreshment layout, crockery sterilization, and VIP guest care." },
      { name: "Data Entry & Back-Office Associates", detail: "35+ WPM typing speed, ERP/MIS data punching, invoice digitization, and record archiving." },
      { name: "Warehouse Loaders, Packers & Helpers", detail: "Pallet wrapping, SKU sorting, barcode labeling, trolley movement, and safe manual lifting." },
      { name: "Technical & Campus Utility Helpers", detail: "Assisting site electricians, plumbers, HVAC technicians, and STP operators in preventive maintenance." },
    ],
    highlights: [
      "Zero HR Burden for Principal Employer",
      "Hospitality-Grade Soft Skills & POSH Trained",
      "Same-Day Reliever Bench Replacement",
      "100% Direct Bank Wages & EPF/ESIC"
    ]
  }
];

export const ServicesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState("security");
  const currentVertical = verticals.find((v) => v.id === activeTab) || verticals[0];
  const Icon = currentVertical.icon;

  return (
    <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-950 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            Unified Workforce Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Core <span className="font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest">Service Divisions</span>
          </h2>
          <p className="text-slate-700 font-semibold text-sm sm:text-base leading-relaxed">
            Consolidated Security Guards, Mechanized Housekeeping, and Office Support Staff under a single accountable command structure.
          </p>
        </div>

        {/* Vertical Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-2.5 mb-8">
          {verticals.map((vert) => {
            const TabIcon = vert.icon;
            const isSelected = activeTab === vert.id;
            return (
              <button
                key={vert.id}
                onClick={() => setActiveTab(vert.id)}
                className={`flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                  isSelected
                    ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-md font-extrabold"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <TabIcon className="w-4.5 h-4.5" />
                <span>{vert.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVertical.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xl text-left"
          >
            {/* Top Subtitle & Embedded Photo Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-b border-slate-200 pb-6 mb-6 items-center">
              <div className="lg:col-span-8 space-y-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${currentVertical.badgeColor}`}>
                  {currentVertical.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2.5">
                  <Icon className="w-6 h-6 text-amber-700 shrink-0" />
                  {currentVertical.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                  {currentVertical.description}
                </p>
              </div>

              {/* Photo Preview Card */}
              <div className="lg:col-span-4 relative h-40 rounded-xl overflow-hidden shadow-md border border-slate-200">
                <Image
                  src={currentVertical.image}
                  alt={currentVertical.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-bold truncate">
                  {currentVertical.title}
                </div>
              </div>
            </div>

            {/* Roles Grid */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-amber-700" />
                Deployed Positions & Operational Scope
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentVertical.roles.map((role) => (
                  <div
                    key={role.name}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1"
                  >
                    <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {role.name}
                    </div>
                    <p className="text-[11px] text-slate-600 font-medium leading-normal">
                      {role.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Key Highlights & CTA with Gold Gradient */}
            <div className="pt-4 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-800 w-full lg:w-auto">
                {currentVertical.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full lg:w-auto justify-end">
                <Link
                  href="/services"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors flex items-center gap-1.5"
                >
                  Full Specifications
                  <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                </Link>

                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-amber-500/25 transition-all"
                >
                  Request Proposal
                </Link>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
