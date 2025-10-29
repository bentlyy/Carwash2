"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LandingHeader() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const sections = ["home", "citycar", "hatchback", "suv", "xxl", "contact"];

  // Detectar la sección activa con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-center px-10 py-4 
                 backdrop-blur-md bg-black/40 border-b border-white/10"
    >
      <nav className="flex items-center gap-10 text-sm font-medium tracking-wide uppercase">
        {/* Logo al inicio */}
        <a href="#home" className="mr-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={140}
            height={40}
            className="cursor-pointer"
          />
        </a>

        {/* Enlaces centrados */}
        {sections.slice(1).map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`relative px-2 py-1 transition-all duration-300 ${
              activeSection === id
                ? "text-white after:w-full"
                : "text-gray-300 hover:text-white after:w-0"
            } after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-current after:transition-all after:duration-500`}
          >
            {id === "xxl"
              ? "XXL / Camionetas"
              : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}
