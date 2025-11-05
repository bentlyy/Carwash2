"use client";

import { motion } from "framer-motion";

export default function ServiciosVehiculos() {
  const vehiculos = [
    { src: "/vehiculos/sedan.webp", title: "Sedán" },
    { src: "/vehiculos/suv.webp", title: "SUV" },
    { src: "/vehiculos/deportivo.webp", title: "Deportivo" },
    { src: "/vehiculos/pickup.webp", title: "Pickup" },
    { src: "/vehiculos/moto.webp", title: "Motocicleta" },
    { src: "/vehiculos/van.webp", title: "Van / Utilitario" },
  ];

  return (
    <section
      id="vehiculos"
      className="
        relative min-h-screen bg-white text-gray-900
        flex flex-col items-center justify-center
        px-8 md:px-16 py-24 md:py-28
      "
    >
      {/* 🧩 Subtítulo minimalista */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-[#C4A24C] uppercase tracking-[0.25em] text-sm font-semibold mb-10 text-center"
      >
        Vehículos & Detalle Automotriz
      </motion.p>

      {/* 🖼️ Galería animada 3x2 */}
      <div
        className="
          grid grid-cols-3 grid-rows-2 gap-8
          w-full max-w-6xl mx-auto
        "
      >
        {vehiculos.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: 'easeOut',
            }}
            className="
              relative overflow-hidden rounded-2xl
              shadow-md hover:shadow-xl transition-all duration-500
              group p-[5px] bg-white
            "
          >
            <div className="relative w-full h-[230px] md:h-[260px] overflow-hidden rounded-xl">
              <img
                src={v.src}
                alt={v.title}
                loading={i === 0 ? "eager" : "lazy"}  // ✅ carga progresiva optimizada
                className="
                  w-full h-full object-cover rounded-xl
                  transform group-hover:scale-105 
                  transition-transform duration-700 ease-out
                "
              />
              <div
                className="
                  absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  flex items-end justify-center pb-5
                "
              >
                <span className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                  {v.title}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
