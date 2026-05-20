/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          black:   '#F5ECD7',   // Royal ivory — base canvas
          dark:    '#E8D9B8',   // Antique linen — elevated panels
          charcoal:'#2C1F0E',   // Deep espresso — primary text
          gold: {
            light:   '#DFC98A',
            DEFAULT: '#C9A84C', // Burnished antique gold
            dark:    '#9A7A2E',
            glow:    'rgba(201,168,76,0.15)',
          },
          purple: {
            light:   '#C4B08A',
            DEFAULT: '#8B7355', // Warm camel
            dark:    '#5C4A2A',
            deep:    '#F5ECD7',
          }
        }
      },
      fontFamily: {
        sans:   ['Jost', 'sans-serif'],
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        accent: ['Cinzel', 'serif'],
      },
      letterSpacing: {
        royal: '0.18em',
      },
      boxShadow: {
        'glass-gold':  '0 8px 32px 0 rgba(201,168,76,0.10)',
        'glass-panel': '0 8px 32px 0 rgba(44,31,14,0.06)',
        'glow-gold':   '0 4px 20px rgba(201,168,76,0.18)',
        'royal':       '0 20px 60px -10px rgba(44,31,14,0.15)',
      },
    },
  },
  plugins: [],
}
