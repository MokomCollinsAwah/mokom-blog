/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      font1: ["Lora", "serif"],
      font3: ["Varela Round", "sans-serif"],
      font2: ["Josefin Sans", "sans-serif"],
    },
    colors: {
      "gray-light": "#666",
      custom1: "#a7a4a4",
      "sidebar-title": "#222",
      "sidebar-colour": "#fdfbfb",
      "post-colour": "#be96be",
      gray2: "#999",
      gray3: "#444",
      red: "red",
      white: "white",
      teal: "teal",
      tomato: "tomato",
      color1: "#b39656",
      lightcoral: "lightcoral",
      gradientcolor: "rgba(255,255,255,0.5)",
    },
  },

  plugins: [],
};
