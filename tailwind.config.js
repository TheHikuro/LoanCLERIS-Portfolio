/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'light': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px',
        'dark': 'rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
        'light-md': 'rgba(136, 165, 191, 0.48) 0px 30px 90px'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")], // daisy ui require("daisyui")
}