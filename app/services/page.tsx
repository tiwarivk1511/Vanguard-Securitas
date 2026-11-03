"use client";

import React from "react";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { MannedGuardingDeepDive } from "@/components/services/MannedGuardingDeepDive";
import { HousekeepingDeepDive } from "@/components/services/HousekeepingDeepDive";
import { CTASection } from "@/components/home/CTASection";

export default function ServicesPage() {
  return (
    <div className="space-y-0 bg-slate-50">
      <ServicesHero />
      <ServicesShowcase />
      <div className="py-16 md:py-20 bg-white border-b border-slate-200">
        <MannedGuardingDeepDive />
      </div>
      <div className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <HousekeepingDeepDive />
      </div>
      <CTASection />
    </div>
  );
}
