/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "#304ffe",
        secondBlue: "#304ffe58",
        mainWhite: "#fff",
        gray: "#808080",
        silver: "#c0c0c0",
        red: "#db0505",
        secondRed: "#db050529",
        green: "#00a800",
        lightBlue: "#bbdefb",
      },
      boxShadow: {
        custom: "0px 4px 15px #304ffe4a",
      },
    },
  },
  plugins: [],
};
