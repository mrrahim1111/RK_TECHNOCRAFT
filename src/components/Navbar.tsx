"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import { navItems } from "@/data/content";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/95 backdrop-blur-md border-b border-[#087E79]/15 shadow-sm shadow-[#087E79]/5"
            : "py-5 bg-white/80 backdrop-blur-sm border-b border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Provided Official Icon */}
          <Logo variant="full" size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-[#F7F9F8] border border-[#C7CED0]/60 backdrop-blur-md shadow-xs">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-[#087E79] bg-white shadow-xs"
                      : "text-[#405854] hover:text-[#087E79] hover:bg-white/60"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#087E79] rounded-full shadow-[0_0_6px_#087E79]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action CTA (Matching dark pill button in reference image) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs xl:text-sm font-bold tracking-wide text-white bg-[#0A201C] hover:bg-[#087E79] transition-all duration-200 shadow-md shadow-[#0A201C]/15 hover:shadow-[#087E79]/30 transform hover:-translate-y-0.5"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#43D6B0]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A201C]"
            >
              Talk
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-[#C7CED0] text-[#102D29] hover:text-[#087E79] focus:outline-none shadow-xs"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#087E79]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#102D29]/40 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 right-4 left-4 p-6 rounded-2xl bg-white border border-[#C7CED0] shadow-2xl transition-all duration-300 transform ${
            mobileMenuOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-[#102D29] hover:text-[#087E79] hover:bg-[#F0F5F4] transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-[#087E79]/70" />
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-black/5 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl text-sm font-bold text-white bg-[#0A201C] shadow-md shadow-[#0A201C]/20"
              >
                Start a Project
              </a>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#5A7370] tracking-widest uppercase font-semibold">
                <Sparkles className="w-3 h-3 text-[#087E79]" />
                <span>INNOVATING PRODUCTS • SCALING SERVICES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
