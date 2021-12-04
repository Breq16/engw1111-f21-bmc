module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Nunito", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        mono: ["Ubuntu Mono", "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
