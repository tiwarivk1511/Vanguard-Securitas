"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { VanguardLogo } from "./ui/VanguardLogo";
import {
  Phone,
  Mail,
  ShieldCheck,
  Award,
  FileText,
  CheckCircle2,
  ArrowRight,
  MessageSquare
} from "lucide-react";

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-100/90 text-slate-800 border-t border-slate-200 relative overflow-hidden pt-16 pb-8">
      {/* Top Metallic Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-sm shadow-amber-500/20" />

      {/* Subtle Background Radial Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">

          {/* Col 1: Brand Info & Command Desk */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <VanguardLogo size="lg" lightText={false} />
            </Link>

            <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-md">
              Vanguard Securitas & Manpower Services is India&apos;s premier integrated security and facility workforce management organization. Built to safeguard corporate infrastructure, industrial plants, commercial towers, and institutional campuses with zero compromise.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+918860661641"
                  className="flex items-center gap-3 text-sm text-slate-900 hover:text-amber-800 transition-colors group p-3 rounded-xl bg-white border border-amber-500/30 hover:border-amber-500 shadow-xs hover:shadow-md flex-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-widest font-extrabold">24/7 Line 1</div>
                    <div className="font-extrabold text-sm text-slate-900">+91 8860661641</div>
                  </div>
                </a>

                <a
                  href="tel:+919818152112"
                  className="flex items-center gap-3 text-sm text-slate-900 hover:text-amber-800 transition-colors group p-3 rounded-xl bg-white border border-amber-500/30 hover:border-amber-500 shadow-xs hover:shadow-md flex-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-widest font-extrabold">24/7 Line 2</div>
                    <div className="font-extrabold text-sm text-slate-900">+91 9818152112</div>
                  </div>
                </a>
              </div>

              <a
                href="mailto:info.vanguardsecuritas@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-900 hover:text-blue-800 transition-colors group p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-800 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-widest font-extrabold">Official Corporate Email</div>
                  <div className="font-bold text-xs text-slate-900">info.vanguardsecuritas@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Col 2: Core Service Verticals */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 border-b border-amber-500/30 pb-2">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              Service Verticals
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link href="/services#manned-guarding" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Manned Guarding Services
                </Link>
              </li>
              <li>
                <Link href="/services#housekeeping" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Mechanized Housekeeping
                </Link>
              </li>
              <li>
                <Link href="/services#support-staff" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Enterprise Support Staffing
                </Link>
              </li>
              <li>
                <Link href="/services#executive-bouncers" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Executive VIP Bouncers
                </Link>
              </li>
              <li>
                <Link href="/services#fire-wardens" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Fire & Emergency Wardens
                </Link>
              </li>
              <li>
                <Link href="/services#color-coded-hygiene" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Eco-Green Hygiene SOPs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Governance & Navigation */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 border-b border-amber-500/30 pb-2">
              <Award className="w-4 h-4 text-amber-700" />
              Company Links
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link href="/about" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Strategic Vision & Ethos
                </Link>
              </li>
              <li>
                <Link href="/about#vetting-funnel" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Selection & Vetting Funnel
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Careers & Recruitment
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Mobilization Roadmap
                </Link>
              </li>
              <li>
                <Link href="/process#supervision" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Night Patrol Matrix
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Book Free Site Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Statutory Certifications Badges & Quick Action */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 border-b border-amber-500/30 pb-2">
              <FileText className="w-4 h-4 text-amber-700" />
              Compliance Seals
            </h4>
            <div className="space-y-2.5">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-extrabold text-slate-900">PSARA Aligned</div>
                  <div className="text-[11px] text-slate-500 font-medium">Strict regulatory guard verification & norms</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-extrabold text-slate-900">Full EPF & ESIC Cover</div>
                  <div className="text-[11px] text-slate-500 font-medium">Day 1 UAN & IP card generation</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-extrabold text-slate-900">ISO-Grade SOPs</div>
                  <div className="text-[11px] text-slate-500 font-medium">Audited site operation manuals</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/918860661641?text=Hello%20Vanguard%20Securitas,%20I%20would%20like%20to%20request%20a%20site%20assessment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Quick Connect
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <span>© {currentYear} <strong className="text-slate-900">Vanguard Securitas & Manpower Services</strong>. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/careers" className="hover:text-amber-800 transition-colors">
              Careers & Jobs
            </Link>
            <Link href="/process" className="hover:text-amber-800 transition-colors">
              SLA Guarantee
            </Link>
            <Link href="/contact" className="hover:text-amber-800 transition-colors">
              Rapid Response Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
