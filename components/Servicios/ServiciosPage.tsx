"use client";

import { motion } from "framer-motion";

export default function ServiciosPage() {
  const servicios = [
    {
      id: "general",
      title: "Generales & Premium",
      desc: "Lavados, tratamientos cerámicos, descontaminados y más. Cuida tu vehículo con productos de alta gama.",
      img: "/servicios/generales.jpg",
    },
    {
      id: "especial",
      title: "Servicios Especiales",
      desc: "Pulido de faros, limpieza de tapices y motores, restauración de autos clásicos y cuidado personalizado.",
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
        relative w-full min-h-screen bg-white text-gray-900
        flex flex-col items-center justify-center
        px-8 md:px-16 py-24
      "
    >
      {/* 🔹 Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-[#B67C3D] mb-20"
      >
        Nuestros Servicios
      </motion.h2>

      {/* 🔹 Contenedor tríptico */}
      <div
        className="
          grid grid-cols-1 lg:grid-cols-3
          gap-12
          w-full max-w-7xl mx-auto
          px-6 md:px-10
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
              p-6 md:p-8
            "
          >
            {/* Imagen superior */}
            <div
              className="
                relative w-full h-[220px] md:h-[260px] overflow-hidden rounded-2xl mb-6
              "
            >
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
            <h3 className="text-xl md:text-2xl font-semibold text-[#B67C3D] mb-4">
              {s.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed px-2">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Espacio inferior (aire visual) */}
      <div className="w-full h-[160px] bg-white" />
    </section>
  );
}
