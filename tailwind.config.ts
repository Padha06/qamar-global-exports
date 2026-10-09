import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: {
          50: "#eef1f5",
          100: "#d6dde6",
          200: "#adc0d3",
          300: "#7b93ad",
          400: "#4f6d8c",
          500: "#2f5273",
          600: "#1d3e5f",
          700: "#16324e",
          800: "#0B1D3A",
          900: "#10243A",
          950: "#0A1826",
        },
        line: "#DDE3E8",
        ink: "#10243A",
        muted: "#667382",
        paper: "#F7F8F6",
        gunmetal: {
          50: "#f4f6f9",
          100: "#e6eaf0",
          200: "#c9d1dc",
          300: "#a2afbf",
          400: "#74839a",
          500: "#546479",
          600: "#405063",
          700: "#2f3d4d",
          800: "#1d2733",
          900: "#121a23",
        },
        orange: {
          50: "#fef3ec",
          100: "#fde2d0",
          200: "#fac0a1",
          300: "#f79d6e",
          400: "#F58549",
          500: "#F26A21",
          600: "#DB5A16",
          700: "#B8480F",
          800: "#8F380C",
          900: "#6E2C0B",
        },
      },
      fontFamily: {
        display: ['"Sora Variable"', "Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Inter Variable"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      letterSpacing: {
        tightest: "-0.045em",
        label: "0.22em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,107,0,0.35), 0 18px 50px -12px rgba(255,107,0,0.45)",
        "glow-sm": "0 0 0 1px rgba(255,107,0,0.4), 0 10px 30px -10px rgba(255,107,0,0.5)",
        card: "0 40px 80px -40px rgba(2,6,14,0.9)",
        panel: "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "grid-line":
          "linear-gradient(to right, rgba(148,163,184,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.09) 1px, transparent 1px)",
        "orange-sheen":
          "linear-gradient(135deg, #FF8533 0%, #FF6B00 45%, #c24800 100%)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(255,107,0,0.18) 0%, transparent 60%)",
      },
      keyframes: {
        aurora: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.55" },
          "50%": { transform: "translate3d(4%, -4%, 0) scale(1.15)", opacity: "0.85" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%,100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        aurora: "aurora 14s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        shimmer: "shimmer 2.2s infinite",
        scan: "scan 6s linear infinite",
        "spin-slow": "spin-slow 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
