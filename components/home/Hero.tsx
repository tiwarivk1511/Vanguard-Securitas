"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Users,
  CheckCircle2,
  Phone,
  Award,
  Clock
} from "lucide-react";
import { motion } from "motion/react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:py-24 border-b border-slate-200 min-h-[85vh] flex items-center">
      {/* High-Res Full Background Image Layer (Optimized for Instant Loading) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=75"
          alt="Vanguard Corporate Infrastructure Security"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-85 scale-105"
          priority
        />
        {/* Soft Light Glass Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-white/85 to-slate-50/75 backdrop-blur-[1px]" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline, Copy & Golden Gradient CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-950 text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-xs">
              <Award className="w-4 h-4 text-amber-700" />
              <span>Next-Generation Corporate Manpower Architecture</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Engineered For <br />
              <span className="font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest drop-shadow-xs">Zero-Compromise</span> <br />
              Operational Continuity
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-800 font-bold leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Vanguard Securitas & Manpower Services consolidates <strong className="text-amber-950 font-black">Security Guards</strong>, <strong className="text-amber-950 font-black">Mechanized Housekeeping</strong>, and <strong className="text-amber-950 font-black">Enterprise Support Staff</strong> under a single unified command structure governed by strict ISO SOPs and 100% statutory transparency.
            </p>

            {/* 3 Core Vertical Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-black text-slate-900 shadow-md">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-800 shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <span>Manned Guarding</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-black text-slate-900 shadow-md">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-800 shrink-0">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <span>Mechanized Hygiene</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-black text-slate-900 shadow-md">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-800 shrink-0">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <span>Support Staffing</span>
              </div>
            </div>

            {/* Action Buttons & Dual Phone Helplines */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4.5 h-4.5" />
                  Book Free On-Site Audit
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
                <a
                  href="tel:+918860661641"
                  className="flex-1 sm:flex-initial px-4 py-3.5 rounded-2xl font-black text-xs text-slate-900 bg-white border border-slate-300 hover:border-amber-500 hover:bg-amber-50/80 transition-all flex items-center justify-center gap-2 shadow-sm backdrop-blur-md"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                  <span>+91 8860661641</span>
                </a>

                <a
                  href="tel:+919818152112"
                  className="flex-1 sm:flex-initial px-4 py-3.5 rounded-2xl font-black text-xs text-slate-900 bg-white border border-slate-300 hover:border-amber-500 hover:bg-amber-50/80 transition-all flex items-center justify-center gap-2 shadow-sm backdrop-blur-md"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                  <span>+91 9818152112</span>
                </a>
              </div>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-900 font-black">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Zero Post-Vacant Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>100% Legal Indemnification</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>7-Day Rapid Mobilization</span>
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
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-amber-500/40 bg-white group">
              {/* Card High-Res Visual Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=75"
                  alt="Vanguard Manned Guarding & Security Personnel"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={75}
                  className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

                {/* Floating Top Emblem Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-amber-500/30 shadow-md">
                    <Image
                      src="/vanguard-logo.png"
                      alt="Vanguard Shield Crest"
                      width={28}
                      height={28}
                      className="shrink-0"
                    />
                    <span className="text-[11px] font-black gold-gradient-text uppercase tracking-wider">
                      Vanguard Securitas
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white font-black text-[10px] uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    24/7 Active
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-amber-300">Enterprise Asset Protection</div>
                  <h3 className="text-xl font-black text-white leading-tight">Zero-Compromise Security & Facility Management</h3>
                </div>
              </div>

              {/* Lower Card Detail Grid */}
              <div className="p-6 space-y-4 bg-white">
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" />
                      QRT Oversight
                    </div>
                    <p className="text-[11px] text-slate-800 font-extrabold">24/7 Command Desk</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-800 text-[11px] font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      100% PSARA
                    </div>
                    <p className="text-[11px] text-slate-800 font-extrabold">Statutory Compliant</p>
                  </div>
                </div>

                {/* Quick Assessment Callout Pill with Golden Gradient Button */}
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-[10px] text-amber-900 uppercase tracking-widest font-extrabold">Complimentary Assessment</div>
                    <div className="text-xs font-extrabold text-slate-900">Site Risk Survey & SOP Report</div>
                  </div>
                  <Link
                    href="/contact"
                    className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-[11px] uppercase transition-colors shadow-sm"
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
