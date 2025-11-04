"use client";

import { motion } from "framer-motion";

export default function ServiciosPage() {
  // --- Datos agrupados ---
  const serviciosGenerales = [
    { icon: "🚗", title: "Lavado Exterior Premium", desc: "Protección y brillo con productos de alta calidad." },
    { icon: "🧽", title: "Limpieza Interior Detallada", desc: "Tapices, alfombras y superficies impecables." },
    { icon: "✨", title: "Pulido y Abrillantado", desc: "Restaura el brillo y elimina micro-rayas." },
    { icon: "🛡️", title: "Tratamiento Cerámico", desc: "Capa protectora avanzada con acabado espejo." },
  ];

  const tratamientosPremium = [
    { title: "Pulido Profesional 3 Etapas", desc: "Elimina micro-rayas, marcas de lavado y devuelve el brillo original con acabado espejo." },
    { title: "Tratamiento Cerámico Premium", desc: "Protección extrema con nanopartículas. Repele agua, suciedad y rayos UV." },
    { title: "Sellado Acrílico", desc: "Brillo intenso y duradero. Ideal para mantener la pintura protegida sin cerámica." },
    { title: "Descontaminado Full", desc: "Limpieza profunda con clay bar y productos especializados para remover impurezas." },
  ];

  const serviciosEspeciales = [
    { title: "Restauración de Faros", desc: "Recupera la transparencia y mejora la visibilidad nocturna." },
    { title: "Limpieza de Tapiz y Cuero", desc: "Eliminamos manchas y olores sin dañar el material original." },
    { title: "Detailing de Motor", desc: "Limpieza profunda y protección segura para componentes eléctricos." },
    { title: "Cuidado de Autos Clásicos", desc: "Atención personalizada y productos especiales para autos únicos." },
  ];

  // --- Render principal ---
  return (
    <section
      id="servicios"
      className="relative w-full bg-white text-gray-900 flex flex-col items-center justify-center px-6 md:px-12 py-28 gap-28 scroll-mt-[90px]"
    >
      {/* 🚘 SERVICIOS GENERALES */}
      <div className="w-full max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-[#2E2E2E]"
        >
          Servicios Generales
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviciosGenerales.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md p-6 transition-all duration-500"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 💎 TRATAMIENTOS PREMIUM */}
      <div className="w-full max-w-6xl text-center border-t border-gray-200 pt-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-[#2E2E2E]"
        >
          Tratamientos Premium
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {tratamientosPremium.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md p-8 transition-all duration-500"
            >
              <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ⚙️ SERVICIOS ESPECIALES */}
      <div className="w-full max-w-5xl text-center border-t border-gray-200 pt-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-[#2E2E2E]"
        >
          Servicios Especiales
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {serviciosEspeciales.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-8 transition-all duration-500"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🏡 SERVICIO A DOMICILIO */}
      <div className="w-full max-w-4xl text-center border-t border-gray-200 pt-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-[#2E2E2E]"
        >
          Servicio a Domicilio
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="leading-relaxed text-gray-700 space-y-6"
        >
          <p>
            Llevamos la estética automotriz directamente a tu hogar o lugar de trabajo. 
            Nuestro servicio a domicilio ofrece la misma calidad profesional sin desplazarte.
          </p>
          <p>
            Contamos con equipamiento portátil y productos especializados 
            para garantizar resultados impecables, respetando tu espacio y tiempo.
          </p>
          <p>
            Disponible para lavado exterior, limpieza interior, tratamientos rápidos 
            y mantenimiento de vehículos particulares o de flota.
          </p>
          <p className="text-[#B67C3D] font-medium">
            🚗 Agenda tu servicio a domicilio y disfruta de tu vehículo siempre impecable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
