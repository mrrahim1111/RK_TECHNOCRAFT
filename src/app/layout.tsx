import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RK TECHNOCRAFT — Innovating Products • Scaling Services",
  description:
    "We design, develop and engineer digital products and intelligent solutions that move businesses forward. Home of CampusGrow, Full-Stack Engineering, AI Solutions, and Startup MVPs.",
  keywords: [
    "RK Technocraft",
    "CampusGrow",
    "Product Development",
    "AI Solutions",
    "Full-Stack Development",
    "Startup MVP",
    "Software Engineering",
  ],
  authors: [{ name: "Rahim Khan", url: "https://rktechnocraft.com" }],
  openGraph: {
    title: "RK TECHNOCRAFT — Innovating Products • Scaling Services",
    description:
      "Ideas Deserve More Than Just Ideas. They Deserve Engineering. Discover RK Technocraft's products and digital solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className="min-h-screen bg-[#F7F9F8] text-[#102D29] antialiased selection:bg-[#43D6B0]/30 selection:text-[#087E79] font-sans">
        {children}
      </body>
    </html>
  );
}
