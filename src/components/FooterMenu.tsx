"use client";

export default function FooterMenu() {
  return (
    <footer
      className="
        fixed bottom-0 left-0 w-full z-40
        bg-black/30 backdrop-blur-md
        border-t border-white/10
        flex justify-center items-center
        py-3 px-6
      "
    >
      <nav className="flex flex-wrap justify-center items-center gap-4 text-[0.8rem] md:text-sm text-gray-300 font-medium tracking-wide">
        <a
          href="#home"
          className="hover:text-[#B67C3D] transition-colors duration-300"
        >
          © 2025 Fernando Olivares
        </a>
        <span className="hidden md:inline text-gray-500">|</span>
        <a
          href="#servicios"
          className="hover:text-[#B67C3D] transition-colors duration-300"
        >
          Servicios
        </a>
        <span className="hidden md:inline text-gray-500">|</span>
        <a
          href="#contacto"
          className="hover:text-[#B67C3D] transition-colors duration-300"
        >
          Contacto
        </a>
        <span className="hidden md:inline text-gray-500">|</span>
        <a
          href="https://goo.gl/maps/Qn2vczqWZcQ1u6mD9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#B67C3D] transition-colors duration-300"
        >
          Ubicación
        </a>
      </nav>
    </footer>
  );
}
