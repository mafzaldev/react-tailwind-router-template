const { join } = require("path");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", join(__dirname, "./src/**/*.{js,ts,jsx,tsx}")],
  theme: {
    extend: {},
  },
  plugins: [],
};
