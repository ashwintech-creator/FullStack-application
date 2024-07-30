/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to all your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Add the aspect-ratio plugin
    require('@tailwindcss/forms'), // Add the forms plugin
  ],
}
