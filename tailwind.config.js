/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#0A0A0C',
          charcoal: '#121214',
          graphite: '#1E1E22',
          white: '#DCC5A0',
          pearl: '#ECE8E1',
          gold: '#C5A880',
          goldDim: '#9E8665',
          orange: '#8C7355',
          amber: '#A68B6D',
          silver: '#B8B0A4',
          muted: '#8E8E93',
          border: '#26262A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        mega: '0.35em',
      },
      transitionTimingFunction: {
        'slow-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
