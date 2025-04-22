/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'text-muted': 'var(--text-muted)',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      height: {
        '100': '25rem',
        '120': '30rem',
      },
      zIndex: {
        '-10': '-10',
        '-1': '-1',
        '1': '1',
      },
      boxShadow: {
        'app': '40px 40px 100px 0px rgba(24, 48, 63, 0.5)',
        'feature': '0px 10px 30px rgba(0, 0, 0, 0.1)',
        'video': '0px 10px 100px 0px rgba(0, 0, 0, 0.24)',
      },
      borderRadius: {
        'app': '40px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
  safelist: [
    'mix-blend-multiply',
    'mix-blend-screen',
    'mix-blend-overlay',
  ],
} 