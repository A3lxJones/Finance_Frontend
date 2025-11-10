/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#3B82F6",
          "secondary": "#4B5563",
          "accent": "#60A5FA",
          "neutral": "#374151",
          "base-100": "#FFFFFF",
          "info": "#93C5FD",
          "success": "#34D399",
          "warning": "#FBBF24",
          "error": "#EF4444",
        },
      },
    ],
  },
}