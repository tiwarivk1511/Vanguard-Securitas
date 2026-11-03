"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "How quickly can Vanguard mobilize personnel for a new client site?",
    a: "Our standard structured onboarding timeline takes 7 days from initial site vulnerability audit to ceremonial shift takeover. For urgent QRT contingencies, emergency guards can be deployed within 24 hours.",
  },
  {
    q: "How does Vanguard ensure 100% statutory compliance for principal employers?",
    a: "Every monthly invoice raised is accompanied by digital TRRN paid challan receipts for EPF, ESIC contribution statements, and direct NEFT bank disbursement sheets.",
  },
  {
    q: "What happens if a guard or housekeeping associate is absent?",
    a: "We maintain a dedicated reliever bench (reserve pool). Our 24/7 Control Room dispatches pre-trained replacement staff within 2 hours to ensure zero-post-vacant execution.",
  },
  {
    q: "Can we request a complimentary on-site security & hygiene audit before signing?",
    a: "Yes! Our operations team conducts complimentary on-site risk mapping and cleaning sq.ft. assessments with zero obligation. You will receive a tailored commercial proposal within 24 hours.",
  },
];

export const FAQAccordion: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-amber-900 text-xs font-extrabold uppercase tracking-wider shadow-xs">
          <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
          Frequently Asked Questions
        </div>
        <h2 className="text-3xl font-black text-slate-900">Client Inquiry FAQ</h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={faq.q}
              className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className="w-full p-5 text-left font-extrabold text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-amber-700 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-xs text-slate-700 font-semibold leading-relaxed border-t border-slate-100 pt-3"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
