"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function ContactSection() {
  return (
    <Section
      id="contact"
      title="Agenda tu Servicio"
      subtitle="Atención personalizada en Chillán"
      color="white"
      footer={
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center gap-6 mt-8"
        >
          <a
            href="https://wa.me/56974970075"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-10 py-3 rounded-md text-lg font-medium hover:bg-green-600 transition-colors"
          >
            WhatsApp +56 9 749 700 75
          </a>
          <p className="text-sm text-gray-300 text-center max-w-sm">
            También puedes visitarnos o agendar por redes sociales.
          </p>
        </motion.div>
      }
    />
  );
}
