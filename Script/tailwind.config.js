/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust based on your project structure
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
 daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};