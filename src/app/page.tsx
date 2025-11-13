"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollContainer from "@/layouts/ScrollContainer";
import LandingHeader from "@/components/LandingHeader";
import FooterMenu from "@/components/FooterMenu";
import ContactSection from "@/components/ContactSection";
import ServiciosVehiculos from "@/components/Servicios/ServiciosVehiculos";
import ServiciosPage from "@/components/Servicios/ServiciosPage";
import CursoDetailing from "@/components/Servicios/CursoDetailing";

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (sectionId: string) => {
    const container = scrollRef.current;
    const target = document.getElementById(sectionId);
    if (!container || !target) return;

    const headerHeight = 110;
    container.scrollTo({
      top: target.offsetTop - headerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 🔝 Header fijo con navegación */}
      <LandingHeader onScrollToSection={scrollToSection} />

      {/* 🧭 Contenedor principal con scroll-snap */}
      <ScrollContainer ref={scrollRef}>
        {/* 🏠 HERO SECTION - ALTURA REDUCIDA */}
        <section
          id="home"
          className="
            relative h-[70vh] min-h-[500px] flex flex-col items-center justify-center
            text-center overflow-hidden snap-start
            bg-[#f7f7f7] mt-[6rem] mb-[2rem]  /* Reducido mb de 4rem a 2rem */
            rounded-3xl shadow-lg
          "
        >
          {/* 🖼️ Contenedor de imagen */}
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl">
            <Image
              src="/auto.webp"
              alt="Estética Automotriz Premium"
              fill
              priority
              quality={75}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* 🔹 Capa de degradado para contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0" />

          {/* 🔹 Contenido animado */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-10 px-6 max-w-2xl mt-[-20rem]"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white glow-text mb-4 drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)] tracking-tight">
              Fernando Olivares
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Estética Automotriz Profesional en Chillán
            </p>

            {/* ✨ Botón CTA directo a contacto */}
            <motion.button
              onClick={() => scrollToSection('contacto')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="
                bg-[#B67C3D] text-white px-8 py-3 rounded-full
                font-semibold tracking-wide text-base
                shadow-md hover:shadow-lg hover:bg-[#a26d2f]
                transition-all duration-300
              "
            >
              Agenda tu Servicio
            </motion.button>
          </motion.div>
        </section>

        {/* 🚘 Vehículos */}
        <section
          id="vehiculos"
          className="
            snap-center bg-black flex items-center justify-center
            pt-20 md:pt-24 pb-20  /* Reducido el padding */
          "
        >
          <ServiciosVehiculos />
        </section>

        {/* 🧴 Servicios */}
        <section
          id="servicios"
          className="
            snap-start bg-gray-50 flex items-center justify-center
            pt-20 md:pt-24 pb-20  /* Reducido el padding */
          "
        >
          <ServiciosPage />
        </section>

        {/* 🎓 Curso Detailing */}
        <section
          id="cursos"
          className="
            snap-center bg-white flex items-center justify-center
            pt-20 md:pt-24 pb-24  /* Reducido el padding */
          "
        >
          <CursoDetailing />
        </section>

        {/* 📞 Contacto */}
        <section
          id="contacto"
          className="
            snap-center bg-gray-50 flex items-center justify-center
            pt-20 md:pt-24 pb-24  /* Reducido el padding */
          "
        >
          <ContactSection />
        </section>

        {/* ⚙️ Footer */}
        <FooterMenu />
      </ScrollContainer>
    </>
  );
}