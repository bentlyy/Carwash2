"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundParallax() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 80]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.03]);

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen -z-50 overflow-hidden"
      style={{ y, scale }}
    >
      {/* Imagen siempre visible detrás */}
      <img
        src="/auto.jpg"
        alt="Fondo Carwash"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none brightness-100"
        style={{
          zIndex: -1,
          backgroundColor: "black", // fallback
        }}
      />

      {/* Oscurecido sutil para contraste */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 100%)",
          zIndex: 0,
        }}
      />
    </motion.div>
  );
}
