import "./globals.css";
import BackgroundParallax from "@/components/BackgroundParallax";

export const metadata = {
  title: "Fernando Olivares - Estética Automotriz",
  description: "Lavado exterior e interior premium para tu vehículo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="text-white overflow-x-hidden relative">
        <BackgroundParallax />
        {children}
      </body>
    </html>
  );
}
