/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        gray100: "#F8F8F8",
        gray200: "#0000000F",
        gray300: "#E4E4E4",
        gray400: "#E9E9E9",
        gray500: "#00000029",
        gray600: "#79828B",
        gray700: "#42505C",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
