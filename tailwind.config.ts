import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Space Mono", "monospace"],
      },
      colors: {
        "ops-bg": "#050510",
        "ops-card": "#0f1923",
        "ops-border": "#1a2d40",
        "ops-green": "#00ff9d",
        "ops-blue": "#00c8ff",
        "ops-orange": "#ff6b35",
        "ops-purple": "#a855f7",
        "ops-text": "#c9d8e8",
        "ops-muted": "#4a6580",
        "ops-grid": "#0d2035",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
