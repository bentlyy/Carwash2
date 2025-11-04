"use client";

import { motion } from "framer-motion";

export default function CursoDetailing() {
  const temario = [
    "Introducción al detailing automotriz.",
    "Productos y herramientas.",
    "Limpieza de motor.",
    "Limpieza de llantas.",
    "Limpieza interior/tapicería 3M.",
    "Lavado técnico exterior (two bucket).",
    "Secado free touch y con microfibra.",
    "Descontaminación química/mecánica.",
    "Enmascarado y precauciones.",
    "Pulidoras y Pads.",
    "Proceso de abrillantado y corrección.",
    "Preparación de carrocería.",
    "Selladores naturales, grafeno y cerámico.",
    "Instalación de selladores.",
    "Pre-entrega final.",
  ];

  // Dividimos el temario en dos partes
  const mitad = Math.ceil(temario.length / 2);
  const primeraParte = temario.slice(0, mitad);
  const segundaParte = temario.slice(mitad);

  return (
    <section
      id="cursos"
      className="
        min-h-screen bg-white text-[#2E2E2E]
        flex flex-col items-center justify-start
        px-6 md:px-16 py-20
      "
    >
      {/* 🏷️ Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        Curso Detailing Automotriz
      </motion.h2>

      {/* 📘 Contenedor general */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full max-w-6xl">
        {/* 🧾 Descripción + Modalidad */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <p className="text-gray-800 leading-relaxed text-base md:text-lg">
            Este curso de <strong>nivel inicial</strong> está diseñado para quienes buscan
            aprender procesos y técnicas profesionales de limpieza, corrección y protección
            de superficies. Ideal para mantener tu vehículo o iniciar tu propio negocio
            dentro del mundo del <strong>detailing automotriz</strong>.
          </p>

          {/* 📊 Modalidad */}
          <div className="grid grid-cols-2 gap-6 max-w-md text-center mx-auto lg:mx-0">
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-4xl font-bold text-[#B67C3D] mb-2">20%</h3>
              <p className="text-gray-700 font-medium uppercase tracking-wide">
                Teórico
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-4xl font-bold text-[#B67C3D] mb-2">80%</h3>
              <p className="text-gray-700 font-medium uppercase tracking-wide">
                Práctico
              </p>
            </div>
          </div>
        </motion.div>

        {/* 📚 Temario dividido en dos filas */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-[#2E2E2E]">
            Temario del Curso
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-10 w-full">
            {/* Primera mitad */}
            <ul className="flex-1 text-gray-800 text-sm md:text-base list-disc list-inside space-y-2">
              {primeraParte.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.02 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Segunda mitad */}
            <ul className="flex-1 text-gray-800 text-sm md:text-base list-disc list-inside space-y-2">
              {segundaParte.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.02 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* 🔻 Logos */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-14 opacity-90">
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
