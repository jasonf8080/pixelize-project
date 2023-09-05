/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
    extend: {
        fontFamily: {sans: ['Josefin Sans', 'sans-serif'],},
        colors: {
        "dark-primary-color": "var(--dark-primary-color)",
        "dark-secondary-color": "var(--dark-secondary-color)",
        "main-color": "var(--main-color)",
        "secondary-color": "var(--secondary-color)"
      },
    },
  },
  plugins: [],
}
