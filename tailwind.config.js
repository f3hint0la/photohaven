/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "1/2": "50%",
        full: "100%",
      },
      widths: {
        76: "18.75rem",
      },
    },
  },
  plugins: [],
};
