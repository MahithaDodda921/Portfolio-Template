/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'deep-purple': {
            50: '#f3e5f5',
            100: '#e1bee7',
            200: '#ce93d8',
            300: '#ba68c8',
            400: '#ab47bc',
            500: '#9c27b0',
            600: '#8e24aa',
            700: '#7b1fa2',
            800: '#6a1b9a',
            900: '#4a148c',
          },
          'dark-blue': {
            900: '#1A237E',
          }
        },
        animation: {
          'spin-slow': 'spin 3s linear infinite',
          'blink': 'blink 1s infinite',
          'scroll': 'scroll 1.5s infinite'
        },
        keyframes: {
          'blink': {
            '0%, 100%': { opacity: '0' },
            '50%': { opacity: '1' }
          },
          'scroll': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(10px)' }
          }
        }
      },
    },
    plugins: [],
  }