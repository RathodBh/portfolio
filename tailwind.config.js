/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "hover:bg-blue-600",
    "hover:bg-red-600",
    "hover:bg-black",
  ]
};
