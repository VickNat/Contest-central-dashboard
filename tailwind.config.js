/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#E9EDFA",
        textGray: "#666666",
        numGray: "#6C6C77",
        background: "#F6F6F9",
        customGreen: "#E9F7EF",
        customYellow: "#FFDE9B",
        bgBlue: "#B6C6FE",
        grayBox: "#D9DADB",
        tablebg: "rgba(217, 226, 255, 0.22)",
        gold: "#E4BA2D",
        silver: "#A0A7B1",
        bronze: "#B96C4E",
        stone: "#666666",
      },
    },
  },
  plugins: [],
};
