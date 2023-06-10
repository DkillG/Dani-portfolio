/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#EE466F',
        'transparency-black': 'rgba(0, 0, 0, 0.2)',
        'secondary-color': 'rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: [],
}