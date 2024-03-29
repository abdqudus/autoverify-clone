/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", " sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        lgs: "1026px",
        vsm: { max: "290px" },
      },
      boxShadow: {
        "nav-shadow": "0px 4px 3px 0px #b9c1c7",
        "login-shadow": "inset 0px -3px 0px 0px #005B9A",
        "form-shadow": "0px 1px 2px 0px rgba(0,0,0,.3)",
        "card-shadow": "4px 4px 18px 0 rgba(218, 221, 232, 0.8)",
        dashboard: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        graph: "4px 4px 18px 0px #DADDE8D9",
        "product-shadow": "0px 1px 1px rgba(0, 0, 0, 0.05)",
      },

      gridTemplateColumns: {
        "3/2": "3fr 2fr",
        "3/1": "3fr 1fr",
        "home-grid": "244px 1fr",
        resp: "repeat(auto-fit, minmax(155px, 1fr));",
      },
      backgroundImage: {
        "mobile-bg":
          "linear-gradient(180deg, #d7eaf7, rgba(255, 255, 255, 1) 20%);",
        "desktop-bg":
          "linear-gradient(180deg, #d7eaf7, rgba(255, 255, 255, 1) 40%)",
        "dark-bg":
          "linear-gradient(180deg, #e9e9e9, rgba(255, 255, 255, 1) 58%)",
        "light-bg":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.3), transparent)",
      },
    },
  },
  plugins: [],
};
