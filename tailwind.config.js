/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./page2.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./styles.css",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Center the container by default
        padding: "2rem", // Add default padding
      },
    },
  plugins: [],
}
