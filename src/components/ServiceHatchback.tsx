import Section from "./Section";

export default function ServiceHatchback() {
  return (
    <Section
      id="hatchback"
      title="Hatchback / Sedán"
      subtitle="Detalle interior + Encerado premium"
      color="white"
      footer={
        <div className="gap-x-6 flex mx-auto">
          <a
            href="#contact"
            className="border-[3px] border-white bg-white/5 text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors"
          >
            Precio $25.000
          </a>
        </div>
      }
    />
  );
}
