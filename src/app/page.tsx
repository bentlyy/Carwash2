"use client";

import { useRef } from "react";
import ScrollContainer from "@/layouts/ScrollContainer";
import LandingHeader from "@/components/LandingHeader";
import FooterMenu from "@/components/FooterMenu";
import ContactSection from "@/components/ContactSection";
import ServiciosVehiculos from "@/components/Servicios/ServiciosVehiculos";
import ServiciosPage from "@/components/Servicios/ServiciosPage";
import CursoDetailing from "@/components/Servicios/CursoDetailing";

export default function HomePage() {
  // 🔹 Referencia al contenedor de scroll
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // 🔹 Scroll controlado al hacer clic en el header
  const scrollToSection = (sectionId: string) => {
    const container = scrollRef.current;
    const target = document.getElementById(sectionId);
    if (!container || !target) return;

    const headerHeight = 60; // altura efectiva del header
    container.scrollTo({
      top: target.offsetTop - headerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 🔝 Header fijo con navegación */}
      <LandingHeader onScrollToSection={scrollToSection} />

      {/* 🧭 Contenedor principal con snapping tipo Tesla */}
      <ScrollContainer ref={scrollRef}>
        {/* 🏠 Hero principal */}
        <section
          id="home"
          className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden snap-start pt-32 md:pt-40"
        >
          <img
            src="/auto.jpg"
            alt="Portada automotriz"
            className="absolute  inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent" />

          <div className="relative  z-10 text-center px-6 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
              Fernando Olivares
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Estética Automotriz Profesional en Chillán
            </p>
          </div>
        </section>

        {/* 🚘 Vehículos */}
        <section
          id="vehiculos"
          className="snap-center bg-white flex items-center justify-center pt-32 pb-20"
        >
          <ServiciosVehiculos />
        </section>

        {/* 🧴 Servicios (tríptico centrado) */}
        <section
          id="servicios"
          className="snap-start bg-gray-50 flex items-center justify-center pt-32 pb-20"
        >
          <ServiciosPage />
        </section>

        {/* 🎓 Curso Detailing */}
        <section
          id="cursos"
          className="snap-center bg-white flex items-center justify-center pt-32 pb-20"
        >
          <CursoDetailing />
        </section>

        {/* 📞 Contacto */}
        <section
          id="contacto"
          className="snap-center bg-gray-50 flex items-center justify-center pt-32 pb-24"
        >
          <ContactSection />
        </section>

        {/* ⚙️ Footer */}
        <FooterMenu />
      </ScrollContainer>
    </>
  );
}
