import Section from "../Section";

export default function CursoDetailing() {
  return (
    <Section
      id="cursos"
      title="Curso de Detailing Automotriz Profesional"
      subtitle="Aprende a transformar vehículos y genera ingresos con tu pasión. Capacítate con técnicas, productos y herramientas de nivel profesional."
      image="/curso.webp"
      footer={
        <a
          href="#contacto"
          className="bg-green-500 text-white px-10 py-3 rounded-md font-medium hover:bg-green-600 transition-all"
        >
          Solicitar temario
        </a>
      }
    >
      <ul className="text-gray-300 text-sm space-y-2">
        <li>• Fundamentos del detailing y tipos de lavado</li>
        <li>• Uso de herramientas, productos y protección cerámica</li>
        <li>• Técnicas de corrección y sellado</li>
        <li>• Estrategias de marketing y fidelización de clientes</li>
      </ul>
    </Section>
  );
}
