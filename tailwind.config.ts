import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Escanea todos tus componentes y páginas
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#ffffff",
          dark: "#0d0d0d",
          accent: "#00bcd4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
