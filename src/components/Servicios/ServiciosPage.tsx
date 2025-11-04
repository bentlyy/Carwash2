"use client";

import { motion } from "framer-motion";

export default function ServiciosPage() {
  // 🔹 Datos unificados
  const serviciosGenerales = [
    { icon: "🚗", title: "Lavado Exterior Premium", desc: "Protección y brillo con productos de alta calidad." },
    { icon: "🧽", title: "Limpieza Interior Detallada", desc: "Tapices, alfombras y superficies impecables." },
    { icon: "✨", title: "Pulido Profesional 3 Etapas", desc: "Elimina micro-rayas y devuelve el brillo espejo." },
    { icon: "🛡️", title: "Tratamiento Cerámico Premium", desc: "Protección extrema con nanopartículas repelentes." },
    { icon: "💧", title: "Sellado Acrílico", desc: "Brillo intenso y duradero para mantener la pintura." },
    { icon: "🧴", title: "Descontaminado Full", desc: "Limpieza profunda con clay bar y productos especializados." },
  ];

  const serviciosEspeciales = [
    { title: "Restauración de Faros", desc: "Recupera la transparencia y mejora la visibilidad nocturna." },
    { title: "Limpieza de Tapiz y Cuero", desc: "Eliminamos manchas y olores sin dañar el material original." },
    { title: "Detailing de Motor", desc: "Limpieza profunda y protección segura para componentes eléctricos." },
    { title: "Cuidado de Autos Clásicos", desc: "Atención personalizada y productos especiales para autos únicos." },
  ];

  const servicioDomicilio = [
    {
      title: "Servicio a Domicilio",
      desc: "Llevamos la estética automotriz directamente a tu hogar o lugar de trabajo, con equipamiento portátil y productos profesionales.",
    },
    {
      title: "Disponibilidad",
      desc: "Ideal para lavado exterior, limpieza interior y mantenimiento rápido de flotas o vehículos particulares.",
    },
    {
      title: "Reserva",
      desc: "🚗 Agenda tu servicio a domicilio y disfruta de tu vehículo siempre impecable.",
    },
  ];

  return (
    <section
      id="servicios"
      className="
        relative w-full min-h-screen bg-white text-gray-900 
        flex flex-row items-stretch justify-between
        overflow-hidden
      "
    >
      {/* === 1️⃣ SERVICIOS GENERALES === */}
      <div className="flex-1 min-w-[33.3%] flex flex-col items-center justify-center px-8 py-16 border-r border-gray-200 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-[#2E2E2E]"
        >
          Servicios Generales
        </motion.h2>

        <div className="flex flex-col gap-5 max-w-md">
          {serviciosGenerales.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="font-semibold text-lg mb-1">
                {s.icon} {s.title}
              </h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === 2️⃣ SERVICIOS ESPECIALES === */}
      <div className="flex-1 min-w-[33.3%] flex flex-col items-center justify-center px-8 py-16 border-r border-gray-200 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-[#2E2E2E]"
        >
          Servicios Especiales
        </motion.h2>

        <div className="flex flex-col gap-5 max-w-md">
          {serviciosEspeciales.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === 3️⃣ SERVICIO A DOMICILIO === */}
      <div className="flex-1 min-w-[33.3%] flex flex-col items-center justify-center px-8 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-[#2E2E2E]"
        >
          Servicio a Domicilio
        </motion.h2>

        <div className="flex flex-col gap-5 max-w-md">
          {servicioDomicilio.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
