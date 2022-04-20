module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
    },
    extend: {
      colors: {
        apexRed: "rgb(217, 41, 43)",
        apexRedDark: "rgb(197, 21, 23)",
      },
    },
  },
  plugins: [],
}