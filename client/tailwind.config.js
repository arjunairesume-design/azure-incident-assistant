/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azure: {
          50: '#f0f6ff',
          100: '#e1edff',
          200: '#b3d4ff',
          300: '#6eb3ff',
          400: '#3a96f7',
          500: '#0078d4',
          600: '#005a9e',
          700: '#004578',
          800: '#003052',
          900: '#001c30',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        azure: '0 4px 24px rgba(0, 120, 212, 0.12)',
      },
    },
  },
  plugins: [],
};
