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
        relative min-h-screen bg-[#0b3d91] text-white
        flex flex-col items-center justify-center
        px-8 md:px-16 py-24 md:py-28 overflow-hidden
      "
    >
      {/* 💧 Título con animación y efecto de brillo */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="
          text-[#06f4ff] glow-text text-3xl md:text-5xl
          uppercase tracking-[0.25em] font-semibold mb-16 text-center
        "
      >
        Vehículos que Atendemos
      </motion.h2>

      {/* 🚗 Galería 3x2 con efecto hover */}
      <div
        className="
          grid grid-cols-3 grid-rows-2 gap-8
          w-full max-w-5xl mx-auto
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
              ease: "easeOut",
            }}
            className="
              relative overflow-hidden rounded-2xl
              bg-gradient-to-b from-[#1e63c4]/10 to-[#1a1a1a]/80
              border border-[#40a9ff]/30 shadow-[0_0_25px_rgba(6,244,255,0.1)]
              hover:shadow-[0_0_40px_rgba(6,244,255,0.3)]
              group transition-all duration-500
            "
          >
            <div className="relative w-full h-[210px] md:h-[260px] overflow-hidden rounded-xl">
              <img
                src={v.src}
                alt={v.title}
                loading={i === 0 ? "eager" : "lazy"}
                className="
                  w-full h-full object-cover rounded-xl
                  transform group-hover:scale-105 transition-transform duration-700 ease-out
                "
              />

              {/* 💫 Overlay animado con texto */}
              <div
                className="
                  absolute inset-0 bg-gradient-to-t from-[#000]/70 via-[#000]/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  flex items-end justify-center pb-6
                "
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="
                    text-[#06f4ff] text-lg md:text-xl font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
                    tracking-wide
                  "
                >
                  {v.title}
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🌊 Fondo dinámico radial */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e63c440,#0b3d91)] pointer-events-none"
      />
    </section>
  );
}
