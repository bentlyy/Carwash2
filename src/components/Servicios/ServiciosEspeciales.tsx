import Section from "../Section";

export default function ServiciosEspeciales() {
  return (
    <Section
      id="especiales"
      title="Servicios Especiales e Industriales"
      subtitle="Ofrecemos soluciones de detailing para aviación, arquitectura y vehículos de alto rendimiento."
      image="/avion.webp"
      footer={
        <a
          href="#contacto"
          className="border border-white/30 px-8 py-2 rounded-md text-white hover:bg-white hover:text-black transition"
        >
          Solicitar cotización
        </a>
      }
    >
      <ul className="text-gray-300 text-sm space-y-2">
        <li>• Detailing de aviones, helicópteros y autos de performance</li>
        <li>• Pulido arquitectónico en ventanales de hogar y empresa</li>
        <li>• Grabado y borrado de patente profesional</li>
      </ul>
    </Section>
  );
}
