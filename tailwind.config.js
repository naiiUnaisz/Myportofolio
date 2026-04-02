/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#0D001A',
          800: '#1A0033',
        },
        neon: {
          purple: '#b026ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to bottom, #1A0033 0%, #0D001A 100%)',
      }
    },
  },
  plugins: [],
}
