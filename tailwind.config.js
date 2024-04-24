/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-custom": "#192A68",
        "light-blue-custom": "#217BF4",
        "orange-custom": "#F46D21",
        "gray-custom": "#656464",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        mini: "100px",
        small: "250px",
        medium: "350px",
        standard: "400px",
        break: "700px",
        break2: "635px",
        custom: "860px",
      },
    },
  },
  plugins: [],
};
