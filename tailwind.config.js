/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.25)',
        'dark-rgba': 'rgba(0, 0, 0, 0)',
        'very-dark-rgba': 'rgba(0, 0, 0, 0.6)',
        "sky-rgba": "rgba(28, 190, 236, 0.4)",
        active: '#1CBEEC',
        primary: '#032151',
        'active-bg': '#6B79F3',
        textColor: "#ccc"
      },
    },
    display: ["group-hover"],
    fontFamily: {
      sans: ['Nunito Sans','Poppins', 'sans-serif'],
      brand: ['Beau Rivage', 'Poppins', 'cursive']
    }
  },
  plugins: [],
}