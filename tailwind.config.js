/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // مهم جداً لتفعيل الوضع الداكن عن طريق class
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
