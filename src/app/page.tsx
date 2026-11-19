import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-unified-canvas text-[#102D29] relative selection:bg-[#43D6B0]/30 selection:text-[#087E79]">
      {/* Global Viewport Continuous Edge Shading (Vignette) */}
      <div className="fixed inset-y-0 left-0 w-8 sm:w-16 md:w-28 pointer-events-none z-30 edge-shading-left" />
      <div className="fixed inset-y-0 right-0 w-8 sm:w-16 md:w-28 pointer-events-none z-30 edge-shading-right" />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Hero Section with Interactive 3D Canvas and Provided Icon */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Interactive Services Section */}
      <Services />

      {/* CampusGrow Product Showcase */}
      <Products />

      {/* Founder Section */}
      <Founder />

      {/* Business & Project Inquiries */}
      <Contact />

      {/* Corporate Footer */}
      <Footer />
    </main>
  );
}
