"use client";

import { motion } from "framer-motion";

export default function TratamientosPremium() {
  const tratamientos = [
    {
      title: "Pulido Profesional 3 Etapas",
      desc: "Elimina micro-rayas, marcas de lavado y devuelve el brillo original con acabado espejo.",
    },
    {
      title: "Tratamiento Cerámico Premium",
      desc: "Protección extrema con nanopartículas. Repele agua, suciedad y rayos UV.",
    },
    {
      title: "Sellado Acrílico",
      desc: "Brillo intenso y duradero. Ideal para mantener la pintura protegida sin cerámica.",
    },
    {
      title: "Descontaminado Full",
      desc: "Limpieza profunda con clay bar y productos especializados para remover impurezas.",
    },
  ];

  return (
    <section
      id="tratamientos"
      className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 md:px-12 py-24"
    >
      {/* 🏷️ Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-14 text-center text-[#2E2E2E]"
      >
        Tratamientos Premium
      </motion.h2>

      {/* 🧱 Grid principal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl w-full">
        {tratamientos.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg p-8 text-center border border-gray-100 hover:border-[#D9C87C] transition-all duration-500"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#2E2E2E]">
              {t.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {t.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
