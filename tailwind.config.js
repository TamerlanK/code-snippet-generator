/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "300%": "300%",
      },
      transitionProperty: {
        "background-position": "background-position",
      },
      colors: {
        primary: "#2a2139",
        secondary: "#34294f",
        highlight: "#382a5d",
        ["snippet-header"]: "#504265",
        ["scrollbar-thumb"]: "#9d8bca30",
        ["scrollbar-thumb-hover"]: "#9d8bca50",
        ["neutral-primary"]: "#ffffff0d",
      },
    },
  },
  plugins: [],
}
