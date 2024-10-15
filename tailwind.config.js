/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#FAFAFA'
        },
        black: {
          DEFAULT: '#09090B'
        },
        primary: {
          DEFAULT: '#F26922'
        },
        secondary: {
          DEFAULT: '#E4E4E7'
        },
        body: {
          DEFAULT: '#71717A'
        },
      },
      fontFamily: {
        onest: ['"Onest", sans-serif'],
      },
    },
  },
  plugins: [],
}