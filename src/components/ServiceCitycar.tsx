import Section from "./Section";

export default function ServiceCitycar() {
  return (
    <Section
      id="citycar"
      title="Citycar"
      subtitle="Lavado exterior e interior"
      color="white"
      footer={
        <div className="gap-x-6 flex mx-auto">
          <a
            href="#contact"
            className="border-[3px] border-white bg-white/5 text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors"
          >
            Precio $20.000
          </a>
        </div>
      }
    />
  );
}
