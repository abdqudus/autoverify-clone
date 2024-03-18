/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", " sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "nav-shadow": "0px 4px 3px 0px #b9c1c7",
        "login-shadow": "inset 0px -3px 0px 0px #005B9A",
        "form-shadow": "0px 1px 2px 0px rgba(0,0,0,.3)",
      },
      gridTemplateColumns: { "3/2": "3fr 2fr" },
    },
  },
  plugins: [],
};
