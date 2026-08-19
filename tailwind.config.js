/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep navy-slate base (not near-black) — signal for "systems / IDE at night"
        base: {
          DEFAULT: "#0A0E1A",
          soft: "#0D1220",
          elevated: "#111827",
          border: "#1E2536",
        },
        paper: {
          DEFAULT: "#F7F8FB",
          soft: "#FFFFFF",
          elevated: "#FFFFFF",
          border: "#E3E7F0",
        },
        ink: {
          DEFAULT: "#E7EAF2",
          dim: "#93A0B8",
          faint: "#5B677E",
        },
        char: {
          DEFAULT: "#101528",
          dim: "#4B5670",
          faint: "#8993A8",
        },
        // Dual accent system: teal (primary / active) + amber (secondary / highlight)
        signal: {
          DEFAULT: "#2DD4BF",
          soft: "#5EEAD4",
          dark: "#0D9488",
          glow: "rgba(45, 212, 191, 0.35)",
        },
        amber: {
          DEFAULT: "#F5A623",
          soft: "#FBC56B",
          dark: "#B9770E",
        },
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(16,21,40,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(16,21,40,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-travel": {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "8%": { opacity: "1" },
          "92%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
