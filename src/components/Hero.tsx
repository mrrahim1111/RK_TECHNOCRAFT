"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/content";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown
} from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-36 pb-20 bg-transparent"
    >
      {/* Subtle Luminous Ambient Radial Spotlights in Mint and Silver */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[950px] h-[580px] bg-radial-mint-silver pointer-events-none animate-drift-slow" />
      <div className="absolute top-28 -left-36 w-[440px] h-[440px] bg-[#43D6B0]/18 rounded-full blur-[140px] pointer-events-none animate-pulse-mint-silver" />
      <div className="absolute top-36 -right-36 w-[440px] h-[440px] bg-[#087E79]/14 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-16 left-1/3 w-80 h-80 bg-[#C7CED0]/25 rounded-full blur-[120px] pointer-events-none" />

      {/* Blueprint Grid Crosshairs (+) Across Intersections */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <span className="absolute top-28 left-8 sm:left-16 text-[#C7CED0] font-mono text-sm opacity-90">+</span>
        <span className="absolute top-28 right-8 sm:right-16 text-[#C7CED0] font-mono text-sm opacity-90">+</span>
        <span className="absolute top-44 left-1/4 text-[#43D6B0]/70 font-mono text-xs">+</span>
        <span className="absolute top-44 right-1/4 text-[#087E79]/60 font-mono text-xs">+</span>
        <span className="absolute top-1/2 left-8 sm:left-24 text-[#C7CED0] font-mono text-xs opacity-80">+</span>
        <span className="absolute top-1/2 right-8 sm:right-24 text-[#C7CED0] font-mono text-xs opacity-80">+</span>
        <span className="absolute top-2/3 left-1/3 text-[#43D6B0]/60 font-mono text-xs">+</span>
        <span className="absolute top-2/3 right-1/3 text-[#087E79]/50 font-mono text-xs">+</span>
        <span className="absolute bottom-20 left-12 sm:left-28 text-[#C7CED0] font-mono text-sm opacity-80">+</span>
        <span className="absolute bottom-20 right-12 sm:right-28 text-[#C7CED0] font-mono text-sm opacity-80">+</span>
      </div>

      {/* Architectural Corner Framing Marks */}
      <div className="absolute top-28 left-6 sm:left-12 hidden md:block text-[#8E9A9D] font-mono text-[10px] pointer-events-none select-none">
        <span className="block font-bold">┌ SYS_REF.01 // RK-TECH</span>
      </div>
      <div className="absolute top-28 right-6 sm:right-12 hidden md:block text-[#8E9A9D] font-mono text-[10px] pointer-events-none select-none text-right">
        <span className="block font-bold">STABILITY: OPTIMAL ┐</span>
      </div>
      <div className="absolute bottom-12 left-6 sm:left-12 hidden md:block text-[#8E9A9D] font-mono text-[10px] pointer-events-none select-none">
        <span className="block font-bold">└ 12.9716° N</span>
      </div>
      <div className="absolute bottom-12 right-6 sm:right-12 hidden md:block text-[#8E9A9D] font-mono text-[10px] pointer-events-none select-none text-right">
        <span className="block font-bold">77.5946° E ┘</span>
      </div>

      {/* Left Margin Telemetry & Matrix */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 pointer-events-none select-none z-0">
        <div className="grid grid-cols-4 gap-2 opacity-60">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className={`w-1 h-1 rounded-full ${i % 3 === 0 ? "bg-[#43D6B0]" : "bg-[#C7CED0]"}`} />
          ))}
        </div>
        <div className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-mono uppercase tracking-[0.25em] text-[#5A7370] font-semibold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#43D6B0] animate-pulse" />
          <span>RK-ENGINEERING // SYS.01</span>
        </div>
      </div>

      {/* Right Margin Telemetry & Matrix */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 pointer-events-none select-none z-0">
        <div className="[writing-mode:vertical-lr] text-[10px] font-mono uppercase tracking-[0.25em] text-[#5A7370] font-semibold flex items-center gap-2">
          <span>SCALE PROTOCOL // 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#087E79]" />
        </div>
        <div className="grid grid-cols-4 gap-2 opacity-60">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className={`w-1 h-1 rounded-full ${i % 4 === 0 ? "bg-[#087E79]" : "bg-[#C7CED0]"}`} />
          ))}
        </div>
      </div>

      {/* Floating Animated Background Geometric Concentric Rings */}
      <div
        className="absolute top-28 -right-10 sm:right-8 w-60 h-60 pointer-events-none hidden md:block"
        style={{
          transform: `translateY(${scrollY * -0.08}px)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-[#C7CED0]/75 animate-spin-slow">
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#43D6B0] shadow-xs" />
        </div>
        <div className="absolute inset-6 rounded-full border border-[#43D6B0]/35 animate-spin-slow-reverse">
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#087E79]" />
        </div>
        <div className="absolute inset-14 rounded-full border border-[#087E79]/20 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#43D6B0]/60" />
        </div>
      </div>

      <div
        className="absolute top-40 -left-10 sm:left-10 w-52 h-52 pointer-events-none hidden md:block"
        style={{
          transform: `translateY(${scrollY * 0.06}px)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <div className="absolute inset-0 rounded-full border border-[#43D6B0]/35 border-dashed animate-spin-slow">
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#087E79]" />
        </div>
        <div className="absolute inset-8 rounded-xl border border-[#C7CED0]/70 rotate-45 animate-float" />
        <div className="absolute inset-16 rounded-full border border-[#43D6B0]/40 flex items-center justify-center">
          <span className="text-[10px] font-mono text-[#087E79]/60 font-bold">+</span>
        </div>
      </div>



      {/* Center Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official App Icon Centerpiece with Subtle Rolling Parallax */}
        <div
          className="relative mb-6 cursor-pointer group"
          style={{
            transform: `perspective(1000px) rotateX(${Math.min(scrollY * 0.12, 35)}deg) rotateY(${Math.sin(scrollY * 0.01) * 10}deg) scale(${Math.max(1 - scrollY * 0.0005, 0.9)})`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#087E79]/20 via-[#43D6B0]/30 to-[#C7CED0]/40 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-xl shadow-[#087E79]/15 border border-[#C7CED0] group-hover:border-[#43D6B0] transition-all transform group-hover:scale-105">
            <Image
              src="/images/rk-official-app-icon.png"
              alt="RK TECHNOCRAFT Official Icon"
              width={112}
              height={112}
              priority
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Top Minimalist Pill Badge (Matching reference style) */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F0F5F4] border border-[#087E79]/20 shadow-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-[#43D6B0] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#087E79]">
            INNOVATING PRODUCTS &bull; SCALING SERVICES
          </span>
        </div>

        {/* Hero Headline (Clean, bold, multi-line) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#102D29] leading-[1.08] mb-6">
          Ideas Deserve More Than Just Ideas.
          <span className="block mt-2 bg-gradient-to-r from-[#087E79] via-[#2BB38F] to-[#102D29] bg-clip-text text-transparent">
            They Deserve Engineering.
          </span>
        </h1>

        {/* Subtitle paragraph */}
        <p className="max-w-3xl text-base sm:text-lg text-[#405854] font-normal leading-relaxed mb-8 text-balance">
          {siteConfig.heroSubheadline}
        </p>

        {/* Interactive Feature Pills / Chips Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 max-w-4xl">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C7CED0] text-xs font-semibold text-[#102D29] shadow-xs hover:border-[#43D6B0] hover:shadow-md hover:shadow-[#43D6B0]/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#43D6B0] group-hover:scale-125 transition-transform" />
            <span className="group-hover:text-[#087E79] transition-colors">Flagship Product: CampusGrow</span>
            <span className="text-[10px] text-[#5A7370] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C7CED0] text-xs font-semibold text-[#102D29] shadow-xs hover:border-[#087E79] hover:shadow-md hover:shadow-[#087E79]/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#087E79] group-hover:scale-125 transition-transform" />
            <span className="group-hover:text-[#087E79] transition-colors">Full-Stack Web Architectures</span>
            <span className="text-[10px] text-[#5A7370] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C7CED0] text-xs font-semibold text-[#102D29] shadow-xs hover:border-[#43D6B0] hover:shadow-md hover:shadow-[#43D6B0]/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#43D6B0] group-hover:scale-125 transition-transform" />
            <span className="group-hover:text-[#087E79] transition-colors">Applied AI &amp; RAG Systems</span>
            <span className="text-[10px] text-[#5A7370] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C7CED0] text-xs font-semibold text-[#102D29] shadow-xs hover:border-[#087E79] hover:shadow-md hover:shadow-[#087E79]/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#8E9A9D] group-hover:scale-125 transition-transform" />
            <span className="group-hover:text-[#087E79] transition-colors">High-Velocity Startup MVPs</span>
            <span className="text-[10px] text-[#5A7370] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
          </a>
        </div>

        {/* CTAs Row (Dark Pill Button + Bordered Button, just like the reference screenshot) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#0A201C] hover:bg-[#087E79] shadow-lg shadow-[#0A201C]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 text-[#43D6B0]" />
          </a>

          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-[#102D29] bg-white hover:bg-[#F0F5F4] border border-[#C7CED0] hover:border-[#087E79] shadow-xs transition-all cursor-pointer"
          >
            <span>Explore Our Products</span>
            <ChevronRight className="w-4 h-4 text-[#087E79]" />
          </a>
        </div>

        {/* Subtle Scroll Indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-[#5A7370] hover:text-[#087E79] transition-colors cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="text-[11px] tracking-widest uppercase font-bold text-[#087E79]">
            Scroll to Discover
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#43D6B0]" />
        </a>
      </div>

      {/* Seamless Shading Edge Connector to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none edge-shading-bottom z-0" />
    </section>
  );
}
