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
        amarelo: "#ffe7a3",
        vermelho: "#ffb0a8",
        verde: "#b7f0c8",
        amareloTexto: "#775b09",
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
