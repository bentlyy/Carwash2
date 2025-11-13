"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="
        relative w-full min-h-screen bg-gray-50 text-gray-900
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
        className="text-4xl md:text-5xl font-bold text-[#B67C3D] mb-6 text-center tracking-tight"
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
        Coordina tu lavado, tratamiento o curso automotriz.  
        <br />
        Atención personalizada en <strong>Chillán</strong> y alrededores.
      </motion.p>

      {/* 💬 Botón de WhatsApp moderno */}
      <motion.a
        href="https://wa.me/56974970075"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="
          group flex items-center gap-3
          bg-[#25D366] text-white px-8 py-4 rounded-full
          font-semibold text-lg shadow-md
          hover:scale-105 hover:shadow-lg hover:bg-[#1eb858]
          transition-all duration-300
        "
      >
        {/* Icono de WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
          className="w-7 h-7 text-white"
        >
          <path d="M256.064 0C114.615 0 0 114.615 0 256.064c0 45.195 11.732 89.434 33.924 128.484L0 512l132.011-33.56c37.97 20.806 80.824 31.731 124.053 31.731 141.45 0 256.064-114.615 256.064-256.064S397.514 0 256.064 0zM397.23 397.23c-37.57 37.569-87.538 58.27-140.961 58.27-37.078 0-73.459-9.886-105.197-28.567l-7.559-4.491-78.331 19.919 20.847-76.267-4.928-7.819C57.139 324.176 46.5 290.527 46.5 256.064 46.5 136.15 136.15 46.5 256.064 46.5c59.362 0 115.181 23.121 157.225 65.165s65.165 97.863 65.165 157.225c.001 53.423-20.701 103.391-58.224 140.84z" />
          <path d="M386.257 309.733c-6.377-3.187-37.694-18.624-43.553-20.773-5.858-2.148-10.121-3.187-14.383 3.188s-16.463 20.772-20.164 24.96c-3.701 4.188-7.371 4.785-13.749 1.598-6.377-3.187-26.949-9.938-51.338-31.697-18.986-16.937-31.774-37.855-35.476-44.232-3.701-6.377-.393-9.83 2.794-13.017 2.861-2.861 6.377-7.457 9.563-11.185 3.187-3.728 4.784-6.377 7.172-10.565 2.388-4.188 1.193-7.949-.597-11.136-1.791-3.188-14.383-34.532-19.699-47.356-5.186-12.487-10.464-10.79-14.383-10.99-3.731-.191-8.005-.232-12.279-.232-4.188 0-11.085 1.599-16.93 7.957s-22.184 21.696-22.184 52.92 22.728 61.338 25.94 65.526c3.187 4.188 44.86 68.512 108.741 96.051 15.208 6.567 27.066 10.492 36.31 13.402 15.262 4.847 29.172 4.166 40.168 2.527 12.256-1.84 37.695-15.393 43.004-30.257 5.309-14.864 5.309-27.606 3.724-30.219-1.585-2.613-5.811-4.188-12.188-7.375z" />
        </svg>
        <span>Contactar por WhatsApp</span>
      </motion.a>

      {/* 📍 Información adicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 text-center text-gray-600 text-sm md:text-base"
      >
        <p>📍 También puedes visitarnos o agendar por redes sociales.</p>
        <p className="mt-2">Horario de atención: <strong>09:00 a 18:00 hrs</strong></p>
      </motion.div>
    </section>
  );
}
