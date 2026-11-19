"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon" | "minimal";
  size?: "sm" | "md" | "lg";
  className?: string;
  withTagline?: boolean;
}

export default function Logo({
  variant = "full",
  size = "md",
  className = "",
  withTagline = true,
}: LogoProps) {
  const iconDimensions = {
    sm: { width: 34, height: 34 },
    md: { width: 44, height: 44 },
    lg: { width: 56, height: 56 },
  }[size];

  const textSize = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
  }[size];

  return (
    <Link
      href="#hero"
      className={`group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="RK TECHNOCRAFT - Home"
    >
      {/* Official App Icon */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#43D6B0]/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div
          className="relative overflow-hidden rounded-xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300"
          style={{ width: iconDimensions.width, height: iconDimensions.height }}
        >
          <Image
            src="/images/rk-official-app-icon.png"
            alt="RK TECHNOCRAFT Official Icon"
            width={iconDimensions.width}
            height={iconDimensions.height}
            className="object-contain w-full h-full rounded-xl"
            priority
          />
        </div>
      </div>

      {/* Wordmark & Tagline in Light Theme */}
      {variant !== "icon" && (
        <div className="flex flex-col">
          <div className={`font-bold tracking-tight text-[#102D29] leading-none ${textSize}`}>
            <span className="text-[#087E79] font-extrabold mr-1">RK</span>
            <span className="text-[#102D29] tracking-tight font-semibold">TechnoCraft</span>
          </div>

          {withTagline && (
            <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.16em] uppercase text-[#5A7370] font-semibold mt-1 leading-none">
              INNOVATING PRODUCTS <span className="text-[#087E79] mx-0.5">•</span> SCALING SERVICES
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
