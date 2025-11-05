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

  // 🔹 Detectar scroll
  useEffect(() => {
    const container = document.querySelector("main");
    if (!container) return;

    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 60);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Detectar la sección activa (SIMPLIFICADO)
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector("main");
      if (!container) return;

      const scrollPosition = container.scrollTop + 100; // Offset para header

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActive(section.id);
          }
        }
      });
    };

    const container = document.querySelector("main");
    if (!container) return;

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
        backdrop-blur-md transition-all duration-500 
        ${isScrolled ? "bg-white/80 shadow-md" : "bg-white/50"}
        min-h-[80px] md:min-h-[90px]`}
    >
      <nav
        className="flex flex-wrap justify-center items-center gap-[2vw]
          text-lg font-medium uppercase tracking-wide select-none // Agrandado de 0.95rem a 1.1rem
          py-4 md:py-5 px-6 border-b border-white/50"
      >
        {sections.map((s) => (
          <button
  key={s.id}
  onClick={() => handleClick(s.id)}
  className={`relative px-4 py-3 transition-all duration-300 no-underline
    text-2xl font-medium uppercase tracking-wide
    ${
      active === s.id
        ? "text-[#D9C87C] after:w-full after:opacity-100"
        : "text-[#3C4031] hover:text-[#C7B56D] after:w-0 after:opacity-0"
    }
    after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
    after:bottom-[-10px] after:h-[2px] after:bg-[#B67C3D]
    after:transition-all after:duration-500
    hover:transform-none hover:shadow-none
  `}
  style={{
    background: "none",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    WebkitTapHighlightColor: "transparent",
    // QUITAR fontSize de aquí
  }}
>
  {s.label}
</button>
        ))}
      </nav>
    </header>
  );
}