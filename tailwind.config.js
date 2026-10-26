/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f2f5f9',
          100: '#e3eaf2',
          200: '#c5d2e2',
          300: '#93a8c6',
          400: '#5d779e',
          500: '#3c577d',
          600: '#2e4666',
          700: '#273b56',
          800: '#1A2B3C',
          900: '#152434',
          950: '#0d1825',
        },
        action: {
          50: '#eff7ff',
          100: '#daeaff',
          200: '#bddaff',
          300: '#8ec3ff',
          400: '#59a2ff',
          500: '#3185ff',
          600: '#007BFF',
          700: '#0066d9',
          800: '#0054b0',
          900: '#00488f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
