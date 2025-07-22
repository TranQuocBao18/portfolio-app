/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00C896', // Bright Green
        'secondary': '#1E293B', // Dark Blue-Gray
        'background': '#0F172A', // Very Dark Blue
        'text-primary': '#E2E8F0', // Light Gray
        'text-secondary': '#94A3B8', // Medium Gray
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}