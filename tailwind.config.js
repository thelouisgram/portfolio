/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sans: ["DM Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"]
      },
      colors: {
        
      },
      height: {
        "screen-16": "calc(100vh - 80px)",
      },
    },
    screens: {
      xs: "375px",
      ss: "620px",
      sm: "768px",
      md: "1200px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
};
