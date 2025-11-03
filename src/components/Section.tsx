"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  color?: string;
  image?: string;
  footer?: ReactNode;
  children?: ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  color = "white",
  image,
  footer,
  children,
}: Props) {
  return (
    <section
      id={id}
      data-header-color={color}
      className="landing-section relative min-h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden px-6 md:px-12 py-24 md:py-32"
    >
      <div className="z-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagen con fade/slide y hover suave */}
        {image && (
          <motion.img
            src={image}
            alt={title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full md:w-1/2 max-h-[500px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:brightness-110"
          />
        )}

        {/* Texto con fade/slide opuesto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className={`text-${color} text-4xl md:text-5xl font-semibold mb-4`}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
          {footer && <div className="mt-6">{footer}</div>}
        </motion.div>
      </div>
    </section>
  );
}
