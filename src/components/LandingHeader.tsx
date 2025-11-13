"use client";

import { useEffect, useState } from "react";

interface LandingHeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function LandingHeader({ onScrollToSection }: LandingHeaderProps) {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: "home", label: "Inicio" },
    { id: "vehiculos", label: "Vehículos" },
    { id: "servicios", label: "Servicios" },
    { id: "cursos", label: "Cursos" },
    { id: "contacto", label: "Contacto" },
  ];

  // 🔹 Detectar scroll para activar blur dinámico
  useEffect(() => {
    const container = document.querySelector("main");
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Detectar la sección activa
  useEffect(() => {
    const container = document.querySelector("main");
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop + window.innerHeight / 3;

      let currentSection = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActive(currentSection);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sectionId: string) => {
    setActive(sectionId);
    onScrollToSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-center items-center
        transition-all duration-500 backdrop-blur-md
        ${isScrolled ? "bg-[#0b3d91]/70 shadow-lg" : "bg-transparent"}
        border-b border-white/10`}
    >
      <nav
        className="flex flex-wrap justify-center items-center gap-[3vw]
          py-5 px-8 uppercase tracking-[0.2em] select-none"
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => handleClick(s.id)}
            className={`
              relative px-4 py-2 text-[1.1rem] md:text-[1.4rem]
              font-semibold transition-all duration-300
              ${
                active === s.id
                  ? "text-[#06f4ff]"
                  : "text-white/80 hover:text-[#40a9ff]"
              }
            `}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              outline: "none",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {s.label}

            {/* ✨ Línea animada debajo */}
            <span
              className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] 
                bg-gradient-to-r from-[#06f4ff] to-[#40a9ff]
                rounded-full transition-all duration-500 ease-out
                ${active === s.id ? "w-3/4 opacity-100" : "w-0 opacity-0"}
              `}
            ></span>

            {/* 💧 Brillo de fondo animado */}
            {active === s.id && (
              <span
                className="absolute inset-0 bg-gradient-to-r from-[#00b4d8]/10 to-[#06f4ff]/5
                blur-xl rounded-full animate-pulse"
              />
            )}
          </button>
        ))}
      </nav>
    </header>
  );
}
