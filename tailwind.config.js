module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "dark": "#333333",
        "secondary": "#00afef"
      },
      screens: {
        md: "860px",
        xlg: "1100px",
      },
      keyframes: {
        "slide-down": {
          "0%": {
            opacity: 0,
            "-webkit-transform": "translate(-50%, -100%)",
            transform: "translate(-50%, -100%)",
          },
          "100%": {
            opacity: 1,
            "-webkit-transform": "translate(-50%, 0)",
            transform: "translate(-50%, 0)",
          },
        },
      },
      animation: {
        "slide-down": "slide-down .2s ease-out",
      },


    },
  },
  plugins: [
  ],
}
