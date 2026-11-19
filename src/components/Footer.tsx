"use client";

import Logo from "./Logo";
import { siteConfig, navItems, services, products } from "@/data/content";
import { ArrowUp, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent via-[#EBF2F0]/80 to-[#E4ECE9] pt-24 pb-12 overflow-hidden text-[#102D29]">
      {/* Seamless Shading Edge Connector */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none edge-shading-top z-0" />

      {/* Decorative top glow line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#087E79]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand & Identity (Column 1) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="full" size="md" />

            <p className="text-sm text-[#405854] max-w-sm leading-relaxed">
              RK TECHNOCRAFT is a technology company developing proprietary digital products and engineering scalable software solutions for businesses and startups.
            </p>

            <div className="pt-2 flex items-center gap-3 text-sm text-[#405854]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#087E79]" />
                <span className="text-xs font-mono text-[#087E79] font-bold uppercase tracking-wider">
                  Engineering Division Online
                </span>
              </div>
            </div>

            {/* Contact & Social Channels: Mail, Instagram, LinkedIn */}
            <div className="flex items-center gap-3 pt-2">
              {/* Mail Button */}
              <a
                href={`mailto:${siteConfig.contact.emailPlaceholder}?subject=Inquiry%20-%20RK%20TECHNOCRAFT`}
                className="w-9 h-9 rounded-lg bg-white border border-[#C7CED0] flex items-center justify-center text-[#405854] hover:text-white hover:bg-[#087E79] hover:border-[#087E79] transition-all shadow-xs cursor-pointer group"
                aria-label="Send Email to RK Technocraft"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-[#087E79] group-hover:text-white transition-colors" />
              </a>

              {/* Instagram Button */}
              <a
                href={siteConfig.socials?.instagram || "https://www.instagram.com/rk_technocraft.official/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-[#C7CED0] flex items-center justify-center text-[#405854] hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all shadow-xs cursor-pointer group"
                aria-label="RK Technocraft on Instagram"
                title="Instagram (@rk_technocraft.official)"
              >
                <svg className="w-4 h-4 fill-current group-hover:fill-white text-[#087E79] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn Button */}
              <a
                href={siteConfig.socials?.linkedin || "https://www.linkedin.com/in/rk-technocraft-47a462450/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-[#C7CED0] flex items-center justify-center text-[#405854] hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-xs cursor-pointer group"
                aria-label="LinkedIn Profile"
                title="LinkedIn (RK TECHNOCRAFT)"
              >
                <svg className="w-4 h-4 fill-current group-hover:fill-white text-[#087E79] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation (Column 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#087E79]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-[#405854] hover:text-[#087E79] font-medium hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Services (Column 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#087E79]">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((srv) => (
                <li key={srv.id}>
                  <a
                    href={`#services`}
                    className="text-xs sm:text-sm text-[#405854] hover:text-[#087E79] font-medium transition-colors block"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  className="text-xs text-[#087E79] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Request Custom Architecture</span>
                  <span>&rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Products & Inquiries (Column 4) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#087E79]">
              Products
            </h4>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.id}>
                  <a
                    href="#products"
                    className="text-xs sm:text-sm text-[#405854] hover:text-[#087E79] font-medium transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087E79]" />
                    <span>{p.name}</span>
                  </a>
                </li>
              ))}

            </ul>

            <div className="pt-4 border-t border-black/5 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#405854]">
                <Mail className="w-3.5 h-3.5 text-[#087E79]" />
                <span className="font-mono text-[11px] font-bold">{siteConfig.contact.emailPlaceholder}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#405854]">
                <MapPin className="w-3.5 h-3.5 text-[#087E79]" />
                <span className="text-[11px] font-medium">{siteConfig.contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A7370]">
          <p className="font-medium">
            &copy; 2026 {siteConfig.legalName}. All rights reserved.
          </p>

          <p className="text-[11px] font-mono tracking-widest uppercase font-bold text-[#087E79]">
            {siteConfig.tagline}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#F0F5F4] border border-[#087E79]/20 text-[#102D29] font-semibold transition-all cursor-pointer shadow-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#087E79]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
