"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { motion } from "motion/react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-100 via-amber-500/10 to-slate-200/80 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl border border-amber-500/40 bg-white shadow-2xl shadow-slate-900/10 relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Column: Headline, Trust Badges, Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-950 text-xs font-black uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>24/7 Operations & Onboarding Directorate</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Ready to Upgrade Your Site Security & <br />
                <span className="font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest drop-shadow-xs">Facility Management?</span>
              </h2>

              {/* Subtext */}
              <p className="text-slate-700 font-semibold text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Contact our Operations Directorate today to receive a tailored, transparent commercial proposal and a complimentary on-site security & hygiene survey within 24 hours.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Schedule Free On-Site Survey
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
                  <a
                    href="tel:+918860661641"
                    className="flex-1 sm:flex-initial px-4 py-3.5 rounded-2xl font-black text-xs text-slate-900 bg-slate-50 border border-slate-300 hover:border-amber-500 hover:bg-amber-50/80 transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                    <span>+91 8860661641</span>
                  </a>

                  <a
                    href="tel:+919818152112"
                    className="flex-1 sm:flex-initial px-4 py-3.5 rounded-2xl font-black text-xs text-slate-900 bg-slate-50 border border-slate-300 hover:border-amber-500 hover:bg-amber-50/80 transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                    <span>+91 9818152112</span>
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs font-black text-slate-800">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-700" />
                  <span>24/7 Operations Desk</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>100% Statutory Compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-blue-700" />
                  <span>info.vanguardsecuritas@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-xl border border-amber-500/30 bg-white group text-left">
                {/* Embedded High-Res Photo Container */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80"
                    alt="Vanguard 24/7 Operations Command Desk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

                  {/* Floating Overlay Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-amber-500/30 shadow-md">
                      <Image
                        src="/vanguard-logo.png"
                        alt="Vanguard Logo"
                        width={24}
                        height={24}
                        className="shrink-0"
                      />
                      <span className="text-[10px] font-black gold-gradient-text uppercase tracking-wider">
                        Vanguard Securitas
                      </span>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white font-black text-[9px] uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      24/7 Active Desk
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white z-10 space-y-0.5">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-amber-300">Rapid Response Desk</div>
                    <h3 className="text-base sm:text-lg font-black text-white leading-tight">24-Hour Proposal & Site Risk Survey</h3>
                  </div>
                </div>

                {/* Lower Card Detail Grid */}
                <div className="p-5 space-y-3 bg-white">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-extrabold text-slate-900">Zero Cost Site Audit</div>
                      <div className="text-[11px] text-slate-600 font-medium">Free risk survey & commercial quotation</div>
                    </div>
                    <a
                      href="https://wa.me/918860661641?text=Hello%20Vanguard%20Securitas,%20I%20would%20like%20to%20request%20a%20site%20assessment."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[11px] flex items-center gap-1 shadow-xs transition-colors shrink-0"
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
      </div>
    </section>
  );
};
