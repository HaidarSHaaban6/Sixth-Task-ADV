/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "1215px",
      },
      colors: {
        "dark-mode-color": "#090D1F",
        "eerie-black-color": "#1A1A1A",
        "purple-color": "#6941C6",
        "categories-background-color": "#F9F5FF",
        "royal-blue-color": "#3538CD",
        "crimson-color": "#C11574",
        "slate-gray-color": "#C0C5D0",
        "gray-color": "#667085",
      },
      content: {
        empty: '""',
      },
    },
  },
  plugins: [],
};
