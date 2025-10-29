"use client";

import LandingHeader from "@/components/LandingHeader";
import HeroSection from "@/components/HeroSection";
import ServiceCitycar from "@/components/ServiceCitycar";
import ServiceHatchback from "@/components/ServiceHatchback";
import ServiceSUV from "@/components/ServiceSUV";
import ServiceXXL from "@/components/ServiceXXL";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="snap-y snap-mandatory h-screen w-full overflow-y-scroll scroll-smooth">
      <LandingHeader />

      <section className="snap-center">
        <HeroSection />
      </section>

      <section className="snap-center">
        <ServiceCitycar />
      </section>

      <section className="snap-center">
        <ServiceHatchback />
      </section>

      <section className="snap-center">
        <ServiceSUV />
      </section>

      <section className="snap-center">
        <ServiceXXL />
      </section>

      <section className="snap-center">
        <ContactSection />
      </section>
    </main>
  );
}
