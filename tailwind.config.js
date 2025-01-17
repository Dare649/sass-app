/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '280px',
      'md': '325px',
      'lg': '1080px',
    },
    extend: {
      colors: {
        "primary-100": "#28A9F9",
        "neutral-1": "#C3C5C6",
        "primary-50": "#F1F6FE",
        "primary-200": "#0065FF",
      },
      backgroundColor: {
        "primary-100": "#28A9F9",
        "neutral-1": "#C3C5C6",
        "primary-50": "#F1F6FE",
        "primary-200": "#0065FF",
      },
    },
  },
  plugins: [],
}

