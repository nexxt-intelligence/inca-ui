module.exports = {
  prefix: "inca-ui-",
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        blue: { DEFAULT: "#2D67CB" },
        red: { DEFAULT: "#d24d57" },
        green: { DEFAULT: "#368176" },
      },
      zIndex: {
        100: "100",
      },
      minHeight: {
        48: "12rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
