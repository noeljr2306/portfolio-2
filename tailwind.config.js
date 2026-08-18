/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      aeonik: ["General Sans", "Poppins", "sans-serif"],
      sora: ["Sora", "Poppins", "sans-serif"],
    },
    transitionTimingFunction: {
      smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
  },
},
  plugins: [],
};
