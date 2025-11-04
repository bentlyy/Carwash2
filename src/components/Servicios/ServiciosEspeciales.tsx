"use client";

import { motion } from "framer-motion";

export default function ServiciosEspeciales() {
  const especiales = [
    {
      title: "Restauración de Faros",
      desc: "Recupera la transparencia y mejora la visibilidad nocturna.",
    },
    {
      title: "Limpieza de Tapiz y Cuero",
      desc: "Eliminamos manchas y olores sin dañar el material original.",
    },
    {
      title: "Detailing de Motor",
      desc: "Limpieza profunda y protección segura para componentes eléctricos.",
    },
    {
      title: "Cuidado de Autos Clásicos",
      desc: "Atención personalizada y productos especiales para autos únicos.",
    },
  ];

  return (
    <section
      id="especiales"
      className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center px-6 md:px-12 py-24"
    >
      {/* 🏷️ Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-14 text-center text-[#2E2E2E]"
      >
        Servicios Especiales
      </motion.h2>

      {/* 🧾 Lista de servicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
        {especiales.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-8 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
