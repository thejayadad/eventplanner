import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6b7280", // Grey
        secondary: "#e1ad01", // Mustard
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6b7280", // Grey
          secondary: "#e1ad01", // Mustard
          accent: "#37cdbe", // Optional accent color
          neutral: "#3d4451",
          "base-100": "#ffffff", // Default background
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
} satisfies Config;
