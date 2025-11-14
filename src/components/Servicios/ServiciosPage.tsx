"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Truck,
  Car,
  Droplets,
  ShieldCheck,
  SprayCan,
} from "lucide-react";

export default function ServiciosPage() {
  const servicios = [
    {
      id: "lavado",
      icon: <Droplets className="w-6 h-6 text-[#00c8ff]" />,
      title: "Lavado Exterior Premium",
      desc: "Limpieza profunda con productos biodegradables, cuidando pintura y detalles.",
    },
    {
      id: "interior",
      icon: <Car className="w-6 h-6 text-[#00c8ff]" />,
      title: "Limpieza Interior Detallada",
      desc: "Aspirado completo, restauración de tapicería, plásticos y sanitización total.",
    },
    {
      id: "pulido",
      icon: <Sparkles className="w-6 h-6 text-[#06f4ff]" />,
      title: "Pulido y Abrillantado",
      desc: "Corrección de pintura y brillo espejo con técnicas profesionales.",
    },
    {
      id: "ceramico",
      icon: <ShieldCheck className="w-6 h-6 text-[#06f4ff]" />,
      title: "Tratamiento Cerámico",
      desc: "Revestimiento cerámico de alta durabilidad con protección UV y repelencia total.",
    },
    {
      id: "domicilio",
      icon: <Truck className="w-6 h-6 text-[#40a9ff]" />,
      title: "Servicio a Domicilio",
      desc: "Atendemos directamente en tu hogar o empresa, con equipamiento profesional móvil.",
    },
    {
      id: "restauracion",
      icon: <SprayCan className="w-6 h-6 text-[#40a9ff]" />,
      title: "Restauración de Detalles",
      desc: "Reparación estética de pintura, metales y plásticos para autos clásicos o de colección.",
    },
  ];

  return (
    <section
      id="servicios"
      className="
        relative w-full min-h-screen bg-[#0b3d91] text-white
        flex flex-col md:flex-row items-center justify-between
        px-8 md:px-16 py-24 overflow-hidden
      "
    >
      {/* 🔹 Columna izquierda: texto + listado */}
      <div className="flex flex-col w-full md:w-1/2 items-start justify-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            text-4xl md:text-5xl font-bold mb-10 text-[#06f4ff]
            tracking-tight leading-tight
          "
        >
          Nuestros Servicios
        </motion.h2>

        {/* 🧾 Listado de servicios */}
        <div className="flex flex-col gap-5 w-full max-w-md">
          {servicios.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="
                flex items-start gap-4
                bg-gradient-to-b from-[#1e63c4]/20 to-[#0a2c6f]/60
                border border-[#40a9ff]/30 rounded-2xl
                p-5 shadow-[0_0_15px_rgba(6,244,255,0.15)]
                hover:shadow-[0_0_25px_rgba(6,244,255,0.4)]
                hover:translate-x-1
                transition-all duration-300
              "
            >
              <div className="flex-shrink-0 mt-[2px]">{s.icon}</div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                  {s.title}
                </h3>
                <p className="text-gray-300 text-[0.85rem] leading-snug italic">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔹 Columna derecha: imagen con brillo animado */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
            relative w-[80%] h-[420px]
            rounded-3xl overflow-hidden
            shadow-[0_0_50px_rgba(6,244,255,0.25)]
            border border-[#40a9ff]/40
          "
        >
          {/* 🖼️ Imagen base */}
          <motion.img
            src="/auto-brillo.webp"
            alt="Auto Detailing Premium"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full object-cover object-center"
          />

          {/* ✨ Brillo animado */}
          <motion.div
            initial={{ x: "-150%" }}
            animate={{ x: "150%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 4,
              ease: "easeInOut",
            }}
            className="
              absolute top-0 left-0 w-1/3 h-full
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              pointer-events-none
              skew-x-[25deg]
            "
          />

          {/* 🟦 Degradado de contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b3d91]/80 via-transparent to-transparent" />

          {/* 🏷️ Texto superpuesto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-6 left-0 right-0 text-center"
          >
            <p className="text-[#06f4ff] text-xl font-semibold drop-shadow-md">
              Detailing de Alta Precisión
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 🌊 Fondo dinámico con gradiente */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        transition={{ duration: 1.5 }}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_30%,#40a9ff22,#0b3d91)]
          pointer-events-none
        "
      />
    </section>
  );
}
