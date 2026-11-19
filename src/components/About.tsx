"use client";

import Image from "next/image";
import { siteConfig } from "@/data/content";
import { Compass, Target, Layers, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import InteractiveCard from "@/components/InteractiveCard";

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-transparent overflow-hidden">
      {/* Seamless Shading Edge Connectors */}
      <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none edge-shading-top z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none edge-shading-bottom z-0" />

      {/* Decorative background glows & ambient mesh */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#43D6B0]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-mint-silver" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-[#087E79]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-radial-mint-silver pointer-events-none opacity-60" />

      {/* Blueprint Grid Crosshairs (+) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <span className="absolute top-16 left-12 text-[#C7CED0] font-mono text-xs opacity-70">+</span>
        <span className="absolute top-16 right-12 text-[#C7CED0] font-mono text-xs opacity-70">+</span>
        <span className="absolute bottom-20 left-16 text-[#43D6B0]/60 font-mono text-xs">+</span>
        <span className="absolute bottom-20 right-16 text-[#087E79]/50 font-mono text-xs">+</span>
      </div>

      {/* Floating Blueprint Concentric Accent */}
      <div className="absolute -top-10 right-12 w-48 h-48 rounded-full border border-dashed border-[#C7CED0]/60 pointer-events-none hidden lg:block animate-spin-slow">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#43D6B0]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F5F4] border border-[#087E79]/20 text-[#087E79] text-xs font-bold uppercase tracking-wider mb-4">
            About RK TECHNOCRAFT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#102D29] tracking-tight max-w-3xl">
            {siteConfig.aboutHeadline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405854] max-w-2xl text-balance">
            {siteConfig.aboutSummary}
          </p>
        </div>

        {/* Dual Engine Model (Products + Services) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Division 01 */}
          <InteractiveCard className="glass-panel-silver-mint p-8 sm:p-10 rounded-3xl relative overflow-hidden group shadow-md hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#43D6B0]/15 rounded-full blur-3xl group-hover:bg-[#43D6B0]/30 transition-all duration-500" />
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#43D6B0]/20 text-[#087E79] text-xs font-bold uppercase tracking-wider border border-[#43D6B0]/30">
                Division 01 &bull; Products
              </div>
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#C7CED0] shadow-sm flex-shrink-0 group-hover:scale-110 group-hover:border-[#43D6B0] transition-all bg-[#08201B]">
                <Image
                  src="/images/campusgrow-icon.png"
                  alt="CampusGrow"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102D29] mb-3 group-hover:text-[#087E79] transition-colors">
              Proprietary Digital Products
            </h3>
            <p className="text-[#405854] leading-relaxed mb-6 text-sm sm:text-base">
              We conceptualize, engineer, and operate our own software products from scratch. Our flagship learning platform, <strong className="text-[#102D29]">CampusGrow</strong>, demonstrates our dedication to solving real problems with intuitive design and solid engineering.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#102D29] font-medium p-2 rounded-xl bg-white/60 border border-[#C7CED0]/50 group-hover:border-[#43D6B0]/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#087E79] flex-shrink-0" />
                <span>Deep domain-focused product design</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#102D29] font-medium p-2 rounded-xl bg-white/60 border border-[#C7CED0]/50 group-hover:border-[#43D6B0]/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#087E79] flex-shrink-0" />
                <span>Modern tech stacks built for longevity</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#102D29] font-medium p-2 rounded-xl bg-white/60 border border-[#C7CED0]/50 group-hover:border-[#43D6B0]/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#087E79] flex-shrink-0" />
                <span>Continuous feature evolution driven by actual usage</span>
              </div>
            </div>
          </InteractiveCard>

          {/* Division 02 */}
          <InteractiveCard className="glass-panel-silver-mint p-8 sm:p-10 rounded-3xl relative overflow-hidden group shadow-md hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#087E79]/15 rounded-full blur-3xl group-hover:bg-[#087E79]/30 transition-all duration-500" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#087E79]/15 text-[#087E79] text-xs font-bold uppercase tracking-wider mb-6 border border-[#087E79]/20">
              Division 02 &bull; Services
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102D29] mb-3 group-hover:text-[#087E79] transition-colors">
              Technology &amp; Scaling Services
            </h3>
            <p className="text-[#405854] leading-relaxed mb-6 text-sm sm:text-base">
              We partner with businesses, ambitious founders, and teams to build high-performance software. Rather than acting as a detached vendor, we serve as a rigorous engineering partner invested in the long-term viability of your product.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#102D29] font-medium p-2 rounded-xl bg-white/60 border border-[#C7CED0]/50 group-hover:border-[#087E79]/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#087E79] flex-shrink-0" />
                <span>Full-Stack web &amp; enterprise platforms</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#102D29] font-medium p-2 rounded-xl bg-white/60 border border-[#C7CED0]/50 group-hover:border-[#087E79]/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#087E79] flex-shrink-0" />
                <span>Applied AI systems, RAG &amp; intelligent workflows</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#102D29] font-medium p-2 rounded-xl bg-white/60 border border-[#C7CED0]/50 group-hover:border-[#087E79]/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#087E79] flex-shrink-0" />
                <span>High-velocity startup MVPs built on production standards</span>
              </div>
            </div>
          </InteractiveCard>
        </div>

        {/* Vision, Mission & Engineering Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vision */}
          <InteractiveCard className="interactive-box p-8 rounded-2xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#F0F5F4] border border-[#087E79]/20 flex items-center justify-center text-[#087E79] mb-6 shadow-sm group-hover:bg-[#087E79] group-hover:text-white transition-all transform group-hover:scale-110">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-[#102D29] mb-3 group-hover:text-[#087E79] transition-colors">Our Vision</h4>
            <p className="text-sm text-[#405854] leading-relaxed">
              To be an enduring technology powerhouse recognized for creating impactful digital products and setting benchmarks in software craftsmanship, reliability, and business impact.
            </p>
          </InteractiveCard>

          {/* Mission */}
          <InteractiveCard className="interactive-box p-8 rounded-2xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#F0F5F4] border border-[#087E79]/20 flex items-center justify-center text-[#087E79] mb-6 shadow-sm group-hover:bg-[#087E79] group-hover:text-white transition-all transform group-hover:scale-110">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-[#102D29] mb-3 group-hover:text-[#087E79] transition-colors">Our Mission</h4>
            <p className="text-sm text-[#405854] leading-relaxed">
              To transform raw concepts into resilient, scalable digital systems by uniting product vision, modern architectural practices, and applied intelligence for forward-looking businesses.
            </p>
          </InteractiveCard>

          {/* Approach */}
          <InteractiveCard className="interactive-box p-8 rounded-2xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#F0F5F4] border border-[#087E79]/20 flex items-center justify-center text-[#087E79] mb-6 shadow-sm group-hover:bg-[#087E79] group-hover:text-white transition-all transform group-hover:scale-110">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-[#102D29] mb-3 group-hover:text-[#087E79] transition-colors">Our Approach</h4>
            <p className="text-sm text-[#405854] leading-relaxed">
              We eliminate technical debt before it starts. We prioritize clean abstractions, verified engineering benchmarks, and clear business alignment over buzzwords and over-engineering.
            </p>
          </InteractiveCard>
        </div>

        {/* Engineering Standards Strip */}
        <div className="mt-12 py-5 px-8 rounded-xl bg-[#F0F5F4] border border-[#087E79]/15 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#087E79]" />
            <span className="text-sm font-bold text-[#102D29]">Production-Ready Architecture</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-[#087E79]" />
            <span className="text-sm font-bold text-[#102D29]">Zero Vendor Lock-In Mindset</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#087E79]" />
            <span className="text-sm font-bold text-[#102D29]">Full IP &amp; Code Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
