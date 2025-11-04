"use client";

import { useEffect, useRef, useState } from "react";
import LandingHeader from "@/components/LandingHeader";
import FooterMenu from "@/components/FooterMenu";
import ContactSection from "@/components/ContactSection";

// 🔹 Mantiene Vehículos
import ServiciosVehiculos from "@/components/Servicios/ServiciosVehiculos";

// 🔹 Nueva sección combinada (Generales + Tratamientos + Especiales + Domicilio)
import ServiciosPage from "@/components/Servicios/ServiciosPage";

// 🔹 Curso Detailing
import CursoDetailing from "@/components/Servicios/CursoDetailing";

export default function HomePage() {
  const [fade, setFade] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const y = container.scrollTop;
      const fadeValue = Math.max(0, 1 - y / 150);
      setFade(fadeValue);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      ref={scrollContainerRef}
      className="
        relative snap-y snap-mandatory 
        w-full h-screen overflow-y-scroll 
        scroll-smooth bg-white text-gray-900 
        antialiased
      "
    >
      {/* 🔝 Header fijo */}
      <LandingHeader />

      {/* 🏠 Sección principal (Inicio) */}
      <section
        id="home"
        className="
          relative snap-start h-screen 
          flex flex-col items-center justify-center 
          text-center bg-white overflow-hidden
        "
      >
        {/* 🔹 Imagen principal */}
        <div className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden">
          <img
            src="/auto.jpg"
            alt="Portada automotriz"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Degradado inferior suave */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent" />

          {/* Texto central */}
          <div
            className="relative z-10 text-center px-6 max-w-3xl mt-[-42vh]"
            style={{ opacity: fade, transition: "opacity 0.5s ease" }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
              Fernando Olivares
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Estética Automotriz Profesional en Chillán
            </p>

            {/* Botones de acción */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#vehiculos"
                className="bg-[#D9C87C] text-black px-8 py-3 font-medium rounded-md hover:bg-[#CBB469] transition-all"
              >
                Ver vehículos
              </a>
              <a
                href="#contacto"
                className="border border-[#D9C87C] text-white px-8 py-3 font-medium rounded-md hover:bg-[#E3D59C]/30 transition-all"
              >
                Agenda tu servicio
              </a>
            </div> */}
          </div>
        </div>

        {/* Barra blanca inferior de transición */}
        <div
          className="absolute bottom-0 left-0 w-full h-[100px] bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.05)]"
          style={{
            opacity: fade,
            transition: "opacity 0.6s ease",
          }}
        />
      </section>

      {/* 🚘 Sección de Vehículos */}
      <section id="vehiculos" className="snap-center bg-white">
        <ServiciosVehiculos />
      </section>

      {/* 🧴 Sección de Servicios (4 en 1) */}
      <section id="servicios" className="snap-center bg-gray-50">
        <ServiciosPage />
      </section>

      {/* 🎓 Curso Detailing */}
      <section id="cursos" className="snap-center bg-white">
        <CursoDetailing />
      </section>

      {/* 📞 Contacto */}
      <section id="contacto" className="snap-center bg-gray-50">
        <ContactSection />
      </section>

      {/* ⚙️ Footer */}
      <FooterMenu />
    </main>
  );
}
