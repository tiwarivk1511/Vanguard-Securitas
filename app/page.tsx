import React from "react";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { VettingFunnel } from "@/components/home/VettingFunnel";
import { WhyVanguard } from "@/components/home/WhyVanguard";
import { MobilizationRoadmap } from "@/components/home/MobilizationRoadmap";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <Hero />
      <StatsSection />
      <ServicesShowcase />
      <VettingFunnel />
      <WhyVanguard />
      <MobilizationRoadmap />
      <CTASection />
    </div>
  );
}
