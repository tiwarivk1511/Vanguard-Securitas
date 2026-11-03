"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VanguardLogo } from "./ui/VanguardLogo";
import {
  Phone,
  Mail,
  ShieldCheck,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Process & SLA", href: "/process" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Bar (Dark Navy contrast header) */}
      <div className="bg-[#0B172A] border-b border-slate-800 text-xs py-2 px-4 text-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="tel:+918860661641"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span><strong className="text-white">+91 8860661641</strong></span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="tel:+919818152112"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span><strong className="text-white">+91 9818152112</strong></span>
              </a>
            </div>

            <a
              href="mailto:info.vanguardsecuritas@gmail.com"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>info.vanguardsecuritas@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-300">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
              <ShieldCheck className="w-3 h-3" /> 100% Statutory Compliant
            </span>
            <span className="flex items-center gap-1.5 text-amber-300 font-medium bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded-full">
              <Clock className="w-3 h-3" /> 24/7/365 QRT Command
            </span>
          </div>
        </div>
      </div>

      {/* Main Light Mode Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-3 shadow-md shadow-slate-900/5"
            : "bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <VanguardLogo size="md" lightText={false} />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-amber-800 bg-amber-500/10 border border-amber-500/30 font-bold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918860661641"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Call Helpline</span>
            </a>

            <Link
              href="/contact"
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Book Free Audit
              </span>
              <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+918860661641"
              className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-700"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-3">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? "text-amber-800 bg-amber-500/15 border border-amber-500/30 font-bold"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-70" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href="tel:+918860661641"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-bold text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  +91 8860661641
                </a>
                <a
                  href="tel:+919818152112"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-bold text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  +91 9818152112
                </a>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 mt-1"
                >
                  <Sparkles className="w-4 h-4" />
                  Schedule Free On-Site Audit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
