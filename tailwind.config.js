/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'purp':
        'linear-gradient(to left, rgb(255, 255, 255), rgb(167, 139, 250), rgb(255, 255, 255))',
      }),
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '768px'
      }
    },
  },
  plugins: [],
}