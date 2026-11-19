"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/content";
import InteractiveCard from "@/components/InteractiveCard";
import {
  Sparkles,
  BookOpen,
  Compass,
  BarChart3,
  FolderGit2,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Terminal,
  Code,
  Eye,
  SlidersHorizontal,
  Lightbulb,
  Rocket,
  TrendingUp,
  Target
} from "lucide-react";

export default function Products() {
  const [activeTab, setActiveTab] = useState<"curriculum" | "tracker" | "resources">("curriculum");
  const [displayMode, setDisplayMode] = useState<"render" | "simulation">("render");
  const flagship = products[0]; // CampusGrow

  const getPillarIcon = (word: string) => {
    switch (word) {
      case "Learn":
        return <BookOpen className="w-4 h-4" />;
      case "Explore":
        return <Compass className="w-4 h-4" />;
      case "Build":
        return <Rocket className="w-4 h-4" />;
      case "Grow":
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="products" className="relative py-28 bg-transparent overflow-hidden">
      {/* Seamless Shading Edge Connectors */}
      <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none edge-shading-top z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none edge-shading-bottom z-0" />

      {/* Background radial mint & silver spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-[#43D6B0]/18 rounded-full blur-[180px] pointer-events-none animate-pulse-mint-silver" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[#087E79]/10 rounded-full blur-[180px] pointer-events-none" />
      
      {/* Blueprint Grid Crosshairs (+) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <span className="absolute top-20 left-16 text-[#C7CED0] font-mono text-xs opacity-75">+</span>
        <span className="absolute top-20 right-16 text-[#C7CED0] font-mono text-xs opacity-75">+</span>
        <span className="absolute top-1/2 left-12 text-[#43D6B0]/60 font-mono text-xs">+</span>
        <span className="absolute top-1/2 right-12 text-[#087E79]/50 font-mono text-xs">+</span>
        <span className="absolute bottom-24 left-20 text-[#C7CED0] font-mono text-xs opacity-75">+</span>
        <span className="absolute bottom-24 right-20 text-[#C7CED0] font-mono text-xs opacity-75">+</span>
      </div>

      {/* Subtle silver & mint floating geometric accents */}
      <div className="absolute top-16 right-20 w-48 h-48 rounded-full border border-dashed border-[#C7CED0]/70 pointer-events-none hidden lg:block animate-spin-slow">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#43D6B0]" />
      </div>
      <div className="absolute bottom-20 left-16 w-36 h-36 rounded-full border border-[#43D6B0]/40 pointer-events-none hidden lg:block animate-spin-slow-reverse">
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#087E79]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-silver-mint text-[#087E79] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#43D6B0]" />
            <span>Product Division &bull; Flagship Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#102D29] tracking-tight max-w-3xl">
            Proprietary Products Engineered In-House
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405854] max-w-2xl text-balance">
            We don&apos;t just consult; we build. Explore our flagship software products engineered to solve real-world industry and learning challenges.
          </p>
        </div>

        {/* Flagship Product Showcase: CampusGrow */}
        <div className="glass-panel-silver-mint rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl mb-16">
          {/* Dual Tone Silver & Mint Corner Badge */}
          <div className="absolute top-6 right-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-white via-[#F0F5F4] to-white border border-[#C7CED0] text-[#087E79] text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#43D6B0] animate-ping" />
            <span>Flagship Product 01</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Product Narrative, Vision & Pillars */}
            <div className="lg:col-span-6 space-y-6">
              {/* Product Title & Official Logo */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xl shadow-[#087E79]/20 border-2 border-[#C7CED0] flex-shrink-0 group hover:scale-105 transition-transform bg-[#08201B]">
                  <Image
                    src="/images/campusgrow-icon.png"
                    alt="CampusGrow Official App Icon"
                    width={80}
                    height={80}
                    className="object-contain w-full h-full rounded-2xl"
                    priority
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-[#102D29] tracking-tight">
                      {flagship.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#43D6B0]/20 text-[#087E79] font-bold">
                      FLAGSHIP
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#087E79] tracking-wide uppercase mt-0.5">
                    &ldquo;{flagship.slogan}&rdquo;
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <blockquote className="text-lg sm:text-xl font-bold text-[#102D29] italic border-l-4 border-[#43D6B0] pl-4 leading-snug">
                &ldquo;{flagship.tagline}&rdquo;
              </blockquote>

              {/* Core Philosophy Statement */}
              <div className="p-4 rounded-2xl bg-[#F0F5F4] border border-[#C7CED0]/70 text-sm text-[#102D29] leading-relaxed">
                <p className="font-semibold text-[#087E79] text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>The CampusGrow Philosophy</span>
                </p>
                {flagship.statement}
              </div>

              <p className="text-sm text-[#405854] leading-relaxed">
                {flagship.description}
              </p>

              {/* Vision Box */}
              <div className="p-4 rounded-2xl bg-white border border-[#087E79]/20 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#087E79] flex items-center gap-1.5 mb-1.5">
                  <Target className="w-4 h-4 text-[#43D6B0]" />
                  <span>Our Vision</span>
                </h4>
                <p className="text-xs text-[#102D29] font-medium leading-relaxed">
                  {flagship.vision}
                </p>
              </div>

              {/* What CampusGrow Stands For (4 Pillars: Learn, Explore, Build, Grow) */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102D29] mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#087E79]" />
                  <span>What CampusGrow Stands For</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {flagship.pillars.map((pillar) => (
                    <InteractiveCard
                      key={pillar.word}
                      className="p-4 rounded-2xl bg-white border border-[#C7CED0]/70 hover:border-[#43D6B0] shadow-sm hover:shadow-lg transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="p-2 rounded-xl bg-[#43D6B0]/20 text-[#087E79] group-hover:bg-[#087E79] group-hover:text-white transition-all transform group-hover:scale-110">
                          {getPillarIcon(pillar.word)}
                        </div>
                        <h5 className="text-sm font-extrabold text-[#102D29] group-hover:text-[#087E79] transition-colors">
                          {pillar.word}
                        </h5>
                      </div>
                      <p className="text-xs text-[#405854] leading-relaxed">
                        {pillar.description}
                      </p>
                    </InteractiveCard>
                  ))}
                </div>
              </div>

              {/* View Switcher Controls */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs font-bold text-[#5A7370] uppercase tracking-wider">
                  Product Preview:
                </span>
                <div className="inline-flex p-1 rounded-xl bg-[#F0F5F4] border border-[#C7CED0]/60">
                  <button
                    type="button"
                    onClick={() => setDisplayMode("render")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      displayMode === "render"
                        ? "bg-white text-[#087E79] shadow-xs"
                        : "text-[#5A7370] hover:text-[#102D29]"
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5 text-[#43D6B0]" />
                    <span>3D Architectural View</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDisplayMode("simulation")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      displayMode === "simulation"
                        ? "bg-white text-[#087E79] shadow-xs"
                        : "text-[#5A7370] hover:text-[#102D29]"
                    }`}
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#087E79]" />
                    <span>Live UI Simulation</span>
                  </button>
                </div>
              </div>

              {/* Endorsement and CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-black/5">
                <div>
                  <p className="text-xs font-bold text-[#102D29]">
                    CampusGrow is a product by <span className="text-[#087E79]">RK TECHNOCRAFT</span>.
                  </p>
                  <p className="text-[11px] text-[#5A7370] italic">
                    &ldquo;{flagship.motto}&rdquo;
                  </p>
                </div>

                <a
                  href={flagship.demoUrl || "https://campus-grow.vercel.app"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#087E79] hover:bg-[#102D29] shadow-md shadow-[#087E79]/20 transition-all cursor-pointer group"
                  title="Open CampusGrow (campus-grow.vercel.app)"
                >
                  <span>{flagship.ctaText}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#43D6B0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: AI Generated 3D Picture OR Interactive Simulated Mockup */}
            <div className="lg:col-span-6">
              {displayMode === "render" ? (
                /* AI Generated 3D Visual for CampusGrow */
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#C7CED0]/80 shadow-2xl group bg-white">
                  <div className="relative h-[480px] w-full">
                    <Image
                      src="/images/campusgrow-visual.jpg"
                      alt="CampusGrow 3D High-Tech Architectural Tablet Visual"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102D29]/80 via-transparent to-transparent" />
                    
                    {/* Floating Info Pill on Image */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#C7CED0] flex items-center justify-between shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-[#C7CED0] flex-shrink-0">
                          <Image
                            src="/images/campusgrow-icon.png"
                            alt="CampusGrow"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#102D29]">
                            CampusGrow &bull; Learning Companion
                          </p>
                          <p className="text-[11px] text-[#5A7370]">
                            Competency Matrix &bull; Interactive Knowledge Tree
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#43D6B0]/20 text-[#087E79]">
                        3D PREVIEW
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Interactive Simulated Interface */
                <div className="rounded-2xl bg-white border-2 border-[#C7CED0]/80 shadow-2xl overflow-hidden">
                  {/* Browser/Window Chrome */}
                  <div className="px-4 py-3 bg-[#F0F5F4] border-b border-[#C7CED0]/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400" />
                      <span className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <a
                      href="https://campus-grow.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-[#C7CED0]/60 text-[11px] font-mono text-[#087E79] font-bold shadow-xs hover:border-[#43D6B0] transition-colors group cursor-pointer"
                      title="Open campus-grow.vercel.app"
                    >
                      <Image
                        src="/images/campusgrow-icon.png"
                        alt="CampusGrow mini icon"
                        width={14}
                        height={14}
                        className="rounded-xs"
                      />
                      <span>campus-grow.vercel.app</span>
                      <ExternalLink className="w-2.5 h-2.5 text-[#5A7370] group-hover:text-[#087E79] ml-0.5" />
                    </a>
                    <div className="flex items-center gap-2 text-[#5A7370]">
                      <Laptop className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Dashboard Top Row */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/5">
                      <div>
                        <p className="text-xs text-[#5A7370] uppercase tracking-wider font-bold">
                          Student Learning Companion
                        </p>
                        <h5 className="text-lg font-bold text-[#102D29] flex items-center gap-2">
                          <span>Full-Stack Engineering Path</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[#43D6B0]/25 text-[#087E79] font-mono font-bold">
                            ACTIVE
                          </span>
                        </h5>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-[#5A7370] font-medium">Overall Competency</span>
                        <p className="text-base font-mono font-bold text-[#087E79]">78.4%</p>
                      </div>
                    </div>

                    {/* Interactive View Tabs */}
                    <div className="flex items-center gap-2 mb-6">
                      <button
                        type="button"
                        onClick={() => setActiveTab("curriculum")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          activeTab === "curriculum"
                            ? "bg-[#087E79] text-white shadow-xs"
                            : "bg-[#F0F5F4] text-[#405854] hover:text-[#102D29]"
                        }`}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Roadmap</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab("tracker")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          activeTab === "tracker"
                            ? "bg-[#087E79] text-white shadow-xs"
                            : "bg-[#F0F5F4] text-[#405854] hover:text-[#102D29]"
                        }`}
                      >
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>Skill Metrics</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab("resources")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          activeTab === "resources"
                            ? "bg-[#087E79] text-white shadow-xs"
                            : "bg-[#F0F5F4] text-[#405854] hover:text-[#102D29]"
                        }`}
                      >
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>Repositories</span>
                      </button>
                    </div>

                    {/* Tab Dynamic Content */}
                    {activeTab === "curriculum" && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-[#F7F9F8] border border-[#C7CED0]/70 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-[#43D6B0]/30 text-[#087E79] flex items-center justify-center text-xs font-bold font-mono">
                              01
                            </div>
                            <div>
                              <p className="text-xs font-bold text-[#102D29]">Algorithms &amp; System Primitives</p>
                              <p className="text-[11px] text-[#5A7370]">Core Data Structures, Big-O Analysis</p>
                            </div>
                          </div>
                          <span className="text-[11px] font-mono text-[#087E79] font-bold">COMPLETED</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#F7F9F8] border border-[#43D6B0] flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-[#087E79] text-white flex items-center justify-center text-xs font-bold font-mono">
                              02
                            </div>
                            <div>
                              <p className="text-xs font-bold text-[#102D29]">Modern Web &amp; API Architecture</p>
                              <p className="text-[11px] text-[#5A7370]">Next.js, TypeScript, RESTful Services</p>
                            </div>
                          </div>
                          <span className="text-[11px] font-mono text-[#087E79] font-bold">IN PROGRESS</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#F7F9F8] border border-black/5 flex items-center justify-between opacity-80">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-[#E0E7E6] text-[#5A7370] flex items-center justify-center text-xs font-bold font-mono">
                              03
                            </div>
                            <div>
                              <p className="text-xs font-bold text-[#102D29]">Distributed Systems &amp; Cloud</p>
                              <p className="text-[11px] text-[#5A7370]">Postgres, Docker, CI/CD Deployments</p>
                            </div>
                          </div>
                          <span className="text-[11px] font-mono text-[#5A7370]">UPCOMING</span>
                        </div>
                      </div>
                    )}

                    {activeTab === "tracker" && (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs mb-1 font-semibold">
                            <span className="text-[#102D29]">TypeScript &amp; Frameworks</span>
                            <span className="text-[#087E79] font-mono font-bold">85%</span>
                          </div>
                          <div className="w-full h-2.5 rounded-full bg-[#EBF0EF] overflow-hidden">
                            <div className="h-full bg-[#087E79] rounded-full w-[85%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-1 font-semibold">
                            <span className="text-[#102D29]">Database Engineering &amp; SQL</span>
                            <span className="text-[#43D6B0] font-mono font-bold">72%</span>
                          </div>
                          <div className="w-full h-2.5 rounded-full bg-[#EBF0EF] overflow-hidden">
                            <div className="h-full bg-[#43D6B0] rounded-full w-[72%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-1 font-semibold">
                            <span className="text-[#102D29]">System Design &amp; Architecture</span>
                            <span className="text-[#087E79] font-mono font-bold">65%</span>
                          </div>
                          <div className="w-full h-2.5 rounded-full bg-[#EBF0EF] overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#087E79] to-[#43D6B0] rounded-full w-[65%]" />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "resources" && (
                      <div className="space-y-2.5">
                        <div className="p-3 rounded-lg bg-[#F7F9F8] border border-[#C7CED0]/70 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-[#087E79]" />
                            <span className="text-[#102D29] font-bold">Production-Grade Next.js Starter Repo</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#5A7370] font-semibold">v2.4</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#F7F9F8] border border-[#C7CED0]/70 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-[#087E79]" />
                            <span className="text-[#102D29] font-bold">PostgreSQL High-Performance Indexing Guide</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#5A7370] font-semibold">PDF</span>
                        </div>
                      </div>
                    )}

                    {/* Terminal status bar */}
                    <div className="mt-6 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-[#5A7370] font-mono font-semibold">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#43D6B0]" />
                        <span>Sync Engine: Active</span>
                      </span>
                      <span>RK Technocraft Product Labs</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
