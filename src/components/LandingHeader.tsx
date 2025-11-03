"use client";

import { useEffect, useState } from "react";

export default function LandingHeader() {
  const [active, setActive] = useState("home");

  const sections = [
    { id: "home", label: "Inicio" },
    { id: "servicios", label: "Vehículos" },
    { id: "generales", label: "Servicios" },
    { id: "tratamientos", label: "Tratamientos" },
    { id: "especiales", label: "Especiales" },
    { id: "domicilio", label: "Domicilio" },
    { id: "cursos", label: "Cursos" },
    { id: "contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 
        flex justify-center items-center 
        py-8 md:py-10 mt-2 
        backdrop-blur-md bg-white/60 shadow-md
        border-b border-transparent
      "
      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      <nav className="flex flex-wrap justify-center items-center gap-[2vw] text-[0.95rem] font-medium uppercase tracking-wide select-none">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`relative px-2 py-2 transition-all duration-300 no-underline
              ${
                active === s.id
                  ? "text-[#D9C87C] after:w-full after:opacity-100"
                  : "text-[#3C4031] hover:text-[#C7B56D] after:w-0 after:opacity-0"
              }
              after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
              after:bottom-[-7px] after:h-[2px] after:bg-[#B67C3D]
              after:transition-all after:duration-500
            `}
            style={{
              textDecoration: "none",
              outline: "none",
              WebkitTapHighlightColor: "transparent",
            }}
            onMouseDown={(e) => e.preventDefault()}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
