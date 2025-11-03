import Section from "../Section";

export default function ServiciosGenerales() {
  return (
    <Section
      id="generales"
      title="Servicios Generales de Detailing"
      subtitle="Tu vehículo vuelve a brillar con un mantenimiento completo. Tratamos cada superficie con precisión y cuidado profesional."
      image="/detailing.webp"
      footer={
        <a
          href="#contacto"
          className="border border-white/40 px-10 py-3 rounded-md font-medium text-white hover:bg-white hover:text-black transition-all"
        >
          Agenda un servicio
        </a>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 text-sm">
        <div>
          <p className="font-semibold text-white mb-1">Limpiezas:</p>
          <ul className="space-y-1">
            <li>• Tapices, asientos y alfombras</li>
            <li>• Techo y paneles</li>
            <li>• Motor y compartimiento</li>
            <li>• Descontaminación de cristales</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-1">Pulidos y Correcciones:</p>
          <ul className="space-y-1">
            <li>• Pulido abrillantado</li>
            <li>• Pulido y sellado de ópticos</li>
            <li>• Corrección de pintura</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
