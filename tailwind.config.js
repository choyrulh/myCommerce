/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "1.5/12": "12.5%", // Sesuaikan dengan kebutuhan desain Anda
      },
    },
  },
  plugins: [],
};
