"use client";

import { motion } from "framer-motion";

export default function ServiciosGenerales() {
  const servicios = [
    { title: "Lavado Exterior Premium", desc: "Protección y brillo con productos de alta calidad.", icon: "🚗" },
    { title: "Limpieza Interior Detallada", desc: "Tapices, alfombras y superficies impecables.", icon: "🧽" },
    { title: "Pulido y Abrillantado", desc: "Restaura el brillo y elimina micro-rayas.", icon: "✨" },
    { title: "Tratamiento Cerámico", desc: "Capa protectora avanzada con acabado espejo.", icon: "🛡️" },
    { title: "Desinfección y Sanitización", desc: "Elimina bacterias y malos olores con ozono.", icon: "🧴" },
    { title: "Lavado de Motor", desc: "Limpieza segura con productos biodegradables.", icon: "⚙️" },
    { title: "Sellado de Vidrios", desc: "Protección hidrofóbica y mejor visibilidad.", icon: "🪟" },
    { title: "Sellado de Carrocería", desc: "Brillo duradero y protección total.", icon: "🎨" },
    { title: "Grabado de Patente", desc: "Protege tu vehículo con grabado identificador.", icon: "🔖" },
    { title: "Curso Detailing Automotriz", desc: "Capacitación profesional en estética vehicular.", icon: "📘" },
  ];

  return (
    <section
      id="generales"
      className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center px-6 md:px-12 py-24"
    >
      {/* 🏷️ Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#2E2E2E]"
      >
        Servicios Profesionales
      </motion.h2>

      {/* 🧱 Grid con íconos y descripción */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {servicios.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-8 text-center transition-all duration-500"
          >
            {/* Ícono */}
            <div className="text-4xl mb-4">{s.icon}</div>

            {/* Título */}
            <h3 className="text-lg font-semibold mb-2 text-[#2E2E2E]">
              {s.title}
            </h3>

            {/* Descripción */}
            <p className="text-gray-600 text-sm md:text-base">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
