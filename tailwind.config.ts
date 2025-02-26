import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        amarelo: "#F7D060",
        vermelho: "#FF6D60",
        verde: "#98D8AA",
        amareloTexto: "#745807",
        vermelhoTexto: "#6b0e05",
        verdeTexto: "#0b6025",
        azulTexto: "#375081",
        azulClaroTexto: "#6b7280"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
