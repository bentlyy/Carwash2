import "./globals.css";

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
      <body className="text-gray-900 bg- overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
