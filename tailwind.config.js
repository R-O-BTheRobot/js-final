/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
  variants: {
    extend: {
      display: ['dark']
    }
  }
}


