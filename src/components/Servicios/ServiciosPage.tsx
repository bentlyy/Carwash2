"use client";

import { motion } from "framer-motion";
import { Sparkles, Truck, Car, Droplets, ShieldCheck, SprayCan } from "lucide-react";

export default function ServiciosPage() {
  const servicios = [
    { id: "lavado", icon: <Droplets className="w-6 h-6 text-[#40a9ff]" />, title: "Lavado Exterior Premium", desc: "Limpieza detallada con productos biodegradables y técnicas profesionales." },
    { id: "interior", icon: <Car className="w-6 h-6 text-[#40a9ff]" />, title: "Limpieza Interior Detallada", desc: "Aspirado, tapicería, plásticos y sanitización completa del interior." },
    { id: "pulido", icon: <Sparkles className="w-6 h-6 text-[#06f4ff]" />, title: "Pulido y Abrillantado", desc: "Restaura el brillo y elimina micro-rayas para un acabado espejo." },
    { id: "ceramico", icon: <ShieldCheck className="w-6 h-6 text-[#06f4ff]" />, title: "Tratamiento Cerámico", desc: "Protección avanzada con revestimientos cerámicos y selladores de grafeno." },
    { id: "domicilio", icon: <Truck className="w-6 h-6 text-[#00b4d8]" />, title: "Servicio a Domicilio", desc: "Atendemos directamente en tu hogar o empresa con equipamiento portátil." },
    { id: "restauracion", icon: <SprayCan className="w-6 h-6 text-[#00b4d8]" />, title: "Restauración de Detalles", desc: "Corrección estética y protección para autos clásicos o de colección." },
  ];

  return (
    <section
      id="servicios"
      className="
        relative w-full min-h-screen bg-[#0b3d91] text-white
        flex flex-col md:flex-row items-start justify-center
        px-6 md:px-16 py-28 overflow-hidden
      "
    >
      {/* 🔹 Columna izquierda: texto y listado */}
      <div className="flex flex-col w-full md:w-1/2 items-start justify-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-3xl md:text-5xl font-bold text-[#06f4ff]
            mb-12 md:mb-16 text-left tracking-wide glow-text
          "
        >
          Nuestros Servicios
        </motion.h2>

        {/* 🧾 Listado de servicios */}
        <div className="flex flex-col gap-5 w-full max-w-md">
          {servicios.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
                flex items-start gap-4
                bg-gradient-to-b from-[#1e63c4]/10 to-[#1a1a1a]/80
                border border-[#40a9ff]/30 rounded-2xl
                p-5 shadow-[0_0_15px_rgba(6,244,255,0.15)]
                hover:shadow-[0_0_25px_rgba(6,244,255,0.3)]
                hover:bg-gradient-to-b hover:from-[#40a9ff]/10 hover:to-[#0b3d91]
                transition-all duration-300
              "
            >
              <div className="flex-shrink-0">{s.icon}</div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-white mb-1 tracking-wide">
                  {s.title}
                </h3>
                <p className="text-gray-300 text-[0.8rem] md:text-[0.85rem] leading-snug italic">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔹 Columna derecha: imagen animada */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
            relative w-[80%] h-[420px]
            rounded-3xl overflow-hidden
            shadow-[0_0_40px_rgba(6,244,255,0.3)]
            border border-[#40a9ff]/30
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
              duration: 3,
              ease: "easeInOut",
            }}
            className="
              absolute top-0 left-0 w-1/3 h-full
              bg-gradient-to-r from-transparent via-white/25 to-transparent
              pointer-events-none
              skew-x-[20deg]
            "
          />

          {/* 🟦 Degradado de contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b3d91]/70 via-transparent to-transparent" />

          {/* 🏷️ Texto superpuesto */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#06f4ff] text-xl font-semibold drop-shadow-md glow-text"
            >
              Detailing de Alta Precisión
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* 🌊 Efecto de fondo dinámico */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#40a9ff20,#0b3d91)]"
      />
    </section>
  );
}
