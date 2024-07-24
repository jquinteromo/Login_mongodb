/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/imgs_background/captura.png')", // Define una imagen de fondo personalizada
      }
    },
  },
  plugins: [],
}

