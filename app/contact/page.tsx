"use client";

import React from "react";
import { ContactHero } from "@/components/contact/ContactHero";
import { CorporateHelplines } from "@/components/contact/CorporateHelplines";
import { AuditBookingForm } from "@/components/contact/AuditBookingForm";
import { FAQAccordion } from "@/components/contact/FAQAccordion";
import { CTASection } from "@/components/home/CTASection";

export default function ContactPage() {
  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      <ContactHero />

      {/* Main Form & Direct Info Grid */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <CorporateHelplines />
            </div>

            <div className="lg:col-span-7">
              <AuditBookingForm />
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <FAQAccordion />
      </div>

      <CTASection />
    </div>
  );
}
