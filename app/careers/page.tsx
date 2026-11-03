"use client";

import React from "react";
import { CareersHero } from "@/components/careers/CareersHero";
import { WhyWorkWithVanguard } from "@/components/careers/WhyWorkWithVanguard";
import { OpenPositions } from "@/components/careers/OpenPositions";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { VettingFunnel } from "@/components/home/VettingFunnel";
import { CTASection } from "@/components/home/CTASection";

export default function CareersPage() {
  return (
    <div className="space-y-0 bg-slate-50">
      <CareersHero />
      <div className="py-16 md:py-20 bg-white border-b border-slate-200">
        <WhyWorkWithVanguard />
      </div>
      <div className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <OpenPositions />
      </div>
      <VettingFunnel />
      <div className="py-16 md:py-20 bg-white border-b border-slate-200">
        <ApplicationForm />
      </div>
      <CTASection />
    </div>
  );
}
