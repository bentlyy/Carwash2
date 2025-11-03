import Section from "../Section";

export default function TratamientosPremium() {
  return (
    <Section
      id="tratamientos"
      title="Tratamientos de Protección Premium"
      subtitle="Sellados cerámicos, protección de llantas y carrocerías con tecnología de grafeno y NAIOL ZR53."
      image="/premium.webp"
      footer={
        <a
          href="#contacto"
          className="bg-white text-black px-8 py-2 rounded-md font-medium hover:bg-gray-200 transition"
        >
          Consultar tratamiento
        </a>
      }
    >
      <ul className="text-gray-300 text-sm space-y-2">
        <li>• Sellado cerámico NAIOL ZR53</li>
        <li>• Sellado de vidrios (2 años de protección)</li>
        <li>• Sellado de carrocería y llantas</li>
      </ul>
    </Section>
  );
}
