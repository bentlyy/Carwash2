"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="
        relative w-full h-screen bg-white text-gray-900
        flex flex-col items-center justify-center
        px-6 md:px-16 py-20
      "
    >
      {/* 🏷️ Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-[#B67C3D] mb-6 text-center"
      >
        Agenda tu Servicio
      </motion.h2>

      {/* 🧭 Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 text-base md:text-lg text-center mb-12 max-w-2xl leading-relaxed"
      >
        Contáctanos para coordinar tu lavado o tratamiento automotriz. 
        Atención personalizada en <strong>Chillán</strong> y alrededores.
      </motion.p>

      {/* 📞 Botón de contacto (ejemplo base) */}
      <motion.a
        href="https://wa.me/56974970075"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="
          bg-[#25D366] text-white px-10 py-3 rounded-xl
          text-lg font-medium shadow-md hover:shadow-lg hover:bg-[#20ba5a]
          transition-all duration-300
        "
      >
        WhatsApp +56 9 7497 0075
      </motion.a>
    </section>
  );
}
