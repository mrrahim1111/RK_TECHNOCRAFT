"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/content";
import InteractiveCard from "@/components/InteractiveCard";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  ShieldCheck,
  Building,
  Clock,
  Sparkles
} from "lucide-react";

export default function Contact() {
  const { contact } = siteConfig;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: contact.services[0],
    timeline: "Flexible / 1-3 months",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash.includes("service=")) {
        const query = hash.split("service=")[1];
        if (query) {
          const decoded = decodeURIComponent(query);
          const matched = contact.services.find(
            (s) => s.toLowerCase().includes(decoded.toLowerCase()) || decoded.toLowerCase().includes(s.toLowerCase())
          );
          if (matched) {
            setFormData((prev) => ({ ...prev, service: matched }));
          }
        }
      }
    }
  }, [contact.services]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit project inquiry.");
      }

      setStatus("success");
      setStatusMessage(data.message || "Your project inquiry has been successfully received.");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: contact.services[0],
        timeline: "Flexible / 1-3 months",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setStatusMessage(
        err instanceof Error ? err.message : "An unexpected network error occurred."
      );
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-transparent overflow-hidden">
      {/* Seamless Shading Edge Connectors */}
      <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none edge-shading-top z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none edge-shading-bottom z-0" />

      {/* Background spotlights & ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#43D6B0]/16 rounded-full blur-[180px] pointer-events-none animate-pulse-mint-silver" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#087E79]/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Blueprint Grid Crosshairs (+) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <span className="absolute top-16 left-12 text-[#C7CED0] font-mono text-xs opacity-75">+</span>
        <span className="absolute top-16 right-12 text-[#C7CED0] font-mono text-xs opacity-75">+</span>
        <span className="absolute bottom-20 left-16 text-[#087E79]/50 font-mono text-xs">+</span>
        <span className="absolute bottom-20 right-16 text-[#43D6B0]/60 font-mono text-xs">+</span>
      </div>

      {/* Floating Blueprint Accent Ring */}
      <div className="absolute top-24 -right-10 w-44 h-44 rounded-full border border-dashed border-[#C7CED0]/70 pointer-events-none hidden lg:block animate-spin-slow">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#43D6B0]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Information & Expectations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F5F4] border border-[#087E79]/20 text-[#087E79] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                Start a Conversation
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#102D29] tracking-tight leading-tight">
                {contact.heading}
              </h2>
              <p className="mt-4 text-base text-[#405854] leading-relaxed">
                {contact.subheading}
              </p>
            </div>

            {/* Direct Inquiry Notes */}
            <div className="space-y-4 pt-4 border-t border-black/5">
              <a
                href={`mailto:${contact.emailPlaceholder}?subject=Project%20Inquiry%20-%20RK%20TECHNOCRAFT&body=Hello%20RK%20TECHNOCRAFT%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project...`}
                className="flex items-start gap-3.5 text-sm text-[#405854] p-4 rounded-2xl bg-white border border-[#C7CED0]/70 hover:border-[#43D6B0] hover:shadow-lg hover:shadow-[#43D6B0]/15 hover:-translate-y-1 transition-all duration-300 group shadow-xs cursor-pointer"
                title="Click to compose an email"
              >
                <div className="p-2.5 rounded-xl bg-[#F0F5F4] text-[#087E79] group-hover:bg-[#087E79] group-hover:text-white transition-colors mt-0.5 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-[#102D29] uppercase tracking-wider">
                      Direct Engineering Inbox
                    </p>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#43D6B0]/20 text-[#087E79] font-bold">
                      Click to Mail
                    </span>
                  </div>
                  <p className="text-sm font-mono text-[#087E79] font-bold mt-0.5 group-hover:underline">
                    {contact.emailPlaceholder}
                  </p>
                  <p className="text-[11px] text-[#5A7370] mt-0.5">
                    Click to open your mail client directly
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3.5 text-sm text-[#405854] p-3">
                <div className="p-2.5 rounded-xl bg-[#F0F5F4] text-[#087E79] mt-0.5 shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#102D29] uppercase tracking-wider">
                    NDA &amp; IP Protection
                  </p>
                  <p className="text-xs text-[#5A7370] mt-0.5">
                    We maintain strict confidentiality for all client concepts, proprietary models, and discussions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm text-[#405854] p-3">
                <div className="p-2.5 rounded-xl bg-[#F0F5F4] text-[#087E79] mt-0.5 shadow-xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#102D29] uppercase tracking-wider">
                    Fast Technical Review
                  </p>
                  <p className="text-xs text-[#5A7370] mt-0.5">
                    Direct review by our engineering team within 24 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form in Light Theme */}
          <div className="lg:col-span-7">
            <InteractiveCard
              enableTilt={false}
              className="glass-panel-silver-mint p-8 sm:p-10 rounded-3xl border border-[#C7CED0] shadow-2xl relative bg-white"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102D29] mb-2">
                      Your Name <span className="text-[#087E79]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#087E79]/20 text-[#102D29] placeholder-[#5A7370]/50 text-sm focus:outline-none focus:border-[#087E79] focus:ring-2 focus:ring-[#087E79]/20 transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102D29] mb-2">
                      Business Email <span className="text-[#087E79]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#087E79]/20 text-[#102D29] placeholder-[#5A7370]/50 text-sm focus:outline-none focus:border-[#087E79] focus:ring-2 focus:ring-[#087E79]/20 transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Company Name & Timeline Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102D29] mb-2">
                      Company / Organization <span className="text-[#5A7370] font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Labs"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#087E79]/20 text-[#102D29] placeholder-[#5A7370]/50 text-sm focus:outline-none focus:border-[#087E79] focus:ring-2 focus:ring-[#087E79]/20 transition-all shadow-xs"
                      />
                      <Building className="w-4 h-4 text-[#5A7370]/60 absolute right-3.5 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102D29] mb-2">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#087E79]/20 text-[#102D29] text-sm focus:outline-none focus:border-[#087E79] focus:ring-2 focus:ring-[#087E79]/20 transition-all shadow-xs"
                    >
                      <option value="Immediate / < 1 month">Immediate / Next 4 weeks</option>
                      <option value="1-3 months">1 to 3 months</option>
                      <option value="3-6 months">3 to 6 months</option>
                      <option value="Exploratory / Planning">Exploratory / Discovery</option>
                    </select>
                  </div>
                </div>

                {/* Service of Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102D29] mb-2">
                    Service of Interest <span className="text-[#087E79]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {contact.services.map((srv) => {
                      const isSelected = formData.service === srv;
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-[#087E79] border-[#087E79] text-white shadow-xs"
                              : "bg-white border-[#087E79]/15 text-[#405854] hover:border-[#087E79]/40 hover:text-[#102D29]"
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102D29] mb-2">
                    Project Description &amp; Technical Scope <span className="text-[#087E79]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the product or problem you want to solve, desired tech stack, or specific features..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#087E79]/20 text-[#102D29] placeholder-[#5A7370]/50 text-sm focus:outline-none focus:border-[#087E79] focus:ring-2 focus:ring-[#087E79]/20 transition-all resize-none shadow-xs"
                  />
                </div>

                {/* Status Feedback Messages */}
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-[#43D6B0]/20 border border-[#087E79]/30 flex items-start gap-3 text-sm text-[#087E79]">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Inquiry Transmitted Successfully</p>
                      <p className="text-xs text-[#102D29] mt-0.5">{statusMessage}</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-300 flex items-start gap-3 text-sm text-red-700">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Submission Failed</p>
                      <p className="text-xs text-red-600 mt-0.5">{statusMessage}</p>
                    </div>
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-[#087E79] hover:bg-[#102D29] shadow-lg shadow-[#087E79]/25 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Your Details...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#5A7370] font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#087E79]" />
                  <span>No obligation &bull; Directly routed to engineering leads</span>
                </div>
              </form>
            </InteractiveCard>
          </div>
        </div>
      </div>
    </section>
  );
}
