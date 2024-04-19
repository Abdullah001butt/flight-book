/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0041",
        secondary: "#E7E8ED",
        three: "#B7BBBD"
      }
    },
  },
  plugins: [],
}

