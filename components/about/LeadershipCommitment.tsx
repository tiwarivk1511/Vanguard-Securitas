"use client";

import React from "react";
import { Quote } from "lucide-react";

export const LeadershipCommitment: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="vanguard-card p-8 sm:p-12 rounded-3xl border border-amber-500/30 bg-white relative overflow-hidden shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          <div className="lg:col-span-3 text-center lg:text-left space-y-3 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8">
            <div className="w-16 h-16 mx-auto lg:mx-0 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800">
              <Quote className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-black text-slate-900 uppercase tracking-wider">
              Leadership Commitment
            </h4>
            <p className="text-xs text-amber-900 font-bold uppercase">
              Directorate of Operations
            </p>
          </div>

          <div className="lg:col-span-9 space-y-4 text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
            <p className="italic">
              &ldquo;In today&apos;s complex business environment, an organization&apos;s physical security, environmental hygiene, and support staff efficiency directly impact employee productivity and brand perception. At Vanguard Securitas & Manpower Services, we have engineered our operational framework from the ground up to eliminate the traditional pain points of the manpower industry—high attrition, lax supervision, and compliance opacity.&rdquo;
            </p>
            <p className="italic">
              &ldquo;Every guard, housekeeping attendant, and support associate wearing the Vanguard crest undergoes stringent background verification, behavioral grooming, and site-specific SOP drilling before stepping onto your premises. When you partner with Vanguard, you gain an accountable command structure dedicated to protecting your people, property, and peace of mind around the clock.&rdquo;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
