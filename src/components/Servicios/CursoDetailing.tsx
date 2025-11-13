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
-   relative w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white
-   flex flex-col items-center justify-start
-   px-6 md:px-16 pt-[4rem] pb-20 mt-20
+   relative w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white
+   flex flex-col items-center justify-start
+   px-6 md:px-16 pt-[4rem] pb-40 mt-20
  "
>
      {/* 🏷️ Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-[#B67C3D] mb-10 text-center"
      >
        Curso Detailing Automotriz
      </motion.h2>

      {/* 🔹 Contenedor horizontal estilo afiche */}
      <div
        className="
          flex flex-row flex-wrap items-stretch justify-center
          gap-10 w-full max-w-6xl mx-auto
        "
      >
        {/* 📘 Cuadro de descripción */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            flex-1 bg-white rounded-2xl shadow-md border border-gray-100
            p-6 md:p-8 flex flex-col justify-between
            max-w-[500px] mx-auto h-[430px]
          "
        >
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
              Aprende el Arte del Detailing
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 text-center md:text-left">
              Un curso <strong>100% práctico</strong> para dominar las técnicas profesionales
              de limpieza, corrección y protección automotriz. Ideal para entusiastas
              y emprendedores que buscan iniciar su negocio en el mundo del detailing.
            </p>
          </div>

          {/* 📊 Porcentajes */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mt-auto">
            {[{ label: "Teórico", value: "20%" }, { label: "Práctico", value: "80%" }].map(
              (item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="
                    bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm
                    hover:shadow-md transition-all duration-300
                    flex flex-col items-center justify-center
                  "
                >
                  <h4 className="text-3xl font-bold text-[#B67C3D] mb-1">
                    {item.value}
                  </h4>
                  <p className="uppercase text-gray-700 text-xs tracking-wide font-medium">
                    {item.label}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* 📚 Cuadro de temario (sin scroll, más compacto) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            flex-1 bg-white rounded-2xl shadow-md border border-gray-100
            p-6 md:p-8 flex flex-col justify-between
            max-w-[500px] mx-auto h-[430px]
          "
        >
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-center text-[#B67C3D]">
            Temario del Curso
          </h3>

          {/* 📋 Lista más compacta y ordenada */}
          <div
            className="
              grid grid-cols-2 gap-x-5 gap-y-1.5
              text-gray-700 text-[0.75rem] md:text-[0.82rem] leading-snug
              flex-1
            "
          >
            {temario.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="flex items-start gap-1.5"
              >
                <span className="text-[#B67C3D] mt-[3px] text-xs">•</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🔻 Logos (NO se mueven) */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-24 md:mt-36 mb-16 opacity-90 relative z-10">
        <img
          src="/logos/ferno.svg"
          alt="Fernando Olivares Logo"
          className="h-10 md:h-12 object-contain"
        />
        <img
          src="/logos/chemicalguys.svg"
          alt="Chemical Guys Logo"
          className="h-10 md:h-12 object-contain"
        />
      </div>
    </section>
  );
}
