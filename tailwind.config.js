/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // blue
        dark: '#111827',
        light: '#f9fafb',
      }
    },
  },
  plugins: [],
}
