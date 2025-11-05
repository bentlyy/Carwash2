"use client";

import { motion } from "framer-motion";

export default function ServicioDomicilio() {
  return (
    <section
      id="domicilio"
      className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 md:px-12 py-24"
    >
      {/* 🏷️ Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#2E2E2E]"
      >
        Servicio a Domicilio
      </motion.h2>

      {/* 🧾 Contenido descriptivo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl text-center leading-relaxed text-gray-700 space-y-6 text-[#2E2E2E]"
      >
        <p>
          Llevamos la estética automotriz directamente a tu hogar o lugar de trabajo.
          Nuestro servicio a domicilio está diseñado para ofrecerte la misma calidad
          profesional sin que tengas que desplazarte.
        </p>

        <p>
          Contamos con equipamiento portátil y productos especializados para garantizar
          resultados impecables, respetando tu espacio y tiempo.
        </p>

        <p>
          Disponible para lavado exterior, limpieza interior, tratamientos rápidos y
          mantenimiento de vehículos particulares o de flota.
        </p>

        <p className="text-[#B67C3D] font-medium mt-8">
          🚗 Agenda tu servicio a domicilio y disfruta de tu vehículo siempre impecable.
        </p>
      </motion.div>
    </section>
  );
}
