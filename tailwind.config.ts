import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed-variant": "#0c522d",
        "secondary-container": "#fdb19d",
        "primary-fixed": "#b8eaff",
        "on-tertiary-container": "#004523",
        tertiary: "#2b6a43",
        "outline-variant": "#bfc8cd",
        "surface-container-highest": "#c9e7f7",
        "primary-container": "#66afca",
        "surface-tint": "#07677f",
        "on-secondary-fixed-variant": "#6d3829",
        "inverse-on-surface": "#e0f4ff",
        "surface-dim": "#c0dfee",
        outline: "#6f787d",
        "on-surface": "#001f2a",
        "on-error": "#ffffff",
        "on-background": "#001f2a",
        "tertiary-container": "#73b385",
        "secondary-fixed-dim": "#ffb5a0",
        "tertiary-fixed": "#aff2c0",
        "on-secondary-container": "#794232",
        "surface-container-lowest": "#ffffff",
        background: "#f4faff",
        "surface-container": "#d9f2ff",
        secondary: "#894f3e",
        "on-tertiary-fixed": "#00210e",
        "on-surface-variant": "#3f484c",
        "tertiary-fixed-dim": "#93d5a5",
        "on-secondary": "#ffffff",
        "surface-container-high": "#ceedfd",
        "inverse-surface": "#163440",
        surface: "#f4faff",
        "surface-bright": "#f4faff",
        "inverse-primary": "#88d1ec",
        "error-container": "#ffdad6",
        "on-primary-container": "#004152",
        "surface-variant": "#c9e7f7",
        error: "#ba1a1a",
        "secondary-fixed": "#ffdbd1",
        "surface-container-low": "#e6f6ff",
        "on-tertiary": "#ffffff",
        "on-error-container": "#93000a",
        "on-secondary-fixed": "#370e04",
        primary: "#07677f",
        "primary-fixed-dim": "#88d1ec",
        "on-primary-fixed-variant": "#004d61",
        "on-primary": "#ffffff",
        "on-primary-fixed": "#001f28",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        ambient:
          "0 8px 32px 0 rgba(0,31,42,0.06)",
        "ambient-lg":
          "0 20px 60px 0 rgba(0,31,42,0.06)",
        "primary-glow":
          "0 8px 20px rgba(7,103,127,0.25)",
        "primary-glow-lg":
          "0 16px 40px rgba(7,103,127,0.3)",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #07677f 0%, #66afca 100%)",
      },
      animation: {
        float: "float 20s ease-in-out infinite",
        "float-delay": "float 20s ease-in-out -5s infinite",
        "float-delay2": "float 20s ease-in-out -10s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(15px, -20px) rotate(5deg)" },
          "66%": { transform: "translate(-10px, 15px) rotate(-3deg)" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
