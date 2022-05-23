module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class' or false
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      altpurple: "#440055",
    }),
    textColor: (font) => ({
      ...font("colors"),
    }),
    borderColor: (border) => ({
      ...border("colors"),
    }),
    maxWidth: {
      500: "500px",
      80: "80px",
    },
    minWidth: {
      500: "500px",
      80: "80px",
    },
    extend: {
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  corePlugins: {
    maxHeight: true,
  },
  variants: {
    extend: {
      backgroundColor: ["even", "odd"],
      backgroundOpacity: ["even", "odd"],
      borderColor: ["hover", "focus", "active"],
    },
  },
};
