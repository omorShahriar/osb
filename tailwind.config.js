module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Open Sans",
      slab: "'Alfa Slab One', cursive",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      colors: {
        "osb-green": "#00945f",
        "osb-blue": "#0056b8",
        "osb-lightBlue": "#2563eb",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
