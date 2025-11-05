"use client";

import { motion } from "framer-motion";

export default function ServiciosPage() {
  const servicios = [
    {
      id: "general",
      title: "Generales & Premium",
      desc: "Lavados, tratamientos cerámicos y descontaminados. Cuida tu vehículo con productos de alta gama.",
      img: "/servicios/generales.jpg",
    },
    {
      id: "especial",
      title: "Servicios Especiales",
      desc: "Pulido de faros, limpieza de tapices, motores y restauración de autos clásicos con cuidado profesional.",
      img: "/servicios/especiales.jpg",
    },
    {
      id: "domicilio",
      title: "A Domicilio",
      desc: "Llevamos nuestro servicio directamente a tu hogar o empresa, con comodidad y calidad profesional.",
      img: "/servicios/domicilio.jpg",
    },
  ];

  return (
    <section
      id="servicios"
      className="
        relative w-full bg-white text-gray-900
        flex flex-col items-center justify-center
        px-8 md:px-16 py-20
      "
    >
      {/* 🔹 Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-[#B67C3D] mb-16"
      >
        Nuestros Servicios
      </motion.h2>

      {/* 🔹 Contenedor tríptico centrado */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-10
          max-w-6xl w-full place-items-stretch
        "
      >
        {servicios.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="
              flex flex-col items-center text-center
              bg-white rounded-3xl border border-gray-200
              shadow-md hover:shadow-xl
              transition-all duration-500 ease-out
              overflow-hidden
            "
          >
            {/* Imagen superior */}
            <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden rounded-t-3xl">
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
            <div className="flex flex-col justify-between flex-1 p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#B67C3D] mb-4">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Espacio inferior */}
      <div className="h-20" />
    </section>
  );
}
