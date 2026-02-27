/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#d9e2f3',
          200: '#b3c5e7',
          300: '#8da8db',
          400: '#678bcf',
          500: '#416ec3',
          600: '#2d5199',
          700: '#1e3a6e',
          800: '#142952',
          900: '#0b1a38',
          950: '#060e1f',
        },
        coral: {
          50: '#fff5f2',
          100: '#ffe8e0',
          200: '#ffd0c1',
          300: '#ffb098',
          400: '#ff8c6b',
          500: '#ff6b3d',
          600: '#e8501f',
          700: '#c13d14',
          800: '#9a3211',
          900: '#7d2c12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
