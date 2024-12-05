/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        italic: ['Merriweather', 'serif']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none', // add required value here
          }
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
