/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        mono: 'Roboto Mono, monospace',
      },
      colors: {
        white: {
          100: 'var(--white)',
        },
        gray: {
          100: 'var(--gray-100)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
        green: {
          300: 'var(--green-300)',
          500: 'var(--green-500)',
          700: 'var(--green-700)',
        },
        red: {
          500: 'var(--red-500)',
          700: 'var(--red-700)',
        },
        yellow: {
          500: 'var(--yellow-500)',
        },
      },
      boxShadow: {
        default: '0 0 0 2px var(--green-500)',
      },
    },
  },
  plugins: [],
}
