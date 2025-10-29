"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function HeroSection() {
  return (
    <Section
      id="home"
      color="white"
      title="Fernando Olivares"
      subtitle="Estética Automotriz Profesional"
      footer={
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="mt-8 inline-block bg-white text-black px-10 py-3 font-medium rounded-md hover:bg-gray-200 transition-all duration-300"
          >
            Agenda tu servicio
          </a>
        </motion.div>
      }
    />
  );
}
