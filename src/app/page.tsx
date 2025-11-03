"use client";

import LandingHeader from "@/components/LandingHeader";
import FooterMenu from "@/components/FooterMenu";
import ContactSection from "@/components/ContactSection";

import ServiciosVehiculos from "@/components/Servicios/ServiciosVehiculos";
import ServiciosGenerales from "@/components/Servicios/ServiciosGenerales";
import TratamientosPremium from "@/components/Servicios/TratamientosPremium";
import ServiciosEspeciales from "@/components/Servicios/ServiciosEspeciales";
import ServicioDomicilio from "@/components/Servicios/ServicioDomicilio";
import CursoDetailing from "@/components/Servicios/CursoDetailing";

export default function HomePage() {
  return (
    <main
      className="relative snap-y snap-mandatory w-full h-screen overflow-y-scroll scroll-smooth text-white bg-transparent"
      style={{ scrollSnapType: "y mandatory" }} // fuerza el comportamiento en Safari
    >
      {/* ✅ Header fijo arriba */}
      <LandingHeader />

      {/* ✅ Cada sección usa snap-center para alinearse */}
      <section
        id="home"
        className="snap-center h-screen flex flex-col items-center justify-center text-center z-20 pt-24 md:pt-32"
      >
        <div>
          <h1 className="text-6xl font-bold mb-4 text-[#2E2E2E] drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]">
            Fernando Olivares
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Estética Automotriz Profesional en Chillán
          </p>
          <a
            href="#contacto"
            className="bg-[#D9C87C] text-black px-10 py-3 font-medium rounded-md hover:bg-[#CBB469] transition-all"
          >
            Agenda tu servicio
          </a>
        </div>
      </section>

      {/* ✅ Todas las secciones con snap-center */}
      <section id="servicios" className="snap-center">
        <ServiciosVehiculos />
      </section>

      <section id="generales" className="snap-center">
        <ServiciosGenerales />
      </section>

      <section id="tratamientos" className="snap-center">
        <TratamientosPremium />
      </section>

      <section id="especiales" className="snap-center">
        <ServiciosEspeciales />
      </section>

      <section id="domicilio" className="snap-center">
        <ServicioDomicilio />
      </section>

      <section id="cursos" className="snap-center">
        <CursoDetailing />
      </section>

      <section id="contacto" className="snap-center">
        <ContactSection />
      </section>

      <FooterMenu />
    </main>
  );
}
