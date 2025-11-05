"use client";

import { motion } from "framer-motion";

export default function CursoDetailing() {
  const temario = [
    "Introducción al detailing automotriz",
    "Productos y herramientas",
    "Limpieza de motor",
    "Limpieza de llantas",
    "Limpieza interior/tapicería 3M",
    "Lavado técnico exterior (two bucket)",
    "Secado free touch y con microfibra",
    "Descontaminación química/mecánica",
    "Enmascarado y precauciones",
    "Pulidoras y Pads",
    "Proceso de abrillantado y corrección",
    "Preparación de carrocería",
    "Selladores naturales, grafeno y cerámico",
    "Instalación de selladores",
    "Pre-entrega final",
  ];

  return (
    <section
      id="cursos"
      className="
        relative w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white
        flex flex-col items-center justify-center
        px-6 md:px-16 py-20
      "
    >
      {/* 🏷️ Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-[#B67C3D] mb-14 text-center"
      >
        Curso Detailing Automotriz
      </motion.h2>

      {/* 🔹 Contenedor principal fluido */}
      <div
        className="
          flex flex-col lg:flex-row items-stretch justify-center
          gap-10 w-full max-w-7xl mx-auto
        "
      >
        {/* 📘 Descripción */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            flex-1 bg-white rounded-3xl shadow-md border border-gray-100
            p-8 md:p-10 flex flex-col justify-between
          "
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left">
              Aprende el Arte del Detailing
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
              Un curso <strong>100% práctico</strong> para dominar las técnicas profesionales
              de limpieza, corrección y protección automotriz. Ideal para entusiastas
              y emprendedores que buscan iniciar su negocio en el mundo del detailing.
            </p>
          </div>

          {/* 📊 Porcentajes */}
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto md:mx-0 mt-auto">
            {[{ label: "Teórico", value: "20%" }, { label: "Práctico", value: "80%" }].map(
              (item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="
                    bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm
                    hover:shadow-md transition-all duration-300
                    flex flex-col items-center justify-center
                  "
                >
                  <h4 className="text-4xl font-bold text-[#B67C3D] mb-1">
                    {item.value}
                  </h4>
                  <p className="uppercase text-gray-700 text-sm tracking-wide font-medium">
                    {item.label}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* 📚 Temario */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            flex-1 bg-white rounded-3xl shadow-md border border-gray-100
            p-8 md:p-10 flex flex-col
          "
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-[#B67C3D]">
            Temario del Curso
          </h3>

          <div
            className="
              flex-1 overflow-y-auto
              scrollbar-thin scrollbar-thumb-[#B67C3D]/60 scrollbar-track-gray-100
              pr-3 max-h-[400px]
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
              {temario.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#B67C3D] mt-[3px]">•</span>
                  <p className="text-sm md:text-base leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🔻 Logos */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-12 opacity-90">
        <img
          src="/logos/ferno.svg"
          alt="Fernando Olivares Logo"
          className="h-10 object-contain"
        />
        <img
          src="/logos/chemicalguys.svg"
          alt="Chemical Guys Logo"
          className="h-10 object-contain"
        />
      </div>
    </section>
  );
}
