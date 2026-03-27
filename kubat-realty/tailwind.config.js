/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1E3A5F",
        gold: "#CBA135",
        lightbg: "#F8FAFC",
      }
    },
  },
  plugins: [],
};
