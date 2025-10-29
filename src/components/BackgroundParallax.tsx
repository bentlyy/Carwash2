"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundParallax() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 100]);

  // 🔧 Aseguramos que html/body no generen barras de desplazamiento horizontales
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.style.margin = "0";
    html.style.padding = "0";
    html.style.overflowX = "hidden"; // permite scroll vertical, bloquea horizontal
    html.style.overflowY = "auto";

    body.style.margin = "0";
    body.style.padding = "0";
    body.style.overflowX = "hidden";
    body.style.overflowY = "auto";
  }, []);

  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        y,
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src="/auto.jpg"
        alt="Fondo Carwash"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
      />
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
    </motion.div>
  );
}
