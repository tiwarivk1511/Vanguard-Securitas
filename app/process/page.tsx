"use client";

import React from "react";
import { ProcessHero } from "@/components/process/ProcessHero";
import { SupervisionMatrix } from "@/components/process/SupervisionMatrix";
import { MobilizationRoadmap } from "@/components/home/MobilizationRoadmap";
import { CTASection } from "@/components/home/CTASection";

export default function ProcessPage() {
  return (
    <div className="space-y-0 bg-slate-50">
      <ProcessHero />
      <MobilizationRoadmap />
      <div className="py-16 md:py-20 bg-white border-b border-slate-200">
        <SupervisionMatrix />
      </div>
      <CTASection />
    </div>
  );
}
