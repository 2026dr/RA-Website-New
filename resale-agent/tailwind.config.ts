import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "860px",
      },
      colors: {
        background: "#FAFAFA",
        white: "#FFFFFF",
        primary: "#4F35EB",
        heading: "#2D354C",
        body: "#6B7280",
        lime: "#E5FF7D",
        surface: "#F3F7FB",
        border: "#E5E7EB",
        trust: "#9CA3AF",
        connector: "#D1D5DB",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        heading: ["var(--font-be-vietnam-pro)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-3px)" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-slow": "float-slow 4s ease-in-out infinite",
        "marquee-left": "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
