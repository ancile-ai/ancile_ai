/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'burnt-orange': {
          50: '#fef3ed',
          100: '#fde1c8',
          200: '#facba2',
          300: '#f5ae77',
          400: '#ef8d4b',
          500: '#e86c25',
          600: '#d75519',
          700: '#b23e12',
          800: '#913310',
          900: '#792b11',
          950: '#421309',
        },
      },
    },
  },
  important: true,
  plugins: [],
};
