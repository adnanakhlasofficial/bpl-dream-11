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
        "light-gray": "#B8B8B8",
        "normal-gray": "#717171",
        "navy-blue": "#06091A"
      },
      backgroundImage:{
        "banner": "url('/images/bg-shadow.webp'), linear-gradient(0deg, rgba(19,19,19,1) 0%, rgba(19,19,19,1) 100%)",
        "newsletter": "url('/images/bg-shadow.webp')",
      }
    },
  },
  plugins: [],
}