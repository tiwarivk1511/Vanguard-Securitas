"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
  Clock
} from "lucide-react";
import { motion } from "motion/react";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 border-b border-slate-200 bg-slate-50 flex items-center">
      {/* High-Res Full Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Vanguard Corporate Infrastructure"
          fill
          className="object-cover object-center opacity-85"
          priority
        />
        {/* Soft Light Glass Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-white/85 to-slate-50/75 backdrop-blur-[1px]" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Headlines & Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-950 text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-xs">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>Corporate Identity, Vision & Governance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Built to Protect Your People, Assets & <br className="hidden sm:inline" />
              <span className="font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest drop-shadow-xs">Peace of Mind</span> Around the Clock
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-800 font-bold leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Vanguard Securitas & Manpower Services operates at the intersection of disciplined physical vigilance, modern mechanized sanitation, and seamless administrative support across India.
            </p>

            {/* 3 Core Pillar Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-black text-slate-900 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-800 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>PSARA Aligned</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-black text-slate-900 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-800 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>ISO-Grade SOPs</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-black text-slate-900 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-800 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>100% Compliant</span>
              </div>
            </div>

            {/* Action Buttons with Golden Gradient */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto relative group overflow-hidden px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-md shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Schedule Free On-Site Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
                <a
                  href="tel:+918860661641"
                  className="flex-1 sm:flex-initial px-3.5 py-3 rounded-xl font-black text-xs text-slate-900 bg-white border border-slate-300 hover:border-amber-500 hover:bg-amber-50/80 transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                  <span>+91 8860661641</span>
                </a>

                <a
                  href="tel:+919818152112"
                  className="flex-1 sm:flex-initial px-3.5 py-3 rounded-xl font-black text-xs text-slate-900 bg-white border border-slate-300 hover:border-amber-500 hover:bg-amber-50/80 transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                  <span>+91 9818152112</span>
                </a>
              </div>
            </div>

            {/* Micro Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-900 font-black">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Proactive Prevention</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Zero Default Statutory</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>7-Day Rapid Onboarding</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden shadow-xl border border-amber-500/40 bg-white group">
              {/* Card Photo Container */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                  alt="Vanguard Corporate Operations Team"
                  fill
                  className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

                {/* Floating Top Emblem Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-amber-500/30 shadow-md">
                    <Image
                      src="/vanguard-logo.png"
                      alt="Vanguard Shield Crest"
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                    <span className="text-[10px] font-black gold-gradient-text uppercase tracking-wider">
                      Vanguard Securitas
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-black text-[9px] uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    Verified Leadership
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white z-10 space-y-0.5">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-amber-300">Leadership Mandate</div>
                  <h3 className="text-base sm:text-lg font-black text-white leading-tight">Zero-Compromise Security & Workforce Excellence</h3>
                </div>
              </div>

              {/* Lower Card Detail Grid */}
              <div className="p-4 space-y-3 bg-white">
                <div className="grid grid-cols-2 gap-2.5 text-left">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                    <div className="flex items-center gap-1 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                      <Clock className="w-3 h-3" />
                      QRT Bench
                    </div>
                    <p className="text-[10px] text-slate-800 font-extrabold">Zero Post Vacant</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                    <div className="flex items-center gap-1 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3" />
                      100% PSARA
                    </div>
                    <p className="text-[10px] text-slate-800 font-extrabold">Statutory Verified</p>
                  </div>
                </div>

                {/* Quick Assessment Callout Pill with Golden Gradient */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
                  <div className="text-left">
                    <div className="text-[9px] text-amber-900 uppercase tracking-widest font-extrabold">Complimentary Assessment</div>
                    <div className="text-[11px] font-extrabold text-slate-900">Site Risk Survey & SOP Report</div>
                  </div>
                  <Link
                    href="/contact"
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-[10px] uppercase transition-colors shadow-sm"
                  >
                    Request
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
