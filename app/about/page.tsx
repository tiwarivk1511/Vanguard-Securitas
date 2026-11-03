"use client";

import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { CorporateMandate } from "@/components/about/CorporateMandate";
import { StrategicPhilosophy } from "@/components/about/StrategicPhilosophy";
import { LeadershipCommitment } from "@/components/about/LeadershipCommitment";
import { TrainingModules } from "@/components/about/TrainingModules";
import { VettingFunnel } from "@/components/home/VettingFunnel";
import { CTASection } from "@/components/home/CTASection";

export default function AboutPage() {
  return (
    <div className="space-y-0 bg-slate-50">
      <AboutHero />
      <div className="py-16 md:py-20 bg-white border-b border-slate-200">
        <CorporateMandate />
      </div>
      <StrategicPhilosophy />
      <div className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <LeadershipCommitment />
      </div>
      <VettingFunnel />
      <div className="py-16 md:py-20 bg-white border-b border-slate-200">
        <TrainingModules />
      </div>
      <CTASection />
    </div>
  );
}
