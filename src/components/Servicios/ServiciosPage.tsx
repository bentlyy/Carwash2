"use client";

import { motion } from "framer-motion";

export default function ServiciosPage() {
  const servicios = [
    {
      id: "general",
      title: "Generales & Especiales",
      desc: "Lavados premium, tratamientos cerámicos, pulido, limpieza interior, motores y restauración de autos clásicos. Servicios completos para el cuidado profesional de tu vehículo.",
      img: "/servicios/generales.jpg",
    },
    {
      id: "domicilio",
      title: "A Domicilio",
      desc: "Llevamos nuestro servicio directamente a tu hogar o empresa, con comodidad, puntualidad y calidad profesional en cada detalle.",
      img: "/servicios/domicilio.jpg",
    },
  ];

  return (
    <section
      id="servicios"
      className="
      relative w-full min-h-[75vh] bg-black text-white
      flex flex-col items-center justify-start
      px-4 md:px-12 pt-[1rem] pb-2
      overflow-hidden
      "
    >
      {/* 🔹 Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold text-center text-[#B67C3D] mb-6"
      >
        Nuestros Servicios
      </motion.h2>

      {/* 🔹 Dos tarjetas lado a lado */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-2
          gap-6 md:gap-10
          w-full max-w-5xl
        "
      >
        {servicios.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="
              flex flex-col items-center text-center
              bg-[#0e0e0e] rounded-2xl border border-[#B67C3D]/30
              shadow-md hover:shadow-[#B67C3D]/40 hover:shadow-lg
              transition-all duration-500
              overflow-hidden
            "
          >
            {/* Imagen */}
            <div className="relative w-full h-[120px] md:h-[140px] overflow-hidden rounded-t-2xl">
              <img
                src={s.img}
                alt={s.title}
                className="
                  w-full h-full object-cover
                  transform transition-transform duration-700 ease-out
                  hover:scale-105
                "
              />
            </div>

            {/* Texto */}
            <div className="flex flex-col justify-center flex-1 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-[#B67C3D] mb-2">
                {s.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-[0.9rem] leading-relaxed">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
