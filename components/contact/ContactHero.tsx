"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import { motion } from "motion/react";

export const ContactHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:py-24 border-b border-slate-200 min-h-[85vh] flex items-center">
      {/* High-Res Full Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1920&q=80"
          alt="Vanguard 24/7 Client Onboarding Desk"
          fill
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

          {/* Left Column: Headlines & Direct Call Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-950 text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-xs">
              <Phone className="w-4 h-4 text-amber-700" />
              <span>24/7 Operations & Onboarding Desk</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Schedule A Complimentary <br className="hidden sm:inline" />
              <span className="font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest drop-shadow-xs">Facility & Security Audit</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-800 font-bold leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Reach out to our Directorate of Operations today. We provide transparent commercial proposals and detailed site risk assessments within 24 hours across Delhi, Noida, Greater Noida, Ghaziabad, Hapur, Bulandshahar & Prayagraj.
            </p>

            {/* Direct Dual Call Buttons & Golden Gradient CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="tel:+918860661641"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-slate-950 animate-pulse" />
                <span>Line 1: +91 8860661641</span>
              </a>

              <a
                href="tel:+919818152112"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl font-black text-xs text-slate-900 bg-white border border-slate-300 hover:border-amber-500 hover:bg-amber-50/80 transition-all flex items-center justify-center gap-2 shadow-sm backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-amber-700 animate-pulse" />
                <span>Line 2: +91 9818152112</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-900 font-black">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>24-Hour Commercial Proposal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Zero-Cost Site Survey</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Instant Connect</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Ultra Modern Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-amber-500/40 bg-white group">
              {/* Card High-Res Visual Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80"
                  alt="Vanguard 24/7 Operations Command Desk"
                  fill
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
                      Command Desk
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white font-black text-[10px] uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    24/7 Active
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-amber-300">Directorate Of Operations</div>
                  <h3 className="text-xl font-black text-white leading-tight">Direct Client Onboarding & Proposal Desk</h3>
                </div>
              </div>

              {/* Lower Card Detail Grid */}
              <div className="p-6 space-y-4 bg-white">
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" />
                      Rapid Survey
                    </div>
                    <p className="text-[11px] text-slate-800 font-extrabold">24-Hour Turnaround</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-800 text-[11px] font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Site Audit
                    </div>
                    <p className="text-[11px] text-slate-800 font-extrabold">Zero Cost Survey</p>
                  </div>
                </div>

                {/* Quick Assessment Callout Pill */}
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-[10px] text-emerald-900 uppercase tracking-widest font-extrabold">Instant Connect</div>
                    <div className="text-xs font-extrabold text-slate-900">WhatsApp Operations Chat</div>
                  </div>
                  <a
                    href="https://wa.me/918860661641?text=Hello%20Vanguard%20Securitas,%20I%20would%20like%20to%20request%20a%20site%20assessment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[11px] uppercase transition-colors shadow-xs flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Chat
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
