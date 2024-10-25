/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#E7FE29",
        "secondary": "#C9DD22",
        "deep-black": "#131313",
        "dark-gray": "#5A5A5A",
      },
    },
  },
  plugins: [],
}