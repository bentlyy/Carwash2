export default function FooterMenu() {
  return (
    <footer className="py-3 px-10 flex justify-center items-center absolute bottom-0 w-full z-40 text-gray-400 text-xs font-medium bg-black/40 backdrop-blur-md">
      <nav>
        <ul className="flex gap-4">
          <li><a href="#">© 2025 Fernando Olivares</a></li>
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Ubicación</a></li>
        </ul>
      </nav>
    </footer>
  );
}
