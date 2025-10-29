type Props = {
  title: string;
  subtitle?: string;
  color?: string;
  id?: string;
  footer?: React.ReactNode;
};

export default function Section({
  title,
  subtitle,
  color = "white",
  id,
  footer,
}: Props) {
  return (
    <section
      id={id}
      className="landing-section relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden"
      data-header-color={color}
    >
      <div className="z-20 px-6">
        {title && (
          <h2
            className={`text-${color} text-5xl font-semibold mb-2 leading-tight`}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p
            className={`text-${color} text-lg max-w-xl mx-auto leading-relaxed`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {footer && (
        <div className="absolute bottom-24 z-20 flex justify-center w-full">
          {footer}
        </div>
      )}
    </section>
  );
}
