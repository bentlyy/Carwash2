import Section from "../Section";

export default function ServiciosVehiculos() {
  return (
    <Section
      id="servicios"
      title="Cuidado para todo tipo de vehículos"
      subtitle="Desde citycars hasta camionetas, cada servicio se adapta al tamaño, acabado y uso de tu vehículo."
      image="/citycar.webp"
      footer={
        <p className="text-sm text-gray-300">
          Citycar | Hatchback | SUV | Camionetas
        </p>
      }
    >
      <ul className="text-gray-300 text-sm space-y-2">
        <li>• Lavado exterior e interior completo</li>
        <li>• Limpieza de tapices, alfombra y techo</li>
        <li>• Secado con microfibra y productos premium</li>
      </ul>
    </Section>
  );
}
