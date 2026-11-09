/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00d4ff',
        'brand-purple': '#a855f7',
        'brand-amber': '#f59e0b',
        'brand-emerald': '#10b981',
        'void-black': '#0a0a0a',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
