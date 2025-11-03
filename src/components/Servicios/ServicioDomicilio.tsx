import Section from "../Section";

export default function ServicioDomicilio() {
  return (
    <Section
      id="domicilio"
      title="Servicio a Domicilio"
      subtitle="Llevamos el detailing profesional hasta tu hogar, oficina o concesionario. Equipados para ofrecer resultados de alto nivel sin que tengas que moverte."
      image="/domicilio.webp"
      footer={
        <a
          href="#contacto"
          className="bg-white text-black px-10 py-3 rounded-md font-medium hover:bg-gray-200 transition-all"
        >
          Solicitar visita
        </a>
      }
    >
      <ul className="text-gray-300 text-sm space-y-2">
        <li>• Limpieza integral interior y exterior</li>
        <li>• Preparación para venta o entrega en concesionarios</li>
        <li>• Lavado sin agua y productos biodegradables</li>
        <li>• Ideal para flotas empresariales o clientes particulares</li>
      </ul>
    </Section>
  );
}
