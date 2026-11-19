"use client";

import { useState } from "react";
import { technologies, TechItem } from "@/data/content";
import {
  Cpu,
  Layers,
  Database,
  Terminal,
  Workflow,
  Server,
  Smartphone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Technology() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Frontend & Mobile",
    "Backend & Database",
    "AI & Intelligent Workflows",
    "Cloud & Automation",
  ];

  const filteredTech =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Frontend & Mobile":
        return <Smartphone className="w-4 h-4" />;
      case "Backend & Database":
        return <Database className="w-4 h-4" />;
      case "AI & Intelligent Workflows":
        return <Cpu className="w-4 h-4" />;
      case "Cloud & Automation":
        return <Server className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="technology" className="relative py-28 bg-[#F7F9F8] overflow-hidden">
      {/* Ambient background glows in mint and silver */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#43D6B0]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C7CED0]/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-silver-mint text-[#087E79] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#43D6B0]" />
            <span>Ecosystem &amp; Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#102D29] tracking-tight max-w-3xl">
            Modern Engineering Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405854] max-w-2xl text-balance">
            We build with battle-tested frameworks, cloud primitives, and intelligent pipelines chosen for scale, reliability, and developer velocity.
          </p>
        </div>

        {/* Category Filters with Silver & Mint Accents */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? "bg-[#087E79] text-white border-[#087E79] shadow-md shadow-[#43D6B0]/25"
                    : "bg-white text-[#405854] border-[#C7CED0] hover:border-[#43D6B0] hover:text-[#102D29] shadow-xs"
                }`}
              >
                {cat !== "All" && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Technology Ecosystem Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {filteredTech.map((item: TechItem) => (
            <div
              key={item.name}
              className="glass-panel-silver-mint p-6 rounded-2xl border border-[#C7CED0]/70 hover:border-[#43D6B0] transition-all duration-300 group relative overflow-hidden bg-white"
            >
              {/* Subtle top indicator in mint green */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C7CED0] via-[#43D6B0] to-[#C7CED0] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-[#F0F5F4] text-[#087E79] border border-[#C7CED0]/60 group-hover:bg-[#087E79] group-hover:text-white transition-colors duration-300">
                  {getCategoryIcon(item.category)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F0F5F4] text-[#5A7370] font-bold border border-[#C7CED0]/50">
                  {item.category.split(" ")[0]}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#102D29] mb-2 group-hover:text-[#087E79] transition-colors">
                {item.name}
              </h3>

              <p className="text-xs text-[#405854] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Architectural Principles Banner with Mint and Silver Accents */}
        <div className="p-8 rounded-3xl bg-white border-2 border-[#C7CED0] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#43D6B0]/30 to-[#087E79]/20 text-[#087E79] border border-[#43D6B0]/40 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#102D29] mb-1">
                  Type-Safe Full-Stack
                </h4>
                <p className="text-xs text-[#405854] leading-relaxed">
                  End-to-end TypeScript safety across client, edge routes, and database schemas to eliminate runtime bugs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#C7CED0]/40 to-[#43D6B0]/30 text-[#087E79] border border-[#C7CED0] mt-0.5">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#102D29] mb-1">
                  Private &amp; Grounded AI
                </h4>
                <p className="text-xs text-[#405854] leading-relaxed">
                  Vector-based RAG architectures that strictly protect enterprise IP and generate hallucination-resistant outputs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#43D6B0]/30 to-[#C7CED0]/40 text-[#087E79] border border-[#43D6B0]/40 mt-0.5">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#102D29] mb-1">
                  Zero Technical Debt
                </h4>
                <p className="text-xs text-[#405854] leading-relaxed">
                  Clean modular structures that allow continuous integration and frictionless handoff to in-house teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
