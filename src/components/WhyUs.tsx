"use client";

import { whyUsPrinciples } from "@/data/content";
import { CheckCircle2, ShieldCheck, Compass, Lightbulb, LineChart, RefreshCw } from "lucide-react";

export default function WhyUs() {
  const getPrincipleIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Lightbulb className="w-5 h-5" />;
      case 1:
        return <LineChart className="w-5 h-5" />;
      case 2:
        return <Compass className="w-5 h-5" />;
      case 3:
        return <ShieldCheck className="w-5 h-5" />;
      case 4:
        return <RefreshCw className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-us" className="relative py-28 bg-[#F7F9F8] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#43D6B0]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#087E79]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#087E79]/20 text-[#087E79] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Our Working Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#102D29] tracking-tight max-w-3xl">
            Why Partner With RK TECHNOCRAFT
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405854] max-w-2xl text-balance">
            We operate with engineering discipline, business empathy, and a product builder&apos;s mindset to deliver software that endures.
          </p>
        </div>

        {/* 5 Working Principles Grid in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {whyUsPrinciples.map((principle, idx) => (
            <div
              key={principle.number}
              className={`glass-panel-light p-8 rounded-2xl border border-[#087E79]/15 hover:border-[#087E79] transition-all duration-300 relative group overflow-hidden bg-white glass-panel-light-hover ${
                idx === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-[#F0F5F4] text-[#087E79] border border-[#087E79]/10 group-hover:bg-[#087E79] group-hover:text-white transition-colors">
                  {getPrincipleIcon(idx)}
                </div>
                <span className="text-2xl font-black font-mono text-[#087E79]/20 group-hover:text-[#087E79]/60 transition-colors">
                  {principle.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#102D29] mb-3 group-hover:text-[#087E79] transition-colors">
                {principle.title}
              </h3>

              <p className="text-sm text-[#405854] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}

          {/* Value Summary Card for symmetry */}
          <div className="glass-panel-light p-8 rounded-2xl border border-[#087E79]/20 bg-gradient-to-br from-white to-[#F0F5F4] flex flex-col justify-between relative group shadow-sm">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#087E79] mb-2 block font-bold">
                Core Commitment
              </span>
              <h3 className="text-xl font-bold text-[#102D29] mb-3">
                No Black Boxes. Full Transparency.
              </h3>
              <p className="text-sm text-[#405854] leading-relaxed">
                You own 100% of your source code, architectural documentation, and production deployments. We build software assets that your team can run and scale indefinitely.
              </p>
            </div>

            <div className="pt-6 border-t border-black/5 mt-6 flex items-center justify-between">
              <span className="text-xs font-bold text-[#087E79] uppercase tracking-wider">
                Scalable Engineering
              </span>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#43D6B0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#087E79]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#C7CED0]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
