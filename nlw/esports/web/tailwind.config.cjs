/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        galaxy: "url('/Fundo.png')",
        'nlw-gradient': 'linear-gradient(69.86deg, #9572FC 23.08%, #43E7AD 52.94%, #E1D55D 82.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
    },
  },
  plugins: [],
}
