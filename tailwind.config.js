/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '2xl': '1400px', // breakpoint جدید
      },
    },
  },
  plugins: [],
}
