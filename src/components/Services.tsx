"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/content";
import InteractiveCard from "@/components/InteractiveCard";
import {
  Code2,
  Bot,
  Rocket,
  CheckCircle,
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  Database,
  Workflow
} from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<string>(services[0].id);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "full-stack":
        return <Code2 className="w-6 h-6" />;
      case "ai-solutions":
        return <Bot className="w-6 h-6" />;
      case "startup-mvp":
        return <Rocket className="w-6 h-6" />;
      default:
        return <Cpu className="w-6 h-6" />;
    }
  };

  const getServiceImage = (id: string) => {
    switch (id) {
      case "ai-solutions":
        return "/images/ai-solutions-visual.jpg";
      case "startup-mvp":
      case "full-stack":
      default:
        return "/images/mvp-visual.jpg";
    }
  };

  const activeItem = services.find((s) => s.id === selectedService) || services[0];

  return (
    <section id="services" className="relative py-28 bg-transparent overflow-hidden">
      {/* Seamless Shading Edge Connectors */}
      <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none edge-shading-top z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none edge-shading-bottom z-0" />

      {/* Background mint, teal and silver ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-[#43D6B0]/15 rounded-full blur-[160px] pointer-events-none animate-drift-slow" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-[#087E79]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#C7CED0]/35 rounded-full blur-[140px] pointer-events-none" />

      {/* Blueprint Grid Crosshairs (+) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <span className="absolute top-16 left-12 text-[#C7CED0] font-mono text-xs opacity-75">+</span>
        <span className="absolute top-16 right-12 text-[#C7CED0] font-mono text-xs opacity-75">+</span>
        <span className="absolute top-1/2 left-16 text-[#43D6B0]/60 font-mono text-xs">+</span>
        <span className="absolute top-1/2 right-16 text-[#087E79]/50 font-mono text-xs">+</span>
        <span className="absolute bottom-16 left-20 text-[#C7CED0] font-mono text-xs opacity-75">+</span>
        <span className="absolute bottom-16 right-20 text-[#C7CED0] font-mono text-xs opacity-75">+</span>
      </div>

      {/* Floating Blueprint Rings */}
      <div className="absolute top-20 -left-12 w-64 h-64 border border-[#C7CED0]/50 rounded-full animate-spin-slow pointer-events-none hidden md:block">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#43D6B0]" />
      </div>
      <div className="absolute bottom-20 -right-12 w-56 h-56 border border-dashed border-[#43D6B0]/30 rounded-full animate-spin-slow-reverse pointer-events-none hidden md:block">
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#087E79]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-silver-mint text-[#087E79] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#43D6B0]" />
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#102D29] tracking-tight max-w-3xl">
            Precision Software Engineering for High-Growth Businesses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#405854] max-w-2xl text-balance">
            We deliver end-to-end technical execution across web platforms, intelligent AI pipelines, and high-velocity startup products.
          </p>
        </div>

        {/* 3 Main Interactive Service Cards with Mint & Silver Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const isCurrent = service.id === selectedService;
            return (
              <InteractiveCard
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`text-left p-6 sm:p-8 rounded-3xl transition-all duration-300 relative group cursor-pointer border ${
                  isCurrent
                    ? "bg-[#FFFFFF] border-[#087E79] shadow-2xl shadow-[#43D6B0]/20 ring-2 ring-[#43D6B0]/50 -translate-y-2"
                    : "glass-panel-silver-mint border-[#C7CED0]/70 hover:border-[#43D6B0] hover:bg-[#FFFFFF] shadow-sm hover:shadow-xl"
                }`}
              >
                {/* Active Indicator Top Line with Mint & Silver Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#43D6B0] via-[#C7CED0] to-[#087E79] transition-opacity duration-300 ${
                    isCurrent ? "opacity-100" : "opacity-0 group-hover:opacity-80"
                  }`}
                />

                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-4 rounded-2xl transition-all duration-300 transform group-hover:scale-110 ${
                      isCurrent
                        ? "bg-gradient-to-br from-[#087E79] to-[#43D6B0] text-white shadow-lg shadow-[#43D6B0]/30"
                        : "bg-[#F0F5F4] text-[#087E79] border border-[#C7CED0]/60 group-hover:bg-[#43D6B0]/20"
                    }`}
                  >
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-[#F0F5F4] text-[#405854] border border-[#C7CED0]/70 font-bold group-hover:border-[#43D6B0] transition-colors">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#102D29] mb-2 group-hover:text-[#087E79] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-bold text-[#087E79] mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm text-[#405854] line-clamp-3 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-[#087E79] pt-4 border-t border-black/5 group-hover:translate-x-1.5 transition-transform">
                  <span>{isCurrent ? "Active Architecture View" : "Explore Technical Breakdown"}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#43D6B0]" />
                </div>
              </InteractiveCard>
            );
          })}
        </div>

        {/* Detailed Interactive Service Breakdown Panel with AI Generated Visual */}
        <InteractiveCard
          enableTilt={false}
          className="glass-panel-silver-mint p-8 sm:p-12 rounded-3xl border border-[#C7CED0] relative overflow-hidden shadow-2xl bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Scope & Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#087E79] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#43D6B0]" />
                <span>Service Architecture &bull; {activeItem.title}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-[#102D29] leading-tight">
                {activeItem.subtitle}
              </h4>

              <p className="text-base text-[#405854] leading-relaxed">
                {activeItem.description}
              </p>

              <div>
                <h5 className="text-sm font-bold uppercase tracking-wider text-[#102D29] mb-4 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#087E79]" />
                  <span>Key Engineering Capabilities</span>
                </h5>
                <div className="grid grid-cols-1 gap-3">
                  {activeItem.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F7F9F8] border border-[#C7CED0]/70 text-sm text-[#102D29] font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-[#087E79] mt-0.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Visual Preview */}
              <div className="pt-2">
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#C7CED0] shadow-md group">
                  <Image
                    src={getServiceImage(activeItem.id)}
                    alt={`${activeItem.title} 3D Architecture Visual`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102D29]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#43D6B0]" />
                      <span>Production 3D System Blueprint</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm">
                      {activeItem.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables & Action */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#F0F5F4] p-6 sm:p-8 rounded-2xl border border-[#C7CED0]">
              <div>
                <h5 className="text-sm font-bold uppercase tracking-wider text-[#102D29] mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#087E79]" />
                  <span>Production Deliverables</span>
                </h5>
                <ul className="space-y-3 mb-6">
                  {activeItem.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#405854] leading-relaxed font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#087E79] mt-1.5 flex-shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>

                <h5 className="text-xs font-bold uppercase tracking-wider text-[#102D29] mb-3 flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-[#087E79]" />
                  <span>Primary Technology Stack</span>
                </h5>
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {activeItem.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white text-[#102D29] border border-[#C7CED0] text-xs font-bold shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Enquiry Button */}
              <div className="pt-4 border-t border-black/5">
                <a
                  href={`#contact`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#087E79] hover:bg-[#102D29] shadow-md shadow-[#087E79]/20 transition-all cursor-pointer"
                >
                  <span>Enquire About {activeItem.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#43D6B0]" />
                </a>
                <p className="text-[11px] text-center text-[#5A7370] mt-2 font-medium">
                  Tailored scopes &bull; Transparent milestones &bull; Strict confidentiality
                </p>
              </div>
            </div>
          </div>
        </InteractiveCard>
      </div>
    </section>
  );
}
